import { waitForGlobals } from '../../utils/webgl-bridge';

let gsap, ScrollTrigger;

/**
 * ML_VideoHero — NO Three.js / WebGL
 *
 * The source's WebGL here is a luxury; for a background video we don't need
 * GPU shaders. Using a native <video> + CSS overlay:
 *   – No extra WebGL context → all GPU budget goes to HeroSlider
 *   – Browser hardware-decodes video natively (fastest possible path)
 *   – Darkening = CSS opacity transition
 *   – Parallax = GSAP transform
 */
export default class ML_VideoHero {
    constructor(config = {}) {
        this.section  = document.querySelector('.ml-mv');
        if (!this.section) return;

        this.videoEl  = document.getElementById('mlHeroVideo');
        this.overlay  = this.section.querySelector('.ml-background__overlay');
        this.focusMode   = false;
        this.isAnimating = false;

        this.init();
    }

    async init() {
        const globals = await waitForGlobals();
        gsap = globals.gsap;
        ScrollTrigger = window.ScrollTrigger || (gsap ? gsap.plugins.scrollTrigger : null);

        this._initVideo();
        this._setupAnimations();
        this._setupTimeDisplay();
        this._setupFocusMode();
        this._setupParallax();
    }

    // ─── VIDEO ──────────────────────────────────────────────
    _initVideo() {
        if (!this.videoEl) return;
        this.videoEl.muted    = true;
        this.videoEl.loop     = true;
        this.videoEl.playsInline = true;
        this.videoEl.setAttribute('playsinline', '');
        this.videoEl.preload  = 'auto';
        this.videoEl.load();
        this.videoEl.play().catch(() => {});
    }

    // ─── ENTRY ANIMATIONS ───────────────────────────────────
    _setupAnimations() {
        const chars = this.section.querySelectorAll('.ml-mv__head-title .chars');
        gsap.to(chars, {
            y: '0%',
            delay: 0.2,
            duration: 1.4,
            ease: 'power4.out',
            stagger: { from: 'start', each: 0.015 }
        });
        gsap.to('.ml-mv__main-filter', {
            opacity: 0,
            delay: 0.6,
            duration: 1.4,
            ease: 'power4.out'
        });
    }

    // ─── VIDEO TIME ──────────────────────────────────────────
    _setupTimeDisplay() {
        const timeEl = this.section.querySelector('.ml-mv__video-time p');
        if (!timeEl || !this.videoEl) return;
        this.videoEl.addEventListener('timeupdate', () => {
            const t = this.videoEl.currentTime;
            const m = Math.floor(t / 60);
            const s = Math.floor(t % 60).toString().padStart(2, '0');
            timeEl.textContent = `${m}:${s}`;
        });
    }

    // ─── FOCUS MODE ──────────────────────────────────────────
    _setupFocusMode() {
        const btn        = document.getElementById('focusModeBtn');
        const focusTexts = this.section.querySelectorAll('[data-focus="text"]');
        const chars      = this.section.querySelectorAll('.ml-mv__head-title .chars');

        // Timelines
        this.tlIn = gsap.timeline({ paused: true, onComplete: () => { this.isAnimating = false; } });
        this.tlOut= gsap.timeline({ paused: true, onComplete: () => { this.isAnimating = false; } });

        this.tlIn
            .to(chars, { y: '-110%', duration: 1.2, ease: 'power4.out' }, 0)
            .to('.ml-mv__video-time', { opacity: 0.4, duration: 1.2, ease: 'power4.out' }, 0)
            .to(focusTexts, {
                y: '0%', duration: 1.3, ease: 'power4.out',
                stagger: { from: 'start', each: 0.03 }
            }, 0.15);

        this.tlOut
            .to(focusTexts, {
                y: '-100%', duration: 1.0, ease: 'power4.in',
                stagger: { from: 'start', each: 0.015 }
            }, 0)
            .fromTo(chars, { y: '100%' }, { y: '0%', duration: 1.3, ease: 'power4.out' }, 0.2)
            .to('.ml-mv__video-time', { opacity: 1, duration: 1.2, ease: 'power4.out' }, 0.2);

        if (!btn) return;
        btn.addEventListener('click', () => {
            if (this.isAnimating) return;
            this.isAnimating = true;
            this.focusMode   = !this.focusMode;

            // Button label swap
            gsap.to(btn, {
                opacity: 0, duration: 0.25,
                onComplete: () => {
                    btn.innerHTML = `<span class="c-en-text--md">${this.focusMode ? '+ Default Mode' : '+ Focus Mode'}</span>`;
                    gsap.to(btn, { opacity: 1, duration: 0.25 });
                }
            });

            if (this.focusMode) {
                this.tlIn.play(0);
                // Darken via CSS overlay, slow video
                gsap.to(this.overlay, { opacity: 0.6, duration: 1.4, ease: 'power4.out' });
                if (this.videoEl) gsap.to(this.videoEl, { playbackRate: 0.5, duration: 1.4, ease: 'power4.out' });
            } else {
                this.tlOut.play(0);
                gsap.to(this.overlay, { opacity: 0.15, duration: 1.4, ease: 'power4.out' });
                if (this.videoEl) gsap.to(this.videoEl, { playbackRate: 1, duration: 1.4, ease: 'power4.out' });
            }
        });
    }

    // ─── PARALLAX ON SCROLL OUT ──────────────────────────────
    _setupParallax() {
        gsap.to('.ml-background', {
            yPercent: 40,
            ease: 'none',
            scrollTrigger: {
                trigger: '.ml-mv',
                start: 'top top',
                end: 'bottom top',
                scrub: true
            }
        });
    }
}
