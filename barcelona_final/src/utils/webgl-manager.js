/**
 * WebGL Manager — Centralized GPU context controller
 * Checks WebGL availability ONCE and gates all context requests.
 */
class WebGLManager {
    constructor() {
        this.maxContexts = 6;
        this.activeContexts = 0;
        this.queue = [];
        this._available = null; // null = not tested yet
    }

    /**
     * Tests if WebGL is truly available by creating and immediately
     * destroying a test canvas. Caches the result.
     */
    isAvailable() {
        if (this._available !== null) return this._available;

        try {
            const canvas = document.createElement('canvas');
            const gl = canvas.getContext('webgl2') || canvas.getContext('webgl') || canvas.getContext('experimental-webgl');
            if (!gl) {
                this._available = false;
                return false;
            }
            // Immediately lose the test context so it doesn't count against the limit
            const ext = gl.getExtension('WEBGL_lose_context');
            if (ext) ext.loseContext();
            this._available = true;
            return true;
        } catch (e) {
            this._available = false;
            return false;
        }
    }

    /**
     * Request a GPU context slot. Resolves to false if WebGL is
     * unavailable or we've hit the limit and a timeout occurs.
     */
    async requestContext(timeoutMs = 5000) {
        if (!this.isAvailable()) return false;

        return new Promise((resolve) => {
            if (this.activeContexts < this.maxContexts) {
                this.activeContexts++;
                resolve(true);
                return;
            }

            // Queue with timeout so we don't hang forever
            let resolved = false;
            const timer = setTimeout(() => {
                if (resolved) return;
                resolved = true;
                const idx = this.queue.indexOf(entry);
                if (idx > -1) this.queue.splice(idx, 1);
                resolve(false);
            }, timeoutMs);

            const entry = (granted) => {
                if (resolved) return;
                resolved = true;
                clearTimeout(timer);
                if (granted) this.activeContexts++;
                resolve(granted);
            };

            this.queue.push(entry);
        });
    }

    releaseContext() {
        if (this.queue.length > 0) {
            const next = this.queue.shift();
            next(true);
        } else {
            this.activeContexts = Math.max(0, this.activeContexts - 1);
        }
    }
}

const manager = new WebGLManager();
export default manager;
