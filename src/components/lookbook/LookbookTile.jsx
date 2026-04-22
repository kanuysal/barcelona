import React, { useRef, useMemo, useState, useLayoutEffect, useEffect } from "react";
import { useFrame } from "@react-three/fiber";
import { Text } from "@react-three/drei";
import * as THREE from "three";
import { easing } from "maath";
import { CONFIG } from "./gridConfig";
import { rigState } from "./gridState";
import "./HoloCardMaterial"; 

export function LookbookTile({
    data,
    index,
    basePos,
    gridVisible,
    transitionStartTime,
    interactive,
    matchesFilter = true,
    gridHeight,
}) {
    const ref = useRef();
    const imageRef = useRef();
    const titleRef = useRef();
    
    const [hovered, setHovered] = useState(false);
    
    // --- PROGRESSIVE & LAZY LOADING ---
    const [shouldLoad, setShouldLoad] = useState(matchesFilter);
    const [texture, setTexture] = useState(null);

    useEffect(() => {
        if (!shouldLoad || !data.image_url || texture) return;
        const loader = new THREE.TextureLoader();
        loader.load(
            data.image_url,
            (tex) => {
                tex.needsUpdate = true;
                if (tex.image && tex.image.height > 0) {
                    setTexture(tex);
                } else if (tex.image) {
                    tex.image.onload = () => {
                        tex.needsUpdate = true;
                        setTexture(tex);
                    };
                }
            },
            undefined,
            () => {
                const blank = new THREE.DataTexture(new Uint8Array([255, 255, 255, 0]), 1, 1, THREE.RGBAFormat);
                blank.needsUpdate = true;
                setTexture(blank);
            }
        );
    }, [shouldLoad, data.image_url, texture]);

    // Cleanup
    useEffect(() => {
        return () => {
            if (texture) {
                texture.dispose();
                setTexture(null);
            }
        };
    }, []);
    
    // Animation Refs
    const focusZ = useRef(0);
    const rotationX = useRef(0);
    const rotationY = useRef(0);
    const curveZ = useRef(0);
    const transitionZ = useRef(0);
    const transitionY = useRef(0);
    const filterOpacity = useRef(1);
    const filterScale = useRef(1);
    const isSleep = useRef(false);
    const wasDimmedByFocus = useRef(false);

    useLayoutEffect(() => {
        const normalizedY = gridHeight > 0 ? basePos.y / (gridHeight / 2) : 0;
        if (gridVisible) {
            transitionZ.current = CONFIG.enterStartZ;
            transitionY.current = normalizedY * CONFIG.enterSpreadY;
            if (imageRef.current) imageRef.current.material.uOpacity = CONFIG.enterStartOpacity;
            isSleep.current = false;
        } else {
            transitionZ.current = 0;
            transitionY.current = 0;
            if (imageRef.current) imageRef.current.material.uOpacity = 1;
        }
    }, []);

    const imageDims = useMemo(() => {
        const maxSize = CONFIG.itemSize * 0.9;
        if (!texture || !texture.image || texture.image.height === 0) return { width: maxSize, height: maxSize };
        const imgAspect = texture.image.width / texture.image.height;
        if (!isFinite(imgAspect) || imgAspect <= 0) return { width: maxSize, height: maxSize };
        return imgAspect > 1
            ? { width: maxSize, height: maxSize / imgAspect }
            : { width: maxSize * imgAspect, height: maxSize };
    }, [texture]);

    useFrame((state, delta) => {
        if (!ref.current || isSleep.current) return;

        // Filter Animation
        easing.damp(filterOpacity, "current", matchesFilter ? 1 : 0, CONFIG.filterOpacityDamp, delta);
        easing.damp(filterScale, "current", matchesFilter ? 1 : CONFIG.filterScaleTarget, CONFIG.filterOpacityDamp, delta);

        const actualOpacity = imageRef.current?.material?.uOpacity ?? 1;
        if (actualOpacity < 0.01 && !matchesFilter) {
            ref.current.visible = false;
            return;
        }

        // Stagger Logic
        const now = Date.now();
        const timeSinceTrigger = now - transitionStartTime;
        const staggerDelay = index * 30; // Sequential stagger (30ms per item)
        const canTransition = timeSinceTrigger > staggerDelay;

        // Calculate Targets
        let targetTransitionOpacity = 1.0;
        let targetTransitionZ = 0;
        const normalizedY = gridHeight > 0 ? basePos.y / (gridHeight / 2) : 0;
        let targetTransitionY = 0;

        if (gridVisible) {
            if (canTransition) {
                targetTransitionOpacity = 1.0;
                targetTransitionZ = 0;
                targetTransitionY = 0;
            } else {
                targetTransitionOpacity = CONFIG.enterStartOpacity;
                targetTransitionZ = CONFIG.enterStartZ;
                targetTransitionY = normalizedY * CONFIG.enterSpreadY;
            }
        } else {
            if (canTransition) {
                targetTransitionOpacity = 0.0;
                targetTransitionZ = CONFIG.exitEndZ;
                targetTransitionY = normalizedY * CONFIG.exitSpreadY;
            } else {
                targetTransitionOpacity = 1.0;
                targetTransitionZ = 0;
                targetTransitionY = 0;
            }
        }

        // Position & Culling
        const x = basePos.x + rigState.current.x;
        const y = basePos.y + rigState.current.y;
        const currentCull = CONFIG.cullDistance * (rigState.zoom / 8);
        const isPositionVisible = Math.abs(x) < currentCull && Math.abs(y) < currentCull;

        if (!gridVisible && targetTransitionOpacity < 0.01 && filterOpacity.current < 0.01) {
            ref.current.visible = false;
            isSleep.current = true;
            return;
        }

        if (!isPositionVisible && !(!gridVisible && canTransition)) {
            ref.current.visible = false;
            return;
        }

        // --- LAZY LOADING TRIGGER & UNLOAD ---
        const isActive = rigState.activeId === index;
        if (!shouldLoad) {
            const loadThreshold = currentCull * 1.5;
            if (Math.abs(x) < loadThreshold && Math.abs(y) < loadThreshold) {
                setShouldLoad(true);
            }
        } else {
            // Unload if far away to save memory
            const unloadThreshold = currentCull * 2.5;
            if (!isActive && (Math.abs(x) > unloadThreshold || Math.abs(y) > unloadThreshold)) {
                setShouldLoad(false);
                if (texture) {
                    texture.dispose();
                    setTexture(null);
                }
            }
        }

        ref.current.visible = true;

        // Curvature & Rotation
        const zoomRatio = THREE.MathUtils.clamp((rigState.zoom - CONFIG.zoomIn) / (CONFIG.zoomOut - CONFIG.zoomIn), 0, 1);
        const smoothRatio = easing.cubic.inOut(zoomRatio);
        const distSq = x * x + y * y;
        const dist = Math.sqrt(distSq);
        const targetCurveZ = -distSq * CONFIG.curvatureStrength * smoothRatio;

        let rotX = 0, rotY = 0;
        if (targetTransitionOpacity > 0.1) {
            const rotationIntensity = Math.min(dist * 0.4, 2.0) * smoothRatio;
            rotX = y * CONFIG.curvatureStrength * CONFIG.rotationStrength * rotationIntensity;
            rotY = -x * CONFIG.curvatureStrength * CONFIG.rotationStrength * rotationIntensity;
        }

        // Interaction
        const isFocusMode = rigState.activeId !== null;
        const isHovered = hovered && interactive;
        let interactionScale = 1.0;
        let interactionOpacity = 1.0;
        let targetTextOpacity = 0;
        let targetFocusZ = 0;

        if (isFocusMode) {
            if (isActive) {
                interactionScale = CONFIG.focusScale;
                interactionOpacity = 1.0;
                targetTextOpacity = 1.0;
                targetFocusZ = 2;
            } else {
                interactionScale = CONFIG.dimScale;
                interactionOpacity = CONFIG.dimOpacity;
                targetTextOpacity = 0;
                targetFocusZ = -1;
                wasDimmedByFocus.current = true;
            }
        } else {
            interactionScale = isHovered && !rigState.isDragging ? 1.05 : 1.0;
            targetFocusZ = isHovered && !rigState.isDragging ? 0.8 : 0;
        }

        const finalOpacity = interactionOpacity * targetTransitionOpacity * filterOpacity.current;
        const combinedScale = interactionScale * filterScale.current;

        // Apply
        easing.damp(ref.current.scale, "x", combinedScale, 0.15, delta);
        easing.damp(ref.current.scale, "y", combinedScale, 0.15, delta);
        easing.damp(focusZ, "current", targetFocusZ, 0.2, delta);
        easing.damp(curveZ, "current", targetCurveZ, 0.2, delta);
        easing.damp(transitionZ, "current", targetTransitionZ, CONFIG.transitionZDamp, delta);
        easing.damp(transitionY, "current", targetTransitionY, CONFIG.transitionYDamp, delta);

        ref.current.position.set(x, y + transitionY.current, curveZ.current + focusZ.current + transitionZ.current);
        easing.damp(rotationX, "current", rotX, 0.2, delta);
        easing.damp(rotationY, "current", rotY, 0.2, delta);
        ref.current.rotation.set(rotationX.current, rotationY.current, 0);

        if (imageRef.current) {
            imageRef.current.material.uTime = state.clock.elapsedTime;
            const activeDamp = isActive ? 0.6 : 0.15;
            easing.damp(imageRef.current.material, "uActive", isActive ? 1 : 0, activeDamp, delta);
            easing.damp(imageRef.current.material, "uOpacity", finalOpacity, gridVisible ? CONFIG.enterOpacityDamp/2 : CONFIG.exitOpacityDamp, delta);
        }

        if (gridVisible && titleRef.current) {
            easing.damp(titleRef.current, "fillOpacity", targetTextOpacity, 0.1, delta);
        }
    });

    const handleClick = (e) => {
        if (!interactive) return;
        if (rigState.isDragging) {
            e.stopPropagation();
            return;
        }
        e.stopPropagation();
        if (rigState.activeId === index) {
            rigState.activeId = null;
        } else {
            rigState.target.set(-basePos.x, -basePos.y, 0);
            rigState.activeId = index;
            rigState.zoom = CONFIG.zoomIn;
        }
    };

    return (
        <group ref={ref}>
            <mesh
                onPointerOver={() => setHovered(true)}
                onPointerOut={() => setHovered(false)}
                onClick={handleClick}
            >
                <planeGeometry args={[imageDims.width * 1.1, imageDims.height * 1.1]} />
                <meshBasicMaterial visible={false} />
            </mesh>
            <mesh ref={imageRef}>
                <planeGeometry args={[imageDims.width, imageDims.height, 16, 16]} />
                <holoCardMaterial 
                    transparent={true} 
                    uTexture={texture || new THREE.DataTexture(new Uint8Array([255, 255, 255, 0]), 1, 1, THREE.RGBAFormat)} 
                />
            </mesh>
            {gridVisible && (
                <Text
                    ref={titleRef}
                    position={[0, -(imageDims.height / 2) - 0.25, 0.1]}
                    fontSize={0.12}
                    color="#000"
                    anchorY="top"
                    anchorX="center"
                    maxWidth={2}
                    fillOpacity={0}
                >
                    {data.title}
                </Text>
            )}
        </group>
    );
}
