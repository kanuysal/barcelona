import React, {
    useMemo,
    useState,
    useEffect,
    Suspense,
} from "react";
import { Canvas } from "@react-three/fiber";
import { useTexture } from "@react-three/drei";
import * as THREE from "three";
import { Leva } from "leva";
// --- REAL DATA IMPORT ---
import gowns from "../../../backend/gowns.json";
import MiniMap from "../MiniMap";
import { DEFAULT_CONFIG, CONFIG } from "./gridConfig";
import { rigState, calculateGridDimensions, matchesFilter } from "./gridState";
import { useGridConfig } from "./useGridConfig";
import { Rig } from "./Rig";
import { GridCanvas } from "./GridCanvas";
import { UnifiedControlBar } from "../GridUI";
import Header from "../Header";
import { TopologyBackground } from "../TopologyBackground";
import "../HoloCardMaterial"; // Registers <holoCardMaterial /> with R3F

// (Removed texture preloading to prevent app crashes on missing URLs)


// --- MAIN EXPORT ---
export default function ShoeGrid() {
    const [zoomTarget, setZoomTarget] = useState(null);
    const [initialZoom] = useState(DEFAULT_CONFIG.zoomOut);
    const [currentZoom, setCurrentZoom] = useState(
        rigState.zoom
    );
    const controls = useGridConfig();

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentZoom(rigState.zoom);
        }, 50); // Update every 50ms
        return () => clearInterval(interval);
    }, []);

    // Track active selection state
    const [hasActiveSelection, setHasActiveSelection] = useState(false);
    useEffect(() => {
        const interval = setInterval(() => {
            setHasActiveSelection(rigState.activeId !== null);
        }, 16);
        return () => clearInterval(interval);
    }, []);

    const isZoomedIn = currentZoom <= CONFIG.zoomIn + 0.5;

    // Responsive zoom for mobile viewports
    useEffect(() => {
        const updateResponsiveZoom = () => {
            const width = window.innerWidth;
            let newZoomOut;
            if (width < 480) {
                newZoomOut = 38; // Phone (Reduced from 48 to save memory)
            } else if (width < 768) {
                newZoomOut = 38; // Tablet portrait
            } else {
                newZoomOut = DEFAULT_CONFIG.zoomOut; // Desktop default (31)
            }
            CONFIG.zoomOut = newZoomOut;
            if (rigState.zoom > CONFIG.zoomIn + 2) {
                rigState.zoom = newZoomOut;
                setCurrentZoom(newZoomOut);
            }
        };
        updateResponsiveZoom();
        window.addEventListener("resize", updateResponsiveZoom);
        return () => window.removeEventListener("resize", updateResponsiveZoom);
    }, []);

    // Filter state for Gowns collection
    const [categoryFilter, setCategoryFilter] = useState("Gelinlik");
    const [colorFilter, setColorFilter] = useState("Tümü");
    const [modestyFilter, setModestyFilter] = useState("Tümü");
    const [searchTerm, setSearchTerm] = useState("");


    // We only have one "layer" now, no tabs. But we keep the structure for compatibility.
    const [gridLayers] = useState([
        {
            id: "init",
            items: gowns,
            mode: "enter",
            startTime: 0,
        },
    ]);

    const handleCategoryChange = (val) => {
        setCategoryFilter(val);
        rigState.activeId = null;
    };

    const handleColorChange = (val) => {
        setColorFilter(val);
        rigState.activeId = null;
    };

    const handleModestyChange = (val) => {
        setModestyFilter(val);
        rigState.activeId = null;
    };

    useEffect(() => {
        if (zoomTarget === "OUT") {
            rigState.zoom = CONFIG.zoomOut;
            setCurrentZoom(CONFIG.zoomOut);
            rigState.target.set(0, 2, 0);
        } else if (typeof zoomTarget === "number") {
            rigState.zoom = zoomTarget;
            setCurrentZoom(zoomTarget);
        }
        setZoomTarget(null);
    }, [zoomTarget]);

    const activeLayer = gridLayers[0];

    // Calculate filtered item count
    const filteredItemCount = useMemo(() => {
        return activeLayer.items.filter((item) =>
            matchesFilter(item, categoryFilter, colorFilter, modestyFilter, searchTerm)
        ).length;
    }, [activeLayer.items, categoryFilter, colorFilter, modestyFilter, searchTerm]);

    const activeDims = calculateGridDimensions(filteredItemCount);

    return (
        <div
            style={{
                width: "100vw",
                height: "100vh",
                backgroundColor: "var(--bg-primary, #ffffff)", // Light bridal aesthetic
                position: "relative",
                overflow: "hidden",
                touchAction: "none",
            }}
        >
            <Leva collapsed={true} hidden={true} />
            <Header
                searchTerm={searchTerm}
                setSearchTerm={(term) => {
                    setSearchTerm(term);
                    if (term.trim() !== "") {
                        setCategoryFilter("Tümü");
                    }
                }}
            />
            <Canvas
                camera={{ position: [0, 0, initialZoom], fov: 45 }}
                dpr={[1, 2]}
                gl={{
                    antialias: true,
                    toneMapping: THREE.NoToneMapping,
                }}
            >
                <Rig
                    gridW={activeDims.width}
                    gridH={activeDims.height}
                />

                <TopologyBackground
                    isZoomedIn={isZoomedIn}
                    color={CONFIG.bgColor}
                    opacity={CONFIG.bgOpacity}
                    speed={CONFIG.bgSpeed}
                    scale={CONFIG.bgScale}
                    lineThickness={CONFIG.bgLineThickness}
                />

                <fog
                    attach="fog"
                    args={[
                        "#ffffff",
                        controls?.fogNear ?? DEFAULT_CONFIG.fogNear,
                        controls?.fogFar ?? DEFAULT_CONFIG.fogFar,
                    ]}
                />

                <Suspense fallback={null}>
                    {gridLayers.map((layer) => (
                        <GridCanvas
                            key={layer.id}
                            items={layer.items}
                            gridVisible={true}
                            transitionStartTime={layer.startTime}
                            interactive={true}
                            category={categoryFilter}
                            color={colorFilter}
                            modesty={modestyFilter}
                            search={searchTerm}
                        />
                    ))}
                </Suspense>
            </Canvas>
            <MiniMap
                gridDims={activeDims}
                rigState={rigState}
                config={CONFIG}
                totalItems={filteredItemCount}
                isZoomedIn={isZoomedIn}
            />
            <UnifiedControlBar
                setZoomTrigger={setZoomTarget}
                isZoomedIn={isZoomedIn}
                hasActiveSelection={hasActiveSelection}
                categoryFilter={categoryFilter}
                colorFilter={colorFilter}
                modestyFilter={modestyFilter}
                onCategoryChange={handleCategoryChange}
                onColorChange={handleColorChange}
                onModestyChange={handleModestyChange}
            />
        </div>
    );
}
