/**
 * astro-components.js - FINAL GLOBAL AUTHORITY VERSION
 * 
 * This file contains ALL logic for WebGL/Animation components,
 * using window.THREE and window.gsap. strictly dependency-free.
 */

(function() {
  // ─── UTILS ───
  window.waitForGlobals = () => {
    return new Promise((resolve) => {
        const check = () => {
            if (window.THREE && window.gsap && window.ScrollTrigger) {
                // Bridge with internal engine's GSAP/ScrollTrigger
                window.gsap.registerPlugin(window.ScrollTrigger);
                
                // Authoritative Watcher (Ensures registration persists)
                if (!window._gsapWatcher) {
                    window._gsapWatcher = setInterval(() => {
                        if (window.gsap && window.ScrollTrigger) {
                            window.gsap.registerPlugin(window.ScrollTrigger);
                        }
                    }, 250);
                }

                // Lenis Sync
                if (window.lenis && !window._lenisSynced) {
                  window.lenis.on('scroll', window.ScrollTrigger.update);
                  window.gsap.ticker.add((t) => {
                    if (window.lenis) window.lenis.raf(t * 1000);
                  });
                  window.gsap.ticker.lagSmoothing(0);
                  window._lenisSynced = true;
                }
                
                resolve({ THREE: window.THREE, gsap: window.gsap, ScrollTrigger: window.ScrollTrigger });
            } else {
                requestAnimationFrame(check);
            }
        };
        check();
    });
  };

  // ─── MINI COMPOSER (Global Sync) ───
  window.MiniComposer = class {
    constructor(renderer) {
      this.renderer = renderer;
      this.passes = [];
    }
    addPass(pass) { this.passes.push(pass); }
    setSize(w, h) {}
    render() {
      this.passes.forEach(pass => {
        if (pass.enabled === false) return;
        pass.render(this.renderer);
      });
    }
  };

  window.MiniRenderPass = class {
    constructor(scene, camera) {
      this.scene = scene;
      this.camera = camera;
      this.enabled = true;
    }
    render(renderer) {
      renderer.setRenderTarget(null);
      renderer.render(this.scene, this.camera);
    }
  };

  window.MiniShaderPass = class {
    constructor(shader) {
      const THREE = window.THREE;
      this.enabled = true;
      this.uniforms = THREE.UniformsUtils.clone(shader.uniforms);
      this.material = new THREE.ShaderMaterial({
        uniforms: this.uniforms,
        vertexShader: shader.vertexShader,
        fragmentShader: shader.fragmentShader
      });
      this.fsQuad = { mesh: new THREE.Mesh(new THREE.PlaneGeometry(2, 2), this.material) };
      this.scene = new THREE.Scene();
      this.camera = new THREE.OrthographicCamera(-1, 1, 1, -1, 0, 1);
      this.scene.add(this.fsQuad.mesh);
    }
    render(renderer) {
      renderer.setRenderTarget(null);
      renderer.render(this.scene, this.camera);
    }
  };

  // ─── ML_VIDEO_HERO ───
  window.ML_VideoHero = class {
    constructor() {
      this.section = document.querySelector('.ml-mv');
      if (!this.section) return;
      this.videoEl = document.getElementById('mlHeroVideo');
      this.overlay = this.section.querySelector('.ml-background__overlay');
      this.init();
    }
    async init() {
      const { gsap, ScrollTrigger } = await window.waitForGlobals();
      gsap.registerPlugin(ScrollTrigger);
      if (this.videoEl) {
        this.videoEl.muted = true;
        this.videoEl.setAttribute('playsinline', '');
        this.videoEl.play().catch(() => {});
      }
      const chars = this.section.querySelectorAll('.ml-mv__head-title .chars');
      gsap.to(chars, { y: '0%', duration: 1.4, ease: 'power4.out', stagger: 0.015 });
      gsap.to('.ml-mv__main-filter', { opacity: 0, duration: 1.4, ease: 'power4.out' });
      gsap.to('.ml-background', {
        yPercent: 40, ease: 'none',
        scrollTrigger: { trigger: '.ml-mv', start: 'top top', end: 'bottom top', scrub: true }
      });
    }
  };

  // ─── ML_GRID_VERTICAL ───
  window.ML_GridVertical = class {
    constructor() {
      if (window.innerWidth <= 768) return;
      this.canvasWrap = document.getElementById('ml-cat-canvas');
      this.domImgs = [...document.querySelectorAll('.ml-cat__img')];
      if (!this.canvasWrap || !this.domImgs.length) return;
      this.init();
    }
    async init() {
      const { THREE } = await window.waitForGlobals();
      this.W = window.innerWidth;
      this.H = window.innerHeight;
      this.scene = new THREE.Scene();
      this.camera = new THREE.OrthographicCamera(-this.W/2, this.W/2, this.H/2, -this.H/2, 0.1, 1000);
      this.renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
      this.renderer.setSize(this.W, this.H);
      this.canvasWrap.appendChild(this.renderer.domElement);
      this.loader = new THREE.TextureLoader();
      this.meshes = [];
      const promises = this.domImgs.map((img, i) => new Promise(res => {
        this.loader.load(img.src, (tex) => {
          const rect = img.getBoundingClientRect();
          const mesh = new THREE.Mesh(new THREE.PlaneGeometry(1, 1), new THREE.MeshBasicMaterial({ map: tex }));
          mesh.scale.set(rect.width, rect.height, 1);
          this.scene.add(mesh);
          this.meshes[i] = { mesh, img };
          res();
        });
      }));
      await Promise.all(promises);
      this.animate();
    }
    animate() {
      if (!this.renderer) return;
      requestAnimationFrame(() => this.animate());
      this.meshes.forEach(obj => {
        if (!obj) return;
        const rect = obj.img.getBoundingClientRect();
        obj.mesh.position.x = -this.W/2 + rect.width/2 + rect.left;
        obj.mesh.position.y = this.H/2 - rect.height/2 - rect.top;
      });
      this.renderer.render(this.scene, this.camera);
    }
  };

  // ─── HERO SLIDER CLASSES ───
  const sliderVertex = `
    varying vec2 vUv;
    varying vec2 v_offset;
    uniform vec2 u_offset;
    float PI = 3.14159265;
    vec3 curve(vec3 position, vec2 uv, vec2 offset) {
      position.x += (sin(uv.y * PI) * offset.x);
      position.y += (sin(uv.x * PI) * offset.y);
      position.z -= (cos(uv.x * PI) * cos(uv.y * PI) * 30.0);
      position.z += (cos(uv.x * PI) * cos(uv.y * PI) * abs(offset.y) * 50.0);
      return position;
    }
    void main() {
      vUv = uv;
      v_offset = u_offset;
      vec3 newPos = curve(position, uv, u_offset * 18.0);
      gl_Position = projectionMatrix * modelViewMatrix * vec4(newPos, 1.0);
    }
  `;
  const sliderFragment = `
    precision highp float;
    uniform sampler2D u_texture;
    uniform vec2 u_planeSize;
    uniform vec2 u_imageSize;
    uniform float u_imageScale;
    uniform float u_blackFilter;
    varying vec2 vUv;
    vec2 imageAspect(vec2 planeSize, vec2 ImageSize, vec2 p) {
      vec2 ratio = vec2(
        min((planeSize.x / planeSize.y) / (ImageSize.x / ImageSize.y), 1.0),
        min((planeSize.y / planeSize.x) / (ImageSize.y / ImageSize.x), 1.0)
      );
      return vec2((p.x - 0.5) * ratio.x + 0.5, (p.y - 0.5) * ratio.y + 0.5);
    }
    void main() {
      vec2 uv = imageAspect(u_planeSize, u_imageSize, vUv);
      uv = (uv - vec2(0.5)) / u_imageScale + vec2(0.5);
      vec4 texColor = texture2D(u_texture, uv);
      texColor.rgb *= u_blackFilter;
      gl_FragColor = texColor;
    }
  `;

  window.ShowcaseWebGL = class {
    constructor() {
      this.container = document.querySelector(".showcase-main");
      this.medias = document.querySelectorAll(".showcase-main__image .showcase-media");
      if (!this.container || !this.medias.length) return;
      this.init();
    }
    async init() {
      const { THREE, gsap, ScrollTrigger } = await window.waitForGlobals();
      gsap.registerPlugin(ScrollTrigger);
      this.W = window.innerWidth;
      this.H = window.innerHeight;
      this.scene = new THREE.Scene();
      this.camera = new THREE.OrthographicCamera(-this.W/2, this.W/2, this.H/2, -this.H/2, 0.1, 10000);
      this.camera.position.z = 100;
      this.renderer = new THREE.WebGLRenderer({ antialias: true, alpha: false });
      this.renderer.setClearColor(0xffffff, 1);
      this.renderer.setSize(this.W, this.H);
      document.querySelector("#showcase").appendChild(this.renderer.domElement);
      
      this.meshes = [];
      const loader = new THREE.TextureLoader();
      const promises = Array.from(this.medias).map((el, i) => new Promise(res => {
        loader.load(el.src, tex => {
          const rect = el.getBoundingClientRect();
          const mesh = new THREE.Mesh(
            new THREE.PlaneGeometry(1, 1, 20, 20),
            new THREE.ShaderMaterial({
              vertexShader: sliderVertex, fragmentShader: sliderFragment,
              uniforms: {
                u_texture: { value: tex },
                u_planeSize: { value: new THREE.Vector2(rect.width, rect.height) },
                u_imageSize: { value: new THREE.Vector2(tex.image.width || 1920, tex.image.height || 1080) },
                u_imageScale: { value: 1.5 },
                u_blackFilter: { value: 1.0 },
                u_offset: { value: new THREE.Vector2(0, 0) }
              }
            })
          );
          mesh.scale.set(rect.width, rect.height, 1);
          this.scene.add(mesh);
          this.meshes[i] = { mesh, el };
          res();
        });
      }));
      await Promise.all(promises);

      this.curve = { offset: new THREE.Vector2(0,0), target: new THREE.Vector2(0,0), lerp: 0.07, strength: 0.00015, max: 0.08 };
      this.prevScroll = window.scrollY;
      
      // Title Sync via GSAP
      const pTags = document.querySelectorAll(".showcase-head__titles p");
      if (pTags.length) {
        pTags[0].classList.add('is-current');
        window.gsap.registerPlugin(window.ScrollTrigger);
        window.ScrollTrigger.create({
            trigger: ".showcase-main",
            start: "top top", end: "bottom bottom", scrub: true,
            onUpdate: (self) => {
                const n = pTags.length;
                const index = Math.min(Math.floor(self.progress * n), n - 1);
                pTags.forEach((p, i) => p.classList.toggle('is-current', i === index));
                const counter = document.querySelector('.showcase-head .current');
                if (counter) counter.textContent = String(index + 1).padStart(2, '0');
            }
        });
      }

      this.animate();
    }
    animate() {
      if (!this.renderer) return;
      requestAnimationFrame(() => this.animate());
      const scrollY = window.scrollY;
      const diff = scrollY - this.prevScroll;
      this.prevScroll = scrollY;
      this.curve.target.set(0, -diff * this.curve.strength);
      this.curve.target.clampLength(0, this.curve.max);
      this.curve.offset.lerp(this.curve.target, this.curve.lerp);

      this.meshes.forEach(obj => {
        if (!obj) return;
        const rect = obj.el.getBoundingClientRect();
        obj.mesh.position.x = -this.W/2 + rect.width/2 + rect.left;
        obj.mesh.position.y = this.H/2 - rect.height/2 - rect.top;
        obj.mesh.material.uniforms.u_offset.value.copy(this.curve.offset);
      });
      this.renderer.render(this.scene, this.camera);
    }
  };

  // ─── WRAPPER FOR ASTRO ───
  window.ML_HeroSlider = class {
    constructor() {
      new window.ShowcaseWebGL();
    }
  };

  console.log('Site Authority: Components Registered.');
})();
