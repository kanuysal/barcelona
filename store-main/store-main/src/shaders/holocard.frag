uniform sampler2D uTexture;
uniform float uOpacity;
uniform float uActive;
varying vec2 vUv;

void main() {
  vec4 texColor = texture2D(uTexture, vUv);
  vec3 baseColor = texColor.rgb;

  // Brightness boost: lift shadows, prevent muddiness on white BG
  // Gentle exposure lift (+0.08) and contrast curve
  baseColor = pow(baseColor, vec3(0.88)); // Gamma lift = brighter
  baseColor = baseColor * 1.06; // Slight exposure boost

  if (uActive < 0.01) {
    gl_FragColor = vec4(baseColor, texColor.a * uOpacity);
    return;
  }

  // Elegant sheen sweep on selection – rose-gold toned
  float diagonal = (vUv.x * 0.8) + vUv.y;
  float sheenPos = uActive * 2.5;
  float sheenWidth = 0.45;

  float dist = abs(diagonal - sheenPos);
  float intensity = 1.0 - smoothstep(0.0, sheenWidth, dist);
  intensity = pow(intensity, 2.5);

  float sheenFade = 1.0 - smoothstep(0.65, 1.0, uActive);

  // Rose-gold sheen color
  vec3 sheenColor = vec3(0.96, 0.82, 0.75) * intensity * 0.75 * sheenFade;
  vec3 finalColor = baseColor + sheenColor * texColor.a;

  gl_FragColor = vec4(finalColor, texColor.a * uOpacity);
}
