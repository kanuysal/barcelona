import { waitForGlobals } from '../../utils/webgl-bridge';
import { MiniComposer as EffectComposer, MiniRenderPass as RenderPass, MiniShaderPass as ShaderPass } from '../../utils/mini-composer';
import webglManager from '../../utils/webgl-manager';

// We store globals in a module-level variable after waiting
let THREE, gsap, ScrollTrigger;

// ---------------------------------------------------------
// 1:1 SHADERS FROM SOURCE
// ---------------------------------------------------------
const vertexShader = `
  varying vec2 vUv;
  varying vec2 v_offset;
  uniform vec2 u_offset;

  float PI = 3.1415926535897932384626433832795;

  vec3 curve(vec3 position, vec2 uv, vec2 offset) {
    position.x = position.x + (sin(uv.y * PI) * offset.x);
    position.y = position.y + (sin(uv.x * PI) * offset.y);
    // Reverse depth: edges closer, center further (inside of a sphere)
    position.z = position.z - (cos(uv.x * PI) * cos(uv.y * PI) * 30.0); // Static concave base
    position.z = position.z + (cos(uv.x * PI) * cos(uv.y * PI) * abs(offset.y) * 50.0); // Dynamic reaction
    return position;
  }

  void main() {
    vUv = uv;
    v_offset = u_offset;
    vec3 newPos = curve(position, uv, u_offset * 25.5);
    gl_Position = projectionMatrix * modelViewMatrix * vec4(newPos, 1.0);
  }
`;

const fragmentShader = `
  precision highp float;

  uniform sampler2D u_texture;
  uniform float u_alpha;
  uniform vec2 u_resolution;
  uniform vec2 u_planeSize;
  uniform vec2 u_imageSize;
  uniform float u_time;
  uniform float u_imageScale;
  uniform float u_imageOffsetX;
  uniform float u_imageOffsetY;
  uniform float u_blackFilter; 

  varying vec2 vUv;

  vec2 imageAspect(vec2 planeSize, vec2 ImageSize, vec2 p) {
    vec2 ratio = vec2(
      min((planeSize.x / planeSize.y) / (ImageSize.x / ImageSize.y), 1.0),
      min((planeSize.y / planeSize.x) / (ImageSize.y / ImageSize.x), 1.0)
    );
    return vec2(
      (p.x - 0.5) * ratio.x + 0.5,
      (p.y - 0.5) * ratio.y + 0.5
    );
  }

  void main() {
    vec2 uv = imageAspect(u_planeSize, u_imageSize, vUv);
    uv = (uv - vec2(0.5)) / u_imageScale + vec2(0.5);
    uv.x -= u_imageOffsetX;
    uv.y -= u_imageOffsetY;
    
    vec4 texColor = texture2D(u_texture, uv);
    texColor.rgb *= u_blackFilter;
    
    gl_FragColor = texColor;
  }
`;

// ---------------------------------------------------------
// FISHEYE PASS SHADER (The "Magic" from source)
// ---------------------------------------------------------
const FisheyeShader = {
    uniforms: {
        tDiffuse: { value: null },
        u_strength: { value: -0.05 }, // Negative for "reverse fisheye" / pincushion
        u_aspect: { value: window.innerWidth / window.innerHeight },
        u_scrollSpeed: { value: 0.0 }
    },
    vertexShader: `
        varying vec2 vUv;
        void main() {
            vUv = uv;
            gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
        }
    `,
    fragmentShader: `
        uniform sampler2D tDiffuse;
        uniform float u_strength;
        uniform float u_aspect;
        uniform float u_scrollSpeed;
        varying vec2 vUv;

        void main() {
            vec2 uv = vUv * 2.0 - 1.0;
            uv.x *= u_aspect;

            float r = length(uv);

            // Vignette calculation
            float vignette = smoothstep(1.2, 0.5, r); // Dark blur edges
            
            // Pincushion Distortion (Inside sphere)
            float distortion = 1.0 + u_strength * r * r;
            vec2 distortedUv = uv / distortion;

            distortedUv.x /= u_aspect;
            distortedUv = distortedUv * 0.5 + 0.5;

            // Chromatic Aberration & Radial Blur (IOR Prism effect)
            float t = clamp(r / 1.0, 0.0, 1.0);
            float t2 = t * t * t; // More aggressive at edges

            vec2 radialDir = r > 0.001 ? normalize(uv) : vec2(0.0);
            vec2 radialDirNorm = vec2(radialDir.x / u_aspect, radialDir.y);

            // Boost effect based on scroll speed + base edge blur
            float caAmount = (0.005 + abs(u_scrollSpeed) * 0.008) * t2;
            vec2 blurStep = radialDirNorm * (0.008 + abs(u_scrollSpeed) * 0.015) * t2;

            float rSum = 0.0, gSum = 0.0, bSum = 0.0, aSum = 0.0;
            for (int i = -2; i <= 2; i++) {
                float fi = float(i) / 2.0;
                vec2 offset = blurStep * fi;
                rSum += texture2D(tDiffuse, distortedUv + radialDirNorm * caAmount + offset).r;
                gSum += texture2D(tDiffuse, distortedUv + offset).g;
                bSum += texture2D(tDiffuse, distortedUv - radialDirNorm * caAmount + offset).b;
                aSum += texture2D(tDiffuse, distortedUv + offset).a;
            }

            vec3 finalCol = vec3(rSum / 5.0, gSum / 5.0, bSum / 5.0);
            // Apply White Vignette (Halo effect)
            finalCol = mix(vec3(0.95), finalCol, vignette);

            gl_FragColor = vec4(finalCol, 1.0);
        }
    `
};

class Stage {
    constructor() {
        this.width = window.innerWidth;
        this.height = window.innerHeight;
    }

    async _init() {
        this.renderer = new THREE.WebGLRenderer({ antialias: false, alpha: false });
        this.renderer.setClearColor(0xffffff, 1);
        this.renderer.setSize(this.width, this.height);
        this.renderer.setPixelRatio(1); 
        
        this.canvasContainer = document.querySelector("#showcase");
        if (this.canvasContainer) this.canvasContainer.appendChild(this.renderer.domElement);

        this.scene = new THREE.Scene();
        this.camera = new THREE.OrthographicCamera(
            -this.width / 2, this.width / 2,
            this.height / 2, -this.height / 2,
            0.1, 10000
        );
        this.camera.position.z = 100;

        // Post Processing Setup
        this.composer = new EffectComposer(this.renderer);
        this.composer.addPass(new RenderPass(this.scene, this.camera));
        
        this.fisheyePass = new ShaderPass(FisheyeShader);
        this.composer.addPass(this.fisheyePass);
    }

    onUpdate() {
        this.composer.render();
    }

    onResize() {
        if (!this.renderer) return;
        this.width = window.innerWidth;
        this.height = window.innerHeight;
        this.renderer.setSize(this.width, this.height);
        this.composer.setSize(this.width, this.height);
        this.camera.left = -this.width / 2;
        this.camera.right = this.width / 2;
        this.camera.top = this.height / 2;
        this.camera.bottom = -this.height / 2;
        this.camera.updateProjectionMatrix();
        this.fisheyePass.uniforms.u_aspect.value = this.width / this.height;
    }
}

class ElementData {
    constructor(mediaElements) {
        this.images = mediaElements;
        this.data = [];
    }
    _init() { this.update(); }
    update() {
        this.data = Array.from(this.images).map(el => {
            const bounds = el.getBoundingClientRect();
            const isVideo = el.tagName.toLowerCase() === 'video';
            return {
                src: el.src,
                el: el,
                isVideo: isVideo,
                width: bounds.width, height: bounds.height,
                top: bounds.top, left: bounds.left,
                naturalWidth: isVideo ? (el.videoWidth || 1920) : (el.naturalWidth || 1920),
                naturalHeight: isVideo ? (el.videoHeight || 1080) : (el.naturalHeight || 1080)
            };
        });
    }
}

class ShowcaseWebGL {
    constructor(stage, elementData) {
        this.stage = stage;
        this.elementData = elementData;
        this.meshes = [];
        this.textures = [];
        this.loader = new THREE.TextureLoader();
        this.previousScroll = window.scrollY;
        this.config = {
            mobile: "ontouchstart" in document.documentElement
        };
        this.curve = { offset: new THREE.Vector2(0, 0), target: new THREE.Vector2(0, 0), lerp: 0.07, strength: 0.00015, max: 0.08 };
    }

    async _init() {
        await Promise.all(this.elementData.data.map((data, i) => new Promise(res => {
            if (data.isVideo) {
                const video = data.el;
                video.load();
                video.play();
                const tex = new THREE.VideoTexture(video);
                tex.minFilter = THREE.LinearFilter;
                tex.magFilter = THREE.LinearFilter;
                this.textures[i] = tex;
                
                if (video.readyState >= 2) {
                    res();
                } else {
                    video.addEventListener('loadeddata', () => {
                        this.elementData.update();
                        res();
                    }, { once: true });
                }
            } else {
                new THREE.TextureLoader().load(data.src, tex => { this.textures[i] = tex; res(); });
            }
        })));
        
        this.textures.forEach((_, i) => {
            const data = this.elementData.data[i];
            const mesh = new THREE.Mesh(
                new THREE.PlaneGeometry(1, 1, 20, 20),
                new THREE.ShaderMaterial({
                    vertexShader, fragmentShader,
                    uniforms: {
                        u_texture: { value: this.textures[i] },
                        u_planeSize: { value: new THREE.Vector2(data.width, data.height) },
                        u_imageSize: { value: new THREE.Vector2(data.naturalWidth, data.naturalHeight) },
                        u_imageScale: { value: 1.5 },
                        u_imageOffsetX: { value: 0 },
                        u_imageOffsetY: { value: 0.15 }, /* Safe bound */
                        u_blackFilter: { value: 1.0 },
                        u_offset: { value: new THREE.Vector2(0, 0) },
                        u_time: { value: 0 }
                    },
                    transparent: true
                })
            );
            mesh.scale.set(data.width, data.height, 1);
            this.updateMeshPos(mesh, data);
            this.meshes.push(mesh);
            this.stage.scene.add(mesh);
        });
        this.scrollAnimation();
    }

    updateMeshPos(mesh, data) {
        // scrollY offset must be subtracted because getBoundingClientRect() returns
        // viewport-relative positions, but Three.js coordinates are absolute-page-relative.
        // Without this, the canvas sticks in the top-left corner after scrolling.
        const scrollY = window.scrollY;
        mesh.position.x = -this.stage.width / 2 + mesh.scale.x / 2 + data.left;
        mesh.position.y = this.stage.height / 2 - mesh.scale.y / 2 - (data.top + scrollY) + scrollY;
    }

    scrollAnimation() {
        this.meshes.forEach((mesh, i) => {
            gsap.to(mesh.material.uniforms.u_imageOffsetY, {
                value: this.config.mobile ? -0.05 : -0.15, /* Safe bound */
                scrollTrigger: {
                    trigger: document.querySelectorAll('.showcase-main__li')[i],
                    start: "top bottom", end: "bottom top", scrub: true
                }
            });
        });
    }

    onUpdate(scrollY) {
        const diff = scrollY - this.previousScroll;
        this.previousScroll = scrollY;
        
        this.curve.target.set(0, -diff * this.curve.strength);
        this.curve.target.clampLength(0, this.curve.max);
        this.curve.offset.lerp(this.curve.target, this.curve.lerp);
        
        if (this.stage.fisheyePass) {
            this.stage.fisheyePass.uniforms.u_scrollSpeed.value = gsap.utils.clamp(-1.0, 1.0, diff / 80.0) * 0.5;
        }

        this.meshes.forEach((mesh, i) => {
            mesh.material.uniforms.u_offset.value.copy(this.curve.offset);
            this.updateMeshPos(mesh, this.elementData.data[i]);
        });
    }
}

export default class ML_HeroSlider {
    constructor() {
        this.container = document.querySelector(".showcase-main");
        const medias = document.querySelectorAll(".showcase-main__image .showcase-media");
        if (!medias.length || !this.container) return;

        this.medias = medias;
        this._isVisible = false;
        this._isInitialized = false;

        this.setupObserver();
    }

    setupObserver() {
        this.observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    if (!this._isInitialized) {
                        this.init();
                    } else if (!this._isVisible) {
                        this.resume();
                    }
                    this._isVisible = true;
                } else {
                    if (this._isInitialized && this._isVisible) {
                        this.pause();
                    }
                    this._isVisible = false;
                }
            });
        }, { rootMargin: "0px" });

        this.observer.observe(this.container);
    }

    async init() {
        if (this._isInitialized) return;
        
        // Wait for global THREE and gsap to be ready from layout-engine.js
        const globals = await waitForGlobals();
        THREE = globals.THREE;
        gsap = globals.gsap;
        ScrollTrigger = window.ScrollTrigger || (gsap ? gsap.plugins.scrollTrigger : null);

        const hasContext = await webglManager.requestContext();
        if (!hasContext) {
            console.warn("ML_HeroSlider: WebGL Context rejected or unavailable.");
            this.handleFallback();
            return;
        }

        try {
            this._isInitialized = true;
            this.stage = new Stage();
            this.elementData = new ElementData(this.medias);
            this.webgl = new ShowcaseWebGL(this.stage, this.elementData);
            this.elementData._init();
            await this.stage._init();
            await this.webgl._init();
            this.setupEvents();
            this.setupTitleSync();
            this.webgl.onUpdate(window.scrollY);
            this.animate();
        } catch (err) {
            console.error("ML_HeroSlider: WebGL Error during initialization:", err);
            this.handleFallback();
            webglManager.releaseContext();
            this._isInitialized = false;
        }
    }

    handleFallback() {
        // Show original images/video instead of canvas
        const canvas = document.querySelector("#showcase canvas");
        if (canvas) canvas.style.display = "none";
        
        this.medias.forEach(el => {
            el.style.opacity = "1";
        });
    }

    setupEvents() {
        window.addEventListener("resize", () => {
            if (!this._isInitialized || !this._isVisible) return;
            this.stage.onResize();
            this.elementData.update();
            this.webgl.meshes.forEach((m, i) => {
                m.scale.set(this.elementData.data[i].width, this.elementData.data[i].height, 1);
                m.material.uniforms.u_planeSize.value.set(this.elementData.data[i].width, this.elementData.data[i].height);
                this.webgl.updateMeshPos(m, this.elementData.data[i]);
            });
        });
        // elementData.update() is now called in animate() loop, not on every scroll event
        // This avoids hundreds of getBoundingClientRect() calls per second
    }

    setupTitleSync() {
        const titleGroup = document.querySelector(".showcase-head__titles-group");
        const pTags = document.querySelectorAll(".showcase-head__titles p");
        if (!titleGroup || !pTags.length) return;

        // Initialize first as active immediately
        pTags[0].classList.add('is-current');

        ScrollTrigger.create({
            trigger: ".showcase-main",
            start: "top top",
            end: "bottom bottom",
            scrub: true,
            onUpdate: (self) => {
                const n = pTags.length;
                const index = Math.min(Math.floor(self.progress * n), n - 1);

                pTags.forEach((p, i) => p.classList.toggle('is-current', i === index));

                const counter = document.querySelector('.showcase-head .current');
                if (counter) counter.textContent = String(index + 1).padStart(2, '0');

                // Scroll titleGroup so active item stays centred
                // Measure the actual rendered height (px) per item
                const activeEl = pTags[index];
                const groupTop = titleGroup.getBoundingClientRect().top;
                const itemTop  = activeEl.getBoundingClientRect().top;
                const itemMid  = activeEl.getBoundingClientRect().height / 2;
                const currentY = parseFloat(gsap.getProperty(titleGroup, "y")) || 0;
                const shift    = (groupTop + currentY - itemTop) - itemMid * 0;
                // Use smooth shift — just centre the active element
                const containerMid = titleGroup.parentElement.getBoundingClientRect().height / 2;
                const relativeTop  = activeEl.offsetTop + activeEl.offsetHeight / 2;
                gsap.set(titleGroup, { y: containerMid - relativeTop });
            }
        });
    }

    pause() {
        // Stop animation loop and optionally dispose renderer if we want to be aggressive
        // For now, let's just stop the RAF to save CPU/GPU. 
        // If we want to free contexts, we must call dispose().
        this._isVisible = false;
        
        if (this.stage && this.stage.renderer) {
            // Aggressive dispose to free WebGL context
            this.stage.renderer.dispose();
            this.stage.renderer.forceContextLoss();
            if (this.stage.renderer.domElement && this.stage.renderer.domElement.parentNode) {
                this.stage.renderer.domElement.parentNode.removeChild(this.stage.renderer.domElement);
            }
            this.stage.renderer = null;
            this._isInitialized = false; // Force re-init next time it's visible
            webglManager.releaseContext();
        }
    }

    resume() {
        this._isVisible = true;
        this.init();
    }

    animate() {
        if (!this._isVisible || !this._isInitialized) return;

        const scrollY = window.scrollY;
        // Only update element positions when scroll has actually changed
        if (scrollY !== this._lastScrollY) {
            this.elementData.update();
            this._lastScrollY = scrollY;
        }
        this.webgl.onUpdate(scrollY);
        this.stage.onUpdate();
        this._raf = requestAnimationFrame(() => this.animate());
    }
}
