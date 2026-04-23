import React, { useMemo, useState, useEffect } from "react";
import { useFrame } from "@react-three/fiber";
import { CONFIG } from "./gridConfig";
import { matchesFilter, calculateGridDimensions } from "./gridState";
import { LookbookTile } from "./LookbookTile";

export function LookbookCanvas({
    items,
    gridVisible,
    transitionStartTime,
    interactive,
    filter = "all",
}) {
    const { mappedItems, filteredGridDims } = useMemo(() => {
        const spacing = CONFIG.itemSize + CONFIG.gap;
        const filteredItems = items.filter((item) => matchesFilter(item, filter));
        const filteredCount = filteredItems.length;
        const filteredDims = calculateGridDimensions(filteredCount);
        
        const maxStagger = gridVisible ? CONFIG.enterStaggerDelay : CONFIG.exitStaggerDelay;
        let filteredIdx = 0;

        const mapped = items.map((item, i) => {
            const matches = matchesFilter(item, filter);
            let targetPos;

            if (matches) {
                const col = filteredIdx % CONFIG.gridCols;
                const row = Math.floor(filteredIdx / CONFIG.gridCols);
                targetPos = {
                    x: col * spacing - filteredDims.width / 2 + spacing / 2,
                    y: -(row * spacing) + filteredDims.height / 2 - spacing / 2,
                };
                filteredIdx++;
            } else {
                // Just keep original position if not matched (it will fade out)
                const col = i % CONFIG.gridCols;
                const row = Math.floor(i / CONFIG.gridCols);
                const originalDims = calculateGridDimensions(items.length);
                targetPos = {
                    x: col * spacing - originalDims.width / 2 + spacing / 2,
                    y: -(row * spacing) + originalDims.height / 2 - spacing / 2,
                };
            }

            return {
                ...item,
                index: i,
                basePos: targetPos,
                matchesFilter: matches,
            };
        });

        return {
            mappedItems: mapped,
            filteredGridDims: filteredDims,
        };
    }, [items, filter, gridVisible]);

    const [animStartTime, setAnimStartTime] = useState(Date.now());
    useEffect(() => {
        setAnimStartTime(Date.now());
    }, []);

    return (
        <>
            {mappedItems.map((item, i) => {
                return (
                    <LookbookTile
                        key={item.product_url}
                        data={item}
                        index={i}
                        basePos={item.basePos}
                        gridVisible={gridVisible}
                        transitionStartTime={animStartTime}
                        interactive={interactive && item.matchesFilter}
                        matchesFilter={item.matchesFilter}
                        gridHeight={filteredGridDims.height}
                    />
                );
            })}
        </>
    );
}
