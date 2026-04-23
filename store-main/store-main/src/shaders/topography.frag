uniform float uTime;
uniform vec3 uColor;
uniform vec2 uResolution;
uniform float uOpacity;
uniform float uLineOpacity;
uniform float uScale;
varying vec2 vUv;

// Advanced Pseudo-noise with more character
float hash(vec2 p) {
    p = fract(p * vec2(123.34, 456.21));
    p += dot(p, p + 45.32);
    return fract(p.x * p.y);
}

// Multi-layered noise for "Silky" feel
float fractalNoise(vec2 p) {
    float f = sin(p.x * 1.5 + p.y * 1.0) * 0.5 + 0.5;
    f += sin(p.y * 2.5 - p.x * 1.2) * 0.25;
    f += sin(p.x * 4.0 + p.y * 3.0) * 0.125;
    return f / 0.875;
}

void main() {
  vec2 uv = vUv;
  float aspect = uResolution.x / uResolution.y;
  uv.x *= aspect;

  // 1. SILK WAVES - High Contrast & Depth
  vec2 silkUv = uv * uScale;
  float n1 = fractalNoise(silkUv + vec2(uTime * 0.04, uTime * 0.06));
  float n2 = fractalNoise(silkUv * 0.8 - vec2(uTime * 0.03, uTime * 0.09));
  float silk = sin(n1 * 5.0 - n2 * 3.0 + uTime * 0.1) * 0.5 + 0.5;
  silk = pow(silk, 1.8); // Intensify the shadows of the folds
  silk = smoothstep(0.05, 0.95, silk);

  // 2. ORGANIC SHEEN (Silky Shimmer)
  // Instead of a rhythmic "twinkle", we use multi-frequency sine waves
  // to create irregular, organic peaks of light that catch on the fabric.
  float shimmer = sin(uv.x * 10.0 + uTime * 0.5) * sin(uv.y * 8.0 - uTime * 0.3);
  shimmer += sin(uv.x * 25.0 - uTime * 0.8 + silk * 5.0) * 0.5;
  shimmer = pow(max(0.0, shimmer), 4.0) * 0.6; // Soft peaks
  
  // 3. PEARLY GLIMMERS (Soft & Irregular)
  float grainRow = fract(sin(dot(uv + uTime * 0.05, vec2(12.9898, 78.233))) * 43758.5453);
  float glimmers = pow(grainRow, 35.0) * 3.0;
  
  // Add an organic "wave" to glimmers so they appear and disappear naturally
  float organicMask = sin(uv.x * 5.0 + uTime * 0.2) * cos(uv.y * 4.0 - uTime * 0.15);
  glimmers *= smoothstep(-0.2, 0.5, organicMask);

  // 4. COLOR SYSTEM - High Fashion Palette
  vec3 pearlWhite = vec3(0.98, 0.96, 0.94); 
  vec3 baseColor  = uColor;                
  vec3 accent  = vec3(0.85, 0.68, 0.62);   // Refined Pearl/Rose
  vec3 silkSheen = vec3(1.0, 0.95, 0.9);   // Bright thread highlight
  
  // Combine layers
  vec3 finalColor = mix(accent, pearlWhite, silk);
  finalColor = mix(finalColor, baseColor, 0.4); 
  
  // Add the "Sheen" on top of the silk peaks
  finalColor += silkSheen * shimmer * silk * 0.8;
  
  // Add Pearly Glimmers
  finalColor += pearlWhite * glimmers * (silk * 0.5 + 0.5);

  // 5. MASKING
  vec2 centered = vUv - 0.5;
  centered.x *= aspect;
  float dist = length(centered);
  float mask = smoothstep(1.3, 0.1, dist);

  // Transparency logic
  float alpha = mask * uOpacity * (silk * 0.7 + 0.3 + shimmer * 0.4 + glimmers);
  
  gl_FragColor = vec4(finalColor, alpha * uLineOpacity);
}
