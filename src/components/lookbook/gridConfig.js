// --- LOOKBOOK CONFIGURATION ---
export const DEFAULT_CONFIG = {
  gridCols: 6,      // 6 columns for lookbook feel
  itemSize: 2.8,    // slightly larger items
  gap: 0.5,

  // Physics
  dragSpeed: 2.2,
  dampFactor: 0.15,
  tiltFactor: 0.08,
  clickThreshold: 5,
  dragResistance: 0.25,

  // Camera / Zoom
  zoomIn: 10,
  zoomOut: 28, 
  zoomDamp: 0.25,

  // Visuals
  focusScale: 1.4,
  dimScale: 0.6,
  dimOpacity: 0.2,

  // 3D Curvature Effect
  curvatureStrength: 0.04, 
  rotationStrength: 0.02, 

  // Culling
  cullDistance: 15,

  // Minimap
  mapWidth: 100,
  mapDotSize: 2,

  // Fog
  fogNear: 15,
  fogFar: 80,

  // Animation
  enterStartOpacity: 0.0,
  enterStartZ: -40,
  exitEndZ: 25,
  transitionZDamp: 0.3,
  enterOpacityDamp: 0.7,
  exitOpacityDamp: 0.2,
  enterStaggerDelay: 300,
  exitStaggerDelay: 200,
  cleanupTimeout: 600,
  exitSpreadY: 0.6, 
  enterSpreadY: 0.8,
  transitionYDamp: 0.12, 
  filterOpacityDamp: 0.1, 
  filterScaleTarget: 0.7, 

  // Lookbook Aesthetics
  bgColor: "#ffffff",
  bgOpacity: 0.3,
  bgSpeed: 0.04,
  bgScale: 2.5,
  bgLineThickness: 0.02,
};

export let CONFIG = { ...DEFAULT_CONFIG };
Object.assign(CONFIG, DEFAULT_CONFIG);
