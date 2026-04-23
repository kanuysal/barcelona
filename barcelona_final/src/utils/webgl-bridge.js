/**
 * webgl-bridge.js - Absolute Deduplication Version
 * 
 * This utility ensures that new Astro components share the SAME instances of 
 * THREE and GSAP as the legacy layout engine, preventing conflicts.
 */

export const waitForGlobals = () => {
    return new Promise((resolve) => {
        const check = () => {
            if (window.THREE && window.gsap && window.gsap.utils) {
                // Ensure ScrollTrigger is available (usually bundled in layout-engine.js)
                // If not, we might need a fallback, but the legacy engine uses it.
                resolve({ THREE: window.THREE, gsap: window.gsap });
            } else {
                requestAnimationFrame(check);
            }
        };
        check();
    });
};

// Proxies to avoid build-time errors while ensuring run-time global usage
export const getTHREE = () => window.THREE;
export const getGSAP = () => window.gsap;
