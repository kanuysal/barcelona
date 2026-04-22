import { u as F } from "./index.BSeWpMMd.js";
import {
  c as n,
  a as e,
  b,
  t as _,
  F as f,
  r as h,
  o as y,
  d as C,
  e as p,
  f as i,
  n as x,
  g as m,
} from "./runtime-core.esm-bundler.DErgyXHA.js";
import { g as v } from "./chunk-gsap.C-y0P4LX.js";
const L = (c, s) => {
    const o = c.__vccOpts || c;
    for (const [a, l] of s) o[a] = l;
    return o;
  },
  B = {
    __name: "main-section",
    props: { items: null },
    setup(c, { expose: s }) {
      s();
      const o = c,
        a = [
          { title: "Tümü", data: "all" },
          { title: "Tesettürlü", data: "develop-only" },
          { title: "Açık / Klasik", data: "design-develop" },
        ],
        l = p("all"),
        r = p(),
        t = p(0),
        u = (d) => {
          (r.value.classList.remove("is-active"),
            (r.value = document.querySelector(`[data-filter="${d}"]`)),
            r.value.classList.add("is-active"));
        },
        D = C(() =>
          l.value === "all"
            ? (t.value !== 0 &&
                v.to(".case-main", {
                  opacity: 1,
                  duration: 0.4,
                  delay: 0.2,
                  overwrite: "auto",
                  onComplete: () => {},
                }),
              o.items)
            : o.items.filter(
                (d) => (
                  v.to(".case-main", {
                    opacity: 1,
                    duration: 0.4,
                    delay: 0.2,
                    overwrite: "auto",
                    onComplete: () => {
                      t.value++;
                    },
                  }),
                  d.roles_slugs?.includes(l.value)
                ),
              ),
        ),
        S = (d) => {
          const k = d.target.dataset.filter;
          (u(k),
            v.to(".case-main", {
              opacity: 0,
              duration: 0.4,
              overwrite: "auto",
              onComplete: () => {
                l.value = k;
              },
            }));
        };
      y(() => {
        r.value = document.querySelector('[data-filter="all"]');
      });
      const g = {
        props: o,
        filters: a,
        activeFilter: l,
        activeButton: r,
        clickCount: t,
        toggleCurrent: u,
        filteredItems: D,
        clickFilter: S,
        get gsap() {
          return v;
        },
        get updateLinks() {
          return F;
        },
        onMounted: y,
        ref: p,
        computed: C,
      };
      return (
        Object.defineProperty(g, "__isScriptSetup", {
          enumerable: !1,
          value: !0,
        }),
        g
      );
    },
  },
  N = { class: "case-head-section" },
  P = { class: "small-group" },
  W = { class: "total" },
  j = { class: "filter-group" },
  w = { class: "filter-item" },
  A = ["data-filter"],
  O = { class: "line" },
  V = { class: "case-main" },
  q = { class: "case-main__inner" },
  E = { class: "case-main__ul" },
  I = { class: "case-main__li" },
  T = ["href", "target", "rel"],
  $ = { class: "case-main__li-details" },
  z = { class: "group" },
  M = { class: "number u-book" },
  G = { class: "title" },
  H = { class: "line" },
  J = { key: 0, class: "role u-book" },
  K = { key: 1, class: "role u-book" },
  Q = { key: 2, class: "role u-book" },
  R = { class: "case-main__li-image" },
  U = ["src"];
function X(c, s, o, a, l, r) {
  return (
    i(),
    n(
      f,
      null,
      [
        e("section", N, [
          s[4] ||
            (s[4] = e(
              "div",
              { class: "group" },
              [
                e("div", { class: "cover" }, [
                  e("p", { class: "c-ja-text" }, [
                    b("Koleksiyonlarımızı"),
                    e("br"),
                    b("burada bulabilirsiniz."),
                  ]),
                  e(
                    "p",
                    { class: "c-en-text--sm u-book" },
                    "En seçkin tasarımlarımızı keşfedin.",
                  ),
                ]),
              ],
              -1,
            )),
          e("div", P, [
            e("div", W, [
              s[0] ||
                (s[0] = e(
                  "p",
                  { class: "title u-book" },
                  "(Koleksiyon Sayısı)",
                  -1,
                )),
              e("p", null, _(o.items.length), 1),
            ]),
            s[1] ||
              (s[1] = e(
                "div",
                { class: "role" },
                [
                  e("p", { class: "title u-book" }, "(Ana Kategoriler)"),
                  e("p", null, "Tesettürlü, Açık / Klasik"),
                ],
                -1,
              )),
            s[2] ||
              (s[2] = e(
                "div",
                { class: "tech" },
                [
                  e("p", { class: "title u-book" }, "(Hizmetler)"),
                  e("p", null, "Gelinlik, Abiye, Kaftan, Nişan"),
                ],
                -1,
              )),
          ]),
          e("div", j, [
            s[3] || (s[3] = e("p", { class: "title u-book" }, "(Tesettür Uyumu)", -1)),
            (i(),
            n(
              f,
              null,
              h(a.filters, (t) =>
                e("div", w, [
                  e(
                    "button",
                    {
                      class: x([
                        "filter-item__button",
                        { "is-active": t.data == "all" },
                      ]),
                      "data-hover": "line",
                      "data-filter": t.data,
                      onClick: a.clickFilter,
                    },
                    [e("span", O, _(t.title), 1)],
                    10,
                    A,
                  ),
                ]),
              ),
              64,
            )),
          ]),
        ]),
        e("div", V, [
          e("div", q, [
            e("ul", E, [
              (i(!0),
              n(
                f,
                null,
                h(
                  a.filteredItems,
                  (t, u) => (
                    i(),
                    n("li", I, [
                      e(
                        "a",
                        {
                          href: t.acf.blanks?.["blank-flag"]
                            ? t.acf.blanks?.["blank-url"]
                            : `/case/${t.slug}/`,
                          target: t.acf.blanks?.["blank-flag"]
                            ? "_blank"
                            : void 0,
                          rel: t.acf.blanks?.["blank-flag"]
                            ? "noopener noreferrer"
                            : void 0,
                          "data-hover": "line",
                        },
                        [
                          e("div", $, [
                            e("div", z, [
                              e(
                                "p",
                                M,
                                "(" + _(String(u + 1).padStart(2, "0")) + ")",
                                1,
                              ),
                              e("h2", G, [e("span", H, _(t.acf.title), 1)]),
                            ]),
                            t.roles_slugs[0] == "design-develop"
                              ? (i(), n("p", J, " Açık / Klasik "))
                              : m("", !0),
                            t.roles_slugs[0] == "design-only"
                              ? (i(), n("p", K, "Tümü"))
                              : m("", !0),
                            t.roles_slugs[0] == "develop-only"
                              ? (i(), n("p", Q, "Tesettürlü"))
                              : m("", !0),
                          ]),
                          e("div", R, [
                            e(
                              "img",
                              { src: t.acf.thumbnail, alt: "" },
                              null,
                              8,
                              U,
                            ),
                          ]),
                        ],
                        8,
                        T,
                      ),
                    ])
                  ),
                ),
                256,
              )),
            ]),
          ]),
        ]),
      ],
      64,
    )
  );
}
const te = L(B, [["render", X]]);
export { te as default };
