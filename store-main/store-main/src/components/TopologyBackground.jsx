import React, { useRef } from "react";
import { useFrame, extend } from "@react-three/fiber";
import { shaderMaterial, Plane } from "@react-three/drei";
import * as THREE from "three";
import { easing } from "maath";
import vertexShader from "@/shaders/topography.vert";
import fragmentShader from "@/shaders/topography.frag";

// --- 1. SHADER: FLUID TOPOGRAPHY ---
const TopographyMaterial = shaderMaterial(
  {
    uTime: 0,
    uColor: new THREE.Color("#e0e0e0"),
    uResolution: new THREE.Vector2(1, 1),
    uOpacity: 1.0,
    uLineOpacity: 0.4,
    uScale: 3.0,
    uLineThickness: 0.03,
  },
  vertexShader,
  fragmentShader
);

extend({ TopographyMaterial });

export function TopologyBackground({
  isZoomedIn = false,
  quality = 1,
  color = "#ffffff", // Use white as base for the accent to pop
  opacity = 0.55,
  speed = 0.06,      // Slower for zarafet (was 0.12)
  scale = 4.0,      // Slightly larger waves
  lineThickness = 0.04,
}) {
  const materialRef = useRef();

  // Fixed world-space dimensions (doesn't change with camera zoom)
  const planeWidth = 90;
  const planeHeight = 40;

  useFrame((_, delta) => {
    if (!materialRef.current) return;

    materialRef.current.uTime += delta * (speed / 0.08); // Normalize speed
    materialRef.current.uResolution.set(planeWidth, planeHeight);
    materialRef.current.uColor.set(color);
    materialRef.current.uLineOpacity = opacity; // This acts as a global multiplier for visibility
    materialRef.current.uScale = scale;

    // Tween opacity based on zoom state
    const targetOpacity = isZoomedIn ? 0.35 : 1.0;
    easing.damp(materialRef.current, "uOpacity", targetOpacity, 0.3, delta);
  });

  // Low quality mode: render simple solid color plane (no shader)
  if (quality < 0.5) {
    return (
      <Plane args={[planeWidth, planeHeight]} position={[0, 0, -15]} renderOrder={-1}>
        <meshBasicMaterial color="#e8e8e8" />
      </Plane>
    );
  }

  return (
    // Pass the calculated Width/Height to the geometry
    <Plane args={[planeWidth, planeHeight]} position={[0, 0, -15]} renderOrder={-1}>
      <topographyMaterial
        ref={materialRef}
        transparent
        depthWrite={false}
      />
    </Plane>
  );
}