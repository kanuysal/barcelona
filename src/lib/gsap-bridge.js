
if (typeof window !== 'undefined') {
  if (!window.gsap) {
    console.warn('GSAP not found on window. Ensure CDN is loaded.');
  }
}

// Map the common GSAP features to the window instance
const gsap = typeof window !== 'undefined' ? window.gsap : { 
  registerPlugin: () => {},
  timeline: () => ({ to: () => {}, from: () => {}, add: () => {} }),
  to: () => {},
  from: () => {},
  set: () => {},
  utils: {
    toArray: (arg) => (typeof document !== 'undefined' ? Array.from(document.querySelectorAll(arg)) : [])
  }
};

export const ScrollTrigger = typeof window !== 'undefined' ? window.ScrollTrigger : {};
export const Power4 = gsap.Power4 || {};
export const Power3 = gsap.Power3 || {};
export const Power2 = gsap.Power2 || {};
export const Expo = gsap.Expo || {};

export { gsap };
export default gsap;
