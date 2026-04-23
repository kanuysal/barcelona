import React, { useMemo, useState, useEffect, useRef } from "react";
import { Canvas } from "@react-three/fiber";
import * as THREE from "three";
import { DEFAULT_CONFIG, CONFIG } from "./gridConfig";
import { rigState, calculateGridDimensions, resetRigState } from "./gridState";
import { Rig } from "./Rig";
import { LookbookCanvas } from "./LookbookCanvas";
import { TopologyBackground } from "./TopologyBackground";
import { MiniMap } from "./MiniMap";
import items from "../../data/lookbook.json";
import { ui } from "../../i18n/ui";

export default function LookbookGrid({ lang = "tr" }) {
    const t = (key) => ui[lang][key] || ui["tr"][key] || key;
    const [currentZoom, setCurrentZoom] = useState(rigState.zoom);
    const [activeId, setActiveId] = useState(null);

    useEffect(() => {
        resetRigState();
        
        const interval = setInterval(() => {
            setCurrentZoom(rigState.zoom);
            setActiveId(rigState.activeId);
        }, 32); 
        return () => {
            clearInterval(interval);
        };
    }, []);

    const isZoomedIn = currentZoom <= CONFIG.zoomIn + 0.5;

    // Use a fixed start time for the entrance animation on mount
    const [startTime] = useState(Date.now());

    const activeDims = calculateGridDimensions(items.length);

    const handleReset = () => {
        rigState.zoom = CONFIG.zoomOut;
        rigState.target.set(0, 0, 0);
        rigState.activeId = null;
    };

    return (
        <div className="lookbook-container">
            <Canvas
                camera={{ position: [0, 0, CONFIG.zoomOut], fov: 45 }}
                dpr={[1, 2]}
                gl={{
                    antialias: true,
                    toneMapping: THREE.NoToneMapping,
                }}
            >
                <Rig gridW={activeDims.width} gridH={activeDims.height} />
                
                <TopologyBackground
                    isZoomedIn={isZoomedIn}
                    color="#ffffff"
                    opacity={0.3}
                />

                <fog attach="fog" args={["#ffffff", CONFIG.fogNear, CONFIG.fogFar]} />

                <LookbookCanvas
                    items={items}
                    gridVisible={true}
                    transitionStartTime={startTime}
                    interactive={true}
                />
            </Canvas>
            
            <MiniMap
                gridDims={activeDims}
                rigState={rigState}
                config={CONFIG}
                totalItems={items.length}
                isZoomedIn={isZoomedIn}
            />

            <div className="lookbook-controls">
                <button 
                  onClick={handleReset}
                  className={`reset-btn ${activeId !== null || isZoomedIn ? 'visible' : ''}`}
                >
                  {t('lookbook.back')}
                </button>
                <div className="collection-info">
                    <span className="count">{items.length}</span>
                    <span className="label">{t('lookbook.count')}</span>
                </div>
            </div>

            <style dangerouslySetInnerHTML={{ __html: `
                .lookbook-container {
                    width: 100vw;
                    height: 100vh;
                    background: #ffffff;
                    position: relative;
                    overflow: hidden;
                    touch-action: none;
                }
                .lookbook-controls {
                    position: absolute;
                    bottom: 40px;
                    left: 50%;
                    transform: translateX(-50%);
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    gap: 15px;
                    pointer-events: none;
                    z-index: 100;
                }
                .lookbook-controls * {
                    pointer-events: auto;
                }
                .reset-btn {
                    padding: 12px 24px;
                    background: #000;
                    color: #fff;
                    border: none;
                    border-radius: 30px;
                    font-family: 'Cinzel', serif;
                    font-size: 13px;
                    letter-spacing: 0.1em;
                    cursor: pointer;
                    opacity: 0;
                    transform: translateY(20px);
                    transition: all 0.5s cubic-bezier(0.19, 1, 0.22, 1);
                }
                .reset-btn.visible {
                    opacity: 1;
                    transform: translateY(0);
                }
                .collection-info {
                    display: flex;
                    align-items: center;
                    gap: 10px;
                    background: rgba(255,255,255,0.8);
                    backdrop-filter: blur(10px);
                    padding: 8px 16px;
                    border-radius: 20px;
                    border: 1px solid rgba(0,0,0,0.05);
                }
                .collection-info .count {
                    font-family: 'Cinzel', serif;
                    font-weight: bold;
                    font-size: 16px;
                }
                .collection-info .label {
                    font-family: 'Cinzel', serif;
                    font-size: 11px;
                    letter-spacing: 0.1em;
                    text-transform: uppercase;
                    opacity: 0.6;
                }
            `}} />
        </div>
    );
}
