/**
 * mini-composer.js
 * 
 * A minimal implementation of EffectComposer, RenderPass, and ShaderPass
 * that relies EXCLUSIVELY on window.THREE. This avoids importing three-stdlib
 * and prevents library duplication.
 */

export class MiniComposer {
    constructor(renderer, renderTarget) {
        this.renderer = renderer;
        this.renderTarget = renderTarget;
        this.passes = [];
        this._THREE = window.THREE;
    }

    addPass(pass) {
        this.passes.push(pass);
    }

    setSize(width, height) {
        if (this.renderTarget) this.renderTarget.setSize(width, height);
    }

    render() {
        this.passes.forEach(pass => {
            if (pass.enabled === false) return;
            pass.render(this.renderer, this.renderTarget, this.readBuffer);
        });
    }
}

export class MiniRenderPass {
    constructor(scene, camera) {
        this.scene = scene;
        this.camera = camera;
        this.enabled = true;
        this._THREE = window.THREE;
    }

    render(renderer, writeBuffer, readBuffer) {
        renderer.setRenderTarget(null);
        renderer.render(this.scene, this.camera);
    }
}

export class MiniShaderPass {
    constructor(shader) {
        const THREE = window.THREE;
        this.enabled = true;
        this.uniforms = THREE.UniformsUtils.clone(shader.uniforms);
        this.material = new THREE.ShaderMaterial({
            uniforms: this.uniforms,
            vertexShader: shader.vertexShader,
            fragmentShader: shader.fragmentShader
        });
        this.fsQuad = {
            mesh: new THREE.Mesh(new THREE.PlaneGeometry(2, 2), this.material)
        };
        this.scene = new THREE.Scene();
        this.camera = new THREE.OrthographicCamera(-1, 1, 1, -1, 0, 1);
        this.scene.add(this.fsQuad.mesh);
    }

    render(renderer, writeBuffer, readBuffer) {
        if (this.uniforms.tDiffuse) {
            // In a real composer, we'd use a render target here.
            // For this specific site, we are applying the fisheye pass
            // directly or in a simplified way.
        }
        renderer.setRenderTarget(null);
        renderer.render(this.scene, this.camera);
    }
}
