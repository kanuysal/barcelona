import * as THREE from 'three';
import gsap from 'gsap';
import webglManager from '../../utils/webgl-manager';

// The exact shaders from Dayloog
const vertexShader = `
  varying vec2 vUv;
  varying vec2 v_offset;
  uniform vec2 u_offset;

  float PI = 3.1415926535897932384626433832795;

  vec3 curve(vec3 position , vec2 uv , vec2 offset) {
    position.x = position.x + (sin(uv.y * PI) * offset.x);
    position.y = position.y + (sin(uv.x * PI) * offset.y);
    return position;
  }

  void main() {
    vUv = uv;
    v_offset = u_offset;
    vec3 newPos = curve(position,vUv,u_offset);
    gl_Position = projectionMatrix * modelViewMatrix * vec4( newPos, 1.0 );
  }
`;

const fragmentShader = `
precision mediump float;
uniform sampler2D u_texture;
uniform float u_directionX;
uniform vec2 u_resolution;
uniform vec2 u_planeSize;
uniform vec2 u_imageSize;
varying vec2 vUv;
varying vec2 v_offset;
uniform float u_progress;

vec2 imageAspect(vec2 planeSize,vec2 ImageSize, vec2 p) {
  vec2 ratio = vec2(
        min((planeSize.x / planeSize.y) / (ImageSize.x / ImageSize.y), 1.0),
        min((planeSize.y / planeSize.x) / (ImageSize.y / ImageSize.x), 1.0)
    );

    vec2 uv = vec2(
    (vUv.x - 0.5) * ratio.x + 0.5,
    (vUv.y - 0.5) * ratio.y + 0.5
  );

    return uv;
}

void main() {
  vec2 p = imageAspect(u_planeSize, u_imageSize, vUv);

  float speed = length(v_offset);

  // Dreamy cam blur: 6 örnekle yumuşak gecikmeli hareket
  float blurAmount = speed * 0.012;
  
  // IOR: camsi kenarlara doğru hafif prism
  float dist = distance(vUv, vec2(0.5));
  vec2 ior = v_offset * (0.3 + dist * 0.8) * 0.018;

  // RGB Split / Chromatic distortion (hıza göre artan)
  vec2 rgbShift = v_offset * 0.04;  // RGB kanallarını ayır

  float r = 0.0; float g = 0.0; float b = 0.0;
  for (int s = 0; s < 6; s++) {
    float t = float(s) / 5.0 - 0.5;
    vec2 blur_offset = v_offset * t * blurAmount;
    // Her kanal farklı miktarda kaydırılır (prism + RGB split birleşimi)
    r += texture2D(u_texture, p + blur_offset - ior * 1.0 - rgbShift * 0.8).r;
    g += texture2D(u_texture, p + blur_offset - ior * 1.3).g;
    b += texture2D(u_texture, p + blur_offset - ior * 1.6 + rgbShift * 0.8).b;
  }
  r /= 6.0; g /= 6.0; b /= 6.0;

  // Cam parlaklık vurgusu
  vec3 col = vec3(r, g, b);
  col = mix(col, col * 1.04 + 0.015, speed * 0.3);

  gl_FragColor = vec4(col, 1.0);
}
`;

class WebGLCarousel {
  constructor() {
    this.container = document.querySelector('.carousel-section');
    this.canvas = document.querySelector('#webgl');
    this.images = [...document.querySelectorAll('.p-single__modal-image img')];
    if (!this.canvas || this.images.length === 0) return;

    this.width = this.container.offsetWidth;
    this.height = this.container.offsetHeight;
    this.meshes = [];
    this.state = {
      currentScroll: 0,
      targetScroll: 0,
      isDragging: false
    };
    
    // Drag variables
    this.startX = 0;
    this.scrollSpeed = 0.6;
    this.lerpAmount = 0.05;
    
    // Cursor elements
    this.cursor = document.querySelector('.c-mouse-cursor');
    this.cursorInner = document.querySelector('.c-mouse-cursor__inner');
    this.cursorText = document.querySelector('.attention-drag');

    this._isInitialized = false;
    this._isVisible = false;
    this.setupObserver();
  }

  setupObserver() {
    this.observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          if (!this._isInitialized) {
            this.init();
          } else if (!this._isVisible) {
            this._isVisible = true;
            this.render();
          }
          this._isVisible = true;
        } else {
          if (this._isInitialized && this._isVisible) {
            this.destroy();
          }
          this._isVisible = false;
        }
      });
    }, { rootMargin: '0px' });

    this.observer.observe(this.container);
  }

  async init() {
    if (this._isInitialized) return;

    const hasContext = await webglManager.requestContext();
    if (!hasContext) {
      console.warn("WebGLCarousel: WebGL Context rejected or unavailable.");
      this.handleFallback();
      return;
    }

    try {
      this._isInitialized = true;
      this._isVisible = true;
      // 1. Setup Three.js Scene, Camera, Renderer
      this.scene = new THREE.Scene();
      
      const fov = 60;
      const fovRad = (fov / 2) * (Math.PI / 180);
      const distance = (this.height / 2) / Math.tan(fovRad);
      this.camera = new THREE.PerspectiveCamera(fov, this.width / this.height, 0.1, 10000);
      this.camera.position.z = distance;

      this.renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
      this.renderer.setSize(this.width, this.height);
      this.renderer.setClearColor(0xffffff, 0);
      this.renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
      this.canvas.appendChild(this.renderer.domElement);

      // 2. Load Textures and Create Meshes
      this.textureLoader = new THREE.TextureLoader();
      this.geometry = new THREE.PlaneGeometry(1, 1, 20, 20); // Extracted grid density
      
      const margin = 50; 
      
      this.images.forEach((img, i) => {
        const parent = img.parentElement;
        const rect = parent.getBoundingClientRect();
        // Dikey fotoğraflar için daha uygun bir oran (örn: 3:4 veya 2:3)
        const w = rect.width;
        const h = rect.height;

        const texture = this.textureLoader.load(img.src, (tex) => {
            // Texture yüklendiğinde gerçek boyutları al ve uniform'u güncelle
            const { width, height } = tex.image;
            mesh.material.uniforms.u_imageSize.value.set(width, height);
        });

        const uniforms = {
          u_resolution: { value: new THREE.Vector2(this.width, this.height) },
          u_texture: { value: texture },
          u_planeSize: { value: new THREE.Vector2(w, h) },
          u_imageSize: { value: new THREE.Vector2(1000, 1500) }, // Default vertical placeholder
          u_progress: { value: 0 },
          u_time: { value: 0 },
          u_offset: { value: new THREE.Vector2(0, 0) },
          u_directionX: { value: 0 }
        };

        const material = new THREE.ShaderMaterial({
          uniforms,
          vertexShader,
          fragmentShader,
          side: THREE.DoubleSide
        });

        const mesh = new THREE.Mesh(this.geometry, material);
        mesh.scale.set(w, h, 1);
        
        this.scene.add(mesh);
        this.meshes.push({
          mesh,
          index: i,
          width: w,
          height: h,
          baseX: (i * (w + margin)) - ((this.images.length - 1) * (w + margin)) / 2 
        });
      });

      this.addEvents();
      this.render();
    } catch (err) {
      console.error("WebGLCarousel: Initialization Error:", err);
      this.handleFallback();
      webglManager.releaseContext();
      this._isInitialized = false;
    }
  }

  handleFallback() {
    this.images.forEach(img => {
      img.style.opacity = "1";
    });
    const canvas = this.canvas.querySelector('canvas');
    if (canvas) canvas.style.display = "none";
  }

  addEvents() {
    window.addEventListener('resize', this.onResize.bind(this));
    
    // Drag functionality
    this.container.addEventListener('mousedown', this.onPointerDown.bind(this));
    this.container.addEventListener('touchstart', this.onPointerDown.bind(this));
    window.addEventListener('mousemove', this.onPointerMove.bind(this));
    window.addEventListener('touchmove', this.onPointerMove.bind(this), { passive: false });
    window.addEventListener('mouseup', this.onPointerUp.bind(this));
    window.addEventListener('touchend', this.onPointerUp.bind(this));
    
    // Wheel scroll
    this.container.addEventListener('wheel', (e) => {
      this.state.targetScroll -= e.deltaY * this.scrollSpeed * 0.5;
      this.state.targetScroll -= e.deltaX * this.scrollSpeed * 0.5;
    }, { passive: true });

    // Custom Cursor tracking
    document.addEventListener("mousemove", (e) => {
      if(this.cursor) {
        gsap.to(this.cursor, {
          x: e.clientX,
          y: e.clientY,
          opacity: 1,
          duration: 0.2
        });
      }
    });

    if(this.container && this.cursor) {
       this.container.addEventListener("mouseenter", () => {
         gsap.to(this.cursorInner, { scale: 1.5, duration: 0.3 });
         gsap.to(this.cursorText, { opacity: 1, duration: 0.3 });
       });
       this.container.addEventListener("mouseleave", () => {
         gsap.to(this.cursorInner, { scale: 1, duration: 0.3 });
         gsap.to(this.cursorText, { opacity: 0, duration: 0.3 });
       });
    }
  }

  onPointerDown(e) {
    this.state.isDragging = true;
    this.startX = e.clientX || (e.touches && e.touches[0].clientX);
    if(this.cursorInner) gsap.to(this.cursorInner, { scale: 0.8, duration: 0.2 });
  }

  onPointerMove(e) {
    if (!this.state.isDragging) return;
    const x = e.clientX || (e.touches && e.touches[0].clientX);
    const diff = (x - this.startX) * this.scrollSpeed;
    this.state.targetScroll += diff;
    this.startX = x;
  }

  onPointerUp() {
    this.state.isDragging = false;
    if(this.cursorInner) gsap.to(this.cursorInner, { scale: 1.5, duration: 0.2 });
  }

  onResize() {
    if (!this.renderer) return;
    this.width = this.container.offsetWidth;
    this.height = this.container.offsetHeight;
    
    this.renderer.setSize(this.width, this.height);
    
    const fovRad = (this.camera.fov / 2) * (Math.PI / 180);
    this.camera.position.z = (this.height / 2) / Math.tan(fovRad);
    this.camera.aspect = this.width / this.height;
    this.camera.updateProjectionMatrix();

    this.meshes.forEach(m => {
       m.mesh.material.uniforms.u_resolution.value.set(this.width, this.height);
    });
  }

  updatePositions() {
    // Lerp scrolling
    this.state.currentScroll += (this.state.targetScroll - this.state.currentScroll) * this.lerpAmount;

    // Calculate speed for curve effect — reduced for subtlety
    const delta = (this.state.targetScroll - this.state.currentScroll) * 0.001;

    const margin = 50; 
    const itemWidth = this.meshes[0].width + margin;
    const totalWidth = this.meshes.length * itemWidth;

    this.meshes.forEach(m => {
      // Mesh'in temel pozisyonuna scroll değerini ekle
      let x = m.baseX + this.state.currentScroll;
      
      // Sonsuz döngü (Infinite loop logic)
      // Pozisyonu totalWidth içerisinde sarmala
      // Ekranın çok dışında kalanları diğer tarafa ışınla
      const halfTotalWidth = totalWidth / 2;
      x = ((x + halfTotalWidth) % totalWidth + totalWidth) % totalWidth - halfTotalWidth;

      m.mesh.position.x = x;
      
      // Vertex shader için hızı aktar
      m.mesh.material.uniforms.u_offset.value.x = delta;
    });
  }

  destroy() {
    this._isVisible = false;
    this._isInitialized = false;
    if (this.renderer) {
      this.renderer.dispose();
      this.renderer.forceContextLoss();
      if (this.renderer.domElement && this.renderer.domElement.parentNode) {
        this.renderer.domElement.parentNode.removeChild(this.renderer.domElement);
      }
      this.renderer = null;
      webglManager.releaseContext();
    }
    if (this._raf) cancelAnimationFrame(this._raf);
  }

  render() {
    if (!this._isVisible || !this._isInitialized) return;
    this._raf = requestAnimationFrame(this.render.bind(this));
    this.updatePositions();
    this.renderer.render(this.scene, this.camera);
  }
}

// Initialize when ready
if (typeof window !== 'undefined') {
  window.addEventListener('DOMContentLoaded', () => {
    new WebGLCarousel();
  });
}
