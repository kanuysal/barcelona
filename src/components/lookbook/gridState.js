import * as THREE from "three";
import { CONFIG } from "./gridConfig";

export const rigState = {
    target: new THREE.Vector3(0, 0, 0),
    current: new THREE.Vector3(0, 0, 0),
    velocity: new THREE.Vector3(0, 0, 0),
    zoom: CONFIG.zoomOut,
    isDragging: false,
    activeId: null,
};

export const calculateGridDimensions = (count) => {
    const rows = Math.ceil(count / CONFIG.gridCols);
    const spacing = CONFIG.itemSize + CONFIG.gap;
    return {
        width: CONFIG.gridCols * spacing,
        height: rows * spacing,
    };
};

export const EMPTY_COLORS = [];

// Simplified matchesFilter for Lookbook - basically always true unless we add a simple brand filter
export const matchesFilter = (item, filter) => {
    if (filter === "all") return true;
    return item.brand === filter;
};

export const resetRigState = () => {
    rigState.target.set(0, 0, 0);
    rigState.current.set(0, 0, 0);
    rigState.velocity.set(0, 0, 0);
    rigState.zoom = CONFIG.zoomOut;
    rigState.isDragging = false;
    rigState.activeId = null;
};
