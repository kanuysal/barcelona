import {
  g as o,
  S as c,
  F as i,
  a as l,
  D as m,
  C as d,
  I as p,
} from "./chunk-gsap.C-y0P4LX.js";
o.registerPlugin(c, i, l, m, d, p);
const x = "ontouchstart" in document.documentElement,
  a = document.querySelector(".c-mouse"),
  u = document.querySelector(".c-mouse__ball"),
  t = { x: 0, y: 0 },
  s = { x: 0, y: 0 },
  r = { ease: 0.1 },
  g = o.quickSetter(a, "x", "px"),
  y = o.quickSetter(a, "y", "px");
function v(e) {
  ((s.x = e.clientX), (s.y = e.clientY));
}
function M() {
  ((t.x += (s.x - t.x) * r.ease),
    (t.y += (s.y - t.y) * r.ease),
    g(t.x),
    y(t.y));
}
const S = (e) => {
    e.target.closest("a") &&
      o.to(u, {
        borderRadius: "24px",
        scale: 0.6,
        duration: 0.6,
        overwrite: "auto",
        ease: "power4.out",
      });
  },
  b = (e) => {
    const n = e.target.closest("a");
    !n ||
      n.contains(e.relatedTarget) ||
      o.to(u, {
        borderRadius: "0rem",
        scale: 0.25,
        duration: 0.6,
        overwrite: "auto",
        ease: "power4.out",
      });
  },
  f = () => {
    x ||
      (o.to(a, { opacity: 1, duration: 0.4 }),
      document.addEventListener("mouseover", S),
      document.addEventListener("mouseout", b),
      window.addEventListener("mousemove", v));
  },
  w = () => {};
export { x as M, M as _, t as b, s as m, f as s, w as u };
