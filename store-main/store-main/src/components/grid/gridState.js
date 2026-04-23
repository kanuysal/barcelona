import * as THREE from "three";
import { CONFIG } from "./gridConfig";

// --- GLOBAL STATE ---
export const rigState = {
    target: new THREE.Vector3(0, 2, 0),
    current: new THREE.Vector3(0, 2, 0),
    velocity: new THREE.Vector3(0, 0, 0),
    zoom: CONFIG.zoomOut,
    isDragging: false,
    activeId: null,
};

// --- HELPER: Grid Dimensions ---
export const calculateGridDimensions = (count) => {
    const rows = Math.ceil(count / CONFIG.gridCols);
    const spacing = CONFIG.itemSize + CONFIG.gap;
    return {
        width: CONFIG.gridCols * spacing,
        height: rows * spacing,
    };
};

// Stable empty array to avoid unnecessary re-renders
export const EMPTY_COLORS = [];

// --- HELPER: Check if item matches filter ---
export const matchesFilter = (item, category, color, modesty, search) => {
    let matchesCat = true;
    if (category !== "Tümü") {
        const titleLower = (item.title || "").toLowerCase();
        const brand = item.brand || "";
        const isOutlet = titleLower.includes("outlet");

        // Rule: Outlet items ONLY show in Outlet category
        if (category === "OUTLET") {
            matchesCat = isOutlet;
        } else if (isOutlet) {
            // If it's outlet but we are looking at another category, exclude it
            matchesCat = false;
        } else if (category === "Büyük Beden") {
            matchesCat = titleLower.includes("plus");
        } else if (category === "Söz Elbisesi") {
            matchesCat = titleLower.includes("söz") || (brand === "Abiye" && titleLower.includes("söz"));
        } else if (category === "Nikah Elbisesi") {
            matchesCat = titleLower.includes("nikah") || (brand === "Abiye" && titleLower.includes("nikah"));
        } else if (brand === "Diğer") {
            // If item is tagged as "Diğer", check if title matches category keyword (e.g. "Gelinlik", "Nişan", "Kına")
            const categoryKeyword = category.split(" ")[0].toLowerCase(); // e.g. "Gelinlik", "Tesettür", "Nişan", "Kına"
            matchesCat = titleLower.includes(categoryKeyword);
        } else {
            matchesCat = brand === category;
        }
    }

    let matchesColor = true;
    if (color !== "Tümü") {
        matchesColor = item.primary_color === color;
    }

    let matchesModesty = true;
    if (modesty !== "Tümü") {
        matchesModesty = item.modesty === modesty;
    }

    let matchesSearch = true;
    if (search && search.trim() !== "") {
        const term = search.toLowerCase();
        matchesSearch = (item.title || "").toLowerCase().includes(term);
    }

    return matchesCat && matchesColor && matchesModesty && matchesSearch;
};
