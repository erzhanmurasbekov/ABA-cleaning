/*! For license information please see calcOrder.bundle.js.LICENSE.txt */
!(function () {
  var t = {
      741: function (t, e, n) {
        var r, i;
        !(function (o, s) {
          "use strict";
          void 0 ===
            (i = "function" == typeof (r = s) ? r.call(e, n, e, t) : r) ||
            (t.exports = i);
        })(window, function () {
          "use strict";
          var t = (function () {
            var t = window.Element.prototype;
            if (t.matches) return "matches";
            if (t.matchesSelector) return "matchesSelector";
            for (
              var e = ["webkit", "moz", "ms", "o"], n = 0;
              n < e.length;
              n++
            ) {
              var r = e[n] + "MatchesSelector";
              if (t[r]) return r;
            }
          })();
          return function (e, n) {
            return e[t](n);
          };
        });
      },
      158: function (t, e, n) {
        var r, i;
        "undefined" != typeof window && window,
          void 0 ===
            (i =
              "function" ==
              typeof (r = function () {
                "use strict";
                function t() {}
                var e = t.prototype;
                return (
                  (e.on = function (t, e) {
                    if (t && e) {
                      var n = (this._events = this._events || {}),
                        r = (n[t] = n[t] || []);
                      return -1 == r.indexOf(e) && r.push(e), this;
                    }
                  }),
                  (e.once = function (t, e) {
                    if (t && e) {
                      this.on(t, e);
                      var n = (this._onceEvents = this._onceEvents || {});
                      return ((n[t] = n[t] || {})[e] = !0), this;
                    }
                  }),
                  (e.off = function (t, e) {
                    var n = this._events && this._events[t];
                    if (n && n.length) {
                      var r = n.indexOf(e);
                      return -1 != r && n.splice(r, 1), this;
                    }
                  }),
                  (e.emitEvent = function (t, e) {
                    var n = this._events && this._events[t];
                    if (n && n.length) {
                      (n = n.slice(0)), (e = e || []);
                      for (
                        var r = this._onceEvents && this._onceEvents[t], i = 0;
                        i < n.length;
                        i++
                      ) {
                        var o = n[i];
                        r && r[o] && (this.off(t, o), delete r[o]),
                          o.apply(this, e);
                      }
                      return this;
                    }
                  }),
                  (e.allOff = function () {
                    delete this._events, delete this._onceEvents;
                  }),
                  t
                );
              })
                ? r.call(e, n, e, t)
                : r) || (t.exports = i);
      },
      47: function (t, e, n) {
        var r, i;
        !(function (o, s) {
          (r = [n(741)]),
            (i = function (t) {
              return (function (t, e) {
                "use strict";
                var n = {
                    extend: function (t, e) {
                      for (var n in e) t[n] = e[n];
                      return t;
                    },
                    modulo: function (t, e) {
                      return ((t % e) + e) % e;
                    },
                  },
                  r = Array.prototype.slice;
                (n.makeArray = function (t) {
                  return Array.isArray(t)
                    ? t
                    : null == t
                    ? []
                    : "object" == typeof t && "number" == typeof t.length
                    ? r.call(t)
                    : [t];
                }),
                  (n.removeFrom = function (t, e) {
                    var n = t.indexOf(e);
                    -1 != n && t.splice(n, 1);
                  }),
                  (n.getParent = function (t, n) {
                    for (; t.parentNode && t != document.body; )
                      if (((t = t.parentNode), e(t, n))) return t;
                  }),
                  (n.getQueryElement = function (t) {
                    return "string" == typeof t ? document.querySelector(t) : t;
                  }),
                  (n.handleEvent = function (t) {
                    var e = "on" + t.type;
                    this[e] && this[e](t);
                  }),
                  (n.filterFindElements = function (t, r) {
                    t = n.makeArray(t);
                    var i = [];
                    return (
                      t.forEach(function (t) {
                        if (t instanceof HTMLElement)
                          if (r) {
                            e(t, r) && i.push(t);
                            for (
                              var n = t.querySelectorAll(r), o = 0;
                              o < n.length;
                              o++
                            )
                              i.push(n[o]);
                          } else i.push(t);
                      }),
                      i
                    );
                  }),
                  (n.debounceMethod = function (t, e, n) {
                    n = n || 100;
                    var r = t.prototype[e],
                      i = e + "Timeout";
                    t.prototype[e] = function () {
                      var t = this[i];
                      clearTimeout(t);
                      var e = arguments,
                        o = this;
                      this[i] = setTimeout(function () {
                        r.apply(o, e), delete o[i];
                      }, n);
                    };
                  }),
                  (n.docReady = function (t) {
                    var e = document.readyState;
                    "complete" == e || "interactive" == e
                      ? setTimeout(t)
                      : document.addEventListener("DOMContentLoaded", t);
                  }),
                  (n.toDashed = function (t) {
                    return t
                      .replace(/(.)([A-Z])/g, function (t, e, n) {
                        return e + "-" + n;
                      })
                      .toLowerCase();
                  });
                var i = t.console;
                return (
                  (n.htmlInit = function (e, r) {
                    n.docReady(function () {
                      var o = n.toDashed(r),
                        s = "data-" + o,
                        a = document.querySelectorAll("[" + s + "]"),
                        u = document.querySelectorAll(".js-" + o),
                        c = n.makeArray(a).concat(n.makeArray(u)),
                        l = s + "-options",
                        d = t.jQuery;
                      c.forEach(function (t) {
                        var n,
                          o = t.getAttribute(s) || t.getAttribute(l);
                        try {
                          n = o && JSON.parse(o);
                        } catch (e) {
                          return void (
                            i &&
                            i.error(
                              "Error parsing " +
                                s +
                                " on " +
                                t.className +
                                ": " +
                                e
                            )
                          );
                        }
                        var a = new e(t, n);
                        d && d.data(t, r, a);
                      });
                    });
                  }),
                  n
                );
              })(o, t);
            }.apply(e, r)),
            void 0 === i || (t.exports = i);
        })(window);
      },
      131: function (t, e, n) {
        var r, i;
        window,
          void 0 ===
            (i =
              "function" ==
              typeof (r = function () {
                "use strict";
                function t(t) {
                  var e = parseFloat(t);
                  return -1 == t.indexOf("%") && !isNaN(e) && e;
                }
                var e =
                    "undefined" == typeof console
                      ? function () {}
                      : function (t) {
                          console.error(t);
                        },
                  n = [
                    "paddingLeft",
                    "paddingRight",
                    "paddingTop",
                    "paddingBottom",
                    "marginLeft",
                    "marginRight",
                    "marginTop",
                    "marginBottom",
                    "borderLeftWidth",
                    "borderRightWidth",
                    "borderTopWidth",
                    "borderBottomWidth",
                  ],
                  r = n.length;
                function i(t) {
                  var n = getComputedStyle(t);
                  return (
                    n ||
                      e(
                        "Style returned " +
                          n +
                          ". Are you running this code in a hidden iframe on Firefox? See https://bit.ly/getsizebug1"
                      ),
                    n
                  );
                }
                var o,
                  s = !1;
                function a(e) {
                  if (
                    ((function () {
                      if (!s) {
                        s = !0;
                        var e = document.createElement("div");
                        (e.style.width = "200px"),
                          (e.style.padding = "1px 2px 3px 4px"),
                          (e.style.borderStyle = "solid"),
                          (e.style.borderWidth = "1px 2px 3px 4px"),
                          (e.style.boxSizing = "border-box");
                        var n = document.body || document.documentElement;
                        n.appendChild(e);
                        var r = i(e);
                        (o = 200 == Math.round(t(r.width))),
                          (a.isBoxSizeOuter = o),
                          n.removeChild(e);
                      }
                    })(),
                    "string" == typeof e && (e = document.querySelector(e)),
                    e && "object" == typeof e && e.nodeType)
                  ) {
                    var u = i(e);
                    if ("none" == u.display)
                      return (function () {
                        for (
                          var t = {
                              width: 0,
                              height: 0,
                              innerWidth: 0,
                              innerHeight: 0,
                              outerWidth: 0,
                              outerHeight: 0,
                            },
                            e = 0;
                          e < r;
                          e++
                        )
                          t[n[e]] = 0;
                        return t;
                      })();
                    var c = {};
                    (c.width = e.offsetWidth), (c.height = e.offsetHeight);
                    for (
                      var l = (c.isBorderBox = "border-box" == u.boxSizing),
                        d = 0;
                      d < r;
                      d++
                    ) {
                      var f = n[d],
                        h = u[f],
                        p = parseFloat(h);
                      c[f] = isNaN(p) ? 0 : p;
                    }
                    var m = c.paddingLeft + c.paddingRight,
                      g = c.paddingTop + c.paddingBottom,
                      v = c.marginLeft + c.marginRight,
                      y = c.marginTop + c.marginBottom,
                      _ = c.borderLeftWidth + c.borderRightWidth,
                      x = c.borderTopWidth + c.borderBottomWidth,
                      b = l && o,
                      w = t(u.width);
                    !1 !== w && (c.width = w + (b ? 0 : m + _));
                    var T = t(u.height);
                    return (
                      !1 !== T && (c.height = T + (b ? 0 : g + x)),
                      (c.innerWidth = c.width - (m + _)),
                      (c.innerHeight = c.height - (g + x)),
                      (c.outerWidth = c.width + v),
                      (c.outerHeight = c.height + y),
                      c
                    );
                  }
                }
                return a;
              })
                ? r.call(e, n, e, t)
                : r) || (t.exports = i);
      },
      755: function (t, e) {
        var n;
        !(function (e, n) {
          "use strict";
          "object" == typeof t.exports
            ? (t.exports = e.document
                ? n(e, !0)
                : function (t) {
                    if (!t.document)
                      throw new Error(
                        "jQuery requires a window with a document"
                      );
                    return n(t);
                  })
            : n(e);
        })("undefined" != typeof window ? window : this, function (r, i) {
          "use strict";
          var o = [],
            s = Object.getPrototypeOf,
            a = o.slice,
            u = o.flat
              ? function (t) {
                  return o.flat.call(t);
                }
              : function (t) {
                  return o.concat.apply([], t);
                },
            c = o.push,
            l = o.indexOf,
            d = {},
            f = d.toString,
            h = d.hasOwnProperty,
            p = h.toString,
            m = p.call(Object),
            g = {},
            v = function (t) {
              return (
                "function" == typeof t &&
                "number" != typeof t.nodeType &&
                "function" != typeof t.item
              );
            },
            y = function (t) {
              return null != t && t === t.window;
            },
            _ = r.document,
            x = { type: !0, src: !0, nonce: !0, noModule: !0 };
          function b(t, e, n) {
            var r,
              i,
              o = (n = n || _).createElement("script");
            if (((o.text = t), e))
              for (r in x)
                (i = e[r] || (e.getAttribute && e.getAttribute(r))) &&
                  o.setAttribute(r, i);
            n.head.appendChild(o).parentNode.removeChild(o);
          }
          function w(t) {
            return null == t
              ? t + ""
              : "object" == typeof t || "function" == typeof t
              ? d[f.call(t)] || "object"
              : typeof t;
          }
          var T = "3.7.1",
            S = /HTML$/i,
            E = function (t, e) {
              return new E.fn.init(t, e);
            };
          function k(t) {
            var e = !!t && "length" in t && t.length,
              n = w(t);
            return (
              !v(t) &&
              !y(t) &&
              ("array" === n ||
                0 === e ||
                ("number" == typeof e && e > 0 && e - 1 in t))
            );
          }
          function C(t, e) {
            return t.nodeName && t.nodeName.toLowerCase() === e.toLowerCase();
          }
          (E.fn = E.prototype =
            {
              jquery: T,
              constructor: E,
              length: 0,
              toArray: function () {
                return a.call(this);
              },
              get: function (t) {
                return null == t
                  ? a.call(this)
                  : t < 0
                  ? this[t + this.length]
                  : this[t];
              },
              pushStack: function (t) {
                var e = E.merge(this.constructor(), t);
                return (e.prevObject = this), e;
              },
              each: function (t) {
                return E.each(this, t);
              },
              map: function (t) {
                return this.pushStack(
                  E.map(this, function (e, n) {
                    return t.call(e, n, e);
                  })
                );
              },
              slice: function () {
                return this.pushStack(a.apply(this, arguments));
              },
              first: function () {
                return this.eq(0);
              },
              last: function () {
                return this.eq(-1);
              },
              even: function () {
                return this.pushStack(
                  E.grep(this, function (t, e) {
                    return (e + 1) % 2;
                  })
                );
              },
              odd: function () {
                return this.pushStack(
                  E.grep(this, function (t, e) {
                    return e % 2;
                  })
                );
              },
              eq: function (t) {
                var e = this.length,
                  n = +t + (t < 0 ? e : 0);
                return this.pushStack(n >= 0 && n < e ? [this[n]] : []);
              },
              end: function () {
                return this.prevObject || this.constructor();
              },
              push: c,
              sort: o.sort,
              splice: o.splice,
            }),
            (E.extend = E.fn.extend =
              function () {
                var t,
                  e,
                  n,
                  r,
                  i,
                  o,
                  s = arguments[0] || {},
                  a = 1,
                  u = arguments.length,
                  c = !1;
                for (
                  "boolean" == typeof s &&
                    ((c = s), (s = arguments[a] || {}), a++),
                    "object" == typeof s || v(s) || (s = {}),
                    a === u && ((s = this), a--);
                  a < u;
                  a++
                )
                  if (null != (t = arguments[a]))
                    for (e in t)
                      (r = t[e]),
                        "__proto__" !== e &&
                          s !== r &&
                          (c &&
                          r &&
                          (E.isPlainObject(r) || (i = Array.isArray(r)))
                            ? ((n = s[e]),
                              (o =
                                i && !Array.isArray(n)
                                  ? []
                                  : i || E.isPlainObject(n)
                                  ? n
                                  : {}),
                              (i = !1),
                              (s[e] = E.extend(c, o, r)))
                            : void 0 !== r && (s[e] = r));
                return s;
              }),
            E.extend({
              expando: "jQuery" + (T + Math.random()).replace(/\D/g, ""),
              isReady: !0,
              error: function (t) {
                throw new Error(t);
              },
              noop: function () {},
              isPlainObject: function (t) {
                var e, n;
                return !(
                  !t ||
                  "[object Object]" !== f.call(t) ||
                  ((e = s(t)) &&
                    ("function" !=
                      typeof (n = h.call(e, "constructor") && e.constructor) ||
                      p.call(n) !== m))
                );
              },
              isEmptyObject: function (t) {
                var e;
                for (e in t) return !1;
                return !0;
              },
              globalEval: function (t, e, n) {
                b(t, { nonce: e && e.nonce }, n);
              },
              each: function (t, e) {
                var n,
                  r = 0;
                if (k(t))
                  for (
                    n = t.length;
                    r < n && !1 !== e.call(t[r], r, t[r]);
                    r++
                  );
                else for (r in t) if (!1 === e.call(t[r], r, t[r])) break;
                return t;
              },
              text: function (t) {
                var e,
                  n = "",
                  r = 0,
                  i = t.nodeType;
                if (!i) for (; (e = t[r++]); ) n += E.text(e);
                return 1 === i || 11 === i
                  ? t.textContent
                  : 9 === i
                  ? t.documentElement.textContent
                  : 3 === i || 4 === i
                  ? t.nodeValue
                  : n;
              },
              makeArray: function (t, e) {
                var n = e || [];
                return (
                  null != t &&
                    (k(Object(t))
                      ? E.merge(n, "string" == typeof t ? [t] : t)
                      : c.call(n, t)),
                  n
                );
              },
              inArray: function (t, e, n) {
                return null == e ? -1 : l.call(e, t, n);
              },
              isXMLDoc: function (t) {
                var e = t && t.namespaceURI,
                  n = t && (t.ownerDocument || t).documentElement;
                return !S.test(e || (n && n.nodeName) || "HTML");
              },
              merge: function (t, e) {
                for (var n = +e.length, r = 0, i = t.length; r < n; r++)
                  t[i++] = e[r];
                return (t.length = i), t;
              },
              grep: function (t, e, n) {
                for (var r = [], i = 0, o = t.length, s = !n; i < o; i++)
                  !e(t[i], i) !== s && r.push(t[i]);
                return r;
              },
              map: function (t, e, n) {
                var r,
                  i,
                  o = 0,
                  s = [];
                if (k(t))
                  for (r = t.length; o < r; o++)
                    null != (i = e(t[o], o, n)) && s.push(i);
                else for (o in t) null != (i = e(t[o], o, n)) && s.push(i);
                return u(s);
              },
              guid: 1,
              support: g,
            }),
            "function" == typeof Symbol &&
              (E.fn[Symbol.iterator] = o[Symbol.iterator]),
            E.each(
              "Boolean Number String Function Array Date RegExp Object Error Symbol".split(
                " "
              ),
              function (t, e) {
                d["[object " + e + "]"] = e.toLowerCase();
              }
            );
          var L = o.pop,
            A = o.sort,
            D = o.splice,
            q = "[\\x20\\t\\r\\n\\f]",
            O = new RegExp(
              "^" + q + "+|((?:^|[^\\\\])(?:\\\\.)*)" + q + "+$",
              "g"
            );
          E.contains = function (t, e) {
            var n = e && e.parentNode;
            return (
              t === n ||
              !(
                !n ||
                1 !== n.nodeType ||
                !(t.contains
                  ? t.contains(n)
                  : t.compareDocumentPosition &&
                    16 & t.compareDocumentPosition(n))
              )
            );
          };
          var M = /([\0-\x1f\x7f]|^-?\d)|^-$|[^\x80-\uFFFF\w-]/g;
          function P(t, e) {
            return e
              ? "\0" === t
                ? "�"
                : t.slice(0, -1) +
                  "\\" +
                  t.charCodeAt(t.length - 1).toString(16) +
                  " "
              : "\\" + t;
          }
          E.escapeSelector = function (t) {
            return (t + "").replace(M, P);
          };
          var R = _,
            N = c;
          !(function () {
            var t,
              e,
              n,
              i,
              s,
              u,
              c,
              d,
              f,
              p,
              m = N,
              v = E.expando,
              y = 0,
              _ = 0,
              x = tt(),
              b = tt(),
              w = tt(),
              T = tt(),
              S = function (t, e) {
                return t === e && (s = !0), 0;
              },
              k =
                "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
              M =
                "(?:\\\\[\\da-fA-F]{1,6}" +
                q +
                "?|\\\\[^\\r\\n\\f]|[\\w-]|[^\0-\\x7f])+",
              P =
                "\\[" +
                q +
                "*(" +
                M +
                ")(?:" +
                q +
                "*([*^$|!~]?=)" +
                q +
                "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" +
                M +
                "))|)" +
                q +
                "*\\]",
              I =
                ":(" +
                M +
                ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" +
                P +
                ")*)|.*)\\)|)",
              j = new RegExp(q + "+", "g"),
              H = new RegExp("^" + q + "*," + q + "*"),
              z = new RegExp("^" + q + "*([>+~]|" + q + ")" + q + "*"),
              F = new RegExp(q + "|>"),
              B = new RegExp(I),
              W = new RegExp("^" + M + "$"),
              $ = {
                ID: new RegExp("^#(" + M + ")"),
                CLASS: new RegExp("^\\.(" + M + ")"),
                TAG: new RegExp("^(" + M + "|[*])"),
                ATTR: new RegExp("^" + P),
                PSEUDO: new RegExp("^" + I),
                CHILD: new RegExp(
                  "^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" +
                    q +
                    "*(even|odd|(([+-]|)(\\d*)n|)" +
                    q +
                    "*(?:([+-]|)" +
                    q +
                    "*(\\d+)|))" +
                    q +
                    "*\\)|)",
                  "i"
                ),
                bool: new RegExp("^(?:" + k + ")$", "i"),
                needsContext: new RegExp(
                  "^" +
                    q +
                    "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" +
                    q +
                    "*((?:-\\d)?\\d*)" +
                    q +
                    "*\\)|)(?=[^-]|$)",
                  "i"
                ),
              },
              Y = /^(?:input|select|textarea|button)$/i,
              G = /^h\d$/i,
              U = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
              X = /[+~]/,
              V = new RegExp(
                "\\\\[\\da-fA-F]{1,6}" + q + "?|\\\\([^\\r\\n\\f])",
                "g"
              ),
              Q = function (t, e) {
                var n = "0x" + t.slice(1) - 65536;
                return (
                  e ||
                  (n < 0
                    ? String.fromCharCode(n + 65536)
                    : String.fromCharCode(
                        (n >> 10) | 55296,
                        (1023 & n) | 56320
                      ))
                );
              },
              K = function () {
                ut();
              },
              J = ft(
                function (t) {
                  return !0 === t.disabled && C(t, "fieldset");
                },
                { dir: "parentNode", next: "legend" }
              );
            try {
              m.apply((o = a.call(R.childNodes)), R.childNodes),
                o[R.childNodes.length].nodeType;
            } catch (t) {
              m = {
                apply: function (t, e) {
                  N.apply(t, a.call(e));
                },
                call: function (t) {
                  N.apply(t, a.call(arguments, 1));
                },
              };
            }
            function Z(t, e, n, r) {
              var i,
                o,
                s,
                a,
                c,
                l,
                h,
                p = e && e.ownerDocument,
                y = e ? e.nodeType : 9;
              if (
                ((n = n || []),
                "string" != typeof t || !t || (1 !== y && 9 !== y && 11 !== y))
              )
                return n;
              if (!r && (ut(e), (e = e || u), d)) {
                if (11 !== y && (c = U.exec(t)))
                  if ((i = c[1])) {
                    if (9 === y) {
                      if (!(s = e.getElementById(i))) return n;
                      if (s.id === i) return m.call(n, s), n;
                    } else if (
                      p &&
                      (s = p.getElementById(i)) &&
                      Z.contains(e, s) &&
                      s.id === i
                    )
                      return m.call(n, s), n;
                  } else {
                    if (c[2]) return m.apply(n, e.getElementsByTagName(t)), n;
                    if ((i = c[3]) && e.getElementsByClassName)
                      return m.apply(n, e.getElementsByClassName(i)), n;
                  }
                if (!(T[t + " "] || (f && f.test(t)))) {
                  if (((h = t), (p = e), 1 === y && (F.test(t) || z.test(t)))) {
                    for (
                      ((p = (X.test(t) && at(e.parentNode)) || e) == e &&
                        g.scope) ||
                        ((a = e.getAttribute("id"))
                          ? (a = E.escapeSelector(a))
                          : e.setAttribute("id", (a = v))),
                        o = (l = lt(t)).length;
                      o--;

                    )
                      l[o] = (a ? "#" + a : ":scope") + " " + dt(l[o]);
                    h = l.join(",");
                  }
                  try {
                    return m.apply(n, p.querySelectorAll(h)), n;
                  } catch (e) {
                    T(t, !0);
                  } finally {
                    a === v && e.removeAttribute("id");
                  }
                }
              }
              return yt(t.replace(O, "$1"), e, n, r);
            }
            function tt() {
              var t = [];
              return function n(r, i) {
                return (
                  t.push(r + " ") > e.cacheLength && delete n[t.shift()],
                  (n[r + " "] = i)
                );
              };
            }
            function et(t) {
              return (t[v] = !0), t;
            }
            function nt(t) {
              var e = u.createElement("fieldset");
              try {
                return !!t(e);
              } catch (t) {
                return !1;
              } finally {
                e.parentNode && e.parentNode.removeChild(e), (e = null);
              }
            }
            function rt(t) {
              return function (e) {
                return C(e, "input") && e.type === t;
              };
            }
            function it(t) {
              return function (e) {
                return (C(e, "input") || C(e, "button")) && e.type === t;
              };
            }
            function ot(t) {
              return function (e) {
                return "form" in e
                  ? e.parentNode && !1 === e.disabled
                    ? "label" in e
                      ? "label" in e.parentNode
                        ? e.parentNode.disabled === t
                        : e.disabled === t
                      : e.isDisabled === t ||
                        (e.isDisabled !== !t && J(e) === t)
                    : e.disabled === t
                  : "label" in e && e.disabled === t;
              };
            }
            function st(t) {
              return et(function (e) {
                return (
                  (e = +e),
                  et(function (n, r) {
                    for (var i, o = t([], n.length, e), s = o.length; s--; )
                      n[(i = o[s])] && (n[i] = !(r[i] = n[i]));
                  })
                );
              });
            }
            function at(t) {
              return t && void 0 !== t.getElementsByTagName && t;
            }
            function ut(t) {
              var n,
                r = t ? t.ownerDocument || t : R;
              return r != u && 9 === r.nodeType && r.documentElement
                ? ((c = (u = r).documentElement),
                  (d = !E.isXMLDoc(u)),
                  (p =
                    c.matches ||
                    c.webkitMatchesSelector ||
                    c.msMatchesSelector),
                  c.msMatchesSelector &&
                    R != u &&
                    (n = u.defaultView) &&
                    n.top !== n &&
                    n.addEventListener("unload", K),
                  (g.getById = nt(function (t) {
                    return (
                      (c.appendChild(t).id = E.expando),
                      !u.getElementsByName ||
                        !u.getElementsByName(E.expando).length
                    );
                  })),
                  (g.disconnectedMatch = nt(function (t) {
                    return p.call(t, "*");
                  })),
                  (g.scope = nt(function () {
                    return u.querySelectorAll(":scope");
                  })),
                  (g.cssHas = nt(function () {
                    try {
                      return u.querySelector(":has(*,:jqfake)"), !1;
                    } catch (t) {
                      return !0;
                    }
                  })),
                  g.getById
                    ? ((e.filter.ID = function (t) {
                        var e = t.replace(V, Q);
                        return function (t) {
                          return t.getAttribute("id") === e;
                        };
                      }),
                      (e.find.ID = function (t, e) {
                        if (void 0 !== e.getElementById && d) {
                          var n = e.getElementById(t);
                          return n ? [n] : [];
                        }
                      }))
                    : ((e.filter.ID = function (t) {
                        var e = t.replace(V, Q);
                        return function (t) {
                          var n =
                            void 0 !== t.getAttributeNode &&
                            t.getAttributeNode("id");
                          return n && n.value === e;
                        };
                      }),
                      (e.find.ID = function (t, e) {
                        if (void 0 !== e.getElementById && d) {
                          var n,
                            r,
                            i,
                            o = e.getElementById(t);
                          if (o) {
                            if ((n = o.getAttributeNode("id")) && n.value === t)
                              return [o];
                            for (
                              i = e.getElementsByName(t), r = 0;
                              (o = i[r++]);

                            )
                              if (
                                (n = o.getAttributeNode("id")) &&
                                n.value === t
                              )
                                return [o];
                          }
                          return [];
                        }
                      })),
                  (e.find.TAG = function (t, e) {
                    return void 0 !== e.getElementsByTagName
                      ? e.getElementsByTagName(t)
                      : e.querySelectorAll(t);
                  }),
                  (e.find.CLASS = function (t, e) {
                    if (void 0 !== e.getElementsByClassName && d)
                      return e.getElementsByClassName(t);
                  }),
                  (f = []),
                  nt(function (t) {
                    var e;
                    (c.appendChild(t).innerHTML =
                      "<a id='" +
                      v +
                      "' href='' disabled='disabled'></a><select id='" +
                      v +
                      "-\r\\' disabled='disabled'><option selected=''></option></select>"),
                      t.querySelectorAll("[selected]").length ||
                        f.push("\\[" + q + "*(?:value|" + k + ")"),
                      t.querySelectorAll("[id~=" + v + "-]").length ||
                        f.push("~="),
                      t.querySelectorAll("a#" + v + "+*").length ||
                        f.push(".#.+[+~]"),
                      t.querySelectorAll(":checked").length ||
                        f.push(":checked"),
                      (e = u.createElement("input")).setAttribute(
                        "type",
                        "hidden"
                      ),
                      t.appendChild(e).setAttribute("name", "D"),
                      (c.appendChild(t).disabled = !0),
                      2 !== t.querySelectorAll(":disabled").length &&
                        f.push(":enabled", ":disabled"),
                      (e = u.createElement("input")).setAttribute("name", ""),
                      t.appendChild(e),
                      t.querySelectorAll("[name='']").length ||
                        f.push(
                          "\\[" + q + "*name" + q + "*=" + q + "*(?:''|\"\")"
                        );
                  }),
                  g.cssHas || f.push(":has"),
                  (f = f.length && new RegExp(f.join("|"))),
                  (S = function (t, e) {
                    if (t === e) return (s = !0), 0;
                    var n =
                      !t.compareDocumentPosition - !e.compareDocumentPosition;
                    return (
                      n ||
                      (1 &
                        (n =
                          (t.ownerDocument || t) == (e.ownerDocument || e)
                            ? t.compareDocumentPosition(e)
                            : 1) ||
                      (!g.sortDetached && e.compareDocumentPosition(t) === n)
                        ? t === u || (t.ownerDocument == R && Z.contains(R, t))
                          ? -1
                          : e === u ||
                            (e.ownerDocument == R && Z.contains(R, e))
                          ? 1
                          : i
                          ? l.call(i, t) - l.call(i, e)
                          : 0
                        : 4 & n
                        ? -1
                        : 1)
                    );
                  }),
                  u)
                : u;
            }
            for (t in ((Z.matches = function (t, e) {
              return Z(t, null, null, e);
            }),
            (Z.matchesSelector = function (t, e) {
              if ((ut(t), d && !T[e + " "] && (!f || !f.test(e))))
                try {
                  var n = p.call(t, e);
                  if (
                    n ||
                    g.disconnectedMatch ||
                    (t.document && 11 !== t.document.nodeType)
                  )
                    return n;
                } catch (t) {
                  T(e, !0);
                }
              return Z(e, u, null, [t]).length > 0;
            }),
            (Z.contains = function (t, e) {
              return (t.ownerDocument || t) != u && ut(t), E.contains(t, e);
            }),
            (Z.attr = function (t, n) {
              (t.ownerDocument || t) != u && ut(t);
              var r = e.attrHandle[n.toLowerCase()],
                i =
                  r && h.call(e.attrHandle, n.toLowerCase())
                    ? r(t, n, !d)
                    : void 0;
              return void 0 !== i ? i : t.getAttribute(n);
            }),
            (Z.error = function (t) {
              throw new Error("Syntax error, unrecognized expression: " + t);
            }),
            (E.uniqueSort = function (t) {
              var e,
                n = [],
                r = 0,
                o = 0;
              if (
                ((s = !g.sortStable),
                (i = !g.sortStable && a.call(t, 0)),
                A.call(t, S),
                s)
              ) {
                for (; (e = t[o++]); ) e === t[o] && (r = n.push(o));
                for (; r--; ) D.call(t, n[r], 1);
              }
              return (i = null), t;
            }),
            (E.fn.uniqueSort = function () {
              return this.pushStack(E.uniqueSort(a.apply(this)));
            }),
            (e = E.expr =
              {
                cacheLength: 50,
                createPseudo: et,
                match: $,
                attrHandle: {},
                find: {},
                relative: {
                  ">": { dir: "parentNode", first: !0 },
                  " ": { dir: "parentNode" },
                  "+": { dir: "previousSibling", first: !0 },
                  "~": { dir: "previousSibling" },
                },
                preFilter: {
                  ATTR: function (t) {
                    return (
                      (t[1] = t[1].replace(V, Q)),
                      (t[3] = (t[3] || t[4] || t[5] || "").replace(V, Q)),
                      "~=" === t[2] && (t[3] = " " + t[3] + " "),
                      t.slice(0, 4)
                    );
                  },
                  CHILD: function (t) {
                    return (
                      (t[1] = t[1].toLowerCase()),
                      "nth" === t[1].slice(0, 3)
                        ? (t[3] || Z.error(t[0]),
                          (t[4] = +(t[4]
                            ? t[5] + (t[6] || 1)
                            : 2 * ("even" === t[3] || "odd" === t[3]))),
                          (t[5] = +(t[7] + t[8] || "odd" === t[3])))
                        : t[3] && Z.error(t[0]),
                      t
                    );
                  },
                  PSEUDO: function (t) {
                    var e,
                      n = !t[6] && t[2];
                    return $.CHILD.test(t[0])
                      ? null
                      : (t[3]
                          ? (t[2] = t[4] || t[5] || "")
                          : n &&
                            B.test(n) &&
                            (e = lt(n, !0)) &&
                            (e = n.indexOf(")", n.length - e) - n.length) &&
                            ((t[0] = t[0].slice(0, e)), (t[2] = n.slice(0, e))),
                        t.slice(0, 3));
                  },
                },
                filter: {
                  TAG: function (t) {
                    var e = t.replace(V, Q).toLowerCase();
                    return "*" === t
                      ? function () {
                          return !0;
                        }
                      : function (t) {
                          return C(t, e);
                        };
                  },
                  CLASS: function (t) {
                    var e = x[t + " "];
                    return (
                      e ||
                      ((e = new RegExp(
                        "(^|" + q + ")" + t + "(" + q + "|$)"
                      )) &&
                        x(t, function (t) {
                          return e.test(
                            ("string" == typeof t.className && t.className) ||
                              (void 0 !== t.getAttribute &&
                                t.getAttribute("class")) ||
                              ""
                          );
                        }))
                    );
                  },
                  ATTR: function (t, e, n) {
                    return function (r) {
                      var i = Z.attr(r, t);
                      return null == i
                        ? "!=" === e
                        : !e ||
                            ((i += ""),
                            "=" === e
                              ? i === n
                              : "!=" === e
                              ? i !== n
                              : "^=" === e
                              ? n && 0 === i.indexOf(n)
                              : "*=" === e
                              ? n && i.indexOf(n) > -1
                              : "$=" === e
                              ? n && i.slice(-n.length) === n
                              : "~=" === e
                              ? (" " + i.replace(j, " ") + " ").indexOf(n) > -1
                              : "|=" === e &&
                                (i === n ||
                                  i.slice(0, n.length + 1) === n + "-"));
                    };
                  },
                  CHILD: function (t, e, n, r, i) {
                    var o = "nth" !== t.slice(0, 3),
                      s = "last" !== t.slice(-4),
                      a = "of-type" === e;
                    return 1 === r && 0 === i
                      ? function (t) {
                          return !!t.parentNode;
                        }
                      : function (e, n, u) {
                          var c,
                            l,
                            d,
                            f,
                            h,
                            p = o !== s ? "nextSibling" : "previousSibling",
                            m = e.parentNode,
                            g = a && e.nodeName.toLowerCase(),
                            _ = !u && !a,
                            x = !1;
                          if (m) {
                            if (o) {
                              for (; p; ) {
                                for (d = e; (d = d[p]); )
                                  if (a ? C(d, g) : 1 === d.nodeType) return !1;
                                h = p = "only" === t && !h && "nextSibling";
                              }
                              return !0;
                            }
                            if (
                              ((h = [s ? m.firstChild : m.lastChild]), s && _)
                            ) {
                              for (
                                x =
                                  (f =
                                    (c =
                                      (l = m[v] || (m[v] = {}))[t] || [])[0] ===
                                      y && c[1]) && c[2],
                                  d = f && m.childNodes[f];
                                (d =
                                  (++f && d && d[p]) || (x = f = 0) || h.pop());

                              )
                                if (1 === d.nodeType && ++x && d === e) {
                                  l[t] = [y, f, x];
                                  break;
                                }
                            } else if (
                              (_ &&
                                (x = f =
                                  (c =
                                    (l = e[v] || (e[v] = {}))[t] || [])[0] ===
                                    y && c[1]),
                              !1 === x)
                            )
                              for (
                                ;
                                (d =
                                  (++f && d && d[p]) ||
                                  (x = f = 0) ||
                                  h.pop()) &&
                                (!(a ? C(d, g) : 1 === d.nodeType) ||
                                  !++x ||
                                  (_ && ((l = d[v] || (d[v] = {}))[t] = [y, x]),
                                  d !== e));

                              );
                            return (x -= i) === r || (x % r == 0 && x / r >= 0);
                          }
                        };
                  },
                  PSEUDO: function (t, n) {
                    var r,
                      i =
                        e.pseudos[t] ||
                        e.setFilters[t.toLowerCase()] ||
                        Z.error("unsupported pseudo: " + t);
                    return i[v]
                      ? i(n)
                      : i.length > 1
                      ? ((r = [t, t, "", n]),
                        e.setFilters.hasOwnProperty(t.toLowerCase())
                          ? et(function (t, e) {
                              for (var r, o = i(t, n), s = o.length; s--; )
                                t[(r = l.call(t, o[s]))] = !(e[r] = o[s]);
                            })
                          : function (t) {
                              return i(t, 0, r);
                            })
                      : i;
                  },
                },
                pseudos: {
                  not: et(function (t) {
                    var e = [],
                      n = [],
                      r = vt(t.replace(O, "$1"));
                    return r[v]
                      ? et(function (t, e, n, i) {
                          for (
                            var o, s = r(t, null, i, []), a = t.length;
                            a--;

                          )
                            (o = s[a]) && (t[a] = !(e[a] = o));
                        })
                      : function (t, i, o) {
                          return (
                            (e[0] = t),
                            r(e, null, o, n),
                            (e[0] = null),
                            !n.pop()
                          );
                        };
                  }),
                  has: et(function (t) {
                    return function (e) {
                      return Z(t, e).length > 0;
                    };
                  }),
                  contains: et(function (t) {
                    return (
                      (t = t.replace(V, Q)),
                      function (e) {
                        return (e.textContent || E.text(e)).indexOf(t) > -1;
                      }
                    );
                  }),
                  lang: et(function (t) {
                    return (
                      W.test(t || "") || Z.error("unsupported lang: " + t),
                      (t = t.replace(V, Q).toLowerCase()),
                      function (e) {
                        var n;
                        do {
                          if (
                            (n = d
                              ? e.lang
                              : e.getAttribute("xml:lang") ||
                                e.getAttribute("lang"))
                          )
                            return (
                              (n = n.toLowerCase()) === t ||
                              0 === n.indexOf(t + "-")
                            );
                        } while ((e = e.parentNode) && 1 === e.nodeType);
                        return !1;
                      }
                    );
                  }),
                  target: function (t) {
                    var e = r.location && r.location.hash;
                    return e && e.slice(1) === t.id;
                  },
                  root: function (t) {
                    return t === c;
                  },
                  focus: function (t) {
                    return (
                      t ===
                        (function () {
                          try {
                            return u.activeElement;
                          } catch (t) {}
                        })() &&
                      u.hasFocus() &&
                      !!(t.type || t.href || ~t.tabIndex)
                    );
                  },
                  enabled: ot(!1),
                  disabled: ot(!0),
                  checked: function (t) {
                    return (
                      (C(t, "input") && !!t.checked) ||
                      (C(t, "option") && !!t.selected)
                    );
                  },
                  selected: function (t) {
                    return (
                      t.parentNode && t.parentNode.selectedIndex,
                      !0 === t.selected
                    );
                  },
                  empty: function (t) {
                    for (t = t.firstChild; t; t = t.nextSibling)
                      if (t.nodeType < 6) return !1;
                    return !0;
                  },
                  parent: function (t) {
                    return !e.pseudos.empty(t);
                  },
                  header: function (t) {
                    return G.test(t.nodeName);
                  },
                  input: function (t) {
                    return Y.test(t.nodeName);
                  },
                  button: function (t) {
                    return (
                      (C(t, "input") && "button" === t.type) || C(t, "button")
                    );
                  },
                  text: function (t) {
                    var e;
                    return (
                      C(t, "input") &&
                      "text" === t.type &&
                      (null == (e = t.getAttribute("type")) ||
                        "text" === e.toLowerCase())
                    );
                  },
                  first: st(function () {
                    return [0];
                  }),
                  last: st(function (t, e) {
                    return [e - 1];
                  }),
                  eq: st(function (t, e, n) {
                    return [n < 0 ? n + e : n];
                  }),
                  even: st(function (t, e) {
                    for (var n = 0; n < e; n += 2) t.push(n);
                    return t;
                  }),
                  odd: st(function (t, e) {
                    for (var n = 1; n < e; n += 2) t.push(n);
                    return t;
                  }),
                  lt: st(function (t, e, n) {
                    var r;
                    for (r = n < 0 ? n + e : n > e ? e : n; --r >= 0; )
                      t.push(r);
                    return t;
                  }),
                  gt: st(function (t, e, n) {
                    for (var r = n < 0 ? n + e : n; ++r < e; ) t.push(r);
                    return t;
                  }),
                },
              }),
            (e.pseudos.nth = e.pseudos.eq),
            { radio: !0, checkbox: !0, file: !0, password: !0, image: !0 }))
              e.pseudos[t] = rt(t);
            for (t in { submit: !0, reset: !0 }) e.pseudos[t] = it(t);
            function ct() {}
            function lt(t, n) {
              var r,
                i,
                o,
                s,
                a,
                u,
                c,
                l = b[t + " "];
              if (l) return n ? 0 : l.slice(0);
              for (a = t, u = [], c = e.preFilter; a; ) {
                for (s in ((r && !(i = H.exec(a))) ||
                  (i && (a = a.slice(i[0].length) || a), u.push((o = []))),
                (r = !1),
                (i = z.exec(a)) &&
                  ((r = i.shift()),
                  o.push({ value: r, type: i[0].replace(O, " ") }),
                  (a = a.slice(r.length))),
                e.filter))
                  !(i = $[s].exec(a)) ||
                    (c[s] && !(i = c[s](i))) ||
                    ((r = i.shift()),
                    o.push({ value: r, type: s, matches: i }),
                    (a = a.slice(r.length)));
                if (!r) break;
              }
              return n ? a.length : a ? Z.error(t) : b(t, u).slice(0);
            }
            function dt(t) {
              for (var e = 0, n = t.length, r = ""; e < n; e++) r += t[e].value;
              return r;
            }
            function ft(t, e, n) {
              var r = e.dir,
                i = e.next,
                o = i || r,
                s = n && "parentNode" === o,
                a = _++;
              return e.first
                ? function (e, n, i) {
                    for (; (e = e[r]); )
                      if (1 === e.nodeType || s) return t(e, n, i);
                    return !1;
                  }
                : function (e, n, u) {
                    var c,
                      l,
                      d = [y, a];
                    if (u) {
                      for (; (e = e[r]); )
                        if ((1 === e.nodeType || s) && t(e, n, u)) return !0;
                    } else
                      for (; (e = e[r]); )
                        if (1 === e.nodeType || s)
                          if (((l = e[v] || (e[v] = {})), i && C(e, i)))
                            e = e[r] || e;
                          else {
                            if ((c = l[o]) && c[0] === y && c[1] === a)
                              return (d[2] = c[2]);
                            if (((l[o] = d), (d[2] = t(e, n, u)))) return !0;
                          }
                    return !1;
                  };
            }
            function ht(t) {
              return t.length > 1
                ? function (e, n, r) {
                    for (var i = t.length; i--; ) if (!t[i](e, n, r)) return !1;
                    return !0;
                  }
                : t[0];
            }
            function pt(t, e, n, r, i) {
              for (
                var o, s = [], a = 0, u = t.length, c = null != e;
                a < u;
                a++
              )
                (o = t[a]) &&
                  ((n && !n(o, r, i)) || (s.push(o), c && e.push(a)));
              return s;
            }
            function mt(t, e, n, r, i, o) {
              return (
                r && !r[v] && (r = mt(r)),
                i && !i[v] && (i = mt(i, o)),
                et(function (o, s, a, u) {
                  var c,
                    d,
                    f,
                    h,
                    p = [],
                    g = [],
                    v = s.length,
                    y =
                      o ||
                      (function (t, e, n) {
                        for (var r = 0, i = e.length; r < i; r++) Z(t, e[r], n);
                        return n;
                      })(e || "*", a.nodeType ? [a] : a, []),
                    _ = !t || (!o && e) ? y : pt(y, p, t, a, u);
                  if (
                    (n
                      ? n(_, (h = i || (o ? t : v || r) ? [] : s), a, u)
                      : (h = _),
                    r)
                  )
                    for (c = pt(h, g), r(c, [], a, u), d = c.length; d--; )
                      (f = c[d]) && (h[g[d]] = !(_[g[d]] = f));
                  if (o) {
                    if (i || t) {
                      if (i) {
                        for (c = [], d = h.length; d--; )
                          (f = h[d]) && c.push((_[d] = f));
                        i(null, (h = []), c, u);
                      }
                      for (d = h.length; d--; )
                        (f = h[d]) &&
                          (c = i ? l.call(o, f) : p[d]) > -1 &&
                          (o[c] = !(s[c] = f));
                    }
                  } else (h = pt(h === s ? h.splice(v, h.length) : h)), i ? i(null, s, h, u) : m.apply(s, h);
                })
              );
            }
            function gt(t) {
              for (
                var r,
                  i,
                  o,
                  s = t.length,
                  a = e.relative[t[0].type],
                  u = a || e.relative[" "],
                  c = a ? 1 : 0,
                  d = ft(
                    function (t) {
                      return t === r;
                    },
                    u,
                    !0
                  ),
                  f = ft(
                    function (t) {
                      return l.call(r, t) > -1;
                    },
                    u,
                    !0
                  ),
                  h = [
                    function (t, e, i) {
                      var o =
                        (!a && (i || e != n)) ||
                        ((r = e).nodeType ? d(t, e, i) : f(t, e, i));
                      return (r = null), o;
                    },
                  ];
                c < s;
                c++
              )
                if ((i = e.relative[t[c].type])) h = [ft(ht(h), i)];
                else {
                  if ((i = e.filter[t[c].type].apply(null, t[c].matches))[v]) {
                    for (o = ++c; o < s && !e.relative[t[o].type]; o++);
                    return mt(
                      c > 1 && ht(h),
                      c > 1 &&
                        dt(
                          t
                            .slice(0, c - 1)
                            .concat({ value: " " === t[c - 2].type ? "*" : "" })
                        ).replace(O, "$1"),
                      i,
                      c < o && gt(t.slice(c, o)),
                      o < s && gt((t = t.slice(o))),
                      o < s && dt(t)
                    );
                  }
                  h.push(i);
                }
              return ht(h);
            }
            function vt(t, r) {
              var i,
                o = [],
                s = [],
                a = w[t + " "];
              if (!a) {
                for (r || (r = lt(t)), i = r.length; i--; )
                  (a = gt(r[i]))[v] ? o.push(a) : s.push(a);
                (a = w(
                  t,
                  (function (t, r) {
                    var i = r.length > 0,
                      o = t.length > 0,
                      s = function (s, a, c, l, f) {
                        var h,
                          p,
                          g,
                          v = 0,
                          _ = "0",
                          x = s && [],
                          b = [],
                          w = n,
                          T = s || (o && e.find.TAG("*", f)),
                          S = (y += null == w ? 1 : Math.random() || 0.1),
                          k = T.length;
                        for (
                          f && (n = a == u || a || f);
                          _ !== k && null != (h = T[_]);
                          _++
                        ) {
                          if (o && h) {
                            for (
                              p = 0,
                                a || h.ownerDocument == u || (ut(h), (c = !d));
                              (g = t[p++]);

                            )
                              if (g(h, a || u, c)) {
                                m.call(l, h);
                                break;
                              }
                            f && (y = S);
                          }
                          i && ((h = !g && h) && v--, s && x.push(h));
                        }
                        if (((v += _), i && _ !== v)) {
                          for (p = 0; (g = r[p++]); ) g(x, b, a, c);
                          if (s) {
                            if (v > 0)
                              for (; _--; ) x[_] || b[_] || (b[_] = L.call(l));
                            b = pt(b);
                          }
                          m.apply(l, b),
                            f &&
                              !s &&
                              b.length > 0 &&
                              v + r.length > 1 &&
                              E.uniqueSort(l);
                        }
                        return f && ((y = S), (n = w)), x;
                      };
                    return i ? et(s) : s;
                  })(s, o)
                )),
                  (a.selector = t);
              }
              return a;
            }
            function yt(t, n, r, i) {
              var o,
                s,
                a,
                u,
                c,
                l = "function" == typeof t && t,
                f = !i && lt((t = l.selector || t));
              if (((r = r || []), 1 === f.length)) {
                if (
                  (s = f[0] = f[0].slice(0)).length > 2 &&
                  "ID" === (a = s[0]).type &&
                  9 === n.nodeType &&
                  d &&
                  e.relative[s[1].type]
                ) {
                  if (
                    !(n = (e.find.ID(a.matches[0].replace(V, Q), n) || [])[0])
                  )
                    return r;
                  l && (n = n.parentNode),
                    (t = t.slice(s.shift().value.length));
                }
                for (
                  o = $.needsContext.test(t) ? 0 : s.length;
                  o-- && ((a = s[o]), !e.relative[(u = a.type)]);

                )
                  if (
                    (c = e.find[u]) &&
                    (i = c(
                      a.matches[0].replace(V, Q),
                      (X.test(s[0].type) && at(n.parentNode)) || n
                    ))
                  ) {
                    if ((s.splice(o, 1), !(t = i.length && dt(s))))
                      return m.apply(r, i), r;
                    break;
                  }
              }
              return (
                (l || vt(t, f))(
                  i,
                  n,
                  !d,
                  r,
                  !n || (X.test(t) && at(n.parentNode)) || n
                ),
                r
              );
            }
            (ct.prototype = e.filters = e.pseudos),
              (e.setFilters = new ct()),
              (g.sortStable = v.split("").sort(S).join("") === v),
              ut(),
              (g.sortDetached = nt(function (t) {
                return (
                  1 & t.compareDocumentPosition(u.createElement("fieldset"))
                );
              })),
              (E.find = Z),
              (E.expr[":"] = E.expr.pseudos),
              (E.unique = E.uniqueSort),
              (Z.compile = vt),
              (Z.select = yt),
              (Z.setDocument = ut),
              (Z.tokenize = lt),
              (Z.escape = E.escapeSelector),
              (Z.getText = E.text),
              (Z.isXML = E.isXMLDoc),
              (Z.selectors = E.expr),
              (Z.support = E.support),
              (Z.uniqueSort = E.uniqueSort);
          })();
          var I = function (t, e, n) {
              for (
                var r = [], i = void 0 !== n;
                (t = t[e]) && 9 !== t.nodeType;

              )
                if (1 === t.nodeType) {
                  if (i && E(t).is(n)) break;
                  r.push(t);
                }
              return r;
            },
            j = function (t, e) {
              for (var n = []; t; t = t.nextSibling)
                1 === t.nodeType && t !== e && n.push(t);
              return n;
            },
            H = E.expr.match.needsContext,
            z =
              /^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i;
          function F(t, e, n) {
            return v(e)
              ? E.grep(t, function (t, r) {
                  return !!e.call(t, r, t) !== n;
                })
              : e.nodeType
              ? E.grep(t, function (t) {
                  return (t === e) !== n;
                })
              : "string" != typeof e
              ? E.grep(t, function (t) {
                  return l.call(e, t) > -1 !== n;
                })
              : E.filter(e, t, n);
          }
          (E.filter = function (t, e, n) {
            var r = e[0];
            return (
              n && (t = ":not(" + t + ")"),
              1 === e.length && 1 === r.nodeType
                ? E.find.matchesSelector(r, t)
                  ? [r]
                  : []
                : E.find.matches(
                    t,
                    E.grep(e, function (t) {
                      return 1 === t.nodeType;
                    })
                  )
            );
          }),
            E.fn.extend({
              find: function (t) {
                var e,
                  n,
                  r = this.length,
                  i = this;
                if ("string" != typeof t)
                  return this.pushStack(
                    E(t).filter(function () {
                      for (e = 0; e < r; e++)
                        if (E.contains(i[e], this)) return !0;
                    })
                  );
                for (n = this.pushStack([]), e = 0; e < r; e++)
                  E.find(t, i[e], n);
                return r > 1 ? E.uniqueSort(n) : n;
              },
              filter: function (t) {
                return this.pushStack(F(this, t || [], !1));
              },
              not: function (t) {
                return this.pushStack(F(this, t || [], !0));
              },
              is: function (t) {
                return !!F(
                  this,
                  "string" == typeof t && H.test(t) ? E(t) : t || [],
                  !1
                ).length;
              },
            });
          var B,
            W = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/;
          ((E.fn.init = function (t, e, n) {
            var r, i;
            if (!t) return this;
            if (((n = n || B), "string" == typeof t)) {
              if (
                !(r =
                  "<" === t[0] && ">" === t[t.length - 1] && t.length >= 3
                    ? [null, t, null]
                    : W.exec(t)) ||
                (!r[1] && e)
              )
                return !e || e.jquery
                  ? (e || n).find(t)
                  : this.constructor(e).find(t);
              if (r[1]) {
                if (
                  ((e = e instanceof E ? e[0] : e),
                  E.merge(
                    this,
                    E.parseHTML(
                      r[1],
                      e && e.nodeType ? e.ownerDocument || e : _,
                      !0
                    )
                  ),
                  z.test(r[1]) && E.isPlainObject(e))
                )
                  for (r in e) v(this[r]) ? this[r](e[r]) : this.attr(r, e[r]);
                return this;
              }
              return (
                (i = _.getElementById(r[2])) &&
                  ((this[0] = i), (this.length = 1)),
                this
              );
            }
            return t.nodeType
              ? ((this[0] = t), (this.length = 1), this)
              : v(t)
              ? void 0 !== n.ready
                ? n.ready(t)
                : t(E)
              : E.makeArray(t, this);
          }).prototype = E.fn),
            (B = E(_));
          var $ = /^(?:parents|prev(?:Until|All))/,
            Y = { children: !0, contents: !0, next: !0, prev: !0 };
          function G(t, e) {
            for (; (t = t[e]) && 1 !== t.nodeType; );
            return t;
          }
          E.fn.extend({
            has: function (t) {
              var e = E(t, this),
                n = e.length;
              return this.filter(function () {
                for (var t = 0; t < n; t++)
                  if (E.contains(this, e[t])) return !0;
              });
            },
            closest: function (t, e) {
              var n,
                r = 0,
                i = this.length,
                o = [],
                s = "string" != typeof t && E(t);
              if (!H.test(t))
                for (; r < i; r++)
                  for (n = this[r]; n && n !== e; n = n.parentNode)
                    if (
                      n.nodeType < 11 &&
                      (s
                        ? s.index(n) > -1
                        : 1 === n.nodeType && E.find.matchesSelector(n, t))
                    ) {
                      o.push(n);
                      break;
                    }
              return this.pushStack(o.length > 1 ? E.uniqueSort(o) : o);
            },
            index: function (t) {
              return t
                ? "string" == typeof t
                  ? l.call(E(t), this[0])
                  : l.call(this, t.jquery ? t[0] : t)
                : this[0] && this[0].parentNode
                ? this.first().prevAll().length
                : -1;
            },
            add: function (t, e) {
              return this.pushStack(E.uniqueSort(E.merge(this.get(), E(t, e))));
            },
            addBack: function (t) {
              return this.add(
                null == t ? this.prevObject : this.prevObject.filter(t)
              );
            },
          }),
            E.each(
              {
                parent: function (t) {
                  var e = t.parentNode;
                  return e && 11 !== e.nodeType ? e : null;
                },
                parents: function (t) {
                  return I(t, "parentNode");
                },
                parentsUntil: function (t, e, n) {
                  return I(t, "parentNode", n);
                },
                next: function (t) {
                  return G(t, "nextSibling");
                },
                prev: function (t) {
                  return G(t, "previousSibling");
                },
                nextAll: function (t) {
                  return I(t, "nextSibling");
                },
                prevAll: function (t) {
                  return I(t, "previousSibling");
                },
                nextUntil: function (t, e, n) {
                  return I(t, "nextSibling", n);
                },
                prevUntil: function (t, e, n) {
                  return I(t, "previousSibling", n);
                },
                siblings: function (t) {
                  return j((t.parentNode || {}).firstChild, t);
                },
                children: function (t) {
                  return j(t.firstChild);
                },
                contents: function (t) {
                  return null != t.contentDocument && s(t.contentDocument)
                    ? t.contentDocument
                    : (C(t, "template") && (t = t.content || t),
                      E.merge([], t.childNodes));
                },
              },
              function (t, e) {
                E.fn[t] = function (n, r) {
                  var i = E.map(this, e, n);
                  return (
                    "Until" !== t.slice(-5) && (r = n),
                    r && "string" == typeof r && (i = E.filter(r, i)),
                    this.length > 1 &&
                      (Y[t] || E.uniqueSort(i), $.test(t) && i.reverse()),
                    this.pushStack(i)
                  );
                };
              }
            );
          var U = /[^\x20\t\r\n\f]+/g;
          function X(t) {
            return t;
          }
          function V(t) {
            throw t;
          }
          function Q(t, e, n, r) {
            var i;
            try {
              t && v((i = t.promise))
                ? i.call(t).done(e).fail(n)
                : t && v((i = t.then))
                ? i.call(t, e, n)
                : e.apply(void 0, [t].slice(r));
            } catch (t) {
              n.apply(void 0, [t]);
            }
          }
          (E.Callbacks = function (t) {
            t =
              "string" == typeof t
                ? (function (t) {
                    var e = {};
                    return (
                      E.each(t.match(U) || [], function (t, n) {
                        e[n] = !0;
                      }),
                      e
                    );
                  })(t)
                : E.extend({}, t);
            var e,
              n,
              r,
              i,
              o = [],
              s = [],
              a = -1,
              u = function () {
                for (i = i || t.once, r = e = !0; s.length; a = -1)
                  for (n = s.shift(); ++a < o.length; )
                    !1 === o[a].apply(n[0], n[1]) &&
                      t.stopOnFalse &&
                      ((a = o.length), (n = !1));
                t.memory || (n = !1), (e = !1), i && (o = n ? [] : "");
              },
              c = {
                add: function () {
                  return (
                    o &&
                      (n && !e && ((a = o.length - 1), s.push(n)),
                      (function e(n) {
                        E.each(n, function (n, r) {
                          v(r)
                            ? (t.unique && c.has(r)) || o.push(r)
                            : r && r.length && "string" !== w(r) && e(r);
                        });
                      })(arguments),
                      n && !e && u()),
                    this
                  );
                },
                remove: function () {
                  return (
                    E.each(arguments, function (t, e) {
                      for (var n; (n = E.inArray(e, o, n)) > -1; )
                        o.splice(n, 1), n <= a && a--;
                    }),
                    this
                  );
                },
                has: function (t) {
                  return t ? E.inArray(t, o) > -1 : o.length > 0;
                },
                empty: function () {
                  return o && (o = []), this;
                },
                disable: function () {
                  return (i = s = []), (o = n = ""), this;
                },
                disabled: function () {
                  return !o;
                },
                lock: function () {
                  return (i = s = []), n || e || (o = n = ""), this;
                },
                locked: function () {
                  return !!i;
                },
                fireWith: function (t, n) {
                  return (
                    i ||
                      ((n = [t, (n = n || []).slice ? n.slice() : n]),
                      s.push(n),
                      e || u()),
                    this
                  );
                },
                fire: function () {
                  return c.fireWith(this, arguments), this;
                },
                fired: function () {
                  return !!r;
                },
              };
            return c;
          }),
            E.extend({
              Deferred: function (t) {
                var e = [
                    [
                      "notify",
                      "progress",
                      E.Callbacks("memory"),
                      E.Callbacks("memory"),
                      2,
                    ],
                    [
                      "resolve",
                      "done",
                      E.Callbacks("once memory"),
                      E.Callbacks("once memory"),
                      0,
                      "resolved",
                    ],
                    [
                      "reject",
                      "fail",
                      E.Callbacks("once memory"),
                      E.Callbacks("once memory"),
                      1,
                      "rejected",
                    ],
                  ],
                  n = "pending",
                  i = {
                    state: function () {
                      return n;
                    },
                    always: function () {
                      return o.done(arguments).fail(arguments), this;
                    },
                    catch: function (t) {
                      return i.then(null, t);
                    },
                    pipe: function () {
                      var t = arguments;
                      return E.Deferred(function (n) {
                        E.each(e, function (e, r) {
                          var i = v(t[r[4]]) && t[r[4]];
                          o[r[1]](function () {
                            var t = i && i.apply(this, arguments);
                            t && v(t.promise)
                              ? t
                                  .promise()
                                  .progress(n.notify)
                                  .done(n.resolve)
                                  .fail(n.reject)
                              : n[r[0] + "With"](this, i ? [t] : arguments);
                          });
                        }),
                          (t = null);
                      }).promise();
                    },
                    then: function (t, n, i) {
                      var o = 0;
                      function s(t, e, n, i) {
                        return function () {
                          var a = this,
                            u = arguments,
                            c = function () {
                              var r, c;
                              if (!(t < o)) {
                                if ((r = n.apply(a, u)) === e.promise())
                                  throw new TypeError(
                                    "Thenable self-resolution"
                                  );
                                (c =
                                  r &&
                                  ("object" == typeof r ||
                                    "function" == typeof r) &&
                                  r.then),
                                  v(c)
                                    ? i
                                      ? c.call(r, s(o, e, X, i), s(o, e, V, i))
                                      : (o++,
                                        c.call(
                                          r,
                                          s(o, e, X, i),
                                          s(o, e, V, i),
                                          s(o, e, X, e.notifyWith)
                                        ))
                                    : (n !== X && ((a = void 0), (u = [r])),
                                      (i || e.resolveWith)(a, u));
                              }
                            },
                            l = i
                              ? c
                              : function () {
                                  try {
                                    c();
                                  } catch (r) {
                                    E.Deferred.exceptionHook &&
                                      E.Deferred.exceptionHook(r, l.error),
                                      t + 1 >= o &&
                                        (n !== V && ((a = void 0), (u = [r])),
                                        e.rejectWith(a, u));
                                  }
                                };
                          t
                            ? l()
                            : (E.Deferred.getErrorHook
                                ? (l.error = E.Deferred.getErrorHook())
                                : E.Deferred.getStackHook &&
                                  (l.error = E.Deferred.getStackHook()),
                              r.setTimeout(l));
                        };
                      }
                      return E.Deferred(function (r) {
                        e[0][3].add(s(0, r, v(i) ? i : X, r.notifyWith)),
                          e[1][3].add(s(0, r, v(t) ? t : X)),
                          e[2][3].add(s(0, r, v(n) ? n : V));
                      }).promise();
                    },
                    promise: function (t) {
                      return null != t ? E.extend(t, i) : i;
                    },
                  },
                  o = {};
                return (
                  E.each(e, function (t, r) {
                    var s = r[2],
                      a = r[5];
                    (i[r[1]] = s.add),
                      a &&
                        s.add(
                          function () {
                            n = a;
                          },
                          e[3 - t][2].disable,
                          e[3 - t][3].disable,
                          e[0][2].lock,
                          e[0][3].lock
                        ),
                      s.add(r[3].fire),
                      (o[r[0]] = function () {
                        return (
                          o[r[0] + "With"](
                            this === o ? void 0 : this,
                            arguments
                          ),
                          this
                        );
                      }),
                      (o[r[0] + "With"] = s.fireWith);
                  }),
                  i.promise(o),
                  t && t.call(o, o),
                  o
                );
              },
              when: function (t) {
                var e = arguments.length,
                  n = e,
                  r = Array(n),
                  i = a.call(arguments),
                  o = E.Deferred(),
                  s = function (t) {
                    return function (n) {
                      (r[t] = this),
                        (i[t] = arguments.length > 1 ? a.call(arguments) : n),
                        --e || o.resolveWith(r, i);
                    };
                  };
                if (
                  e <= 1 &&
                  (Q(t, o.done(s(n)).resolve, o.reject, !e),
                  "pending" === o.state() || v(i[n] && i[n].then))
                )
                  return o.then();
                for (; n--; ) Q(i[n], s(n), o.reject);
                return o.promise();
              },
            });
          var K = /^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;
          (E.Deferred.exceptionHook = function (t, e) {
            r.console &&
              r.console.warn &&
              t &&
              K.test(t.name) &&
              r.console.warn(
                "jQuery.Deferred exception: " + t.message,
                t.stack,
                e
              );
          }),
            (E.readyException = function (t) {
              r.setTimeout(function () {
                throw t;
              });
            });
          var J = E.Deferred();
          function Z() {
            _.removeEventListener("DOMContentLoaded", Z),
              r.removeEventListener("load", Z),
              E.ready();
          }
          (E.fn.ready = function (t) {
            return (
              J.then(t).catch(function (t) {
                E.readyException(t);
              }),
              this
            );
          }),
            E.extend({
              isReady: !1,
              readyWait: 1,
              ready: function (t) {
                (!0 === t ? --E.readyWait : E.isReady) ||
                  ((E.isReady = !0),
                  (!0 !== t && --E.readyWait > 0) || J.resolveWith(_, [E]));
              },
            }),
            (E.ready.then = J.then),
            "complete" === _.readyState ||
            ("loading" !== _.readyState && !_.documentElement.doScroll)
              ? r.setTimeout(E.ready)
              : (_.addEventListener("DOMContentLoaded", Z),
                r.addEventListener("load", Z));
          var tt = function (t, e, n, r, i, o, s) {
              var a = 0,
                u = t.length,
                c = null == n;
              if ("object" === w(n))
                for (a in ((i = !0), n)) tt(t, e, a, n[a], !0, o, s);
              else if (
                void 0 !== r &&
                ((i = !0),
                v(r) || (s = !0),
                c &&
                  (s
                    ? (e.call(t, r), (e = null))
                    : ((c = e),
                      (e = function (t, e, n) {
                        return c.call(E(t), n);
                      }))),
                e)
              )
                for (; a < u; a++)
                  e(t[a], n, s ? r : r.call(t[a], a, e(t[a], n)));
              return i ? t : c ? e.call(t) : u ? e(t[0], n) : o;
            },
            et = /^-ms-/,
            nt = /-([a-z])/g;
          function rt(t, e) {
            return e.toUpperCase();
          }
          function it(t) {
            return t.replace(et, "ms-").replace(nt, rt);
          }
          var ot = function (t) {
            return 1 === t.nodeType || 9 === t.nodeType || !+t.nodeType;
          };
          function st() {
            this.expando = E.expando + st.uid++;
          }
          (st.uid = 1),
            (st.prototype = {
              cache: function (t) {
                var e = t[this.expando];
                return (
                  e ||
                    ((e = {}),
                    ot(t) &&
                      (t.nodeType
                        ? (t[this.expando] = e)
                        : Object.defineProperty(t, this.expando, {
                            value: e,
                            configurable: !0,
                          }))),
                  e
                );
              },
              set: function (t, e, n) {
                var r,
                  i = this.cache(t);
                if ("string" == typeof e) i[it(e)] = n;
                else for (r in e) i[it(r)] = e[r];
                return i;
              },
              get: function (t, e) {
                return void 0 === e
                  ? this.cache(t)
                  : t[this.expando] && t[this.expando][it(e)];
              },
              access: function (t, e, n) {
                return void 0 === e ||
                  (e && "string" == typeof e && void 0 === n)
                  ? this.get(t, e)
                  : (this.set(t, e, n), void 0 !== n ? n : e);
              },
              remove: function (t, e) {
                var n,
                  r = t[this.expando];
                if (void 0 !== r) {
                  if (void 0 !== e) {
                    n = (e = Array.isArray(e)
                      ? e.map(it)
                      : (e = it(e)) in r
                      ? [e]
                      : e.match(U) || []).length;
                    for (; n--; ) delete r[e[n]];
                  }
                  (void 0 === e || E.isEmptyObject(r)) &&
                    (t.nodeType
                      ? (t[this.expando] = void 0)
                      : delete t[this.expando]);
                }
              },
              hasData: function (t) {
                var e = t[this.expando];
                return void 0 !== e && !E.isEmptyObject(e);
              },
            });
          var at = new st(),
            ut = new st(),
            ct = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
            lt = /[A-Z]/g;
          function dt(t, e, n) {
            var r;
            if (void 0 === n && 1 === t.nodeType)
              if (
                ((r = "data-" + e.replace(lt, "-$&").toLowerCase()),
                "string" == typeof (n = t.getAttribute(r)))
              ) {
                try {
                  n = (function (t) {
                    return (
                      "true" === t ||
                      ("false" !== t &&
                        ("null" === t
                          ? null
                          : t === +t + ""
                          ? +t
                          : ct.test(t)
                          ? JSON.parse(t)
                          : t))
                    );
                  })(n);
                } catch (t) {}
                ut.set(t, e, n);
              } else n = void 0;
            return n;
          }
          E.extend({
            hasData: function (t) {
              return ut.hasData(t) || at.hasData(t);
            },
            data: function (t, e, n) {
              return ut.access(t, e, n);
            },
            removeData: function (t, e) {
              ut.remove(t, e);
            },
            _data: function (t, e, n) {
              return at.access(t, e, n);
            },
            _removeData: function (t, e) {
              at.remove(t, e);
            },
          }),
            E.fn.extend({
              data: function (t, e) {
                var n,
                  r,
                  i,
                  o = this[0],
                  s = o && o.attributes;
                if (void 0 === t) {
                  if (
                    this.length &&
                    ((i = ut.get(o)),
                    1 === o.nodeType && !at.get(o, "hasDataAttrs"))
                  ) {
                    for (n = s.length; n--; )
                      s[n] &&
                        0 === (r = s[n].name).indexOf("data-") &&
                        ((r = it(r.slice(5))), dt(o, r, i[r]));
                    at.set(o, "hasDataAttrs", !0);
                  }
                  return i;
                }
                return "object" == typeof t
                  ? this.each(function () {
                      ut.set(this, t);
                    })
                  : tt(
                      this,
                      function (e) {
                        var n;
                        if (o && void 0 === e)
                          return void 0 !== (n = ut.get(o, t)) ||
                            void 0 !== (n = dt(o, t))
                            ? n
                            : void 0;
                        this.each(function () {
                          ut.set(this, t, e);
                        });
                      },
                      null,
                      e,
                      arguments.length > 1,
                      null,
                      !0
                    );
              },
              removeData: function (t) {
                return this.each(function () {
                  ut.remove(this, t);
                });
              },
            }),
            E.extend({
              queue: function (t, e, n) {
                var r;
                if (t)
                  return (
                    (e = (e || "fx") + "queue"),
                    (r = at.get(t, e)),
                    n &&
                      (!r || Array.isArray(n)
                        ? (r = at.access(t, e, E.makeArray(n)))
                        : r.push(n)),
                    r || []
                  );
              },
              dequeue: function (t, e) {
                e = e || "fx";
                var n = E.queue(t, e),
                  r = n.length,
                  i = n.shift(),
                  o = E._queueHooks(t, e);
                "inprogress" === i && ((i = n.shift()), r--),
                  i &&
                    ("fx" === e && n.unshift("inprogress"),
                    delete o.stop,
                    i.call(
                      t,
                      function () {
                        E.dequeue(t, e);
                      },
                      o
                    )),
                  !r && o && o.empty.fire();
              },
              _queueHooks: function (t, e) {
                var n = e + "queueHooks";
                return (
                  at.get(t, n) ||
                  at.access(t, n, {
                    empty: E.Callbacks("once memory").add(function () {
                      at.remove(t, [e + "queue", n]);
                    }),
                  })
                );
              },
            }),
            E.fn.extend({
              queue: function (t, e) {
                var n = 2;
                return (
                  "string" != typeof t && ((e = t), (t = "fx"), n--),
                  arguments.length < n
                    ? E.queue(this[0], t)
                    : void 0 === e
                    ? this
                    : this.each(function () {
                        var n = E.queue(this, t, e);
                        E._queueHooks(this, t),
                          "fx" === t &&
                            "inprogress" !== n[0] &&
                            E.dequeue(this, t);
                      })
                );
              },
              dequeue: function (t) {
                return this.each(function () {
                  E.dequeue(this, t);
                });
              },
              clearQueue: function (t) {
                return this.queue(t || "fx", []);
              },
              promise: function (t, e) {
                var n,
                  r = 1,
                  i = E.Deferred(),
                  o = this,
                  s = this.length,
                  a = function () {
                    --r || i.resolveWith(o, [o]);
                  };
                for (
                  "string" != typeof t && ((e = t), (t = void 0)),
                    t = t || "fx";
                  s--;

                )
                  (n = at.get(o[s], t + "queueHooks")) &&
                    n.empty &&
                    (r++, n.empty.add(a));
                return a(), i.promise(e);
              },
            });
          var ft = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
            ht = new RegExp("^(?:([+-])=|)(" + ft + ")([a-z%]*)$", "i"),
            pt = ["Top", "Right", "Bottom", "Left"],
            mt = _.documentElement,
            gt = function (t) {
              return E.contains(t.ownerDocument, t);
            },
            vt = { composed: !0 };
          mt.getRootNode &&
            (gt = function (t) {
              return (
                E.contains(t.ownerDocument, t) ||
                t.getRootNode(vt) === t.ownerDocument
              );
            });
          var yt = function (t, e) {
            return (
              "none" === (t = e || t).style.display ||
              ("" === t.style.display &&
                gt(t) &&
                "none" === E.css(t, "display"))
            );
          };
          function _t(t, e, n, r) {
            var i,
              o,
              s = 20,
              a = r
                ? function () {
                    return r.cur();
                  }
                : function () {
                    return E.css(t, e, "");
                  },
              u = a(),
              c = (n && n[3]) || (E.cssNumber[e] ? "" : "px"),
              l =
                t.nodeType &&
                (E.cssNumber[e] || ("px" !== c && +u)) &&
                ht.exec(E.css(t, e));
            if (l && l[3] !== c) {
              for (u /= 2, c = c || l[3], l = +u || 1; s--; )
                E.style(t, e, l + c),
                  (1 - o) * (1 - (o = a() / u || 0.5)) <= 0 && (s = 0),
                  (l /= o);
              (l *= 2), E.style(t, e, l + c), (n = n || []);
            }
            return (
              n &&
                ((l = +l || +u || 0),
                (i = n[1] ? l + (n[1] + 1) * n[2] : +n[2]),
                r && ((r.unit = c), (r.start = l), (r.end = i))),
              i
            );
          }
          var xt = {};
          function bt(t) {
            var e,
              n = t.ownerDocument,
              r = t.nodeName,
              i = xt[r];
            return (
              i ||
              ((e = n.body.appendChild(n.createElement(r))),
              (i = E.css(e, "display")),
              e.parentNode.removeChild(e),
              "none" === i && (i = "block"),
              (xt[r] = i),
              i)
            );
          }
          function wt(t, e) {
            for (var n, r, i = [], o = 0, s = t.length; o < s; o++)
              (r = t[o]).style &&
                ((n = r.style.display),
                e
                  ? ("none" === n &&
                      ((i[o] = at.get(r, "display") || null),
                      i[o] || (r.style.display = "")),
                    "" === r.style.display && yt(r) && (i[o] = bt(r)))
                  : "none" !== n && ((i[o] = "none"), at.set(r, "display", n)));
            for (o = 0; o < s; o++) null != i[o] && (t[o].style.display = i[o]);
            return t;
          }
          E.fn.extend({
            show: function () {
              return wt(this, !0);
            },
            hide: function () {
              return wt(this);
            },
            toggle: function (t) {
              return "boolean" == typeof t
                ? t
                  ? this.show()
                  : this.hide()
                : this.each(function () {
                    yt(this) ? E(this).show() : E(this).hide();
                  });
            },
          });
          var Tt,
            St,
            Et = /^(?:checkbox|radio)$/i,
            kt = /<([a-z][^\/\0>\x20\t\r\n\f]*)/i,
            Ct = /^$|^module$|\/(?:java|ecma)script/i;
          (Tt = _.createDocumentFragment().appendChild(_.createElement("div"))),
            (St = _.createElement("input")).setAttribute("type", "radio"),
            St.setAttribute("checked", "checked"),
            St.setAttribute("name", "t"),
            Tt.appendChild(St),
            (g.checkClone = Tt.cloneNode(!0).cloneNode(!0).lastChild.checked),
            (Tt.innerHTML = "<textarea>x</textarea>"),
            (g.noCloneChecked = !!Tt.cloneNode(!0).lastChild.defaultValue),
            (Tt.innerHTML = "<option></option>"),
            (g.option = !!Tt.lastChild);
          var Lt = {
            thead: [1, "<table>", "</table>"],
            col: [2, "<table><colgroup>", "</colgroup></table>"],
            tr: [2, "<table><tbody>", "</tbody></table>"],
            td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
            _default: [0, "", ""],
          };
          function At(t, e) {
            var n;
            return (
              (n =
                void 0 !== t.getElementsByTagName
                  ? t.getElementsByTagName(e || "*")
                  : void 0 !== t.querySelectorAll
                  ? t.querySelectorAll(e || "*")
                  : []),
              void 0 === e || (e && C(t, e)) ? E.merge([t], n) : n
            );
          }
          function Dt(t, e) {
            for (var n = 0, r = t.length; n < r; n++)
              at.set(t[n], "globalEval", !e || at.get(e[n], "globalEval"));
          }
          (Lt.tbody = Lt.tfoot = Lt.colgroup = Lt.caption = Lt.thead),
            (Lt.th = Lt.td),
            g.option ||
              (Lt.optgroup = Lt.option =
                [1, "<select multiple='multiple'>", "</select>"]);
          var qt = /<|&#?\w+;/;
          function Ot(t, e, n, r, i) {
            for (
              var o,
                s,
                a,
                u,
                c,
                l,
                d = e.createDocumentFragment(),
                f = [],
                h = 0,
                p = t.length;
              h < p;
              h++
            )
              if ((o = t[h]) || 0 === o)
                if ("object" === w(o)) E.merge(f, o.nodeType ? [o] : o);
                else if (qt.test(o)) {
                  for (
                    s = s || d.appendChild(e.createElement("div")),
                      a = (kt.exec(o) || ["", ""])[1].toLowerCase(),
                      u = Lt[a] || Lt._default,
                      s.innerHTML = u[1] + E.htmlPrefilter(o) + u[2],
                      l = u[0];
                    l--;

                  )
                    s = s.lastChild;
                  E.merge(f, s.childNodes),
                    ((s = d.firstChild).textContent = "");
                } else f.push(e.createTextNode(o));
            for (d.textContent = "", h = 0; (o = f[h++]); )
              if (r && E.inArray(o, r) > -1) i && i.push(o);
              else if (
                ((c = gt(o)),
                (s = At(d.appendChild(o), "script")),
                c && Dt(s),
                n)
              )
                for (l = 0; (o = s[l++]); ) Ct.test(o.type || "") && n.push(o);
            return d;
          }
          var Mt = /^([^.]*)(?:\.(.+)|)/;
          function Pt() {
            return !0;
          }
          function Rt() {
            return !1;
          }
          function Nt(t, e, n, r, i, o) {
            var s, a;
            if ("object" == typeof e) {
              for (a in ("string" != typeof n && ((r = r || n), (n = void 0)),
              e))
                Nt(t, a, n, r, e[a], o);
              return t;
            }
            if (
              (null == r && null == i
                ? ((i = n), (r = n = void 0))
                : null == i &&
                  ("string" == typeof n
                    ? ((i = r), (r = void 0))
                    : ((i = r), (r = n), (n = void 0))),
              !1 === i)
            )
              i = Rt;
            else if (!i) return t;
            return (
              1 === o &&
                ((s = i),
                (i = function (t) {
                  return E().off(t), s.apply(this, arguments);
                }),
                (i.guid = s.guid || (s.guid = E.guid++))),
              t.each(function () {
                E.event.add(this, e, i, r, n);
              })
            );
          }
          function It(t, e, n) {
            n
              ? (at.set(t, e, !1),
                E.event.add(t, e, {
                  namespace: !1,
                  handler: function (t) {
                    var n,
                      r = at.get(this, e);
                    if (1 & t.isTrigger && this[e]) {
                      if (r)
                        (E.event.special[e] || {}).delegateType &&
                          t.stopPropagation();
                      else if (
                        ((r = a.call(arguments)),
                        at.set(this, e, r),
                        this[e](),
                        (n = at.get(this, e)),
                        at.set(this, e, !1),
                        r !== n)
                      )
                        return (
                          t.stopImmediatePropagation(), t.preventDefault(), n
                        );
                    } else
                      r &&
                        (at.set(
                          this,
                          e,
                          E.event.trigger(r[0], r.slice(1), this)
                        ),
                        t.stopPropagation(),
                        (t.isImmediatePropagationStopped = Pt));
                  },
                }))
              : void 0 === at.get(t, e) && E.event.add(t, e, Pt);
          }
          (E.event = {
            global: {},
            add: function (t, e, n, r, i) {
              var o,
                s,
                a,
                u,
                c,
                l,
                d,
                f,
                h,
                p,
                m,
                g = at.get(t);
              if (ot(t))
                for (
                  n.handler && ((n = (o = n).handler), (i = o.selector)),
                    i && E.find.matchesSelector(mt, i),
                    n.guid || (n.guid = E.guid++),
                    (u = g.events) || (u = g.events = Object.create(null)),
                    (s = g.handle) ||
                      (s = g.handle =
                        function (e) {
                          return void 0 !== E && E.event.triggered !== e.type
                            ? E.event.dispatch.apply(t, arguments)
                            : void 0;
                        }),
                    c = (e = (e || "").match(U) || [""]).length;
                  c--;

                )
                  (h = m = (a = Mt.exec(e[c]) || [])[1]),
                    (p = (a[2] || "").split(".").sort()),
                    h &&
                      ((d = E.event.special[h] || {}),
                      (h = (i ? d.delegateType : d.bindType) || h),
                      (d = E.event.special[h] || {}),
                      (l = E.extend(
                        {
                          type: h,
                          origType: m,
                          data: r,
                          handler: n,
                          guid: n.guid,
                          selector: i,
                          needsContext: i && E.expr.match.needsContext.test(i),
                          namespace: p.join("."),
                        },
                        o
                      )),
                      (f = u[h]) ||
                        (((f = u[h] = []).delegateCount = 0),
                        (d.setup && !1 !== d.setup.call(t, r, p, s)) ||
                          (t.addEventListener && t.addEventListener(h, s))),
                      d.add &&
                        (d.add.call(t, l),
                        l.handler.guid || (l.handler.guid = n.guid)),
                      i ? f.splice(f.delegateCount++, 0, l) : f.push(l),
                      (E.event.global[h] = !0));
            },
            remove: function (t, e, n, r, i) {
              var o,
                s,
                a,
                u,
                c,
                l,
                d,
                f,
                h,
                p,
                m,
                g = at.hasData(t) && at.get(t);
              if (g && (u = g.events)) {
                for (c = (e = (e || "").match(U) || [""]).length; c--; )
                  if (
                    ((h = m = (a = Mt.exec(e[c]) || [])[1]),
                    (p = (a[2] || "").split(".").sort()),
                    h)
                  ) {
                    for (
                      d = E.event.special[h] || {},
                        f =
                          u[(h = (r ? d.delegateType : d.bindType) || h)] || [],
                        a =
                          a[2] &&
                          new RegExp(
                            "(^|\\.)" + p.join("\\.(?:.*\\.|)") + "(\\.|$)"
                          ),
                        s = o = f.length;
                      o--;

                    )
                      (l = f[o]),
                        (!i && m !== l.origType) ||
                          (n && n.guid !== l.guid) ||
                          (a && !a.test(l.namespace)) ||
                          (r &&
                            r !== l.selector &&
                            ("**" !== r || !l.selector)) ||
                          (f.splice(o, 1),
                          l.selector && f.delegateCount--,
                          d.remove && d.remove.call(t, l));
                    s &&
                      !f.length &&
                      ((d.teardown && !1 !== d.teardown.call(t, p, g.handle)) ||
                        E.removeEvent(t, h, g.handle),
                      delete u[h]);
                  } else for (h in u) E.event.remove(t, h + e[c], n, r, !0);
                E.isEmptyObject(u) && at.remove(t, "handle events");
              }
            },
            dispatch: function (t) {
              var e,
                n,
                r,
                i,
                o,
                s,
                a = new Array(arguments.length),
                u = E.event.fix(t),
                c =
                  (at.get(this, "events") || Object.create(null))[u.type] || [],
                l = E.event.special[u.type] || {};
              for (a[0] = u, e = 1; e < arguments.length; e++)
                a[e] = arguments[e];
              if (
                ((u.delegateTarget = this),
                !l.preDispatch || !1 !== l.preDispatch.call(this, u))
              ) {
                for (
                  s = E.event.handlers.call(this, u, c), e = 0;
                  (i = s[e++]) && !u.isPropagationStopped();

                )
                  for (
                    u.currentTarget = i.elem, n = 0;
                    (o = i.handlers[n++]) && !u.isImmediatePropagationStopped();

                  )
                    (u.rnamespace &&
                      !1 !== o.namespace &&
                      !u.rnamespace.test(o.namespace)) ||
                      ((u.handleObj = o),
                      (u.data = o.data),
                      void 0 !==
                        (r = (
                          (E.event.special[o.origType] || {}).handle ||
                          o.handler
                        ).apply(i.elem, a)) &&
                        !1 === (u.result = r) &&
                        (u.preventDefault(), u.stopPropagation()));
                return l.postDispatch && l.postDispatch.call(this, u), u.result;
              }
            },
            handlers: function (t, e) {
              var n,
                r,
                i,
                o,
                s,
                a = [],
                u = e.delegateCount,
                c = t.target;
              if (u && c.nodeType && !("click" === t.type && t.button >= 1))
                for (; c !== this; c = c.parentNode || this)
                  if (
                    1 === c.nodeType &&
                    ("click" !== t.type || !0 !== c.disabled)
                  ) {
                    for (o = [], s = {}, n = 0; n < u; n++)
                      void 0 === s[(i = (r = e[n]).selector + " ")] &&
                        (s[i] = r.needsContext
                          ? E(i, this).index(c) > -1
                          : E.find(i, this, null, [c]).length),
                        s[i] && o.push(r);
                    o.length && a.push({ elem: c, handlers: o });
                  }
              return (
                (c = this),
                u < e.length && a.push({ elem: c, handlers: e.slice(u) }),
                a
              );
            },
            addProp: function (t, e) {
              Object.defineProperty(E.Event.prototype, t, {
                enumerable: !0,
                configurable: !0,
                get: v(e)
                  ? function () {
                      if (this.originalEvent) return e(this.originalEvent);
                    }
                  : function () {
                      if (this.originalEvent) return this.originalEvent[t];
                    },
                set: function (e) {
                  Object.defineProperty(this, t, {
                    enumerable: !0,
                    configurable: !0,
                    writable: !0,
                    value: e,
                  });
                },
              });
            },
            fix: function (t) {
              return t[E.expando] ? t : new E.Event(t);
            },
            special: {
              load: { noBubble: !0 },
              click: {
                setup: function (t) {
                  var e = this || t;
                  return (
                    Et.test(e.type) &&
                      e.click &&
                      C(e, "input") &&
                      It(e, "click", !0),
                    !1
                  );
                },
                trigger: function (t) {
                  var e = this || t;
                  return (
                    Et.test(e.type) &&
                      e.click &&
                      C(e, "input") &&
                      It(e, "click"),
                    !0
                  );
                },
                _default: function (t) {
                  var e = t.target;
                  return (
                    (Et.test(e.type) &&
                      e.click &&
                      C(e, "input") &&
                      at.get(e, "click")) ||
                    C(e, "a")
                  );
                },
              },
              beforeunload: {
                postDispatch: function (t) {
                  void 0 !== t.result &&
                    t.originalEvent &&
                    (t.originalEvent.returnValue = t.result);
                },
              },
            },
          }),
            (E.removeEvent = function (t, e, n) {
              t.removeEventListener && t.removeEventListener(e, n);
            }),
            (E.Event = function (t, e) {
              if (!(this instanceof E.Event)) return new E.Event(t, e);
              t && t.type
                ? ((this.originalEvent = t),
                  (this.type = t.type),
                  (this.isDefaultPrevented =
                    t.defaultPrevented ||
                    (void 0 === t.defaultPrevented && !1 === t.returnValue)
                      ? Pt
                      : Rt),
                  (this.target =
                    t.target && 3 === t.target.nodeType
                      ? t.target.parentNode
                      : t.target),
                  (this.currentTarget = t.currentTarget),
                  (this.relatedTarget = t.relatedTarget))
                : (this.type = t),
                e && E.extend(this, e),
                (this.timeStamp = (t && t.timeStamp) || Date.now()),
                (this[E.expando] = !0);
            }),
            (E.Event.prototype = {
              constructor: E.Event,
              isDefaultPrevented: Rt,
              isPropagationStopped: Rt,
              isImmediatePropagationStopped: Rt,
              isSimulated: !1,
              preventDefault: function () {
                var t = this.originalEvent;
                (this.isDefaultPrevented = Pt),
                  t && !this.isSimulated && t.preventDefault();
              },
              stopPropagation: function () {
                var t = this.originalEvent;
                (this.isPropagationStopped = Pt),
                  t && !this.isSimulated && t.stopPropagation();
              },
              stopImmediatePropagation: function () {
                var t = this.originalEvent;
                (this.isImmediatePropagationStopped = Pt),
                  t && !this.isSimulated && t.stopImmediatePropagation(),
                  this.stopPropagation();
              },
            }),
            E.each(
              {
                altKey: !0,
                bubbles: !0,
                cancelable: !0,
                changedTouches: !0,
                ctrlKey: !0,
                detail: !0,
                eventPhase: !0,
                metaKey: !0,
                pageX: !0,
                pageY: !0,
                shiftKey: !0,
                view: !0,
                char: !0,
                code: !0,
                charCode: !0,
                key: !0,
                keyCode: !0,
                button: !0,
                buttons: !0,
                clientX: !0,
                clientY: !0,
                offsetX: !0,
                offsetY: !0,
                pointerId: !0,
                pointerType: !0,
                screenX: !0,
                screenY: !0,
                targetTouches: !0,
                toElement: !0,
                touches: !0,
                which: !0,
              },
              E.event.addProp
            ),
            E.each({ focus: "focusin", blur: "focusout" }, function (t, e) {
              function n(t) {
                if (_.documentMode) {
                  var n = at.get(this, "handle"),
                    r = E.event.fix(t);
                  (r.type = "focusin" === t.type ? "focus" : "blur"),
                    (r.isSimulated = !0),
                    n(t),
                    r.target === r.currentTarget && n(r);
                } else E.event.simulate(e, t.target, E.event.fix(t));
              }
              (E.event.special[t] = {
                setup: function () {
                  var r;
                  if ((It(this, t, !0), !_.documentMode)) return !1;
                  (r = at.get(this, e)) || this.addEventListener(e, n),
                    at.set(this, e, (r || 0) + 1);
                },
                trigger: function () {
                  return It(this, t), !0;
                },
                teardown: function () {
                  var t;
                  if (!_.documentMode) return !1;
                  (t = at.get(this, e) - 1)
                    ? at.set(this, e, t)
                    : (this.removeEventListener(e, n), at.remove(this, e));
                },
                _default: function (e) {
                  return at.get(e.target, t);
                },
                delegateType: e,
              }),
                (E.event.special[e] = {
                  setup: function () {
                    var r = this.ownerDocument || this.document || this,
                      i = _.documentMode ? this : r,
                      o = at.get(i, e);
                    o ||
                      (_.documentMode
                        ? this.addEventListener(e, n)
                        : r.addEventListener(t, n, !0)),
                      at.set(i, e, (o || 0) + 1);
                  },
                  teardown: function () {
                    var r = this.ownerDocument || this.document || this,
                      i = _.documentMode ? this : r,
                      o = at.get(i, e) - 1;
                    o
                      ? at.set(i, e, o)
                      : (_.documentMode
                          ? this.removeEventListener(e, n)
                          : r.removeEventListener(t, n, !0),
                        at.remove(i, e));
                  },
                });
            }),
            E.each(
              {
                mouseenter: "mouseover",
                mouseleave: "mouseout",
                pointerenter: "pointerover",
                pointerleave: "pointerout",
              },
              function (t, e) {
                E.event.special[t] = {
                  delegateType: e,
                  bindType: e,
                  handle: function (t) {
                    var n,
                      r = t.relatedTarget,
                      i = t.handleObj;
                    return (
                      (r && (r === this || E.contains(this, r))) ||
                        ((t.type = i.origType),
                        (n = i.handler.apply(this, arguments)),
                        (t.type = e)),
                      n
                    );
                  },
                };
              }
            ),
            E.fn.extend({
              on: function (t, e, n, r) {
                return Nt(this, t, e, n, r);
              },
              one: function (t, e, n, r) {
                return Nt(this, t, e, n, r, 1);
              },
              off: function (t, e, n) {
                var r, i;
                if (t && t.preventDefault && t.handleObj)
                  return (
                    (r = t.handleObj),
                    E(t.delegateTarget).off(
                      r.namespace ? r.origType + "." + r.namespace : r.origType,
                      r.selector,
                      r.handler
                    ),
                    this
                  );
                if ("object" == typeof t) {
                  for (i in t) this.off(i, e, t[i]);
                  return this;
                }
                return (
                  (!1 !== e && "function" != typeof e) ||
                    ((n = e), (e = void 0)),
                  !1 === n && (n = Rt),
                  this.each(function () {
                    E.event.remove(this, t, n, e);
                  })
                );
              },
            });
          var jt = /<script|<style|<link/i,
            Ht = /checked\s*(?:[^=]|=\s*.checked.)/i,
            zt = /^\s*<!\[CDATA\[|\]\]>\s*$/g;
          function Ft(t, e) {
            return (
              (C(t, "table") &&
                C(11 !== e.nodeType ? e : e.firstChild, "tr") &&
                E(t).children("tbody")[0]) ||
              t
            );
          }
          function Bt(t) {
            return (
              (t.type = (null !== t.getAttribute("type")) + "/" + t.type), t
            );
          }
          function Wt(t) {
            return (
              "true/" === (t.type || "").slice(0, 5)
                ? (t.type = t.type.slice(5))
                : t.removeAttribute("type"),
              t
            );
          }
          function $t(t, e) {
            var n, r, i, o, s, a;
            if (1 === e.nodeType) {
              if (at.hasData(t) && (a = at.get(t).events))
                for (i in (at.remove(e, "handle events"), a))
                  for (n = 0, r = a[i].length; n < r; n++)
                    E.event.add(e, i, a[i][n]);
              ut.hasData(t) &&
                ((o = ut.access(t)), (s = E.extend({}, o)), ut.set(e, s));
            }
          }
          function Yt(t, e) {
            var n = e.nodeName.toLowerCase();
            "input" === n && Et.test(t.type)
              ? (e.checked = t.checked)
              : ("input" !== n && "textarea" !== n) ||
                (e.defaultValue = t.defaultValue);
          }
          function Gt(t, e, n, r) {
            e = u(e);
            var i,
              o,
              s,
              a,
              c,
              l,
              d = 0,
              f = t.length,
              h = f - 1,
              p = e[0],
              m = v(p);
            if (
              m ||
              (f > 1 && "string" == typeof p && !g.checkClone && Ht.test(p))
            )
              return t.each(function (i) {
                var o = t.eq(i);
                m && (e[0] = p.call(this, i, o.html())), Gt(o, e, n, r);
              });
            if (
              f &&
              ((o = (i = Ot(e, t[0].ownerDocument, !1, t, r)).firstChild),
              1 === i.childNodes.length && (i = o),
              o || r)
            ) {
              for (a = (s = E.map(At(i, "script"), Bt)).length; d < f; d++)
                (c = i),
                  d !== h &&
                    ((c = E.clone(c, !0, !0)),
                    a && E.merge(s, At(c, "script"))),
                  n.call(t[d], c, d);
              if (a)
                for (
                  l = s[s.length - 1].ownerDocument, E.map(s, Wt), d = 0;
                  d < a;
                  d++
                )
                  (c = s[d]),
                    Ct.test(c.type || "") &&
                      !at.access(c, "globalEval") &&
                      E.contains(l, c) &&
                      (c.src && "module" !== (c.type || "").toLowerCase()
                        ? E._evalUrl &&
                          !c.noModule &&
                          E._evalUrl(
                            c.src,
                            { nonce: c.nonce || c.getAttribute("nonce") },
                            l
                          )
                        : b(c.textContent.replace(zt, ""), c, l));
            }
            return t;
          }
          function Ut(t, e, n) {
            for (
              var r, i = e ? E.filter(e, t) : t, o = 0;
              null != (r = i[o]);
              o++
            )
              n || 1 !== r.nodeType || E.cleanData(At(r)),
                r.parentNode &&
                  (n && gt(r) && Dt(At(r, "script")),
                  r.parentNode.removeChild(r));
            return t;
          }
          E.extend({
            htmlPrefilter: function (t) {
              return t;
            },
            clone: function (t, e, n) {
              var r,
                i,
                o,
                s,
                a = t.cloneNode(!0),
                u = gt(t);
              if (
                !(
                  g.noCloneChecked ||
                  (1 !== t.nodeType && 11 !== t.nodeType) ||
                  E.isXMLDoc(t)
                )
              )
                for (s = At(a), r = 0, i = (o = At(t)).length; r < i; r++)
                  Yt(o[r], s[r]);
              if (e)
                if (n)
                  for (
                    o = o || At(t), s = s || At(a), r = 0, i = o.length;
                    r < i;
                    r++
                  )
                    $t(o[r], s[r]);
                else $t(t, a);
              return (
                (s = At(a, "script")).length > 0 &&
                  Dt(s, !u && At(t, "script")),
                a
              );
            },
            cleanData: function (t) {
              for (
                var e, n, r, i = E.event.special, o = 0;
                void 0 !== (n = t[o]);
                o++
              )
                if (ot(n)) {
                  if ((e = n[at.expando])) {
                    if (e.events)
                      for (r in e.events)
                        i[r]
                          ? E.event.remove(n, r)
                          : E.removeEvent(n, r, e.handle);
                    n[at.expando] = void 0;
                  }
                  n[ut.expando] && (n[ut.expando] = void 0);
                }
            },
          }),
            E.fn.extend({
              detach: function (t) {
                return Ut(this, t, !0);
              },
              remove: function (t) {
                return Ut(this, t);
              },
              text: function (t) {
                return tt(
                  this,
                  function (t) {
                    return void 0 === t
                      ? E.text(this)
                      : this.empty().each(function () {
                          (1 !== this.nodeType &&
                            11 !== this.nodeType &&
                            9 !== this.nodeType) ||
                            (this.textContent = t);
                        });
                  },
                  null,
                  t,
                  arguments.length
                );
              },
              append: function () {
                return Gt(this, arguments, function (t) {
                  (1 !== this.nodeType &&
                    11 !== this.nodeType &&
                    9 !== this.nodeType) ||
                    Ft(this, t).appendChild(t);
                });
              },
              prepend: function () {
                return Gt(this, arguments, function (t) {
                  if (
                    1 === this.nodeType ||
                    11 === this.nodeType ||
                    9 === this.nodeType
                  ) {
                    var e = Ft(this, t);
                    e.insertBefore(t, e.firstChild);
                  }
                });
              },
              before: function () {
                return Gt(this, arguments, function (t) {
                  this.parentNode && this.parentNode.insertBefore(t, this);
                });
              },
              after: function () {
                return Gt(this, arguments, function (t) {
                  this.parentNode &&
                    this.parentNode.insertBefore(t, this.nextSibling);
                });
              },
              empty: function () {
                for (var t, e = 0; null != (t = this[e]); e++)
                  1 === t.nodeType &&
                    (E.cleanData(At(t, !1)), (t.textContent = ""));
                return this;
              },
              clone: function (t, e) {
                return (
                  (t = null != t && t),
                  (e = null == e ? t : e),
                  this.map(function () {
                    return E.clone(this, t, e);
                  })
                );
              },
              html: function (t) {
                return tt(
                  this,
                  function (t) {
                    var e = this[0] || {},
                      n = 0,
                      r = this.length;
                    if (void 0 === t && 1 === e.nodeType) return e.innerHTML;
                    if (
                      "string" == typeof t &&
                      !jt.test(t) &&
                      !Lt[(kt.exec(t) || ["", ""])[1].toLowerCase()]
                    ) {
                      t = E.htmlPrefilter(t);
                      try {
                        for (; n < r; n++)
                          1 === (e = this[n] || {}).nodeType &&
                            (E.cleanData(At(e, !1)), (e.innerHTML = t));
                        e = 0;
                      } catch (t) {}
                    }
                    e && this.empty().append(t);
                  },
                  null,
                  t,
                  arguments.length
                );
              },
              replaceWith: function () {
                var t = [];
                return Gt(
                  this,
                  arguments,
                  function (e) {
                    var n = this.parentNode;
                    E.inArray(this, t) < 0 &&
                      (E.cleanData(At(this)), n && n.replaceChild(e, this));
                  },
                  t
                );
              },
            }),
            E.each(
              {
                appendTo: "append",
                prependTo: "prepend",
                insertBefore: "before",
                insertAfter: "after",
                replaceAll: "replaceWith",
              },
              function (t, e) {
                E.fn[t] = function (t) {
                  for (
                    var n, r = [], i = E(t), o = i.length - 1, s = 0;
                    s <= o;
                    s++
                  )
                    (n = s === o ? this : this.clone(!0)),
                      E(i[s])[e](n),
                      c.apply(r, n.get());
                  return this.pushStack(r);
                };
              }
            );
          var Xt = new RegExp("^(" + ft + ")(?!px)[a-z%]+$", "i"),
            Vt = /^--/,
            Qt = function (t) {
              var e = t.ownerDocument.defaultView;
              return (e && e.opener) || (e = r), e.getComputedStyle(t);
            },
            Kt = function (t, e, n) {
              var r,
                i,
                o = {};
              for (i in e) (o[i] = t.style[i]), (t.style[i] = e[i]);
              for (i in ((r = n.call(t)), e)) t.style[i] = o[i];
              return r;
            },
            Jt = new RegExp(pt.join("|"), "i");
          function Zt(t, e, n) {
            var r,
              i,
              o,
              s,
              a = Vt.test(e),
              u = t.style;
            return (
              (n = n || Qt(t)) &&
                ((s = n.getPropertyValue(e) || n[e]),
                a && s && (s = s.replace(O, "$1") || void 0),
                "" !== s || gt(t) || (s = E.style(t, e)),
                !g.pixelBoxStyles() &&
                  Xt.test(s) &&
                  Jt.test(e) &&
                  ((r = u.width),
                  (i = u.minWidth),
                  (o = u.maxWidth),
                  (u.minWidth = u.maxWidth = u.width = s),
                  (s = n.width),
                  (u.width = r),
                  (u.minWidth = i),
                  (u.maxWidth = o))),
              void 0 !== s ? s + "" : s
            );
          }
          function te(t, e) {
            return {
              get: function () {
                if (!t()) return (this.get = e).apply(this, arguments);
                delete this.get;
              },
            };
          }
          !(function () {
            function t() {
              if (l) {
                (c.style.cssText =
                  "position:absolute;left:-11111px;width:60px;margin-top:1px;padding:0;border:0"),
                  (l.style.cssText =
                    "position:relative;display:block;box-sizing:border-box;overflow:scroll;margin:auto;border:1px;padding:1px;width:60%;top:1%"),
                  mt.appendChild(c).appendChild(l);
                var t = r.getComputedStyle(l);
                (n = "1%" !== t.top),
                  (u = 12 === e(t.marginLeft)),
                  (l.style.right = "60%"),
                  (s = 36 === e(t.right)),
                  (i = 36 === e(t.width)),
                  (l.style.position = "absolute"),
                  (o = 12 === e(l.offsetWidth / 3)),
                  mt.removeChild(c),
                  (l = null);
              }
            }
            function e(t) {
              return Math.round(parseFloat(t));
            }
            var n,
              i,
              o,
              s,
              a,
              u,
              c = _.createElement("div"),
              l = _.createElement("div");
            l.style &&
              ((l.style.backgroundClip = "content-box"),
              (l.cloneNode(!0).style.backgroundClip = ""),
              (g.clearCloneStyle = "content-box" === l.style.backgroundClip),
              E.extend(g, {
                boxSizingReliable: function () {
                  return t(), i;
                },
                pixelBoxStyles: function () {
                  return t(), s;
                },
                pixelPosition: function () {
                  return t(), n;
                },
                reliableMarginLeft: function () {
                  return t(), u;
                },
                scrollboxSize: function () {
                  return t(), o;
                },
                reliableTrDimensions: function () {
                  var t, e, n, i;
                  return (
                    null == a &&
                      ((t = _.createElement("table")),
                      (e = _.createElement("tr")),
                      (n = _.createElement("div")),
                      (t.style.cssText =
                        "position:absolute;left:-11111px;border-collapse:separate"),
                      (e.style.cssText =
                        "box-sizing:content-box;border:1px solid"),
                      (e.style.height = "1px"),
                      (n.style.height = "9px"),
                      (n.style.display = "block"),
                      mt.appendChild(t).appendChild(e).appendChild(n),
                      (i = r.getComputedStyle(e)),
                      (a =
                        parseInt(i.height, 10) +
                          parseInt(i.borderTopWidth, 10) +
                          parseInt(i.borderBottomWidth, 10) ===
                        e.offsetHeight),
                      mt.removeChild(t)),
                    a
                  );
                },
              }));
          })();
          var ee = ["Webkit", "Moz", "ms"],
            ne = _.createElement("div").style,
            re = {};
          function ie(t) {
            return (
              E.cssProps[t] ||
              re[t] ||
              (t in ne
                ? t
                : (re[t] =
                    (function (t) {
                      for (
                        var e = t[0].toUpperCase() + t.slice(1), n = ee.length;
                        n--;

                      )
                        if ((t = ee[n] + e) in ne) return t;
                    })(t) || t))
            );
          }
          var oe = /^(none|table(?!-c[ea]).+)/,
            se = {
              position: "absolute",
              visibility: "hidden",
              display: "block",
            },
            ae = { letterSpacing: "0", fontWeight: "400" };
          function ue(t, e, n) {
            var r = ht.exec(e);
            return r ? Math.max(0, r[2] - (n || 0)) + (r[3] || "px") : e;
          }
          function ce(t, e, n, r, i, o) {
            var s = "width" === e ? 1 : 0,
              a = 0,
              u = 0,
              c = 0;
            if (n === (r ? "border" : "content")) return 0;
            for (; s < 4; s += 2)
              "margin" === n && (c += E.css(t, n + pt[s], !0, i)),
                r
                  ? ("content" === n &&
                      (u -= E.css(t, "padding" + pt[s], !0, i)),
                    "margin" !== n &&
                      (u -= E.css(t, "border" + pt[s] + "Width", !0, i)))
                  : ((u += E.css(t, "padding" + pt[s], !0, i)),
                    "padding" !== n
                      ? (u += E.css(t, "border" + pt[s] + "Width", !0, i))
                      : (a += E.css(t, "border" + pt[s] + "Width", !0, i)));
            return (
              !r &&
                o >= 0 &&
                (u +=
                  Math.max(
                    0,
                    Math.ceil(
                      t["offset" + e[0].toUpperCase() + e.slice(1)] -
                        o -
                        u -
                        a -
                        0.5
                    )
                  ) || 0),
              u + c
            );
          }
          function le(t, e, n) {
            var r = Qt(t),
              i =
                (!g.boxSizingReliable() || n) &&
                "border-box" === E.css(t, "boxSizing", !1, r),
              o = i,
              s = Zt(t, e, r),
              a = "offset" + e[0].toUpperCase() + e.slice(1);
            if (Xt.test(s)) {
              if (!n) return s;
              s = "auto";
            }
            return (
              ((!g.boxSizingReliable() && i) ||
                (!g.reliableTrDimensions() && C(t, "tr")) ||
                "auto" === s ||
                (!parseFloat(s) && "inline" === E.css(t, "display", !1, r))) &&
                t.getClientRects().length &&
                ((i = "border-box" === E.css(t, "boxSizing", !1, r)),
                (o = a in t) && (s = t[a])),
              (s = parseFloat(s) || 0) +
                ce(t, e, n || (i ? "border" : "content"), o, r, s) +
                "px"
            );
          }
          function de(t, e, n, r, i) {
            return new de.prototype.init(t, e, n, r, i);
          }
          E.extend({
            cssHooks: {
              opacity: {
                get: function (t, e) {
                  if (e) {
                    var n = Zt(t, "opacity");
                    return "" === n ? "1" : n;
                  }
                },
              },
            },
            cssNumber: {
              animationIterationCount: !0,
              aspectRatio: !0,
              borderImageSlice: !0,
              columnCount: !0,
              flexGrow: !0,
              flexShrink: !0,
              fontWeight: !0,
              gridArea: !0,
              gridColumn: !0,
              gridColumnEnd: !0,
              gridColumnStart: !0,
              gridRow: !0,
              gridRowEnd: !0,
              gridRowStart: !0,
              lineHeight: !0,
              opacity: !0,
              order: !0,
              orphans: !0,
              scale: !0,
              widows: !0,
              zIndex: !0,
              zoom: !0,
              fillOpacity: !0,
              floodOpacity: !0,
              stopOpacity: !0,
              strokeMiterlimit: !0,
              strokeOpacity: !0,
            },
            cssProps: {},
            style: function (t, e, n, r) {
              if (t && 3 !== t.nodeType && 8 !== t.nodeType && t.style) {
                var i,
                  o,
                  s,
                  a = it(e),
                  u = Vt.test(e),
                  c = t.style;
                if (
                  (u || (e = ie(a)),
                  (s = E.cssHooks[e] || E.cssHooks[a]),
                  void 0 === n)
                )
                  return s && "get" in s && void 0 !== (i = s.get(t, !1, r))
                    ? i
                    : c[e];
                "string" == (o = typeof n) &&
                  (i = ht.exec(n)) &&
                  i[1] &&
                  ((n = _t(t, e, i)), (o = "number")),
                  null != n &&
                    n == n &&
                    ("number" !== o ||
                      u ||
                      (n += (i && i[3]) || (E.cssNumber[a] ? "" : "px")),
                    g.clearCloneStyle ||
                      "" !== n ||
                      0 !== e.indexOf("background") ||
                      (c[e] = "inherit"),
                    (s && "set" in s && void 0 === (n = s.set(t, n, r))) ||
                      (u ? c.setProperty(e, n) : (c[e] = n)));
              }
            },
            css: function (t, e, n, r) {
              var i,
                o,
                s,
                a = it(e);
              return (
                Vt.test(e) || (e = ie(a)),
                (s = E.cssHooks[e] || E.cssHooks[a]) &&
                  "get" in s &&
                  (i = s.get(t, !0, n)),
                void 0 === i && (i = Zt(t, e, r)),
                "normal" === i && e in ae && (i = ae[e]),
                "" === n || n
                  ? ((o = parseFloat(i)), !0 === n || isFinite(o) ? o || 0 : i)
                  : i
              );
            },
          }),
            E.each(["height", "width"], function (t, e) {
              E.cssHooks[e] = {
                get: function (t, n, r) {
                  if (n)
                    return !oe.test(E.css(t, "display")) ||
                      (t.getClientRects().length &&
                        t.getBoundingClientRect().width)
                      ? le(t, e, r)
                      : Kt(t, se, function () {
                          return le(t, e, r);
                        });
                },
                set: function (t, n, r) {
                  var i,
                    o = Qt(t),
                    s = !g.scrollboxSize() && "absolute" === o.position,
                    a =
                      (s || r) && "border-box" === E.css(t, "boxSizing", !1, o),
                    u = r ? ce(t, e, r, a, o) : 0;
                  return (
                    a &&
                      s &&
                      (u -= Math.ceil(
                        t["offset" + e[0].toUpperCase() + e.slice(1)] -
                          parseFloat(o[e]) -
                          ce(t, e, "border", !1, o) -
                          0.5
                      )),
                    u &&
                      (i = ht.exec(n)) &&
                      "px" !== (i[3] || "px") &&
                      ((t.style[e] = n), (n = E.css(t, e))),
                    ue(0, n, u)
                  );
                },
              };
            }),
            (E.cssHooks.marginLeft = te(g.reliableMarginLeft, function (t, e) {
              if (e)
                return (
                  (parseFloat(Zt(t, "marginLeft")) ||
                    t.getBoundingClientRect().left -
                      Kt(t, { marginLeft: 0 }, function () {
                        return t.getBoundingClientRect().left;
                      })) + "px"
                );
            })),
            E.each(
              { margin: "", padding: "", border: "Width" },
              function (t, e) {
                (E.cssHooks[t + e] = {
                  expand: function (n) {
                    for (
                      var r = 0,
                        i = {},
                        o = "string" == typeof n ? n.split(" ") : [n];
                      r < 4;
                      r++
                    )
                      i[t + pt[r] + e] = o[r] || o[r - 2] || o[0];
                    return i;
                  },
                }),
                  "margin" !== t && (E.cssHooks[t + e].set = ue);
              }
            ),
            E.fn.extend({
              css: function (t, e) {
                return tt(
                  this,
                  function (t, e, n) {
                    var r,
                      i,
                      o = {},
                      s = 0;
                    if (Array.isArray(e)) {
                      for (r = Qt(t), i = e.length; s < i; s++)
                        o[e[s]] = E.css(t, e[s], !1, r);
                      return o;
                    }
                    return void 0 !== n ? E.style(t, e, n) : E.css(t, e);
                  },
                  t,
                  e,
                  arguments.length > 1
                );
              },
            }),
            (E.Tween = de),
            (de.prototype = {
              constructor: de,
              init: function (t, e, n, r, i, o) {
                (this.elem = t),
                  (this.prop = n),
                  (this.easing = i || E.easing._default),
                  (this.options = e),
                  (this.start = this.now = this.cur()),
                  (this.end = r),
                  (this.unit = o || (E.cssNumber[n] ? "" : "px"));
              },
              cur: function () {
                var t = de.propHooks[this.prop];
                return t && t.get
                  ? t.get(this)
                  : de.propHooks._default.get(this);
              },
              run: function (t) {
                var e,
                  n = de.propHooks[this.prop];
                return (
                  this.options.duration
                    ? (this.pos = e =
                        E.easing[this.easing](
                          t,
                          this.options.duration * t,
                          0,
                          1,
                          this.options.duration
                        ))
                    : (this.pos = e = t),
                  (this.now = (this.end - this.start) * e + this.start),
                  this.options.step &&
                    this.options.step.call(this.elem, this.now, this),
                  n && n.set ? n.set(this) : de.propHooks._default.set(this),
                  this
                );
              },
            }),
            (de.prototype.init.prototype = de.prototype),
            (de.propHooks = {
              _default: {
                get: function (t) {
                  var e;
                  return 1 !== t.elem.nodeType ||
                    (null != t.elem[t.prop] && null == t.elem.style[t.prop])
                    ? t.elem[t.prop]
                    : (e = E.css(t.elem, t.prop, "")) && "auto" !== e
                    ? e
                    : 0;
                },
                set: function (t) {
                  E.fx.step[t.prop]
                    ? E.fx.step[t.prop](t)
                    : 1 !== t.elem.nodeType ||
                      (!E.cssHooks[t.prop] && null == t.elem.style[ie(t.prop)])
                    ? (t.elem[t.prop] = t.now)
                    : E.style(t.elem, t.prop, t.now + t.unit);
                },
              },
            }),
            (de.propHooks.scrollTop = de.propHooks.scrollLeft =
              {
                set: function (t) {
                  t.elem.nodeType &&
                    t.elem.parentNode &&
                    (t.elem[t.prop] = t.now);
                },
              }),
            (E.easing = {
              linear: function (t) {
                return t;
              },
              swing: function (t) {
                return 0.5 - Math.cos(t * Math.PI) / 2;
              },
              _default: "swing",
            }),
            (E.fx = de.prototype.init),
            (E.fx.step = {});
          var fe,
            he,
            pe = /^(?:toggle|show|hide)$/,
            me = /queueHooks$/;
          function ge() {
            he &&
              (!1 === _.hidden && r.requestAnimationFrame
                ? r.requestAnimationFrame(ge)
                : r.setTimeout(ge, E.fx.interval),
              E.fx.tick());
          }
          function ve() {
            return (
              r.setTimeout(function () {
                fe = void 0;
              }),
              (fe = Date.now())
            );
          }
          function ye(t, e) {
            var n,
              r = 0,
              i = { height: t };
            for (e = e ? 1 : 0; r < 4; r += 2 - e)
              i["margin" + (n = pt[r])] = i["padding" + n] = t;
            return e && (i.opacity = i.width = t), i;
          }
          function _e(t, e, n) {
            for (
              var r,
                i = (xe.tweeners[e] || []).concat(xe.tweeners["*"]),
                o = 0,
                s = i.length;
              o < s;
              o++
            )
              if ((r = i[o].call(n, e, t))) return r;
          }
          function xe(t, e, n) {
            var r,
              i,
              o = 0,
              s = xe.prefilters.length,
              a = E.Deferred().always(function () {
                delete u.elem;
              }),
              u = function () {
                if (i) return !1;
                for (
                  var e = fe || ve(),
                    n = Math.max(0, c.startTime + c.duration - e),
                    r = 1 - (n / c.duration || 0),
                    o = 0,
                    s = c.tweens.length;
                  o < s;
                  o++
                )
                  c.tweens[o].run(r);
                return (
                  a.notifyWith(t, [c, r, n]),
                  r < 1 && s
                    ? n
                    : (s || a.notifyWith(t, [c, 1, 0]),
                      a.resolveWith(t, [c]),
                      !1)
                );
              },
              c = a.promise({
                elem: t,
                props: E.extend({}, e),
                opts: E.extend(
                  !0,
                  { specialEasing: {}, easing: E.easing._default },
                  n
                ),
                originalProperties: e,
                originalOptions: n,
                startTime: fe || ve(),
                duration: n.duration,
                tweens: [],
                createTween: function (e, n) {
                  var r = E.Tween(
                    t,
                    c.opts,
                    e,
                    n,
                    c.opts.specialEasing[e] || c.opts.easing
                  );
                  return c.tweens.push(r), r;
                },
                stop: function (e) {
                  var n = 0,
                    r = e ? c.tweens.length : 0;
                  if (i) return this;
                  for (i = !0; n < r; n++) c.tweens[n].run(1);
                  return (
                    e
                      ? (a.notifyWith(t, [c, 1, 0]), a.resolveWith(t, [c, e]))
                      : a.rejectWith(t, [c, e]),
                    this
                  );
                },
              }),
              l = c.props;
            for (
              (function (t, e) {
                var n, r, i, o, s;
                for (n in t)
                  if (
                    ((i = e[(r = it(n))]),
                    (o = t[n]),
                    Array.isArray(o) && ((i = o[1]), (o = t[n] = o[0])),
                    n !== r && ((t[r] = o), delete t[n]),
                    (s = E.cssHooks[r]) && ("expand" in s))
                  )
                    for (n in ((o = s.expand(o)), delete t[r], o))
                      (n in t) || ((t[n] = o[n]), (e[n] = i));
                  else e[r] = i;
              })(l, c.opts.specialEasing);
              o < s;
              o++
            )
              if ((r = xe.prefilters[o].call(c, t, l, c.opts)))
                return (
                  v(r.stop) &&
                    (E._queueHooks(c.elem, c.opts.queue).stop = r.stop.bind(r)),
                  r
                );
            return (
              E.map(l, _e, c),
              v(c.opts.start) && c.opts.start.call(t, c),
              c
                .progress(c.opts.progress)
                .done(c.opts.done, c.opts.complete)
                .fail(c.opts.fail)
                .always(c.opts.always),
              E.fx.timer(
                E.extend(u, { elem: t, anim: c, queue: c.opts.queue })
              ),
              c
            );
          }
          (E.Animation = E.extend(xe, {
            tweeners: {
              "*": [
                function (t, e) {
                  var n = this.createTween(t, e);
                  return _t(n.elem, t, ht.exec(e), n), n;
                },
              ],
            },
            tweener: function (t, e) {
              v(t) ? ((e = t), (t = ["*"])) : (t = t.match(U));
              for (var n, r = 0, i = t.length; r < i; r++)
                (n = t[r]),
                  (xe.tweeners[n] = xe.tweeners[n] || []),
                  xe.tweeners[n].unshift(e);
            },
            prefilters: [
              function (t, e, n) {
                var r,
                  i,
                  o,
                  s,
                  a,
                  u,
                  c,
                  l,
                  d = "width" in e || "height" in e,
                  f = this,
                  h = {},
                  p = t.style,
                  m = t.nodeType && yt(t),
                  g = at.get(t, "fxshow");
                for (r in (n.queue ||
                  (null == (s = E._queueHooks(t, "fx")).unqueued &&
                    ((s.unqueued = 0),
                    (a = s.empty.fire),
                    (s.empty.fire = function () {
                      s.unqueued || a();
                    })),
                  s.unqueued++,
                  f.always(function () {
                    f.always(function () {
                      s.unqueued--, E.queue(t, "fx").length || s.empty.fire();
                    });
                  })),
                e))
                  if (((i = e[r]), pe.test(i))) {
                    if (
                      (delete e[r],
                      (o = o || "toggle" === i),
                      i === (m ? "hide" : "show"))
                    ) {
                      if ("show" !== i || !g || void 0 === g[r]) continue;
                      m = !0;
                    }
                    h[r] = (g && g[r]) || E.style(t, r);
                  }
                if ((u = !E.isEmptyObject(e)) || !E.isEmptyObject(h))
                  for (r in (d &&
                    1 === t.nodeType &&
                    ((n.overflow = [p.overflow, p.overflowX, p.overflowY]),
                    null == (c = g && g.display) && (c = at.get(t, "display")),
                    "none" === (l = E.css(t, "display")) &&
                      (c
                        ? (l = c)
                        : (wt([t], !0),
                          (c = t.style.display || c),
                          (l = E.css(t, "display")),
                          wt([t]))),
                    ("inline" === l || ("inline-block" === l && null != c)) &&
                      "none" === E.css(t, "float") &&
                      (u ||
                        (f.done(function () {
                          p.display = c;
                        }),
                        null == c &&
                          ((l = p.display), (c = "none" === l ? "" : l))),
                      (p.display = "inline-block"))),
                  n.overflow &&
                    ((p.overflow = "hidden"),
                    f.always(function () {
                      (p.overflow = n.overflow[0]),
                        (p.overflowX = n.overflow[1]),
                        (p.overflowY = n.overflow[2]);
                    })),
                  (u = !1),
                  h))
                    u ||
                      (g
                        ? "hidden" in g && (m = g.hidden)
                        : (g = at.access(t, "fxshow", { display: c })),
                      o && (g.hidden = !m),
                      m && wt([t], !0),
                      f.done(function () {
                        for (r in (m || wt([t]), at.remove(t, "fxshow"), h))
                          E.style(t, r, h[r]);
                      })),
                      (u = _e(m ? g[r] : 0, r, f)),
                      r in g ||
                        ((g[r] = u.start),
                        m && ((u.end = u.start), (u.start = 0)));
              },
            ],
            prefilter: function (t, e) {
              e ? xe.prefilters.unshift(t) : xe.prefilters.push(t);
            },
          })),
            (E.speed = function (t, e, n) {
              var r =
                t && "object" == typeof t
                  ? E.extend({}, t)
                  : {
                      complete: n || (!n && e) || (v(t) && t),
                      duration: t,
                      easing: (n && e) || (e && !v(e) && e),
                    };
              return (
                E.fx.off
                  ? (r.duration = 0)
                  : "number" != typeof r.duration &&
                    (r.duration in E.fx.speeds
                      ? (r.duration = E.fx.speeds[r.duration])
                      : (r.duration = E.fx.speeds._default)),
                (null != r.queue && !0 !== r.queue) || (r.queue = "fx"),
                (r.old = r.complete),
                (r.complete = function () {
                  v(r.old) && r.old.call(this),
                    r.queue && E.dequeue(this, r.queue);
                }),
                r
              );
            }),
            E.fn.extend({
              fadeTo: function (t, e, n, r) {
                return this.filter(yt)
                  .css("opacity", 0)
                  .show()
                  .end()
                  .animate({ opacity: e }, t, n, r);
              },
              animate: function (t, e, n, r) {
                var i = E.isEmptyObject(t),
                  o = E.speed(e, n, r),
                  s = function () {
                    var e = xe(this, E.extend({}, t), o);
                    (i || at.get(this, "finish")) && e.stop(!0);
                  };
                return (
                  (s.finish = s),
                  i || !1 === o.queue ? this.each(s) : this.queue(o.queue, s)
                );
              },
              stop: function (t, e, n) {
                var r = function (t) {
                  var e = t.stop;
                  delete t.stop, e(n);
                };
                return (
                  "string" != typeof t && ((n = e), (e = t), (t = void 0)),
                  e && this.queue(t || "fx", []),
                  this.each(function () {
                    var e = !0,
                      i = null != t && t + "queueHooks",
                      o = E.timers,
                      s = at.get(this);
                    if (i) s[i] && s[i].stop && r(s[i]);
                    else
                      for (i in s) s[i] && s[i].stop && me.test(i) && r(s[i]);
                    for (i = o.length; i--; )
                      o[i].elem !== this ||
                        (null != t && o[i].queue !== t) ||
                        (o[i].anim.stop(n), (e = !1), o.splice(i, 1));
                    (!e && n) || E.dequeue(this, t);
                  })
                );
              },
              finish: function (t) {
                return (
                  !1 !== t && (t = t || "fx"),
                  this.each(function () {
                    var e,
                      n = at.get(this),
                      r = n[t + "queue"],
                      i = n[t + "queueHooks"],
                      o = E.timers,
                      s = r ? r.length : 0;
                    for (
                      n.finish = !0,
                        E.queue(this, t, []),
                        i && i.stop && i.stop.call(this, !0),
                        e = o.length;
                      e--;

                    )
                      o[e].elem === this &&
                        o[e].queue === t &&
                        (o[e].anim.stop(!0), o.splice(e, 1));
                    for (e = 0; e < s; e++)
                      r[e] && r[e].finish && r[e].finish.call(this);
                    delete n.finish;
                  })
                );
              },
            }),
            E.each(["toggle", "show", "hide"], function (t, e) {
              var n = E.fn[e];
              E.fn[e] = function (t, r, i) {
                return null == t || "boolean" == typeof t
                  ? n.apply(this, arguments)
                  : this.animate(ye(e, !0), t, r, i);
              };
            }),
            E.each(
              {
                slideDown: ye("show"),
                slideUp: ye("hide"),
                slideToggle: ye("toggle"),
                fadeIn: { opacity: "show" },
                fadeOut: { opacity: "hide" },
                fadeToggle: { opacity: "toggle" },
              },
              function (t, e) {
                E.fn[t] = function (t, n, r) {
                  return this.animate(e, t, n, r);
                };
              }
            ),
            (E.timers = []),
            (E.fx.tick = function () {
              var t,
                e = 0,
                n = E.timers;
              for (fe = Date.now(); e < n.length; e++)
                (t = n[e])() || n[e] !== t || n.splice(e--, 1);
              n.length || E.fx.stop(), (fe = void 0);
            }),
            (E.fx.timer = function (t) {
              E.timers.push(t), E.fx.start();
            }),
            (E.fx.interval = 13),
            (E.fx.start = function () {
              he || ((he = !0), ge());
            }),
            (E.fx.stop = function () {
              he = null;
            }),
            (E.fx.speeds = { slow: 600, fast: 200, _default: 400 }),
            (E.fn.delay = function (t, e) {
              return (
                (t = (E.fx && E.fx.speeds[t]) || t),
                (e = e || "fx"),
                this.queue(e, function (e, n) {
                  var i = r.setTimeout(e, t);
                  n.stop = function () {
                    r.clearTimeout(i);
                  };
                })
              );
            }),
            (function () {
              var t = _.createElement("input"),
                e = _.createElement("select").appendChild(
                  _.createElement("option")
                );
              (t.type = "checkbox"),
                (g.checkOn = "" !== t.value),
                (g.optSelected = e.selected),
                ((t = _.createElement("input")).value = "t"),
                (t.type = "radio"),
                (g.radioValue = "t" === t.value);
            })();
          var be,
            we = E.expr.attrHandle;
          E.fn.extend({
            attr: function (t, e) {
              return tt(this, E.attr, t, e, arguments.length > 1);
            },
            removeAttr: function (t) {
              return this.each(function () {
                E.removeAttr(this, t);
              });
            },
          }),
            E.extend({
              attr: function (t, e, n) {
                var r,
                  i,
                  o = t.nodeType;
                if (3 !== o && 8 !== o && 2 !== o)
                  return void 0 === t.getAttribute
                    ? E.prop(t, e, n)
                    : ((1 === o && E.isXMLDoc(t)) ||
                        (i =
                          E.attrHooks[e.toLowerCase()] ||
                          (E.expr.match.bool.test(e) ? be : void 0)),
                      void 0 !== n
                        ? null === n
                          ? void E.removeAttr(t, e)
                          : i && "set" in i && void 0 !== (r = i.set(t, n, e))
                          ? r
                          : (t.setAttribute(e, n + ""), n)
                        : i && "get" in i && null !== (r = i.get(t, e))
                        ? r
                        : null == (r = E.find.attr(t, e))
                        ? void 0
                        : r);
              },
              attrHooks: {
                type: {
                  set: function (t, e) {
                    if (!g.radioValue && "radio" === e && C(t, "input")) {
                      var n = t.value;
                      return t.setAttribute("type", e), n && (t.value = n), e;
                    }
                  },
                },
              },
              removeAttr: function (t, e) {
                var n,
                  r = 0,
                  i = e && e.match(U);
                if (i && 1 === t.nodeType)
                  for (; (n = i[r++]); ) t.removeAttribute(n);
              },
            }),
            (be = {
              set: function (t, e, n) {
                return !1 === e ? E.removeAttr(t, n) : t.setAttribute(n, n), n;
              },
            }),
            E.each(E.expr.match.bool.source.match(/\w+/g), function (t, e) {
              var n = we[e] || E.find.attr;
              we[e] = function (t, e, r) {
                var i,
                  o,
                  s = e.toLowerCase();
                return (
                  r ||
                    ((o = we[s]),
                    (we[s] = i),
                    (i = null != n(t, e, r) ? s : null),
                    (we[s] = o)),
                  i
                );
              };
            });
          var Te = /^(?:input|select|textarea|button)$/i,
            Se = /^(?:a|area)$/i;
          function Ee(t) {
            return (t.match(U) || []).join(" ");
          }
          function ke(t) {
            return (t.getAttribute && t.getAttribute("class")) || "";
          }
          function Ce(t) {
            return Array.isArray(t)
              ? t
              : ("string" == typeof t && t.match(U)) || [];
          }
          E.fn.extend({
            prop: function (t, e) {
              return tt(this, E.prop, t, e, arguments.length > 1);
            },
            removeProp: function (t) {
              return this.each(function () {
                delete this[E.propFix[t] || t];
              });
            },
          }),
            E.extend({
              prop: function (t, e, n) {
                var r,
                  i,
                  o = t.nodeType;
                if (3 !== o && 8 !== o && 2 !== o)
                  return (
                    (1 === o && E.isXMLDoc(t)) ||
                      ((e = E.propFix[e] || e), (i = E.propHooks[e])),
                    void 0 !== n
                      ? i && "set" in i && void 0 !== (r = i.set(t, n, e))
                        ? r
                        : (t[e] = n)
                      : i && "get" in i && null !== (r = i.get(t, e))
                      ? r
                      : t[e]
                  );
              },
              propHooks: {
                tabIndex: {
                  get: function (t) {
                    var e = E.find.attr(t, "tabindex");
                    return e
                      ? parseInt(e, 10)
                      : Te.test(t.nodeName) || (Se.test(t.nodeName) && t.href)
                      ? 0
                      : -1;
                  },
                },
              },
              propFix: { for: "htmlFor", class: "className" },
            }),
            g.optSelected ||
              (E.propHooks.selected = {
                get: function (t) {
                  var e = t.parentNode;
                  return e && e.parentNode && e.parentNode.selectedIndex, null;
                },
                set: function (t) {
                  var e = t.parentNode;
                  e &&
                    (e.selectedIndex,
                    e.parentNode && e.parentNode.selectedIndex);
                },
              }),
            E.each(
              [
                "tabIndex",
                "readOnly",
                "maxLength",
                "cellSpacing",
                "cellPadding",
                "rowSpan",
                "colSpan",
                "useMap",
                "frameBorder",
                "contentEditable",
              ],
              function () {
                E.propFix[this.toLowerCase()] = this;
              }
            ),
            E.fn.extend({
              addClass: function (t) {
                var e, n, r, i, o, s;
                return v(t)
                  ? this.each(function (e) {
                      E(this).addClass(t.call(this, e, ke(this)));
                    })
                  : (e = Ce(t)).length
                  ? this.each(function () {
                      if (
                        ((r = ke(this)),
                        (n = 1 === this.nodeType && " " + Ee(r) + " "))
                      ) {
                        for (o = 0; o < e.length; o++)
                          (i = e[o]),
                            n.indexOf(" " + i + " ") < 0 && (n += i + " ");
                        (s = Ee(n)), r !== s && this.setAttribute("class", s);
                      }
                    })
                  : this;
              },
              removeClass: function (t) {
                var e, n, r, i, o, s;
                return v(t)
                  ? this.each(function (e) {
                      E(this).removeClass(t.call(this, e, ke(this)));
                    })
                  : arguments.length
                  ? (e = Ce(t)).length
                    ? this.each(function () {
                        if (
                          ((r = ke(this)),
                          (n = 1 === this.nodeType && " " + Ee(r) + " "))
                        ) {
                          for (o = 0; o < e.length; o++)
                            for (i = e[o]; n.indexOf(" " + i + " ") > -1; )
                              n = n.replace(" " + i + " ", " ");
                          (s = Ee(n)), r !== s && this.setAttribute("class", s);
                        }
                      })
                    : this
                  : this.attr("class", "");
              },
              toggleClass: function (t, e) {
                var n,
                  r,
                  i,
                  o,
                  s = typeof t,
                  a = "string" === s || Array.isArray(t);
                return v(t)
                  ? this.each(function (n) {
                      E(this).toggleClass(t.call(this, n, ke(this), e), e);
                    })
                  : "boolean" == typeof e && a
                  ? e
                    ? this.addClass(t)
                    : this.removeClass(t)
                  : ((n = Ce(t)),
                    this.each(function () {
                      if (a)
                        for (o = E(this), i = 0; i < n.length; i++)
                          (r = n[i]),
                            o.hasClass(r) ? o.removeClass(r) : o.addClass(r);
                      else
                        (void 0 !== t && "boolean" !== s) ||
                          ((r = ke(this)) && at.set(this, "__className__", r),
                          this.setAttribute &&
                            this.setAttribute(
                              "class",
                              r || !1 === t
                                ? ""
                                : at.get(this, "__className__") || ""
                            ));
                    }));
              },
              hasClass: function (t) {
                var e,
                  n,
                  r = 0;
                for (e = " " + t + " "; (n = this[r++]); )
                  if (
                    1 === n.nodeType &&
                    (" " + Ee(ke(n)) + " ").indexOf(e) > -1
                  )
                    return !0;
                return !1;
              },
            });
          var Le = /\r/g;
          E.fn.extend({
            val: function (t) {
              var e,
                n,
                r,
                i = this[0];
              return arguments.length
                ? ((r = v(t)),
                  this.each(function (n) {
                    var i;
                    1 === this.nodeType &&
                      (null == (i = r ? t.call(this, n, E(this).val()) : t)
                        ? (i = "")
                        : "number" == typeof i
                        ? (i += "")
                        : Array.isArray(i) &&
                          (i = E.map(i, function (t) {
                            return null == t ? "" : t + "";
                          })),
                      ((e =
                        E.valHooks[this.type] ||
                        E.valHooks[this.nodeName.toLowerCase()]) &&
                        "set" in e &&
                        void 0 !== e.set(this, i, "value")) ||
                        (this.value = i));
                  }))
                : i
                ? (e =
                    E.valHooks[i.type] ||
                    E.valHooks[i.nodeName.toLowerCase()]) &&
                  "get" in e &&
                  void 0 !== (n = e.get(i, "value"))
                  ? n
                  : "string" == typeof (n = i.value)
                  ? n.replace(Le, "")
                  : null == n
                  ? ""
                  : n
                : void 0;
            },
          }),
            E.extend({
              valHooks: {
                option: {
                  get: function (t) {
                    var e = E.find.attr(t, "value");
                    return null != e ? e : Ee(E.text(t));
                  },
                },
                select: {
                  get: function (t) {
                    var e,
                      n,
                      r,
                      i = t.options,
                      o = t.selectedIndex,
                      s = "select-one" === t.type,
                      a = s ? null : [],
                      u = s ? o + 1 : i.length;
                    for (r = o < 0 ? u : s ? o : 0; r < u; r++)
                      if (
                        ((n = i[r]).selected || r === o) &&
                        !n.disabled &&
                        (!n.parentNode.disabled || !C(n.parentNode, "optgroup"))
                      ) {
                        if (((e = E(n).val()), s)) return e;
                        a.push(e);
                      }
                    return a;
                  },
                  set: function (t, e) {
                    for (
                      var n, r, i = t.options, o = E.makeArray(e), s = i.length;
                      s--;

                    )
                      ((r = i[s]).selected =
                        E.inArray(E.valHooks.option.get(r), o) > -1) &&
                        (n = !0);
                    return n || (t.selectedIndex = -1), o;
                  },
                },
              },
            }),
            E.each(["radio", "checkbox"], function () {
              (E.valHooks[this] = {
                set: function (t, e) {
                  if (Array.isArray(e))
                    return (t.checked = E.inArray(E(t).val(), e) > -1);
                },
              }),
                g.checkOn ||
                  (E.valHooks[this].get = function (t) {
                    return null === t.getAttribute("value") ? "on" : t.value;
                  });
            });
          var Ae = r.location,
            De = { guid: Date.now() },
            qe = /\?/;
          E.parseXML = function (t) {
            var e, n;
            if (!t || "string" != typeof t) return null;
            try {
              e = new r.DOMParser().parseFromString(t, "text/xml");
            } catch (t) {}
            return (
              (n = e && e.getElementsByTagName("parsererror")[0]),
              (e && !n) ||
                E.error(
                  "Invalid XML: " +
                    (n
                      ? E.map(n.childNodes, function (t) {
                          return t.textContent;
                        }).join("\n")
                      : t)
                ),
              e
            );
          };
          var Oe = /^(?:focusinfocus|focusoutblur)$/,
            Me = function (t) {
              t.stopPropagation();
            };
          E.extend(E.event, {
            trigger: function (t, e, n, i) {
              var o,
                s,
                a,
                u,
                c,
                l,
                d,
                f,
                p = [n || _],
                m = h.call(t, "type") ? t.type : t,
                g = h.call(t, "namespace") ? t.namespace.split(".") : [];
              if (
                ((s = f = a = n = n || _),
                3 !== n.nodeType &&
                  8 !== n.nodeType &&
                  !Oe.test(m + E.event.triggered) &&
                  (m.indexOf(".") > -1 &&
                    ((g = m.split(".")), (m = g.shift()), g.sort()),
                  (c = m.indexOf(":") < 0 && "on" + m),
                  ((t = t[E.expando]
                    ? t
                    : new E.Event(m, "object" == typeof t && t)).isTrigger = i
                    ? 2
                    : 3),
                  (t.namespace = g.join(".")),
                  (t.rnamespace = t.namespace
                    ? new RegExp(
                        "(^|\\.)" + g.join("\\.(?:.*\\.|)") + "(\\.|$)"
                      )
                    : null),
                  (t.result = void 0),
                  t.target || (t.target = n),
                  (e = null == e ? [t] : E.makeArray(e, [t])),
                  (d = E.event.special[m] || {}),
                  i || !d.trigger || !1 !== d.trigger.apply(n, e)))
              ) {
                if (!i && !d.noBubble && !y(n)) {
                  for (
                    u = d.delegateType || m,
                      Oe.test(u + m) || (s = s.parentNode);
                    s;
                    s = s.parentNode
                  )
                    p.push(s), (a = s);
                  a === (n.ownerDocument || _) &&
                    p.push(a.defaultView || a.parentWindow || r);
                }
                for (o = 0; (s = p[o++]) && !t.isPropagationStopped(); )
                  (f = s),
                    (t.type = o > 1 ? u : d.bindType || m),
                    (l =
                      (at.get(s, "events") || Object.create(null))[t.type] &&
                      at.get(s, "handle")) && l.apply(s, e),
                    (l = c && s[c]) &&
                      l.apply &&
                      ot(s) &&
                      ((t.result = l.apply(s, e)),
                      !1 === t.result && t.preventDefault());
                return (
                  (t.type = m),
                  i ||
                    t.isDefaultPrevented() ||
                    (d._default && !1 !== d._default.apply(p.pop(), e)) ||
                    !ot(n) ||
                    (c &&
                      v(n[m]) &&
                      !y(n) &&
                      ((a = n[c]) && (n[c] = null),
                      (E.event.triggered = m),
                      t.isPropagationStopped() && f.addEventListener(m, Me),
                      n[m](),
                      t.isPropagationStopped() && f.removeEventListener(m, Me),
                      (E.event.triggered = void 0),
                      a && (n[c] = a))),
                  t.result
                );
              }
            },
            simulate: function (t, e, n) {
              var r = E.extend(new E.Event(), n, { type: t, isSimulated: !0 });
              E.event.trigger(r, null, e);
            },
          }),
            E.fn.extend({
              trigger: function (t, e) {
                return this.each(function () {
                  E.event.trigger(t, e, this);
                });
              },
              triggerHandler: function (t, e) {
                var n = this[0];
                if (n) return E.event.trigger(t, e, n, !0);
              },
            });
          var Pe = /\[\]$/,
            Re = /\r?\n/g,
            Ne = /^(?:submit|button|image|reset|file)$/i,
            Ie = /^(?:input|select|textarea|keygen)/i;
          function je(t, e, n, r) {
            var i;
            if (Array.isArray(e))
              E.each(e, function (e, i) {
                n || Pe.test(t)
                  ? r(t, i)
                  : je(
                      t +
                        "[" +
                        ("object" == typeof i && null != i ? e : "") +
                        "]",
                      i,
                      n,
                      r
                    );
              });
            else if (n || "object" !== w(e)) r(t, e);
            else for (i in e) je(t + "[" + i + "]", e[i], n, r);
          }
          (E.param = function (t, e) {
            var n,
              r = [],
              i = function (t, e) {
                var n = v(e) ? e() : e;
                r[r.length] =
                  encodeURIComponent(t) +
                  "=" +
                  encodeURIComponent(null == n ? "" : n);
              };
            if (null == t) return "";
            if (Array.isArray(t) || (t.jquery && !E.isPlainObject(t)))
              E.each(t, function () {
                i(this.name, this.value);
              });
            else for (n in t) je(n, t[n], e, i);
            return r.join("&");
          }),
            E.fn.extend({
              serialize: function () {
                return E.param(this.serializeArray());
              },
              serializeArray: function () {
                return this.map(function () {
                  var t = E.prop(this, "elements");
                  return t ? E.makeArray(t) : this;
                })
                  .filter(function () {
                    var t = this.type;
                    return (
                      this.name &&
                      !E(this).is(":disabled") &&
                      Ie.test(this.nodeName) &&
                      !Ne.test(t) &&
                      (this.checked || !Et.test(t))
                    );
                  })
                  .map(function (t, e) {
                    var n = E(this).val();
                    return null == n
                      ? null
                      : Array.isArray(n)
                      ? E.map(n, function (t) {
                          return { name: e.name, value: t.replace(Re, "\r\n") };
                        })
                      : { name: e.name, value: n.replace(Re, "\r\n") };
                  })
                  .get();
              },
            });
          var He = /%20/g,
            ze = /#.*$/,
            Fe = /([?&])_=[^&]*/,
            Be = /^(.*?):[ \t]*([^\r\n]*)$/gm,
            We = /^(?:GET|HEAD)$/,
            $e = /^\/\//,
            Ye = {},
            Ge = {},
            Ue = "*/".concat("*"),
            Xe = _.createElement("a");
          function Ve(t) {
            return function (e, n) {
              "string" != typeof e && ((n = e), (e = "*"));
              var r,
                i = 0,
                o = e.toLowerCase().match(U) || [];
              if (v(n))
                for (; (r = o[i++]); )
                  "+" === r[0]
                    ? ((r = r.slice(1) || "*"), (t[r] = t[r] || []).unshift(n))
                    : (t[r] = t[r] || []).push(n);
            };
          }
          function Qe(t, e, n, r) {
            var i = {},
              o = t === Ge;
            function s(a) {
              var u;
              return (
                (i[a] = !0),
                E.each(t[a] || [], function (t, a) {
                  var c = a(e, n, r);
                  return "string" != typeof c || o || i[c]
                    ? o
                      ? !(u = c)
                      : void 0
                    : (e.dataTypes.unshift(c), s(c), !1);
                }),
                u
              );
            }
            return s(e.dataTypes[0]) || (!i["*"] && s("*"));
          }
          function Ke(t, e) {
            var n,
              r,
              i = E.ajaxSettings.flatOptions || {};
            for (n in e)
              void 0 !== e[n] && ((i[n] ? t : r || (r = {}))[n] = e[n]);
            return r && E.extend(!0, t, r), t;
          }
          (Xe.href = Ae.href),
            E.extend({
              active: 0,
              lastModified: {},
              etag: {},
              ajaxSettings: {
                url: Ae.href,
                type: "GET",
                isLocal:
                  /^(?:about|app|app-storage|.+-extension|file|res|widget):$/.test(
                    Ae.protocol
                  ),
                global: !0,
                processData: !0,
                async: !0,
                contentType: "application/x-www-form-urlencoded; charset=UTF-8",
                accepts: {
                  "*": Ue,
                  text: "text/plain",
                  html: "text/html",
                  xml: "application/xml, text/xml",
                  json: "application/json, text/javascript",
                },
                contents: { xml: /\bxml\b/, html: /\bhtml/, json: /\bjson\b/ },
                responseFields: {
                  xml: "responseXML",
                  text: "responseText",
                  json: "responseJSON",
                },
                converters: {
                  "* text": String,
                  "text html": !0,
                  "text json": JSON.parse,
                  "text xml": E.parseXML,
                },
                flatOptions: { url: !0, context: !0 },
              },
              ajaxSetup: function (t, e) {
                return e ? Ke(Ke(t, E.ajaxSettings), e) : Ke(E.ajaxSettings, t);
              },
              ajaxPrefilter: Ve(Ye),
              ajaxTransport: Ve(Ge),
              ajax: function (t, e) {
                "object" == typeof t && ((e = t), (t = void 0)), (e = e || {});
                var n,
                  i,
                  o,
                  s,
                  a,
                  u,
                  c,
                  l,
                  d,
                  f,
                  h = E.ajaxSetup({}, e),
                  p = h.context || h,
                  m = h.context && (p.nodeType || p.jquery) ? E(p) : E.event,
                  g = E.Deferred(),
                  v = E.Callbacks("once memory"),
                  y = h.statusCode || {},
                  x = {},
                  b = {},
                  w = "canceled",
                  T = {
                    readyState: 0,
                    getResponseHeader: function (t) {
                      var e;
                      if (c) {
                        if (!s)
                          for (s = {}; (e = Be.exec(o)); )
                            s[e[1].toLowerCase() + " "] = (
                              s[e[1].toLowerCase() + " "] || []
                            ).concat(e[2]);
                        e = s[t.toLowerCase() + " "];
                      }
                      return null == e ? null : e.join(", ");
                    },
                    getAllResponseHeaders: function () {
                      return c ? o : null;
                    },
                    setRequestHeader: function (t, e) {
                      return (
                        null == c &&
                          ((t = b[t.toLowerCase()] = b[t.toLowerCase()] || t),
                          (x[t] = e)),
                        this
                      );
                    },
                    overrideMimeType: function (t) {
                      return null == c && (h.mimeType = t), this;
                    },
                    statusCode: function (t) {
                      var e;
                      if (t)
                        if (c) T.always(t[T.status]);
                        else for (e in t) y[e] = [y[e], t[e]];
                      return this;
                    },
                    abort: function (t) {
                      var e = t || w;
                      return n && n.abort(e), S(0, e), this;
                    },
                  };
                if (
                  (g.promise(T),
                  (h.url = ((t || h.url || Ae.href) + "").replace(
                    $e,
                    Ae.protocol + "//"
                  )),
                  (h.type = e.method || e.type || h.method || h.type),
                  (h.dataTypes = (h.dataType || "*").toLowerCase().match(U) || [
                    "",
                  ]),
                  null == h.crossDomain)
                ) {
                  u = _.createElement("a");
                  try {
                    (u.href = h.url),
                      (u.href = u.href),
                      (h.crossDomain =
                        Xe.protocol + "//" + Xe.host !=
                        u.protocol + "//" + u.host);
                  } catch (t) {
                    h.crossDomain = !0;
                  }
                }
                if (
                  (h.data &&
                    h.processData &&
                    "string" != typeof h.data &&
                    (h.data = E.param(h.data, h.traditional)),
                  Qe(Ye, h, e, T),
                  c)
                )
                  return T;
                for (d in ((l = E.event && h.global) &&
                  0 == E.active++ &&
                  E.event.trigger("ajaxStart"),
                (h.type = h.type.toUpperCase()),
                (h.hasContent = !We.test(h.type)),
                (i = h.url.replace(ze, "")),
                h.hasContent
                  ? h.data &&
                    h.processData &&
                    0 ===
                      (h.contentType || "").indexOf(
                        "application/x-www-form-urlencoded"
                      ) &&
                    (h.data = h.data.replace(He, "+"))
                  : ((f = h.url.slice(i.length)),
                    h.data &&
                      (h.processData || "string" == typeof h.data) &&
                      ((i += (qe.test(i) ? "&" : "?") + h.data), delete h.data),
                    !1 === h.cache &&
                      ((i = i.replace(Fe, "$1")),
                      (f = (qe.test(i) ? "&" : "?") + "_=" + De.guid++ + f)),
                    (h.url = i + f)),
                h.ifModified &&
                  (E.lastModified[i] &&
                    T.setRequestHeader("If-Modified-Since", E.lastModified[i]),
                  E.etag[i] && T.setRequestHeader("If-None-Match", E.etag[i])),
                ((h.data && h.hasContent && !1 !== h.contentType) ||
                  e.contentType) &&
                  T.setRequestHeader("Content-Type", h.contentType),
                T.setRequestHeader(
                  "Accept",
                  h.dataTypes[0] && h.accepts[h.dataTypes[0]]
                    ? h.accepts[h.dataTypes[0]] +
                        ("*" !== h.dataTypes[0] ? ", " + Ue + "; q=0.01" : "")
                    : h.accepts["*"]
                ),
                h.headers))
                  T.setRequestHeader(d, h.headers[d]);
                if (h.beforeSend && (!1 === h.beforeSend.call(p, T, h) || c))
                  return T.abort();
                if (
                  ((w = "abort"),
                  v.add(h.complete),
                  T.done(h.success),
                  T.fail(h.error),
                  (n = Qe(Ge, h, e, T)))
                ) {
                  if (
                    ((T.readyState = 1), l && m.trigger("ajaxSend", [T, h]), c)
                  )
                    return T;
                  h.async &&
                    h.timeout > 0 &&
                    (a = r.setTimeout(function () {
                      T.abort("timeout");
                    }, h.timeout));
                  try {
                    (c = !1), n.send(x, S);
                  } catch (t) {
                    if (c) throw t;
                    S(-1, t);
                  }
                } else S(-1, "No Transport");
                function S(t, e, s, u) {
                  var d,
                    f,
                    _,
                    x,
                    b,
                    w = e;
                  c ||
                    ((c = !0),
                    a && r.clearTimeout(a),
                    (n = void 0),
                    (o = u || ""),
                    (T.readyState = t > 0 ? 4 : 0),
                    (d = (t >= 200 && t < 300) || 304 === t),
                    s &&
                      (x = (function (t, e, n) {
                        for (
                          var r, i, o, s, a = t.contents, u = t.dataTypes;
                          "*" === u[0];

                        )
                          u.shift(),
                            void 0 === r &&
                              (r =
                                t.mimeType ||
                                e.getResponseHeader("Content-Type"));
                        if (r)
                          for (i in a)
                            if (a[i] && a[i].test(r)) {
                              u.unshift(i);
                              break;
                            }
                        if (u[0] in n) o = u[0];
                        else {
                          for (i in n) {
                            if (!u[0] || t.converters[i + " " + u[0]]) {
                              o = i;
                              break;
                            }
                            s || (s = i);
                          }
                          o = o || s;
                        }
                        if (o) return o !== u[0] && u.unshift(o), n[o];
                      })(h, T, s)),
                    !d &&
                      E.inArray("script", h.dataTypes) > -1 &&
                      E.inArray("json", h.dataTypes) < 0 &&
                      (h.converters["text script"] = function () {}),
                    (x = (function (t, e, n, r) {
                      var i,
                        o,
                        s,
                        a,
                        u,
                        c = {},
                        l = t.dataTypes.slice();
                      if (l[1])
                        for (s in t.converters)
                          c[s.toLowerCase()] = t.converters[s];
                      for (o = l.shift(); o; )
                        if (
                          (t.responseFields[o] && (n[t.responseFields[o]] = e),
                          !u &&
                            r &&
                            t.dataFilter &&
                            (e = t.dataFilter(e, t.dataType)),
                          (u = o),
                          (o = l.shift()))
                        )
                          if ("*" === o) o = u;
                          else if ("*" !== u && u !== o) {
                            if (!(s = c[u + " " + o] || c["* " + o]))
                              for (i in c)
                                if (
                                  (a = i.split(" "))[1] === o &&
                                  (s = c[u + " " + a[0]] || c["* " + a[0]])
                                ) {
                                  !0 === s
                                    ? (s = c[i])
                                    : !0 !== c[i] &&
                                      ((o = a[0]), l.unshift(a[1]));
                                  break;
                                }
                            if (!0 !== s)
                              if (s && t.throws) e = s(e);
                              else
                                try {
                                  e = s(e);
                                } catch (t) {
                                  return {
                                    state: "parsererror",
                                    error: s
                                      ? t
                                      : "No conversion from " + u + " to " + o,
                                  };
                                }
                          }
                      return { state: "success", data: e };
                    })(h, x, T, d)),
                    d
                      ? (h.ifModified &&
                          ((b = T.getResponseHeader("Last-Modified")) &&
                            (E.lastModified[i] = b),
                          (b = T.getResponseHeader("etag")) && (E.etag[i] = b)),
                        204 === t || "HEAD" === h.type
                          ? (w = "nocontent")
                          : 304 === t
                          ? (w = "notmodified")
                          : ((w = x.state), (f = x.data), (d = !(_ = x.error))))
                      : ((_ = w),
                        (!t && w) || ((w = "error"), t < 0 && (t = 0))),
                    (T.status = t),
                    (T.statusText = (e || w) + ""),
                    d
                      ? g.resolveWith(p, [f, w, T])
                      : g.rejectWith(p, [T, w, _]),
                    T.statusCode(y),
                    (y = void 0),
                    l &&
                      m.trigger(d ? "ajaxSuccess" : "ajaxError", [
                        T,
                        h,
                        d ? f : _,
                      ]),
                    v.fireWith(p, [T, w]),
                    l &&
                      (m.trigger("ajaxComplete", [T, h]),
                      --E.active || E.event.trigger("ajaxStop")));
                }
                return T;
              },
              getJSON: function (t, e, n) {
                return E.get(t, e, n, "json");
              },
              getScript: function (t, e) {
                return E.get(t, void 0, e, "script");
              },
            }),
            E.each(["get", "post"], function (t, e) {
              E[e] = function (t, n, r, i) {
                return (
                  v(n) && ((i = i || r), (r = n), (n = void 0)),
                  E.ajax(
                    E.extend(
                      { url: t, type: e, dataType: i, data: n, success: r },
                      E.isPlainObject(t) && t
                    )
                  )
                );
              };
            }),
            E.ajaxPrefilter(function (t) {
              var e;
              for (e in t.headers)
                "content-type" === e.toLowerCase() &&
                  (t.contentType = t.headers[e] || "");
            }),
            (E._evalUrl = function (t, e, n) {
              return E.ajax({
                url: t,
                type: "GET",
                dataType: "script",
                cache: !0,
                async: !1,
                global: !1,
                converters: { "text script": function () {} },
                dataFilter: function (t) {
                  E.globalEval(t, e, n);
                },
              });
            }),
            E.fn.extend({
              wrapAll: function (t) {
                var e;
                return (
                  this[0] &&
                    (v(t) && (t = t.call(this[0])),
                    (e = E(t, this[0].ownerDocument).eq(0).clone(!0)),
                    this[0].parentNode && e.insertBefore(this[0]),
                    e
                      .map(function () {
                        for (var t = this; t.firstElementChild; )
                          t = t.firstElementChild;
                        return t;
                      })
                      .append(this)),
                  this
                );
              },
              wrapInner: function (t) {
                return v(t)
                  ? this.each(function (e) {
                      E(this).wrapInner(t.call(this, e));
                    })
                  : this.each(function () {
                      var e = E(this),
                        n = e.contents();
                      n.length ? n.wrapAll(t) : e.append(t);
                    });
              },
              wrap: function (t) {
                var e = v(t);
                return this.each(function (n) {
                  E(this).wrapAll(e ? t.call(this, n) : t);
                });
              },
              unwrap: function (t) {
                return (
                  this.parent(t)
                    .not("body")
                    .each(function () {
                      E(this).replaceWith(this.childNodes);
                    }),
                  this
                );
              },
            }),
            (E.expr.pseudos.hidden = function (t) {
              return !E.expr.pseudos.visible(t);
            }),
            (E.expr.pseudos.visible = function (t) {
              return !!(
                t.offsetWidth ||
                t.offsetHeight ||
                t.getClientRects().length
              );
            }),
            (E.ajaxSettings.xhr = function () {
              try {
                return new r.XMLHttpRequest();
              } catch (t) {}
            });
          var Je = { 0: 200, 1223: 204 },
            Ze = E.ajaxSettings.xhr();
          (g.cors = !!Ze && "withCredentials" in Ze),
            (g.ajax = Ze = !!Ze),
            E.ajaxTransport(function (t) {
              var e, n;
              if (g.cors || (Ze && !t.crossDomain))
                return {
                  send: function (i, o) {
                    var s,
                      a = t.xhr();
                    if (
                      (a.open(t.type, t.url, t.async, t.username, t.password),
                      t.xhrFields)
                    )
                      for (s in t.xhrFields) a[s] = t.xhrFields[s];
                    for (s in (t.mimeType &&
                      a.overrideMimeType &&
                      a.overrideMimeType(t.mimeType),
                    t.crossDomain ||
                      i["X-Requested-With"] ||
                      (i["X-Requested-With"] = "XMLHttpRequest"),
                    i))
                      a.setRequestHeader(s, i[s]);
                    (e = function (t) {
                      return function () {
                        e &&
                          ((e =
                            n =
                            a.onload =
                            a.onerror =
                            a.onabort =
                            a.ontimeout =
                            a.onreadystatechange =
                              null),
                          "abort" === t
                            ? a.abort()
                            : "error" === t
                            ? "number" != typeof a.status
                              ? o(0, "error")
                              : o(a.status, a.statusText)
                            : o(
                                Je[a.status] || a.status,
                                a.statusText,
                                "text" !== (a.responseType || "text") ||
                                  "string" != typeof a.responseText
                                  ? { binary: a.response }
                                  : { text: a.responseText },
                                a.getAllResponseHeaders()
                              ));
                      };
                    }),
                      (a.onload = e()),
                      (n = a.onerror = a.ontimeout = e("error")),
                      void 0 !== a.onabort
                        ? (a.onabort = n)
                        : (a.onreadystatechange = function () {
                            4 === a.readyState &&
                              r.setTimeout(function () {
                                e && n();
                              });
                          }),
                      (e = e("abort"));
                    try {
                      a.send((t.hasContent && t.data) || null);
                    } catch (t) {
                      if (e) throw t;
                    }
                  },
                  abort: function () {
                    e && e();
                  },
                };
            }),
            E.ajaxPrefilter(function (t) {
              t.crossDomain && (t.contents.script = !1);
            }),
            E.ajaxSetup({
              accepts: {
                script:
                  "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript",
              },
              contents: { script: /\b(?:java|ecma)script\b/ },
              converters: {
                "text script": function (t) {
                  return E.globalEval(t), t;
                },
              },
            }),
            E.ajaxPrefilter("script", function (t) {
              void 0 === t.cache && (t.cache = !1),
                t.crossDomain && (t.type = "GET");
            }),
            E.ajaxTransport("script", function (t) {
              var e, n;
              if (t.crossDomain || t.scriptAttrs)
                return {
                  send: function (r, i) {
                    (e = E("<script>")
                      .attr(t.scriptAttrs || {})
                      .prop({ charset: t.scriptCharset, src: t.url })
                      .on(
                        "load error",
                        (n = function (t) {
                          e.remove(),
                            (n = null),
                            t && i("error" === t.type ? 404 : 200, t.type);
                        })
                      )),
                      _.head.appendChild(e[0]);
                  },
                  abort: function () {
                    n && n();
                  },
                };
            });
          var tn,
            en = [],
            nn = /(=)\?(?=&|$)|\?\?/;
          E.ajaxSetup({
            jsonp: "callback",
            jsonpCallback: function () {
              var t = en.pop() || E.expando + "_" + De.guid++;
              return (this[t] = !0), t;
            },
          }),
            E.ajaxPrefilter("json jsonp", function (t, e, n) {
              var i,
                o,
                s,
                a =
                  !1 !== t.jsonp &&
                  (nn.test(t.url)
                    ? "url"
                    : "string" == typeof t.data &&
                      0 ===
                        (t.contentType || "").indexOf(
                          "application/x-www-form-urlencoded"
                        ) &&
                      nn.test(t.data) &&
                      "data");
              if (a || "jsonp" === t.dataTypes[0])
                return (
                  (i = t.jsonpCallback =
                    v(t.jsonpCallback) ? t.jsonpCallback() : t.jsonpCallback),
                  a
                    ? (t[a] = t[a].replace(nn, "$1" + i))
                    : !1 !== t.jsonp &&
                      (t.url +=
                        (qe.test(t.url) ? "&" : "?") + t.jsonp + "=" + i),
                  (t.converters["script json"] = function () {
                    return s || E.error(i + " was not called"), s[0];
                  }),
                  (t.dataTypes[0] = "json"),
                  (o = r[i]),
                  (r[i] = function () {
                    s = arguments;
                  }),
                  n.always(function () {
                    void 0 === o ? E(r).removeProp(i) : (r[i] = o),
                      t[i] && ((t.jsonpCallback = e.jsonpCallback), en.push(i)),
                      s && v(o) && o(s[0]),
                      (s = o = void 0);
                  }),
                  "script"
                );
            }),
            (g.createHTMLDocument =
              (((tn = _.implementation.createHTMLDocument("").body).innerHTML =
                "<form></form><form></form>"),
              2 === tn.childNodes.length)),
            (E.parseHTML = function (t, e, n) {
              return "string" != typeof t
                ? []
                : ("boolean" == typeof e && ((n = e), (e = !1)),
                  e ||
                    (g.createHTMLDocument
                      ? (((r = (e =
                          _.implementation.createHTMLDocument(
                            ""
                          )).createElement("base")).href = _.location.href),
                        e.head.appendChild(r))
                      : (e = _)),
                  (o = !n && []),
                  (i = z.exec(t))
                    ? [e.createElement(i[1])]
                    : ((i = Ot([t], e, o)),
                      o && o.length && E(o).remove(),
                      E.merge([], i.childNodes)));
              var r, i, o;
            }),
            (E.fn.load = function (t, e, n) {
              var r,
                i,
                o,
                s = this,
                a = t.indexOf(" ");
              return (
                a > -1 && ((r = Ee(t.slice(a))), (t = t.slice(0, a))),
                v(e)
                  ? ((n = e), (e = void 0))
                  : e && "object" == typeof e && (i = "POST"),
                s.length > 0 &&
                  E.ajax({
                    url: t,
                    type: i || "GET",
                    dataType: "html",
                    data: e,
                  })
                    .done(function (t) {
                      (o = arguments),
                        s.html(
                          r ? E("<div>").append(E.parseHTML(t)).find(r) : t
                        );
                    })
                    .always(
                      n &&
                        function (t, e) {
                          s.each(function () {
                            n.apply(this, o || [t.responseText, e, t]);
                          });
                        }
                    ),
                this
              );
            }),
            (E.expr.pseudos.animated = function (t) {
              return E.grep(E.timers, function (e) {
                return t === e.elem;
              }).length;
            }),
            (E.offset = {
              setOffset: function (t, e, n) {
                var r,
                  i,
                  o,
                  s,
                  a,
                  u,
                  c = E.css(t, "position"),
                  l = E(t),
                  d = {};
                "static" === c && (t.style.position = "relative"),
                  (a = l.offset()),
                  (o = E.css(t, "top")),
                  (u = E.css(t, "left")),
                  ("absolute" === c || "fixed" === c) &&
                  (o + u).indexOf("auto") > -1
                    ? ((s = (r = l.position()).top), (i = r.left))
                    : ((s = parseFloat(o) || 0), (i = parseFloat(u) || 0)),
                  v(e) && (e = e.call(t, n, E.extend({}, a))),
                  null != e.top && (d.top = e.top - a.top + s),
                  null != e.left && (d.left = e.left - a.left + i),
                  "using" in e ? e.using.call(t, d) : l.css(d);
              },
            }),
            E.fn.extend({
              offset: function (t) {
                if (arguments.length)
                  return void 0 === t
                    ? this
                    : this.each(function (e) {
                        E.offset.setOffset(this, t, e);
                      });
                var e,
                  n,
                  r = this[0];
                return r
                  ? r.getClientRects().length
                    ? ((e = r.getBoundingClientRect()),
                      (n = r.ownerDocument.defaultView),
                      {
                        top: e.top + n.pageYOffset,
                        left: e.left + n.pageXOffset,
                      })
                    : { top: 0, left: 0 }
                  : void 0;
              },
              position: function () {
                if (this[0]) {
                  var t,
                    e,
                    n,
                    r = this[0],
                    i = { top: 0, left: 0 };
                  if ("fixed" === E.css(r, "position"))
                    e = r.getBoundingClientRect();
                  else {
                    for (
                      e = this.offset(),
                        n = r.ownerDocument,
                        t = r.offsetParent || n.documentElement;
                      t &&
                      (t === n.body || t === n.documentElement) &&
                      "static" === E.css(t, "position");

                    )
                      t = t.parentNode;
                    t &&
                      t !== r &&
                      1 === t.nodeType &&
                      (((i = E(t).offset()).top += E.css(
                        t,
                        "borderTopWidth",
                        !0
                      )),
                      (i.left += E.css(t, "borderLeftWidth", !0)));
                  }
                  return {
                    top: e.top - i.top - E.css(r, "marginTop", !0),
                    left: e.left - i.left - E.css(r, "marginLeft", !0),
                  };
                }
              },
              offsetParent: function () {
                return this.map(function () {
                  for (
                    var t = this.offsetParent;
                    t && "static" === E.css(t, "position");

                  )
                    t = t.offsetParent;
                  return t || mt;
                });
              },
            }),
            E.each(
              { scrollLeft: "pageXOffset", scrollTop: "pageYOffset" },
              function (t, e) {
                var n = "pageYOffset" === e;
                E.fn[t] = function (r) {
                  return tt(
                    this,
                    function (t, r, i) {
                      var o;
                      if (
                        (y(t)
                          ? (o = t)
                          : 9 === t.nodeType && (o = t.defaultView),
                        void 0 === i)
                      )
                        return o ? o[e] : t[r];
                      o
                        ? o.scrollTo(
                            n ? o.pageXOffset : i,
                            n ? i : o.pageYOffset
                          )
                        : (t[r] = i);
                    },
                    t,
                    r,
                    arguments.length
                  );
                };
              }
            ),
            E.each(["top", "left"], function (t, e) {
              E.cssHooks[e] = te(g.pixelPosition, function (t, n) {
                if (n)
                  return (
                    (n = Zt(t, e)), Xt.test(n) ? E(t).position()[e] + "px" : n
                  );
              });
            }),
            E.each({ Height: "height", Width: "width" }, function (t, e) {
              E.each(
                { padding: "inner" + t, content: e, "": "outer" + t },
                function (n, r) {
                  E.fn[r] = function (i, o) {
                    var s = arguments.length && (n || "boolean" != typeof i),
                      a = n || (!0 === i || !0 === o ? "margin" : "border");
                    return tt(
                      this,
                      function (e, n, i) {
                        var o;
                        return y(e)
                          ? 0 === r.indexOf("outer")
                            ? e["inner" + t]
                            : e.document.documentElement["client" + t]
                          : 9 === e.nodeType
                          ? ((o = e.documentElement),
                            Math.max(
                              e.body["scroll" + t],
                              o["scroll" + t],
                              e.body["offset" + t],
                              o["offset" + t],
                              o["client" + t]
                            ))
                          : void 0 === i
                          ? E.css(e, n, a)
                          : E.style(e, n, i, a);
                      },
                      e,
                      s ? i : void 0,
                      s
                    );
                  };
                }
              );
            }),
            E.each(
              [
                "ajaxStart",
                "ajaxStop",
                "ajaxComplete",
                "ajaxError",
                "ajaxSuccess",
                "ajaxSend",
              ],
              function (t, e) {
                E.fn[e] = function (t) {
                  return this.on(e, t);
                };
              }
            ),
            E.fn.extend({
              bind: function (t, e, n) {
                return this.on(t, null, e, n);
              },
              unbind: function (t, e) {
                return this.off(t, null, e);
              },
              delegate: function (t, e, n, r) {
                return this.on(e, t, n, r);
              },
              undelegate: function (t, e, n) {
                return 1 === arguments.length
                  ? this.off(t, "**")
                  : this.off(e, t || "**", n);
              },
              hover: function (t, e) {
                return this.on("mouseenter", t).on("mouseleave", e || t);
              },
            }),
            E.each(
              "blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(
                " "
              ),
              function (t, e) {
                E.fn[e] = function (t, n) {
                  return arguments.length > 0
                    ? this.on(e, null, t, n)
                    : this.trigger(e);
                };
              }
            );
          var rn = /^[\s\uFEFF\xA0]+|([^\s\uFEFF\xA0])[\s\uFEFF\xA0]+$/g;
          (E.proxy = function (t, e) {
            var n, r, i;
            if (("string" == typeof e && ((n = t[e]), (e = t), (t = n)), v(t)))
              return (
                (r = a.call(arguments, 2)),
                (i = function () {
                  return t.apply(e || this, r.concat(a.call(arguments)));
                }),
                (i.guid = t.guid = t.guid || E.guid++),
                i
              );
          }),
            (E.holdReady = function (t) {
              t ? E.readyWait++ : E.ready(!0);
            }),
            (E.isArray = Array.isArray),
            (E.parseJSON = JSON.parse),
            (E.nodeName = C),
            (E.isFunction = v),
            (E.isWindow = y),
            (E.camelCase = it),
            (E.type = w),
            (E.now = Date.now),
            (E.isNumeric = function (t) {
              var e = E.type(t);
              return (
                ("number" === e || "string" === e) && !isNaN(t - parseFloat(t))
              );
            }),
            (E.trim = function (t) {
              return null == t ? "" : (t + "").replace(rn, "$1");
            }),
            void 0 ===
              (n = function () {
                return E;
              }.apply(e, [])) || (t.exports = n);
          var on = r.jQuery,
            sn = r.$;
          return (
            (E.noConflict = function (t) {
              return (
                r.$ === E && (r.$ = sn),
                t && r.jQuery === E && (r.jQuery = on),
                E
              );
            }),
            void 0 === i && (r.jQuery = r.$ = E),
            E
          );
        });
      },
      751: function (t, e, n) {
        var r, i, o;
        window,
          (i = [n(794), n(131)]),
          void 0 ===
            (o =
              "function" ==
              typeof (r = function (t, e) {
                "use strict";
                var n = t.create("masonry");
                n.compatOptions.fitWidth = "isFitWidth";
                var r = n.prototype;
                return (
                  (r._resetLayout = function () {
                    this.getSize(),
                      this._getMeasurement("columnWidth", "outerWidth"),
                      this._getMeasurement("gutter", "outerWidth"),
                      this.measureColumns(),
                      (this.colYs = []);
                    for (var t = 0; t < this.cols; t++) this.colYs.push(0);
                    (this.maxY = 0), (this.horizontalColIndex = 0);
                  }),
                  (r.measureColumns = function () {
                    if ((this.getContainerWidth(), !this.columnWidth)) {
                      var t = this.items[0],
                        n = t && t.element;
                      this.columnWidth =
                        (n && e(n).outerWidth) || this.containerWidth;
                    }
                    var r = (this.columnWidth += this.gutter),
                      i = this.containerWidth + this.gutter,
                      o = i / r,
                      s = r - (i % r);
                    (o = Math[s && s < 1 ? "round" : "floor"](o)),
                      (this.cols = Math.max(o, 1));
                  }),
                  (r.getContainerWidth = function () {
                    var t = this._getOption("fitWidth")
                        ? this.element.parentNode
                        : this.element,
                      n = e(t);
                    this.containerWidth = n && n.innerWidth;
                  }),
                  (r._getItemLayoutPosition = function (t) {
                    t.getSize();
                    var e = t.size.outerWidth % this.columnWidth,
                      n = Math[e && e < 1 ? "round" : "ceil"](
                        t.size.outerWidth / this.columnWidth
                      );
                    n = Math.min(n, this.cols);
                    for (
                      var r = this[
                          this.options.horizontalOrder
                            ? "_getHorizontalColPosition"
                            : "_getTopColPosition"
                        ](n, t),
                        i = { x: this.columnWidth * r.col, y: r.y },
                        o = r.y + t.size.outerHeight,
                        s = n + r.col,
                        a = r.col;
                      a < s;
                      a++
                    )
                      this.colYs[a] = o;
                    return i;
                  }),
                  (r._getTopColPosition = function (t) {
                    var e = this._getTopColGroup(t),
                      n = Math.min.apply(Math, e);
                    return { col: e.indexOf(n), y: n };
                  }),
                  (r._getTopColGroup = function (t) {
                    if (t < 2) return this.colYs;
                    for (var e = [], n = this.cols + 1 - t, r = 0; r < n; r++)
                      e[r] = this._getColGroupY(r, t);
                    return e;
                  }),
                  (r._getColGroupY = function (t, e) {
                    if (e < 2) return this.colYs[t];
                    var n = this.colYs.slice(t, t + e);
                    return Math.max.apply(Math, n);
                  }),
                  (r._getHorizontalColPosition = function (t, e) {
                    var n = this.horizontalColIndex % this.cols;
                    n = t > 1 && n + t > this.cols ? 0 : n;
                    var r = e.size.outerWidth && e.size.outerHeight;
                    return (
                      (this.horizontalColIndex = r
                        ? n + t
                        : this.horizontalColIndex),
                      { col: n, y: this._getColGroupY(n, t) }
                    );
                  }),
                  (r._manageStamp = function (t) {
                    var n = e(t),
                      r = this._getElementOffset(t),
                      i = this._getOption("originLeft") ? r.left : r.right,
                      o = i + n.outerWidth,
                      s = Math.floor(i / this.columnWidth);
                    s = Math.max(0, s);
                    var a = Math.floor(o / this.columnWidth);
                    (a -= o % this.columnWidth ? 0 : 1),
                      (a = Math.min(this.cols - 1, a));
                    for (
                      var u =
                          (this._getOption("originTop") ? r.top : r.bottom) +
                          n.outerHeight,
                        c = s;
                      c <= a;
                      c++
                    )
                      this.colYs[c] = Math.max(u, this.colYs[c]);
                  }),
                  (r._getContainerSize = function () {
                    this.maxY = Math.max.apply(Math, this.colYs);
                    var t = { height: this.maxY };
                    return (
                      this._getOption("fitWidth") &&
                        (t.width = this._getContainerFitWidth()),
                      t
                    );
                  }),
                  (r._getContainerFitWidth = function () {
                    for (var t = 0, e = this.cols; --e && 0 === this.colYs[e]; )
                      t++;
                    return (this.cols - t) * this.columnWidth - this.gutter;
                  }),
                  (r.needsResizeLayout = function () {
                    var t = this.containerWidth;
                    return this.getContainerWidth(), t != this.containerWidth;
                  }),
                  n
                );
              })
                ? r.apply(e, i)
                : r) || (t.exports = o);
      },
      652: function (t, e, n) {
        var r, i, o;
        window,
          (i = [n(158), n(131)]),
          void 0 ===
            (o =
              "function" ==
              typeof (r = function (t, e) {
                "use strict";
                var n = document.documentElement.style,
                  r =
                    "string" == typeof n.transition
                      ? "transition"
                      : "WebkitTransition",
                  i =
                    "string" == typeof n.transform
                      ? "transform"
                      : "WebkitTransform",
                  o = {
                    WebkitTransition: "webkitTransitionEnd",
                    transition: "transitionend",
                  }[r],
                  s = {
                    transform: i,
                    transition: r,
                    transitionDuration: r + "Duration",
                    transitionProperty: r + "Property",
                    transitionDelay: r + "Delay",
                  };
                function a(t, e) {
                  t &&
                    ((this.element = t),
                    (this.layout = e),
                    (this.position = { x: 0, y: 0 }),
                    this._create());
                }
                var u = (a.prototype = Object.create(t.prototype));
                (u.constructor = a),
                  (u._create = function () {
                    (this._transn = {
                      ingProperties: {},
                      clean: {},
                      onEnd: {},
                    }),
                      this.css({ position: "absolute" });
                  }),
                  (u.handleEvent = function (t) {
                    var e = "on" + t.type;
                    this[e] && this[e](t);
                  }),
                  (u.getSize = function () {
                    this.size = e(this.element);
                  }),
                  (u.css = function (t) {
                    var e = this.element.style;
                    for (var n in t) e[s[n] || n] = t[n];
                  }),
                  (u.getPosition = function () {
                    var t = getComputedStyle(this.element),
                      e = this.layout._getOption("originLeft"),
                      n = this.layout._getOption("originTop"),
                      r = t[e ? "left" : "right"],
                      i = t[n ? "top" : "bottom"],
                      o = parseFloat(r),
                      s = parseFloat(i),
                      a = this.layout.size;
                    -1 != r.indexOf("%") && (o = (o / 100) * a.width),
                      -1 != i.indexOf("%") && (s = (s / 100) * a.height),
                      (o = isNaN(o) ? 0 : o),
                      (s = isNaN(s) ? 0 : s),
                      (o -= e ? a.paddingLeft : a.paddingRight),
                      (s -= n ? a.paddingTop : a.paddingBottom),
                      (this.position.x = o),
                      (this.position.y = s);
                  }),
                  (u.layoutPosition = function () {
                    var t = this.layout.size,
                      e = {},
                      n = this.layout._getOption("originLeft"),
                      r = this.layout._getOption("originTop"),
                      i = n ? "paddingLeft" : "paddingRight",
                      o = n ? "left" : "right",
                      s = n ? "right" : "left",
                      a = this.position.x + t[i];
                    (e[o] = this.getXValue(a)), (e[s] = "");
                    var u = r ? "paddingTop" : "paddingBottom",
                      c = r ? "top" : "bottom",
                      l = r ? "bottom" : "top",
                      d = this.position.y + t[u];
                    (e[c] = this.getYValue(d)),
                      (e[l] = ""),
                      this.css(e),
                      this.emitEvent("layout", [this]);
                  }),
                  (u.getXValue = function (t) {
                    var e = this.layout._getOption("horizontal");
                    return this.layout.options.percentPosition && !e
                      ? (t / this.layout.size.width) * 100 + "%"
                      : t + "px";
                  }),
                  (u.getYValue = function (t) {
                    var e = this.layout._getOption("horizontal");
                    return this.layout.options.percentPosition && e
                      ? (t / this.layout.size.height) * 100 + "%"
                      : t + "px";
                  }),
                  (u._transitionTo = function (t, e) {
                    this.getPosition();
                    var n = this.position.x,
                      r = this.position.y,
                      i = t == this.position.x && e == this.position.y;
                    if ((this.setPosition(t, e), !i || this.isTransitioning)) {
                      var o = t - n,
                        s = e - r,
                        a = {};
                      (a.transform = this.getTranslate(o, s)),
                        this.transition({
                          to: a,
                          onTransitionEnd: { transform: this.layoutPosition },
                          isCleaning: !0,
                        });
                    } else this.layoutPosition();
                  }),
                  (u.getTranslate = function (t, e) {
                    return (
                      "translate3d(" +
                      (t = this.layout._getOption("originLeft") ? t : -t) +
                      "px, " +
                      (e = this.layout._getOption("originTop") ? e : -e) +
                      "px, 0)"
                    );
                  }),
                  (u.goTo = function (t, e) {
                    this.setPosition(t, e), this.layoutPosition();
                  }),
                  (u.moveTo = u._transitionTo),
                  (u.setPosition = function (t, e) {
                    (this.position.x = parseFloat(t)),
                      (this.position.y = parseFloat(e));
                  }),
                  (u._nonTransition = function (t) {
                    for (var e in (this.css(t.to),
                    t.isCleaning && this._removeStyles(t.to),
                    t.onTransitionEnd))
                      t.onTransitionEnd[e].call(this);
                  }),
                  (u.transition = function (t) {
                    if (parseFloat(this.layout.options.transitionDuration)) {
                      var e = this._transn;
                      for (var n in t.onTransitionEnd)
                        e.onEnd[n] = t.onTransitionEnd[n];
                      for (n in t.to)
                        (e.ingProperties[n] = !0),
                          t.isCleaning && (e.clean[n] = !0);
                      t.from && (this.css(t.from), this.element.offsetHeight),
                        this.enableTransition(t.to),
                        this.css(t.to),
                        (this.isTransitioning = !0);
                    } else this._nonTransition(t);
                  });
                var c =
                  "opacity," +
                  i.replace(/([A-Z])/g, function (t) {
                    return "-" + t.toLowerCase();
                  });
                (u.enableTransition = function () {
                  if (!this.isTransitioning) {
                    var t = this.layout.options.transitionDuration;
                    (t = "number" == typeof t ? t + "ms" : t),
                      this.css({
                        transitionProperty: c,
                        transitionDuration: t,
                        transitionDelay: this.staggerDelay || 0,
                      }),
                      this.element.addEventListener(o, this, !1);
                  }
                }),
                  (u.onwebkitTransitionEnd = function (t) {
                    this.ontransitionend(t);
                  }),
                  (u.onotransitionend = function (t) {
                    this.ontransitionend(t);
                  });
                var l = { "-webkit-transform": "transform" };
                (u.ontransitionend = function (t) {
                  if (t.target === this.element) {
                    var e = this._transn,
                      n = l[t.propertyName] || t.propertyName;
                    delete e.ingProperties[n],
                      (function (t) {
                        for (var e in t) return !1;
                        return !0;
                      })(e.ingProperties) && this.disableTransition(),
                      n in e.clean &&
                        ((this.element.style[t.propertyName] = ""),
                        delete e.clean[n]),
                      n in e.onEnd &&
                        (e.onEnd[n].call(this), delete e.onEnd[n]),
                      this.emitEvent("transitionEnd", [this]);
                  }
                }),
                  (u.disableTransition = function () {
                    this.removeTransitionStyles(),
                      this.element.removeEventListener(o, this, !1),
                      (this.isTransitioning = !1);
                  }),
                  (u._removeStyles = function (t) {
                    var e = {};
                    for (var n in t) e[n] = "";
                    this.css(e);
                  });
                var d = {
                  transitionProperty: "",
                  transitionDuration: "",
                  transitionDelay: "",
                };
                return (
                  (u.removeTransitionStyles = function () {
                    this.css(d);
                  }),
                  (u.stagger = function (t) {
                    (t = isNaN(t) ? 0 : t), (this.staggerDelay = t + "ms");
                  }),
                  (u.removeElem = function () {
                    this.element.parentNode.removeChild(this.element),
                      this.css({ display: "" }),
                      this.emitEvent("remove", [this]);
                  }),
                  (u.remove = function () {
                    r && parseFloat(this.layout.options.transitionDuration)
                      ? (this.once("transitionEnd", function () {
                          this.removeElem();
                        }),
                        this.hide())
                      : this.removeElem();
                  }),
                  (u.reveal = function () {
                    delete this.isHidden, this.css({ display: "" });
                    var t = this.layout.options,
                      e = {};
                    (e[
                      this.getHideRevealTransitionEndProperty("visibleStyle")
                    ] = this.onRevealTransitionEnd),
                      this.transition({
                        from: t.hiddenStyle,
                        to: t.visibleStyle,
                        isCleaning: !0,
                        onTransitionEnd: e,
                      });
                  }),
                  (u.onRevealTransitionEnd = function () {
                    this.isHidden || this.emitEvent("reveal");
                  }),
                  (u.getHideRevealTransitionEndProperty = function (t) {
                    var e = this.layout.options[t];
                    if (e.opacity) return "opacity";
                    for (var n in e) return n;
                  }),
                  (u.hide = function () {
                    (this.isHidden = !0), this.css({ display: "" });
                    var t = this.layout.options,
                      e = {};
                    (e[this.getHideRevealTransitionEndProperty("hiddenStyle")] =
                      this.onHideTransitionEnd),
                      this.transition({
                        from: t.visibleStyle,
                        to: t.hiddenStyle,
                        isCleaning: !0,
                        onTransitionEnd: e,
                      });
                  }),
                  (u.onHideTransitionEnd = function () {
                    this.isHidden &&
                      (this.css({ display: "none" }), this.emitEvent("hide"));
                  }),
                  (u.destroy = function () {
                    this.css({
                      position: "",
                      left: "",
                      right: "",
                      top: "",
                      bottom: "",
                      transition: "",
                      transform: "",
                    });
                  }),
                  a
                );
              })
                ? r.apply(e, i)
                : r) || (t.exports = o);
      },
      794: function (t, e, n) {
        var r, i;
        !(function (o, s) {
          "use strict";
          (r = [n(158), n(131), n(47), n(652)]),
            (i = function (t, e, n, r) {
              return (function (t, e, n, r, i) {
                var o = t.console,
                  s = t.jQuery,
                  a = function () {},
                  u = 0,
                  c = {};
                function l(t, e) {
                  var n = r.getQueryElement(t);
                  if (n) {
                    (this.element = n),
                      s && (this.$element = s(this.element)),
                      (this.options = r.extend({}, this.constructor.defaults)),
                      this.option(e);
                    var i = ++u;
                    (this.element.outlayerGUID = i),
                      (c[i] = this),
                      this._create(),
                      this._getOption("initLayout") && this.layout();
                  } else
                    o &&
                      o.error(
                        "Bad element for " +
                          this.constructor.namespace +
                          ": " +
                          (n || t)
                      );
                }
                (l.namespace = "outlayer"),
                  (l.Item = i),
                  (l.defaults = {
                    containerStyle: { position: "relative" },
                    initLayout: !0,
                    originLeft: !0,
                    originTop: !0,
                    resize: !0,
                    resizeContainer: !0,
                    transitionDuration: "0.4s",
                    hiddenStyle: { opacity: 0, transform: "scale(0.001)" },
                    visibleStyle: { opacity: 1, transform: "scale(1)" },
                  });
                var d = l.prototype;
                function f(t) {
                  function e() {
                    t.apply(this, arguments);
                  }
                  return (
                    (e.prototype = Object.create(t.prototype)),
                    (e.prototype.constructor = e),
                    e
                  );
                }
                r.extend(d, e.prototype),
                  (d.option = function (t) {
                    r.extend(this.options, t);
                  }),
                  (d._getOption = function (t) {
                    var e = this.constructor.compatOptions[t];
                    return e && void 0 !== this.options[e]
                      ? this.options[e]
                      : this.options[t];
                  }),
                  (l.compatOptions = {
                    initLayout: "isInitLayout",
                    horizontal: "isHorizontal",
                    layoutInstant: "isLayoutInstant",
                    originLeft: "isOriginLeft",
                    originTop: "isOriginTop",
                    resize: "isResizeBound",
                    resizeContainer: "isResizingContainer",
                  }),
                  (d._create = function () {
                    this.reloadItems(),
                      (this.stamps = []),
                      this.stamp(this.options.stamp),
                      r.extend(this.element.style, this.options.containerStyle),
                      this._getOption("resize") && this.bindResize();
                  }),
                  (d.reloadItems = function () {
                    this.items = this._itemize(this.element.children);
                  }),
                  (d._itemize = function (t) {
                    for (
                      var e = this._filterFindItemElements(t),
                        n = this.constructor.Item,
                        r = [],
                        i = 0;
                      i < e.length;
                      i++
                    ) {
                      var o = new n(e[i], this);
                      r.push(o);
                    }
                    return r;
                  }),
                  (d._filterFindItemElements = function (t) {
                    return r.filterFindElements(t, this.options.itemSelector);
                  }),
                  (d.getItemElements = function () {
                    return this.items.map(function (t) {
                      return t.element;
                    });
                  }),
                  (d.layout = function () {
                    this._resetLayout(), this._manageStamps();
                    var t = this._getOption("layoutInstant"),
                      e = void 0 !== t ? t : !this._isLayoutInited;
                    this.layoutItems(this.items, e),
                      (this._isLayoutInited = !0);
                  }),
                  (d._init = d.layout),
                  (d._resetLayout = function () {
                    this.getSize();
                  }),
                  (d.getSize = function () {
                    this.size = n(this.element);
                  }),
                  (d._getMeasurement = function (t, e) {
                    var r,
                      i = this.options[t];
                    i
                      ? ("string" == typeof i
                          ? (r = this.element.querySelector(i))
                          : i instanceof HTMLElement && (r = i),
                        (this[t] = r ? n(r)[e] : i))
                      : (this[t] = 0);
                  }),
                  (d.layoutItems = function (t, e) {
                    (t = this._getItemsForLayout(t)),
                      this._layoutItems(t, e),
                      this._postLayout();
                  }),
                  (d._getItemsForLayout = function (t) {
                    return t.filter(function (t) {
                      return !t.isIgnored;
                    });
                  }),
                  (d._layoutItems = function (t, e) {
                    if (
                      (this._emitCompleteOnItems("layout", t), t && t.length)
                    ) {
                      var n = [];
                      t.forEach(function (t) {
                        var r = this._getItemLayoutPosition(t);
                        (r.item = t),
                          (r.isInstant = e || t.isLayoutInstant),
                          n.push(r);
                      }, this),
                        this._processLayoutQueue(n);
                    }
                  }),
                  (d._getItemLayoutPosition = function () {
                    return { x: 0, y: 0 };
                  }),
                  (d._processLayoutQueue = function (t) {
                    this.updateStagger(),
                      t.forEach(function (t, e) {
                        this._positionItem(t.item, t.x, t.y, t.isInstant, e);
                      }, this);
                  }),
                  (d.updateStagger = function () {
                    var t = this.options.stagger;
                    if (null != t)
                      return (
                        (this.stagger = (function (t) {
                          if ("number" == typeof t) return t;
                          var e = t.match(/(^\d*\.?\d*)(\w*)/),
                            n = e && e[1],
                            r = e && e[2];
                          return n.length
                            ? (n = parseFloat(n)) * (h[r] || 1)
                            : 0;
                        })(t)),
                        this.stagger
                      );
                    this.stagger = 0;
                  }),
                  (d._positionItem = function (t, e, n, r, i) {
                    r
                      ? t.goTo(e, n)
                      : (t.stagger(i * this.stagger), t.moveTo(e, n));
                  }),
                  (d._postLayout = function () {
                    this.resizeContainer();
                  }),
                  (d.resizeContainer = function () {
                    if (this._getOption("resizeContainer")) {
                      var t = this._getContainerSize();
                      t &&
                        (this._setContainerMeasure(t.width, !0),
                        this._setContainerMeasure(t.height, !1));
                    }
                  }),
                  (d._getContainerSize = a),
                  (d._setContainerMeasure = function (t, e) {
                    if (void 0 !== t) {
                      var n = this.size;
                      n.isBorderBox &&
                        (t += e
                          ? n.paddingLeft +
                            n.paddingRight +
                            n.borderLeftWidth +
                            n.borderRightWidth
                          : n.paddingBottom +
                            n.paddingTop +
                            n.borderTopWidth +
                            n.borderBottomWidth),
                        (t = Math.max(t, 0)),
                        (this.element.style[e ? "width" : "height"] = t + "px");
                    }
                  }),
                  (d._emitCompleteOnItems = function (t, e) {
                    var n = this;
                    function r() {
                      n.dispatchEvent(t + "Complete", null, [e]);
                    }
                    var i = e.length;
                    if (e && i) {
                      var o = 0;
                      e.forEach(function (e) {
                        e.once(t, s);
                      });
                    } else r();
                    function s() {
                      ++o == i && r();
                    }
                  }),
                  (d.dispatchEvent = function (t, e, n) {
                    var r = e ? [e].concat(n) : n;
                    if ((this.emitEvent(t, r), s))
                      if (
                        ((this.$element = this.$element || s(this.element)), e)
                      ) {
                        var i = s.Event(e);
                        (i.type = t), this.$element.trigger(i, n);
                      } else this.$element.trigger(t, n);
                  }),
                  (d.ignore = function (t) {
                    var e = this.getItem(t);
                    e && (e.isIgnored = !0);
                  }),
                  (d.unignore = function (t) {
                    var e = this.getItem(t);
                    e && delete e.isIgnored;
                  }),
                  (d.stamp = function (t) {
                    (t = this._find(t)) &&
                      ((this.stamps = this.stamps.concat(t)),
                      t.forEach(this.ignore, this));
                  }),
                  (d.unstamp = function (t) {
                    (t = this._find(t)) &&
                      t.forEach(function (t) {
                        r.removeFrom(this.stamps, t), this.unignore(t);
                      }, this);
                  }),
                  (d._find = function (t) {
                    if (t)
                      return (
                        "string" == typeof t &&
                          (t = this.element.querySelectorAll(t)),
                        r.makeArray(t)
                      );
                  }),
                  (d._manageStamps = function () {
                    this.stamps &&
                      this.stamps.length &&
                      (this._getBoundingRect(),
                      this.stamps.forEach(this._manageStamp, this));
                  }),
                  (d._getBoundingRect = function () {
                    var t = this.element.getBoundingClientRect(),
                      e = this.size;
                    this._boundingRect = {
                      left: t.left + e.paddingLeft + e.borderLeftWidth,
                      top: t.top + e.paddingTop + e.borderTopWidth,
                      right: t.right - (e.paddingRight + e.borderRightWidth),
                      bottom:
                        t.bottom - (e.paddingBottom + e.borderBottomWidth),
                    };
                  }),
                  (d._manageStamp = a),
                  (d._getElementOffset = function (t) {
                    var e = t.getBoundingClientRect(),
                      r = this._boundingRect,
                      i = n(t);
                    return {
                      left: e.left - r.left - i.marginLeft,
                      top: e.top - r.top - i.marginTop,
                      right: r.right - e.right - i.marginRight,
                      bottom: r.bottom - e.bottom - i.marginBottom,
                    };
                  }),
                  (d.handleEvent = r.handleEvent),
                  (d.bindResize = function () {
                    t.addEventListener("resize", this),
                      (this.isResizeBound = !0);
                  }),
                  (d.unbindResize = function () {
                    t.removeEventListener("resize", this),
                      (this.isResizeBound = !1);
                  }),
                  (d.onresize = function () {
                    this.resize();
                  }),
                  r.debounceMethod(l, "onresize", 100),
                  (d.resize = function () {
                    this.isResizeBound &&
                      this.needsResizeLayout() &&
                      this.layout();
                  }),
                  (d.needsResizeLayout = function () {
                    var t = n(this.element);
                    return (
                      this.size && t && t.innerWidth !== this.size.innerWidth
                    );
                  }),
                  (d.addItems = function (t) {
                    var e = this._itemize(t);
                    return e.length && (this.items = this.items.concat(e)), e;
                  }),
                  (d.appended = function (t) {
                    var e = this.addItems(t);
                    e.length && (this.layoutItems(e, !0), this.reveal(e));
                  }),
                  (d.prepended = function (t) {
                    var e = this._itemize(t);
                    if (e.length) {
                      var n = this.items.slice(0);
                      (this.items = e.concat(n)),
                        this._resetLayout(),
                        this._manageStamps(),
                        this.layoutItems(e, !0),
                        this.reveal(e),
                        this.layoutItems(n);
                    }
                  }),
                  (d.reveal = function (t) {
                    if (
                      (this._emitCompleteOnItems("reveal", t), t && t.length)
                    ) {
                      var e = this.updateStagger();
                      t.forEach(function (t, n) {
                        t.stagger(n * e), t.reveal();
                      });
                    }
                  }),
                  (d.hide = function (t) {
                    if ((this._emitCompleteOnItems("hide", t), t && t.length)) {
                      var e = this.updateStagger();
                      t.forEach(function (t, n) {
                        t.stagger(n * e), t.hide();
                      });
                    }
                  }),
                  (d.revealItemElements = function (t) {
                    var e = this.getItems(t);
                    this.reveal(e);
                  }),
                  (d.hideItemElements = function (t) {
                    var e = this.getItems(t);
                    this.hide(e);
                  }),
                  (d.getItem = function (t) {
                    for (var e = 0; e < this.items.length; e++) {
                      var n = this.items[e];
                      if (n.element == t) return n;
                    }
                  }),
                  (d.getItems = function (t) {
                    t = r.makeArray(t);
                    var e = [];
                    return (
                      t.forEach(function (t) {
                        var n = this.getItem(t);
                        n && e.push(n);
                      }, this),
                      e
                    );
                  }),
                  (d.remove = function (t) {
                    var e = this.getItems(t);
                    this._emitCompleteOnItems("remove", e),
                      e &&
                        e.length &&
                        e.forEach(function (t) {
                          t.remove(), r.removeFrom(this.items, t);
                        }, this);
                  }),
                  (d.destroy = function () {
                    var t = this.element.style;
                    (t.height = ""),
                      (t.position = ""),
                      (t.width = ""),
                      this.items.forEach(function (t) {
                        t.destroy();
                      }),
                      this.unbindResize();
                    var e = this.element.outlayerGUID;
                    delete c[e],
                      delete this.element.outlayerGUID,
                      s &&
                        s.removeData(this.element, this.constructor.namespace);
                  }),
                  (l.data = function (t) {
                    var e = (t = r.getQueryElement(t)) && t.outlayerGUID;
                    return e && c[e];
                  }),
                  (l.create = function (t, e) {
                    var n = f(l);
                    return (
                      (n.defaults = r.extend({}, l.defaults)),
                      r.extend(n.defaults, e),
                      (n.compatOptions = r.extend({}, l.compatOptions)),
                      (n.namespace = t),
                      (n.data = l.data),
                      (n.Item = f(i)),
                      r.htmlInit(n, t),
                      s && s.bridget && s.bridget(t, n),
                      n
                    );
                  });
                var h = { ms: 1, s: 1e3 };
                return (l.Item = i), l;
              })(o, t, e, n, r);
            }.apply(e, r)),
            void 0 === i || (t.exports = i);
        })(window);
      },
      963: function () {
        const t = document.querySelector(".backdrop--subscr"),
          e = document.querySelectorAll(".form__input--location");
        function n(e) {
          const n = e.target;
          t &&
            ("" !== n.value.trim() && document.activeElement === n
              ? (t.style.overflow = "hidden")
              : (t.style.overflow = "auto"));
        }
        window.initMap ||
          (window.initMap = function () {
            e.forEach(function (t) {
              const e = new google.maps.places.Autocomplete(t);
              e.addListener("place_changed", () => {
                e.getPlace(), t.setAttribute("data-id", t.value);
              });
            });
          }),
          e.forEach(function (t) {
            t.addEventListener("input", n),
              t.addEventListener("focus", n),
              t.addEventListener("blur", n),
              n({ target: t });
          });
      },
      699: function () {
        const t = document.querySelector(".scroll-to-top-btn");
        window.addEventListener(
          "scroll",
          function () {
            window.scrollY >= 50
              ? (t.style.display = "flex")
              : (t.style.display = "none");
          },
          { passive: !0 }
        ),
          t.addEventListener("click", function () {
            window.scrollTo({ top: 0, behavior: "smooth" });
          });
      },
    },
    e = {};
  function n(r) {
    var i = e[r];
    if (void 0 !== i) return i.exports;
    var o = (e[r] = { exports: {} });
    return t[r].call(o.exports, o, o.exports, n), o.exports;
  }
  (n.n = function (t) {
    var e =
      t && t.__esModule
        ? function () {
            return t.default;
          }
        : function () {
            return t;
          };
    return n.d(e, { a: e }), e;
  }),
    (n.d = function (t, e) {
      for (var r in e)
        n.o(e, r) &&
          !n.o(t, r) &&
          Object.defineProperty(t, r, { enumerable: !0, get: e[r] });
    }),
    (n.o = function (t, e) {
      return Object.prototype.hasOwnProperty.call(t, e);
    }),
    (function () {
      "use strict";
      function t(t, e) {
        const n = JSON.stringify(e);
        localStorage.setItem(t, n);
      }
      function e(t) {
        const e = localStorage.getItem(t);
        return JSON.parse(e);
      }
      function r(t) {
        localStorage.removeItem(t);
      }
      function i() {
        return {
          themeToggler: document.querySelector(".theme-toggler-wrap"),
          themeCircle: document.querySelector(".theme__circle"),
          sunRays: document.querySelectorAll(".circle__ray"),
          sunIcon: document.querySelector(".circle__sun"),
          moonIcon: document.querySelector(".circle__moon"),
        };
      }
      const o = { LIGHT: "light", DARK: "dark" };
      let s = e("theme") || o.LIGHT;
      function a() {
        const {
            themeToggler: t,
            themeCircle: e,
            sunRays: n,
            sunIcon: r,
            moonIcon: a,
          } = i(),
          u = document.querySelector("body");
        s === o.DARK
          ? (u.classList.add("active-dark-theme"),
            t.classList.add("theme-toggler-wrap--dark"),
            t.classList.remove("theme-toggler-wrap--light"),
            e.classList.add("theme__circle--dark"),
            e.classList.remove("theme__circle--light"),
            r.classList.add("circle__sun--hidden"),
            a.classList.remove("circle__moon--hidden"),
            n.forEach((t) => t.classList.add("circle__ray--hidden")))
          : (u.classList.remove("active-dark-theme"),
            t.classList.remove("theme-toggler-wrap--dark"),
            t.classList.add("theme-toggler-wrap--light"),
            e.classList.remove("theme__circle--dark"),
            e.classList.add("theme__circle--light"),
            r.classList.remove("circle__sun--hidden"),
            a.classList.add("circle__moon--hidden"),
            n.forEach((t) => t.classList.remove("circle__ray--hidden")));
      }
      const u = {
          home: [
            "/comfort-group-cleaning/",
            "/comfort-group-cleaning/index.html",
          ],
          office: ["/comfort-group-cleaning/office.html"],
          afterRepair: ["/comfort-group-cleaning/after-repair.html"],
          calcOrder: ["/comfort-group-cleaning/calc-order.html"],
          contacts: ["/comfort-group-cleaning/contacts.html"],
          successOr404: [
            "/comfort-group-cleaning/success-order.html",
            "/comfort-group-cleaning/404.html",
          ],
        },
        c = {
          home: () => {
            d([".nav__link", ".nav--aside-menu .nav__link"]),
              l("index.html#order-cleaning-block");
          },
          office: () => {
            d([
              ".nav__list .nav__item:nth-child(2) .nav__link",
              ".nav--aside-menu  .nav__list .nav__item:nth-child(2) .nav__link",
            ]),
              l("office.html#office-calc-block"),
              p("calc(100% / 3)"),
              document
                .querySelectorAll(".element--office-page")
                .forEach((t) => t.classList.remove("isHidden")),
              document
                .querySelector(".element--calculator-page")
                .classList.add("isHidden");
          },
          afterRepair: () => {
            !(function () {
              const t = document.querySelector(
                ".data-order .data-order__title"
              );
              (document.querySelector(".buildings").style.display = "none"),
                (t.style.display = "none");
            })(),
              document
                .querySelectorAll(".add-services-list__item:nth-child(n+3)")
                .forEach((t) => t.classList.add("isHidden")),
              l("after-repair.html#office-calc-block");
          },
          calcOrder: () => {
            document
              .querySelector(".footer")
              .classList.add("footer--calc-order"),
              p("calc(100% / 2)"),
              document
                .querySelectorAll(".block")
                .forEach((t) => t.classList.add("block--white")),
              document
                .querySelectorAll(".element--office-page")
                .forEach((t) => t.classList.add("isHidden")),
              document
                .querySelector(".element--calculator-page")
                .classList.remove("isHidden");
          },
          contacts: () => {
            document
              .querySelector(".connection")
              .classList.remove("no-padding-top"),
              document
                .querySelector(".connection--second-block")
                .classList.add("block-with-image"),
              f();
          },
          successOr404: () => {
            f(),
              window.addEventListener("beforeunload", function () {
                r("userOrderDataObj");
              });
          },
        };
      function l(t) {
        [...document.querySelectorAll(".dynamic-link")].forEach(
          (e) => (e.href = t)
        );
      }
      function d(t) {
        t.forEach((t) => {
          const e = document.querySelector(t);
          e && e.classList.add("nav__link--current");
        });
      }
      function f() {
        document
          .querySelector("main")
          .classList.add("section--dark-background");
      }
      function h(t) {
        t.classList.toggle("isActive");
      }
      function p(t) {
        document
          .querySelectorAll(".buildings__element")
          .forEach((e) => (e.style.flexBasis = t));
      }
      function m(t, e) {
        t.appendChild(e);
      }
      function g(t, e) {
        return t.parentElement.previousElementSibling.querySelector(`.${e}`);
      }
      function v(t) {
        t.classList.toggle("isHidden");
      }
      function y(t, e) {
        t.addEventListener("blur", (n) => {
          const r = e(n.target.value);
          t.value = r;
        });
      }
      function _(t, e, n) {
        v(t), v(e), h(n);
      }
      function x(t, e, n) {
        const r = t.querySelector(".work-shedule"),
          i = t.querySelector(`.${e}`);
        r.classList.contains("isHidden") || (v(r), v(i), h(g(i, n)));
      }
      document.addEventListener("DOMContentLoaded", function () {
        const e = window.location.pathname,
          n = document.querySelector("body"),
          { themeToggler: r } = i();
        r.addEventListener("click", () => {
          var e;
          (e = n.classList.contains("active-dark-theme") ? o.LIGHT : o.DARK),
            (s = e),
            t("theme", e),
            a();
        }),
          a();
        const l = Object.keys(c).find((t) => u[t].includes(e));
        l && c[l]();
      });
      var b = !1;
      if ("undefined" != typeof window) {
        var w = {
          get passive() {
            b = !0;
          },
        };
        window.addEventListener("testPassive", null, w),
          window.removeEventListener("testPassive", null, w);
      }
      var T =
          "undefined" != typeof window &&
          window.navigator &&
          window.navigator.platform &&
          (/iP(ad|hone|od)/.test(window.navigator.platform) ||
            ("MacIntel" === window.navigator.platform &&
              window.navigator.maxTouchPoints > 1)),
        S = [],
        E = !1,
        k = -1,
        C = void 0,
        L = void 0,
        A = void 0,
        D = function (t) {
          return S.some(function (e) {
            return !(!e.options.allowTouchMove || !e.options.allowTouchMove(t));
          });
        },
        q = function (t) {
          var e = t || window.event;
          return (
            !!D(e.target) ||
            e.touches.length > 1 ||
            (e.preventDefault && e.preventDefault(), !1)
          );
        },
        O = function (t, e) {
          if (t) {
            if (
              !S.some(function (e) {
                return e.targetElement === t;
              })
            ) {
              var n = { targetElement: t, options: e || {} };
              (S = [].concat(
                (function (t) {
                  if (Array.isArray(t)) {
                    for (var e = 0, n = Array(t.length); e < t.length; e++)
                      n[e] = t[e];
                    return n;
                  }
                  return Array.from(t);
                })(S),
                [n]
              )),
                T
                  ? window.requestAnimationFrame(function () {
                      if (void 0 === L) {
                        L = {
                          position: document.body.style.position,
                          top: document.body.style.top,
                          left: document.body.style.left,
                        };
                        var t = window,
                          e = t.scrollY,
                          n = t.scrollX,
                          r = t.innerHeight;
                        (document.body.style.position = "fixed"),
                          (document.body.style.top = -e),
                          (document.body.style.left = -n),
                          setTimeout(function () {
                            return window.requestAnimationFrame(function () {
                              var t = r - window.innerHeight;
                              t &&
                                e >= r &&
                                (document.body.style.top = -(e + t));
                            });
                          }, 300);
                      }
                    })
                  : (function (t) {
                      if (void 0 === A) {
                        var e = !!t && !0 === t.reserveScrollBarGap,
                          n =
                            window.innerWidth -
                            document.documentElement.clientWidth;
                        if (e && n > 0) {
                          var r = parseInt(
                            window
                              .getComputedStyle(document.body)
                              .getPropertyValue("padding-right"),
                            10
                          );
                          (A = document.body.style.paddingRight),
                            (document.body.style.paddingRight = r + n + "px");
                        }
                      }
                      void 0 === C &&
                        ((C = document.body.style.overflow),
                        (document.body.style.overflow = "hidden"));
                    })(e),
                T &&
                  ((t.ontouchstart = function (t) {
                    1 === t.targetTouches.length &&
                      (k = t.targetTouches[0].clientY);
                  }),
                  (t.ontouchmove = function (e) {
                    1 === e.targetTouches.length &&
                      (function (t, e) {
                        var n = t.targetTouches[0].clientY - k;
                        !D(t.target) &&
                          ((e && 0 === e.scrollTop && n > 0) ||
                          ((function (t) {
                            return (
                              !!t &&
                              t.scrollHeight - t.scrollTop <= t.clientHeight
                            );
                          })(e) &&
                            n < 0)
                            ? q(t)
                            : t.stopPropagation());
                      })(e, t);
                  }),
                  E ||
                    (document.addEventListener(
                      "touchmove",
                      q,
                      b ? { passive: !1 } : void 0
                    ),
                    (E = !0)));
            }
          } else
            console.error(
              "disableBodyScroll unsuccessful - targetElement must be provided when calling disableBodyScroll on IOS devices."
            );
        },
        M = function (t) {
          t
            ? ((S = S.filter(function (e) {
                return e.targetElement !== t;
              })),
              T &&
                ((t.ontouchstart = null),
                (t.ontouchmove = null),
                E &&
                  0 === S.length &&
                  (document.removeEventListener(
                    "touchmove",
                    q,
                    b ? { passive: !1 } : void 0
                  ),
                  (E = !1))),
              T
                ? (function () {
                    if (void 0 !== L) {
                      var t = -parseInt(document.body.style.top, 10),
                        e = -parseInt(document.body.style.left, 10);
                      (document.body.style.position = L.position),
                        (document.body.style.top = L.top),
                        (document.body.style.left = L.left),
                        window.scrollTo(e, t),
                        (L = void 0);
                    }
                  })()
                : (void 0 !== A &&
                    ((document.body.style.paddingRight = A), (A = void 0)),
                  void 0 !== C &&
                    ((document.body.style.overflow = C), (C = void 0))))
            : console.error(
                "enableBodyScroll unsuccessful - targetElement must be provided when calling enableBodyScroll on IOS devices."
              );
        };
      (() => {
        const t = document.querySelector(".aside-menu"),
          e = document.querySelector(".open-menu-btn"),
          n = document.querySelector(".close-menu-btn"),
          r = () => {
            const n = "true" === e.getAttribute("aria-expanded") || !1;
            e.setAttribute("aria-expanded", !n),
              t.classList.toggle("is-open"),
              (n ? M : O)(document.body);
          };
        e.addEventListener("click", r),
          n.addEventListener("click", r),
          window
            .matchMedia("(min-width: 768px)")
            .addEventListener("change", (n) => {
              n.matches &&
                (t.classList.remove("is-open"),
                e.setAttribute("aria-expanded", !1),
                M(document.body));
            });
      })();
      var P = n(755),
        R = n.n(P);
      function N(t) {
        if (void 0 === t)
          throw new ReferenceError(
            "this hasn't been initialised - super() hasn't been called"
          );
        return t;
      }
      function I(t, e) {
        (t.prototype = Object.create(e.prototype)),
          (t.prototype.constructor = t),
          (t.__proto__ = e);
      }
      var j,
        H,
        z,
        F,
        B,
        W,
        $,
        Y,
        G,
        U,
        X,
        V,
        Q,
        K,
        J,
        Z = {
          autoSleep: 120,
          force3D: "auto",
          nullTargetWarn: 1,
          units: { lineHeight: "" },
        },
        tt = { duration: 0.5, overwrite: !1, delay: 0 },
        et = 1e8,
        nt = 1e-8,
        rt = 2 * Math.PI,
        it = rt / 4,
        ot = 0,
        st = Math.sqrt,
        at = Math.cos,
        ut = Math.sin,
        ct = function (t) {
          return "string" == typeof t;
        },
        lt = function (t) {
          return "function" == typeof t;
        },
        dt = function (t) {
          return "number" == typeof t;
        },
        ft = function (t) {
          return void 0 === t;
        },
        ht = function (t) {
          return "object" == typeof t;
        },
        pt = function (t) {
          return !1 !== t;
        },
        mt = function () {
          return "undefined" != typeof window;
        },
        gt = function (t) {
          return lt(t) || ct(t);
        },
        vt =
          ("function" == typeof ArrayBuffer && ArrayBuffer.isView) ||
          function () {},
        yt = Array.isArray,
        _t = /(?:-?\.?\d|\.)+/gi,
        xt = /[-+=.]*\d+[.e\-+]*\d*[e\-+]*\d*/g,
        bt = /[-+=.]*\d+[.e-]*\d*[a-z%]*/g,
        wt = /[-+=.]*\d+\.?\d*(?:e-|e\+)?\d*/gi,
        Tt = /[+-]=-?[.\d]+/,
        St = /[^,'"\[\]\s]+/gi,
        Et = /^[+\-=e\s\d]*\d+[.\d]*([a-z]*|%)\s*$/i,
        kt = {},
        Ct = {},
        Lt = function (t) {
          return (Ct = re(t, kt)) && ir;
        },
        At = function (t, e) {
          return console.warn(
            "Invalid property",
            t,
            "set to",
            e,
            "Missing plugin? gsap.registerPlugin()"
          );
        },
        Dt = function (t, e) {
          return !e && console.warn(t);
        },
        qt = function (t, e) {
          return (t && (kt[t] = e) && Ct && (Ct[t] = e)) || kt;
        },
        Ot = function () {
          return 0;
        },
        Mt = { suppressEvents: !0, isStart: !0, kill: !1 },
        Pt = { suppressEvents: !0, kill: !1 },
        Rt = { suppressEvents: !0 },
        Nt = {},
        It = [],
        jt = {},
        Ht = {},
        zt = {},
        Ft = 30,
        Bt = [],
        Wt = "",
        $t = function (t) {
          var e,
            n,
            r = t[0];
          if ((ht(r) || lt(r) || (t = [t]), !(e = (r._gsap || {}).harness))) {
            for (n = Bt.length; n-- && !Bt[n].targetTest(r); );
            e = Bt[n];
          }
          for (n = t.length; n--; )
            (t[n] && (t[n]._gsap || (t[n]._gsap = new yn(t[n], e)))) ||
              t.splice(n, 1);
          return t;
        },
        Yt = function (t) {
          return t._gsap || $t(Pe(t))[0]._gsap;
        },
        Gt = function (t, e, n) {
          return (n = t[e]) && lt(n)
            ? t[e]()
            : (ft(n) && t.getAttribute && t.getAttribute(e)) || n;
        },
        Ut = function (t, e) {
          return (t = t.split(",")).forEach(e) || t;
        },
        Xt = function (t) {
          return Math.round(1e5 * t) / 1e5 || 0;
        },
        Vt = function (t) {
          return Math.round(1e7 * t) / 1e7 || 0;
        },
        Qt = function (t, e) {
          var n = e.charAt(0),
            r = parseFloat(e.substr(2));
          return (
            (t = parseFloat(t)),
            "+" === n ? t + r : "-" === n ? t - r : "*" === n ? t * r : t / r
          );
        },
        Kt = function (t, e) {
          for (var n = e.length, r = 0; t.indexOf(e[r]) < 0 && ++r < n; );
          return r < n;
        },
        Jt = function () {
          var t,
            e,
            n = It.length,
            r = It.slice(0);
          for (jt = {}, It.length = 0, t = 0; t < n; t++)
            (e = r[t]) &&
              e._lazy &&
              (e.render(e._lazy[0], e._lazy[1], !0)._lazy = 0);
        },
        Zt = function (t, e, n, r) {
          It.length && !H && Jt(),
            t.render(e, n, r || (H && e < 0 && (t._initted || t._startAt))),
            It.length && !H && Jt();
        },
        te = function (t) {
          var e = parseFloat(t);
          return (e || 0 === e) && (t + "").match(St).length < 2
            ? e
            : ct(t)
            ? t.trim()
            : t;
        },
        ee = function (t) {
          return t;
        },
        ne = function (t, e) {
          for (var n in e) n in t || (t[n] = e[n]);
          return t;
        },
        re = function (t, e) {
          for (var n in e) t[n] = e[n];
          return t;
        },
        ie = function t(e, n) {
          for (var r in n)
            "__proto__" !== r &&
              "constructor" !== r &&
              "prototype" !== r &&
              (e[r] = ht(n[r]) ? t(e[r] || (e[r] = {}), n[r]) : n[r]);
          return e;
        },
        oe = function (t, e) {
          var n,
            r = {};
          for (n in t) n in e || (r[n] = t[n]);
          return r;
        },
        se = function (t) {
          var e,
            n = t.parent || F,
            r = t.keyframes
              ? ((e = yt(t.keyframes)),
                function (t, n) {
                  for (var r in n)
                    r in t ||
                      ("duration" === r && e) ||
                      "ease" === r ||
                      (t[r] = n[r]);
                })
              : ne;
          if (pt(t.inherit))
            for (; n; ) r(t, n.vars.defaults), (n = n.parent || n._dp);
          return t;
        },
        ae = function (t, e, n, r, i) {
          void 0 === n && (n = "_first"), void 0 === r && (r = "_last");
          var o,
            s = t[r];
          if (i) for (o = e[i]; s && s[i] > o; ) s = s._prev;
          return (
            s
              ? ((e._next = s._next), (s._next = e))
              : ((e._next = t[n]), (t[n] = e)),
            e._next ? (e._next._prev = e) : (t[r] = e),
            (e._prev = s),
            (e.parent = e._dp = t),
            e
          );
        },
        ue = function (t, e, n, r) {
          void 0 === n && (n = "_first"), void 0 === r && (r = "_last");
          var i = e._prev,
            o = e._next;
          i ? (i._next = o) : t[n] === e && (t[n] = o),
            o ? (o._prev = i) : t[r] === e && (t[r] = i),
            (e._next = e._prev = e.parent = null);
        },
        ce = function (t, e) {
          t.parent &&
            (!e || t.parent.autoRemoveChildren) &&
            t.parent.remove &&
            t.parent.remove(t),
            (t._act = 0);
        },
        le = function (t, e) {
          if (t && (!e || e._end > t._dur || e._start < 0))
            for (var n = t; n; ) (n._dirty = 1), (n = n.parent);
          return t;
        },
        de = function (t, e, n, r) {
          return (
            t._startAt &&
            (H
              ? t._startAt.revert(Pt)
              : (t.vars.immediateRender && !t.vars.autoRevert) ||
                t._startAt.render(e, !0, r))
          );
        },
        fe = function t(e) {
          return !e || (e._ts && t(e.parent));
        },
        he = function (t) {
          return t._repeat
            ? pe(t._tTime, (t = t.duration() + t._rDelay)) * t
            : 0;
        },
        pe = function (t, e) {
          var n = Math.floor((t /= e));
          return t && n === t ? n - 1 : n;
        },
        me = function (t, e) {
          return (
            (t - e._start) * e._ts +
            (e._ts >= 0 ? 0 : e._dirty ? e.totalDuration() : e._tDur)
          );
        },
        ge = function (t) {
          return (t._end = Vt(
            t._start + (t._tDur / Math.abs(t._ts || t._rts || nt) || 0)
          ));
        },
        ve = function (t, e) {
          var n = t._dp;
          return (
            n &&
              n.smoothChildTiming &&
              t._ts &&
              ((t._start = Vt(
                n._time -
                  (t._ts > 0
                    ? e / t._ts
                    : ((t._dirty ? t.totalDuration() : t._tDur) - e) / -t._ts)
              )),
              ge(t),
              n._dirty || le(n, t)),
            t
          );
        },
        ye = function (t, e) {
          var n;
          if (
            ((e._time ||
              (!e._dur && e._initted) ||
              (e._start < t._time && (e._dur || !e.add))) &&
              ((n = me(t.rawTime(), e)),
              (!e._dur || De(0, e.totalDuration(), n) - e._tTime > nt) &&
                e.render(n, !0)),
            le(t, e)._dp && t._initted && t._time >= t._dur && t._ts)
          ) {
            if (t._dur < t.duration())
              for (n = t; n._dp; )
                n.rawTime() >= 0 && n.totalTime(n._tTime), (n = n._dp);
            t._zTime = -1e-8;
          }
        },
        _e = function (t, e, n, r) {
          return (
            e.parent && ce(e),
            (e._start = Vt(
              (dt(n) ? n : n || t !== F ? Ce(t, n, e) : t._time) + e._delay
            )),
            (e._end = Vt(
              e._start + (e.totalDuration() / Math.abs(e.timeScale()) || 0)
            )),
            ae(t, e, "_first", "_last", t._sort ? "_start" : 0),
            Te(e) || (t._recent = e),
            r || ye(t, e),
            t._ts < 0 && ve(t, t._tTime),
            t
          );
        },
        xe = function (t, e) {
          return (
            (kt.ScrollTrigger || At("scrollTrigger", e)) &&
            kt.ScrollTrigger.create(e, t)
          );
        },
        be = function (t, e, n, r, i) {
          return (
            kn(t, e, i),
            t._initted
              ? !n &&
                t._pt &&
                !H &&
                ((t._dur && !1 !== t.vars.lazy) || (!t._dur && t.vars.lazy)) &&
                G !== on.frame
                ? (It.push(t), (t._lazy = [i, r]), 1)
                : void 0
              : 1
          );
        },
        we = function t(e) {
          var n = e.parent;
          return (
            n && n._ts && n._initted && !n._lock && (n.rawTime() < 0 || t(n))
          );
        },
        Te = function (t) {
          var e = t.data;
          return "isFromStart" === e || "isStart" === e;
        },
        Se = function (t, e, n, r) {
          var i = t._repeat,
            o = Vt(e) || 0,
            s = t._tTime / t._tDur;
          return (
            s && !r && (t._time *= o / t._dur),
            (t._dur = o),
            (t._tDur = i
              ? i < 0
                ? 1e10
                : Vt(o * (i + 1) + t._rDelay * i)
              : o),
            s > 0 && !r && ve(t, (t._tTime = t._tDur * s)),
            t.parent && ge(t),
            n || le(t.parent, t),
            t
          );
        },
        Ee = function (t) {
          return t instanceof xn ? le(t) : Se(t, t._dur);
        },
        ke = { _start: 0, endTime: Ot, totalDuration: Ot },
        Ce = function t(e, n, r) {
          var i,
            o,
            s,
            a = e.labels,
            u = e._recent || ke,
            c = e.duration() >= et ? u.endTime(!1) : e._dur;
          return ct(n) && (isNaN(n) || n in a)
            ? ((o = n.charAt(0)),
              (s = "%" === n.substr(-1)),
              (i = n.indexOf("=")),
              "<" === o || ">" === o
                ? (i >= 0 && (n = n.replace(/=/, "")),
                  ("<" === o ? u._start : u.endTime(u._repeat >= 0)) +
                    (parseFloat(n.substr(1)) || 0) *
                      (s ? (i < 0 ? u : r).totalDuration() / 100 : 1))
                : i < 0
                ? (n in a || (a[n] = c), a[n])
                : ((o = parseFloat(n.charAt(i - 1) + n.substr(i + 1))),
                  s &&
                    r &&
                    (o = (o / 100) * (yt(r) ? r[0] : r).totalDuration()),
                  i > 1 ? t(e, n.substr(0, i - 1), r) + o : c + o))
            : null == n
            ? c
            : +n;
        },
        Le = function (t, e, n) {
          var r,
            i,
            o = dt(e[1]),
            s = (o ? 2 : 1) + (t < 2 ? 0 : 1),
            a = e[s];
          if ((o && (a.duration = e[1]), (a.parent = n), t)) {
            for (r = a, i = n; i && !("immediateRender" in r); )
              (r = i.vars.defaults || {}), (i = pt(i.vars.inherit) && i.parent);
            (a.immediateRender = pt(r.immediateRender)),
              t < 2 ? (a.runBackwards = 1) : (a.startAt = e[s - 1]);
          }
          return new qn(e[0], a, e[s + 1]);
        },
        Ae = function (t, e) {
          return t || 0 === t ? e(t) : e;
        },
        De = function (t, e, n) {
          return n < t ? t : n > e ? e : n;
        },
        qe = function (t, e) {
          return ct(t) && (e = Et.exec(t)) ? e[1] : "";
        },
        Oe = [].slice,
        Me = function (t, e) {
          return (
            t &&
            ht(t) &&
            "length" in t &&
            ((!e && !t.length) || (t.length - 1 in t && ht(t[0]))) &&
            !t.nodeType &&
            t !== B
          );
        },
        Pe = function (t, e, n) {
          return z && !e && z.selector
            ? z.selector(t)
            : !ct(t) || n || (!W && sn())
            ? yt(t)
              ? (function (t, e, n) {
                  return (
                    void 0 === n && (n = []),
                    t.forEach(function (t) {
                      var r;
                      return (ct(t) && !e) || Me(t, 1)
                        ? (r = n).push.apply(r, Pe(t))
                        : n.push(t);
                    }) || n
                  );
                })(t, n)
              : Me(t)
              ? Oe.call(t, 0)
              : t
              ? [t]
              : []
            : Oe.call((e || $).querySelectorAll(t), 0);
        },
        Re = function (t) {
          return (
            (t = Pe(t)[0] || Dt("Invalid scope") || {}),
            function (e) {
              var n = t.current || t.nativeElement || t;
              return Pe(
                e,
                n.querySelectorAll
                  ? n
                  : n === t
                  ? Dt("Invalid scope") || $.createElement("div")
                  : t
              );
            }
          );
        },
        Ne = function (t) {
          return t.sort(function () {
            return 0.5 - Math.random();
          });
        },
        Ie = function (t) {
          if (lt(t)) return t;
          var e = ht(t) ? t : { each: t },
            n = hn(e.ease),
            r = e.from || 0,
            i = parseFloat(e.base) || 0,
            o = {},
            s = r > 0 && r < 1,
            a = isNaN(r) || s,
            u = e.axis,
            c = r,
            l = r;
          return (
            ct(r)
              ? (c = l = { center: 0.5, edges: 0.5, end: 1 }[r] || 0)
              : !s && a && ((c = r[0]), (l = r[1])),
            function (t, s, d) {
              var f,
                h,
                p,
                m,
                g,
                v,
                y,
                _,
                x,
                b = (d || e).length,
                w = o[b];
              if (!w) {
                if (!(x = "auto" === e.grid ? 0 : (e.grid || [1, et])[1])) {
                  for (
                    y = -et;
                    y < (y = d[x++].getBoundingClientRect().left) && x < b;

                  );
                  x--;
                }
                for (
                  w = o[b] = [],
                    f = a ? Math.min(x, b) * c - 0.5 : r % x,
                    h = x === et ? 0 : a ? (b * l) / x - 0.5 : (r / x) | 0,
                    y = 0,
                    _ = et,
                    v = 0;
                  v < b;
                  v++
                )
                  (p = (v % x) - f),
                    (m = h - ((v / x) | 0)),
                    (w[v] = g =
                      u ? Math.abs("y" === u ? m : p) : st(p * p + m * m)),
                    g > y && (y = g),
                    g < _ && (_ = g);
                "random" === r && Ne(w),
                  (w.max = y - _),
                  (w.min = _),
                  (w.v = b =
                    (parseFloat(e.amount) ||
                      parseFloat(e.each) *
                        (x > b
                          ? b - 1
                          : u
                          ? "y" === u
                            ? b / x
                            : x
                          : Math.max(x, b / x)) ||
                      0) * ("edges" === r ? -1 : 1)),
                  (w.b = b < 0 ? i - b : i),
                  (w.u = qe(e.amount || e.each) || 0),
                  (n = n && b < 0 ? dn(n) : n);
              }
              return (
                (b = (w[t] - w.min) / w.max || 0),
                Vt(w.b + (n ? n(b) : b) * w.v) + w.u
              );
            }
          );
        },
        je = function (t) {
          var e = Math.pow(10, ((t + "").split(".")[1] || "").length);
          return function (n) {
            var r = Vt(Math.round(parseFloat(n) / t) * t * e);
            return (r - (r % 1)) / e + (dt(n) ? 0 : qe(n));
          };
        },
        He = function (t, e) {
          var n,
            r,
            i = yt(t);
          return (
            !i &&
              ht(t) &&
              ((n = i = t.radius || et),
              t.values
                ? ((t = Pe(t.values)), (r = !dt(t[0])) && (n *= n))
                : (t = je(t.increment))),
            Ae(
              e,
              i
                ? lt(t)
                  ? function (e) {
                      return (r = t(e)), Math.abs(r - e) <= n ? r : e;
                    }
                  : function (e) {
                      for (
                        var i,
                          o,
                          s = parseFloat(r ? e.x : e),
                          a = parseFloat(r ? e.y : 0),
                          u = et,
                          c = 0,
                          l = t.length;
                        l--;

                      )
                        (i = r
                          ? (i = t[l].x - s) * i + (o = t[l].y - a) * o
                          : Math.abs(t[l] - s)) < u && ((u = i), (c = l));
                      return (
                        (c = !n || u <= n ? t[c] : e),
                        r || c === e || dt(e) ? c : c + qe(e)
                      );
                    }
                : je(t)
            )
          );
        },
        ze = function (t, e, n, r) {
          return Ae(yt(t) ? !e : !0 === n ? !!(n = 0) : !r, function () {
            return yt(t)
              ? t[~~(Math.random() * t.length)]
              : (n = n || 1e-5) &&
                  (r = n < 1 ? Math.pow(10, (n + "").length - 2) : 1) &&
                  Math.floor(
                    Math.round(
                      (t - n / 2 + Math.random() * (e - t + 0.99 * n)) / n
                    ) *
                      n *
                      r
                  ) / r;
          });
        },
        Fe = function (t, e, n) {
          return Ae(n, function (n) {
            return t[~~e(n)];
          });
        },
        Be = function (t) {
          for (var e, n, r, i, o = 0, s = ""; ~(e = t.indexOf("random(", o)); )
            (r = t.indexOf(")", e)),
              (i = "[" === t.charAt(e + 7)),
              (n = t.substr(e + 7, r - e - 7).match(i ? St : _t)),
              (s +=
                t.substr(o, e - o) +
                ze(i ? n : +n[0], i ? 0 : +n[1], +n[2] || 1e-5)),
              (o = r + 1);
          return s + t.substr(o, t.length - o);
        },
        We = function (t, e, n, r, i) {
          var o = e - t,
            s = r - n;
          return Ae(i, function (e) {
            return n + (((e - t) / o) * s || 0);
          });
        },
        $e = function (t, e, n) {
          var r,
            i,
            o,
            s = t.labels,
            a = et;
          for (r in s)
            (i = s[r] - e) < 0 == !!n &&
              i &&
              a > (i = Math.abs(i)) &&
              ((o = r), (a = i));
          return o;
        },
        Ye = function (t, e, n) {
          var r,
            i,
            o,
            s = t.vars,
            a = s[e],
            u = z,
            c = t._ctx;
          if (a)
            return (
              (r = s[e + "Params"]),
              (i = s.callbackScope || t),
              n && It.length && Jt(),
              c && (z = c),
              (o = r ? a.apply(i, r) : a.call(i)),
              (z = u),
              o
            );
        },
        Ge = function (t) {
          return (
            ce(t),
            t.scrollTrigger && t.scrollTrigger.kill(!!H),
            t.progress() < 1 && Ye(t, "onInterrupt"),
            t
          );
        },
        Ue = [],
        Xe = function (t) {
          if (mt() && t) {
            var e = (t = (!t.name && t.default) || t).name,
              n = lt(t),
              r =
                e && !n && t.init
                  ? function () {
                      this._props = [];
                    }
                  : t,
              i = {
                init: Ot,
                render: zn,
                add: Sn,
                kill: Bn,
                modifier: Fn,
                rawVars: 0,
              },
              o = {
                targetTest: 0,
                get: 0,
                getSetter: Nn,
                aliases: {},
                register: 0,
              };
            if ((sn(), t !== r)) {
              if (Ht[e]) return;
              ne(r, ne(oe(t, i), o)),
                re(r.prototype, re(i, oe(t, o))),
                (Ht[(r.prop = e)] = r),
                t.targetTest && (Bt.push(r), (Nt[e] = 1)),
                (e =
                  ("css" === e
                    ? "CSS"
                    : e.charAt(0).toUpperCase() + e.substr(1)) + "Plugin");
            }
            qt(e, r), t.register && t.register(ir, r, Yn);
          } else t && Ue.push(t);
        },
        Ve = 255,
        Qe = {
          aqua: [0, Ve, Ve],
          lime: [0, Ve, 0],
          silver: [192, 192, 192],
          black: [0, 0, 0],
          maroon: [128, 0, 0],
          teal: [0, 128, 128],
          blue: [0, 0, Ve],
          navy: [0, 0, 128],
          white: [Ve, Ve, Ve],
          olive: [128, 128, 0],
          yellow: [Ve, Ve, 0],
          orange: [Ve, 165, 0],
          gray: [128, 128, 128],
          purple: [128, 0, 128],
          green: [0, 128, 0],
          red: [Ve, 0, 0],
          pink: [Ve, 192, 203],
          cyan: [0, Ve, Ve],
          transparent: [Ve, Ve, Ve, 0],
        },
        Ke = function (t, e, n) {
          return (
            ((6 * (t += t < 0 ? 1 : t > 1 ? -1 : 0) < 1
              ? e + (n - e) * t * 6
              : t < 0.5
              ? n
              : 3 * t < 2
              ? e + (n - e) * (2 / 3 - t) * 6
              : e) *
              Ve +
              0.5) |
            0
          );
        },
        Je = function (t, e, n) {
          var r,
            i,
            o,
            s,
            a,
            u,
            c,
            l,
            d,
            f,
            h = t ? (dt(t) ? [t >> 16, (t >> 8) & Ve, t & Ve] : 0) : Qe.black;
          if (!h) {
            if (
              ("," === t.substr(-1) && (t = t.substr(0, t.length - 1)), Qe[t])
            )
              h = Qe[t];
            else if ("#" === t.charAt(0)) {
              if (
                (t.length < 6 &&
                  ((r = t.charAt(1)),
                  (i = t.charAt(2)),
                  (o = t.charAt(3)),
                  (t =
                    "#" +
                    r +
                    r +
                    i +
                    i +
                    o +
                    o +
                    (5 === t.length ? t.charAt(4) + t.charAt(4) : ""))),
                9 === t.length)
              )
                return [
                  (h = parseInt(t.substr(1, 6), 16)) >> 16,
                  (h >> 8) & Ve,
                  h & Ve,
                  parseInt(t.substr(7), 16) / 255,
                ];
              h = [
                (t = parseInt(t.substr(1), 16)) >> 16,
                (t >> 8) & Ve,
                t & Ve,
              ];
            } else if ("hsl" === t.substr(0, 3))
              if (((h = f = t.match(_t)), e)) {
                if (~t.indexOf("="))
                  return (h = t.match(xt)), n && h.length < 4 && (h[3] = 1), h;
              } else
                (s = (+h[0] % 360) / 360),
                  (a = +h[1] / 100),
                  (r =
                    2 * (u = +h[2] / 100) -
                    (i = u <= 0.5 ? u * (a + 1) : u + a - u * a)),
                  h.length > 3 && (h[3] *= 1),
                  (h[0] = Ke(s + 1 / 3, r, i)),
                  (h[1] = Ke(s, r, i)),
                  (h[2] = Ke(s - 1 / 3, r, i));
            else h = t.match(_t) || Qe.transparent;
            h = h.map(Number);
          }
          return (
            e &&
              !f &&
              ((r = h[0] / Ve),
              (i = h[1] / Ve),
              (o = h[2] / Ve),
              (u = ((c = Math.max(r, i, o)) + (l = Math.min(r, i, o))) / 2),
              c === l
                ? (s = a = 0)
                : ((d = c - l),
                  (a = u > 0.5 ? d / (2 - c - l) : d / (c + l)),
                  (s =
                    c === r
                      ? (i - o) / d + (i < o ? 6 : 0)
                      : c === i
                      ? (o - r) / d + 2
                      : (r - i) / d + 4),
                  (s *= 60)),
              (h[0] = ~~(s + 0.5)),
              (h[1] = ~~(100 * a + 0.5)),
              (h[2] = ~~(100 * u + 0.5))),
            n && h.length < 4 && (h[3] = 1),
            h
          );
        },
        Ze = function (t) {
          var e = [],
            n = [],
            r = -1;
          return (
            t.split(en).forEach(function (t) {
              var i = t.match(bt) || [];
              e.push.apply(e, i), n.push((r += i.length + 1));
            }),
            (e.c = n),
            e
          );
        },
        tn = function (t, e, n) {
          var r,
            i,
            o,
            s,
            a = "",
            u = (t + a).match(en),
            c = e ? "hsla(" : "rgba(",
            l = 0;
          if (!u) return t;
          if (
            ((u = u.map(function (t) {
              return (
                (t = Je(t, e, 1)) &&
                c +
                  (e
                    ? t[0] + "," + t[1] + "%," + t[2] + "%," + t[3]
                    : t.join(",")) +
                  ")"
              );
            })),
            n && ((o = Ze(t)), (r = n.c).join(a) !== o.c.join(a)))
          )
            for (s = (i = t.replace(en, "1").split(bt)).length - 1; l < s; l++)
              a +=
                i[l] +
                (~r.indexOf(l)
                  ? u.shift() || c + "0,0,0,0)"
                  : (o.length ? o : u.length ? u : n).shift());
          if (!i)
            for (s = (i = t.split(en)).length - 1; l < s; l++) a += i[l] + u[l];
          return a + i[s];
        },
        en = (function () {
          var t,
            e =
              "(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3,4}){1,2}\\b";
          for (t in Qe) e += "|" + t + "\\b";
          return new RegExp(e + ")", "gi");
        })(),
        nn = /hsl[a]?\(/,
        rn = function (t) {
          var e,
            n = t.join(" ");
          if (((en.lastIndex = 0), en.test(n)))
            return (
              (e = nn.test(n)),
              (t[1] = tn(t[1], e)),
              (t[0] = tn(t[0], e, Ze(t[1]))),
              !0
            );
        },
        on = (function () {
          var t,
            e,
            n,
            r,
            i,
            o,
            s = Date.now,
            a = 500,
            u = 33,
            c = s(),
            l = c,
            d = 1e3 / 240,
            f = d,
            h = [],
            p = function n(p) {
              var m,
                g,
                v,
                y,
                _ = s() - l,
                x = !0 === p;
              if (
                (_ > a && (c += _ - u),
                ((m = (v = (l += _) - c) - f) > 0 || x) &&
                  ((y = ++r.frame),
                  (i = v - 1e3 * r.time),
                  (r.time = v /= 1e3),
                  (f += m + (m >= d ? 4 : d - m)),
                  (g = 1)),
                x || (t = e(n)),
                g)
              )
                for (o = 0; o < h.length; o++) h[o](v, i, y, p);
            };
          return (r = {
            time: 0,
            frame: 0,
            tick: function () {
              p(!0);
            },
            deltaRatio: function (t) {
              return i / (1e3 / (t || 60));
            },
            wake: function () {
              Y &&
                (!W &&
                  mt() &&
                  ((B = W = window),
                  ($ = B.document || {}),
                  (kt.gsap = ir),
                  (B.gsapVersions || (B.gsapVersions = [])).push(ir.version),
                  Lt(Ct || B.GreenSockGlobals || (!B.gsap && B) || {}),
                  (n = B.requestAnimationFrame),
                  Ue.forEach(Xe)),
                t && r.sleep(),
                (e =
                  n ||
                  function (t) {
                    return setTimeout(t, (f - 1e3 * r.time + 1) | 0);
                  }),
                (X = 1),
                p(2));
            },
            sleep: function () {
              (n ? B.cancelAnimationFrame : clearTimeout)(t), (X = 0), (e = Ot);
            },
            lagSmoothing: function (t, e) {
              (a = t || 1 / 0), (u = Math.min(e || 33, a));
            },
            fps: function (t) {
              (d = 1e3 / (t || 240)), (f = 1e3 * r.time + d);
            },
            add: function (t, e, n) {
              var i = e
                ? function (e, n, o, s) {
                    t(e, n, o, s), r.remove(i);
                  }
                : t;
              return r.remove(t), h[n ? "unshift" : "push"](i), sn(), i;
            },
            remove: function (t, e) {
              ~(e = h.indexOf(t)) && h.splice(e, 1) && o >= e && o--;
            },
            _listeners: h,
          });
        })(),
        sn = function () {
          return !X && on.wake();
        },
        an = {},
        un = /^[\d.\-M][\d.\-,\s]/,
        cn = /["']/g,
        ln = function (t) {
          for (
            var e,
              n,
              r,
              i = {},
              o = t.substr(1, t.length - 3).split(":"),
              s = o[0],
              a = 1,
              u = o.length;
            a < u;
            a++
          )
            (n = o[a]),
              (e = a !== u - 1 ? n.lastIndexOf(",") : n.length),
              (r = n.substr(0, e)),
              (i[s] = isNaN(r) ? r.replace(cn, "").trim() : +r),
              (s = n.substr(e + 1).trim());
          return i;
        },
        dn = function (t) {
          return function (e) {
            return 1 - t(1 - e);
          };
        },
        fn = function t(e, n) {
          for (var r, i = e._first; i; )
            i instanceof xn
              ? t(i, n)
              : !i.vars.yoyoEase ||
                (i._yoyo && i._repeat) ||
                i._yoyo === n ||
                (i.timeline
                  ? t(i.timeline, n)
                  : ((r = i._ease),
                    (i._ease = i._yEase),
                    (i._yEase = r),
                    (i._yoyo = n))),
              (i = i._next);
        },
        hn = function (t, e) {
          return (
            (t &&
              (lt(t)
                ? t
                : an[t] ||
                  (function (t) {
                    var e,
                      n,
                      r,
                      i,
                      o = (t + "").split("("),
                      s = an[o[0]];
                    return s && o.length > 1 && s.config
                      ? s.config.apply(
                          null,
                          ~t.indexOf("{")
                            ? [ln(o[1])]
                            : ((e = t),
                              (n = e.indexOf("(") + 1),
                              (r = e.indexOf(")")),
                              (i = e.indexOf("(", n)),
                              e.substring(
                                n,
                                ~i && i < r ? e.indexOf(")", r + 1) : r
                              ))
                                .split(",")
                                .map(te)
                        )
                      : an._CE && un.test(t)
                      ? an._CE("", t)
                      : s;
                  })(t))) ||
            e
          );
        },
        pn = function (t, e, n, r) {
          void 0 === n &&
            (n = function (t) {
              return 1 - e(1 - t);
            }),
            void 0 === r &&
              (r = function (t) {
                return t < 0.5 ? e(2 * t) / 2 : 1 - e(2 * (1 - t)) / 2;
              });
          var i,
            o = { easeIn: e, easeOut: n, easeInOut: r };
          return (
            Ut(t, function (t) {
              for (var e in ((an[t] = kt[t] = o),
              (an[(i = t.toLowerCase())] = n),
              o))
                an[
                  i +
                    ("easeIn" === e
                      ? ".in"
                      : "easeOut" === e
                      ? ".out"
                      : ".inOut")
                ] = an[t + "." + e] = o[e];
            }),
            o
          );
        },
        mn = function (t) {
          return function (e) {
            return e < 0.5
              ? (1 - t(1 - 2 * e)) / 2
              : 0.5 + t(2 * (e - 0.5)) / 2;
          };
        },
        gn = function t(e, n, r) {
          var i = n >= 1 ? n : 1,
            o = (r || (e ? 0.3 : 0.45)) / (n < 1 ? n : 1),
            s = (o / rt) * (Math.asin(1 / i) || 0),
            a = function (t) {
              return 1 === t
                ? 1
                : i * Math.pow(2, -10 * t) * ut((t - s) * o) + 1;
            },
            u =
              "out" === e
                ? a
                : "in" === e
                ? function (t) {
                    return 1 - a(1 - t);
                  }
                : mn(a);
          return (
            (o = rt / o),
            (u.config = function (n, r) {
              return t(e, n, r);
            }),
            u
          );
        },
        vn = function t(e, n) {
          void 0 === n && (n = 1.70158);
          var r = function (t) {
              return t ? --t * t * ((n + 1) * t + n) + 1 : 0;
            },
            i =
              "out" === e
                ? r
                : "in" === e
                ? function (t) {
                    return 1 - r(1 - t);
                  }
                : mn(r);
          return (
            (i.config = function (n) {
              return t(e, n);
            }),
            i
          );
        };
      Ut("Linear,Quad,Cubic,Quart,Quint,Strong", function (t, e) {
        var n = e < 5 ? e + 1 : e;
        pn(
          t + ",Power" + (n - 1),
          e
            ? function (t) {
                return Math.pow(t, n);
              }
            : function (t) {
                return t;
              },
          function (t) {
            return 1 - Math.pow(1 - t, n);
          },
          function (t) {
            return t < 0.5
              ? Math.pow(2 * t, n) / 2
              : 1 - Math.pow(2 * (1 - t), n) / 2;
          }
        );
      }),
        (an.Linear.easeNone = an.none = an.Linear.easeIn),
        pn("Elastic", gn("in"), gn("out"), gn()),
        (V = 7.5625),
        (K = 1 / (Q = 2.75)),
        pn(
          "Bounce",
          function (t) {
            return 1 - J(1 - t);
          },
          (J = function (t) {
            return t < K
              ? V * t * t
              : t < 0.7272727272727273
              ? V * Math.pow(t - 1.5 / Q, 2) + 0.75
              : t < 0.9090909090909092
              ? V * (t -= 2.25 / Q) * t + 0.9375
              : V * Math.pow(t - 2.625 / Q, 2) + 0.984375;
          })
        ),
        pn("Expo", function (t) {
          return t ? Math.pow(2, 10 * (t - 1)) : 0;
        }),
        pn("Circ", function (t) {
          return -(st(1 - t * t) - 1);
        }),
        pn("Sine", function (t) {
          return 1 === t ? 1 : 1 - at(t * it);
        }),
        pn("Back", vn("in"), vn("out"), vn()),
        (an.SteppedEase =
          an.steps =
          kt.SteppedEase =
            {
              config: function (t, e) {
                void 0 === t && (t = 1);
                var n = 1 / t,
                  r = t + (e ? 0 : 1),
                  i = e ? 1 : 0;
                return function (t) {
                  return (((r * De(0, 0.99999999, t)) | 0) + i) * n;
                };
              },
            }),
        (tt.ease = an["quad.out"]),
        Ut(
          "onComplete,onUpdate,onStart,onRepeat,onReverseComplete,onInterrupt",
          function (t) {
            return (Wt += t + "," + t + "Params,");
          }
        );
      var yn = function (t, e) {
          (this.id = ot++),
            (t._gsap = this),
            (this.target = t),
            (this.harness = e),
            (this.get = e ? e.get : Gt),
            (this.set = e ? e.getSetter : Nn);
        },
        _n = (function () {
          function t(t) {
            (this.vars = t),
              (this._delay = +t.delay || 0),
              (this._repeat = t.repeat === 1 / 0 ? -2 : t.repeat || 0) &&
                ((this._rDelay = t.repeatDelay || 0),
                (this._yoyo = !!t.yoyo || !!t.yoyoEase)),
              (this._ts = 1),
              Se(this, +t.duration, 1, 1),
              (this.data = t.data),
              z && ((this._ctx = z), z.data.push(this)),
              X || on.wake();
          }
          var e = t.prototype;
          return (
            (e.delay = function (t) {
              return t || 0 === t
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
                    this._repeat > 0 ? t + (t + this._rDelay) * this._repeat : t
                  )
                : this.totalDuration() && this._dur;
            }),
            (e.totalDuration = function (t) {
              return arguments.length
                ? ((this._dirty = 0),
                  Se(
                    this,
                    this._repeat < 0
                      ? t
                      : (t - this._repeat * this._rDelay) / (this._repeat + 1)
                  ))
                : this._tDur;
            }),
            (e.totalTime = function (t, e) {
              if ((sn(), !arguments.length)) return this._tTime;
              var n = this._dp;
              if (n && n.smoothChildTiming && this._ts) {
                for (
                  ve(this, t), !n._dp || n.parent || ye(n, this);
                  n && n.parent;

                )
                  n.parent._time !==
                    n._start +
                      (n._ts >= 0
                        ? n._tTime / n._ts
                        : (n.totalDuration() - n._tTime) / -n._ts) &&
                    n.totalTime(n._tTime, !0),
                    (n = n.parent);
                !this.parent &&
                  this._dp.autoRemoveChildren &&
                  ((this._ts > 0 && t < this._tDur) ||
                    (this._ts < 0 && t > 0) ||
                    (!this._tDur && !t)) &&
                  _e(this._dp, this, this._start - this._delay);
              }
              return (
                (this._tTime !== t ||
                  (!this._dur && !e) ||
                  (this._initted && Math.abs(this._zTime) === nt) ||
                  (!t && !this._initted && (this.add || this._ptLookup))) &&
                  (this._ts || (this._pTime = t), Zt(this, t, e)),
                this
              );
            }),
            (e.time = function (t, e) {
              return arguments.length
                ? this.totalTime(
                    Math.min(this.totalDuration(), t + he(this)) %
                      (this._dur + this._rDelay) || (t ? this._dur : 0),
                    e
                  )
                : this._time;
            }),
            (e.totalProgress = function (t, e) {
              return arguments.length
                ? this.totalTime(this.totalDuration() * t, e)
                : this.totalDuration()
                ? Math.min(1, this._tTime / this._tDur)
                : this.ratio;
            }),
            (e.progress = function (t, e) {
              return arguments.length
                ? this.totalTime(
                    this.duration() *
                      (!this._yoyo || 1 & this.iteration() ? t : 1 - t) +
                      he(this),
                    e
                  )
                : this.duration()
                ? Math.min(1, this._time / this._dur)
                : this.ratio;
            }),
            (e.iteration = function (t, e) {
              var n = this.duration() + this._rDelay;
              return arguments.length
                ? this.totalTime(this._time + (t - 1) * n, e)
                : this._repeat
                ? pe(this._tTime, n) + 1
                : 1;
            }),
            (e.timeScale = function (t) {
              if (!arguments.length) return -1e-8 === this._rts ? 0 : this._rts;
              if (this._rts === t) return this;
              var e =
                this.parent && this._ts
                  ? me(this.parent._time, this)
                  : this._tTime;
              return (
                (this._rts = +t || 0),
                (this._ts = this._ps || -1e-8 === t ? 0 : this._rts),
                this.totalTime(De(-Math.abs(this._delay), this._tDur, e), !0),
                ge(this),
                (function (t) {
                  for (var e = t.parent; e && e.parent; )
                    (e._dirty = 1), e.totalDuration(), (e = e.parent);
                  return t;
                })(this)
              );
            }),
            (e.paused = function (t) {
              return arguments.length
                ? (this._ps !== t &&
                    ((this._ps = t),
                    t
                      ? ((this._pTime =
                          this._tTime ||
                          Math.max(-this._delay, this.rawTime())),
                        (this._ts = this._act = 0))
                      : (sn(),
                        (this._ts = this._rts),
                        this.totalTime(
                          this.parent && !this.parent.smoothChildTiming
                            ? this.rawTime()
                            : this._tTime || this._pTime,
                          1 === this.progress() &&
                            Math.abs(this._zTime) !== nt &&
                            (this._tTime -= nt)
                        ))),
                  this)
                : this._ps;
            }),
            (e.startTime = function (t) {
              if (arguments.length) {
                this._start = t;
                var e = this.parent || this._dp;
                return (
                  e &&
                    (e._sort || !this.parent) &&
                    _e(e, this, t - this._delay),
                  this
                );
              }
              return this._start;
            }),
            (e.endTime = function (t) {
              return (
                this._start +
                (pt(t) ? this.totalDuration() : this.duration()) /
                  Math.abs(this._ts || 1)
              );
            }),
            (e.rawTime = function (t) {
              var e = this.parent || this._dp;
              return e
                ? t &&
                  (!this._ts ||
                    (this._repeat && this._time && this.totalProgress() < 1))
                  ? this._tTime % (this._dur + this._rDelay)
                  : this._ts
                  ? me(e.rawTime(t), this)
                  : this._tTime
                : this._tTime;
            }),
            (e.revert = function (t) {
              void 0 === t && (t = Rt);
              var e = H;
              return (
                (H = t),
                (this._initted || this._startAt) &&
                  (this.timeline && this.timeline.revert(t),
                  this.totalTime(-0.01, t.suppressEvents)),
                "nested" !== this.data && !1 !== t.kill && this.kill(),
                (H = e),
                this
              );
            }),
            (e.globalTime = function (t) {
              for (var e = this, n = arguments.length ? t : e.rawTime(); e; )
                (n = e._start + n / (e._ts || 1)), (e = e._dp);
              return !this.parent && this._sat
                ? this._sat.vars.immediateRender
                  ? -1 / 0
                  : this._sat.globalTime(t)
                : n;
            }),
            (e.repeat = function (t) {
              return arguments.length
                ? ((this._repeat = t === 1 / 0 ? -2 : t), Ee(this))
                : -2 === this._repeat
                ? 1 / 0
                : this._repeat;
            }),
            (e.repeatDelay = function (t) {
              if (arguments.length) {
                var e = this._time;
                return (this._rDelay = t), Ee(this), e ? this.time(e) : this;
              }
              return this._rDelay;
            }),
            (e.yoyo = function (t) {
              return arguments.length ? ((this._yoyo = t), this) : this._yoyo;
            }),
            (e.seek = function (t, e) {
              return this.totalTime(Ce(this, t), pt(e));
            }),
            (e.restart = function (t, e) {
              return this.play().totalTime(t ? -this._delay : 0, pt(e));
            }),
            (e.play = function (t, e) {
              return null != t && this.seek(t, e), this.reversed(!1).paused(!1);
            }),
            (e.reverse = function (t, e) {
              return (
                null != t && this.seek(t || this.totalDuration(), e),
                this.reversed(!0).paused(!1)
              );
            }),
            (e.pause = function (t, e) {
              return null != t && this.seek(t, e), this.paused(!0);
            }),
            (e.resume = function () {
              return this.paused(!1);
            }),
            (e.reversed = function (t) {
              return arguments.length
                ? (!!t !== this.reversed() &&
                    this.timeScale(-this._rts || (t ? -1e-8 : 0)),
                  this)
                : this._rts < 0;
            }),
            (e.invalidate = function () {
              return (
                (this._initted = this._act = 0), (this._zTime = -1e-8), this
              );
            }),
            (e.isActive = function () {
              var t,
                e = this.parent || this._dp,
                n = this._start;
              return !(
                e &&
                !(
                  this._ts &&
                  this._initted &&
                  e.isActive() &&
                  (t = e.rawTime(!0)) >= n &&
                  t < this.endTime(!0) - nt
                )
              );
            }),
            (e.eventCallback = function (t, e, n) {
              var r = this.vars;
              return arguments.length > 1
                ? (e
                    ? ((r[t] = e),
                      n && (r[t + "Params"] = n),
                      "onUpdate" === t && (this._onUpdate = e))
                    : delete r[t],
                  this)
                : r[t];
            }),
            (e.then = function (t) {
              var e = this;
              return new Promise(function (n) {
                var r = lt(t) ? t : ee,
                  i = function () {
                    var t = e.then;
                    (e.then = null),
                      lt(r) &&
                        (r = r(e)) &&
                        (r.then || r === e) &&
                        (e.then = t),
                      n(r),
                      (e.then = t);
                  };
                (e._initted && 1 === e.totalProgress() && e._ts >= 0) ||
                (!e._tTime && e._ts < 0)
                  ? i()
                  : (e._prom = i);
              });
            }),
            (e.kill = function () {
              Ge(this);
            }),
            t
          );
        })();
      ne(_n.prototype, {
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
        _zTime: -1e-8,
        _prom: 0,
        _ps: !1,
        _rts: 1,
      });
      var xn = (function (t) {
        function e(e, n) {
          var r;
          return (
            void 0 === e && (e = {}),
            ((r = t.call(this, e) || this).labels = {}),
            (r.smoothChildTiming = !!e.smoothChildTiming),
            (r.autoRemoveChildren = !!e.autoRemoveChildren),
            (r._sort = pt(e.sortChildren)),
            F && _e(e.parent || F, N(r), n),
            e.reversed && r.reverse(),
            e.paused && r.paused(!0),
            e.scrollTrigger && xe(N(r), e.scrollTrigger),
            r
          );
        }
        I(e, t);
        var n = e.prototype;
        return (
          (n.to = function (t, e, n) {
            return Le(0, arguments, this), this;
          }),
          (n.from = function (t, e, n) {
            return Le(1, arguments, this), this;
          }),
          (n.fromTo = function (t, e, n, r) {
            return Le(2, arguments, this), this;
          }),
          (n.set = function (t, e, n) {
            return (
              (e.duration = 0),
              (e.parent = this),
              se(e).repeatDelay || (e.repeat = 0),
              (e.immediateRender = !!e.immediateRender),
              new qn(t, e, Ce(this, n), 1),
              this
            );
          }),
          (n.call = function (t, e, n) {
            return _e(this, qn.delayedCall(0, t, e), n);
          }),
          (n.staggerTo = function (t, e, n, r, i, o, s) {
            return (
              (n.duration = e),
              (n.stagger = n.stagger || r),
              (n.onComplete = o),
              (n.onCompleteParams = s),
              (n.parent = this),
              new qn(t, n, Ce(this, i)),
              this
            );
          }),
          (n.staggerFrom = function (t, e, n, r, i, o, s) {
            return (
              (n.runBackwards = 1),
              (se(n).immediateRender = pt(n.immediateRender)),
              this.staggerTo(t, e, n, r, i, o, s)
            );
          }),
          (n.staggerFromTo = function (t, e, n, r, i, o, s, a) {
            return (
              (r.startAt = n),
              (se(r).immediateRender = pt(r.immediateRender)),
              this.staggerTo(t, e, r, i, o, s, a)
            );
          }),
          (n.render = function (t, e, n) {
            var r,
              i,
              o,
              s,
              a,
              u,
              c,
              l,
              d,
              f,
              h,
              p,
              m = this._time,
              g = this._dirty ? this.totalDuration() : this._tDur,
              v = this._dur,
              y = t <= 0 ? 0 : Vt(t),
              _ = this._zTime < 0 != t < 0 && (this._initted || !v);
            if (
              (this !== F && y > g && t >= 0 && (y = g),
              y !== this._tTime || n || _)
            ) {
              if (
                (m !== this._time &&
                  v &&
                  ((y += this._time - m), (t += this._time - m)),
                (r = y),
                (d = this._start),
                (u = !(l = this._ts)),
                _ && (v || (m = this._zTime), (t || !e) && (this._zTime = t)),
                this._repeat)
              ) {
                if (
                  ((h = this._yoyo),
                  (a = v + this._rDelay),
                  this._repeat < -1 && t < 0)
                )
                  return this.totalTime(100 * a + t, e, n);
                if (
                  ((r = Vt(y % a)),
                  y === g
                    ? ((s = this._repeat), (r = v))
                    : ((s = ~~(y / a)) && s === y / a && ((r = v), s--),
                      r > v && (r = v)),
                  (f = pe(this._tTime, a)),
                  !m &&
                    this._tTime &&
                    f !== s &&
                    this._tTime - f * a - this._dur <= 0 &&
                    (f = s),
                  h && 1 & s && ((r = v - r), (p = 1)),
                  s !== f && !this._lock)
                ) {
                  var x = h && 1 & f,
                    b = x === (h && 1 & s);
                  if (
                    (s < f && (x = !x),
                    (m = x ? 0 : y % v ? v : y),
                    (this._lock = 1),
                    (this.render(m || (p ? 0 : Vt(s * a)), e, !v)._lock = 0),
                    (this._tTime = y),
                    !e && this.parent && Ye(this, "onRepeat"),
                    this.vars.repeatRefresh &&
                      !p &&
                      (this.invalidate()._lock = 1),
                    (m && m !== this._time) ||
                      u !== !this._ts ||
                      (this.vars.onRepeat && !this.parent && !this._act))
                  )
                    return this;
                  if (
                    ((v = this._dur),
                    (g = this._tDur),
                    b &&
                      ((this._lock = 2),
                      (m = x ? v : -1e-4),
                      this.render(m, !0),
                      this.vars.repeatRefresh && !p && this.invalidate()),
                    (this._lock = 0),
                    !this._ts && !u)
                  )
                    return this;
                  fn(this, p);
                }
              }
              if (
                (this._hasPause &&
                  !this._forcing &&
                  this._lock < 2 &&
                  ((c = (function (t, e, n) {
                    var r;
                    if (n > e)
                      for (r = t._first; r && r._start <= n; ) {
                        if ("isPause" === r.data && r._start > e) return r;
                        r = r._next;
                      }
                    else
                      for (r = t._last; r && r._start >= n; ) {
                        if ("isPause" === r.data && r._start < e) return r;
                        r = r._prev;
                      }
                  })(this, Vt(m), Vt(r))),
                  c && (y -= r - (r = c._start))),
                (this._tTime = y),
                (this._time = r),
                (this._act = !l),
                this._initted ||
                  ((this._onUpdate = this.vars.onUpdate),
                  (this._initted = 1),
                  (this._zTime = t),
                  (m = 0)),
                !m && r && !e && !s && (Ye(this, "onStart"), this._tTime !== y))
              )
                return this;
              if (r >= m && t >= 0)
                for (i = this._first; i; ) {
                  if (
                    ((o = i._next),
                    (i._act || r >= i._start) && i._ts && c !== i)
                  ) {
                    if (i.parent !== this) return this.render(t, e, n);
                    if (
                      (i.render(
                        i._ts > 0
                          ? (r - i._start) * i._ts
                          : (i._dirty ? i.totalDuration() : i._tDur) +
                              (r - i._start) * i._ts,
                        e,
                        n
                      ),
                      r !== this._time || (!this._ts && !u))
                    ) {
                      (c = 0), o && (y += this._zTime = -1e-8);
                      break;
                    }
                  }
                  i = o;
                }
              else {
                i = this._last;
                for (var w = t < 0 ? t : r; i; ) {
                  if (
                    ((o = i._prev), (i._act || w <= i._end) && i._ts && c !== i)
                  ) {
                    if (i.parent !== this) return this.render(t, e, n);
                    if (
                      (i.render(
                        i._ts > 0
                          ? (w - i._start) * i._ts
                          : (i._dirty ? i.totalDuration() : i._tDur) +
                              (w - i._start) * i._ts,
                        e,
                        n || (H && (i._initted || i._startAt))
                      ),
                      r !== this._time || (!this._ts && !u))
                    ) {
                      (c = 0), o && (y += this._zTime = w ? -1e-8 : nt);
                      break;
                    }
                  }
                  i = o;
                }
              }
              if (
                c &&
                !e &&
                (this.pause(),
                (c.render(r >= m ? 0 : -1e-8)._zTime = r >= m ? 1 : -1),
                this._ts)
              )
                return (this._start = d), ge(this), this.render(t, e, n);
              this._onUpdate && !e && Ye(this, "onUpdate", !0),
                ((y === g && this._tTime >= this.totalDuration()) ||
                  (!y && m)) &&
                  ((d !== this._start && Math.abs(l) === Math.abs(this._ts)) ||
                    this._lock ||
                    ((t || !v) &&
                      ((y === g && this._ts > 0) || (!y && this._ts < 0)) &&
                      ce(this, 1),
                    e ||
                      (t < 0 && !m) ||
                      (!y && !m && g) ||
                      (Ye(
                        this,
                        y === g && t >= 0 ? "onComplete" : "onReverseComplete",
                        !0
                      ),
                      this._prom &&
                        !(y < g && this.timeScale() > 0) &&
                        this._prom())));
            }
            return this;
          }),
          (n.add = function (t, e) {
            var n = this;
            if ((dt(e) || (e = Ce(this, e, t)), !(t instanceof _n))) {
              if (yt(t))
                return (
                  t.forEach(function (t) {
                    return n.add(t, e);
                  }),
                  this
                );
              if (ct(t)) return this.addLabel(t, e);
              if (!lt(t)) return this;
              t = qn.delayedCall(0, t);
            }
            return this !== t ? _e(this, t, e) : this;
          }),
          (n.getChildren = function (t, e, n, r) {
            void 0 === t && (t = !0),
              void 0 === e && (e = !0),
              void 0 === n && (n = !0),
              void 0 === r && (r = -et);
            for (var i = [], o = this._first; o; )
              o._start >= r &&
                (o instanceof qn
                  ? e && i.push(o)
                  : (n && i.push(o),
                    t && i.push.apply(i, o.getChildren(!0, e, n)))),
                (o = o._next);
            return i;
          }),
          (n.getById = function (t) {
            for (var e = this.getChildren(1, 1, 1), n = e.length; n--; )
              if (e[n].vars.id === t) return e[n];
          }),
          (n.remove = function (t) {
            return ct(t)
              ? this.removeLabel(t)
              : lt(t)
              ? this.killTweensOf(t)
              : (ue(this, t),
                t === this._recent && (this._recent = this._last),
                le(this));
          }),
          (n.totalTime = function (e, n) {
            return arguments.length
              ? ((this._forcing = 1),
                !this._dp &&
                  this._ts &&
                  (this._start = Vt(
                    on.time -
                      (this._ts > 0
                        ? e / this._ts
                        : (this.totalDuration() - e) / -this._ts)
                  )),
                t.prototype.totalTime.call(this, e, n),
                (this._forcing = 0),
                this)
              : this._tTime;
          }),
          (n.addLabel = function (t, e) {
            return (this.labels[t] = Ce(this, e)), this;
          }),
          (n.removeLabel = function (t) {
            return delete this.labels[t], this;
          }),
          (n.addPause = function (t, e, n) {
            var r = qn.delayedCall(0, e || Ot, n);
            return (
              (r.data = "isPause"),
              (this._hasPause = 1),
              _e(this, r, Ce(this, t))
            );
          }),
          (n.removePause = function (t) {
            var e = this._first;
            for (t = Ce(this, t); e; )
              e._start === t && "isPause" === e.data && ce(e), (e = e._next);
          }),
          (n.killTweensOf = function (t, e, n) {
            for (var r = this.getTweensOf(t, n), i = r.length; i--; )
              bn !== r[i] && r[i].kill(t, e);
            return this;
          }),
          (n.getTweensOf = function (t, e) {
            for (var n, r = [], i = Pe(t), o = this._first, s = dt(e); o; )
              o instanceof qn
                ? Kt(o._targets, i) &&
                  (s
                    ? (!bn || (o._initted && o._ts)) &&
                      o.globalTime(0) <= e &&
                      o.globalTime(o.totalDuration()) > e
                    : !e || o.isActive()) &&
                  r.push(o)
                : (n = o.getTweensOf(i, e)).length && r.push.apply(r, n),
                (o = o._next);
            return r;
          }),
          (n.tweenTo = function (t, e) {
            e = e || {};
            var n,
              r = this,
              i = Ce(r, t),
              o = e,
              s = o.startAt,
              a = o.onStart,
              u = o.onStartParams,
              c = o.immediateRender,
              l = qn.to(
                r,
                ne(
                  {
                    ease: e.ease || "none",
                    lazy: !1,
                    immediateRender: !1,
                    time: i,
                    overwrite: "auto",
                    duration:
                      e.duration ||
                      Math.abs(
                        (i - (s && "time" in s ? s.time : r._time)) /
                          r.timeScale()
                      ) ||
                      nt,
                    onStart: function () {
                      if ((r.pause(), !n)) {
                        var t =
                          e.duration ||
                          Math.abs(
                            (i - (s && "time" in s ? s.time : r._time)) /
                              r.timeScale()
                          );
                        l._dur !== t && Se(l, t, 0, 1).render(l._time, !0, !0),
                          (n = 1);
                      }
                      a && a.apply(l, u || []);
                    },
                  },
                  e
                )
              );
            return c ? l.render(0) : l;
          }),
          (n.tweenFromTo = function (t, e, n) {
            return this.tweenTo(e, ne({ startAt: { time: Ce(this, t) } }, n));
          }),
          (n.recent = function () {
            return this._recent;
          }),
          (n.nextLabel = function (t) {
            return void 0 === t && (t = this._time), $e(this, Ce(this, t));
          }),
          (n.previousLabel = function (t) {
            return void 0 === t && (t = this._time), $e(this, Ce(this, t), 1);
          }),
          (n.currentLabel = function (t) {
            return arguments.length
              ? this.seek(t, !0)
              : this.previousLabel(this._time + nt);
          }),
          (n.shiftChildren = function (t, e, n) {
            void 0 === n && (n = 0);
            for (var r, i = this._first, o = this.labels; i; )
              i._start >= n && ((i._start += t), (i._end += t)), (i = i._next);
            if (e) for (r in o) o[r] >= n && (o[r] += t);
            return le(this);
          }),
          (n.invalidate = function (e) {
            var n = this._first;
            for (this._lock = 0; n; ) n.invalidate(e), (n = n._next);
            return t.prototype.invalidate.call(this, e);
          }),
          (n.clear = function (t) {
            void 0 === t && (t = !0);
            for (var e, n = this._first; n; )
              (e = n._next), this.remove(n), (n = e);
            return (
              this._dp && (this._time = this._tTime = this._pTime = 0),
              t && (this.labels = {}),
              le(this)
            );
          }),
          (n.totalDuration = function (t) {
            var e,
              n,
              r,
              i = 0,
              o = this,
              s = o._last,
              a = et;
            if (arguments.length)
              return o.timeScale(
                (o._repeat < 0 ? o.duration() : o.totalDuration()) /
                  (o.reversed() ? -t : t)
              );
            if (o._dirty) {
              for (r = o.parent; s; )
                (e = s._prev),
                  s._dirty && s.totalDuration(),
                  (n = s._start) > a && o._sort && s._ts && !o._lock
                    ? ((o._lock = 1), (_e(o, s, n - s._delay, 1)._lock = 0))
                    : (a = n),
                  n < 0 &&
                    s._ts &&
                    ((i -= n),
                    ((!r && !o._dp) || (r && r.smoothChildTiming)) &&
                      ((o._start += n / o._ts),
                      (o._time -= n),
                      (o._tTime -= n)),
                    o.shiftChildren(-n, !1, -Infinity),
                    (a = 0)),
                  s._end > i && s._ts && (i = s._end),
                  (s = e);
              Se(o, o === F && o._time > i ? o._time : i, 1, 1), (o._dirty = 0);
            }
            return o._tDur;
          }),
          (e.updateRoot = function (t) {
            if ((F._ts && (Zt(F, me(t, F)), (G = on.frame)), on.frame >= Ft)) {
              Ft += Z.autoSleep || 120;
              var e = F._first;
              if ((!e || !e._ts) && Z.autoSleep && on._listeners.length < 2) {
                for (; e && !e._ts; ) e = e._next;
                e || on.sleep();
              }
            }
          }),
          e
        );
      })(_n);
      ne(xn.prototype, { _lock: 0, _hasPause: 0, _forcing: 0 });
      var bn,
        wn,
        Tn = function (t, e, n, r, i, o, s) {
          var a,
            u,
            c,
            l,
            d,
            f,
            h,
            p,
            m = new Yn(this._pt, t, e, 0, 1, Hn, null, i),
            g = 0,
            v = 0;
          for (
            m.b = n,
              m.e = r,
              n += "",
              (h = ~(r += "").indexOf("random(")) && (r = Be(r)),
              o && (o((p = [n, r]), t, e), (n = p[0]), (r = p[1])),
              u = n.match(wt) || [];
            (a = wt.exec(r));

          )
            (l = a[0]),
              (d = r.substring(g, a.index)),
              c ? (c = (c + 1) % 5) : "rgba(" === d.substr(-5) && (c = 1),
              l !== u[v++] &&
                ((f = parseFloat(u[v - 1]) || 0),
                (m._pt = {
                  _next: m._pt,
                  p: d || 1 === v ? d : ",",
                  s: f,
                  c: "=" === l.charAt(1) ? Qt(f, l) - f : parseFloat(l) - f,
                  m: c && c < 4 ? Math.round : 0,
                }),
                (g = wt.lastIndex));
          return (
            (m.c = g < r.length ? r.substring(g, r.length) : ""),
            (m.fp = s),
            (Tt.test(r) || h) && (m.e = 0),
            (this._pt = m),
            m
          );
        },
        Sn = function (t, e, n, r, i, o, s, a, u, c) {
          lt(r) && (r = r(i || 0, t, o));
          var l,
            d = t[e],
            f =
              "get" !== n
                ? n
                : lt(d)
                ? u
                  ? t[
                      e.indexOf("set") || !lt(t["get" + e.substr(3)])
                        ? e
                        : "get" + e.substr(3)
                    ](u)
                  : t[e]()
                : d,
            h = lt(d) ? (u ? Pn : Mn) : On;
          if (
            (ct(r) &&
              (~r.indexOf("random(") && (r = Be(r)),
              "=" === r.charAt(1) &&
                ((l = Qt(f, r) + (qe(f) || 0)) || 0 === l) &&
                (r = l)),
            !c || f !== r || wn)
          )
            return isNaN(f * r) || "" === r
              ? (!d && !(e in t) && At(e, r),
                Tn.call(this, t, e, f, r, h, a || Z.stringFilter, u))
              : ((l = new Yn(
                  this._pt,
                  t,
                  e,
                  +f || 0,
                  r - (f || 0),
                  "boolean" == typeof d ? jn : In,
                  0,
                  h
                )),
                u && (l.fp = u),
                s && l.modifier(s, this, t),
                (this._pt = l));
        },
        En = function (t, e, n, r, i, o) {
          var s, a, u, c;
          if (
            Ht[t] &&
            !1 !==
              (s = new Ht[t]()).init(
                i,
                s.rawVars
                  ? e[t]
                  : (function (t, e, n, r, i) {
                      if (
                        (lt(t) && (t = Ln(t, i, e, n, r)),
                        !ht(t) || (t.style && t.nodeType) || yt(t) || vt(t))
                      )
                        return ct(t) ? Ln(t, i, e, n, r) : t;
                      var o,
                        s = {};
                      for (o in t) s[o] = Ln(t[o], i, e, n, r);
                      return s;
                    })(e[t], r, i, o, n),
                n,
                r,
                o
              ) &&
            ((n._pt = a =
              new Yn(n._pt, i, t, 0, 1, s.render, s, 0, s.priority)),
            n !== U)
          )
            for (
              u = n._ptLookup[n._targets.indexOf(i)], c = s._props.length;
              c--;

            )
              u[s._props[c]] = a;
          return s;
        },
        kn = function t(e, n, r) {
          var i,
            o,
            s,
            a,
            u,
            c,
            l,
            d,
            f,
            h,
            p,
            m,
            g,
            v = e.vars,
            y = v.ease,
            _ = v.startAt,
            x = v.immediateRender,
            b = v.lazy,
            w = v.onUpdate,
            T = v.onUpdateParams,
            S = v.callbackScope,
            E = v.runBackwards,
            k = v.yoyoEase,
            C = v.keyframes,
            L = v.autoRevert,
            A = e._dur,
            D = e._startAt,
            q = e._targets,
            O = e.parent,
            M = O && "nested" === O.data ? O.vars.targets : q,
            P = "auto" === e._overwrite && !j,
            R = e.timeline;
          if (
            (R && (!C || !y) && (y = "none"),
            (e._ease = hn(y, tt.ease)),
            (e._yEase = k ? dn(hn(!0 === k ? y : k, tt.ease)) : 0),
            k &&
              e._yoyo &&
              !e._repeat &&
              ((k = e._yEase), (e._yEase = e._ease), (e._ease = k)),
            (e._from = !R && !!v.runBackwards),
            !R || (C && !v.stagger))
          ) {
            if (
              ((m = (d = q[0] ? Yt(q[0]).harness : 0) && v[d.prop]),
              (i = oe(v, Nt)),
              D &&
                (D._zTime < 0 && D.progress(1),
                n < 0 && E && x && !L
                  ? D.render(-1, !0)
                  : D.revert(E && A ? Pt : Mt),
                (D._lazy = 0)),
              _)
            ) {
              if (
                (ce(
                  (e._startAt = qn.set(
                    q,
                    ne(
                      {
                        data: "isStart",
                        overwrite: !1,
                        parent: O,
                        immediateRender: !0,
                        lazy: !D && pt(b),
                        startAt: null,
                        delay: 0,
                        onUpdate: w,
                        onUpdateParams: T,
                        callbackScope: S,
                        stagger: 0,
                      },
                      _
                    )
                  ))
                ),
                (e._startAt._dp = 0),
                (e._startAt._sat = e),
                n < 0 && (H || (!x && !L)) && e._startAt.revert(Pt),
                x && A && n <= 0 && r <= 0)
              )
                return void (n && (e._zTime = n));
            } else if (E && A && !D)
              if (
                (n && (x = !1),
                (s = ne(
                  {
                    overwrite: !1,
                    data: "isFromStart",
                    lazy: x && !D && pt(b),
                    immediateRender: x,
                    stagger: 0,
                    parent: O,
                  },
                  i
                )),
                m && (s[d.prop] = m),
                ce((e._startAt = qn.set(q, s))),
                (e._startAt._dp = 0),
                (e._startAt._sat = e),
                n < 0 &&
                  (H ? e._startAt.revert(Pt) : e._startAt.render(-1, !0)),
                (e._zTime = n),
                x)
              ) {
                if (!n) return;
              } else t(e._startAt, nt, nt);
            for (
              e._pt = e._ptCache = 0, b = (A && pt(b)) || (b && !A), o = 0;
              o < q.length;
              o++
            ) {
              if (
                ((l = (u = q[o])._gsap || $t(q)[o]._gsap),
                (e._ptLookup[o] = h = {}),
                jt[l.id] && It.length && Jt(),
                (p = M === q ? o : M.indexOf(u)),
                d &&
                  !1 !== (f = new d()).init(u, m || i, e, p, M) &&
                  ((e._pt = a =
                    new Yn(e._pt, u, f.name, 0, 1, f.render, f, 0, f.priority)),
                  f._props.forEach(function (t) {
                    h[t] = a;
                  }),
                  f.priority && (c = 1)),
                !d || m)
              )
                for (s in i)
                  Ht[s] && (f = En(s, i, e, p, u, M))
                    ? f.priority && (c = 1)
                    : (h[s] = a =
                        Sn.call(e, u, s, "get", i[s], p, M, 0, v.stringFilter));
              e._op && e._op[o] && e.kill(u, e._op[o]),
                P &&
                  e._pt &&
                  ((bn = e),
                  F.killTweensOf(u, h, e.globalTime(n)),
                  (g = !e.parent),
                  (bn = 0)),
                e._pt && b && (jt[l.id] = 1);
            }
            c && $n(e), e._onInit && e._onInit(e);
          }
          (e._onUpdate = w),
            (e._initted = (!e._op || e._pt) && !g),
            C && n <= 0 && R.render(et, !0, !0);
        },
        Cn = function (t, e, n, r) {
          var i,
            o,
            s = e.ease || r || "power1.inOut";
          if (yt(e))
            (o = n[t] || (n[t] = [])),
              e.forEach(function (t, n) {
                return o.push({ t: (n / (e.length - 1)) * 100, v: t, e: s });
              });
          else
            for (i in e)
              (o = n[i] || (n[i] = [])),
                "ease" === i || o.push({ t: parseFloat(t), v: e[i], e: s });
        },
        Ln = function (t, e, n, r, i) {
          return lt(t)
            ? t.call(e, n, r, i)
            : ct(t) && ~t.indexOf("random(")
            ? Be(t)
            : t;
        },
        An = Wt + "repeat,repeatDelay,yoyo,repeatRefresh,yoyoEase,autoRevert",
        Dn = {};
      Ut(An + ",id,stagger,delay,duration,paused,scrollTrigger", function (t) {
        return (Dn[t] = 1);
      });
      var qn = (function (t) {
        function e(e, n, r, i) {
          var o;
          "number" == typeof n && ((r.duration = n), (n = r), (r = null));
          var s,
            a,
            u,
            c,
            l,
            d,
            f,
            h,
            p = (o = t.call(this, i ? n : se(n)) || this).vars,
            m = p.duration,
            g = p.delay,
            v = p.immediateRender,
            y = p.stagger,
            _ = p.overwrite,
            x = p.keyframes,
            b = p.defaults,
            w = p.scrollTrigger,
            T = p.yoyoEase,
            S = n.parent || F,
            E = (yt(e) || vt(e) ? dt(e[0]) : "length" in n) ? [e] : Pe(e);
          if (
            ((o._targets = E.length
              ? $t(E)
              : Dt(
                  "GSAP target " + e + " not found. https://greensock.com",
                  !Z.nullTargetWarn
                ) || []),
            (o._ptLookup = []),
            (o._overwrite = _),
            x || y || gt(m) || gt(g))
          ) {
            if (
              ((n = o.vars),
              (s = o.timeline =
                new xn({
                  data: "nested",
                  defaults: b || {},
                  targets: S && "nested" === S.data ? S.vars.targets : E,
                })).kill(),
              (s.parent = s._dp = N(o)),
              (s._start = 0),
              y || gt(m) || gt(g))
            ) {
              if (((c = E.length), (f = y && Ie(y)), ht(y)))
                for (l in y) ~An.indexOf(l) && (h || (h = {}), (h[l] = y[l]));
              for (a = 0; a < c; a++)
                ((u = oe(n, Dn)).stagger = 0),
                  T && (u.yoyoEase = T),
                  h && re(u, h),
                  (d = E[a]),
                  (u.duration = +Ln(m, N(o), a, d, E)),
                  (u.delay = (+Ln(g, N(o), a, d, E) || 0) - o._delay),
                  !y &&
                    1 === c &&
                    u.delay &&
                    ((o._delay = g = u.delay), (o._start += g), (u.delay = 0)),
                  s.to(d, u, f ? f(a, d, E) : 0),
                  (s._ease = an.none);
              s.duration() ? (m = g = 0) : (o.timeline = 0);
            } else if (x) {
              se(ne(s.vars.defaults, { ease: "none" })),
                (s._ease = hn(x.ease || n.ease || "none"));
              var k,
                C,
                L,
                A = 0;
              if (yt(x))
                x.forEach(function (t) {
                  return s.to(E, t, ">");
                }),
                  s.duration();
              else {
                for (l in ((u = {}), x))
                  "ease" === l ||
                    "easeEach" === l ||
                    Cn(l, x[l], u, x.easeEach);
                for (l in u)
                  for (
                    k = u[l].sort(function (t, e) {
                      return t.t - e.t;
                    }),
                      A = 0,
                      a = 0;
                    a < k.length;
                    a++
                  )
                    ((L = {
                      ease: (C = k[a]).e,
                      duration: ((C.t - (a ? k[a - 1].t : 0)) / 100) * m,
                    })[l] = C.v),
                      s.to(E, L, A),
                      (A += L.duration);
                s.duration() < m && s.to({}, { duration: m - s.duration() });
              }
            }
            m || o.duration((m = s.duration()));
          } else o.timeline = 0;
          return (
            !0 !== _ || j || ((bn = N(o)), F.killTweensOf(E), (bn = 0)),
            _e(S, N(o), r),
            n.reversed && o.reverse(),
            n.paused && o.paused(!0),
            (v ||
              (!m &&
                !x &&
                o._start === Vt(S._time) &&
                pt(v) &&
                fe(N(o)) &&
                "nested" !== S.data)) &&
              ((o._tTime = -1e-8), o.render(Math.max(0, -g) || 0)),
            w && xe(N(o), w),
            o
          );
        }
        I(e, t);
        var n = e.prototype;
        return (
          (n.render = function (t, e, n) {
            var r,
              i,
              o,
              s,
              a,
              u,
              c,
              l,
              d,
              f = this._time,
              h = this._tDur,
              p = this._dur,
              m = t < 0,
              g = t > h - nt && !m ? h : t < nt ? 0 : t;
            if (p) {
              if (
                g !== this._tTime ||
                !t ||
                n ||
                (!this._initted && this._tTime) ||
                (this._startAt && this._zTime < 0 !== m)
              ) {
                if (((r = g), (l = this.timeline), this._repeat)) {
                  if (((s = p + this._rDelay), this._repeat < -1 && m))
                    return this.totalTime(100 * s + t, e, n);
                  if (
                    ((r = Vt(g % s)),
                    g === h
                      ? ((o = this._repeat), (r = p))
                      : ((o = ~~(g / s)) && o === g / s && ((r = p), o--),
                        r > p && (r = p)),
                    (u = this._yoyo && 1 & o) &&
                      ((d = this._yEase), (r = p - r)),
                    (a = pe(this._tTime, s)),
                    r === f && !n && this._initted)
                  )
                    return (this._tTime = g), this;
                  o !== a &&
                    (l && this._yEase && fn(l, u),
                    !this.vars.repeatRefresh ||
                      u ||
                      this._lock ||
                      ((this._lock = n = 1),
                      (this.render(Vt(s * o), !0).invalidate()._lock = 0)));
                }
                if (!this._initted) {
                  if (be(this, m ? t : r, n, e, g))
                    return (this._tTime = 0), this;
                  if (f !== this._time) return this;
                  if (p !== this._dur) return this.render(t, e, n);
                }
                if (
                  ((this._tTime = g),
                  (this._time = r),
                  !this._act && this._ts && ((this._act = 1), (this._lazy = 0)),
                  (this.ratio = c = (d || this._ease)(r / p)),
                  this._from && (this.ratio = c = 1 - c),
                  r &&
                    !f &&
                    !e &&
                    !o &&
                    (Ye(this, "onStart"), this._tTime !== g))
                )
                  return this;
                for (i = this._pt; i; ) i.r(c, i.d), (i = i._next);
                (l &&
                  l.render(
                    t < 0
                      ? t
                      : !r && u
                      ? -1e-8
                      : l._dur * l._ease(r / this._dur),
                    e,
                    n
                  )) ||
                  (this._startAt && (this._zTime = t)),
                  this._onUpdate &&
                    !e &&
                    (m && de(this, t, 0, n), Ye(this, "onUpdate")),
                  this._repeat &&
                    o !== a &&
                    this.vars.onRepeat &&
                    !e &&
                    this.parent &&
                    Ye(this, "onRepeat"),
                  (g !== this._tDur && g) ||
                    this._tTime !== g ||
                    (m && !this._onUpdate && de(this, t, 0, !0),
                    (t || !p) &&
                      ((g === this._tDur && this._ts > 0) ||
                        (!g && this._ts < 0)) &&
                      ce(this, 1),
                    e ||
                      (m && !f) ||
                      !(g || f || u) ||
                      (Ye(
                        this,
                        g === h ? "onComplete" : "onReverseComplete",
                        !0
                      ),
                      this._prom &&
                        !(g < h && this.timeScale() > 0) &&
                        this._prom()));
              }
            } else
              !(function (t, e, n, r) {
                var i,
                  o,
                  s,
                  a = t.ratio,
                  u =
                    e < 0 ||
                    (!e &&
                      ((!t._start && we(t) && (t._initted || !Te(t))) ||
                        ((t._ts < 0 || t._dp._ts < 0) && !Te(t))))
                      ? 0
                      : 1,
                  c = t._rDelay,
                  l = 0;
                if (
                  (c &&
                    t._repeat &&
                    ((l = De(0, t._tDur, e)),
                    (o = pe(l, c)),
                    t._yoyo && 1 & o && (u = 1 - u),
                    o !== pe(t._tTime, c) &&
                      ((a = 1 - u),
                      t.vars.repeatRefresh && t._initted && t.invalidate())),
                  u !== a || H || r || t._zTime === nt || (!e && t._zTime))
                ) {
                  if (!t._initted && be(t, e, r, n, l)) return;
                  for (
                    s = t._zTime,
                      t._zTime = e || (n ? nt : 0),
                      n || (n = e && !s),
                      t.ratio = u,
                      t._from && (u = 1 - u),
                      t._time = 0,
                      t._tTime = l,
                      i = t._pt;
                    i;

                  )
                    i.r(u, i.d), (i = i._next);
                  e < 0 && de(t, e, 0, !0),
                    t._onUpdate && !n && Ye(t, "onUpdate"),
                    l && t._repeat && !n && t.parent && Ye(t, "onRepeat"),
                    (e >= t._tDur || e < 0) &&
                      t.ratio === u &&
                      (u && ce(t, 1),
                      n ||
                        H ||
                        (Ye(t, u ? "onComplete" : "onReverseComplete", !0),
                        t._prom && t._prom()));
                } else t._zTime || (t._zTime = e);
              })(this, t, e, n);
            return this;
          }),
          (n.targets = function () {
            return this._targets;
          }),
          (n.invalidate = function (e) {
            return (
              (!e || !this.vars.runBackwards) && (this._startAt = 0),
              (this._pt =
                this._op =
                this._onUpdate =
                this._lazy =
                this.ratio =
                  0),
              (this._ptLookup = []),
              this.timeline && this.timeline.invalidate(e),
              t.prototype.invalidate.call(this, e)
            );
          }),
          (n.resetTo = function (t, e, n, r) {
            X || on.wake(), this._ts || this.play();
            var i = Math.min(
              this._dur,
              (this._dp._time - this._start) * this._ts
            );
            return (
              this._initted || kn(this, i),
              (function (t, e, n, r, i, o, s) {
                var a,
                  u,
                  c,
                  l,
                  d = ((t._pt && t._ptCache) || (t._ptCache = {}))[e];
                if (!d)
                  for (
                    d = t._ptCache[e] = [],
                      c = t._ptLookup,
                      l = t._targets.length;
                    l--;

                  ) {
                    if ((a = c[l][e]) && a.d && a.d._pt)
                      for (a = a.d._pt; a && a.p !== e && a.fp !== e; )
                        a = a._next;
                    if (!a)
                      return (
                        (wn = 1), (t.vars[e] = "+=0"), kn(t, s), (wn = 0), 1
                      );
                    d.push(a);
                  }
                for (l = d.length; l--; )
                  ((a = (u = d[l])._pt || u).s =
                    (!r && 0 !== r) || i ? a.s + (r || 0) + o * a.c : r),
                    (a.c = n - a.s),
                    u.e && (u.e = Xt(n) + qe(u.e)),
                    u.b && (u.b = a.s + qe(u.b));
              })(this, t, e, n, r, this._ease(i / this._dur), i)
                ? this.resetTo(t, e, n, r)
                : (ve(this, 0),
                  this.parent ||
                    ae(
                      this._dp,
                      this,
                      "_first",
                      "_last",
                      this._dp._sort ? "_start" : 0
                    ),
                  this.render(0))
            );
          }),
          (n.kill = function (t, e) {
            if ((void 0 === e && (e = "all"), !(t || (e && "all" !== e))))
              return (this._lazy = this._pt = 0), this.parent ? Ge(this) : this;
            if (this.timeline) {
              var n = this.timeline.totalDuration();
              return (
                this.timeline.killTweensOf(t, e, bn && !0 !== bn.vars.overwrite)
                  ._first || Ge(this),
                this.parent &&
                  n !== this.timeline.totalDuration() &&
                  Se(this, (this._dur * this.timeline._tDur) / n, 0, 1),
                this
              );
            }
            var r,
              i,
              o,
              s,
              a,
              u,
              c,
              l = this._targets,
              d = t ? Pe(t) : l,
              f = this._ptLookup,
              h = this._pt;
            if (
              (!e || "all" === e) &&
              (function (t, e) {
                for (
                  var n = t.length, r = n === e.length;
                  r && n-- && t[n] === e[n];

                );
                return n < 0;
              })(l, d)
            )
              return "all" === e && (this._pt = 0), Ge(this);
            for (
              r = this._op = this._op || [],
                "all" !== e &&
                  (ct(e) &&
                    ((a = {}),
                    Ut(e, function (t) {
                      return (a[t] = 1);
                    }),
                    (e = a)),
                  (e = (function (t, e) {
                    var n,
                      r,
                      i,
                      o,
                      s = t[0] ? Yt(t[0]).harness : 0,
                      a = s && s.aliases;
                    if (!a) return e;
                    for (r in ((n = re({}, e)), a))
                      if ((r in n))
                        for (i = (o = a[r].split(",")).length; i--; )
                          n[o[i]] = n[r];
                    return n;
                  })(l, e))),
                c = l.length;
              c--;

            )
              if (~d.indexOf(l[c]))
                for (a in ((i = f[c]),
                "all" === e
                  ? ((r[c] = e), (s = i), (o = {}))
                  : ((o = r[c] = r[c] || {}), (s = e)),
                s))
                  (u = i && i[a]) &&
                    (("kill" in u.d && !0 !== u.d.kill(a)) ||
                      ue(this, u, "_pt"),
                    delete i[a]),
                    "all" !== o && (o[a] = 1);
            return this._initted && !this._pt && h && Ge(this), this;
          }),
          (e.to = function (t, n) {
            return new e(t, n, arguments[2]);
          }),
          (e.from = function (t, e) {
            return Le(1, arguments);
          }),
          (e.delayedCall = function (t, n, r, i) {
            return new e(n, 0, {
              immediateRender: !1,
              lazy: !1,
              overwrite: !1,
              delay: t,
              onComplete: n,
              onReverseComplete: n,
              onCompleteParams: r,
              onReverseCompleteParams: r,
              callbackScope: i,
            });
          }),
          (e.fromTo = function (t, e, n) {
            return Le(2, arguments);
          }),
          (e.set = function (t, n) {
            return (
              (n.duration = 0), n.repeatDelay || (n.repeat = 0), new e(t, n)
            );
          }),
          (e.killTweensOf = function (t, e, n) {
            return F.killTweensOf(t, e, n);
          }),
          e
        );
      })(_n);
      ne(qn.prototype, {
        _targets: [],
        _lazy: 0,
        _startAt: 0,
        _op: 0,
        _onInit: 0,
      }),
        Ut("staggerTo,staggerFrom,staggerFromTo", function (t) {
          qn[t] = function () {
            var e = new xn(),
              n = Oe.call(arguments, 0);
            return (
              n.splice("staggerFromTo" === t ? 5 : 4, 0, 0), e[t].apply(e, n)
            );
          };
        });
      var On = function (t, e, n) {
          return (t[e] = n);
        },
        Mn = function (t, e, n) {
          return t[e](n);
        },
        Pn = function (t, e, n, r) {
          return t[e](r.fp, n);
        },
        Rn = function (t, e, n) {
          return t.setAttribute(e, n);
        },
        Nn = function (t, e) {
          return lt(t[e]) ? Mn : ft(t[e]) && t.setAttribute ? Rn : On;
        },
        In = function (t, e) {
          return e.set(e.t, e.p, Math.round(1e6 * (e.s + e.c * t)) / 1e6, e);
        },
        jn = function (t, e) {
          return e.set(e.t, e.p, !!(e.s + e.c * t), e);
        },
        Hn = function (t, e) {
          var n = e._pt,
            r = "";
          if (!t && e.b) r = e.b;
          else if (1 === t && e.e) r = e.e;
          else {
            for (; n; )
              (r =
                n.p +
                (n.m
                  ? n.m(n.s + n.c * t)
                  : Math.round(1e4 * (n.s + n.c * t)) / 1e4) +
                r),
                (n = n._next);
            r += e.c;
          }
          e.set(e.t, e.p, r, e);
        },
        zn = function (t, e) {
          for (var n = e._pt; n; ) n.r(t, n.d), (n = n._next);
        },
        Fn = function (t, e, n, r) {
          for (var i, o = this._pt; o; )
            (i = o._next), o.p === r && o.modifier(t, e, n), (o = i);
        },
        Bn = function (t) {
          for (var e, n, r = this._pt; r; )
            (n = r._next),
              (r.p === t && !r.op) || r.op === t
                ? ue(this, r, "_pt")
                : r.dep || (e = 1),
              (r = n);
          return !e;
        },
        Wn = function (t, e, n, r) {
          r.mSet(t, e, r.m.call(r.tween, n, r.mt), r);
        },
        $n = function (t) {
          for (var e, n, r, i, o = t._pt; o; ) {
            for (e = o._next, n = r; n && n.pr > o.pr; ) n = n._next;
            (o._prev = n ? n._prev : i) ? (o._prev._next = o) : (r = o),
              (o._next = n) ? (n._prev = o) : (i = o),
              (o = e);
          }
          t._pt = r;
        },
        Yn = (function () {
          function t(t, e, n, r, i, o, s, a, u) {
            (this.t = e),
              (this.s = r),
              (this.c = i),
              (this.p = n),
              (this.r = o || In),
              (this.d = s || this),
              (this.set = a || On),
              (this.pr = u || 0),
              (this._next = t),
              t && (t._prev = this);
          }
          return (
            (t.prototype.modifier = function (t, e, n) {
              (this.mSet = this.mSet || this.set),
                (this.set = Wn),
                (this.m = t),
                (this.mt = n),
                (this.tween = e);
            }),
            t
          );
        })();
      Ut(
        Wt +
          "parent,duration,ease,delay,overwrite,runBackwards,startAt,yoyo,immediateRender,repeat,repeatDelay,data,paused,reversed,lazy,callbackScope,stringFilter,id,yoyoEase,stagger,inherit,repeatRefresh,keyframes,autoRevert,scrollTrigger",
        function (t) {
          return (Nt[t] = 1);
        }
      ),
        (kt.TweenMax = kt.TweenLite = qn),
        (kt.TimelineLite = kt.TimelineMax = xn),
        (F = new xn({
          sortChildren: !1,
          defaults: tt,
          autoRemoveChildren: !0,
          id: "root",
          smoothChildTiming: !0,
        })),
        (Z.stringFilter = rn);
      var Gn = [],
        Un = {},
        Xn = [],
        Vn = 0,
        Qn = 0,
        Kn = function (t) {
          return (Un[t] || Xn).map(function (t) {
            return t();
          });
        },
        Jn = function () {
          var t = Date.now(),
            e = [];
          t - Vn > 2 &&
            (Kn("matchMediaInit"),
            Gn.forEach(function (t) {
              var n,
                r,
                i,
                o,
                s = t.queries,
                a = t.conditions;
              for (r in s)
                (n = B.matchMedia(s[r]).matches) && (i = 1),
                  n !== a[r] && ((a[r] = n), (o = 1));
              o && (t.revert(), i && e.push(t));
            }),
            Kn("matchMediaRevert"),
            e.forEach(function (t) {
              return t.onMatch(t);
            }),
            (Vn = t),
            Kn("matchMedia"));
        },
        Zn = (function () {
          function t(t, e) {
            (this.selector = e && Re(e)),
              (this.data = []),
              (this._r = []),
              (this.isReverted = !1),
              (this.id = Qn++),
              t && this.add(t);
          }
          var e = t.prototype;
          return (
            (e.add = function (t, e, n) {
              lt(t) && ((n = e), (e = t), (t = lt));
              var r = this,
                i = function () {
                  var t,
                    i = z,
                    o = r.selector;
                  return (
                    i && i !== r && i.data.push(r),
                    n && (r.selector = Re(n)),
                    (z = r),
                    (t = e.apply(r, arguments)),
                    lt(t) && r._r.push(t),
                    (z = i),
                    (r.selector = o),
                    (r.isReverted = !1),
                    t
                  );
                };
              return (r.last = i), t === lt ? i(r) : t ? (r[t] = i) : i;
            }),
            (e.ignore = function (t) {
              var e = z;
              (z = null), t(this), (z = e);
            }),
            (e.getTweens = function () {
              var e = [];
              return (
                this.data.forEach(function (n) {
                  return n instanceof t
                    ? e.push.apply(e, n.getTweens())
                    : n instanceof qn &&
                        !(n.parent && "nested" === n.parent.data) &&
                        e.push(n);
                }),
                e
              );
            }),
            (e.clear = function () {
              this._r.length = this.data.length = 0;
            }),
            (e.kill = function (t, e) {
              var n = this;
              if (t) {
                var r = this.getTweens();
                this.data.forEach(function (t) {
                  "isFlip" === t.data &&
                    (t.revert(),
                    t.getChildren(!0, !0, !1).forEach(function (t) {
                      return r.splice(r.indexOf(t), 1);
                    }));
                }),
                  r
                    .map(function (t) {
                      return { g: t.globalTime(0), t: t };
                    })
                    .sort(function (t, e) {
                      return e.g - t.g || -1 / 0;
                    })
                    .forEach(function (e) {
                      return e.t.revert(t);
                    }),
                  this.data.forEach(function (e) {
                    return !(e instanceof qn) && e.revert && e.revert(t);
                  }),
                  this._r.forEach(function (e) {
                    return e(t, n);
                  }),
                  (this.isReverted = !0);
              } else
                this.data.forEach(function (t) {
                  return t.kill && t.kill();
                });
              if ((this.clear(), e))
                for (var i = Gn.length; i--; )
                  Gn[i].id === this.id && Gn.splice(i, 1);
            }),
            (e.revert = function (t) {
              this.kill(t || {});
            }),
            t
          );
        })(),
        tr = (function () {
          function t(t) {
            (this.contexts = []), (this.scope = t);
          }
          var e = t.prototype;
          return (
            (e.add = function (t, e, n) {
              ht(t) || (t = { matches: t });
              var r,
                i,
                o,
                s = new Zn(0, n || this.scope),
                a = (s.conditions = {});
              for (i in (z && !s.selector && (s.selector = z.selector),
              this.contexts.push(s),
              (e = s.add("onMatch", e)),
              (s.queries = t),
              t))
                "all" === i
                  ? (o = 1)
                  : (r = B.matchMedia(t[i])) &&
                    (Gn.indexOf(s) < 0 && Gn.push(s),
                    (a[i] = r.matches) && (o = 1),
                    r.addListener
                      ? r.addListener(Jn)
                      : r.addEventListener("change", Jn));
              return o && e(s), this;
            }),
            (e.revert = function (t) {
              this.kill(t || {});
            }),
            (e.kill = function (t) {
              this.contexts.forEach(function (e) {
                return e.kill(t, !0);
              });
            }),
            t
          );
        })(),
        er = {
          registerPlugin: function () {
            for (var t = arguments.length, e = new Array(t), n = 0; n < t; n++)
              e[n] = arguments[n];
            e.forEach(function (t) {
              return Xe(t);
            });
          },
          timeline: function (t) {
            return new xn(t);
          },
          getTweensOf: function (t, e) {
            return F.getTweensOf(t, e);
          },
          getProperty: function (t, e, n, r) {
            ct(t) && (t = Pe(t)[0]);
            var i = Yt(t || {}).get,
              o = n ? ee : te;
            return (
              "native" === n && (n = ""),
              t
                ? e
                  ? o(((Ht[e] && Ht[e].get) || i)(t, e, n, r))
                  : function (e, n, r) {
                      return o(((Ht[e] && Ht[e].get) || i)(t, e, n, r));
                    }
                : t
            );
          },
          quickSetter: function (t, e, n) {
            if ((t = Pe(t)).length > 1) {
              var r = t.map(function (t) {
                  return ir.quickSetter(t, e, n);
                }),
                i = r.length;
              return function (t) {
                for (var e = i; e--; ) r[e](t);
              };
            }
            t = t[0] || {};
            var o = Ht[e],
              s = Yt(t),
              a = (s.harness && (s.harness.aliases || {})[e]) || e,
              u = o
                ? function (e) {
                    var r = new o();
                    (U._pt = 0),
                      r.init(t, n ? e + n : e, U, 0, [t]),
                      r.render(1, r),
                      U._pt && zn(1, U);
                  }
                : s.set(t, a);
            return o
              ? u
              : function (e) {
                  return u(t, a, n ? e + n : e, s, 1);
                };
          },
          quickTo: function (t, e, n) {
            var r,
              i = ir.to(
                t,
                re((((r = {})[e] = "+=0.1"), (r.paused = !0), r), n || {})
              ),
              o = function (t, n, r) {
                return i.resetTo(e, t, n, r);
              };
            return (o.tween = i), o;
          },
          isTweening: function (t) {
            return F.getTweensOf(t, !0).length > 0;
          },
          defaults: function (t) {
            return (
              t && t.ease && (t.ease = hn(t.ease, tt.ease)), ie(tt, t || {})
            );
          },
          config: function (t) {
            return ie(Z, t || {});
          },
          registerEffect: function (t) {
            var e = t.name,
              n = t.effect,
              r = t.plugins,
              i = t.defaults,
              o = t.extendTimeline;
            (r || "").split(",").forEach(function (t) {
              return (
                t &&
                !Ht[t] &&
                !kt[t] &&
                Dt(e + " effect requires " + t + " plugin.")
              );
            }),
              (zt[e] = function (t, e, r) {
                return n(Pe(t), ne(e || {}, i), r);
              }),
              o &&
                (xn.prototype[e] = function (t, n, r) {
                  return this.add(zt[e](t, ht(n) ? n : (r = n) && {}, this), r);
                });
          },
          registerEase: function (t, e) {
            an[t] = hn(e);
          },
          parseEase: function (t, e) {
            return arguments.length ? hn(t, e) : an;
          },
          getById: function (t) {
            return F.getById(t);
          },
          exportRoot: function (t, e) {
            void 0 === t && (t = {});
            var n,
              r,
              i = new xn(t);
            for (
              i.smoothChildTiming = pt(t.smoothChildTiming),
                F.remove(i),
                i._dp = 0,
                i._time = i._tTime = F._time,
                n = F._first;
              n;

            )
              (r = n._next),
                (!e &&
                  !n._dur &&
                  n instanceof qn &&
                  n.vars.onComplete === n._targets[0]) ||
                  _e(i, n, n._start - n._delay),
                (n = r);
            return _e(F, i, 0), i;
          },
          context: function (t, e) {
            return t ? new Zn(t, e) : z;
          },
          matchMedia: function (t) {
            return new tr(t);
          },
          matchMediaRefresh: function () {
            return (
              Gn.forEach(function (t) {
                var e,
                  n,
                  r = t.conditions;
                for (n in r) r[n] && ((r[n] = !1), (e = 1));
                e && t.revert();
              }) || Jn()
            );
          },
          addEventListener: function (t, e) {
            var n = Un[t] || (Un[t] = []);
            ~n.indexOf(e) || n.push(e);
          },
          removeEventListener: function (t, e) {
            var n = Un[t],
              r = n && n.indexOf(e);
            r >= 0 && n.splice(r, 1);
          },
          utils: {
            wrap: function t(e, n, r) {
              var i = n - e;
              return yt(e)
                ? Fe(e, t(0, e.length), n)
                : Ae(r, function (t) {
                    return ((i + ((t - e) % i)) % i) + e;
                  });
            },
            wrapYoyo: function t(e, n, r) {
              var i = n - e,
                o = 2 * i;
              return yt(e)
                ? Fe(e, t(0, e.length - 1), n)
                : Ae(r, function (t) {
                    return (
                      e + ((t = (o + ((t - e) % o)) % o || 0) > i ? o - t : t)
                    );
                  });
            },
            distribute: Ie,
            random: ze,
            snap: He,
            normalize: function (t, e, n) {
              return We(t, e, 0, 1, n);
            },
            getUnit: qe,
            clamp: function (t, e, n) {
              return Ae(n, function (n) {
                return De(t, e, n);
              });
            },
            splitColor: Je,
            toArray: Pe,
            selector: Re,
            mapRange: We,
            pipe: function () {
              for (
                var t = arguments.length, e = new Array(t), n = 0;
                n < t;
                n++
              )
                e[n] = arguments[n];
              return function (t) {
                return e.reduce(function (t, e) {
                  return e(t);
                }, t);
              };
            },
            unitize: function (t, e) {
              return function (n) {
                return t(parseFloat(n)) + (e || qe(n));
              };
            },
            interpolate: function t(e, n, r, i) {
              var o = isNaN(e + n)
                ? 0
                : function (t) {
                    return (1 - t) * e + t * n;
                  };
              if (!o) {
                var s,
                  a,
                  u,
                  c,
                  l,
                  d = ct(e),
                  f = {};
                if ((!0 === r && (i = 1) && (r = null), d))
                  (e = { p: e }), (n = { p: n });
                else if (yt(e) && !yt(n)) {
                  for (u = [], c = e.length, l = c - 2, a = 1; a < c; a++)
                    u.push(t(e[a - 1], e[a]));
                  c--,
                    (o = function (t) {
                      t *= c;
                      var e = Math.min(l, ~~t);
                      return u[e](t - e);
                    }),
                    (r = n);
                } else i || (e = re(yt(e) ? [] : {}, e));
                if (!u) {
                  for (s in n) Sn.call(f, e, s, "get", n[s]);
                  o = function (t) {
                    return zn(t, f) || (d ? e.p : e);
                  };
                }
              }
              return Ae(r, o);
            },
            shuffle: Ne,
          },
          install: Lt,
          effects: zt,
          ticker: on,
          updateRoot: xn.updateRoot,
          plugins: Ht,
          globalTimeline: F,
          core: {
            PropTween: Yn,
            globals: qt,
            Tween: qn,
            Timeline: xn,
            Animation: _n,
            getCache: Yt,
            _removeLinkedListItem: ue,
            reverting: function () {
              return H;
            },
            context: function (t) {
              return t && z && (z.data.push(t), (t._ctx = z)), z;
            },
            suppressOverwrites: function (t) {
              return (j = t);
            },
          },
        };
      Ut("to,from,fromTo,delayedCall,set,killTweensOf", function (t) {
        return (er[t] = qn[t]);
      }),
        on.add(xn.updateRoot),
        (U = er.to({}, { duration: 0 }));
      var nr = function (t, e) {
          for (var n = t._pt; n && n.p !== e && n.op !== e && n.fp !== e; )
            n = n._next;
          return n;
        },
        rr = function (t, e) {
          return {
            name: t,
            rawVars: 1,
            init: function (t, n, r) {
              r._onInit = function (t) {
                var r, i;
                if (
                  (ct(n) &&
                    ((r = {}),
                    Ut(n, function (t) {
                      return (r[t] = 1);
                    }),
                    (n = r)),
                  e)
                ) {
                  for (i in ((r = {}), n)) r[i] = e(n[i]);
                  n = r;
                }
                !(function (t, e) {
                  var n,
                    r,
                    i,
                    o = t._targets;
                  for (n in e)
                    for (r = o.length; r--; )
                      (i = t._ptLookup[r][n]) &&
                        (i = i.d) &&
                        (i._pt && (i = nr(i, n)),
                        i && i.modifier && i.modifier(e[n], t, o[r], n));
                })(t, n);
              };
            },
          };
        },
        ir =
          er.registerPlugin(
            {
              name: "attr",
              init: function (t, e, n, r, i) {
                var o, s, a;
                for (o in ((this.tween = n), e))
                  (a = t.getAttribute(o) || ""),
                    ((s = this.add(
                      t,
                      "setAttribute",
                      (a || 0) + "",
                      e[o],
                      r,
                      i,
                      0,
                      0,
                      o
                    )).op = o),
                    (s.b = a),
                    this._props.push(o);
              },
              render: function (t, e) {
                for (var n = e._pt; n; )
                  H ? n.set(n.t, n.p, n.b, n) : n.r(t, n.d), (n = n._next);
              },
            },
            {
              name: "endArray",
              init: function (t, e) {
                for (var n = e.length; n--; )
                  this.add(t, n, t[n] || 0, e[n], 0, 0, 0, 0, 0, 1);
              },
            },
            rr("roundProps", je),
            rr("modifiers"),
            rr("snap", He)
          ) || er;
      (qn.version = xn.version = ir.version = "3.12.2"),
        (Y = 1),
        mt() && sn(),
        an.Power0,
        an.Power1,
        an.Power2,
        an.Power3,
        an.Power4,
        an.Linear,
        an.Quad,
        an.Cubic,
        an.Quart,
        an.Quint,
        an.Strong,
        an.Elastic,
        an.Back,
        an.SteppedEase,
        an.Bounce,
        an.Sine,
        an.Expo,
        an.Circ;
      var or,
        sr,
        ar,
        ur,
        cr,
        lr,
        dr,
        fr,
        hr = {},
        pr = 180 / Math.PI,
        mr = Math.PI / 180,
        gr = Math.atan2,
        vr = /([A-Z])/g,
        yr = /(left|right|width|margin|padding|x)/i,
        _r = /[\s,\(]\S/,
        xr = {
          autoAlpha: "opacity,visibility",
          scale: "scaleX,scaleY",
          alpha: "opacity",
        },
        br = function (t, e) {
          return e.set(
            e.t,
            e.p,
            Math.round(1e4 * (e.s + e.c * t)) / 1e4 + e.u,
            e
          );
        },
        wr = function (t, e) {
          return e.set(
            e.t,
            e.p,
            1 === t ? e.e : Math.round(1e4 * (e.s + e.c * t)) / 1e4 + e.u,
            e
          );
        },
        Tr = function (t, e) {
          return e.set(
            e.t,
            e.p,
            t ? Math.round(1e4 * (e.s + e.c * t)) / 1e4 + e.u : e.b,
            e
          );
        },
        Sr = function (t, e) {
          var n = e.s + e.c * t;
          e.set(e.t, e.p, ~~(n + (n < 0 ? -0.5 : 0.5)) + e.u, e);
        },
        Er = function (t, e) {
          return e.set(e.t, e.p, t ? e.e : e.b, e);
        },
        kr = function (t, e) {
          return e.set(e.t, e.p, 1 !== t ? e.b : e.e, e);
        },
        Cr = function (t, e, n) {
          return (t.style[e] = n);
        },
        Lr = function (t, e, n) {
          return t.style.setProperty(e, n);
        },
        Ar = function (t, e, n) {
          return (t._gsap[e] = n);
        },
        Dr = function (t, e, n) {
          return (t._gsap.scaleX = t._gsap.scaleY = n);
        },
        qr = function (t, e, n, r, i) {
          var o = t._gsap;
          (o.scaleX = o.scaleY = n), o.renderTransform(i, o);
        },
        Or = function (t, e, n, r, i) {
          var o = t._gsap;
          (o[e] = n), o.renderTransform(i, o);
        },
        Mr = "transform",
        Pr = Mr + "Origin",
        Rr = function t(e, n) {
          var r = this,
            i = this.target,
            o = i.style;
          if (e in hr && o) {
            if (((this.tfm = this.tfm || {}), "transform" === e))
              return xr.transform.split(",").forEach(function (e) {
                return t.call(r, e, n);
              });
            if (
              (~(e = xr[e] || e).indexOf(",")
                ? e.split(",").forEach(function (t) {
                    return (r.tfm[t] = Zr(i, t));
                  })
                : (this.tfm[e] = i._gsap.x ? i._gsap[e] : Zr(i, e)),
              this.props.indexOf(Mr) >= 0)
            )
              return;
            i._gsap.svg &&
              ((this.svgo = i.getAttribute("data-svg-origin")),
              this.props.push(Pr, n, "")),
              (e = Mr);
          }
          (o || n) && this.props.push(e, n, o[e]);
        },
        Nr = function (t) {
          t.translate &&
            (t.removeProperty("translate"),
            t.removeProperty("scale"),
            t.removeProperty("rotate"));
        },
        Ir = function () {
          var t,
            e,
            n = this.props,
            r = this.target,
            i = r.style,
            o = r._gsap;
          for (t = 0; t < n.length; t += 3)
            n[t + 1]
              ? (r[n[t]] = n[t + 2])
              : n[t + 2]
              ? (i[n[t]] = n[t + 2])
              : i.removeProperty(
                  "--" === n[t].substr(0, 2)
                    ? n[t]
                    : n[t].replace(vr, "-$1").toLowerCase()
                );
          if (this.tfm) {
            for (e in this.tfm) o[e] = this.tfm[e];
            o.svg &&
              (o.renderTransform(),
              r.setAttribute("data-svg-origin", this.svgo || "")),
              ((t = dr()) && t.isStart) || i[Mr] || (Nr(i), (o.uncache = 1));
          }
        },
        jr = function (t, e) {
          var n = { target: t, props: [], revert: Ir, save: Rr };
          return (
            t._gsap || ir.core.getCache(t),
            e &&
              e.split(",").forEach(function (t) {
                return n.save(t);
              }),
            n
          );
        },
        Hr = function (t, e) {
          var n = sr.createElementNS
            ? sr.createElementNS(
                (e || "http://www.w3.org/1999/xhtml").replace(/^https/, "http"),
                t
              )
            : sr.createElement(t);
          return n.style ? n : sr.createElement(t);
        },
        zr = function t(e, n, r) {
          var i = getComputedStyle(e);
          return (
            i[n] ||
            i.getPropertyValue(n.replace(vr, "-$1").toLowerCase()) ||
            i.getPropertyValue(n) ||
            (!r && t(e, Br(n) || n, 1)) ||
            ""
          );
        },
        Fr = "O,Moz,ms,Ms,Webkit".split(","),
        Br = function (t, e, n) {
          var r = (e || cr).style,
            i = 5;
          if (t in r && !n) return t;
          for (
            t = t.charAt(0).toUpperCase() + t.substr(1);
            i-- && !(Fr[i] + t in r);

          );
          return i < 0 ? null : (3 === i ? "ms" : i >= 0 ? Fr[i] : "") + t;
        },
        Wr = function () {
          "undefined" != typeof window &&
            window.document &&
            ((or = window),
            (sr = or.document),
            (ar = sr.documentElement),
            (cr = Hr("div") || { style: {} }),
            Hr("div"),
            (Mr = Br(Mr)),
            (Pr = Mr + "Origin"),
            (cr.style.cssText =
              "border-width:0;line-height:0;position:absolute;padding:0"),
            (fr = !!Br("perspective")),
            (dr = ir.core.reverting),
            (ur = 1));
        },
        $r = function t(e) {
          var n,
            r = Hr(
              "svg",
              (this.ownerSVGElement &&
                this.ownerSVGElement.getAttribute("xmlns")) ||
                "http://www.w3.org/2000/svg"
            ),
            i = this.parentNode,
            o = this.nextSibling,
            s = this.style.cssText;
          if (
            (ar.appendChild(r),
            r.appendChild(this),
            (this.style.display = "block"),
            e)
          )
            try {
              (n = this.getBBox()),
                (this._gsapBBox = this.getBBox),
                (this.getBBox = t);
            } catch (t) {}
          else this._gsapBBox && (n = this._gsapBBox());
          return (
            i && (o ? i.insertBefore(this, o) : i.appendChild(this)),
            ar.removeChild(r),
            (this.style.cssText = s),
            n
          );
        },
        Yr = function (t, e) {
          for (var n = e.length; n--; )
            if (t.hasAttribute(e[n])) return t.getAttribute(e[n]);
        },
        Gr = function (t) {
          var e;
          try {
            e = t.getBBox();
          } catch (n) {
            e = $r.call(t, !0);
          }
          return (
            (e && (e.width || e.height)) ||
              t.getBBox === $r ||
              (e = $r.call(t, !0)),
            !e || e.width || e.x || e.y
              ? e
              : {
                  x: +Yr(t, ["x", "cx", "x1"]) || 0,
                  y: +Yr(t, ["y", "cy", "y1"]) || 0,
                  width: 0,
                  height: 0,
                }
          );
        },
        Ur = function (t) {
          return !(!t.getCTM || (t.parentNode && !t.ownerSVGElement) || !Gr(t));
        },
        Xr = function (t, e) {
          if (e) {
            var n = t.style;
            e in hr && e !== Pr && (e = Mr),
              n.removeProperty
                ? (("ms" !== e.substr(0, 2) && "webkit" !== e.substr(0, 6)) ||
                    (e = "-" + e),
                  n.removeProperty(e.replace(vr, "-$1").toLowerCase()))
                : n.removeAttribute(e);
          }
        },
        Vr = function (t, e, n, r, i, o) {
          var s = new Yn(t._pt, e, n, 0, 1, o ? kr : Er);
          return (t._pt = s), (s.b = r), (s.e = i), t._props.push(n), s;
        },
        Qr = { deg: 1, rad: 1, turn: 1 },
        Kr = { grid: 1, flex: 1 },
        Jr = function t(e, n, r, i) {
          var o,
            s,
            a,
            u,
            c = parseFloat(r) || 0,
            l = (r + "").trim().substr((c + "").length) || "px",
            d = cr.style,
            f = yr.test(n),
            h = "svg" === e.tagName.toLowerCase(),
            p = (h ? "client" : "offset") + (f ? "Width" : "Height"),
            m = 100,
            g = "px" === i,
            v = "%" === i;
          return i === l || !c || Qr[i] || Qr[l]
            ? c
            : ("px" !== l && !g && (c = t(e, n, r, "px")),
              (u = e.getCTM && Ur(e)),
              (!v && "%" !== l) || (!hr[n] && !~n.indexOf("adius"))
                ? ((d[f ? "width" : "height"] = m + (g ? l : i)),
                  (s =
                    ~n.indexOf("adius") || ("em" === i && e.appendChild && !h)
                      ? e
                      : e.parentNode),
                  u && (s = (e.ownerSVGElement || {}).parentNode),
                  (s && s !== sr && s.appendChild) || (s = sr.body),
                  (a = s._gsap) &&
                  v &&
                  a.width &&
                  f &&
                  a.time === on.time &&
                  !a.uncache
                    ? Xt((c / a.width) * m)
                    : ((v || "%" === l) &&
                        !Kr[zr(s, "display")] &&
                        (d.position = zr(e, "position")),
                      s === e && (d.position = "static"),
                      s.appendChild(cr),
                      (o = cr[p]),
                      s.removeChild(cr),
                      (d.position = "absolute"),
                      f &&
                        v &&
                        (((a = Yt(s)).time = on.time), (a.width = s[p])),
                      Xt(g ? (o * c) / m : o && c ? (m / o) * c : 0)))
                : ((o = u ? e.getBBox()[f ? "width" : "height"] : e[p]),
                  Xt(v ? (c / o) * m : (c / 100) * o)));
        },
        Zr = function (t, e, n, r) {
          var i;
          return (
            ur || Wr(),
            e in xr &&
              "transform" !== e &&
              ~(e = xr[e]).indexOf(",") &&
              (e = e.split(",")[0]),
            hr[e] && "transform" !== e
              ? ((i = li(t, r)),
                (i =
                  "transformOrigin" !== e
                    ? i[e]
                    : i.svg
                    ? i.origin
                    : di(zr(t, Pr)) + " " + i.zOrigin + "px"))
              : (!(i = t.style[e]) ||
                  "auto" === i ||
                  r ||
                  ~(i + "").indexOf("calc(")) &&
                (i =
                  (ri[e] && ri[e](t, e, n)) ||
                  zr(t, e) ||
                  Gt(t, e) ||
                  ("opacity" === e ? 1 : 0)),
            n && !~(i + "").trim().indexOf(" ") ? Jr(t, e, i, n) + n : i
          );
        },
        ti = function (t, e, n, r) {
          if (!n || "none" === n) {
            var i = Br(e, t, 1),
              o = i && zr(t, i, 1);
            o && o !== n
              ? ((e = i), (n = o))
              : "borderColor" === e && (n = zr(t, "borderTopColor"));
          }
          var s,
            a,
            u,
            c,
            l,
            d,
            f,
            h,
            p,
            m,
            g,
            v = new Yn(this._pt, t.style, e, 0, 1, Hn),
            y = 0,
            _ = 0;
          if (
            ((v.b = n),
            (v.e = r),
            (n += ""),
            "auto" == (r += "") &&
              ((t.style[e] = r), (r = zr(t, e) || r), (t.style[e] = n)),
            rn((s = [n, r])),
            (r = s[1]),
            (u = (n = s[0]).match(bt) || []),
            (r.match(bt) || []).length)
          ) {
            for (; (a = bt.exec(r)); )
              (f = a[0]),
                (p = r.substring(y, a.index)),
                l
                  ? (l = (l + 1) % 5)
                  : ("rgba(" !== p.substr(-5) && "hsla(" !== p.substr(-5)) ||
                    (l = 1),
                f !== (d = u[_++] || "") &&
                  ((c = parseFloat(d) || 0),
                  (g = d.substr((c + "").length)),
                  "=" === f.charAt(1) && (f = Qt(c, f) + g),
                  (h = parseFloat(f)),
                  (m = f.substr((h + "").length)),
                  (y = bt.lastIndex - m.length),
                  m ||
                    ((m = m || Z.units[e] || g),
                    y === r.length && ((r += m), (v.e += m))),
                  g !== m && (c = Jr(t, e, d, m) || 0),
                  (v._pt = {
                    _next: v._pt,
                    p: p || 1 === _ ? p : ",",
                    s: c,
                    c: h - c,
                    m: (l && l < 4) || "zIndex" === e ? Math.round : 0,
                  }));
            v.c = y < r.length ? r.substring(y, r.length) : "";
          } else v.r = "display" === e && "none" === r ? kr : Er;
          return Tt.test(r) && (v.e = 0), (this._pt = v), v;
        },
        ei = {
          top: "0%",
          bottom: "100%",
          left: "0%",
          right: "100%",
          center: "50%",
        },
        ni = function (t, e) {
          if (e.tween && e.tween._time === e.tween._dur) {
            var n,
              r,
              i,
              o = e.t,
              s = o.style,
              a = e.u,
              u = o._gsap;
            if ("all" === a || !0 === a) (s.cssText = ""), (r = 1);
            else
              for (i = (a = a.split(",")).length; --i > -1; )
                (n = a[i]),
                  hr[n] && ((r = 1), (n = "transformOrigin" === n ? Pr : Mr)),
                  Xr(o, n);
            r &&
              (Xr(o, Mr),
              u &&
                (u.svg && o.removeAttribute("transform"),
                li(o, 1),
                (u.uncache = 1),
                Nr(s)));
          }
        },
        ri = {
          clearProps: function (t, e, n, r, i) {
            if ("isFromStart" !== i.data) {
              var o = (t._pt = new Yn(t._pt, e, n, 0, 0, ni));
              return (
                (o.u = r), (o.pr = -10), (o.tween = i), t._props.push(n), 1
              );
            }
          },
        },
        ii = [1, 0, 0, 1, 0, 0],
        oi = {},
        si = function (t) {
          return "matrix(1, 0, 0, 1, 0, 0)" === t || "none" === t || !t;
        },
        ai = function (t) {
          var e = zr(t, Mr);
          return si(e) ? ii : e.substr(7).match(xt).map(Xt);
        },
        ui = function (t, e) {
          var n,
            r,
            i,
            o,
            s = t._gsap || Yt(t),
            a = t.style,
            u = ai(t);
          return s.svg && t.getAttribute("transform")
            ? "1,0,0,1,0,0" ===
              (u = [
                (i = t.transform.baseVal.consolidate().matrix).a,
                i.b,
                i.c,
                i.d,
                i.e,
                i.f,
              ]).join(",")
              ? ii
              : u
            : (u !== ii ||
                t.offsetParent ||
                t === ar ||
                s.svg ||
                ((i = a.display),
                (a.display = "block"),
                ((n = t.parentNode) && t.offsetParent) ||
                  ((o = 1), (r = t.nextElementSibling), ar.appendChild(t)),
                (u = ai(t)),
                i ? (a.display = i) : Xr(t, "display"),
                o &&
                  (r
                    ? n.insertBefore(t, r)
                    : n
                    ? n.appendChild(t)
                    : ar.removeChild(t))),
              e && u.length > 6 ? [u[0], u[1], u[4], u[5], u[12], u[13]] : u);
        },
        ci = function (t, e, n, r, i, o) {
          var s,
            a,
            u,
            c = t._gsap,
            l = i || ui(t, !0),
            d = c.xOrigin || 0,
            f = c.yOrigin || 0,
            h = c.xOffset || 0,
            p = c.yOffset || 0,
            m = l[0],
            g = l[1],
            v = l[2],
            y = l[3],
            _ = l[4],
            x = l[5],
            b = e.split(" "),
            w = parseFloat(b[0]) || 0,
            T = parseFloat(b[1]) || 0;
          n
            ? l !== ii &&
              (a = m * y - g * v) &&
              ((u = w * (-g / a) + T * (m / a) - (m * x - g * _) / a),
              (w = w * (y / a) + T * (-v / a) + (v * x - y * _) / a),
              (T = u))
            : ((w =
                (s = Gr(t)).x + (~b[0].indexOf("%") ? (w / 100) * s.width : w)),
              (T =
                s.y +
                (~(b[1] || b[0]).indexOf("%") ? (T / 100) * s.height : T))),
            r || (!1 !== r && c.smooth)
              ? ((_ = w - d),
                (x = T - f),
                (c.xOffset = h + (_ * m + x * v) - _),
                (c.yOffset = p + (_ * g + x * y) - x))
              : (c.xOffset = c.yOffset = 0),
            (c.xOrigin = w),
            (c.yOrigin = T),
            (c.smooth = !!r),
            (c.origin = e),
            (c.originIsAbsolute = !!n),
            (t.style[Pr] = "0px 0px"),
            o &&
              (Vr(o, c, "xOrigin", d, w),
              Vr(o, c, "yOrigin", f, T),
              Vr(o, c, "xOffset", h, c.xOffset),
              Vr(o, c, "yOffset", p, c.yOffset)),
            t.setAttribute("data-svg-origin", w + " " + T);
        },
        li = function (t, e) {
          var n = t._gsap || new yn(t);
          if ("x" in n && !e && !n.uncache) return n;
          var r,
            i,
            o,
            s,
            a,
            u,
            c,
            l,
            d,
            f,
            h,
            p,
            m,
            g,
            v,
            y,
            _,
            x,
            b,
            w,
            T,
            S,
            E,
            k,
            C,
            L,
            A,
            D,
            q,
            O,
            M,
            P,
            R = t.style,
            N = n.scaleX < 0,
            I = "px",
            j = "deg",
            H = getComputedStyle(t),
            z = zr(t, Pr) || "0";
          return (
            (r = i = o = u = c = l = d = f = h = 0),
            (s = a = 1),
            (n.svg = !(!t.getCTM || !Ur(t))),
            H.translate &&
              (("none" === H.translate &&
                "none" === H.scale &&
                "none" === H.rotate) ||
                (R[Mr] =
                  ("none" !== H.translate
                    ? "translate3d(" +
                      (H.translate + " 0 0").split(" ").slice(0, 3).join(", ") +
                      ") "
                    : "") +
                  ("none" !== H.rotate ? "rotate(" + H.rotate + ") " : "") +
                  ("none" !== H.scale
                    ? "scale(" + H.scale.split(" ").join(",") + ") "
                    : "") +
                  ("none" !== H[Mr] ? H[Mr] : "")),
              (R.scale = R.rotate = R.translate = "none")),
            (g = ui(t, n.svg)),
            n.svg &&
              (n.uncache
                ? ((C = t.getBBox()),
                  (z = n.xOrigin - C.x + "px " + (n.yOrigin - C.y) + "px"),
                  (k = ""))
                : (k = !e && t.getAttribute("data-svg-origin")),
              ci(t, k || z, !!k || n.originIsAbsolute, !1 !== n.smooth, g)),
            (p = n.xOrigin || 0),
            (m = n.yOrigin || 0),
            g !== ii &&
              ((x = g[0]),
              (b = g[1]),
              (w = g[2]),
              (T = g[3]),
              (r = S = g[4]),
              (i = E = g[5]),
              6 === g.length
                ? ((s = Math.sqrt(x * x + b * b)),
                  (a = Math.sqrt(T * T + w * w)),
                  (u = x || b ? gr(b, x) * pr : 0),
                  (d = w || T ? gr(w, T) * pr + u : 0) &&
                    (a *= Math.abs(Math.cos(d * mr))),
                  n.svg &&
                    ((r -= p - (p * x + m * w)), (i -= m - (p * b + m * T))))
                : ((P = g[6]),
                  (O = g[7]),
                  (A = g[8]),
                  (D = g[9]),
                  (q = g[10]),
                  (M = g[11]),
                  (r = g[12]),
                  (i = g[13]),
                  (o = g[14]),
                  (c = (v = gr(P, q)) * pr),
                  v &&
                    ((k = S * (y = Math.cos(-v)) + A * (_ = Math.sin(-v))),
                    (C = E * y + D * _),
                    (L = P * y + q * _),
                    (A = S * -_ + A * y),
                    (D = E * -_ + D * y),
                    (q = P * -_ + q * y),
                    (M = O * -_ + M * y),
                    (S = k),
                    (E = C),
                    (P = L)),
                  (l = (v = gr(-w, q)) * pr),
                  v &&
                    ((y = Math.cos(-v)),
                    (M = T * (_ = Math.sin(-v)) + M * y),
                    (x = k = x * y - A * _),
                    (b = C = b * y - D * _),
                    (w = L = w * y - q * _)),
                  (u = (v = gr(b, x)) * pr),
                  v &&
                    ((k = x * (y = Math.cos(v)) + b * (_ = Math.sin(v))),
                    (C = S * y + E * _),
                    (b = b * y - x * _),
                    (E = E * y - S * _),
                    (x = k),
                    (S = C)),
                  c &&
                    Math.abs(c) + Math.abs(u) > 359.9 &&
                    ((c = u = 0), (l = 180 - l)),
                  (s = Xt(Math.sqrt(x * x + b * b + w * w))),
                  (a = Xt(Math.sqrt(E * E + P * P))),
                  (v = gr(S, E)),
                  (d = Math.abs(v) > 2e-4 ? v * pr : 0),
                  (h = M ? 1 / (M < 0 ? -M : M) : 0)),
              n.svg &&
                ((k = t.getAttribute("transform")),
                (n.forceCSS =
                  t.setAttribute("transform", "") || !si(zr(t, Mr))),
                k && t.setAttribute("transform", k))),
            Math.abs(d) > 90 &&
              Math.abs(d) < 270 &&
              (N
                ? ((s *= -1),
                  (d += u <= 0 ? 180 : -180),
                  (u += u <= 0 ? 180 : -180))
                : ((a *= -1), (d += d <= 0 ? 180 : -180))),
            (e = e || n.uncache),
            (n.x =
              r -
              ((n.xPercent =
                r &&
                ((!e && n.xPercent) ||
                  (Math.round(t.offsetWidth / 2) === Math.round(-r) ? -50 : 0)))
                ? (t.offsetWidth * n.xPercent) / 100
                : 0) +
              I),
            (n.y =
              i -
              ((n.yPercent =
                i &&
                ((!e && n.yPercent) ||
                  (Math.round(t.offsetHeight / 2) === Math.round(-i)
                    ? -50
                    : 0)))
                ? (t.offsetHeight * n.yPercent) / 100
                : 0) +
              I),
            (n.z = o + I),
            (n.scaleX = Xt(s)),
            (n.scaleY = Xt(a)),
            (n.rotation = Xt(u) + j),
            (n.rotationX = Xt(c) + j),
            (n.rotationY = Xt(l) + j),
            (n.skewX = d + j),
            (n.skewY = f + j),
            (n.transformPerspective = h + I),
            (n.zOrigin = parseFloat(z.split(" ")[2]) || 0) && (R[Pr] = di(z)),
            (n.xOffset = n.yOffset = 0),
            (n.force3D = Z.force3D),
            (n.renderTransform = n.svg ? yi : fr ? vi : hi),
            (n.uncache = 0),
            n
          );
        },
        di = function (t) {
          return (t = t.split(" "))[0] + " " + t[1];
        },
        fi = function (t, e, n) {
          var r = qe(e);
          return Xt(parseFloat(e) + parseFloat(Jr(t, "x", n + "px", r))) + r;
        },
        hi = function (t, e) {
          (e.z = "0px"),
            (e.rotationY = e.rotationX = "0deg"),
            (e.force3D = 0),
            vi(t, e);
        },
        pi = "0deg",
        mi = "0px",
        gi = ") ",
        vi = function (t, e) {
          var n = e || this,
            r = n.xPercent,
            i = n.yPercent,
            o = n.x,
            s = n.y,
            a = n.z,
            u = n.rotation,
            c = n.rotationY,
            l = n.rotationX,
            d = n.skewX,
            f = n.skewY,
            h = n.scaleX,
            p = n.scaleY,
            m = n.transformPerspective,
            g = n.force3D,
            v = n.target,
            y = n.zOrigin,
            _ = "",
            x = ("auto" === g && t && 1 !== t) || !0 === g;
          if (y && (l !== pi || c !== pi)) {
            var b,
              w = parseFloat(c) * mr,
              T = Math.sin(w),
              S = Math.cos(w);
            (w = parseFloat(l) * mr),
              (b = Math.cos(w)),
              (o = fi(v, o, T * b * -y)),
              (s = fi(v, s, -Math.sin(w) * -y)),
              (a = fi(v, a, S * b * -y + y));
          }
          m !== mi && (_ += "perspective(" + m + gi),
            (r || i) && (_ += "translate(" + r + "%, " + i + "%) "),
            (x || o !== mi || s !== mi || a !== mi) &&
              (_ +=
                a !== mi || x
                  ? "translate3d(" + o + ", " + s + ", " + a + ") "
                  : "translate(" + o + ", " + s + gi),
            u !== pi && (_ += "rotate(" + u + gi),
            c !== pi && (_ += "rotateY(" + c + gi),
            l !== pi && (_ += "rotateX(" + l + gi),
            (d === pi && f === pi) || (_ += "skew(" + d + ", " + f + gi),
            (1 === h && 1 === p) || (_ += "scale(" + h + ", " + p + gi),
            (v.style[Mr] = _ || "translate(0, 0)");
        },
        yi = function (t, e) {
          var n,
            r,
            i,
            o,
            s,
            a = e || this,
            u = a.xPercent,
            c = a.yPercent,
            l = a.x,
            d = a.y,
            f = a.rotation,
            h = a.skewX,
            p = a.skewY,
            m = a.scaleX,
            g = a.scaleY,
            v = a.target,
            y = a.xOrigin,
            _ = a.yOrigin,
            x = a.xOffset,
            b = a.yOffset,
            w = a.forceCSS,
            T = parseFloat(l),
            S = parseFloat(d);
          (f = parseFloat(f)),
            (h = parseFloat(h)),
            (p = parseFloat(p)) && ((h += p = parseFloat(p)), (f += p)),
            f || h
              ? ((f *= mr),
                (h *= mr),
                (n = Math.cos(f) * m),
                (r = Math.sin(f) * m),
                (i = Math.sin(f - h) * -g),
                (o = Math.cos(f - h) * g),
                h &&
                  ((p *= mr),
                  (s = Math.tan(h - p)),
                  (i *= s = Math.sqrt(1 + s * s)),
                  (o *= s),
                  p &&
                    ((s = Math.tan(p)),
                    (n *= s = Math.sqrt(1 + s * s)),
                    (r *= s))),
                (n = Xt(n)),
                (r = Xt(r)),
                (i = Xt(i)),
                (o = Xt(o)))
              : ((n = m), (o = g), (r = i = 0)),
            ((T && !~(l + "").indexOf("px")) ||
              (S && !~(d + "").indexOf("px"))) &&
              ((T = Jr(v, "x", l, "px")), (S = Jr(v, "y", d, "px"))),
            (y || _ || x || b) &&
              ((T = Xt(T + y - (y * n + _ * i) + x)),
              (S = Xt(S + _ - (y * r + _ * o) + b))),
            (u || c) &&
              ((s = v.getBBox()),
              (T = Xt(T + (u / 100) * s.width)),
              (S = Xt(S + (c / 100) * s.height))),
            (s =
              "matrix(" +
              n +
              "," +
              r +
              "," +
              i +
              "," +
              o +
              "," +
              T +
              "," +
              S +
              ")"),
            v.setAttribute("transform", s),
            w && (v.style[Mr] = s);
        },
        _i = function (t, e, n, r, i) {
          var o,
            s,
            a = 360,
            u = ct(i),
            c = parseFloat(i) * (u && ~i.indexOf("rad") ? pr : 1) - r,
            l = r + c + "deg";
          return (
            u &&
              ("short" === (o = i.split("_")[1]) &&
                (c %= a) != c % 180 &&
                (c += c < 0 ? a : -360),
              "cw" === o && c < 0
                ? (c = ((c + 36e9) % a) - ~~(c / a) * a)
                : "ccw" === o &&
                  c > 0 &&
                  (c = ((c - 36e9) % a) - ~~(c / a) * a)),
            (t._pt = s = new Yn(t._pt, e, n, r, c, wr)),
            (s.e = l),
            (s.u = "deg"),
            t._props.push(n),
            s
          );
        },
        xi = function (t, e) {
          for (var n in e) t[n] = e[n];
          return t;
        },
        bi = function (t, e, n) {
          var r,
            i,
            o,
            s,
            a,
            u,
            c,
            l = xi({}, n._gsap),
            d = n.style;
          for (i in (l.svg
            ? ((o = n.getAttribute("transform")),
              n.setAttribute("transform", ""),
              (d[Mr] = e),
              (r = li(n, 1)),
              Xr(n, Mr),
              n.setAttribute("transform", o))
            : ((o = getComputedStyle(n)[Mr]),
              (d[Mr] = e),
              (r = li(n, 1)),
              (d[Mr] = o)),
          hr))
            (o = l[i]) !== (s = r[i]) &&
              "perspective,force3D,transformOrigin,svgOrigin".indexOf(i) < 0 &&
              ((a = qe(o) !== (c = qe(s)) ? Jr(n, i, o, c) : parseFloat(o)),
              (u = parseFloat(s)),
              (t._pt = new Yn(t._pt, r, i, a, u - a, br)),
              (t._pt.u = c || 0),
              t._props.push(i));
          xi(r, l);
        };
      Ut("padding,margin,Width,Radius", function (t, e) {
        var n = "Top",
          r = "Right",
          i = "Bottom",
          o = "Left",
          s = (e < 3 ? [n, r, i, o] : [n + o, n + r, i + r, i + o]).map(
            function (n) {
              return e < 2 ? t + n : "border" + n + t;
            }
          );
        ri[e > 1 ? "border" + t : t] = function (t, e, n, r, i) {
          var o, a;
          if (arguments.length < 4)
            return (
              (o = s.map(function (e) {
                return Zr(t, e, n);
              })),
              5 === (a = o.join(" ")).split(o[0]).length ? o[0] : a
            );
          (o = (r + "").split(" ")),
            (a = {}),
            s.forEach(function (t, e) {
              return (a[t] = o[e] = o[e] || o[((e - 1) / 2) | 0]);
            }),
            t.init(e, a, i);
        };
      });
      var wi,
        Ti,
        Si = {
          name: "css",
          register: Wr,
          targetTest: function (t) {
            return t.style && t.nodeType;
          },
          init: function (t, e, n, r, i) {
            var o,
              s,
              a,
              u,
              c,
              l,
              d,
              f,
              h,
              p,
              m,
              g,
              v,
              y,
              _,
              x,
              b,
              w,
              T,
              S,
              E = this._props,
              k = t.style,
              C = n.vars.startAt;
            for (d in (ur || Wr(),
            (this.styles = this.styles || jr(t)),
            (x = this.styles.props),
            (this.tween = n),
            e))
              if (
                "autoRound" !== d &&
                ((s = e[d]), !Ht[d] || !En(d, e, n, r, t, i))
              )
                if (
                  ((c = typeof s),
                  (l = ri[d]),
                  "function" === c && (c = typeof (s = s.call(n, r, t, i))),
                  "string" === c && ~s.indexOf("random(") && (s = Be(s)),
                  l)
                )
                  l(this, t, d, s, n) && (_ = 1);
                else if ("--" === d.substr(0, 2))
                  (o = (getComputedStyle(t).getPropertyValue(d) + "").trim()),
                    (s += ""),
                    (en.lastIndex = 0),
                    en.test(o) || ((f = qe(o)), (h = qe(s))),
                    h ? f !== h && (o = Jr(t, d, o, h) + h) : f && (s += f),
                    this.add(k, "setProperty", o, s, r, i, 0, 0, d),
                    E.push(d),
                    x.push(d, 0, k[d]);
                else if ("undefined" !== c) {
                  if (
                    (C && d in C
                      ? ((o =
                          "function" == typeof C[d]
                            ? C[d].call(n, r, t, i)
                            : C[d]),
                        ct(o) && ~o.indexOf("random(") && (o = Be(o)),
                        qe(o + "") || (o += Z.units[d] || qe(Zr(t, d)) || ""),
                        "=" === (o + "").charAt(1) && (o = Zr(t, d)))
                      : (o = Zr(t, d)),
                    (u = parseFloat(o)),
                    (p =
                      "string" === c &&
                      "=" === s.charAt(1) &&
                      s.substr(0, 2)) && (s = s.substr(2)),
                    (a = parseFloat(s)),
                    d in xr &&
                      ("autoAlpha" === d &&
                        (1 === u &&
                          "hidden" === Zr(t, "visibility") &&
                          a &&
                          (u = 0),
                        x.push("visibility", 0, k.visibility),
                        Vr(
                          this,
                          k,
                          "visibility",
                          u ? "inherit" : "hidden",
                          a ? "inherit" : "hidden",
                          !a
                        )),
                      "scale" !== d &&
                        "transform" !== d &&
                        ~(d = xr[d]).indexOf(",") &&
                        (d = d.split(",")[0])),
                    (m = d in hr))
                  )
                    if (
                      (this.styles.save(d),
                      g ||
                        (((v = t._gsap).renderTransform && !e.parseTransform) ||
                          li(t, e.parseTransform),
                        (y = !1 !== e.smoothOrigin && v.smooth),
                        ((g = this._pt =
                          new Yn(
                            this._pt,
                            k,
                            Mr,
                            0,
                            1,
                            v.renderTransform,
                            v,
                            0,
                            -1
                          )).dep = 1)),
                      "scale" === d)
                    )
                      (this._pt = new Yn(
                        this._pt,
                        v,
                        "scaleY",
                        v.scaleY,
                        (p ? Qt(v.scaleY, p + a) : a) - v.scaleY || 0,
                        br
                      )),
                        (this._pt.u = 0),
                        E.push("scaleY", d),
                        (d += "X");
                    else {
                      if ("transformOrigin" === d) {
                        x.push(Pr, 0, k[Pr]),
                          (w = void 0),
                          (T = void 0),
                          (S = void 0),
                          (T = (w = (b = s).split(" "))[0]),
                          (S = w[1] || "50%"),
                          ("top" !== T &&
                            "bottom" !== T &&
                            "left" !== S &&
                            "right" !== S) ||
                            ((b = T), (T = S), (S = b)),
                          (w[0] = ei[T] || T),
                          (w[1] = ei[S] || S),
                          (s = w.join(" ")),
                          v.svg
                            ? ci(t, s, 0, y, 0, this)
                            : ((h = parseFloat(s.split(" ")[2]) || 0) !==
                                v.zOrigin &&
                                Vr(this, v, "zOrigin", v.zOrigin, h),
                              Vr(this, k, d, di(o), di(s)));
                        continue;
                      }
                      if ("svgOrigin" === d) {
                        ci(t, s, 1, y, 0, this);
                        continue;
                      }
                      if (d in oi) {
                        _i(this, v, d, u, p ? Qt(u, p + s) : s);
                        continue;
                      }
                      if ("smoothOrigin" === d) {
                        Vr(this, v, "smooth", v.smooth, s);
                        continue;
                      }
                      if ("force3D" === d) {
                        v[d] = s;
                        continue;
                      }
                      if ("transform" === d) {
                        bi(this, s, t);
                        continue;
                      }
                    }
                  else d in k || (d = Br(d) || d);
                  if (
                    m ||
                    ((a || 0 === a) && (u || 0 === u) && !_r.test(s) && d in k)
                  )
                    a || (a = 0),
                      (f = (o + "").substr((u + "").length)) !==
                        (h = qe(s) || (d in Z.units ? Z.units[d] : f)) &&
                        (u = Jr(t, d, o, h)),
                      (this._pt = new Yn(
                        this._pt,
                        m ? v : k,
                        d,
                        u,
                        (p ? Qt(u, p + a) : a) - u,
                        m ||
                        ("px" !== h && "zIndex" !== d) ||
                        !1 === e.autoRound
                          ? br
                          : Sr
                      )),
                      (this._pt.u = h || 0),
                      f !== h &&
                        "%" !== h &&
                        ((this._pt.b = o), (this._pt.r = Tr));
                  else if (d in k) ti.call(this, t, d, o, p ? p + s : s);
                  else if (d in t)
                    this.add(t, d, o || t[d], p ? p + s : s, r, i);
                  else if ("parseTransform" !== d) {
                    At(d, s);
                    continue;
                  }
                  m || (d in k ? x.push(d, 0, k[d]) : x.push(d, 1, o || t[d])),
                    E.push(d);
                }
            _ && $n(this);
          },
          render: function (t, e) {
            if (e.tween._time || !dr())
              for (var n = e._pt; n; ) n.r(t, n.d), (n = n._next);
            else e.styles.revert();
          },
          get: Zr,
          aliases: xr,
          getSetter: function (t, e, n) {
            var r = xr[e];
            return (
              r && r.indexOf(",") < 0 && (e = r),
              e in hr && e !== Pr && (t._gsap.x || Zr(t, "x"))
                ? n && lr === n
                  ? "scale" === e
                    ? Dr
                    : Ar
                  : (lr = n || {}) && ("scale" === e ? qr : Or)
                : t.style && !ft(t.style[e])
                ? Cr
                : ~e.indexOf("-")
                ? Lr
                : Nn(t, e)
            );
          },
          core: { _removeProperty: Xr, _getMatrix: ui },
        };
      (ir.utils.checkPrefix = Br),
        (ir.core.getStyleSaver = jr),
        (Ti = Ut(
          "x,y,z,scale,scaleX,scaleY,xPercent,yPercent" +
            "," +
            (wi = "rotation,rotationX,rotationY,skewX,skewY") +
            ",transform,transformOrigin,svgOrigin,force3D,smoothOrigin,transformPerspective",
          function (t) {
            hr[t] = 1;
          }
        )),
        Ut(wi, function (t) {
          (Z.units[t] = "deg"), (oi[t] = 1);
        }),
        (xr[Ti[13]] = "x,y,z,scale,scaleX,scaleY,xPercent,yPercent," + wi),
        Ut(
          "0:translateX,1:translateY,2:translateZ,8:rotate,8:rotationZ,8:rotateZ,9:rotateX,10:rotateY",
          function (t) {
            var e = t.split(":");
            xr[e[1]] = Ti[e[0]];
          }
        ),
        Ut(
          "x,y,z,top,right,bottom,left,width,height,fontSize,padding,margin,perspective",
          function (t) {
            Z.units[t] = "px";
          }
        ),
        ir.registerPlugin(Si);
      var Ei = ir.registerPlugin(Si) || ir;
      Ei.core.Tween;
      const ki = [
        "Будинки та квартири",
        "Комерційні приміщення",
        "Після ремонту",
      ];
      function Ci(t, e) {
        return '<span class="' + e + '">' + ki[t] + "</span>";
      }
      function Li() {
        R()(".swiper-slide.swiper-slide-active .calc-banner__title").css(
          "left",
          "0px"
        ),
          R()(
            ".swiper-slide.swiper-slide-active .calc-banner__images-wrapper"
          ).css("left", "50px");
      }
      function Ai() {
        R()(".swiper-slide.swiper-slide-active .calc-banner__title").css(
          "left",
          "100%"
        ),
          R()(
            ".swiper-slide.swiper-slide-active .calc-banner__images-wrapper"
          ).css("left", "100%");
      }
      function Di(t) {
        t.openModalBtn?.addEventListener("click", () => qi(t)),
          t.closeModalBtn?.addEventListener("click", (e) => {
            e.stopPropagation(), qi(t);
          }),
          t.backdrop?.addEventListener("click", (e) => {
            e.target === t.backdrop && qi(t);
          });
      }
      function qi(t) {
        document.body.classList.toggle(`${t.name}-modal-open`),
          t.modal?.classList.toggle("backdrop--hidden"),
          "subscription" === t.name && (Wi(Mi?.elements), Gi(), Ui());
      }
      !(function () {
        new Swiper(".swiper", {
          speed: 1e3,
          spaceBetween: 0,
          initialSlide: 2,
          touchRatio: 0,
          effect: "fade",
          autoplay: { delay: 2e3, disableOnInteraction: !1 },
          pagination: {
            clickable: !0,
            el: ".swiper-pagination",
            renderBullet: Ci,
          },
          on: { slideChangeTransitionStart: Li, slideChange: Ai },
        });
        R()(
          ".swiper--calc-banner .swiper-pagination .swiper-pagination-bullet:first-child"
        ).trigger("click");
      })(),
        [...document.querySelectorAll(".swiper-slide")].forEach((t) =>
          t.setAttribute("role", "Слайд")
        ),
        R()(".swiper--calc-banner .swiper-slide").on("mousemove", function (t) {
          R()(".calc-banner__image").each(function () {
            const e = R()(this).data("value"),
              n = (R()(window).innerWidth() - t.pageX * e) / 100,
              r = (R()(window).innerHeight() - t.pageY * e) / 100;
            Ei.to(this, {
              duration: 0.3,
              marginLeft: n + "px",
              marginTop: r + "px",
              ease: "power2.out",
            });
          });
        }),
        n(699);
      const Oi = {
        name: "subscription",
        openModalBtn: document.querySelector("[data-subscription-modal-open]"),
        closeModalBtn: document.querySelector(
          "[data-subscription-modal-close]"
        ),
        modal: document.querySelector("[data-subscription-modal]"),
        backdrop: document.querySelector(".backdrop--subscr"),
      };
      Di(Oi);
      const Mi = document.querySelector(".subscr__form"),
        Pi = document.querySelectorAll(".payment__btn"),
        Ri = document.querySelector(".form__payment-error-text"),
        Ni = document.querySelectorAll(".form__input"),
        Ii = document.querySelector(".calc-btn"),
        ji = document.querySelector('[name="studio-policy-check"]');
      let Hi;
      ji &&
        ((Hi = new MutationObserver((t, e) => {
          t.forEach((t) => {
            "attributes" === t.type &&
              "data-checked" === t.attributeName &&
              (ji.getAttribute("data-checked"), Ui());
          });
        })),
        Hi.observe(ji, { attributes: !0, attributeFilter: ["data-checked"] }),
        ji.addEventListener("change", () => {
          ji.setAttribute("data-checked", ji.checked);
        })),
        Mi?.addEventListener("submit", Xi),
        Ii?.addEventListener("click", (t) => {
          t.preventDefault(), Xi(t);
        }),
        Pi.forEach((t) => {
          t.addEventListener("click", (t) => {
            !(function (t) {
              const e = t.target.closest("button");
              Bi(e),
                e.classList.contains("active") ||
                  [...Pi].forEach((t) => {
                    t === e
                      ? t.classList.add("active")
                      : t.classList.remove("active");
                  });
            })(t),
              Gi();
          });
        }),
        Ni.forEach((t) => {
          t.addEventListener("focus", () => {
            t.classList.remove("error");
          });
        });
      const zi = [
          "userName",
          "userSurname",
          "userTel",
          "userEmail",
          "userLocation",
          "userDate",
          "userTime",
        ],
        Fi = {
          userPaymentType: "",
          userBuildingType: "",
          userTakeKeyAddress: "",
          userGiveKeyAddress: "",
          userSquare: { quantity: "", cost: "" },
          userServices: {},
        };
      function Bi(t) {
        const e = t.getAttribute("data-type"),
          n = t.getAttribute("data-id") ?? "";
        Fi[e] = n;
      }
      function Wi(t) {
        [...t].forEach((t) => {
          t.classList.remove("error");
        });
      }
      function $i() {
        return document.querySelector('[name="studio-policy-check"]').checked;
      }
      function Yi() {
        document
          .querySelector(".form__payment-error-text")
          .classList.toggle("isHidden");
      }
      function Gi() {
        !Ri.classList.contains("isHidden") && Yi();
      }
      function Ui() {
        document
          .querySelector(".form__policy-error-text")
          .classList.add("isHidden");
      }
      function Xi(e) {
        e.preventDefault();
        const n = "BUTTON" === e.currentTarget.tagName,
          r = n ? Mi.elements : e.currentTarget.elements,
          i = (function (t, e) {
            return e.filter((e) => "" === t[e].value.trim()).map((e) => t[e]);
          })(r, zi);
        Wi(r),
          (function (t) {
            t.forEach((t) => {
              t.classList.add("error");
            });
          })(i);
        const o = [...Pi].some((t) => t.classList.contains("active")),
          s = i.length > 0;
        o || Yi(),
          (function () {
            const t = document.querySelector(".form__policy-error-text");
            t.classList.add("isHidden"), $i() || t.classList.remove("isHidden");
          })();
        const a = $i();
        if (!o || s || !a) return;
        const u = n ? Mi : e.target;
        var c, l, d;
        n &&
          ((function () {
            const t = document.querySelector(
                '[data-type="userTakeKeyAddress"]'
              ),
              e = document.querySelector('[data-type="userGiveKeyAddress"]');
            Bi(t), Bi(e);
          })(),
          (c = Fi),
          (l = so.square.quantity),
          (d = so.square.price),
          (c.userSquare = { quantity: `${l}`, cost: fo(l, d) }),
          (function (t) {
            const e =
              ((n = so),
              Object.keys(n)
                .filter((t) => n[t].quantity > 0)
                .reduce(
                  (t, e) => ((t[e] = { ...n[e] }), delete t[e].square, t),
                  {}
                ));
            var n;
            t.userServices = Object.keys(e)
              .filter((t) => "square" !== t)
              .map((t) => {
                const { name: n, quantity: r, price: i } = e[t];
                return { name: n, quantity: r, cost: fo(r, i) };
              });
          })(Fi)),
          (function (t) {
            new FormData(t).forEach((t, e) => {
              e.startsWith("user") && (Fi[e] = t);
            });
          })(u),
          t("userOrderDataObj", Fi),
          (function (t) {
            [...t].forEach((t) => {
              "text" === t.type ||
              "email" === t.type ||
              "tel" === t.type ||
              "TEXTAREA" === t.tagName
                ? (t.value = "")
                : "checkbox" === t.type && (t.checked = !0);
            });
          })(r),
          [...Pi].forEach((t) => {
            t.classList.remove("active");
          }),
          Hi.disconnect(),
          n || qi(Oi),
          (window.location.href = window.location.href =
            "https://marynashavlak.github.io/comfort-group-cleaning/success-order.html");
      }
      const Vi = document.querySelectorAll(".buildings__element"),
        Qi = document.querySelector(".control-quantity-btn--plus"),
        Ki = document.querySelector(".control-quantity-btn--minus"),
        Ji = document.querySelectorAll(".service-element .checkbox"),
        Zi = document.querySelector(".table__data"),
        to = document.querySelector("#take-keys-btn"),
        eo = document.querySelector("#give-keys-btn"),
        no = document.querySelector(".keys-address-block"),
        ro = document.querySelector(".keys-address-block__take-item"),
        io = document.querySelector(".keys-address-block__give-item");
      Qi?.addEventListener("click", co),
        Ki?.addEventListener("click", co),
        to?.addEventListener("click", yo),
        eo?.addEventListener("click", yo),
        Vi.forEach((t) => {
          t.addEventListener("click", (t) => {
            Bi(t.target),
              (function (t) {
                const e = t.target;
                e.classList.contains("buildings__element--current") ||
                  [...Vi].forEach((t) => {
                    t === e
                      ? (t.id, t.classList.add("buildings__element--current"))
                      : t.classList.remove("buildings__element--current");
                  });
              })(t);
          });
        }),
        Ji.forEach((t) => {
          t.addEventListener("change", (t) => {
            !(function (t) {
              const e = t.currentTarget,
                n = e.closest("label"),
                r = n.nextElementSibling,
                i = e.checked;
              (function (t, e) {
                t.classList.toggle("isHidden", !e);
              })(r, i),
                (function (t) {
                  const e = t.querySelector(".control-quantity-btn--plus"),
                    n = t.querySelector(".control-quantity-btn--minus");
                  e.addEventListener("click", uo),
                    n.addEventListener("click", uo);
                })(r);
              const o = (function (t) {
                  const e = t.querySelector(
                      ".service-element__text"
                    ).textContent,
                    n = t
                      .querySelector(".service-element__accent")
                      .getAttribute("data-value"),
                    r = t.getAttribute("data-id"),
                    i = document.createElement("li");
                  (i.id = r), (i.className = "table__item table__block");
                  const o = mo("item__name", `${e}`),
                    s = mo("", "x"),
                    a = mo("name-wrapper"),
                    u = mo("quantity-wrapper");
                  go(u, [
                    s,
                    mo("item__quantity service-quantity", oo[r].quantity),
                  ]),
                    go(a, [o, u]);
                  const c = mo("service-value", `${n}zł`);
                  return c.setAttribute("data-service", r), go(i, [a, c]), i;
                })(n),
                s = n.getAttribute("data-id");
              (function (t, e) {
                const n = e.id,
                  r = (function (t) {
                    return [...Zi.querySelectorAll("li")].find(
                      (e) => e.id === t
                    );
                  })(n);
                t && !r
                  ? ((function (t) {
                      Zi.insertAdjacentElement("beforeend", t);
                    })(e),
                    ho(n))
                  : !t &&
                    r &&
                    (ho(n, 0),
                    (function (t) {
                      Zi.removeChild(t);
                    })(r));
              })(i, o),
                lo(s),
                po(so);
            })(t);
          });
        });
      const oo = {
          square: { name: "Площа", quantity: 1, price: 2 },
          windowsStandard: {
            name: "Миття вікон (стандартні)",
            quantity: 1,
            price: 35,
          },
          windowsLarge: {
            name: "Миття вікон (до підлоги)",
            quantity: 1,
            price: 40,
          },
          microWave: { name: "Мікрохвильовка", quantity: 1, price: 15 },
          refrigerator: { name: "Холодильник", quantity: 1, price: 40 },
          plate: { name: "Плита", quantity: 1, price: 35 },
          officeChair: {
            name: "Хімчистка офісних стільців",
            quantity: 1,
            price: 20,
          },
          sofaDry2x: {
            name: "Хімчистка дивану 2х",
            quantity: 1,
            price: 109.99,
          },
          sofaDry3x: {
            name: "Хімчистка дивану 3х",
            quantity: 1,
            price: 129.99,
          },
          sofaDry4x: {
            name: "Хімчистка дивану 4х",
            quantity: 1,
            price: 149.99,
          },
        },
        so = {
          square: { name: "Площа", quantity: 1, price: 2 },
          windowsStandard: {
            name: "Миття вікон (стандартні)",
            quantity: 0,
            price: 35,
          },
          windowsLarge: {
            name: "Миття вікон (до підлоги)",
            quantity: 0,
            price: 40,
          },
          microWave: { name: "Мікрохвильовка", quantity: 0, price: 15 },
          refrigerator: { name: "Холодильник", quantity: 0, price: 40 },
          plate: { name: "Плита", quantity: 0, price: 35 },
          officeChair: {
            name: "Хімчистка офісних стільців",
            quantity: 0,
            price: 20,
          },
          sofaDry2x: {
            name: "Хімчистка дивану 2х",
            quantity: 0,
            price: 109.99,
          },
          sofaDry3x: {
            name: "Хімчистка дивану 3х",
            quantity: 0,
            price: 129.99,
          },
          sofaDry4x: {
            name: "Хімчистка дивану 4х",
            quantity: 0,
            price: 149.99,
          },
        };
      function ao(t) {
        const e = vo(t),
          n = (function (t) {
            return t.currentTarget.getAttribute("data-type");
          })(t);
        !(function (t, e) {
          if ("plus" === e) oo[t].quantity += 1;
          else if ("minus" === e) {
            if (1 === oo[t].quantity) return;
            oo[t].quantity -= 1;
          }
        })(e, n),
          (function (t) {
            const e = [...document.querySelectorAll(".service-element")].find(
                (e) => e.getAttribute("data-id") === t
              ),
              n = e?.nextElementSibling.querySelector(`[data-name="${t}"]`),
              r = document
                .querySelector(".wrap--square")
                .querySelector(`[data-name="${t}"]`);
            n && (n.textContent = oo[t].quantity),
              r &&
                ((r.textContent = oo[t].quantity),
                (document.querySelector(".square-value-total").textContent =
                  oo[t].quantity));
          })(e),
          (function (t) {
            const e = document
              .querySelector(`[data-name="${t}"]`)
              .parentNode?.parentNode?.querySelector(
                ".control-quantity-btn--minus .icon--minus"
              );
            1 === oo[t].quantity
              ? (e.style.fill = "rgba(\t77, 18, 153, 0.3)")
              : (e.style.fill = "#4D1299");
          })(e);
      }
      function uo(t) {
        const e = vo(t);
        ao(t), lo(e), po(so);
      }
      function co(t) {
        ao(t),
          (function () {
            const t = document.querySelector('[data-service="square"]');
            (so.square.quantity = oo.square.quantity),
              (t.textContent = so.square.quantity * so.square.price + "zł");
          })(),
          po(so);
      }
      function lo(t) {
        const e = document.querySelector(`[data-service="${t}"]`),
          n = document.querySelector(`#${t} .service-quantity`),
          r = oo[t].price;
        if (e && n) {
          const i = ho(t),
            o = fo(i, r);
          (e.textContent = o), (n.textContent = i);
        } else ho(t, 0);
      }
      function fo(t, e) {
        return `${(t * e).toFixed(2)}zł`;
      }
      function ho(t, e) {
        const n = void 0 !== e ? e : oo[t].quantity;
        return (so[t].quantity = n), n;
      }
      function po(t) {
        const e =
          ((n = t),
          Object.keys(n)
            .reduce((t, e) => {
              const r = n[e];
              return t + r.quantity * r.price;
            }, 0)
            .toFixed(2));
        var n;
        document.querySelector(".total-order-value").textContent = `${e}zł`;
      }
      function mo(t, e) {
        const n = document.createElement("span");
        return t && (n.className = t), e && (n.textContent = e), n;
      }
      function go(t, e) {
        e.forEach((e) => {
          t.appendChild(e);
        });
      }
      function vo(t) {
        const e = t.currentTarget
            ?.closest(".wrap--service")
            ?.parentNode.querySelector("label")
            ?.getAttribute("data-id"),
          n = t.currentTarget
            ?.closest(".wrap--square")
            ?.getAttribute("data-id");
        return e || n;
      }
      function yo(t) {
        const e = t.currentTarget;
        e.classList.toggle("active"),
          "take-keys-btn" === e.id
            ? ro.classList.toggle("isHidden")
            : io.classList.toggle("isHidden"),
          (function () {
            const t = ro.classList.contains("isHidden"),
              e = io.classList.contains("isHidden");
            t && e
              ? no.classList.add("isHidden")
              : no.classList.remove("isHidden");
          })();
      }
      const _o = [
        {
          name: "Міколай Ковальчук",
          text: "Дуже хороший сервіс! Клінер Анна приємна та працьовита дівчина. Приїхала без запізнень, швидко і якісно прибрала в моїй квартирі.",
          rating: 5,
        },
        {
          name: "Марія Кравчук",
          text: "Замовляла прибирання в квартиру після косметичного ремонту. Дівчата з ABA Cleaning Services мене просто врятували! Прибрали дуже швидко та ретельно. Без їх допомоги я б ще не один день витрачала свій час на це прибирання!",
          rating: 5,
        },
        {
          name: "Алекс Кашпор",
          text: "Оформлюю у ABA Cleaning Services вже другу місячну підписку. З моїм графіком роботи це ідеальний варіант. Вдома завжди чисто та свіжо! Дякую за вашу роботу!",
          rating: 5,
        },
        {
          name: "Бронислав Левандовський",
          text: "Чудові клінери та сервіс. Не шкодую що обрав саме вас: прибрали ретельно та швидко.",
          rating: 5,
        },
        {
          name: "Ян Кравчик",
          text: "Дякую за гарну роботу! Ви чудово прибрали наш офіс після новорічного корпоративу.",
          rating: 5,
        },
        {
          name: "Юлія Возняк",
          text: "Замовляла місячну підписку на прибирання для своєї бабусі. Тетяна з ABA Cleaning Services була дуже милою та ретельно все прибрала.",
          rating: 5,
        },
        {
          name: "Андрій Корчак",
          text: "ABA Cleaning Services - це не лише якість прибирання, але й своєчасність. Їхні клінери завжди приходять у встановлені строки, що для мене дуже важливо. Дякую за вашу надійність!",
          rating: 5,
        },
        {
          name: "Тетяна Біленька",
          text: "Замовила прибирання на вечірку у мене вдома. ABA Cleaning Services приїхали вчасно і буквально за кілька годин після того, як вечірка закінчилася. Вони швидко прибрались, і я була приємно здивована своєю чистою квартирою.",
          rating: 5,
        },
        {
          name: "Ігор Бабенко",
          text: "ABA Cleaning Services не лише роблять чудову роботу, але й завжди приходять у вказаний час. Моя квартира завжди готова до прийому гостей завдяки їхній своєчасності.",
          rating: 5,
        },
        {
          name: "Ольга Ткаченко",
          text: "Я вже декілька років користуюся послугами ABA Cleaning Services і їх клінери зекономили мені безліч годин!",
          rating: 5,
        },
        {
          name: "Оксана Шевченко",
          text: "Завжди можна розраховувати на якість послуг ABA Cleaning Services. Швидко, якісно, надійно і безпечно!",
          rating: 5,
        },
        {
          name: "Сергій Гончаренко",
          text: "Команда ABA Cleaning Services - це справжні професіонали. Вони відмивають кожну пляму і залишають квартиру дбайливо прибраною. Дякую, що даруєте мені час і спокій.",
          rating: 5,
        },
        {
          name: "Лідія Павлів",
          text: "Мені завжди страшно було замовляти послуги прибирання, але ABA Cleaning Services змінили моє уявлення. Вони завжди на висоті та приносять чистоту в мій дім.",
          rating: 5,
        },
        {
          name: "Олександра Данилко",
          text: "Клінерка Катя - наша улюблена! Вона завжди залишає нашу квартиру бездоганною. Стіни у дитячій ідеально відмиває від фарб та фломастерів. Вона наше спасіння. Рекомендую ABA Cleaning Services кожному, хто цінує чистоту.",
          rating: 5,
        },
        {
          name: "Павло Мельник",
          text: "Після ремонту моя квартира виглядає як нова завдяки відмінному прибиранню. Кожний куточок був ретельно вимитий, і відчуття чистоти, коли ти входиш в це житло, просто неймовірне.",
          rating: 5,
        },
        {
          name: "Ігор Коваль",
          text: "Моя квартира ніколи не була такою чистою! ABA Cleaning Services - найкращі в цьому ділі. Рекомендую їх усім своїм друзям.",
          rating: 5,
        },
        {
          name: "Тетяна Гринь",
          text: "Співпраця з ABA Cleaning Services - це завжди радість. Вони завжди працюють із захопленням і приносять нам гармонію у нашому будинку.",
          rating: 5,
        },
        {
          name: "Наталя Шелудяк",
          text: "Відмінний сервіс, прекрасні клінери. Вони завжди піклуються про мою квартиру, навіть там, де я не бачу. Дуже вдячна!",
          rating: 5,
        },
        {
          name: "Іван Литвиненко",
          text: "ABA Cleaning Services - це найкращий вибір для вашого будинку. Вони завжди прибираються докладно та швидко. Рекомендую їх кожному.",
          rating: 5,
        },
        {
          name: "Олег Яремчук",
          text: "Після дитячої вечірки ABA Cleaning Services вразили нас своєю бездоганною роботою! Вони не пропустили жодного кутка і прибрали аж до останньої крихти.  Рекомендуємо їх послуги всім, хто шукає відмінне прибирання після будь-яких святкувань!",
          rating: 5,
        },
        {
          name: "Марина Дорошенко",
          text: "Дуже задоволена послугами ABA Cleaning Services. Нічого не зникло після прибирання - все блищить чистотою. Дякую вам!",
          rating: 5,
        },
        {
          name: "Артур Полянський",
          text: "Це був мій перший раз, коли я замовляв послуги клінінгу, і я був приємно здивований, отримавши 10% знижки. Ця знижка зробила вибір ABA Cleaning Services ще більш привабливим, і я залишився задоволений якістю послуг і економією.",
          rating: 5,
        },
        {
          name: "Юлія Карпенко",
          text: "Клінери зробили чудову роботу, відчищаючи мій холодильник та плиту на кухні. Тепер вони сяють чистотою, наче нові, і я дуже задоволена результатом їхньої роботи. Дякую за професійне обслуговування!",
          rating: 5,
        },
        {
          name: "Юлія Сидоренко",
          text: "Замовлення клінінгу на вашому сайті - це легко і зручно. Я можу обрати час, який мені підходить, і бути впевненою, що ваші клінери прийдуть у встановлені строки.",
          rating: 5,
        },
        {
          name: "Ірина Чередниченко",
          text: "З ABA Cleaning Services завжди можна розраховувати на найкращий результат. Замовляла клінінг ресторану після весілля. Впорались максимально швидко, відчистили всі стільці від жирних плям. Це справжня команда професіоналів. ",
          rating: 5,
        },
        {
          name: "Максим Григорчук",
          text: "ABA Cleaning Services - це гарантія чистоти та порядку. Замовляв клінінг для вікон, все на ідеально! Жодних розводів чи плям. Рекомендую їх кожному.",
          rating: 5,
        },
        {
          name: "Анна Лисенко",
          text: "Це найкраща команда клінерів у місті. Вони завжди ретельно прибирають та залишають мій будинок свіжим і чистим.",
          rating: 5,
        },
        {
          name: "Людмила Мельничук",
          text: "Моя бабуся завжди задоволена прибиранням від ABA Cleaning Services. Тетяна завжди турбується про неї та приносить радість в наш дім.",
          rating: 5,
        },
        {
          name: "Роман Дубенко",
          text: "Я спробував послуги багатьох клінінгових фірм у місті, але ABA Cleaning Services - найкращі, це завжди якість та надійність. Моя кухня просто сяє після візиту клінерки Наталі щоразу, дуже рекомендую, від бруду, налльоиу та жиру не залишається ані сліду",
          rating: 5,
        },
        {
          name: "Олесь Лещенко",
          text: "ABA Cleaning Services - це моє спасіння. Вони завжди приходять на допомогу, коли я не встигаю прибрати. Дякую вам за вашу працю!",
          rating: 5,
        },
        {
          name: "Оксана Лук'яненко",
          text: "ABA Cleaning Services завжди надає послуги прибирання, завчасно забираючи та привозячи ключі від офісу, без будь-яких запізнень.",
          rating: 5,
        },
        {
          name: "Галина Михайленко",
          text: "Завдяки ABA Cleaning Services, моя квартира завжди виглядає, як нова. Вони знають, як робити свою роботу і роблять це найкраще.",
          rating: 5,
        },
        {
          name: "Володимир Петренко",
          text: "Команда ABA Cleaning Services завжди відзначається високою якістю прибирання та професіоналізмом. Це дійсно надійний вибір.",
          rating: 5,
        },
        {
          name: "Ніна Громова",
          text: "Це найкращий сервіс прибирання у місті. ABA Cleaning Services завжди готові прийти на допомогу та прибрати в будь-який момент.",
          rating: 5,
        },
        {
          name: "Денис Бойко",
          text: "Зручність розрахунку вартості прибирання на вашій платформі - справжнє задоволення, я можу легко і самостійно отримати інформацію про ціни та вибрати оптимальний план обслуговування.",
          rating: 5,
        },
        {
          name: "Ангеліна Стеценко",
          text: "Дуже задоволена роботою ABA Cleaning Services. Вони завжди приходять у вказаний час і прибираються на вищому рівні.",
          rating: 5,
        },
        {
          name: "Григорій Попов",
          text: "Моя квартира ніколи не була такою чистою та охайною. ABA Cleaning Services - це мій секрет для чистого та затишного життя.",
          rating: 5,
        },
        {
          name: "Світлана Ковальчук",
          text: "Після ремонту моя квартира стала ідеально чистою, ABA Cleaning Services уважні до всіх деталей, прибрали всі сліди ремонту і навіть не залишили жодної пилинки - це вражає!",
          rating: 5,
        },
        {
          name: "Олексій Гнатюк",
          text: "ABA Cleaning Services завжди приносять порядок і чистоту. Це перевірена часом компанія. Всім рекомендую, швидко, якісно, надійно!",
          rating: 5,
        },
        {
          name: "Наталія Савченко",
          text: "Для мене надзвичайно важливою є якість миючих засобів, і я ціную той факт, що ABA Cleaning Services завжди використовує ефективні та екологічно безпечні засоби під час прибирання.",
          rating: 5,
        },
        {
          name: "Ольга Петрова",
          text: "Система обрання дати і часу на вашому сайті дуже зручна. Я можу легко вибрати підходящий час для прибирання, що дуже зекономило моїй родині час і зусилля.",
          rating: 5,
        },
        {
          name: "Тетяна Лисенко",
          text: "Я хотіла б висловити подяку контакт-центру ABA Cleaning Services, персонал завжди готовий відповісти на всі запити та запитання з великою увагою та терпимістю",
          rating: 5,
        },
      ];
      var xo = n(751),
        bo = n.n(xo);
      let wo = 1;
      function To(t, e, n) {
        const r = document.createElement("li");
        r.className = t;
        const i = document.createElement("ul");
        return (
          (i.className = e),
          n.forEach((t, e) => {
            i.appendChild(
              (function (t, e) {
                const n = document.createElement("li");
                n.className = `reviews__item item-${t}`;
                const r = (function (t) {
                    const e = document.createElement("h3");
                    return (
                      (e.className = "review__title"), (e.textContent = t), e
                    );
                  })(e.name),
                  i = (function (t) {
                    const e = document.createElement("ul");
                    e.className = "review__rating";
                    for (let n = 0; n < t; n++) e.appendChild(So());
                    return e;
                  })(e.rating),
                  o = (function (t) {
                    const e = document.createElement("p");
                    return (e.className = "review__text"), (e.innerHTML = t), e;
                  })(e.text);
                return n.appendChild(r), n.appendChild(i), n.appendChild(o), n;
              })(e + 1, t)
            );
          }),
          r.appendChild(i),
          r
        );
      }
      function So() {
        const t = document.createElement("li");
        t.className = "rating__item";
        const e = (function ({
          width: t,
          srcPrefix: e,
          media: n,
          alt: r,
          className: i,
        }) {
          const o = document.createElement("picture");
          (o.className = i),
            o.appendChild(
              (function (t, e, n) {
                const r = document.createElement("source");
                return (
                  (r.width = t),
                  (r.height = t),
                  (r.srcset = `${e}@1x.png 1x, ${e}@2x.png 2x`),
                  (r.media = n),
                  r
                );
              })(t, e, n)
            );
          const s = {
            width: 26,
            height: 26,
            src: `${e}@1x.png`,
            alt: r,
            className: i,
          };
          return (
            o.appendChild(
              (function ({
                width: t,
                height: e,
                src: n,
                alt: r,
                className: i,
              }) {
                const o = document.createElement("img");
                return (
                  (o.className = i),
                  (o.width = t),
                  (o.height = e),
                  (o.src = n),
                  (o.alt = r),
                  o
                );
              })(s)
            ),
            o
          );
        })({
          width: 20,
          srcPrefix: "images/reviews/tablet/star",
          media: "(max-width: 1439px)",
          alt: "Жовта зірка",
          className: "rating__icon",
        });
        return t.appendChild(e), t;
      }
      function Eo(t) {
        const e = t.trim().match(/\d{2}\/\d{2}\/\d{4}/);
        return e ? e[0] : null;
      }
      function ko(t) {
        const e = t.getFullYear();
        return { month: t.getMonth(), year: e };
      }
      function Co(t, e, n) {
        return {
          formattedDay: t < 10 ? `0${t}` : t,
          formattedMonth: 0 === e ? 12 : e,
          formattedYear: 0 === e ? n - 1 : n,
        };
      }
      document.addEventListener("DOMContentLoaded", function () {
        const t = document.querySelector(".reviews__swiper"),
          e = document.querySelector(".mobile__reviews-list"),
          n = document.querySelector(".mobile__show-more-btn"),
          r = (function (t, e) {
            const n = [];
            for (let e = 0; e < t.length; e += 6) n.push(t.slice(e, e + 6));
            return n;
          })(_o);
        (function (t, e, n) {
          n.forEach((n) => {
            t.appendChild(To("swiper-slide", "reviews__list", n)),
              e.appendChild(To("mobile__swiper-slide", "mobile__reviews", n));
          });
        })(t, e, r),
          document.querySelectorAll(".reviews__list").forEach((t) => {
            new (bo())(t, { itemSelector: ".reviews__item", gutter: 30 });
          }),
          (function (t) {
            const e = document.querySelector(".gallery");
            e.addEventListener("mouseleave", () => {
              (t.params.autoplay.disableOnInteraction = !1),
                (t.params.autoplay.delay = 2e3),
                t.autoplay.start();
            }),
              e.addEventListener("mouseenter", () => {
                t.autoplay.stop();
              });
          })(
            new Swiper(".gallery", {
              direction: "horizontal",
              effect: "slider",
              keyboard: { enabled: !0, onlyInViewport: !0 },
              mousewheel: { invert: !0 },
              loop: !0,
              speed: 2e3,
              autoplay: { delay: 2e3, disableOnInteraction: !1 },
              navigation: {
                nextEl: ".gallery__next-btn",
                prevEl: ".gallery__prev-btn",
              },
              pagination: {
                el: ".gallery__swiper-pagination",
                clickable: !0,
                type: "progressbar",
              },
            })
          ),
          n.addEventListener("click", () =>
            (function (t, e) {
              const n = t.querySelectorAll(".mobile__swiper-slide");
              (n[wo].style.display = "list-item"),
                wo++,
                wo >= n.length && (e.style.display = "none");
            })(e, n)
          );
        [...document.querySelectorAll(".swiper-slide")].forEach((t) =>
          t.setAttribute("role", "Слайд")
        );
      }),
        document.querySelectorAll(".calendar").forEach(function (t) {
          const {
            calendarIcon: e,
            dateInput: n,
            sheduleEl: i,
            calendarBody: o,
            calendarHeadMonthAndYear: s,
            prevMonthBtn: a,
            nextMonthBtn: u,
          } = (function (t) {
            const e = g(t, "icon--calendar"),
              n =
                t.parentElement.previousElementSibling.querySelector(
                  '[name="userDate"]'
                );
            return (
              t.parentElement.previousElementSibling.querySelector(
                ".icon--calendar"
              ),
              {
                calendarIcon: e,
                dateInput: n,
                sheduleEl: t.parentElement.querySelector(".work-shedule"),
                calendarBody: t.querySelector(".calendar__body"),
                calendarHeadMonthAndYear: t.querySelector(
                  ".calendar__monthYear"
                ),
                prevMonthBtn: t.querySelector(".calendar__prevMonth-btn"),
                nextMonthBtn: t.querySelector(".calendar__nextMonth-btn"),
              }
            );
          })(t);
          let c = new Date(),
            l = new Date(),
            d = (function () {
              const t = new Date();
              return `${t.getDate().toString().padStart(2, "0")}/${(
                t.getMonth() + 1
              )
                .toString()
                .padStart(2, "0")}/${t.getFullYear()}`;
            })();
          function f() {
            _(t, i, e),
              (function (t) {
                const e = (function (t) {
                  return t
                    .closest("li")
                    .nextElementSibling.querySelector(".shedule-wrap");
                })(t);
                x(e, "time-picker-wrap", "icon--clock");
              })(n),
              (l = new Date(c)),
              p(c),
              b(t, n);
          }
          function h(o) {
            const s = (function (t) {
                const e = t.split("/"),
                  [n, r, i] = e;
                return `${r}/${n}/${i}`;
              })(o.target.dataset.date),
              a = new Date().toLocaleDateString("en-US", {
                year: "numeric",
                month: "2-digit",
                day: "2-digit",
              }),
              u = new Date(s);
            if (((c = u), u - new Date(a) >= 0)) {
              const o = (function (t) {
                const e = t.split("/"),
                  [n, r, i] = e;
                return `${r}/${n}/${i}`;
              })(s);
              d = o;
              const a = (function (t) {
                return t
                  .closest("li")
                  .nextElementSibling.querySelector('[name="userTime"]');
              })(n);
              (a.value = ""), r("selectedTimeObj"), b(t, n), _(t, i, e);
            }
          }
          function p(t) {
            o.innerHTML = "";
            const { year: e, month: n } = ko(t);
            !(function (t) {
              const e = l.toLocaleDateString("uk-UA", { month: "long" }),
                n = e.charAt(0).toUpperCase() + e.slice(1);
              s.textContent = `${n} ${t}`;
            })(e);
            const { firstDayOfMonth: r, lastDayOfMonthObj: i } = (function (
                t,
                e
              ) {
                return {
                  firstDayOfMonth: new Date(t, e, 1),
                  lastDayOfMonthObj: new Date(t, e + 1, 0),
                };
              })(e, n),
              a = (function (t) {
                let e = t.getDay();
                return 0 === e && (e = 7), e;
              })(r),
              u = (function (t, e) {
                return new Date(t, e, 0).getDate();
              })(e, n);
            let c = 1,
              d = T();
            for (let t = a - 1; t >= 1; t--)
              m(d, v(u - t + 1, "previous-month"));
            for (; c <= i.getDate(); )
              m(d, v(c, "current-month")),
                7 === d.children.length && (m(o, d), (d = T())),
                c++;
            if (d.children.length > 0) {
              for (let t = 1; d.children.length < 7; t++)
                m(d, v(t, "next-month"));
              m(o, d);
            }
          }
          function v(t, e) {
            const { year: n, month: r } = ko(l),
              i = new Date();
            let o;
            if ("previous-month" === e) {
              const {
                formattedDay: e,
                formattedMonth: i,
                formattedYear: s,
              } = Co(t, r, n);
              o = new Date(s, i - 1, e);
            } else if ("current-month" === e) {
              const { formattedDay: e } = Co(t);
              o = new Date(n, r, e);
            } else if ("next-month" === e) {
              const { formattedDay: e } = Co(t, r, n);
              o = new Date(11 === r ? n + 1 : n, 11 === r ? 0 : r + 1, e);
            }
            const s = (function (t, e) {
                return t < e;
              })(o, i),
              a = (function (t, e, n) {
                const r = t.getFullYear() === e.getFullYear(),
                  i = t.getMonth() === e.getMonth(),
                  o = n === e.getDate();
                return r && i && o;
              })(o, c, t);
            return (function (t) {
              const {
                  day: e,
                  month: n,
                  year: r,
                  isDisabledDate: i,
                  monthType: o,
                  isCellSelectedDay: s,
                } = t,
                a = document.createElement("td"),
                u = { monthType: o, isCellSelectedDay: s, isDisabledDate: i };
              return (
                (function (t, e) {
                  t.textContent = e;
                })(a, e),
                (function (t, { day: e, month: n, year: r }) {
                  t.dataset.date = `${e}/${n < 9 ? "0" : ""}${n + 1}/${r}`;
                })(a, { day: e, month: n, year: r }),
                (function (t, e) {
                  e || t.addEventListener("click", h);
                })(a, i),
                (function (t, e) {
                  const {
                    monthType: n,
                    isCellSelectedDay: r,
                    isDisabledDate: i,
                  } = e;
                  i && t.classList.add("disabled-day"),
                    "current-month" === n && r && t.classList.add("order-day"),
                    t.classList.add(n);
                })(a, u),
                a
              );
            })({
              day: String(o.getDate()).padStart(2, "0"),
              month: o.getMonth(),
              year: o.getFullYear(),
              isDisabledDate: s,
              monthType: e,
              isCellSelectedDay: a,
            });
          }
          function b(t, e) {
            !t.classList.contains("isHidden") && (e.value = `${d}`);
          }
          function w(t) {
            l.setMonth(l.getMonth() + t), p(l);
          }
          function T() {
            return document.createElement("tr");
          }
          n.addEventListener("click", f),
            e.addEventListener("click", f),
            n.addEventListener("blur", () => {
              y(n, Eo);
            }),
            a?.addEventListener("click", () => {
              w(-1);
            }),
            u?.addEventListener("click", () => {
              w(1);
            }),
            p(c);
        });
      const Lo = [
        { day: "пн", min: "07", max: "21" },
        { day: "вт", min: "07", max: "21" },
        { day: "ср", min: "07", max: "21" },
        { day: "чт", min: "07", max: "21" },
        { day: "пт", min: "07", max: "21" },
        { day: "сб", min: "10", max: "19" },
        { day: "нд", min: "10", max: "19" },
      ];
      document.querySelectorAll(".time-picker-wrap").forEach(function (n) {
        const {
          clockIcon: r,
          sheduleEl: i,
          hourTablo: o,
          minuteTablo: s,
          hourPicker: a,
          minutePicker: u,
          confirmTimeBtn: c,
          timeInput: l,
        } = {
          clockIcon: g((d = n), "icon--clock"),
          sheduleEl: d.parentElement.querySelector(".work-shedule"),
          hourTablo: d.querySelector(".tablo--hours"),
          minuteTablo: d.querySelector(".tablo--minutes"),
          hourPicker: d.querySelector(".time-picker__hours"),
          minutePicker: d.querySelector(".time-picker__minutes"),
          confirmTimeBtn: d.querySelector(".time-picker__btn"),
          timeInput:
            d.parentElement.previousElementSibling.querySelector(
              '[name="userTime"]'
            ),
        };
        var d;
        let f = e("selectedTimeObj") || { hours: "15", minutes: "00" };
        function h() {
          f = e("selectedTimeObj") || { hours: "15", minutes: "00" };
          const t = (function (t) {
              return t
                .closest("li")
                .previousElementSibling.querySelector('[name="userDate"]');
            })(l),
            o = t.value;
          if (o) {
            m(n);
            const { minHour: t, maxHour: e } = (function (t, e) {
              const n = (function (t) {
                  const e = t.split("/");
                  var n = parseInt(e[0], 10),
                    r = parseInt(e[1], 10) - 1,
                    i = parseInt(e[2], 10);
                  return new Date(i, r, n);
                })(t),
                r = n.toLocaleDateString("uk-UA", { weekday: "short" }),
                i = e.find((t) => t.day === r);
              return { minHour: parseInt(i.min), maxHour: parseInt(i.max) };
            })(o, Lo);
            !(function (t, e, n) {
              [...t.querySelectorAll(".hours")]
                .filter((t) => {
                  const r = parseInt(t.getAttribute("data-id"));
                  return r < e || r > n;
                })
                .forEach((t) => {
                  t.classList.contains("disabled") ||
                    (t.classList.remove("active"), t.classList.add("disabled"));
                });
            })(n, t, e),
              (function (t) {
                const e = t.hours,
                  r = t.minutes,
                  i = n.querySelector(".time-picker__hours"),
                  o = n.querySelector(".time-picker__minutes");
                w(i, e), w(o, r);
              })(f),
              (function (t) {
                const e = t.hours,
                  r = t.minutes,
                  i = n.querySelectorAll(".hours"),
                  o = n.querySelectorAll(".minutes"),
                  s = [...i].find((t) => t.getAttribute("data-id") == e),
                  a = [...o].find((t) => t.getAttribute("data-id") == r);
                b(s, i), b(a, o);
              })(f),
              _(n, i, r),
              (function (t) {
                const e = (function (t) {
                  return t
                    .closest("li")
                    .previousElementSibling.querySelector(".shedule-wrap");
                })(t);
                x(e, "calendar", "icon--calendar");
              })(l),
              v(n, l);
          } else
            !(function (t) {
              t.value = "Оберіть спочатку дату для прибирання";
            })(l);
        }
        function p(e, r) {
          const i = e.target;
          if (i.classList.contains("disabled")) return;
          if (
            !(function (t) {
              return (
                t.classList.contains("number") &&
                !t.classList.contains("active")
              );
            })(i)
          )
            return;
          const o = T(r);
          b(i, n.querySelectorAll(`.${o}`));
          const s = n.querySelector(r),
            a = i.dataset.id;
          w(s, a),
            (function (e, r) {
              const i = T(e);
              (f[i] = r), t("selectedTimeObj", f), v(n, l);
            })(r, a);
        }
        function m(t) {
          [...t.querySelectorAll(".hours")].forEach((t) => {
            t.classList.remove("disabled");
          });
        }
        function v(t, e) {
          !t.classList.contains("isHidden") &&
            (e.value = `${f.hours} : ${f.minutes}`);
        }
        function b(t, e) {
          [...e].map((e) =>
            e === t
              ? (function (t) {
                  t.classList.add("active");
                })(e)
              : (function (t) {
                  t.classList.remove("active");
                })(e)
          );
        }
        function w(t, e) {
          t.innerHTML = e;
        }
        function T(t) {
          return t.split("__")[1];
        }
        function S(t) {
          const e = t.trim().match(/\d{2}\s*:\s*\d{2}/);
          return e ? e[0] : null;
        }
        function E(t, e) {
          !t.classList.contains("isHidden") ||
            (t.classList.remove("isHidden"), e.classList.add("isHidden"));
        }
        t("selectedTimeObj", f),
          l.addEventListener("click", h),
          r.addEventListener("click", h),
          l.addEventListener("blur", () => {
            y(l, S);
          }),
          o.addEventListener("click", (t) => p(t, ".time-picker__hours")),
          s.addEventListener("click", (t) => p(t, ".time-picker__minutes")),
          u.addEventListener("click", () => E(s, o)),
          a.addEventListener("click", () => E(o, s)),
          c.addEventListener("click", () => {
            m(n), _(n, i, r);
          });
      }),
        n(963),
        Di({
          name: "location",
          openModalBtn: document.querySelector("[data-location-modal-open]"),
          closeModalBtn: document.querySelector("[data-location-modal-close]"),
          modal: document.querySelector("[data-location-modal]"),
          backdrop: document.querySelector(".backdrop--location"),
        });
    })();
})();
