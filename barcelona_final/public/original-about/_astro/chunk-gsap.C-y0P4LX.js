function Li(a) {
  if (a === void 0)
    throw new ReferenceError(
      "this hasn't been initialised - super() hasn't been called",
    );
  return a;
}
function rf(a, e) {
  ((a.prototype = Object.create(e.prototype)),
    (a.prototype.constructor = a),
    (a.__proto__ = e));
}
/*!
 * GSAP 3.13.0
 * https://gsap.com
 *
 * @license Copyright 2008-2025, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license
 * @author: Jack Doyle, jack@greensock.com
 */ var Zt = {
    autoSleep: 120,
    force3D: "auto",
    nullTargetWarn: 1,
    units: { lineHeight: "" },
  },
  pn = { duration: 0.5, overwrite: !1, delay: 0 },
  il,
  ht,
  Ie,
  ui = 1e8,
  De = 1 / ui,
  ha = Math.PI * 2,
  hh = ha / 4,
  dh = 0,
  nf = Math.sqrt,
  ph = Math.cos,
  _h = Math.sin,
  ot = function (e) {
    return typeof e == "string";
  },
  Xe = function (e) {
    return typeof e == "function";
  },
  Vi = function (e) {
    return typeof e == "number";
  },
  rl = function (e) {
    return typeof e > "u";
  },
  Ai = function (e) {
    return typeof e == "object";
  },
  It = function (e) {
    return e !== !1;
  },
  nl = function () {
    return typeof window < "u";
  },
  Ps = function (e) {
    return Xe(e) || ot(e);
  },
  sf =
    (typeof ArrayBuffer == "function" && ArrayBuffer.isView) || function () {},
  bt = Array.isArray,
  da = /(?:-?\.?\d|\.)+/gi,
  of = /[-+=.]*\d+[.e\-+]*\d*[e\-+]*\d*/g,
  jr = /[-+=.]*\d+[.e-]*\d*[a-z%]*/g,
  Io = /[-+=.]*\d+\.?\d*(?:e-|e\+)?\d*/gi,
  af = /[+-]=-?[.\d]+/,
  lf = /[^,'"\[\]\s]+/gi,
  gh = /^[+\-=e\s\d]*\d+[.\d]*([a-z]*|%)\s*$/i,
  Be,
  Ci,
  pa,
  sl,
  Jt = {},
  so = {},
  uf,
  ff = function (e) {
    return (so = _n(e, Jt)) && $t;
  },
  ol = function (e, i) {
    return console.warn(
      "Invalid property",
      e,
      "set to",
      i,
      "Missing plugin? gsap.registerPlugin()",
    );
  },
  fs = function (e, i) {
    return !i && console.warn(e);
  },
  cf = function (e, i) {
    return (e && (Jt[e] = i) && so && (so[e] = i)) || Jt;
  },
  cs = function () {
    return 0;
  },
  mh = { suppressEvents: !0, isStart: !0, kill: !1 },
  Us = { suppressEvents: !0, kill: !1 },
  yh = { suppressEvents: !0 },
  al = {},
  or = [],
  _a = {},
  hf,
  Gt = {},
  No = {},
  Xl = 30,
  qs = [],
  ll = "",
  ul = function (e) {
    var i = e[0],
      t,
      r;
    if ((Ai(i) || Xe(i) || (e = [e]), !(t = (i._gsap || {}).harness))) {
      for (r = qs.length; r-- && !qs[r].targetTest(i); );
      t = qs[r];
    }
    for (r = e.length; r--; )
      (e[r] && (e[r]._gsap || (e[r]._gsap = new If(e[r], t)))) ||
        e.splice(r, 1);
    return e;
  },
  Cr = function (e) {
    return e._gsap || ul(fi(e))[0]._gsap;
  },
  df = function (e, i, t) {
    return (t = e[i]) && Xe(t)
      ? e[i]()
      : (rl(t) && e.getAttribute && e.getAttribute(i)) || t;
  },
  Nt = function (e, i) {
    return (e = e.split(",")).forEach(i) || e;
  },
  He = function (e) {
    return Math.round(e * 1e5) / 1e5 || 0;
  },
  je = function (e) {
    return Math.round(e * 1e7) / 1e7 || 0;
  },
  nn = function (e, i) {
    var t = i.charAt(0),
      r = parseFloat(i.substr(2));
    return (
      (e = parseFloat(e)),
      t === "+" ? e + r : t === "-" ? e - r : t === "*" ? e * r : e / r
    );
  },
  xh = function (e, i) {
    for (var t = i.length, r = 0; e.indexOf(i[r]) < 0 && ++r < t; );
    return r < t;
  },
  oo = function () {
    var e = or.length,
      i = or.slice(0),
      t,
      r;
    for (_a = {}, or.length = 0, t = 0; t < e; t++)
      ((r = i[t]),
        r && r._lazy && (r.render(r._lazy[0], r._lazy[1], !0)._lazy = 0));
  },
  fl = function (e) {
    return !!(e._initted || e._startAt || e.add);
  },
  pf = function (e, i, t, r) {
    (or.length && !ht && oo(),
      e.render(i, t, !!(ht && i < 0 && fl(e))),
      or.length && !ht && oo());
  },
  _f = function (e) {
    var i = parseFloat(e);
    return (i || i === 0) && (e + "").match(lf).length < 2
      ? i
      : ot(e)
        ? e.trim()
        : e;
  },
  gf = function (e) {
    return e;
  },
  ei = function (e, i) {
    for (var t in i) t in e || (e[t] = i[t]);
    return e;
  },
  vh = function (e) {
    return function (i, t) {
      for (var r in t)
        r in i || (r === "duration" && e) || r === "ease" || (i[r] = t[r]);
    };
  },
  _n = function (e, i) {
    for (var t in i) e[t] = i[t];
    return e;
  },
  Vl = function a(e, i) {
    for (var t in i)
      t !== "__proto__" &&
        t !== "constructor" &&
        t !== "prototype" &&
        (e[t] = Ai(i[t]) ? a(e[t] || (e[t] = {}), i[t]) : i[t]);
    return e;
  },
  ao = function (e, i) {
    var t = {},
      r;
    for (r in e) r in i || (t[r] = e[r]);
    return t;
  },
  Vn = function (e) {
    var i = e.parent || Be,
      t = e.keyframes ? vh(bt(e.keyframes)) : ei;
    if (It(e.inherit))
      for (; i; ) (t(e, i.vars.defaults), (i = i.parent || i._dp));
    return e;
  },
  wh = function (e, i) {
    for (var t = e.length, r = t === i.length; r && t-- && e[t] === i[t]; );
    return t < 0;
  },
  mf = function (e, i, t, r, n) {
    var s = e[r],
      o;
    if (n) for (o = i[n]; s && s[n] > o; ) s = s._prev;
    return (
      s ? ((i._next = s._next), (s._next = i)) : ((i._next = e[t]), (e[t] = i)),
      i._next ? (i._next._prev = i) : (e[r] = i),
      (i._prev = s),
      (i.parent = i._dp = e),
      i
    );
  },
  ko = function (e, i, t, r) {
    (t === void 0 && (t = "_first"), r === void 0 && (r = "_last"));
    var n = i._prev,
      s = i._next;
    (n ? (n._next = s) : e[t] === i && (e[t] = s),
      s ? (s._prev = n) : e[r] === i && (e[r] = n),
      (i._next = i._prev = i.parent = null));
  },
  fr = function (e, i) {
    (e.parent &&
      (!i || e.parent.autoRemoveChildren) &&
      e.parent.remove &&
      e.parent.remove(e),
      (e._act = 0));
  },
  kr = function (e, i) {
    if (e && (!i || i._end > e._dur || i._start < 0))
      for (var t = e; t; ) ((t._dirty = 1), (t = t.parent));
    return e;
  },
  bh = function (e) {
    for (var i = e.parent; i && i.parent; )
      ((i._dirty = 1), i.totalDuration(), (i = i.parent));
    return e;
  },
  ga = function (e, i, t, r) {
    return (
      e._startAt &&
      (ht
        ? e._startAt.revert(Us)
        : (e.vars.immediateRender && !e.vars.autoRevert) ||
          e._startAt.render(i, !0, r))
    );
  },
  Th = function a(e) {
    return !e || (e._ts && a(e.parent));
  },
  Wl = function (e) {
    return e._repeat ? gn(e._tTime, (e = e.duration() + e._rDelay)) * e : 0;
  },
  gn = function (e, i) {
    var t = Math.floor((e = je(e / i)));
    return e && t === e ? t - 1 : t;
  },
  lo = function (e, i) {
    return (
      (e - i._start) * i._ts +
      (i._ts >= 0 ? 0 : i._dirty ? i.totalDuration() : i._tDur)
    );
  },
  Po = function (e) {
    return (e._end = je(
      e._start + (e._tDur / Math.abs(e._ts || e._rts || De) || 0),
    ));
  },
  Eo = function (e, i) {
    var t = e._dp;
    return (
      t &&
        t.smoothChildTiming &&
        e._ts &&
        ((e._start = je(
          t._time -
            (e._ts > 0
              ? i / e._ts
              : ((e._dirty ? e.totalDuration() : e._tDur) - i) / -e._ts),
        )),
        Po(e),
        t._dirty || kr(t, e)),
      e
    );
  },
  yf = function (e, i) {
    var t;
    if (
      ((i._time ||
        (!i._dur && i._initted) ||
        (i._start < e._time && (i._dur || !i.add))) &&
        ((t = lo(e.rawTime(), i)),
        (!i._dur || Ts(0, i.totalDuration(), t) - i._tTime > De) &&
          i.render(t, !0)),
      kr(e, i)._dp && e._initted && e._time >= e._dur && e._ts)
    ) {
      if (e._dur < e.duration())
        for (t = e; t._dp; )
          (t.rawTime() >= 0 && t.totalTime(t._tTime), (t = t._dp));
      e._zTime = -De;
    }
  },
  Ei = function (e, i, t, r) {
    return (
      i.parent && fr(i),
      (i._start = je(
        (Vi(t) ? t : t || e !== Be ? oi(e, t, i) : e._time) + i._delay,
      )),
      (i._end = je(
        i._start + (i.totalDuration() / Math.abs(i.timeScale()) || 0),
      )),
      mf(e, i, "_first", "_last", e._sort ? "_start" : 0),
      ma(i) || (e._recent = i),
      r || yf(e, i),
      e._ts < 0 && Eo(e, e._tTime),
      e
    );
  },
  xf = function (e, i) {
    return (
      (Jt.ScrollTrigger || ol("scrollTrigger", i)) &&
      Jt.ScrollTrigger.create(i, e)
    );
  },
  vf = function (e, i, t, r, n) {
    if ((hl(e, i, n), !e._initted)) return 1;
    if (
      !t &&
      e._pt &&
      !ht &&
      ((e._dur && e.vars.lazy !== !1) || (!e._dur && e.vars.lazy)) &&
      hf !== qt.frame
    )
      return (or.push(e), (e._lazy = [n, r]), 1);
  },
  Sh = function a(e) {
    var i = e.parent;
    return i && i._ts && i._initted && !i._lock && (i.rawTime() < 0 || a(i));
  },
  ma = function (e) {
    var i = e.data;
    return i === "isFromStart" || i === "isStart";
  },
  Ch = function (e, i, t, r) {
    var n = e.ratio,
      s =
        i < 0 ||
        (!i &&
          ((!e._start && Sh(e) && !(!e._initted && ma(e))) ||
            ((e._ts < 0 || e._dp._ts < 0) && !ma(e))))
          ? 0
          : 1,
      o = e._rDelay,
      f = 0,
      u,
      c,
      h;
    if (
      (o &&
        e._repeat &&
        ((f = Ts(0, e._tDur, i)),
        (c = gn(f, o)),
        e._yoyo && c & 1 && (s = 1 - s),
        c !== gn(e._tTime, o) &&
          ((n = 1 - s), e.vars.repeatRefresh && e._initted && e.invalidate())),
      s !== n || ht || r || e._zTime === De || (!i && e._zTime))
    ) {
      if (!e._initted && vf(e, i, r, t, f)) return;
      for (
        h = e._zTime,
          e._zTime = i || (t ? De : 0),
          t || (t = i && !h),
          e.ratio = s,
          e._from && (s = 1 - s),
          e._time = 0,
          e._tTime = f,
          u = e._pt;
        u;
      )
        (u.r(s, u.d), (u = u._next));
      (i < 0 && ga(e, i, t, !0),
        e._onUpdate && !t && jt(e, "onUpdate"),
        f && e._repeat && !t && e.parent && jt(e, "onRepeat"),
        (i >= e._tDur || i < 0) &&
          e.ratio === s &&
          (s && fr(e, 1),
          !t &&
            !ht &&
            (jt(e, s ? "onComplete" : "onReverseComplete", !0),
            e._prom && e._prom())));
    } else e._zTime || (e._zTime = i);
  },
  kh = function (e, i, t) {
    var r;
    if (t > i)
      for (r = e._first; r && r._start <= t; ) {
        if (r.data === "isPause" && r._start > i) return r;
        r = r._next;
      }
    else
      for (r = e._last; r && r._start >= t; ) {
        if (r.data === "isPause" && r._start < i) return r;
        r = r._prev;
      }
  },
  mn = function (e, i, t, r) {
    var n = e._repeat,
      s = je(i) || 0,
      o = e._tTime / e._tDur;
    return (
      o && !r && (e._time *= s / e._dur),
      (e._dur = s),
      (e._tDur = n ? (n < 0 ? 1e10 : je(s * (n + 1) + e._rDelay * n)) : s),
      o > 0 && !r && Eo(e, (e._tTime = e._tDur * o)),
      e.parent && Po(e),
      t || kr(e.parent, e),
      e
    );
  },
  Hl = function (e) {
    return e instanceof Dt ? kr(e) : mn(e, e._dur);
  },
  Ph = { _start: 0, endTime: cs, totalDuration: cs },
  oi = function a(e, i, t) {
    var r = e.labels,
      n = e._recent || Ph,
      s = e.duration() >= ui ? n.endTime(!1) : e._dur,
      o,
      f,
      u;
    return ot(i) && (isNaN(i) || i in r)
      ? ((f = i.charAt(0)),
        (u = i.substr(-1) === "%"),
        (o = i.indexOf("=")),
        f === "<" || f === ">"
          ? (o >= 0 && (i = i.replace(/=/, "")),
            (f === "<" ? n._start : n.endTime(n._repeat >= 0)) +
              (parseFloat(i.substr(1)) || 0) *
                (u ? (o < 0 ? n : t).totalDuration() / 100 : 1))
          : o < 0
            ? (i in r || (r[i] = s), r[i])
            : ((f = parseFloat(i.charAt(o - 1) + i.substr(o + 1))),
              u && t && (f = (f / 100) * (bt(t) ? t[0] : t).totalDuration()),
              o > 1 ? a(e, i.substr(0, o - 1), t) + f : s + f))
      : i == null
        ? s
        : +i;
  },
  Wn = function (e, i, t) {
    var r = Vi(i[1]),
      n = (r ? 2 : 1) + (e < 2 ? 0 : 1),
      s = i[n],
      o,
      f;
    if ((r && (s.duration = i[1]), (s.parent = t), e)) {
      for (o = s, f = t; f && !("immediateRender" in o); )
        ((o = f.vars.defaults || {}), (f = It(f.vars.inherit) && f.parent));
      ((s.immediateRender = It(o.immediateRender)),
        e < 2 ? (s.runBackwards = 1) : (s.startAt = i[n - 1]));
    }
    return new Ke(i[0], s, i[n + 1]);
  },
  dr = function (e, i) {
    return e || e === 0 ? i(e) : i;
  },
  Ts = function (e, i, t) {
    return t < e ? e : t > i ? i : t;
  },
  vt = function (e, i) {
    return !ot(e) || !(i = gh.exec(e)) ? "" : i[1];
  },
  Eh = function (e, i, t) {
    return dr(t, function (r) {
      return Ts(e, i, r);
    });
  },
  ya = [].slice,
  wf = function (e, i) {
    return (
      e &&
      Ai(e) &&
      "length" in e &&
      ((!i && !e.length) || (e.length - 1 in e && Ai(e[0]))) &&
      !e.nodeType &&
      e !== Ci
    );
  },
  Mh = function (e, i, t) {
    return (
      t === void 0 && (t = []),
      e.forEach(function (r) {
        var n;
        return (ot(r) && !i) || wf(r, 1)
          ? (n = t).push.apply(n, fi(r))
          : t.push(r);
      }) || t
    );
  },
  fi = function (e, i, t) {
    return Ie && !i && Ie.selector
      ? Ie.selector(e)
      : ot(e) && !t && (pa || !yn())
        ? ya.call((i || sl).querySelectorAll(e), 0)
        : bt(e)
          ? Mh(e, t)
          : wf(e)
            ? ya.call(e, 0)
            : e
              ? [e]
              : [];
  },
  xa = function (e) {
    return (
      (e = fi(e)[0] || fs("Invalid scope") || {}),
      function (i) {
        var t = e.current || e.nativeElement || e;
        return fi(
          i,
          t.querySelectorAll
            ? t
            : t === e
              ? fs("Invalid scope") || sl.createElement("div")
              : e,
        );
      }
    );
  },
  bf = function (e) {
    return e.sort(function () {
      return 0.5 - Math.random();
    });
  },
  Tf = function (e) {
    if (Xe(e)) return e;
    var i = Ai(e) ? e : { each: e },
      t = Pr(i.ease),
      r = i.from || 0,
      n = parseFloat(i.base) || 0,
      s = {},
      o = r > 0 && r < 1,
      f = isNaN(r) || o,
      u = i.axis,
      c = r,
      h = r;
    return (
      ot(r)
        ? (c = h = { center: 0.5, edges: 0.5, end: 1 }[r] || 0)
        : !o && f && ((c = r[0]), (h = r[1])),
      function (p, l, _) {
        var d = (_ || i).length,
          g = s[d],
          m,
          x,
          v,
          T,
          y,
          k,
          C,
          P,
          E;
        if (!g) {
          if (((E = i.grid === "auto" ? 0 : (i.grid || [1, ui])[1]), !E)) {
            for (
              C = -ui;
              C < (C = _[E++].getBoundingClientRect().left) && E < d;
            );
            E < d && E--;
          }
          for (
            g = s[d] = [],
              m = f ? Math.min(E, d) * c - 0.5 : r % E,
              x = E === ui ? 0 : f ? (d * h) / E - 0.5 : (r / E) | 0,
              C = 0,
              P = ui,
              k = 0;
            k < d;
            k++
          )
            ((v = (k % E) - m),
              (T = x - ((k / E) | 0)),
              (g[k] = y = u ? Math.abs(u === "y" ? T : v) : nf(v * v + T * T)),
              y > C && (C = y),
              y < P && (P = y));
          (r === "random" && bf(g),
            (g.max = C - P),
            (g.min = P),
            (g.v = d =
              (parseFloat(i.amount) ||
                parseFloat(i.each) *
                  (E > d
                    ? d - 1
                    : u
                      ? u === "y"
                        ? d / E
                        : E
                      : Math.max(E, d / E)) ||
                0) * (r === "edges" ? -1 : 1)),
            (g.b = d < 0 ? n - d : n),
            (g.u = vt(i.amount || i.each) || 0),
            (t = t && d < 0 ? Rf(t) : t));
        }
        return (
          (d = (g[p] - g.min) / g.max || 0),
          je(g.b + (t ? t(d) : d) * g.v) + g.u
        );
      }
    );
  },
  va = function (e) {
    var i = Math.pow(10, ((e + "").split(".")[1] || "").length);
    return function (t) {
      var r = je(Math.round(parseFloat(t) / e) * e * i);
      return (r - (r % 1)) / i + (Vi(t) ? 0 : vt(t));
    };
  },
  Sf = function (e, i) {
    var t = bt(e),
      r,
      n;
    return (
      !t &&
        Ai(e) &&
        ((r = t = e.radius || ui),
        e.values
          ? ((e = fi(e.values)), (n = !Vi(e[0])) && (r *= r))
          : (e = va(e.increment))),
      dr(
        i,
        t
          ? Xe(e)
            ? function (s) {
                return ((n = e(s)), Math.abs(n - s) <= r ? n : s);
              }
            : function (s) {
                for (
                  var o = parseFloat(n ? s.x : s),
                    f = parseFloat(n ? s.y : 0),
                    u = ui,
                    c = 0,
                    h = e.length,
                    p,
                    l;
                  h--;
                )
                  (n
                    ? ((p = e[h].x - o), (l = e[h].y - f), (p = p * p + l * l))
                    : (p = Math.abs(e[h] - o)),
                    p < u && ((u = p), (c = h)));
                return (
                  (c = !r || u <= r ? e[c] : s),
                  n || c === s || Vi(s) ? c : c + vt(s)
                );
              }
          : va(e),
      )
    );
  },
  Cf = function (e, i, t, r) {
    return dr(bt(e) ? !i : t === !0 ? !!(t = 0) : !r, function () {
      return bt(e)
        ? e[~~(Math.random() * e.length)]
        : (t = t || 1e-5) &&
            (r = t < 1 ? Math.pow(10, (t + "").length - 2) : 1) &&
            Math.floor(
              Math.round((e - t / 2 + Math.random() * (i - e + t * 0.99)) / t) *
                t *
                r,
            ) / r;
    });
  },
  Dh = function () {
    for (var e = arguments.length, i = new Array(e), t = 0; t < e; t++)
      i[t] = arguments[t];
    return function (r) {
      return i.reduce(function (n, s) {
        return s(n);
      }, r);
    };
  },
  Oh = function (e, i) {
    return function (t) {
      return e(parseFloat(t)) + (i || vt(t));
    };
  },
  Ah = function (e, i, t) {
    return Pf(e, i, 0, 1, t);
  },
  kf = function (e, i, t) {
    return dr(t, function (r) {
      return e[~~i(r)];
    });
  },
  Rh = function a(e, i, t) {
    var r = i - e;
    return bt(e)
      ? kf(e, a(0, e.length), i)
      : dr(t, function (n) {
          return ((r + ((n - e) % r)) % r) + e;
        });
  },
  Lh = function a(e, i, t) {
    var r = i - e,
      n = r * 2;
    return bt(e)
      ? kf(e, a(0, e.length - 1), i)
      : dr(t, function (s) {
          return ((s = (n + ((s - e) % n)) % n || 0), e + (s > r ? n - s : s));
        });
  },
  hs = function (e) {
    for (var i = 0, t = "", r, n, s, o; ~(r = e.indexOf("random(", i)); )
      ((s = e.indexOf(")", r)),
        (o = e.charAt(r + 7) === "["),
        (n = e.substr(r + 7, s - r - 7).match(o ? lf : da)),
        (t +=
          e.substr(i, r - i) + Cf(o ? n : +n[0], o ? 0 : +n[1], +n[2] || 1e-5)),
        (i = s + 1));
    return t + e.substr(i, e.length - i);
  },
  Pf = function (e, i, t, r, n) {
    var s = i - e,
      o = r - t;
    return dr(n, function (f) {
      return t + (((f - e) / s) * o || 0);
    });
  },
  Fh = function a(e, i, t, r) {
    var n = isNaN(e + i)
      ? 0
      : function (l) {
          return (1 - l) * e + l * i;
        };
    if (!n) {
      var s = ot(e),
        o = {},
        f,
        u,
        c,
        h,
        p;
      if ((t === !0 && (r = 1) && (t = null), s))
        ((e = { p: e }), (i = { p: i }));
      else if (bt(e) && !bt(i)) {
        for (c = [], h = e.length, p = h - 2, u = 1; u < h; u++)
          c.push(a(e[u - 1], e[u]));
        (h--,
          (n = function (_) {
            _ *= h;
            var d = Math.min(p, ~~_);
            return c[d](_ - d);
          }),
          (t = i));
      } else r || (e = _n(bt(e) ? [] : {}, e));
      if (!c) {
        for (f in i) cl.call(o, e, f, "get", i[f]);
        n = function (_) {
          return _l(_, o) || (s ? e.p : e);
        };
      }
    }
    return dr(t, n);
  },
  Gl = function (e, i, t) {
    var r = e.labels,
      n = ui,
      s,
      o,
      f;
    for (s in r)
      ((o = r[s] - i),
        o < 0 == !!t && o && n > (o = Math.abs(o)) && ((f = s), (n = o)));
    return f;
  },
  jt = function (e, i, t) {
    var r = e.vars,
      n = r[i],
      s = Ie,
      o = e._ctx,
      f,
      u,
      c;
    if (n)
      return (
        (f = r[i + "Params"]),
        (u = r.callbackScope || e),
        t && or.length && oo(),
        o && (Ie = o),
        (c = f ? n.apply(u, f) : n.call(u)),
        (Ie = s),
        c
      );
  },
  On = function (e) {
    return (
      fr(e),
      e.scrollTrigger && e.scrollTrigger.kill(!!ht),
      e.progress() < 1 && jt(e, "onInterrupt"),
      e
    );
  },
  Zr,
  Ef = [],
  Mf = function (e) {
    if (e)
      if (((e = (!e.name && e.default) || e), nl() || e.headless)) {
        var i = e.name,
          t = Xe(e),
          r =
            i && !t && e.init
              ? function () {
                  this._props = [];
                }
              : e,
          n = {
            init: cs,
            render: _l,
            add: cl,
            kill: jh,
            modifier: Kh,
            rawVars: 0,
          },
          s = {
            targetTest: 0,
            get: 0,
            getSetter: pl,
            aliases: {},
            register: 0,
          };
        if ((yn(), e !== r)) {
          if (Gt[i]) return;
          (ei(r, ei(ao(e, n), s)),
            _n(r.prototype, _n(n, ao(e, s))),
            (Gt[(r.prop = i)] = r),
            e.targetTest && (qs.push(r), (al[i] = 1)),
            (i =
              (i === "css" ? "CSS" : i.charAt(0).toUpperCase() + i.substr(1)) +
              "Plugin"));
        }
        (cf(i, r), e.register && e.register($t, r, Bt));
      } else Ef.push(e);
  },
  Ee = 255,
  An = {
    aqua: [0, Ee, Ee],
    lime: [0, Ee, 0],
    silver: [192, 192, 192],
    black: [0, 0, 0],
    maroon: [128, 0, 0],
    teal: [0, 128, 128],
    blue: [0, 0, Ee],
    navy: [0, 0, 128],
    white: [Ee, Ee, Ee],
    olive: [128, 128, 0],
    yellow: [Ee, Ee, 0],
    orange: [Ee, 165, 0],
    gray: [128, 128, 128],
    purple: [128, 0, 128],
    green: [0, 128, 0],
    red: [Ee, 0, 0],
    pink: [Ee, 192, 203],
    cyan: [0, Ee, Ee],
    transparent: [Ee, Ee, Ee, 0],
  },
  Bo = function (e, i, t) {
    return (
      (e += e < 0 ? 1 : e > 1 ? -1 : 0),
      ((e * 6 < 1
        ? i + (t - i) * e * 6
        : e < 0.5
          ? t
          : e * 3 < 2
            ? i + (t - i) * (2 / 3 - e) * 6
            : i) *
        Ee +
        0.5) |
        0
    );
  },
  Df = function (e, i, t) {
    var r = e ? (Vi(e) ? [e >> 16, (e >> 8) & Ee, e & Ee] : 0) : An.black,
      n,
      s,
      o,
      f,
      u,
      c,
      h,
      p,
      l,
      _;
    if (!r) {
      if ((e.substr(-1) === "," && (e = e.substr(0, e.length - 1)), An[e]))
        r = An[e];
      else if (e.charAt(0) === "#") {
        if (
          (e.length < 6 &&
            ((n = e.charAt(1)),
            (s = e.charAt(2)),
            (o = e.charAt(3)),
            (e =
              "#" +
              n +
              n +
              s +
              s +
              o +
              o +
              (e.length === 5 ? e.charAt(4) + e.charAt(4) : ""))),
          e.length === 9)
        )
          return (
            (r = parseInt(e.substr(1, 6), 16)),
            [r >> 16, (r >> 8) & Ee, r & Ee, parseInt(e.substr(7), 16) / 255]
          );
        ((e = parseInt(e.substr(1), 16)),
          (r = [e >> 16, (e >> 8) & Ee, e & Ee]));
      } else if (e.substr(0, 3) === "hsl") {
        if (((r = _ = e.match(da)), !i))
          ((f = (+r[0] % 360) / 360),
            (u = +r[1] / 100),
            (c = +r[2] / 100),
            (s = c <= 0.5 ? c * (u + 1) : c + u - c * u),
            (n = c * 2 - s),
            r.length > 3 && (r[3] *= 1),
            (r[0] = Bo(f + 1 / 3, n, s)),
            (r[1] = Bo(f, n, s)),
            (r[2] = Bo(f - 1 / 3, n, s)));
        else if (~e.indexOf("="))
          return ((r = e.match(of)), t && r.length < 4 && (r[3] = 1), r);
      } else r = e.match(da) || An.transparent;
      r = r.map(Number);
    }
    return (
      i &&
        !_ &&
        ((n = r[0] / Ee),
        (s = r[1] / Ee),
        (o = r[2] / Ee),
        (h = Math.max(n, s, o)),
        (p = Math.min(n, s, o)),
        (c = (h + p) / 2),
        h === p
          ? (f = u = 0)
          : ((l = h - p),
            (u = c > 0.5 ? l / (2 - h - p) : l / (h + p)),
            (f =
              h === n
                ? (s - o) / l + (s < o ? 6 : 0)
                : h === s
                  ? (o - n) / l + 2
                  : (n - s) / l + 4),
            (f *= 60)),
        (r[0] = ~~(f + 0.5)),
        (r[1] = ~~(u * 100 + 0.5)),
        (r[2] = ~~(c * 100 + 0.5))),
      t && r.length < 4 && (r[3] = 1),
      r
    );
  },
  Of = function (e) {
    var i = [],
      t = [],
      r = -1;
    return (
      e.split(ar).forEach(function (n) {
        var s = n.match(jr) || [];
        (i.push.apply(i, s), t.push((r += s.length + 1)));
      }),
      (i.c = t),
      i
    );
  },
  Ul = function (e, i, t) {
    var r = "",
      n = (e + r).match(ar),
      s = i ? "hsla(" : "rgba(",
      o = 0,
      f,
      u,
      c,
      h;
    if (!n) return e;
    if (
      ((n = n.map(function (p) {
        return (
          (p = Df(p, i, 1)) &&
          s +
            (i ? p[0] + "," + p[1] + "%," + p[2] + "%," + p[3] : p.join(",")) +
            ")"
        );
      })),
      t && ((c = Of(e)), (f = t.c), f.join(r) !== c.c.join(r)))
    )
      for (u = e.replace(ar, "1").split(jr), h = u.length - 1; o < h; o++)
        r +=
          u[o] +
          (~f.indexOf(o)
            ? n.shift() || s + "0,0,0,0)"
            : (c.length ? c : n.length ? n : t).shift());
    if (!u)
      for (u = e.split(ar), h = u.length - 1; o < h; o++) r += u[o] + n[o];
    return r + u[h];
  },
  ar = (function () {
    var a =
        "(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3,4}){1,2}\\b",
      e;
    for (e in An) a += "|" + e + "\\b";
    return new RegExp(a + ")", "gi");
  })(),
  Ih = /hsl[a]?\(/,
  Af = function (e) {
    var i = e.join(" "),
      t;
    if (((ar.lastIndex = 0), ar.test(i)))
      return (
        (t = Ih.test(i)),
        (e[1] = Ul(e[1], t)),
        (e[0] = Ul(e[0], t, Of(e[1]))),
        !0
      );
  },
  ds,
  qt = (function () {
    var a = Date.now,
      e = 500,
      i = 33,
      t = a(),
      r = t,
      n = 1e3 / 240,
      s = n,
      o = [],
      f,
      u,
      c,
      h,
      p,
      l,
      _ = function d(g) {
        var m = a() - r,
          x = g === !0,
          v,
          T,
          y,
          k;
        if (
          ((m > e || m < 0) && (t += m - i),
          (r += m),
          (y = r - t),
          (v = y - s),
          (v > 0 || x) &&
            ((k = ++h.frame),
            (p = y - h.time * 1e3),
            (h.time = y = y / 1e3),
            (s += v + (v >= n ? 4 : n - v)),
            (T = 1)),
          x || (f = u(d)),
          T)
        )
          for (l = 0; l < o.length; l++) o[l](y, p, k, g);
      };
    return (
      (h = {
        time: 0,
        frame: 0,
        tick: function () {
          _(!0);
        },
        deltaRatio: function (g) {
          return p / (1e3 / (g || 60));
        },
        wake: function () {
          uf &&
            (!pa &&
              nl() &&
              ((Ci = pa = window),
              (sl = Ci.document || {}),
              (Jt.gsap = $t),
              (Ci.gsapVersions || (Ci.gsapVersions = [])).push($t.version),
              ff(so || Ci.GreenSockGlobals || (!Ci.gsap && Ci) || {}),
              Ef.forEach(Mf)),
            (c = typeof requestAnimationFrame < "u" && requestAnimationFrame),
            f && h.sleep(),
            (u =
              c ||
              function (g) {
                return setTimeout(g, (s - h.time * 1e3 + 1) | 0);
              }),
            (ds = 1),
            _(2));
        },
        sleep: function () {
          ((c ? cancelAnimationFrame : clearTimeout)(f), (ds = 0), (u = cs));
        },
        lagSmoothing: function (g, m) {
          ((e = g || 1 / 0), (i = Math.min(m || 33, e)));
        },
        fps: function (g) {
          ((n = 1e3 / (g || 240)), (s = h.time * 1e3 + n));
        },
        add: function (g, m, x) {
          var v = m
            ? function (T, y, k, C) {
                (g(T, y, k, C), h.remove(v));
              }
            : g;
          return (h.remove(g), o[x ? "unshift" : "push"](v), yn(), v);
        },
        remove: function (g, m) {
          ~(m = o.indexOf(g)) && o.splice(m, 1) && l >= m && l--;
        },
        _listeners: o,
      }),
      h
    );
  })(),
  yn = function () {
    return !ds && qt.wake();
  },
  ve = {},
  Nh = /^[\d.\-M][\d.\-,\s]/,
  Bh = /["']/g,
  zh = function (e) {
    for (
      var i = {},
        t = e.substr(1, e.length - 3).split(":"),
        r = t[0],
        n = 1,
        s = t.length,
        o,
        f,
        u;
      n < s;
      n++
    )
      ((f = t[n]),
        (o = n !== s - 1 ? f.lastIndexOf(",") : f.length),
        (u = f.substr(0, o)),
        (i[r] = isNaN(u) ? u.replace(Bh, "").trim() : +u),
        (r = f.substr(o + 1).trim()));
    return i;
  },
  $h = function (e) {
    var i = e.indexOf("(") + 1,
      t = e.indexOf(")"),
      r = e.indexOf("(", i);
    return e.substring(i, ~r && r < t ? e.indexOf(")", t + 1) : t);
  },
  Yh = function (e) {
    var i = (e + "").split("("),
      t = ve[i[0]];
    return t && i.length > 1 && t.config
      ? t.config.apply(
          null,
          ~e.indexOf("{") ? [zh(i[1])] : $h(e).split(",").map(_f),
        )
      : ve._CE && Nh.test(e)
        ? ve._CE("", e)
        : t;
  },
  Rf = function (e) {
    return function (i) {
      return 1 - e(1 - i);
    };
  },
  Lf = function a(e, i) {
    for (var t = e._first, r; t; )
      (t instanceof Dt
        ? a(t, i)
        : t.vars.yoyoEase &&
          (!t._yoyo || !t._repeat) &&
          t._yoyo !== i &&
          (t.timeline
            ? a(t.timeline, i)
            : ((r = t._ease),
              (t._ease = t._yEase),
              (t._yEase = r),
              (t._yoyo = i))),
        (t = t._next));
  },
  Pr = function (e, i) {
    return (e && (Xe(e) ? e : ve[e] || Yh(e))) || i;
  },
  $r = function (e, i, t, r) {
    (t === void 0 &&
      (t = function (f) {
        return 1 - i(1 - f);
      }),
      r === void 0 &&
        (r = function (f) {
          return f < 0.5 ? i(f * 2) / 2 : 1 - i((1 - f) * 2) / 2;
        }));
    var n = { easeIn: i, easeOut: t, easeInOut: r },
      s;
    return (
      Nt(e, function (o) {
        ((ve[o] = Jt[o] = n), (ve[(s = o.toLowerCase())] = t));
        for (var f in n)
          ve[
            s + (f === "easeIn" ? ".in" : f === "easeOut" ? ".out" : ".inOut")
          ] = ve[o + "." + f] = n[f];
      }),
      n
    );
  },
  Ff = function (e) {
    return function (i) {
      return i < 0.5 ? (1 - e(1 - i * 2)) / 2 : 0.5 + e((i - 0.5) * 2) / 2;
    };
  },
  zo = function a(e, i, t) {
    var r = i >= 1 ? i : 1,
      n = (t || (e ? 0.3 : 0.45)) / (i < 1 ? i : 1),
      s = (n / ha) * (Math.asin(1 / r) || 0),
      o = function (c) {
        return c === 1 ? 1 : r * Math.pow(2, -10 * c) * _h((c - s) * n) + 1;
      },
      f =
        e === "out"
          ? o
          : e === "in"
            ? function (u) {
                return 1 - o(1 - u);
              }
            : Ff(o);
    return (
      (n = ha / n),
      (f.config = function (u, c) {
        return a(e, u, c);
      }),
      f
    );
  },
  $o = function a(e, i) {
    i === void 0 && (i = 1.70158);
    var t = function (s) {
        return s ? --s * s * ((i + 1) * s + i) + 1 : 0;
      },
      r =
        e === "out"
          ? t
          : e === "in"
            ? function (n) {
                return 1 - t(1 - n);
              }
            : Ff(t);
    return (
      (r.config = function (n) {
        return a(e, n);
      }),
      r
    );
  };
Nt("Linear,Quad,Cubic,Quart,Quint,Strong", function (a, e) {
  var i = e < 5 ? e + 1 : e;
  $r(
    a + ",Power" + (i - 1),
    e
      ? function (t) {
          return Math.pow(t, i);
        }
      : function (t) {
          return t;
        },
    function (t) {
      return 1 - Math.pow(1 - t, i);
    },
    function (t) {
      return t < 0.5
        ? Math.pow(t * 2, i) / 2
        : 1 - Math.pow((1 - t) * 2, i) / 2;
    },
  );
});
ve.Linear.easeNone = ve.none = ve.Linear.easeIn;
$r("Elastic", zo("in"), zo("out"), zo());
(function (a, e) {
  var i = 1 / e,
    t = 2 * i,
    r = 2.5 * i,
    n = function (o) {
      return o < i
        ? a * o * o
        : o < t
          ? a * Math.pow(o - 1.5 / e, 2) + 0.75
          : o < r
            ? a * (o -= 2.25 / e) * o + 0.9375
            : a * Math.pow(o - 2.625 / e, 2) + 0.984375;
    };
  $r(
    "Bounce",
    function (s) {
      return 1 - n(1 - s);
    },
    n,
  );
})(7.5625, 2.75);
$r("Expo", function (a) {
  return Math.pow(2, 10 * (a - 1)) * a + a * a * a * a * a * a * (1 - a);
});
$r("Circ", function (a) {
  return -(nf(1 - a * a) - 1);
});
$r("Sine", function (a) {
  return a === 1 ? 1 : -ph(a * hh) + 1;
});
$r("Back", $o("in"), $o("out"), $o());
ve.SteppedEase =
  ve.steps =
  Jt.SteppedEase =
    {
      config: function (e, i) {
        e === void 0 && (e = 1);
        var t = 1 / e,
          r = e + (i ? 0 : 1),
          n = i ? 1 : 0,
          s = 1 - De;
        return function (o) {
          return (((r * Ts(0, s, o)) | 0) + n) * t;
        };
      },
    };
pn.ease = ve["quad.out"];
Nt(
  "onComplete,onUpdate,onStart,onRepeat,onReverseComplete,onInterrupt",
  function (a) {
    return (ll += a + "," + a + "Params,");
  },
);
var If = function (e, i) {
    ((this.id = dh++),
      (e._gsap = this),
      (this.target = e),
      (this.harness = i),
      (this.get = i ? i.get : df),
      (this.set = i ? i.getSetter : pl));
  },
  ps = (function () {
    function a(i) {
      ((this.vars = i),
        (this._delay = +i.delay || 0),
        (this._repeat = i.repeat === 1 / 0 ? -2 : i.repeat || 0) &&
          ((this._rDelay = i.repeatDelay || 0),
          (this._yoyo = !!i.yoyo || !!i.yoyoEase)),
        (this._ts = 1),
        mn(this, +i.duration, 1, 1),
        (this.data = i.data),
        Ie && ((this._ctx = Ie), Ie.data.push(this)),
        ds || qt.wake());
    }
    var e = a.prototype;
    return (
      (e.delay = function (t) {
        return t || t === 0
          ? (this.parent &&
              this.parent.smoothChildTiming &&
              this.startTime(this._start + t - this._delay),
            (this._delay = t),
            this)
          : this._delay;
      }),
      (e.duration = function (t) {
        return arguments.length
          ? this.totalDuration(
              this._repeat > 0 ? t + (t + this._rDelay) * this._repeat : t,
            )
          : this.totalDuration() && this._dur;
      }),
      (e.totalDuration = function (t) {
        return arguments.length
          ? ((this._dirty = 0),
            mn(
              this,
              this._repeat < 0
                ? t
                : (t - this._repeat * this._rDelay) / (this._repeat + 1),
            ))
          : this._tDur;
      }),
      (e.totalTime = function (t, r) {
        if ((yn(), !arguments.length)) return this._tTime;
        var n = this._dp;
        if (n && n.smoothChildTiming && this._ts) {
          for (Eo(this, t), !n._dp || n.parent || yf(n, this); n && n.parent; )
            (n.parent._time !==
              n._start +
                (n._ts >= 0
                  ? n._tTime / n._ts
                  : (n.totalDuration() - n._tTime) / -n._ts) &&
              n.totalTime(n._tTime, !0),
              (n = n.parent));
          !this.parent &&
            this._dp.autoRemoveChildren &&
            ((this._ts > 0 && t < this._tDur) ||
              (this._ts < 0 && t > 0) ||
              (!this._tDur && !t)) &&
            Ei(this._dp, this, this._start - this._delay);
        }
        return (
          (this._tTime !== t ||
            (!this._dur && !r) ||
            (this._initted && Math.abs(this._zTime) === De) ||
            (!t && !this._initted && (this.add || this._ptLookup))) &&
            (this._ts || (this._pTime = t), pf(this, t, r)),
          this
        );
      }),
      (e.time = function (t, r) {
        return arguments.length
          ? this.totalTime(
              Math.min(this.totalDuration(), t + Wl(this)) %
                (this._dur + this._rDelay) || (t ? this._dur : 0),
              r,
            )
          : this._time;
      }),
      (e.totalProgress = function (t, r) {
        return arguments.length
          ? this.totalTime(this.totalDuration() * t, r)
          : this.totalDuration()
            ? Math.min(1, this._tTime / this._tDur)
            : this.rawTime() >= 0 && this._initted
              ? 1
              : 0;
      }),
      (e.progress = function (t, r) {
        return arguments.length
          ? this.totalTime(
              this.duration() *
                (this._yoyo && !(this.iteration() & 1) ? 1 - t : t) +
                Wl(this),
              r,
            )
          : this.duration()
            ? Math.min(1, this._time / this._dur)
            : this.rawTime() > 0
              ? 1
              : 0;
      }),
      (e.iteration = function (t, r) {
        var n = this.duration() + this._rDelay;
        return arguments.length
          ? this.totalTime(this._time + (t - 1) * n, r)
          : this._repeat
            ? gn(this._tTime, n) + 1
            : 1;
      }),
      (e.timeScale = function (t, r) {
        if (!arguments.length) return this._rts === -De ? 0 : this._rts;
        if (this._rts === t) return this;
        var n =
          this.parent && this._ts ? lo(this.parent._time, this) : this._tTime;
        return (
          (this._rts = +t || 0),
          (this._ts = this._ps || t === -De ? 0 : this._rts),
          this.totalTime(
            Ts(-Math.abs(this._delay), this.totalDuration(), n),
            r !== !1,
          ),
          Po(this),
          bh(this)
        );
      }),
      (e.paused = function (t) {
        return arguments.length
          ? (this._ps !== t &&
              ((this._ps = t),
              t
                ? ((this._pTime =
                    this._tTime || Math.max(-this._delay, this.rawTime())),
                  (this._ts = this._act = 0))
                : (yn(),
                  (this._ts = this._rts),
                  this.totalTime(
                    this.parent && !this.parent.smoothChildTiming
                      ? this.rawTime()
                      : this._tTime || this._pTime,
                    this.progress() === 1 &&
                      Math.abs(this._zTime) !== De &&
                      (this._tTime -= De),
                  ))),
            this)
          : this._ps;
      }),
      (e.startTime = function (t) {
        if (arguments.length) {
          this._start = t;
          var r = this.parent || this._dp;
          return (
            r && (r._sort || !this.parent) && Ei(r, this, t - this._delay),
            this
          );
        }
        return this._start;
      }),
      (e.endTime = function (t) {
        return (
          this._start +
          (It(t) ? this.totalDuration() : this.duration()) /
            Math.abs(this._ts || 1)
        );
      }),
      (e.rawTime = function (t) {
        var r = this.parent || this._dp;
        return r
          ? t &&
            (!this._ts ||
              (this._repeat && this._time && this.totalProgress() < 1))
            ? this._tTime % (this._dur + this._rDelay)
            : this._ts
              ? lo(r.rawTime(t), this)
              : this._tTime
          : this._tTime;
      }),
      (e.revert = function (t) {
        t === void 0 && (t = yh);
        var r = ht;
        return (
          (ht = t),
          fl(this) &&
            (this.timeline && this.timeline.revert(t),
            this.totalTime(-0.01, t.suppressEvents)),
          this.data !== "nested" && t.kill !== !1 && this.kill(),
          (ht = r),
          this
        );
      }),
      (e.globalTime = function (t) {
        for (var r = this, n = arguments.length ? t : r.rawTime(); r; )
          ((n = r._start + n / (Math.abs(r._ts) || 1)), (r = r._dp));
        return !this.parent && this._sat ? this._sat.globalTime(t) : n;
      }),
      (e.repeat = function (t) {
        return arguments.length
          ? ((this._repeat = t === 1 / 0 ? -2 : t), Hl(this))
          : this._repeat === -2
            ? 1 / 0
            : this._repeat;
      }),
      (e.repeatDelay = function (t) {
        if (arguments.length) {
          var r = this._time;
          return ((this._rDelay = t), Hl(this), r ? this.time(r) : this);
        }
        return this._rDelay;
      }),
      (e.yoyo = function (t) {
        return arguments.length ? ((this._yoyo = t), this) : this._yoyo;
      }),
      (e.seek = function (t, r) {
        return this.totalTime(oi(this, t), It(r));
      }),
      (e.restart = function (t, r) {
        return (
          this.play().totalTime(t ? -this._delay : 0, It(r)),
          this._dur || (this._zTime = -De),
          this
        );
      }),
      (e.play = function (t, r) {
        return (t != null && this.seek(t, r), this.reversed(!1).paused(!1));
      }),
      (e.reverse = function (t, r) {
        return (
          t != null && this.seek(t || this.totalDuration(), r),
          this.reversed(!0).paused(!1)
        );
      }),
      (e.pause = function (t, r) {
        return (t != null && this.seek(t, r), this.paused(!0));
      }),
      (e.resume = function () {
        return this.paused(!1);
      }),
      (e.reversed = function (t) {
        return arguments.length
          ? (!!t !== this.reversed() &&
              this.timeScale(-this._rts || (t ? -De : 0)),
            this)
          : this._rts < 0;
      }),
      (e.invalidate = function () {
        return ((this._initted = this._act = 0), (this._zTime = -De), this);
      }),
      (e.isActive = function () {
        var t = this.parent || this._dp,
          r = this._start,
          n;
        return !!(
          !t ||
          (this._ts &&
            this._initted &&
            t.isActive() &&
            (n = t.rawTime(!0)) >= r &&
            n < this.endTime(!0) - De)
        );
      }),
      (e.eventCallback = function (t, r, n) {
        var s = this.vars;
        return arguments.length > 1
          ? (r
              ? ((s[t] = r),
                n && (s[t + "Params"] = n),
                t === "onUpdate" && (this._onUpdate = r))
              : delete s[t],
            this)
          : s[t];
      }),
      (e.then = function (t) {
        var r = this;
        return new Promise(function (n) {
          var s = Xe(t) ? t : gf,
            o = function () {
              var u = r.then;
              ((r.then = null),
                Xe(s) && (s = s(r)) && (s.then || s === r) && (r.then = u),
                n(s),
                (r.then = u));
            };
          (r._initted && r.totalProgress() === 1 && r._ts >= 0) ||
          (!r._tTime && r._ts < 0)
            ? o()
            : (r._prom = o);
        });
      }),
      (e.kill = function () {
        On(this);
      }),
      a
    );
  })();
ei(ps.prototype, {
  _time: 0,
  _start: 0,
  _end: 0,
  _tTime: 0,
  _tDur: 0,
  _dirty: 0,
  _repeat: 0,
  _yoyo: !1,
  parent: null,
  _initted: !1,
  _rDelay: 0,
  _ts: 1,
  _dp: 0,
  ratio: 0,
  _zTime: -De,
  _prom: 0,
  _ps: !1,
  _rts: 1,
});
var Dt = (function (a) {
  rf(e, a);
  function e(t, r) {
    var n;
    return (
      t === void 0 && (t = {}),
      (n = a.call(this, t) || this),
      (n.labels = {}),
      (n.smoothChildTiming = !!t.smoothChildTiming),
      (n.autoRemoveChildren = !!t.autoRemoveChildren),
      (n._sort = It(t.sortChildren)),
      Be && Ei(t.parent || Be, Li(n), r),
      t.reversed && n.reverse(),
      t.paused && n.paused(!0),
      t.scrollTrigger && xf(Li(n), t.scrollTrigger),
      n
    );
  }
  var i = e.prototype;
  return (
    (i.to = function (r, n, s) {
      return (Wn(0, arguments, this), this);
    }),
    (i.from = function (r, n, s) {
      return (Wn(1, arguments, this), this);
    }),
    (i.fromTo = function (r, n, s, o) {
      return (Wn(2, arguments, this), this);
    }),
    (i.set = function (r, n, s) {
      return (
        (n.duration = 0),
        (n.parent = this),
        Vn(n).repeatDelay || (n.repeat = 0),
        (n.immediateRender = !!n.immediateRender),
        new Ke(r, n, oi(this, s), 1),
        this
      );
    }),
    (i.call = function (r, n, s) {
      return Ei(this, Ke.delayedCall(0, r, n), s);
    }),
    (i.staggerTo = function (r, n, s, o, f, u, c) {
      return (
        (s.duration = n),
        (s.stagger = s.stagger || o),
        (s.onComplete = u),
        (s.onCompleteParams = c),
        (s.parent = this),
        new Ke(r, s, oi(this, f)),
        this
      );
    }),
    (i.staggerFrom = function (r, n, s, o, f, u, c) {
      return (
        (s.runBackwards = 1),
        (Vn(s).immediateRender = It(s.immediateRender)),
        this.staggerTo(r, n, s, o, f, u, c)
      );
    }),
    (i.staggerFromTo = function (r, n, s, o, f, u, c, h) {
      return (
        (o.startAt = s),
        (Vn(o).immediateRender = It(o.immediateRender)),
        this.staggerTo(r, n, o, f, u, c, h)
      );
    }),
    (i.render = function (r, n, s) {
      var o = this._time,
        f = this._dirty ? this.totalDuration() : this._tDur,
        u = this._dur,
        c = r <= 0 ? 0 : je(r),
        h = this._zTime < 0 != r < 0 && (this._initted || !u),
        p,
        l,
        _,
        d,
        g,
        m,
        x,
        v,
        T,
        y,
        k,
        C;
      if (
        (this !== Be && c > f && r >= 0 && (c = f), c !== this._tTime || s || h)
      ) {
        if (
          (o !== this._time &&
            u &&
            ((c += this._time - o), (r += this._time - o)),
          (p = c),
          (T = this._start),
          (v = this._ts),
          (m = !v),
          h && (u || (o = this._zTime), (r || !n) && (this._zTime = r)),
          this._repeat)
        ) {
          if (
            ((k = this._yoyo),
            (g = u + this._rDelay),
            this._repeat < -1 && r < 0)
          )
            return this.totalTime(g * 100 + r, n, s);
          if (
            ((p = je(c % g)),
            c === f
              ? ((d = this._repeat), (p = u))
              : ((y = je(c / g)),
                (d = ~~y),
                d && d === y && ((p = u), d--),
                p > u && (p = u)),
            (y = gn(this._tTime, g)),
            !o &&
              this._tTime &&
              y !== d &&
              this._tTime - y * g - this._dur <= 0 &&
              (y = d),
            k && d & 1 && ((p = u - p), (C = 1)),
            d !== y && !this._lock)
          ) {
            var P = k && y & 1,
              E = P === (k && d & 1);
            if (
              (d < y && (P = !P),
              (o = P ? 0 : c % u ? u : c),
              (this._lock = 1),
              (this.render(o || (C ? 0 : je(d * g)), n, !u)._lock = 0),
              (this._tTime = c),
              !n && this.parent && jt(this, "onRepeat"),
              this.vars.repeatRefresh && !C && (this.invalidate()._lock = 1),
              (o && o !== this._time) ||
                m !== !this._ts ||
                (this.vars.onRepeat && !this.parent && !this._act))
            )
              return this;
            if (
              ((u = this._dur),
              (f = this._tDur),
              E &&
                ((this._lock = 2),
                (o = P ? u : -1e-4),
                this.render(o, !0),
                this.vars.repeatRefresh && !C && this.invalidate()),
              (this._lock = 0),
              !this._ts && !m)
            )
              return this;
            Lf(this, C);
          }
        }
        if (
          (this._hasPause &&
            !this._forcing &&
            this._lock < 2 &&
            ((x = kh(this, je(o), je(p))), x && (c -= p - (p = x._start))),
          (this._tTime = c),
          (this._time = p),
          (this._act = !v),
          this._initted ||
            ((this._onUpdate = this.vars.onUpdate),
            (this._initted = 1),
            (this._zTime = r),
            (o = 0)),
          !o && c && !n && !y && (jt(this, "onStart"), this._tTime !== c))
        )
          return this;
        if (p >= o && r >= 0)
          for (l = this._first; l; ) {
            if (
              ((_ = l._next), (l._act || p >= l._start) && l._ts && x !== l)
            ) {
              if (l.parent !== this) return this.render(r, n, s);
              if (
                (l.render(
                  l._ts > 0
                    ? (p - l._start) * l._ts
                    : (l._dirty ? l.totalDuration() : l._tDur) +
                        (p - l._start) * l._ts,
                  n,
                  s,
                ),
                p !== this._time || (!this._ts && !m))
              ) {
                ((x = 0), _ && (c += this._zTime = -De));
                break;
              }
            }
            l = _;
          }
        else {
          l = this._last;
          for (var D = r < 0 ? r : p; l; ) {
            if (((_ = l._prev), (l._act || D <= l._end) && l._ts && x !== l)) {
              if (l.parent !== this) return this.render(r, n, s);
              if (
                (l.render(
                  l._ts > 0
                    ? (D - l._start) * l._ts
                    : (l._dirty ? l.totalDuration() : l._tDur) +
                        (D - l._start) * l._ts,
                  n,
                  s || (ht && fl(l)),
                ),
                p !== this._time || (!this._ts && !m))
              ) {
                ((x = 0), _ && (c += this._zTime = D ? -De : De));
                break;
              }
            }
            l = _;
          }
        }
        if (
          x &&
          !n &&
          (this.pause(),
          (x.render(p >= o ? 0 : -De)._zTime = p >= o ? 1 : -1),
          this._ts)
        )
          return ((this._start = T), Po(this), this.render(r, n, s));
        (this._onUpdate && !n && jt(this, "onUpdate", !0),
          ((c === f && this._tTime >= this.totalDuration()) || (!c && o)) &&
            (T === this._start || Math.abs(v) !== Math.abs(this._ts)) &&
            (this._lock ||
              ((r || !u) &&
                ((c === f && this._ts > 0) || (!c && this._ts < 0)) &&
                fr(this, 1),
              !n &&
                !(r < 0 && !o) &&
                (c || o || !f) &&
                (jt(
                  this,
                  c === f && r >= 0 ? "onComplete" : "onReverseComplete",
                  !0,
                ),
                this._prom &&
                  !(c < f && this.timeScale() > 0) &&
                  this._prom()))));
      }
      return this;
    }),
    (i.add = function (r, n) {
      var s = this;
      if ((Vi(n) || (n = oi(this, n, r)), !(r instanceof ps))) {
        if (bt(r))
          return (
            r.forEach(function (o) {
              return s.add(o, n);
            }),
            this
          );
        if (ot(r)) return this.addLabel(r, n);
        if (Xe(r)) r = Ke.delayedCall(0, r);
        else return this;
      }
      return this !== r ? Ei(this, r, n) : this;
    }),
    (i.getChildren = function (r, n, s, o) {
      (r === void 0 && (r = !0),
        n === void 0 && (n = !0),
        s === void 0 && (s = !0),
        o === void 0 && (o = -ui));
      for (var f = [], u = this._first; u; )
        (u._start >= o &&
          (u instanceof Ke
            ? n && f.push(u)
            : (s && f.push(u), r && f.push.apply(f, u.getChildren(!0, n, s)))),
          (u = u._next));
      return f;
    }),
    (i.getById = function (r) {
      for (var n = this.getChildren(1, 1, 1), s = n.length; s--; )
        if (n[s].vars.id === r) return n[s];
    }),
    (i.remove = function (r) {
      return ot(r)
        ? this.removeLabel(r)
        : Xe(r)
          ? this.killTweensOf(r)
          : (r.parent === this && ko(this, r),
            r === this._recent && (this._recent = this._last),
            kr(this));
    }),
    (i.totalTime = function (r, n) {
      return arguments.length
        ? ((this._forcing = 1),
          !this._dp &&
            this._ts &&
            (this._start = je(
              qt.time -
                (this._ts > 0
                  ? r / this._ts
                  : (this.totalDuration() - r) / -this._ts),
            )),
          a.prototype.totalTime.call(this, r, n),
          (this._forcing = 0),
          this)
        : this._tTime;
    }),
    (i.addLabel = function (r, n) {
      return ((this.labels[r] = oi(this, n)), this);
    }),
    (i.removeLabel = function (r) {
      return (delete this.labels[r], this);
    }),
    (i.addPause = function (r, n, s) {
      var o = Ke.delayedCall(0, n || cs, s);
      return (
        (o.data = "isPause"),
        (this._hasPause = 1),
        Ei(this, o, oi(this, r))
      );
    }),
    (i.removePause = function (r) {
      var n = this._first;
      for (r = oi(this, r); n; )
        (n._start === r && n.data === "isPause" && fr(n), (n = n._next));
    }),
    (i.killTweensOf = function (r, n, s) {
      for (var o = this.getTweensOf(r, s), f = o.length; f--; )
        er !== o[f] && o[f].kill(r, n);
      return this;
    }),
    (i.getTweensOf = function (r, n) {
      for (var s = [], o = fi(r), f = this._first, u = Vi(n), c; f; )
        (f instanceof Ke
          ? xh(f._targets, o) &&
            (u
              ? (!er || (f._initted && f._ts)) &&
                f.globalTime(0) <= n &&
                f.globalTime(f.totalDuration()) > n
              : !n || f.isActive()) &&
            s.push(f)
          : (c = f.getTweensOf(o, n)).length && s.push.apply(s, c),
          (f = f._next));
      return s;
    }),
    (i.tweenTo = function (r, n) {
      n = n || {};
      var s = this,
        o = oi(s, r),
        f = n,
        u = f.startAt,
        c = f.onStart,
        h = f.onStartParams,
        p = f.immediateRender,
        l,
        _ = Ke.to(
          s,
          ei(
            {
              ease: n.ease || "none",
              lazy: !1,
              immediateRender: !1,
              time: o,
              overwrite: "auto",
              duration:
                n.duration ||
                Math.abs(
                  (o - (u && "time" in u ? u.time : s._time)) / s.timeScale(),
                ) ||
                De,
              onStart: function () {
                if ((s.pause(), !l)) {
                  var g =
                    n.duration ||
                    Math.abs(
                      (o - (u && "time" in u ? u.time : s._time)) /
                        s.timeScale(),
                    );
                  (_._dur !== g && mn(_, g, 0, 1).render(_._time, !0, !0),
                    (l = 1));
                }
                c && c.apply(_, h || []);
              },
            },
            n,
          ),
        );
      return p ? _.render(0) : _;
    }),
    (i.tweenFromTo = function (r, n, s) {
      return this.tweenTo(n, ei({ startAt: { time: oi(this, r) } }, s));
    }),
    (i.recent = function () {
      return this._recent;
    }),
    (i.nextLabel = function (r) {
      return (r === void 0 && (r = this._time), Gl(this, oi(this, r)));
    }),
    (i.previousLabel = function (r) {
      return (r === void 0 && (r = this._time), Gl(this, oi(this, r), 1));
    }),
    (i.currentLabel = function (r) {
      return arguments.length
        ? this.seek(r, !0)
        : this.previousLabel(this._time + De);
    }),
    (i.shiftChildren = function (r, n, s) {
      s === void 0 && (s = 0);
      for (var o = this._first, f = this.labels, u; o; )
        (o._start >= s && ((o._start += r), (o._end += r)), (o = o._next));
      if (n) for (u in f) f[u] >= s && (f[u] += r);
      return kr(this);
    }),
    (i.invalidate = function (r) {
      var n = this._first;
      for (this._lock = 0; n; ) (n.invalidate(r), (n = n._next));
      return a.prototype.invalidate.call(this, r);
    }),
    (i.clear = function (r) {
      r === void 0 && (r = !0);
      for (var n = this._first, s; n; )
        ((s = n._next), this.remove(n), (n = s));
      return (
        this._dp && (this._time = this._tTime = this._pTime = 0),
        r && (this.labels = {}),
        kr(this)
      );
    }),
    (i.totalDuration = function (r) {
      var n = 0,
        s = this,
        o = s._last,
        f = ui,
        u,
        c,
        h;
      if (arguments.length)
        return s.timeScale(
          (s._repeat < 0 ? s.duration() : s.totalDuration()) /
            (s.reversed() ? -r : r),
        );
      if (s._dirty) {
        for (h = s.parent; o; )
          ((u = o._prev),
            o._dirty && o.totalDuration(),
            (c = o._start),
            c > f && s._sort && o._ts && !s._lock
              ? ((s._lock = 1), (Ei(s, o, c - o._delay, 1)._lock = 0))
              : (f = c),
            c < 0 &&
              o._ts &&
              ((n -= c),
              ((!h && !s._dp) || (h && h.smoothChildTiming)) &&
                ((s._start += c / s._ts), (s._time -= c), (s._tTime -= c)),
              s.shiftChildren(-c, !1, -1 / 0),
              (f = 0)),
            o._end > n && o._ts && (n = o._end),
            (o = u));
        (mn(s, s === Be && s._time > n ? s._time : n, 1, 1), (s._dirty = 0));
      }
      return s._tDur;
    }),
    (e.updateRoot = function (r) {
      if ((Be._ts && (pf(Be, lo(r, Be)), (hf = qt.frame)), qt.frame >= Xl)) {
        Xl += Zt.autoSleep || 120;
        var n = Be._first;
        if ((!n || !n._ts) && Zt.autoSleep && qt._listeners.length < 2) {
          for (; n && !n._ts; ) n = n._next;
          n || qt.sleep();
        }
      }
    }),
    e
  );
})(ps);
ei(Dt.prototype, { _lock: 0, _hasPause: 0, _forcing: 0 });
var Xh = function (e, i, t, r, n, s, o) {
    var f = new Bt(this._pt, e, i, 0, 1, Xf, null, n),
      u = 0,
      c = 0,
      h,
      p,
      l,
      _,
      d,
      g,
      m,
      x;
    for (
      f.b = t,
        f.e = r,
        t += "",
        r += "",
        (m = ~r.indexOf("random(")) && (r = hs(r)),
        s && ((x = [t, r]), s(x, e, i), (t = x[0]), (r = x[1])),
        p = t.match(Io) || [];
      (h = Io.exec(r));
    )
      ((_ = h[0]),
        (d = r.substring(u, h.index)),
        l ? (l = (l + 1) % 5) : d.substr(-5) === "rgba(" && (l = 1),
        _ !== p[c++] &&
          ((g = parseFloat(p[c - 1]) || 0),
          (f._pt = {
            _next: f._pt,
            p: d || c === 1 ? d : ",",
            s: g,
            c: _.charAt(1) === "=" ? nn(g, _) - g : parseFloat(_) - g,
            m: l && l < 4 ? Math.round : 0,
          }),
          (u = Io.lastIndex)));
    return (
      (f.c = u < r.length ? r.substring(u, r.length) : ""),
      (f.fp = o),
      (af.test(r) || m) && (f.e = 0),
      (this._pt = f),
      f
    );
  },
  cl = function (e, i, t, r, n, s, o, f, u, c) {
    Xe(r) && (r = r(n || 0, e, s));
    var h = e[i],
      p =
        t !== "get"
          ? t
          : Xe(h)
            ? u
              ? e[
                  i.indexOf("set") || !Xe(e["get" + i.substr(3)])
                    ? i
                    : "get" + i.substr(3)
                ](u)
              : e[i]()
            : h,
      l = Xe(h) ? (u ? Uh : $f) : dl,
      _;
    if (
      (ot(r) &&
        (~r.indexOf("random(") && (r = hs(r)),
        r.charAt(1) === "=" &&
          ((_ = nn(p, r) + (vt(p) || 0)), (_ || _ === 0) && (r = _))),
      !c || p !== r || wa)
    )
      return !isNaN(p * r) && r !== ""
        ? ((_ = new Bt(
            this._pt,
            e,
            i,
            +p || 0,
            r - (p || 0),
            typeof h == "boolean" ? Qh : Yf,
            0,
            l,
          )),
          u && (_.fp = u),
          o && _.modifier(o, this, e),
          (this._pt = _))
        : (!h && !(i in e) && ol(i, r),
          Xh.call(this, e, i, p, r, l, f || Zt.stringFilter, u));
  },
  Vh = function (e, i, t, r, n) {
    if (
      (Xe(e) && (e = Hn(e, n, i, t, r)),
      !Ai(e) || (e.style && e.nodeType) || bt(e) || sf(e))
    )
      return ot(e) ? Hn(e, n, i, t, r) : e;
    var s = {},
      o;
    for (o in e) s[o] = Hn(e[o], n, i, t, r);
    return s;
  },
  Nf = function (e, i, t, r, n, s) {
    var o, f, u, c;
    if (
      Gt[e] &&
      (o = new Gt[e]()).init(
        n,
        o.rawVars ? i[e] : Vh(i[e], r, n, s, t),
        t,
        r,
        s,
      ) !== !1 &&
      ((t._pt = f = new Bt(t._pt, n, e, 0, 1, o.render, o, 0, o.priority)),
      t !== Zr)
    )
      for (u = t._ptLookup[t._targets.indexOf(n)], c = o._props.length; c--; )
        u[o._props[c]] = f;
    return o;
  },
  er,
  wa,
  hl = function a(e, i, t) {
    var r = e.vars,
      n = r.ease,
      s = r.startAt,
      o = r.immediateRender,
      f = r.lazy,
      u = r.onUpdate,
      c = r.runBackwards,
      h = r.yoyoEase,
      p = r.keyframes,
      l = r.autoRevert,
      _ = e._dur,
      d = e._startAt,
      g = e._targets,
      m = e.parent,
      x = m && m.data === "nested" ? m.vars.targets : g,
      v = e._overwrite === "auto" && !il,
      T = e.timeline,
      y,
      k,
      C,
      P,
      E,
      D,
      F,
      R,
      L,
      V,
      z,
      X,
      $;
    if (
      (T && (!p || !n) && (n = "none"),
      (e._ease = Pr(n, pn.ease)),
      (e._yEase = h ? Rf(Pr(h === !0 ? n : h, pn.ease)) : 0),
      h &&
        e._yoyo &&
        !e._repeat &&
        ((h = e._yEase), (e._yEase = e._ease), (e._ease = h)),
      (e._from = !T && !!r.runBackwards),
      !T || (p && !r.stagger))
    ) {
      if (
        ((R = g[0] ? Cr(g[0]).harness : 0),
        (X = R && r[R.prop]),
        (y = ao(r, al)),
        d &&
          (d._zTime < 0 && d.progress(1),
          i < 0 && c && o && !l ? d.render(-1, !0) : d.revert(c && _ ? Us : mh),
          (d._lazy = 0)),
        s)
      ) {
        if (
          (fr(
            (e._startAt = Ke.set(
              g,
              ei(
                {
                  data: "isStart",
                  overwrite: !1,
                  parent: m,
                  immediateRender: !0,
                  lazy: !d && It(f),
                  startAt: null,
                  delay: 0,
                  onUpdate:
                    u &&
                    function () {
                      return jt(e, "onUpdate");
                    },
                  stagger: 0,
                },
                s,
              ),
            )),
          ),
          (e._startAt._dp = 0),
          (e._startAt._sat = e),
          i < 0 && (ht || (!o && !l)) && e._startAt.revert(Us),
          o && _ && i <= 0 && t <= 0)
        ) {
          i && (e._zTime = i);
          return;
        }
      } else if (c && _ && !d) {
        if (
          (i && (o = !1),
          (C = ei(
            {
              overwrite: !1,
              data: "isFromStart",
              lazy: o && !d && It(f),
              immediateRender: o,
              stagger: 0,
              parent: m,
            },
            y,
          )),
          X && (C[R.prop] = X),
          fr((e._startAt = Ke.set(g, C))),
          (e._startAt._dp = 0),
          (e._startAt._sat = e),
          i < 0 && (ht ? e._startAt.revert(Us) : e._startAt.render(-1, !0)),
          (e._zTime = i),
          !o)
        )
          a(e._startAt, De, De);
        else if (!i) return;
      }
      for (
        e._pt = e._ptCache = 0, f = (_ && It(f)) || (f && !_), k = 0;
        k < g.length;
        k++
      ) {
        if (
          ((E = g[k]),
          (F = E._gsap || ul(g)[k]._gsap),
          (e._ptLookup[k] = V = {}),
          _a[F.id] && or.length && oo(),
          (z = x === g ? k : x.indexOf(E)),
          R &&
            (L = new R()).init(E, X || y, e, z, x) !== !1 &&
            ((e._pt = P =
              new Bt(e._pt, E, L.name, 0, 1, L.render, L, 0, L.priority)),
            L._props.forEach(function (J) {
              V[J] = P;
            }),
            L.priority && (D = 1)),
          !R || X)
        )
          for (C in y)
            Gt[C] && (L = Nf(C, y, e, z, E, x))
              ? L.priority && (D = 1)
              : (V[C] = P =
                  cl.call(e, E, C, "get", y[C], z, x, 0, r.stringFilter));
        (e._op && e._op[k] && e.kill(E, e._op[k]),
          v &&
            e._pt &&
            ((er = e),
            Be.killTweensOf(E, V, e.globalTime(i)),
            ($ = !e.parent),
            (er = 0)),
          e._pt && f && (_a[F.id] = 1));
      }
      (D && Vf(e), e._onInit && e._onInit(e));
    }
    ((e._onUpdate = u),
      (e._initted = (!e._op || e._pt) && !$),
      p && i <= 0 && T.render(ui, !0, !0));
  },
  Wh = function (e, i, t, r, n, s, o, f) {
    var u = ((e._pt && e._ptCache) || (e._ptCache = {}))[i],
      c,
      h,
      p,
      l;
    if (!u)
      for (
        u = e._ptCache[i] = [], p = e._ptLookup, l = e._targets.length;
        l--;
      ) {
        if (((c = p[l][i]), c && c.d && c.d._pt))
          for (c = c.d._pt; c && c.p !== i && c.fp !== i; ) c = c._next;
        if (!c)
          return (
            (wa = 1),
            (e.vars[i] = "+=0"),
            hl(e, o),
            (wa = 0),
            f ? fs(i + " not eligible for reset") : 1
          );
        u.push(c);
      }
    for (l = u.length; l--; )
      ((h = u[l]),
        (c = h._pt || h),
        (c.s = (r || r === 0) && !n ? r : c.s + (r || 0) + s * c.c),
        (c.c = t - c.s),
        h.e && (h.e = He(t) + vt(h.e)),
        h.b && (h.b = c.s + vt(h.b)));
  },
  Hh = function (e, i) {
    var t = e[0] ? Cr(e[0]).harness : 0,
      r = t && t.aliases,
      n,
      s,
      o,
      f;
    if (!r) return i;
    n = _n({}, i);
    for (s in r)
      if (s in n) for (f = r[s].split(","), o = f.length; o--; ) n[f[o]] = n[s];
    return n;
  },
  Gh = function (e, i, t, r) {
    var n = i.ease || r || "power1.inOut",
      s,
      o;
    if (bt(i))
      ((o = t[e] || (t[e] = [])),
        i.forEach(function (f, u) {
          return o.push({ t: (u / (i.length - 1)) * 100, v: f, e: n });
        }));
    else
      for (s in i)
        ((o = t[s] || (t[s] = [])),
          s === "ease" || o.push({ t: parseFloat(e), v: i[s], e: n }));
  },
  Hn = function (e, i, t, r, n) {
    return Xe(e)
      ? e.call(i, t, r, n)
      : ot(e) && ~e.indexOf("random(")
        ? hs(e)
        : e;
  },
  Bf = ll + "repeat,repeatDelay,yoyo,repeatRefresh,yoyoEase,autoRevert",
  zf = {};
Nt(Bf + ",id,stagger,delay,duration,paused,scrollTrigger", function (a) {
  return (zf[a] = 1);
});
var Ke = (function (a) {
  rf(e, a);
  function e(t, r, n, s) {
    var o;
    (typeof r == "number" && ((n.duration = r), (r = n), (n = null)),
      (o = a.call(this, s ? r : Vn(r)) || this));
    var f = o.vars,
      u = f.duration,
      c = f.delay,
      h = f.immediateRender,
      p = f.stagger,
      l = f.overwrite,
      _ = f.keyframes,
      d = f.defaults,
      g = f.scrollTrigger,
      m = f.yoyoEase,
      x = r.parent || Be,
      v = (bt(t) || sf(t) ? Vi(t[0]) : "length" in r) ? [t] : fi(t),
      T,
      y,
      k,
      C,
      P,
      E,
      D,
      F;
    if (
      ((o._targets = v.length
        ? ul(v)
        : fs(
            "GSAP target " + t + " not found. https://gsap.com",
            !Zt.nullTargetWarn,
          ) || []),
      (o._ptLookup = []),
      (o._overwrite = l),
      _ || p || Ps(u) || Ps(c))
    ) {
      if (
        ((r = o.vars),
        (T = o.timeline =
          new Dt({
            data: "nested",
            defaults: d || {},
            targets: x && x.data === "nested" ? x.vars.targets : v,
          })),
        T.kill(),
        (T.parent = T._dp = Li(o)),
        (T._start = 0),
        p || Ps(u) || Ps(c))
      ) {
        if (((C = v.length), (D = p && Tf(p)), Ai(p)))
          for (P in p) ~Bf.indexOf(P) && (F || (F = {}), (F[P] = p[P]));
        for (y = 0; y < C; y++)
          ((k = ao(r, zf)),
            (k.stagger = 0),
            m && (k.yoyoEase = m),
            F && _n(k, F),
            (E = v[y]),
            (k.duration = +Hn(u, Li(o), y, E, v)),
            (k.delay = (+Hn(c, Li(o), y, E, v) || 0) - o._delay),
            !p &&
              C === 1 &&
              k.delay &&
              ((o._delay = c = k.delay), (o._start += c), (k.delay = 0)),
            T.to(E, k, D ? D(y, E, v) : 0),
            (T._ease = ve.none));
        T.duration() ? (u = c = 0) : (o.timeline = 0);
      } else if (_) {
        (Vn(ei(T.vars.defaults, { ease: "none" })),
          (T._ease = Pr(_.ease || r.ease || "none")));
        var R = 0,
          L,
          V,
          z;
        if (bt(_))
          (_.forEach(function (X) {
            return T.to(v, X, ">");
          }),
            T.duration());
        else {
          k = {};
          for (P in _)
            P === "ease" || P === "easeEach" || Gh(P, _[P], k, _.easeEach);
          for (P in k)
            for (
              L = k[P].sort(function (X, $) {
                return X.t - $.t;
              }),
                R = 0,
                y = 0;
              y < L.length;
              y++
            )
              ((V = L[y]),
                (z = {
                  ease: V.e,
                  duration: ((V.t - (y ? L[y - 1].t : 0)) / 100) * u,
                }),
                (z[P] = V.v),
                T.to(v, z, R),
                (R += z.duration));
          T.duration() < u && T.to({}, { duration: u - T.duration() });
        }
      }
      u || o.duration((u = T.duration()));
    } else o.timeline = 0;
    return (
      l === !0 && !il && ((er = Li(o)), Be.killTweensOf(v), (er = 0)),
      Ei(x, Li(o), n),
      r.reversed && o.reverse(),
      r.paused && o.paused(!0),
      (h ||
        (!u &&
          !_ &&
          o._start === je(x._time) &&
          It(h) &&
          Th(Li(o)) &&
          x.data !== "nested")) &&
        ((o._tTime = -De), o.render(Math.max(0, -c) || 0)),
      g && xf(Li(o), g),
      o
    );
  }
  var i = e.prototype;
  return (
    (i.render = function (r, n, s) {
      var o = this._time,
        f = this._tDur,
        u = this._dur,
        c = r < 0,
        h = r > f - De && !c ? f : r < De ? 0 : r,
        p,
        l,
        _,
        d,
        g,
        m,
        x,
        v,
        T;
      if (!u) Ch(this, r, n, s);
      else if (
        h !== this._tTime ||
        !r ||
        s ||
        (!this._initted && this._tTime) ||
        (this._startAt && this._zTime < 0 !== c) ||
        this._lazy
      ) {
        if (((p = h), (v = this.timeline), this._repeat)) {
          if (((d = u + this._rDelay), this._repeat < -1 && c))
            return this.totalTime(d * 100 + r, n, s);
          if (
            ((p = je(h % d)),
            h === f
              ? ((_ = this._repeat), (p = u))
              : ((g = je(h / d)),
                (_ = ~~g),
                _ && _ === g ? ((p = u), _--) : p > u && (p = u)),
            (m = this._yoyo && _ & 1),
            m && ((T = this._yEase), (p = u - p)),
            (g = gn(this._tTime, d)),
            p === o && !s && this._initted && _ === g)
          )
            return ((this._tTime = h), this);
          _ !== g &&
            (v && this._yEase && Lf(v, m),
            this.vars.repeatRefresh &&
              !m &&
              !this._lock &&
              p !== d &&
              this._initted &&
              ((this._lock = s = 1),
              (this.render(je(d * _), !0).invalidate()._lock = 0)));
        }
        if (!this._initted) {
          if (vf(this, c ? r : p, s, n, h)) return ((this._tTime = 0), this);
          if (o !== this._time && !(s && this.vars.repeatRefresh && _ !== g))
            return this;
          if (u !== this._dur) return this.render(r, n, s);
        }
        if (
          ((this._tTime = h),
          (this._time = p),
          !this._act && this._ts && ((this._act = 1), (this._lazy = 0)),
          (this.ratio = x = (T || this._ease)(p / u)),
          this._from && (this.ratio = x = 1 - x),
          !o && h && !n && !g && (jt(this, "onStart"), this._tTime !== h))
        )
          return this;
        for (l = this._pt; l; ) (l.r(x, l.d), (l = l._next));
        ((v && v.render(r < 0 ? r : v._dur * v._ease(p / this._dur), n, s)) ||
          (this._startAt && (this._zTime = r)),
          this._onUpdate &&
            !n &&
            (c && ga(this, r, n, s), jt(this, "onUpdate")),
          this._repeat &&
            _ !== g &&
            this.vars.onRepeat &&
            !n &&
            this.parent &&
            jt(this, "onRepeat"),
          (h === this._tDur || !h) &&
            this._tTime === h &&
            (c && !this._onUpdate && ga(this, r, !0, !0),
            (r || !u) &&
              ((h === this._tDur && this._ts > 0) || (!h && this._ts < 0)) &&
              fr(this, 1),
            !n &&
              !(c && !o) &&
              (h || o || m) &&
              (jt(this, h === f ? "onComplete" : "onReverseComplete", !0),
              this._prom && !(h < f && this.timeScale() > 0) && this._prom())));
      }
      return this;
    }),
    (i.targets = function () {
      return this._targets;
    }),
    (i.invalidate = function (r) {
      return (
        (!r || !this.vars.runBackwards) && (this._startAt = 0),
        (this._pt = this._op = this._onUpdate = this._lazy = this.ratio = 0),
        (this._ptLookup = []),
        this.timeline && this.timeline.invalidate(r),
        a.prototype.invalidate.call(this, r)
      );
    }),
    (i.resetTo = function (r, n, s, o, f) {
      (ds || qt.wake(), this._ts || this.play());
      var u = Math.min(this._dur, (this._dp._time - this._start) * this._ts),
        c;
      return (
        this._initted || hl(this, u),
        (c = this._ease(u / this._dur)),
        Wh(this, r, n, s, o, c, u, f)
          ? this.resetTo(r, n, s, o, 1)
          : (Eo(this, 0),
            this.parent ||
              mf(
                this._dp,
                this,
                "_first",
                "_last",
                this._dp._sort ? "_start" : 0,
              ),
            this.render(0))
      );
    }),
    (i.kill = function (r, n) {
      if ((n === void 0 && (n = "all"), !r && (!n || n === "all")))
        return (
          (this._lazy = this._pt = 0),
          this.parent
            ? On(this)
            : this.scrollTrigger && this.scrollTrigger.kill(!!ht),
          this
        );
      if (this.timeline) {
        var s = this.timeline.totalDuration();
        return (
          this.timeline.killTweensOf(r, n, er && er.vars.overwrite !== !0)
            ._first || On(this),
          this.parent &&
            s !== this.timeline.totalDuration() &&
            mn(this, (this._dur * this.timeline._tDur) / s, 0, 1),
          this
        );
      }
      var o = this._targets,
        f = r ? fi(r) : o,
        u = this._ptLookup,
        c = this._pt,
        h,
        p,
        l,
        _,
        d,
        g,
        m;
      if ((!n || n === "all") && wh(o, f))
        return (n === "all" && (this._pt = 0), On(this));
      for (
        h = this._op = this._op || [],
          n !== "all" &&
            (ot(n) &&
              ((d = {}),
              Nt(n, function (x) {
                return (d[x] = 1);
              }),
              (n = d)),
            (n = Hh(o, n))),
          m = o.length;
        m--;
      )
        if (~f.indexOf(o[m])) {
          ((p = u[m]),
            n === "all"
              ? ((h[m] = n), (_ = p), (l = {}))
              : ((l = h[m] = h[m] || {}), (_ = n)));
          for (d in _)
            ((g = p && p[d]),
              g &&
                ((!("kill" in g.d) || g.d.kill(d) === !0) && ko(this, g, "_pt"),
                delete p[d]),
              l !== "all" && (l[d] = 1));
        }
      return (this._initted && !this._pt && c && On(this), this);
    }),
    (e.to = function (r, n) {
      return new e(r, n, arguments[2]);
    }),
    (e.from = function (r, n) {
      return Wn(1, arguments);
    }),
    (e.delayedCall = function (r, n, s, o) {
      return new e(n, 0, {
        immediateRender: !1,
        lazy: !1,
        overwrite: !1,
        delay: r,
        onComplete: n,
        onReverseComplete: n,
        onCompleteParams: s,
        onReverseCompleteParams: s,
        callbackScope: o,
      });
    }),
    (e.fromTo = function (r, n, s) {
      return Wn(2, arguments);
    }),
    (e.set = function (r, n) {
      return ((n.duration = 0), n.repeatDelay || (n.repeat = 0), new e(r, n));
    }),
    (e.killTweensOf = function (r, n, s) {
      return Be.killTweensOf(r, n, s);
    }),
    e
  );
})(ps);
ei(Ke.prototype, { _targets: [], _lazy: 0, _startAt: 0, _op: 0, _onInit: 0 });
Nt("staggerTo,staggerFrom,staggerFromTo", function (a) {
  Ke[a] = function () {
    var e = new Dt(),
      i = ya.call(arguments, 0);
    return (i.splice(a === "staggerFromTo" ? 5 : 4, 0, 0), e[a].apply(e, i));
  };
});
var dl = function (e, i, t) {
    return (e[i] = t);
  },
  $f = function (e, i, t) {
    return e[i](t);
  },
  Uh = function (e, i, t, r) {
    return e[i](r.fp, t);
  },
  qh = function (e, i, t) {
    return e.setAttribute(i, t);
  },
  pl = function (e, i) {
    return Xe(e[i]) ? $f : rl(e[i]) && e.setAttribute ? qh : dl;
  },
  Yf = function (e, i) {
    return i.set(i.t, i.p, Math.round((i.s + i.c * e) * 1e6) / 1e6, i);
  },
  Qh = function (e, i) {
    return i.set(i.t, i.p, !!(i.s + i.c * e), i);
  },
  Xf = function (e, i) {
    var t = i._pt,
      r = "";
    if (!e && i.b) r = i.b;
    else if (e === 1 && i.e) r = i.e;
    else {
      for (; t; )
        ((r =
          t.p +
          (t.m ? t.m(t.s + t.c * e) : Math.round((t.s + t.c * e) * 1e4) / 1e4) +
          r),
          (t = t._next));
      r += i.c;
    }
    i.set(i.t, i.p, r, i);
  },
  _l = function (e, i) {
    for (var t = i._pt; t; ) (t.r(e, t.d), (t = t._next));
  },
  Kh = function (e, i, t, r) {
    for (var n = this._pt, s; n; )
      ((s = n._next), n.p === r && n.modifier(e, i, t), (n = s));
  },
  jh = function (e) {
    for (var i = this._pt, t, r; i; )
      ((r = i._next),
        (i.p === e && !i.op) || i.op === e
          ? ko(this, i, "_pt")
          : i.dep || (t = 1),
        (i = r));
    return !t;
  },
  Zh = function (e, i, t, r) {
    r.mSet(e, i, r.m.call(r.tween, t, r.mt), r);
  },
  Vf = function (e) {
    for (var i = e._pt, t, r, n, s; i; ) {
      for (t = i._next, r = n; r && r.pr > i.pr; ) r = r._next;
      ((i._prev = r ? r._prev : s) ? (i._prev._next = i) : (n = i),
        (i._next = r) ? (r._prev = i) : (s = i),
        (i = t));
    }
    e._pt = n;
  },
  Bt = (function () {
    function a(i, t, r, n, s, o, f, u, c) {
      ((this.t = t),
        (this.s = n),
        (this.c = s),
        (this.p = r),
        (this.r = o || Yf),
        (this.d = f || this),
        (this.set = u || dl),
        (this.pr = c || 0),
        (this._next = i),
        i && (i._prev = this));
    }
    var e = a.prototype;
    return (
      (e.modifier = function (t, r, n) {
        ((this.mSet = this.mSet || this.set),
          (this.set = Zh),
          (this.m = t),
          (this.mt = n),
          (this.tween = r));
      }),
      a
    );
  })();
Nt(
  ll +
    "parent,duration,ease,delay,overwrite,runBackwards,startAt,yoyo,immediateRender,repeat,repeatDelay,data,paused,reversed,lazy,callbackScope,stringFilter,id,yoyoEase,stagger,inherit,repeatRefresh,keyframes,autoRevert,scrollTrigger",
  function (a) {
    return (al[a] = 1);
  },
);
Jt.TweenMax = Jt.TweenLite = Ke;
Jt.TimelineLite = Jt.TimelineMax = Dt;
Be = new Dt({
  sortChildren: !1,
  defaults: pn,
  autoRemoveChildren: !0,
  id: "root",
  smoothChildTiming: !0,
});
Zt.stringFilter = Af;
var Er = [],
  Qs = {},
  Jh = [],
  ql = 0,
  ed = 0,
  Yo = function (e) {
    return (Qs[e] || Jh).map(function (i) {
      return i();
    });
  },
  ba = function () {
    var e = Date.now(),
      i = [];
    e - ql > 2 &&
      (Yo("matchMediaInit"),
      Er.forEach(function (t) {
        var r = t.queries,
          n = t.conditions,
          s,
          o,
          f,
          u;
        for (o in r)
          ((s = Ci.matchMedia(r[o]).matches),
            s && (f = 1),
            s !== n[o] && ((n[o] = s), (u = 1)));
        u && (t.revert(), f && i.push(t));
      }),
      Yo("matchMediaRevert"),
      i.forEach(function (t) {
        return t.onMatch(t, function (r) {
          return t.add(null, r);
        });
      }),
      (ql = e),
      Yo("matchMedia"));
  },
  Wf = (function () {
    function a(i, t) {
      ((this.selector = t && xa(t)),
        (this.data = []),
        (this._r = []),
        (this.isReverted = !1),
        (this.id = ed++),
        i && this.add(i));
    }
    var e = a.prototype;
    return (
      (e.add = function (t, r, n) {
        Xe(t) && ((n = r), (r = t), (t = Xe));
        var s = this,
          o = function () {
            var u = Ie,
              c = s.selector,
              h;
            return (
              u && u !== s && u.data.push(s),
              n && (s.selector = xa(n)),
              (Ie = s),
              (h = r.apply(s, arguments)),
              Xe(h) && s._r.push(h),
              (Ie = u),
              (s.selector = c),
              (s.isReverted = !1),
              h
            );
          };
        return (
          (s.last = o),
          t === Xe
            ? o(s, function (f) {
                return s.add(null, f);
              })
            : t
              ? (s[t] = o)
              : o
        );
      }),
      (e.ignore = function (t) {
        var r = Ie;
        ((Ie = null), t(this), (Ie = r));
      }),
      (e.getTweens = function () {
        var t = [];
        return (
          this.data.forEach(function (r) {
            return r instanceof a
              ? t.push.apply(t, r.getTweens())
              : r instanceof Ke &&
                  !(r.parent && r.parent.data === "nested") &&
                  t.push(r);
          }),
          t
        );
      }),
      (e.clear = function () {
        this._r.length = this.data.length = 0;
      }),
      (e.kill = function (t, r) {
        var n = this;
        if (
          (t
            ? (function () {
                for (var o = n.getTweens(), f = n.data.length, u; f--; )
                  ((u = n.data[f]),
                    u.data === "isFlip" &&
                      (u.revert(),
                      u.getChildren(!0, !0, !1).forEach(function (c) {
                        return o.splice(o.indexOf(c), 1);
                      })));
                for (
                  o
                    .map(function (c) {
                      return {
                        g:
                          c._dur ||
                          c._delay ||
                          (c._sat && !c._sat.vars.immediateRender)
                            ? c.globalTime(0)
                            : -1 / 0,
                        t: c,
                      };
                    })
                    .sort(function (c, h) {
                      return h.g - c.g || -1 / 0;
                    })
                    .forEach(function (c) {
                      return c.t.revert(t);
                    }),
                    f = n.data.length;
                  f--;
                )
                  ((u = n.data[f]),
                    u instanceof Dt
                      ? u.data !== "nested" &&
                        (u.scrollTrigger && u.scrollTrigger.revert(), u.kill())
                      : !(u instanceof Ke) && u.revert && u.revert(t));
                (n._r.forEach(function (c) {
                  return c(t, n);
                }),
                  (n.isReverted = !0));
              })()
            : this.data.forEach(function (o) {
                return o.kill && o.kill();
              }),
          this.clear(),
          r)
        )
          for (var s = Er.length; s--; )
            Er[s].id === this.id && Er.splice(s, 1);
      }),
      (e.revert = function (t) {
        this.kill(t || {});
      }),
      a
    );
  })(),
  td = (function () {
    function a(i) {
      ((this.contexts = []), (this.scope = i), Ie && Ie.data.push(this));
    }
    var e = a.prototype;
    return (
      (e.add = function (t, r, n) {
        Ai(t) || (t = { matches: t });
        var s = new Wf(0, n || this.scope),
          o = (s.conditions = {}),
          f,
          u,
          c;
        (Ie && !s.selector && (s.selector = Ie.selector),
          this.contexts.push(s),
          (r = s.add("onMatch", r)),
          (s.queries = t));
        for (u in t)
          u === "all"
            ? (c = 1)
            : ((f = Ci.matchMedia(t[u])),
              f &&
                (Er.indexOf(s) < 0 && Er.push(s),
                (o[u] = f.matches) && (c = 1),
                f.addListener
                  ? f.addListener(ba)
                  : f.addEventListener("change", ba)));
        return (
          c &&
            r(s, function (h) {
              return s.add(null, h);
            }),
          this
        );
      }),
      (e.revert = function (t) {
        this.kill(t || {});
      }),
      (e.kill = function (t) {
        this.contexts.forEach(function (r) {
          return r.kill(t, !0);
        });
      }),
      a
    );
  })(),
  uo = {
    registerPlugin: function () {
      for (var e = arguments.length, i = new Array(e), t = 0; t < e; t++)
        i[t] = arguments[t];
      i.forEach(function (r) {
        return Mf(r);
      });
    },
    timeline: function (e) {
      return new Dt(e);
    },
    getTweensOf: function (e, i) {
      return Be.getTweensOf(e, i);
    },
    getProperty: function (e, i, t, r) {
      ot(e) && (e = fi(e)[0]);
      var n = Cr(e || {}).get,
        s = t ? gf : _f;
      return (
        t === "native" && (t = ""),
        e &&
          (i
            ? s(((Gt[i] && Gt[i].get) || n)(e, i, t, r))
            : function (o, f, u) {
                return s(((Gt[o] && Gt[o].get) || n)(e, o, f, u));
              })
      );
    },
    quickSetter: function (e, i, t) {
      if (((e = fi(e)), e.length > 1)) {
        var r = e.map(function (c) {
            return $t.quickSetter(c, i, t);
          }),
          n = r.length;
        return function (c) {
          for (var h = n; h--; ) r[h](c);
        };
      }
      e = e[0] || {};
      var s = Gt[i],
        o = Cr(e),
        f = (o.harness && (o.harness.aliases || {})[i]) || i,
        u = s
          ? function (c) {
              var h = new s();
              ((Zr._pt = 0),
                h.init(e, t ? c + t : c, Zr, 0, [e]),
                h.render(1, h),
                Zr._pt && _l(1, Zr));
            }
          : o.set(e, f);
      return s
        ? u
        : function (c) {
            return u(e, f, t ? c + t : c, o, 1);
          };
    },
    quickTo: function (e, i, t) {
      var r,
        n = $t.to(
          e,
          ei(
            ((r = {}), (r[i] = "+=0.1"), (r.paused = !0), (r.stagger = 0), r),
            t || {},
          ),
        ),
        s = function (f, u, c) {
          return n.resetTo(i, f, u, c);
        };
      return ((s.tween = n), s);
    },
    isTweening: function (e) {
      return Be.getTweensOf(e, !0).length > 0;
    },
    defaults: function (e) {
      return (e && e.ease && (e.ease = Pr(e.ease, pn.ease)), Vl(pn, e || {}));
    },
    config: function (e) {
      return Vl(Zt, e || {});
    },
    registerEffect: function (e) {
      var i = e.name,
        t = e.effect,
        r = e.plugins,
        n = e.defaults,
        s = e.extendTimeline;
      ((r || "").split(",").forEach(function (o) {
        return (
          o && !Gt[o] && !Jt[o] && fs(i + " effect requires " + o + " plugin.")
        );
      }),
        (No[i] = function (o, f, u) {
          return t(fi(o), ei(f || {}, n), u);
        }),
        s &&
          (Dt.prototype[i] = function (o, f, u) {
            return this.add(No[i](o, Ai(f) ? f : (u = f) && {}, this), u);
          }));
    },
    registerEase: function (e, i) {
      ve[e] = Pr(i);
    },
    parseEase: function (e, i) {
      return arguments.length ? Pr(e, i) : ve;
    },
    getById: function (e) {
      return Be.getById(e);
    },
    exportRoot: function (e, i) {
      e === void 0 && (e = {});
      var t = new Dt(e),
        r,
        n;
      for (
        t.smoothChildTiming = It(e.smoothChildTiming),
          Be.remove(t),
          t._dp = 0,
          t._time = t._tTime = Be._time,
          r = Be._first;
        r;
      )
        ((n = r._next),
          (i ||
            !(
              !r._dur &&
              r instanceof Ke &&
              r.vars.onComplete === r._targets[0]
            )) &&
            Ei(t, r, r._start - r._delay),
          (r = n));
      return (Ei(Be, t, 0), t);
    },
    context: function (e, i) {
      return e ? new Wf(e, i) : Ie;
    },
    matchMedia: function (e) {
      return new td(e);
    },
    matchMediaRefresh: function () {
      return (
        Er.forEach(function (e) {
          var i = e.conditions,
            t,
            r;
          for (r in i) i[r] && ((i[r] = !1), (t = 1));
          t && e.revert();
        }) || ba()
      );
    },
    addEventListener: function (e, i) {
      var t = Qs[e] || (Qs[e] = []);
      ~t.indexOf(i) || t.push(i);
    },
    removeEventListener: function (e, i) {
      var t = Qs[e],
        r = t && t.indexOf(i);
      r >= 0 && t.splice(r, 1);
    },
    utils: {
      wrap: Rh,
      wrapYoyo: Lh,
      distribute: Tf,
      random: Cf,
      snap: Sf,
      normalize: Ah,
      getUnit: vt,
      clamp: Eh,
      splitColor: Df,
      toArray: fi,
      selector: xa,
      mapRange: Pf,
      pipe: Dh,
      unitize: Oh,
      interpolate: Fh,
      shuffle: bf,
    },
    install: ff,
    effects: No,
    ticker: qt,
    updateRoot: Dt.updateRoot,
    plugins: Gt,
    globalTimeline: Be,
    core: {
      PropTween: Bt,
      globals: cf,
      Tween: Ke,
      Timeline: Dt,
      Animation: ps,
      getCache: Cr,
      _removeLinkedListItem: ko,
      reverting: function () {
        return ht;
      },
      context: function (e) {
        return (e && Ie && (Ie.data.push(e), (e._ctx = Ie)), Ie);
      },
      suppressOverwrites: function (e) {
        return (il = e);
      },
    },
  };
Nt("to,from,fromTo,delayedCall,set,killTweensOf", function (a) {
  return (uo[a] = Ke[a]);
});
qt.add(Dt.updateRoot);
Zr = uo.to({}, { duration: 0 });
var id = function (e, i) {
    for (var t = e._pt; t && t.p !== i && t.op !== i && t.fp !== i; )
      t = t._next;
    return t;
  },
  rd = function (e, i) {
    var t = e._targets,
      r,
      n,
      s;
    for (r in i)
      for (n = t.length; n--; )
        ((s = e._ptLookup[n][r]),
          s &&
            (s = s.d) &&
            (s._pt && (s = id(s, r)),
            s && s.modifier && s.modifier(i[r], e, t[n], r)));
  },
  Xo = function (e, i) {
    return {
      name: e,
      headless: 1,
      rawVars: 1,
      init: function (r, n, s) {
        s._onInit = function (o) {
          var f, u;
          if (
            (ot(n) &&
              ((f = {}),
              Nt(n, function (c) {
                return (f[c] = 1);
              }),
              (n = f)),
            i)
          ) {
            f = {};
            for (u in n) f[u] = i(n[u]);
            n = f;
          }
          rd(o, n);
        };
      },
    };
  },
  $t =
    uo.registerPlugin(
      {
        name: "attr",
        init: function (e, i, t, r, n) {
          var s, o, f;
          this.tween = t;
          for (s in i)
            ((f = e.getAttribute(s) || ""),
              (o = this.add(
                e,
                "setAttribute",
                (f || 0) + "",
                i[s],
                r,
                n,
                0,
                0,
                s,
              )),
              (o.op = s),
              (o.b = f),
              this._props.push(s));
        },
        render: function (e, i) {
          for (var t = i._pt; t; )
            (ht ? t.set(t.t, t.p, t.b, t) : t.r(e, t.d), (t = t._next));
        },
      },
      {
        name: "endArray",
        headless: 1,
        init: function (e, i) {
          for (var t = i.length; t--; )
            this.add(e, t, e[t] || 0, i[t], 0, 0, 0, 0, 0, 1);
        },
      },
      Xo("roundProps", va),
      Xo("modifiers"),
      Xo("snap", Sf),
    ) || uo;
Ke.version = Dt.version = $t.version = "3.13.0";
uf = 1;
nl() && yn();
ve.Power0;
ve.Power1;
ve.Power2;
ve.Power3;
ve.Power4;
ve.Linear;
ve.Quad;
ve.Cubic;
ve.Quart;
ve.Quint;
ve.Strong;
ve.Elastic;
ve.Back;
ve.SteppedEase;
ve.Bounce;
ve.Sine;
ve.Expo;
ve.Circ;
/*!
 * CSSPlugin 3.13.0
 * https://gsap.com
 *
 * Copyright 2008-2025, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license
 * @author: Jack Doyle, jack@greensock.com
 */ var Ql,
  tr,
  sn,
  gl,
  Tr,
  Kl,
  ml,
  nd = function () {
    return typeof window < "u";
  },
  Wi = {},
  vr = 180 / Math.PI,
  on = Math.PI / 180,
  Yr = Math.atan2,
  jl = 1e8,
  yl = /([A-Z])/g,
  sd = /(left|right|width|margin|padding|x)/i,
  od = /[\s,\(]\S/,
  Mi = {
    autoAlpha: "opacity,visibility",
    scale: "scaleX,scaleY",
    alpha: "opacity",
  },
  Ta = function (e, i) {
    return i.set(i.t, i.p, Math.round((i.s + i.c * e) * 1e4) / 1e4 + i.u, i);
  },
  ad = function (e, i) {
    return i.set(
      i.t,
      i.p,
      e === 1 ? i.e : Math.round((i.s + i.c * e) * 1e4) / 1e4 + i.u,
      i,
    );
  },
  ld = function (e, i) {
    return i.set(
      i.t,
      i.p,
      e ? Math.round((i.s + i.c * e) * 1e4) / 1e4 + i.u : i.b,
      i,
    );
  },
  ud = function (e, i) {
    var t = i.s + i.c * e;
    i.set(i.t, i.p, ~~(t + (t < 0 ? -0.5 : 0.5)) + i.u, i);
  },
  Hf = function (e, i) {
    return i.set(i.t, i.p, e ? i.e : i.b, i);
  },
  Gf = function (e, i) {
    return i.set(i.t, i.p, e !== 1 ? i.b : i.e, i);
  },
  fd = function (e, i, t) {
    return (e.style[i] = t);
  },
  cd = function (e, i, t) {
    return e.style.setProperty(i, t);
  },
  hd = function (e, i, t) {
    return (e._gsap[i] = t);
  },
  dd = function (e, i, t) {
    return (e._gsap.scaleX = e._gsap.scaleY = t);
  },
  pd = function (e, i, t, r, n) {
    var s = e._gsap;
    ((s.scaleX = s.scaleY = t), s.renderTransform(n, s));
  },
  _d = function (e, i, t, r, n) {
    var s = e._gsap;
    ((s[i] = t), s.renderTransform(n, s));
  },
  ze = "transform",
  zt = ze + "Origin",
  gd = function a(e, i) {
    var t = this,
      r = this.target,
      n = r.style,
      s = r._gsap;
    if (e in Wi && n) {
      if (((this.tfm = this.tfm || {}), e !== "transform"))
        ((e = Mi[e] || e),
          ~e.indexOf(",")
            ? e.split(",").forEach(function (o) {
                return (t.tfm[o] = Fi(r, o));
              })
            : (this.tfm[e] = s.x ? s[e] : Fi(r, e)),
          e === zt && (this.tfm.zOrigin = s.zOrigin));
      else
        return Mi.transform.split(",").forEach(function (o) {
          return a.call(t, o, i);
        });
      if (this.props.indexOf(ze) >= 0) return;
      (s.svg &&
        ((this.svgo = r.getAttribute("data-svg-origin")),
        this.props.push(zt, i, "")),
        (e = ze));
    }
    (n || i) && this.props.push(e, i, n[e]);
  },
  Uf = function (e) {
    e.translate &&
      (e.removeProperty("translate"),
      e.removeProperty("scale"),
      e.removeProperty("rotate"));
  },
  md = function () {
    var e = this.props,
      i = this.target,
      t = i.style,
      r = i._gsap,
      n,
      s;
    for (n = 0; n < e.length; n += 3)
      e[n + 1]
        ? e[n + 1] === 2
          ? i[e[n]](e[n + 2])
          : (i[e[n]] = e[n + 2])
        : e[n + 2]
          ? (t[e[n]] = e[n + 2])
          : t.removeProperty(
              e[n].substr(0, 2) === "--"
                ? e[n]
                : e[n].replace(yl, "-$1").toLowerCase(),
            );
    if (this.tfm) {
      for (s in this.tfm) r[s] = this.tfm[s];
      (r.svg &&
        (r.renderTransform(),
        i.setAttribute("data-svg-origin", this.svgo || "")),
        (n = ml()),
        (!n || !n.isStart) &&
          !t[ze] &&
          (Uf(t),
          r.zOrigin &&
            t[zt] &&
            ((t[zt] += " " + r.zOrigin + "px"),
            (r.zOrigin = 0),
            r.renderTransform()),
          (r.uncache = 1)));
    }
  },
  qf = function (e, i) {
    var t = { target: e, props: [], revert: md, save: gd };
    return (
      e._gsap || $t.core.getCache(e),
      i &&
        e.style &&
        e.nodeType &&
        i.split(",").forEach(function (r) {
          return t.save(r);
        }),
      t
    );
  },
  Qf,
  Sa = function (e, i) {
    var t = tr.createElementNS
      ? tr.createElementNS(
          (i || "http://www.w3.org/1999/xhtml").replace(/^https/, "http"),
          e,
        )
      : tr.createElement(e);
    return t && t.style ? t : tr.createElement(e);
  },
  ci = function a(e, i, t) {
    var r = getComputedStyle(e);
    return (
      r[i] ||
      r.getPropertyValue(i.replace(yl, "-$1").toLowerCase()) ||
      r.getPropertyValue(i) ||
      (!t && a(e, xn(i) || i, 1)) ||
      ""
    );
  },
  Zl = "O,Moz,ms,Ms,Webkit".split(","),
  xn = function (e, i, t) {
    var r = i || Tr,
      n = r.style,
      s = 5;
    if (e in n && !t) return e;
    for (
      e = e.charAt(0).toUpperCase() + e.substr(1);
      s-- && !(Zl[s] + e in n);
    );
    return s < 0 ? null : (s === 3 ? "ms" : s >= 0 ? Zl[s] : "") + e;
  },
  Ca = function () {
    nd() &&
      window.document &&
      ((Ql = window),
      (tr = Ql.document),
      (sn = tr.documentElement),
      (Tr = Sa("div") || { style: {} }),
      Sa("div"),
      (ze = xn(ze)),
      (zt = ze + "Origin"),
      (Tr.style.cssText =
        "border-width:0;line-height:0;position:absolute;padding:0"),
      (Qf = !!xn("perspective")),
      (ml = $t.core.reverting),
      (gl = 1));
  },
  Jl = function (e) {
    var i = e.ownerSVGElement,
      t = Sa(
        "svg",
        (i && i.getAttribute("xmlns")) || "http://www.w3.org/2000/svg",
      ),
      r = e.cloneNode(!0),
      n;
    ((r.style.display = "block"), t.appendChild(r), sn.appendChild(t));
    try {
      n = r.getBBox();
    } catch {}
    return (t.removeChild(r), sn.removeChild(t), n);
  },
  eu = function (e, i) {
    for (var t = i.length; t--; )
      if (e.hasAttribute(i[t])) return e.getAttribute(i[t]);
  },
  Kf = function (e) {
    var i, t;
    try {
      i = e.getBBox();
    } catch {
      ((i = Jl(e)), (t = 1));
    }
    return (
      (i && (i.width || i.height)) || t || (i = Jl(e)),
      i && !i.width && !i.x && !i.y
        ? {
            x: +eu(e, ["x", "cx", "x1"]) || 0,
            y: +eu(e, ["y", "cy", "y1"]) || 0,
            width: 0,
            height: 0,
          }
        : i
    );
  },
  jf = function (e) {
    return !!(e.getCTM && (!e.parentNode || e.ownerSVGElement) && Kf(e));
  },
  Fr = function (e, i) {
    if (i) {
      var t = e.style,
        r;
      (i in Wi && i !== zt && (i = ze),
        t.removeProperty
          ? ((r = i.substr(0, 2)),
            (r === "ms" || i.substr(0, 6) === "webkit") && (i = "-" + i),
            t.removeProperty(
              r === "--" ? i : i.replace(yl, "-$1").toLowerCase(),
            ))
          : t.removeAttribute(i));
    }
  },
  ir = function (e, i, t, r, n, s) {
    var o = new Bt(e._pt, i, t, 0, 1, s ? Gf : Hf);
    return ((e._pt = o), (o.b = r), (o.e = n), e._props.push(t), o);
  },
  tu = { deg: 1, rad: 1, turn: 1 },
  yd = { grid: 1, flex: 1 },
  cr = function a(e, i, t, r) {
    var n = parseFloat(t) || 0,
      s = (t + "").trim().substr((n + "").length) || "px",
      o = Tr.style,
      f = sd.test(i),
      u = e.tagName.toLowerCase() === "svg",
      c = (u ? "client" : "offset") + (f ? "Width" : "Height"),
      h = 100,
      p = r === "px",
      l = r === "%",
      _,
      d,
      g,
      m;
    if (r === s || !n || tu[r] || tu[s]) return n;
    if (
      (s !== "px" && !p && (n = a(e, i, t, "px")),
      (m = e.getCTM && jf(e)),
      (l || s === "%") && (Wi[i] || ~i.indexOf("adius")))
    )
      return (
        (_ = m ? e.getBBox()[f ? "width" : "height"] : e[c]),
        He(l ? (n / _) * h : (n / 100) * _)
      );
    if (
      ((o[f ? "width" : "height"] = h + (p ? s : r)),
      (d =
        (r !== "rem" && ~i.indexOf("adius")) ||
        (r === "em" && e.appendChild && !u)
          ? e
          : e.parentNode),
      m && (d = (e.ownerSVGElement || {}).parentNode),
      (!d || d === tr || !d.appendChild) && (d = tr.body),
      (g = d._gsap),
      g && l && g.width && f && g.time === qt.time && !g.uncache)
    )
      return He((n / g.width) * h);
    if (l && (i === "height" || i === "width")) {
      var x = e.style[i];
      ((e.style[i] = h + r), (_ = e[c]), x ? (e.style[i] = x) : Fr(e, i));
    } else
      ((l || s === "%") &&
        !yd[ci(d, "display")] &&
        (o.position = ci(e, "position")),
        d === e && (o.position = "static"),
        d.appendChild(Tr),
        (_ = Tr[c]),
        d.removeChild(Tr),
        (o.position = "absolute"));
    return (
      f && l && ((g = Cr(d)), (g.time = qt.time), (g.width = d[c])),
      He(p ? (_ * n) / h : _ && n ? (h / _) * n : 0)
    );
  },
  Fi = function (e, i, t, r) {
    var n;
    return (
      gl || Ca(),
      i in Mi &&
        i !== "transform" &&
        ((i = Mi[i]), ~i.indexOf(",") && (i = i.split(",")[0])),
      Wi[i] && i !== "transform"
        ? ((n = gs(e, r)),
          (n =
            i !== "transformOrigin"
              ? n[i]
              : n.svg
                ? n.origin
                : co(ci(e, zt)) + " " + n.zOrigin + "px"))
        : ((n = e.style[i]),
          (!n || n === "auto" || r || ~(n + "").indexOf("calc(")) &&
            (n =
              (fo[i] && fo[i](e, i, t)) ||
              ci(e, i) ||
              df(e, i) ||
              (i === "opacity" ? 1 : 0))),
      t && !~(n + "").trim().indexOf(" ") ? cr(e, i, n, t) + t : n
    );
  },
  xd = function (e, i, t, r) {
    if (!t || t === "none") {
      var n = xn(i, e, 1),
        s = n && ci(e, n, 1);
      s && s !== t
        ? ((i = n), (t = s))
        : i === "borderColor" && (t = ci(e, "borderTopColor"));
    }
    var o = new Bt(this._pt, e.style, i, 0, 1, Xf),
      f = 0,
      u = 0,
      c,
      h,
      p,
      l,
      _,
      d,
      g,
      m,
      x,
      v,
      T,
      y;
    if (
      ((o.b = t),
      (o.e = r),
      (t += ""),
      (r += ""),
      r.substring(0, 6) === "var(--" &&
        (r = ci(e, r.substring(4, r.indexOf(")")))),
      r === "auto" &&
        ((d = e.style[i]),
        (e.style[i] = r),
        (r = ci(e, i) || r),
        d ? (e.style[i] = d) : Fr(e, i)),
      (c = [t, r]),
      Af(c),
      (t = c[0]),
      (r = c[1]),
      (p = t.match(jr) || []),
      (y = r.match(jr) || []),
      y.length)
    ) {
      for (; (h = jr.exec(r)); )
        ((g = h[0]),
          (x = r.substring(f, h.index)),
          _
            ? (_ = (_ + 1) % 5)
            : (x.substr(-5) === "rgba(" || x.substr(-5) === "hsla(") && (_ = 1),
          g !== (d = p[u++] || "") &&
            ((l = parseFloat(d) || 0),
            (T = d.substr((l + "").length)),
            g.charAt(1) === "=" && (g = nn(l, g) + T),
            (m = parseFloat(g)),
            (v = g.substr((m + "").length)),
            (f = jr.lastIndex - v.length),
            v ||
              ((v = v || Zt.units[i] || T),
              f === r.length && ((r += v), (o.e += v))),
            T !== v && (l = cr(e, i, d, v) || 0),
            (o._pt = {
              _next: o._pt,
              p: x || u === 1 ? x : ",",
              s: l,
              c: m - l,
              m: (_ && _ < 4) || i === "zIndex" ? Math.round : 0,
            })));
      o.c = f < r.length ? r.substring(f, r.length) : "";
    } else o.r = i === "display" && r === "none" ? Gf : Hf;
    return (af.test(r) && (o.e = 0), (this._pt = o), o);
  },
  iu = { top: "0%", bottom: "100%", left: "0%", right: "100%", center: "50%" },
  vd = function (e) {
    var i = e.split(" "),
      t = i[0],
      r = i[1] || "50%";
    return (
      (t === "top" || t === "bottom" || r === "left" || r === "right") &&
        ((e = t), (t = r), (r = e)),
      (i[0] = iu[t] || t),
      (i[1] = iu[r] || r),
      i.join(" ")
    );
  },
  wd = function (e, i) {
    if (i.tween && i.tween._time === i.tween._dur) {
      var t = i.t,
        r = t.style,
        n = i.u,
        s = t._gsap,
        o,
        f,
        u;
      if (n === "all" || n === !0) ((r.cssText = ""), (f = 1));
      else
        for (n = n.split(","), u = n.length; --u > -1; )
          ((o = n[u]),
            Wi[o] && ((f = 1), (o = o === "transformOrigin" ? zt : ze)),
            Fr(t, o));
      f &&
        (Fr(t, ze),
        s &&
          (s.svg && t.removeAttribute("transform"),
          (r.scale = r.rotate = r.translate = "none"),
          gs(t, 1),
          (s.uncache = 1),
          Uf(r)));
    }
  },
  fo = {
    clearProps: function (e, i, t, r, n) {
      if (n.data !== "isFromStart") {
        var s = (e._pt = new Bt(e._pt, i, t, 0, 0, wd));
        return ((s.u = r), (s.pr = -10), (s.tween = n), e._props.push(t), 1);
      }
    },
  },
  _s = [1, 0, 0, 1, 0, 0],
  Zf = {},
  Jf = function (e) {
    return e === "matrix(1, 0, 0, 1, 0, 0)" || e === "none" || !e;
  },
  ru = function (e) {
    var i = ci(e, ze);
    return Jf(i) ? _s : i.substr(7).match(of).map(He);
  },
  xl = function (e, i) {
    var t = e._gsap || Cr(e),
      r = e.style,
      n = ru(e),
      s,
      o,
      f,
      u;
    return t.svg && e.getAttribute("transform")
      ? ((f = e.transform.baseVal.consolidate().matrix),
        (n = [f.a, f.b, f.c, f.d, f.e, f.f]),
        n.join(",") === "1,0,0,1,0,0" ? _s : n)
      : (n === _s &&
          !e.offsetParent &&
          e !== sn &&
          !t.svg &&
          ((f = r.display),
          (r.display = "block"),
          (s = e.parentNode),
          (!s || (!e.offsetParent && !e.getBoundingClientRect().width)) &&
            ((u = 1), (o = e.nextElementSibling), sn.appendChild(e)),
          (n = ru(e)),
          f ? (r.display = f) : Fr(e, "display"),
          u &&
            (o
              ? s.insertBefore(e, o)
              : s
                ? s.appendChild(e)
                : sn.removeChild(e))),
        i && n.length > 6 ? [n[0], n[1], n[4], n[5], n[12], n[13]] : n);
  },
  ka = function (e, i, t, r, n, s) {
    var o = e._gsap,
      f = n || xl(e, !0),
      u = o.xOrigin || 0,
      c = o.yOrigin || 0,
      h = o.xOffset || 0,
      p = o.yOffset || 0,
      l = f[0],
      _ = f[1],
      d = f[2],
      g = f[3],
      m = f[4],
      x = f[5],
      v = i.split(" "),
      T = parseFloat(v[0]) || 0,
      y = parseFloat(v[1]) || 0,
      k,
      C,
      P,
      E;
    (t
      ? f !== _s &&
        (C = l * g - _ * d) &&
        ((P = T * (g / C) + y * (-d / C) + (d * x - g * m) / C),
        (E = T * (-_ / C) + y * (l / C) - (l * x - _ * m) / C),
        (T = P),
        (y = E))
      : ((k = Kf(e)),
        (T = k.x + (~v[0].indexOf("%") ? (T / 100) * k.width : T)),
        (y = k.y + (~(v[1] || v[0]).indexOf("%") ? (y / 100) * k.height : y))),
      r || (r !== !1 && o.smooth)
        ? ((m = T - u),
          (x = y - c),
          (o.xOffset = h + (m * l + x * d) - m),
          (o.yOffset = p + (m * _ + x * g) - x))
        : (o.xOffset = o.yOffset = 0),
      (o.xOrigin = T),
      (o.yOrigin = y),
      (o.smooth = !!r),
      (o.origin = i),
      (o.originIsAbsolute = !!t),
      (e.style[zt] = "0px 0px"),
      s &&
        (ir(s, o, "xOrigin", u, T),
        ir(s, o, "yOrigin", c, y),
        ir(s, o, "xOffset", h, o.xOffset),
        ir(s, o, "yOffset", p, o.yOffset)),
      e.setAttribute("data-svg-origin", T + " " + y));
  },
  gs = function (e, i) {
    var t = e._gsap || new If(e);
    if ("x" in t && !i && !t.uncache) return t;
    var r = e.style,
      n = t.scaleX < 0,
      s = "px",
      o = "deg",
      f = getComputedStyle(e),
      u = ci(e, zt) || "0",
      c,
      h,
      p,
      l,
      _,
      d,
      g,
      m,
      x,
      v,
      T,
      y,
      k,
      C,
      P,
      E,
      D,
      F,
      R,
      L,
      V,
      z,
      X,
      $,
      J,
      re,
      b,
      W,
      G,
      ne,
      j,
      se;
    return (
      (c = h = p = d = g = m = x = v = T = 0),
      (l = _ = 1),
      (t.svg = !!(e.getCTM && jf(e))),
      f.translate &&
        ((f.translate !== "none" ||
          f.scale !== "none" ||
          f.rotate !== "none") &&
          (r[ze] =
            (f.translate !== "none"
              ? "translate3d(" +
                (f.translate + " 0 0").split(" ").slice(0, 3).join(", ") +
                ") "
              : "") +
            (f.rotate !== "none" ? "rotate(" + f.rotate + ") " : "") +
            (f.scale !== "none"
              ? "scale(" + f.scale.split(" ").join(",") + ") "
              : "") +
            (f[ze] !== "none" ? f[ze] : "")),
        (r.scale = r.rotate = r.translate = "none")),
      (C = xl(e, t.svg)),
      t.svg &&
        (t.uncache
          ? ((J = e.getBBox()),
            (u = t.xOrigin - J.x + "px " + (t.yOrigin - J.y) + "px"),
            ($ = ""))
          : ($ = !i && e.getAttribute("data-svg-origin")),
        ka(e, $ || u, !!$ || t.originIsAbsolute, t.smooth !== !1, C)),
      (y = t.xOrigin || 0),
      (k = t.yOrigin || 0),
      C !== _s &&
        ((F = C[0]),
        (R = C[1]),
        (L = C[2]),
        (V = C[3]),
        (c = z = C[4]),
        (h = X = C[5]),
        C.length === 6
          ? ((l = Math.sqrt(F * F + R * R)),
            (_ = Math.sqrt(V * V + L * L)),
            (d = F || R ? Yr(R, F) * vr : 0),
            (x = L || V ? Yr(L, V) * vr + d : 0),
            x && (_ *= Math.abs(Math.cos(x * on))),
            t.svg && ((c -= y - (y * F + k * L)), (h -= k - (y * R + k * V))))
          : ((se = C[6]),
            (ne = C[7]),
            (b = C[8]),
            (W = C[9]),
            (G = C[10]),
            (j = C[11]),
            (c = C[12]),
            (h = C[13]),
            (p = C[14]),
            (P = Yr(se, G)),
            (g = P * vr),
            P &&
              ((E = Math.cos(-P)),
              (D = Math.sin(-P)),
              ($ = z * E + b * D),
              (J = X * E + W * D),
              (re = se * E + G * D),
              (b = z * -D + b * E),
              (W = X * -D + W * E),
              (G = se * -D + G * E),
              (j = ne * -D + j * E),
              (z = $),
              (X = J),
              (se = re)),
            (P = Yr(-L, G)),
            (m = P * vr),
            P &&
              ((E = Math.cos(-P)),
              (D = Math.sin(-P)),
              ($ = F * E - b * D),
              (J = R * E - W * D),
              (re = L * E - G * D),
              (j = V * D + j * E),
              (F = $),
              (R = J),
              (L = re)),
            (P = Yr(R, F)),
            (d = P * vr),
            P &&
              ((E = Math.cos(P)),
              (D = Math.sin(P)),
              ($ = F * E + R * D),
              (J = z * E + X * D),
              (R = R * E - F * D),
              (X = X * E - z * D),
              (F = $),
              (z = J)),
            g &&
              Math.abs(g) + Math.abs(d) > 359.9 &&
              ((g = d = 0), (m = 180 - m)),
            (l = He(Math.sqrt(F * F + R * R + L * L))),
            (_ = He(Math.sqrt(X * X + se * se))),
            (P = Yr(z, X)),
            (x = Math.abs(P) > 2e-4 ? P * vr : 0),
            (T = j ? 1 / (j < 0 ? -j : j) : 0)),
        t.svg &&
          (($ = e.getAttribute("transform")),
          (t.forceCSS = e.setAttribute("transform", "") || !Jf(ci(e, ze))),
          $ && e.setAttribute("transform", $))),
      Math.abs(x) > 90 &&
        Math.abs(x) < 270 &&
        (n
          ? ((l *= -1), (x += d <= 0 ? 180 : -180), (d += d <= 0 ? 180 : -180))
          : ((_ *= -1), (x += x <= 0 ? 180 : -180))),
      (i = i || t.uncache),
      (t.x =
        c -
        ((t.xPercent =
          c &&
          ((!i && t.xPercent) ||
            (Math.round(e.offsetWidth / 2) === Math.round(-c) ? -50 : 0)))
          ? (e.offsetWidth * t.xPercent) / 100
          : 0) +
        s),
      (t.y =
        h -
        ((t.yPercent =
          h &&
          ((!i && t.yPercent) ||
            (Math.round(e.offsetHeight / 2) === Math.round(-h) ? -50 : 0)))
          ? (e.offsetHeight * t.yPercent) / 100
          : 0) +
        s),
      (t.z = p + s),
      (t.scaleX = He(l)),
      (t.scaleY = He(_)),
      (t.rotation = He(d) + o),
      (t.rotationX = He(g) + o),
      (t.rotationY = He(m) + o),
      (t.skewX = x + o),
      (t.skewY = v + o),
      (t.transformPerspective = T + s),
      (t.zOrigin = parseFloat(u.split(" ")[2]) || (!i && t.zOrigin) || 0) &&
        (r[zt] = co(u)),
      (t.xOffset = t.yOffset = 0),
      (t.force3D = Zt.force3D),
      (t.renderTransform = t.svg ? Td : Qf ? ec : bd),
      (t.uncache = 0),
      t
    );
  },
  co = function (e) {
    return (e = e.split(" "))[0] + " " + e[1];
  },
  Vo = function (e, i, t) {
    var r = vt(i);
    return He(parseFloat(i) + parseFloat(cr(e, "x", t + "px", r))) + r;
  },
  bd = function (e, i) {
    ((i.z = "0px"),
      (i.rotationY = i.rotationX = "0deg"),
      (i.force3D = 0),
      ec(e, i));
  },
  gr = "0deg",
  Cn = "0px",
  mr = ") ",
  ec = function (e, i) {
    var t = i || this,
      r = t.xPercent,
      n = t.yPercent,
      s = t.x,
      o = t.y,
      f = t.z,
      u = t.rotation,
      c = t.rotationY,
      h = t.rotationX,
      p = t.skewX,
      l = t.skewY,
      _ = t.scaleX,
      d = t.scaleY,
      g = t.transformPerspective,
      m = t.force3D,
      x = t.target,
      v = t.zOrigin,
      T = "",
      y = (m === "auto" && e && e !== 1) || m === !0;
    if (v && (h !== gr || c !== gr)) {
      var k = parseFloat(c) * on,
        C = Math.sin(k),
        P = Math.cos(k),
        E;
      ((k = parseFloat(h) * on),
        (E = Math.cos(k)),
        (s = Vo(x, s, C * E * -v)),
        (o = Vo(x, o, -Math.sin(k) * -v)),
        (f = Vo(x, f, P * E * -v + v)));
    }
    (g !== Cn && (T += "perspective(" + g + mr),
      (r || n) && (T += "translate(" + r + "%, " + n + "%) "),
      (y || s !== Cn || o !== Cn || f !== Cn) &&
        (T +=
          f !== Cn || y
            ? "translate3d(" + s + ", " + o + ", " + f + ") "
            : "translate(" + s + ", " + o + mr),
      u !== gr && (T += "rotate(" + u + mr),
      c !== gr && (T += "rotateY(" + c + mr),
      h !== gr && (T += "rotateX(" + h + mr),
      (p !== gr || l !== gr) && (T += "skew(" + p + ", " + l + mr),
      (_ !== 1 || d !== 1) && (T += "scale(" + _ + ", " + d + mr),
      (x.style[ze] = T || "translate(0, 0)"));
  },
  Td = function (e, i) {
    var t = i || this,
      r = t.xPercent,
      n = t.yPercent,
      s = t.x,
      o = t.y,
      f = t.rotation,
      u = t.skewX,
      c = t.skewY,
      h = t.scaleX,
      p = t.scaleY,
      l = t.target,
      _ = t.xOrigin,
      d = t.yOrigin,
      g = t.xOffset,
      m = t.yOffset,
      x = t.forceCSS,
      v = parseFloat(s),
      T = parseFloat(o),
      y,
      k,
      C,
      P,
      E;
    ((f = parseFloat(f)),
      (u = parseFloat(u)),
      (c = parseFloat(c)),
      c && ((c = parseFloat(c)), (u += c), (f += c)),
      f || u
        ? ((f *= on),
          (u *= on),
          (y = Math.cos(f) * h),
          (k = Math.sin(f) * h),
          (C = Math.sin(f - u) * -p),
          (P = Math.cos(f - u) * p),
          u &&
            ((c *= on),
            (E = Math.tan(u - c)),
            (E = Math.sqrt(1 + E * E)),
            (C *= E),
            (P *= E),
            c &&
              ((E = Math.tan(c)),
              (E = Math.sqrt(1 + E * E)),
              (y *= E),
              (k *= E))),
          (y = He(y)),
          (k = He(k)),
          (C = He(C)),
          (P = He(P)))
        : ((y = h), (P = p), (k = C = 0)),
      ((v && !~(s + "").indexOf("px")) || (T && !~(o + "").indexOf("px"))) &&
        ((v = cr(l, "x", s, "px")), (T = cr(l, "y", o, "px"))),
      (_ || d || g || m) &&
        ((v = He(v + _ - (_ * y + d * C) + g)),
        (T = He(T + d - (_ * k + d * P) + m))),
      (r || n) &&
        ((E = l.getBBox()),
        (v = He(v + (r / 100) * E.width)),
        (T = He(T + (n / 100) * E.height))),
      (E =
        "matrix(" + y + "," + k + "," + C + "," + P + "," + v + "," + T + ")"),
      l.setAttribute("transform", E),
      x && (l.style[ze] = E));
  },
  Sd = function (e, i, t, r, n) {
    var s = 360,
      o = ot(n),
      f = parseFloat(n) * (o && ~n.indexOf("rad") ? vr : 1),
      u = f - r,
      c = r + u + "deg",
      h,
      p;
    return (
      o &&
        ((h = n.split("_")[1]),
        h === "short" && ((u %= s), u !== u % (s / 2) && (u += u < 0 ? s : -s)),
        h === "cw" && u < 0
          ? (u = ((u + s * jl) % s) - ~~(u / s) * s)
          : h === "ccw" && u > 0 && (u = ((u - s * jl) % s) - ~~(u / s) * s)),
      (e._pt = p = new Bt(e._pt, i, t, r, u, ad)),
      (p.e = c),
      (p.u = "deg"),
      e._props.push(t),
      p
    );
  },
  nu = function (e, i) {
    for (var t in i) e[t] = i[t];
    return e;
  },
  Cd = function (e, i, t) {
    var r = nu({}, t._gsap),
      n = "perspective,force3D,transformOrigin,svgOrigin",
      s = t.style,
      o,
      f,
      u,
      c,
      h,
      p,
      l,
      _;
    r.svg
      ? ((u = t.getAttribute("transform")),
        t.setAttribute("transform", ""),
        (s[ze] = i),
        (o = gs(t, 1)),
        Fr(t, ze),
        t.setAttribute("transform", u))
      : ((u = getComputedStyle(t)[ze]),
        (s[ze] = i),
        (o = gs(t, 1)),
        (s[ze] = u));
    for (f in Wi)
      ((u = r[f]),
        (c = o[f]),
        u !== c &&
          n.indexOf(f) < 0 &&
          ((l = vt(u)),
          (_ = vt(c)),
          (h = l !== _ ? cr(t, f, u, _) : parseFloat(u)),
          (p = parseFloat(c)),
          (e._pt = new Bt(e._pt, o, f, h, p - h, Ta)),
          (e._pt.u = _ || 0),
          e._props.push(f)));
    nu(o, r);
  };
Nt("padding,margin,Width,Radius", function (a, e) {
  var i = "Top",
    t = "Right",
    r = "Bottom",
    n = "Left",
    s = (e < 3 ? [i, t, r, n] : [i + n, i + t, r + t, r + n]).map(function (o) {
      return e < 2 ? a + o : "border" + o + a;
    });
  fo[e > 1 ? "border" + a : a] = function (o, f, u, c, h) {
    var p, l;
    if (arguments.length < 4)
      return (
        (p = s.map(function (_) {
          return Fi(o, _, u);
        })),
        (l = p.join(" ")),
        l.split(p[0]).length === 5 ? p[0] : l
      );
    ((p = (c + "").split(" ")),
      (l = {}),
      s.forEach(function (_, d) {
        return (l[_] = p[d] = p[d] || p[((d - 1) / 2) | 0]);
      }),
      o.init(f, l, h));
  };
});
var tc = {
  name: "css",
  register: Ca,
  targetTest: function (e) {
    return e.style && e.nodeType;
  },
  init: function (e, i, t, r, n) {
    var s = this._props,
      o = e.style,
      f = t.vars.startAt,
      u,
      c,
      h,
      p,
      l,
      _,
      d,
      g,
      m,
      x,
      v,
      T,
      y,
      k,
      C,
      P;
    (gl || Ca(),
      (this.styles = this.styles || qf(e)),
      (P = this.styles.props),
      (this.tween = t));
    for (d in i)
      if (d !== "autoRound" && ((c = i[d]), !(Gt[d] && Nf(d, i, t, r, e, n)))) {
        if (
          ((l = typeof c),
          (_ = fo[d]),
          l === "function" && ((c = c.call(t, r, e, n)), (l = typeof c)),
          l === "string" && ~c.indexOf("random(") && (c = hs(c)),
          _)
        )
          _(this, e, d, c, t) && (C = 1);
        else if (d.substr(0, 2) === "--")
          ((u = (getComputedStyle(e).getPropertyValue(d) + "").trim()),
            (c += ""),
            (ar.lastIndex = 0),
            ar.test(u) || ((g = vt(u)), (m = vt(c))),
            m ? g !== m && (u = cr(e, d, u, m) + m) : g && (c += g),
            this.add(o, "setProperty", u, c, r, n, 0, 0, d),
            s.push(d),
            P.push(d, 0, o[d]));
        else if (l !== "undefined") {
          if (
            (f && d in f
              ? ((u = typeof f[d] == "function" ? f[d].call(t, r, e, n) : f[d]),
                ot(u) && ~u.indexOf("random(") && (u = hs(u)),
                vt(u + "") ||
                  u === "auto" ||
                  (u += Zt.units[d] || vt(Fi(e, d)) || ""),
                (u + "").charAt(1) === "=" && (u = Fi(e, d)))
              : (u = Fi(e, d)),
            (p = parseFloat(u)),
            (x = l === "string" && c.charAt(1) === "=" && c.substr(0, 2)),
            x && (c = c.substr(2)),
            (h = parseFloat(c)),
            d in Mi &&
              (d === "autoAlpha" &&
                (p === 1 && Fi(e, "visibility") === "hidden" && h && (p = 0),
                P.push("visibility", 0, o.visibility),
                ir(
                  this,
                  o,
                  "visibility",
                  p ? "inherit" : "hidden",
                  h ? "inherit" : "hidden",
                  !h,
                )),
              d !== "scale" &&
                d !== "transform" &&
                ((d = Mi[d]), ~d.indexOf(",") && (d = d.split(",")[0]))),
            (v = d in Wi),
            v)
          ) {
            if (
              (this.styles.save(d),
              l === "string" &&
                c.substring(0, 6) === "var(--" &&
                ((c = ci(e, c.substring(4, c.indexOf(")")))),
                (h = parseFloat(c))),
              T ||
                ((y = e._gsap),
                (y.renderTransform && !i.parseTransform) ||
                  gs(e, i.parseTransform),
                (k = i.smoothOrigin !== !1 && y.smooth),
                (T = this._pt =
                  new Bt(this._pt, o, ze, 0, 1, y.renderTransform, y, 0, -1)),
                (T.dep = 1)),
              d === "scale")
            )
              ((this._pt = new Bt(
                this._pt,
                y,
                "scaleY",
                y.scaleY,
                (x ? nn(y.scaleY, x + h) : h) - y.scaleY || 0,
                Ta,
              )),
                (this._pt.u = 0),
                s.push("scaleY", d),
                (d += "X"));
            else if (d === "transformOrigin") {
              (P.push(zt, 0, o[zt]),
                (c = vd(c)),
                y.svg
                  ? ka(e, c, 0, k, 0, this)
                  : ((m = parseFloat(c.split(" ")[2]) || 0),
                    m !== y.zOrigin && ir(this, y, "zOrigin", y.zOrigin, m),
                    ir(this, o, d, co(u), co(c))));
              continue;
            } else if (d === "svgOrigin") {
              ka(e, c, 1, k, 0, this);
              continue;
            } else if (d in Zf) {
              Sd(this, y, d, p, x ? nn(p, x + c) : c);
              continue;
            } else if (d === "smoothOrigin") {
              ir(this, y, "smooth", y.smooth, c);
              continue;
            } else if (d === "force3D") {
              y[d] = c;
              continue;
            } else if (d === "transform") {
              Cd(this, c, e);
              continue;
            }
          } else d in o || (d = xn(d) || d);
          if (v || ((h || h === 0) && (p || p === 0) && !od.test(c) && d in o))
            ((g = (u + "").substr((p + "").length)),
              h || (h = 0),
              (m = vt(c) || (d in Zt.units ? Zt.units[d] : g)),
              g !== m && (p = cr(e, d, u, m)),
              (this._pt = new Bt(
                this._pt,
                v ? y : o,
                d,
                p,
                (x ? nn(p, x + h) : h) - p,
                !v && (m === "px" || d === "zIndex") && i.autoRound !== !1
                  ? ud
                  : Ta,
              )),
              (this._pt.u = m || 0),
              g !== m && m !== "%" && ((this._pt.b = u), (this._pt.r = ld)));
          else if (d in o) xd.call(this, e, d, u, x ? x + c : c);
          else if (d in e) this.add(e, d, u || e[d], x ? x + c : c, r, n);
          else if (d !== "parseTransform") {
            ol(d, c);
            continue;
          }
          (v ||
            (d in o
              ? P.push(d, 0, o[d])
              : typeof e[d] == "function"
                ? P.push(d, 2, e[d]())
                : P.push(d, 1, u || e[d])),
            s.push(d));
        }
      }
    C && Vf(this);
  },
  render: function (e, i) {
    if (i.tween._time || !ml())
      for (var t = i._pt; t; ) (t.r(e, t.d), (t = t._next));
    else i.styles.revert();
  },
  get: Fi,
  aliases: Mi,
  getSetter: function (e, i, t) {
    var r = Mi[i];
    return (
      r && r.indexOf(",") < 0 && (i = r),
      i in Wi && i !== zt && (e._gsap.x || Fi(e, "x"))
        ? t && Kl === t
          ? i === "scale"
            ? dd
            : hd
          : (Kl = t || {}) && (i === "scale" ? pd : _d)
        : e.style && !rl(e.style[i])
          ? fd
          : ~i.indexOf("-")
            ? cd
            : pl(e, i)
    );
  },
  core: { _removeProperty: Fr, _getMatrix: xl },
};
$t.utils.checkPrefix = xn;
$t.core.getStyleSaver = qf;
(function (a, e, i, t) {
  var r = Nt(a + "," + e + "," + i, function (n) {
    Wi[n] = 1;
  });
  (Nt(e, function (n) {
    ((Zt.units[n] = "deg"), (Zf[n] = 1));
  }),
    (Mi[r[13]] = a + "," + e),
    Nt(t, function (n) {
      var s = n.split(":");
      Mi[s[1]] = r[s[0]];
    }));
})(
  "x,y,z,scale,scaleX,scaleY,xPercent,yPercent",
  "rotation,rotationX,rotationY,skewX,skewY",
  "transform,transformOrigin,svgOrigin,force3D,smoothOrigin,transformPerspective",
  "0:translateX,1:translateY,2:translateZ,8:rotate,8:rotationZ,8:rotateZ,9:rotateX,10:rotateY",
);
Nt(
  "x,y,z,top,right,bottom,left,width,height,fontSize,padding,margin,perspective",
  function (a) {
    Zt.units[a] = "px";
  },
);
$t.registerPlugin(tc);
var kd = $t.registerPlugin(tc) || $t;
kd.core.Tween;
function Pd(a, e) {
  for (var i = 0; i < e.length; i++) {
    var t = e[i];
    ((t.enumerable = t.enumerable || !1),
      (t.configurable = !0),
      "value" in t && (t.writable = !0),
      Object.defineProperty(a, t.key, t));
  }
}
function Ed(a, e, i) {
  return (e && Pd(a.prototype, e), a);
}
/*!
 * Observer 3.13.0
 * https://gsap.com
 *
 * @license Copyright 2008-2025, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license
 * @author: Jack Doyle, jack@greensock.com
 */ var ct,
  Ks,
  Qt,
  rr,
  nr,
  an,
  ic,
  wr,
  Gn,
  rc,
  Bi,
  _i,
  nc,
  sc = function () {
    return (
      ct ||
      (typeof window < "u" && (ct = window.gsap) && ct.registerPlugin && ct)
    );
  },
  oc = 1,
  Jr = [],
  pe = [],
  Oi = [],
  Un = Date.now,
  Pa = function (e, i) {
    return i;
  },
  Md = function () {
    var e = Gn.core,
      i = e.bridge || {},
      t = e._scrollers,
      r = e._proxies;
    (t.push.apply(t, pe),
      r.push.apply(r, Oi),
      (pe = t),
      (Oi = r),
      (Pa = function (s, o) {
        return i[s](o);
      }));
  },
  lr = function (e, i) {
    return ~Oi.indexOf(e) && Oi[Oi.indexOf(e) + 1][i];
  },
  qn = function (e) {
    return !!~rc.indexOf(e);
  },
  kt = function (e, i, t, r, n) {
    return e.addEventListener(i, t, { passive: r !== !1, capture: !!n });
  },
  Ct = function (e, i, t, r) {
    return e.removeEventListener(i, t, !!r);
  },
  Es = "scrollLeft",
  Ms = "scrollTop",
  Ea = function () {
    return (Bi && Bi.isPressed) || pe.cache++;
  },
  ho = function (e, i) {
    var t = function r(n) {
      if (n || n === 0) {
        oc && (Qt.history.scrollRestoration = "manual");
        var s = Bi && Bi.isPressed;
        ((n = r.v = Math.round(n) || (Bi && Bi.iOS ? 1 : 0)),
          e(n),
          (r.cacheID = pe.cache),
          s && Pa("ss", n));
      } else
        (i || pe.cache !== r.cacheID || Pa("ref")) &&
          ((r.cacheID = pe.cache), (r.v = e()));
      return r.v + r.offset;
    };
    return ((t.offset = 0), e && t);
  },
  Ot = {
    s: Es,
    p: "left",
    p2: "Left",
    os: "right",
    os2: "Right",
    d: "width",
    d2: "Width",
    a: "x",
    sc: ho(function (a) {
      return arguments.length
        ? Qt.scrollTo(a, rt.sc())
        : Qt.pageXOffset || rr[Es] || nr[Es] || an[Es] || 0;
    }),
  },
  rt = {
    s: Ms,
    p: "top",
    p2: "Top",
    os: "bottom",
    os2: "Bottom",
    d: "height",
    d2: "Height",
    a: "y",
    op: Ot,
    sc: ho(function (a) {
      return arguments.length
        ? Qt.scrollTo(Ot.sc(), a)
        : Qt.pageYOffset || rr[Ms] || nr[Ms] || an[Ms] || 0;
    }),
  },
  Lt = function (e, i) {
    return (
      ((i && i._ctx && i._ctx.selector) || ct.utils.toArray)(e)[0] ||
      (typeof e == "string" && ct.config().nullTargetWarn !== !1
        ? console.warn("Element not found:", e)
        : null)
    );
  },
  Dd = function (e, i) {
    for (var t = i.length; t--; ) if (i[t] === e || i[t].contains(e)) return !0;
    return !1;
  },
  hr = function (e, i) {
    var t = i.s,
      r = i.sc;
    qn(e) && (e = rr.scrollingElement || nr);
    var n = pe.indexOf(e),
      s = r === rt.sc ? 1 : 2;
    (!~n && (n = pe.push(e) - 1), pe[n + s] || kt(e, "scroll", Ea));
    var o = pe[n + s],
      f =
        o ||
        (pe[n + s] =
          ho(lr(e, t), !0) ||
          (qn(e)
            ? r
            : ho(function (u) {
                return arguments.length ? (e[t] = u) : e[t];
              })));
    return (
      (f.target = e),
      o || (f.smooth = ct.getProperty(e, "scrollBehavior") === "smooth"),
      f
    );
  },
  Ma = function (e, i, t) {
    var r = e,
      n = e,
      s = Un(),
      o = s,
      f = i || 50,
      u = Math.max(500, f * 3),
      c = function (_, d) {
        var g = Un();
        d || g - s > f
          ? ((n = r), (r = _), (o = s), (s = g))
          : t
            ? (r += _)
            : (r = n + ((_ - n) / (g - o)) * (s - o));
      },
      h = function () {
        ((n = r = t ? 0 : r), (o = s = 0));
      },
      p = function (_) {
        var d = o,
          g = n,
          m = Un();
        return (
          (_ || _ === 0) && _ !== r && c(_),
          s === o || m - o > u
            ? 0
            : ((r + (t ? g : -g)) / ((t ? m : s) - d)) * 1e3
        );
      };
    return { update: c, reset: h, getVelocity: p };
  },
  kn = function (e, i) {
    return (
      i && !e._gsapAllow && e.preventDefault(),
      e.changedTouches ? e.changedTouches[0] : e
    );
  },
  su = function (e) {
    var i = Math.max.apply(Math, e),
      t = Math.min.apply(Math, e);
    return Math.abs(i) >= Math.abs(t) ? i : t;
  },
  ac = function () {
    ((Gn = ct.core.globals().ScrollTrigger), Gn && Gn.core && Md());
  },
  lc = function (e) {
    return (
      (ct = e || sc()),
      !Ks &&
        ct &&
        typeof document < "u" &&
        document.body &&
        ((Qt = window),
        (rr = document),
        (nr = rr.documentElement),
        (an = rr.body),
        (rc = [Qt, rr, nr, an]),
        ct.utils.clamp,
        (nc = ct.core.context || function () {}),
        (wr = "onpointerenter" in an ? "pointer" : "mouse"),
        (ic = Ge.isTouch =
          Qt.matchMedia &&
          Qt.matchMedia("(hover: none), (pointer: coarse)").matches
            ? 1
            : "ontouchstart" in Qt ||
                navigator.maxTouchPoints > 0 ||
                navigator.msMaxTouchPoints > 0
              ? 2
              : 0),
        (_i = Ge.eventTypes =
          (
            "ontouchstart" in nr
              ? "touchstart,touchmove,touchcancel,touchend"
              : "onpointerdown" in nr
                ? "pointerdown,pointermove,pointercancel,pointerup"
                : "mousedown,mousemove,mouseup,mouseup"
          ).split(",")),
        setTimeout(function () {
          return (oc = 0);
        }, 500),
        ac(),
        (Ks = 1)),
      Ks
    );
  };
Ot.op = rt;
pe.cache = 0;
var Ge = (function () {
  function a(i) {
    this.init(i);
  }
  var e = a.prototype;
  return (
    (e.init = function (t) {
      (Ks || lc(ct) || console.warn("Please gsap.registerPlugin(Observer)"),
        Gn || ac());
      var r = t.tolerance,
        n = t.dragMinimum,
        s = t.type,
        o = t.target,
        f = t.lineHeight,
        u = t.debounce,
        c = t.preventDefault,
        h = t.onStop,
        p = t.onStopDelay,
        l = t.ignore,
        _ = t.wheelSpeed,
        d = t.event,
        g = t.onDragStart,
        m = t.onDragEnd,
        x = t.onDrag,
        v = t.onPress,
        T = t.onRelease,
        y = t.onRight,
        k = t.onLeft,
        C = t.onUp,
        P = t.onDown,
        E = t.onChangeX,
        D = t.onChangeY,
        F = t.onChange,
        R = t.onToggleX,
        L = t.onToggleY,
        V = t.onHover,
        z = t.onHoverEnd,
        X = t.onMove,
        $ = t.ignoreCheck,
        J = t.isNormalizer,
        re = t.onGestureStart,
        b = t.onGestureEnd,
        W = t.onWheel,
        G = t.onEnable,
        ne = t.onDisable,
        j = t.onClick,
        se = t.scrollSpeed,
        te = t.capture,
        ye = t.allowClicks,
        oe = t.lockAxis,
        Oe = t.onLockAxis;
      ((this.target = o = Lt(o) || nr),
        (this.vars = t),
        l && (l = ct.utils.toArray(l)),
        (r = r || 1e-9),
        (n = n || 0),
        (_ = _ || 1),
        (se = se || 1),
        (s = s || "wheel,touch,pointer"),
        (u = u !== !1),
        f || (f = parseFloat(Qt.getComputedStyle(an).lineHeight) || 22));
      var ce,
        we,
        Ae,
        Z,
        ee,
        ae,
        Ue,
        M = this,
        be = 0,
        Tt = 0,
        dt = t.passive || (!c && t.passive !== !1),
        U = hr(o, Ot),
        Re = hr(o, rt),
        di = U(),
        ti = Re(),
        Ve =
          ~s.indexOf("touch") &&
          !~s.indexOf("pointer") &&
          _i[0] === "pointerdown",
        Ze = qn(o),
        ke = o.ownerDocument || rr,
        St = [0, 0, 0],
        At = [0, 0, 0],
        Yt = 0,
        pr = function () {
          return (Yt = Un());
        },
        $e = function (O, N) {
          return (
            ((M.event = O) && l && Dd(O.target, l)) ||
            (N && Ve && O.pointerType !== "touch") ||
            ($ && $(O, N))
          );
        },
        Gi = function () {
          (M._vx.reset(), M._vy.reset(), we.pause(), h && h(M));
        },
        ii = function () {
          var O = (M.deltaX = su(St)),
            N = (M.deltaY = su(At)),
            A = Math.abs(O) >= r,
            Y = Math.abs(N) >= r;
          (F && (A || Y) && F(M, O, N, St, At),
            A &&
              (y && M.deltaX > 0 && y(M),
              k && M.deltaX < 0 && k(M),
              E && E(M),
              R && M.deltaX < 0 != be < 0 && R(M),
              (be = M.deltaX),
              (St[0] = St[1] = St[2] = 0)),
            Y &&
              (P && M.deltaY > 0 && P(M),
              C && M.deltaY < 0 && C(M),
              D && D(M),
              L && M.deltaY < 0 != Tt < 0 && L(M),
              (Tt = M.deltaY),
              (At[0] = At[1] = At[2] = 0)),
            (Z || Ae) &&
              (X && X(M),
              Ae && (g && Ae === 1 && g(M), x && x(M), (Ae = 0)),
              (Z = !1)),
            ae && !(ae = !1) && Oe && Oe(M),
            ee && (W(M), (ee = !1)),
            (ce = 0));
        },
        pi = function (O, N, A) {
          ((St[A] += O),
            (At[A] += N),
            M._vx.update(O),
            M._vy.update(N),
            u ? ce || (ce = requestAnimationFrame(ii)) : ii());
        },
        ri = function (O, N) {
          (oe &&
            !Ue &&
            ((M.axis = Ue = Math.abs(O) > Math.abs(N) ? "x" : "y"), (ae = !0)),
            Ue !== "y" && ((St[2] += O), M._vx.update(O, !0)),
            Ue !== "x" && ((At[2] += N), M._vy.update(N, !0)),
            u ? ce || (ce = requestAnimationFrame(ii)) : ii());
        },
        wi = function (O) {
          if (!$e(O, 1)) {
            O = kn(O, c);
            var N = O.clientX,
              A = O.clientY,
              Y = N - M.x,
              I = A - M.y,
              H = M.isDragging;
            ((M.x = N),
              (M.y = A),
              (H ||
                ((Y || I) &&
                  (Math.abs(M.startX - N) >= n ||
                    Math.abs(M.startY - A) >= n))) &&
                ((Ae = H ? 2 : 1), H || (M.isDragging = !0), ri(Y, I)));
          }
        },
        Xt = (M.onPress = function (S) {
          $e(S, 1) ||
            (S && S.button) ||
            ((M.axis = Ue = null),
            we.pause(),
            (M.isPressed = !0),
            (S = kn(S)),
            (be = Tt = 0),
            (M.startX = M.x = S.clientX),
            (M.startY = M.y = S.clientY),
            M._vx.reset(),
            M._vy.reset(),
            kt(J ? o : ke, _i[1], wi, dt, !0),
            (M.deltaX = M.deltaY = 0),
            v && v(M));
        }),
        le = (M.onRelease = function (S) {
          if (!$e(S, 1)) {
            Ct(J ? o : ke, _i[1], wi, !0);
            var O = !isNaN(M.y - M.startY),
              N = M.isDragging,
              A =
                N &&
                (Math.abs(M.x - M.startX) > 3 || Math.abs(M.y - M.startY) > 3),
              Y = kn(S);
            (!A &&
              O &&
              (M._vx.reset(),
              M._vy.reset(),
              c &&
                ye &&
                ct.delayedCall(0.08, function () {
                  if (Un() - Yt > 300 && !S.defaultPrevented) {
                    if (S.target.click) S.target.click();
                    else if (ke.createEvent) {
                      var I = ke.createEvent("MouseEvents");
                      (I.initMouseEvent(
                        "click",
                        !0,
                        !0,
                        Qt,
                        1,
                        Y.screenX,
                        Y.screenY,
                        Y.clientX,
                        Y.clientY,
                        !1,
                        !1,
                        !1,
                        !1,
                        0,
                        null,
                      ),
                        S.target.dispatchEvent(I));
                    }
                  }
                })),
              (M.isDragging = M.isGesturing = M.isPressed = !1),
              h && N && !J && we.restart(!0),
              Ae && ii(),
              m && N && m(M),
              T && T(M, A));
          }
        }),
        Vt = function (O) {
          return (
            O.touches &&
            O.touches.length > 1 &&
            (M.isGesturing = !0) &&
            re(O, M.isDragging)
          );
        },
        Ne = function () {
          return (M.isGesturing = !1) || b(M);
        },
        pt = function (O) {
          if (!$e(O)) {
            var N = U(),
              A = Re();
            (pi((N - di) * se, (A - ti) * se, 1),
              (di = N),
              (ti = A),
              h && we.restart(!0));
          }
        },
        Rt = function (O) {
          if (!$e(O)) {
            ((O = kn(O, c)), W && (ee = !0));
            var N =
              (O.deltaMode === 1 ? f : O.deltaMode === 2 ? Qt.innerHeight : 1) *
              _;
            (pi(O.deltaX * N, O.deltaY * N, 0), h && !J && we.restart(!0));
          }
        },
        bi = function (O) {
          if (!$e(O)) {
            var N = O.clientX,
              A = O.clientY,
              Y = N - M.x,
              I = A - M.y;
            ((M.x = N),
              (M.y = A),
              (Z = !0),
              h && we.restart(!0),
              (Y || I) && ri(Y, I));
          }
        },
        K = function (O) {
          ((M.event = O), V(M));
        },
        w = function (O) {
          ((M.event = O), z(M));
        },
        B = function (O) {
          return $e(O) || (kn(O, c) && j(M));
        };
      ((we = M._dc = ct.delayedCall(p || 0.25, Gi).pause()),
        (M.deltaX = M.deltaY = 0),
        (M._vx = Ma(0, 50, !0)),
        (M._vy = Ma(0, 50, !0)),
        (M.scrollX = U),
        (M.scrollY = Re),
        (M.isDragging = M.isGesturing = M.isPressed = !1),
        nc(this),
        (M.enable = function (S) {
          return (
            M.isEnabled ||
              (kt(Ze ? ke : o, "scroll", Ea),
              s.indexOf("scroll") >= 0 && kt(Ze ? ke : o, "scroll", pt, dt, te),
              s.indexOf("wheel") >= 0 && kt(o, "wheel", Rt, dt, te),
              ((s.indexOf("touch") >= 0 && ic) || s.indexOf("pointer") >= 0) &&
                (kt(o, _i[0], Xt, dt, te),
                kt(ke, _i[2], le),
                kt(ke, _i[3], le),
                ye && kt(o, "click", pr, !0, !0),
                j && kt(o, "click", B),
                re && kt(ke, "gesturestart", Vt),
                b && kt(ke, "gestureend", Ne),
                V && kt(o, wr + "enter", K),
                z && kt(o, wr + "leave", w),
                X && kt(o, wr + "move", bi)),
              (M.isEnabled = !0),
              (M.isDragging = M.isGesturing = M.isPressed = Z = Ae = !1),
              M._vx.reset(),
              M._vy.reset(),
              (di = U()),
              (ti = Re()),
              S && S.type && Xt(S),
              G && G(M)),
            M
          );
        }),
        (M.disable = function () {
          M.isEnabled &&
            (Jr.filter(function (S) {
              return S !== M && qn(S.target);
            }).length || Ct(Ze ? ke : o, "scroll", Ea),
            M.isPressed &&
              (M._vx.reset(), M._vy.reset(), Ct(J ? o : ke, _i[1], wi, !0)),
            Ct(Ze ? ke : o, "scroll", pt, te),
            Ct(o, "wheel", Rt, te),
            Ct(o, _i[0], Xt, te),
            Ct(ke, _i[2], le),
            Ct(ke, _i[3], le),
            Ct(o, "click", pr, !0),
            Ct(o, "click", B),
            Ct(ke, "gesturestart", Vt),
            Ct(ke, "gestureend", Ne),
            Ct(o, wr + "enter", K),
            Ct(o, wr + "leave", w),
            Ct(o, wr + "move", bi),
            (M.isEnabled = M.isPressed = M.isDragging = !1),
            ne && ne(M));
        }),
        (M.kill = M.revert =
          function () {
            M.disable();
            var S = Jr.indexOf(M);
            (S >= 0 && Jr.splice(S, 1), Bi === M && (Bi = 0));
          }),
        Jr.push(M),
        J && qn(o) && (Bi = M),
        M.enable(d));
    }),
    Ed(a, [
      {
        key: "velocityX",
        get: function () {
          return this._vx.getVelocity();
        },
      },
      {
        key: "velocityY",
        get: function () {
          return this._vy.getVelocity();
        },
      },
    ]),
    a
  );
})();
Ge.version = "3.13.0";
Ge.create = function (a) {
  return new Ge(a);
};
Ge.register = lc;
Ge.getAll = function () {
  return Jr.slice();
};
Ge.getById = function (a) {
  return Jr.filter(function (e) {
    return e.vars.id === a;
  })[0];
};
sc() && ct.registerPlugin(Ge);
/*!
 * ScrollTrigger 3.13.0
 * https://gsap.com
 *
 * @license Copyright 2008-2025, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license
 * @author: Jack Doyle, jack@greensock.com
 */ var q,
  qr,
  de,
  Le,
  Ut,
  Ce,
  vl,
  po,
  ms,
  Qn,
  Rn,
  Ds,
  mt,
  Mo,
  Da,
  Et,
  ou,
  au,
  Qr,
  uc,
  Wo,
  fc,
  Pt,
  Oa,
  cc,
  hc,
  ji,
  Aa,
  wl,
  ln,
  bl,
  _o,
  Ra,
  Ho,
  Os = 1,
  yt = Date.now,
  Go = yt(),
  hi = 0,
  Ln = 0,
  lu = function (e, i, t) {
    var r = Ht(e) && (e.substr(0, 6) === "clamp(" || e.indexOf("max") > -1);
    return ((t["_" + i + "Clamp"] = r), r ? e.substr(6, e.length - 7) : e);
  },
  uu = function (e, i) {
    return i && (!Ht(e) || e.substr(0, 6) !== "clamp(")
      ? "clamp(" + e + ")"
      : e;
  },
  Od = function a() {
    return Ln && requestAnimationFrame(a);
  },
  fu = function () {
    return (Mo = 1);
  },
  cu = function () {
    return (Mo = 0);
  },
  ki = function (e) {
    return e;
  },
  Fn = function (e) {
    return Math.round(e * 1e5) / 1e5 || 0;
  },
  dc = function () {
    return typeof window < "u";
  },
  pc = function () {
    return q || (dc() && (q = window.gsap) && q.registerPlugin && q);
  },
  Ir = function (e) {
    return !!~vl.indexOf(e);
  },
  _c = function (e) {
    return (
      (e === "Height" ? bl : de["inner" + e]) ||
      Ut["client" + e] ||
      Ce["client" + e]
    );
  },
  gc = function (e) {
    return (
      lr(e, "getBoundingClientRect") ||
      (Ir(e)
        ? function () {
            return ((to.width = de.innerWidth), (to.height = bl), to);
          }
        : function () {
            return Ni(e);
          })
    );
  },
  Ad = function (e, i, t) {
    var r = t.d,
      n = t.d2,
      s = t.a;
    return (s = lr(e, "getBoundingClientRect"))
      ? function () {
          return s()[r];
        }
      : function () {
          return (i ? _c(n) : e["client" + n]) || 0;
        };
  },
  Rd = function (e, i) {
    return !i || ~Oi.indexOf(e)
      ? gc(e)
      : function () {
          return to;
        };
  },
  Di = function (e, i) {
    var t = i.s,
      r = i.d2,
      n = i.d,
      s = i.a;
    return Math.max(
      0,
      (t = "scroll" + r) && (s = lr(e, t))
        ? s() - gc(e)()[n]
        : Ir(e)
          ? (Ut[t] || Ce[t]) - _c(r)
          : e[t] - e["offset" + r],
    );
  },
  As = function (e, i) {
    for (var t = 0; t < Qr.length; t += 3)
      (!i || ~i.indexOf(Qr[t + 1])) && e(Qr[t], Qr[t + 1], Qr[t + 2]);
  },
  Ht = function (e) {
    return typeof e == "string";
  },
  wt = function (e) {
    return typeof e == "function";
  },
  In = function (e) {
    return typeof e == "number";
  },
  br = function (e) {
    return typeof e == "object";
  },
  Pn = function (e, i, t) {
    return e && e.progress(i ? 0 : 1) && t && e.pause();
  },
  Uo = function (e, i) {
    if (e.enabled) {
      var t = e._ctx
        ? e._ctx.add(function () {
            return i(e);
          })
        : i(e);
      t && t.totalTime && (e.callbackAnimation = t);
    }
  },
  Xr = Math.abs,
  mc = "left",
  yc = "top",
  Tl = "right",
  Sl = "bottom",
  Mr = "width",
  Dr = "height",
  Kn = "Right",
  jn = "Left",
  Zn = "Top",
  Jn = "Bottom",
  Qe = "padding",
  ai = "margin",
  vn = "Width",
  Cl = "Height",
  et = "px",
  li = function (e) {
    return de.getComputedStyle(e);
  },
  Ld = function (e) {
    var i = li(e).position;
    e.style.position = i === "absolute" || i === "fixed" ? i : "relative";
  },
  hu = function (e, i) {
    for (var t in i) t in e || (e[t] = i[t]);
    return e;
  },
  Ni = function (e, i) {
    var t =
        i &&
        li(e)[Da] !== "matrix(1, 0, 0, 1, 0, 0)" &&
        q
          .to(e, {
            x: 0,
            y: 0,
            xPercent: 0,
            yPercent: 0,
            rotation: 0,
            rotationX: 0,
            rotationY: 0,
            scale: 1,
            skewX: 0,
            skewY: 0,
          })
          .progress(1),
      r = e.getBoundingClientRect();
    return (t && t.progress(0).kill(), r);
  },
  go = function (e, i) {
    var t = i.d2;
    return e["offset" + t] || e["client" + t] || 0;
  },
  xc = function (e) {
    var i = [],
      t = e.labels,
      r = e.duration(),
      n;
    for (n in t) i.push(t[n] / r);
    return i;
  },
  Fd = function (e) {
    return function (i) {
      return q.utils.snap(xc(e), i);
    };
  },
  kl = function (e) {
    var i = q.utils.snap(e),
      t =
        Array.isArray(e) &&
        e.slice(0).sort(function (r, n) {
          return r - n;
        });
    return t
      ? function (r, n, s) {
          s === void 0 && (s = 0.001);
          var o;
          if (!n) return i(r);
          if (n > 0) {
            for (r -= s, o = 0; o < t.length; o++) if (t[o] >= r) return t[o];
            return t[o - 1];
          } else for (o = t.length, r += s; o--; ) if (t[o] <= r) return t[o];
          return t[0];
        }
      : function (r, n, s) {
          s === void 0 && (s = 0.001);
          var o = i(r);
          return !n || Math.abs(o - r) < s || o - r < 0 == n < 0
            ? o
            : i(n < 0 ? r - e : r + e);
        };
  },
  Id = function (e) {
    return function (i, t) {
      return kl(xc(e))(i, t.direction);
    };
  },
  Rs = function (e, i, t, r) {
    return t.split(",").forEach(function (n) {
      return e(i, n, r);
    });
  },
  st = function (e, i, t, r, n) {
    return e.addEventListener(i, t, { passive: !r, capture: !!n });
  },
  nt = function (e, i, t, r) {
    return e.removeEventListener(i, t, !!r);
  },
  Ls = function (e, i, t) {
    ((t = t && t.wheelHandler), t && (e(i, "wheel", t), e(i, "touchmove", t)));
  },
  du = {
    startColor: "green",
    endColor: "red",
    indent: 0,
    fontSize: "16px",
    fontWeight: "normal",
  },
  Fs = { toggleActions: "play", anticipatePin: 0 },
  mo = { top: 0, left: 0, center: 0.5, bottom: 1, right: 1 },
  js = function (e, i) {
    if (Ht(e)) {
      var t = e.indexOf("="),
        r = ~t ? +(e.charAt(t - 1) + 1) * parseFloat(e.substr(t + 1)) : 0;
      (~t && (e.indexOf("%") > t && (r *= i / 100), (e = e.substr(0, t - 1))),
        (e =
          r +
          (e in mo
            ? mo[e] * i
            : ~e.indexOf("%")
              ? (parseFloat(e) * i) / 100
              : parseFloat(e) || 0)));
    }
    return e;
  },
  Is = function (e, i, t, r, n, s, o, f) {
    var u = n.startColor,
      c = n.endColor,
      h = n.fontSize,
      p = n.indent,
      l = n.fontWeight,
      _ = Le.createElement("div"),
      d = Ir(t) || lr(t, "pinType") === "fixed",
      g = e.indexOf("scroller") !== -1,
      m = d ? Ce : t,
      x = e.indexOf("start") !== -1,
      v = x ? u : c,
      T =
        "border-color:" +
        v +
        ";font-size:" +
        h +
        ";color:" +
        v +
        ";font-weight:" +
        l +
        ";pointer-events:none;white-space:nowrap;font-family:sans-serif,Arial;z-index:1000;padding:4px 8px;border-width:0;border-style:solid;";
    return (
      (T += "position:" + ((g || f) && d ? "fixed;" : "absolute;")),
      (g || f || !d) &&
        (T += (r === rt ? Tl : Sl) + ":" + (s + parseFloat(p)) + "px;"),
      o &&
        (T +=
          "box-sizing:border-box;text-align:left;width:" +
          o.offsetWidth +
          "px;"),
      (_._isStart = x),
      _.setAttribute("class", "gsap-marker-" + e + (i ? " marker-" + i : "")),
      (_.style.cssText = T),
      (_.innerText = i || i === 0 ? e + "-" + i : e),
      m.children[0] ? m.insertBefore(_, m.children[0]) : m.appendChild(_),
      (_._offset = _["offset" + r.op.d2]),
      Zs(_, 0, r, x),
      _
    );
  },
  Zs = function (e, i, t, r) {
    var n = { display: "block" },
      s = t[r ? "os2" : "p2"],
      o = t[r ? "p2" : "os2"];
    ((e._isFlipped = r),
      (n[t.a + "Percent"] = r ? -100 : 0),
      (n[t.a] = r ? "1px" : 0),
      (n["border" + s + vn] = 1),
      (n["border" + o + vn] = 0),
      (n[t.p] = i + "px"),
      q.set(e, n));
  },
  he = [],
  La = {},
  ys,
  pu = function () {
    return yt() - hi > 34 && (ys || (ys = requestAnimationFrame(Xi)));
  },
  Vr = function () {
    (!Pt || !Pt.isPressed || Pt.startX > Ce.clientWidth) &&
      (pe.cache++,
      Pt ? ys || (ys = requestAnimationFrame(Xi)) : Xi(),
      hi || Br("scrollStart"),
      (hi = yt()));
  },
  qo = function () {
    ((hc = de.innerWidth), (cc = de.innerHeight));
  },
  Nn = function (e) {
    (pe.cache++,
      (e === !0 ||
        (!mt &&
          !fc &&
          !Le.fullscreenElement &&
          !Le.webkitFullscreenElement &&
          (!Oa ||
            hc !== de.innerWidth ||
            Math.abs(de.innerHeight - cc) > de.innerHeight * 0.25))) &&
        po.restart(!0));
  },
  Nr = {},
  Nd = [],
  vc = function a() {
    return nt(me, "scrollEnd", a) || Sr(!0);
  },
  Br = function (e) {
    return (
      (Nr[e] &&
        Nr[e].map(function (i) {
          return i();
        })) ||
      Nd
    );
  },
  Wt = [],
  wc = function (e) {
    for (var i = 0; i < Wt.length; i += 5)
      (!e || (Wt[i + 4] && Wt[i + 4].query === e)) &&
        ((Wt[i].style.cssText = Wt[i + 1]),
        Wt[i].getBBox && Wt[i].setAttribute("transform", Wt[i + 2] || ""),
        (Wt[i + 3].uncache = 1));
  },
  Pl = function (e, i) {
    var t;
    for (Et = 0; Et < he.length; Et++)
      ((t = he[Et]),
        t && (!i || t._ctx === i) && (e ? t.kill(1) : t.revert(!0, !0)));
    ((_o = !0), i && wc(i), i || Br("revert"));
  },
  bc = function (e, i) {
    (pe.cache++,
      (i || !Mt) &&
        pe.forEach(function (t) {
          return wt(t) && t.cacheID++ && (t.rec = 0);
        }),
      Ht(e) && (de.history.scrollRestoration = wl = e));
  },
  Mt,
  Or = 0,
  _u,
  Bd = function () {
    if (_u !== Or) {
      var e = (_u = Or);
      requestAnimationFrame(function () {
        return e === Or && Sr(!0);
      });
    }
  },
  Tc = function () {
    (Ce.appendChild(ln),
      (bl = (!Pt && ln.offsetHeight) || de.innerHeight),
      Ce.removeChild(ln));
  },
  gu = function (e) {
    return ms(
      ".gsap-marker-start, .gsap-marker-end, .gsap-marker-scroller-start, .gsap-marker-scroller-end",
    ).forEach(function (i) {
      return (i.style.display = e ? "none" : "block");
    });
  },
  Sr = function (e, i) {
    if (
      ((Ut = Le.documentElement),
      (Ce = Le.body),
      (vl = [de, Le, Ut, Ce]),
      hi && !e && !_o)
    ) {
      st(me, "scrollEnd", vc);
      return;
    }
    (Tc(),
      (Mt = me.isRefreshing = !0),
      pe.forEach(function (r) {
        return wt(r) && ++r.cacheID && (r.rec = r());
      }));
    var t = Br("refreshInit");
    (uc && me.sort(),
      i || Pl(),
      pe.forEach(function (r) {
        wt(r) && (r.smooth && (r.target.style.scrollBehavior = "auto"), r(0));
      }),
      he.slice(0).forEach(function (r) {
        return r.refresh();
      }),
      (_o = !1),
      he.forEach(function (r) {
        if (r._subPinOffset && r.pin) {
          var n = r.vars.horizontal ? "offsetWidth" : "offsetHeight",
            s = r.pin[n];
          (r.revert(!0, 1), r.adjustPinSpacing(r.pin[n] - s), r.refresh());
        }
      }),
      (Ra = 1),
      gu(!0),
      he.forEach(function (r) {
        var n = Di(r.scroller, r._dir),
          s = r.vars.end === "max" || (r._endClamp && r.end > n),
          o = r._startClamp && r.start >= n;
        (s || o) &&
          r.setPositions(
            o ? n - 1 : r.start,
            s ? Math.max(o ? n : r.start + 1, n) : r.end,
            !0,
          );
      }),
      gu(!1),
      (Ra = 0),
      t.forEach(function (r) {
        return r && r.render && r.render(-1);
      }),
      pe.forEach(function (r) {
        wt(r) &&
          (r.smooth &&
            requestAnimationFrame(function () {
              return (r.target.style.scrollBehavior = "smooth");
            }),
          r.rec && r(r.rec));
      }),
      bc(wl, 1),
      po.pause(),
      Or++,
      (Mt = 2),
      Xi(2),
      he.forEach(function (r) {
        return wt(r.vars.onRefresh) && r.vars.onRefresh(r);
      }),
      (Mt = me.isRefreshing = !1),
      Br("refresh"));
  },
  Fa = 0,
  Js = 1,
  es,
  Xi = function (e) {
    if (e === 2 || (!Mt && !_o)) {
      ((me.isUpdating = !0), es && es.update(0));
      var i = he.length,
        t = yt(),
        r = t - Go >= 50,
        n = i && he[0].scroll();
      if (
        ((Js = Fa > n ? -1 : 1),
        Mt || (Fa = n),
        r &&
          (hi && !Mo && t - hi > 200 && ((hi = 0), Br("scrollEnd")),
          (Rn = Go),
          (Go = t)),
        Js < 0)
      ) {
        for (Et = i; Et-- > 0; ) he[Et] && he[Et].update(0, r);
        Js = 1;
      } else for (Et = 0; Et < i; Et++) he[Et] && he[Et].update(0, r);
      me.isUpdating = !1;
    }
    ys = 0;
  },
  Ia = [
    mc,
    yc,
    Sl,
    Tl,
    ai + Jn,
    ai + Kn,
    ai + Zn,
    ai + jn,
    "display",
    "flexShrink",
    "float",
    "zIndex",
    "gridColumnStart",
    "gridColumnEnd",
    "gridRowStart",
    "gridRowEnd",
    "gridArea",
    "justifySelf",
    "alignSelf",
    "placeSelf",
    "order",
  ],
  eo = Ia.concat([
    Mr,
    Dr,
    "boxSizing",
    "max" + vn,
    "max" + Cl,
    "position",
    ai,
    Qe,
    Qe + Zn,
    Qe + Kn,
    Qe + Jn,
    Qe + jn,
  ]),
  zd = function (e, i, t) {
    un(t);
    var r = e._gsap;
    if (r.spacerIsNative) un(r.spacerState);
    else if (e._gsap.swappedIn) {
      var n = i.parentNode;
      n && (n.insertBefore(e, i), n.removeChild(i));
    }
    e._gsap.swappedIn = !1;
  },
  Qo = function (e, i, t, r) {
    if (!e._gsap.swappedIn) {
      for (var n = Ia.length, s = i.style, o = e.style, f; n--; )
        ((f = Ia[n]), (s[f] = t[f]));
      ((s.position = t.position === "absolute" ? "absolute" : "relative"),
        t.display === "inline" && (s.display = "inline-block"),
        (o[Sl] = o[Tl] = "auto"),
        (s.flexBasis = t.flexBasis || "auto"),
        (s.overflow = "visible"),
        (s.boxSizing = "border-box"),
        (s[Mr] = go(e, Ot) + et),
        (s[Dr] = go(e, rt) + et),
        (s[Qe] = o[ai] = o[yc] = o[mc] = "0"),
        un(r),
        (o[Mr] = o["max" + vn] = t[Mr]),
        (o[Dr] = o["max" + Cl] = t[Dr]),
        (o[Qe] = t[Qe]),
        e.parentNode !== i &&
          (e.parentNode.insertBefore(i, e), i.appendChild(e)),
        (e._gsap.swappedIn = !0));
    }
  },
  $d = /([A-Z])/g,
  un = function (e) {
    if (e) {
      var i = e.t.style,
        t = e.length,
        r = 0,
        n,
        s;
      for ((e.t._gsap || q.core.getCache(e.t)).uncache = 1; r < t; r += 2)
        ((s = e[r + 1]),
          (n = e[r]),
          s
            ? (i[n] = s)
            : i[n] && i.removeProperty(n.replace($d, "-$1").toLowerCase()));
    }
  },
  Ns = function (e) {
    for (var i = eo.length, t = e.style, r = [], n = 0; n < i; n++)
      r.push(eo[n], t[eo[n]]);
    return ((r.t = e), r);
  },
  Yd = function (e, i, t) {
    for (var r = [], n = e.length, s = t ? 8 : 0, o; s < n; s += 2)
      ((o = e[s]), r.push(o, o in i ? i[o] : e[s + 1]));
    return ((r.t = e.t), r);
  },
  to = { left: 0, top: 0 },
  mu = function (e, i, t, r, n, s, o, f, u, c, h, p, l, _) {
    (wt(e) && (e = e(f)),
      Ht(e) &&
        e.substr(0, 3) === "max" &&
        (e = p + (e.charAt(4) === "=" ? js("0" + e.substr(3), t) : 0)));
    var d = l ? l.time() : 0,
      g,
      m,
      x;
    if ((l && l.seek(0), isNaN(e) || (e = +e), In(e)))
      (l &&
        (e = q.utils.mapRange(
          l.scrollTrigger.start,
          l.scrollTrigger.end,
          0,
          p,
          e,
        )),
        o && Zs(o, t, r, !0));
    else {
      wt(i) && (i = i(f));
      var v = (e || "0").split(" "),
        T,
        y,
        k,
        C;
      ((x = Lt(i, f) || Ce),
        (T = Ni(x) || {}),
        (!T || (!T.left && !T.top)) &&
          li(x).display === "none" &&
          ((C = x.style.display),
          (x.style.display = "block"),
          (T = Ni(x)),
          C ? (x.style.display = C) : x.style.removeProperty("display")),
        (y = js(v[0], T[r.d])),
        (k = js(v[1] || "0", t)),
        (e = T[r.p] - u[r.p] - c + y + n - k),
        o && Zs(o, k, r, t - k < 20 || (o._isStart && k > 20)),
        (t -= t - k));
    }
    if ((_ && ((f[_] = e || -0.001), e < 0 && (e = 0)), s)) {
      var P = e + t,
        E = s._isStart;
      ((g = "scroll" + r.d2),
        Zs(
          s,
          P,
          r,
          (E && P > 20) ||
            (!E && (h ? Math.max(Ce[g], Ut[g]) : s.parentNode[g]) <= P + 1),
        ),
        h &&
          ((u = Ni(o)),
          h && (s.style[r.op.p] = u[r.op.p] - r.op.m - s._offset + et)));
    }
    return (
      l &&
        x &&
        ((g = Ni(x)),
        l.seek(p),
        (m = Ni(x)),
        (l._caScrollDist = g[r.p] - m[r.p]),
        (e = (e / l._caScrollDist) * p)),
      l && l.seek(d),
      l ? e : Math.round(e)
    );
  },
  Xd = /(webkit|moz|length|cssText|inset)/i,
  yu = function (e, i, t, r) {
    if (e.parentNode !== i) {
      var n = e.style,
        s,
        o;
      if (i === Ce) {
        ((e._stOrig = n.cssText), (o = li(e)));
        for (s in o)
          !+s &&
            !Xd.test(s) &&
            o[s] &&
            typeof n[s] == "string" &&
            s !== "0" &&
            (n[s] = o[s]);
        ((n.top = t), (n.left = r));
      } else n.cssText = e._stOrig;
      ((q.core.getCache(e).uncache = 1), i.appendChild(e));
    }
  },
  Sc = function (e, i, t) {
    var r = i,
      n = r;
    return function (s) {
      var o = Math.round(e());
      return (
        o !== r &&
          o !== n &&
          Math.abs(o - r) > 3 &&
          Math.abs(o - n) > 3 &&
          ((s = o), t && t()),
        (n = r),
        (r = Math.round(s)),
        r
      );
    };
  },
  Bs = function (e, i, t) {
    var r = {};
    ((r[i.p] = "+=" + t), q.set(e, r));
  },
  xu = function (e, i) {
    var t = hr(e, i),
      r = "_scroll" + i.p2,
      n = function s(o, f, u, c, h) {
        var p = s.tween,
          l = f.onComplete,
          _ = {};
        u = u || t();
        var d = Sc(t, u, function () {
          (p.kill(), (s.tween = 0));
        });
        return (
          (h = (c && h) || 0),
          (c = c || o - u),
          p && p.kill(),
          (f[r] = o),
          (f.inherit = !1),
          (f.modifiers = _),
          (_[r] = function () {
            return d(u + c * p.ratio + h * p.ratio * p.ratio);
          }),
          (f.onUpdate = function () {
            (pe.cache++, s.tween && Xi());
          }),
          (f.onComplete = function () {
            ((s.tween = 0), l && l.call(p));
          }),
          (p = s.tween = q.to(e, f)),
          p
        );
      };
    return (
      (e[r] = t),
      (t.wheelHandler = function () {
        return n.tween && n.tween.kill() && (n.tween = 0);
      }),
      st(e, "wheel", t.wheelHandler),
      me.isTouch && st(e, "touchmove", t.wheelHandler),
      n
    );
  },
  me = (function () {
    function a(i, t) {
      (qr ||
        a.register(q) ||
        console.warn("Please gsap.registerPlugin(ScrollTrigger)"),
        Aa(this),
        this.init(i, t));
    }
    var e = a.prototype;
    return (
      (e.init = function (t, r) {
        if (
          ((this.progress = this.start = 0),
          this.vars && this.kill(!0, !0),
          !Ln)
        ) {
          this.update = this.refresh = this.kill = ki;
          return;
        }
        t = hu(Ht(t) || In(t) || t.nodeType ? { trigger: t } : t, Fs);
        var n = t,
          s = n.onUpdate,
          o = n.toggleClass,
          f = n.id,
          u = n.onToggle,
          c = n.onRefresh,
          h = n.scrub,
          p = n.trigger,
          l = n.pin,
          _ = n.pinSpacing,
          d = n.invalidateOnRefresh,
          g = n.anticipatePin,
          m = n.onScrubComplete,
          x = n.onSnapComplete,
          v = n.once,
          T = n.snap,
          y = n.pinReparent,
          k = n.pinSpacer,
          C = n.containerAnimation,
          P = n.fastScrollEnd,
          E = n.preventOverlaps,
          D =
            t.horizontal || (t.containerAnimation && t.horizontal !== !1)
              ? Ot
              : rt,
          F = !h && h !== 0,
          R = Lt(t.scroller || de),
          L = q.core.getCache(R),
          V = Ir(R),
          z =
            ("pinType" in t
              ? t.pinType
              : lr(R, "pinType") || (V && "fixed")) === "fixed",
          X = [t.onEnter, t.onLeave, t.onEnterBack, t.onLeaveBack],
          $ = F && t.toggleActions.split(" "),
          J = "markers" in t ? t.markers : Fs.markers,
          re = V ? 0 : parseFloat(li(R)["border" + D.p2 + vn]) || 0,
          b = this,
          W =
            t.onRefreshInit &&
            function () {
              return t.onRefreshInit(b);
            },
          G = Ad(R, V, D),
          ne = Rd(R, V),
          j = 0,
          se = 0,
          te = 0,
          ye = hr(R, D),
          oe,
          Oe,
          ce,
          we,
          Ae,
          Z,
          ee,
          ae,
          Ue,
          M,
          be,
          Tt,
          dt,
          U,
          Re,
          di,
          ti,
          Ve,
          Ze,
          ke,
          St,
          At,
          Yt,
          pr,
          $e,
          Gi,
          ii,
          pi,
          ri,
          wi,
          Xt,
          le,
          Vt,
          Ne,
          pt,
          Rt,
          bi,
          K,
          w;
        if (
          ((b._startClamp = b._endClamp = !1),
          (b._dir = D),
          (g *= 45),
          (b.scroller = R),
          (b.scroll = C ? C.time.bind(C) : ye),
          (we = ye()),
          (b.vars = t),
          (r = r || t.animation),
          "refreshPriority" in t &&
            ((uc = 1), t.refreshPriority === -9999 && (es = b)),
          (L.tweenScroll = L.tweenScroll || {
            top: xu(R, rt),
            left: xu(R, Ot),
          }),
          (b.tweenTo = oe = L.tweenScroll[D.p]),
          (b.scrubDuration = function (A) {
            ((Vt = In(A) && A),
              Vt
                ? le
                  ? le.duration(A)
                  : (le = q.to(r, {
                      ease: "expo",
                      totalProgress: "+=0",
                      inherit: !1,
                      duration: Vt,
                      paused: !0,
                      onComplete: function () {
                        return m && m(b);
                      },
                    }))
                : (le && le.progress(1).kill(), (le = 0)));
          }),
          r &&
            ((r.vars.lazy = !1),
            (r._initted && !b.isReverted) ||
              (r.vars.immediateRender !== !1 &&
                t.immediateRender !== !1 &&
                r.duration() &&
                r.render(0, !0, !0)),
            (b.animation = r.pause()),
            (r.scrollTrigger = b),
            b.scrubDuration(h),
            (wi = 0),
            f || (f = r.vars.id)),
          T &&
            ((!br(T) || T.push) && (T = { snapTo: T }),
            "scrollBehavior" in Ce.style &&
              q.set(V ? [Ce, Ut] : R, { scrollBehavior: "auto" }),
            pe.forEach(function (A) {
              return (
                wt(A) &&
                A.target === (V ? Le.scrollingElement || Ut : R) &&
                (A.smooth = !1)
              );
            }),
            (ce = wt(T.snapTo)
              ? T.snapTo
              : T.snapTo === "labels"
                ? Fd(r)
                : T.snapTo === "labelsDirectional"
                  ? Id(r)
                  : T.directional !== !1
                    ? function (A, Y) {
                        return kl(T.snapTo)(
                          A,
                          yt() - se < 500 ? 0 : Y.direction,
                        );
                      }
                    : q.utils.snap(T.snapTo)),
            (Ne = T.duration || { min: 0.1, max: 2 }),
            (Ne = br(Ne) ? Qn(Ne.min, Ne.max) : Qn(Ne, Ne)),
            (pt = q
              .delayedCall(T.delay || Vt / 2 || 0.1, function () {
                var A = ye(),
                  Y = yt() - se < 500,
                  I = oe.tween;
                if (
                  (Y || Math.abs(b.getVelocity()) < 10) &&
                  !I &&
                  !Mo &&
                  j !== A
                ) {
                  var H = (A - Z) / U,
                    ie = r && !F ? r.totalProgress() : H,
                    Q = Y ? 0 : ((ie - Xt) / (yt() - Rn)) * 1e3 || 0,
                    fe = q.utils.clamp(-H, 1 - H, (Xr(Q / 2) * Q) / 0.185),
                    Te = H + (T.inertia === !1 ? 0 : fe),
                    Se,
                    _e,
                    ge = T,
                    Pe = ge.onStart,
                    ue = ge.onInterrupt,
                    at = ge.onComplete;
                  if (
                    ((Se = ce(Te, b)),
                    In(Se) || (Se = Te),
                    (_e = Math.max(0, Math.round(Z + Se * U))),
                    A <= ee && A >= Z && _e !== A)
                  ) {
                    if (I && !I._initted && I.data <= Xr(_e - A)) return;
                    (T.inertia === !1 && (fe = Se - H),
                      oe(
                        _e,
                        {
                          duration: Ne(
                            Xr(
                              (Math.max(Xr(Te - ie), Xr(Se - ie)) * 0.185) /
                                Q /
                                0.05 || 0,
                            ),
                          ),
                          ease: T.ease || "power3",
                          data: Xr(_e - A),
                          onInterrupt: function () {
                            return pt.restart(!0) && ue && ue(b);
                          },
                          onComplete: function () {
                            (b.update(),
                              (j = ye()),
                              r &&
                                !F &&
                                (le
                                  ? le.resetTo(
                                      "totalProgress",
                                      Se,
                                      r._tTime / r._tDur,
                                    )
                                  : r.progress(Se)),
                              (wi = Xt =
                                r && !F ? r.totalProgress() : b.progress),
                              x && x(b),
                              at && at(b));
                          },
                        },
                        A,
                        fe * U,
                        _e - A - fe * U,
                      ),
                      Pe && Pe(b, oe.tween));
                  }
                } else b.isActive && j !== A && pt.restart(!0);
              })
              .pause())),
          f && (La[f] = b),
          (p = b.trigger = Lt(p || (l !== !0 && l))),
          (w = p && p._gsap && p._gsap.stRevert),
          w && (w = w(b)),
          (l = l === !0 ? p : Lt(l)),
          Ht(o) && (o = { targets: p, className: o }),
          l &&
            (_ === !1 ||
              _ === ai ||
              (_ =
                !_ &&
                l.parentNode &&
                l.parentNode.style &&
                li(l.parentNode).display === "flex"
                  ? !1
                  : Qe),
            (b.pin = l),
            (Oe = q.core.getCache(l)),
            Oe.spacer
              ? (Re = Oe.pinState)
              : (k &&
                  ((k = Lt(k)),
                  k && !k.nodeType && (k = k.current || k.nativeElement),
                  (Oe.spacerIsNative = !!k),
                  k && (Oe.spacerState = Ns(k))),
                (Oe.spacer = Ve = k || Le.createElement("div")),
                Ve.classList.add("pin-spacer"),
                f && Ve.classList.add("pin-spacer-" + f),
                (Oe.pinState = Re = Ns(l))),
            t.force3D !== !1 && q.set(l, { force3D: !0 }),
            (b.spacer = Ve = Oe.spacer),
            (ri = li(l)),
            (pr = ri[_ + D.os2]),
            (ke = q.getProperty(l)),
            (St = q.quickSetter(l, D.a, et)),
            Qo(l, Ve, ri),
            (ti = Ns(l))),
          J)
        ) {
          ((Tt = br(J) ? hu(J, du) : du),
            (M = Is("scroller-start", f, R, D, Tt, 0)),
            (be = Is("scroller-end", f, R, D, Tt, 0, M)),
            (Ze = M["offset" + D.op.d2]));
          var B = Lt(lr(R, "content") || R);
          ((ae = this.markerStart = Is("start", f, B, D, Tt, Ze, 0, C)),
            (Ue = this.markerEnd = Is("end", f, B, D, Tt, Ze, 0, C)),
            C && (K = q.quickSetter([ae, Ue], D.a, et)),
            !z &&
              !(Oi.length && lr(R, "fixedMarkers") === !0) &&
              (Ld(V ? Ce : R),
              q.set([M, be], { force3D: !0 }),
              (Gi = q.quickSetter(M, D.a, et)),
              (pi = q.quickSetter(be, D.a, et))));
        }
        if (C) {
          var S = C.vars.onUpdate,
            O = C.vars.onUpdateParams;
          C.eventCallback("onUpdate", function () {
            (b.update(0, 0, 1), S && S.apply(C, O || []));
          });
        }
        if (
          ((b.previous = function () {
            return he[he.indexOf(b) - 1];
          }),
          (b.next = function () {
            return he[he.indexOf(b) + 1];
          }),
          (b.revert = function (A, Y) {
            if (!Y) return b.kill(!0);
            var I = A !== !1 || !b.enabled,
              H = mt;
            I !== b.isReverted &&
              (I &&
                ((Rt = Math.max(ye(), b.scroll.rec || 0)),
                (te = b.progress),
                (bi = r && r.progress())),
              ae &&
                [ae, Ue, M, be].forEach(function (ie) {
                  return (ie.style.display = I ? "none" : "block");
                }),
              I && ((mt = b), b.update(I)),
              l &&
                (!y || !b.isActive) &&
                (I ? zd(l, Ve, Re) : Qo(l, Ve, li(l), $e)),
              I || b.update(I),
              (mt = H),
              (b.isReverted = I));
          }),
          (b.refresh = function (A, Y, I, H) {
            if (!((mt || !b.enabled) && !Y)) {
              if (l && A && hi) {
                st(a, "scrollEnd", vc);
                return;
              }
              (!Mt && W && W(b),
                (mt = b),
                oe.tween && !I && (oe.tween.kill(), (oe.tween = 0)),
                le && le.pause(),
                d &&
                  r &&
                  (r.revert({ kill: !1 }).invalidate(),
                  r.getChildren &&
                    r.getChildren(!0, !0, !1).forEach(function (Ui) {
                      return Ui.vars.immediateRender && Ui.render(0, !0, !0);
                    })),
                b.isReverted || b.revert(!0, !0),
                (b._subPinOffset = !1));
              var ie = G(),
                Q = ne(),
                fe = C ? C.duration() : Di(R, D),
                Te = U <= 0.01 || !U,
                Se = 0,
                _e = H || 0,
                ge = br(I) ? I.end : t.end,
                Pe = t.endTrigger || p,
                ue = br(I)
                  ? I.start
                  : t.start || (t.start === 0 || !p ? 0 : l ? "0 0" : "0 100%"),
                at = (b.pinnedContainer =
                  t.pinnedContainer && Lt(t.pinnedContainer, b)),
                Ye = (p && Math.max(0, he.indexOf(b))) || 0,
                lt = Ye,
                ut,
                _t,
                _r,
                Cs,
                gt,
                Je,
                Ti,
                Fo,
                Yl,
                Tn,
                Si,
                Sn,
                ks;
              for (
                J &&
                br(I) &&
                ((Sn = q.getProperty(M, D.p)), (ks = q.getProperty(be, D.p)));
                lt-- > 0;
              )
                ((Je = he[lt]),
                  Je.end || Je.refresh(0, 1) || (mt = b),
                  (Ti = Je.pin),
                  Ti &&
                    (Ti === p || Ti === l || Ti === at) &&
                    !Je.isReverted &&
                    (Tn || (Tn = []), Tn.unshift(Je), Je.revert(!0, !0)),
                  Je !== he[lt] && (Ye--, lt--));
              for (
                wt(ue) && (ue = ue(b)),
                  ue = lu(ue, "start", b),
                  Z =
                    mu(
                      ue,
                      p,
                      ie,
                      D,
                      ye(),
                      ae,
                      M,
                      b,
                      Q,
                      re,
                      z,
                      fe,
                      C,
                      b._startClamp && "_startClamp",
                    ) || (l ? -0.001 : 0),
                  wt(ge) && (ge = ge(b)),
                  Ht(ge) &&
                    !ge.indexOf("+=") &&
                    (~ge.indexOf(" ")
                      ? (ge = (Ht(ue) ? ue.split(" ")[0] : "") + ge)
                      : ((Se = js(ge.substr(2), ie)),
                        (ge = Ht(ue)
                          ? ue
                          : (C
                              ? q.utils.mapRange(
                                  0,
                                  C.duration(),
                                  C.scrollTrigger.start,
                                  C.scrollTrigger.end,
                                  Z,
                                )
                              : Z) + Se),
                        (Pe = p))),
                  ge = lu(ge, "end", b),
                  ee =
                    Math.max(
                      Z,
                      mu(
                        ge || (Pe ? "100% 0" : fe),
                        Pe,
                        ie,
                        D,
                        ye() + Se,
                        Ue,
                        be,
                        b,
                        Q,
                        re,
                        z,
                        fe,
                        C,
                        b._endClamp && "_endClamp",
                      ),
                    ) || -0.001,
                  Se = 0,
                  lt = Ye;
                lt--;
              )
                ((Je = he[lt]),
                  (Ti = Je.pin),
                  Ti &&
                    Je.start - Je._pinPush <= Z &&
                    !C &&
                    Je.end > 0 &&
                    ((ut =
                      Je.end -
                      (b._startClamp ? Math.max(0, Je.start) : Je.start)),
                    ((Ti === p && Je.start - Je._pinPush < Z) || Ti === at) &&
                      isNaN(ue) &&
                      (Se += ut * (1 - Je.progress)),
                    Ti === l && (_e += ut)));
              if (
                ((Z += Se),
                (ee += Se),
                b._startClamp && (b._startClamp += Se),
                b._endClamp &&
                  !Mt &&
                  ((b._endClamp = ee || -0.001), (ee = Math.min(ee, Di(R, D)))),
                (U = ee - Z || ((Z -= 0.01) && 0.001)),
                Te && (te = q.utils.clamp(0, 1, q.utils.normalize(Z, ee, Rt))),
                (b._pinPush = _e),
                ae &&
                  Se &&
                  ((ut = {}),
                  (ut[D.a] = "+=" + Se),
                  at && (ut[D.p] = "-=" + ye()),
                  q.set([ae, Ue], ut)),
                l && !(Ra && b.end >= Di(R, D)))
              )
                ((ut = li(l)),
                  (Cs = D === rt),
                  (_r = ye()),
                  (At = parseFloat(ke(D.a)) + _e),
                  !fe &&
                    ee > 1 &&
                    ((Si = (V ? Le.scrollingElement || Ut : R).style),
                    (Si = {
                      style: Si,
                      value: Si["overflow" + D.a.toUpperCase()],
                    }),
                    V &&
                      li(Ce)["overflow" + D.a.toUpperCase()] !== "scroll" &&
                      (Si.style["overflow" + D.a.toUpperCase()] = "scroll")),
                  Qo(l, Ve, ut),
                  (ti = Ns(l)),
                  (_t = Ni(l, !0)),
                  (Fo = z && hr(R, Cs ? Ot : rt)()),
                  _
                    ? (($e = [_ + D.os2, U + _e + et]),
                      ($e.t = Ve),
                      (lt = _ === Qe ? go(l, D) + U + _e : 0),
                      lt &&
                        ($e.push(D.d, lt + et),
                        Ve.style.flexBasis !== "auto" &&
                          (Ve.style.flexBasis = lt + et)),
                      un($e),
                      at &&
                        he.forEach(function (Ui) {
                          Ui.pin === at &&
                            Ui.vars.pinSpacing !== !1 &&
                            (Ui._subPinOffset = !0);
                        }),
                      z && ye(Rt))
                    : ((lt = go(l, D)),
                      lt &&
                        Ve.style.flexBasis !== "auto" &&
                        (Ve.style.flexBasis = lt + et)),
                  z &&
                    ((gt = {
                      top: _t.top + (Cs ? _r - Z : Fo) + et,
                      left: _t.left + (Cs ? Fo : _r - Z) + et,
                      boxSizing: "border-box",
                      position: "fixed",
                    }),
                    (gt[Mr] = gt["max" + vn] = Math.ceil(_t.width) + et),
                    (gt[Dr] = gt["max" + Cl] = Math.ceil(_t.height) + et),
                    (gt[ai] =
                      gt[ai + Zn] =
                      gt[ai + Kn] =
                      gt[ai + Jn] =
                      gt[ai + jn] =
                        "0"),
                    (gt[Qe] = ut[Qe]),
                    (gt[Qe + Zn] = ut[Qe + Zn]),
                    (gt[Qe + Kn] = ut[Qe + Kn]),
                    (gt[Qe + Jn] = ut[Qe + Jn]),
                    (gt[Qe + jn] = ut[Qe + jn]),
                    (di = Yd(Re, gt, y)),
                    Mt && ye(0)),
                  r
                    ? ((Yl = r._initted),
                      Wo(1),
                      r.render(r.duration(), !0, !0),
                      (Yt = ke(D.a) - At + U + _e),
                      (ii = Math.abs(U - Yt) > 1),
                      z && ii && di.splice(di.length - 2, 2),
                      r.render(0, !0, !0),
                      Yl || r.invalidate(!0),
                      r.parent || r.totalTime(r.totalTime()),
                      Wo(0))
                    : (Yt = U),
                  Si &&
                    (Si.value
                      ? (Si.style["overflow" + D.a.toUpperCase()] = Si.value)
                      : Si.style.removeProperty("overflow-" + D.a)));
              else if (p && ye() && !C)
                for (_t = p.parentNode; _t && _t !== Ce; )
                  (_t._pinOffset &&
                    ((Z -= _t._pinOffset), (ee -= _t._pinOffset)),
                    (_t = _t.parentNode));
              (Tn &&
                Tn.forEach(function (Ui) {
                  return Ui.revert(!1, !0);
                }),
                (b.start = Z),
                (b.end = ee),
                (we = Ae = Mt ? Rt : ye()),
                !C && !Mt && (we < Rt && ye(Rt), (b.scroll.rec = 0)),
                b.revert(!1, !0),
                (se = yt()),
                pt && ((j = -1), pt.restart(!0)),
                (mt = 0),
                r &&
                  F &&
                  (r._initted || bi) &&
                  r.progress() !== bi &&
                  r.progress(bi || 0, !0).render(r.time(), !0, !0),
                (Te || te !== b.progress || C || d || (r && !r._initted)) &&
                  (r &&
                    !F &&
                    (r._initted || te || r.vars.immediateRender !== !1) &&
                    r.totalProgress(
                      C && Z < -0.001 && !te ? q.utils.normalize(Z, ee, 0) : te,
                      !0,
                    ),
                  (b.progress = Te || (we - Z) / U === te ? 0 : te)),
                l && _ && (Ve._pinOffset = Math.round(b.progress * Yt)),
                le && le.invalidate(),
                isNaN(Sn) ||
                  ((Sn -= q.getProperty(M, D.p)),
                  (ks -= q.getProperty(be, D.p)),
                  Bs(M, D, Sn),
                  Bs(ae, D, Sn - (H || 0)),
                  Bs(be, D, ks),
                  Bs(Ue, D, ks - (H || 0))),
                Te && !Mt && b.update(),
                c && !Mt && !dt && ((dt = !0), c(b), (dt = !1)));
            }
          }),
          (b.getVelocity = function () {
            return ((ye() - Ae) / (yt() - Rn)) * 1e3 || 0;
          }),
          (b.endAnimation = function () {
            (Pn(b.callbackAnimation),
              r &&
                (le
                  ? le.progress(1)
                  : r.paused()
                    ? F || Pn(r, b.direction < 0, 1)
                    : Pn(r, r.reversed())));
          }),
          (b.labelToScroll = function (A) {
            return (
              (r &&
                r.labels &&
                (Z || b.refresh() || Z) + (r.labels[A] / r.duration()) * U) ||
              0
            );
          }),
          (b.getTrailing = function (A) {
            var Y = he.indexOf(b),
              I = b.direction > 0 ? he.slice(0, Y).reverse() : he.slice(Y + 1);
            return (
              Ht(A)
                ? I.filter(function (H) {
                    return H.vars.preventOverlaps === A;
                  })
                : I
            ).filter(function (H) {
              return b.direction > 0 ? H.end <= Z : H.start >= ee;
            });
          }),
          (b.update = function (A, Y, I) {
            if (!(C && !I && !A)) {
              var H = Mt === !0 ? Rt : b.scroll(),
                ie = A ? 0 : (H - Z) / U,
                Q = ie < 0 ? 0 : ie > 1 ? 1 : ie || 0,
                fe = b.progress,
                Te,
                Se,
                _e,
                ge,
                Pe,
                ue,
                at,
                Ye;
              if (
                (Y &&
                  ((Ae = we),
                  (we = C ? ye() : H),
                  T && ((Xt = wi), (wi = r && !F ? r.totalProgress() : Q))),
                g &&
                  l &&
                  !mt &&
                  !Os &&
                  hi &&
                  (!Q && Z < H + ((H - Ae) / (yt() - Rn)) * g
                    ? (Q = 1e-4)
                    : Q === 1 &&
                      ee > H + ((H - Ae) / (yt() - Rn)) * g &&
                      (Q = 0.9999)),
                Q !== fe && b.enabled)
              ) {
                if (
                  ((Te = b.isActive = !!Q && Q < 1),
                  (Se = !!fe && fe < 1),
                  (ue = Te !== Se),
                  (Pe = ue || !!Q != !!fe),
                  (b.direction = Q > fe ? 1 : -1),
                  (b.progress = Q),
                  Pe &&
                    !mt &&
                    ((_e = Q && !fe ? 0 : Q === 1 ? 1 : fe === 1 ? 2 : 3),
                    F &&
                      ((ge =
                        (!ue && $[_e + 1] !== "none" && $[_e + 1]) || $[_e]),
                      (Ye =
                        r &&
                        (ge === "complete" || ge === "reset" || ge in r)))),
                  E &&
                    (ue || Ye) &&
                    (Ye || h || !r) &&
                    (wt(E)
                      ? E(b)
                      : b.getTrailing(E).forEach(function (_r) {
                          return _r.endAnimation();
                        })),
                  F ||
                    (le && !mt && !Os
                      ? (le._dp._time - le._start !== le._time &&
                          le.render(le._dp._time - le._start),
                        le.resetTo
                          ? le.resetTo("totalProgress", Q, r._tTime / r._tDur)
                          : ((le.vars.totalProgress = Q),
                            le.invalidate().restart()))
                      : r && r.totalProgress(Q, !!(mt && (se || A)))),
                  l)
                ) {
                  if ((A && _ && (Ve.style[_ + D.os2] = pr), !z))
                    St(Fn(At + Yt * Q));
                  else if (Pe) {
                    if (
                      ((at = !A && Q > fe && ee + 1 > H && H + 1 >= Di(R, D)),
                      y)
                    )
                      if (!A && (Te || at)) {
                        var lt = Ni(l, !0),
                          ut = H - Z;
                        yu(
                          l,
                          Ce,
                          lt.top + (D === rt ? ut : 0) + et,
                          lt.left + (D === rt ? 0 : ut) + et,
                        );
                      } else yu(l, Ve);
                    (un(Te || at ? di : ti),
                      (ii && Q < 1 && Te) ||
                        St(At + (Q === 1 && !at ? Yt : 0)));
                  }
                }
                (T && !oe.tween && !mt && !Os && pt.restart(!0),
                  o &&
                    (ue || (v && Q && (Q < 1 || !Ho))) &&
                    ms(o.targets).forEach(function (_r) {
                      return _r.classList[Te || v ? "add" : "remove"](
                        o.className,
                      );
                    }),
                  s && !F && !A && s(b),
                  Pe && !mt
                    ? (F &&
                        (Ye &&
                          (ge === "complete"
                            ? r.pause().totalProgress(1)
                            : ge === "reset"
                              ? r.restart(!0).pause()
                              : ge === "restart"
                                ? r.restart(!0)
                                : r[ge]()),
                        s && s(b)),
                      (ue || !Ho) &&
                        (u && ue && Uo(b, u),
                        X[_e] && Uo(b, X[_e]),
                        v && (Q === 1 ? b.kill(!1, 1) : (X[_e] = 0)),
                        ue || ((_e = Q === 1 ? 1 : 3), X[_e] && Uo(b, X[_e]))),
                      P &&
                        !Te &&
                        Math.abs(b.getVelocity()) > (In(P) ? P : 2500) &&
                        (Pn(b.callbackAnimation),
                        le
                          ? le.progress(1)
                          : Pn(r, ge === "reverse" ? 1 : !Q, 1)))
                    : F && s && !mt && s(b));
              }
              if (pi) {
                var _t = C ? (H / C.duration()) * (C._caScrollDist || 0) : H;
                (Gi(_t + (M._isFlipped ? 1 : 0)), pi(_t));
              }
              K && K((-H / C.duration()) * (C._caScrollDist || 0));
            }
          }),
          (b.enable = function (A, Y) {
            b.enabled ||
              ((b.enabled = !0),
              st(R, "resize", Nn),
              V || st(R, "scroll", Vr),
              W && st(a, "refreshInit", W),
              A !== !1 && ((b.progress = te = 0), (we = Ae = j = ye())),
              Y !== !1 && b.refresh());
          }),
          (b.getTween = function (A) {
            return A && oe ? oe.tween : le;
          }),
          (b.setPositions = function (A, Y, I, H) {
            if (C) {
              var ie = C.scrollTrigger,
                Q = C.duration(),
                fe = ie.end - ie.start;
              ((A = ie.start + (fe * A) / Q), (Y = ie.start + (fe * Y) / Q));
            }
            (b.refresh(
              !1,
              !1,
              {
                start: uu(A, I && !!b._startClamp),
                end: uu(Y, I && !!b._endClamp),
              },
              H,
            ),
              b.update());
          }),
          (b.adjustPinSpacing = function (A) {
            if ($e && A) {
              var Y = $e.indexOf(D.d) + 1;
              (($e[Y] = parseFloat($e[Y]) + A + et),
                ($e[1] = parseFloat($e[1]) + A + et),
                un($e));
            }
          }),
          (b.disable = function (A, Y) {
            if (
              b.enabled &&
              (A !== !1 && b.revert(!0, !0),
              (b.enabled = b.isActive = !1),
              Y || (le && le.pause()),
              (Rt = 0),
              Oe && (Oe.uncache = 1),
              W && nt(a, "refreshInit", W),
              pt && (pt.pause(), oe.tween && oe.tween.kill() && (oe.tween = 0)),
              !V)
            ) {
              for (var I = he.length; I--; )
                if (he[I].scroller === R && he[I] !== b) return;
              (nt(R, "resize", Nn), V || nt(R, "scroll", Vr));
            }
          }),
          (b.kill = function (A, Y) {
            (b.disable(A, Y), le && !Y && le.kill(), f && delete La[f]);
            var I = he.indexOf(b);
            (I >= 0 && he.splice(I, 1),
              I === Et && Js > 0 && Et--,
              (I = 0),
              he.forEach(function (H) {
                return H.scroller === b.scroller && (I = 1);
              }),
              I || Mt || (b.scroll.rec = 0),
              r &&
                ((r.scrollTrigger = null),
                A && r.revert({ kill: !1 }),
                Y || r.kill()),
              ae &&
                [ae, Ue, M, be].forEach(function (H) {
                  return H.parentNode && H.parentNode.removeChild(H);
                }),
              es === b && (es = 0),
              l &&
                (Oe && (Oe.uncache = 1),
                (I = 0),
                he.forEach(function (H) {
                  return H.pin === l && I++;
                }),
                I || (Oe.spacer = 0)),
              t.onKill && t.onKill(b));
          }),
          he.push(b),
          b.enable(!1, !1),
          w && w(b),
          r && r.add && !U)
        ) {
          var N = b.update;
          ((b.update = function () {
            ((b.update = N), pe.cache++, Z || ee || b.refresh());
          }),
            q.delayedCall(0.01, b.update),
            (U = 0.01),
            (Z = ee = 0));
        } else b.refresh();
        l && Bd();
      }),
      (a.register = function (t) {
        return (
          qr ||
            ((q = t || pc()), dc() && window.document && a.enable(), (qr = Ln)),
          qr
        );
      }),
      (a.defaults = function (t) {
        if (t) for (var r in t) Fs[r] = t[r];
        return Fs;
      }),
      (a.disable = function (t, r) {
        ((Ln = 0),
          he.forEach(function (s) {
            return s[r ? "kill" : "disable"](t);
          }),
          nt(de, "wheel", Vr),
          nt(Le, "scroll", Vr),
          clearInterval(Ds),
          nt(Le, "touchcancel", ki),
          nt(Ce, "touchstart", ki),
          Rs(nt, Le, "pointerdown,touchstart,mousedown", fu),
          Rs(nt, Le, "pointerup,touchend,mouseup", cu),
          po.kill(),
          As(nt));
        for (var n = 0; n < pe.length; n += 3)
          (Ls(nt, pe[n], pe[n + 1]), Ls(nt, pe[n], pe[n + 2]));
      }),
      (a.enable = function () {
        if (
          ((de = window),
          (Le = document),
          (Ut = Le.documentElement),
          (Ce = Le.body),
          q &&
            ((ms = q.utils.toArray),
            (Qn = q.utils.clamp),
            (Aa = q.core.context || ki),
            (Wo = q.core.suppressOverwrites || ki),
            (wl = de.history.scrollRestoration || "auto"),
            (Fa = de.pageYOffset || 0),
            q.core.globals("ScrollTrigger", a),
            Ce))
        ) {
          ((Ln = 1),
            (ln = document.createElement("div")),
            (ln.style.height = "100vh"),
            (ln.style.position = "absolute"),
            Tc(),
            Od(),
            Ge.register(q),
            (a.isTouch = Ge.isTouch),
            (ji =
              Ge.isTouch &&
              /(iPad|iPhone|iPod|Mac)/g.test(navigator.userAgent)),
            (Oa = Ge.isTouch === 1),
            st(de, "wheel", Vr),
            (vl = [de, Le, Ut, Ce]),
            q.matchMedia
              ? ((a.matchMedia = function (u) {
                  var c = q.matchMedia(),
                    h;
                  for (h in u) c.add(h, u[h]);
                  return c;
                }),
                q.addEventListener("matchMediaInit", function () {
                  return Pl();
                }),
                q.addEventListener("matchMediaRevert", function () {
                  return wc();
                }),
                q.addEventListener("matchMedia", function () {
                  (Sr(0, 1), Br("matchMedia"));
                }),
                q.matchMedia().add("(orientation: portrait)", function () {
                  return (qo(), qo);
                }))
              : console.warn("Requires GSAP 3.11.0 or later"),
            qo(),
            st(Le, "scroll", Vr));
          var t = Ce.hasAttribute("style"),
            r = Ce.style,
            n = r.borderTopStyle,
            s = q.core.Animation.prototype,
            o,
            f;
          for (
            s.revert ||
              Object.defineProperty(s, "revert", {
                value: function () {
                  return this.time(-0.01, !0);
                },
              }),
              r.borderTopStyle = "solid",
              o = Ni(Ce),
              rt.m = Math.round(o.top + rt.sc()) || 0,
              Ot.m = Math.round(o.left + Ot.sc()) || 0,
              n ? (r.borderTopStyle = n) : r.removeProperty("border-top-style"),
              t || (Ce.setAttribute("style", ""), Ce.removeAttribute("style")),
              Ds = setInterval(pu, 250),
              q.delayedCall(0.5, function () {
                return (Os = 0);
              }),
              st(Le, "touchcancel", ki),
              st(Ce, "touchstart", ki),
              Rs(st, Le, "pointerdown,touchstart,mousedown", fu),
              Rs(st, Le, "pointerup,touchend,mouseup", cu),
              Da = q.utils.checkPrefix("transform"),
              eo.push(Da),
              qr = yt(),
              po = q.delayedCall(0.2, Sr).pause(),
              Qr = [
                Le,
                "visibilitychange",
                function () {
                  var u = de.innerWidth,
                    c = de.innerHeight;
                  Le.hidden
                    ? ((ou = u), (au = c))
                    : (ou !== u || au !== c) && Nn();
                },
                Le,
                "DOMContentLoaded",
                Sr,
                de,
                "load",
                Sr,
                de,
                "resize",
                Nn,
              ],
              As(st),
              he.forEach(function (u) {
                return u.enable(0, 1);
              }),
              f = 0;
            f < pe.length;
            f += 3
          )
            (Ls(nt, pe[f], pe[f + 1]), Ls(nt, pe[f], pe[f + 2]));
        }
      }),
      (a.config = function (t) {
        "limitCallbacks" in t && (Ho = !!t.limitCallbacks);
        var r = t.syncInterval;
        ((r && clearInterval(Ds)) || ((Ds = r) && setInterval(pu, r)),
          "ignoreMobileResize" in t &&
            (Oa = a.isTouch === 1 && t.ignoreMobileResize),
          "autoRefreshEvents" in t &&
            (As(nt) || As(st, t.autoRefreshEvents || "none"),
            (fc = (t.autoRefreshEvents + "").indexOf("resize") === -1)));
      }),
      (a.scrollerProxy = function (t, r) {
        var n = Lt(t),
          s = pe.indexOf(n),
          o = Ir(n);
        (~s && pe.splice(s, o ? 6 : 2),
          r && (o ? Oi.unshift(de, r, Ce, r, Ut, r) : Oi.unshift(n, r)));
      }),
      (a.clearMatchMedia = function (t) {
        he.forEach(function (r) {
          return r._ctx && r._ctx.query === t && r._ctx.kill(!0, !0);
        });
      }),
      (a.isInViewport = function (t, r, n) {
        var s = (Ht(t) ? Lt(t) : t).getBoundingClientRect(),
          o = s[n ? Mr : Dr] * r || 0;
        return n
          ? s.right - o > 0 && s.left + o < de.innerWidth
          : s.bottom - o > 0 && s.top + o < de.innerHeight;
      }),
      (a.positionInViewport = function (t, r, n) {
        Ht(t) && (t = Lt(t));
        var s = t.getBoundingClientRect(),
          o = s[n ? Mr : Dr],
          f =
            r == null
              ? o / 2
              : r in mo
                ? mo[r] * o
                : ~r.indexOf("%")
                  ? (parseFloat(r) * o) / 100
                  : parseFloat(r) || 0;
        return n ? (s.left + f) / de.innerWidth : (s.top + f) / de.innerHeight;
      }),
      (a.killAll = function (t) {
        if (
          (he.slice(0).forEach(function (n) {
            return n.vars.id !== "ScrollSmoother" && n.kill();
          }),
          t !== !0)
        ) {
          var r = Nr.killAll || [];
          ((Nr = {}),
            r.forEach(function (n) {
              return n();
            }));
        }
      }),
      a
    );
  })();
me.version = "3.13.0";
me.saveStyles = function (a) {
  return a
    ? ms(a).forEach(function (e) {
        if (e && e.style) {
          var i = Wt.indexOf(e);
          (i >= 0 && Wt.splice(i, 5),
            Wt.push(
              e,
              e.style.cssText,
              e.getBBox && e.getAttribute("transform"),
              q.core.getCache(e),
              Aa(),
            ));
        }
      })
    : Wt;
};
me.revert = function (a, e) {
  return Pl(!a, e);
};
me.create = function (a, e) {
  return new me(a, e);
};
me.refresh = function (a) {
  return a ? Nn(!0) : (qr || me.register()) && Sr(!0);
};
me.update = function (a) {
  return ++pe.cache && Xi(a === !0 ? 2 : 0);
};
me.clearScrollMemory = bc;
me.maxScroll = function (a, e) {
  return Di(a, e ? Ot : rt);
};
me.getScrollFunc = function (a, e) {
  return hr(Lt(a), e ? Ot : rt);
};
me.getById = function (a) {
  return La[a];
};
me.getAll = function () {
  return he.filter(function (a) {
    return a.vars.id !== "ScrollSmoother";
  });
};
me.isScrolling = function () {
  return !!hi;
};
me.snapDirectional = kl;
me.addEventListener = function (a, e) {
  var i = Nr[a] || (Nr[a] = []);
  ~i.indexOf(e) || i.push(e);
};
me.removeEventListener = function (a, e) {
  var i = Nr[a],
    t = i && i.indexOf(e);
  t >= 0 && i.splice(t, 1);
};
me.batch = function (a, e) {
  var i = [],
    t = {},
    r = e.interval || 0.016,
    n = e.batchMax || 1e9,
    s = function (u, c) {
      var h = [],
        p = [],
        l = q
          .delayedCall(r, function () {
            (c(h, p), (h = []), (p = []));
          })
          .pause();
      return function (_) {
        (h.length || l.restart(!0),
          h.push(_.trigger),
          p.push(_),
          n <= h.length && l.progress(1));
      };
    },
    o;
  for (o in e)
    t[o] =
      o.substr(0, 2) === "on" && wt(e[o]) && o !== "onRefreshInit"
        ? s(o, e[o])
        : e[o];
  return (
    wt(n) &&
      ((n = n()),
      st(me, "refresh", function () {
        return (n = e.batchMax());
      })),
    ms(a).forEach(function (f) {
      var u = {};
      for (o in t) u[o] = t[o];
      ((u.trigger = f), i.push(me.create(u)));
    }),
    i
  );
};
var vu = function (e, i, t, r) {
    return (
      i > r ? e(r) : i < 0 && e(0),
      t > r ? (r - i) / (t - i) : t < 0 ? i / (i - t) : 1
    );
  },
  Ko = function a(e, i) {
    (i === !0
      ? e.style.removeProperty("touch-action")
      : (e.style.touchAction =
          i === !0
            ? "auto"
            : i
              ? "pan-" + i + (Ge.isTouch ? " pinch-zoom" : "")
              : "none"),
      e === Ut && a(Ce, i));
  },
  zs = { auto: 1, scroll: 1 },
  Vd = function (e) {
    var i = e.event,
      t = e.target,
      r = e.axis,
      n = (i.changedTouches ? i.changedTouches[0] : i).target,
      s = n._gsap || q.core.getCache(n),
      o = yt(),
      f;
    if (!s._isScrollT || o - s._isScrollT > 2e3) {
      for (
        ;
        n &&
        n !== Ce &&
        ((n.scrollHeight <= n.clientHeight && n.scrollWidth <= n.clientWidth) ||
          !(zs[(f = li(n)).overflowY] || zs[f.overflowX]));
      )
        n = n.parentNode;
      ((s._isScroll =
        n &&
        n !== t &&
        !Ir(n) &&
        (zs[(f = li(n)).overflowY] || zs[f.overflowX])),
        (s._isScrollT = o));
    }
    (s._isScroll || r === "x") && (i.stopPropagation(), (i._gsapAllow = !0));
  },
  Cc = function (e, i, t, r) {
    return Ge.create({
      target: e,
      capture: !0,
      debounce: !1,
      lockAxis: !0,
      type: i,
      onWheel: (r = r && Vd),
      onPress: r,
      onDrag: r,
      onScroll: r,
      onEnable: function () {
        return t && st(Le, Ge.eventTypes[0], bu, !1, !0);
      },
      onDisable: function () {
        return nt(Le, Ge.eventTypes[0], bu, !0);
      },
    });
  },
  Wd = /(input|label|select|textarea)/i,
  wu,
  bu = function (e) {
    var i = Wd.test(e.target.tagName);
    (i || wu) && ((e._gsapAllow = !0), (wu = i));
  },
  Hd = function (e) {
    (br(e) || (e = {}),
      (e.preventDefault = e.isNormalizer = e.allowClicks = !0),
      e.type || (e.type = "wheel,touch"),
      (e.debounce = !!e.debounce),
      (e.id = e.id || "normalizer"));
    var i = e,
      t = i.normalizeScrollX,
      r = i.momentum,
      n = i.allowNestedScroll,
      s = i.onRelease,
      o,
      f,
      u = Lt(e.target) || Ut,
      c = q.core.globals().ScrollSmoother,
      h = c && c.get(),
      p =
        ji &&
        ((e.content && Lt(e.content)) ||
          (h && e.content !== !1 && !h.smooth() && h.content())),
      l = hr(u, rt),
      _ = hr(u, Ot),
      d = 1,
      g =
        (Ge.isTouch && de.visualViewport
          ? de.visualViewport.scale * de.visualViewport.width
          : de.outerWidth) / de.innerWidth,
      m = 0,
      x = wt(r)
        ? function () {
            return r(o);
          }
        : function () {
            return r || 2.8;
          },
      v,
      T,
      y = Cc(u, e.type, !0, n),
      k = function () {
        return (T = !1);
      },
      C = ki,
      P = ki,
      E = function () {
        ((f = Di(u, rt)),
          (P = Qn(ji ? 1 : 0, f)),
          t && (C = Qn(0, Di(u, Ot))),
          (v = Or));
      },
      D = function () {
        ((p._gsap.y = Fn(parseFloat(p._gsap.y) + l.offset) + "px"),
          (p.style.transform =
            "matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, " +
            parseFloat(p._gsap.y) +
            ", 0, 1)"),
          (l.offset = l.cacheID = 0));
      },
      F = function () {
        if (T) {
          requestAnimationFrame(k);
          var J = Fn(o.deltaY / 2),
            re = P(l.v - J);
          if (p && re !== l.v + l.offset) {
            l.offset = re - l.v;
            var b = Fn((parseFloat(p && p._gsap.y) || 0) - l.offset);
            ((p.style.transform =
              "matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, " +
              b +
              ", 0, 1)"),
              (p._gsap.y = b + "px"),
              (l.cacheID = pe.cache),
              Xi());
          }
          return !0;
        }
        (l.offset && D(), (T = !0));
      },
      R,
      L,
      V,
      z,
      X = function () {
        (E(),
          R.isActive() &&
            R.vars.scrollY > f &&
            (l() > f ? R.progress(1) && l(f) : R.resetTo("scrollY", f)));
      };
    return (
      p && q.set(p, { y: "+=0" }),
      (e.ignoreCheck = function ($) {
        return (
          (ji && $.type === "touchmove" && F()) ||
          (d > 1.05 && $.type !== "touchstart") ||
          o.isGesturing ||
          ($.touches && $.touches.length > 1)
        );
      }),
      (e.onPress = function () {
        T = !1;
        var $ = d;
        ((d = Fn(((de.visualViewport && de.visualViewport.scale) || 1) / g)),
          R.pause(),
          $ !== d && Ko(u, d > 1.01 ? !0 : t ? !1 : "x"),
          (L = _()),
          (V = l()),
          E(),
          (v = Or));
      }),
      (e.onRelease = e.onGestureStart =
        function ($, J) {
          if ((l.offset && D(), !J)) z.restart(!0);
          else {
            pe.cache++;
            var re = x(),
              b,
              W;
            (t &&
              ((b = _()),
              (W = b + (re * 0.05 * -$.velocityX) / 0.227),
              (re *= vu(_, b, W, Di(u, Ot))),
              (R.vars.scrollX = C(W))),
              (b = l()),
              (W = b + (re * 0.05 * -$.velocityY) / 0.227),
              (re *= vu(l, b, W, Di(u, rt))),
              (R.vars.scrollY = P(W)),
              R.invalidate().duration(re).play(0.01),
              ((ji && R.vars.scrollY >= f) || b >= f - 1) &&
                q.to({}, { onUpdate: X, duration: re }));
          }
          s && s($);
        }),
      (e.onWheel = function () {
        (R._ts && R.pause(), yt() - m > 1e3 && ((v = 0), (m = yt())));
      }),
      (e.onChange = function ($, J, re, b, W) {
        if (
          (Or !== v && E(),
          J && t && _(C(b[2] === J ? L + ($.startX - $.x) : _() + J - b[1])),
          re)
        ) {
          l.offset && D();
          var G = W[2] === re,
            ne = G ? V + $.startY - $.y : l() + re - W[1],
            j = P(ne);
          (G && ne !== j && (V += j - ne), l(j));
        }
        (re || J) && Xi();
      }),
      (e.onEnable = function () {
        (Ko(u, t ? !1 : "x"),
          me.addEventListener("refresh", X),
          st(de, "resize", X),
          l.smooth &&
            ((l.target.style.scrollBehavior = "auto"),
            (l.smooth = _.smooth = !1)),
          y.enable());
      }),
      (e.onDisable = function () {
        (Ko(u, !0),
          nt(de, "resize", X),
          me.removeEventListener("refresh", X),
          y.kill());
      }),
      (e.lockAxis = e.lockAxis !== !1),
      (o = new Ge(e)),
      (o.iOS = ji),
      ji && !l() && l(1),
      ji && q.ticker.add(ki),
      (z = o._dc),
      (R = q.to(o, {
        ease: "power4",
        paused: !0,
        inherit: !1,
        scrollX: t ? "+=0.1" : "+=0",
        scrollY: "+=0.1",
        modifiers: {
          scrollY: Sc(l, l(), function () {
            return R.pause();
          }),
        },
        onUpdate: Xi,
        onComplete: z.vars.onComplete,
      })),
      o
    );
  };
me.sort = function (a) {
  if (wt(a)) return he.sort(a);
  var e = de.pageYOffset || 0;
  return (
    me.getAll().forEach(function (i) {
      return (i._sortY = i.trigger
        ? e + i.trigger.getBoundingClientRect().top
        : i.start + de.innerHeight);
    }),
    he.sort(
      a ||
        function (i, t) {
          return (
            (i.vars.refreshPriority || 0) * -1e6 +
            (i.vars.containerAnimation ? 1e6 : i._sortY) -
            ((t.vars.containerAnimation ? 1e6 : t._sortY) +
              (t.vars.refreshPriority || 0) * -1e6)
          );
        },
    )
  );
};
me.observe = function (a) {
  return new Ge(a);
};
me.normalizeScroll = function (a) {
  if (typeof a > "u") return Pt;
  if (a === !0 && Pt) return Pt.enable();
  if (a === !1) {
    (Pt && Pt.kill(), (Pt = a));
    return;
  }
  var e = a instanceof Ge ? a : Hd(a);
  return (
    Pt && Pt.target === e.target && Pt.kill(),
    Ir(e.target) && (Pt = e),
    e
  );
};
me.core = {
  _getVelocityProp: Ma,
  _inputObserver: Cc,
  _scrollers: pe,
  _proxies: Oi,
  bridge: {
    ss: function () {
      (hi || Br("scrollStart"), (hi = yt()));
    },
    ref: function () {
      return mt;
    },
  },
};
pc() && q.registerPlugin(me);
/*!
 * matrix 3.13.0
 * https://gsap.com
 *
 * Copyright 2008-2025, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license
 * @author: Jack Doyle, jack@greensock.com
 */ var zi,
  Ar,
  El,
  Do,
  Bn,
  io,
  yo,
  ts,
  yi = "transform",
  Na = yi + "Origin",
  kc,
  Ml = function (e) {
    var i = e.ownerDocument || e;
    for (
      !(yi in e.style) &&
      ("msTransform" in e.style) &&
      ((yi = "msTransform"), (Na = yi + "Origin"));
      i.parentNode && (i = i.parentNode);
    );
    if (((Ar = window), (yo = new Hi()), i)) {
      ((zi = i),
        (El = i.documentElement),
        (Do = i.body),
        (ts = zi.createElementNS("http://www.w3.org/2000/svg", "g")),
        (ts.style.transform = "none"));
      var t = i.createElement("div"),
        r = i.createElement("div"),
        n = i && (i.body || i.firstElementChild);
      n &&
        n.appendChild &&
        (n.appendChild(t),
        t.appendChild(r),
        t.setAttribute(
          "style",
          "position:static;transform:translate3d(0,0,1px)",
        ),
        (kc = r.offsetParent !== t),
        n.removeChild(t));
    }
    return i;
  },
  Gd = function (e) {
    for (var i, t; e && e !== Do; )
      ((t = e._gsap),
        t && t.uncache && t.get(e, "x"),
        t &&
          !t.scaleX &&
          !t.scaleY &&
          t.renderTransform &&
          ((t.scaleX = t.scaleY = 1e-4),
          t.renderTransform(1, t),
          i ? i.push(t) : (i = [t])),
        (e = e.parentNode));
    return i;
  },
  Pc = [],
  Ec = [],
  Dl = function () {
    return Ar.pageYOffset || zi.scrollTop || El.scrollTop || Do.scrollTop || 0;
  },
  Ol = function () {
    return (
      Ar.pageXOffset || zi.scrollLeft || El.scrollLeft || Do.scrollLeft || 0
    );
  },
  Al = function (e) {
    return (
      e.ownerSVGElement || ((e.tagName + "").toLowerCase() === "svg" ? e : null)
    );
  },
  Ud = function a(e) {
    if (Ar.getComputedStyle(e).position === "fixed") return !0;
    if (((e = e.parentNode), e && e.nodeType === 1)) return a(e);
  },
  jo = function a(e, i) {
    if (e.parentNode && (zi || Ml(e))) {
      var t = Al(e),
        r = t
          ? t.getAttribute("xmlns") || "http://www.w3.org/2000/svg"
          : "http://www.w3.org/1999/xhtml",
        n = t ? (i ? "rect" : "g") : "div",
        s = i !== 2 ? 0 : 100,
        o = i === 3 ? 100 : 0,
        f =
          "position:absolute;display:block;pointer-events:none;margin:0;padding:0;",
        u = zi.createElementNS
          ? zi.createElementNS(r.replace(/^https/, "http"), n)
          : zi.createElement(n);
      return (
        i &&
          (t
            ? (io || (io = a(e)),
              u.setAttribute("width", 0.01),
              u.setAttribute("height", 0.01),
              u.setAttribute("transform", "translate(" + s + "," + o + ")"),
              io.appendChild(u))
            : (Bn || ((Bn = a(e)), (Bn.style.cssText = f)),
              (u.style.cssText =
                f +
                "width:0.1px;height:0.1px;top:" +
                o +
                "px;left:" +
                s +
                "px"),
              Bn.appendChild(u))),
        u
      );
    }
    throw "Need document and parent.";
  },
  qd = function (e) {
    for (var i = new Hi(), t = 0; t < e.numberOfItems; t++)
      i.multiply(e.getItem(t).matrix);
    return i;
  },
  Mc = function (e) {
    var i = e.getCTM(),
      t;
    return (
      i ||
        ((t = e.style[yi]),
        (e.style[yi] = "none"),
        e.appendChild(ts),
        (i = ts.getCTM()),
        e.removeChild(ts),
        t
          ? (e.style[yi] = t)
          : e.style.removeProperty(
              yi.replace(/([A-Z])/g, "-$1").toLowerCase(),
            )),
      i || yo.clone()
    );
  },
  Qd = function (e, i) {
    var t = Al(e),
      r = e === t,
      n = t ? Pc : Ec,
      s = e.parentNode,
      o =
        s && !t && s.shadowRoot && s.shadowRoot.appendChild ? s.shadowRoot : s,
      f,
      u,
      c,
      h,
      p,
      l;
    if (e === Ar) return e;
    if (
      (n.length || n.push(jo(e, 1), jo(e, 2), jo(e, 3)), (f = t ? io : Bn), t)
    )
      (r
        ? ((c = Mc(e)), (h = -c.e / c.a), (p = -c.f / c.d), (u = yo))
        : e.getBBox
          ? ((c = e.getBBox()),
            (u = e.transform ? e.transform.baseVal : {}),
            (u = u.numberOfItems
              ? u.numberOfItems > 1
                ? qd(u)
                : u.getItem(0).matrix
              : yo),
            (h = u.a * c.x + u.c * c.y),
            (p = u.b * c.x + u.d * c.y))
          : ((u = new Hi()), (h = p = 0)),
        i && e.tagName.toLowerCase() === "g" && (h = p = 0),
        (r ? t : s).appendChild(f),
        f.setAttribute(
          "transform",
          "matrix(" +
            u.a +
            "," +
            u.b +
            "," +
            u.c +
            "," +
            u.d +
            "," +
            (u.e + h) +
            "," +
            (u.f + p) +
            ")",
        ));
    else {
      if (((h = p = 0), kc))
        for (
          u = e.offsetParent, c = e;
          c && (c = c.parentNode) && c !== u && c.parentNode;
        )
          (Ar.getComputedStyle(c)[yi] + "").length > 4 &&
            ((h = c.offsetLeft), (p = c.offsetTop), (c = 0));
      if (
        ((l = Ar.getComputedStyle(e)),
        l.position !== "absolute" && l.position !== "fixed")
      )
        for (u = e.offsetParent; s && s !== u; )
          ((h += s.scrollLeft || 0),
            (p += s.scrollTop || 0),
            (s = s.parentNode));
      ((c = f.style),
        (c.top = e.offsetTop - p + "px"),
        (c.left = e.offsetLeft - h + "px"),
        (c[yi] = l[yi]),
        (c[Na] = l[Na]),
        (c.position = l.position === "fixed" ? "fixed" : "absolute"),
        o.appendChild(f));
    }
    return f;
  },
  Zo = function (e, i, t, r, n, s, o) {
    return (
      (e.a = i),
      (e.b = t),
      (e.c = r),
      (e.d = n),
      (e.e = s),
      (e.f = o),
      e
    );
  },
  Hi = (function () {
    function a(i, t, r, n, s, o) {
      (i === void 0 && (i = 1),
        t === void 0 && (t = 0),
        r === void 0 && (r = 0),
        n === void 0 && (n = 1),
        s === void 0 && (s = 0),
        o === void 0 && (o = 0),
        Zo(this, i, t, r, n, s, o));
    }
    var e = a.prototype;
    return (
      (e.inverse = function () {
        var t = this.a,
          r = this.b,
          n = this.c,
          s = this.d,
          o = this.e,
          f = this.f,
          u = t * s - r * n || 1e-10;
        return Zo(
          this,
          s / u,
          -r / u,
          -n / u,
          t / u,
          (n * f - s * o) / u,
          -(t * f - r * o) / u,
        );
      }),
      (e.multiply = function (t) {
        var r = this.a,
          n = this.b,
          s = this.c,
          o = this.d,
          f = this.e,
          u = this.f,
          c = t.a,
          h = t.c,
          p = t.b,
          l = t.d,
          _ = t.e,
          d = t.f;
        return Zo(
          this,
          c * r + p * s,
          c * n + p * o,
          h * r + l * s,
          h * n + l * o,
          f + _ * r + d * s,
          u + _ * n + d * o,
        );
      }),
      (e.clone = function () {
        return new a(this.a, this.b, this.c, this.d, this.e, this.f);
      }),
      (e.equals = function (t) {
        var r = this.a,
          n = this.b,
          s = this.c,
          o = this.d,
          f = this.e,
          u = this.f;
        return (
          r === t.a &&
          n === t.b &&
          s === t.c &&
          o === t.d &&
          f === t.e &&
          u === t.f
        );
      }),
      (e.apply = function (t, r) {
        r === void 0 && (r = {});
        var n = t.x,
          s = t.y,
          o = this.a,
          f = this.b,
          u = this.c,
          c = this.d,
          h = this.e,
          p = this.f;
        return (
          (r.x = n * o + s * u + h || 0),
          (r.y = n * f + s * c + p || 0),
          r
        );
      }),
      a
    );
  })();
function ft(a, e, i, t) {
  if (!a || !a.parentNode || (zi || Ml(a)).documentElement === a)
    return new Hi();
  var r = Gd(a),
    n = Al(a),
    s = n ? Pc : Ec,
    o = Qd(a, i),
    f = s[0].getBoundingClientRect(),
    u = s[1].getBoundingClientRect(),
    c = s[2].getBoundingClientRect(),
    h = o.parentNode,
    p = !t && Ud(a),
    l = new Hi(
      (u.left - f.left) / 100,
      (u.top - f.top) / 100,
      (c.left - f.left) / 100,
      (c.top - f.top) / 100,
      f.left + (p ? 0 : Ol()),
      f.top + (p ? 0 : Dl()),
    );
  if ((h.removeChild(o), r))
    for (f = r.length; f--; )
      ((u = r[f]), (u.scaleX = u.scaleY = 0), u.renderTransform(1, u));
  return e ? l.inverse() : l;
}
/*!
 * Flip 3.13.0
 * https://gsap.com
 *
 * @license Copyright 2008-2025, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license
 * @author: Jack Doyle, jack@greensock.com
 */ var Kd = 1,
  wn,
  xt,
  Fe,
  is,
  Ji,
  $i,
  Ba,
  Tu = function (e, i) {
    return e.actions.forEach(function (t) {
      return t.vars[i] && t.vars[i](t);
    });
  },
  za = {},
  Su = 180 / Math.PI,
  jd = Math.PI / 180,
  xo = {},
  Cu = {},
  Oo = {},
  Rl = function (e) {
    return typeof e == "string" ? e.split(" ").join("").split(",") : e;
  },
  Zd = Rl("onStart,onUpdate,onComplete,onReverseComplete,onInterrupt"),
  Ao = Rl(
    "transform,transformOrigin,width,height,position,top,left,opacity,zIndex,maxWidth,maxHeight,minWidth,minHeight",
  ),
  rs = function (e) {
    return wn(e)[0] || console.warn("Element not found:", e);
  },
  en = function (e) {
    return Math.round(e * 1e4) / 1e4 || 0;
  },
  Jo = function (e, i, t) {
    return e.forEach(function (r) {
      return r.classList[t](i);
    });
  },
  ku = {
    zIndex: 1,
    kill: 1,
    simple: 1,
    spin: 1,
    clearProps: 1,
    targets: 1,
    toggleClass: 1,
    onComplete: 1,
    onUpdate: 1,
    onInterrupt: 1,
    onStart: 1,
    delay: 1,
    repeat: 1,
    repeatDelay: 1,
    yoyo: 1,
    scale: 1,
    fade: 1,
    absolute: 1,
    props: 1,
    onEnter: 1,
    onLeave: 1,
    custom: 1,
    paused: 1,
    nested: 1,
    prune: 1,
    absoluteOnLeave: 1,
  },
  Dc = {
    zIndex: 1,
    simple: 1,
    clearProps: 1,
    scale: 1,
    absolute: 1,
    fitChild: 1,
    getVars: 1,
    props: 1,
  },
  Oc = function (e) {
    return e.replace(/([A-Z])/g, "-$1").toLowerCase();
  },
  tn = function (e, i) {
    var t = {},
      r;
    for (r in e) i[r] || (t[r] = e[r]);
    return t;
  },
  Ll = {},
  Ac = function (e) {
    var i = (Ll[e] = Rl(e));
    return ((Oo[e] = i.concat(Ao)), i);
  },
  Jd = function (e) {
    var i = e._gsap || xt.core.getCache(e);
    return i.gmCache === xt.ticker.frame
      ? i.gMatrix
      : ((i.gmCache = xt.ticker.frame), (i.gMatrix = ft(e, !0, !1, !0)));
  },
  ep = function a(e, i, t) {
    t === void 0 && (t = 0);
    for (
      var r = e.parentNode,
        n = 1e3 * Math.pow(10, t) * (i ? -1 : 1),
        s = i ? -n * 900 : 0;
      e;
    )
      ((s += n), (e = e.previousSibling));
    return r ? s + a(r, i, t + 1) : s;
  },
  vo = function (e, i, t) {
    return (
      e.forEach(function (r) {
        return (r.d = ep(t ? r.element : r.t, i));
      }),
      e.sort(function (r, n) {
        return r.d - n.d;
      }),
      e
    );
  },
  xs = function (e, i) {
    for (
      var t = e.element.style, r = (e.css = e.css || []), n = i.length, s, o;
      n--;
    )
      ((s = i[n]),
        (o = t[s] || t.getPropertyValue(s)),
        r.push(o ? s : Cu[s] || (Cu[s] = Oc(s)), o));
    return t;
  },
  wo = function (e) {
    var i = e.css,
      t = e.element.style,
      r = 0;
    for (e.cache.uncache = 1; r < i.length; r += 2)
      i[r + 1] ? (t[i[r]] = i[r + 1]) : t.removeProperty(i[r]);
    !i[i.indexOf("transform") + 1] &&
      t.translate &&
      (t.removeProperty("translate"),
      t.removeProperty("scale"),
      t.removeProperty("rotate"));
  },
  Pu = function (e, i) {
    (e.forEach(function (t) {
      return (t.a.cache.uncache = 1);
    }),
      i || e.finalStates.forEach(wo));
  },
  ea =
    "paddingTop,paddingRight,paddingBottom,paddingLeft,gridArea,transition".split(
      ",",
    ),
  Fl = function (e, i, t) {
    var r = e.element,
      n = e.width,
      s = e.height,
      o = e.uncache,
      f = e.getProp,
      u = r.style,
      c = 4,
      h,
      p,
      l;
    if ((typeof i != "object" && (i = e), Fe && t !== 1))
      return (
        Fe._abs.push({ t: r, b: e, a: e, sd: 0 }),
        Fe._final.push(function () {
          return (e.cache.uncache = 1) && wo(e);
        }),
        r
      );
    for (
      p = f("display") === "none",
        (!e.isVisible || p) &&
          (p && (xs(e, ["display"]).display = i.display),
          (e.matrix = i.matrix),
          (e.width = n = e.width || i.width),
          (e.height = s = e.height || i.height)),
        xs(e, ea),
        l = window.getComputedStyle(r);
      c--;
    )
      u[ea[c]] = l[ea[c]];
    if (
      ((u.gridArea = "1 / 1 / 1 / 1"),
      (u.transition = "none"),
      (u.position = "absolute"),
      (u.width = n + "px"),
      (u.height = s + "px"),
      u.top || (u.top = "0px"),
      u.left || (u.left = "0px"),
      o)
    )
      h = new zr(r);
    else if (((h = tn(e, xo)), (h.position = "absolute"), e.simple)) {
      var _ = r.getBoundingClientRect();
      h.matrix = new Hi(1, 0, 0, 1, _.left + Ol(), _.top + Dl());
    } else h.matrix = ft(r, !1, !1, !0);
    return (
      (h = fn(h, e, !0)),
      (e.x = $i(h.x, 0.01)),
      (e.y = $i(h.y, 0.01)),
      r
    );
  },
  Eu = function (e, i) {
    return (
      i !== !0 &&
        ((i = wn(i)),
        (e = e.filter(function (t) {
          if (i.indexOf((t.sd < 0 ? t.b : t.a).element) !== -1) return !0;
          (t.t._gsap.renderTransform(1),
            t.b.isVisible &&
              ((t.t.style.width = t.b.width + "px"),
              (t.t.style.height = t.b.height + "px")));
        }))),
      e
    );
  },
  Rc = function (e) {
    return vo(e, !0).forEach(function (i) {
      return (
        (i.a.isVisible || i.b.isVisible) && Fl(i.sd < 0 ? i.b : i.a, i.b, 1)
      );
    });
  },
  tp = function (e, i) {
    return (i && e.idLookup[$a(i).id]) || e.elementStates[0];
  },
  $a = function (e, i, t, r) {
    return e instanceof zr
      ? e
      : e instanceof xi
        ? tp(e, r)
        : new zr(
            typeof e == "string" ? rs(e) || console.warn(e + " not found") : e,
            i,
            t,
          );
  },
  ip = function (e, i) {
    for (
      var t = xt.getProperty(e.element, null, "native"),
        r = (e.props = {}),
        n = i.length;
      n--;
    )
      r[i[n]] = (t(i[n]) + "").trim();
    return (r.zIndex && (r.zIndex = parseFloat(r.zIndex) || 0), e);
  },
  Lc = function (e, i) {
    var t = e.style || e,
      r;
    for (r in i) t[r] = i[r];
  },
  rp = function (e) {
    var i = e.getAttribute("data-flip-id");
    return (i || e.setAttribute("data-flip-id", (i = "auto-" + Kd++)), i);
  },
  Fc = function (e) {
    return e.map(function (i) {
      return i.element;
    });
  },
  Mu = function (e, i, t) {
    return e && i.length && t.add(e(Fc(i), t, new xi(i, 0, !0)), 0);
  },
  fn = function (e, i, t, r, n, s) {
    var o = e.element,
      f = e.cache,
      u = e.parent,
      c = e.x,
      h = e.y,
      p = i.width,
      l = i.height,
      _ = i.scaleX,
      d = i.scaleY,
      g = i.rotation,
      m = i.bounds,
      x = s && Ba && Ba(o, "transform,width,height"),
      v = e,
      T = i.matrix,
      y = T.e,
      k = T.f,
      C =
        e.bounds.width !== m.width ||
        e.bounds.height !== m.height ||
        e.scaleX !== _ ||
        e.scaleY !== d ||
        e.rotation !== g,
      P = !C && e.simple && i.simple && !n,
      E,
      D,
      F,
      R,
      L,
      V,
      z;
    return (
      P || !u
        ? ((_ = d = 1), (g = E = 0))
        : ((L = Jd(u)),
          (V = L.clone().multiply(
            i.ctm ? i.matrix.clone().multiply(i.ctm) : i.matrix,
          )),
          (g = en(Math.atan2(V.b, V.a) * Su)),
          (E = en(Math.atan2(V.c, V.d) * Su + g) % 360),
          (_ = Math.sqrt(Math.pow(V.a, 2) + Math.pow(V.b, 2))),
          (d =
            Math.sqrt(Math.pow(V.c, 2) + Math.pow(V.d, 2)) * Math.cos(E * jd)),
          n &&
            ((n = wn(n)[0]),
            (R = xt.getProperty(n)),
            (z = n.getBBox && typeof n.getBBox == "function" && n.getBBox()),
            (v = {
              scaleX: R("scaleX"),
              scaleY: R("scaleY"),
              width: z ? z.width : Math.ceil(parseFloat(R("width", "px"))),
              height: z ? z.height : parseFloat(R("height", "px")),
            })),
          (f.rotation = g + "deg"),
          (f.skewX = E + "deg")),
      t
        ? ((_ *= p === v.width || !v.width ? 1 : p / v.width),
          (d *= l === v.height || !v.height ? 1 : l / v.height),
          (f.scaleX = _),
          (f.scaleY = d))
        : ((p = $i((p * _) / v.scaleX, 0)),
          (l = $i((l * d) / v.scaleY, 0)),
          (o.style.width = p + "px"),
          (o.style.height = l + "px")),
      r && Lc(o, i.props),
      P || !u
        ? ((c += y - e.matrix.e), (h += k - e.matrix.f))
        : C || u !== i.parent
          ? (f.renderTransform(1, f),
            (V = ft(n || o, !1, !1, !0)),
            (D = L.apply({ x: V.e, y: V.f })),
            (F = L.apply({ x: y, y: k })),
            (c += F.x - D.x),
            (h += F.y - D.y))
          : ((L.e = L.f = 0),
            (F = L.apply({ x: y - e.matrix.e, y: k - e.matrix.f })),
            (c += F.x),
            (h += F.y)),
      (c = $i(c, 0.02)),
      (h = $i(h, 0.02)),
      s && !(s instanceof zr)
        ? x && x.revert()
        : ((f.x = c + "px"), (f.y = h + "px"), f.renderTransform(1, f)),
      s &&
        ((s.x = c),
        (s.y = h),
        (s.rotation = g),
        (s.skewX = E),
        t ? ((s.scaleX = _), (s.scaleY = d)) : ((s.width = p), (s.height = l))),
      s || f
    );
  },
  ta = function (e, i) {
    return e instanceof xi ? e : new xi(e, i);
  },
  Ic = function (e, i, t) {
    var r = e.idLookup[t],
      n = e.alt[t];
    return n.isVisible &&
      (!(i.getElementState(n.element) || n).isVisible || !r.isVisible)
      ? n
      : r;
  },
  ia = [],
  ra = "width,height,overflowX,overflowY".split(","),
  $s,
  Du = function (e) {
    if (e !== $s) {
      var i = Ji.style,
        t = Ji.clientWidth === window.outerWidth,
        r = Ji.clientHeight === window.outerHeight,
        n = 4;
      if (e && (t || r)) {
        for (; n--; ) ia[n] = i[ra[n]];
        (t && ((i.width = Ji.clientWidth + "px"), (i.overflowY = "hidden")),
          r && ((i.height = Ji.clientHeight + "px"), (i.overflowX = "hidden")),
          ($s = e));
      } else if ($s) {
        for (; n--; ) ia[n] ? (i[ra[n]] = ia[n]) : i.removeProperty(Oc(ra[n]));
        $s = e;
      }
    }
  },
  na = function (e, i, t, r) {
    ((e instanceof xi && i instanceof xi) ||
      console.warn("Not a valid state object."),
      (t = t || {}));
    var n = t,
      s = n.clearProps,
      o = n.onEnter,
      f = n.onLeave,
      u = n.absolute,
      c = n.absoluteOnLeave,
      h = n.custom,
      p = n.delay,
      l = n.paused,
      _ = n.repeat,
      d = n.repeatDelay,
      g = n.yoyo,
      m = n.toggleClass,
      x = n.nested,
      v = n.zIndex,
      T = n.scale,
      y = n.fade,
      k = n.stagger,
      C = n.spin,
      P = n.prune,
      E = ("props" in t ? t : e).props,
      D = tn(t, ku),
      F = xt.timeline({
        delay: p,
        paused: l,
        repeat: _,
        repeatDelay: d,
        yoyo: g,
        data: "isFlip",
      }),
      R = D,
      L = [],
      V = [],
      z = [],
      X = [],
      $ = C === !0 ? 1 : C || 0,
      J =
        typeof C == "function"
          ? C
          : function () {
              return $;
            },
      re = e.interrupted || i.interrupted,
      b = F[r !== 1 ? "to" : "from"],
      W,
      G,
      ne,
      j,
      se,
      te,
      ye,
      oe,
      Oe,
      ce,
      we,
      Ae,
      Z,
      ee;
    for (G in i.idLookup)
      ((we = i.alt[G] ? Ic(i, e, G) : i.idLookup[G]),
        (se = we.element),
        (ce = e.idLookup[G]),
        e.alt[G] &&
          se === ce.element &&
          (e.alt[G].isVisible || !we.isVisible) &&
          (ce = e.alt[G]),
        ce
          ? ((te = {
              t: se,
              b: ce,
              a: we,
              sd: ce.element === se ? 0 : we.isVisible ? 1 : -1,
            }),
            z.push(te),
            te.sd &&
              (te.sd < 0 && ((te.b = we), (te.a = ce)),
              re && xs(te.b, E ? Oo[E] : Ao),
              y &&
                z.push(
                  (te.swap = {
                    t: ce.element,
                    b: te.b,
                    a: te.a,
                    sd: -te.sd,
                    swap: te,
                  }),
                )),
            (se._flip = ce.element._flip = Fe ? Fe.timeline : F))
          : we.isVisible &&
            (z.push({
              t: se,
              b: tn(we, { isVisible: 1 }),
              a: we,
              sd: 0,
              entering: 1,
            }),
            (se._flip = Fe ? Fe.timeline : F)));
    if (
      (E &&
        (Ll[E] || Ac(E)).forEach(function (M) {
          return (D[M] = function (be) {
            return z[be].a.props[M];
          });
        }),
      (z.finalStates = Oe = []),
      (Ae = function () {
        for (vo(z), Du(!0), j = 0; j < z.length; j++)
          ((te = z[j]),
            (Z = te.a),
            (ee = te.b),
            P && !Z.isDifferent(ee) && !te.entering
              ? z.splice(j--, 1)
              : ((se = te.t),
                x && !(te.sd < 0) && j && (Z.matrix = ft(se, !1, !1, !0)),
                ee.isVisible && Z.isVisible
                  ? (te.sd < 0
                      ? ((ye = new zr(se, E, e.simple)),
                        fn(ye, Z, T, 0, 0, ye),
                        (ye.matrix = ft(se, !1, !1, !0)),
                        (ye.css = te.b.css),
                        (te.a = Z = ye),
                        y && (se.style.opacity = re ? ee.opacity : Z.opacity),
                        k && X.push(se))
                      : te.sd > 0 &&
                        y &&
                        (se.style.opacity = re ? Z.opacity - ee.opacity : "0"),
                    fn(Z, ee, T, E))
                  : ee.isVisible !== Z.isVisible &&
                    (ee.isVisible
                      ? Z.isVisible ||
                        ((ee.css = Z.css),
                        V.push(ee),
                        z.splice(j--, 1),
                        u && x && fn(Z, ee, T, E))
                      : (Z.isVisible && L.push(Z), z.splice(j--, 1))),
                T ||
                  ((se.style.maxWidth = Math.max(Z.width, ee.width) + "px"),
                  (se.style.maxHeight = Math.max(Z.height, ee.height) + "px"),
                  (se.style.minWidth = Math.min(Z.width, ee.width) + "px"),
                  (se.style.minHeight = Math.min(Z.height, ee.height) + "px")),
                x && m && se.classList.add(m)),
            Oe.push(Z));
        var be;
        if (
          (m &&
            ((be = Oe.map(function (U) {
              return U.element;
            })),
            x &&
              be.forEach(function (U) {
                return U.classList.remove(m);
              })),
          Du(!1),
          T
            ? ((D.scaleX = function (U) {
                return z[U].a.scaleX;
              }),
              (D.scaleY = function (U) {
                return z[U].a.scaleY;
              }))
            : ((D.width = function (U) {
                return z[U].a.width + "px";
              }),
              (D.height = function (U) {
                return z[U].a.height + "px";
              }),
              (D.autoRound = t.autoRound || !1)),
          (D.x = function (U) {
            return z[U].a.x + "px";
          }),
          (D.y = function (U) {
            return z[U].a.y + "px";
          }),
          (D.rotation = function (U) {
            return z[U].a.rotation + (C ? J(U, oe[U], oe) * 360 : 0);
          }),
          (D.skewX = function (U) {
            return z[U].a.skewX;
          }),
          (oe = z.map(function (U) {
            return U.t;
          })),
          (v || v === 0) &&
            ((D.modifiers = {
              zIndex: function () {
                return v;
              },
            }),
            (D.zIndex = v),
            (D.immediateRender = t.immediateRender !== !1)),
          y &&
            (D.opacity = function (U) {
              return z[U].sd < 0 ? 0 : z[U].sd > 0 ? z[U].a.opacity : "+=0";
            }),
          X.length)
        ) {
          k = xt.utils.distribute(k);
          var Tt = oe.slice(X.length);
          D.stagger = function (U, Re) {
            return k(~X.indexOf(Re) ? oe.indexOf(z[U].swap.t) : U, Re, Tt);
          };
        }
        if (
          (Zd.forEach(function (U) {
            return t[U] && F.eventCallback(U, t[U], t[U + "Params"]);
          }),
          h && oe.length)
        ) {
          ((R = tn(D, ku)),
            "scale" in h && ((h.scaleX = h.scaleY = h.scale), delete h.scale));
          for (G in h)
            ((W = tn(h[G], Dc)),
              (W[G] = D[G]),
              !("duration" in W) &&
                "duration" in D &&
                (W.duration = D.duration),
              (W.stagger = D.stagger),
              b.call(F, oe, W, 0),
              delete R[G]);
        }
        ((oe.length || V.length || L.length) &&
          (m &&
            F.add(function () {
              return Jo(be, m, F._zTime < 0 ? "remove" : "add");
            }, 0) &&
            !l &&
            Jo(be, m, "add"),
          oe.length && b.call(F, oe, R, 0)),
          Mu(o, L, F),
          Mu(f, V, F));
        var dt = Fe && Fe.timeline;
        (dt &&
          (dt.add(F, 0),
          Fe._final.push(function () {
            return Pu(z, !s);
          })),
          (ne = F.duration()),
          F.call(function () {
            var U = F.time() >= ne;
            (U && !dt && Pu(z, !s), m && Jo(be, m, U ? "remove" : "add"));
          }));
      }),
      c &&
        (u = z
          .filter(function (M) {
            return !M.sd && !M.a.isVisible && M.b.isVisible;
          })
          .map(function (M) {
            return M.a.element;
          })),
      Fe)
    ) {
      var ae;
      (u && (ae = Fe._abs).push.apply(ae, Eu(z, u)), Fe._run.push(Ae));
    } else (u && Rc(Eu(z, u)), Ae());
    var Ue = Fe ? Fe.timeline : F;
    return (
      (Ue.revert = function () {
        return Il(Ue, 1, 1);
      }),
      Ue
    );
  },
  np = function a(e) {
    (e.vars.onInterrupt &&
      e.vars.onInterrupt.apply(e, e.vars.onInterruptParams || []),
      e.getChildren(!0, !1, !0).forEach(a));
  },
  Il = function (e, i, t) {
    if (e && e.progress() < 1 && (!e.paused() || t))
      return (i && (np(e), i < 2 && e.progress(1), e.kill()), !0);
  },
  Ys = function (e) {
    for (
      var i = (e.idLookup = {}),
        t = (e.alt = {}),
        r = e.elementStates,
        n = r.length,
        s;
      n--;
    )
      ((s = r[n]), i[s.id] ? (t[s.id] = s) : (i[s.id] = s));
  },
  xi = (function () {
    function a(i, t, r) {
      if (((this.props = t && t.props), (this.simple = !!(t && t.simple)), r))
        ((this.targets = Fc(i)), (this.elementStates = i), Ys(this));
      else {
        this.targets = wn(i);
        var n = t && (t.kill === !1 || (t.batch && !t.kill));
        (Fe && !n && Fe._kill.push(this), this.update(n || !!Fe));
      }
    }
    var e = a.prototype;
    return (
      (e.update = function (t) {
        var r = this;
        return (
          (this.elementStates = this.targets.map(function (n) {
            return new zr(n, r.props, r.simple);
          })),
          Ys(this),
          this.interrupt(t),
          this.recordInlineStyles(),
          this
        );
      }),
      (e.clear = function () {
        return (
          (this.targets.length = this.elementStates.length = 0),
          Ys(this),
          this
        );
      }),
      (e.fit = function (t, r, n) {
        for (
          var s = vo(this.elementStates.slice(0), !1, !0),
            o = (t || this).idLookup,
            f = 0,
            u,
            c;
          f < s.length;
          f++
        )
          ((u = s[f]),
            n && (u.matrix = ft(u.element, !1, !1, !0)),
            (c = o[u.id]),
            c && fn(u, c, r, !0, 0, u),
            (u.matrix = ft(u.element, !1, !1, !0)));
        return this;
      }),
      (e.getProperty = function (t, r) {
        var n = this.getElementState(t) || xo;
        return (r in n ? n : n.props || xo)[r];
      }),
      (e.add = function (t) {
        for (
          var r = t.targets.length, n = this.idLookup, s = this.alt, o, f, u;
          r--;
        )
          ((f = t.elementStates[r]),
            (u = n[f.id]),
            u &&
            (f.element === u.element ||
              (s[f.id] && s[f.id].element === f.element))
              ? ((o = this.elementStates.indexOf(
                  f.element === u.element ? u : s[f.id],
                )),
                this.targets.splice(o, 1, t.targets[r]),
                this.elementStates.splice(o, 1, f))
              : (this.targets.push(t.targets[r]), this.elementStates.push(f)));
        return (
          t.interrupted && (this.interrupted = !0),
          t.simple || (this.simple = !1),
          Ys(this),
          this
        );
      }),
      (e.compare = function (t) {
        var r = t.idLookup,
          n = this.idLookup,
          s = [],
          o = [],
          f = [],
          u = [],
          c = [],
          h = t.alt,
          p = this.alt,
          l = function (P, E, D) {
            return (
              (P.isVisible !== E.isVisible
                ? P.isVisible
                  ? f
                  : u
                : P.isVisible
                  ? o
                  : s
              ).push(D) && c.push(D)
            );
          },
          _ = function (P, E, D) {
            return c.indexOf(D) < 0 && l(P, E, D);
          },
          d,
          g,
          m,
          x,
          v,
          T,
          y,
          k;
        for (m in r)
          ((v = h[m]),
            (T = p[m]),
            (d = v ? Ic(t, this, m) : r[m]),
            (x = d.element),
            (g = n[m]),
            T
              ? ((k = g.isVisible || (!T.isVisible && x === g.element) ? g : T),
                (y =
                  v && !d.isVisible && !v.isVisible && k.element === v.element
                    ? v
                    : d),
                y.isVisible && k.isVisible && y.element !== k.element
                  ? ((y.isDifferent(k) ? o : s).push(y.element, k.element),
                    c.push(y.element, k.element))
                  : l(y, k, y.element),
                v && y.element === v.element && (v = r[m]),
                _(y.element !== g.element && v ? v : y, g, g.element),
                _(v && v.element === T.element ? v : y, T, T.element),
                v && _(v, T.element === v.element ? T : g, v.element))
              : (g ? (g.isDifferent(d) ? l(d, g, x) : s.push(x)) : f.push(x),
                v && _(v, g, v.element)));
        for (m in n)
          r[m] || (u.push(n[m].element), p[m] && u.push(p[m].element));
        return { changed: o, unchanged: s, enter: f, leave: u };
      }),
      (e.recordInlineStyles = function () {
        for (var t = Oo[this.props] || Ao, r = this.elementStates.length; r--; )
          xs(this.elementStates[r], t);
      }),
      (e.interrupt = function (t) {
        var r = this,
          n = [];
        (this.targets.forEach(function (s) {
          var o = s._flip,
            f = Il(o, t ? 0 : 1);
          (t &&
            f &&
            n.indexOf(o) < 0 &&
            o.add(function () {
              return r.updateVisibility();
            }),
            f && n.push(o));
        }),
          !t && n.length && this.updateVisibility(),
          this.interrupted || (this.interrupted = !!n.length));
      }),
      (e.updateVisibility = function () {
        this.elementStates.forEach(function (t) {
          var r = t.element.getBoundingClientRect();
          ((t.isVisible = !!(r.width || r.height || r.top || r.left)),
            (t.uncache = 1));
        });
      }),
      (e.getElementState = function (t) {
        return this.elementStates[this.targets.indexOf(rs(t))];
      }),
      (e.makeAbsolute = function () {
        return vo(this.elementStates.slice(0), !0, !0).map(Fl);
      }),
      a
    );
  })(),
  zr = (function () {
    function a(i, t, r) {
      ((this.element = i), this.update(t, r));
    }
    var e = a.prototype;
    return (
      (e.isDifferent = function (t) {
        var r = this.bounds,
          n = t.bounds;
        return (
          r.top !== n.top ||
          r.left !== n.left ||
          r.width !== n.width ||
          r.height !== n.height ||
          !this.matrix.equals(t.matrix) ||
          this.opacity !== t.opacity ||
          (this.props &&
            t.props &&
            JSON.stringify(this.props) !== JSON.stringify(t.props))
        );
      }),
      (e.update = function (t, r) {
        var n = this,
          s = n.element,
          o = xt.getProperty(s),
          f = xt.core.getCache(s),
          u = s.getBoundingClientRect(),
          c =
            s.getBBox &&
            typeof s.getBBox == "function" &&
            s.nodeName.toLowerCase() !== "svg" &&
            s.getBBox(),
          h = r
            ? new Hi(1, 0, 0, 1, u.left + Ol(), u.top + Dl())
            : ft(s, !1, !1, !0);
        ((f.uncache = 1),
          (n.getProp = o),
          (n.element = s),
          (n.id = rp(s)),
          (n.matrix = h),
          (n.cache = f),
          (n.bounds = u),
          (n.isVisible = !!(u.width || u.height || u.left || u.top)),
          (n.display = o("display")),
          (n.position = o("position")),
          (n.parent = s.parentNode),
          (n.x = o("x")),
          (n.y = o("y")),
          (n.scaleX = f.scaleX),
          (n.scaleY = f.scaleY),
          (n.rotation = o("rotation")),
          (n.skewX = o("skewX")),
          (n.opacity = o("opacity")),
          (n.width = c ? c.width : $i(o("width", "px"), 0.04)),
          (n.height = c ? c.height : $i(o("height", "px"), 0.04)),
          t && ip(n, Ll[t] || Ac(t)),
          (n.ctm =
            s.getCTM && s.nodeName.toLowerCase() === "svg" && Mc(s).inverse()),
          (n.simple =
            r || (en(h.a) === 1 && !en(h.b) && !en(h.c) && en(h.d) === 1)),
          (n.uncache = 0));
      }),
      a
    );
  })(),
  sp = (function () {
    function a(i, t) {
      ((this.vars = i),
        (this.batch = t),
        (this.states = []),
        (this.timeline = t.timeline));
    }
    var e = a.prototype;
    return (
      (e.getStateById = function (t) {
        for (var r = this.states.length; r--; )
          if (this.states[r].idLookup[t]) return this.states[r];
      }),
      (e.kill = function () {
        this.batch.remove(this);
      }),
      a
    );
  })(),
  op = (function () {
    function a(i) {
      ((this.id = i),
        (this.actions = []),
        (this._kill = []),
        (this._final = []),
        (this._abs = []),
        (this._run = []),
        (this.data = {}),
        (this.state = new xi()),
        (this.timeline = xt.timeline()));
    }
    var e = a.prototype;
    return (
      (e.add = function (t) {
        var r = this.actions.filter(function (n) {
          return n.vars === t;
        });
        return r.length
          ? r[0]
          : ((r = new sp(typeof t == "function" ? { animate: t } : t, this)),
            this.actions.push(r),
            r);
      }),
      (e.remove = function (t) {
        var r = this.actions.indexOf(t);
        return (r >= 0 && this.actions.splice(r, 1), this);
      }),
      (e.getState = function (t) {
        var r = this,
          n = Fe,
          s = is;
        return (
          (Fe = this),
          this.state.clear(),
          (this._kill.length = 0),
          this.actions.forEach(function (o) {
            (o.vars.getState &&
              ((o.states.length = 0), (is = o), (o.state = o.vars.getState(o))),
              t &&
                o.states.forEach(function (f) {
                  return r.state.add(f);
                }));
          }),
          (is = s),
          (Fe = n),
          this.killConflicts(),
          this
        );
      }),
      (e.animate = function () {
        var t = this,
          r = Fe,
          n = this.timeline,
          s = this.actions.length,
          o,
          f;
        for (
          Fe = this,
            n.clear(),
            this._abs.length = this._final.length = this._run.length = 0,
            this.actions.forEach(function (u) {
              u.vars.animate && u.vars.animate(u);
              var c = u.vars.onEnter,
                h = u.vars.onLeave,
                p = u.targets,
                l,
                _;
              p &&
                p.length &&
                (c || h) &&
                ((l = new xi()),
                u.states.forEach(function (d) {
                  return l.add(d);
                }),
                (_ = l.compare(Nl.getState(p))),
                _.enter.length && c && c(_.enter),
                _.leave.length && h && h(_.leave));
            }),
            Rc(this._abs),
            this._run.forEach(function (u) {
              return u();
            }),
            f = n.duration(),
            o = this._final.slice(0),
            n.add(function () {
              f <= n.time() &&
                (o.forEach(function (u) {
                  return u();
                }),
                Tu(t, "onComplete"));
            }),
            Fe = r;
          s--;
        )
          this.actions[s].vars.once && this.actions[s].kill();
        return (Tu(this, "onStart"), n.restart(), this);
      }),
      (e.loadState = function (t) {
        t ||
          (t = function () {
            return 0;
          });
        var r = [];
        return (
          this.actions.forEach(function (n) {
            if (n.vars.loadState) {
              var s,
                o = function f(u) {
                  (u && (n.targets = u),
                    (s = r.indexOf(f)),
                    ~s && (r.splice(s, 1), r.length || t()));
                };
              (r.push(o), n.vars.loadState(o));
            }
          }),
          r.length || t(),
          this
        );
      }),
      (e.setState = function () {
        return (
          this.actions.forEach(function (t) {
            return (t.targets = t.vars.setState && t.vars.setState(t));
          }),
          this
        );
      }),
      (e.killConflicts = function (t) {
        return (
          this.state.interrupt(t),
          this._kill.forEach(function (r) {
            return r.interrupt(t);
          }),
          this
        );
      }),
      (e.run = function (t, r) {
        var n = this;
        return (
          this !== Fe &&
            (t || this.getState(r),
            this.loadState(function () {
              n._killed || (n.setState(), n.animate());
            })),
          this
        );
      }),
      (e.clear = function (t) {
        (this.state.clear(), t || (this.actions.length = 0));
      }),
      (e.getStateById = function (t) {
        for (var r = this.actions.length, n; r--; )
          if (((n = this.actions[r].getStateById(t)), n)) return n;
        return this.state.idLookup[t] && this.state;
      }),
      (e.kill = function () {
        ((this._killed = 1), this.clear(), delete za[this.id]);
      }),
      a
    );
  })(),
  Nl = (function () {
    function a() {}
    return (
      (a.getState = function (i, t) {
        var r = ta(i, t);
        return (
          is && is.states.push(r),
          t && t.batch && a.batch(t.batch).state.add(r),
          r
        );
      }),
      (a.from = function (i, t) {
        return (
          (t = t || {}),
          "clearProps" in t || (t.clearProps = !0),
          na(
            i,
            ta(t.targets || i.targets, {
              props: t.props || i.props,
              simple: t.simple,
              kill: !!t.kill,
            }),
            t,
            -1,
          )
        );
      }),
      (a.to = function (i, t) {
        return na(
          i,
          ta(t.targets || i.targets, {
            props: t.props || i.props,
            simple: t.simple,
            kill: !!t.kill,
          }),
          t,
          1,
        );
      }),
      (a.fromTo = function (i, t, r) {
        return na(i, t, r);
      }),
      (a.fit = function (i, t, r) {
        var n = r ? tn(r, Dc) : {},
          s = r || n,
          o = s.absolute,
          f = s.scale,
          u = s.getVars,
          c = s.props,
          h = s.runBackwards,
          p = s.onComplete,
          l = s.simple,
          _ = r && r.fitChild && rs(r.fitChild),
          d = $a(t, c, l, i),
          g = $a(i, 0, l, d),
          m = c ? Oo[c] : Ao,
          x = xt.context();
        return (
          c && Lc(n, d.props),
          xs(g, m),
          h &&
            ("immediateRender" in n || (n.immediateRender = !0),
            (n.onComplete = function () {
              (wo(g), p && p.apply(this, arguments));
            })),
          o && Fl(g, d),
          (n = fn(g, d, f || _, !n.duration && c, _, n.duration || u ? n : 0)),
          typeof r == "object" && "zIndex" in r && (n.zIndex = r.zIndex),
          x &&
            !u &&
            x.add(function () {
              return function () {
                return wo(g);
              };
            }),
          u ? n : n.duration ? xt.to(g.element, n) : null
        );
      }),
      (a.makeAbsolute = function (i, t) {
        return (i instanceof xi ? i : new xi(i, t)).makeAbsolute();
      }),
      (a.batch = function (i) {
        return (i || (i = "default"), za[i] || (za[i] = new op(i)));
      }),
      (a.killFlipsOf = function (i, t) {
        (i instanceof xi ? i.targets : wn(i)).forEach(function (r) {
          return r && Il(r._flip, t !== !1 ? 1 : 2);
        });
      }),
      (a.isFlipping = function (i) {
        var t = a.getByTarget(i);
        return !!t && t.isActive();
      }),
      (a.getByTarget = function (i) {
        return (rs(i) || xo)._flip;
      }),
      (a.getElementState = function (i, t) {
        return new zr(rs(i), t);
      }),
      (a.convertCoordinates = function (i, t, r) {
        var n = ft(t, !0, !0).multiply(ft(i));
        return r ? n.apply(r) : n;
      }),
      (a.register = function (i) {
        if (((Ji = typeof document < "u" && document.body), Ji)) {
          ((xt = i),
            Ml(Ji),
            (wn = xt.utils.toArray),
            (Ba = xt.core.getStyleSaver));
          var t = xt.utils.snap(0.1);
          $i = function (n, s) {
            return t(parseFloat(n) + s);
          };
        }
      }),
      a
    );
  })();
Nl.version = "3.13.0";
typeof window < "u" && window.gsap && window.gsap.registerPlugin(Nl);
/*!
 * SplitText 3.13.0
 * https://gsap.com
 *
 * @license Copyright 2025, GreenSock. All rights reserved. Subject to the terms at https://gsap.com/standard-license.
 * @author: Jack Doyle
 */ let En,
  Wr,
  Ya,
  ap = () => Ya || fp.register(window.gsap),
  Ou = typeof Intl < "u" ? new Intl.Segmenter() : 0,
  bo = (a) =>
    typeof a == "string"
      ? bo(document.querySelectorAll(a))
      : "length" in a
        ? Array.from(a)
        : [a],
  Au = (a) => bo(a).filter((e) => e instanceof HTMLElement),
  Xa = [],
  sa = function () {},
  lp = /\s+/g,
  Ru = new RegExp(
    "\\p{RI}\\p{RI}|\\p{Emoji}(\\p{EMod}|\\u{FE0F}\\u{20E3}?|[\\u{E0020}-\\u{E007E}]+\\u{E007F})?(\\u{200D}\\p{Emoji}(\\p{EMod}|\\u{FE0F}\\u{20E3}?|[\\u{E0020}-\\u{E007E}]+\\u{E007F})?)*|.",
    "gu",
  ),
  Lu = { left: 0, top: 0, width: 0, height: 0 },
  Fu = (a, e) => {
    if (e) {
      let i = new Set(a.join("").match(e) || Xa),
        t = a.length,
        r,
        n,
        s,
        o;
      if (i.size)
        for (; --t > -1; ) {
          n = a[t];
          for (s of i)
            if (s.startsWith(n) && s.length > n.length) {
              for (
                r = 0, o = n;
                s.startsWith((o += a[t + ++r])) && o.length < s.length;
              );
              if (r && o.length === s.length) {
                ((a[t] = s), a.splice(t + 1, r));
                break;
              }
            }
        }
    }
    return a;
  },
  Iu = (a) =>
    window.getComputedStyle(a).display === "inline" &&
    (a.style.display = "inline-block"),
  Hr = (a, e, i) =>
    e.insertBefore(typeof a == "string" ? document.createTextNode(a) : a, i),
  Va = (a, e, i) => {
    let t = e[a + "sClass"] || "",
      { tag: r = "div", aria: n = "auto", propIndex: s = !1 } = e,
      o = a === "line" ? "block" : "inline-block",
      f = t.indexOf("++") > -1,
      u = (c) => {
        let h = document.createElement(r),
          p = i.length + 1;
        return (
          t && (h.className = t + (f ? " " + t + p : "")),
          s && h.style.setProperty("--" + a, p + ""),
          n !== "none" && h.setAttribute("aria-hidden", "true"),
          r !== "span" &&
            ((h.style.position = "relative"), (h.style.display = o)),
          (h.textContent = c),
          i.push(h),
          h
        );
      };
    return (f && (t = t.replace("++", "")), (u.collection = i), u);
  },
  up = (a, e, i, t) => {
    let r = Va("line", i, t),
      n = window.getComputedStyle(a).textAlign || "left";
    return (s, o) => {
      let f = r("");
      for (f.style.textAlign = n, a.insertBefore(f, e[s]); s < o; s++)
        f.appendChild(e[s]);
      f.normalize();
    };
  },
  Nc = (a, e, i, t, r, n, s, o, f, u) => {
    var c;
    let h = Array.from(a.childNodes),
      p = 0,
      { wordDelimiter: l, reduceWhiteSpace: _ = !0, prepareText: d } = e,
      g = a.getBoundingClientRect(),
      m = g,
      x = !_ && window.getComputedStyle(a).whiteSpace.substring(0, 3) === "pre",
      v = 0,
      T = i.collection,
      y,
      k,
      C,
      P,
      E,
      D,
      F,
      R,
      L,
      V,
      z,
      X,
      $,
      J,
      re,
      b,
      W,
      G;
    for (
      typeof l == "object"
        ? ((C = l.delimiter || l), (k = l.replaceWith || ""))
        : (k = l === "" ? "" : l || " "),
        y = k !== " ";
      p < h.length;
      p++
    )
      if (((P = h[p]), P.nodeType === 3)) {
        for (
          re = P.textContent || "",
            _
              ? (re = re.replace(lp, " "))
              : x &&
                (re = re.replace(
                  /\n/g,
                  k +
                    `
`,
                )),
            d && (re = d(re, a)),
            P.textContent = re,
            E = k || C ? re.split(C || k) : re.match(o) || Xa,
            W = E[E.length - 1],
            R = y ? W.slice(-1) === " " : !W,
            W || E.pop(),
            m = g,
            F = y ? E[0].charAt(0) === " " : !E[0],
            F && Hr(" ", a, P),
            E[0] || E.shift(),
            Fu(E, f),
            (n && u) || (P.textContent = ""),
            L = 1;
          L <= E.length;
          L++
        )
          if (
            ((b = E[L - 1]),
            !_ &&
              x &&
              b.charAt(0) ===
                `
` &&
              ((c = P.previousSibling) == null || c.remove(),
              Hr(document.createElement("br"), a, P),
              (b = b.slice(1))),
            !_ && b === "")
          )
            Hr(k, a, P);
          else if (b === " ") a.insertBefore(document.createTextNode(" "), P);
          else {
            if (
              (y && b.charAt(0) === " " && Hr(" ", a, P),
              v && L === 1 && !F && T.indexOf(v.parentNode) > -1
                ? ((D = T[T.length - 1]),
                  D.appendChild(document.createTextNode(t ? "" : b)))
                : ((D = i(t ? "" : b)),
                  Hr(D, a, P),
                  v && L === 1 && !F && D.insertBefore(v, D.firstChild)),
              t)
            )
              for (
                z = Ou
                  ? Fu(
                      [...Ou.segment(b)].map((ne) => ne.segment),
                      f,
                    )
                  : b.match(o) || Xa,
                  G = 0;
                G < z.length;
                G++
              )
                D.appendChild(
                  z[G] === " " ? document.createTextNode(" ") : t(z[G]),
                );
            if (n && u) {
              if (
                ((re = P.textContent = re.substring(b.length + 1, re.length)),
                (V = D.getBoundingClientRect()),
                V.top > m.top && V.left <= m.left)
              ) {
                for (X = a.cloneNode(), $ = a.childNodes[0]; $ && $ !== D; )
                  ((J = $), ($ = $.nextSibling), X.appendChild(J));
                (a.parentNode.insertBefore(X, a), r && Iu(X));
              }
              m = V;
            }
            (L < E.length || R) &&
              Hr(
                L >= E.length ? " " : y && b.slice(-1) === " " ? " " + k : k,
                a,
                P,
              );
          }
        (a.removeChild(P), (v = 0));
      } else
        P.nodeType === 1 &&
          (s && s.indexOf(P) > -1
            ? (T.indexOf(P.previousSibling) > -1 &&
                T[T.length - 1].appendChild(P),
              (v = P))
            : (Nc(P, e, i, t, r, n, s, o, f, !0), (v = 0)),
          r && Iu(P));
  };
const Bc = class zc {
  constructor(e, i) {
    ((this.isSplit = !1),
      ap(),
      (this.elements = Au(e)),
      (this.chars = []),
      (this.words = []),
      (this.lines = []),
      (this.masks = []),
      (this.vars = i),
      (this._split = () => this.isSplit && this.split(this.vars)));
    let t = [],
      r,
      n = () => {
        let s = t.length,
          o;
        for (; s--; ) {
          o = t[s];
          let f = o.element.offsetWidth;
          if (f !== o.width) {
            ((o.width = f), this._split());
            return;
          }
        }
      };
    ((this._data = {
      orig: t,
      obs:
        typeof ResizeObserver < "u" &&
        new ResizeObserver(() => {
          (clearTimeout(r), (r = setTimeout(n, 200)));
        }),
    }),
      sa(this),
      this.split(i));
  }
  split(e) {
    (this.isSplit && this.revert(), (this.vars = e = e || this.vars || {}));
    let {
        type: i = "chars,words,lines",
        aria: t = "auto",
        deepSlice: r = !0,
        smartWrap: n,
        onSplit: s,
        autoSplit: o = !1,
        specialChars: f,
        mask: u,
      } = this.vars,
      c = i.indexOf("lines") > -1,
      h = i.indexOf("chars") > -1,
      p = i.indexOf("words") > -1,
      l = h && !p && !c,
      _ = f && ("push" in f ? new RegExp("(?:" + f.join("|") + ")", "gu") : f),
      d = _ ? new RegExp(_.source + "|" + Ru.source, "gu") : Ru,
      g = !!e.ignore && Au(e.ignore),
      { orig: m, animTime: x, obs: v } = this._data,
      T;
    return (
      (h || p || c) &&
        (this.elements.forEach((y, k) => {
          ((m[k] = {
            element: y,
            html: y.innerHTML,
            ariaL: y.getAttribute("aria-label"),
            ariaH: y.getAttribute("aria-hidden"),
          }),
            t === "auto"
              ? y.setAttribute("aria-label", (y.textContent || "").trim())
              : t === "hidden" && y.setAttribute("aria-hidden", "true"));
          let C = [],
            P = [],
            E = [],
            D = h ? Va("char", e, C) : null,
            F = Va("word", e, P),
            R,
            L,
            V,
            z;
          if ((Nc(y, e, F, D, l, r && (c || l), g, d, _, !1), c)) {
            let X = bo(y.childNodes),
              $ = up(y, X, e, E),
              J,
              re = [],
              b = 0,
              W = X.map((ne) =>
                ne.nodeType === 1 ? ne.getBoundingClientRect() : Lu,
              ),
              G = Lu;
            for (R = 0; R < X.length; R++)
              ((J = X[R]),
                J.nodeType === 1 &&
                  (J.nodeName === "BR"
                    ? (re.push(J), $(b, R + 1), (b = R + 1), (G = W[b]))
                    : (R &&
                        W[R].top > G.top &&
                        W[R].left <= G.left &&
                        ($(b, R), (b = R)),
                      (G = W[R]))));
            (b < R && $(b, R),
              re.forEach((ne) => {
                var j;
                return (j = ne.parentNode) == null ? void 0 : j.removeChild(ne);
              }));
          }
          if (!p) {
            for (R = 0; R < P.length; R++)
              if (
                ((L = P[R]),
                h || !L.nextSibling || L.nextSibling.nodeType !== 3)
              )
                if (n && !c) {
                  for (
                    V = document.createElement("span"),
                      V.style.whiteSpace = "nowrap";
                    L.firstChild;
                  )
                    V.appendChild(L.firstChild);
                  L.replaceWith(V);
                } else L.replaceWith(...L.childNodes);
              else
                ((z = L.nextSibling),
                  z &&
                    z.nodeType === 3 &&
                    ((z.textContent =
                      (L.textContent || "") + (z.textContent || "")),
                    L.remove()));
            ((P.length = 0), y.normalize());
          }
          (this.lines.push(...E), this.words.push(...P), this.chars.push(...C));
        }),
        u &&
          this[u] &&
          this.masks.push(
            ...this[u].map((y) => {
              let k = y.cloneNode();
              return (
                y.replaceWith(k),
                k.appendChild(y),
                y.className &&
                  (k.className = y.className.replace(/(\b\w+\b)/g, "$1-mask")),
                (k.style.overflow = "clip"),
                k
              );
            }),
          )),
      (this.isSplit = !0),
      Wr &&
        (o
          ? Wr.addEventListener("loadingdone", this._split)
          : Wr.status === "loading" &&
            console.warn("SplitText called before fonts loaded")),
      (T = s && s(this)) &&
        T.totalTime &&
        (this._data.anim = x ? T.totalTime(x) : T),
      c &&
        o &&
        this.elements.forEach((y, k) => {
          ((m[k].width = y.offsetWidth), v && v.observe(y));
        }),
      this
    );
  }
  revert() {
    var e, i;
    let { orig: t, anim: r, obs: n } = this._data;
    return (
      n && n.disconnect(),
      t.forEach(({ element: s, html: o, ariaL: f, ariaH: u }) => {
        ((s.innerHTML = o),
          f ? s.setAttribute("aria-label", f) : s.removeAttribute("aria-label"),
          u
            ? s.setAttribute("aria-hidden", u)
            : s.removeAttribute("aria-hidden"));
      }),
      (this.chars.length =
        this.words.length =
        this.lines.length =
        t.length =
        this.masks.length =
          0),
      (this.isSplit = !1),
      Wr?.removeEventListener("loadingdone", this._split),
      r && ((this._data.animTime = r.totalTime()), r.revert()),
      (i = (e = this.vars).onRevert) == null || i.call(e, this),
      this
    );
  }
  static create(e, i) {
    return new zc(e, i);
  }
  static register(e) {
    ((En = En || e || window.gsap),
      En && ((bo = En.utils.toArray), (sa = En.core.context || sa)),
      !Ya && window.innerWidth > 0 && ((Wr = document.fonts), (Ya = !0)));
  }
};
Bc.version = "3.13.0";
let fp = Bc;
function Nu(a) {
  if (a === void 0)
    throw new ReferenceError(
      "this hasn't been initialised - super() hasn't been called",
    );
  return a;
}
function cp(a, e) {
  ((a.prototype = Object.create(e.prototype)),
    (a.prototype.constructor = a),
    (a.__proto__ = e));
}
var xe,
  Me,
  Kt,
  vi,
  Yi,
  oa,
  Ii,
  Wa,
  zn,
  sr,
  $c,
  Ha,
  vs,
  Bl,
  $n,
  gi,
  Yn,
  ro,
  Yc,
  Ga,
  To = 0,
  Xc = function () {
    return typeof window < "u";
  },
  Vc = function () {
    return xe || (Xc() && (xe = window.gsap) && xe.registerPlugin && xe);
  },
  Zi = function (e) {
    return typeof e == "function";
  },
  ns = function (e) {
    return typeof e == "object";
  },
  mi = function (e) {
    return typeof e > "u";
  },
  no = function () {
    return !1;
  },
  ss = "transform",
  Ua = "transformOrigin",
  qi = function (e) {
    return Math.round(e * 1e4) / 1e4;
  },
  Mn = Array.isArray,
  Xs = function (e, i) {
    var t = Kt.createElementNS
      ? Kt.createElementNS(
          "http://www.w3.org/1999/xhtml".replace(/^https/, "http"),
          e,
        )
      : Kt.createElement(e);
    return t.style ? t : Kt.createElement(e);
  },
  Bu = 180 / Math.PI,
  yr = 1e20,
  hp = new Hi(),
  Qi =
    Date.now ||
    function () {
      return new Date().getTime();
    },
  Rr = [],
  cn = {},
  dp = 0,
  pp = /^(?:a|input|textarea|button|select)$/i,
  zu = 0,
  Gr = {},
  Ri = {},
  Wc = function (e, i) {
    var t = {},
      r;
    for (r in e) t[r] = i ? e[r] * i : e[r];
    return t;
  },
  _p = function (e, i) {
    for (var t in i) t in e || (e[t] = i[t]);
    return e;
  },
  $u = function a(e, i) {
    for (var t = e.length, r; t--; )
      (i
        ? (e[t].style.touchAction = i)
        : e[t].style.removeProperty("touch-action"),
        (r = e[t].children),
        r && r.length && a(r, i));
  },
  Hc = function () {
    return Rr.forEach(function (e) {
      return e();
    });
  },
  gp = function (e) {
    (Rr.push(e), Rr.length === 1 && xe.ticker.add(Hc));
  },
  Yu = function () {
    return !Rr.length && xe.ticker.remove(Hc);
  },
  Xu = function (e) {
    for (var i = Rr.length; i--; ) Rr[i] === e && Rr.splice(i, 1);
    xe.to(Yu, {
      overwrite: !0,
      delay: 15,
      duration: 0,
      onComplete: Yu,
      data: "_draggable",
    });
  },
  mp = function (e, i) {
    for (var t in i) t in e || (e[t] = i[t]);
    return e;
  },
  tt = function (e, i, t, r) {
    if (e.addEventListener) {
      var n = vs[i];
      ((r = r || ($c ? { passive: !1 } : null)),
        e.addEventListener(n || i, t, r),
        n && i !== n && e.addEventListener(i, t, r));
    }
  },
  qe = function (e, i, t, r) {
    if (e.removeEventListener) {
      var n = vs[i];
      (e.removeEventListener(n || i, t, r),
        n && i !== n && e.removeEventListener(i, t, r));
    }
  },
  ni = function (e) {
    (e.preventDefault && e.preventDefault(),
      e.preventManipulation && e.preventManipulation());
  },
  yp = function (e, i) {
    for (var t = e.length; t--; ) if (e[t].identifier === i) return !0;
  },
  xp = function a(e) {
    ((Bl = e.touches && To < e.touches.length), qe(e.target, "touchend", a));
  },
  Vu = function (e) {
    ((Bl = e.touches && To < e.touches.length), tt(e.target, "touchend", xp));
  },
  hn = function (e) {
    return (
      Me.pageYOffset ||
      e.scrollTop ||
      e.documentElement.scrollTop ||
      e.body.scrollTop ||
      0
    );
  },
  dn = function (e) {
    return (
      Me.pageXOffset ||
      e.scrollLeft ||
      e.documentElement.scrollLeft ||
      e.body.scrollLeft ||
      0
    );
  },
  Wu = function a(e, i) {
    (tt(e, "scroll", i), bn(e.parentNode) || a(e.parentNode, i));
  },
  Hu = function a(e, i) {
    (qe(e, "scroll", i), bn(e.parentNode) || a(e.parentNode, i));
  },
  bn = function (e) {
    return (
      !e ||
      e === vi ||
      e.nodeType === 9 ||
      e === Kt.body ||
      e === Me ||
      !e.nodeType ||
      !e.parentNode
    );
  },
  Gu = function (e, i) {
    var t = i === "x" ? "Width" : "Height",
      r = "scroll" + t,
      n = "client" + t;
    return Math.max(
      0,
      bn(e)
        ? Math.max(vi[r], Yi[r]) - (Me["inner" + t] || vi[n] || Yi[n])
        : e[r] - e[n],
    );
  },
  aa = function a(e, i) {
    var t = Gu(e, "x"),
      r = Gu(e, "y");
    (bn(e) ? (e = Ri) : a(e.parentNode, i),
      (e._gsMaxScrollX = t),
      (e._gsMaxScrollY = r),
      i ||
        ((e._gsScrollX = e.scrollLeft || 0),
        (e._gsScrollY = e.scrollTop || 0)));
  },
  la = function (e, i, t) {
    var r = e.style;
    r &&
      (mi(r[i]) && (i = zn(i, e) || i),
      t == null
        ? r.removeProperty &&
          r.removeProperty(i.replace(/([A-Z])/g, "-$1").toLowerCase())
        : (r[i] = t));
  },
  ws = function (e) {
    return Me.getComputedStyle(
      e instanceof Element ? e : e.host || (e.parentNode || {}).host || e,
    );
  },
  xr = {},
  Ur = function (e) {
    if (e === Me)
      return (
        (xr.left = xr.top = 0),
        (xr.width = xr.right =
          vi.clientWidth || e.innerWidth || Yi.clientWidth || 0),
        (xr.height = xr.bottom =
          (e.innerHeight || 0) - 20 < vi.clientHeight
            ? vi.clientHeight
            : e.innerHeight || Yi.clientHeight || 0),
        xr
      );
    var i = e.ownerDocument || Kt,
      t = mi(e.pageX)
        ? !e.nodeType && !mi(e.left) && !mi(e.top)
          ? e
          : sr(e)[0].getBoundingClientRect()
        : {
            left: e.pageX - dn(i),
            top: e.pageY - hn(i),
            right: e.pageX - dn(i) + 1,
            bottom: e.pageY - hn(i) + 1,
          };
    return (
      mi(t.right) && !mi(t.width)
        ? ((t.right = t.left + t.width), (t.bottom = t.top + t.height))
        : mi(t.width) &&
          (t = {
            width: t.right - t.left,
            height: t.bottom - t.top,
            right: t.right,
            left: t.left,
            bottom: t.bottom,
            top: t.top,
          }),
      t
    );
  },
  We = function (e, i, t) {
    var r = e.vars,
      n = r[t],
      s = e._listeners[i],
      o;
    return (
      Zi(n) &&
        (o = n.apply(
          r.callbackScope || e,
          r[t + "Params"] || [e.pointerEvent],
        )),
      s && e.dispatchEvent(i) === !1 && (o = !1),
      o
    );
  },
  Uu = function (e, i) {
    var t = sr(e)[0],
      r,
      n,
      s;
    return !t.nodeType && t !== Me
      ? mi(e.left)
        ? ((n = e.min || e.minX || e.minRotation || 0),
          (r = e.min || e.minY || 0),
          {
            left: n,
            top: r,
            width: (e.max || e.maxX || e.maxRotation || 0) - n,
            height: (e.max || e.maxY || 0) - r,
          })
        : ((s = { x: 0, y: 0 }),
          {
            left: e.left - s.x,
            top: e.top - s.y,
            width: e.width,
            height: e.height,
          })
      : vp(t, i);
  },
  si = {},
  vp = function (e, i) {
    i = sr(i)[0];
    var t = e.getBBox && e.ownerSVGElement,
      r = e.ownerDocument || Kt,
      n,
      s,
      o,
      f,
      u,
      c,
      h,
      p,
      l,
      _,
      d,
      g,
      m;
    if (e === Me)
      ((o = hn(r)),
        (n = dn(r)),
        (s =
          n +
          (r.documentElement.clientWidth ||
            e.innerWidth ||
            r.body.clientWidth ||
            0)),
        (f =
          o +
          ((e.innerHeight || 0) - 20 < r.documentElement.clientHeight
            ? r.documentElement.clientHeight
            : e.innerHeight || r.body.clientHeight || 0)));
    else {
      if (i === Me || mi(i)) return e.getBoundingClientRect();
      ((n = o = 0),
        t
          ? ((_ = e.getBBox()), (d = _.width), (g = _.height))
          : (e.viewBox &&
              (_ = e.viewBox.baseVal) &&
              ((n = _.x || 0), (o = _.y || 0), (d = _.width), (g = _.height)),
            d ||
              ((m = ws(e)),
              (_ = m.boxSizing === "border-box"),
              (d =
                (parseFloat(m.width) || e.clientWidth || 0) +
                (_
                  ? 0
                  : parseFloat(m.borderLeftWidth) +
                    parseFloat(m.borderRightWidth))),
              (g =
                (parseFloat(m.height) || e.clientHeight || 0) +
                (_
                  ? 0
                  : parseFloat(m.borderTopWidth) +
                    parseFloat(m.borderBottomWidth))))),
        (s = d),
        (f = g));
    }
    return e === i
      ? { left: n, top: o, width: s - n, height: f - o }
      : ((u = ft(i, !0).multiply(ft(e))),
        (c = u.apply({ x: n, y: o })),
        (h = u.apply({ x: s, y: o })),
        (p = u.apply({ x: s, y: f })),
        (l = u.apply({ x: n, y: f })),
        (n = Math.min(c.x, h.x, p.x, l.x)),
        (o = Math.min(c.y, h.y, p.y, l.y)),
        {
          left: n,
          top: o,
          width: Math.max(c.x, h.x, p.x, l.x) - n,
          height: Math.max(c.y, h.y, p.y, l.y) - o,
        });
  },
  ua = function (e, i, t, r, n, s) {
    var o = {},
      f,
      u,
      c;
    if (i)
      if (n !== 1 && i instanceof Array) {
        if (((o.end = f = []), (c = i.length), ns(i[0])))
          for (u = 0; u < c; u++) f[u] = Wc(i[u], n);
        else for (u = 0; u < c; u++) f[u] = i[u] * n;
        ((t += 1.1), (r -= 1.1));
      } else
        Zi(i)
          ? (o.end = function (h) {
              var p = i.call(e, h),
                l,
                _;
              if (n !== 1)
                if (ns(p)) {
                  l = {};
                  for (_ in p) l[_] = p[_] * n;
                  p = l;
                } else p *= n;
              return p;
            })
          : (o.end = i);
    return (
      (t || t === 0) && (o.max = t),
      (r || r === 0) && (o.min = r),
      s && (o.velocity = 0),
      o
    );
  },
  wp = function a(e) {
    var i;
    return !e || !e.getAttribute || e === Yi
      ? !1
      : (i = e.getAttribute("data-clickable")) === "true" ||
          (i !== "false" &&
            (pp.test(e.nodeName + "") ||
              e.getAttribute("contentEditable") === "true"))
        ? !0
        : a(e.parentNode);
  },
  Vs = function (e, i) {
    for (var t = e.length, r; t--; )
      ((r = e[t]),
        (r.ondragstart = r.onselectstart = i ? null : no),
        xe.set(r, { lazy: !0, userSelect: i ? "text" : "none" }));
  },
  bp = function a(e) {
    if (ws(e).position === "fixed") return !0;
    if (((e = e.parentNode), e && e.nodeType === 1)) return a(e);
  },
  Gc,
  qa,
  Tp = function (e, i) {
    ((e = xe.utils.toArray(e)[0]), (i = i || {}));
    var t = document.createElement("div"),
      r = t.style,
      n = e.firstChild,
      s = 0,
      o = 0,
      f = e.scrollTop,
      u = e.scrollLeft,
      c = e.scrollWidth,
      h = e.scrollHeight,
      p = 0,
      l = 0,
      _ = 0,
      d,
      g,
      m,
      x,
      v,
      T;
    (Gc && i.force3D !== !1
      ? ((v = "translate3d("), (T = "px,0px)"))
      : ss && ((v = "translate("), (T = "px)")),
      (this.scrollTop = function (y, k) {
        if (!arguments.length) return -this.top();
        this.top(-y, k);
      }),
      (this.scrollLeft = function (y, k) {
        if (!arguments.length) return -this.left();
        this.left(-y, k);
      }),
      (this.left = function (y, k) {
        if (!arguments.length) return -(e.scrollLeft + o);
        var C = e.scrollLeft - u,
          P = o;
        if ((C > 2 || C < -2) && !k) {
          ((u = e.scrollLeft),
            xe.killTweensOf(this, { left: 1, scrollLeft: 1 }),
            this.left(-u),
            i.onKill && i.onKill());
          return;
        }
        ((y = -y),
          y < 0
            ? ((o = (y - 0.5) | 0), (y = 0))
            : y > l
              ? ((o = (y - l) | 0), (y = l))
              : (o = 0),
          (o || P) &&
            (this._skip || (r[ss] = v + -o + "px," + -s + T),
            o + p >= 0 && (r.paddingRight = o + p + "px")),
          (e.scrollLeft = y | 0),
          (u = e.scrollLeft));
      }),
      (this.top = function (y, k) {
        if (!arguments.length) return -(e.scrollTop + s);
        var C = e.scrollTop - f,
          P = s;
        if ((C > 2 || C < -2) && !k) {
          ((f = e.scrollTop),
            xe.killTweensOf(this, { top: 1, scrollTop: 1 }),
            this.top(-f),
            i.onKill && i.onKill());
          return;
        }
        ((y = -y),
          y < 0
            ? ((s = (y - 0.5) | 0), (y = 0))
            : y > _
              ? ((s = (y - _) | 0), (y = _))
              : (s = 0),
          (s || P) && (this._skip || (r[ss] = v + -o + "px," + -s + T)),
          (e.scrollTop = y | 0),
          (f = e.scrollTop));
      }),
      (this.maxScrollTop = function () {
        return _;
      }),
      (this.maxScrollLeft = function () {
        return l;
      }),
      (this.disable = function () {
        for (n = t.firstChild; n; )
          ((x = n.nextSibling), e.appendChild(n), (n = x));
        e === t.parentNode && e.removeChild(t);
      }),
      (this.enable = function () {
        if (((n = e.firstChild), n !== t)) {
          for (; n; ) ((x = n.nextSibling), t.appendChild(n), (n = x));
          (e.appendChild(t), this.calibrate());
        }
      }),
      (this.calibrate = function (y) {
        var k = e.clientWidth === d,
          C,
          P,
          E;
        ((f = e.scrollTop),
          (u = e.scrollLeft),
          !(
            k &&
            e.clientHeight === g &&
            t.offsetHeight === m &&
            c === e.scrollWidth &&
            h === e.scrollHeight &&
            !y
          ) &&
            ((s || o) &&
              ((P = this.left()),
              (E = this.top()),
              this.left(-e.scrollLeft),
              this.top(-e.scrollTop)),
            (C = ws(e)),
            (!k || y) &&
              ((r.display = "block"),
              (r.width = "auto"),
              (r.paddingRight = "0px"),
              (p = Math.max(0, e.scrollWidth - e.clientWidth)),
              p &&
                (p +=
                  parseFloat(C.paddingLeft) +
                  (qa ? parseFloat(C.paddingRight) : 0))),
            (r.display = "inline-block"),
            (r.position = "relative"),
            (r.overflow = "visible"),
            (r.verticalAlign = "top"),
            (r.boxSizing = "content-box"),
            (r.width = "100%"),
            (r.paddingRight = p + "px"),
            qa && (r.paddingBottom = C.paddingBottom),
            (d = e.clientWidth),
            (g = e.clientHeight),
            (c = e.scrollWidth),
            (h = e.scrollHeight),
            (l = e.scrollWidth - d),
            (_ = e.scrollHeight - g),
            (m = t.offsetHeight),
            (r.display = "block"),
            (P || E) && (this.left(P), this.top(E))));
      }),
      (this.content = t),
      (this.element = e),
      (this._skip = !1),
      this.enable());
  },
  fa = function (e) {
    if (Xc() && document.body) {
      var i = window && window.navigator;
      ((Me = window),
        (Kt = document),
        (vi = Kt.documentElement),
        (Yi = Kt.body),
        (oa = Xs("div")),
        (ro = !!window.PointerEvent),
        (Ii = Xs("div")),
        (Ii.style.cssText =
          "visibility:hidden;height:1px;top:-1px;pointer-events:none;position:relative;clear:both;cursor:grab"),
        (Yn = Ii.style.cursor === "grab" ? "grab" : "move"),
        ($n = i && i.userAgent.toLowerCase().indexOf("android") !== -1),
        (Ha =
          ("ontouchstart" in vi && "orientation" in Me) ||
          (i && (i.MaxTouchPoints > 0 || i.msMaxTouchPoints > 0))),
        (qa = (function () {
          var t = Xs("div"),
            r = Xs("div"),
            n = r.style,
            s = Yi,
            o;
          return (
            (n.display = "inline-block"),
            (n.position = "relative"),
            (t.style.cssText =
              "width:90px;height:40px;padding:10px;overflow:auto;visibility:hidden"),
            t.appendChild(r),
            s.appendChild(t),
            (o = r.offsetHeight + 18 > t.scrollHeight),
            s.removeChild(t),
            o
          );
        })()),
        (vs = (function (t) {
          for (
            var r = t.split(","),
              n = (
                ("onpointerdown" in oa)
                  ? "pointerdown,pointermove,pointerup,pointercancel"
                  : ("onmspointerdown" in oa)
                    ? "MSPointerDown,MSPointerMove,MSPointerUp,MSPointerCancel"
                    : t
              ).split(","),
              s = {},
              o = 4;
            --o > -1;
          )
            ((s[r[o]] = n[o]), (s[n[o]] = r[o]));
          try {
            vi.addEventListener(
              "test",
              null,
              Object.defineProperty({}, "passive", {
                get: function () {
                  $c = 1;
                },
              }),
            );
          } catch {}
          return s;
        })("touchstart,touchmove,touchend,touchcancel")),
        tt(Kt, "touchcancel", no),
        tt(Me, "touchmove", no),
        Yi && Yi.addEventListener("touchstart", no),
        tt(Kt, "contextmenu", function () {
          for (var t in cn) cn[t].isPressed && cn[t].endDrag();
        }),
        (xe = Wa = Vc()));
    }
    xe
      ? ((gi = xe.plugins.inertia),
        (Yc = xe.core.context || function () {}),
        (zn = xe.utils.checkPrefix),
        (ss = zn(ss)),
        (Ua = zn(Ua)),
        (sr = xe.utils.toArray),
        (Ga = xe.core.getStyleSaver),
        (Gc = !!zn("perspective")))
      : e && console.warn("Please gsap.registerPlugin(Draggable)");
  },
  Sp = (function () {
    function a(i) {
      ((this._listeners = {}), (this.target = i || this));
    }
    var e = a.prototype;
    return (
      (e.addEventListener = function (t, r) {
        var n = this._listeners[t] || (this._listeners[t] = []);
        ~n.indexOf(r) || n.push(r);
      }),
      (e.removeEventListener = function (t, r) {
        var n = this._listeners[t],
          s = n && n.indexOf(r);
        s >= 0 && n.splice(s, 1);
      }),
      (e.dispatchEvent = function (t) {
        var r = this,
          n;
        return (
          (this._listeners[t] || []).forEach(function (s) {
            return s.call(r, { type: t, target: r.target }) === !1 && (n = !1);
          }),
          n
        );
      }),
      a
    );
  })(),
  Ro = (function (a) {
    cp(e, a);
    function e(i, t) {
      var r;
      ((r = a.call(this) || this),
        Wa || fa(1),
        (i = sr(i)[0]),
        (r.styles = Ga && Ga(i, "transform,left,top")),
        gi || (gi = xe.plugins.inertia),
        (r.vars = t = Wc(t || {})),
        (r.target = i),
        (r.x = r.y = r.rotation = 0),
        (r.dragResistance = parseFloat(t.dragResistance) || 0),
        (r.edgeResistance = isNaN(t.edgeResistance)
          ? 1
          : parseFloat(t.edgeResistance) || 0),
        (r.lockAxis = t.lockAxis),
        (r.autoScroll = t.autoScroll || 0),
        (r.lockedAxis = null),
        (r.allowEventDefault = !!t.allowEventDefault),
        xe.getProperty(i, "x"));
      var n = (t.type || "x,y").toLowerCase(),
        s = ~n.indexOf("x") || ~n.indexOf("y"),
        o = n.indexOf("rotation") !== -1,
        f = o ? "rotation" : s ? "x" : "left",
        u = s ? "y" : "top",
        c = !!(~n.indexOf("x") || ~n.indexOf("left") || n === "scroll"),
        h = !!(~n.indexOf("y") || ~n.indexOf("top") || n === "scroll"),
        p = t.minimumMovement || 2,
        l = Nu(r),
        _ = sr(t.trigger || t.handle || i),
        d = {},
        g = 0,
        m = !1,
        x = t.autoScrollMarginTop || 40,
        v = t.autoScrollMarginRight || 40,
        T = t.autoScrollMarginBottom || 40,
        y = t.autoScrollMarginLeft || 40,
        k = t.clickableTest || wp,
        C = 0,
        P = i._gsap || xe.core.getCache(i),
        E = bp(i),
        D = function (w, B) {
          return parseFloat(P.get(i, w, B));
        },
        F = i.ownerDocument || Kt,
        R,
        L,
        V,
        z,
        X,
        $,
        J,
        re,
        b,
        W,
        G,
        ne,
        j,
        se,
        te,
        ye,
        oe,
        Oe,
        ce,
        we,
        Ae,
        Z,
        ee,
        ae,
        Ue,
        M,
        be,
        Tt,
        dt,
        U,
        Re,
        di,
        ti,
        Ve = function (w) {
          return (
            ni(w),
            w.stopImmediatePropagation && w.stopImmediatePropagation(),
            !1
          );
        },
        Ze = function K(w) {
          if (l.autoScroll && l.isDragging && (m || oe)) {
            var B = i,
              S = l.autoScroll * 15,
              O,
              N,
              A,
              Y,
              I,
              H,
              ie,
              Q;
            for (
              m = !1,
                Ri.scrollTop =
                  Me.pageYOffset != null
                    ? Me.pageYOffset
                    : F.documentElement.scrollTop != null
                      ? F.documentElement.scrollTop
                      : F.body.scrollTop,
                Ri.scrollLeft =
                  Me.pageXOffset != null
                    ? Me.pageXOffset
                    : F.documentElement.scrollLeft != null
                      ? F.documentElement.scrollLeft
                      : F.body.scrollLeft,
                Y = l.pointerX - Ri.scrollLeft,
                I = l.pointerY - Ri.scrollTop;
              B && !N;
            )
              ((N = bn(B.parentNode)),
                (O = N ? Ri : B.parentNode),
                (A = N
                  ? {
                      bottom: Math.max(vi.clientHeight, Me.innerHeight || 0),
                      right: Math.max(vi.clientWidth, Me.innerWidth || 0),
                      left: 0,
                      top: 0,
                    }
                  : O.getBoundingClientRect()),
                (H = ie = 0),
                h &&
                  ((Q = O._gsMaxScrollY - O.scrollTop),
                  Q < 0
                    ? (ie = Q)
                    : I > A.bottom - T && Q
                      ? ((m = !0),
                        (ie = Math.min(
                          Q,
                          (S * (1 - Math.max(0, A.bottom - I) / T)) | 0,
                        )))
                      : I < A.top + x &&
                        O.scrollTop &&
                        ((m = !0),
                        (ie = -Math.min(
                          O.scrollTop,
                          (S * (1 - Math.max(0, I - A.top) / x)) | 0,
                        ))),
                  ie && (O.scrollTop += ie)),
                c &&
                  ((Q = O._gsMaxScrollX - O.scrollLeft),
                  Q < 0
                    ? (H = Q)
                    : Y > A.right - v && Q
                      ? ((m = !0),
                        (H = Math.min(
                          Q,
                          (S * (1 - Math.max(0, A.right - Y) / v)) | 0,
                        )))
                      : Y < A.left + y &&
                        O.scrollLeft &&
                        ((m = !0),
                        (H = -Math.min(
                          O.scrollLeft,
                          (S * (1 - Math.max(0, Y - A.left) / y)) | 0,
                        ))),
                  H && (O.scrollLeft += H)),
                N &&
                  (H || ie) &&
                  (Me.scrollTo(O.scrollLeft, O.scrollTop),
                  Vt(l.pointerX + H, l.pointerY + ie)),
                (B = O));
          }
          if (oe) {
            var fe = l.x,
              Te = l.y;
            (o
              ? ((l.deltaX = fe - parseFloat(P.rotation)),
                (l.rotation = fe),
                (P.rotation = fe + "deg"),
                P.renderTransform(1, P))
              : L
                ? (h && ((l.deltaY = Te - L.top()), L.top(Te)),
                  c && ((l.deltaX = fe - L.left()), L.left(fe)))
                : s
                  ? (h &&
                      ((l.deltaY = Te - parseFloat(P.y)), (P.y = Te + "px")),
                    c && ((l.deltaX = fe - parseFloat(P.x)), (P.x = fe + "px")),
                    P.renderTransform(1, P))
                  : (h &&
                      ((l.deltaY = Te - parseFloat(i.style.top || 0)),
                      (i.style.top = Te + "px")),
                    c &&
                      ((l.deltaX = fe - parseFloat(i.style.left || 0)),
                      (i.style.left = fe + "px"))),
              re &&
                !w &&
                !Tt &&
                ((Tt = !0),
                We(l, "drag", "onDrag") === !1 &&
                  (c && (l.x -= l.deltaX), h && (l.y -= l.deltaY), K(!0)),
                (Tt = !1)));
          }
          oe = !1;
        },
        ke = function (w, B) {
          var S = l.x,
            O = l.y,
            N,
            A;
          (i._gsap || (P = xe.core.getCache(i)),
            P.uncache && xe.getProperty(i, "x"),
            s
              ? ((l.x = parseFloat(P.x)), (l.y = parseFloat(P.y)))
              : o
                ? (l.x = l.rotation = parseFloat(P.rotation))
                : L
                  ? ((l.y = L.top()), (l.x = L.left()))
                  : ((l.y =
                      parseFloat(i.style.top || ((A = ws(i)) && A.top)) || 0),
                    (l.x = parseFloat(i.style.left || (A || {}).left) || 0)),
            (ce || we || Ae) &&
              !B &&
              (l.isDragging || l.isThrowing) &&
              (Ae &&
                ((Gr.x = l.x),
                (Gr.y = l.y),
                (N = Ae(Gr)),
                N.x !== l.x && ((l.x = N.x), (oe = !0)),
                N.y !== l.y && ((l.y = N.y), (oe = !0))),
              ce &&
                ((N = ce(l.x)),
                N !== l.x && ((l.x = N), o && (l.rotation = N), (oe = !0))),
              we && ((N = we(l.y)), N !== l.y && (l.y = N), (oe = !0))),
            oe && Ze(!0),
            w ||
              ((l.deltaX = l.x - S),
              (l.deltaY = l.y - O),
              We(l, "throwupdate", "onThrowUpdate")));
        },
        St = function (w, B, S, O) {
          return (
            B == null && (B = -yr),
            S == null && (S = yr),
            Zi(w)
              ? function (N) {
                  var A = l.isPressed ? 1 - l.edgeResistance : 1;
                  return (
                    w.call(
                      l,
                      (N > S ? S + (N - S) * A : N < B ? B + (N - B) * A : N) *
                        O,
                    ) * O
                  );
                }
              : Mn(w)
                ? function (N) {
                    for (var A = w.length, Y = 0, I = yr, H, ie; --A > -1; )
                      ((H = w[A]),
                        (ie = H - N),
                        ie < 0 && (ie = -ie),
                        ie < I && H >= B && H <= S && ((Y = A), (I = ie)));
                    return w[Y];
                  }
                : isNaN(w)
                  ? function (N) {
                      return N;
                    }
                  : function () {
                      return w * O;
                    }
          );
        },
        At = function (w, B, S, O, N, A, Y) {
          return (
            (A = A && A < yr ? A * A : yr),
            Zi(w)
              ? function (I) {
                  var H = l.isPressed ? 1 - l.edgeResistance : 1,
                    ie = I.x,
                    Q = I.y,
                    fe,
                    Te,
                    Se;
                  return (
                    (I.x = ie =
                      ie > S
                        ? S + (ie - S) * H
                        : ie < B
                          ? B + (ie - B) * H
                          : ie),
                    (I.y = Q =
                      Q > N ? N + (Q - N) * H : Q < O ? O + (Q - O) * H : Q),
                    (fe = w.call(l, I)),
                    fe !== I && ((I.x = fe.x), (I.y = fe.y)),
                    Y !== 1 && ((I.x *= Y), (I.y *= Y)),
                    A < yr &&
                      ((Te = I.x - ie),
                      (Se = I.y - Q),
                      Te * Te + Se * Se > A && ((I.x = ie), (I.y = Q))),
                    I
                  );
                }
              : Mn(w)
                ? function (I) {
                    for (
                      var H = w.length, ie = 0, Q = yr, fe, Te, Se, _e;
                      --H > -1;
                    )
                      ((Se = w[H]),
                        (fe = Se.x - I.x),
                        (Te = Se.y - I.y),
                        (_e = fe * fe + Te * Te),
                        _e < Q && ((ie = H), (Q = _e)));
                    return Q <= A ? w[ie] : I;
                  }
                : function (I) {
                    return I;
                  }
          );
        },
        Yt = function () {
          var w, B, S, O;
          ((J = !1),
            L
              ? (L.calibrate(),
                (l.minX = G = -L.maxScrollLeft()),
                (l.minY = j = -L.maxScrollTop()),
                (l.maxX = W = l.maxY = ne = 0),
                (J = !0))
              : t.bounds &&
                ((w = Uu(t.bounds, i.parentNode)),
                o
                  ? ((l.minX = G = w.left),
                    (l.maxX = W = w.left + w.width),
                    (l.minY = j = l.maxY = ne = 0))
                  : !mi(t.bounds.maxX) || !mi(t.bounds.maxY)
                    ? ((w = t.bounds),
                      (l.minX = G = w.minX),
                      (l.minY = j = w.minY),
                      (l.maxX = W = w.maxX),
                      (l.maxY = ne = w.maxY))
                    : ((B = Uu(i, i.parentNode)),
                      (l.minX = G = Math.round(D(f, "px") + w.left - B.left)),
                      (l.minY = j = Math.round(D(u, "px") + w.top - B.top)),
                      (l.maxX = W = Math.round(G + (w.width - B.width))),
                      (l.maxY = ne = Math.round(j + (w.height - B.height)))),
                G > W && ((l.minX = W), (l.maxX = W = G), (G = l.minX)),
                j > ne && ((l.minY = ne), (l.maxY = ne = j), (j = l.minY)),
                o && ((l.minRotation = G), (l.maxRotation = W)),
                (J = !0)),
            t.liveSnap &&
              ((S = t.liveSnap === !0 ? t.snap || {} : t.liveSnap),
              (O = Mn(S) || Zi(S)),
              o
                ? ((ce = St(O ? S : S.rotation, G, W, 1)), (we = null))
                : S.points
                  ? (Ae = At(
                      O ? S : S.points,
                      G,
                      W,
                      j,
                      ne,
                      S.radius,
                      L ? -1 : 1,
                    ))
                  : (c &&
                      (ce = St(
                        O ? S : S.x || S.left || S.scrollLeft,
                        G,
                        W,
                        L ? -1 : 1,
                      )),
                    h &&
                      (we = St(
                        O ? S : S.y || S.top || S.scrollTop,
                        j,
                        ne,
                        L ? -1 : 1,
                      )))));
        },
        pr = function () {
          ((l.isThrowing = !1), We(l, "throwcomplete", "onThrowComplete"));
        },
        $e = function () {
          l.isThrowing = !1;
        },
        Gi = function (w, B) {
          var S, O, N, A;
          w && gi
            ? (w === !0 &&
                ((S = t.snap || t.liveSnap || {}),
                (O = Mn(S) || Zi(S)),
                (w = {
                  resistance:
                    (t.throwResistance || t.resistance || 1e3) / (o ? 10 : 1),
                }),
                o
                  ? (w.rotation = ua(l, O ? S : S.rotation, W, G, 1, B))
                  : (c &&
                      (w[f] = ua(
                        l,
                        O ? S : S.points || S.x || S.left,
                        W,
                        G,
                        L ? -1 : 1,
                        B || l.lockedAxis === "x",
                      )),
                    h &&
                      (w[u] = ua(
                        l,
                        O ? S : S.points || S.y || S.top,
                        ne,
                        j,
                        L ? -1 : 1,
                        B || l.lockedAxis === "y",
                      )),
                    (S.points || (Mn(S) && ns(S[0]))) &&
                      ((w.linkedProps = f + "," + u), (w.radius = S.radius)))),
              (l.isThrowing = !0),
              (A = isNaN(t.overshootTolerance)
                ? t.edgeResistance === 1
                  ? 0
                  : 1 - l.edgeResistance + 0.2
                : t.overshootTolerance),
              w.duration ||
                (w.duration = {
                  max: Math.max(
                    t.minDuration || 0,
                    "maxDuration" in t ? t.maxDuration : 2,
                  ),
                  min: isNaN(t.minDuration)
                    ? A === 0 || (ns(w) && w.resistance > 1e3)
                      ? 0
                      : 0.5
                    : t.minDuration,
                  overshoot: A,
                }),
              (l.tween = N =
                xe.to(L || i, {
                  inertia: w,
                  data: "_draggable",
                  inherit: !1,
                  onComplete: pr,
                  onInterrupt: $e,
                  onUpdate: t.fastMode ? We : ke,
                  onUpdateParams: t.fastMode
                    ? [l, "onthrowupdate", "onThrowUpdate"]
                    : S && S.radius
                      ? [!1, !0]
                      : [],
                })),
              t.fastMode ||
                (L && (L._skip = !0),
                N.render(1e9, !0, !0),
                ke(!0, !0),
                (l.endX = l.x),
                (l.endY = l.y),
                o && (l.endRotation = l.x),
                N.play(0),
                ke(!0, !0),
                L && (L._skip = !1)))
            : J && l.applyBounds();
        },
        ii = function (w) {
          var B = ae,
            S;
          ((ae = ft(i.parentNode, !0)),
            w &&
              l.isPressed &&
              !ae.equals(B || new Hi()) &&
              ((S = B.inverse().apply({ x: V, y: z })),
              ae.apply(S, S),
              (V = S.x),
              (z = S.y)),
            ae.equals(hp) && (ae = null));
        },
        pi = function () {
          var w = 1 - l.edgeResistance,
            B = E ? dn(F) : 0,
            S = E ? hn(F) : 0,
            O,
            N,
            A;
          (s &&
            ((P.x = D(f, "px") + "px"),
            (P.y = D(u, "px") + "px"),
            P.renderTransform()),
            ii(!1),
            (si.x = l.pointerX - B),
            (si.y = l.pointerY - S),
            ae && ae.apply(si, si),
            (V = si.x),
            (z = si.y),
            oe && (Vt(l.pointerX, l.pointerY), Ze(!0)),
            (di = ft(i)),
            L
              ? (Yt(), ($ = L.top()), (X = L.left()))
              : (ri() ? (ke(!0, !0), Yt()) : l.applyBounds(),
                o
                  ? ((O = i.ownerSVGElement
                      ? [P.xOrigin - i.getBBox().x, P.yOrigin - i.getBBox().y]
                      : (ws(i)[Ua] || "0 0").split(" ")),
                    (ye = l.rotationOrigin =
                      ft(i).apply({
                        x: parseFloat(O[0]) || 0,
                        y: parseFloat(O[1]) || 0,
                      })),
                    ke(!0, !0),
                    (N = l.pointerX - ye.x - B),
                    (A = ye.y - l.pointerY + S),
                    (X = l.x),
                    ($ = l.y = Math.atan2(A, N) * Bu))
                  : (($ = D(u, "px")), (X = D(f, "px")))),
            J &&
              w &&
              (X > W ? (X = W + (X - W) / w) : X < G && (X = G - (G - X) / w),
              o ||
                ($ > ne
                  ? ($ = ne + ($ - ne) / w)
                  : $ < j && ($ = j - (j - $) / w))),
            (l.startX = X = qi(X)),
            (l.startY = $ = qi($)));
        },
        ri = function () {
          return l.tween && l.tween.isActive();
        },
        wi = function () {
          Ii.parentNode &&
            !ri() &&
            !l.isDragging &&
            Ii.parentNode.removeChild(Ii);
        },
        Xt = function (w, B) {
          var S;
          if (
            !R ||
            l.isPressed ||
            !w ||
            ((w.type === "mousedown" || w.type === "pointerdown") &&
              !B &&
              Qi() - C < 30 &&
              vs[l.pointerEvent.type])
          ) {
            Re && w && R && ni(w);
            return;
          }
          if (
            ((Ue = ri()),
            (ti = !1),
            (l.pointerEvent = w),
            vs[w.type]
              ? ((ee = ~w.type.indexOf("touch")
                  ? w.currentTarget || w.target
                  : F),
                tt(ee, "touchend", Ne),
                tt(ee, "touchmove", le),
                tt(ee, "touchcancel", Ne),
                tt(F, "touchstart", Vu))
              : ((ee = null), tt(F, "mousemove", le)),
            (be = null),
            (!ro || !ee) &&
              (tt(F, "mouseup", Ne),
              w && w.target && tt(w.target, "mouseup", Ne)),
            (Z = k.call(l, w.target) && t.dragClickables === !1 && !B),
            Z)
          ) {
            (tt(w.target, "change", Ne),
              We(l, "pressInit", "onPressInit"),
              We(l, "press", "onPress"),
              Vs(_, !0),
              (Re = !1));
            return;
          }
          if (
            ((M =
              !ee ||
              c === h ||
              l.vars.allowNativeTouchScrolling === !1 ||
              (l.vars.allowContextMenu && w && (w.ctrlKey || w.which > 2))
                ? !1
                : c
                  ? "y"
                  : "x"),
            (Re = !M && !l.allowEventDefault),
            Re && (ni(w), tt(Me, "touchforcechange", ni)),
            w.changedTouches
              ? ((w = se = w.changedTouches[0]), (te = w.identifier))
              : w.pointerId
                ? (te = w.pointerId)
                : (se = te = null),
            To++,
            gp(Ze),
            (z = l.pointerY = w.pageY),
            (V = l.pointerX = w.pageX),
            We(l, "pressInit", "onPressInit"),
            (M || l.autoScroll) && aa(i.parentNode),
            i.parentNode &&
              l.autoScroll &&
              !L &&
              !o &&
              i.parentNode._gsMaxScrollX &&
              !Ii.parentNode &&
              !i.getBBox &&
              ((Ii.style.width = i.parentNode.scrollWidth + "px"),
              i.parentNode.appendChild(Ii)),
            pi(),
            l.tween && l.tween.kill(),
            (l.isThrowing = !1),
            xe.killTweensOf(L || i, d, !0),
            L && xe.killTweensOf(i, { scrollTo: 1 }, !0),
            (l.tween = l.lockedAxis = null),
            (t.zIndexBoost || (!o && !L && t.zIndexBoost !== !1)) &&
              (i.style.zIndex = e.zIndex++),
            (l.isPressed = !0),
            (re = !!(t.onDrag || l._listeners.drag)),
            (b = !!(t.onMove || l._listeners.move)),
            t.cursor !== !1 || t.activeCursor)
          )
            for (S = _.length; --S > -1; )
              xe.set(_[S], {
                cursor:
                  t.activeCursor ||
                  t.cursor ||
                  (Yn === "grab" ? "grabbing" : Yn),
              });
          We(l, "press", "onPress");
        },
        le = function (w) {
          var B = w,
            S,
            O,
            N,
            A,
            Y,
            I;
          if (!R || Bl || !l.isPressed || !w) {
            Re && w && R && ni(w);
            return;
          }
          if (((l.pointerEvent = w), (S = w.changedTouches), S)) {
            if (((w = S[0]), w !== se && w.identifier !== te)) {
              for (
                A = S.length;
                --A > -1 && (w = S[A]).identifier !== te && w.target !== i;
              );
              if (A < 0) return;
            }
          } else if (w.pointerId && te && w.pointerId !== te) return;
          if (
            ee &&
            M &&
            !be &&
            ((si.x = w.pageX - (E ? dn(F) : 0)),
            (si.y = w.pageY - (E ? hn(F) : 0)),
            ae && ae.apply(si, si),
            (O = si.x),
            (N = si.y),
            (Y = Math.abs(O - V)),
            (I = Math.abs(N - z)),
            ((Y !== I && (Y > p || I > p)) || ($n && M === be)) &&
              ((be = Y > I && c ? "x" : "y"),
              M && be !== M && tt(Me, "touchforcechange", ni),
              l.vars.lockAxisOnTouchScroll !== !1 &&
                c &&
                h &&
                ((l.lockedAxis = be === "x" ? "y" : "x"),
                Zi(l.vars.onLockAxis) && l.vars.onLockAxis.call(l, B)),
              $n && M === be))
          ) {
            Ne(B);
            return;
          }
          (!l.allowEventDefault &&
          (!M || (be && M !== be)) &&
          B.cancelable !== !1
            ? (ni(B), (Re = !0))
            : Re && (Re = !1),
            l.autoScroll && (m = !0),
            Vt(w.pageX, w.pageY, b));
        },
        Vt = function (w, B, S) {
          var O = 1 - l.dragResistance,
            N = 1 - l.edgeResistance,
            A = l.pointerX,
            Y = l.pointerY,
            I = $,
            H = l.x,
            ie = l.y,
            Q = l.endX,
            fe = l.endY,
            Te = l.endRotation,
            Se = oe,
            _e,
            ge,
            Pe,
            ue,
            at,
            Ye;
          ((l.pointerX = w),
            (l.pointerY = B),
            E && ((w -= dn(F)), (B -= hn(F))),
            o
              ? ((ue = Math.atan2(ye.y - B, w - ye.x) * Bu),
                (at = l.y - ue),
                at > 180
                  ? (($ -= 360), (l.y = ue))
                  : at < -180 && (($ += 360), (l.y = ue)),
                l.x !== X || Math.max(Math.abs(V - w), Math.abs(z - B)) > p
                  ? ((l.y = ue), (Pe = X + ($ - ue) * O))
                  : (Pe = X))
              : (ae &&
                  ((Ye = w * ae.a + B * ae.c + ae.e),
                  (B = w * ae.b + B * ae.d + ae.f),
                  (w = Ye)),
                (ge = B - z),
                (_e = w - V),
                ge < p && ge > -p && (ge = 0),
                _e < p && _e > -p && (_e = 0),
                (l.lockAxis || l.lockedAxis) &&
                  (_e || ge) &&
                  ((Ye = l.lockedAxis),
                  Ye ||
                    ((l.lockedAxis = Ye =
                      c && Math.abs(_e) > Math.abs(ge) ? "y" : h ? "x" : null),
                    Ye &&
                      Zi(l.vars.onLockAxis) &&
                      l.vars.onLockAxis.call(l, l.pointerEvent)),
                  Ye === "y" ? (ge = 0) : Ye === "x" && (_e = 0)),
                (Pe = qi(X + _e * O)),
                (ue = qi($ + ge * O))),
            (ce || we || Ae) &&
              (l.x !== Pe || (l.y !== ue && !o)) &&
              (Ae &&
                ((Gr.x = Pe),
                (Gr.y = ue),
                (Ye = Ae(Gr)),
                (Pe = qi(Ye.x)),
                (ue = qi(Ye.y))),
              ce && (Pe = qi(ce(Pe))),
              we && (ue = qi(we(ue)))),
            J &&
              (Pe > W
                ? (Pe = W + Math.round((Pe - W) * N))
                : Pe < G && (Pe = G + Math.round((Pe - G) * N)),
              o ||
                (ue > ne
                  ? (ue = Math.round(ne + (ue - ne) * N))
                  : ue < j && (ue = Math.round(j + (ue - j) * N)))),
            (l.x !== Pe || (l.y !== ue && !o)) &&
              (o
                ? ((l.endRotation = l.x = l.endX = Pe), (oe = !0))
                : (h && ((l.y = l.endY = ue), (oe = !0)),
                  c && ((l.x = l.endX = Pe), (oe = !0))),
              !S || We(l, "move", "onMove") !== !1
                ? !l.isDragging &&
                  l.isPressed &&
                  ((l.isDragging = ti = !0), We(l, "dragstart", "onDragStart"))
                : ((l.pointerX = A),
                  (l.pointerY = Y),
                  ($ = I),
                  (l.x = H),
                  (l.y = ie),
                  (l.endX = Q),
                  (l.endY = fe),
                  (l.endRotation = Te),
                  (oe = Se))));
        },
        Ne = function K(w, B) {
          if (
            !R ||
            !l.isPressed ||
            (w &&
              te != null &&
              !B &&
              ((w.pointerId && w.pointerId !== te && w.target !== i) ||
                (w.changedTouches && !yp(w.changedTouches, te))))
          ) {
            Re && w && R && ni(w);
            return;
          }
          l.isPressed = !1;
          var S = w,
            O = l.isDragging,
            N = l.vars.allowContextMenu && w && (w.ctrlKey || w.which > 2),
            A = xe.delayedCall(0.001, wi),
            Y,
            I,
            H,
            ie,
            Q;
          if (
            (ee
              ? (qe(ee, "touchend", K),
                qe(ee, "touchmove", le),
                qe(ee, "touchcancel", K),
                qe(F, "touchstart", Vu))
              : qe(F, "mousemove", le),
            qe(Me, "touchforcechange", ni),
            (!ro || !ee) &&
              (qe(F, "mouseup", K),
              w && w.target && qe(w.target, "mouseup", K)),
            (oe = !1),
            O && ((g = zu = Qi()), (l.isDragging = !1)),
            Xu(Ze),
            Z && !N)
          ) {
            (w && (qe(w.target, "change", K), (l.pointerEvent = S)),
              Vs(_, !1),
              We(l, "release", "onRelease"),
              We(l, "click", "onClick"),
              (Z = !1));
            return;
          }
          for (I = _.length; --I > -1; )
            la(_[I], "cursor", t.cursor || (t.cursor !== !1 ? Yn : null));
          if ((To--, w)) {
            if (
              ((Y = w.changedTouches),
              Y && ((w = Y[0]), w !== se && w.identifier !== te))
            ) {
              for (
                I = Y.length;
                --I > -1 && (w = Y[I]).identifier !== te && w.target !== i;
              );
              if (I < 0 && !B) return;
            }
            ((l.pointerEvent = S),
              (l.pointerX = w.pageX),
              (l.pointerY = w.pageY));
          }
          return (
            N && S
              ? (ni(S), (Re = !0), We(l, "release", "onRelease"))
              : S && !O
                ? ((Re = !1),
                  Ue && (t.snap || t.bounds) && Gi(t.inertia || t.throwProps),
                  We(l, "release", "onRelease"),
                  (!$n || S.type !== "touchmove") &&
                    S.type.indexOf("cancel") === -1 &&
                    (We(l, "click", "onClick"),
                    Qi() - C < 300 && We(l, "doubleclick", "onDoubleClick"),
                    (ie = S.target || i),
                    (C = Qi()),
                    (Q = function () {
                      C !== dt &&
                        l.enabled() &&
                        !l.isPressed &&
                        !S.defaultPrevented &&
                        (ie.click
                          ? ie.click()
                          : F.createEvent &&
                            ((H = F.createEvent("MouseEvents")),
                            H.initMouseEvent(
                              "click",
                              !0,
                              !0,
                              Me,
                              1,
                              l.pointerEvent.screenX,
                              l.pointerEvent.screenY,
                              l.pointerX,
                              l.pointerY,
                              !1,
                              !1,
                              !1,
                              !1,
                              0,
                              null,
                            ),
                            ie.dispatchEvent(H)));
                    }),
                    !$n && !S.defaultPrevented && xe.delayedCall(0.05, Q)))
                : (Gi(t.inertia || t.throwProps),
                  !l.allowEventDefault &&
                  S &&
                  (t.dragClickables !== !1 || !k.call(l, S.target)) &&
                  O &&
                  (!M || (be && M === be)) &&
                  S.cancelable !== !1
                    ? ((Re = !0), ni(S))
                    : (Re = !1),
                  We(l, "release", "onRelease")),
            ri() && A.duration(l.tween.duration()),
            O && We(l, "dragend", "onDragEnd"),
            !0
          );
        },
        pt = function (w) {
          if (w && l.isDragging && !L) {
            var B = w.target || i.parentNode,
              S = B.scrollLeft - B._gsScrollX,
              O = B.scrollTop - B._gsScrollY;
            (S || O) &&
              (ae
                ? ((V -= S * ae.a + O * ae.c), (z -= O * ae.d + S * ae.b))
                : ((V -= S), (z -= O)),
              (B._gsScrollX += S),
              (B._gsScrollY += O),
              Vt(l.pointerX, l.pointerY));
          }
        },
        Rt = function (w) {
          var B = Qi(),
            S = B - C < 100,
            O = B - g < 50,
            N = S && dt === C,
            A = l.pointerEvent && l.pointerEvent.defaultPrevented,
            Y = S && U === C,
            I = w.isTrusted || (w.isTrusted == null && S && N);
          if (
            ((N || (O && l.vars.suppressClickOnDrag !== !1)) &&
              w.stopImmediatePropagation &&
              w.stopImmediatePropagation(),
            S &&
              !(l.pointerEvent && l.pointerEvent.defaultPrevented) &&
              (!N || (I && !Y)))
          ) {
            (I && N && (U = C), (dt = C));
            return;
          }
          ((l.isPressed || O || S) && (!I || !w.detail || !S || A) && ni(w),
            !S &&
              !O &&
              !ti &&
              (w && w.target && (l.pointerEvent = w),
              We(l, "click", "onClick")));
        },
        bi = function (w) {
          return ae
            ? {
                x: w.x * ae.a + w.y * ae.c + ae.e,
                y: w.x * ae.b + w.y * ae.d + ae.f,
              }
            : { x: w.x, y: w.y };
        };
      return (
        (Oe = e.get(i)),
        Oe && Oe.kill(),
        (r.startDrag = function (K, w) {
          var B, S, O, N;
          (Xt(K || l.pointerEvent, !0),
            w &&
              !l.hitTest(K || l.pointerEvent) &&
              ((B = Ur(K || l.pointerEvent)),
              (S = Ur(i)),
              (O = bi({ x: B.left + B.width / 2, y: B.top + B.height / 2 })),
              (N = bi({ x: S.left + S.width / 2, y: S.top + S.height / 2 })),
              (V -= O.x - N.x),
              (z -= O.y - N.y)),
            l.isDragging ||
              ((l.isDragging = ti = !0), We(l, "dragstart", "onDragStart")));
        }),
        (r.drag = le),
        (r.endDrag = function (K) {
          return Ne(K || l.pointerEvent, !0);
        }),
        (r.timeSinceDrag = function () {
          return l.isDragging ? 0 : (Qi() - g) / 1e3;
        }),
        (r.timeSinceClick = function () {
          return (Qi() - C) / 1e3;
        }),
        (r.hitTest = function (K, w) {
          return e.hitTest(l.target, K, w);
        }),
        (r.getDirection = function (K, w) {
          var B =
              K === "velocity" && gi ? K : ns(K) && !o ? "element" : "start",
            S,
            O,
            N,
            A,
            Y,
            I;
          return (
            B === "element" && ((Y = Ur(l.target)), (I = Ur(K))),
            (S =
              B === "start"
                ? l.x - X
                : B === "velocity"
                  ? gi.getVelocity(i, f)
                  : Y.left + Y.width / 2 - (I.left + I.width / 2)),
            o
              ? S < 0
                ? "counter-clockwise"
                : "clockwise"
              : ((w = w || 2),
                (O =
                  B === "start"
                    ? l.y - $
                    : B === "velocity"
                      ? gi.getVelocity(i, u)
                      : Y.top + Y.height / 2 - (I.top + I.height / 2)),
                (N = Math.abs(S / O)),
                (A = N < 1 / w ? "" : S < 0 ? "left" : "right"),
                N < w && (A !== "" && (A += "-"), (A += O < 0 ? "up" : "down")),
                A)
          );
        }),
        (r.applyBounds = function (K, w) {
          var B, S, O, N, A, Y;
          if (K && t.bounds !== K) return ((t.bounds = K), l.update(!0, w));
          if ((ke(!0), Yt(), J && !ri())) {
            if (
              ((B = l.x),
              (S = l.y),
              B > W ? (B = W) : B < G && (B = G),
              S > ne ? (S = ne) : S < j && (S = j),
              (l.x !== B || l.y !== S) &&
                ((O = !0),
                (l.x = l.endX = B),
                o ? (l.endRotation = B) : (l.y = l.endY = S),
                (oe = !0),
                Ze(!0),
                l.autoScroll && !l.isDragging))
            )
              for (
                aa(i.parentNode),
                  N = i,
                  Ri.scrollTop =
                    Me.pageYOffset != null
                      ? Me.pageYOffset
                      : F.documentElement.scrollTop != null
                        ? F.documentElement.scrollTop
                        : F.body.scrollTop,
                  Ri.scrollLeft =
                    Me.pageXOffset != null
                      ? Me.pageXOffset
                      : F.documentElement.scrollLeft != null
                        ? F.documentElement.scrollLeft
                        : F.body.scrollLeft;
                N && !Y;
              )
                ((Y = bn(N.parentNode)),
                  (A = Y ? Ri : N.parentNode),
                  h &&
                    A.scrollTop > A._gsMaxScrollY &&
                    (A.scrollTop = A._gsMaxScrollY),
                  c &&
                    A.scrollLeft > A._gsMaxScrollX &&
                    (A.scrollLeft = A._gsMaxScrollX),
                  (N = A));
            l.isThrowing &&
              (O || l.endX > W || l.endX < G || l.endY > ne || l.endY < j) &&
              Gi(t.inertia || t.throwProps, O);
          }
          return l;
        }),
        (r.update = function (K, w, B) {
          if (w && l.isPressed) {
            var S = ft(i),
              O = di.apply({ x: l.x - X, y: l.y - $ }),
              N = ft(i.parentNode, !0);
            (N.apply({ x: S.e - O.x, y: S.f - O.y }, O),
              (l.x -= O.x - N.e),
              (l.y -= O.y - N.f),
              Ze(!0),
              pi());
          }
          var A = l.x,
            Y = l.y;
          return (
            ii(!w),
            K ? l.applyBounds() : (oe && B && Ze(!0), ke(!0)),
            w && (Vt(l.pointerX, l.pointerY), oe && Ze(!0)),
            l.isPressed &&
              !w &&
              ((c && Math.abs(A - l.x) > 0.01) ||
                (h && Math.abs(Y - l.y) > 0.01 && !o)) &&
              pi(),
            l.autoScroll &&
              (aa(i.parentNode, l.isDragging),
              (m = l.isDragging),
              Ze(!0),
              Hu(i, pt),
              Wu(i, pt)),
            l
          );
        }),
        (r.enable = function (K) {
          var w = { lazy: !0 },
            B,
            S,
            O;
          if (
            (t.cursor !== !1 && (w.cursor = t.cursor || Yn),
            xe.utils.checkPrefix("touchCallout") && (w.touchCallout = "none"),
            K !== "soft")
          ) {
            for (
              $u(
                _,
                c === h
                  ? "none"
                  : (t.allowNativeTouchScrolling &&
                        (i.scrollHeight === i.clientHeight) ==
                          (i.scrollWidth === i.clientHeight)) ||
                      t.allowEventDefault
                    ? "manipulation"
                    : c
                      ? "pan-y"
                      : "pan-x",
              ),
                S = _.length;
              --S > -1;
            )
              ((O = _[S]),
                ro || tt(O, "mousedown", Xt),
                tt(O, "touchstart", Xt),
                tt(O, "click", Rt, !0),
                xe.set(O, w),
                O.getBBox &&
                  O.ownerSVGElement &&
                  c !== h &&
                  xe.set(O.ownerSVGElement, {
                    touchAction:
                      t.allowNativeTouchScrolling || t.allowEventDefault
                        ? "manipulation"
                        : c
                          ? "pan-y"
                          : "pan-x",
                  }),
                t.allowContextMenu || tt(O, "contextmenu", Ve));
            Vs(_, !1);
          }
          return (
            Wu(i, pt),
            (R = !0),
            gi &&
              K !== "soft" &&
              gi.track(L || i, s ? "x,y" : o ? "rotation" : "top,left"),
            (i._gsDragID = B = i._gsDragID || "d" + dp++),
            (cn[B] = l),
            L && (L.enable(), (L.element._gsDragID = B)),
            (t.bounds || o) && pi(),
            t.bounds && l.applyBounds(),
            l
          );
        }),
        (r.disable = function (K) {
          for (var w = l.isDragging, B = _.length, S; --B > -1; )
            la(_[B], "cursor", null);
          if (K !== "soft") {
            for ($u(_, null), B = _.length; --B > -1; )
              ((S = _[B]),
                la(S, "touchCallout", null),
                qe(S, "mousedown", Xt),
                qe(S, "touchstart", Xt),
                qe(S, "click", Rt, !0),
                qe(S, "contextmenu", Ve));
            (Vs(_, !0),
              ee &&
                (qe(ee, "touchcancel", Ne),
                qe(ee, "touchend", Ne),
                qe(ee, "touchmove", le)),
              qe(F, "mouseup", Ne),
              qe(F, "mousemove", le));
          }
          return (
            Hu(i, pt),
            (R = !1),
            gi &&
              K !== "soft" &&
              (gi.untrack(L || i, s ? "x,y" : o ? "rotation" : "top,left"),
              l.tween && l.tween.kill()),
            L && L.disable(),
            Xu(Ze),
            (l.isDragging = l.isPressed = Z = !1),
            w && We(l, "dragend", "onDragEnd"),
            l
          );
        }),
        (r.enabled = function (K, w) {
          return arguments.length ? (K ? l.enable(w) : l.disable(w)) : R;
        }),
        (r.kill = function () {
          return (
            (l.isThrowing = !1),
            l.tween && l.tween.kill(),
            l.disable(),
            xe.set(_, { clearProps: "userSelect" }),
            delete cn[i._gsDragID],
            l
          );
        }),
        (r.revert = function () {
          (this.kill(), this.styles && this.styles.revert());
        }),
        ~n.indexOf("scroll") &&
          ((L = r.scrollProxy =
            new Tp(
              i,
              _p(
                {
                  onKill: function () {
                    l.isPressed && Ne(null);
                  },
                },
                t,
              ),
            )),
          (i.style.overflowY = h && !Ha ? "auto" : "hidden"),
          (i.style.overflowX = c && !Ha ? "auto" : "hidden"),
          (i = L.content)),
        o ? (d.rotation = 1) : (c && (d[f] = 1), h && (d[u] = 1)),
        (P.force3D = "force3D" in t ? t.force3D : !0),
        Yc(Nu(r)),
        r.enable(),
        r
      );
    }
    return (
      (e.register = function (t) {
        ((xe = t), fa());
      }),
      (e.create = function (t, r) {
        return (
          Wa || fa(!0),
          sr(t).map(function (n) {
            return new e(n, r);
          })
        );
      }),
      (e.get = function (t) {
        return cn[(sr(t)[0] || {})._gsDragID];
      }),
      (e.timeSinceDrag = function () {
        return (Qi() - zu) / 1e3;
      }),
      (e.hitTest = function (t, r, n) {
        if (t === r) return !1;
        var s = Ur(t),
          o = Ur(r),
          f = s.top,
          u = s.left,
          c = s.right,
          h = s.bottom,
          p = s.width,
          l = s.height,
          _ = o.left > c || o.right < u || o.top > h || o.bottom < f,
          d,
          g,
          m;
        return _ || !n
          ? !_
          : ((m = (n + "").indexOf("%") !== -1),
            (n = parseFloat(n) || 0),
            (d = { left: Math.max(u, o.left), top: Math.max(f, o.top) }),
            (d.width = Math.min(c, o.right) - d.left),
            (d.height = Math.min(h, o.bottom) - d.top),
            d.width < 0 || d.height < 0
              ? !1
              : m
                ? ((n *= 0.01),
                  (g = d.width * d.height),
                  g >= p * l * n || g >= o.width * o.height * n)
                : d.width > n && d.height > n);
      }),
      e
    );
  })(Sp);
mp(Ro.prototype, {
  pointerX: 0,
  pointerY: 0,
  startX: 0,
  startY: 0,
  deltaX: 0,
  deltaY: 0,
  isDragging: !1,
  isPressed: !1,
});
Ro.zIndex = 1e3;
Ro.version = "3.13.0";
Vc() && xe.registerPlugin(Ro);
/*!
 * VelocityTracker: 3.13.0
 * https://gsap.com
 *
 * Copyright 2008-2025, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license
 * @author: Jack Doyle, jack@greensock.com
 */ var Pi,
  Qa,
  os,
  Uc,
  Kr,
  rn,
  Ka,
  qc,
  Qc = function () {
    return Pi || (typeof window < "u" && (Pi = window.gsap));
  },
  ja = {},
  Cp = function (e) {
    return Math.round(e * 1e4) / 1e4;
  },
  Za = function (e) {
    return qc(e).id;
  },
  Xn = function (e) {
    return ja[Za(typeof e == "string" ? os(e)[0] : e)];
  },
  qu = function (e) {
    var i = Kr,
      t;
    if (e - Ka >= 0.05)
      for (Ka = e; i; )
        ((t = i.g(i.t, i.p)),
          (t !== i.v1 || e - i.t1 > 0.2) &&
            ((i.v2 = i.v1), (i.v1 = t), (i.t2 = i.t1), (i.t1 = e)),
          (i = i._next));
  },
  kp = { deg: 360, rad: Math.PI * 2 },
  ca = function () {
    ((Pi = Qc()),
      Pi &&
        ((os = Pi.utils.toArray),
        (Uc = Pi.utils.getUnit),
        (qc = Pi.core.getCache),
        (rn = Pi.ticker),
        (Qa = 1)));
  },
  Pp = function (e, i, t, r) {
    ((this.t = e),
      (this.p = i),
      (this.g = e._gsap.get),
      (this.rCap = kp[t || Uc(this.g(e, i))]),
      (this.v1 = this.v2 = 0),
      (this.t1 = this.t2 = rn.time),
      r && ((this._next = r), (r._prev = this)));
  },
  Ss = (function () {
    function a(i, t) {
      (Qa || ca(),
        (this.target = os(i)[0]),
        (ja[Za(this.target)] = this),
        (this._props = {}),
        t && this.add(t));
    }
    a.register = function (t) {
      ((Pi = t), ca());
    };
    var e = a.prototype;
    return (
      (e.get = function (t, r) {
        var n =
            this._props[t] || console.warn("Not tracking " + t + " velocity."),
          s,
          o,
          f;
        return (
          (s = parseFloat(r ? n.v1 : n.g(n.t, n.p))),
          (o = s - parseFloat(n.v2)),
          (f = n.rCap),
          f && ((o = o % f), o !== o % (f / 2) && (o = o < 0 ? o + f : o - f)),
          Cp(o / ((r ? n.t1 : rn.time) - n.t2))
        );
      }),
      (e.getAll = function () {
        var t = {},
          r = this._props,
          n;
        for (n in r) t[n] = this.get(n);
        return t;
      }),
      (e.isTracking = function (t) {
        return t in this._props;
      }),
      (e.add = function (t, r) {
        t in this._props ||
          (Kr || (rn.add(qu), (Ka = rn.time)),
          (Kr = this._props[t] = new Pp(this.target, t, r, Kr)));
      }),
      (e.remove = function (t) {
        var r = this._props[t],
          n,
          s;
        r &&
          ((n = r._prev),
          (s = r._next),
          n && (n._next = s),
          s ? (s._prev = n) : Kr === r && (rn.remove(qu), (Kr = 0)),
          delete this._props[t]);
      }),
      (e.kill = function (t) {
        for (var r in this._props) this.remove(r);
        t || delete ja[Za(this.target)];
      }),
      (a.track = function (t, r, n) {
        Qa || ca();
        for (
          var s = [],
            o = os(t),
            f = r.split(","),
            u = (n || "").split(","),
            c = o.length,
            h,
            p;
          c--;
        ) {
          for (h = Xn(o[c]) || new a(o[c]), p = f.length; p--; )
            h.add(f[p], u[p] || u[0]);
          s.push(h);
        }
        return s;
      }),
      (a.untrack = function (t, r) {
        var n = (r || "").split(",");
        os(t).forEach(function (s) {
          var o = Xn(s);
          o &&
            (n.length
              ? n.forEach(function (f) {
                  return o.remove(f);
                })
              : o.kill(1));
        });
      }),
      (a.isTracking = function (t, r) {
        var n = Xn(t);
        return n && n.isTracking(r);
      }),
      (a.getVelocity = function (t, r) {
        var n = Xn(t);
        return !n || !n.isTracking(r)
          ? console.warn("Not tracking velocity of " + r)
          : n.get(r);
      }),
      a
    );
  })();
Ss.getByTarget = Xn;
Qc() && Pi.registerPlugin(Ss);
/*!
 * InertiaPlugin 3.13.0
 * https://gsap.com
 *
 * @license Copyright 2008-2025, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license
 * @author: Jack Doyle, jack@greensock.com
 */ var it,
  Kc,
  Qu,
  jc,
  Ja,
  as,
  Zc,
  Jc,
  eh,
  zl,
  th,
  ls,
  el,
  ih,
  So = Ss.getByTarget,
  rh = function () {
    return (
      it ||
      (typeof window < "u" && (it = window.gsap) && it.registerPlugin && it)
    );
  },
  Ep = function (e) {
    return typeof e == "string";
  },
  bs = function (e) {
    return typeof e == "number";
  },
  ur = function (e) {
    return typeof e == "object";
  },
  tl = function (e) {
    return typeof e == "function";
  },
  Mp = 1,
  nh = Array.isArray,
  Dp = function (e) {
    return e;
  },
  Lr = 1e10,
  Ku = 1 / Lr,
  sh = 0.05,
  Op = function (e) {
    return Math.round(e * 1e4) / 1e4;
  },
  Ap = function (e, i, t) {
    for (var r in i) !(r in e) && r !== t && (e[r] = i[r]);
    return e;
  },
  Rp = function a(e) {
    var i = {},
      t,
      r;
    for (t in e) i[t] = ur((r = e[t])) && !nh(r) ? a(r) : r;
    return i;
  },
  ju = function (e, i, t, r, n) {
    var s = i.length,
      o = 0,
      f = Lr,
      u,
      c,
      h,
      p;
    if (ur(e)) {
      for (; s--; ) {
        ((u = i[s]), (c = 0));
        for (h in e) ((p = u[h] - e[h]), (c += p * p));
        c < f && ((o = s), (f = c));
      }
      if ((n || Lr) < Lr && n < Math.sqrt(f)) return e;
    } else
      for (; s--; )
        ((u = i[s]),
          (c = u - e),
          c < 0 && (c = -c),
          c < f && u >= r && u <= t && ((o = s), (f = c)));
    return i[o];
  },
  oh = function (e, i, t, r, n, s, o) {
    if (e.end === "auto") return e;
    var f = e.end,
      u,
      c;
    if (((t = isNaN(t) ? Lr : t), (r = isNaN(r) ? -Lr : r), ur(i))) {
      if (
        ((u = i.calculated ? i : (tl(f) ? f(i, o) : ju(i, f, t, r, s)) || i),
        !i.calculated)
      ) {
        for (c in u) i[c] = u[c];
        i.calculated = !0;
      }
      u = u[n];
    } else u = tl(f) ? f(i, o) : nh(f) ? ju(i, f, t, r, s) : parseFloat(f);
    return (
      u > t ? (u = t) : u < r && (u = r),
      { max: u, min: u, unitFactor: e.unitFactor }
    );
  },
  Co = function (e, i, t) {
    return isNaN(e[i]) ? t : +e[i];
  },
  $l = function (e, i) {
    return (i * sh * e) / zl;
  },
  Zu = function (e, i, t) {
    return Math.abs(((i - e) * zl) / t / sh);
  },
  ah = {
    resistance: 1,
    checkpoint: 1,
    preventOvershoot: 1,
    linkedProps: 1,
    radius: 1,
    duration: 1,
  },
  lh = function (e, i, t, r) {
    if (i.linkedProps) {
      var n = i.linkedProps.split(","),
        s = {},
        o,
        f,
        u,
        c,
        h,
        p;
      for (o = 0; o < n.length; o++)
        ((f = n[o]),
          (u = i[f]),
          u &&
            (bs(u.velocity)
              ? (c = u.velocity)
              : ((h = h || So(e)), (c = h && h.isTracking(f) ? h.get(f) : 0)),
            (p = Math.abs(c / Co(u, "resistance", r))),
            (s[f] = parseFloat(t(e, f)) + $l(c, p))));
      return s;
    }
  },
  Lp = function (e, i, t, r, n, s) {
    if (
      (t === void 0 && (t = 10),
      r === void 0 && (r = 0.2),
      n === void 0 && (n = 1),
      Ep(e) && (e = jc(e)[0]),
      !e)
    )
      return 0;
    var o = 0,
      f = Lr,
      u = i.inertia || i,
      c = eh(e).get,
      h = Co(u, "resistance", as.resistance),
      p,
      l,
      _,
      d,
      g,
      m,
      x,
      v,
      T,
      y;
    y = lh(e, u, c, h);
    for (p in u)
      ah[p] ||
        ((l = u[p]),
        ur(l) ||
          ((v = v || So(e)),
          v && v.isTracking(p)
            ? (l = bs(l) ? { velocity: l } : { velocity: v.get(p) })
            : ((d = +l || 0), (_ = Math.abs(d / h)))),
        ur(l) &&
          (bs(l.velocity)
            ? (d = l.velocity)
            : ((v = v || So(e)), (d = v && v.isTracking(p) ? v.get(p) : 0)),
          (_ = th(r, t, Math.abs(d / Co(l, "resistance", h)))),
          (g = parseFloat(c(e, p)) || 0),
          (m = g + $l(d, _)),
          "end" in l &&
            ((l = oh(l, y && p in y ? y : m, l.max, l.min, p, u.radius, d)),
            ls === i && (ls = u = Rp(i)),
            (u[p] = Ap(l, u[p], "end"))),
          "max" in l && m > +l.max + Ku
            ? ((T = l.unitFactor || as.unitFactors[p] || 1),
              (x =
                (g > l.max && l.min !== l.max) || (d * T > -15 && d * T < 45)
                  ? r + (t - r) * 0.1
                  : Zu(g, l.max, d)),
              x + n < f && (f = x + n))
            : "min" in l &&
              m < +l.min - Ku &&
              ((T = l.unitFactor || as.unitFactors[p] || 1),
              (x =
                (g < l.min && l.min !== l.max) || (d * T > -45 && d * T < 15)
                  ? r + (t - r) * 0.1
                  : Zu(g, l.min, d)),
              x + n < f && (f = x + n)),
          x > o && (o = x)),
        _ > o && (o = _));
    return (o > f && (o = f), o > t ? t : o < r ? r : o);
  },
  Ju = function () {
    ((it = rh()),
      it &&
        ((Qu = it.parseEase),
        (jc = it.utils.toArray),
        (Zc = it.utils.getUnit),
        (eh = it.core.getCache),
        (th = it.utils.clamp),
        (el = it.core.getStyleSaver),
        (ih = it.core.reverting || function () {}),
        (Ja = Qu("power3")),
        (zl = Ja(0.05)),
        (Jc = it.core.PropTween),
        it.config({
          resistance: 100,
          unitFactors: {
            time: 1e3,
            totalTime: 1e3,
            progress: 1e3,
            totalProgress: 1e3,
          },
        }),
        (as = it.config()),
        it.registerPlugin(Ss),
        (Kc = 1)));
  },
  uh = {
    version: "3.13.0",
    name: "inertia",
    register: function (e) {
      ((it = e), Ju());
    },
    init: function (e, i, t, r, n) {
      Kc || Ju();
      var s = So(e);
      if (i === "auto") {
        if (!s) {
          console.warn(
            "No inertia tracking on " +
              e +
              ". InertiaPlugin.track(target) first.",
          );
          return;
        }
        i = s.getAll();
      }
      ((this.styles = el && typeof e.style == "object" && el(e)),
        (this.target = e),
        (this.tween = t),
        (ls = i));
      var o = e._gsap,
        f = o.get,
        u = i.duration,
        c = ur(u),
        h = i.preventOvershoot || (c && u.overshoot === 0),
        p = Co(i, "resistance", as.resistance),
        l = bs(u)
          ? u
          : Lp(
              e,
              i,
              (c && u.max) || 10,
              (c && u.min) || 0.2,
              c && "overshoot" in u ? +u.overshoot : h ? 0 : 1,
            ),
        _,
        d,
        g,
        m,
        x,
        v,
        T,
        y,
        k;
      ((i = ls), (ls = 0), (k = lh(e, i, f, p)));
      for (_ in i)
        ah[_] ||
          ((d = i[_]),
          tl(d) && (d = d(r, e, n)),
          bs(d)
            ? (x = d)
            : ur(d) && !isNaN(d.velocity)
              ? (x = +d.velocity)
              : s && s.isTracking(_)
                ? (x = s.get(_))
                : console.warn(
                    "ERROR: No velocity was defined for " +
                      e +
                      " property: " +
                      _,
                  ),
          (v = $l(x, l)),
          (y = 0),
          (g = f(e, _)),
          (m = Zc(g)),
          (g = parseFloat(g)),
          ur(d) &&
            ((T = g + v),
            "end" in d &&
              (d = oh(d, k && _ in k ? k : T, d.max, d.min, _, i.radius, x)),
            "max" in d && +d.max < T
              ? h || d.preventOvershoot
                ? (v = d.max - g)
                : (y = d.max - g - v)
              : "min" in d &&
                +d.min > T &&
                (h || d.preventOvershoot
                  ? (v = d.min - g)
                  : (y = d.min - g - v))),
          this._props.push(_),
          this.styles && this.styles.save(_),
          (this._pt = new Jc(this._pt, e, _, g, 0, Dp, 0, o.set(e, _, this))),
          (this._pt.u = m || 0),
          (this._pt.c1 = v),
          (this._pt.c2 = y));
      return (t.duration(l), Mp);
    },
    render: function (e, i) {
      var t = i._pt;
      if (((e = Ja(i.tween._time / i.tween._dur)), e || !ih()))
        for (; t; )
          (t.set(t.t, t.p, Op(t.s + t.c1 * e + t.c2 * e * e) + t.u, t.d, e),
            (t = t._next));
      else i.styles.revert();
    },
  };
"track,untrack,isTracking,getVelocity,getByTarget"
  .split(",")
  .forEach(function (a) {
    return (uh[a] = Ss[a]);
  });
rh() && it.registerPlugin(uh);
/*!
 * paths 3.13.0
 * https://gsap.com
 *
 * Copyright 2008-2025, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license
 * @author: Jack Doyle, jack@greensock.com
 */ var Fp = /[achlmqstvz]|(-?\d*\.?\d*(?:e[\-+]?\d+)?)[0-9]/gi,
  Ip = /[\+\-]?\d*\.?\d+e[\+\-]?\d+/gi,
  Np = Math.PI / 180,
  Ws = Math.sin,
  Hs = Math.cos,
  us = Math.abs,
  Dn = Math.sqrt,
  Bp = function (e) {
    return typeof e == "number";
  },
  ef = 1e5,
  Ki = function (e) {
    return Math.round(e * ef) / ef || 0;
  };
function zp(a, e, i, t, r, n, s) {
  for (var o = a.length, f, u, c, h, p; --o > -1; )
    for (f = a[o], u = f.length, c = 0; c < u; c += 2)
      ((h = f[c]),
        (p = f[c + 1]),
        (f[c] = h * e + p * t + n),
        (f[c + 1] = h * i + p * r + s));
  return ((a._dirty = 1), a);
}
function $p(a, e, i, t, r, n, s, o, f) {
  if (!(a === o && e === f)) {
    ((i = us(i)), (t = us(t)));
    var u = (r % 360) * Np,
      c = Hs(u),
      h = Ws(u),
      p = Math.PI,
      l = p * 2,
      _ = (a - o) / 2,
      d = (e - f) / 2,
      g = c * _ + h * d,
      m = -h * _ + c * d,
      x = g * g,
      v = m * m,
      T = x / (i * i) + v / (t * t);
    T > 1 && ((i = Dn(T) * i), (t = Dn(T) * t));
    var y = i * i,
      k = t * t,
      C = (y * k - y * v - k * x) / (y * v + k * x);
    C < 0 && (C = 0);
    var P = (n === s ? -1 : 1) * Dn(C),
      E = P * ((i * m) / t),
      D = P * -((t * g) / i),
      F = (a + o) / 2,
      R = (e + f) / 2,
      L = F + (c * E - h * D),
      V = R + (h * E + c * D),
      z = (g - E) / i,
      X = (m - D) / t,
      $ = (-g - E) / i,
      J = (-m - D) / t,
      re = z * z + X * X,
      b = (X < 0 ? -1 : 1) * Math.acos(z / Dn(re)),
      W =
        (z * J - X * $ < 0 ? -1 : 1) *
        Math.acos((z * $ + X * J) / Dn(re * ($ * $ + J * J)));
    (isNaN(W) && (W = p),
      !s && W > 0 ? (W -= l) : s && W < 0 && (W += l),
      (b %= l),
      (W %= l));
    var G = Math.ceil(us(W) / (l / 4)),
      ne = [],
      j = W / G,
      se = ((4 / 3) * Ws(j / 2)) / (1 + Hs(j / 2)),
      te = c * i,
      ye = h * i,
      oe = h * -t,
      Oe = c * t,
      ce;
    for (ce = 0; ce < G; ce++)
      ((r = b + ce * j),
        (g = Hs(r)),
        (m = Ws(r)),
        (z = Hs((r += j))),
        (X = Ws(r)),
        ne.push(g - se * m, m + se * g, z + se * X, X - se * z, z, X));
    for (ce = 0; ce < ne.length; ce += 2)
      ((g = ne[ce]),
        (m = ne[ce + 1]),
        (ne[ce] = g * te + m * oe + L),
        (ne[ce + 1] = g * ye + m * Oe + V));
    return ((ne[ce - 2] = o), (ne[ce - 1] = f), ne);
  }
}
function Yp(a) {
  var e =
      (a + "")
        .replace(Ip, function (E) {
          var D = +E;
          return D < 1e-4 && D > -1e-4 ? 0 : D;
        })
        .match(Fp) || [],
    i = [],
    t = 0,
    r = 0,
    n = 2 / 3,
    s = e.length,
    o = 0,
    f = "ERROR: malformed path: " + a,
    u,
    c,
    h,
    p,
    l,
    _,
    d,
    g,
    m,
    x,
    v,
    T,
    y,
    k,
    C,
    P = function (D, F, R, L) {
      ((x = (R - D) / 3),
        (v = (L - F) / 3),
        d.push(D + x, F + v, R - x, L - v, R, L));
    };
  if (!a || !isNaN(e[0]) || isNaN(e[1])) return (console.log(f), i);
  for (u = 0; u < s; u++)
    if (
      ((y = l),
      isNaN(e[u]) ? ((l = e[u].toUpperCase()), (_ = l !== e[u])) : u--,
      (h = +e[u + 1]),
      (p = +e[u + 2]),
      _ && ((h += t), (p += r)),
      u || ((g = h), (m = p)),
      l === "M")
    )
      (d && (d.length < 8 ? (i.length -= 1) : (o += d.length)),
        (t = g = h),
        (r = m = p),
        (d = [h, p]),
        i.push(d),
        (u += 2),
        (l = "L"));
    else if (l === "C")
      (d || (d = [0, 0]),
        _ || (t = r = 0),
        d.push(
          h,
          p,
          t + e[u + 3] * 1,
          r + e[u + 4] * 1,
          (t += e[u + 5] * 1),
          (r += e[u + 6] * 1),
        ),
        (u += 6));
    else if (l === "S")
      ((x = t),
        (v = r),
        (y === "C" || y === "S") &&
          ((x += t - d[d.length - 4]), (v += r - d[d.length - 3])),
        _ || (t = r = 0),
        d.push(x, v, h, p, (t += e[u + 3] * 1), (r += e[u + 4] * 1)),
        (u += 4));
    else if (l === "Q")
      ((x = t + (h - t) * n),
        (v = r + (p - r) * n),
        _ || (t = r = 0),
        (t += e[u + 3] * 1),
        (r += e[u + 4] * 1),
        d.push(x, v, t + (h - t) * n, r + (p - r) * n, t, r),
        (u += 4));
    else if (l === "T")
      ((x = t - d[d.length - 4]),
        (v = r - d[d.length - 3]),
        d.push(
          t + x,
          r + v,
          h + (t + x * 1.5 - h) * n,
          p + (r + v * 1.5 - p) * n,
          (t = h),
          (r = p),
        ),
        (u += 2));
    else if (l === "H") (P(t, r, (t = h), r), (u += 1));
    else if (l === "V") (P(t, r, t, (r = h + (_ ? r - t : 0))), (u += 1));
    else if (l === "L" || l === "Z")
      (l === "Z" && ((h = g), (p = m), (d.closed = !0)),
        (l === "L" || us(t - h) > 0.5 || us(r - p) > 0.5) &&
          (P(t, r, h, p), l === "L" && (u += 2)),
        (t = h),
        (r = p));
    else if (l === "A") {
      if (
        ((k = e[u + 4]),
        (C = e[u + 5]),
        (x = e[u + 6]),
        (v = e[u + 7]),
        (c = 7),
        k.length > 1 &&
          (k.length < 3
            ? ((v = x), (x = C), c--)
            : ((v = C), (x = k.substr(2)), (c -= 2)),
          (C = k.charAt(1)),
          (k = k.charAt(0))),
        (T = $p(
          t,
          r,
          +e[u + 1],
          +e[u + 2],
          +e[u + 3],
          +k,
          +C,
          (_ ? t : 0) + x * 1,
          (_ ? r : 0) + v * 1,
        )),
        (u += c),
        T)
      )
        for (c = 0; c < T.length; c++) d.push(T[c]);
      ((t = d[d.length - 2]), (r = d[d.length - 1]));
    } else console.log(f);
  return (
    (u = d.length),
    u < 6
      ? (i.pop(), (u = 0))
      : d[0] === d[u - 2] && d[1] === d[u - 1] && (d.closed = !0),
    (i.totalPoints = o + u),
    i
  );
}
function Xp(a) {
  Bp(a[0]) && (a = [a]);
  var e = "",
    i = a.length,
    t,
    r,
    n,
    s;
  for (r = 0; r < i; r++) {
    for (
      s = a[r],
        e += "M" + Ki(s[0]) + "," + Ki(s[1]) + " C",
        t = s.length,
        n = 2;
      n < t;
      n++
    )
      e +=
        Ki(s[n++]) +
        "," +
        Ki(s[n++]) +
        " " +
        Ki(s[n++]) +
        "," +
        Ki(s[n++]) +
        " " +
        Ki(s[n++]) +
        "," +
        Ki(s[n]) +
        " ";
    s.closed && (e += "z");
  }
  return e;
}
/*!
 * CustomEase 3.13.0
 * https://gsap.com
 *
 * @license Copyright 2008-2025, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license
 * @author: Jack Doyle, jack@greensock.com
 */ var Ft,
  fh,
  ch = function () {
    return (
      Ft ||
      (typeof window < "u" && (Ft = window.gsap) && Ft.registerPlugin && Ft)
    );
  },
  tf = function () {
    ((Ft = ch()),
      Ft
        ? (Ft.registerEase("_CE", Lo.create), (fh = 1))
        : console.warn("Please gsap.registerPlugin(CustomEase)"));
  },
  Vp = 1e20,
  Gs = function (e) {
    return ~~(e * 1e3 + (e < 0 ? -0.5 : 0.5)) / 1e3;
  },
  Wp = /[-+=.]*\d+[.e\-+]*\d*[e\-+]*\d*/gi,
  Hp = /[cLlsSaAhHvVtTqQ]/g,
  Gp = function (e) {
    var i = e.length,
      t = Vp,
      r;
    for (r = 1; r < i; r += 6) +e[r] < t && (t = +e[r]);
    return t;
  },
  Up = function (e, i, t) {
    !t && t !== 0 && (t = Math.max(+e[e.length - 1], +e[1]));
    var r = +e[0] * -1,
      n = -t,
      s = e.length,
      o = 1 / (+e[s - 2] + r),
      f =
        -i ||
        (Math.abs(+e[s - 1] - +e[1]) < 0.01 * (+e[s - 2] - +e[0])
          ? Gp(e) + n
          : +e[s - 1] + n),
      u;
    for (f ? (f = 1 / f) : (f = -o), u = 0; u < s; u += 2)
      ((e[u] = (+e[u] + r) * o), (e[u + 1] = (+e[u + 1] + n) * f));
  },
  qp = function a(e, i, t, r, n, s, o, f, u, c, h) {
    var p = (e + t) / 2,
      l = (i + r) / 2,
      _ = (t + n) / 2,
      d = (r + s) / 2,
      g = (n + o) / 2,
      m = (s + f) / 2,
      x = (p + _) / 2,
      v = (l + d) / 2,
      T = (_ + g) / 2,
      y = (d + m) / 2,
      k = (x + T) / 2,
      C = (v + y) / 2,
      P = o - e,
      E = f - i,
      D = Math.abs((t - o) * E - (r - f) * P),
      F = Math.abs((n - o) * E - (s - f) * P),
      R;
    return (
      c ||
        ((c = [
          { x: e, y: i },
          { x: o, y: f },
        ]),
        (h = 1)),
      c.splice(h || c.length - 1, 0, { x: k, y: C }),
      (D + F) * (D + F) > u * (P * P + E * E) &&
        ((R = c.length),
        a(e, i, p, l, x, v, k, C, u, c, h),
        a(k, C, T, y, g, m, o, f, u, c, h + 1 + (c.length - R))),
      c
    );
  },
  Lo = (function () {
    function a(i, t, r) {
      (fh || tf(), (this.id = i), this.setData(t, r));
    }
    var e = a.prototype;
    return (
      (e.setData = function (t, r) {
        ((r = r || {}), (t = t || "0,0,1,1"));
        var n = t.match(Wp),
          s = 1,
          o = [],
          f = [],
          u = r.precision || 1,
          c = u <= 1,
          h,
          p,
          l,
          _,
          d,
          g,
          m,
          x,
          v;
        if (
          ((this.data = t),
          (Hp.test(t) || (~t.indexOf("M") && t.indexOf("C") < 0)) &&
            (n = Yp(t)[0]),
          (h = n.length),
          h === 4)
        )
          (n.unshift(0, 0), n.push(1, 1), (h = 8));
        else if ((h - 2) % 6) throw "Invalid CustomEase";
        for (
          (+n[0] != 0 || +n[h - 2] != 1) && Up(n, r.height, r.originY),
            this.segment = n,
            _ = 2;
          _ < h;
          _ += 6
        )
          ((p = { x: +n[_ - 2], y: +n[_ - 1] }),
            (l = { x: +n[_ + 4], y: +n[_ + 5] }),
            o.push(p, l),
            qp(
              p.x,
              p.y,
              +n[_],
              +n[_ + 1],
              +n[_ + 2],
              +n[_ + 3],
              l.x,
              l.y,
              1 / (u * 2e5),
              o,
              o.length - 1,
            ));
        for (h = o.length, _ = 0; _ < h; _++)
          ((m = o[_]),
            (x = o[_ - 1] || m),
            (m.x > x.x || (x.y !== m.y && x.x === m.x) || m === x) && m.x <= 1
              ? ((x.cx = m.x - x.x),
                (x.cy = m.y - x.y),
                (x.n = m),
                (x.nx = m.x),
                c &&
                  _ > 1 &&
                  Math.abs(x.cy / x.cx - o[_ - 2].cy / o[_ - 2].cx) > 2 &&
                  (c = 0),
                x.cx < s &&
                  (x.cx
                    ? (s = x.cx)
                    : ((x.cx = 0.001),
                      _ === h - 1 &&
                        ((x.x -= 0.001), (s = Math.min(s, 0.001)), (c = 0)))))
              : (o.splice(_--, 1), h--));
        if (((h = (1 / s + 1) | 0), (d = 1 / h), (g = 0), (m = o[0]), c)) {
          for (_ = 0; _ < h; _++)
            ((v = _ * d),
              m.nx < v && (m = o[++g]),
              (p = m.y + ((v - m.x) / m.cx) * m.cy),
              (f[_] = { x: v, cx: d, y: p, cy: 0, nx: 9 }),
              _ && (f[_ - 1].cy = p - f[_ - 1].y));
          ((g = o[o.length - 1]),
            (f[h - 1].cy = g.y - p),
            (f[h - 1].cx = g.x - f[f.length - 1].x));
        } else {
          for (_ = 0; _ < h; _++) (m.nx < _ * d && (m = o[++g]), (f[_] = m));
          g < o.length - 1 && (f[_ - 1] = o[o.length - 2]);
        }
        return (
          (this.ease = function (T) {
            var y = f[(T * h) | 0] || f[h - 1];
            return (y.nx < T && (y = y.n), y.y + ((T - y.x) / y.cx) * y.cy);
          }),
          (this.ease.custom = this),
          this.id && Ft && Ft.registerEase(this.id, this.ease),
          this
        );
      }),
      (e.getSVGData = function (t) {
        return a.getSVGData(this, t);
      }),
      (a.create = function (t, r, n) {
        return new a(t, r, n).ease;
      }),
      (a.register = function (t) {
        ((Ft = t), tf());
      }),
      (a.get = function (t) {
        return Ft.parseEase(t);
      }),
      (a.getSVGData = function (t, r) {
        r = r || {};
        var n = r.width || 100,
          s = r.height || 100,
          o = r.x || 0,
          f = (r.y || 0) + s,
          u = Ft.utils.toArray(r.path)[0],
          c,
          h,
          p,
          l,
          _,
          d,
          g,
          m,
          x,
          v;
        if (
          (r.invert && ((s = -s), (f = 0)),
          typeof t == "string" && (t = Ft.parseEase(t)),
          t.custom && (t = t.custom),
          t instanceof a)
        )
          c = Xp(zp([t.segment], n, 0, 0, -s, o, f));
        else {
          for (
            c = [o, f],
              g = Math.max(5, (r.precision || 1) * 200),
              l = 1 / g,
              g += 2,
              m = 5 / g,
              x = Gs(o + l * n),
              v = Gs(f + t(l) * -s),
              h = (v - f) / (x - o),
              p = 2;
            p < g;
            p++
          )
            ((_ = Gs(o + p * l * n)),
              (d = Gs(f + t(p * l) * -s)),
              (Math.abs((d - v) / (_ - x) - h) > m || p === g - 1) &&
                (c.push(x, v), (h = (d - v) / (_ - x))),
              (x = _),
              (v = d));
          c = "M" + c.join(",");
        }
        return (u && u.setAttribute("d", c), c);
      }),
      a
    );
  })();
Lo.version = "3.13.0";
Lo.headless = !0;
ch() && Ft.registerPlugin(Lo);
export { Lo as C, Ro as D, Nl as F, uh as I, me as S, fp as a, kd as g };
