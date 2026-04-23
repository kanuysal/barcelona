import { useMemo, useState, useEffect } from "react";
import { useFrame } from "@react-three/fiber";
import { CONFIG } from "./gridConfig";
import { EMPTY_COLORS, matchesFilter, calculateGridDimensions } from "./gridState";
import { ShoeTile } from "./ShoeTile";

// --- OPTIMIZED COMPONENT: GRID CANVAS ---
// Renders a single set of items with Time-Sliced mounting
export function GridCanvas({
    items,
    gridVisible,
    transitionStartTime,
    interactive,
    category = "Tümü",
    color = "Tümü",
    modesty = "Tümü",
    search = ""
}) {
    // Calculate filtered items and their new positions
    const { mappedItems, filteredGridDims } = useMemo(() => {
        const spacing = CONFIG.itemSize + CONFIG.gap;

        // 1. Determine matches and calculate filtered positions
        const filteredItems = items.filter((item) =>
            matchesFilter(item, category, color, modesty, search)
        );
        const filteredCount = filteredItems.length;
        const filteredDims = calculateGridDimensions(filteredCount);

        // 2. Map items with metadata and initial sorting weight
        const maxDelay = gridVisible ? CONFIG.enterStaggerDelay : CONFIG.exitStaggerDelay;
        const processed = items.map((itemObj, i) => {
            const matches = matchesFilter(itemObj, category, color, modesty, search);
            return {
                ...itemObj,
                originalIndex: i,
                matchesFilter: matches,
                randomDelay: Math.random() * maxDelay,
            };
        });

        // 3. SORT: Matches first, then non-matches.
        // This ensures Stage 1 (matching items) are the first in the DOM/loop
        processed.sort((a, b) => {
            if (a.matchesFilter && !b.matchesFilter) return -1;
            if (!a.matchesFilter && b.matchesFilter) return 1;
            return a.originalIndex - b.originalIndex;
        });

        // 4. Final mapping with stable positions
        let filteredIdx = 0;
        const mapped = processed.map((item, i) => {
            let targetPos;
            if (item.matchesFilter) {
                const col = filteredIdx % CONFIG.gridCols;
                const row = Math.floor(filteredIdx / CONFIG.gridCols);
                targetPos = {
                    x: col * spacing - filteredDims.width / 2 + spacing / 2,
                    y: -(row * spacing) + filteredDims.height / 2 - spacing / 2,
                };
                filteredIdx++;
            } else {
                // Non-matches get dummy positions (they are hidden anyway)
                const col = i % CONFIG.gridCols;
                const row = Math.floor(i / CONFIG.gridCols);
                const originalDims = calculateGridDimensions(items.length);
                targetPos = {
                    x: col * spacing - originalDims.width / 2 + spacing / 2,
                    y: -(row * spacing) + originalDims.height / 2 - spacing / 2,
                };
            }
            return { ...item, basePos: targetPos, renderIndex: i };
        });

        return {
            mappedItems: mapped,
            filteredGridDims: filteredDims,
        };
    }, [items, category, color, modesty, search, gridVisible]);
    // --- TIME-SLICED MOUNTING ---
    // Start with 0 items rendered for entering grids.
    // Every frame, add more items to prevent GPU texture upload spike.
    // If EXITING, render everything immediately (no need to stagger out).
    // --- STAGED RENDERING ---
    // Stage 1: Items matching the filter
    // Stage 2: Everything else (deferred)
    const [stage, setStage] = useState(1);

    useEffect(() => {
        // Reset mounting and prioritize stage 1 on every significant filter change
        setStage(1);
        setMountedCount(0);

        // Stage 2: Allow rendering of de-prioritized items after 8 seconds
        const timer = setTimeout(() => {
            setStage(2);
        }, 8000);
        return () => clearTimeout(timer);
    }, [category, search]);

    const [mountedCount, setMountedCount] = useState(0);
    useFrame(() => {
        if (mountedCount < mappedItems.length) {
            // Mounting throttle: slower for stage 1 to prioritize frame stability
            const increment = stage === 2 ? 10 : 3;
            setMountedCount((prev) => Math.min(prev + increment, mappedItems.length));
        }
    });
    return (
        <>
            {mappedItems.map((item, i) => {
                // STAGE-BASED RENDERING: 
                // Stage 1: Only render items that match the current filter
                // Stage 2: Render everything
                if (stage === 1 && !item.matchesFilter) return null;

                // Only render if within the mounted count (time-sliced mounting)
                if (i > mountedCount) return null;
                return (
                    <ShoeTile
                        key={item.id}
                        data={item}
                        index={item.originalIndex}
                        basePos={item.basePos}
                        gridVisible={gridVisible}
                        transitionStartTime={transitionStartTime}
                        interactive={interactive && item.matchesFilter}
                        matchesFilter={item.matchesFilter}
                        gridHeight={filteredGridDims.height}
                    />
                );
            })}
        </>
    );
}
