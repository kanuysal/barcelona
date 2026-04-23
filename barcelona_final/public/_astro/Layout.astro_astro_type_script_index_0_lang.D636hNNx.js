import {
  M as W,
  m as mt,
  b as As,
  s as ki,
  _ as Bi,
} from "./index.BSeWpMMd.js";
import { L as Ni } from "./chunk-lenis.Bu7sAdyK.js";
import { S as ct, g as E, a as He, C as jt } from "./chunk-gsap.C-y0P4LX.js";
import { v as Fi, l as Se, n as Ss, _ as Di } from "./chunk-swup.BXI472dK.js";
import {
  V as ge,
  T as Ie,
  W as kt,
  S as Bt,
  P as _t,
  a as Nt,
  b as Ft,
  c as K,
  C as oi,
  d as Oi,
  L as We,
  R as ms,
  e as fs,
  M as Dt,
  f as vs,
  E as ws,
  A as ni,
  F as Vi,
  G as ri,
  g as Wi,
  h as Hi,
  B as Ui,
  i as ji,
  j as $i,
  D as Gi,
  k as ai,
  l as li,
  U as ci,
  H as hi,
  O as Yi,
} from "./chunk-three.JJazWAK6.js";
const $t = "M0,0 C0.29,0 0.329,0.685 0.374,0.791 0.474,1.027 0.704,1 1,1",
  ui = (u, e) => {
    const t = new Ni({
      autoRaf: !1,
      wrapper: u,
      content: e,
      wheelMultiplier: 0.75,
      duration: 0.95,
      smoothWheel: !0,
      easing: (i) => (i === 1 ? 1 : 1 - Math.pow(2, -9 * i)),
    });
    t.on("scroll", ct.update);
    const s = (i) => t.raf(i * 1e3);
    return (
      E.ticker.add(s),
      E.ticker.lagSmoothing(0),
      (window.lenis = t),
      () => {
        (E.ticker.remove(s), t.destroy());
      }
    );
  };
function Ze() {
  return (
    (Ze = Object.assign
      ? Object.assign.bind()
      : function (u) {
          for (var e = 1; e < arguments.length; e++) {
            var t = arguments[e];
            for (var s in t)
              Object.prototype.hasOwnProperty.call(t, s) && (u[s] = t[s]);
          }
          return u;
        }),
    Ze.apply(this, arguments)
  );
}
const _s = (u) =>
  String(u)
    .split(".")
    .map((e) => String(parseInt(e || "0", 10)))
    .concat(["0", "0"])
    .slice(0, 3)
    .join(".");
let di = class {
  constructor() {
    ((this.isSwupPlugin = !0),
      (this.swup = void 0),
      (this.version = void 0),
      (this.requires = {}),
      (this.handlersToUnregister = []));
  }
  mount() {}
  unmount() {
    (this.handlersToUnregister.forEach((e) => e()),
      (this.handlersToUnregister = []));
  }
  _beforeMount() {
    if (!this.name)
      throw new Error(
        "You must define a name of plugin when creating a class.",
      );
  }
  _afterUnmount() {}
  _checkRequirements() {
    return (
      typeof this.requires != "object" ||
        Object.entries(this.requires).forEach(([e, t]) => {
          if (
            !(function (s, i, o) {
              const n = (function (r, a) {
                var l;
                if (r === "swup") return (l = a.version) != null ? l : "";
                {
                  var h;
                  const p = a.findPlugin(r);
                  return (h = p?.version) != null ? h : "";
                }
              })(s, o);
              return (
                !!n &&
                ((r, a) =>
                  a.every((l) => {
                    const [, h, p] = l.match(/^([\D]+)?(.*)$/) || [];
                    var d, f;
                    return ((m, w) => {
                      const g = {
                        "": (y) => y === 0,
                        ">": (y) => y > 0,
                        ">=": (y) => y >= 0,
                        "<": (y) => y < 0,
                        "<=": (y) => y <= 0,
                      };
                      return (g[w] || g[""])(m);
                    })(
                      ((f = p),
                      (d = _s((d = r))),
                      (f = _s(f)),
                      d.localeCompare(f, void 0, { numeric: !0 })),
                      h || ">=",
                    );
                  }))(n, i)
              );
            })(e, (t = Array.isArray(t) ? t : [t]), this.swup)
          ) {
            const s = `${e} ${t.join(", ")}`;
            throw new Error(
              `Plugin version mismatch: ${this.name} requires ${s}`,
            );
          }
        }),
      !0
    );
  }
  on(e, t, s = {}) {
    var i;
    t =
      !(i = t).name.startsWith("bound ") || i.hasOwnProperty("prototype")
        ? t.bind(this)
        : t;
    const o = this.swup.hooks.on(e, t, s);
    return (this.handlersToUnregister.push(o), o);
  }
  once(e, t, s = {}) {
    return this.on(e, t, Ze({}, s, { once: !0 }));
  }
  before(e, t, s = {}) {
    return this.on(e, t, Ze({}, s, { before: !0 }));
  }
  replace(e, t, s = {}) {
    return this.on(e, t, Ze({}, s, { replace: !0 }));
  }
  off(e, t) {
    return this.swup.hooks.off(e, t);
  }
};
function Ct() {
  return (
    (Ct = Object.assign
      ? Object.assign.bind()
      : function (u) {
          for (var e = 1; e < arguments.length; e++) {
            var t = arguments[e];
            for (var s in t) ({}).hasOwnProperty.call(t, s) && (u[s] = t[s]);
          }
          return u;
        }),
    Ct.apply(null, arguments)
  );
}
function Cs(u) {
  return u.localName !== "title" && !u.matches("[data-swup-theme]");
}
function Ms(u, e) {
  return u.outerHTML === e.outerHTML;
}
function Ps(u, e = []) {
  const t = Array.from(u.attributes);
  return e.length
    ? t.filter(({ name: s }) =>
        e.some((i) => (i instanceof RegExp ? i.test(s) : s === i)),
      )
    : t;
}
function Xi(u) {
  return u.matches("link[rel=stylesheet][href]");
}
let Ki = class extends di {
  constructor(e = {}) {
    var t;
    (super(),
      (t = this),
      (this.name = "SwupHeadPlugin"),
      (this.requires = { swup: ">=4.6" }),
      (this.defaults = {
        persistTags: !1,
        persistAssets: !1,
        awaitAssets: !1,
        attributes: ["lang", "dir"],
        timeout: 3e3,
      }),
      (this.options = void 0),
      (this.updateHead = async function (s, { page: {} }) {
        const { awaitAssets: i, attributes: o, timeout: n } = t.options,
          r = s.to.document,
          { removed: a, added: l } = (function (
            h,
            p,
            { shouldPersist: d = () => !1 } = {},
          ) {
            const f = Array.from(h.children),
              m = Array.from(p.children),
              w =
                ((g = f),
                m.reduce(
                  (b, x, A) => (
                    g.some((_) => Ms(x, _)) || b.push({ el: x, index: A }),
                    b
                  ),
                  [],
                ));
            var g;
            const y = (function (b, x) {
              return b.reduce(
                (A, _) => (x.some((P) => Ms(_, P)) || A.push({ el: _ }), A),
                [],
              );
            })(f, m);
            y.reverse()
              .filter(({ el: b }) => Cs(b))
              .filter(({ el: b }) => !d(b))
              .forEach(({ el: b }) => h.removeChild(b));
            const v = w
              .filter(({ el: b }) => Cs(b))
              .map((b) => {
                let x = b.el.cloneNode(!0);
                return (
                  h.insertBefore(x, h.children[(b.index || 0) + 1] || null),
                  Ct({}, b, { el: x })
                );
              });
            return {
              removed: y.map(({ el: b }) => b),
              added: v.map(({ el: b }) => b),
            };
          })(document.head, r.head, {
            shouldPersist: (h) => t.isPersistentTag(h),
          });
        if (
          (t.swup.log(`Removed ${a.length} / added ${l.length} tags in head`),
          o != null &&
            o.length &&
            (function (h, p, d = []) {
              const f = new Set();
              for (const { name: m, value: w } of Ps(p, d))
                (h.setAttribute(m, w), f.add(m));
              for (const { name: m } of Ps(h, d))
                f.has(m) || h.removeAttribute(m);
            })(document.documentElement, r.documentElement, o),
          i)
        ) {
          const h = (function (p, d = 0) {
            return p.filter(Xi).map((f) =>
              (function (m, w = 0) {
                let g;
                const y = (v) => {
                  m.sheet ? v() : (g = setTimeout(() => y(v), 10));
                };
                return new Promise((v) => {
                  (y(() => v(m)),
                    w > 0 &&
                      setTimeout(() => {
                        (g && clearTimeout(g), v(m));
                      }, w));
                });
              })(f, d),
            );
          })(l, n);
          h.length &&
            (t.swup.log(`Waiting for ${h.length} assets to load`),
            await Promise.all(h));
        }
      }),
      (this.options = Ct({}, this.defaults, e)),
      this.options.persistAssets &&
        !this.options.persistTags &&
        (this.options.persistTags =
          "link[rel=stylesheet], script[src], style"));
  }
  mount() {
    this.before("content:replace", this.updateHead);
  }
  isPersistentTag(e) {
    const { persistTags: t } = this.options;
    return typeof t == "function"
      ? t(e)
      : typeof t == "string" && t.length > 0
        ? e.matches(t)
        : !!t;
  }
};
function Je() {
  return (
    (Je = Object.assign
      ? Object.assign.bind()
      : function (u) {
          for (var e = 1; e < arguments.length; e++) {
            var t = arguments[e];
            for (var s in t)
              Object.prototype.hasOwnProperty.call(t, s) && (u[s] = t[s]);
          }
          return u;
        }),
    Je.apply(this, arguments)
  );
}
const Ts = (u) =>
  String(u)
    .split(".")
    .map((e) => String(parseInt(e || "0", 10)))
    .concat(["0", "0"])
    .slice(0, 3)
    .join(".");
let Zi = class {
  constructor() {
    ((this.isSwupPlugin = !0),
      (this.swup = void 0),
      (this.version = void 0),
      (this.requires = {}),
      (this.handlersToUnregister = []));
  }
  mount() {}
  unmount() {
    (this.handlersToUnregister.forEach((e) => e()),
      (this.handlersToUnregister = []));
  }
  _beforeMount() {
    if (!this.name)
      throw new Error(
        "You must define a name of plugin when creating a class.",
      );
  }
  _afterUnmount() {}
  _checkRequirements() {
    return (
      typeof this.requires != "object" ||
        Object.entries(this.requires).forEach(([e, t]) => {
          if (
            !(function (s, i, o) {
              const n = (function (r, a) {
                var l;
                if (r === "swup") return (l = a.version) != null ? l : "";
                {
                  var h;
                  const p = a.findPlugin(r);
                  return (h = p?.version) != null ? h : "";
                }
              })(s, o);
              return (
                !!n &&
                ((r, a) =>
                  a.every((l) => {
                    const [, h, p] = l.match(/^([\D]+)?(.*)$/) || [];
                    var d, f;
                    return ((m, w) => {
                      const g = {
                        "": (y) => y === 0,
                        ">": (y) => y > 0,
                        ">=": (y) => y >= 0,
                        "<": (y) => y < 0,
                        "<=": (y) => y <= 0,
                      };
                      return (g[w] || g[""])(m);
                    })(
                      ((f = p),
                      (d = Ts((d = r))),
                      (f = Ts(f)),
                      d.localeCompare(f, void 0, { numeric: !0 })),
                      h || ">=",
                    );
                  }))(n, i)
              );
            })(e, (t = Array.isArray(t) ? t : [t]), this.swup)
          ) {
            const s = `${e} ${t.join(", ")}`;
            throw new Error(
              `Plugin version mismatch: ${this.name} requires ${s}`,
            );
          }
        }),
      !0
    );
  }
  on(e, t, s = {}) {
    var i;
    t =
      !(i = t).name.startsWith("bound ") || i.hasOwnProperty("prototype")
        ? t.bind(this)
        : t;
    const o = this.swup.hooks.on(e, t, s);
    return (this.handlersToUnregister.push(o), o);
  }
  once(e, t, s = {}) {
    return this.on(e, t, Je({}, s, { once: !0 }));
  }
  before(e, t, s = {}) {
    return this.on(e, t, Je({}, s, { before: !0 }));
  }
  replace(e, t, s = {}) {
    return this.on(e, t, Je({}, s, { replace: !0 }));
  }
  off(e, t) {
    return this.swup.hooks.off(e, t);
  }
};
function os() {
  return (
    (os = Object.assign
      ? Object.assign.bind()
      : function (u) {
          for (var e = 1; e < arguments.length; e++) {
            var t = arguments[e];
            for (var s in t)
              Object.prototype.hasOwnProperty.call(t, s) && (u[s] = t[s]);
          }
          return u;
        }),
    os.apply(this, arguments)
  );
}
class Ji extends Zi {
  constructor(e = {}) {
    (super(),
      (this.name = "SwupParallelPlugin"),
      (this.requires = { swup: ">=4.6" }),
      (this.defaults = { containers: [], keep: 0 }),
      (this.options = void 0),
      (this.originalContainers = null),
      (this.parallelContainers = []),
      (this.startVisit = (t) => {
        ((this.originalContainers = null),
          this.visitHasPotentialParallelAnimation(t) &&
            ((t.animation.wait = !0), (t.animation.parallel = !0)));
      }),
      (this.skipOutAnimation = (t, s) => {
        this.isParallelVisit(t) && (s.skip = !0);
      }),
      (this.insertContainers = (t) => {
        if (!this.isParallelVisit(t)) return;
        const s = this.getParallelContainersForVisit(t);
        ((this.parallelContainers = s),
          this.swup.hooks.call("content:insert", { containers: s }, () => {
            for (const {
              all: o,
              next: n,
              previous: r,
              keep: a,
              remove: l,
            } of s)
              (o.forEach((h, p) =>
                h.style.setProperty("--swup-parallel-container", `${p}`),
              ),
                r.setAttribute("aria-hidden", "true"),
                r.before(n),
                t.animation.animate &&
                  (n.classList.add("is-next-container"),
                  Fi(n),
                  n.classList.remove("is-next-container")),
                r.classList.add("is-previous-container"),
                a.forEach((h) => h.classList.add("is-kept-container")),
                l.forEach((h) => h.classList.add("is-removing-container")));
          }),
          (this.originalContainers = t.containers));
        const i = this.parallelContainers.map(({ selector: o }) => o);
        t.containers = t.containers.filter((o) => !i.includes(o));
      }),
      (this.resetContainers = (t) => {
        this.originalContainers && (t.containers = this.originalContainers);
      }),
      (this.cleanupContainers = () => {
        const t = this.parallelContainers;
        (this.swup.hooks.call("content:remove", { containers: t }, () => {
          for (const { remove: s, next: i } of t)
            (s.forEach((o) => o.remove()),
              i.classList.remove("is-next-container"));
        }),
          (this.parallelContainers = []));
      }),
      (this.options = os({}, this.defaults, e)));
  }
  mount() {
    (this.options.containers.length ||
      (this.options.containers = this.swup.options.containers),
      this.swup.hooks.create("content:insert"),
      this.swup.hooks.create("content:remove"),
      this.on("visit:start", this.startVisit, { priority: 1 }),
      this.before("animation:out:await", this.skipOutAnimation, {
        priority: 1,
      }),
      this.before("content:replace", this.insertContainers, { priority: 1 }),
      this.on("content:replace", this.resetContainers),
      this.on("visit:end", this.cleanupContainers));
  }
  getParallelContainersForVisit(e) {
    const { containers: t } = this.options,
      s = t.filter((i) => e.containers.includes(i));
    return s.length
      ? s.reduce((i, o) => {
          let { keep: n } = this.options;
          ((n = typeof n == "object" ? n[o] : n), (n = Math.max(0, Number(n))));
          const r = e.to.document.querySelector(o),
            a = Array.from(document.querySelectorAll(o)),
            l = a[0],
            h = a.slice(0, n),
            p = a.slice(n),
            d = [...new Set([r, l, ...h, ...p])];
          return r && l
            ? [
                ...i,
                {
                  selector: o,
                  next: r,
                  previous: l,
                  keep: h,
                  remove: p,
                  all: d,
                },
              ]
            : (console.warn(`Parallel container ${o} not found`), i);
        }, [])
      : (console.warn(
          "No parallel containers found in list of replaced containers",
        ),
        []);
  }
  isParallelVisit(e) {
    return e.animation.parallel;
  }
  markVisitAsParallelAnimation(e) {
    ((e.animation.wait = !0), (e.animation.parallel = !0));
  }
  visitHasPotentialParallelAnimation(e) {
    return e.animation.parallel !== !1 && this.visitHasParallelContainers(e);
  }
  visitHasParallelContainers(e) {
    return this.options.containers.some((t) => {
      const s = document.querySelector(t);
      return s?.matches(e.containers.join(","));
    });
  }
}
function Mt() {
  return (
    (Mt = Object.assign
      ? Object.assign.bind()
      : function (u) {
          for (var e = 1; e < arguments.length; e++) {
            var t = arguments[e];
            for (var s in t) ({}).hasOwnProperty.call(t, s) && (u[s] = t[s]);
          }
          return u;
        }),
    Mt.apply(null, arguments)
  );
}
function zs() {
  return window.matchMedia("(hover: hover)").matches;
}
function ft(u) {
  return !!u && (u instanceof HTMLAnchorElement || u instanceof SVGAElement);
}
const Rs = window.requestIdleCallback || ((u) => setTimeout(u, 1)),
  Qi = ["preloadVisibleLinks"];
class eo extends di {
  constructor(e = {}) {
    var t;
    (super(),
      (t = this),
      (this.name = "SwupPreloadPlugin"),
      (this.requires = { swup: ">=4.5" }),
      (this.defaults = {
        throttle: 5,
        preloadInitialPage: !0,
        preloadHoveredLinks: !0,
        preloadVisibleLinks: {
          enabled: !1,
          threshold: 0.2,
          delay: 500,
          containers: ["body"],
          ignore: () => !1,
        },
      }),
      (this.options = void 0),
      (this.queue = void 0),
      (this.preloadObserver = void 0),
      (this.preloadPromises = new Map()),
      (this.mouseEnterDelegate = void 0),
      (this.touchStartDelegate = void 0),
      (this.focusDelegate = void 0),
      (this.onPageLoad = (o, n, r) => {
        const { url: a } = o.to;
        return a && this.preloadPromises.has(a)
          ? this.preloadPromises.get(a)
          : r(o, n);
      }),
      (this.onMouseEnter = async function (o) {
        if (o.target !== o.delegateTarget || !zs()) return;
        const n = o.delegateTarget;
        if (!ft(n)) return;
        const { url: r, hash: a } = Se.fromElement(n),
          l = t.swup.createVisit({ to: r, hash: a, el: n, event: o });
        (t.swup.hooks.callSync("link:hover", l, { el: n, event: o }),
          t.preload(n, { priority: !0 }));
      }),
      (this.onTouchStart = (o) => {
        if (zs()) return;
        const n = o.delegateTarget;
        ft(n) && this.preload(n, { priority: !0 });
      }),
      (this.onFocus = (o) => {
        const n = o.delegateTarget;
        ft(n) && this.preload(n, { priority: !0 });
      }));
    const { preloadVisibleLinks: s } = e,
      i = (function (o, n) {
        if (o == null) return {};
        var r = {};
        for (var a in o)
          if ({}.hasOwnProperty.call(o, a)) {
            if (n.includes(a)) continue;
            r[a] = o[a];
          }
        return r;
      })(e, Qi);
    ((this.options = Mt({}, this.defaults, i)),
      typeof s == "object"
        ? (this.options.preloadVisibleLinks = Mt(
            {},
            this.options.preloadVisibleLinks,
            { enabled: !0 },
            s,
          ))
        : (this.options.preloadVisibleLinks.enabled = !!s),
      (this.preload = this.preload.bind(this)),
      (this.queue = (function (o = 1) {
        const n = [],
          r = [];
        let a = 0,
          l = 0;
        function h() {
          l < o &&
            a > 0 &&
            ((r.shift() || n.shift() || (() => {}))(), a--, l++);
        }
        return {
          add: function (p, d = !1) {
            if (p.__queued) {
              if (!d) return;
              {
                const f = n.indexOf(p);
                if (f >= 0) {
                  const m = n.splice(f, 1);
                  a -= m.length;
                }
              }
            }
            ((p.__queued = !0), (d ? r : n).push(p), a++, a <= 1 && h());
          },
          next: function () {
            (l--, h());
          },
        };
      })(this.options.throttle)));
  }
  mount() {
    const e = this.swup;
    e.options.cache
      ? (e.hooks.create("page:preload"),
        e.hooks.create("link:hover"),
        (e.preload = this.preload),
        (e.preloadLinks = this.preloadLinks),
        this.replace("page:load", this.onPageLoad),
        this.preloadLinks(),
        this.on("page:view", () => this.preloadLinks()),
        this.options.preloadVisibleLinks.enabled &&
          (this.preloadVisibleLinks(),
          this.on("page:view", () => this.preloadVisibleLinks())),
        this.options.preloadHoveredLinks && this.preloadLinksOnAttention(),
        this.options.preloadInitialPage && this.preload(Ss()))
      : console.warn(
          "SwupPreloadPlugin: swup cache needs to be enabled for preloading",
        );
  }
  unmount() {
    var e, t, s;
    ((this.swup.preload = void 0),
      (this.swup.preloadLinks = void 0),
      this.preloadPromises.clear(),
      (e = this.mouseEnterDelegate) == null || e.destroy(),
      (t = this.touchStartDelegate) == null || t.destroy(),
      (s = this.focusDelegate) == null || s.destroy(),
      this.stopPreloadingVisibleLinks());
  }
  async preload(e, t = {}) {
    var s;
    let i, o;
    const n = (s = t.priority) != null && s;
    if (Array.isArray(e)) return Promise.all(e.map((a) => this.preload(a)));
    if (ft(e)) ((o = e), ({ href: i } = Se.fromElement(e)));
    else {
      if (typeof e != "string") return;
      i = e;
    }
    if (!i) return;
    if (this.swup.cache.has(i)) return this.swup.cache.get(i);
    if (this.preloadPromises.has(i)) return this.preloadPromises.get(i);
    if (!this.shouldPreload(i, { el: o })) return;
    const r = new Promise((a) => {
      this.queue.add(() => {
        this.performPreload(i)
          .catch(() => {})
          .then((l) => a(l))
          .finally(() => {
            (this.queue.next(), this.preloadPromises.delete(i));
          });
      }, n);
    });
    return (this.preloadPromises.set(i, r), r);
  }
  preloadLinks() {
    Rs(() => {
      Array.from(
        document.querySelectorAll(
          "a[data-swup-preload], [data-swup-preload-all] a",
        ),
      ).forEach((e) => this.preload(e));
    });
  }
  preloadLinksOnAttention() {
    const { swup: e } = this,
      { linkSelector: t } = e.options,
      s = { passive: !0, capture: !0 };
    ((this.mouseEnterDelegate = e.delegateEvent(
      t,
      "mouseenter",
      this.onMouseEnter,
      s,
    )),
      (this.touchStartDelegate = e.delegateEvent(
        t,
        "touchstart",
        this.onTouchStart,
        s,
      )),
      (this.focusDelegate = e.delegateEvent(t, "focus", this.onFocus, s)));
  }
  preloadVisibleLinks() {
    if (this.preloadObserver) return void this.preloadObserver.update();
    const {
      threshold: e,
      delay: t,
      containers: s,
    } = this.options.preloadVisibleLinks;
    ((this.preloadObserver = (function ({
      threshold: i,
      delay: o,
      containers: n,
      callback: r,
      filter: a,
    }) {
      const l = new Map(),
        h = new IntersectionObserver(
          (m) => {
            m.forEach((w) => {
              w.isIntersecting ? p(w.target) : d(w.target);
            });
          },
          { threshold: i },
        ),
        p = (m) => {
          var w;
          const { href: g } = Se.fromElement(m),
            y = (w = l.get(g)) != null ? w : new Set();
          (l.set(g, y),
            y.add(m),
            setTimeout(() => {
              const v = l.get(g);
              v != null && v.size && (r(m), h.unobserve(m), v.delete(m));
            }, o));
        },
        d = (m) => {
          var w;
          const { href: g } = Se.fromElement(m);
          (w = l.get(g)) == null || w.delete(m);
        },
        f = () => {
          Rs(() => {
            const m = n.map((w) => `${w} a[*|href]`).join(", ");
            Array.from(document.querySelectorAll(m))
              .filter((w) => a(w))
              .forEach((w) => h.observe(w));
          });
        };
      return {
        start: () => f(),
        stop: () => h.disconnect(),
        update: () => (l.clear(), f()),
      };
    })({
      threshold: e,
      delay: t,
      containers: s,
      callback: (i) => this.preload(i),
      filter: (i) => {
        if (
          this.options.preloadVisibleLinks.ignore(i) ||
          !i.matches(this.swup.options.linkSelector)
        )
          return !1;
        const { href: o } = Se.fromElement(i);
        return this.shouldPreload(o, { el: i });
      },
    })),
      this.preloadObserver.start());
  }
  stopPreloadingVisibleLinks() {
    this.preloadObserver && this.preloadObserver.stop();
  }
  shouldPreload(e, { el: t } = {}) {
    const { url: s, href: i } = Se.fromUrl(e);
    return !(
      !(function () {
        if (navigator.connection) {
          var o;
          if (
            navigator.connection.saveData ||
            ((o = navigator.connection.effectiveType) != null &&
              o.endsWith("2g"))
          )
            return !1;
        }
        return !0;
      })() ||
      this.swup.cache.has(s) ||
      this.preloadPromises.has(s) ||
      this.swup.shouldIgnoreVisit(i, { el: t }) ||
      (t && this.swup.resolveUrl(s) === this.swup.resolveUrl(Ss()))
    );
  }
  async performPreload(e) {
    var t = this;
    const { url: s } = Se.fromUrl(e),
      i = this.swup.createVisit({ to: s });
    return await this.swup.hooks.call(
      "page:preload",
      i,
      { url: s },
      async function (n, r) {
        return ((r.page = await t.swup.fetchPage(e, { visit: n })), r.page);
      },
    );
  }
}
const J = { w: window.innerWidth, h: window.innerHeight },
  qs = () => {
    ((J.w = window.innerWidth), (J.h = window.innerHeight));
  };
let to = class ee {
  static get CAMERA_PARAM() {
    return {
      fov: 60,
      fovy: 60,
      aspect: window.innerWidth / window.innerHeight,
      near: 1e-4,
      far: 1e4,
      x: 0,
      y: 0,
      z: 1,
      lookAt: new ge(0, 0, 0),
    };
  }
  constructor() {
    (this.render,
      this.canvas,
      this.controls,
      this.gridHelper,
      (this.render = this.render.bind(this)),
      (this.Dev = !0),
      (this.loader = new Ie()));
  }
  async _setRender() {
    ((this.renderer = new kt({
      antialias: !W,
      alpha: !0,
      powerPreference: W ? "low-power" : "default",
    })),
      this.renderer.setClearColor(14934496, 0),
      this.renderer.setSize(J.w, J.h),
      this.renderer.setPixelRatio(W ? 1 : 1.2),
      (this.canvas = document.querySelector("#index-webgl")),
      this.canvas.appendChild(this.renderer.domElement));
  }
  async _setScene() {
    this.scene = new Bt();
  }
  async _setCamera() {
    ((this.camera = new _t(
      ee.CAMERA_PARAM.fovy,
      ee.CAMERA_PARAM.aspect,
      ee.CAMERA_PARAM.near,
      ee.CAMERA_PARAM.far,
    )),
      this.camera.position.set(
        ee.CAMERA_PARAM.x,
        ee.CAMERA_PARAM.y,
        ee.CAMERA_PARAM.z,
      ),
      this.camera.lookAt(ee.CAMERA_PARAM.lookAt),
      this.camera.updateProjectionMatrix());
  }
  async _init() {
    (await this._setRender(), await this._setScene(), await this._setCamera());
  }
  render() {}
  onLoop() {
    this.render();
  }
  onResize() {
    (this.renderer.setSize(J.w, J.h),
      this.camera.position.set(
        ee.CAMERA_PARAM.x,
        ee.CAMERA_PARAM.y,
        ee.CAMERA_PARAM.z,
      ),
      this.camera.lookAt(ee.CAMERA_PARAM.lookAt),
      this.camera.updateProjectionMatrix());
  }
};
const re = new Nt(
    new Ft({
      uniforms: {
        tDiffuse: { value: null },
        u_resolution: { value: new K(1, 1) },
        u_mouse: { value: new K(0, 0) },
        u_trackedMouse: { value: new K(0, 0) },
        u_rgbShift: { value: new K(0, 0) },
        u_grainEffectAmount: { value: 0.18 },
        u_mouseRange: { value: 0.3 },
        u_time: { value: 0 },
      },
      vertexShader: `
      varying vec2 vUv;
      void main() {
        vUv = uv;
        gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
      }
    `,
      fragmentShader: `
      precision mediump float;
      uniform sampler2D tDiffuse;
      uniform vec2 u_resolution;
      uniform vec2 u_mouse;
      uniform vec2 u_trackedMouse;
      uniform vec2 u_rgbShift;
      uniform float u_grainEffectAmount;
      uniform float u_mouseRange;
      uniform float u_time;
      varying vec2 vUv;

      void main() {
        vec2 uv = vUv;
        float influence = u_mouseRange;

        vec2 mouseUV      = (u_mouse.xy + 1.0) * 0.5;
        vec2 pixelToMouse = uv - mouseUV;
        float distToMouse = length(pixelToMouse);
        float strength    = smoothstep(influence, 0.0, distToMouse);

        
        vec2 mouseDirection = mouseUV - (u_trackedMouse.xy + 1.0) * 0.5;
        vec2 mouseOffset    = strength * mouseDirection * 1.2 * u_grainEffectAmount;
        vec2 newUv          = uv - mouseOffset;

        vec4 originalColor = texture2D(tDiffuse, newUv);

        
        float shiftMag  = length(u_rgbShift);
        vec2 shiftDir   = shiftMag > 0.0001 ? u_rgbShift / shiftMag : vec2(0.0);
        float aberration = shiftMag * strength * 0.58;

        vec2 rOffset = newUv + shiftDir * aberration;
        vec2 gOffset = newUv;
        vec2 bOffset = newUv - shiftDir * aberration;

        float r = texture2D(tDiffuse, rOffset).r;
        float g = texture2D(tDiffuse, gOffset).g;
        float b = texture2D(tDiffuse, bOffset).b;

        float gray = dot(vec3(r, g, b), vec3(0.299, 0.587, 0.114));
        vec3 shiftedColor = vec3(gray);
        float blendFactor = clamp(strength * 0.5, 0.0, 1.0);
        vec3 baseColor    = mix(originalColor.rgb, shiftedColor, blendFactor);

        gl_FragColor = vec4(shiftedColor, originalColor.a);
      }
    `,
    }),
  ),
  so = ({ aspect: u, strength: e } = {}) => {
    const s = typeof u == "number" ? u : window.innerWidth / window.innerHeight,
      i = {
        uniforms: {
          tDiffuse: { value: null },
          u_strength: { value: 0 },
          u_aspect: { value: s },
        },
        vertexShader: `
      varying vec2 vUv;
      void main() {
        vUv = uv;
        gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
      }
    `,
        fragmentShader: `
      precision mediump float;
      uniform sampler2D tDiffuse;
      uniform float u_strength;
      uniform float u_aspect;
      varying vec2 vUv;

      void main() {
        vec2 uv = vUv * 2.0 - 1.0;
        uv.x *= u_aspect;

        float r = length(uv);

        float distortion = 1.0 + u_strength * r * r;
        vec2 distortedUv = uv / distortion;

        distortedUv.x /= u_aspect;
        distortedUv = distortedUv * 0.5 + 0.5;

        float t = clamp(r / 1.2, 0.0, 1.0);
        float t2 = t * t;

        vec2 radialDir = r > 0.001 ? normalize(uv) : vec2(0.0);
        vec2 radialDirNorm = vec2(radialDir.x / u_aspect, radialDir.y);

        float caAmount = 0.0 * t2;
        vec2 blurStep = radialDirNorm * 0.001 * t2;

        float rSum = 0.0, gSum = 0.0, bSum = 0.0, aSum = 0.0;
        for (int i = -2; i <= 2; i++) {
          float fi = float(i) / 2.0;
          vec2 offset = blurStep * fi;
          rSum += texture2D(tDiffuse, distortedUv + radialDirNorm * caAmount + offset).r;
          gSum += texture2D(tDiffuse, distortedUv + offset).g;
          bSum += texture2D(tDiffuse, distortedUv - radialDirNorm * caAmount + offset).b;
          aSum += texture2D(tDiffuse, distortedUv + offset).a;
        }

        gl_FragColor = vec4(rSum / 5.0, gSum / 5.0, bSum / 5.0, aSum / 5.0);
      }
    `,
      };
    return new Nt(i);
  };
let io = class {
  constructor(e) {
    ((this.stage = e),
      (this.clock = new oi()),
      (this.sliderTimeline = null),
      (this.progressTween = null),
      (this.fisheyePass = null),
      (this.rgbShiftVec = new K(0, 0)));
  }
  async _init() {
    (await this.setPlanes(3, 0.9),
      await this.setComposer(),
      this.composer.render(),
      W || this.setMvArea(),
      this.setupMvModeChange());
  }
  setMvArea() {
    ((this.mvElement = document.querySelector("#index-webgl")),
      this.mvArea ||
        (this.mvArea = {
          left: 0,
          top: 0,
          right: 0,
          bottom: 0,
          width: 0,
          height: 0,
        }),
      this.updateMvAreaBounds());
  }
  updateMvAreaBounds() {
    if (this.mvElement) {
      const e = this.mvElement.getBoundingClientRect();
      ((this.mvArea.left = e.left),
        (this.mvArea.top = e.top),
        (this.mvArea.right = e.right),
        (this.mvArea.bottom = e.bottom),
        (this.mvArea.width = e.width),
        (this.mvArea.height = e.height));
    }
  }
  isMouseInMvArea(e, t) {
    return !this.mvArea || !this.mvElement
      ? !1
      : e >= this.mvArea.left &&
          e <= this.mvArea.right &&
          t >= this.mvArea.top &&
          t <= this.mvArea.bottom;
  }
  async setPlanes(e = 0, t = 0) {
    const s = W ? "/video/fix-reel-sp.mp4" : "/video/fix-reel.mp4";
    ((this.video = document.createElement("video")),
      (this.video.src = s),
      (this.video.preload = "auto"),
      (this.video.autoplay = !1),
      (this.video.loop = !0),
      (this.video.muted = !0),
      (this.video.playsInline = !0),
      this.video.setAttribute("playsinline", ""),
      this.video.setAttribute("webkit-playsinline", ""),
      await new Promise((h, p) => {
        ((this.video.onloadedmetadata = () => h()),
          (this.video.onerror = () => p(new Error("Video load failed"))),
          this.video.load());
      }),
      e > 0 &&
        this.video.duration &&
        e < this.video.duration &&
        (this.video.currentTime = e),
      (this.videoTexture = new Oi(this.video)),
      (this.videoTexture.minFilter = We),
      (this.videoTexture.magFilter = We),
      (this.videoTexture.format = ms));
    const i = document.querySelector(".index-mv__video-time p");
    i &&
      ((this._onTimeUpdate = () => {
        if (!this.video) return;
        const h = this.video.currentTime,
          p = Math.floor(h / 60),
          d = Math.floor(h % 60)
            .toString()
            .padStart(2, "0");
        i.textContent = `${p}:${d}`;
      }),
      this.video.addEventListener("timeupdate", this._onTimeUpdate));
    const o = () => this.video.play().catch(() => {});
    t > 0 ? setTimeout(o, t * 1e3) : o();
    const n = this.video.videoWidth,
      r = this.video.videoHeight,
      a = new fs(2, 2),
      l = new Ft({
        uniforms: {
          u_time: { value: 0 },
          t_tex: { value: this.videoTexture },
          resolution: { value: new K(window.innerWidth, window.innerHeight) },
          imageResolution: { value: new K(n, r) },
          u_filter: { value: 0.3 },
        },
        vertexShader: `
      varying vec2 vUv;

        void main(void) {
          vUv = uv;
          gl_Position = vec4(position, 1.0);
        }
      `,
        fragmentShader: `
        precision mediump float;
        uniform sampler2D t_tex;
        uniform vec2 resolution;
        uniform vec2 imageResolution;
        uniform float u_filter;
        varying vec2 vUv;

        void main() {
          vec2 ratio = vec2(
            min((resolution.x / resolution.y) / (imageResolution.x / imageResolution.y), 1.0),
            min((resolution.y / resolution.x) / (imageResolution.y / imageResolution.x), 1.0)
          );

          vec2 baseUv = vec2(
            vUv.x * ratio.x + (1.0 - ratio.x) * 0.5,
            vUv.y * ratio.y + (1.0 - ratio.y) * 0.5
          );

          vec4 Tex = texture2D(t_tex, baseUv);
          vec3 finalColor = mix(Tex.rgb, vec3(0.0), u_filter);

          gl_FragColor = vec4(finalColor, Tex.a);
        }
      `,
      });
    ((this.plane = new Dt(a, l)), this.stage.scene.add(this.plane));
  }
  setupMvModeChange() {
    const e = document.querySelector(".index-mv__mode-button");
    let t = !1;
    e.addEventListener("click", () => {
      window.mvModeRunning ||
        ((t = !t),
        t
          ? (E.to(this.plane.material.uniforms.u_filter, {
              value: 0.9,
              duration: 1.4,
              ease: "power4.out",
            }),
            this.fisheyePass?.uniforms?.u_strength &&
              E.to(this.fisheyePass.uniforms.u_strength, {
                value: 0.7,
                duration: 1.4,
                ease: "power4.out",
              }),
            this.video &&
              E.to(this.video, {
                playbackRate: 0.6,
                duration: 1.4,
                ease: "power4.out",
              }))
          : (E.to(this.plane.material.uniforms.u_filter, {
              value: 0.3,
              duration: 1.4,
              ease: "power4.out",
            }),
            this.fisheyePass?.uniforms?.u_strength &&
              E.to(this.fisheyePass.uniforms.u_strength, {
                value: 0,
                duration: 1.4,
                ease: "power4.out",
              }),
            this.video &&
              E.to(this.video, {
                playbackRate: 1,
                duration: 1.4,
                ease: "power4.out",
              })));
    });
  }
  async setComposer() {
    const e = new vs(this.stage.scene, this.stage.camera);
    ((this.composer = new ws(this.stage.renderer)),
      this.composer.setSize(J.w, J.h),
      this.composer.setPixelRatio(this.stage.renderer.getPixelRatio()),
      this.composer.addPass(e),
      W ||
        ((this.fisheyePass = so({ aspect: J.w / J.h })),
        this.composer.addPass(this.fisheyePass),
        re.material.uniforms.u_resolution.value.set(J.w, J.h),
        this.composer.addPass(re)));
  }
  onUpdate() {
    if (
      this.composer &&
      re &&
      !W &&
      (this.updateMvAreaBounds(),
      this.isMouseInMvArea(mt.x, mt.y) &&
        this.mvArea.width > 0 &&
        this.mvArea.height > 0)
    ) {
      const s = mt.x - this.mvArea.left,
        i = mt.y - this.mvArea.top,
        o = As.x - this.mvArea.left,
        n = As.y - this.mvArea.top,
        r = s / this.mvArea.width,
        a = 1 - i / this.mvArea.height,
        l = o / this.mvArea.width,
        h = 1 - n / this.mvArea.height,
        p = r * 2 - 1,
        d = a * 2 - 1,
        f = l * 2 - 1,
        m = h * 2 - 1;
      (re.material.uniforms.u_mouse.value.set(p, d),
        re.material.uniforms.u_trackedMouse.value.set(f, m));
      const w = p - f,
        g = d - m;
      ((this.rgbShiftVec.x += w * 0.25), (this.rgbShiftVec.y += g * 0.25));
      const y = this.rgbShiftVec.length();
      y > 0.08 && this.rgbShiftVec.multiplyScalar(0.08 / y);
    }
    this.videoTexture &&
      this.video &&
      !this.video.paused &&
      (this.videoTexture.needsUpdate = !0);
    const e = this.clock.getElapsedTime();
    (this.plane &&
      this.plane.material &&
      this.plane.material.uniforms &&
      (this.plane.material.uniforms.u_time.value = e),
      re &&
        re.material.uniforms.u_time &&
        ((re.material.uniforms.u_time.value = e),
        this.rgbShiftVec.multiplyScalar(0.95),
        re.material.uniforms.u_rgbShift.value.copy(this.rgbShiftVec)),
      this.composer
        ? this.composer.render()
        : this.stage.renderer.render(this.stage.scene, this.stage.camera));
  }
  onResize() {
    ((this.width = window.innerWidth),
      (this.height = window.innerHeight),
      this.plane.material.uniforms.resolution.value.set(
        this.width,
        this.height,
      ),
      this.composer &&
        ((this.stage.camera.aspect = window.innerWidth / window.innerHeight),
        this.stage.camera.updateProjectionMatrix(),
        this.composer.setSize(J.w, J.h),
        this.composer.setPixelRatio(this.stage.renderer.getPixelRatio()),
        re?.material.uniforms.u_resolution &&
          re.material.uniforms.u_resolution.value.set(J.w, J.h),
        this.fisheyePass?.uniforms?.u_aspect &&
          (this.fisheyePass.uniforms.u_aspect.value =
            this.width / this.height)),
      this.updateMvAreaBounds());
  }
  dispose() {
    if (
      (this.sliderTimeline &&
        (this.sliderTimeline.kill(), (this.sliderTimeline = null)),
      this.progressTween &&
        (this.progressTween.kill(), (this.progressTween = null)),
      this.composer &&
        (this.composer.renderTarget1 && this.composer.renderTarget1.dispose(),
        this.composer.renderTarget2 && this.composer.renderTarget2.dispose(),
        this.composer.dispose(),
        (this.composer = null)),
      this.stage.scene.traverse((e) => {
        e.isMesh &&
          (e.geometry && e.geometry.dispose(),
          e.material &&
            (Array.isArray(e.material)
              ? e.material.forEach((t) => {
                  (t.map && t.map.dispose(), t.dispose());
                })
              : (e.material.map && e.material.map.dispose(),
                e.material.dispose())));
      }),
      this.stage.renderer.dispose(),
      (this.stage.scene = null),
      (this.stage.camera = null),
      this.videoTexture &&
        (this.videoTexture.dispose(), (this.videoTexture = null)),
      this.video)
    ) {
      this._onTimeUpdate &&
        (this.video.removeEventListener("timeupdate", this._onTimeUpdate),
        (this._onTimeUpdate = null));
      try {
        (this.video.pause(),
          this.video.removeAttribute("src"),
          this.video.load());
      } catch {}
      const e = document.querySelector(".index-mv__video-time p");
      (e && (e.textContent = "0:00"), (this.video = null));
    }
  }
  pauseAnimations() {
    (this.sliderTimeline && this.sliderTimeline.pause(),
      this.progressTween && this.progressTween.pause());
  }
  resumeAnimations() {
    (this.sliderTimeline && this.sliderTimeline.resume(),
      this.progressTween && this.progressTween.resume());
  }
};
const Y = { w: window.innerWidth };
E.registerPlugin(ct);
const oo = 45,
  no = 1e3 / oo;
let De, Ee, xt, Qe, Gt;
const ro = async () => {
    ((De = new to()),
      (Ee = new io(De)),
      qs(),
      await De._init(),
      await Ee._init(),
      (Qe = () => {
        (qs(), De.onResize(), Ee.onResize());
      }));
    let u = 0;
    ((Gt = (e = 0) => {
      if (((xt = requestAnimationFrame(Gt)), W)) {
        if (e - u < no) return;
        u = e;
      }
      (De.onLoop(), Ee.onUpdate());
    }),
      Gt(),
      window.addEventListener("resize", Qe));
  },
  ao = async () => {
    await ro();
  },
  lo = () => {
    (xt && (cancelAnimationFrame(xt), (xt = null)),
      Qe && (window.removeEventListener("resize", Qe), (Qe = null)),
      Ee && typeof Ee.dispose == "function" && Ee.dispose(),
      (Ee = null),
      (De = null));
  },
  ht = () => {
    (E.to(document.documentElement, {
      "--header-color": "#f0f0f0",
      duration: 0.4,
      overwrite: "auto",
    }),
      E.to(document.documentElement, {
        "--line-color": "#f0f0f0",
        duration: 0.4,
        overwrite: "auto",
      }));
  },
  ye = () => {
    (E.to(document.documentElement, {
      "--header-color": "#050505",
      duration: 0.4,
      overwrite: "auto",
    }),
      E.to(document.documentElement, {
        "--line-color": "#050505",
        duration: 0.4,
        overwrite: "auto",
      }));
  },
  ns = [],
  co = (u, e, { enter: t, enterBack: s, leave: i, leaveBack: o }) => {
    const n = ct.create({
      trigger: u,
      start: "top top",
      end: "bottom top",
      scroller: e,
      onEnter: () => {
        ht();
      },
      onEnterBack: () => {},
      onLeaveBack: () => {
        ye();
      },
      onLeave: () => {},
    });
    return (ns.push(n), n);
  },
  pi = () => {
    (ns.forEach((u) => u.kill()), (ns.length = 0));
  },
  ne = 767,
  gs = () => Y.w < ne,
  ho = (u) => {
    (document.fonts.ready.then(() => {
      let e = He.create("[data-text='split']", {
        type: "words,chars",
        charsClass: "chars",
        wordsClass: "words",
        tag: "span",
      });
      const t = () => {
        E.to(e.chars, {
          y: "0%",
          delay: 0.1,
          duration: 1.4,
          ease: "power4.out",
          stagger: { from: "start", each: 0.015 },
        });
      };
      (window.loading
        ? E.to(e.chars, {
            y: "0%",
            delay: 0.9,
            duration: 1.4,
            ease: "power4.out",
            stagger: { from: "start", each: 0.015 },
          })
        : document.addEventListener("loading:complete", t, { once: !0 }),
        uo());
    }),
      window.loading
        ? E.to(".index-mv__main-filter", {
            opacity: 0,
            delay: 1,
            duration: 1.4,
            ease: "power4.out",
          })
        : E.set(".index-mv__main-filter", { opacity: 0 }),
      E.to(".index-background", {
        yPercent: 50,
        scrollTrigger: {
          trigger: ".index-mv",
          start: "top top",
          end: "bottom top-=50%",
          scroller: u,
          scrub: !0,
        },
      }));
  },
  uo = () => {
    const u = document.querySelector(".index-mv__mode-button");
    document.querySelector(".index-mv video");
    const e = E.timeline({
        paused: !0,
        onComplete: () => {
          window.mvModeRunning = !1;
        },
      }),
      t = E.timeline({
        paused: !0,
        onComplete: () => {
          window.mvModeRunning = !1;
        },
      });
    let s = !1;
    window.mvModeRunning = !1;
    const i = () => {
        (e.to(".index-mv__head-title .chars", {
          y: "-110%",
          duration: 1.4,
          ease: "power4.out",
        }),
          e.to(
            ".index-mv__video-time",
            { opacity: 0.5, duration: 1.4, ease: "power4.out" },
            "<",
          ),
          Y.w < 767 &&
            e.to(
              ".index-background__video-filter",
              { opacity: 0.9, duration: 1.4, ease: "power4.out" },
              "<",
            ),
          e.to(
            '[data-focus="text"]',
            {
              y: "0%",
              duration: 1.4,
              ease: "power4.out",
              stagger: { from: "start", each: 0.028 },
            },
            "<0.4",
          ));
      },
      o = () => {
        (t.to('[data-focus="text"]', {
          y: "-100%",
          duration: 1.4,
          ease: "power4.out",
          stagger: { from: "start", each: 0.01 },
        }),
          t.fromTo(
            ".index-mv__head-title .chars",
            { y: "100%" },
            { y: "0%", duration: 1.4, ease: "power4.out" },
            "<0.4",
          ),
          Y.w < 767 &&
            t.to(
              ".index-background__video-filter",
              { opacity: 0.3, duration: 1.4, ease: "power4.out" },
              "<",
            ),
          t.to(
            ".index-mv__video-time",
            { opacity: 1, duration: 1.4, ease: "power4.out" },
            "<",
          ));
      },
      n = () => {
        E.to(u, {
          opacity: 0,
          duration: 0.4,
          ease: "power4.out",
          onComplete: () => {
            let r = s ? "Default Mode" : "Focus Mode";
            ((u.innerHTML = ` <span class="c-en-text--md" data-text='split'>+ ${r}</span>`),
              E.to(u, { opacity: 1, duration: 0.3 }));
          },
        });
      };
    (setTimeout(() => {
      (i(), o());
    }, 200),
      u.addEventListener("click", () => {
        window.mvModeRunning ||
          ((s = !s),
          setTimeout(() => {
            window.mvModeRunning = !0;
          }, 10),
          s ? (e.play(0), n()) : (t.play(0), n()));
      }));
  };
let Et = null,
  Pt = null;
const po = (u) => {
    (document.fonts.ready.then(() => {
      let e = He.create(".index-about__title", {
        type: "lines,words,chars",
        linesClass: "words-line",
        wordsClass: "words",
        charsClass: "chars",
        tag: "span",
      });
      (e.lines.forEach((t) => {
        const s = document.createElement("span");
        (s.classList.add("words-line-parent"),
          t.parentNode.insertBefore(s, t),
          s.appendChild(t));
      }),
        E.to(e.words, {
          y: "0%",
          duration: 1.6,
          ease: "power4.out",
          scrollTrigger: {
            trigger: ".index-about__inner",
            scroller: u,
            start: "top 80%",
          },
        }));
    }),
      (Et = ct.create({
        trigger: ".index-about",
        start: "top top",
        end: "top top",
        scroller: u,
        onEnter: () => {
          ye();
        },
        onLeaveBack: () => {
          ht();
        },
      })));
  },
  mo = (u) => {
    const e = Y.w < ne,
      t = document.querySelector(".index-about__card-background");
    if (
      (E.to(t, {
        yPercent: 30,
        ease: "none",
        scrollTrigger: {
          trigger: ".index-about__card",
          start: "top bottom",
          end: "bottom top-=50%",
          scroller: u,
          scrub: !0,
        },
      }),
      !e)
    ) {
      const i = document.querySelectorAll(".image-inner"),
        o = document.querySelectorAll('[data-target="case"]');
      i.forEach((n, r) => {
        E.to(n, {
          yPercent: 30,
          ease: "none",
          scrollTrigger: {
            trigger: o[r],
            start: "top bottom",
            end: "bottom top-=50%",
            scroller: u,
            scrub: !0,
          },
        });
      });
    }
    E.to(".approach__background-inner", {
      yPercent: 30,
      ease: "none",
      scrollTrigger: {
        trigger: ".approach",
        start: "top bottom",
        end: "bottom top-=50%",
        scroller: u,
        scrub: !0,
      },
    });
    const s = document.querySelector(".approach__video");
    s &&
      ((Pt = new IntersectionObserver(
        (i) => {
          i.forEach((o) => {
            const n = o.target;
            o.isIntersecting ? n.play().catch(() => {}) : n.pause();
          });
        },
        { root: u, rootMargin: "50%", threshold: 0 },
      )),
      Pt.observe(s));
  },
  fo = () => {
    const u = document.querySelector(".index-background video");
    if (!u) return;
    const e = u.querySelector("source[data-src]");
    if (e) {
      const t = e.getAttribute("data-src");
      t && (e.src = t);
    }
    (u.load(), u.play().catch(() => {}));
  },
  vo = () => {
    const u = document.querySelector(".index-background video"),
      e = document.querySelector(".index-mv__video-time p");
    if (!u || !e) return;
    const t = () => {
      const s = u.currentTime,
        i = Math.floor(s / 60),
        o = Math.floor(s % 60)
          .toString()
          .padStart(2, "0");
      e.textContent = `${i}:${o}`;
    };
    (u.addEventListener("timeupdate", t), (u._onTimeUpdate = t));
  },
  wo = () => {
    const u = document.querySelector(".index-background video");
    if (!u) return;
    (u._onTimeUpdate &&
      (u.removeEventListener("timeupdate", u._onTimeUpdate),
      (u._onTimeUpdate = null)),
      u.pause());
    const e = u.querySelector("source");
    if (e?.src) {
      try {
        e.setAttribute("data-src", new URL(e.src).pathname);
      } catch {
        e.setAttribute("data-src", e.getAttribute("src") || "");
      }
      e.removeAttribute("src");
    }
    u.load();
  },
  go = () => {
    let u = document.querySelector(".container");
    (Y.w < 767
      ? (fo(), vo())
      : setTimeout(() => {
          ao();
        }, 100),
      ho(u),
      ht(),
      setTimeout(() => {
        (po(u), mo(u));
      }, 400));
  },
  yo = () => {
    (pi(), Et && (Et.kill(), (Et = null)));
  },
  bo = () => {
    (Pt?.disconnect(), (Pt = null), Y.w < 767 ? wo() : lo());
  },
  Le = (u) => {
    E.fromTo(
      u,
      { opacity: 0 },
      { opacity: 1, delay: 0.9, duration: 1.4, ease: "power4.out" },
    );
  },
  ut = (u, e, t = null) => {
    const i = (t ?? document).querySelector(u);
    if (!i) return;
    let o = He.create(i, {
      type: "lines,words,chars",
      linesClass: "words-line",
      wordsClass: "words",
      charsClass: "chars",
      tag: "span",
    });
    (o.lines.forEach((n) => {
      const r = document.createElement("span");
      (r.classList.add("words-line-parent"),
        n.parentNode.insertBefore(r, n),
        r.appendChild(n));
    }),
      o.chars.forEach((n) => {
        E.set(n, { willChange: "transform" });
      }),
      E.to(o.chars, {
        y: "0%",
        delay: e,
        duration: 1.4,
        ease: "power4.out",
        stagger: { from: "start", each: 0.01 },
      }));
  },
  xo = (u) => {
    if (!u) return;
    u.querySelectorAll("script").forEach((t) => {
      if (t.dataset.swupExecuted === "true") return;
      const s = document.createElement("script");
      ([...t.attributes].forEach((i) => {
        s.setAttribute(i.name, i.value);
      }),
        (s.textContent = t.textContent),
        (s.dataset.swupExecuted = "true"),
        t.replaceWith(s));
    });
  },
  Eo = (u = null) => {
    (E.set(".case", { opacity: 0 }),
      xo(u),
      window.dispatchEvent(new Event("astro:page-load")),
      setTimeout(() => {
        (setTimeout(() => {
          Le(".case");
        }, 300),
          setTimeout(() => {
            ut('.case-head-title [data-split="title"]', 0.6);
          }, 600),
          ye());
      }, 0));
  },
  Ls = () => document.querySelector(".about-axes"),
  Be = {
    get w() {
      const u = Ls();
      return u ? u.offsetWidth : window.innerWidth;
    },
    get h() {
      const u = Ls();
      return u ? u.offsetHeight : window.innerHeight;
    },
  };
let Ao = class Z {
  static get CAMERA_PARAM() {
    return {
      fov: 60,
      fovy: 60,
      aspect: Be.w / Be.h,
      near: 0.001,
      far: 1e4,
      x: 0,
      y: 0,
      z: 0.44,
      lookAt: new ge(0, 0, 0),
    };
  }
  constructor() {
    (this.render,
      this.canvas,
      this.controls,
      this.gridHelper,
      (this.render = this.render.bind(this)),
      (this.Dev = !0),
      (this.loader = new Ie()));
  }
  async _setRender() {
    ((this.renderer = new kt({ antialias: !0, alpha: !0 })),
      this.renderer.setClearColor(14934496, 0),
      this.renderer.setSize(Be.w, Be.h),
      this.renderer.setPixelRatio(window.setPixelRatio),
      (this.renderer.toneMapping = ni),
      (this.canvas = document.querySelector("#webgl")),
      this.canvas.appendChild(this.renderer.domElement));
  }
  async _setScene() {
    ((this.scene = new Bt()), (this.scene.fog = new Vi(0, 0.32, 0.44)));
  }
  async _setCamera() {
    ((this.camera = new _t(
      Z.CAMERA_PARAM.fovy,
      Z.CAMERA_PARAM.aspect,
      Z.CAMERA_PARAM.near,
      Z.CAMERA_PARAM.far,
    )),
      this.camera.position.set(
        Z.CAMERA_PARAM.x,
        Z.CAMERA_PARAM.y,
        Z.CAMERA_PARAM.z,
      ),
      this.camera.lookAt(Z.CAMERA_PARAM.lookAt),
      this.camera.updateProjectionMatrix());
  }
  async _init() {
    (await this._setRender(), await this._setScene(), await this._setCamera());
  }
  render() {}
  onLoop() {
    this.render();
  }
  onResize() {
    (this.renderer.setSize(Be.w, Be.h),
      (this.camera = new _t(
        Z.CAMERA_PARAM.fovy,
        Z.CAMERA_PARAM.aspect,
        Z.CAMERA_PARAM.near,
        Z.CAMERA_PARAM.far,
      )),
      this.camera.position.set(
        Z.CAMERA_PARAM.x,
        Z.CAMERA_PARAM.y,
        Z.CAMERA_PARAM.z,
      ),
      this.camera.lookAt(Z.CAMERA_PARAM.lookAt),
      this.camera.updateProjectionMatrix());
  }
};
class le {
  constructor(e) {
    (e === void 0 && (e = [0, 0, 0, 0, 0, 0, 0, 0, 0]), (this.elements = e));
  }
  identity() {
    const e = this.elements;
    ((e[0] = 1),
      (e[1] = 0),
      (e[2] = 0),
      (e[3] = 0),
      (e[4] = 1),
      (e[5] = 0),
      (e[6] = 0),
      (e[7] = 0),
      (e[8] = 1));
  }
  setZero() {
    const e = this.elements;
    ((e[0] = 0),
      (e[1] = 0),
      (e[2] = 0),
      (e[3] = 0),
      (e[4] = 0),
      (e[5] = 0),
      (e[6] = 0),
      (e[7] = 0),
      (e[8] = 0));
  }
  setTrace(e) {
    const t = this.elements;
    ((t[0] = e.x), (t[4] = e.y), (t[8] = e.z));
  }
  getTrace(e) {
    e === void 0 && (e = new c());
    const t = this.elements;
    return ((e.x = t[0]), (e.y = t[4]), (e.z = t[8]), e);
  }
  vmult(e, t) {
    t === void 0 && (t = new c());
    const s = this.elements,
      i = e.x,
      o = e.y,
      n = e.z;
    return (
      (t.x = s[0] * i + s[1] * o + s[2] * n),
      (t.y = s[3] * i + s[4] * o + s[5] * n),
      (t.z = s[6] * i + s[7] * o + s[8] * n),
      t
    );
  }
  smult(e) {
    for (let t = 0; t < this.elements.length; t++) this.elements[t] *= e;
  }
  mmult(e, t) {
    t === void 0 && (t = new le());
    const s = this.elements,
      i = e.elements,
      o = t.elements,
      n = s[0],
      r = s[1],
      a = s[2],
      l = s[3],
      h = s[4],
      p = s[5],
      d = s[6],
      f = s[7],
      m = s[8],
      w = i[0],
      g = i[1],
      y = i[2],
      v = i[3],
      b = i[4],
      x = i[5],
      A = i[6],
      _ = i[7],
      P = i[8];
    return (
      (o[0] = n * w + r * v + a * A),
      (o[1] = n * g + r * b + a * _),
      (o[2] = n * y + r * x + a * P),
      (o[3] = l * w + h * v + p * A),
      (o[4] = l * g + h * b + p * _),
      (o[5] = l * y + h * x + p * P),
      (o[6] = d * w + f * v + m * A),
      (o[7] = d * g + f * b + m * _),
      (o[8] = d * y + f * x + m * P),
      t
    );
  }
  scale(e, t) {
    t === void 0 && (t = new le());
    const s = this.elements,
      i = t.elements;
    for (let o = 0; o !== 3; o++)
      ((i[3 * o + 0] = e.x * s[3 * o + 0]),
        (i[3 * o + 1] = e.y * s[3 * o + 1]),
        (i[3 * o + 2] = e.z * s[3 * o + 2]));
    return t;
  }
  solve(e, t) {
    t === void 0 && (t = new c());
    const s = 3,
      i = 4,
      o = [];
    let n, r;
    for (n = 0; n < s * i; n++) o.push(0);
    for (n = 0; n < 3; n++)
      for (r = 0; r < 3; r++) o[n + i * r] = this.elements[n + 3 * r];
    ((o[3] = e.x), (o[7] = e.y), (o[11] = e.z));
    let a = 3;
    const l = a;
    let h;
    const p = 4;
    let d;
    do {
      if (((n = l - a), o[n + i * n] === 0)) {
        for (r = n + 1; r < l; r++)
          if (o[n + i * r] !== 0) {
            h = p;
            do ((d = p - h), (o[d + i * n] += o[d + i * r]));
            while (--h);
            break;
          }
      }
      if (o[n + i * n] !== 0)
        for (r = n + 1; r < l; r++) {
          const f = o[n + i * r] / o[n + i * n];
          h = p;
          do
            ((d = p - h),
              (o[d + i * r] = d <= n ? 0 : o[d + i * r] - o[d + i * n] * f));
          while (--h);
        }
    } while (--a);
    if (
      ((t.z = o[2 * i + 3] / o[2 * i + 2]),
      (t.y = (o[1 * i + 3] - o[1 * i + 2] * t.z) / o[1 * i + 1]),
      (t.x =
        (o[0 * i + 3] - o[0 * i + 2] * t.z - o[0 * i + 1] * t.y) /
        o[0 * i + 0]),
      isNaN(t.x) ||
        isNaN(t.y) ||
        isNaN(t.z) ||
        t.x === 1 / 0 ||
        t.y === 1 / 0 ||
        t.z === 1 / 0)
    )
      throw `Could not solve equation! Got x=[${t.toString()}], b=[${e.toString()}], A=[${this.toString()}]`;
    return t;
  }
  e(e, t, s) {
    if (s === void 0) return this.elements[t + 3 * e];
    this.elements[t + 3 * e] = s;
  }
  copy(e) {
    for (let t = 0; t < e.elements.length; t++)
      this.elements[t] = e.elements[t];
    return this;
  }
  toString() {
    let e = "";
    for (let s = 0; s < 9; s++) e += this.elements[s] + ",";
    return e;
  }
  reverse(e) {
    e === void 0 && (e = new le());
    const t = 3,
      s = 6,
      i = So;
    let o, n;
    for (o = 0; o < 3; o++)
      for (n = 0; n < 3; n++) i[o + s * n] = this.elements[o + 3 * n];
    ((i[3] = 1),
      (i[9] = 0),
      (i[15] = 0),
      (i[4] = 0),
      (i[10] = 1),
      (i[16] = 0),
      (i[5] = 0),
      (i[11] = 0),
      (i[17] = 1));
    let r = 3;
    const a = r;
    let l;
    const h = s;
    let p;
    do {
      if (((o = a - r), i[o + s * o] === 0)) {
        for (n = o + 1; n < a; n++)
          if (i[o + s * n] !== 0) {
            l = h;
            do ((p = h - l), (i[p + s * o] += i[p + s * n]));
            while (--l);
            break;
          }
      }
      if (i[o + s * o] !== 0)
        for (n = o + 1; n < a; n++) {
          const d = i[o + s * n] / i[o + s * o];
          l = h;
          do
            ((p = h - l),
              (i[p + s * n] = p <= o ? 0 : i[p + s * n] - i[p + s * o] * d));
          while (--l);
        }
    } while (--r);
    o = 2;
    do {
      n = o - 1;
      do {
        const d = i[o + s * n] / i[o + s * o];
        l = s;
        do ((p = s - l), (i[p + s * n] = i[p + s * n] - i[p + s * o] * d));
        while (--l);
      } while (n--);
    } while (--o);
    o = 2;
    do {
      const d = 1 / i[o + s * o];
      l = s;
      do ((p = s - l), (i[p + s * o] = i[p + s * o] * d));
      while (--l);
    } while (o--);
    o = 2;
    do {
      n = 2;
      do {
        if (((p = i[t + n + s * o]), isNaN(p) || p === 1 / 0))
          throw `Could not reverse! A=[${this.toString()}]`;
        e.e(o, n, p);
      } while (n--);
    } while (o--);
    return e;
  }
  setRotationFromQuaternion(e) {
    const t = e.x,
      s = e.y,
      i = e.z,
      o = e.w,
      n = t + t,
      r = s + s,
      a = i + i,
      l = t * n,
      h = t * r,
      p = t * a,
      d = s * r,
      f = s * a,
      m = i * a,
      w = o * n,
      g = o * r,
      y = o * a,
      v = this.elements;
    return (
      (v[0] = 1 - (d + m)),
      (v[1] = h - y),
      (v[2] = p + g),
      (v[3] = h + y),
      (v[4] = 1 - (l + m)),
      (v[5] = f - w),
      (v[6] = p - g),
      (v[7] = f + w),
      (v[8] = 1 - (l + d)),
      this
    );
  }
  transpose(e) {
    e === void 0 && (e = new le());
    const t = this.elements,
      s = e.elements;
    let i;
    return (
      (s[0] = t[0]),
      (s[4] = t[4]),
      (s[8] = t[8]),
      (i = t[1]),
      (s[1] = t[3]),
      (s[3] = i),
      (i = t[2]),
      (s[2] = t[6]),
      (s[6] = i),
      (i = t[5]),
      (s[5] = t[7]),
      (s[7] = i),
      e
    );
  }
}
const So = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
class c {
  constructor(e, t, s) {
    (e === void 0 && (e = 0),
      t === void 0 && (t = 0),
      s === void 0 && (s = 0),
      (this.x = e),
      (this.y = t),
      (this.z = s));
  }
  cross(e, t) {
    t === void 0 && (t = new c());
    const s = e.x,
      i = e.y,
      o = e.z,
      n = this.x,
      r = this.y,
      a = this.z;
    return (
      (t.x = r * o - a * i),
      (t.y = a * s - n * o),
      (t.z = n * i - r * s),
      t
    );
  }
  set(e, t, s) {
    return ((this.x = e), (this.y = t), (this.z = s), this);
  }
  setZero() {
    this.x = this.y = this.z = 0;
  }
  vadd(e, t) {
    if (t) ((t.x = e.x + this.x), (t.y = e.y + this.y), (t.z = e.z + this.z));
    else return new c(this.x + e.x, this.y + e.y, this.z + e.z);
  }
  vsub(e, t) {
    if (t) ((t.x = this.x - e.x), (t.y = this.y - e.y), (t.z = this.z - e.z));
    else return new c(this.x - e.x, this.y - e.y, this.z - e.z);
  }
  crossmat() {
    return new le([0, -this.z, this.y, this.z, 0, -this.x, -this.y, this.x, 0]);
  }
  normalize() {
    const e = this.x,
      t = this.y,
      s = this.z,
      i = Math.sqrt(e * e + t * t + s * s);
    if (i > 0) {
      const o = 1 / i;
      ((this.x *= o), (this.y *= o), (this.z *= o));
    } else ((this.x = 0), (this.y = 0), (this.z = 0));
    return i;
  }
  unit(e) {
    e === void 0 && (e = new c());
    const t = this.x,
      s = this.y,
      i = this.z;
    let o = Math.sqrt(t * t + s * s + i * i);
    return (
      o > 0
        ? ((o = 1 / o), (e.x = t * o), (e.y = s * o), (e.z = i * o))
        : ((e.x = 1), (e.y = 0), (e.z = 0)),
      e
    );
  }
  length() {
    const e = this.x,
      t = this.y,
      s = this.z;
    return Math.sqrt(e * e + t * t + s * s);
  }
  lengthSquared() {
    return this.dot(this);
  }
  distanceTo(e) {
    const t = this.x,
      s = this.y,
      i = this.z,
      o = e.x,
      n = e.y,
      r = e.z;
    return Math.sqrt((o - t) * (o - t) + (n - s) * (n - s) + (r - i) * (r - i));
  }
  distanceSquared(e) {
    const t = this.x,
      s = this.y,
      i = this.z,
      o = e.x,
      n = e.y,
      r = e.z;
    return (o - t) * (o - t) + (n - s) * (n - s) + (r - i) * (r - i);
  }
  scale(e, t) {
    t === void 0 && (t = new c());
    const s = this.x,
      i = this.y,
      o = this.z;
    return ((t.x = e * s), (t.y = e * i), (t.z = e * o), t);
  }
  vmul(e, t) {
    return (
      t === void 0 && (t = new c()),
      (t.x = e.x * this.x),
      (t.y = e.y * this.y),
      (t.z = e.z * this.z),
      t
    );
  }
  addScaledVector(e, t, s) {
    return (
      s === void 0 && (s = new c()),
      (s.x = this.x + e * t.x),
      (s.y = this.y + e * t.y),
      (s.z = this.z + e * t.z),
      s
    );
  }
  dot(e) {
    return this.x * e.x + this.y * e.y + this.z * e.z;
  }
  isZero() {
    return this.x === 0 && this.y === 0 && this.z === 0;
  }
  negate(e) {
    return (
      e === void 0 && (e = new c()),
      (e.x = -this.x),
      (e.y = -this.y),
      (e.z = -this.z),
      e
    );
  }
  tangents(e, t) {
    const s = this.length();
    if (s > 0) {
      const i = _o,
        o = 1 / s;
      i.set(this.x * o, this.y * o, this.z * o);
      const n = Co;
      (Math.abs(i.x) < 0.9
        ? (n.set(1, 0, 0), i.cross(n, e))
        : (n.set(0, 1, 0), i.cross(n, e)),
        i.cross(e, t));
    } else (e.set(1, 0, 0), t.set(0, 1, 0));
  }
  toString() {
    return `${this.x},${this.y},${this.z}`;
  }
  toArray() {
    return [this.x, this.y, this.z];
  }
  copy(e) {
    return ((this.x = e.x), (this.y = e.y), (this.z = e.z), this);
  }
  lerp(e, t, s) {
    const i = this.x,
      o = this.y,
      n = this.z;
    ((s.x = i + (e.x - i) * t),
      (s.y = o + (e.y - o) * t),
      (s.z = n + (e.z - n) * t));
  }
  almostEquals(e, t) {
    return (
      t === void 0 && (t = 1e-6),
      !(
        Math.abs(this.x - e.x) > t ||
        Math.abs(this.y - e.y) > t ||
        Math.abs(this.z - e.z) > t
      )
    );
  }
  almostZero(e) {
    return (
      e === void 0 && (e = 1e-6),
      !(Math.abs(this.x) > e || Math.abs(this.y) > e || Math.abs(this.z) > e)
    );
  }
  isAntiparallelTo(e, t) {
    return (this.negate(Is), Is.almostEquals(e, t));
  }
  clone() {
    return new c(this.x, this.y, this.z);
  }
}
c.ZERO = new c(0, 0, 0);
c.UNIT_X = new c(1, 0, 0);
c.UNIT_Y = new c(0, 1, 0);
c.UNIT_Z = new c(0, 0, 1);
const _o = new c(),
  Co = new c(),
  Is = new c();
class oe {
  constructor(e) {
    (e === void 0 && (e = {}),
      (this.lowerBound = new c()),
      (this.upperBound = new c()),
      e.lowerBound && this.lowerBound.copy(e.lowerBound),
      e.upperBound && this.upperBound.copy(e.upperBound));
  }
  setFromPoints(e, t, s, i) {
    const o = this.lowerBound,
      n = this.upperBound,
      r = s;
    (o.copy(e[0]), r && r.vmult(o, o), n.copy(o));
    for (let a = 1; a < e.length; a++) {
      let l = e[a];
      (r && (r.vmult(l, ks), (l = ks)),
        l.x > n.x && (n.x = l.x),
        l.x < o.x && (o.x = l.x),
        l.y > n.y && (n.y = l.y),
        l.y < o.y && (o.y = l.y),
        l.z > n.z && (n.z = l.z),
        l.z < o.z && (o.z = l.z));
    }
    return (
      t && (t.vadd(o, o), t.vadd(n, n)),
      i &&
        ((o.x -= i),
        (o.y -= i),
        (o.z -= i),
        (n.x += i),
        (n.y += i),
        (n.z += i)),
      this
    );
  }
  copy(e) {
    return (
      this.lowerBound.copy(e.lowerBound),
      this.upperBound.copy(e.upperBound),
      this
    );
  }
  clone() {
    return new oe().copy(this);
  }
  extend(e) {
    ((this.lowerBound.x = Math.min(this.lowerBound.x, e.lowerBound.x)),
      (this.upperBound.x = Math.max(this.upperBound.x, e.upperBound.x)),
      (this.lowerBound.y = Math.min(this.lowerBound.y, e.lowerBound.y)),
      (this.upperBound.y = Math.max(this.upperBound.y, e.upperBound.y)),
      (this.lowerBound.z = Math.min(this.lowerBound.z, e.lowerBound.z)),
      (this.upperBound.z = Math.max(this.upperBound.z, e.upperBound.z)));
  }
  overlaps(e) {
    const t = this.lowerBound,
      s = this.upperBound,
      i = e.lowerBound,
      o = e.upperBound,
      n = (i.x <= s.x && s.x <= o.x) || (t.x <= o.x && o.x <= s.x),
      r = (i.y <= s.y && s.y <= o.y) || (t.y <= o.y && o.y <= s.y),
      a = (i.z <= s.z && s.z <= o.z) || (t.z <= o.z && o.z <= s.z);
    return n && r && a;
  }
  volume() {
    const e = this.lowerBound,
      t = this.upperBound;
    return (t.x - e.x) * (t.y - e.y) * (t.z - e.z);
  }
  contains(e) {
    const t = this.lowerBound,
      s = this.upperBound,
      i = e.lowerBound,
      o = e.upperBound;
    return (
      t.x <= i.x &&
      s.x >= o.x &&
      t.y <= i.y &&
      s.y >= o.y &&
      t.z <= i.z &&
      s.z >= o.z
    );
  }
  getCorners(e, t, s, i, o, n, r, a) {
    const l = this.lowerBound,
      h = this.upperBound;
    (e.copy(l),
      t.set(h.x, l.y, l.z),
      s.set(h.x, h.y, l.z),
      i.set(l.x, h.y, h.z),
      o.set(h.x, l.y, h.z),
      n.set(l.x, h.y, l.z),
      r.set(l.x, l.y, h.z),
      a.copy(h));
  }
  toLocalFrame(e, t) {
    const s = Bs,
      i = s[0],
      o = s[1],
      n = s[2],
      r = s[3],
      a = s[4],
      l = s[5],
      h = s[6],
      p = s[7];
    this.getCorners(i, o, n, r, a, l, h, p);
    for (let d = 0; d !== 8; d++) {
      const f = s[d];
      e.pointToLocal(f, f);
    }
    return t.setFromPoints(s);
  }
  toWorldFrame(e, t) {
    const s = Bs,
      i = s[0],
      o = s[1],
      n = s[2],
      r = s[3],
      a = s[4],
      l = s[5],
      h = s[6],
      p = s[7];
    this.getCorners(i, o, n, r, a, l, h, p);
    for (let d = 0; d !== 8; d++) {
      const f = s[d];
      e.pointToWorld(f, f);
    }
    return t.setFromPoints(s);
  }
  overlapsRay(e) {
    const { direction: t, from: s } = e,
      i = 1 / t.x,
      o = 1 / t.y,
      n = 1 / t.z,
      r = (this.lowerBound.x - s.x) * i,
      a = (this.upperBound.x - s.x) * i,
      l = (this.lowerBound.y - s.y) * o,
      h = (this.upperBound.y - s.y) * o,
      p = (this.lowerBound.z - s.z) * n,
      d = (this.upperBound.z - s.z) * n,
      f = Math.max(Math.max(Math.min(r, a), Math.min(l, h)), Math.min(p, d)),
      m = Math.min(Math.min(Math.max(r, a), Math.max(l, h)), Math.max(p, d));
    return !(m < 0 || f > m);
  }
}
const ks = new c(),
  Bs = [new c(), new c(), new c(), new c(), new c(), new c(), new c(), new c()];
class Ns {
  constructor() {
    this.matrix = [];
  }
  get(e, t) {
    let { index: s } = e,
      { index: i } = t;
    if (i > s) {
      const o = i;
      ((i = s), (s = o));
    }
    return this.matrix[((s * (s + 1)) >> 1) + i - 1];
  }
  set(e, t, s) {
    let { index: i } = e,
      { index: o } = t;
    if (o > i) {
      const n = o;
      ((o = i), (i = n));
    }
    this.matrix[((i * (i + 1)) >> 1) + o - 1] = s ? 1 : 0;
  }
  reset() {
    for (let e = 0, t = this.matrix.length; e !== t; e++) this.matrix[e] = 0;
  }
  setNumObjects(e) {
    this.matrix.length = (e * (e - 1)) >> 1;
  }
}
class mi {
  addEventListener(e, t) {
    this._listeners === void 0 && (this._listeners = {});
    const s = this._listeners;
    return (
      s[e] === void 0 && (s[e] = []),
      s[e].includes(t) || s[e].push(t),
      this
    );
  }
  hasEventListener(e, t) {
    if (this._listeners === void 0) return !1;
    const s = this._listeners;
    return !!(s[e] !== void 0 && s[e].includes(t));
  }
  hasAnyEventListener(e) {
    return this._listeners === void 0 ? !1 : this._listeners[e] !== void 0;
  }
  removeEventListener(e, t) {
    if (this._listeners === void 0) return this;
    const s = this._listeners;
    if (s[e] === void 0) return this;
    const i = s[e].indexOf(t);
    return (i !== -1 && s[e].splice(i, 1), this);
  }
  dispatchEvent(e) {
    if (this._listeners === void 0) return this;
    const s = this._listeners[e.type];
    if (s !== void 0) {
      e.target = this;
      for (let i = 0, o = s.length; i < o; i++) s[i].call(this, e);
    }
    return this;
  }
}
class $ {
  constructor(e, t, s, i) {
    (e === void 0 && (e = 0),
      t === void 0 && (t = 0),
      s === void 0 && (s = 0),
      i === void 0 && (i = 1),
      (this.x = e),
      (this.y = t),
      (this.z = s),
      (this.w = i));
  }
  set(e, t, s, i) {
    return ((this.x = e), (this.y = t), (this.z = s), (this.w = i), this);
  }
  toString() {
    return `${this.x},${this.y},${this.z},${this.w}`;
  }
  toArray() {
    return [this.x, this.y, this.z, this.w];
  }
  setFromAxisAngle(e, t) {
    const s = Math.sin(t * 0.5);
    return (
      (this.x = e.x * s),
      (this.y = e.y * s),
      (this.z = e.z * s),
      (this.w = Math.cos(t * 0.5)),
      this
    );
  }
  toAxisAngle(e) {
    (e === void 0 && (e = new c()), this.normalize());
    const t = 2 * Math.acos(this.w),
      s = Math.sqrt(1 - this.w * this.w);
    return (
      s < 0.001
        ? ((e.x = this.x), (e.y = this.y), (e.z = this.z))
        : ((e.x = this.x / s), (e.y = this.y / s), (e.z = this.z / s)),
      [e, t]
    );
  }
  setFromVectors(e, t) {
    if (e.isAntiparallelTo(t)) {
      const s = Mo,
        i = Po;
      (e.tangents(s, i), this.setFromAxisAngle(s, Math.PI));
    } else {
      const s = e.cross(t);
      ((this.x = s.x),
        (this.y = s.y),
        (this.z = s.z),
        (this.w = Math.sqrt(e.length() ** 2 * t.length() ** 2) + e.dot(t)),
        this.normalize());
    }
    return this;
  }
  mult(e, t) {
    t === void 0 && (t = new $());
    const s = this.x,
      i = this.y,
      o = this.z,
      n = this.w,
      r = e.x,
      a = e.y,
      l = e.z,
      h = e.w;
    return (
      (t.x = s * h + n * r + i * l - o * a),
      (t.y = i * h + n * a + o * r - s * l),
      (t.z = o * h + n * l + s * a - i * r),
      (t.w = n * h - s * r - i * a - o * l),
      t
    );
  }
  inverse(e) {
    e === void 0 && (e = new $());
    const t = this.x,
      s = this.y,
      i = this.z,
      o = this.w;
    this.conjugate(e);
    const n = 1 / (t * t + s * s + i * i + o * o);
    return ((e.x *= n), (e.y *= n), (e.z *= n), (e.w *= n), e);
  }
  conjugate(e) {
    return (
      e === void 0 && (e = new $()),
      (e.x = -this.x),
      (e.y = -this.y),
      (e.z = -this.z),
      (e.w = this.w),
      e
    );
  }
  normalize() {
    let e = Math.sqrt(
      this.x * this.x + this.y * this.y + this.z * this.z + this.w * this.w,
    );
    return (
      e === 0
        ? ((this.x = 0), (this.y = 0), (this.z = 0), (this.w = 0))
        : ((e = 1 / e),
          (this.x *= e),
          (this.y *= e),
          (this.z *= e),
          (this.w *= e)),
      this
    );
  }
  normalizeFast() {
    const e =
      (3 -
        (this.x * this.x +
          this.y * this.y +
          this.z * this.z +
          this.w * this.w)) /
      2;
    return (
      e === 0
        ? ((this.x = 0), (this.y = 0), (this.z = 0), (this.w = 0))
        : ((this.x *= e), (this.y *= e), (this.z *= e), (this.w *= e)),
      this
    );
  }
  vmult(e, t) {
    t === void 0 && (t = new c());
    const s = e.x,
      i = e.y,
      o = e.z,
      n = this.x,
      r = this.y,
      a = this.z,
      l = this.w,
      h = l * s + r * o - a * i,
      p = l * i + a * s - n * o,
      d = l * o + n * i - r * s,
      f = -n * s - r * i - a * o;
    return (
      (t.x = h * l + f * -n + p * -a - d * -r),
      (t.y = p * l + f * -r + d * -n - h * -a),
      (t.z = d * l + f * -a + h * -r - p * -n),
      t
    );
  }
  copy(e) {
    return (
      (this.x = e.x),
      (this.y = e.y),
      (this.z = e.z),
      (this.w = e.w),
      this
    );
  }
  toEuler(e, t) {
    t === void 0 && (t = "YZX");
    let s, i, o;
    const n = this.x,
      r = this.y,
      a = this.z,
      l = this.w;
    switch (t) {
      case "YZX":
        const h = n * r + a * l;
        if (
          (h > 0.499 &&
            ((s = 2 * Math.atan2(n, l)), (i = Math.PI / 2), (o = 0)),
          h < -0.499 &&
            ((s = -2 * Math.atan2(n, l)), (i = -Math.PI / 2), (o = 0)),
          s === void 0)
        ) {
          const p = n * n,
            d = r * r,
            f = a * a;
          ((s = Math.atan2(2 * r * l - 2 * n * a, 1 - 2 * d - 2 * f)),
            (i = Math.asin(2 * h)),
            (o = Math.atan2(2 * n * l - 2 * r * a, 1 - 2 * p - 2 * f)));
        }
        break;
      default:
        throw new Error(`Euler order ${t} not supported yet.`);
    }
    ((e.y = s), (e.z = i), (e.x = o));
  }
  setFromEuler(e, t, s, i) {
    i === void 0 && (i = "XYZ");
    const o = Math.cos(e / 2),
      n = Math.cos(t / 2),
      r = Math.cos(s / 2),
      a = Math.sin(e / 2),
      l = Math.sin(t / 2),
      h = Math.sin(s / 2);
    return (
      i === "XYZ"
        ? ((this.x = a * n * r + o * l * h),
          (this.y = o * l * r - a * n * h),
          (this.z = o * n * h + a * l * r),
          (this.w = o * n * r - a * l * h))
        : i === "YXZ"
          ? ((this.x = a * n * r + o * l * h),
            (this.y = o * l * r - a * n * h),
            (this.z = o * n * h - a * l * r),
            (this.w = o * n * r + a * l * h))
          : i === "ZXY"
            ? ((this.x = a * n * r - o * l * h),
              (this.y = o * l * r + a * n * h),
              (this.z = o * n * h + a * l * r),
              (this.w = o * n * r - a * l * h))
            : i === "ZYX"
              ? ((this.x = a * n * r - o * l * h),
                (this.y = o * l * r + a * n * h),
                (this.z = o * n * h - a * l * r),
                (this.w = o * n * r + a * l * h))
              : i === "YZX"
                ? ((this.x = a * n * r + o * l * h),
                  (this.y = o * l * r + a * n * h),
                  (this.z = o * n * h - a * l * r),
                  (this.w = o * n * r - a * l * h))
                : i === "XZY" &&
                  ((this.x = a * n * r - o * l * h),
                  (this.y = o * l * r - a * n * h),
                  (this.z = o * n * h + a * l * r),
                  (this.w = o * n * r + a * l * h)),
      this
    );
  }
  clone() {
    return new $(this.x, this.y, this.z, this.w);
  }
  slerp(e, t, s) {
    s === void 0 && (s = new $());
    const i = this.x,
      o = this.y,
      n = this.z,
      r = this.w;
    let a = e.x,
      l = e.y,
      h = e.z,
      p = e.w,
      d,
      f,
      m,
      w,
      g;
    return (
      (f = i * a + o * l + n * h + r * p),
      f < 0 && ((f = -f), (a = -a), (l = -l), (h = -h), (p = -p)),
      1 - f > 1e-6
        ? ((d = Math.acos(f)),
          (m = Math.sin(d)),
          (w = Math.sin((1 - t) * d) / m),
          (g = Math.sin(t * d) / m))
        : ((w = 1 - t), (g = t)),
      (s.x = w * i + g * a),
      (s.y = w * o + g * l),
      (s.z = w * n + g * h),
      (s.w = w * r + g * p),
      s
    );
  }
  integrate(e, t, s, i) {
    i === void 0 && (i = new $());
    const o = e.x * s.x,
      n = e.y * s.y,
      r = e.z * s.z,
      a = this.x,
      l = this.y,
      h = this.z,
      p = this.w,
      d = t * 0.5;
    return (
      (i.x += d * (o * p + n * h - r * l)),
      (i.y += d * (n * p + r * a - o * h)),
      (i.z += d * (r * p + o * l - n * a)),
      (i.w += d * (-o * a - n * l - r * h)),
      i
    );
  }
}
const Mo = new c(),
  Po = new c(),
  To = {
    SPHERE: 1,
    PLANE: 2,
    BOX: 4,
    COMPOUND: 8,
    CONVEXPOLYHEDRON: 16,
    HEIGHTFIELD: 32,
    PARTICLE: 64,
    CYLINDER: 128,
    TRIMESH: 256,
  };
class q {
  constructor(e) {
    (e === void 0 && (e = {}),
      (this.id = q.idCounter++),
      (this.type = e.type || 0),
      (this.boundingSphereRadius = 0),
      (this.collisionResponse = e.collisionResponse ? e.collisionResponse : !0),
      (this.collisionFilterGroup =
        e.collisionFilterGroup !== void 0 ? e.collisionFilterGroup : 1),
      (this.collisionFilterMask =
        e.collisionFilterMask !== void 0 ? e.collisionFilterMask : -1),
      (this.material = e.material ? e.material : null),
      (this.body = null));
  }
  updateBoundingSphereRadius() {
    throw `computeBoundingSphereRadius() not implemented for shape type ${this.type}`;
  }
  volume() {
    throw `volume() not implemented for shape type ${this.type}`;
  }
  calculateLocalInertia(e, t) {
    throw `calculateLocalInertia() not implemented for shape type ${this.type}`;
  }
  calculateWorldAABB(e, t, s, i) {
    throw `calculateWorldAABB() not implemented for shape type ${this.type}`;
  }
}
q.idCounter = 0;
q.types = To;
class V {
  constructor(e) {
    (e === void 0 && (e = {}),
      (this.position = new c()),
      (this.quaternion = new $()),
      e.position && this.position.copy(e.position),
      e.quaternion && this.quaternion.copy(e.quaternion));
  }
  pointToLocal(e, t) {
    return V.pointToLocalFrame(this.position, this.quaternion, e, t);
  }
  pointToWorld(e, t) {
    return V.pointToWorldFrame(this.position, this.quaternion, e, t);
  }
  vectorToWorldFrame(e, t) {
    return (t === void 0 && (t = new c()), this.quaternion.vmult(e, t), t);
  }
  static pointToLocalFrame(e, t, s, i) {
    return (
      i === void 0 && (i = new c()),
      s.vsub(e, i),
      t.conjugate(Fs),
      Fs.vmult(i, i),
      i
    );
  }
  static pointToWorldFrame(e, t, s, i) {
    return (i === void 0 && (i = new c()), t.vmult(s, i), i.vadd(e, i), i);
  }
  static vectorToWorldFrame(e, t, s) {
    return (s === void 0 && (s = new c()), e.vmult(t, s), s);
  }
  static vectorToLocalFrame(e, t, s, i) {
    return (
      i === void 0 && (i = new c()),
      (t.w *= -1),
      t.vmult(s, i),
      (t.w *= -1),
      i
    );
  }
}
const Fs = new $();
class et extends q {
  constructor(e) {
    e === void 0 && (e = {});
    const {
      vertices: t = [],
      faces: s = [],
      normals: i = [],
      axes: o,
      boundingSphereRadius: n,
    } = e;
    (super({ type: q.types.CONVEXPOLYHEDRON }),
      (this.vertices = t),
      (this.faces = s),
      (this.faceNormals = i),
      this.faceNormals.length === 0 && this.computeNormals(),
      n ? (this.boundingSphereRadius = n) : this.updateBoundingSphereRadius(),
      (this.worldVertices = []),
      (this.worldVerticesNeedsUpdate = !0),
      (this.worldFaceNormals = []),
      (this.worldFaceNormalsNeedsUpdate = !0),
      (this.uniqueAxes = o ? o.slice() : null),
      (this.uniqueEdges = []),
      this.computeEdges());
  }
  computeEdges() {
    const e = this.faces,
      t = this.vertices,
      s = this.uniqueEdges;
    s.length = 0;
    const i = new c();
    for (let o = 0; o !== e.length; o++) {
      const n = e[o],
        r = n.length;
      for (let a = 0; a !== r; a++) {
        const l = (a + 1) % r;
        (t[n[a]].vsub(t[n[l]], i), i.normalize());
        let h = !1;
        for (let p = 0; p !== s.length; p++)
          if (s[p].almostEquals(i) || s[p].almostEquals(i)) {
            h = !0;
            break;
          }
        h || s.push(i.clone());
      }
    }
  }
  computeNormals() {
    this.faceNormals.length = this.faces.length;
    for (let e = 0; e < this.faces.length; e++) {
      for (let i = 0; i < this.faces[e].length; i++)
        if (!this.vertices[this.faces[e][i]])
          throw new Error(`Vertex ${this.faces[e][i]} not found!`);
      const t = this.faceNormals[e] || new c();
      (this.getFaceNormal(e, t), t.negate(t), (this.faceNormals[e] = t));
      const s = this.vertices[this.faces[e][0]];
      if (t.dot(s) < 0) {
        console.error(
          `.faceNormals[${e}] = Vec3(${t.toString()}) looks like it points into the shape? The vertices follow. Make sure they are ordered CCW around the normal, using the right hand rule.`,
        );
        for (let i = 0; i < this.faces[e].length; i++)
          console.warn(
            `.vertices[${this.faces[e][i]}] = Vec3(${this.vertices[this.faces[e][i]].toString()})`,
          );
      }
    }
  }
  getFaceNormal(e, t) {
    const s = this.faces[e],
      i = this.vertices[s[0]],
      o = this.vertices[s[1]],
      n = this.vertices[s[2]];
    et.computeNormal(i, o, n, t);
  }
  static computeNormal(e, t, s, i) {
    const o = new c(),
      n = new c();
    (t.vsub(e, n), s.vsub(t, o), o.cross(n, i), i.isZero() || i.normalize());
  }
  clipAgainstHull(e, t, s, i, o, n, r, a, l) {
    const h = new c();
    let p = -1,
      d = -Number.MAX_VALUE;
    for (let m = 0; m < s.faces.length; m++) {
      (h.copy(s.faceNormals[m]), o.vmult(h, h));
      const w = h.dot(n);
      w > d && ((d = w), (p = m));
    }
    const f = [];
    for (let m = 0; m < s.faces[p].length; m++) {
      const w = s.vertices[s.faces[p][m]],
        g = new c();
      (g.copy(w), o.vmult(g, g), i.vadd(g, g), f.push(g));
    }
    p >= 0 && this.clipFaceAgainstHull(n, e, t, f, r, a, l);
  }
  findSeparatingAxis(e, t, s, i, o, n, r, a) {
    const l = new c(),
      h = new c(),
      p = new c(),
      d = new c(),
      f = new c(),
      m = new c();
    let w = Number.MAX_VALUE;
    const g = this;
    if (g.uniqueAxes)
      for (let y = 0; y !== g.uniqueAxes.length; y++) {
        s.vmult(g.uniqueAxes[y], l);
        const v = g.testSepAxis(l, e, t, s, i, o);
        if (v === !1) return !1;
        v < w && ((w = v), n.copy(l));
      }
    else {
      const y = r ? r.length : g.faces.length;
      for (let v = 0; v < y; v++) {
        const b = r ? r[v] : v;
        (l.copy(g.faceNormals[b]), s.vmult(l, l));
        const x = g.testSepAxis(l, e, t, s, i, o);
        if (x === !1) return !1;
        x < w && ((w = x), n.copy(l));
      }
    }
    if (e.uniqueAxes)
      for (let y = 0; y !== e.uniqueAxes.length; y++) {
        o.vmult(e.uniqueAxes[y], h);
        const v = g.testSepAxis(h, e, t, s, i, o);
        if (v === !1) return !1;
        v < w && ((w = v), n.copy(h));
      }
    else {
      const y = a ? a.length : e.faces.length;
      for (let v = 0; v < y; v++) {
        const b = a ? a[v] : v;
        (h.copy(e.faceNormals[b]), o.vmult(h, h));
        const x = g.testSepAxis(h, e, t, s, i, o);
        if (x === !1) return !1;
        x < w && ((w = x), n.copy(h));
      }
    }
    for (let y = 0; y !== g.uniqueEdges.length; y++) {
      s.vmult(g.uniqueEdges[y], d);
      for (let v = 0; v !== e.uniqueEdges.length; v++)
        if ((o.vmult(e.uniqueEdges[v], f), d.cross(f, m), !m.almostZero())) {
          m.normalize();
          const b = g.testSepAxis(m, e, t, s, i, o);
          if (b === !1) return !1;
          b < w && ((w = b), n.copy(m));
        }
    }
    return (i.vsub(t, p), p.dot(n) > 0 && n.negate(n), !0);
  }
  testSepAxis(e, t, s, i, o, n) {
    const r = this;
    (et.project(r, e, s, i, Yt), et.project(t, e, o, n, Xt));
    const a = Yt[0],
      l = Yt[1],
      h = Xt[0],
      p = Xt[1];
    if (a < p || h < l) return !1;
    const d = a - p,
      f = h - l;
    return d < f ? d : f;
  }
  calculateLocalInertia(e, t) {
    const s = new c(),
      i = new c();
    this.computeLocalAABB(i, s);
    const o = s.x - i.x,
      n = s.y - i.y,
      r = s.z - i.z;
    ((t.x = (1 / 12) * e * (2 * n * 2 * n + 2 * r * 2 * r)),
      (t.y = (1 / 12) * e * (2 * o * 2 * o + 2 * r * 2 * r)),
      (t.z = (1 / 12) * e * (2 * n * 2 * n + 2 * o * 2 * o)));
  }
  getPlaneConstantOfFace(e) {
    const t = this.faces[e],
      s = this.faceNormals[e],
      i = this.vertices[t[0]];
    return -s.dot(i);
  }
  clipFaceAgainstHull(e, t, s, i, o, n, r) {
    const a = new c(),
      l = new c(),
      h = new c(),
      p = new c(),
      d = new c(),
      f = new c(),
      m = new c(),
      w = new c(),
      g = this,
      y = [],
      v = i,
      b = y;
    let x = -1,
      A = Number.MAX_VALUE;
    for (let L = 0; L < g.faces.length; L++) {
      (a.copy(g.faceNormals[L]), s.vmult(a, a));
      const N = a.dot(e);
      N < A && ((A = N), (x = L));
    }
    if (x < 0) return;
    const _ = g.faces[x];
    _.connectedFaces = [];
    for (let L = 0; L < g.faces.length; L++)
      for (let N = 0; N < g.faces[L].length; N++)
        _.indexOf(g.faces[L][N]) !== -1 &&
          L !== x &&
          _.connectedFaces.indexOf(L) === -1 &&
          _.connectedFaces.push(L);
    const P = _.length;
    for (let L = 0; L < P; L++) {
      const N = g.vertices[_[L]],
        D = g.vertices[_[(L + 1) % P]];
      (N.vsub(D, l),
        h.copy(l),
        s.vmult(h, h),
        t.vadd(h, h),
        p.copy(this.faceNormals[x]),
        s.vmult(p, p),
        t.vadd(p, p),
        h.cross(p, d),
        d.negate(d),
        f.copy(N),
        s.vmult(f, f),
        t.vadd(f, f));
      const S = _.connectedFaces[L];
      m.copy(this.faceNormals[S]);
      const T = this.getPlaneConstantOfFace(S);
      (w.copy(m), s.vmult(w, w));
      const M = T - w.dot(t);
      for (this.clipFaceAgainstPlane(v, b, w, M); v.length; ) v.shift();
      for (; b.length; ) v.push(b.shift());
    }
    m.copy(this.faceNormals[x]);
    const I = this.getPlaneConstantOfFace(x);
    (w.copy(m), s.vmult(w, w));
    const F = I - w.dot(t);
    for (let L = 0; L < v.length; L++) {
      let N = w.dot(v[L]) + F;
      if (
        (N <= o &&
          (console.log(`clamped: depth=${N} to minDist=${o}`), (N = o)),
        N <= n)
      ) {
        const D = v[L];
        if (N <= 1e-6) {
          const S = { point: D, normal: w, depth: N };
          r.push(S);
        }
      }
    }
  }
  clipFaceAgainstPlane(e, t, s, i) {
    let o, n;
    const r = e.length;
    if (r < 2) return t;
    let a = e[e.length - 1],
      l = e[0];
    o = s.dot(a) + i;
    for (let h = 0; h < r; h++) {
      if (((l = e[h]), (n = s.dot(l) + i), o < 0))
        if (n < 0) {
          const p = new c();
          (p.copy(l), t.push(p));
        } else {
          const p = new c();
          (a.lerp(l, o / (o - n), p), t.push(p));
        }
      else if (n < 0) {
        const p = new c();
        (a.lerp(l, o / (o - n), p), t.push(p), t.push(l));
      }
      ((a = l), (o = n));
    }
    return t;
  }
  computeWorldVertices(e, t) {
    for (; this.worldVertices.length < this.vertices.length; )
      this.worldVertices.push(new c());
    const s = this.vertices,
      i = this.worldVertices;
    for (let o = 0; o !== this.vertices.length; o++)
      (t.vmult(s[o], i[o]), e.vadd(i[o], i[o]));
    this.worldVerticesNeedsUpdate = !1;
  }
  computeLocalAABB(e, t) {
    const s = this.vertices;
    (e.set(Number.MAX_VALUE, Number.MAX_VALUE, Number.MAX_VALUE),
      t.set(-Number.MAX_VALUE, -Number.MAX_VALUE, -Number.MAX_VALUE));
    for (let i = 0; i < this.vertices.length; i++) {
      const o = s[i];
      (o.x < e.x ? (e.x = o.x) : o.x > t.x && (t.x = o.x),
        o.y < e.y ? (e.y = o.y) : o.y > t.y && (t.y = o.y),
        o.z < e.z ? (e.z = o.z) : o.z > t.z && (t.z = o.z));
    }
  }
  computeWorldFaceNormals(e) {
    const t = this.faceNormals.length;
    for (; this.worldFaceNormals.length < t; )
      this.worldFaceNormals.push(new c());
    const s = this.faceNormals,
      i = this.worldFaceNormals;
    for (let o = 0; o !== t; o++) e.vmult(s[o], i[o]);
    this.worldFaceNormalsNeedsUpdate = !1;
  }
  updateBoundingSphereRadius() {
    let e = 0;
    const t = this.vertices;
    for (let s = 0; s !== t.length; s++) {
      const i = t[s].lengthSquared();
      i > e && (e = i);
    }
    this.boundingSphereRadius = Math.sqrt(e);
  }
  calculateWorldAABB(e, t, s, i) {
    const o = this.vertices;
    let n,
      r,
      a,
      l,
      h,
      p,
      d = new c();
    for (let f = 0; f < o.length; f++) {
      (d.copy(o[f]), t.vmult(d, d), e.vadd(d, d));
      const m = d;
      ((n === void 0 || m.x < n) && (n = m.x),
        (l === void 0 || m.x > l) && (l = m.x),
        (r === void 0 || m.y < r) && (r = m.y),
        (h === void 0 || m.y > h) && (h = m.y),
        (a === void 0 || m.z < a) && (a = m.z),
        (p === void 0 || m.z > p) && (p = m.z));
    }
    (s.set(n, r, a), i.set(l, h, p));
  }
  volume() {
    return (4 * Math.PI * this.boundingSphereRadius) / 3;
  }
  getAveragePointLocal(e) {
    e === void 0 && (e = new c());
    const t = this.vertices;
    for (let s = 0; s < t.length; s++) e.vadd(t[s], e);
    return (e.scale(1 / t.length, e), e);
  }
  transformAllPoints(e, t) {
    const s = this.vertices.length,
      i = this.vertices;
    if (t) {
      for (let o = 0; o < s; o++) {
        const n = i[o];
        t.vmult(n, n);
      }
      for (let o = 0; o < this.faceNormals.length; o++) {
        const n = this.faceNormals[o];
        t.vmult(n, n);
      }
    }
    if (e)
      for (let o = 0; o < s; o++) {
        const n = i[o];
        n.vadd(e, n);
      }
  }
  pointIsInside(e) {
    const t = this.vertices,
      s = this.faces,
      i = this.faceNormals,
      o = new c();
    this.getAveragePointLocal(o);
    for (let n = 0; n < this.faces.length; n++) {
      let r = i[n];
      const a = t[s[n][0]],
        l = new c();
      e.vsub(a, l);
      const h = r.dot(l),
        p = new c();
      o.vsub(a, p);
      const d = r.dot(p);
      if ((h < 0 && d > 0) || (h > 0 && d < 0)) return !1;
    }
    return -1;
  }
  static project(e, t, s, i, o) {
    const n = e.vertices.length,
      r = zo;
    let a = 0,
      l = 0;
    const h = Ro,
      p = e.vertices;
    (h.setZero(),
      V.vectorToLocalFrame(s, i, t, r),
      V.pointToLocalFrame(s, i, h, h));
    const d = h.dot(r);
    l = a = p[0].dot(r);
    for (let f = 1; f < n; f++) {
      const m = p[f].dot(r);
      (m > a && (a = m), m < l && (l = m));
    }
    if (((l -= d), (a -= d), l > a)) {
      const f = l;
      ((l = a), (a = f));
    }
    ((o[0] = a), (o[1] = l));
  }
}
const Yt = [],
  Xt = [];
new c();
const zo = new c(),
  Ro = new c();
class Ot extends q {
  constructor(e) {
    (super({ type: q.types.BOX }),
      (this.halfExtents = e),
      (this.convexPolyhedronRepresentation = null),
      this.updateConvexPolyhedronRepresentation(),
      this.updateBoundingSphereRadius());
  }
  updateConvexPolyhedronRepresentation() {
    const e = this.halfExtents.x,
      t = this.halfExtents.y,
      s = this.halfExtents.z,
      i = c,
      o = [
        new i(-e, -t, -s),
        new i(e, -t, -s),
        new i(e, t, -s),
        new i(-e, t, -s),
        new i(-e, -t, s),
        new i(e, -t, s),
        new i(e, t, s),
        new i(-e, t, s),
      ],
      n = [
        [3, 2, 1, 0],
        [4, 5, 6, 7],
        [5, 4, 0, 1],
        [2, 3, 7, 6],
        [0, 4, 7, 3],
        [1, 2, 6, 5],
      ],
      r = [new i(0, 0, 1), new i(0, 1, 0), new i(1, 0, 0)],
      a = new et({ vertices: o, faces: n, axes: r });
    ((this.convexPolyhedronRepresentation = a), (a.material = this.material));
  }
  calculateLocalInertia(e, t) {
    return (
      t === void 0 && (t = new c()),
      Ot.calculateInertia(this.halfExtents, e, t),
      t
    );
  }
  static calculateInertia(e, t, s) {
    const i = e;
    ((s.x = (1 / 12) * t * (2 * i.y * 2 * i.y + 2 * i.z * 2 * i.z)),
      (s.y = (1 / 12) * t * (2 * i.x * 2 * i.x + 2 * i.z * 2 * i.z)),
      (s.z = (1 / 12) * t * (2 * i.y * 2 * i.y + 2 * i.x * 2 * i.x)));
  }
  getSideNormals(e, t) {
    const s = e,
      i = this.halfExtents;
    if (
      (s[0].set(i.x, 0, 0),
      s[1].set(0, i.y, 0),
      s[2].set(0, 0, i.z),
      s[3].set(-i.x, 0, 0),
      s[4].set(0, -i.y, 0),
      s[5].set(0, 0, -i.z),
      t !== void 0)
    )
      for (let o = 0; o !== s.length; o++) t.vmult(s[o], s[o]);
    return s;
  }
  volume() {
    return 8 * this.halfExtents.x * this.halfExtents.y * this.halfExtents.z;
  }
  updateBoundingSphereRadius() {
    this.boundingSphereRadius = this.halfExtents.length();
  }
  forEachWorldCorner(e, t, s) {
    const i = this.halfExtents,
      o = [
        [i.x, i.y, i.z],
        [-i.x, i.y, i.z],
        [-i.x, -i.y, i.z],
        [-i.x, -i.y, -i.z],
        [i.x, -i.y, -i.z],
        [i.x, i.y, -i.z],
        [-i.x, i.y, -i.z],
        [i.x, -i.y, i.z],
      ];
    for (let n = 0; n < o.length; n++)
      (be.set(o[n][0], o[n][1], o[n][2]),
        t.vmult(be, be),
        e.vadd(be, be),
        s(be.x, be.y, be.z));
  }
  calculateWorldAABB(e, t, s, i) {
    const o = this.halfExtents;
    (ce[0].set(o.x, o.y, o.z),
      ce[1].set(-o.x, o.y, o.z),
      ce[2].set(-o.x, -o.y, o.z),
      ce[3].set(-o.x, -o.y, -o.z),
      ce[4].set(o.x, -o.y, -o.z),
      ce[5].set(o.x, o.y, -o.z),
      ce[6].set(-o.x, o.y, -o.z),
      ce[7].set(o.x, -o.y, o.z));
    const n = ce[0];
    (t.vmult(n, n), e.vadd(n, n), i.copy(n), s.copy(n));
    for (let r = 1; r < 8; r++) {
      const a = ce[r];
      (t.vmult(a, a), e.vadd(a, a));
      const l = a.x,
        h = a.y,
        p = a.z;
      (l > i.x && (i.x = l),
        h > i.y && (i.y = h),
        p > i.z && (i.z = p),
        l < s.x && (s.x = l),
        h < s.y && (s.y = h),
        p < s.z && (s.z = p));
    }
  }
}
const be = new c(),
  ce = [new c(), new c(), new c(), new c(), new c(), new c(), new c(), new c()],
  ys = { DYNAMIC: 1, STATIC: 2, KINEMATIC: 4 },
  bs = { AWAKE: 0, SLEEPY: 1, SLEEPING: 2 };
class R extends mi {
  constructor(e) {
    (e === void 0 && (e = {}),
      super(),
      (this.id = R.idCounter++),
      (this.index = -1),
      (this.world = null),
      (this.vlambda = new c()),
      (this.collisionFilterGroup =
        typeof e.collisionFilterGroup == "number" ? e.collisionFilterGroup : 1),
      (this.collisionFilterMask =
        typeof e.collisionFilterMask == "number" ? e.collisionFilterMask : -1),
      (this.collisionResponse =
        typeof e.collisionResponse == "boolean" ? e.collisionResponse : !0),
      (this.position = new c()),
      (this.previousPosition = new c()),
      (this.interpolatedPosition = new c()),
      (this.initPosition = new c()),
      e.position &&
        (this.position.copy(e.position),
        this.previousPosition.copy(e.position),
        this.interpolatedPosition.copy(e.position),
        this.initPosition.copy(e.position)),
      (this.velocity = new c()),
      e.velocity && this.velocity.copy(e.velocity),
      (this.initVelocity = new c()),
      (this.force = new c()));
    const t = typeof e.mass == "number" ? e.mass : 0;
    ((this.mass = t),
      (this.invMass = t > 0 ? 1 / t : 0),
      (this.material = e.material || null),
      (this.linearDamping =
        typeof e.linearDamping == "number" ? e.linearDamping : 0.01),
      (this.type = t <= 0 ? R.STATIC : R.DYNAMIC),
      typeof e.type == typeof R.STATIC && (this.type = e.type),
      (this.allowSleep = typeof e.allowSleep < "u" ? e.allowSleep : !0),
      (this.sleepState = R.AWAKE),
      (this.sleepSpeedLimit =
        typeof e.sleepSpeedLimit < "u" ? e.sleepSpeedLimit : 0.1),
      (this.sleepTimeLimit =
        typeof e.sleepTimeLimit < "u" ? e.sleepTimeLimit : 1),
      (this.timeLastSleepy = 0),
      (this.wakeUpAfterNarrowphase = !1),
      (this.torque = new c()),
      (this.quaternion = new $()),
      (this.initQuaternion = new $()),
      (this.previousQuaternion = new $()),
      (this.interpolatedQuaternion = new $()),
      e.quaternion &&
        (this.quaternion.copy(e.quaternion),
        this.initQuaternion.copy(e.quaternion),
        this.previousQuaternion.copy(e.quaternion),
        this.interpolatedQuaternion.copy(e.quaternion)),
      (this.angularVelocity = new c()),
      e.angularVelocity && this.angularVelocity.copy(e.angularVelocity),
      (this.initAngularVelocity = new c()),
      (this.shapes = []),
      (this.shapeOffsets = []),
      (this.shapeOrientations = []),
      (this.inertia = new c()),
      (this.invInertia = new c()),
      (this.invInertiaWorld = new le()),
      (this.invMassSolve = 0),
      (this.invInertiaSolve = new c()),
      (this.invInertiaWorldSolve = new le()),
      (this.fixedRotation =
        typeof e.fixedRotation < "u" ? e.fixedRotation : !1),
      (this.angularDamping =
        typeof e.angularDamping < "u" ? e.angularDamping : 0.01),
      (this.linearFactor = new c(1, 1, 1)),
      e.linearFactor && this.linearFactor.copy(e.linearFactor),
      (this.angularFactor = new c(1, 1, 1)),
      e.angularFactor && this.angularFactor.copy(e.angularFactor),
      (this.aabb = new oe()),
      (this.aabbNeedsUpdate = !0),
      (this.boundingRadius = 0),
      (this.wlambda = new c()),
      (this.isTrigger = !!e.isTrigger),
      e.shape && this.addShape(e.shape),
      this.updateMassProperties());
  }
  wakeUp() {
    const e = this.sleepState;
    ((this.sleepState = R.AWAKE),
      (this.wakeUpAfterNarrowphase = !1),
      e === R.SLEEPING && this.dispatchEvent(R.wakeupEvent));
  }
  sleep() {
    ((this.sleepState = R.SLEEPING),
      this.velocity.set(0, 0, 0),
      this.angularVelocity.set(0, 0, 0),
      (this.wakeUpAfterNarrowphase = !1));
  }
  sleepTick(e) {
    if (this.allowSleep) {
      const t = this.sleepState,
        s =
          this.velocity.lengthSquared() + this.angularVelocity.lengthSquared(),
        i = this.sleepSpeedLimit ** 2;
      t === R.AWAKE && s < i
        ? ((this.sleepState = R.SLEEPY),
          (this.timeLastSleepy = e),
          this.dispatchEvent(R.sleepyEvent))
        : t === R.SLEEPY && s > i
          ? this.wakeUp()
          : t === R.SLEEPY &&
            e - this.timeLastSleepy > this.sleepTimeLimit &&
            (this.sleep(), this.dispatchEvent(R.sleepEvent));
    }
  }
  updateSolveMassProperties() {
    this.sleepState === R.SLEEPING || this.type === R.KINEMATIC
      ? ((this.invMassSolve = 0),
        this.invInertiaSolve.setZero(),
        this.invInertiaWorldSolve.setZero())
      : ((this.invMassSolve = this.invMass),
        this.invInertiaSolve.copy(this.invInertia),
        this.invInertiaWorldSolve.copy(this.invInertiaWorld));
  }
  pointToLocalFrame(e, t) {
    return (
      t === void 0 && (t = new c()),
      e.vsub(this.position, t),
      this.quaternion.conjugate().vmult(t, t),
      t
    );
  }
  vectorToLocalFrame(e, t) {
    return (
      t === void 0 && (t = new c()),
      this.quaternion.conjugate().vmult(e, t),
      t
    );
  }
  pointToWorldFrame(e, t) {
    return (
      t === void 0 && (t = new c()),
      this.quaternion.vmult(e, t),
      t.vadd(this.position, t),
      t
    );
  }
  vectorToWorldFrame(e, t) {
    return (t === void 0 && (t = new c()), this.quaternion.vmult(e, t), t);
  }
  addShape(e, t, s) {
    const i = new c(),
      o = new $();
    return (
      t && i.copy(t),
      s && o.copy(s),
      this.shapes.push(e),
      this.shapeOffsets.push(i),
      this.shapeOrientations.push(o),
      this.updateMassProperties(),
      this.updateBoundingRadius(),
      (this.aabbNeedsUpdate = !0),
      (e.body = this),
      this
    );
  }
  removeShape(e) {
    const t = this.shapes.indexOf(e);
    return t === -1
      ? (console.warn("Shape does not belong to the body"), this)
      : (this.shapes.splice(t, 1),
        this.shapeOffsets.splice(t, 1),
        this.shapeOrientations.splice(t, 1),
        this.updateMassProperties(),
        this.updateBoundingRadius(),
        (this.aabbNeedsUpdate = !0),
        (e.body = null),
        this);
  }
  updateBoundingRadius() {
    const e = this.shapes,
      t = this.shapeOffsets,
      s = e.length;
    let i = 0;
    for (let o = 0; o !== s; o++) {
      const n = e[o];
      n.updateBoundingSphereRadius();
      const r = t[o].length(),
        a = n.boundingSphereRadius;
      r + a > i && (i = r + a);
    }
    this.boundingRadius = i;
  }
  updateAABB() {
    const e = this.shapes,
      t = this.shapeOffsets,
      s = this.shapeOrientations,
      i = e.length,
      o = qo,
      n = Lo,
      r = this.quaternion,
      a = this.aabb,
      l = Io;
    for (let h = 0; h !== i; h++) {
      const p = e[h];
      (r.vmult(t[h], o),
        o.vadd(this.position, o),
        r.mult(s[h], n),
        p.calculateWorldAABB(o, n, l.lowerBound, l.upperBound),
        h === 0 ? a.copy(l) : a.extend(l));
    }
    this.aabbNeedsUpdate = !1;
  }
  updateInertiaWorld(e) {
    const t = this.invInertia;
    if (!(t.x === t.y && t.y === t.z && !e)) {
      const s = ko,
        i = Bo;
      (s.setRotationFromQuaternion(this.quaternion),
        s.transpose(i),
        s.scale(t, s),
        s.mmult(i, this.invInertiaWorld));
    }
  }
  applyForce(e, t) {
    if ((t === void 0 && (t = new c()), this.type !== R.DYNAMIC)) return;
    this.sleepState === R.SLEEPING && this.wakeUp();
    const s = No;
    (t.cross(e, s),
      this.force.vadd(e, this.force),
      this.torque.vadd(s, this.torque));
  }
  applyLocalForce(e, t) {
    if ((t === void 0 && (t = new c()), this.type !== R.DYNAMIC)) return;
    const s = Fo,
      i = Do;
    (this.vectorToWorldFrame(e, s),
      this.vectorToWorldFrame(t, i),
      this.applyForce(s, i));
  }
  applyTorque(e) {
    this.type === R.DYNAMIC &&
      (this.sleepState === R.SLEEPING && this.wakeUp(),
      this.torque.vadd(e, this.torque));
  }
  applyImpulse(e, t) {
    if ((t === void 0 && (t = new c()), this.type !== R.DYNAMIC)) return;
    this.sleepState === R.SLEEPING && this.wakeUp();
    const s = t,
      i = Oo;
    (i.copy(e), i.scale(this.invMass, i), this.velocity.vadd(i, this.velocity));
    const o = Vo;
    (s.cross(e, o),
      this.invInertiaWorld.vmult(o, o),
      this.angularVelocity.vadd(o, this.angularVelocity));
  }
  applyLocalImpulse(e, t) {
    if ((t === void 0 && (t = new c()), this.type !== R.DYNAMIC)) return;
    const s = Wo,
      i = Ho;
    (this.vectorToWorldFrame(e, s),
      this.vectorToWorldFrame(t, i),
      this.applyImpulse(s, i));
  }
  updateMassProperties() {
    const e = Uo;
    this.invMass = this.mass > 0 ? 1 / this.mass : 0;
    const t = this.inertia,
      s = this.fixedRotation;
    (this.updateAABB(),
      e.set(
        (this.aabb.upperBound.x - this.aabb.lowerBound.x) / 2,
        (this.aabb.upperBound.y - this.aabb.lowerBound.y) / 2,
        (this.aabb.upperBound.z - this.aabb.lowerBound.z) / 2,
      ),
      Ot.calculateInertia(e, this.mass, t),
      this.invInertia.set(
        t.x > 0 && !s ? 1 / t.x : 0,
        t.y > 0 && !s ? 1 / t.y : 0,
        t.z > 0 && !s ? 1 / t.z : 0,
      ),
      this.updateInertiaWorld(!0));
  }
  getVelocityAtWorldPoint(e, t) {
    const s = new c();
    return (
      e.vsub(this.position, s),
      this.angularVelocity.cross(s, t),
      this.velocity.vadd(t, t),
      t
    );
  }
  integrate(e, t, s) {
    if (
      (this.previousPosition.copy(this.position),
      this.previousQuaternion.copy(this.quaternion),
      !(this.type === R.DYNAMIC || this.type === R.KINEMATIC) ||
        this.sleepState === R.SLEEPING)
    )
      return;
    const i = this.velocity,
      o = this.angularVelocity,
      n = this.position,
      r = this.force,
      a = this.torque,
      l = this.quaternion,
      h = this.invMass,
      p = this.invInertiaWorld,
      d = this.linearFactor,
      f = h * e;
    ((i.x += r.x * f * d.x), (i.y += r.y * f * d.y), (i.z += r.z * f * d.z));
    const m = p.elements,
      w = this.angularFactor,
      g = a.x * w.x,
      y = a.y * w.y,
      v = a.z * w.z;
    ((o.x += e * (m[0] * g + m[1] * y + m[2] * v)),
      (o.y += e * (m[3] * g + m[4] * y + m[5] * v)),
      (o.z += e * (m[6] * g + m[7] * y + m[8] * v)),
      (n.x += i.x * e),
      (n.y += i.y * e),
      (n.z += i.z * e),
      l.integrate(this.angularVelocity, e, this.angularFactor, l),
      t && (s ? l.normalizeFast() : l.normalize()),
      (this.aabbNeedsUpdate = !0),
      this.updateInertiaWorld());
  }
}
R.idCounter = 0;
R.COLLIDE_EVENT_NAME = "collide";
R.DYNAMIC = ys.DYNAMIC;
R.STATIC = ys.STATIC;
R.KINEMATIC = ys.KINEMATIC;
R.AWAKE = bs.AWAKE;
R.SLEEPY = bs.SLEEPY;
R.SLEEPING = bs.SLEEPING;
R.wakeupEvent = { type: "wakeup" };
R.sleepyEvent = { type: "sleepy" };
R.sleepEvent = { type: "sleep" };
const qo = new c(),
  Lo = new $(),
  Io = new oe(),
  ko = new le(),
  Bo = new le();
new le();
const No = new c(),
  Fo = new c(),
  Do = new c(),
  Oo = new c(),
  Vo = new c(),
  Wo = new c(),
  Ho = new c(),
  Uo = new c();
class jo {
  constructor() {
    ((this.world = null), (this.useBoundingBoxes = !1), (this.dirty = !0));
  }
  collisionPairs(e, t, s) {
    throw new Error(
      "collisionPairs not implemented for this BroadPhase class!",
    );
  }
  needBroadphaseCollision(e, t) {
    return !(
      (e.collisionFilterGroup & t.collisionFilterMask) === 0 ||
      (t.collisionFilterGroup & e.collisionFilterMask) === 0 ||
      (((e.type & R.STATIC) !== 0 || e.sleepState === R.SLEEPING) &&
        ((t.type & R.STATIC) !== 0 || t.sleepState === R.SLEEPING))
    );
  }
  intersectionTest(e, t, s, i) {
    this.useBoundingBoxes
      ? this.doBoundingBoxBroadphase(e, t, s, i)
      : this.doBoundingSphereBroadphase(e, t, s, i);
  }
  doBoundingSphereBroadphase(e, t, s, i) {
    const o = $o;
    t.position.vsub(e.position, o);
    const n = (e.boundingRadius + t.boundingRadius) ** 2;
    o.lengthSquared() < n && (s.push(e), i.push(t));
  }
  doBoundingBoxBroadphase(e, t, s, i) {
    (e.aabbNeedsUpdate && e.updateAABB(),
      t.aabbNeedsUpdate && t.updateAABB(),
      e.aabb.overlaps(t.aabb) && (s.push(e), i.push(t)));
  }
  makePairsUnique(e, t) {
    const s = Go,
      i = Yo,
      o = Xo,
      n = e.length;
    for (let r = 0; r !== n; r++) ((i[r] = e[r]), (o[r] = t[r]));
    ((e.length = 0), (t.length = 0));
    for (let r = 0; r !== n; r++) {
      const a = i[r].id,
        l = o[r].id,
        h = a < l ? `${a},${l}` : `${l},${a}`;
      ((s[h] = r), s.keys.push(h));
    }
    for (let r = 0; r !== s.keys.length; r++) {
      const a = s.keys.pop(),
        l = s[a];
      (e.push(i[l]), t.push(o[l]), delete s[a]);
    }
  }
  setWorld(e) {}
  static boundingSphereCheck(e, t) {
    const s = new c();
    e.position.vsub(t.position, s);
    const i = e.shapes[0],
      o = t.shapes[0];
    return (
      Math.pow(i.boundingSphereRadius + o.boundingSphereRadius, 2) >
      s.lengthSquared()
    );
  }
  aabbQuery(e, t, s) {
    return (
      console.warn(
        ".aabbQuery is not implemented in this Broadphase subclass.",
      ),
      []
    );
  }
}
const $o = new c();
new c();
new $();
new c();
const Go = { keys: [] },
  Yo = [],
  Xo = [];
new c();
new c();
new c();
class fi extends jo {
  constructor() {
    super();
  }
  collisionPairs(e, t, s) {
    const i = e.bodies,
      o = i.length;
    let n, r;
    for (let a = 0; a !== o; a++)
      for (let l = 0; l !== a; l++)
        ((n = i[a]),
          (r = i[l]),
          this.needBroadphaseCollision(n, r) &&
            this.intersectionTest(n, r, t, s));
  }
  aabbQuery(e, t, s) {
    s === void 0 && (s = []);
    for (let i = 0; i < e.bodies.length; i++) {
      const o = e.bodies[i];
      (o.aabbNeedsUpdate && o.updateAABB(), o.aabb.overlaps(t) && s.push(o));
    }
    return s;
  }
}
class Tt {
  constructor() {
    ((this.rayFromWorld = new c()),
      (this.rayToWorld = new c()),
      (this.hitNormalWorld = new c()),
      (this.hitPointWorld = new c()),
      (this.hasHit = !1),
      (this.shape = null),
      (this.body = null),
      (this.hitFaceIndex = -1),
      (this.distance = -1),
      (this.shouldStop = !1));
  }
  reset() {
    (this.rayFromWorld.setZero(),
      this.rayToWorld.setZero(),
      this.hitNormalWorld.setZero(),
      this.hitPointWorld.setZero(),
      (this.hasHit = !1),
      (this.shape = null),
      (this.body = null),
      (this.hitFaceIndex = -1),
      (this.distance = -1),
      (this.shouldStop = !1));
  }
  abort() {
    this.shouldStop = !0;
  }
  set(e, t, s, i, o, n, r) {
    (this.rayFromWorld.copy(e),
      this.rayToWorld.copy(t),
      this.hitNormalWorld.copy(s),
      this.hitPointWorld.copy(i),
      (this.shape = o),
      (this.body = n),
      (this.distance = r));
  }
}
let vi, wi, gi, yi, bi, xi, Ei;
const xs = { CLOSEST: 1, ANY: 2, ALL: 4 };
vi = q.types.SPHERE;
wi = q.types.PLANE;
gi = q.types.BOX;
yi = q.types.CYLINDER;
bi = q.types.CONVEXPOLYHEDRON;
xi = q.types.HEIGHTFIELD;
Ei = q.types.TRIMESH;
class j {
  get [vi]() {
    return this._intersectSphere;
  }
  get [wi]() {
    return this._intersectPlane;
  }
  get [gi]() {
    return this._intersectBox;
  }
  get [yi]() {
    return this._intersectConvex;
  }
  get [bi]() {
    return this._intersectConvex;
  }
  get [xi]() {
    return this._intersectHeightfield;
  }
  get [Ei]() {
    return this._intersectTrimesh;
  }
  constructor(e, t) {
    (e === void 0 && (e = new c()),
      t === void 0 && (t = new c()),
      (this.from = e.clone()),
      (this.to = t.clone()),
      (this.direction = new c()),
      (this.precision = 1e-4),
      (this.checkCollisionResponse = !0),
      (this.skipBackfaces = !1),
      (this.collisionFilterMask = -1),
      (this.collisionFilterGroup = -1),
      (this.mode = j.ANY),
      (this.result = new Tt()),
      (this.hasHit = !1),
      (this.callback = (s) => {}));
  }
  intersectWorld(e, t) {
    return (
      (this.mode = t.mode || j.ANY),
      (this.result = t.result || new Tt()),
      (this.skipBackfaces = !!t.skipBackfaces),
      (this.collisionFilterMask =
        typeof t.collisionFilterMask < "u" ? t.collisionFilterMask : -1),
      (this.collisionFilterGroup =
        typeof t.collisionFilterGroup < "u" ? t.collisionFilterGroup : -1),
      (this.checkCollisionResponse =
        typeof t.checkCollisionResponse < "u" ? t.checkCollisionResponse : !0),
      t.from && this.from.copy(t.from),
      t.to && this.to.copy(t.to),
      (this.callback = t.callback || (() => {})),
      (this.hasHit = !1),
      this.result.reset(),
      this.updateDirection(),
      this.getAABB(Ds),
      (Kt.length = 0),
      e.broadphase.aabbQuery(e, Ds, Kt),
      this.intersectBodies(Kt),
      this.hasHit
    );
  }
  intersectBody(e, t) {
    t && ((this.result = t), this.updateDirection());
    const s = this.checkCollisionResponse;
    if (
      (s && !e.collisionResponse) ||
      (this.collisionFilterGroup & e.collisionFilterMask) === 0 ||
      (e.collisionFilterGroup & this.collisionFilterMask) === 0
    )
      return;
    const i = Ko,
      o = Zo;
    for (let n = 0, r = e.shapes.length; n < r; n++) {
      const a = e.shapes[n];
      if (
        !(s && !a.collisionResponse) &&
        (e.quaternion.mult(e.shapeOrientations[n], o),
        e.quaternion.vmult(e.shapeOffsets[n], i),
        i.vadd(e.position, i),
        this.intersectShape(a, o, i, e),
        this.result.shouldStop)
      )
        break;
    }
  }
  intersectBodies(e, t) {
    t && ((this.result = t), this.updateDirection());
    for (let s = 0, i = e.length; !this.result.shouldStop && s < i; s++)
      this.intersectBody(e[s]);
  }
  updateDirection() {
    (this.to.vsub(this.from, this.direction), this.direction.normalize());
  }
  intersectShape(e, t, s, i) {
    const o = this.from;
    if (dn(o, this.direction, s) > e.boundingSphereRadius) return;
    const r = this[e.type];
    r && r.call(this, e, t, s, i, e);
  }
  _intersectBox(e, t, s, i, o) {
    return this._intersectConvex(e.convexPolyhedronRepresentation, t, s, i, o);
  }
  _intersectPlane(e, t, s, i, o) {
    const n = this.from,
      r = this.to,
      a = this.direction,
      l = new c(0, 0, 1);
    t.vmult(l, l);
    const h = new c();
    n.vsub(s, h);
    const p = h.dot(l);
    r.vsub(s, h);
    const d = h.dot(l);
    if (p * d > 0 || n.distanceTo(r) < p) return;
    const f = l.dot(a);
    if (Math.abs(f) < this.precision) return;
    const m = new c(),
      w = new c(),
      g = new c();
    n.vsub(s, m);
    const y = -l.dot(m) / f;
    (a.scale(y, w), n.vadd(w, g), this.reportIntersection(l, g, o, i, -1));
  }
  getAABB(e) {
    const { lowerBound: t, upperBound: s } = e,
      i = this.to,
      o = this.from;
    ((t.x = Math.min(i.x, o.x)),
      (t.y = Math.min(i.y, o.y)),
      (t.z = Math.min(i.z, o.z)),
      (s.x = Math.max(i.x, o.x)),
      (s.y = Math.max(i.y, o.y)),
      (s.z = Math.max(i.z, o.z)));
  }
  _intersectHeightfield(e, t, s, i, o) {
    (e.data, e.elementSize);
    const n = Jo;
    (n.from.copy(this.from),
      n.to.copy(this.to),
      V.pointToLocalFrame(s, t, n.from, n.from),
      V.pointToLocalFrame(s, t, n.to, n.to),
      n.updateDirection());
    const r = Qo;
    let a, l, h, p;
    ((a = l = 0), (h = p = e.data.length - 1));
    const d = new oe();
    (n.getAABB(d),
      e.getIndexOfPosition(d.lowerBound.x, d.lowerBound.y, r, !0),
      (a = Math.max(a, r[0])),
      (l = Math.max(l, r[1])),
      e.getIndexOfPosition(d.upperBound.x, d.upperBound.y, r, !0),
      (h = Math.min(h, r[0] + 1)),
      (p = Math.min(p, r[1] + 1)));
    for (let f = a; f < h; f++)
      for (let m = l; m < p; m++) {
        if (this.result.shouldStop) return;
        if ((e.getAabbAtIndex(f, m, d), !!d.overlapsRay(n))) {
          if (
            (e.getConvexTrianglePillar(f, m, !1),
            V.pointToWorldFrame(s, t, e.pillarOffset, vt),
            this._intersectConvex(e.pillarConvex, t, vt, i, o, Os),
            this.result.shouldStop)
          )
            return;
          (e.getConvexTrianglePillar(f, m, !0),
            V.pointToWorldFrame(s, t, e.pillarOffset, vt),
            this._intersectConvex(e.pillarConvex, t, vt, i, o, Os));
        }
      }
  }
  _intersectSphere(e, t, s, i, o) {
    const n = this.from,
      r = this.to,
      a = e.radius,
      l = (r.x - n.x) ** 2 + (r.y - n.y) ** 2 + (r.z - n.z) ** 2,
      h =
        2 *
        ((r.x - n.x) * (n.x - s.x) +
          (r.y - n.y) * (n.y - s.y) +
          (r.z - n.z) * (n.z - s.z)),
      p = (n.x - s.x) ** 2 + (n.y - s.y) ** 2 + (n.z - s.z) ** 2 - a ** 2,
      d = h ** 2 - 4 * l * p,
      f = en,
      m = tn;
    if (!(d < 0))
      if (d === 0)
        (n.lerp(r, d, f),
          f.vsub(s, m),
          m.normalize(),
          this.reportIntersection(m, f, o, i, -1));
      else {
        const w = (-h - Math.sqrt(d)) / (2 * l),
          g = (-h + Math.sqrt(d)) / (2 * l);
        if (
          (w >= 0 &&
            w <= 1 &&
            (n.lerp(r, w, f),
            f.vsub(s, m),
            m.normalize(),
            this.reportIntersection(m, f, o, i, -1)),
          this.result.shouldStop)
        )
          return;
        g >= 0 &&
          g <= 1 &&
          (n.lerp(r, g, f),
          f.vsub(s, m),
          m.normalize(),
          this.reportIntersection(m, f, o, i, -1));
      }
  }
  _intersectConvex(e, t, s, i, o, n) {
    const r = sn,
      a = Vs,
      l = (n && n.faceList) || null,
      h = e.faces,
      p = e.vertices,
      d = e.faceNormals,
      f = this.direction,
      m = this.from,
      w = this.to,
      g = m.distanceTo(w),
      y = l ? l.length : h.length,
      v = this.result;
    for (let b = 0; !v.shouldStop && b < y; b++) {
      const x = l ? l[b] : b,
        A = h[x],
        _ = d[x],
        P = t,
        I = s;
      (a.copy(p[A[0]]),
        P.vmult(a, a),
        a.vadd(I, a),
        a.vsub(m, a),
        P.vmult(_, r));
      const F = f.dot(r);
      if (Math.abs(F) < this.precision) continue;
      const L = r.dot(a) / F;
      if (!(L < 0)) {
        (f.scale(L, Q),
          Q.vadd(m, Q),
          ae.copy(p[A[0]]),
          P.vmult(ae, ae),
          I.vadd(ae, ae));
        for (let N = 1; !v.shouldStop && N < A.length - 1; N++) {
          (he.copy(p[A[N]]),
            ue.copy(p[A[N + 1]]),
            P.vmult(he, he),
            P.vmult(ue, ue),
            I.vadd(he, he),
            I.vadd(ue, ue));
          const D = Q.distanceTo(m);
          !(
            j.pointInTriangle(Q, ae, he, ue) || j.pointInTriangle(Q, he, ae, ue)
          ) ||
            D > g ||
            this.reportIntersection(r, Q, o, i, x);
        }
      }
    }
  }
  _intersectTrimesh(e, t, s, i, o, n) {
    const r = on,
      a = hn,
      l = un,
      h = Vs,
      p = nn,
      d = rn,
      f = an,
      m = cn,
      w = ln,
      g = e.indices;
    e.vertices;
    const y = this.from,
      v = this.to,
      b = this.direction;
    (l.position.copy(s),
      l.quaternion.copy(t),
      V.vectorToLocalFrame(s, t, b, p),
      V.pointToLocalFrame(s, t, y, d),
      V.pointToLocalFrame(s, t, v, f),
      (f.x *= e.scale.x),
      (f.y *= e.scale.y),
      (f.z *= e.scale.z),
      (d.x *= e.scale.x),
      (d.y *= e.scale.y),
      (d.z *= e.scale.z),
      f.vsub(d, p),
      p.normalize());
    const x = d.distanceSquared(f);
    e.tree.rayQuery(this, l, a);
    for (let A = 0, _ = a.length; !this.result.shouldStop && A !== _; A++) {
      const P = a[A];
      (e.getNormal(P, r), e.getVertex(g[P * 3], ae), ae.vsub(d, h));
      const I = p.dot(r),
        F = r.dot(h) / I;
      if (F < 0) continue;
      (p.scale(F, Q),
        Q.vadd(d, Q),
        e.getVertex(g[P * 3 + 1], he),
        e.getVertex(g[P * 3 + 2], ue));
      const L = Q.distanceSquared(d);
      !(j.pointInTriangle(Q, he, ae, ue) || j.pointInTriangle(Q, ae, he, ue)) ||
        L > x ||
        (V.vectorToWorldFrame(t, r, w),
        V.pointToWorldFrame(s, t, Q, m),
        this.reportIntersection(w, m, o, i, P));
    }
    a.length = 0;
  }
  reportIntersection(e, t, s, i, o) {
    const n = this.from,
      r = this.to,
      a = n.distanceTo(t),
      l = this.result;
    if (!(this.skipBackfaces && e.dot(this.direction) > 0))
      switch (((l.hitFaceIndex = typeof o < "u" ? o : -1), this.mode)) {
        case j.ALL:
          ((this.hasHit = !0),
            l.set(n, r, e, t, s, i, a),
            (l.hasHit = !0),
            this.callback(l));
          break;
        case j.CLOSEST:
          (a < l.distance || !l.hasHit) &&
            ((this.hasHit = !0), (l.hasHit = !0), l.set(n, r, e, t, s, i, a));
          break;
        case j.ANY:
          ((this.hasHit = !0),
            (l.hasHit = !0),
            l.set(n, r, e, t, s, i, a),
            (l.shouldStop = !0));
          break;
      }
  }
  static pointInTriangle(e, t, s, i) {
    (i.vsub(t, Ce), s.vsub(t, Ue), e.vsub(t, Zt));
    const o = Ce.dot(Ce),
      n = Ce.dot(Ue),
      r = Ce.dot(Zt),
      a = Ue.dot(Ue),
      l = Ue.dot(Zt);
    let h, p;
    return (
      (h = a * r - n * l) >= 0 &&
      (p = o * l - n * r) >= 0 &&
      h + p < o * a - n * n
    );
  }
}
j.CLOSEST = xs.CLOSEST;
j.ANY = xs.ANY;
j.ALL = xs.ALL;
const Ds = new oe(),
  Kt = [],
  Ue = new c(),
  Zt = new c(),
  Ko = new c(),
  Zo = new $(),
  Q = new c(),
  ae = new c(),
  he = new c(),
  ue = new c();
new c();
new Tt();
const Os = { faceList: [0] },
  vt = new c(),
  Jo = new j(),
  Qo = [],
  en = new c(),
  tn = new c(),
  sn = new c();
new c();
new c();
const Vs = new c(),
  on = new c(),
  nn = new c(),
  rn = new c(),
  an = new c(),
  ln = new c(),
  cn = new c();
new oe();
const hn = [],
  un = new V(),
  Ce = new c(),
  wt = new c();
function dn(u, e, t) {
  t.vsub(u, Ce);
  const s = Ce.dot(e);
  return (e.scale(s, wt), wt.vadd(u, wt), t.distanceTo(wt));
}
class pn {
  static defaults(e, t) {
    e === void 0 && (e = {});
    for (let s in t) s in e || (e[s] = t[s]);
    return e;
  }
}
class Ws {
  constructor() {
    ((this.spatial = new c()), (this.rotational = new c()));
  }
  multiplyElement(e) {
    return e.spatial.dot(this.spatial) + e.rotational.dot(this.rotational);
  }
  multiplyVectors(e, t) {
    return e.dot(this.spatial) + t.dot(this.rotational);
  }
}
class dt {
  constructor(e, t, s, i) {
    (s === void 0 && (s = -1e6),
      i === void 0 && (i = 1e6),
      (this.id = dt.idCounter++),
      (this.minForce = s),
      (this.maxForce = i),
      (this.bi = e),
      (this.bj = t),
      (this.a = 0),
      (this.b = 0),
      (this.eps = 0),
      (this.jacobianElementA = new Ws()),
      (this.jacobianElementB = new Ws()),
      (this.enabled = !0),
      (this.multiplier = 0),
      this.setSpookParams(1e7, 4, 1 / 60));
  }
  setSpookParams(e, t, s) {
    const i = t,
      o = e,
      n = s;
    ((this.a = 4 / (n * (1 + 4 * i))),
      (this.b = (4 * i) / (1 + 4 * i)),
      (this.eps = 4 / (n * n * o * (1 + 4 * i))));
  }
  computeB(e, t, s) {
    const i = this.computeGW(),
      o = this.computeGq(),
      n = this.computeGiMf();
    return -o * e - i * t - n * s;
  }
  computeGq() {
    const e = this.jacobianElementA,
      t = this.jacobianElementB,
      s = this.bi,
      i = this.bj,
      o = s.position,
      n = i.position;
    return e.spatial.dot(o) + t.spatial.dot(n);
  }
  computeGW() {
    const e = this.jacobianElementA,
      t = this.jacobianElementB,
      s = this.bi,
      i = this.bj,
      o = s.velocity,
      n = i.velocity,
      r = s.angularVelocity,
      a = i.angularVelocity;
    return e.multiplyVectors(o, r) + t.multiplyVectors(n, a);
  }
  computeGWlambda() {
    const e = this.jacobianElementA,
      t = this.jacobianElementB,
      s = this.bi,
      i = this.bj,
      o = s.vlambda,
      n = i.vlambda,
      r = s.wlambda,
      a = i.wlambda;
    return e.multiplyVectors(o, r) + t.multiplyVectors(n, a);
  }
  computeGiMf() {
    const e = this.jacobianElementA,
      t = this.jacobianElementB,
      s = this.bi,
      i = this.bj,
      o = s.force,
      n = s.torque,
      r = i.force,
      a = i.torque,
      l = s.invMassSolve,
      h = i.invMassSolve;
    return (
      o.scale(l, Hs),
      r.scale(h, Us),
      s.invInertiaWorldSolve.vmult(n, js),
      i.invInertiaWorldSolve.vmult(a, $s),
      e.multiplyVectors(Hs, js) + t.multiplyVectors(Us, $s)
    );
  }
  computeGiMGt() {
    const e = this.jacobianElementA,
      t = this.jacobianElementB,
      s = this.bi,
      i = this.bj,
      o = s.invMassSolve,
      n = i.invMassSolve,
      r = s.invInertiaWorldSolve,
      a = i.invInertiaWorldSolve;
    let l = o + n;
    return (
      r.vmult(e.rotational, gt),
      (l += gt.dot(e.rotational)),
      a.vmult(t.rotational, gt),
      (l += gt.dot(t.rotational)),
      l
    );
  }
  addToWlambda(e) {
    const t = this.jacobianElementA,
      s = this.jacobianElementB,
      i = this.bi,
      o = this.bj,
      n = mn;
    (i.vlambda.addScaledVector(i.invMassSolve * e, t.spatial, i.vlambda),
      o.vlambda.addScaledVector(o.invMassSolve * e, s.spatial, o.vlambda),
      i.invInertiaWorldSolve.vmult(t.rotational, n),
      i.wlambda.addScaledVector(e, n, i.wlambda),
      o.invInertiaWorldSolve.vmult(s.rotational, n),
      o.wlambda.addScaledVector(e, n, o.wlambda));
  }
  computeC() {
    return this.computeGiMGt() + this.eps;
  }
}
dt.idCounter = 0;
const Hs = new c(),
  Us = new c(),
  js = new c(),
  $s = new c(),
  gt = new c(),
  mn = new c();
class fn extends dt {
  constructor(e, t, s) {
    (s === void 0 && (s = 1e6),
      super(e, t, 0, s),
      (this.restitution = 0),
      (this.ri = new c()),
      (this.rj = new c()),
      (this.ni = new c()));
  }
  computeB(e) {
    const t = this.a,
      s = this.b,
      i = this.bi,
      o = this.bj,
      n = this.ri,
      r = this.rj,
      a = vn,
      l = wn,
      h = i.velocity,
      p = i.angularVelocity;
    (i.force, i.torque);
    const d = o.velocity,
      f = o.angularVelocity;
    (o.force, o.torque);
    const m = gn,
      w = this.jacobianElementA,
      g = this.jacobianElementB,
      y = this.ni;
    (n.cross(y, a),
      r.cross(y, l),
      y.negate(w.spatial),
      a.negate(w.rotational),
      g.spatial.copy(y),
      g.rotational.copy(l),
      m.copy(o.position),
      m.vadd(r, m),
      m.vsub(i.position, m),
      m.vsub(n, m));
    const v = y.dot(m),
      b = this.restitution + 1,
      x = b * d.dot(y) - b * h.dot(y) + f.dot(l) - p.dot(a),
      A = this.computeGiMf();
    return -v * t - x * s - e * A;
  }
  getImpactVelocityAlongNormal() {
    const e = yn,
      t = bn,
      s = xn,
      i = En,
      o = An;
    return (
      this.bi.position.vadd(this.ri, s),
      this.bj.position.vadd(this.rj, i),
      this.bi.getVelocityAtWorldPoint(s, e),
      this.bj.getVelocityAtWorldPoint(i, t),
      e.vsub(t, o),
      this.ni.dot(o)
    );
  }
}
const vn = new c(),
  wn = new c(),
  gn = new c(),
  yn = new c(),
  bn = new c(),
  xn = new c(),
  En = new c(),
  An = new c();
new c();
new c();
new c();
new c();
new c();
new c();
new c();
new c();
new c();
new c();
class Gs extends dt {
  constructor(e, t, s) {
    (super(e, t, -s, s),
      (this.ri = new c()),
      (this.rj = new c()),
      (this.t = new c()));
  }
  computeB(e) {
    this.a;
    const t = this.b;
    (this.bi, this.bj);
    const s = this.ri,
      i = this.rj,
      o = Sn,
      n = _n,
      r = this.t;
    (s.cross(r, o), i.cross(r, n));
    const a = this.jacobianElementA,
      l = this.jacobianElementB;
    (r.negate(a.spatial),
      o.negate(a.rotational),
      l.spatial.copy(r),
      l.rotational.copy(n));
    const h = this.computeGW(),
      p = this.computeGiMf();
    return -h * t - e * p;
  }
}
const Sn = new c(),
  _n = new c();
class Vt {
  constructor(e, t, s) {
    ((s = pn.defaults(s, {
      friction: 0.3,
      restitution: 0.3,
      contactEquationStiffness: 1e7,
      contactEquationRelaxation: 3,
      frictionEquationStiffness: 1e7,
      frictionEquationRelaxation: 3,
    })),
      (this.id = Vt.idCounter++),
      (this.materials = [e, t]),
      (this.friction = s.friction),
      (this.restitution = s.restitution),
      (this.contactEquationStiffness = s.contactEquationStiffness),
      (this.contactEquationRelaxation = s.contactEquationRelaxation),
      (this.frictionEquationStiffness = s.frictionEquationStiffness),
      (this.frictionEquationRelaxation = s.frictionEquationRelaxation));
  }
}
Vt.idCounter = 0;
class Wt {
  constructor(e) {
    e === void 0 && (e = {});
    let t = "";
    (typeof e == "string" && ((t = e), (e = {})),
      (this.name = t),
      (this.id = Wt.idCounter++),
      (this.friction = typeof e.friction < "u" ? e.friction : -1),
      (this.restitution = typeof e.restitution < "u" ? e.restitution : -1));
  }
}
Wt.idCounter = 0;
new c();
new c();
new c();
new c();
new c();
new c();
new c();
new c();
new c();
new c();
new c();
new c();
new c();
new c();
new c();
new c();
new c();
new c();
new c();
new j();
new c();
new c();
new c();
(new c(1, 0, 0), new c(0, 1, 0), new c(0, 0, 1));
new c();
new c();
new c();
new c();
new c();
new c();
new c();
new c();
new c();
new c();
new c();
new c();
new c();
new c();
new c();
new c();
new c();
new c();
new c();
new c();
new c();
new c();
new c();
new c();
new c();
new c();
new c();
new c();
new c();
new c();
new c();
new oe();
new c();
new oe();
new c();
new c();
new c();
new c();
new c();
new c();
new c();
new oe();
new c();
new V();
new oe();
class Cn {
  constructor() {
    this.equations = [];
  }
  solve(e, t) {
    return 0;
  }
  addEquation(e) {
    e.enabled && !e.bi.isTrigger && !e.bj.isTrigger && this.equations.push(e);
  }
  removeEquation(e) {
    const t = this.equations,
      s = t.indexOf(e);
    s !== -1 && t.splice(s, 1);
  }
  removeAllEquations() {
    this.equations.length = 0;
  }
}
class Mn extends Cn {
  constructor() {
    (super(), (this.iterations = 10), (this.tolerance = 1e-7));
  }
  solve(e, t) {
    let s = 0;
    const i = this.iterations,
      o = this.tolerance * this.tolerance,
      n = this.equations,
      r = n.length,
      a = t.bodies,
      l = a.length,
      h = e;
    let p, d, f, m, w, g;
    if (r !== 0) for (let x = 0; x !== l; x++) a[x].updateSolveMassProperties();
    const y = Tn,
      v = zn,
      b = Pn;
    ((y.length = r), (v.length = r), (b.length = r));
    for (let x = 0; x !== r; x++) {
      const A = n[x];
      ((b[x] = 0), (v[x] = A.computeB(h)), (y[x] = 1 / A.computeC()));
    }
    if (r !== 0) {
      for (let _ = 0; _ !== l; _++) {
        const P = a[_],
          I = P.vlambda,
          F = P.wlambda;
        (I.set(0, 0, 0), F.set(0, 0, 0));
      }
      for (s = 0; s !== i; s++) {
        m = 0;
        for (let _ = 0; _ !== r; _++) {
          const P = n[_];
          ((p = v[_]),
            (d = y[_]),
            (g = b[_]),
            (w = P.computeGWlambda()),
            (f = d * (p - w - P.eps * g)),
            g + f < P.minForce
              ? (f = P.minForce - g)
              : g + f > P.maxForce && (f = P.maxForce - g),
            (b[_] += f),
            (m += f > 0 ? f : -f),
            P.addToWlambda(f));
        }
        if (m * m < o) break;
      }
      for (let _ = 0; _ !== l; _++) {
        const P = a[_],
          I = P.velocity,
          F = P.angularVelocity;
        (P.vlambda.vmul(P.linearFactor, P.vlambda),
          I.vadd(P.vlambda, I),
          P.wlambda.vmul(P.angularFactor, P.wlambda),
          F.vadd(P.wlambda, F));
      }
      let x = n.length;
      const A = 1 / h;
      for (; x--; ) n[x].multiplier = b[x] * A;
    }
    return s;
  }
}
const Pn = [],
  Tn = [],
  zn = [];
class Rn {
  constructor() {
    ((this.objects = []), (this.type = Object));
  }
  release() {
    const e = arguments.length;
    for (let t = 0; t !== e; t++)
      this.objects.push(t < 0 || arguments.length <= t ? void 0 : arguments[t]);
    return this;
  }
  get() {
    return this.objects.length === 0
      ? this.constructObject()
      : this.objects.pop();
  }
  constructObject() {
    throw new Error(
      "constructObject() not implemented in this Pool subclass yet!",
    );
  }
  resize(e) {
    const t = this.objects;
    for (; t.length > e; ) t.pop();
    for (; t.length < e; ) t.push(this.constructObject());
    return this;
  }
}
class qn extends Rn {
  constructor() {
    (super(...arguments), (this.type = c));
  }
  constructObject() {
    return new c();
  }
}
const U = {
  sphereSphere: q.types.SPHERE,
  spherePlane: q.types.SPHERE | q.types.PLANE,
  boxBox: q.types.BOX | q.types.BOX,
  sphereBox: q.types.SPHERE | q.types.BOX,
  planeBox: q.types.PLANE | q.types.BOX,
  convexConvex: q.types.CONVEXPOLYHEDRON,
  sphereConvex: q.types.SPHERE | q.types.CONVEXPOLYHEDRON,
  planeConvex: q.types.PLANE | q.types.CONVEXPOLYHEDRON,
  boxConvex: q.types.BOX | q.types.CONVEXPOLYHEDRON,
  sphereHeightfield: q.types.SPHERE | q.types.HEIGHTFIELD,
  boxHeightfield: q.types.BOX | q.types.HEIGHTFIELD,
  convexHeightfield: q.types.CONVEXPOLYHEDRON | q.types.HEIGHTFIELD,
  sphereParticle: q.types.PARTICLE | q.types.SPHERE,
  planeParticle: q.types.PLANE | q.types.PARTICLE,
  boxParticle: q.types.BOX | q.types.PARTICLE,
  convexParticle: q.types.PARTICLE | q.types.CONVEXPOLYHEDRON,
  cylinderCylinder: q.types.CYLINDER,
  sphereCylinder: q.types.SPHERE | q.types.CYLINDER,
  planeCylinder: q.types.PLANE | q.types.CYLINDER,
  boxCylinder: q.types.BOX | q.types.CYLINDER,
  convexCylinder: q.types.CONVEXPOLYHEDRON | q.types.CYLINDER,
  heightfieldCylinder: q.types.HEIGHTFIELD | q.types.CYLINDER,
  particleCylinder: q.types.PARTICLE | q.types.CYLINDER,
  sphereTrimesh: q.types.SPHERE | q.types.TRIMESH,
  planeTrimesh: q.types.PLANE | q.types.TRIMESH,
};
class Ln {
  get [U.sphereSphere]() {
    return this.sphereSphere;
  }
  get [U.spherePlane]() {
    return this.spherePlane;
  }
  get [U.boxBox]() {
    return this.boxBox;
  }
  get [U.sphereBox]() {
    return this.sphereBox;
  }
  get [U.planeBox]() {
    return this.planeBox;
  }
  get [U.convexConvex]() {
    return this.convexConvex;
  }
  get [U.sphereConvex]() {
    return this.sphereConvex;
  }
  get [U.planeConvex]() {
    return this.planeConvex;
  }
  get [U.boxConvex]() {
    return this.boxConvex;
  }
  get [U.sphereHeightfield]() {
    return this.sphereHeightfield;
  }
  get [U.boxHeightfield]() {
    return this.boxHeightfield;
  }
  get [U.convexHeightfield]() {
    return this.convexHeightfield;
  }
  get [U.sphereParticle]() {
    return this.sphereParticle;
  }
  get [U.planeParticle]() {
    return this.planeParticle;
  }
  get [U.boxParticle]() {
    return this.boxParticle;
  }
  get [U.convexParticle]() {
    return this.convexParticle;
  }
  get [U.cylinderCylinder]() {
    return this.convexConvex;
  }
  get [U.sphereCylinder]() {
    return this.sphereConvex;
  }
  get [U.planeCylinder]() {
    return this.planeConvex;
  }
  get [U.boxCylinder]() {
    return this.boxConvex;
  }
  get [U.convexCylinder]() {
    return this.convexConvex;
  }
  get [U.heightfieldCylinder]() {
    return this.heightfieldCylinder;
  }
  get [U.particleCylinder]() {
    return this.particleCylinder;
  }
  get [U.sphereTrimesh]() {
    return this.sphereTrimesh;
  }
  get [U.planeTrimesh]() {
    return this.planeTrimesh;
  }
  constructor(e) {
    ((this.contactPointPool = []),
      (this.frictionEquationPool = []),
      (this.result = []),
      (this.frictionResult = []),
      (this.v3pool = new qn()),
      (this.world = e),
      (this.currentContactMaterial = e.defaultContactMaterial),
      (this.enableFrictionReduction = !1));
  }
  createContactEquation(e, t, s, i, o, n) {
    let r;
    (this.contactPointPool.length
      ? ((r = this.contactPointPool.pop()), (r.bi = e), (r.bj = t))
      : (r = new fn(e, t)),
      (r.enabled =
        e.collisionResponse &&
        t.collisionResponse &&
        s.collisionResponse &&
        i.collisionResponse));
    const a = this.currentContactMaterial;
    ((r.restitution = a.restitution),
      r.setSpookParams(
        a.contactEquationStiffness,
        a.contactEquationRelaxation,
        this.world.dt,
      ));
    const l = s.material || e.material,
      h = i.material || t.material;
    return (
      l &&
        h &&
        l.restitution >= 0 &&
        h.restitution >= 0 &&
        (r.restitution = l.restitution * h.restitution),
      (r.si = o || s),
      (r.sj = n || i),
      r
    );
  }
  createFrictionEquationsFromContact(e, t) {
    const s = e.bi,
      i = e.bj,
      o = e.si,
      n = e.sj,
      r = this.world,
      a = this.currentContactMaterial;
    let l = a.friction;
    const h = o.material || s.material,
      p = n.material || i.material;
    if (
      (h &&
        p &&
        h.friction >= 0 &&
        p.friction >= 0 &&
        (l = h.friction * p.friction),
      l > 0)
    ) {
      const d = l * (r.frictionGravity || r.gravity).length();
      let f = s.invMass + i.invMass;
      f > 0 && (f = 1 / f);
      const m = this.frictionEquationPool,
        w = m.length ? m.pop() : new Gs(s, i, d * f),
        g = m.length ? m.pop() : new Gs(s, i, d * f);
      return (
        (w.bi = g.bi = s),
        (w.bj = g.bj = i),
        (w.minForce = g.minForce = -d * f),
        (w.maxForce = g.maxForce = d * f),
        w.ri.copy(e.ri),
        w.rj.copy(e.rj),
        g.ri.copy(e.ri),
        g.rj.copy(e.rj),
        e.ni.tangents(w.t, g.t),
        w.setSpookParams(
          a.frictionEquationStiffness,
          a.frictionEquationRelaxation,
          r.dt,
        ),
        g.setSpookParams(
          a.frictionEquationStiffness,
          a.frictionEquationRelaxation,
          r.dt,
        ),
        (w.enabled = g.enabled = e.enabled),
        t.push(w, g),
        !0
      );
    }
    return !1;
  }
  createFrictionFromAverage(e) {
    let t = this.result[this.result.length - 1];
    if (
      !this.createFrictionEquationsFromContact(t, this.frictionResult) ||
      e === 1
    )
      return;
    const s = this.frictionResult[this.frictionResult.length - 2],
      i = this.frictionResult[this.frictionResult.length - 1];
    (_e.setZero(), Ne.setZero(), Fe.setZero());
    const o = t.bi;
    t.bj;
    for (let r = 0; r !== e; r++)
      ((t = this.result[this.result.length - 1 - r]),
        t.bi !== o
          ? (_e.vadd(t.ni, _e), Ne.vadd(t.ri, Ne), Fe.vadd(t.rj, Fe))
          : (_e.vsub(t.ni, _e), Ne.vadd(t.rj, Ne), Fe.vadd(t.ri, Fe)));
    const n = 1 / e;
    (Ne.scale(n, s.ri),
      Fe.scale(n, s.rj),
      i.ri.copy(s.ri),
      i.rj.copy(s.rj),
      _e.normalize(),
      _e.tangents(s.t, i.t));
  }
  getContacts(e, t, s, i, o, n, r) {
    ((this.contactPointPool = o),
      (this.frictionEquationPool = r),
      (this.result = i),
      (this.frictionResult = n));
    const a = Bn,
      l = Nn,
      h = In,
      p = kn;
    for (let d = 0, f = e.length; d !== f; d++) {
      const m = e[d],
        w = t[d];
      let g = null;
      m.material &&
        w.material &&
        (g = s.getContactMaterial(m.material, w.material) || null);
      const y =
        (m.type & R.KINEMATIC && w.type & R.STATIC) ||
        (m.type & R.STATIC && w.type & R.KINEMATIC) ||
        (m.type & R.KINEMATIC && w.type & R.KINEMATIC);
      for (let v = 0; v < m.shapes.length; v++) {
        (m.quaternion.mult(m.shapeOrientations[v], a),
          m.quaternion.vmult(m.shapeOffsets[v], h),
          h.vadd(m.position, h));
        const b = m.shapes[v];
        for (let x = 0; x < w.shapes.length; x++) {
          (w.quaternion.mult(w.shapeOrientations[x], l),
            w.quaternion.vmult(w.shapeOffsets[x], p),
            p.vadd(w.position, p));
          const A = w.shapes[x];
          if (
            !(
              b.collisionFilterMask & A.collisionFilterGroup &&
              A.collisionFilterMask & b.collisionFilterGroup
            ) ||
            h.distanceTo(p) > b.boundingSphereRadius + A.boundingSphereRadius
          )
            continue;
          let _ = null;
          (b.material &&
            A.material &&
            (_ = s.getContactMaterial(b.material, A.material) || null),
            (this.currentContactMaterial = _ || g || s.defaultContactMaterial));
          const P = b.type | A.type,
            I = this[P];
          if (I) {
            let F = !1;
            (b.type < A.type
              ? (F = I.call(this, b, A, h, p, a, l, m, w, b, A, y))
              : (F = I.call(this, A, b, p, h, l, a, w, m, b, A, y)),
              F &&
                y &&
                (s.shapeOverlapKeeper.set(b.id, A.id),
                s.bodyOverlapKeeper.set(m.id, w.id)));
          }
        }
      }
    }
  }
  sphereSphere(e, t, s, i, o, n, r, a, l, h, p) {
    if (p) return s.distanceSquared(i) < (e.radius + t.radius) ** 2;
    const d = this.createContactEquation(r, a, e, t, l, h);
    (i.vsub(s, d.ni),
      d.ni.normalize(),
      d.ri.copy(d.ni),
      d.rj.copy(d.ni),
      d.ri.scale(e.radius, d.ri),
      d.rj.scale(-t.radius, d.rj),
      d.ri.vadd(s, d.ri),
      d.ri.vsub(r.position, d.ri),
      d.rj.vadd(i, d.rj),
      d.rj.vsub(a.position, d.rj),
      this.result.push(d),
      this.createFrictionEquationsFromContact(d, this.frictionResult));
  }
  spherePlane(e, t, s, i, o, n, r, a, l, h, p) {
    const d = this.createContactEquation(r, a, e, t, l, h);
    if (
      (d.ni.set(0, 0, 1),
      n.vmult(d.ni, d.ni),
      d.ni.negate(d.ni),
      d.ni.normalize(),
      d.ni.scale(e.radius, d.ri),
      s.vsub(i, yt),
      d.ni.scale(d.ni.dot(yt), Ys),
      yt.vsub(Ys, d.rj),
      -yt.dot(d.ni) <= e.radius)
    ) {
      if (p) return !0;
      const f = d.ri,
        m = d.rj;
      (f.vadd(s, f),
        f.vsub(r.position, f),
        m.vadd(i, m),
        m.vsub(a.position, m),
        this.result.push(d),
        this.createFrictionEquationsFromContact(d, this.frictionResult));
    }
  }
  boxBox(e, t, s, i, o, n, r, a, l, h, p) {
    return (
      (e.convexPolyhedronRepresentation.material = e.material),
      (t.convexPolyhedronRepresentation.material = t.material),
      (e.convexPolyhedronRepresentation.collisionResponse =
        e.collisionResponse),
      (t.convexPolyhedronRepresentation.collisionResponse =
        t.collisionResponse),
      this.convexConvex(
        e.convexPolyhedronRepresentation,
        t.convexPolyhedronRepresentation,
        s,
        i,
        o,
        n,
        r,
        a,
        e,
        t,
        p,
      )
    );
  }
  sphereBox(e, t, s, i, o, n, r, a, l, h, p) {
    const d = this.v3pool,
      f = cr;
    (s.vsub(i, bt), t.getSideNormals(f, n));
    const m = e.radius;
    let w = !1;
    const g = ur,
      y = dr,
      v = pr;
    let b = null,
      x = 0,
      A = 0,
      _ = 0,
      P = null;
    for (let C = 0, H = f.length; C !== H && w === !1; C++) {
      const z = rr;
      z.copy(f[C]);
      const k = z.length();
      z.normalize();
      const O = bt.dot(z);
      if (O < k + m && O > 0) {
        const X = ar,
          B = lr;
        (X.copy(f[(C + 1) % 3]), B.copy(f[(C + 2) % 3]));
        const ke = X.length(),
          pt = B.length();
        (X.normalize(), B.normalize());
        const Ht = bt.dot(X),
          Ut = bt.dot(B);
        if (Ht < ke && Ht > -ke && Ut < pt && Ut > -pt) {
          const Es = Math.abs(O - k - m);
          if (
            (P === null || Es < P) &&
            ((P = Es),
            (A = Ht),
            (_ = Ut),
            (b = k),
            g.copy(z),
            y.copy(X),
            v.copy(B),
            x++,
            p)
          )
            return !0;
        }
      }
    }
    if (x) {
      w = !0;
      const C = this.createContactEquation(r, a, e, t, l, h);
      (g.scale(-m, C.ri),
        C.ni.copy(g),
        C.ni.negate(C.ni),
        g.scale(b, g),
        y.scale(A, y),
        g.vadd(y, g),
        v.scale(_, v),
        g.vadd(v, C.rj),
        C.ri.vadd(s, C.ri),
        C.ri.vsub(r.position, C.ri),
        C.rj.vadd(i, C.rj),
        C.rj.vsub(a.position, C.rj),
        this.result.push(C),
        this.createFrictionEquationsFromContact(C, this.frictionResult));
    }
    let I = d.get();
    const F = hr;
    for (let C = 0; C !== 2 && !w; C++)
      for (let H = 0; H !== 2 && !w; H++)
        for (let z = 0; z !== 2 && !w; z++)
          if (
            (I.set(0, 0, 0),
            C ? I.vadd(f[0], I) : I.vsub(f[0], I),
            H ? I.vadd(f[1], I) : I.vsub(f[1], I),
            z ? I.vadd(f[2], I) : I.vsub(f[2], I),
            i.vadd(I, F),
            F.vsub(s, F),
            F.lengthSquared() < m * m)
          ) {
            if (p) return !0;
            w = !0;
            const k = this.createContactEquation(r, a, e, t, l, h);
            (k.ri.copy(F),
              k.ri.normalize(),
              k.ni.copy(k.ri),
              k.ri.scale(m, k.ri),
              k.rj.copy(I),
              k.ri.vadd(s, k.ri),
              k.ri.vsub(r.position, k.ri),
              k.rj.vadd(i, k.rj),
              k.rj.vsub(a.position, k.rj),
              this.result.push(k),
              this.createFrictionEquationsFromContact(k, this.frictionResult));
          }
    (d.release(I), (I = null));
    const L = d.get(),
      N = d.get(),
      D = d.get(),
      S = d.get(),
      T = d.get(),
      M = f.length;
    for (let C = 0; C !== M && !w; C++)
      for (let H = 0; H !== M && !w; H++)
        if (C % 3 !== H % 3) {
          (f[H].cross(f[C], L),
            L.normalize(),
            f[C].vadd(f[H], N),
            D.copy(s),
            D.vsub(N, D),
            D.vsub(i, D));
          const z = D.dot(L);
          L.scale(z, S);
          let k = 0;
          for (; k === C % 3 || k === H % 3; ) k++;
          (T.copy(s), T.vsub(S, T), T.vsub(N, T), T.vsub(i, T));
          const O = Math.abs(z),
            X = T.length();
          if (O < f[k].length() && X < m) {
            if (p) return !0;
            w = !0;
            const B = this.createContactEquation(r, a, e, t, l, h);
            (N.vadd(S, B.rj),
              B.rj.copy(B.rj),
              T.negate(B.ni),
              B.ni.normalize(),
              B.ri.copy(B.rj),
              B.ri.vadd(i, B.ri),
              B.ri.vsub(s, B.ri),
              B.ri.normalize(),
              B.ri.scale(m, B.ri),
              B.ri.vadd(s, B.ri),
              B.ri.vsub(r.position, B.ri),
              B.rj.vadd(i, B.rj),
              B.rj.vsub(a.position, B.rj),
              this.result.push(B),
              this.createFrictionEquationsFromContact(B, this.frictionResult));
          }
        }
    d.release(L, N, D, S, T);
  }
  planeBox(e, t, s, i, o, n, r, a, l, h, p) {
    return (
      (t.convexPolyhedronRepresentation.material = t.material),
      (t.convexPolyhedronRepresentation.collisionResponse =
        t.collisionResponse),
      (t.convexPolyhedronRepresentation.id = t.id),
      this.planeConvex(
        e,
        t.convexPolyhedronRepresentation,
        s,
        i,
        o,
        n,
        r,
        a,
        e,
        t,
        p,
      )
    );
  }
  convexConvex(e, t, s, i, o, n, r, a, l, h, p, d, f) {
    const m = Pr;
    if (
      !(s.distanceTo(i) > e.boundingSphereRadius + t.boundingSphereRadius) &&
      e.findSeparatingAxis(t, s, o, i, n, m, d, f)
    ) {
      const w = [],
        g = Tr;
      e.clipAgainstHull(s, o, t, i, n, m, -100, 100, w);
      let y = 0;
      for (let v = 0; v !== w.length; v++) {
        if (p) return !0;
        const b = this.createContactEquation(r, a, e, t, l, h),
          x = b.ri,
          A = b.rj;
        (m.negate(b.ni),
          w[v].normal.negate(g),
          g.scale(w[v].depth, g),
          w[v].point.vadd(g, x),
          A.copy(w[v].point),
          x.vsub(s, x),
          A.vsub(i, A),
          x.vadd(s, x),
          x.vsub(r.position, x),
          A.vadd(i, A),
          A.vsub(a.position, A),
          this.result.push(b),
          y++,
          this.enableFrictionReduction ||
            this.createFrictionEquationsFromContact(b, this.frictionResult));
      }
      this.enableFrictionReduction && y && this.createFrictionFromAverage(y);
    }
  }
  sphereConvex(e, t, s, i, o, n, r, a, l, h, p) {
    const d = this.v3pool;
    s.vsub(i, mr);
    const f = t.faceNormals,
      m = t.faces,
      w = t.vertices,
      g = e.radius;
    let y = !1;
    for (let v = 0; v !== w.length; v++) {
      const b = w[v],
        x = gr;
      (n.vmult(b, x), i.vadd(x, x));
      const A = wr;
      if ((x.vsub(s, A), A.lengthSquared() < g * g)) {
        if (p) return !0;
        y = !0;
        const _ = this.createContactEquation(r, a, e, t, l, h);
        (_.ri.copy(A),
          _.ri.normalize(),
          _.ni.copy(_.ri),
          _.ri.scale(g, _.ri),
          x.vsub(i, _.rj),
          _.ri.vadd(s, _.ri),
          _.ri.vsub(r.position, _.ri),
          _.rj.vadd(i, _.rj),
          _.rj.vsub(a.position, _.rj),
          this.result.push(_),
          this.createFrictionEquationsFromContact(_, this.frictionResult));
        return;
      }
    }
    for (let v = 0, b = m.length; v !== b && y === !1; v++) {
      const x = f[v],
        A = m[v],
        _ = yr;
      n.vmult(x, _);
      const P = br;
      (n.vmult(w[A[0]], P), P.vadd(i, P));
      const I = xr;
      (_.scale(-g, I), s.vadd(I, I));
      const F = Er;
      I.vsub(P, F);
      const L = F.dot(_),
        N = Ar;
      if ((s.vsub(P, N), L < 0 && N.dot(_) > 0)) {
        const D = [];
        for (let S = 0, T = A.length; S !== T; S++) {
          const M = d.get();
          (n.vmult(w[A[S]], M), i.vadd(M, M), D.push(M));
        }
        if (nr(D, _, s)) {
          if (p) return !0;
          y = !0;
          const S = this.createContactEquation(r, a, e, t, l, h);
          (_.scale(-g, S.ri), _.negate(S.ni));
          const T = d.get();
          _.scale(-L, T);
          const M = d.get();
          (_.scale(-g, M),
            s.vsub(i, S.rj),
            S.rj.vadd(M, S.rj),
            S.rj.vadd(T, S.rj),
            S.rj.vadd(i, S.rj),
            S.rj.vsub(a.position, S.rj),
            S.ri.vadd(s, S.ri),
            S.ri.vsub(r.position, S.ri),
            d.release(T),
            d.release(M),
            this.result.push(S),
            this.createFrictionEquationsFromContact(S, this.frictionResult));
          for (let C = 0, H = D.length; C !== H; C++) d.release(D[C]);
          return;
        } else
          for (let S = 0; S !== A.length; S++) {
            const T = d.get(),
              M = d.get();
            (n.vmult(w[A[(S + 1) % A.length]], T),
              n.vmult(w[A[(S + 2) % A.length]], M),
              i.vadd(T, T),
              i.vadd(M, M));
            const C = fr;
            M.vsub(T, C);
            const H = vr;
            C.unit(H);
            const z = d.get(),
              k = d.get();
            s.vsub(T, k);
            const O = k.dot(H);
            (H.scale(O, z), z.vadd(T, z));
            const X = d.get();
            if (
              (z.vsub(s, X),
              O > 0 && O * O < C.lengthSquared() && X.lengthSquared() < g * g)
            ) {
              if (p) return !0;
              const B = this.createContactEquation(r, a, e, t, l, h);
              (z.vsub(i, B.rj),
                z.vsub(s, B.ni),
                B.ni.normalize(),
                B.ni.scale(g, B.ri),
                B.rj.vadd(i, B.rj),
                B.rj.vsub(a.position, B.rj),
                B.ri.vadd(s, B.ri),
                B.ri.vsub(r.position, B.ri),
                this.result.push(B),
                this.createFrictionEquationsFromContact(
                  B,
                  this.frictionResult,
                ));
              for (let ke = 0, pt = D.length; ke !== pt; ke++) d.release(D[ke]);
              (d.release(T),
                d.release(M),
                d.release(z),
                d.release(X),
                d.release(k));
              return;
            }
            (d.release(T),
              d.release(M),
              d.release(z),
              d.release(X),
              d.release(k));
          }
        for (let S = 0, T = D.length; S !== T; S++) d.release(D[S]);
      }
    }
  }
  planeConvex(e, t, s, i, o, n, r, a, l, h, p) {
    const d = Sr,
      f = _r;
    (f.set(0, 0, 1), o.vmult(f, f));
    let m = 0;
    const w = Cr;
    for (let g = 0; g !== t.vertices.length; g++)
      if (
        (d.copy(t.vertices[g]),
        n.vmult(d, d),
        i.vadd(d, d),
        d.vsub(s, w),
        f.dot(w) <= 0)
      ) {
        if (p) return !0;
        const v = this.createContactEquation(r, a, e, t, l, h),
          b = Mr;
        (f.scale(f.dot(w), b),
          d.vsub(b, b),
          b.vsub(s, v.ri),
          v.ni.copy(f),
          d.vsub(i, v.rj),
          v.ri.vadd(s, v.ri),
          v.ri.vsub(r.position, v.ri),
          v.rj.vadd(i, v.rj),
          v.rj.vsub(a.position, v.rj),
          this.result.push(v),
          m++,
          this.enableFrictionReduction ||
            this.createFrictionEquationsFromContact(v, this.frictionResult));
      }
    this.enableFrictionReduction && m && this.createFrictionFromAverage(m);
  }
  boxConvex(e, t, s, i, o, n, r, a, l, h, p) {
    return (
      (e.convexPolyhedronRepresentation.material = e.material),
      (e.convexPolyhedronRepresentation.collisionResponse =
        e.collisionResponse),
      this.convexConvex(
        e.convexPolyhedronRepresentation,
        t,
        s,
        i,
        o,
        n,
        r,
        a,
        e,
        t,
        p,
      )
    );
  }
  sphereHeightfield(e, t, s, i, o, n, r, a, l, h, p) {
    const d = t.data,
      f = e.radius,
      m = t.elementSize,
      w = Vr,
      g = Or;
    V.pointToLocalFrame(i, n, s, g);
    let y = Math.floor((g.x - f) / m) - 1,
      v = Math.ceil((g.x + f) / m) + 1,
      b = Math.floor((g.y - f) / m) - 1,
      x = Math.ceil((g.y + f) / m) + 1;
    if (v < 0 || x < 0 || y > d.length || b > d[0].length) return;
    (y < 0 && (y = 0),
      v < 0 && (v = 0),
      b < 0 && (b = 0),
      x < 0 && (x = 0),
      y >= d.length && (y = d.length - 1),
      v >= d.length && (v = d.length - 1),
      x >= d[0].length && (x = d[0].length - 1),
      b >= d[0].length && (b = d[0].length - 1));
    const A = [];
    t.getRectMinMax(y, b, v, x, A);
    const _ = A[0],
      P = A[1];
    if (g.z - f > P || g.z + f < _) return;
    const I = this.result;
    for (let F = y; F < v; F++)
      for (let L = b; L < x; L++) {
        const N = I.length;
        let D = !1;
        if (
          (t.getConvexTrianglePillar(F, L, !1),
          V.pointToWorldFrame(i, n, t.pillarOffset, w),
          s.distanceTo(w) <
            t.pillarConvex.boundingSphereRadius + e.boundingSphereRadius &&
            (D = this.sphereConvex(
              e,
              t.pillarConvex,
              s,
              w,
              o,
              n,
              r,
              a,
              e,
              t,
              p,
            )),
          (p && D) ||
            (t.getConvexTrianglePillar(F, L, !0),
            V.pointToWorldFrame(i, n, t.pillarOffset, w),
            s.distanceTo(w) <
              t.pillarConvex.boundingSphereRadius + e.boundingSphereRadius &&
              (D = this.sphereConvex(
                e,
                t.pillarConvex,
                s,
                w,
                o,
                n,
                r,
                a,
                e,
                t,
                p,
              )),
            p && D))
        )
          return !0;
        if (I.length - N > 2) return;
      }
  }
  boxHeightfield(e, t, s, i, o, n, r, a, l, h, p) {
    return (
      (e.convexPolyhedronRepresentation.material = e.material),
      (e.convexPolyhedronRepresentation.collisionResponse =
        e.collisionResponse),
      this.convexHeightfield(
        e.convexPolyhedronRepresentation,
        t,
        s,
        i,
        o,
        n,
        r,
        a,
        e,
        t,
        p,
      )
    );
  }
  convexHeightfield(e, t, s, i, o, n, r, a, l, h, p) {
    const d = t.data,
      f = t.elementSize,
      m = e.boundingSphereRadius,
      w = Fr,
      g = Dr,
      y = Nr;
    V.pointToLocalFrame(i, n, s, y);
    let v = Math.floor((y.x - m) / f) - 1,
      b = Math.ceil((y.x + m) / f) + 1,
      x = Math.floor((y.y - m) / f) - 1,
      A = Math.ceil((y.y + m) / f) + 1;
    if (b < 0 || A < 0 || v > d.length || x > d[0].length) return;
    (v < 0 && (v = 0),
      b < 0 && (b = 0),
      x < 0 && (x = 0),
      A < 0 && (A = 0),
      v >= d.length && (v = d.length - 1),
      b >= d.length && (b = d.length - 1),
      A >= d[0].length && (A = d[0].length - 1),
      x >= d[0].length && (x = d[0].length - 1));
    const _ = [];
    t.getRectMinMax(v, x, b, A, _);
    const P = _[0],
      I = _[1];
    if (!(y.z - m > I || y.z + m < P))
      for (let F = v; F < b; F++)
        for (let L = x; L < A; L++) {
          let N = !1;
          if (
            (t.getConvexTrianglePillar(F, L, !1),
            V.pointToWorldFrame(i, n, t.pillarOffset, w),
            s.distanceTo(w) <
              t.pillarConvex.boundingSphereRadius + e.boundingSphereRadius &&
              (N = this.convexConvex(
                e,
                t.pillarConvex,
                s,
                w,
                o,
                n,
                r,
                a,
                null,
                null,
                p,
                g,
                null,
              )),
            (p && N) ||
              (t.getConvexTrianglePillar(F, L, !0),
              V.pointToWorldFrame(i, n, t.pillarOffset, w),
              s.distanceTo(w) <
                t.pillarConvex.boundingSphereRadius + e.boundingSphereRadius &&
                (N = this.convexConvex(
                  e,
                  t.pillarConvex,
                  s,
                  w,
                  o,
                  n,
                  r,
                  a,
                  null,
                  null,
                  p,
                  g,
                  null,
                )),
              p && N))
          )
            return !0;
        }
  }
  sphereParticle(e, t, s, i, o, n, r, a, l, h, p) {
    const d = Lr;
    if (
      (d.set(0, 0, 1), i.vsub(s, d), d.lengthSquared() <= e.radius * e.radius)
    ) {
      if (p) return !0;
      const m = this.createContactEquation(a, r, t, e, l, h);
      (d.normalize(),
        m.rj.copy(d),
        m.rj.scale(e.radius, m.rj),
        m.ni.copy(d),
        m.ni.negate(m.ni),
        m.ri.set(0, 0, 0),
        this.result.push(m),
        this.createFrictionEquationsFromContact(m, this.frictionResult));
    }
  }
  planeParticle(e, t, s, i, o, n, r, a, l, h, p) {
    const d = zr;
    (d.set(0, 0, 1), r.quaternion.vmult(d, d));
    const f = Rr;
    if ((i.vsub(r.position, f), d.dot(f) <= 0)) {
      if (p) return !0;
      const w = this.createContactEquation(a, r, t, e, l, h);
      (w.ni.copy(d), w.ni.negate(w.ni), w.ri.set(0, 0, 0));
      const g = qr;
      (d.scale(d.dot(i), g),
        i.vsub(g, g),
        w.rj.copy(g),
        this.result.push(w),
        this.createFrictionEquationsFromContact(w, this.frictionResult));
    }
  }
  boxParticle(e, t, s, i, o, n, r, a, l, h, p) {
    return (
      (e.convexPolyhedronRepresentation.material = e.material),
      (e.convexPolyhedronRepresentation.collisionResponse =
        e.collisionResponse),
      this.convexParticle(
        e.convexPolyhedronRepresentation,
        t,
        s,
        i,
        o,
        n,
        r,
        a,
        e,
        t,
        p,
      )
    );
  }
  convexParticle(e, t, s, i, o, n, r, a, l, h, p) {
    let d = -1;
    const f = kr,
      m = Br;
    let w = null;
    const g = Ir;
    if (
      (g.copy(i),
      g.vsub(s, g),
      o.conjugate(Xs),
      Xs.vmult(g, g),
      e.pointIsInside(g))
    ) {
      (e.worldVerticesNeedsUpdate && e.computeWorldVertices(s, o),
        e.worldFaceNormalsNeedsUpdate && e.computeWorldFaceNormals(o));
      for (let y = 0, v = e.faces.length; y !== v; y++) {
        const b = [e.worldVertices[e.faces[y][0]]],
          x = e.worldFaceNormals[y];
        i.vsub(b[0], Ks);
        const A = -x.dot(Ks);
        if (w === null || Math.abs(A) < Math.abs(w)) {
          if (p) return !0;
          ((w = A), (d = y), f.copy(x));
        }
      }
      if (d !== -1) {
        const y = this.createContactEquation(a, r, t, e, l, h);
        (f.scale(w, m),
          m.vadd(i, m),
          m.vsub(s, m),
          y.rj.copy(m),
          f.negate(y.ni),
          y.ri.set(0, 0, 0));
        const v = y.ri,
          b = y.rj;
        (v.vadd(i, v),
          v.vsub(a.position, v),
          b.vadd(s, b),
          b.vsub(r.position, b),
          this.result.push(y),
          this.createFrictionEquationsFromContact(y, this.frictionResult));
      } else
        console.warn(
          "Point found inside convex, but did not find penetrating face!",
        );
    }
  }
  heightfieldCylinder(e, t, s, i, o, n, r, a, l, h, p) {
    return this.convexHeightfield(t, e, i, s, n, o, a, r, l, h, p);
  }
  particleCylinder(e, t, s, i, o, n, r, a, l, h, p) {
    return this.convexParticle(t, e, i, s, n, o, a, r, l, h, p);
  }
  sphereTrimesh(e, t, s, i, o, n, r, a, l, h, p) {
    const d = jn,
      f = $n,
      m = Gn,
      w = Yn,
      g = Xn,
      y = Kn,
      v = er,
      b = Un,
      x = Wn,
      A = tr;
    V.pointToLocalFrame(i, n, s, g);
    const _ = e.radius;
    (v.lowerBound.set(g.x - _, g.y - _, g.z - _),
      v.upperBound.set(g.x + _, g.y + _, g.z + _),
      t.getTrianglesInAABB(v, A));
    const P = Hn,
      I = e.radius * e.radius;
    for (let S = 0; S < A.length; S++)
      for (let T = 0; T < 3; T++)
        if (
          (t.getVertex(t.indices[A[S] * 3 + T], P),
          P.vsub(g, x),
          x.lengthSquared() <= I)
        ) {
          if ((b.copy(P), V.pointToWorldFrame(i, n, b, P), P.vsub(s, x), p))
            return !0;
          let M = this.createContactEquation(r, a, e, t, l, h);
          (M.ni.copy(x),
            M.ni.normalize(),
            M.ri.copy(M.ni),
            M.ri.scale(e.radius, M.ri),
            M.ri.vadd(s, M.ri),
            M.ri.vsub(r.position, M.ri),
            M.rj.copy(P),
            M.rj.vsub(a.position, M.rj),
            this.result.push(M),
            this.createFrictionEquationsFromContact(M, this.frictionResult));
        }
    for (let S = 0; S < A.length; S++)
      for (let T = 0; T < 3; T++) {
        (t.getVertex(t.indices[A[S] * 3 + T], d),
          t.getVertex(t.indices[A[S] * 3 + ((T + 1) % 3)], f),
          f.vsub(d, m),
          g.vsub(f, y));
        const M = y.dot(m);
        g.vsub(d, y);
        let C = y.dot(m);
        if (
          C > 0 &&
          M < 0 &&
          (g.vsub(d, y),
          w.copy(m),
          w.normalize(),
          (C = y.dot(w)),
          w.scale(C, y),
          y.vadd(d, y),
          y.distanceTo(g) < e.radius)
        ) {
          if (p) return !0;
          const z = this.createContactEquation(r, a, e, t, l, h);
          (y.vsub(g, z.ni),
            z.ni.normalize(),
            z.ni.scale(e.radius, z.ri),
            z.ri.vadd(s, z.ri),
            z.ri.vsub(r.position, z.ri),
            V.pointToWorldFrame(i, n, y, y),
            y.vsub(a.position, z.rj),
            V.vectorToWorldFrame(n, z.ni, z.ni),
            V.vectorToWorldFrame(n, z.ri, z.ri),
            this.result.push(z),
            this.createFrictionEquationsFromContact(z, this.frictionResult));
        }
      }
    const F = Zn,
      L = Jn,
      N = Qn,
      D = Vn;
    for (let S = 0, T = A.length; S !== T; S++) {
      (t.getTriangleVertices(A[S], F, L, N),
        t.getNormal(A[S], D),
        g.vsub(F, y));
      let M = y.dot(D);
      if (
        (D.scale(M, y),
        g.vsub(y, y),
        (M = y.distanceTo(g)),
        j.pointInTriangle(y, F, L, N) && M < e.radius)
      ) {
        if (p) return !0;
        let C = this.createContactEquation(r, a, e, t, l, h);
        (y.vsub(g, C.ni),
          C.ni.normalize(),
          C.ni.scale(e.radius, C.ri),
          C.ri.vadd(s, C.ri),
          C.ri.vsub(r.position, C.ri),
          V.pointToWorldFrame(i, n, y, y),
          y.vsub(a.position, C.rj),
          V.vectorToWorldFrame(n, C.ni, C.ni),
          V.vectorToWorldFrame(n, C.ri, C.ri),
          this.result.push(C),
          this.createFrictionEquationsFromContact(C, this.frictionResult));
      }
    }
    A.length = 0;
  }
  planeTrimesh(e, t, s, i, o, n, r, a, l, h, p) {
    const d = new c(),
      f = Fn;
    (f.set(0, 0, 1), o.vmult(f, f));
    for (let m = 0; m < t.vertices.length / 3; m++) {
      t.getVertex(m, d);
      const w = new c();
      (w.copy(d), V.pointToWorldFrame(i, n, w, d));
      const g = Dn;
      if ((d.vsub(s, g), f.dot(g) <= 0)) {
        if (p) return !0;
        const v = this.createContactEquation(r, a, e, t, l, h);
        v.ni.copy(f);
        const b = On;
        (f.scale(g.dot(f), b),
          d.vsub(b, b),
          v.ri.copy(b),
          v.ri.vsub(r.position, v.ri),
          v.rj.copy(d),
          v.rj.vsub(a.position, v.rj),
          this.result.push(v),
          this.createFrictionEquationsFromContact(v, this.frictionResult));
      }
    }
  }
}
const _e = new c(),
  Ne = new c(),
  Fe = new c(),
  In = new c(),
  kn = new c(),
  Bn = new $(),
  Nn = new $(),
  Fn = new c(),
  Dn = new c(),
  On = new c(),
  Vn = new c(),
  Wn = new c();
new c();
const Hn = new c(),
  Un = new c(),
  jn = new c(),
  $n = new c(),
  Gn = new c(),
  Yn = new c(),
  Xn = new c(),
  Kn = new c(),
  Zn = new c(),
  Jn = new c(),
  Qn = new c(),
  er = new oe(),
  tr = [],
  yt = new c(),
  Ys = new c(),
  sr = new c(),
  ir = new c(),
  or = new c();
function nr(u, e, t) {
  let s = null;
  const i = u.length;
  for (let o = 0; o !== i; o++) {
    const n = u[o],
      r = sr;
    u[(o + 1) % i].vsub(n, r);
    const a = ir;
    r.cross(e, a);
    const l = or;
    t.vsub(n, l);
    const h = a.dot(l);
    if (s === null || (h > 0 && s === !0) || (h <= 0 && s === !1)) {
      s === null && (s = h > 0);
      continue;
    } else return !1;
  }
  return !0;
}
const bt = new c(),
  rr = new c(),
  ar = new c(),
  lr = new c(),
  cr = [new c(), new c(), new c(), new c(), new c(), new c()],
  hr = new c(),
  ur = new c(),
  dr = new c(),
  pr = new c(),
  mr = new c(),
  fr = new c(),
  vr = new c(),
  wr = new c(),
  gr = new c(),
  yr = new c(),
  br = new c(),
  xr = new c(),
  Er = new c(),
  Ar = new c();
new c();
new c();
const Sr = new c(),
  _r = new c(),
  Cr = new c(),
  Mr = new c(),
  Pr = new c(),
  Tr = new c(),
  zr = new c(),
  Rr = new c(),
  qr = new c(),
  Lr = new c(),
  Xs = new $(),
  Ir = new c();
new c();
const kr = new c(),
  Ks = new c(),
  Br = new c(),
  Nr = new c(),
  Fr = new c(),
  Dr = [0],
  Or = new c(),
  Vr = new c();
class Zs {
  constructor() {
    ((this.current = []), (this.previous = []));
  }
  getKey(e, t) {
    if (t < e) {
      const s = t;
      ((t = e), (e = s));
    }
    return (e << 16) | t;
  }
  set(e, t) {
    const s = this.getKey(e, t),
      i = this.current;
    let o = 0;
    for (; s > i[o]; ) o++;
    if (s !== i[o]) {
      for (let n = i.length - 1; n >= o; n--) i[n + 1] = i[n];
      i[o] = s;
    }
  }
  tick() {
    const e = this.current;
    ((this.current = this.previous),
      (this.previous = e),
      (this.current.length = 0));
  }
  getDiff(e, t) {
    const s = this.current,
      i = this.previous,
      o = s.length,
      n = i.length;
    let r = 0;
    for (let a = 0; a < o; a++) {
      let l = !1;
      const h = s[a];
      for (; h > i[r]; ) r++;
      ((l = h === i[r]), l || Js(e, h));
    }
    r = 0;
    for (let a = 0; a < n; a++) {
      let l = !1;
      const h = i[a];
      for (; h > s[r]; ) r++;
      ((l = s[r] === h), l || Js(t, h));
    }
  }
}
function Js(u, e) {
  u.push((e & 4294901760) >> 16, e & 65535);
}
const Jt = (u, e) => (u < e ? `${u}-${e}` : `${e}-${u}`);
class Wr {
  constructor() {
    this.data = { keys: [] };
  }
  get(e, t) {
    const s = Jt(e, t);
    return this.data[s];
  }
  set(e, t, s) {
    const i = Jt(e, t);
    (this.get(e, t) || this.data.keys.push(i), (this.data[i] = s));
  }
  delete(e, t) {
    const s = Jt(e, t),
      i = this.data.keys.indexOf(s);
    (i !== -1 && this.data.keys.splice(i, 1), delete this.data[s]);
  }
  reset() {
    const e = this.data,
      t = e.keys;
    for (; t.length > 0; ) {
      const s = t.pop();
      delete e[s];
    }
  }
}
class Hr extends mi {
  constructor(e) {
    (e === void 0 && (e = {}),
      super(),
      (this.dt = -1),
      (this.allowSleep = !!e.allowSleep),
      (this.contacts = []),
      (this.frictionEquations = []),
      (this.quatNormalizeSkip =
        e.quatNormalizeSkip !== void 0 ? e.quatNormalizeSkip : 0),
      (this.quatNormalizeFast =
        e.quatNormalizeFast !== void 0 ? e.quatNormalizeFast : !1),
      (this.time = 0),
      (this.stepnumber = 0),
      (this.default_dt = 1 / 60),
      (this.nextId = 0),
      (this.gravity = new c()),
      e.gravity && this.gravity.copy(e.gravity),
      e.frictionGravity &&
        ((this.frictionGravity = new c()),
        this.frictionGravity.copy(e.frictionGravity)),
      (this.broadphase = e.broadphase !== void 0 ? e.broadphase : new fi()),
      (this.bodies = []),
      (this.hasActiveBodies = !1),
      (this.solver = e.solver !== void 0 ? e.solver : new Mn()),
      (this.constraints = []),
      (this.narrowphase = new Ln(this)),
      (this.collisionMatrix = new Ns()),
      (this.collisionMatrixPrevious = new Ns()),
      (this.bodyOverlapKeeper = new Zs()),
      (this.shapeOverlapKeeper = new Zs()),
      (this.contactmaterials = []),
      (this.contactMaterialTable = new Wr()),
      (this.defaultMaterial = new Wt("default")),
      (this.defaultContactMaterial = new Vt(
        this.defaultMaterial,
        this.defaultMaterial,
        { friction: 0.3, restitution: 0 },
      )),
      (this.doProfiling = !1),
      (this.profile = {
        solve: 0,
        makeContactConstraints: 0,
        broadphase: 0,
        integrate: 0,
        narrowphase: 0,
      }),
      (this.accumulator = 0),
      (this.subsystems = []),
      (this.addBodyEvent = { type: "addBody", body: null }),
      (this.removeBodyEvent = { type: "removeBody", body: null }),
      (this.idToBodyMap = {}),
      this.broadphase.setWorld(this));
  }
  getContactMaterial(e, t) {
    return this.contactMaterialTable.get(e.id, t.id);
  }
  collisionMatrixTick() {
    const e = this.collisionMatrixPrevious;
    ((this.collisionMatrixPrevious = this.collisionMatrix),
      (this.collisionMatrix = e),
      this.collisionMatrix.reset(),
      this.bodyOverlapKeeper.tick(),
      this.shapeOverlapKeeper.tick());
  }
  addConstraint(e) {
    this.constraints.push(e);
  }
  removeConstraint(e) {
    const t = this.constraints.indexOf(e);
    t !== -1 && this.constraints.splice(t, 1);
  }
  rayTest(e, t, s) {
    s instanceof Tt
      ? this.raycastClosest(e, t, { skipBackfaces: !0 }, s)
      : this.raycastAll(e, t, { skipBackfaces: !0 }, s);
  }
  raycastAll(e, t, s, i) {
    return (
      s === void 0 && (s = {}),
      (s.mode = j.ALL),
      (s.from = e),
      (s.to = t),
      (s.callback = i),
      Qt.intersectWorld(this, s)
    );
  }
  raycastAny(e, t, s, i) {
    return (
      s === void 0 && (s = {}),
      (s.mode = j.ANY),
      (s.from = e),
      (s.to = t),
      (s.result = i),
      Qt.intersectWorld(this, s)
    );
  }
  raycastClosest(e, t, s, i) {
    return (
      s === void 0 && (s = {}),
      (s.mode = j.CLOSEST),
      (s.from = e),
      (s.to = t),
      (s.result = i),
      Qt.intersectWorld(this, s)
    );
  }
  addBody(e) {
    this.bodies.includes(e) ||
      ((e.index = this.bodies.length),
      this.bodies.push(e),
      (e.world = this),
      e.initPosition.copy(e.position),
      e.initVelocity.copy(e.velocity),
      (e.timeLastSleepy = this.time),
      e instanceof R &&
        (e.initAngularVelocity.copy(e.angularVelocity),
        e.initQuaternion.copy(e.quaternion)),
      this.collisionMatrix.setNumObjects(this.bodies.length),
      (this.addBodyEvent.body = e),
      (this.idToBodyMap[e.id] = e),
      this.dispatchEvent(this.addBodyEvent));
  }
  removeBody(e) {
    e.world = null;
    const t = this.bodies.length - 1,
      s = this.bodies,
      i = s.indexOf(e);
    if (i !== -1) {
      s.splice(i, 1);
      for (let o = 0; o !== s.length; o++) s[o].index = o;
      (this.collisionMatrix.setNumObjects(t),
        (this.removeBodyEvent.body = e),
        delete this.idToBodyMap[e.id],
        this.dispatchEvent(this.removeBodyEvent));
    }
  }
  getBodyById(e) {
    return this.idToBodyMap[e];
  }
  getShapeById(e) {
    const t = this.bodies;
    for (let s = 0; s < t.length; s++) {
      const i = t[s].shapes;
      for (let o = 0; o < i.length; o++) {
        const n = i[o];
        if (n.id === e) return n;
      }
    }
    return null;
  }
  addContactMaterial(e) {
    (this.contactmaterials.push(e),
      this.contactMaterialTable.set(e.materials[0].id, e.materials[1].id, e));
  }
  removeContactMaterial(e) {
    const t = this.contactmaterials.indexOf(e);
    t !== -1 &&
      (this.contactmaterials.splice(t, 1),
      this.contactMaterialTable.delete(e.materials[0].id, e.materials[1].id));
  }
  fixedStep(e, t) {
    (e === void 0 && (e = 1 / 60), t === void 0 && (t = 10));
    const s = G.now() / 1e3;
    if (!this.lastCallTime) this.step(e, void 0, t);
    else {
      const i = s - this.lastCallTime;
      this.step(e, i, t);
    }
    this.lastCallTime = s;
  }
  step(e, t, s) {
    if ((s === void 0 && (s = 10), t === void 0))
      (this.internalStep(e), (this.time += e));
    else {
      this.accumulator += t;
      const i = G.now();
      let o = 0;
      for (
        ;
        this.accumulator >= e &&
        o < s &&
        (this.internalStep(e),
        (this.accumulator -= e),
        o++,
        !(G.now() - i > e * 1e3));
      );
      this.accumulator = this.accumulator % e;
      const n = this.accumulator / e;
      for (let r = 0; r !== this.bodies.length; r++) {
        const a = this.bodies[r];
        (a.previousPosition.lerp(a.position, n, a.interpolatedPosition),
          a.previousQuaternion.slerp(a.quaternion, n, a.interpolatedQuaternion),
          a.previousQuaternion.normalize());
      }
      this.time += t;
    }
  }
  internalStep(e) {
    this.dt = e;
    const t = this.contacts,
      s = Yr,
      i = Xr,
      o = this.bodies.length,
      n = this.bodies,
      r = this.solver,
      a = this.gravity,
      l = this.doProfiling,
      h = this.profile,
      p = R.DYNAMIC;
    let d = -1 / 0;
    const f = this.constraints,
      m = Gr;
    a.length();
    const w = a.x,
      g = a.y,
      y = a.z;
    let v = 0;
    for (l && (d = G.now()), v = 0; v !== o; v++) {
      const S = n[v];
      if (S.type === p) {
        const T = S.force,
          M = S.mass;
        ((T.x += M * w), (T.y += M * g), (T.z += M * y));
      }
    }
    for (let S = 0, T = this.subsystems.length; S !== T; S++)
      this.subsystems[S].update();
    (l && (d = G.now()),
      (s.length = 0),
      (i.length = 0),
      this.broadphase.collisionPairs(this, s, i),
      l && (h.broadphase = G.now() - d));
    let b = f.length;
    for (v = 0; v !== b; v++) {
      const S = f[v];
      if (!S.collideConnected)
        for (let T = s.length - 1; T >= 0; T -= 1)
          ((S.bodyA === s[T] && S.bodyB === i[T]) ||
            (S.bodyB === s[T] && S.bodyA === i[T])) &&
            (s.splice(T, 1), i.splice(T, 1));
    }
    (this.collisionMatrixTick(), l && (d = G.now()));
    const x = $r,
      A = t.length;
    for (v = 0; v !== A; v++) x.push(t[v]);
    t.length = 0;
    const _ = this.frictionEquations.length;
    for (v = 0; v !== _; v++) m.push(this.frictionEquations[v]);
    for (
      this.frictionEquations.length = 0,
        this.narrowphase.getContacts(
          s,
          i,
          this,
          t,
          x,
          this.frictionEquations,
          m,
        ),
        l && (h.narrowphase = G.now() - d),
        l && (d = G.now()),
        v = 0;
      v < this.frictionEquations.length;
      v++
    )
      r.addEquation(this.frictionEquations[v]);
    const P = t.length;
    for (let S = 0; S !== P; S++) {
      const T = t[S],
        M = T.bi,
        C = T.bj,
        H = T.si,
        z = T.sj;
      let k;
      if (
        (M.material && C.material
          ? (k =
              this.getContactMaterial(M.material, C.material) ||
              this.defaultContactMaterial)
          : (k = this.defaultContactMaterial),
        k.friction,
        M.material &&
          C.material &&
          (M.material.friction >= 0 &&
            C.material.friction >= 0 &&
            M.material.friction * C.material.friction,
          M.material.restitution >= 0 &&
            C.material.restitution >= 0 &&
            (T.restitution = M.material.restitution * C.material.restitution)),
        r.addEquation(T),
        M.allowSleep &&
          M.type === R.DYNAMIC &&
          M.sleepState === R.SLEEPING &&
          C.sleepState === R.AWAKE &&
          C.type !== R.STATIC)
      ) {
        const O =
            C.velocity.lengthSquared() + C.angularVelocity.lengthSquared(),
          X = C.sleepSpeedLimit ** 2;
        O >= X * 2 && (M.wakeUpAfterNarrowphase = !0);
      }
      if (
        C.allowSleep &&
        C.type === R.DYNAMIC &&
        C.sleepState === R.SLEEPING &&
        M.sleepState === R.AWAKE &&
        M.type !== R.STATIC
      ) {
        const O =
            M.velocity.lengthSquared() + M.angularVelocity.lengthSquared(),
          X = M.sleepSpeedLimit ** 2;
        O >= X * 2 && (C.wakeUpAfterNarrowphase = !0);
      }
      (this.collisionMatrix.set(M, C, !0),
        this.collisionMatrixPrevious.get(M, C) ||
          ((je.body = C),
          (je.contact = T),
          M.dispatchEvent(je),
          (je.body = M),
          C.dispatchEvent(je)),
        this.bodyOverlapKeeper.set(M.id, C.id),
        this.shapeOverlapKeeper.set(H.id, z.id));
    }
    for (
      this.emitContactEvents(),
        l && ((h.makeContactConstraints = G.now() - d), (d = G.now())),
        v = 0;
      v !== o;
      v++
    ) {
      const S = n[v];
      S.wakeUpAfterNarrowphase && (S.wakeUp(), (S.wakeUpAfterNarrowphase = !1));
    }
    for (b = f.length, v = 0; v !== b; v++) {
      const S = f[v];
      S.update();
      for (let T = 0, M = S.equations.length; T !== M; T++) {
        const C = S.equations[T];
        r.addEquation(C);
      }
    }
    (r.solve(e, this), l && (h.solve = G.now() - d), r.removeAllEquations());
    const I = Math.pow;
    for (v = 0; v !== o; v++) {
      const S = n[v];
      if (S.type & p) {
        const T = I(1 - S.linearDamping, e),
          M = S.velocity;
        M.scale(T, M);
        const C = S.angularVelocity;
        if (C) {
          const H = I(1 - S.angularDamping, e);
          C.scale(H, C);
        }
      }
    }
    (this.dispatchEvent(jr), l && (d = G.now()));
    const L = this.stepnumber % (this.quatNormalizeSkip + 1) === 0,
      N = this.quatNormalizeFast;
    for (v = 0; v !== o; v++) n[v].integrate(e, L, N);
    (this.clearForces(),
      (this.broadphase.dirty = !0),
      l && (h.integrate = G.now() - d),
      (this.stepnumber += 1),
      this.dispatchEvent(Ur));
    let D = !0;
    if (this.allowSleep)
      for (D = !1, v = 0; v !== o; v++) {
        const S = n[v];
        (S.sleepTick(this.time), S.sleepState !== R.SLEEPING && (D = !0));
      }
    this.hasActiveBodies = D;
  }
  emitContactEvents() {
    const e = this.hasAnyEventListener("beginContact"),
      t = this.hasAnyEventListener("endContact");
    if (((e || t) && this.bodyOverlapKeeper.getDiff(me, fe), e)) {
      for (let o = 0, n = me.length; o < n; o += 2)
        (($e.bodyA = this.getBodyById(me[o])),
          ($e.bodyB = this.getBodyById(me[o + 1])),
          this.dispatchEvent($e));
      $e.bodyA = $e.bodyB = null;
    }
    if (t) {
      for (let o = 0, n = fe.length; o < n; o += 2)
        ((Ge.bodyA = this.getBodyById(fe[o])),
          (Ge.bodyB = this.getBodyById(fe[o + 1])),
          this.dispatchEvent(Ge));
      Ge.bodyA = Ge.bodyB = null;
    }
    me.length = fe.length = 0;
    const s = this.hasAnyEventListener("beginShapeContact"),
      i = this.hasAnyEventListener("endShapeContact");
    if (((s || i) && this.shapeOverlapKeeper.getDiff(me, fe), s)) {
      for (let o = 0, n = me.length; o < n; o += 2) {
        const r = this.getShapeById(me[o]),
          a = this.getShapeById(me[o + 1]);
        ((ve.shapeA = r),
          (ve.shapeB = a),
          r && (ve.bodyA = r.body),
          a && (ve.bodyB = a.body),
          this.dispatchEvent(ve));
      }
      ve.bodyA = ve.bodyB = ve.shapeA = ve.shapeB = null;
    }
    if (i) {
      for (let o = 0, n = fe.length; o < n; o += 2) {
        const r = this.getShapeById(fe[o]),
          a = this.getShapeById(fe[o + 1]);
        ((we.shapeA = r),
          (we.shapeB = a),
          r && (we.bodyA = r.body),
          a && (we.bodyB = a.body),
          this.dispatchEvent(we));
      }
      we.bodyA = we.bodyB = we.shapeA = we.shapeB = null;
    }
  }
  clearForces() {
    const e = this.bodies,
      t = e.length;
    for (let s = 0; s !== t; s++) {
      const i = e[s];
      (i.force, i.torque, i.force.set(0, 0, 0), i.torque.set(0, 0, 0));
    }
  }
}
new oe();
const Qt = new j(),
  G = globalThis.performance || {};
if (!G.now) {
  let u = Date.now();
  (G.timing && G.timing.navigationStart && (u = G.timing.navigationStart),
    (G.now = () => Date.now() - u));
}
new c();
const Ur = { type: "postStep" },
  jr = { type: "preStep" },
  je = { type: R.COLLIDE_EVENT_NAME, body: null, contact: null },
  $r = [],
  Gr = [],
  Yr = [],
  Xr = [],
  me = [],
  fe = [],
  $e = { type: "beginContact", bodyA: null, bodyB: null },
  Ge = { type: "endContact", bodyA: null, bodyB: null },
  ve = {
    type: "beginShapeContact",
    bodyA: null,
    bodyB: null,
    shapeA: null,
    shapeB: null,
  },
  we = {
    type: "endShapeContact",
    bodyA: null,
    bodyB: null,
    shapeA: null,
    shapeB: null,
  },
  xe = 0.11,
  Kr = 24,
  es = 3;
let Zr = class {
    constructor(e) {
      ((this.stage = e),
        (this.clock = new oi()),
        (this.group = new ri()),
        (this.boxBodies = []),
        (this.boxMeshes = []),
        (this.boxTargets = []),
        (this.raycaster = new Wi()),
        (this.mouse = new K()),
        (this.plane = new Hi(new ge(0, 0, 1), 0)),
        (this.intersectPoint = new ge()),
        (this.prevMousePoint = new ge()),
        (this.hasPrevPoint = !1),
        (this._onMouseMove = this._onMouseMove.bind(this)));
    }
    async _init() {
      (await this.setObject(), this._setupMouse());
    }
    _setupMouse() {
      ((this._webglEl = document.querySelector("#webgl")),
        this._webglEl &&
          this._webglEl.addEventListener("mousemove", this._onMouseMove));
    }
    _getMouseNDC(e) {
      const s = this.stage.renderer.domElement.getBoundingClientRect();
      ((this.mouse.x = ((e.clientX - s.left) / s.width) * 2 - 1),
        (this.mouse.y = -((e.clientY - s.top) / s.height) * 2 + 1));
    }
    _onMouseMove(e) {
      (this._getMouseNDC(e),
        this.raycaster.setFromCamera(this.mouse, this.stage.camera));
      const t = this.raycaster.intersectObjects(this.boxMeshes);
      if (t.length === 0) {
        this.hasPrevPoint = !1;
        return;
      }
      if (
        (this.raycaster.ray.intersectPlane(this.plane, this.intersectPoint),
        this.hasPrevPoint)
      ) {
        const s = t[0].object,
          i = this.boxMeshes.indexOf(s);
        if (i !== -1) {
          const o = this.intersectPoint.x - this.prevMousePoint.x,
            n = this.intersectPoint.y - this.prevMousePoint.y,
            r = this.intersectPoint.z - this.prevMousePoint.z;
          Math.sqrt(o * o + n * n + r * r) > 1e-4 &&
            this.boxBodies[i].applyImpulse(
              new c(o * es, n * es, r * es),
              new c(0, 0, 0),
            );
        }
      }
      (this.prevMousePoint.copy(this.intersectPoint), (this.hasPrevPoint = !0));
    }
    async setObject() {
      ((this.world = new Hr()),
        this.world.gravity.set(0, 0, 0),
        (this.world.broadphase = new fi()),
        (this.world.allowSleep = !1));
      const e = xe / 2,
        t = new Ot(new c(e, e, e)),
        s = [
          new c(0, xe, 0),
          new c(0, -xe, 0),
          new c(-xe, 0, 0),
          new c(xe, 0, 0),
        ];
      this.boxTargets = s.map((n) => n.clone());
      const i = new Ui(xe, xe, xe),
        o = new ji({ color: 0, wireframe: !1 });
      for (let n = 0; n < 4; n++) {
        const r = new R({
          mass: 3,
          shape: t,
          position: s[n].clone(),
          linearDamping: 0.9,
          angularDamping: 0.96,
        });
        (r.angularVelocity.set(0.1, 0.11, 0.91),
          this.world.addBody(r),
          this.boxBodies.push(r));
        const a = new Dt(i.clone(), o.clone());
        (a.position.copy(r.position),
          a.quaternion.copy(r.quaternion),
          this.boxMeshes.push(a),
          this.group.add(a));
      }
      (this.stage.scene.add(this.group),
        Y.w > ne &&
          setTimeout(() => {
            E.to(this.group.rotation, {
              x: 0.35,
              z: 0.2,
              ease: "none",
              scrollTrigger: {
                trigger: ".about-axes",
                scroller: ".container",
                start: "top center",
                end: "bottom bottom-=60%",
                scrub: !0,
              },
            });
          }, 500));
    }
    onUpdate() {
      const e = Math.min(this.clock.getDelta(), 0.03333333333333333);
      if (this.world) {
        for (let t = 0; t < this.boxBodies.length; t++) {
          const s = this.boxBodies[t],
            i = this.boxTargets[t],
            o = new c();
          (i.vsub(s.position, o),
            o.normalize(),
            o.scale(Kr * e, o),
            s.applyForce(o, s.position));
        }
        this.world.step(e);
        for (let t = 0; t < this.boxBodies.length; t++)
          (this.boxMeshes[t].position.copy(this.boxBodies[t].position),
            this.boxMeshes[t].quaternion.copy(this.boxBodies[t].quaternion));
      }
      this.stage.renderer.render(this.stage.scene, this.stage.camera);
    }
    onResize() {}
    dispose() {
      (this._webglEl &&
        (this._webglEl.removeEventListener("mousemove", this._onMouseMove),
        (this._webglEl = null)),
        this.world &&
          (this.boxBodies.forEach((e) => this.world.removeBody(e)),
          (this.boxBodies = []),
          (this.boxMeshes = []),
          (this.boxTargets = [])),
        this.composer &&
          (this.composer.renderTarget1 && this.composer.renderTarget1.dispose(),
          this.composer.renderTarget2 && this.composer.renderTarget2.dispose(),
          this.composer.dispose()),
        this.stage.scene.traverse((e) => {
          e.isMesh &&
            (e.geometry && e.geometry.dispose(),
            e.material &&
              (Array.isArray(e.material)
                ? e.material.forEach((t) => {
                    (t.map && t.map.dispose(), t.dispose());
                  })
                : (e.material.map && e.material.map.dispose(),
                  e.material.dispose())));
        }),
        this.stage.renderer.dispose(),
        (this.stage.scene = null),
        (this.stage.camera = null),
        (this.loader = null),
        (this.gltfLoader = null),
        (this.group = null));
    }
  },
  Jr = class {
    constructor(e) {
      this.stage = e;
    }
    async _init() {
      await this.Light01();
    }
    async Light01() {
      const e = new $i(16777215, 0.8),
        t = new Gi(16777215, 6);
      (t.position.set(1, 0, 1),
        this.stage.scene.add(e),
        this.stage.scene.add(t));
    }
  },
  Pe,
  tt = null,
  st = null,
  it = null;
function Ai() {
  tt !== null && (cancelAnimationFrame(tt), (tt = null));
}
const Qr = async () => {
    let u = new Ao(),
      e = new Jr(u);
    ((Pe = new Zr(u)),
      await u._init(),
      await e._init(),
      await Pe._init(),
      (st = () => {
        (u.onResize(), Pe.onResize());
      }));
    const t = document.querySelector("#webgl"),
      s = () => {
        ((tt = requestAnimationFrame(s)), u.onLoop(), Pe.onUpdate());
      },
      i = () => {
        tt === null && s();
      };
    (t
      ? ((it = new IntersectionObserver(
          (o) => {
            o[0].isIntersecting ? i() : Ai();
          },
          { root: null, rootMargin: "20%", threshold: 0 },
        )),
        it.observe(t),
        t.getBoundingClientRect().top < window.innerHeight && i())
      : s(),
      window.addEventListener("resize", st));
  },
  ea = () => {
    if ((Ai(), it !== null)) {
      const u = document.querySelector("#webgl");
      (u && it.unobserve(u), (it = null));
    }
    (st !== null && (window.removeEventListener("resize", st), (st = null)),
      Pe && (Pe.dispose(), (Pe = null)));
  },
  ta = async () => {
    await Qr();
  },
  Me = {
    w: window.innerWidth,
    h: window.innerHeight,
    isMobile: "ontouchstart" in document.documentElement,
  },
  Qs = () => {
    ((Me.w = window.innerWidth), (Me.h = window.innerHeight));
  };
let sa = class te {
    static get CAMERA_PARAM() {
      return {
        fov: 60,
        fovy: 60,
        aspect: window.innerWidth / window.innerHeight,
        near: 0.1,
        far: 1e4,
        x: 0,
        y: 0,
        z: 0.2,
        lookAt: new ge(0, 0, 0),
      };
    }
    constructor() {
      (this.render,
        this.canvas,
        this.controls,
        this.gridHelper,
        (this.render = this.render.bind(this)),
        (this.Dev = !0),
        (this.loader = new Ie()));
    }
    async _setRender() {
      const e = Me.isMobile,
        t = e ? Math.min(window.devicePixelRatio, 2) : 1;
      ((this.renderer = new kt({
        antialias: !e,
        alpha: !0,
        powerPreference: e ? "low-power" : "default",
      })),
        this.renderer.setClearColor(14934496, 0),
        this.renderer.setSize(Me.w, Me.h),
        this.renderer.setPixelRatio(t),
        (this.renderer.toneMapping = ni),
        (this.canvas = document.querySelector("#about-mv-webgl")),
        this.canvas.appendChild(this.renderer.domElement));
    }
    async _setScene() {
      this.scene = new Bt();
    }
    async _setCamera() {
      ((this.camera = new _t(
        te.CAMERA_PARAM.fovy,
        te.CAMERA_PARAM.aspect,
        te.CAMERA_PARAM.near,
        te.CAMERA_PARAM.far,
      )),
        this.camera.position.set(
          te.CAMERA_PARAM.x,
          te.CAMERA_PARAM.y,
          te.CAMERA_PARAM.z,
        ),
        this.camera.lookAt(te.CAMERA_PARAM.lookAt),
        this.camera.updateProjectionMatrix());
    }
    async _init() {
      (await this._setRender(),
        await this._setScene(),
        await this._setCamera());
    }
    render() {}
    onLoop() {
      this.render();
    }
    onResize() {
      (this.renderer.setSize(Me.w, Me.h),
        this.camera.position.set(
          te.CAMERA_PARAM.x,
          te.CAMERA_PARAM.y,
          te.CAMERA_PARAM.z,
        ),
        this.camera.lookAt(te.CAMERA_PARAM.lookAt),
        this.camera.updateProjectionMatrix());
    }
  },
  ia = class {
    constructor(e) {
      ((this.stage = e), (this.loader = new Ie()));
    }
    async _init() {
      (await this.setObject(),
        this.setComposer(),
        this.composer.render(),
        this.animation());
    }
    async setObject() {
      const e = await new Promise((o, n) => {
        this.loader.load(
          W ? "/images/about/mv-image-sp.webp" : "/images/about/mv-image.webp",
          o,
          void 0,
          n,
        );
      });
      this.cardTexture = e;
      const t = W ? 8 : 16,
        s = new fs(W ? 0.16 : 0.28, W ? 0.23 : 0.39, t, t),
        i = new Ft({
          uniforms: {
            u_offset: { value: new K(0, 0) },
            u_opacity: { value: 0 },
            u_texture: { value: e },
          },
          vertexShader: `
        varying vec2 vUv;
        varying vec2 v_offset;
        uniform vec2 u_offset;

        float PI = 3.1415926535897932384626433832795;


        vec3 curve(vec3 position, vec2 uv, vec2 offset) {
          vec2 center = vec2(0.5, 0.5);
          float dist = distance(uv, center);        
          float w = smoothstep(0.0, 0.9, dist);     

          
          float strength = -0.06;                     
          position.z += w * w * strength;

          return position;
        }

        void main() {
          vUv = uv;
          v_offset = u_offset;
          vec3 newPos = curve(position, uv, vec2(0, 0) * 4.5);
          gl_Position = projectionMatrix * modelViewMatrix * vec4(newPos, 1.0);
        }
      `,
          fragmentShader: `
        varying vec2 vUv;
        varying vec2 v_offset;
        uniform float u_opacity;
        uniform sampler2D u_texture;

        void main() {
          vec4 tex = texture2D(u_texture, vUv);
          gl_FragColor = vec4(tex.rgb, tex.a);
        }
      `,
          transparent: !0,
          depthWrite: !1,
          side: ai,
        });
      ((this.mesh = new Dt(s, i)), this.stage.scene.add(this.mesh));
    }
    animation() {
      const e = document.querySelector(".container");
      (E.fromTo(
        this.stage.camera.rotation,
        { x: 1 },
        {
          x: 0,
          duration: 1.7,
          delay: window.loading ? 0.1 : 1.5,
          ease: "power4.out",
        },
      ),
        E.fromTo(
          this.mesh.position,
          { y: W ? -0.17 : -0.24 },
          {
            y: 0.35,
            scrollTrigger: {
              trigger: ".about-sticky ",
              scroller: e,
              start: "5px top",
              end: "bottom center",
              scrub: !0,
            },
          },
        ));
    }
    setComposer() {
      const e = this.stage.renderer.getSize(new K()),
        t = this.stage.renderer.getPixelRatio(),
        s = new li(e.width * t, e.height * t, {
          minFilter: We,
          magFilter: We,
          format: ms,
          type: W ? ci : hi,
          stencilBuffer: !1,
          depthBuffer: !0,
        });
      this.composer = new ws(this.stage.renderer, s);
      const i = new vs(this.stage.scene, this.stage.camera);
      this.composer.addPass(i);
      const o = {
        uniforms: {
          tDiffuse: { value: null },
          u_strength: { value: W ? 0.16 : 0.2 },
          u_aspect: { value: window.innerWidth / window.innerHeight },
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
        varying vec2 vUv;

        void main() {
          
          vec2 uv = vUv * 2.0 - 1.0;
          uv.x *= u_aspect;

          float r = length(uv);

          
          float distortion = 1.0 + u_strength * r * r;
          vec2 distortedUv = uv / distortion;

          
          distortedUv.x /= u_aspect;
          distortedUv = distortedUv * 0.5 + 0.5;

          
          float t = clamp(r / 1.2, 0.0, 1.0);
          float t2 = t * t;

          
          vec2 radialDir = r > 0.001 ? normalize(uv) : vec2(0.0);
          vec2 radialDirNorm = vec2(radialDir.x / u_aspect, radialDir.y);

          ${
            W
              ? `// モバイル：ブラーなし、単一サンプル
          gl_FragColor = texture2D(tDiffuse, distortedUv);`
              : `// クロマチックアベレーション量（周辺ほど強く）
          float caAmount = 0.0 * t2;

          // 放射状ブラーのステップ（周辺ほど広く）
          vec2 blurStep = radialDirNorm * 0.005 * t2;

          // R: 外側にシフト、B: 内側にシフト、ブラーはサンプル平均
          float rSum = 0.0, gSum = 0.0, bSum = 0.0, aSum = 0.0;
          for (int i = -2; i <= 2; i++) {
            float fi = float(i) / 2.0;
            vec2 offset = blurStep * fi;
            rSum += texture2D(tDiffuse, distortedUv + radialDirNorm * caAmount + offset).r;
            gSum += texture2D(tDiffuse, distortedUv + offset).g;
            bSum += texture2D(tDiffuse, distortedUv - radialDirNorm * caAmount + offset).b;
            aSum += texture2D(tDiffuse, distortedUv + offset).a;
          }

          gl_FragColor = vec4(rSum / 5.0, gSum / 5.0, bSum / 5.0, aSum / 5.0);`
          }
        }
      `,
      };
      ((this.fisheyePass = new Nt(o)), this.composer.addPass(this.fisheyePass));
    }
    onUpdate() {
      this.composer.render();
    }
    onResize() {
      this.composer &&
        ((this.width = window.innerWidth),
        (this.height = window.innerHeight),
        (this.stage.camera.aspect = window.innerWidth / window.innerHeight),
        this.stage.camera.updateProjectionMatrix(),
        this.composer.setSize(this.width, this.height),
        this.composer.setPixelRatio(this.stage.renderer.getPixelRatio()),
        this.fisheyePass &&
          (this.fisheyePass.uniforms.u_aspect.value =
            this.width / this.height));
    }
    dispose() {
      (this.composer && this.composer.dispose(),
        this.stage.scene.traverse((e) => {
          e.isMesh &&
            (e.geometry && e.geometry.dispose(),
            e.material &&
              (Array.isArray(e.material)
                ? e.material.forEach((t) => {
                    (t.map && t.map.dispose(), t.dispose());
                  })
                : (e.material.map && e.material.map.dispose(),
                  e.material.dispose())));
        }),
        this.stage.renderer.dispose(),
        (this.stage.scene = null),
        (this.stage.camera = null),
        this.cardTexture &&
          (this.cardTexture.dispose(), (this.cardTexture = null)),
        (this.loader = null));
    }
  };
class oa {
  constructor(e) {
    this.stage = e;
  }
  async _init() {
    await this.Light01();
  }
  async Light01() {}
}
let Te,
  ot = null,
  nt = null,
  rt = null,
  ei = 0;
const na = 1;
function Si() {
  ot !== null && (cancelAnimationFrame(ot), (ot = null));
}
const ra = async () => {
    let u = new sa(),
      e = new oa(u);
    ((Te = new ia(u)),
      Qs(),
      await u._init(),
      await e._init(),
      await Te._init(),
      (nt = () => {
        (Qs(), u.onResize(), Te.onResize());
      }));
    const t = document.querySelector("#about-mv-webgl"),
      s = () => {
        ((ot = requestAnimationFrame(s)),
          ei++,
          !(W && ei % na !== 0) && (u.onLoop(), Te.onUpdate()));
      },
      i = () => {
        ot === null && s();
      };
    (t
      ? ((rt = new IntersectionObserver(
          (o) => {
            o[0].isIntersecting ? i() : Si();
          },
          { root: null, rootMargin: "20%", threshold: 0 },
        )),
        rt.observe(t),
        t.getBoundingClientRect().top < window.innerHeight && i())
      : s(),
      window.addEventListener("resize", nt));
  },
  aa = () => {
    if ((Si(), rt !== null)) {
      const u = document.querySelector("#about-mv-webgl");
      (u && rt.unobserve(u), (rt = null));
    }
    (nt !== null && (window.removeEventListener("resize", nt), (nt = null)),
      Te && (Te.dispose(), (Te = null)));
  },
  la = async () => {
    await ra();
  },
  ca = (u) => {
    const e = document.querySelector(".about-origin");
    co(e, u, { enter: !0, enterBack: !1, leave: !1, leaveBack: !0 });
  },
  ha = () => {
    const u = document.querySelector('[data-current="type"]'),
      e = document.querySelector('[data-current="time"]');
    if (!e) return;
    const s = new Date().toLocaleTimeString("en-GB", {
      timeZone: "Asia/Tokyo",
      hour: "2-digit",
      minute: "2-digit",
      hour12: !1,
    });
    e.textContent = `${s} JST`;
    const i = {
        morning: "☀️ Good Morning",
        afternoon: "👋 Hello",
        evening: "🌙 Good evening",
      },
      o = parseInt(s.split(":")[0], 10);
    let n;
    (o >= 5 && o < 12
      ? (n = "morning")
      : o >= 12 && o < 18
        ? (n = "afternoon")
        : (n = "evening"),
      u && (u.textContent = i[n]));
  },
  ua = (u) => {
    const e = gs();
    (E.fromTo(
      ".about-message__text-main span",
      { y: "100%" },
      {
        y: "0%",
        scrollTrigger: {
          trigger: ".about-sticky__block",
          scroller: u,
          start: e ? "40% bottom" : "50% bottom",
          end: "90% bottom",
          scrub: !0,
        },
      },
    ),
      E.fromTo(
        ".about-message__text-sub span",
        { y: "100%" },
        {
          y: "0%",
          scrollTrigger: {
            trigger: ".about-sticky__block",
            scroller: u,
            start: e ? "40% bottom" : "50% bottom",
            end: "90% bottom",
            scrub: !0,
          },
        },
      ),
      E.fromTo(
        ".about-what-do",
        { y: "0%", opacity: 1 },
        {
          opacity: 0.1,
          y: "300rem",
          ease: "none",
          scrollTrigger: {
            trigger: ".about-background",
            scroller: u,
            start: "top bottom",
            end: "top 10%",
            scrub: !0,
          },
        },
      ));
  },
  da = (u) => {
    const e = document.querySelector(".about-photo__main-image .inner");
    (E.to(".about-thought__image-inner", {
      y: "30%",
      ease: "none",
      scrollTrigger: {
        trigger: ".about-thought__image",
        scroller: u,
        start: "top bottom",
        end: "bottom top-=50%",
        scrub: !0,
      },
    }),
      Y.w > 767 &&
        E.fromTo(
          ".about-thought__image",
          { clipPath: "inset(0% 10% 0% 10%)" },
          {
            clipPath: "inset(0% 0% 0% 0%)",
            scrollTrigger: {
              trigger: ".about-thought__image",
              scroller: u,
              start: "top bottom",
              end: "70% center",
              scrub: !0,
            },
          },
        ),
      E.to(e, {
        y: "400rem",
        ease: "none",
        scrollTrigger: {
          trigger: ".about-photo",
          scroller: u,
          start: "top bottom",
          end: "bottom top-=50%",
          scrub: !0,
        },
      }));
  },
  pa = (u) => {
    const e = document.querySelectorAll('[data-target="split"]');
    document.fonts.ready.then(() => {
      let t = He.create(e, {
        type: "words,chars",
        wordsClass: "words",
        charsClass: "chars",
        tag: "span",
      });
      E.to(t.chars, {
        y: "0%",
        delay: window.loading ? 0.8 : 4.4,
        duration: 1.4,
        ease: "power4.out",
        stagger: { from: "start", each: 0.006 },
      });
    });
  },
  ma = (u) => {
    const e = document.querySelector(".about-what-do__title");
    document.fonts.ready.then(() => {
      let t = He.create(e, {
        type: "lines,words,chars",
        linesClass: "words-line",
        wordsClass: "words",
        charsClass: "chars",
        tag: "span",
      });
      (t.lines.forEach((s) => {
        const i = document.createElement("span");
        (i.classList.add("words-line-parent"),
          s.parentNode.insertBefore(i, s),
          i.appendChild(s));
      }),
        t.words.forEach((s) => {
          E.set(s, { willChange: "transform" });
        }),
        E.to(t.words, {
          y: "0%",
          duration: 1.6,
          ease: "power4.out",
          scrollTrigger: {
            trigger: ".about-what-do",
            scroller: u,
            start: "top 80%",
          },
        }));
    });
  },
  fa = (u) => {
    document.fonts.ready.then(() => {
      let e = He.create(".about-origin__title", {
        type: "lines,words,chars",
        linesClass: "words-line",
        wordsClass: "words",
        charsClass: "chars",
        tag: "span",
      });
      (e.lines.forEach((t) => {
        const s = document.createElement("span");
        (s.classList.add("words-line-parent"),
          t.parentNode.insertBefore(s, t),
          s.appendChild(t));
      }),
        E.to(e.words, {
          y: "0%",
          duration: 1.6,
          ease: "power4.out",
          scrollTrigger: {
            trigger: ".about-origin__title",
            scroller: u,
            start: "top 80%",
          },
        }));
    });
  };
let rs = null;
const va = async () => {
    const u = gs();
    let e = document.querySelector(".container");
    (E.set(".about", { opacity: 0 }), E.set("#about-mv-webgl", { opacity: 0 }));
    const t = la();
    (ha(),
      pa(),
      Le(".about"),
      ye(),
      (rs = E.context(() => {
        (ua(e), ma(e), da(e), fa(e));
      })),
      ca(e),
      t.then(() => {
        E.to("#about-mv-webgl", {
          opacity: 1,
          duration: 0.6,
          ease: "power2.out",
        });
      }),
      !u &&
        !W &&
        setTimeout(() => {
          ta();
        }, 1e3));
  },
  wa = () => {
    pi();
  },
  ga = () => {
    (rs?.revert(), (rs = null), aa(), !gs() && !W && ea());
  };
let as,
  ze,
  pe,
  zt,
  se,
  Rt = null,
  ls = () => {},
  cs = () => {};
const ya = () => {
    (as.forEach((u) => {
      (u.pause(),
        u.removeAttribute("src"),
        u.removeAttribute("data-video-loaded"),
        u.querySelectorAll("source").forEach((e) => {
          e.removeAttribute("src");
        }),
        u.load(),
        u.remove());
    }),
      ze && (ze.disconnect(), (ze = null)));
  },
  ba = () => {
    const u = document.querySelectorAll("video");
    if (!u.length) return;
    ze && ze.disconnect();
    const e = (s) => {
        if (!s || s.dataset.videoLoaded) return;
        (s.querySelectorAll("source").forEach((n) => {
          !n.src && n.dataset.src && (n.src = n.dataset.src);
        }),
          (s.dataset.videoLoaded = "true"));
        const o = () => {
          if (s.dataset.shouldPlay === "true") {
            const n = s.play();
            n && typeof n.catch == "function" && n.catch(() => {});
          }
        };
        (s.addEventListener("loadeddata", o, { once: !0 }), s.load());
      },
      t = (s) => {
        s.forEach((i) => {
          const o = i.target;
          if (i.isIntersecting) {
            if (((o.dataset.shouldPlay = "true"), e(o), o.readyState >= 2)) {
              const n = o.play();
              n && typeof n.catch == "function" && n.catch(() => {});
            }
          } else ((o.dataset.shouldPlay = "false"), o.paused || o.pause());
        });
      };
    ((ze = new IntersectionObserver(t, {
      root: null,
      rootMargin: "200px",
      threshold: 0,
    })),
      u.forEach((s) => {
        ze.observe(s);
      }));
  },
  at = () => {
    if (!pe || !zt) return 0;
    const u = pe.scrollWidth - zt.clientWidth + window.innerWidth * 0.5;
    return u > 0 ? u : 0;
  },
  xa = () => {
    let t = 1,
      i = Y.w < ne ? "sp" : "pc",
      o = { duration: 0.6, ease: "power4.out" };
    const n = document.querySelectorAll('[data-lab="item"]'),
      r = document.querySelector('[data-scale="current"]'),
      a = document.querySelector('[data-scale="up"]'),
      l = document.querySelector('[data-scale="down"]'),
      h = (d = void 0, f = void 0) => {
        if (!se || !pe) return;
        const m = at();
        if (!m) return;
        const w =
          d !== void 0
            ? Math.max(0, Math.min(1, d))
            : (Math.abs(E.getProperty(pe, "x")) || 0) / m;
        if (f) {
          const v = f.start + (f.end - f.start) * w;
          se.scroll(v);
          const b = se.scroller ?? document.body;
          typeof b.scrollTop < "u" && (b.scrollTop = v);
        }
        ct.refresh();
        const g = se.start + (se.end - se.start) * w;
        se.scroll(g);
        const y = se.scroller ?? document.body;
        (typeof y.scrollTop < "u" && (y.scrollTop = g),
          se.update(),
          E.set(pe, { x: -w * m }),
          Rt && Rt.progress(w),
          cs());
      },
      p = (d) => {
        const f = at(),
          m =
            f > 0
              ? Math.max(
                  0,
                  Math.min(1, (Math.abs(E.getProperty(pe, "x")) || 0) / f),
                )
              : 0,
          w = se ? { start: se.start, end: se.end } : void 0,
          g = (y) => {
            E.to(n, {
              width: y,
              duration: o.duration,
              ease: o.ease,
              overwrite: "auto",
              onComplete: () => {
                requestAnimationFrame(() => {
                  requestAnimationFrame(() => {
                    setTimeout(() => h(m, w), 10);
                  });
                });
              },
            });
          };
        switch (d) {
          case 0:
            (g("50rem"), (r.textContent = "×0.5"));
            break;
          case 1:
            (g("100rem"), (r.textContent = "×1.0"));
            break;
          case 2:
            (g("150rem"), (r.textContent = "×1.5"));
            break;
          case 3:
            (g("200rem"), (r.textContent = "×2.0"));
            break;
        }
      };
    (a.addEventListener("click", () => {
      t != 3 && (t++, i == "pc" && p(t));
    }),
      l.addEventListener("click", () => {
        t != 0 && (t--, i == "pc" && p(t));
      }));
  },
  Ea = (u) => {
    if (Y.w < ne) return;
    ((pe = document.querySelector(".lab-main__ul")),
      (zt = document.querySelector(".lab-main__inner")));
    const t = document.querySelector(".lab-main"),
      s = document.querySelectorAll(".lab video"),
      i = document.querySelectorAll(".lab img");
    if (!pe || !zt) return;
    const o = (z, k, O) => z + (k - z) * O,
      n = 0.1,
      r = 0.92,
      a = 0.05;
    let l = 0,
      h = 0,
      p = 0,
      d = !1,
      f = 0,
      m = 0,
      w = 0,
      g = 0,
      y = 0,
      v = null,
      b = 0,
      x = 0;
    const A = 0.3,
      _ = () => {
        const k = getComputedStyle(pe).transform.match(/matrix\((.+)\)/);
        if (!k) return 0;
        const O = k[1].split(", ");
        return O.length >= 5 ? parseFloat(O[4]) : 0;
      },
      P = () => ({ min: -at(), max: 0 }),
      I = () => {
        if (!v) return;
        const z = at(),
          k = z > 0 ? Math.max(0, Math.min(1, -p / z)) : 0;
        v.progress(k);
      },
      F = () => {
        y++;
        const z = y,
          k = () => {
            if (z !== y) return;
            const O = P();
            ((p += m * 16),
              (p = Math.max(O.min, Math.min(O.max, p))),
              (m *= r),
              I(),
              Math.abs(m) > a && requestAnimationFrame(k));
          };
        requestAnimationFrame(k);
      },
      L = (z) => {
        ((l = z.clientX),
          (h = _()),
          (p = h),
          (b = h),
          (w = z.clientX),
          (g = performance.now()),
          (m = 0),
          (d = !0),
          E.to('[data-lab="item"]', {
            clipPath: "inset(25%)",
            duration: 0.4,
            overwrite: "auto",
          }));
      },
      N = (z) => {
        if (!d) return;
        t.style.cursor = "grabbing";
        const k = performance.now(),
          O = k - g;
        (O > 0 && (m = (z.clientX - w) / O), (w = z.clientX), (g = k));
        const X = h + (z.clientX - l);
        ((p = o(p, X, n)), !(f < p) && I());
      },
      D = () => {
        ((t.style.cursor = "grab"),
          (d = !1),
          Math.abs(m) > a && F(),
          E.to('[data-lab="item"]', {
            clipPath: "inset(0%)",
            duration: 0.4,
            overwrite: "auto",
          }));
      },
      S = () => {
        ((t.style.cursor = "grab"), (d = !1));
      },
      T = 1.2,
      M = () => {
        x++;
        const z = x,
          k = () => {
            if (z !== x || d) return;
            p = o(p, b, n);
            const O = P();
            ((p = Math.max(O.min, Math.min(O.max, p))),
              I(),
              Math.abs(p - b) > A && requestAnimationFrame(k));
          };
        requestAnimationFrame(k);
      },
      C = (z) => {
        if (d) return;
        Math.abs(p - b) <= A && ((b = _()), (p = b));
        const k = z.deltaX !== 0 ? z.deltaX : z.deltaY;
        b -= k * T;
        const O = P();
        ((b = Math.max(O.min, Math.min(O.max, b))), M(), z.preventDefault());
      };
    (t.addEventListener("pointerdown", L),
      t.addEventListener("pointermove", N),
      t.addEventListener("pointerup", D),
      t.addEventListener("pointerleave", S),
      t.addEventListener("pointercancel", S),
      t.addEventListener("wheel", C, { passive: !1 }));
    const H = E.to(pe, {
      x: () => -at(),
      ease: "none",
      scrollTrigger: {
        trigger: ".lab",
        scroller: u,
        start: "5px top",
        end: "bottom bottom",
        scrub: !0,
        invalidateOnRefresh: !0,
      },
    });
    ((v = H),
      (Rt = H),
      (se = H.scrollTrigger),
      (cs = () => {
        ((p = _()), (b = p));
      }),
      s.forEach((z) => {
        E.to(z, {
          xPercent: 50,
          ease: "none",
          scrollTrigger: {
            trigger: z,
            containerAnimation: H,
            start: "left right",
            end: "right left",
            scrub: !0,
            invalidateOnRefresh: !0,
          },
        });
      }),
      i.forEach((z) => {
        E.to(z, {
          xPercent: 50,
          ease: "none",
          scrollTrigger: {
            trigger: z,
            containerAnimation: H,
            start: "left right",
            end: "right left",
            scrub: !0,
            invalidateOnRefresh: !0,
          },
        });
      }),
      (ls = () => {
        (t.removeEventListener("pointerdown", L),
          t.removeEventListener("pointermove", N),
          t.removeEventListener("pointerup", D),
          t.removeEventListener("pointerleave", S),
          t.removeEventListener("pointercancel", S),
          t.removeEventListener("wheel", C),
          (Rt = null),
          (cs = () => {}),
          (ls = () => {}));
      }));
  },
  Aa = () => {
    const u = document.querySelectorAll('[data-lab="item"]');
    E.fromTo(
      u,
      { clipPath: "inset(60%)" },
      {
        clipPath: "inset(0%)",
        delay: window.loading ? 0.7 : 2.5,
        duration: 1.3,
        ease: "power4.out",
        stagger: { from: "start", each: 0.045 },
      },
    );
  },
  Sa = () => {
    const u = Y.w < ne,
      e = document.querySelectorAll(".lab-main__details-item"),
      t = document.querySelectorAll(".lab-main__li");
    u
      ? t.forEach((s, i) => {
          s.addEventListener("click", () => {
            (E.to(e[i], { opacity: 1, duration: 0.4, overwrite: "auto" }),
              t.forEach((o, n) => {
                E.to(o, {
                  opacity: n === i ? 1 : 0.24,
                  duration: 0.4,
                  overwrite: "auto",
                });
              }),
              e.forEach((o, n) => {
                E.to(o, {
                  opacity: n === i ? 1 : 0,
                  duration: 0.4,
                  overwrite: "auto",
                });
              }));
          });
        })
      : t.forEach((s, i) => {
          (s.addEventListener("mouseenter", () => {
            (E.to(e[i], { opacity: 1, duration: 0.4, overwrite: "auto" }),
              t.forEach((o, n) => {
                E.to(o, {
                  opacity: n === i ? 1 : 0.24,
                  duration: 0.4,
                  overwrite: "auto",
                });
              }));
          }),
            s.addEventListener("mouseleave", () => {
              (E.to(e[i], { opacity: 0, duration: 0.4, overwrite: "auto" }),
                t.forEach((o) => {
                  E.to(o, { opacity: 1, duration: 0.4, overwrite: "auto" });
                }));
            }));
        });
  },
  _a = () => {
    let u = document.querySelector(".container");
    (Le(".lab-main"),
      Le(".lab-scale-ui__items"),
      Ea(u),
      Aa(),
      ht(),
      setTimeout(() => {
        (ba(), xa(), Sa());
      }, 300));
  },
  Ca = () => {
    ((as = []), (as = document.querySelectorAll(".lab video")));
  },
  Ma = () => {
    (ls(), ya());
  },
  Pa =
    '[name="type"], [name="company"], [name="name"], [name="email"], [name="detail"]',
  Ta = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
let _i = 0;
function za(u) {
  const e = u.querySelector('[name="type"]')?.value?.trim() ?? "",
    t = u.querySelector('[name="company"]')?.value?.trim() ?? "",
    s = u.querySelector('[name="name"]')?.value?.trim() ?? "",
    i = u.querySelector('[name="email"]')?.value?.trim() ?? "",
    o = u.querySelector('[name="detail"]')?.value?.trim() ?? "";
  return (
    e.length > 0 &&
    t.length > 0 &&
    s.length >= 1 &&
    i.length > 0 &&
    Ta.test(i) &&
    o.length > 0
  );
}
function ti(u, e) {
  !u || !e || (e.disabled = !za(u));
}
function si(u) {
  if (!u) return;
  const e = parseInt(getComputedStyle(u).minHeight, 10) || 0;
  ((u.style.height = "auto"),
    (u.style.height = `${Math.max(e, u.scrollHeight)}rem`));
}
const Ra = () => {
    const u = document.getElementById("contact-form"),
      e = u?.querySelector("#submit-button"),
      t = u?.querySelector("#submit-button span"),
      s = document.getElementById("form-errors"),
      i = document.getElementById("form-success");
    (u &&
      e &&
      ((e.disabled = !0),
      u.querySelectorAll(Pa).forEach((n) => {
        (n.addEventListener("input", () => ti(u, e)),
          n.addEventListener("change", () => ti(u, e)));
      })),
      u?.querySelectorAll("input, textarea, select").forEach((n) => {
        (n.addEventListener("focus", () => {
          window.scrollTo(0, 0);
        }),
          n.addEventListener("blur", () => {
            setTimeout(() => {
              (window.lenis.resize(), window.lenis.start());
            }, 200);
          }));
      }));
    const o = u?.querySelector('[name="detail"]');
    (o && (o.addEventListener("input", () => si(o)), si(o)),
      u?.addEventListener("submit", async (n) => {
        if ((n.preventDefault(), !e || !s || !i)) return;
        ((s.hidden = !0),
          (i.hidden = !0),
          (s.textContent = ""),
          (i.textContent = ""));
        const r = {
          type: u.querySelector('[name="type"]')?.value?.trim() ?? "",
          company: u.querySelector('[name="company"]')?.value?.trim() ?? "",
          name: u.querySelector('[name="name"]')?.value?.trim() ?? "",
          email: u.querySelector('[name="email"]')?.value?.trim() ?? "",
          site: u.querySelector('[name="site"]')?.value?.trim() ?? "",
          budget: u.querySelector('[name="budget"]')?.value?.trim() ?? "",
          deadline: u.querySelector('[name="deadline"]')?.value?.trim() ?? "",
          detail: u.querySelector('[name="detail"]')?.value?.trim() ?? "",
          website_confirm:
            u.querySelector('[name="website_confirm"]')?.value?.trim() ?? "",
          _t: _i || Date.now(),
        };
        ((e.disabled = !0), (t.textContent = "送信中..."));
        let a = !1;
        try {
          const l = await fetch("/api/contact", {
              method: "POST",
              headers: { "Content-Type": "application/json" },
              body: JSON.stringify(r),
            }),
            h = await l.json();
          if (l.ok && h.success) {
            ((a = !0), (window.location.href = "/contact/thanks/"));
            return;
          } else {
            const p = Array.isArray(h.errors)
              ? h.errors.join(" ")
              : "送信に失敗しました";
            ((s.textContent = p), (s.hidden = !1));
          }
        } catch {
          ((s.textContent =
            "送信に失敗しました。しばらく経ってから再度お試しください。"),
            (s.hidden = !1));
        } finally {
          ((t.textContent = "内容を送信"), a || (e.disabled = !1));
        }
      }));
  },
  qa = () => {
    ((_i = Date.now()),
      Le(".contact"),
      ut('.contact-main__contents-main-title [data-split="title"]', 0.8),
      ye(),
      Ra());
  };
let hs;
const La = () => {
    hs.forEach((u) => {
      (u.pause(),
        u.removeAttribute("src"),
        u.querySelectorAll("source").forEach((e) => {
          e.removeAttribute("src");
        }),
        u.load(),
        u.remove());
    });
  },
  Ia = () => {
    document.querySelectorAll("video").forEach((e) => {
      e.play();
    });
  },
  ka = () => {
    const u = document.querySelector(".single-more__other-button"),
      e = document.querySelector(".single-more__items"),
      t = document.querySelector(".single-more__flex");
    let s = !1,
      i = !1;
    const o = E.timeline({
        paused: !0,
        onComplete: () => {
          i = !1;
        },
      }),
      n = E.timeline({
        paused: !0,
        onComplete: () => {
          i = !1;
        },
      });
    (o
      .to(t, { width: "320px", duration: 0.6, ease: "power4.out" })
      .to(
        e,
        { clipPath: "inset(0% 0% 0% 0%)", duration: 1.2, ease: "power4.out" },
        "<0.4",
      ),
      n
        .to(e, {
          clipPath: "inset(100% 0% 0% 0%)",
          duration: 0.6,
          ease: "power4.out",
        })
        .to(t, { width: "120px", duration: 0.6, ease: "power4.out" }, "<0.47"),
      u.addEventListener("click", () => {
        i ||
          ((s = !s),
          (i = !0),
          s
            ? (o.play(0), u.classList.add("is-open"))
            : (n.play(0), u.classList.remove("is-open")));
      }));
  },
  Ba = (u = null) => {
    const t = (u ?? document).querySelector(".case-single");
    (t &&
      E.to(t, { opacity: 1, delay: 0.9, duration: 1.4, ease: "power4.out" }),
      ut('.case-single-head__title-cover [data-split="title"]', 0.8, u),
      Ia(),
      ka(),
      ye());
  },
  Na = () => {
    ((hs = []),
      (hs = document.querySelectorAll(
        '[data-swup-route="case-single"] video',
      )));
  },
  Fa = () => {
    La();
  },
  Da = () => {
    (Le(".updates"),
      ut('.updates-main__title [data-split="title"]', 0.8),
      ye());
  },
  Oa = () => {
    const u = window.matchMedia(`(max-width: ${ne}px)`);
    if (!W) {
      const e = () => {
        location.reload();
      };
      u.addEventListener("change", e);
    }
  },
  Va = (u, e) => {
    if (e == "thanks") {
      const h = document.querySelector(".c-loading");
      (E.to(h, {
        opacity: 0,
        pointerEvents: "none",
        duration: 0.7,
        onComplete: () => h.setAttribute("aria-hidden", "true"),
      }),
        (window.loading = !0));
      return;
    }
    const t = document.querySelector("#swup"),
      s = document.querySelector(".c-loading"),
      i = E.timeline({ paused: !0, repeat: -1 }),
      o = E.timeline({
        delay: 0.15,
        onComplete: () => {
          ((window.loading = !0),
            t.removeAttribute("style"),
            s.setAttribute("aria-hidden", "true"),
            r.classList.remove("is-animation"),
            n.forEach((h) => h.classList.remove("is-animation")),
            i.pause());
        },
      }),
      n = Array.from(document.querySelectorAll('[data-loading="name"]')),
      r = document.querySelector(".c-loading__name"),
      a = document.querySelector(".c-loading__values p"),
      l = ["Perspective", "Structure", "Expression", "Value"];
    (i.to(".c-loading__load-inner", {
      rotate: "-360deg",
      duration: 1,
      ease: "none",
    }),
      (a.textContent = l[0]),
      E.set(a, { y: "110%" }),
      E.set(".c-loading__values", { overflow: "hidden" }),
      i.play(),
      o.to(a, { y: "0%", duration: 0.32, ease: "power1.out" }));
    for (let h = 0; h < l.length - 1; h++)
      o.to(a, { y: "-110%", duration: 0.32, ease: "power1.in" }, ">")
        .call(() => {
          ((a.textContent = l[h + 1]), E.set(a, { y: "110%" }));
        })
        .to(a, { y: "0%", duration: 0.32, ease: "power1.out" }, "<");
    o.to(a, { y: "-110%", duration: 0.32, ease: "power1.in" }, ">")
      .call(() => {
        a.textContent = "";
      })
      .to(
        n,
        {
          y: "0%",
          duration: 1.4,
          ease: "power4.out",
          stagger: { from: "start", each: 0.05 },
          onComplete: () => {
            (E.set(a, { x: "-9999px", y: "-9999px", opacity: 0 }),
              E.to(".c-loading__load", { scale: 0, duration: 0.4 }));
          },
        },
        "<",
      )
      .to(
        n,
        {
          y: "-140%",
          duration: 1,
          ease: "power4.inOut",
          stagger: { from: "start", each: 0 },
        },
        "<0.8",
      )
      .to(
        ".c-loading",
        {
          opacity: 0,
          pointerEvents: "none",
          duration: 1.6,
          ease: "power4.out",
          onStart: () => {
            setTimeout(() => {
              document.dispatchEvent(new CustomEvent("loading:complete"));
            }, 50);
          },
        },
        "<0.9",
      );
  },
  Wa = () => {
    const u = document.querySelector(".c-cookie"),
      e = document.querySelector(".c-cookie button");
    localStorage.getItem("cookieState")
      ? u.remove()
      : (E.to(u, {
          opacity: 1,
          duration: 1.6,
          ease: "power4.out",
          delay: window.loading ? 0 : 4.8,
        }),
        e.addEventListener("click", () => {
          (localStorage.setItem("cookieState", "true"),
            E.to(u, {
              opacity: 0,
              duration: 0.4,
              onComplete: () => {
                E.set(u, { display: "none" });
              },
            }));
        }));
  };
let At;
const Ci = (u) => {
    ((At = document.querySelectorAll('[data-split="container"]')),
      At.length != 0 &&
        At.forEach((e) => {
          const t = e.querySelectorAll('[data-split="target"]');
          t.length != 0 &&
            (E.set(t, { willChange: "transform" }),
            E.to(t, {
              y: "0%",
              duration: 1.6,
              ease: "power4.out",
              stagger: { from: "start", each: 0.025 },
              scrollTrigger: { trigger: e, start: "top 90%", scroller: u },
              onComplete: () => {
                E.set(t, { willChange: "auto" });
              },
            }));
        }));
  },
  Mi = (u) => {
    const e = document.querySelector(".c-lab__background-video");
    e &&
      E.to(e, {
        yPercent: 30,
        ease: "none",
        scrollTrigger: {
          trigger: ".c-lab",
          start: "top bottom",
          end: "bottom top-=50%",
          scroller: u,
          scrub: !0,
        },
      });
  };
let ts;
const Ha = () => {
    if (!(Y.w < ne)) return;
    const e = document.querySelector(".mobile-button"),
      t = document.querySelectorAll(".mobile-menu a"),
      s = document.querySelectorAll(".mobile-button__line span");
    document.querySelectorAll(".mobile-menu p,.mobile-menu li");
    const i = document.querySelectorAll(
      ".mobile-menu__title span,.mobile-menu__li span",
    );
    let o = !1,
      n = !1;
    const r = () => {
        ((ts = getComputedStyle(s[0]).getPropertyValue("--line-color").trim()),
          E.to(document.documentElement, {
            "--line-color": "#f0f0f0",
            duration: 0.4,
            overwrite: "auto",
          }),
          E.to(".mobile-menu", {
            clipPath: "inset(0%)",
            pointerEvents: "auto",
            duration: 1,
            overwrite: "auto",
            ease: "power4.out",
            onComplete: () => {
              n = !1;
            },
          }),
          E.fromTo(
            i,
            { opacity: 0, y: "110%" },
            {
              opacity: 1,
              y: "0%",
              delay: 0.1,
              duration: 1.4,
              ease: "power4.out",
              overwrite: "auto",
              stagger: { from: "start", each: 0.03 },
            },
          ),
          e.setAttribute("aria-label", "メニューを閉じる"),
          e.setAttribute("aria-expanded", "true"));
      },
      a = () => {
        (ts &&
          E.to(document.documentElement, {
            "--line-color": ts,
            duration: 0.4,
            overwrite: "auto",
          }),
          E.to(".mobile-menu", {
            opacity: 0,
            pointerEvents: "none",
            duration: 0.8,
            overwrite: "auto",
            ease: "power4.out",
            onComplete: () => {
              ((n = !1),
                E.set(".mobile-menu", { opacity: 1, clipPath: "inset(50%)" }));
            },
          }),
          e.setAttribute("aria-label", "メニューを開く"),
          e.setAttribute("aria-expanded", "false"));
      };
    (e.addEventListener("click", () => {
      n || (e.classList.toggle("is-open"), (o = !o), (n = !0), o ? r() : a());
    }),
      t.forEach((l) => {
        l.addEventListener("click", () => {
          (e.classList.toggle("is-open"), (o = !1), a());
        });
      }));
  },
  Ua = () => {
    if (Y.w < 767) return;
    const u = document.querySelector(".c-logo"),
      e = Array.from(document.querySelectorAll(".c-logo span")),
      t = () => {
        E.to(e, {
          y: "-123%",
          duration: 0.7,
          ease: "power4.out",
          overwrite: "auto",
          stagger: { from: "start", each: 0.02 },
        });
      },
      s = () => {
        E.to(e, {
          y: "0%",
          duration: 0.7,
          ease: "power4.out",
          overwrite: "auto",
          stagger: { from: "start", each: 0.02 },
        });
      };
    (u.addEventListener("mouseenter", () => {
      t();
    }),
      u.addEventListener("mouseleave", () => {
        s();
      }));
  },
  Pi = () => {
    const u = document.querySelector(".footer__backtop");
    u &&
      u.addEventListener("click", () => {
        window.lenis.scrollTo(0, { duration: 0.7 });
      });
  };
let Xe = null;
const Ti = () => {
    const u = Array.from(document.querySelectorAll(".c-lab video"));
    if (u.length === 0) return () => {};
    const e = (s) => {
      s.play();
    };
    u.forEach((s) => {
      s.pause();
    });
    const t = new IntersectionObserver(
      (s) => {
        s.forEach((i) => {
          const o = i.target;
          i.isIntersecting ? e(o) : o.pause();
        });
      },
      { threshold: 0 },
    );
    return (
      u.forEach((s) => t.observe(s)),
      () => {
        (t.disconnect(),
          u.forEach((s) => {
            (s.pause(),
              s.src && s.removeAttribute("src"),
              Array.from(s.querySelectorAll("source")).forEach((o) => {
                o.src && o.removeAttribute("src");
              }),
              s.load());
          }));
      }
    );
  },
  ja = () => {
    (Xe && (Xe(), (Xe = null)), (Xe = Ti()));
  },
  $a = (u, e) => {
    (Va(u, e),
      setTimeout(() => {
        (Ci(u), Mi(u), W || (ki(), Oa(), Ua()), Ha(), Wa(), Pi(), (Xe = Ti()));
      }, 800));
  },
  Ga = (u) => {
    ((At = []),
      setTimeout(() => {
        (Ci(u), Mi(u), Pi());
      }, 150));
  },
  Ya = () => {
    (Le(".privacy"),
      ut('.privacy-main__title [data-split="title"]', 0.8),
      ye());
  };
class qt {
  static get RENDERER_SETTING() {
    return {
      clearColor: 0,
      width: window.innerWidth,
      height: window.innerHeight,
    };
  }
  static get CAMERA_PARAM() {
    return {
      fov: 60,
      fovy: 60,
      aspect: window.innerWidth / window.innerHeight,
      near: 0.1,
      far: 1e4,
      x: 0,
      y: 0,
      z: 3,
      lookAt: new ge(0, 0, 0),
    };
  }
  constructor() {
    (this.render,
      this.scene,
      this.canvas,
      this.controls,
      this.stats,
      this.axesHelper,
      this.gridHelper,
      (this.render = this.render.bind(this)),
      (this.width = window.innerWidth),
      (this.height = window.innerHeight),
      (this.Dev = !1),
      this.composer,
      (this.loader = new Ie()));
  }
  async _setRender() {
    ((this.renderer = new kt({ antialias: !0, alpha: !0 })),
      this.renderer.setClearColor(2236962, 0),
      this.renderer.setSize(
        qt.RENDERER_SETTING.width,
        qt.RENDERER_SETTING.height,
      ),
      this.renderer.setPixelRatio(Math.min(window.devicePixelRatio, 1.5)),
      (this.canvas = document.querySelector("#showcase")),
      this.canvas.appendChild(this.renderer.domElement));
  }
  async _setScene() {
    this.scene = new Bt();
  }
  async _setCamera() {
    ((this.camera = new Yi(
      -this.width / 2,
      this.width / 2,
      this.height / 2,
      -this.height / 2,
      0.1,
      1e4,
    )),
      (this.camera.position.z = 100),
      this.camera.lookAt(new ge(0, 0, 0)));
  }
  async _init() {
    (await this._setRender(), await this._setScene(), await this._setCamera());
  }
  render() {}
  onLoop() {
    this.render();
  }
  onResize() {
    ((this.width = window.innerWidth),
      (this.height = window.innerHeight),
      this.renderer.setPixelRatio(window.devicePixelRatio),
      this.renderer.setSize(this.width, this.height),
      (this.camera.left = -this.width / 2),
      (this.camera.right = this.width / 2),
      (this.camera.top = this.height / 2),
      (this.camera.bottom = -this.height / 2),
      this.camera.updateProjectionMatrix());
  }
}
class Xa {
  constructor() {
    ((this.images = []),
      (this.imagesData = []),
      (this.textures = []),
      (this.loader = new Ie()),
      this.loader.setCrossOrigin("anonymous"));
  }
  getImages(e) {
    e.forEach((t) => {
      const s = t.getBoundingClientRect(),
        i = { src: t.src, w: s.width, h: s.height, top: s.top, left: s.left };
      (this.imagesData.push(i), this.images.push(t));
    });
  }
  setTexture(e) {
    return (
      e.forEach((t, s) => {
        const i = this.loader.load(t);
        this.textures.push(i);
      }),
      this.textures
    );
  }
  onImagesUpdate() {
    this.images.forEach((e, t) => {
      const s = e.getBoundingClientRect();
      ((this.imagesData[t].src = e.src),
        (this.imagesData[t].width = s.width),
        (this.imagesData[t].height = s.height),
        (this.imagesData[t].top = s.top),
        (this.imagesData[t].left = s.left));
    });
  }
}
const Ka = `
  varying vec2 vUv;
  varying vec2 v_offset;
  uniform vec2 u_offset;

  float PI = 3.1415926535897932384626433832795;

  vec3 curve(vec3 position, vec2 uv, vec2 offset) {
    position.x = position.x + (sin(uv.y * PI) * offset.x);
    position.y = position.y + (sin(uv.x * PI) * offset.y);
    return position;
  }

  void main() {
    vUv = uv;
    v_offset = u_offset;
    vec3 newPos = curve(position, uv, u_offset * 25.5);
    gl_Position = projectionMatrix * modelViewMatrix * vec4(newPos, 1.0);
  }
`,
  Za = `
precision mediump float;

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
class Ja {
  constructor(e, t) {
    ((this.stage = e),
      (this.imageLoader = new Xa()),
      (this.domImageData = t),
      (this.domImageSrc = []),
      (this.mobile = "ontouchstart" in document.documentElement),
      (this.w = window.innerWidth),
      (this.h = window.innerHeight),
      (this.textures = []),
      (this.targetX = 0),
      (this.targetY = 0),
      (this.mouse = new ge(0, 0, 0)),
      (this.lerpFactor = 0.08),
      (this.curveOffset = new K(0, 0)),
      (this.targetCurveOffset = new K(0, 0)),
      (this.previousScroll = 0),
      (this.curveLerpFactor = 0.09),
      (this.curveStrength = 4e-4),
      (this.curveOffsetMax = 0.15),
      (this.trackedMouse = { x: 0, y: 0 }),
      (this.loader = new Ie()),
      (this.composer = null),
      (this.fisheyePass = null),
      (this.group = new ri()),
      (this.objcts = []),
      (this.objctsB = []),
      (this.viewport = {
        width: window.innerWidth,
        height: window.innerHeight,
        widthHalf: window.innerWidth / 2,
        heightHalf: window.innerHeight / 2,
      }));
  }
  async _init() {
    (await this.#e(),
      await this.createObjects(),
      this.setComposer(),
      this.composer && this.composer.render(),
      this.scrollAnimation());
  }
  _setImage() {
    return new Promise((e, t) => {
      (this.domImageData.forEach((s) => {
        this.domImageSrc.push(s.src);
      }),
        (this.textures = this.imageLoader.setTexture(this.domImageSrc)),
        e());
    });
  }
  async #e() {
    ((this.viewport.width = window.innerWidth),
      (this.viewport.height = window.innerHeight),
      (this.viewport.widthHalf = this.viewport.width / 2),
      (this.viewport.heightHalf = this.viewport.height / 2));
  }
  createMesh(e) {
    const t = { x: 1, y: 1 },
      s = { x: this.domImageData[e].width, y: this.domImageData[e].height };
    this.textureSize = {
      x: this.domImageData[e].naturalWidth,
      y: this.domImageData[e].naturalHeight,
    };
    const i = {
      u_resolution: { value: new K(window.innerWidth, window.innerHeight) },
      u_texture: { value: this.textures[e] },
      u_planeSize: { value: s },
      u_imageSize: { value: this.textureSize },
      u_amplitude: { value: 0.5 },
      u_progress: { value: 0 },
      u_time: { value: 0 },
      u_viewSize: { value: new K(1, 1) },
      u_meshScale: { value: new K(1, 1) },
      u_meshPosition: { value: new K(0, 0) },
      u_offset: { value: new K(0, 0) },
      u_imageScale: { value: this.mobile ? 1.1 : 1.2 },
      u_imageOffsetX: { value: 0 },
      u_imageOffsetY: { value: this.mobile ? 0.15 : 0.3 },
      u_blackFilter: { value: 0.75 },
    };
    return (
      (this.geometry = new fs(t.x, t.y, 20, 20)),
      (this.material = new Ft({
        uniforms: i,
        vertexShader: Ka,
        fragmentShader: Za,
        side: ai,
        transparent: !0,
      })),
      new Dt(this.geometry, this.material)
    );
  }
  scrollAnimation() {
    const e = document.querySelector(".container");
    document.querySelectorAll(".showcase-main__image").forEach((s, i) => {
      E.to(this.objcts[i].material.uniforms.u_imageOffsetY, {
        value: this.mobile ? -0.1 : -0.3,
        scrollTrigger: {
          trigger: s,
          scroller: e,
          start: "top bottom",
          end: "bottom top",
          scrub: !0,
        },
      });
    });
  }
  async createObjects() {
    this.textures.forEach((e, t) => {
      ((this.mesh = this.createMesh(t)),
        this.mesh.scale.set(
          this.domImageData[t].width,
          this.domImageData[t].height,
          1,
        ),
        (this.meshWidthHalf = this.mesh.scale.x * 0.5),
        (this.meshHeightHalf = this.mesh.scale.y * 0.5),
        (this.mesh.position.x =
          -this.viewport.widthHalf +
          this.meshWidthHalf +
          this.domImageData[t].left),
        (this.mesh.position.y =
          this.viewport.heightHalf -
          this.meshHeightHalf -
          this.domImageData[t].top),
        (this.mesh.position.z = 0));
      const s =
          (this.domImageData[t].width * this.viewport.width) /
          window.innerWidth,
        i =
          (this.domImageData[t].height * this.viewport.height) /
          window.innerHeight;
      let o =
          (this.domImageData[t].left * this.viewport.width) / window.innerWidth,
        n =
          (this.domImageData[t].top * this.viewport.height) /
          window.innerHeight;
      ((o = o - this.viewport.width / 2), (n = n - this.viewport.height / 2));
      let r = o + s / 2,
        a = -n - i / 2;
      ((this.mesh.material.uniforms.u_meshPosition.value.x = r / s),
        (this.mesh.material.uniforms.u_meshPosition.value.y = a / i),
        (this.mesh.material.uniforms.u_meshScale.value.x = s),
        (this.mesh.material.uniforms.u_meshScale.value.y = i),
        (this.mesh.material.uniforms.u_viewSize.value.x = this.viewport.width),
        (this.mesh.material.uniforms.u_viewSize.value.y = this.viewport.height),
        this.objcts.push(this.mesh),
        this.stage.scene.add(this.mesh));
    });
  }
  setComposer() {
    const e = this.stage.renderer.getSize(new K()),
      t = this.stage.renderer.getPixelRatio(),
      s = new li(e.width * t, e.height * t, {
        minFilter: We,
        magFilter: We,
        format: ms,
        type: W ? ci : hi,
        stencilBuffer: !1,
        depthBuffer: !0,
      });
    this.composer = new ws(this.stage.renderer, s);
    const i = new vs(this.stage.scene, this.stage.camera);
    this.composer.addPass(i);
    const o = {
      uniforms: {
        tDiffuse: { value: null },
        u_strength: { value: W ? 0.16 : 0.2 },
        u_aspect: { value: window.innerWidth / window.innerHeight },
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
        varying vec2 vUv;

        void main() {
          
          vec2 uv = vUv * 2.0 - 1.0;
          uv.x *= u_aspect;

          float r = length(uv);

          
          float distortion = 1.0 + u_strength * r * r;
          vec2 distortedUv = uv / distortion;

          
          distortedUv.x /= u_aspect;
          distortedUv = distortedUv * 0.5 + 0.5;

          
          float t = clamp(r / 1.2, 0.0, 1.0);
          float t2 = t * t;

          
          vec2 radialDir = r > 0.001 ? normalize(uv) : vec2(0.0);
          vec2 radialDirNorm = vec2(radialDir.x / u_aspect, radialDir.y);

          
          float caAmount = 0.003 * t2;

          
          vec2 blurStep = radialDirNorm * 0.005 * t2;

          
          float rSum = 0.0, gSum = 0.0, bSum = 0.0, aSum = 0.0;
          for (int i = -2; i <= 2; i++) {
            float fi = float(i) / 2.0;
            vec2 offset = blurStep * fi;
            rSum += texture2D(tDiffuse, distortedUv + radialDirNorm * caAmount + offset).r;
            gSum += texture2D(tDiffuse, distortedUv + offset).g;
            bSum += texture2D(tDiffuse, distortedUv - radialDirNorm * caAmount + offset).b;
            aSum += texture2D(tDiffuse, distortedUv + offset).a;
          }

          gl_FragColor = vec4(rSum / 5.0, gSum / 5.0, bSum / 5.0, aSum / 5.0);
        }
      `,
    };
    ((this.fisheyePass = new Nt(o)), this.composer.addPass(this.fisheyePass));
  }
  onMeshUpdata(e, t) {
    ((this.objcts[t].material.needsUpdate = !0),
      (this.objcts[t].scale.x = this.domImageData[t].width),
      (this.objcts[t].scale.y = this.domImageData[t].height),
      (this.objcts[t].material.uniforms.u_planeSize.value.x =
        this.objcts[t].scale.x),
      (this.objcts[t].material.uniforms.u_planeSize.value.y =
        this.objcts[t].scale.y),
      (this.meshWidthHalf = this.objcts[t].scale.x * 0.5),
      (this.meshHeightHalf = this.objcts[t].scale.y * 0.5),
      (this.objcts[t].position.y =
        this.viewport.heightHalf -
        this.meshHeightHalf -
        this.domImageData[t].top),
      (this.objcts[t].position.x =
        -this.viewport.widthHalf +
        this.meshWidthHalf +
        this.domImageData[t].left));
    const s =
        (this.domImageData[t].width * this.viewport.width) / window.innerWidth,
      i =
        (this.domImageData[t].height * this.viewport.height) /
        window.innerHeight;
    let o =
        (this.domImageData[t].left * this.viewport.width) / window.innerWidth,
      n =
        (this.domImageData[t].top * this.viewport.height) / window.innerHeight;
    ((o = o - this.viewport.width / 2), (n = n - this.viewport.height / 2));
    let r = o + s / 2,
      a = -n - i / 2;
    ((this.objcts[t].material.uniforms.u_meshPosition.value.x = r / s),
      (this.objcts[t].material.uniforms.u_meshPosition.value.y = a / i));
  }
  onScrollUpdata(e) {
    const t = e - this.previousScroll;
    ((this.previousScroll = e),
      this.targetCurveOffset.set(0, -t * this.curveStrength),
      this.targetCurveOffset.clampLength(0, this.curveOffsetMax),
      this.curveOffset.lerp(this.targetCurveOffset, this.curveLerpFactor),
      this.objcts.forEach((s) => {
        s.material.uniforms.u_offset.value.copy(this.curveOffset);
      }));
  }
  onUpdate() {
    this.composer
      ? this.composer.render()
      : this.stage.renderer.render(this.stage.scene, this.stage.camera);
  }
  onResize() {
    ((this.w = window.innerWidth),
      (this.h = window.innerHeight),
      this.#e(),
      (this.mesh.material.uniforms.u_viewSize.value.x = this.viewport.width),
      (this.mesh.material.uniforms.u_viewSize.value.y = this.viewport.height),
      this.composer &&
        (this.composer.setPixelRatio(this.stage.renderer.getPixelRatio()),
        this.composer.setSize(this.w, this.h),
        this.fisheyePass?.uniforms?.u_aspect &&
          (this.fisheyePass.uniforms.u_aspect.value = this.w / this.h)));
  }
  dispose() {
    if (
      (this.composer &&
        (this.composer.renderTarget1 && this.composer.renderTarget1.dispose(),
        this.composer.renderTarget2 && this.composer.renderTarget2.dispose(),
        this.composer.dispose()),
      this.stage.scene.traverse((e) => {
        e.isMesh &&
          (e.geometry && e.geometry.dispose(),
          e.material &&
            (Array.isArray(e.material)
              ? e.material.forEach((t) => {
                  (t.map && t.map.dispose(), t.dispose());
                })
              : (e.material.map && e.material.map.dispose(),
                e.material.dispose())));
      }),
      this.stage.renderer.dispose(),
      this.stage.renderer && this.stage.renderer.domElement)
    ) {
      const e = this.stage.renderer.domElement;
      e.parentNode && e.parentNode.removeChild(e);
    }
    ((this.stage.scene = null),
      (this.stage.camera = null),
      (this.loader = null),
      (this.gltfLoader = null),
      (this.group = null));
  }
}
class Qa {
  constructor(e) {
    ((this.images = e), (this.elementData = []));
  }
  _init() {
    this.#e();
  }
  #e() {
    this.images.forEach((e) => {
      const t = e.getBoundingClientRect(),
        s = e.src,
        i = t.width,
        o = t.height,
        n = t.top,
        r = t.left,
        a = e.naturalWidth,
        l = e.naturalHeight,
        h = {
          src: s,
          width: i,
          height: o,
          top: n,
          left: r,
          naturalWidth: a,
          naturalHeight: l,
        };
      this.elementData.push(h);
    });
  }
  elementUpdata() {
    this.images.forEach((e, t) => {
      const s = e.getBoundingClientRect();
      ((this.elementData[t].src = e.src),
        (this.elementData[t].width = s.width),
        (this.elementData[t].height = s.height),
        (this.elementData[t].top = s.top),
        (this.elementData[t].left = s.left),
        (this.elementData[t].naturalWidth = e.naturalWidth),
        (this.elementData[t].naturalHeight = e.naturalHeight));
    });
  }
}
let Oe = null,
  ie = null,
  St = null,
  qe,
  Ae,
  lt = !1,
  Ve = null,
  Re = null;
const zi = () => {
    !Oe ||
      !ie ||
      (Re && clearTimeout(Re),
      (Re = setTimeout(() => {
        ((Re = null), Oe.onResize(), ie.onResize());
      }, 150)));
  },
  Ri = () =>
    window.lenis
      ? window.lenis.scroll
      : (window.scrollY ?? document.documentElement.scrollTop),
  Lt = () => {
    ((lt = !0),
      Ae.elementUpdata(),
      qe.forEach((u, e) => {
        ie.onMeshUpdata(Ae.elementData[e], e);
      }),
      ie.onScrollUpdata(Ri()),
      Ve && clearTimeout(Ve),
      (Ve = setTimeout(() => {
        lt = !1;
      }, 100)));
  },
  qi = async () => {
    ((St = requestAnimationFrame(qi)),
      ie.onScrollUpdata(Ri()),
      lt || Ae.elementUpdata(),
      Oe.onLoop(),
      ie.onUpdate(),
      lt ||
        qe.forEach((u, e) => {
          ie.onMeshUpdata(Ae.elementData[e], e);
        }));
  },
  el = () => {
    ((qe = document.querySelectorAll(".showcase-main__image img")),
      qe.length != 0 &&
        ((Ae = new Qa(qe)),
        Ae._init(),
        (Oe = new qt()),
        (ie = new Ja(Oe, Ae.elementData)),
        ie._setImage().then(async () => {
          (await Oe._init(),
            await ie._init(),
            window.lenis
              ? window.lenis.on("scroll", Lt)
              : window.addEventListener("scroll", Lt, { passive: !0 }),
            await qi(),
            window.addEventListener("resize", zi));
        })));
  },
  tl = async () => {
    Y.w > ne && el();
  },
  sl = () => {
    Y.w < ne ||
      (qe.length != 0 &&
        (St && (cancelAnimationFrame(St), (St = null)),
        Ve && (clearTimeout(Ve), (Ve = null)),
        Re && (clearTimeout(Re), (Re = null)),
        window.removeEventListener("resize", zi),
        window.lenis
          ? window.lenis.off("scroll", Lt)
          : window.removeEventListener("scroll", Lt),
        ie && (ie.dispose(), (ie = null)),
        (lt = !1),
        (qe = null),
        (Ae = null)));
  },
  il = (u) => {
    const e = document.querySelectorAll(".showcase-main__image img"),
      t = document.querySelectorAll(".showcase-main__li");
    e.forEach((s, i) => {
      E.to(s, {
        y: "20%",
        ease: "none",
        scrollTrigger: {
          trigger: t[i],
          scroller: u,
          start: "top bottom",
          end: "bottom top-=50%",
          scrub: !0,
        },
      });
    });
  },
  ol = (u) => {
    const e = document.querySelector(".showcase-length .current"),
      t = document.querySelectorAll(".showcase-main__li");
    if (!e || !t.length) return null;
    const s = new Array(t.length).fill(0),
      i = () => {
        const n = s.reduce((a, l, h) => (l > s[a] ? h : a), 0),
          r = s[n] > 0 ? n + 1 : 1;
        e.textContent = String(r).padStart(2, "0");
      },
      o = new IntersectionObserver(
        (n) => {
          (n.forEach((r) => {
            const a = Array.from(t).indexOf(r.target);
            a !== -1 && (s[a] = r.intersectionRatio);
          }),
            i());
        },
        { root: u, rootMargin: "0px", threshold: [0, 0.25, 0.5, 0.75, 1] },
      );
    return (t.forEach((n) => o.observe(n)), o);
  },
  ii = "is-current",
  nl = (u) => {
    const e = document.querySelector(".showcase-head__titles-group"),
      t = document.querySelectorAll(".showcase-head__titles-group p"),
      s = document.querySelector(".showcase-main"),
      i = document.querySelectorAll(".showcase-main__li");
    if (
      !e ||
      !s ||
      (E.fromTo(
        e,
        { y: Y.w < 767 ? "138rem" : "150rem" },
        {
          y: Y.w < 767 ? "-139rem" : "-160rem",
          ease: "none",
          scrollTrigger: {
            trigger: s,
            scroller: u,
            start: "top top-=100vh",
            end: "bottom bottom-=100vh",
            scrub: !0,
          },
        },
      ),
      !t.length || !i.length)
    )
      return;
    const o = new Array(i.length).fill(0),
      n = () => {
        const a = o.reduce((h, p, d) => (p > o[h] ? d : h), 0),
          l = o[a] > 0;
        (i.forEach((h, p) => {
          h.classList.toggle(ii, l && p === a);
        }),
          t.forEach((h, p) => {
            h.classList.toggle(ii, l && p === a);
          }));
      },
      r = new IntersectionObserver(
        (a) => {
          (a.forEach((l) => {
            const h = Array.from(i).indexOf(l.target);
            h !== -1 && (o[h] = l.intersectionRatio);
          }),
            n());
        },
        { root: u, rootMargin: "0px", threshold: [0, 0.25, 0.5, 0.75, 1] },
      );
    return (i.forEach((a) => r.observe(a)), r);
  },
  rl = () => {
    E.to(".showcase-filter", {
      opacity: 0,
      delay: window.loading ? 1 : 1.6,
      duration: 1.4,
      ease: "power4.out",
    });
  };
let us = null,
  ds = null;
const al = () => {
    const u = document.querySelector(".container"),
      e = Y.w < ne;
    (rl(),
      (ds = nl(u)),
      ht(),
      e && il(u),
      setTimeout(() => {
        (e || (tl(), E.set(".showcase-main__image", { opacity: 0 })),
          (us = ol(u)));
      }, 200));
  },
  ll = () => {
    (us?.disconnect(), (us = null), ds?.disconnect(), (ds = null), sl());
  };
let de, It, Ke, ss, ps, is, Ye;
const Li = (u) => {
    (Ye && Ye.classList.remove("is-active"),
      (Ye =
        Y.w < ne
          ? document.querySelector(`[data-mobile-nav="${u}"]`)
          : document.querySelector(`[data-nav="${u}"]`)),
      Ye && Ye.classList.add("is-active"));
  },
  cl = () => {
    Ke = new Di({
      animateHistoryBrowsing: !0,
      theme: !1,
      animationClass: !1,
      plugins: [
        new Ki(),
        new Ji({ containers: ["#swup"], keep: 0 }),
        new eo({ preloadHoverDelay: 80 }),
      ],
    });
  },
  Ii = (u, e = null) => {
    switch ((Li(u), u)) {
      case "index":
        go();
        break;
      case "case":
        Eo(e);
        break;
      case "about":
        va();
        break;
      case "lab":
        _a();
        break;
      case "contact":
        qa();
        break;
      case "case-single":
        Ba(e);
        break;
      case "updates":
        Da();
        break;
      case "privacy":
        Ya();
        break;
      case "showcase":
        al();
        break;
      default:
        ye();
        break;
    }
  },
  hl = () => {
    (Ke.hooks.replace("animation:in:await", async (u) => {
      document.documentElement.classList.add("is-wait");
      const e = document.querySelectorAll(".container"),
        t = e[0],
        s = e[1],
        i = E.timeline({
          onComplete: () => {
            (E.set(".c-transition-filter", { opacity: 0, willChange: "auto" }),
              E.set(s, { willChange: "auto", force3D: !1 }),
              E.set(t, { force3D: !1 }),
              document.documentElement.classList.remove("is-wait"),
              t.removeAttribute("style"),
              window.lenis.start());
          },
        }),
        o = E.timeline();
      (E.set(s, {
        position: "absolute",
        top: 0,
        left: 0,
        zIndex: -1,
        willChange: W ? "auto" : "transform",
        force3D: !0,
        backfaceVisibility: "hidden",
      }),
        E.set(t, {
          position: "absolute",
          top: 0,
          left: 0,
          clipPath: "inset(70%)",
          willChange: W ? "auto" : "transform, clip-path",
          force3D: !0,
          backfaceVisibility: "hidden",
          zIndex: 1,
        }),
        E.set(".c-transition-filter", {
          opacity: 0,
          willChange: W ? "auto" : "opacity",
        }),
        o.to(s, {
          scale: 1.1,
          duration: 1.5,
          delay: W ? 0.2 : 0,
          ease: jt.create("custom", $t),
          force3D: !0,
        }),
        E.to(".c-transition-filter", {
          opacity: 0.8,
          duration: 1.2,
          delay: W ? 0.2 : 0,
          ease: jt.create("custom", $t),
        }),
        await i.to(t, {
          clipPath: "inset(0%)",
          duration: 1.5,
          delay: W ? 0.2 : 0,
          ease: jt.create("custom", $t),
          force3D: !0,
        }));
    }),
      Ke.hooks.on("visit:start", (u) => {
        const e = document.querySelector(u.containers[0]);
        switch (
          (e?.contains(document.activeElement) &&
            document.activeElement?.blur?.(),
          (ss = e?.dataset.swupRoute),
          window.lenis.stop(),
          ss)
        ) {
          case "index":
            yo();
            break;
          case "case":
            break;
          case "about":
            wa();
            break;
          case "lab":
            Ca();
            break;
          case "contact":
            break;
          case "case-single":
            Na();
            break;
        }
      }),
      Ke.hooks.on("page:view", (u) => {
        ((de = document.querySelector(".container")),
          (It = de.querySelector('[data-lenis="main"]')),
          (is = ps),
          (ps = ui(de, It)),
          window.lenis.stop(),
          Ga(de));
        const e = document.querySelector(u.containers[0]),
          t = e.dataset.swupRoute;
        Ii(t, e);
      }),
      Ke.hooks.on("visit:end", (u) => {
        switch ((is && is(), ja(), ss)) {
          case "index":
            bo();
            break;
          case "case":
            break;
          case "about":
            ga();
            break;
          case "lab":
            Ma();
            break;
          case "showcase":
            ll();
            break;
          case "case-single":
            Fa();
            break;
        }
      }));
  },
  ul = () => {
    ((de = document.querySelector(".container")),
      (It = de.querySelector('[data-lenis="main"]')));
    const u = de.dataset.swupRoute;
    (cl(),
      (ps = ui(de, It)),
      hl(),
      $a(de, u),
      Ii(u, de),
      Li(u),
      W || E.ticker.add(Bi));
  };
window.addEventListener("DOMContentLoaded", ul);
