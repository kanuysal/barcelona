import React, { useRef, useMemo } from "react";
import { useFrame, useThree } from "@react-three/fiber";
import * as THREE from "three";
import { topographyVert, topographyFrag } from "./shaders";

export function TopologyBackground({ 
    isZoomedIn, 
    color = "#e0e0e0", 
    opacity = 0.4, 
    speed = 0.05, 
    scale = 3.0, 
    lineThickness = 0.03 
}) {
    const meshRef = useRef();
    const { size } = useThree();

    const uniforms = useMemo(() => ({
        uTime: { value: 0 },
        uColor: { value: new THREE.Color(color) },
        uResolution: { value: new THREE.Vector2(size.width, size.height) },
        uOpacity: { value: opacity },
        uLineOpacity: { value: 0.8 },
        uScale: { value: scale },
        uLineThickness: { value: lineThickness },
    }), []);

    // Sync resolution on resize
    useFrame((state) => {
        if (!meshRef.current) return;
        meshRef.current.material.uniforms.uTime.value = state.clock.elapsedTime * speed * 10.0;
        meshRef.current.material.uniforms.uResolution.value.set(size.width, size.height);
        
        // Dynamic opacity based on zoom
        const targetLineOpacity = isZoomedIn ? 0.3 : 0.8;
        meshRef.current.material.uniforms.uLineOpacity.value = THREE.MathUtils.lerp(
            meshRef.current.material.uniforms.uLineOpacity.value,
            targetLineOpacity,
            0.05
        );
    });

    return (
        <mesh ref={meshRef} position={[0, 0, -10]}>
            <planeGeometry args={[100, 100]} />
            <shaderMaterial
                transparent={true}
                depthWrite={false}
                uniforms={uniforms}
                vertexShader={topographyVert}
                fragmentShader={topographyFrag}
            />
        </mesh>
    );
}
