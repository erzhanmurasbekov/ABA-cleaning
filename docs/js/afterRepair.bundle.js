/*! For license information please see afterRepair.bundle.js.LICENSE.txt */
!(function () {
  var e = {
      741: function (e, t, n) {
        var i, r;
        !(function (o, a) {
          "use strict";
          void 0 ===
            (r = "function" == typeof (i = a) ? i.call(t, n, t, e) : i) ||
            (e.exports = r);
        })(window, function () {
          "use strict";
          var e = (function () {
            var e = window.Element.prototype;
            if (e.matches) return "matches";
            if (e.matchesSelector) return "matchesSelector";
            for (
              var t = ["webkit", "moz", "ms", "o"], n = 0;
              n < t.length;
              n++
            ) {
              var i = t[n] + "MatchesSelector";
              if (e[i]) return i;
            }
          })();
          return function (t, n) {
            return t[e](n);
          };
        });
      },
      158: function (e, t, n) {
        var i, r;
        "undefined" != typeof window && window,
          void 0 ===
            (r =
              "function" ==
              typeof (i = function () {
                "use strict";
                function e() {}
                var t = e.prototype;
                return (
                  (t.on = function (e, t) {
                    if (e && t) {
                      var n = (this._events = this._events || {}),
                        i = (n[e] = n[e] || []);
                      return -1 == i.indexOf(t) && i.push(t), this;
                    }
                  }),
                  (t.once = function (e, t) {
                    if (e && t) {
                      this.on(e, t);
                      var n = (this._onceEvents = this._onceEvents || {});
                      return ((n[e] = n[e] || {})[t] = !0), this;
                    }
                  }),
                  (t.off = function (e, t) {
                    var n = this._events && this._events[e];
                    if (n && n.length) {
                      var i = n.indexOf(t);
                      return -1 != i && n.splice(i, 1), this;
                    }
                  }),
                  (t.emitEvent = function (e, t) {
                    var n = this._events && this._events[e];
                    if (n && n.length) {
                      (n = n.slice(0)), (t = t || []);
                      for (
                        var i = this._onceEvents && this._onceEvents[e], r = 0;
                        r < n.length;
                        r++
                      ) {
                        var o = n[r];
                        i && i[o] && (this.off(e, o), delete i[o]),
                          o.apply(this, t);
                      }
                      return this;
                    }
                  }),
                  (t.allOff = function () {
                    delete this._events, delete this._onceEvents;
                  }),
                  e
                );
              })
                ? i.call(t, n, t, e)
                : i) || (e.exports = r);
      },
      47: function (e, t, n) {
        var i, r;
        !(function (o, a) {
          (i = [n(741)]),
            (r = function (e) {
              return (function (e, t) {
                "use strict";
                var n = {
                    extend: function (e, t) {
                      for (var n in t) e[n] = t[n];
                      return e;
                    },
                    modulo: function (e, t) {
                      return ((e % t) + t) % t;
                    },
                  },
                  i = Array.prototype.slice;
                (n.makeArray = function (e) {
                  return Array.isArray(e)
                    ? e
                    : null == e
                    ? []
                    : "object" == typeof e && "number" == typeof e.length
                    ? i.call(e)
                    : [e];
                }),
                  (n.removeFrom = function (e, t) {
                    var n = e.indexOf(t);
                    -1 != n && e.splice(n, 1);
                  }),
                  (n.getParent = function (e, n) {
                    for (; e.parentNode && e != document.body; )
                      if (((e = e.parentNode), t(e, n))) return e;
                  }),
                  (n.getQueryElement = function (e) {
                    return "string" == typeof e ? document.querySelector(e) : e;
                  }),
                  (n.handleEvent = function (e) {
                    var t = "on" + e.type;
                    this[t] && this[t](e);
                  }),
                  (n.filterFindElements = function (e, i) {
                    e = n.makeArray(e);
                    var r = [];
                    return (
                      e.forEach(function (e) {
                        if (e instanceof HTMLElement)
                          if (i) {
                            t(e, i) && r.push(e);
                            for (
                              var n = e.querySelectorAll(i), o = 0;
                              o < n.length;
                              o++
                            )
                              r.push(n[o]);
                          } else r.push(e);
                      }),
                      r
                    );
                  }),
                  (n.debounceMethod = function (e, t, n) {
                    n = n || 100;
                    var i = e.prototype[t],
                      r = t + "Timeout";
                    e.prototype[t] = function () {
                      var e = this[r];
                      clearTimeout(e);
                      var t = arguments,
                        o = this;
                      this[r] = setTimeout(function () {
                        i.apply(o, t), delete o[r];
                      }, n);
                    };
                  }),
                  (n.docReady = function (e) {
                    var t = document.readyState;
                    "complete" == t || "interactive" == t
                      ? setTimeout(e)
                      : document.addEventListener("DOMContentLoaded", e);
                  }),
                  (n.toDashed = function (e) {
                    return e
                      .replace(/(.)([A-Z])/g, function (e, t, n) {
                        return t + "-" + n;
                      })
                      .toLowerCase();
                  });
                var r = e.console;
                return (
                  (n.htmlInit = function (t, i) {
                    n.docReady(function () {
                      var o = n.toDashed(i),
                        a = "data-" + o,
                        s = document.querySelectorAll("[" + a + "]"),
                        c = document.querySelectorAll(".js-" + o),
                        u = n.makeArray(s).concat(n.makeArray(c)),
                        l = a + "-options",
                        d = e.jQuery;
                      u.forEach(function (e) {
                        var n,
                          o = e.getAttribute(a) || e.getAttribute(l);
                        try {
                          n = o && JSON.parse(o);
                        } catch (t) {
                          return void (
                            r &&
                            r.error(
                              "Error parsing " +
                                a +
                                " on " +
                                e.className +
                                ": " +
                                t
                            )
                          );
                        }
                        var s = new t(e, n);
                        d && d.data(e, i, s);
                      });
                    });
                  }),
                  n
                );
              })(o, e);
            }.apply(t, i)),
            void 0 === r || (e.exports = r);
        })(window);
      },
      131: function (e, t, n) {
        var i, r;
        window,
          void 0 ===
            (r =
              "function" ==
              typeof (i = function () {
                "use strict";
                function e(e) {
                  var t = parseFloat(e);
                  return -1 == e.indexOf("%") && !isNaN(t) && t;
                }
                var t =
                    "undefined" == typeof console
                      ? function () {}
                      : function (e) {
                          console.error(e);
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
                  i = n.length;
                function r(e) {
                  var n = getComputedStyle(e);
                  return (
                    n ||
                      t(
                        "Style returned " +
                          n +
                          ". Are you running this code in a hidden iframe on Firefox? See https://bit.ly/getsizebug1"
                      ),
                    n
                  );
                }
                var o,
                  a = !1;
                function s(t) {
                  if (
                    ((function () {
                      if (!a) {
                        a = !0;
                        var t = document.createElement("div");
                        (t.style.width = "200px"),
                          (t.style.padding = "1px 2px 3px 4px"),
                          (t.style.borderStyle = "solid"),
                          (t.style.borderWidth = "1px 2px 3px 4px"),
                          (t.style.boxSizing = "border-box");
                        var n = document.body || document.documentElement;
                        n.appendChild(t);
                        var i = r(t);
                        (o = 200 == Math.round(e(i.width))),
                          (s.isBoxSizeOuter = o),
                          n.removeChild(t);
                      }
                    })(),
                    "string" == typeof t && (t = document.querySelector(t)),
                    t && "object" == typeof t && t.nodeType)
                  ) {
                    var c = r(t);
                    if ("none" == c.display)
                      return (function () {
                        for (
                          var e = {
                              width: 0,
                              height: 0,
                              innerWidth: 0,
                              innerHeight: 0,
                              outerWidth: 0,
                              outerHeight: 0,
                            },
                            t = 0;
                          t < i;
                          t++
                        )
                          e[n[t]] = 0;
                        return e;
                      })();
                    var u = {};
                    (u.width = t.offsetWidth), (u.height = t.offsetHeight);
                    for (
                      var l = (u.isBorderBox = "border-box" == c.boxSizing),
                        d = 0;
                      d < i;
                      d++
                    ) {
                      var f = n[d],
                        p = c[f],
                        h = parseFloat(p);
                      u[f] = isNaN(h) ? 0 : h;
                    }
                    var m = u.paddingLeft + u.paddingRight,
                      g = u.paddingTop + u.paddingBottom,
                      y = u.marginLeft + u.marginRight,
                      v = u.marginTop + u.marginBottom,
                      b = u.borderLeftWidth + u.borderRightWidth,
                      x = u.borderTopWidth + u.borderBottomWidth,
                      w = l && o,
                      S = e(c.width);
                    !1 !== S && (u.width = S + (w ? 0 : m + b));
                    var E = e(c.height);
                    return (
                      !1 !== E && (u.height = E + (w ? 0 : g + x)),
                      (u.innerWidth = u.width - (m + b)),
                      (u.innerHeight = u.height - (g + x)),
                      (u.outerWidth = u.width + y),
                      (u.outerHeight = u.height + v),
                      u
                    );
                  }
                }
                return s;
              })
                ? i.call(t, n, t, e)
                : i) || (e.exports = r);
      },
      755: function (e, t) {
        var n;
        !(function (t, n) {
          "use strict";
          "object" == typeof e.exports
            ? (e.exports = t.document
                ? n(t, !0)
                : function (e) {
                    if (!e.document)
                      throw new Error(
                        "jQuery requires a window with a document"
                      );
                    return n(e);
                  })
            : n(t);
        })("undefined" != typeof window ? window : this, function (i, r) {
          "use strict";
          var o = [],
            a = Object.getPrototypeOf,
            s = o.slice,
            c = o.flat
              ? function (e) {
                  return o.flat.call(e);
                }
              : function (e) {
                  return o.concat.apply([], e);
                },
            u = o.push,
            l = o.indexOf,
            d = {},
            f = d.toString,
            p = d.hasOwnProperty,
            h = p.toString,
            m = h.call(Object),
            g = {},
            y = function (e) {
              return (
                "function" == typeof e &&
                "number" != typeof e.nodeType &&
                "function" != typeof e.item
              );
            },
            v = function (e) {
              return null != e && e === e.window;
            },
            b = i.document,
            x = { type: !0, src: !0, nonce: !0, noModule: !0 };
          function w(e, t, n) {
            var i,
              r,
              o = (n = n || b).createElement("script");
            if (((o.text = e), t))
              for (i in x)
                (r = t[i] || (t.getAttribute && t.getAttribute(i))) &&
                  o.setAttribute(i, r);
            n.head.appendChild(o).parentNode.removeChild(o);
          }
          function S(e) {
            return null == e
              ? e + ""
              : "object" == typeof e || "function" == typeof e
              ? d[f.call(e)] || "object"
              : typeof e;
          }
          var E = "3.7.1",
            T = /HTML$/i,
            C = function (e, t) {
              return new C.fn.init(e, t);
            };
          function _(e) {
            var t = !!e && "length" in e && e.length,
              n = S(e);
            return (
              !y(e) &&
              !v(e) &&
              ("array" === n ||
                0 === t ||
                ("number" == typeof t && t > 0 && t - 1 in e))
            );
          }
          function k(e, t) {
            return e.nodeName && e.nodeName.toLowerCase() === t.toLowerCase();
          }
          (C.fn = C.prototype =
            {
              jquery: E,
              constructor: C,
              length: 0,
              toArray: function () {
                return s.call(this);
              },
              get: function (e) {
                return null == e
                  ? s.call(this)
                  : e < 0
                  ? this[e + this.length]
                  : this[e];
              },
              pushStack: function (e) {
                var t = C.merge(this.constructor(), e);
                return (t.prevObject = this), t;
              },
              each: function (e) {
                return C.each(this, e);
              },
              map: function (e) {
                return this.pushStack(
                  C.map(this, function (t, n) {
                    return e.call(t, n, t);
                  })
                );
              },
              slice: function () {
                return this.pushStack(s.apply(this, arguments));
              },
              first: function () {
                return this.eq(0);
              },
              last: function () {
                return this.eq(-1);
              },
              even: function () {
                return this.pushStack(
                  C.grep(this, function (e, t) {
                    return (t + 1) % 2;
                  })
                );
              },
              odd: function () {
                return this.pushStack(
                  C.grep(this, function (e, t) {
                    return t % 2;
                  })
                );
              },
              eq: function (e) {
                var t = this.length,
                  n = +e + (e < 0 ? t : 0);
                return this.pushStack(n >= 0 && n < t ? [this[n]] : []);
              },
              end: function () {
                return this.prevObject || this.constructor();
              },
              push: u,
              sort: o.sort,
              splice: o.splice,
            }),
            (C.extend = C.fn.extend =
              function () {
                var e,
                  t,
                  n,
                  i,
                  r,
                  o,
                  a = arguments[0] || {},
                  s = 1,
                  c = arguments.length,
                  u = !1;
                for (
                  "boolean" == typeof a &&
                    ((u = a), (a = arguments[s] || {}), s++),
                    "object" == typeof a || y(a) || (a = {}),
                    s === c && ((a = this), s--);
                  s < c;
                  s++
                )
                  if (null != (e = arguments[s]))
                    for (t in e)
                      (i = e[t]),
                        "__proto__" !== t &&
                          a !== i &&
                          (u &&
                          i &&
                          (C.isPlainObject(i) || (r = Array.isArray(i)))
                            ? ((n = a[t]),
                              (o =
                                r && !Array.isArray(n)
                                  ? []
                                  : r || C.isPlainObject(n)
                                  ? n
                                  : {}),
                              (r = !1),
                              (a[t] = C.extend(u, o, i)))
                            : void 0 !== i && (a[t] = i));
                return a;
              }),
            C.extend({
              expando: "jQuery" + (E + Math.random()).replace(/\D/g, ""),
              isReady: !0,
              error: function (e) {
                throw new Error(e);
              },
              noop: function () {},
              isPlainObject: function (e) {
                var t, n;
                return !(
                  !e ||
                  "[object Object]" !== f.call(e) ||
                  ((t = a(e)) &&
                    ("function" !=
                      typeof (n = p.call(t, "constructor") && t.constructor) ||
                      h.call(n) !== m))
                );
              },
              isEmptyObject: function (e) {
                var t;
                for (t in e) return !1;
                return !0;
              },
              globalEval: function (e, t, n) {
                w(e, { nonce: t && t.nonce }, n);
              },
              each: function (e, t) {
                var n,
                  i = 0;
                if (_(e))
                  for (
                    n = e.length;
                    i < n && !1 !== t.call(e[i], i, e[i]);
                    i++
                  );
                else for (i in e) if (!1 === t.call(e[i], i, e[i])) break;
                return e;
              },
              text: function (e) {
                var t,
                  n = "",
                  i = 0,
                  r = e.nodeType;
                if (!r) for (; (t = e[i++]); ) n += C.text(t);
                return 1 === r || 11 === r
                  ? e.textContent
                  : 9 === r
                  ? e.documentElement.textContent
                  : 3 === r || 4 === r
                  ? e.nodeValue
                  : n;
              },
              makeArray: function (e, t) {
                var n = t || [];
                return (
                  null != e &&
                    (_(Object(e))
                      ? C.merge(n, "string" == typeof e ? [e] : e)
                      : u.call(n, e)),
                  n
                );
              },
              inArray: function (e, t, n) {
                return null == t ? -1 : l.call(t, e, n);
              },
              isXMLDoc: function (e) {
                var t = e && e.namespaceURI,
                  n = e && (e.ownerDocument || e).documentElement;
                return !T.test(t || (n && n.nodeName) || "HTML");
              },
              merge: function (e, t) {
                for (var n = +t.length, i = 0, r = e.length; i < n; i++)
                  e[r++] = t[i];
                return (e.length = r), e;
              },
              grep: function (e, t, n) {
                for (var i = [], r = 0, o = e.length, a = !n; r < o; r++)
                  !t(e[r], r) !== a && i.push(e[r]);
                return i;
              },
              map: function (e, t, n) {
                var i,
                  r,
                  o = 0,
                  a = [];
                if (_(e))
                  for (i = e.length; o < i; o++)
                    null != (r = t(e[o], o, n)) && a.push(r);
                else for (o in e) null != (r = t(e[o], o, n)) && a.push(r);
                return c(a);
              },
              guid: 1,
              support: g,
            }),
            "function" == typeof Symbol &&
              (C.fn[Symbol.iterator] = o[Symbol.iterator]),
            C.each(
              "Boolean Number String Function Array Date RegExp Object Error Symbol".split(
                " "
              ),
              function (e, t) {
                d["[object " + t + "]"] = t.toLowerCase();
              }
            );
          var L = o.pop,
            q = o.sort,
            A = o.splice,
            D = "[\\x20\\t\\r\\n\\f]",
            j = new RegExp(
              "^" + D + "+|((?:^|[^\\\\])(?:\\\\.)*)" + D + "+$",
              "g"
            );
          C.contains = function (e, t) {
            var n = t && t.parentNode;
            return (
              e === n ||
              !(
                !n ||
                1 !== n.nodeType ||
                !(e.contains
                  ? e.contains(n)
                  : e.compareDocumentPosition &&
                    16 & e.compareDocumentPosition(n))
              )
            );
          };
          var O = /([\0-\x1f\x7f]|^-?\d)|^-$|[^\x80-\uFFFF\w-]/g;
          function N(e, t) {
            return t
              ? "\0" === e
                ? "�"
                : e.slice(0, -1) +
                  "\\" +
                  e.charCodeAt(e.length - 1).toString(16) +
                  " "
              : "\\" + e;
          }
          C.escapeSelector = function (e) {
            return (e + "").replace(O, N);
          };
          var H = b,
            I = u;
          !(function () {
            var e,
              t,
              n,
              r,
              a,
              c,
              u,
              d,
              f,
              h,
              m = I,
              y = C.expando,
              v = 0,
              b = 0,
              x = ee(),
              w = ee(),
              S = ee(),
              E = ee(),
              T = function (e, t) {
                return e === t && (a = !0), 0;
              },
              _ =
                "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
              O =
                "(?:\\\\[\\da-fA-F]{1,6}" +
                D +
                "?|\\\\[^\\r\\n\\f]|[\\w-]|[^\0-\\x7f])+",
              N =
                "\\[" +
                D +
                "*(" +
                O +
                ")(?:" +
                D +
                "*([*^$|!~]?=)" +
                D +
                "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" +
                O +
                "))|)" +
                D +
                "*\\]",
              M =
                ":(" +
                O +
                ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" +
                N +
                ")*)|.*)\\)|)",
              P = new RegExp(D + "+", "g"),
              R = new RegExp("^" + D + "*," + D + "*"),
              W = new RegExp("^" + D + "*([>+~]|" + D + ")" + D + "*"),
              z = new RegExp(D + "|>"),
              B = new RegExp(M),
              $ = new RegExp("^" + O + "$"),
              F = {
                ID: new RegExp("^#(" + O + ")"),
                CLASS: new RegExp("^\\.(" + O + ")"),
                TAG: new RegExp("^(" + O + "|[*])"),
                ATTR: new RegExp("^" + N),
                PSEUDO: new RegExp("^" + M),
                CHILD: new RegExp(
                  "^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" +
                    D +
                    "*(even|odd|(([+-]|)(\\d*)n|)" +
                    D +
                    "*(?:([+-]|)" +
                    D +
                    "*(\\d+)|))" +
                    D +
                    "*\\)|)",
                  "i"
                ),
                bool: new RegExp("^(?:" + _ + ")$", "i"),
                needsContext: new RegExp(
                  "^" +
                    D +
                    "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" +
                    D +
                    "*((?:-\\d)?\\d*)" +
                    D +
                    "*\\)|)(?=[^-]|$)",
                  "i"
                ),
              },
              G = /^(?:input|select|textarea|button)$/i,
              Y = /^h\d$/i,
              U = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
              X = /[+~]/,
              V = new RegExp(
                "\\\\[\\da-fA-F]{1,6}" + D + "?|\\\\([^\\r\\n\\f])",
                "g"
              ),
              Q = function (e, t) {
                var n = "0x" + e.slice(1) - 65536;
                return (
                  t ||
                  (n < 0
                    ? String.fromCharCode(n + 65536)
                    : String.fromCharCode(
                        (n >> 10) | 55296,
                        (1023 & n) | 56320
                      ))
                );
              },
              K = function () {
                ce();
              },
              J = fe(
                function (e) {
                  return !0 === e.disabled && k(e, "fieldset");
                },
                { dir: "parentNode", next: "legend" }
              );
            try {
              m.apply((o = s.call(H.childNodes)), H.childNodes),
                o[H.childNodes.length].nodeType;
            } catch (e) {
              m = {
                apply: function (e, t) {
                  I.apply(e, s.call(t));
                },
                call: function (e) {
                  I.apply(e, s.call(arguments, 1));
                },
              };
            }
            function Z(e, t, n, i) {
              var r,
                o,
                a,
                s,
                u,
                l,
                p,
                h = t && t.ownerDocument,
                v = t ? t.nodeType : 9;
              if (
                ((n = n || []),
                "string" != typeof e || !e || (1 !== v && 9 !== v && 11 !== v))
              )
                return n;
              if (!i && (ce(t), (t = t || c), d)) {
                if (11 !== v && (u = U.exec(e)))
                  if ((r = u[1])) {
                    if (9 === v) {
                      if (!(a = t.getElementById(r))) return n;
                      if (a.id === r) return m.call(n, a), n;
                    } else if (
                      h &&
                      (a = h.getElementById(r)) &&
                      Z.contains(t, a) &&
                      a.id === r
                    )
                      return m.call(n, a), n;
                  } else {
                    if (u[2]) return m.apply(n, t.getElementsByTagName(e)), n;
                    if ((r = u[3]) && t.getElementsByClassName)
                      return m.apply(n, t.getElementsByClassName(r)), n;
                  }
                if (!(E[e + " "] || (f && f.test(e)))) {
                  if (((p = e), (h = t), 1 === v && (z.test(e) || W.test(e)))) {
                    for (
                      ((h = (X.test(e) && se(t.parentNode)) || t) == t &&
                        g.scope) ||
                        ((s = t.getAttribute("id"))
                          ? (s = C.escapeSelector(s))
                          : t.setAttribute("id", (s = y))),
                        o = (l = le(e)).length;
                      o--;

                    )
                      l[o] = (s ? "#" + s : ":scope") + " " + de(l[o]);
                    p = l.join(",");
                  }
                  try {
                    return m.apply(n, h.querySelectorAll(p)), n;
                  } catch (t) {
                    E(e, !0);
                  } finally {
                    s === y && t.removeAttribute("id");
                  }
                }
              }
              return ve(e.replace(j, "$1"), t, n, i);
            }
            function ee() {
              var e = [];
              return function n(i, r) {
                return (
                  e.push(i + " ") > t.cacheLength && delete n[e.shift()],
                  (n[i + " "] = r)
                );
              };
            }
            function te(e) {
              return (e[y] = !0), e;
            }
            function ne(e) {
              var t = c.createElement("fieldset");
              try {
                return !!e(t);
              } catch (e) {
                return !1;
              } finally {
                t.parentNode && t.parentNode.removeChild(t), (t = null);
              }
            }
            function ie(e) {
              return function (t) {
                return k(t, "input") && t.type === e;
              };
            }
            function re(e) {
              return function (t) {
                return (k(t, "input") || k(t, "button")) && t.type === e;
              };
            }
            function oe(e) {
              return function (t) {
                return "form" in t
                  ? t.parentNode && !1 === t.disabled
                    ? "label" in t
                      ? "label" in t.parentNode
                        ? t.parentNode.disabled === e
                        : t.disabled === e
                      : t.isDisabled === e ||
                        (t.isDisabled !== !e && J(t) === e)
                    : t.disabled === e
                  : "label" in t && t.disabled === e;
              };
            }
            function ae(e) {
              return te(function (t) {
                return (
                  (t = +t),
                  te(function (n, i) {
                    for (var r, o = e([], n.length, t), a = o.length; a--; )
                      n[(r = o[a])] && (n[r] = !(i[r] = n[r]));
                  })
                );
              });
            }
            function se(e) {
              return e && void 0 !== e.getElementsByTagName && e;
            }
            function ce(e) {
              var n,
                i = e ? e.ownerDocument || e : H;
              return i != c && 9 === i.nodeType && i.documentElement
                ? ((u = (c = i).documentElement),
                  (d = !C.isXMLDoc(c)),
                  (h =
                    u.matches ||
                    u.webkitMatchesSelector ||
                    u.msMatchesSelector),
                  u.msMatchesSelector &&
                    H != c &&
                    (n = c.defaultView) &&
                    n.top !== n &&
                    n.addEventListener("unload", K),
                  (g.getById = ne(function (e) {
                    return (
                      (u.appendChild(e).id = C.expando),
                      !c.getElementsByName ||
                        !c.getElementsByName(C.expando).length
                    );
                  })),
                  (g.disconnectedMatch = ne(function (e) {
                    return h.call(e, "*");
                  })),
                  (g.scope = ne(function () {
                    return c.querySelectorAll(":scope");
                  })),
                  (g.cssHas = ne(function () {
                    try {
                      return c.querySelector(":has(*,:jqfake)"), !1;
                    } catch (e) {
                      return !0;
                    }
                  })),
                  g.getById
                    ? ((t.filter.ID = function (e) {
                        var t = e.replace(V, Q);
                        return function (e) {
                          return e.getAttribute("id") === t;
                        };
                      }),
                      (t.find.ID = function (e, t) {
                        if (void 0 !== t.getElementById && d) {
                          var n = t.getElementById(e);
                          return n ? [n] : [];
                        }
                      }))
                    : ((t.filter.ID = function (e) {
                        var t = e.replace(V, Q);
                        return function (e) {
                          var n =
                            void 0 !== e.getAttributeNode &&
                            e.getAttributeNode("id");
                          return n && n.value === t;
                        };
                      }),
                      (t.find.ID = function (e, t) {
                        if (void 0 !== t.getElementById && d) {
                          var n,
                            i,
                            r,
                            o = t.getElementById(e);
                          if (o) {
                            if ((n = o.getAttributeNode("id")) && n.value === e)
                              return [o];
                            for (
                              r = t.getElementsByName(e), i = 0;
                              (o = r[i++]);

                            )
                              if (
                                (n = o.getAttributeNode("id")) &&
                                n.value === e
                              )
                                return [o];
                          }
                          return [];
                        }
                      })),
                  (t.find.TAG = function (e, t) {
                    return void 0 !== t.getElementsByTagName
                      ? t.getElementsByTagName(e)
                      : t.querySelectorAll(e);
                  }),
                  (t.find.CLASS = function (e, t) {
                    if (void 0 !== t.getElementsByClassName && d)
                      return t.getElementsByClassName(e);
                  }),
                  (f = []),
                  ne(function (e) {
                    var t;
                    (u.appendChild(e).innerHTML =
                      "<a id='" +
                      y +
                      "' href='' disabled='disabled'></a><select id='" +
                      y +
                      "-\r\\' disabled='disabled'><option selected=''></option></select>"),
                      e.querySelectorAll("[selected]").length ||
                        f.push("\\[" + D + "*(?:value|" + _ + ")"),
                      e.querySelectorAll("[id~=" + y + "-]").length ||
                        f.push("~="),
                      e.querySelectorAll("a#" + y + "+*").length ||
                        f.push(".#.+[+~]"),
                      e.querySelectorAll(":checked").length ||
                        f.push(":checked"),
                      (t = c.createElement("input")).setAttribute(
                        "type",
                        "hidden"
                      ),
                      e.appendChild(t).setAttribute("name", "D"),
                      (u.appendChild(e).disabled = !0),
                      2 !== e.querySelectorAll(":disabled").length &&
                        f.push(":enabled", ":disabled"),
                      (t = c.createElement("input")).setAttribute("name", ""),
                      e.appendChild(t),
                      e.querySelectorAll("[name='']").length ||
                        f.push(
                          "\\[" + D + "*name" + D + "*=" + D + "*(?:''|\"\")"
                        );
                  }),
                  g.cssHas || f.push(":has"),
                  (f = f.length && new RegExp(f.join("|"))),
                  (T = function (e, t) {
                    if (e === t) return (a = !0), 0;
                    var n =
                      !e.compareDocumentPosition - !t.compareDocumentPosition;
                    return (
                      n ||
                      (1 &
                        (n =
                          (e.ownerDocument || e) == (t.ownerDocument || t)
                            ? e.compareDocumentPosition(t)
                            : 1) ||
                      (!g.sortDetached && t.compareDocumentPosition(e) === n)
                        ? e === c || (e.ownerDocument == H && Z.contains(H, e))
                          ? -1
                          : t === c ||
                            (t.ownerDocument == H && Z.contains(H, t))
                          ? 1
                          : r
                          ? l.call(r, e) - l.call(r, t)
                          : 0
                        : 4 & n
                        ? -1
                        : 1)
                    );
                  }),
                  c)
                : c;
            }
            for (e in ((Z.matches = function (e, t) {
              return Z(e, null, null, t);
            }),
            (Z.matchesSelector = function (e, t) {
              if ((ce(e), d && !E[t + " "] && (!f || !f.test(t))))
                try {
                  var n = h.call(e, t);
                  if (
                    n ||
                    g.disconnectedMatch ||
                    (e.document && 11 !== e.document.nodeType)
                  )
                    return n;
                } catch (e) {
                  E(t, !0);
                }
              return Z(t, c, null, [e]).length > 0;
            }),
            (Z.contains = function (e, t) {
              return (e.ownerDocument || e) != c && ce(e), C.contains(e, t);
            }),
            (Z.attr = function (e, n) {
              (e.ownerDocument || e) != c && ce(e);
              var i = t.attrHandle[n.toLowerCase()],
                r =
                  i && p.call(t.attrHandle, n.toLowerCase())
                    ? i(e, n, !d)
                    : void 0;
              return void 0 !== r ? r : e.getAttribute(n);
            }),
            (Z.error = function (e) {
              throw new Error("Syntax error, unrecognized expression: " + e);
            }),
            (C.uniqueSort = function (e) {
              var t,
                n = [],
                i = 0,
                o = 0;
              if (
                ((a = !g.sortStable),
                (r = !g.sortStable && s.call(e, 0)),
                q.call(e, T),
                a)
              ) {
                for (; (t = e[o++]); ) t === e[o] && (i = n.push(o));
                for (; i--; ) A.call(e, n[i], 1);
              }
              return (r = null), e;
            }),
            (C.fn.uniqueSort = function () {
              return this.pushStack(C.uniqueSort(s.apply(this)));
            }),
            (t = C.expr =
              {
                cacheLength: 50,
                createPseudo: te,
                match: F,
                attrHandle: {},
                find: {},
                relative: {
                  ">": { dir: "parentNode", first: !0 },
                  " ": { dir: "parentNode" },
                  "+": { dir: "previousSibling", first: !0 },
                  "~": { dir: "previousSibling" },
                },
                preFilter: {
                  ATTR: function (e) {
                    return (
                      (e[1] = e[1].replace(V, Q)),
                      (e[3] = (e[3] || e[4] || e[5] || "").replace(V, Q)),
                      "~=" === e[2] && (e[3] = " " + e[3] + " "),
                      e.slice(0, 4)
                    );
                  },
                  CHILD: function (e) {
                    return (
                      (e[1] = e[1].toLowerCase()),
                      "nth" === e[1].slice(0, 3)
                        ? (e[3] || Z.error(e[0]),
                          (e[4] = +(e[4]
                            ? e[5] + (e[6] || 1)
                            : 2 * ("even" === e[3] || "odd" === e[3]))),
                          (e[5] = +(e[7] + e[8] || "odd" === e[3])))
                        : e[3] && Z.error(e[0]),
                      e
                    );
                  },
                  PSEUDO: function (e) {
                    var t,
                      n = !e[6] && e[2];
                    return F.CHILD.test(e[0])
                      ? null
                      : (e[3]
                          ? (e[2] = e[4] || e[5] || "")
                          : n &&
                            B.test(n) &&
                            (t = le(n, !0)) &&
                            (t = n.indexOf(")", n.length - t) - n.length) &&
                            ((e[0] = e[0].slice(0, t)), (e[2] = n.slice(0, t))),
                        e.slice(0, 3));
                  },
                },
                filter: {
                  TAG: function (e) {
                    var t = e.replace(V, Q).toLowerCase();
                    return "*" === e
                      ? function () {
                          return !0;
                        }
                      : function (e) {
                          return k(e, t);
                        };
                  },
                  CLASS: function (e) {
                    var t = x[e + " "];
                    return (
                      t ||
                      ((t = new RegExp(
                        "(^|" + D + ")" + e + "(" + D + "|$)"
                      )) &&
                        x(e, function (e) {
                          return t.test(
                            ("string" == typeof e.className && e.className) ||
                              (void 0 !== e.getAttribute &&
                                e.getAttribute("class")) ||
                              ""
                          );
                        }))
                    );
                  },
                  ATTR: function (e, t, n) {
                    return function (i) {
                      var r = Z.attr(i, e);
                      return null == r
                        ? "!=" === t
                        : !t ||
                            ((r += ""),
                            "=" === t
                              ? r === n
                              : "!=" === t
                              ? r !== n
                              : "^=" === t
                              ? n && 0 === r.indexOf(n)
                              : "*=" === t
                              ? n && r.indexOf(n) > -1
                              : "$=" === t
                              ? n && r.slice(-n.length) === n
                              : "~=" === t
                              ? (" " + r.replace(P, " ") + " ").indexOf(n) > -1
                              : "|=" === t &&
                                (r === n ||
                                  r.slice(0, n.length + 1) === n + "-"));
                    };
                  },
                  CHILD: function (e, t, n, i, r) {
                    var o = "nth" !== e.slice(0, 3),
                      a = "last" !== e.slice(-4),
                      s = "of-type" === t;
                    return 1 === i && 0 === r
                      ? function (e) {
                          return !!e.parentNode;
                        }
                      : function (t, n, c) {
                          var u,
                            l,
                            d,
                            f,
                            p,
                            h = o !== a ? "nextSibling" : "previousSibling",
                            m = t.parentNode,
                            g = s && t.nodeName.toLowerCase(),
                            b = !c && !s,
                            x = !1;
                          if (m) {
                            if (o) {
                              for (; h; ) {
                                for (d = t; (d = d[h]); )
                                  if (s ? k(d, g) : 1 === d.nodeType) return !1;
                                p = h = "only" === e && !p && "nextSibling";
                              }
                              return !0;
                            }
                            if (
                              ((p = [a ? m.firstChild : m.lastChild]), a && b)
                            ) {
                              for (
                                x =
                                  (f =
                                    (u =
                                      (l = m[y] || (m[y] = {}))[e] || [])[0] ===
                                      v && u[1]) && u[2],
                                  d = f && m.childNodes[f];
                                (d =
                                  (++f && d && d[h]) || (x = f = 0) || p.pop());

                              )
                                if (1 === d.nodeType && ++x && d === t) {
                                  l[e] = [v, f, x];
                                  break;
                                }
                            } else if (
                              (b &&
                                (x = f =
                                  (u =
                                    (l = t[y] || (t[y] = {}))[e] || [])[0] ===
                                    v && u[1]),
                              !1 === x)
                            )
                              for (
                                ;
                                (d =
                                  (++f && d && d[h]) ||
                                  (x = f = 0) ||
                                  p.pop()) &&
                                (!(s ? k(d, g) : 1 === d.nodeType) ||
                                  !++x ||
                                  (b && ((l = d[y] || (d[y] = {}))[e] = [v, x]),
                                  d !== t));

                              );
                            return (x -= r) === i || (x % i == 0 && x / i >= 0);
                          }
                        };
                  },
                  PSEUDO: function (e, n) {
                    var i,
                      r =
                        t.pseudos[e] ||
                        t.setFilters[e.toLowerCase()] ||
                        Z.error("unsupported pseudo: " + e);
                    return r[y]
                      ? r(n)
                      : r.length > 1
                      ? ((i = [e, e, "", n]),
                        t.setFilters.hasOwnProperty(e.toLowerCase())
                          ? te(function (e, t) {
                              for (var i, o = r(e, n), a = o.length; a--; )
                                e[(i = l.call(e, o[a]))] = !(t[i] = o[a]);
                            })
                          : function (e) {
                              return r(e, 0, i);
                            })
                      : r;
                  },
                },
                pseudos: {
                  not: te(function (e) {
                    var t = [],
                      n = [],
                      i = ye(e.replace(j, "$1"));
                    return i[y]
                      ? te(function (e, t, n, r) {
                          for (
                            var o, a = i(e, null, r, []), s = e.length;
                            s--;

                          )
                            (o = a[s]) && (e[s] = !(t[s] = o));
                        })
                      : function (e, r, o) {
                          return (
                            (t[0] = e),
                            i(t, null, o, n),
                            (t[0] = null),
                            !n.pop()
                          );
                        };
                  }),
                  has: te(function (e) {
                    return function (t) {
                      return Z(e, t).length > 0;
                    };
                  }),
                  contains: te(function (e) {
                    return (
                      (e = e.replace(V, Q)),
                      function (t) {
                        return (t.textContent || C.text(t)).indexOf(e) > -1;
                      }
                    );
                  }),
                  lang: te(function (e) {
                    return (
                      $.test(e || "") || Z.error("unsupported lang: " + e),
                      (e = e.replace(V, Q).toLowerCase()),
                      function (t) {
                        var n;
                        do {
                          if (
                            (n = d
                              ? t.lang
                              : t.getAttribute("xml:lang") ||
                                t.getAttribute("lang"))
                          )
                            return (
                              (n = n.toLowerCase()) === e ||
                              0 === n.indexOf(e + "-")
                            );
                        } while ((t = t.parentNode) && 1 === t.nodeType);
                        return !1;
                      }
                    );
                  }),
                  target: function (e) {
                    var t = i.location && i.location.hash;
                    return t && t.slice(1) === e.id;
                  },
                  root: function (e) {
                    return e === u;
                  },
                  focus: function (e) {
                    return (
                      e ===
                        (function () {
                          try {
                            return c.activeElement;
                          } catch (e) {}
                        })() &&
                      c.hasFocus() &&
                      !!(e.type || e.href || ~e.tabIndex)
                    );
                  },
                  enabled: oe(!1),
                  disabled: oe(!0),
                  checked: function (e) {
                    return (
                      (k(e, "input") && !!e.checked) ||
                      (k(e, "option") && !!e.selected)
                    );
                  },
                  selected: function (e) {
                    return (
                      e.parentNode && e.parentNode.selectedIndex,
                      !0 === e.selected
                    );
                  },
                  empty: function (e) {
                    for (e = e.firstChild; e; e = e.nextSibling)
                      if (e.nodeType < 6) return !1;
                    return !0;
                  },
                  parent: function (e) {
                    return !t.pseudos.empty(e);
                  },
                  header: function (e) {
                    return Y.test(e.nodeName);
                  },
                  input: function (e) {
                    return G.test(e.nodeName);
                  },
                  button: function (e) {
                    return (
                      (k(e, "input") && "button" === e.type) || k(e, "button")
                    );
                  },
                  text: function (e) {
                    var t;
                    return (
                      k(e, "input") &&
                      "text" === e.type &&
                      (null == (t = e.getAttribute("type")) ||
                        "text" === t.toLowerCase())
                    );
                  },
                  first: ae(function () {
                    return [0];
                  }),
                  last: ae(function (e, t) {
                    return [t - 1];
                  }),
                  eq: ae(function (e, t, n) {
                    return [n < 0 ? n + t : n];
                  }),
                  even: ae(function (e, t) {
                    for (var n = 0; n < t; n += 2) e.push(n);
                    return e;
                  }),
                  odd: ae(function (e, t) {
                    for (var n = 1; n < t; n += 2) e.push(n);
                    return e;
                  }),
                  lt: ae(function (e, t, n) {
                    var i;
                    for (i = n < 0 ? n + t : n > t ? t : n; --i >= 0; )
                      e.push(i);
                    return e;
                  }),
                  gt: ae(function (e, t, n) {
                    for (var i = n < 0 ? n + t : n; ++i < t; ) e.push(i);
                    return e;
                  }),
                },
              }),
            (t.pseudos.nth = t.pseudos.eq),
            { radio: !0, checkbox: !0, file: !0, password: !0, image: !0 }))
              t.pseudos[e] = ie(e);
            for (e in { submit: !0, reset: !0 }) t.pseudos[e] = re(e);
            function ue() {}
            function le(e, n) {
              var i,
                r,
                o,
                a,
                s,
                c,
                u,
                l = w[e + " "];
              if (l) return n ? 0 : l.slice(0);
              for (s = e, c = [], u = t.preFilter; s; ) {
                for (a in ((i && !(r = R.exec(s))) ||
                  (r && (s = s.slice(r[0].length) || s), c.push((o = []))),
                (i = !1),
                (r = W.exec(s)) &&
                  ((i = r.shift()),
                  o.push({ value: i, type: r[0].replace(j, " ") }),
                  (s = s.slice(i.length))),
                t.filter))
                  !(r = F[a].exec(s)) ||
                    (u[a] && !(r = u[a](r))) ||
                    ((i = r.shift()),
                    o.push({ value: i, type: a, matches: r }),
                    (s = s.slice(i.length)));
                if (!i) break;
              }
              return n ? s.length : s ? Z.error(e) : w(e, c).slice(0);
            }
            function de(e) {
              for (var t = 0, n = e.length, i = ""; t < n; t++) i += e[t].value;
              return i;
            }
            function fe(e, t, n) {
              var i = t.dir,
                r = t.next,
                o = r || i,
                a = n && "parentNode" === o,
                s = b++;
              return t.first
                ? function (t, n, r) {
                    for (; (t = t[i]); )
                      if (1 === t.nodeType || a) return e(t, n, r);
                    return !1;
                  }
                : function (t, n, c) {
                    var u,
                      l,
                      d = [v, s];
                    if (c) {
                      for (; (t = t[i]); )
                        if ((1 === t.nodeType || a) && e(t, n, c)) return !0;
                    } else
                      for (; (t = t[i]); )
                        if (1 === t.nodeType || a)
                          if (((l = t[y] || (t[y] = {})), r && k(t, r)))
                            t = t[i] || t;
                          else {
                            if ((u = l[o]) && u[0] === v && u[1] === s)
                              return (d[2] = u[2]);
                            if (((l[o] = d), (d[2] = e(t, n, c)))) return !0;
                          }
                    return !1;
                  };
            }
            function pe(e) {
              return e.length > 1
                ? function (t, n, i) {
                    for (var r = e.length; r--; ) if (!e[r](t, n, i)) return !1;
                    return !0;
                  }
                : e[0];
            }
            function he(e, t, n, i, r) {
              for (
                var o, a = [], s = 0, c = e.length, u = null != t;
                s < c;
                s++
              )
                (o = e[s]) &&
                  ((n && !n(o, i, r)) || (a.push(o), u && t.push(s)));
              return a;
            }
            function me(e, t, n, i, r, o) {
              return (
                i && !i[y] && (i = me(i)),
                r && !r[y] && (r = me(r, o)),
                te(function (o, a, s, c) {
                  var u,
                    d,
                    f,
                    p,
                    h = [],
                    g = [],
                    y = a.length,
                    v =
                      o ||
                      (function (e, t, n) {
                        for (var i = 0, r = t.length; i < r; i++) Z(e, t[i], n);
                        return n;
                      })(t || "*", s.nodeType ? [s] : s, []),
                    b = !e || (!o && t) ? v : he(v, h, e, s, c);
                  if (
                    (n
                      ? n(b, (p = r || (o ? e : y || i) ? [] : a), s, c)
                      : (p = b),
                    i)
                  )
                    for (u = he(p, g), i(u, [], s, c), d = u.length; d--; )
                      (f = u[d]) && (p[g[d]] = !(b[g[d]] = f));
                  if (o) {
                    if (r || e) {
                      if (r) {
                        for (u = [], d = p.length; d--; )
                          (f = p[d]) && u.push((b[d] = f));
                        r(null, (p = []), u, c);
                      }
                      for (d = p.length; d--; )
                        (f = p[d]) &&
                          (u = r ? l.call(o, f) : h[d]) > -1 &&
                          (o[u] = !(a[u] = f));
                    }
                  } else (p = he(p === a ? p.splice(y, p.length) : p)), r ? r(null, a, p, c) : m.apply(a, p);
                })
              );
            }
            function ge(e) {
              for (
                var i,
                  r,
                  o,
                  a = e.length,
                  s = t.relative[e[0].type],
                  c = s || t.relative[" "],
                  u = s ? 1 : 0,
                  d = fe(
                    function (e) {
                      return e === i;
                    },
                    c,
                    !0
                  ),
                  f = fe(
                    function (e) {
                      return l.call(i, e) > -1;
                    },
                    c,
                    !0
                  ),
                  p = [
                    function (e, t, r) {
                      var o =
                        (!s && (r || t != n)) ||
                        ((i = t).nodeType ? d(e, t, r) : f(e, t, r));
                      return (i = null), o;
                    },
                  ];
                u < a;
                u++
              )
                if ((r = t.relative[e[u].type])) p = [fe(pe(p), r)];
                else {
                  if ((r = t.filter[e[u].type].apply(null, e[u].matches))[y]) {
                    for (o = ++u; o < a && !t.relative[e[o].type]; o++);
                    return me(
                      u > 1 && pe(p),
                      u > 1 &&
                        de(
                          e
                            .slice(0, u - 1)
                            .concat({ value: " " === e[u - 2].type ? "*" : "" })
                        ).replace(j, "$1"),
                      r,
                      u < o && ge(e.slice(u, o)),
                      o < a && ge((e = e.slice(o))),
                      o < a && de(e)
                    );
                  }
                  p.push(r);
                }
              return pe(p);
            }
            function ye(e, i) {
              var r,
                o = [],
                a = [],
                s = S[e + " "];
              if (!s) {
                for (i || (i = le(e)), r = i.length; r--; )
                  (s = ge(i[r]))[y] ? o.push(s) : a.push(s);
                (s = S(
                  e,
                  (function (e, i) {
                    var r = i.length > 0,
                      o = e.length > 0,
                      a = function (a, s, u, l, f) {
                        var p,
                          h,
                          g,
                          y = 0,
                          b = "0",
                          x = a && [],
                          w = [],
                          S = n,
                          E = a || (o && t.find.TAG("*", f)),
                          T = (v += null == S ? 1 : Math.random() || 0.1),
                          _ = E.length;
                        for (
                          f && (n = s == c || s || f);
                          b !== _ && null != (p = E[b]);
                          b++
                        ) {
                          if (o && p) {
                            for (
                              h = 0,
                                s || p.ownerDocument == c || (ce(p), (u = !d));
                              (g = e[h++]);

                            )
                              if (g(p, s || c, u)) {
                                m.call(l, p);
                                break;
                              }
                            f && (v = T);
                          }
                          r && ((p = !g && p) && y--, a && x.push(p));
                        }
                        if (((y += b), r && b !== y)) {
                          for (h = 0; (g = i[h++]); ) g(x, w, s, u);
                          if (a) {
                            if (y > 0)
                              for (; b--; ) x[b] || w[b] || (w[b] = L.call(l));
                            w = he(w);
                          }
                          m.apply(l, w),
                            f &&
                              !a &&
                              w.length > 0 &&
                              y + i.length > 1 &&
                              C.uniqueSort(l);
                        }
                        return f && ((v = T), (n = S)), x;
                      };
                    return r ? te(a) : a;
                  })(a, o)
                )),
                  (s.selector = e);
              }
              return s;
            }
            function ve(e, n, i, r) {
              var o,
                a,
                s,
                c,
                u,
                l = "function" == typeof e && e,
                f = !r && le((e = l.selector || e));
              if (((i = i || []), 1 === f.length)) {
                if (
                  (a = f[0] = f[0].slice(0)).length > 2 &&
                  "ID" === (s = a[0]).type &&
                  9 === n.nodeType &&
                  d &&
                  t.relative[a[1].type]
                ) {
                  if (
                    !(n = (t.find.ID(s.matches[0].replace(V, Q), n) || [])[0])
                  )
                    return i;
                  l && (n = n.parentNode),
                    (e = e.slice(a.shift().value.length));
                }
                for (
                  o = F.needsContext.test(e) ? 0 : a.length;
                  o-- && ((s = a[o]), !t.relative[(c = s.type)]);

                )
                  if (
                    (u = t.find[c]) &&
                    (r = u(
                      s.matches[0].replace(V, Q),
                      (X.test(a[0].type) && se(n.parentNode)) || n
                    ))
                  ) {
                    if ((a.splice(o, 1), !(e = r.length && de(a))))
                      return m.apply(i, r), i;
                    break;
                  }
              }
              return (
                (l || ye(e, f))(
                  r,
                  n,
                  !d,
                  i,
                  !n || (X.test(e) && se(n.parentNode)) || n
                ),
                i
              );
            }
            (ue.prototype = t.filters = t.pseudos),
              (t.setFilters = new ue()),
              (g.sortStable = y.split("").sort(T).join("") === y),
              ce(),
              (g.sortDetached = ne(function (e) {
                return (
                  1 & e.compareDocumentPosition(c.createElement("fieldset"))
                );
              })),
              (C.find = Z),
              (C.expr[":"] = C.expr.pseudos),
              (C.unique = C.uniqueSort),
              (Z.compile = ye),
              (Z.select = ve),
              (Z.setDocument = ce),
              (Z.tokenize = le),
              (Z.escape = C.escapeSelector),
              (Z.getText = C.text),
              (Z.isXML = C.isXMLDoc),
              (Z.selectors = C.expr),
              (Z.support = C.support),
              (Z.uniqueSort = C.uniqueSort);
          })();
          var M = function (e, t, n) {
              for (
                var i = [], r = void 0 !== n;
                (e = e[t]) && 9 !== e.nodeType;

              )
                if (1 === e.nodeType) {
                  if (r && C(e).is(n)) break;
                  i.push(e);
                }
              return i;
            },
            P = function (e, t) {
              for (var n = []; e; e = e.nextSibling)
                1 === e.nodeType && e !== t && n.push(e);
              return n;
            },
            R = C.expr.match.needsContext,
            W =
              /^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i;
          function z(e, t, n) {
            return y(t)
              ? C.grep(e, function (e, i) {
                  return !!t.call(e, i, e) !== n;
                })
              : t.nodeType
              ? C.grep(e, function (e) {
                  return (e === t) !== n;
                })
              : "string" != typeof t
              ? C.grep(e, function (e) {
                  return l.call(t, e) > -1 !== n;
                })
              : C.filter(t, e, n);
          }
          (C.filter = function (e, t, n) {
            var i = t[0];
            return (
              n && (e = ":not(" + e + ")"),
              1 === t.length && 1 === i.nodeType
                ? C.find.matchesSelector(i, e)
                  ? [i]
                  : []
                : C.find.matches(
                    e,
                    C.grep(t, function (e) {
                      return 1 === e.nodeType;
                    })
                  )
            );
          }),
            C.fn.extend({
              find: function (e) {
                var t,
                  n,
                  i = this.length,
                  r = this;
                if ("string" != typeof e)
                  return this.pushStack(
                    C(e).filter(function () {
                      for (t = 0; t < i; t++)
                        if (C.contains(r[t], this)) return !0;
                    })
                  );
                for (n = this.pushStack([]), t = 0; t < i; t++)
                  C.find(e, r[t], n);
                return i > 1 ? C.uniqueSort(n) : n;
              },
              filter: function (e) {
                return this.pushStack(z(this, e || [], !1));
              },
              not: function (e) {
                return this.pushStack(z(this, e || [], !0));
              },
              is: function (e) {
                return !!z(
                  this,
                  "string" == typeof e && R.test(e) ? C(e) : e || [],
                  !1
                ).length;
              },
            });
          var B,
            $ = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/;
          ((C.fn.init = function (e, t, n) {
            var i, r;
            if (!e) return this;
            if (((n = n || B), "string" == typeof e)) {
              if (
                !(i =
                  "<" === e[0] && ">" === e[e.length - 1] && e.length >= 3
                    ? [null, e, null]
                    : $.exec(e)) ||
                (!i[1] && t)
              )
                return !t || t.jquery
                  ? (t || n).find(e)
                  : this.constructor(t).find(e);
              if (i[1]) {
                if (
                  ((t = t instanceof C ? t[0] : t),
                  C.merge(
                    this,
                    C.parseHTML(
                      i[1],
                      t && t.nodeType ? t.ownerDocument || t : b,
                      !0
                    )
                  ),
                  W.test(i[1]) && C.isPlainObject(t))
                )
                  for (i in t) y(this[i]) ? this[i](t[i]) : this.attr(i, t[i]);
                return this;
              }
              return (
                (r = b.getElementById(i[2])) &&
                  ((this[0] = r), (this.length = 1)),
                this
              );
            }
            return e.nodeType
              ? ((this[0] = e), (this.length = 1), this)
              : y(e)
              ? void 0 !== n.ready
                ? n.ready(e)
                : e(C)
              : C.makeArray(e, this);
          }).prototype = C.fn),
            (B = C(b));
          var F = /^(?:parents|prev(?:Until|All))/,
            G = { children: !0, contents: !0, next: !0, prev: !0 };
          function Y(e, t) {
            for (; (e = e[t]) && 1 !== e.nodeType; );
            return e;
          }
          C.fn.extend({
            has: function (e) {
              var t = C(e, this),
                n = t.length;
              return this.filter(function () {
                for (var e = 0; e < n; e++)
                  if (C.contains(this, t[e])) return !0;
              });
            },
            closest: function (e, t) {
              var n,
                i = 0,
                r = this.length,
                o = [],
                a = "string" != typeof e && C(e);
              if (!R.test(e))
                for (; i < r; i++)
                  for (n = this[i]; n && n !== t; n = n.parentNode)
                    if (
                      n.nodeType < 11 &&
                      (a
                        ? a.index(n) > -1
                        : 1 === n.nodeType && C.find.matchesSelector(n, e))
                    ) {
                      o.push(n);
                      break;
                    }
              return this.pushStack(o.length > 1 ? C.uniqueSort(o) : o);
            },
            index: function (e) {
              return e
                ? "string" == typeof e
                  ? l.call(C(e), this[0])
                  : l.call(this, e.jquery ? e[0] : e)
                : this[0] && this[0].parentNode
                ? this.first().prevAll().length
                : -1;
            },
            add: function (e, t) {
              return this.pushStack(C.uniqueSort(C.merge(this.get(), C(e, t))));
            },
            addBack: function (e) {
              return this.add(
                null == e ? this.prevObject : this.prevObject.filter(e)
              );
            },
          }),
            C.each(
              {
                parent: function (e) {
                  var t = e.parentNode;
                  return t && 11 !== t.nodeType ? t : null;
                },
                parents: function (e) {
                  return M(e, "parentNode");
                },
                parentsUntil: function (e, t, n) {
                  return M(e, "parentNode", n);
                },
                next: function (e) {
                  return Y(e, "nextSibling");
                },
                prev: function (e) {
                  return Y(e, "previousSibling");
                },
                nextAll: function (e) {
                  return M(e, "nextSibling");
                },
                prevAll: function (e) {
                  return M(e, "previousSibling");
                },
                nextUntil: function (e, t, n) {
                  return M(e, "nextSibling", n);
                },
                prevUntil: function (e, t, n) {
                  return M(e, "previousSibling", n);
                },
                siblings: function (e) {
                  return P((e.parentNode || {}).firstChild, e);
                },
                children: function (e) {
                  return P(e.firstChild);
                },
                contents: function (e) {
                  return null != e.contentDocument && a(e.contentDocument)
                    ? e.contentDocument
                    : (k(e, "template") && (e = e.content || e),
                      C.merge([], e.childNodes));
                },
              },
              function (e, t) {
                C.fn[e] = function (n, i) {
                  var r = C.map(this, t, n);
                  return (
                    "Until" !== e.slice(-5) && (i = n),
                    i && "string" == typeof i && (r = C.filter(i, r)),
                    this.length > 1 &&
                      (G[e] || C.uniqueSort(r), F.test(e) && r.reverse()),
                    this.pushStack(r)
                  );
                };
              }
            );
          var U = /[^\x20\t\r\n\f]+/g;
          function X(e) {
            return e;
          }
          function V(e) {
            throw e;
          }
          function Q(e, t, n, i) {
            var r;
            try {
              e && y((r = e.promise))
                ? r.call(e).done(t).fail(n)
                : e && y((r = e.then))
                ? r.call(e, t, n)
                : t.apply(void 0, [e].slice(i));
            } catch (e) {
              n.apply(void 0, [e]);
            }
          }
          (C.Callbacks = function (e) {
            e =
              "string" == typeof e
                ? (function (e) {
                    var t = {};
                    return (
                      C.each(e.match(U) || [], function (e, n) {
                        t[n] = !0;
                      }),
                      t
                    );
                  })(e)
                : C.extend({}, e);
            var t,
              n,
              i,
              r,
              o = [],
              a = [],
              s = -1,
              c = function () {
                for (r = r || e.once, i = t = !0; a.length; s = -1)
                  for (n = a.shift(); ++s < o.length; )
                    !1 === o[s].apply(n[0], n[1]) &&
                      e.stopOnFalse &&
                      ((s = o.length), (n = !1));
                e.memory || (n = !1), (t = !1), r && (o = n ? [] : "");
              },
              u = {
                add: function () {
                  return (
                    o &&
                      (n && !t && ((s = o.length - 1), a.push(n)),
                      (function t(n) {
                        C.each(n, function (n, i) {
                          y(i)
                            ? (e.unique && u.has(i)) || o.push(i)
                            : i && i.length && "string" !== S(i) && t(i);
                        });
                      })(arguments),
                      n && !t && c()),
                    this
                  );
                },
                remove: function () {
                  return (
                    C.each(arguments, function (e, t) {
                      for (var n; (n = C.inArray(t, o, n)) > -1; )
                        o.splice(n, 1), n <= s && s--;
                    }),
                    this
                  );
                },
                has: function (e) {
                  return e ? C.inArray(e, o) > -1 : o.length > 0;
                },
                empty: function () {
                  return o && (o = []), this;
                },
                disable: function () {
                  return (r = a = []), (o = n = ""), this;
                },
                disabled: function () {
                  return !o;
                },
                lock: function () {
                  return (r = a = []), n || t || (o = n = ""), this;
                },
                locked: function () {
                  return !!r;
                },
                fireWith: function (e, n) {
                  return (
                    r ||
                      ((n = [e, (n = n || []).slice ? n.slice() : n]),
                      a.push(n),
                      t || c()),
                    this
                  );
                },
                fire: function () {
                  return u.fireWith(this, arguments), this;
                },
                fired: function () {
                  return !!i;
                },
              };
            return u;
          }),
            C.extend({
              Deferred: function (e) {
                var t = [
                    [
                      "notify",
                      "progress",
                      C.Callbacks("memory"),
                      C.Callbacks("memory"),
                      2,
                    ],
                    [
                      "resolve",
                      "done",
                      C.Callbacks("once memory"),
                      C.Callbacks("once memory"),
                      0,
                      "resolved",
                    ],
                    [
                      "reject",
                      "fail",
                      C.Callbacks("once memory"),
                      C.Callbacks("once memory"),
                      1,
                      "rejected",
                    ],
                  ],
                  n = "pending",
                  r = {
                    state: function () {
                      return n;
                    },
                    always: function () {
                      return o.done(arguments).fail(arguments), this;
                    },
                    catch: function (e) {
                      return r.then(null, e);
                    },
                    pipe: function () {
                      var e = arguments;
                      return C.Deferred(function (n) {
                        C.each(t, function (t, i) {
                          var r = y(e[i[4]]) && e[i[4]];
                          o[i[1]](function () {
                            var e = r && r.apply(this, arguments);
                            e && y(e.promise)
                              ? e
                                  .promise()
                                  .progress(n.notify)
                                  .done(n.resolve)
                                  .fail(n.reject)
                              : n[i[0] + "With"](this, r ? [e] : arguments);
                          });
                        }),
                          (e = null);
                      }).promise();
                    },
                    then: function (e, n, r) {
                      var o = 0;
                      function a(e, t, n, r) {
                        return function () {
                          var s = this,
                            c = arguments,
                            u = function () {
                              var i, u;
                              if (!(e < o)) {
                                if ((i = n.apply(s, c)) === t.promise())
                                  throw new TypeError(
                                    "Thenable self-resolution"
                                  );
                                (u =
                                  i &&
                                  ("object" == typeof i ||
                                    "function" == typeof i) &&
                                  i.then),
                                  y(u)
                                    ? r
                                      ? u.call(i, a(o, t, X, r), a(o, t, V, r))
                                      : (o++,
                                        u.call(
                                          i,
                                          a(o, t, X, r),
                                          a(o, t, V, r),
                                          a(o, t, X, t.notifyWith)
                                        ))
                                    : (n !== X && ((s = void 0), (c = [i])),
                                      (r || t.resolveWith)(s, c));
                              }
                            },
                            l = r
                              ? u
                              : function () {
                                  try {
                                    u();
                                  } catch (i) {
                                    C.Deferred.exceptionHook &&
                                      C.Deferred.exceptionHook(i, l.error),
                                      e + 1 >= o &&
                                        (n !== V && ((s = void 0), (c = [i])),
                                        t.rejectWith(s, c));
                                  }
                                };
                          e
                            ? l()
                            : (C.Deferred.getErrorHook
                                ? (l.error = C.Deferred.getErrorHook())
                                : C.Deferred.getStackHook &&
                                  (l.error = C.Deferred.getStackHook()),
                              i.setTimeout(l));
                        };
                      }
                      return C.Deferred(function (i) {
                        t[0][3].add(a(0, i, y(r) ? r : X, i.notifyWith)),
                          t[1][3].add(a(0, i, y(e) ? e : X)),
                          t[2][3].add(a(0, i, y(n) ? n : V));
                      }).promise();
                    },
                    promise: function (e) {
                      return null != e ? C.extend(e, r) : r;
                    },
                  },
                  o = {};
                return (
                  C.each(t, function (e, i) {
                    var a = i[2],
                      s = i[5];
                    (r[i[1]] = a.add),
                      s &&
                        a.add(
                          function () {
                            n = s;
                          },
                          t[3 - e][2].disable,
                          t[3 - e][3].disable,
                          t[0][2].lock,
                          t[0][3].lock
                        ),
                      a.add(i[3].fire),
                      (o[i[0]] = function () {
                        return (
                          o[i[0] + "With"](
                            this === o ? void 0 : this,
                            arguments
                          ),
                          this
                        );
                      }),
                      (o[i[0] + "With"] = a.fireWith);
                  }),
                  r.promise(o),
                  e && e.call(o, o),
                  o
                );
              },
              when: function (e) {
                var t = arguments.length,
                  n = t,
                  i = Array(n),
                  r = s.call(arguments),
                  o = C.Deferred(),
                  a = function (e) {
                    return function (n) {
                      (i[e] = this),
                        (r[e] = arguments.length > 1 ? s.call(arguments) : n),
                        --t || o.resolveWith(i, r);
                    };
                  };
                if (
                  t <= 1 &&
                  (Q(e, o.done(a(n)).resolve, o.reject, !t),
                  "pending" === o.state() || y(r[n] && r[n].then))
                )
                  return o.then();
                for (; n--; ) Q(r[n], a(n), o.reject);
                return o.promise();
              },
            });
          var K = /^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;
          (C.Deferred.exceptionHook = function (e, t) {
            i.console &&
              i.console.warn &&
              e &&
              K.test(e.name) &&
              i.console.warn(
                "jQuery.Deferred exception: " + e.message,
                e.stack,
                t
              );
          }),
            (C.readyException = function (e) {
              i.setTimeout(function () {
                throw e;
              });
            });
          var J = C.Deferred();
          function Z() {
            b.removeEventListener("DOMContentLoaded", Z),
              i.removeEventListener("load", Z),
              C.ready();
          }
          (C.fn.ready = function (e) {
            return (
              J.then(e).catch(function (e) {
                C.readyException(e);
              }),
              this
            );
          }),
            C.extend({
              isReady: !1,
              readyWait: 1,
              ready: function (e) {
                (!0 === e ? --C.readyWait : C.isReady) ||
                  ((C.isReady = !0),
                  (!0 !== e && --C.readyWait > 0) || J.resolveWith(b, [C]));
              },
            }),
            (C.ready.then = J.then),
            "complete" === b.readyState ||
            ("loading" !== b.readyState && !b.documentElement.doScroll)
              ? i.setTimeout(C.ready)
              : (b.addEventListener("DOMContentLoaded", Z),
                i.addEventListener("load", Z));
          var ee = function (e, t, n, i, r, o, a) {
              var s = 0,
                c = e.length,
                u = null == n;
              if ("object" === S(n))
                for (s in ((r = !0), n)) ee(e, t, s, n[s], !0, o, a);
              else if (
                void 0 !== i &&
                ((r = !0),
                y(i) || (a = !0),
                u &&
                  (a
                    ? (t.call(e, i), (t = null))
                    : ((u = t),
                      (t = function (e, t, n) {
                        return u.call(C(e), n);
                      }))),
                t)
              )
                for (; s < c; s++)
                  t(e[s], n, a ? i : i.call(e[s], s, t(e[s], n)));
              return r ? e : u ? t.call(e) : c ? t(e[0], n) : o;
            },
            te = /^-ms-/,
            ne = /-([a-z])/g;
          function ie(e, t) {
            return t.toUpperCase();
          }
          function re(e) {
            return e.replace(te, "ms-").replace(ne, ie);
          }
          var oe = function (e) {
            return 1 === e.nodeType || 9 === e.nodeType || !+e.nodeType;
          };
          function ae() {
            this.expando = C.expando + ae.uid++;
          }
          (ae.uid = 1),
            (ae.prototype = {
              cache: function (e) {
                var t = e[this.expando];
                return (
                  t ||
                    ((t = {}),
                    oe(e) &&
                      (e.nodeType
                        ? (e[this.expando] = t)
                        : Object.defineProperty(e, this.expando, {
                            value: t,
                            configurable: !0,
                          }))),
                  t
                );
              },
              set: function (e, t, n) {
                var i,
                  r = this.cache(e);
                if ("string" == typeof t) r[re(t)] = n;
                else for (i in t) r[re(i)] = t[i];
                return r;
              },
              get: function (e, t) {
                return void 0 === t
                  ? this.cache(e)
                  : e[this.expando] && e[this.expando][re(t)];
              },
              access: function (e, t, n) {
                return void 0 === t ||
                  (t && "string" == typeof t && void 0 === n)
                  ? this.get(e, t)
                  : (this.set(e, t, n), void 0 !== n ? n : t);
              },
              remove: function (e, t) {
                var n,
                  i = e[this.expando];
                if (void 0 !== i) {
                  if (void 0 !== t) {
                    n = (t = Array.isArray(t)
                      ? t.map(re)
                      : (t = re(t)) in i
                      ? [t]
                      : t.match(U) || []).length;
                    for (; n--; ) delete i[t[n]];
                  }
                  (void 0 === t || C.isEmptyObject(i)) &&
                    (e.nodeType
                      ? (e[this.expando] = void 0)
                      : delete e[this.expando]);
                }
              },
              hasData: function (e) {
                var t = e[this.expando];
                return void 0 !== t && !C.isEmptyObject(t);
              },
            });
          var se = new ae(),
            ce = new ae(),
            ue = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
            le = /[A-Z]/g;
          function de(e, t, n) {
            var i;
            if (void 0 === n && 1 === e.nodeType)
              if (
                ((i = "data-" + t.replace(le, "-$&").toLowerCase()),
                "string" == typeof (n = e.getAttribute(i)))
              ) {
                try {
                  n = (function (e) {
                    return (
                      "true" === e ||
                      ("false" !== e &&
                        ("null" === e
                          ? null
                          : e === +e + ""
                          ? +e
                          : ue.test(e)
                          ? JSON.parse(e)
                          : e))
                    );
                  })(n);
                } catch (e) {}
                ce.set(e, t, n);
              } else n = void 0;
            return n;
          }
          C.extend({
            hasData: function (e) {
              return ce.hasData(e) || se.hasData(e);
            },
            data: function (e, t, n) {
              return ce.access(e, t, n);
            },
            removeData: function (e, t) {
              ce.remove(e, t);
            },
            _data: function (e, t, n) {
              return se.access(e, t, n);
            },
            _removeData: function (e, t) {
              se.remove(e, t);
            },
          }),
            C.fn.extend({
              data: function (e, t) {
                var n,
                  i,
                  r,
                  o = this[0],
                  a = o && o.attributes;
                if (void 0 === e) {
                  if (
                    this.length &&
                    ((r = ce.get(o)),
                    1 === o.nodeType && !se.get(o, "hasDataAttrs"))
                  ) {
                    for (n = a.length; n--; )
                      a[n] &&
                        0 === (i = a[n].name).indexOf("data-") &&
                        ((i = re(i.slice(5))), de(o, i, r[i]));
                    se.set(o, "hasDataAttrs", !0);
                  }
                  return r;
                }
                return "object" == typeof e
                  ? this.each(function () {
                      ce.set(this, e);
                    })
                  : ee(
                      this,
                      function (t) {
                        var n;
                        if (o && void 0 === t)
                          return void 0 !== (n = ce.get(o, e)) ||
                            void 0 !== (n = de(o, e))
                            ? n
                            : void 0;
                        this.each(function () {
                          ce.set(this, e, t);
                        });
                      },
                      null,
                      t,
                      arguments.length > 1,
                      null,
                      !0
                    );
              },
              removeData: function (e) {
                return this.each(function () {
                  ce.remove(this, e);
                });
              },
            }),
            C.extend({
              queue: function (e, t, n) {
                var i;
                if (e)
                  return (
                    (t = (t || "fx") + "queue"),
                    (i = se.get(e, t)),
                    n &&
                      (!i || Array.isArray(n)
                        ? (i = se.access(e, t, C.makeArray(n)))
                        : i.push(n)),
                    i || []
                  );
              },
              dequeue: function (e, t) {
                t = t || "fx";
                var n = C.queue(e, t),
                  i = n.length,
                  r = n.shift(),
                  o = C._queueHooks(e, t);
                "inprogress" === r && ((r = n.shift()), i--),
                  r &&
                    ("fx" === t && n.unshift("inprogress"),
                    delete o.stop,
                    r.call(
                      e,
                      function () {
                        C.dequeue(e, t);
                      },
                      o
                    )),
                  !i && o && o.empty.fire();
              },
              _queueHooks: function (e, t) {
                var n = t + "queueHooks";
                return (
                  se.get(e, n) ||
                  se.access(e, n, {
                    empty: C.Callbacks("once memory").add(function () {
                      se.remove(e, [t + "queue", n]);
                    }),
                  })
                );
              },
            }),
            C.fn.extend({
              queue: function (e, t) {
                var n = 2;
                return (
                  "string" != typeof e && ((t = e), (e = "fx"), n--),
                  arguments.length < n
                    ? C.queue(this[0], e)
                    : void 0 === t
                    ? this
                    : this.each(function () {
                        var n = C.queue(this, e, t);
                        C._queueHooks(this, e),
                          "fx" === e &&
                            "inprogress" !== n[0] &&
                            C.dequeue(this, e);
                      })
                );
              },
              dequeue: function (e) {
                return this.each(function () {
                  C.dequeue(this, e);
                });
              },
              clearQueue: function (e) {
                return this.queue(e || "fx", []);
              },
              promise: function (e, t) {
                var n,
                  i = 1,
                  r = C.Deferred(),
                  o = this,
                  a = this.length,
                  s = function () {
                    --i || r.resolveWith(o, [o]);
                  };
                for (
                  "string" != typeof e && ((t = e), (e = void 0)),
                    e = e || "fx";
                  a--;

                )
                  (n = se.get(o[a], e + "queueHooks")) &&
                    n.empty &&
                    (i++, n.empty.add(s));
                return s(), r.promise(t);
              },
            });
          var fe = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
            pe = new RegExp("^(?:([+-])=|)(" + fe + ")([a-z%]*)$", "i"),
            he = ["Top", "Right", "Bottom", "Left"],
            me = b.documentElement,
            ge = function (e) {
              return C.contains(e.ownerDocument, e);
            },
            ye = { composed: !0 };
          me.getRootNode &&
            (ge = function (e) {
              return (
                C.contains(e.ownerDocument, e) ||
                e.getRootNode(ye) === e.ownerDocument
              );
            });
          var ve = function (e, t) {
            return (
              "none" === (e = t || e).style.display ||
              ("" === e.style.display &&
                ge(e) &&
                "none" === C.css(e, "display"))
            );
          };
          function be(e, t, n, i) {
            var r,
              o,
              a = 20,
              s = i
                ? function () {
                    return i.cur();
                  }
                : function () {
                    return C.css(e, t, "");
                  },
              c = s(),
              u = (n && n[3]) || (C.cssNumber[t] ? "" : "px"),
              l =
                e.nodeType &&
                (C.cssNumber[t] || ("px" !== u && +c)) &&
                pe.exec(C.css(e, t));
            if (l && l[3] !== u) {
              for (c /= 2, u = u || l[3], l = +c || 1; a--; )
                C.style(e, t, l + u),
                  (1 - o) * (1 - (o = s() / c || 0.5)) <= 0 && (a = 0),
                  (l /= o);
              (l *= 2), C.style(e, t, l + u), (n = n || []);
            }
            return (
              n &&
                ((l = +l || +c || 0),
                (r = n[1] ? l + (n[1] + 1) * n[2] : +n[2]),
                i && ((i.unit = u), (i.start = l), (i.end = r))),
              r
            );
          }
          var xe = {};
          function we(e) {
            var t,
              n = e.ownerDocument,
              i = e.nodeName,
              r = xe[i];
            return (
              r ||
              ((t = n.body.appendChild(n.createElement(i))),
              (r = C.css(t, "display")),
              t.parentNode.removeChild(t),
              "none" === r && (r = "block"),
              (xe[i] = r),
              r)
            );
          }
          function Se(e, t) {
            for (var n, i, r = [], o = 0, a = e.length; o < a; o++)
              (i = e[o]).style &&
                ((n = i.style.display),
                t
                  ? ("none" === n &&
                      ((r[o] = se.get(i, "display") || null),
                      r[o] || (i.style.display = "")),
                    "" === i.style.display && ve(i) && (r[o] = we(i)))
                  : "none" !== n && ((r[o] = "none"), se.set(i, "display", n)));
            for (o = 0; o < a; o++) null != r[o] && (e[o].style.display = r[o]);
            return e;
          }
          C.fn.extend({
            show: function () {
              return Se(this, !0);
            },
            hide: function () {
              return Se(this);
            },
            toggle: function (e) {
              return "boolean" == typeof e
                ? e
                  ? this.show()
                  : this.hide()
                : this.each(function () {
                    ve(this) ? C(this).show() : C(this).hide();
                  });
            },
          });
          var Ee,
            Te,
            Ce = /^(?:checkbox|radio)$/i,
            _e = /<([a-z][^\/\0>\x20\t\r\n\f]*)/i,
            ke = /^$|^module$|\/(?:java|ecma)script/i;
          (Ee = b.createDocumentFragment().appendChild(b.createElement("div"))),
            (Te = b.createElement("input")).setAttribute("type", "radio"),
            Te.setAttribute("checked", "checked"),
            Te.setAttribute("name", "t"),
            Ee.appendChild(Te),
            (g.checkClone = Ee.cloneNode(!0).cloneNode(!0).lastChild.checked),
            (Ee.innerHTML = "<textarea>x</textarea>"),
            (g.noCloneChecked = !!Ee.cloneNode(!0).lastChild.defaultValue),
            (Ee.innerHTML = "<option></option>"),
            (g.option = !!Ee.lastChild);
          var Le = {
            thead: [1, "<table>", "</table>"],
            col: [2, "<table><colgroup>", "</colgroup></table>"],
            tr: [2, "<table><tbody>", "</tbody></table>"],
            td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
            _default: [0, "", ""],
          };
          function qe(e, t) {
            var n;
            return (
              (n =
                void 0 !== e.getElementsByTagName
                  ? e.getElementsByTagName(t || "*")
                  : void 0 !== e.querySelectorAll
                  ? e.querySelectorAll(t || "*")
                  : []),
              void 0 === t || (t && k(e, t)) ? C.merge([e], n) : n
            );
          }
          function Ae(e, t) {
            for (var n = 0, i = e.length; n < i; n++)
              se.set(e[n], "globalEval", !t || se.get(t[n], "globalEval"));
          }
          (Le.tbody = Le.tfoot = Le.colgroup = Le.caption = Le.thead),
            (Le.th = Le.td),
            g.option ||
              (Le.optgroup = Le.option =
                [1, "<select multiple='multiple'>", "</select>"]);
          var De = /<|&#?\w+;/;
          function je(e, t, n, i, r) {
            for (
              var o,
                a,
                s,
                c,
                u,
                l,
                d = t.createDocumentFragment(),
                f = [],
                p = 0,
                h = e.length;
              p < h;
              p++
            )
              if ((o = e[p]) || 0 === o)
                if ("object" === S(o)) C.merge(f, o.nodeType ? [o] : o);
                else if (De.test(o)) {
                  for (
                    a = a || d.appendChild(t.createElement("div")),
                      s = (_e.exec(o) || ["", ""])[1].toLowerCase(),
                      c = Le[s] || Le._default,
                      a.innerHTML = c[1] + C.htmlPrefilter(o) + c[2],
                      l = c[0];
                    l--;

                  )
                    a = a.lastChild;
                  C.merge(f, a.childNodes),
                    ((a = d.firstChild).textContent = "");
                } else f.push(t.createTextNode(o));
            for (d.textContent = "", p = 0; (o = f[p++]); )
              if (i && C.inArray(o, i) > -1) r && r.push(o);
              else if (
                ((u = ge(o)),
                (a = qe(d.appendChild(o), "script")),
                u && Ae(a),
                n)
              )
                for (l = 0; (o = a[l++]); ) ke.test(o.type || "") && n.push(o);
            return d;
          }
          var Oe = /^([^.]*)(?:\.(.+)|)/;
          function Ne() {
            return !0;
          }
          function He() {
            return !1;
          }
          function Ie(e, t, n, i, r, o) {
            var a, s;
            if ("object" == typeof t) {
              for (s in ("string" != typeof n && ((i = i || n), (n = void 0)),
              t))
                Ie(e, s, n, i, t[s], o);
              return e;
            }
            if (
              (null == i && null == r
                ? ((r = n), (i = n = void 0))
                : null == r &&
                  ("string" == typeof n
                    ? ((r = i), (i = void 0))
                    : ((r = i), (i = n), (n = void 0))),
              !1 === r)
            )
              r = He;
            else if (!r) return e;
            return (
              1 === o &&
                ((a = r),
                (r = function (e) {
                  return C().off(e), a.apply(this, arguments);
                }),
                (r.guid = a.guid || (a.guid = C.guid++))),
              e.each(function () {
                C.event.add(this, t, r, i, n);
              })
            );
          }
          function Me(e, t, n) {
            n
              ? (se.set(e, t, !1),
                C.event.add(e, t, {
                  namespace: !1,
                  handler: function (e) {
                    var n,
                      i = se.get(this, t);
                    if (1 & e.isTrigger && this[t]) {
                      if (i)
                        (C.event.special[t] || {}).delegateType &&
                          e.stopPropagation();
                      else if (
                        ((i = s.call(arguments)),
                        se.set(this, t, i),
                        this[t](),
                        (n = se.get(this, t)),
                        se.set(this, t, !1),
                        i !== n)
                      )
                        return (
                          e.stopImmediatePropagation(), e.preventDefault(), n
                        );
                    } else
                      i &&
                        (se.set(
                          this,
                          t,
                          C.event.trigger(i[0], i.slice(1), this)
                        ),
                        e.stopPropagation(),
                        (e.isImmediatePropagationStopped = Ne));
                  },
                }))
              : void 0 === se.get(e, t) && C.event.add(e, t, Ne);
          }
          (C.event = {
            global: {},
            add: function (e, t, n, i, r) {
              var o,
                a,
                s,
                c,
                u,
                l,
                d,
                f,
                p,
                h,
                m,
                g = se.get(e);
              if (oe(e))
                for (
                  n.handler && ((n = (o = n).handler), (r = o.selector)),
                    r && C.find.matchesSelector(me, r),
                    n.guid || (n.guid = C.guid++),
                    (c = g.events) || (c = g.events = Object.create(null)),
                    (a = g.handle) ||
                      (a = g.handle =
                        function (t) {
                          return void 0 !== C && C.event.triggered !== t.type
                            ? C.event.dispatch.apply(e, arguments)
                            : void 0;
                        }),
                    u = (t = (t || "").match(U) || [""]).length;
                  u--;

                )
                  (p = m = (s = Oe.exec(t[u]) || [])[1]),
                    (h = (s[2] || "").split(".").sort()),
                    p &&
                      ((d = C.event.special[p] || {}),
                      (p = (r ? d.delegateType : d.bindType) || p),
                      (d = C.event.special[p] || {}),
                      (l = C.extend(
                        {
                          type: p,
                          origType: m,
                          data: i,
                          handler: n,
                          guid: n.guid,
                          selector: r,
                          needsContext: r && C.expr.match.needsContext.test(r),
                          namespace: h.join("."),
                        },
                        o
                      )),
                      (f = c[p]) ||
                        (((f = c[p] = []).delegateCount = 0),
                        (d.setup && !1 !== d.setup.call(e, i, h, a)) ||
                          (e.addEventListener && e.addEventListener(p, a))),
                      d.add &&
                        (d.add.call(e, l),
                        l.handler.guid || (l.handler.guid = n.guid)),
                      r ? f.splice(f.delegateCount++, 0, l) : f.push(l),
                      (C.event.global[p] = !0));
            },
            remove: function (e, t, n, i, r) {
              var o,
                a,
                s,
                c,
                u,
                l,
                d,
                f,
                p,
                h,
                m,
                g = se.hasData(e) && se.get(e);
              if (g && (c = g.events)) {
                for (u = (t = (t || "").match(U) || [""]).length; u--; )
                  if (
                    ((p = m = (s = Oe.exec(t[u]) || [])[1]),
                    (h = (s[2] || "").split(".").sort()),
                    p)
                  ) {
                    for (
                      d = C.event.special[p] || {},
                        f =
                          c[(p = (i ? d.delegateType : d.bindType) || p)] || [],
                        s =
                          s[2] &&
                          new RegExp(
                            "(^|\\.)" + h.join("\\.(?:.*\\.|)") + "(\\.|$)"
                          ),
                        a = o = f.length;
                      o--;

                    )
                      (l = f[o]),
                        (!r && m !== l.origType) ||
                          (n && n.guid !== l.guid) ||
                          (s && !s.test(l.namespace)) ||
                          (i &&
                            i !== l.selector &&
                            ("**" !== i || !l.selector)) ||
                          (f.splice(o, 1),
                          l.selector && f.delegateCount--,
                          d.remove && d.remove.call(e, l));
                    a &&
                      !f.length &&
                      ((d.teardown && !1 !== d.teardown.call(e, h, g.handle)) ||
                        C.removeEvent(e, p, g.handle),
                      delete c[p]);
                  } else for (p in c) C.event.remove(e, p + t[u], n, i, !0);
                C.isEmptyObject(c) && se.remove(e, "handle events");
              }
            },
            dispatch: function (e) {
              var t,
                n,
                i,
                r,
                o,
                a,
                s = new Array(arguments.length),
                c = C.event.fix(e),
                u =
                  (se.get(this, "events") || Object.create(null))[c.type] || [],
                l = C.event.special[c.type] || {};
              for (s[0] = c, t = 1; t < arguments.length; t++)
                s[t] = arguments[t];
              if (
                ((c.delegateTarget = this),
                !l.preDispatch || !1 !== l.preDispatch.call(this, c))
              ) {
                for (
                  a = C.event.handlers.call(this, c, u), t = 0;
                  (r = a[t++]) && !c.isPropagationStopped();

                )
                  for (
                    c.currentTarget = r.elem, n = 0;
                    (o = r.handlers[n++]) && !c.isImmediatePropagationStopped();

                  )
                    (c.rnamespace &&
                      !1 !== o.namespace &&
                      !c.rnamespace.test(o.namespace)) ||
                      ((c.handleObj = o),
                      (c.data = o.data),
                      void 0 !==
                        (i = (
                          (C.event.special[o.origType] || {}).handle ||
                          o.handler
                        ).apply(r.elem, s)) &&
                        !1 === (c.result = i) &&
                        (c.preventDefault(), c.stopPropagation()));
                return l.postDispatch && l.postDispatch.call(this, c), c.result;
              }
            },
            handlers: function (e, t) {
              var n,
                i,
                r,
                o,
                a,
                s = [],
                c = t.delegateCount,
                u = e.target;
              if (c && u.nodeType && !("click" === e.type && e.button >= 1))
                for (; u !== this; u = u.parentNode || this)
                  if (
                    1 === u.nodeType &&
                    ("click" !== e.type || !0 !== u.disabled)
                  ) {
                    for (o = [], a = {}, n = 0; n < c; n++)
                      void 0 === a[(r = (i = t[n]).selector + " ")] &&
                        (a[r] = i.needsContext
                          ? C(r, this).index(u) > -1
                          : C.find(r, this, null, [u]).length),
                        a[r] && o.push(i);
                    o.length && s.push({ elem: u, handlers: o });
                  }
              return (
                (u = this),
                c < t.length && s.push({ elem: u, handlers: t.slice(c) }),
                s
              );
            },
            addProp: function (e, t) {
              Object.defineProperty(C.Event.prototype, e, {
                enumerable: !0,
                configurable: !0,
                get: y(t)
                  ? function () {
                      if (this.originalEvent) return t(this.originalEvent);
                    }
                  : function () {
                      if (this.originalEvent) return this.originalEvent[e];
                    },
                set: function (t) {
                  Object.defineProperty(this, e, {
                    enumerable: !0,
                    configurable: !0,
                    writable: !0,
                    value: t,
                  });
                },
              });
            },
            fix: function (e) {
              return e[C.expando] ? e : new C.Event(e);
            },
            special: {
              load: { noBubble: !0 },
              click: {
                setup: function (e) {
                  var t = this || e;
                  return (
                    Ce.test(t.type) &&
                      t.click &&
                      k(t, "input") &&
                      Me(t, "click", !0),
                    !1
                  );
                },
                trigger: function (e) {
                  var t = this || e;
                  return (
                    Ce.test(t.type) &&
                      t.click &&
                      k(t, "input") &&
                      Me(t, "click"),
                    !0
                  );
                },
                _default: function (e) {
                  var t = e.target;
                  return (
                    (Ce.test(t.type) &&
                      t.click &&
                      k(t, "input") &&
                      se.get(t, "click")) ||
                    k(t, "a")
                  );
                },
              },
              beforeunload: {
                postDispatch: function (e) {
                  void 0 !== e.result &&
                    e.originalEvent &&
                    (e.originalEvent.returnValue = e.result);
                },
              },
            },
          }),
            (C.removeEvent = function (e, t, n) {
              e.removeEventListener && e.removeEventListener(t, n);
            }),
            (C.Event = function (e, t) {
              if (!(this instanceof C.Event)) return new C.Event(e, t);
              e && e.type
                ? ((this.originalEvent = e),
                  (this.type = e.type),
                  (this.isDefaultPrevented =
                    e.defaultPrevented ||
                    (void 0 === e.defaultPrevented && !1 === e.returnValue)
                      ? Ne
                      : He),
                  (this.target =
                    e.target && 3 === e.target.nodeType
                      ? e.target.parentNode
                      : e.target),
                  (this.currentTarget = e.currentTarget),
                  (this.relatedTarget = e.relatedTarget))
                : (this.type = e),
                t && C.extend(this, t),
                (this.timeStamp = (e && e.timeStamp) || Date.now()),
                (this[C.expando] = !0);
            }),
            (C.Event.prototype = {
              constructor: C.Event,
              isDefaultPrevented: He,
              isPropagationStopped: He,
              isImmediatePropagationStopped: He,
              isSimulated: !1,
              preventDefault: function () {
                var e = this.originalEvent;
                (this.isDefaultPrevented = Ne),
                  e && !this.isSimulated && e.preventDefault();
              },
              stopPropagation: function () {
                var e = this.originalEvent;
                (this.isPropagationStopped = Ne),
                  e && !this.isSimulated && e.stopPropagation();
              },
              stopImmediatePropagation: function () {
                var e = this.originalEvent;
                (this.isImmediatePropagationStopped = Ne),
                  e && !this.isSimulated && e.stopImmediatePropagation(),
                  this.stopPropagation();
              },
            }),
            C.each(
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
              C.event.addProp
            ),
            C.each({ focus: "focusin", blur: "focusout" }, function (e, t) {
              function n(e) {
                if (b.documentMode) {
                  var n = se.get(this, "handle"),
                    i = C.event.fix(e);
                  (i.type = "focusin" === e.type ? "focus" : "blur"),
                    (i.isSimulated = !0),
                    n(e),
                    i.target === i.currentTarget && n(i);
                } else C.event.simulate(t, e.target, C.event.fix(e));
              }
              (C.event.special[e] = {
                setup: function () {
                  var i;
                  if ((Me(this, e, !0), !b.documentMode)) return !1;
                  (i = se.get(this, t)) || this.addEventListener(t, n),
                    se.set(this, t, (i || 0) + 1);
                },
                trigger: function () {
                  return Me(this, e), !0;
                },
                teardown: function () {
                  var e;
                  if (!b.documentMode) return !1;
                  (e = se.get(this, t) - 1)
                    ? se.set(this, t, e)
                    : (this.removeEventListener(t, n), se.remove(this, t));
                },
                _default: function (t) {
                  return se.get(t.target, e);
                },
                delegateType: t,
              }),
                (C.event.special[t] = {
                  setup: function () {
                    var i = this.ownerDocument || this.document || this,
                      r = b.documentMode ? this : i,
                      o = se.get(r, t);
                    o ||
                      (b.documentMode
                        ? this.addEventListener(t, n)
                        : i.addEventListener(e, n, !0)),
                      se.set(r, t, (o || 0) + 1);
                  },
                  teardown: function () {
                    var i = this.ownerDocument || this.document || this,
                      r = b.documentMode ? this : i,
                      o = se.get(r, t) - 1;
                    o
                      ? se.set(r, t, o)
                      : (b.documentMode
                          ? this.removeEventListener(t, n)
                          : i.removeEventListener(e, n, !0),
                        se.remove(r, t));
                  },
                });
            }),
            C.each(
              {
                mouseenter: "mouseover",
                mouseleave: "mouseout",
                pointerenter: "pointerover",
                pointerleave: "pointerout",
              },
              function (e, t) {
                C.event.special[e] = {
                  delegateType: t,
                  bindType: t,
                  handle: function (e) {
                    var n,
                      i = e.relatedTarget,
                      r = e.handleObj;
                    return (
                      (i && (i === this || C.contains(this, i))) ||
                        ((e.type = r.origType),
                        (n = r.handler.apply(this, arguments)),
                        (e.type = t)),
                      n
                    );
                  },
                };
              }
            ),
            C.fn.extend({
              on: function (e, t, n, i) {
                return Ie(this, e, t, n, i);
              },
              one: function (e, t, n, i) {
                return Ie(this, e, t, n, i, 1);
              },
              off: function (e, t, n) {
                var i, r;
                if (e && e.preventDefault && e.handleObj)
                  return (
                    (i = e.handleObj),
                    C(e.delegateTarget).off(
                      i.namespace ? i.origType + "." + i.namespace : i.origType,
                      i.selector,
                      i.handler
                    ),
                    this
                  );
                if ("object" == typeof e) {
                  for (r in e) this.off(r, t, e[r]);
                  return this;
                }
                return (
                  (!1 !== t && "function" != typeof t) ||
                    ((n = t), (t = void 0)),
                  !1 === n && (n = He),
                  this.each(function () {
                    C.event.remove(this, e, n, t);
                  })
                );
              },
            });
          var Pe = /<script|<style|<link/i,
            Re = /checked\s*(?:[^=]|=\s*.checked.)/i,
            We = /^\s*<!\[CDATA\[|\]\]>\s*$/g;
          function ze(e, t) {
            return (
              (k(e, "table") &&
                k(11 !== t.nodeType ? t : t.firstChild, "tr") &&
                C(e).children("tbody")[0]) ||
              e
            );
          }
          function Be(e) {
            return (
              (e.type = (null !== e.getAttribute("type")) + "/" + e.type), e
            );
          }
          function $e(e) {
            return (
              "true/" === (e.type || "").slice(0, 5)
                ? (e.type = e.type.slice(5))
                : e.removeAttribute("type"),
              e
            );
          }
          function Fe(e, t) {
            var n, i, r, o, a, s;
            if (1 === t.nodeType) {
              if (se.hasData(e) && (s = se.get(e).events))
                for (r in (se.remove(t, "handle events"), s))
                  for (n = 0, i = s[r].length; n < i; n++)
                    C.event.add(t, r, s[r][n]);
              ce.hasData(e) &&
                ((o = ce.access(e)), (a = C.extend({}, o)), ce.set(t, a));
            }
          }
          function Ge(e, t) {
            var n = t.nodeName.toLowerCase();
            "input" === n && Ce.test(e.type)
              ? (t.checked = e.checked)
              : ("input" !== n && "textarea" !== n) ||
                (t.defaultValue = e.defaultValue);
          }
          function Ye(e, t, n, i) {
            t = c(t);
            var r,
              o,
              a,
              s,
              u,
              l,
              d = 0,
              f = e.length,
              p = f - 1,
              h = t[0],
              m = y(h);
            if (
              m ||
              (f > 1 && "string" == typeof h && !g.checkClone && Re.test(h))
            )
              return e.each(function (r) {
                var o = e.eq(r);
                m && (t[0] = h.call(this, r, o.html())), Ye(o, t, n, i);
              });
            if (
              f &&
              ((o = (r = je(t, e[0].ownerDocument, !1, e, i)).firstChild),
              1 === r.childNodes.length && (r = o),
              o || i)
            ) {
              for (s = (a = C.map(qe(r, "script"), Be)).length; d < f; d++)
                (u = r),
                  d !== p &&
                    ((u = C.clone(u, !0, !0)),
                    s && C.merge(a, qe(u, "script"))),
                  n.call(e[d], u, d);
              if (s)
                for (
                  l = a[a.length - 1].ownerDocument, C.map(a, $e), d = 0;
                  d < s;
                  d++
                )
                  (u = a[d]),
                    ke.test(u.type || "") &&
                      !se.access(u, "globalEval") &&
                      C.contains(l, u) &&
                      (u.src && "module" !== (u.type || "").toLowerCase()
                        ? C._evalUrl &&
                          !u.noModule &&
                          C._evalUrl(
                            u.src,
                            { nonce: u.nonce || u.getAttribute("nonce") },
                            l
                          )
                        : w(u.textContent.replace(We, ""), u, l));
            }
            return e;
          }
          function Ue(e, t, n) {
            for (
              var i, r = t ? C.filter(t, e) : e, o = 0;
              null != (i = r[o]);
              o++
            )
              n || 1 !== i.nodeType || C.cleanData(qe(i)),
                i.parentNode &&
                  (n && ge(i) && Ae(qe(i, "script")),
                  i.parentNode.removeChild(i));
            return e;
          }
          C.extend({
            htmlPrefilter: function (e) {
              return e;
            },
            clone: function (e, t, n) {
              var i,
                r,
                o,
                a,
                s = e.cloneNode(!0),
                c = ge(e);
              if (
                !(
                  g.noCloneChecked ||
                  (1 !== e.nodeType && 11 !== e.nodeType) ||
                  C.isXMLDoc(e)
                )
              )
                for (a = qe(s), i = 0, r = (o = qe(e)).length; i < r; i++)
                  Ge(o[i], a[i]);
              if (t)
                if (n)
                  for (
                    o = o || qe(e), a = a || qe(s), i = 0, r = o.length;
                    i < r;
                    i++
                  )
                    Fe(o[i], a[i]);
                else Fe(e, s);
              return (
                (a = qe(s, "script")).length > 0 &&
                  Ae(a, !c && qe(e, "script")),
                s
              );
            },
            cleanData: function (e) {
              for (
                var t, n, i, r = C.event.special, o = 0;
                void 0 !== (n = e[o]);
                o++
              )
                if (oe(n)) {
                  if ((t = n[se.expando])) {
                    if (t.events)
                      for (i in t.events)
                        r[i]
                          ? C.event.remove(n, i)
                          : C.removeEvent(n, i, t.handle);
                    n[se.expando] = void 0;
                  }
                  n[ce.expando] && (n[ce.expando] = void 0);
                }
            },
          }),
            C.fn.extend({
              detach: function (e) {
                return Ue(this, e, !0);
              },
              remove: function (e) {
                return Ue(this, e);
              },
              text: function (e) {
                return ee(
                  this,
                  function (e) {
                    return void 0 === e
                      ? C.text(this)
                      : this.empty().each(function () {
                          (1 !== this.nodeType &&
                            11 !== this.nodeType &&
                            9 !== this.nodeType) ||
                            (this.textContent = e);
                        });
                  },
                  null,
                  e,
                  arguments.length
                );
              },
              append: function () {
                return Ye(this, arguments, function (e) {
                  (1 !== this.nodeType &&
                    11 !== this.nodeType &&
                    9 !== this.nodeType) ||
                    ze(this, e).appendChild(e);
                });
              },
              prepend: function () {
                return Ye(this, arguments, function (e) {
                  if (
                    1 === this.nodeType ||
                    11 === this.nodeType ||
                    9 === this.nodeType
                  ) {
                    var t = ze(this, e);
                    t.insertBefore(e, t.firstChild);
                  }
                });
              },
              before: function () {
                return Ye(this, arguments, function (e) {
                  this.parentNode && this.parentNode.insertBefore(e, this);
                });
              },
              after: function () {
                return Ye(this, arguments, function (e) {
                  this.parentNode &&
                    this.parentNode.insertBefore(e, this.nextSibling);
                });
              },
              empty: function () {
                for (var e, t = 0; null != (e = this[t]); t++)
                  1 === e.nodeType &&
                    (C.cleanData(qe(e, !1)), (e.textContent = ""));
                return this;
              },
              clone: function (e, t) {
                return (
                  (e = null != e && e),
                  (t = null == t ? e : t),
                  this.map(function () {
                    return C.clone(this, e, t);
                  })
                );
              },
              html: function (e) {
                return ee(
                  this,
                  function (e) {
                    var t = this[0] || {},
                      n = 0,
                      i = this.length;
                    if (void 0 === e && 1 === t.nodeType) return t.innerHTML;
                    if (
                      "string" == typeof e &&
                      !Pe.test(e) &&
                      !Le[(_e.exec(e) || ["", ""])[1].toLowerCase()]
                    ) {
                      e = C.htmlPrefilter(e);
                      try {
                        for (; n < i; n++)
                          1 === (t = this[n] || {}).nodeType &&
                            (C.cleanData(qe(t, !1)), (t.innerHTML = e));
                        t = 0;
                      } catch (e) {}
                    }
                    t && this.empty().append(e);
                  },
                  null,
                  e,
                  arguments.length
                );
              },
              replaceWith: function () {
                var e = [];
                return Ye(
                  this,
                  arguments,
                  function (t) {
                    var n = this.parentNode;
                    C.inArray(this, e) < 0 &&
                      (C.cleanData(qe(this)), n && n.replaceChild(t, this));
                  },
                  e
                );
              },
            }),
            C.each(
              {
                appendTo: "append",
                prependTo: "prepend",
                insertBefore: "before",
                insertAfter: "after",
                replaceAll: "replaceWith",
              },
              function (e, t) {
                C.fn[e] = function (e) {
                  for (
                    var n, i = [], r = C(e), o = r.length - 1, a = 0;
                    a <= o;
                    a++
                  )
                    (n = a === o ? this : this.clone(!0)),
                      C(r[a])[t](n),
                      u.apply(i, n.get());
                  return this.pushStack(i);
                };
              }
            );
          var Xe = new RegExp("^(" + fe + ")(?!px)[a-z%]+$", "i"),
            Ve = /^--/,
            Qe = function (e) {
              var t = e.ownerDocument.defaultView;
              return (t && t.opener) || (t = i), t.getComputedStyle(e);
            },
            Ke = function (e, t, n) {
              var i,
                r,
                o = {};
              for (r in t) (o[r] = e.style[r]), (e.style[r] = t[r]);
              for (r in ((i = n.call(e)), t)) e.style[r] = o[r];
              return i;
            },
            Je = new RegExp(he.join("|"), "i");
          function Ze(e, t, n) {
            var i,
              r,
              o,
              a,
              s = Ve.test(t),
              c = e.style;
            return (
              (n = n || Qe(e)) &&
                ((a = n.getPropertyValue(t) || n[t]),
                s && a && (a = a.replace(j, "$1") || void 0),
                "" !== a || ge(e) || (a = C.style(e, t)),
                !g.pixelBoxStyles() &&
                  Xe.test(a) &&
                  Je.test(t) &&
                  ((i = c.width),
                  (r = c.minWidth),
                  (o = c.maxWidth),
                  (c.minWidth = c.maxWidth = c.width = a),
                  (a = n.width),
                  (c.width = i),
                  (c.minWidth = r),
                  (c.maxWidth = o))),
              void 0 !== a ? a + "" : a
            );
          }
          function et(e, t) {
            return {
              get: function () {
                if (!e()) return (this.get = t).apply(this, arguments);
                delete this.get;
              },
            };
          }
          !(function () {
            function e() {
              if (l) {
                (u.style.cssText =
                  "position:absolute;left:-11111px;width:60px;margin-top:1px;padding:0;border:0"),
                  (l.style.cssText =
                    "position:relative;display:block;box-sizing:border-box;overflow:scroll;margin:auto;border:1px;padding:1px;width:60%;top:1%"),
                  me.appendChild(u).appendChild(l);
                var e = i.getComputedStyle(l);
                (n = "1%" !== e.top),
                  (c = 12 === t(e.marginLeft)),
                  (l.style.right = "60%"),
                  (a = 36 === t(e.right)),
                  (r = 36 === t(e.width)),
                  (l.style.position = "absolute"),
                  (o = 12 === t(l.offsetWidth / 3)),
                  me.removeChild(u),
                  (l = null);
              }
            }
            function t(e) {
              return Math.round(parseFloat(e));
            }
            var n,
              r,
              o,
              a,
              s,
              c,
              u = b.createElement("div"),
              l = b.createElement("div");
            l.style &&
              ((l.style.backgroundClip = "content-box"),
              (l.cloneNode(!0).style.backgroundClip = ""),
              (g.clearCloneStyle = "content-box" === l.style.backgroundClip),
              C.extend(g, {
                boxSizingReliable: function () {
                  return e(), r;
                },
                pixelBoxStyles: function () {
                  return e(), a;
                },
                pixelPosition: function () {
                  return e(), n;
                },
                reliableMarginLeft: function () {
                  return e(), c;
                },
                scrollboxSize: function () {
                  return e(), o;
                },
                reliableTrDimensions: function () {
                  var e, t, n, r;
                  return (
                    null == s &&
                      ((e = b.createElement("table")),
                      (t = b.createElement("tr")),
                      (n = b.createElement("div")),
                      (e.style.cssText =
                        "position:absolute;left:-11111px;border-collapse:separate"),
                      (t.style.cssText =
                        "box-sizing:content-box;border:1px solid"),
                      (t.style.height = "1px"),
                      (n.style.height = "9px"),
                      (n.style.display = "block"),
                      me.appendChild(e).appendChild(t).appendChild(n),
                      (r = i.getComputedStyle(t)),
                      (s =
                        parseInt(r.height, 10) +
                          parseInt(r.borderTopWidth, 10) +
                          parseInt(r.borderBottomWidth, 10) ===
                        t.offsetHeight),
                      me.removeChild(e)),
                    s
                  );
                },
              }));
          })();
          var tt = ["Webkit", "Moz", "ms"],
            nt = b.createElement("div").style,
            it = {};
          function rt(e) {
            return (
              C.cssProps[e] ||
              it[e] ||
              (e in nt
                ? e
                : (it[e] =
                    (function (e) {
                      for (
                        var t = e[0].toUpperCase() + e.slice(1), n = tt.length;
                        n--;

                      )
                        if ((e = tt[n] + t) in nt) return e;
                    })(e) || e))
            );
          }
          var ot = /^(none|table(?!-c[ea]).+)/,
            at = {
              position: "absolute",
              visibility: "hidden",
              display: "block",
            },
            st = { letterSpacing: "0", fontWeight: "400" };
          function ct(e, t, n) {
            var i = pe.exec(t);
            return i ? Math.max(0, i[2] - (n || 0)) + (i[3] || "px") : t;
          }
          function ut(e, t, n, i, r, o) {
            var a = "width" === t ? 1 : 0,
              s = 0,
              c = 0,
              u = 0;
            if (n === (i ? "border" : "content")) return 0;
            for (; a < 4; a += 2)
              "margin" === n && (u += C.css(e, n + he[a], !0, r)),
                i
                  ? ("content" === n &&
                      (c -= C.css(e, "padding" + he[a], !0, r)),
                    "margin" !== n &&
                      (c -= C.css(e, "border" + he[a] + "Width", !0, r)))
                  : ((c += C.css(e, "padding" + he[a], !0, r)),
                    "padding" !== n
                      ? (c += C.css(e, "border" + he[a] + "Width", !0, r))
                      : (s += C.css(e, "border" + he[a] + "Width", !0, r)));
            return (
              !i &&
                o >= 0 &&
                (c +=
                  Math.max(
                    0,
                    Math.ceil(
                      e["offset" + t[0].toUpperCase() + t.slice(1)] -
                        o -
                        c -
                        s -
                        0.5
                    )
                  ) || 0),
              c + u
            );
          }
          function lt(e, t, n) {
            var i = Qe(e),
              r =
                (!g.boxSizingReliable() || n) &&
                "border-box" === C.css(e, "boxSizing", !1, i),
              o = r,
              a = Ze(e, t, i),
              s = "offset" + t[0].toUpperCase() + t.slice(1);
            if (Xe.test(a)) {
              if (!n) return a;
              a = "auto";
            }
            return (
              ((!g.boxSizingReliable() && r) ||
                (!g.reliableTrDimensions() && k(e, "tr")) ||
                "auto" === a ||
                (!parseFloat(a) && "inline" === C.css(e, "display", !1, i))) &&
                e.getClientRects().length &&
                ((r = "border-box" === C.css(e, "boxSizing", !1, i)),
                (o = s in e) && (a = e[s])),
              (a = parseFloat(a) || 0) +
                ut(e, t, n || (r ? "border" : "content"), o, i, a) +
                "px"
            );
          }
          function dt(e, t, n, i, r) {
            return new dt.prototype.init(e, t, n, i, r);
          }
          C.extend({
            cssHooks: {
              opacity: {
                get: function (e, t) {
                  if (t) {
                    var n = Ze(e, "opacity");
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
            style: function (e, t, n, i) {
              if (e && 3 !== e.nodeType && 8 !== e.nodeType && e.style) {
                var r,
                  o,
                  a,
                  s = re(t),
                  c = Ve.test(t),
                  u = e.style;
                if (
                  (c || (t = rt(s)),
                  (a = C.cssHooks[t] || C.cssHooks[s]),
                  void 0 === n)
                )
                  return a && "get" in a && void 0 !== (r = a.get(e, !1, i))
                    ? r
                    : u[t];
                "string" == (o = typeof n) &&
                  (r = pe.exec(n)) &&
                  r[1] &&
                  ((n = be(e, t, r)), (o = "number")),
                  null != n &&
                    n == n &&
                    ("number" !== o ||
                      c ||
                      (n += (r && r[3]) || (C.cssNumber[s] ? "" : "px")),
                    g.clearCloneStyle ||
                      "" !== n ||
                      0 !== t.indexOf("background") ||
                      (u[t] = "inherit"),
                    (a && "set" in a && void 0 === (n = a.set(e, n, i))) ||
                      (c ? u.setProperty(t, n) : (u[t] = n)));
              }
            },
            css: function (e, t, n, i) {
              var r,
                o,
                a,
                s = re(t);
              return (
                Ve.test(t) || (t = rt(s)),
                (a = C.cssHooks[t] || C.cssHooks[s]) &&
                  "get" in a &&
                  (r = a.get(e, !0, n)),
                void 0 === r && (r = Ze(e, t, i)),
                "normal" === r && t in st && (r = st[t]),
                "" === n || n
                  ? ((o = parseFloat(r)), !0 === n || isFinite(o) ? o || 0 : r)
                  : r
              );
            },
          }),
            C.each(["height", "width"], function (e, t) {
              C.cssHooks[t] = {
                get: function (e, n, i) {
                  if (n)
                    return !ot.test(C.css(e, "display")) ||
                      (e.getClientRects().length &&
                        e.getBoundingClientRect().width)
                      ? lt(e, t, i)
                      : Ke(e, at, function () {
                          return lt(e, t, i);
                        });
                },
                set: function (e, n, i) {
                  var r,
                    o = Qe(e),
                    a = !g.scrollboxSize() && "absolute" === o.position,
                    s =
                      (a || i) && "border-box" === C.css(e, "boxSizing", !1, o),
                    c = i ? ut(e, t, i, s, o) : 0;
                  return (
                    s &&
                      a &&
                      (c -= Math.ceil(
                        e["offset" + t[0].toUpperCase() + t.slice(1)] -
                          parseFloat(o[t]) -
                          ut(e, t, "border", !1, o) -
                          0.5
                      )),
                    c &&
                      (r = pe.exec(n)) &&
                      "px" !== (r[3] || "px") &&
                      ((e.style[t] = n), (n = C.css(e, t))),
                    ct(0, n, c)
                  );
                },
              };
            }),
            (C.cssHooks.marginLeft = et(g.reliableMarginLeft, function (e, t) {
              if (t)
                return (
                  (parseFloat(Ze(e, "marginLeft")) ||
                    e.getBoundingClientRect().left -
                      Ke(e, { marginLeft: 0 }, function () {
                        return e.getBoundingClientRect().left;
                      })) + "px"
                );
            })),
            C.each(
              { margin: "", padding: "", border: "Width" },
              function (e, t) {
                (C.cssHooks[e + t] = {
                  expand: function (n) {
                    for (
                      var i = 0,
                        r = {},
                        o = "string" == typeof n ? n.split(" ") : [n];
                      i < 4;
                      i++
                    )
                      r[e + he[i] + t] = o[i] || o[i - 2] || o[0];
                    return r;
                  },
                }),
                  "margin" !== e && (C.cssHooks[e + t].set = ct);
              }
            ),
            C.fn.extend({
              css: function (e, t) {
                return ee(
                  this,
                  function (e, t, n) {
                    var i,
                      r,
                      o = {},
                      a = 0;
                    if (Array.isArray(t)) {
                      for (i = Qe(e), r = t.length; a < r; a++)
                        o[t[a]] = C.css(e, t[a], !1, i);
                      return o;
                    }
                    return void 0 !== n ? C.style(e, t, n) : C.css(e, t);
                  },
                  e,
                  t,
                  arguments.length > 1
                );
              },
            }),
            (C.Tween = dt),
            (dt.prototype = {
              constructor: dt,
              init: function (e, t, n, i, r, o) {
                (this.elem = e),
                  (this.prop = n),
                  (this.easing = r || C.easing._default),
                  (this.options = t),
                  (this.start = this.now = this.cur()),
                  (this.end = i),
                  (this.unit = o || (C.cssNumber[n] ? "" : "px"));
              },
              cur: function () {
                var e = dt.propHooks[this.prop];
                return e && e.get
                  ? e.get(this)
                  : dt.propHooks._default.get(this);
              },
              run: function (e) {
                var t,
                  n = dt.propHooks[this.prop];
                return (
                  this.options.duration
                    ? (this.pos = t =
                        C.easing[this.easing](
                          e,
                          this.options.duration * e,
                          0,
                          1,
                          this.options.duration
                        ))
                    : (this.pos = t = e),
                  (this.now = (this.end - this.start) * t + this.start),
                  this.options.step &&
                    this.options.step.call(this.elem, this.now, this),
                  n && n.set ? n.set(this) : dt.propHooks._default.set(this),
                  this
                );
              },
            }),
            (dt.prototype.init.prototype = dt.prototype),
            (dt.propHooks = {
              _default: {
                get: function (e) {
                  var t;
                  return 1 !== e.elem.nodeType ||
                    (null != e.elem[e.prop] && null == e.elem.style[e.prop])
                    ? e.elem[e.prop]
                    : (t = C.css(e.elem, e.prop, "")) && "auto" !== t
                    ? t
                    : 0;
                },
                set: function (e) {
                  C.fx.step[e.prop]
                    ? C.fx.step[e.prop](e)
                    : 1 !== e.elem.nodeType ||
                      (!C.cssHooks[e.prop] && null == e.elem.style[rt(e.prop)])
                    ? (e.elem[e.prop] = e.now)
                    : C.style(e.elem, e.prop, e.now + e.unit);
                },
              },
            }),
            (dt.propHooks.scrollTop = dt.propHooks.scrollLeft =
              {
                set: function (e) {
                  e.elem.nodeType &&
                    e.elem.parentNode &&
                    (e.elem[e.prop] = e.now);
                },
              }),
            (C.easing = {
              linear: function (e) {
                return e;
              },
              swing: function (e) {
                return 0.5 - Math.cos(e * Math.PI) / 2;
              },
              _default: "swing",
            }),
            (C.fx = dt.prototype.init),
            (C.fx.step = {});
          var ft,
            pt,
            ht = /^(?:toggle|show|hide)$/,
            mt = /queueHooks$/;
          function gt() {
            pt &&
              (!1 === b.hidden && i.requestAnimationFrame
                ? i.requestAnimationFrame(gt)
                : i.setTimeout(gt, C.fx.interval),
              C.fx.tick());
          }
          function yt() {
            return (
              i.setTimeout(function () {
                ft = void 0;
              }),
              (ft = Date.now())
            );
          }
          function vt(e, t) {
            var n,
              i = 0,
              r = { height: e };
            for (t = t ? 1 : 0; i < 4; i += 2 - t)
              r["margin" + (n = he[i])] = r["padding" + n] = e;
            return t && (r.opacity = r.width = e), r;
          }
          function bt(e, t, n) {
            for (
              var i,
                r = (xt.tweeners[t] || []).concat(xt.tweeners["*"]),
                o = 0,
                a = r.length;
              o < a;
              o++
            )
              if ((i = r[o].call(n, t, e))) return i;
          }
          function xt(e, t, n) {
            var i,
              r,
              o = 0,
              a = xt.prefilters.length,
              s = C.Deferred().always(function () {
                delete c.elem;
              }),
              c = function () {
                if (r) return !1;
                for (
                  var t = ft || yt(),
                    n = Math.max(0, u.startTime + u.duration - t),
                    i = 1 - (n / u.duration || 0),
                    o = 0,
                    a = u.tweens.length;
                  o < a;
                  o++
                )
                  u.tweens[o].run(i);
                return (
                  s.notifyWith(e, [u, i, n]),
                  i < 1 && a
                    ? n
                    : (a || s.notifyWith(e, [u, 1, 0]),
                      s.resolveWith(e, [u]),
                      !1)
                );
              },
              u = s.promise({
                elem: e,
                props: C.extend({}, t),
                opts: C.extend(
                  !0,
                  { specialEasing: {}, easing: C.easing._default },
                  n
                ),
                originalProperties: t,
                originalOptions: n,
                startTime: ft || yt(),
                duration: n.duration,
                tweens: [],
                createTween: function (t, n) {
                  var i = C.Tween(
                    e,
                    u.opts,
                    t,
                    n,
                    u.opts.specialEasing[t] || u.opts.easing
                  );
                  return u.tweens.push(i), i;
                },
                stop: function (t) {
                  var n = 0,
                    i = t ? u.tweens.length : 0;
                  if (r) return this;
                  for (r = !0; n < i; n++) u.tweens[n].run(1);
                  return (
                    t
                      ? (s.notifyWith(e, [u, 1, 0]), s.resolveWith(e, [u, t]))
                      : s.rejectWith(e, [u, t]),
                    this
                  );
                },
              }),
              l = u.props;
            for (
              (function (e, t) {
                var n, i, r, o, a;
                for (n in e)
                  if (
                    ((r = t[(i = re(n))]),
                    (o = e[n]),
                    Array.isArray(o) && ((r = o[1]), (o = e[n] = o[0])),
                    n !== i && ((e[i] = o), delete e[n]),
                    (a = C.cssHooks[i]) && ("expand" in a))
                  )
                    for (n in ((o = a.expand(o)), delete e[i], o))
                      (n in e) || ((e[n] = o[n]), (t[n] = r));
                  else t[i] = r;
              })(l, u.opts.specialEasing);
              o < a;
              o++
            )
              if ((i = xt.prefilters[o].call(u, e, l, u.opts)))
                return (
                  y(i.stop) &&
                    (C._queueHooks(u.elem, u.opts.queue).stop = i.stop.bind(i)),
                  i
                );
            return (
              C.map(l, bt, u),
              y(u.opts.start) && u.opts.start.call(e, u),
              u
                .progress(u.opts.progress)
                .done(u.opts.done, u.opts.complete)
                .fail(u.opts.fail)
                .always(u.opts.always),
              C.fx.timer(
                C.extend(c, { elem: e, anim: u, queue: u.opts.queue })
              ),
              u
            );
          }
          (C.Animation = C.extend(xt, {
            tweeners: {
              "*": [
                function (e, t) {
                  var n = this.createTween(e, t);
                  return be(n.elem, e, pe.exec(t), n), n;
                },
              ],
            },
            tweener: function (e, t) {
              y(e) ? ((t = e), (e = ["*"])) : (e = e.match(U));
              for (var n, i = 0, r = e.length; i < r; i++)
                (n = e[i]),
                  (xt.tweeners[n] = xt.tweeners[n] || []),
                  xt.tweeners[n].unshift(t);
            },
            prefilters: [
              function (e, t, n) {
                var i,
                  r,
                  o,
                  a,
                  s,
                  c,
                  u,
                  l,
                  d = "width" in t || "height" in t,
                  f = this,
                  p = {},
                  h = e.style,
                  m = e.nodeType && ve(e),
                  g = se.get(e, "fxshow");
                for (i in (n.queue ||
                  (null == (a = C._queueHooks(e, "fx")).unqueued &&
                    ((a.unqueued = 0),
                    (s = a.empty.fire),
                    (a.empty.fire = function () {
                      a.unqueued || s();
                    })),
                  a.unqueued++,
                  f.always(function () {
                    f.always(function () {
                      a.unqueued--, C.queue(e, "fx").length || a.empty.fire();
                    });
                  })),
                t))
                  if (((r = t[i]), ht.test(r))) {
                    if (
                      (delete t[i],
                      (o = o || "toggle" === r),
                      r === (m ? "hide" : "show"))
                    ) {
                      if ("show" !== r || !g || void 0 === g[i]) continue;
                      m = !0;
                    }
                    p[i] = (g && g[i]) || C.style(e, i);
                  }
                if ((c = !C.isEmptyObject(t)) || !C.isEmptyObject(p))
                  for (i in (d &&
                    1 === e.nodeType &&
                    ((n.overflow = [h.overflow, h.overflowX, h.overflowY]),
                    null == (u = g && g.display) && (u = se.get(e, "display")),
                    "none" === (l = C.css(e, "display")) &&
                      (u
                        ? (l = u)
                        : (Se([e], !0),
                          (u = e.style.display || u),
                          (l = C.css(e, "display")),
                          Se([e]))),
                    ("inline" === l || ("inline-block" === l && null != u)) &&
                      "none" === C.css(e, "float") &&
                      (c ||
                        (f.done(function () {
                          h.display = u;
                        }),
                        null == u &&
                          ((l = h.display), (u = "none" === l ? "" : l))),
                      (h.display = "inline-block"))),
                  n.overflow &&
                    ((h.overflow = "hidden"),
                    f.always(function () {
                      (h.overflow = n.overflow[0]),
                        (h.overflowX = n.overflow[1]),
                        (h.overflowY = n.overflow[2]);
                    })),
                  (c = !1),
                  p))
                    c ||
                      (g
                        ? "hidden" in g && (m = g.hidden)
                        : (g = se.access(e, "fxshow", { display: u })),
                      o && (g.hidden = !m),
                      m && Se([e], !0),
                      f.done(function () {
                        for (i in (m || Se([e]), se.remove(e, "fxshow"), p))
                          C.style(e, i, p[i]);
                      })),
                      (c = bt(m ? g[i] : 0, i, f)),
                      i in g ||
                        ((g[i] = c.start),
                        m && ((c.end = c.start), (c.start = 0)));
              },
            ],
            prefilter: function (e, t) {
              t ? xt.prefilters.unshift(e) : xt.prefilters.push(e);
            },
          })),
            (C.speed = function (e, t, n) {
              var i =
                e && "object" == typeof e
                  ? C.extend({}, e)
                  : {
                      complete: n || (!n && t) || (y(e) && e),
                      duration: e,
                      easing: (n && t) || (t && !y(t) && t),
                    };
              return (
                C.fx.off
                  ? (i.duration = 0)
                  : "number" != typeof i.duration &&
                    (i.duration in C.fx.speeds
                      ? (i.duration = C.fx.speeds[i.duration])
                      : (i.duration = C.fx.speeds._default)),
                (null != i.queue && !0 !== i.queue) || (i.queue = "fx"),
                (i.old = i.complete),
                (i.complete = function () {
                  y(i.old) && i.old.call(this),
                    i.queue && C.dequeue(this, i.queue);
                }),
                i
              );
            }),
            C.fn.extend({
              fadeTo: function (e, t, n, i) {
                return this.filter(ve)
                  .css("opacity", 0)
                  .show()
                  .end()
                  .animate({ opacity: t }, e, n, i);
              },
              animate: function (e, t, n, i) {
                var r = C.isEmptyObject(e),
                  o = C.speed(t, n, i),
                  a = function () {
                    var t = xt(this, C.extend({}, e), o);
                    (r || se.get(this, "finish")) && t.stop(!0);
                  };
                return (
                  (a.finish = a),
                  r || !1 === o.queue ? this.each(a) : this.queue(o.queue, a)
                );
              },
              stop: function (e, t, n) {
                var i = function (e) {
                  var t = e.stop;
                  delete e.stop, t(n);
                };
                return (
                  "string" != typeof e && ((n = t), (t = e), (e = void 0)),
                  t && this.queue(e || "fx", []),
                  this.each(function () {
                    var t = !0,
                      r = null != e && e + "queueHooks",
                      o = C.timers,
                      a = se.get(this);
                    if (r) a[r] && a[r].stop && i(a[r]);
                    else
                      for (r in a) a[r] && a[r].stop && mt.test(r) && i(a[r]);
                    for (r = o.length; r--; )
                      o[r].elem !== this ||
                        (null != e && o[r].queue !== e) ||
                        (o[r].anim.stop(n), (t = !1), o.splice(r, 1));
                    (!t && n) || C.dequeue(this, e);
                  })
                );
              },
              finish: function (e) {
                return (
                  !1 !== e && (e = e || "fx"),
                  this.each(function () {
                    var t,
                      n = se.get(this),
                      i = n[e + "queue"],
                      r = n[e + "queueHooks"],
                      o = C.timers,
                      a = i ? i.length : 0;
                    for (
                      n.finish = !0,
                        C.queue(this, e, []),
                        r && r.stop && r.stop.call(this, !0),
                        t = o.length;
                      t--;

                    )
                      o[t].elem === this &&
                        o[t].queue === e &&
                        (o[t].anim.stop(!0), o.splice(t, 1));
                    for (t = 0; t < a; t++)
                      i[t] && i[t].finish && i[t].finish.call(this);
                    delete n.finish;
                  })
                );
              },
            }),
            C.each(["toggle", "show", "hide"], function (e, t) {
              var n = C.fn[t];
              C.fn[t] = function (e, i, r) {
                return null == e || "boolean" == typeof e
                  ? n.apply(this, arguments)
                  : this.animate(vt(t, !0), e, i, r);
              };
            }),
            C.each(
              {
                slideDown: vt("show"),
                slideUp: vt("hide"),
                slideToggle: vt("toggle"),
                fadeIn: { opacity: "show" },
                fadeOut: { opacity: "hide" },
                fadeToggle: { opacity: "toggle" },
              },
              function (e, t) {
                C.fn[e] = function (e, n, i) {
                  return this.animate(t, e, n, i);
                };
              }
            ),
            (C.timers = []),
            (C.fx.tick = function () {
              var e,
                t = 0,
                n = C.timers;
              for (ft = Date.now(); t < n.length; t++)
                (e = n[t])() || n[t] !== e || n.splice(t--, 1);
              n.length || C.fx.stop(), (ft = void 0);
            }),
            (C.fx.timer = function (e) {
              C.timers.push(e), C.fx.start();
            }),
            (C.fx.interval = 13),
            (C.fx.start = function () {
              pt || ((pt = !0), gt());
            }),
            (C.fx.stop = function () {
              pt = null;
            }),
            (C.fx.speeds = { slow: 600, fast: 200, _default: 400 }),
            (C.fn.delay = function (e, t) {
              return (
                (e = (C.fx && C.fx.speeds[e]) || e),
                (t = t || "fx"),
                this.queue(t, function (t, n) {
                  var r = i.setTimeout(t, e);
                  n.stop = function () {
                    i.clearTimeout(r);
                  };
                })
              );
            }),
            (function () {
              var e = b.createElement("input"),
                t = b
                  .createElement("select")
                  .appendChild(b.createElement("option"));
              (e.type = "checkbox"),
                (g.checkOn = "" !== e.value),
                (g.optSelected = t.selected),
                ((e = b.createElement("input")).value = "t"),
                (e.type = "radio"),
                (g.radioValue = "t" === e.value);
            })();
          var wt,
            St = C.expr.attrHandle;
          C.fn.extend({
            attr: function (e, t) {
              return ee(this, C.attr, e, t, arguments.length > 1);
            },
            removeAttr: function (e) {
              return this.each(function () {
                C.removeAttr(this, e);
              });
            },
          }),
            C.extend({
              attr: function (e, t, n) {
                var i,
                  r,
                  o = e.nodeType;
                if (3 !== o && 8 !== o && 2 !== o)
                  return void 0 === e.getAttribute
                    ? C.prop(e, t, n)
                    : ((1 === o && C.isXMLDoc(e)) ||
                        (r =
                          C.attrHooks[t.toLowerCase()] ||
                          (C.expr.match.bool.test(t) ? wt : void 0)),
                      void 0 !== n
                        ? null === n
                          ? void C.removeAttr(e, t)
                          : r && "set" in r && void 0 !== (i = r.set(e, n, t))
                          ? i
                          : (e.setAttribute(t, n + ""), n)
                        : r && "get" in r && null !== (i = r.get(e, t))
                        ? i
                        : null == (i = C.find.attr(e, t))
                        ? void 0
                        : i);
              },
              attrHooks: {
                type: {
                  set: function (e, t) {
                    if (!g.radioValue && "radio" === t && k(e, "input")) {
                      var n = e.value;
                      return e.setAttribute("type", t), n && (e.value = n), t;
                    }
                  },
                },
              },
              removeAttr: function (e, t) {
                var n,
                  i = 0,
                  r = t && t.match(U);
                if (r && 1 === e.nodeType)
                  for (; (n = r[i++]); ) e.removeAttribute(n);
              },
            }),
            (wt = {
              set: function (e, t, n) {
                return !1 === t ? C.removeAttr(e, n) : e.setAttribute(n, n), n;
              },
            }),
            C.each(C.expr.match.bool.source.match(/\w+/g), function (e, t) {
              var n = St[t] || C.find.attr;
              St[t] = function (e, t, i) {
                var r,
                  o,
                  a = t.toLowerCase();
                return (
                  i ||
                    ((o = St[a]),
                    (St[a] = r),
                    (r = null != n(e, t, i) ? a : null),
                    (St[a] = o)),
                  r
                );
              };
            });
          var Et = /^(?:input|select|textarea|button)$/i,
            Tt = /^(?:a|area)$/i;
          function Ct(e) {
            return (e.match(U) || []).join(" ");
          }
          function _t(e) {
            return (e.getAttribute && e.getAttribute("class")) || "";
          }
          function kt(e) {
            return Array.isArray(e)
              ? e
              : ("string" == typeof e && e.match(U)) || [];
          }
          C.fn.extend({
            prop: function (e, t) {
              return ee(this, C.prop, e, t, arguments.length > 1);
            },
            removeProp: function (e) {
              return this.each(function () {
                delete this[C.propFix[e] || e];
              });
            },
          }),
            C.extend({
              prop: function (e, t, n) {
                var i,
                  r,
                  o = e.nodeType;
                if (3 !== o && 8 !== o && 2 !== o)
                  return (
                    (1 === o && C.isXMLDoc(e)) ||
                      ((t = C.propFix[t] || t), (r = C.propHooks[t])),
                    void 0 !== n
                      ? r && "set" in r && void 0 !== (i = r.set(e, n, t))
                        ? i
                        : (e[t] = n)
                      : r && "get" in r && null !== (i = r.get(e, t))
                      ? i
                      : e[t]
                  );
              },
              propHooks: {
                tabIndex: {
                  get: function (e) {
                    var t = C.find.attr(e, "tabindex");
                    return t
                      ? parseInt(t, 10)
                      : Et.test(e.nodeName) || (Tt.test(e.nodeName) && e.href)
                      ? 0
                      : -1;
                  },
                },
              },
              propFix: { for: "htmlFor", class: "className" },
            }),
            g.optSelected ||
              (C.propHooks.selected = {
                get: function (e) {
                  var t = e.parentNode;
                  return t && t.parentNode && t.parentNode.selectedIndex, null;
                },
                set: function (e) {
                  var t = e.parentNode;
                  t &&
                    (t.selectedIndex,
                    t.parentNode && t.parentNode.selectedIndex);
                },
              }),
            C.each(
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
                C.propFix[this.toLowerCase()] = this;
              }
            ),
            C.fn.extend({
              addClass: function (e) {
                var t, n, i, r, o, a;
                return y(e)
                  ? this.each(function (t) {
                      C(this).addClass(e.call(this, t, _t(this)));
                    })
                  : (t = kt(e)).length
                  ? this.each(function () {
                      if (
                        ((i = _t(this)),
                        (n = 1 === this.nodeType && " " + Ct(i) + " "))
                      ) {
                        for (o = 0; o < t.length; o++)
                          (r = t[o]),
                            n.indexOf(" " + r + " ") < 0 && (n += r + " ");
                        (a = Ct(n)), i !== a && this.setAttribute("class", a);
                      }
                    })
                  : this;
              },
              removeClass: function (e) {
                var t, n, i, r, o, a;
                return y(e)
                  ? this.each(function (t) {
                      C(this).removeClass(e.call(this, t, _t(this)));
                    })
                  : arguments.length
                  ? (t = kt(e)).length
                    ? this.each(function () {
                        if (
                          ((i = _t(this)),
                          (n = 1 === this.nodeType && " " + Ct(i) + " "))
                        ) {
                          for (o = 0; o < t.length; o++)
                            for (r = t[o]; n.indexOf(" " + r + " ") > -1; )
                              n = n.replace(" " + r + " ", " ");
                          (a = Ct(n)), i !== a && this.setAttribute("class", a);
                        }
                      })
                    : this
                  : this.attr("class", "");
              },
              toggleClass: function (e, t) {
                var n,
                  i,
                  r,
                  o,
                  a = typeof e,
                  s = "string" === a || Array.isArray(e);
                return y(e)
                  ? this.each(function (n) {
                      C(this).toggleClass(e.call(this, n, _t(this), t), t);
                    })
                  : "boolean" == typeof t && s
                  ? t
                    ? this.addClass(e)
                    : this.removeClass(e)
                  : ((n = kt(e)),
                    this.each(function () {
                      if (s)
                        for (o = C(this), r = 0; r < n.length; r++)
                          (i = n[r]),
                            o.hasClass(i) ? o.removeClass(i) : o.addClass(i);
                      else
                        (void 0 !== e && "boolean" !== a) ||
                          ((i = _t(this)) && se.set(this, "__className__", i),
                          this.setAttribute &&
                            this.setAttribute(
                              "class",
                              i || !1 === e
                                ? ""
                                : se.get(this, "__className__") || ""
                            ));
                    }));
              },
              hasClass: function (e) {
                var t,
                  n,
                  i = 0;
                for (t = " " + e + " "; (n = this[i++]); )
                  if (
                    1 === n.nodeType &&
                    (" " + Ct(_t(n)) + " ").indexOf(t) > -1
                  )
                    return !0;
                return !1;
              },
            });
          var Lt = /\r/g;
          C.fn.extend({
            val: function (e) {
              var t,
                n,
                i,
                r = this[0];
              return arguments.length
                ? ((i = y(e)),
                  this.each(function (n) {
                    var r;
                    1 === this.nodeType &&
                      (null == (r = i ? e.call(this, n, C(this).val()) : e)
                        ? (r = "")
                        : "number" == typeof r
                        ? (r += "")
                        : Array.isArray(r) &&
                          (r = C.map(r, function (e) {
                            return null == e ? "" : e + "";
                          })),
                      ((t =
                        C.valHooks[this.type] ||
                        C.valHooks[this.nodeName.toLowerCase()]) &&
                        "set" in t &&
                        void 0 !== t.set(this, r, "value")) ||
                        (this.value = r));
                  }))
                : r
                ? (t =
                    C.valHooks[r.type] ||
                    C.valHooks[r.nodeName.toLowerCase()]) &&
                  "get" in t &&
                  void 0 !== (n = t.get(r, "value"))
                  ? n
                  : "string" == typeof (n = r.value)
                  ? n.replace(Lt, "")
                  : null == n
                  ? ""
                  : n
                : void 0;
            },
          }),
            C.extend({
              valHooks: {
                option: {
                  get: function (e) {
                    var t = C.find.attr(e, "value");
                    return null != t ? t : Ct(C.text(e));
                  },
                },
                select: {
                  get: function (e) {
                    var t,
                      n,
                      i,
                      r = e.options,
                      o = e.selectedIndex,
                      a = "select-one" === e.type,
                      s = a ? null : [],
                      c = a ? o + 1 : r.length;
                    for (i = o < 0 ? c : a ? o : 0; i < c; i++)
                      if (
                        ((n = r[i]).selected || i === o) &&
                        !n.disabled &&
                        (!n.parentNode.disabled || !k(n.parentNode, "optgroup"))
                      ) {
                        if (((t = C(n).val()), a)) return t;
                        s.push(t);
                      }
                    return s;
                  },
                  set: function (e, t) {
                    for (
                      var n, i, r = e.options, o = C.makeArray(t), a = r.length;
                      a--;

                    )
                      ((i = r[a]).selected =
                        C.inArray(C.valHooks.option.get(i), o) > -1) &&
                        (n = !0);
                    return n || (e.selectedIndex = -1), o;
                  },
                },
              },
            }),
            C.each(["radio", "checkbox"], function () {
              (C.valHooks[this] = {
                set: function (e, t) {
                  if (Array.isArray(t))
                    return (e.checked = C.inArray(C(e).val(), t) > -1);
                },
              }),
                g.checkOn ||
                  (C.valHooks[this].get = function (e) {
                    return null === e.getAttribute("value") ? "on" : e.value;
                  });
            });
          var qt = i.location,
            At = { guid: Date.now() },
            Dt = /\?/;
          C.parseXML = function (e) {
            var t, n;
            if (!e || "string" != typeof e) return null;
            try {
              t = new i.DOMParser().parseFromString(e, "text/xml");
            } catch (e) {}
            return (
              (n = t && t.getElementsByTagName("parsererror")[0]),
              (t && !n) ||
                C.error(
                  "Invalid XML: " +
                    (n
                      ? C.map(n.childNodes, function (e) {
                          return e.textContent;
                        }).join("\n")
                      : e)
                ),
              t
            );
          };
          var jt = /^(?:focusinfocus|focusoutblur)$/,
            Ot = function (e) {
              e.stopPropagation();
            };
          C.extend(C.event, {
            trigger: function (e, t, n, r) {
              var o,
                a,
                s,
                c,
                u,
                l,
                d,
                f,
                h = [n || b],
                m = p.call(e, "type") ? e.type : e,
                g = p.call(e, "namespace") ? e.namespace.split(".") : [];
              if (
                ((a = f = s = n = n || b),
                3 !== n.nodeType &&
                  8 !== n.nodeType &&
                  !jt.test(m + C.event.triggered) &&
                  (m.indexOf(".") > -1 &&
                    ((g = m.split(".")), (m = g.shift()), g.sort()),
                  (u = m.indexOf(":") < 0 && "on" + m),
                  ((e = e[C.expando]
                    ? e
                    : new C.Event(m, "object" == typeof e && e)).isTrigger = r
                    ? 2
                    : 3),
                  (e.namespace = g.join(".")),
                  (e.rnamespace = e.namespace
                    ? new RegExp(
                        "(^|\\.)" + g.join("\\.(?:.*\\.|)") + "(\\.|$)"
                      )
                    : null),
                  (e.result = void 0),
                  e.target || (e.target = n),
                  (t = null == t ? [e] : C.makeArray(t, [e])),
                  (d = C.event.special[m] || {}),
                  r || !d.trigger || !1 !== d.trigger.apply(n, t)))
              ) {
                if (!r && !d.noBubble && !v(n)) {
                  for (
                    c = d.delegateType || m,
                      jt.test(c + m) || (a = a.parentNode);
                    a;
                    a = a.parentNode
                  )
                    h.push(a), (s = a);
                  s === (n.ownerDocument || b) &&
                    h.push(s.defaultView || s.parentWindow || i);
                }
                for (o = 0; (a = h[o++]) && !e.isPropagationStopped(); )
                  (f = a),
                    (e.type = o > 1 ? c : d.bindType || m),
                    (l =
                      (se.get(a, "events") || Object.create(null))[e.type] &&
                      se.get(a, "handle")) && l.apply(a, t),
                    (l = u && a[u]) &&
                      l.apply &&
                      oe(a) &&
                      ((e.result = l.apply(a, t)),
                      !1 === e.result && e.preventDefault());
                return (
                  (e.type = m),
                  r ||
                    e.isDefaultPrevented() ||
                    (d._default && !1 !== d._default.apply(h.pop(), t)) ||
                    !oe(n) ||
                    (u &&
                      y(n[m]) &&
                      !v(n) &&
                      ((s = n[u]) && (n[u] = null),
                      (C.event.triggered = m),
                      e.isPropagationStopped() && f.addEventListener(m, Ot),
                      n[m](),
                      e.isPropagationStopped() && f.removeEventListener(m, Ot),
                      (C.event.triggered = void 0),
                      s && (n[u] = s))),
                  e.result
                );
              }
            },
            simulate: function (e, t, n) {
              var i = C.extend(new C.Event(), n, { type: e, isSimulated: !0 });
              C.event.trigger(i, null, t);
            },
          }),
            C.fn.extend({
              trigger: function (e, t) {
                return this.each(function () {
                  C.event.trigger(e, t, this);
                });
              },
              triggerHandler: function (e, t) {
                var n = this[0];
                if (n) return C.event.trigger(e, t, n, !0);
              },
            });
          var Nt = /\[\]$/,
            Ht = /\r?\n/g,
            It = /^(?:submit|button|image|reset|file)$/i,
            Mt = /^(?:input|select|textarea|keygen)/i;
          function Pt(e, t, n, i) {
            var r;
            if (Array.isArray(t))
              C.each(t, function (t, r) {
                n || Nt.test(e)
                  ? i(e, r)
                  : Pt(
                      e +
                        "[" +
                        ("object" == typeof r && null != r ? t : "") +
                        "]",
                      r,
                      n,
                      i
                    );
              });
            else if (n || "object" !== S(t)) i(e, t);
            else for (r in t) Pt(e + "[" + r + "]", t[r], n, i);
          }
          (C.param = function (e, t) {
            var n,
              i = [],
              r = function (e, t) {
                var n = y(t) ? t() : t;
                i[i.length] =
                  encodeURIComponent(e) +
                  "=" +
                  encodeURIComponent(null == n ? "" : n);
              };
            if (null == e) return "";
            if (Array.isArray(e) || (e.jquery && !C.isPlainObject(e)))
              C.each(e, function () {
                r(this.name, this.value);
              });
            else for (n in e) Pt(n, e[n], t, r);
            return i.join("&");
          }),
            C.fn.extend({
              serialize: function () {
                return C.param(this.serializeArray());
              },
              serializeArray: function () {
                return this.map(function () {
                  var e = C.prop(this, "elements");
                  return e ? C.makeArray(e) : this;
                })
                  .filter(function () {
                    var e = this.type;
                    return (
                      this.name &&
                      !C(this).is(":disabled") &&
                      Mt.test(this.nodeName) &&
                      !It.test(e) &&
                      (this.checked || !Ce.test(e))
                    );
                  })
                  .map(function (e, t) {
                    var n = C(this).val();
                    return null == n
                      ? null
                      : Array.isArray(n)
                      ? C.map(n, function (e) {
                          return { name: t.name, value: e.replace(Ht, "\r\n") };
                        })
                      : { name: t.name, value: n.replace(Ht, "\r\n") };
                  })
                  .get();
              },
            });
          var Rt = /%20/g,
            Wt = /#.*$/,
            zt = /([?&])_=[^&]*/,
            Bt = /^(.*?):[ \t]*([^\r\n]*)$/gm,
            $t = /^(?:GET|HEAD)$/,
            Ft = /^\/\//,
            Gt = {},
            Yt = {},
            Ut = "*/".concat("*"),
            Xt = b.createElement("a");
          function Vt(e) {
            return function (t, n) {
              "string" != typeof t && ((n = t), (t = "*"));
              var i,
                r = 0,
                o = t.toLowerCase().match(U) || [];
              if (y(n))
                for (; (i = o[r++]); )
                  "+" === i[0]
                    ? ((i = i.slice(1) || "*"), (e[i] = e[i] || []).unshift(n))
                    : (e[i] = e[i] || []).push(n);
            };
          }
          function Qt(e, t, n, i) {
            var r = {},
              o = e === Yt;
            function a(s) {
              var c;
              return (
                (r[s] = !0),
                C.each(e[s] || [], function (e, s) {
                  var u = s(t, n, i);
                  return "string" != typeof u || o || r[u]
                    ? o
                      ? !(c = u)
                      : void 0
                    : (t.dataTypes.unshift(u), a(u), !1);
                }),
                c
              );
            }
            return a(t.dataTypes[0]) || (!r["*"] && a("*"));
          }
          function Kt(e, t) {
            var n,
              i,
              r = C.ajaxSettings.flatOptions || {};
            for (n in t)
              void 0 !== t[n] && ((r[n] ? e : i || (i = {}))[n] = t[n]);
            return i && C.extend(!0, e, i), e;
          }
          (Xt.href = qt.href),
            C.extend({
              active: 0,
              lastModified: {},
              etag: {},
              ajaxSettings: {
                url: qt.href,
                type: "GET",
                isLocal:
                  /^(?:about|app|app-storage|.+-extension|file|res|widget):$/.test(
                    qt.protocol
                  ),
                global: !0,
                processData: !0,
                async: !0,
                contentType: "application/x-www-form-urlencoded; charset=UTF-8",
                accepts: {
                  "*": Ut,
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
                  "text xml": C.parseXML,
                },
                flatOptions: { url: !0, context: !0 },
              },
              ajaxSetup: function (e, t) {
                return t ? Kt(Kt(e, C.ajaxSettings), t) : Kt(C.ajaxSettings, e);
              },
              ajaxPrefilter: Vt(Gt),
              ajaxTransport: Vt(Yt),
              ajax: function (e, t) {
                "object" == typeof e && ((t = e), (e = void 0)), (t = t || {});
                var n,
                  r,
                  o,
                  a,
                  s,
                  c,
                  u,
                  l,
                  d,
                  f,
                  p = C.ajaxSetup({}, t),
                  h = p.context || p,
                  m = p.context && (h.nodeType || h.jquery) ? C(h) : C.event,
                  g = C.Deferred(),
                  y = C.Callbacks("once memory"),
                  v = p.statusCode || {},
                  x = {},
                  w = {},
                  S = "canceled",
                  E = {
                    readyState: 0,
                    getResponseHeader: function (e) {
                      var t;
                      if (u) {
                        if (!a)
                          for (a = {}; (t = Bt.exec(o)); )
                            a[t[1].toLowerCase() + " "] = (
                              a[t[1].toLowerCase() + " "] || []
                            ).concat(t[2]);
                        t = a[e.toLowerCase() + " "];
                      }
                      return null == t ? null : t.join(", ");
                    },
                    getAllResponseHeaders: function () {
                      return u ? o : null;
                    },
                    setRequestHeader: function (e, t) {
                      return (
                        null == u &&
                          ((e = w[e.toLowerCase()] = w[e.toLowerCase()] || e),
                          (x[e] = t)),
                        this
                      );
                    },
                    overrideMimeType: function (e) {
                      return null == u && (p.mimeType = e), this;
                    },
                    statusCode: function (e) {
                      var t;
                      if (e)
                        if (u) E.always(e[E.status]);
                        else for (t in e) v[t] = [v[t], e[t]];
                      return this;
                    },
                    abort: function (e) {
                      var t = e || S;
                      return n && n.abort(t), T(0, t), this;
                    },
                  };
                if (
                  (g.promise(E),
                  (p.url = ((e || p.url || qt.href) + "").replace(
                    Ft,
                    qt.protocol + "//"
                  )),
                  (p.type = t.method || t.type || p.method || p.type),
                  (p.dataTypes = (p.dataType || "*").toLowerCase().match(U) || [
                    "",
                  ]),
                  null == p.crossDomain)
                ) {
                  c = b.createElement("a");
                  try {
                    (c.href = p.url),
                      (c.href = c.href),
                      (p.crossDomain =
                        Xt.protocol + "//" + Xt.host !=
                        c.protocol + "//" + c.host);
                  } catch (e) {
                    p.crossDomain = !0;
                  }
                }
                if (
                  (p.data &&
                    p.processData &&
                    "string" != typeof p.data &&
                    (p.data = C.param(p.data, p.traditional)),
                  Qt(Gt, p, t, E),
                  u)
                )
                  return E;
                for (d in ((l = C.event && p.global) &&
                  0 == C.active++ &&
                  C.event.trigger("ajaxStart"),
                (p.type = p.type.toUpperCase()),
                (p.hasContent = !$t.test(p.type)),
                (r = p.url.replace(Wt, "")),
                p.hasContent
                  ? p.data &&
                    p.processData &&
                    0 ===
                      (p.contentType || "").indexOf(
                        "application/x-www-form-urlencoded"
                      ) &&
                    (p.data = p.data.replace(Rt, "+"))
                  : ((f = p.url.slice(r.length)),
                    p.data &&
                      (p.processData || "string" == typeof p.data) &&
                      ((r += (Dt.test(r) ? "&" : "?") + p.data), delete p.data),
                    !1 === p.cache &&
                      ((r = r.replace(zt, "$1")),
                      (f = (Dt.test(r) ? "&" : "?") + "_=" + At.guid++ + f)),
                    (p.url = r + f)),
                p.ifModified &&
                  (C.lastModified[r] &&
                    E.setRequestHeader("If-Modified-Since", C.lastModified[r]),
                  C.etag[r] && E.setRequestHeader("If-None-Match", C.etag[r])),
                ((p.data && p.hasContent && !1 !== p.contentType) ||
                  t.contentType) &&
                  E.setRequestHeader("Content-Type", p.contentType),
                E.setRequestHeader(
                  "Accept",
                  p.dataTypes[0] && p.accepts[p.dataTypes[0]]
                    ? p.accepts[p.dataTypes[0]] +
                        ("*" !== p.dataTypes[0] ? ", " + Ut + "; q=0.01" : "")
                    : p.accepts["*"]
                ),
                p.headers))
                  E.setRequestHeader(d, p.headers[d]);
                if (p.beforeSend && (!1 === p.beforeSend.call(h, E, p) || u))
                  return E.abort();
                if (
                  ((S = "abort"),
                  y.add(p.complete),
                  E.done(p.success),
                  E.fail(p.error),
                  (n = Qt(Yt, p, t, E)))
                ) {
                  if (
                    ((E.readyState = 1), l && m.trigger("ajaxSend", [E, p]), u)
                  )
                    return E;
                  p.async &&
                    p.timeout > 0 &&
                    (s = i.setTimeout(function () {
                      E.abort("timeout");
                    }, p.timeout));
                  try {
                    (u = !1), n.send(x, T);
                  } catch (e) {
                    if (u) throw e;
                    T(-1, e);
                  }
                } else T(-1, "No Transport");
                function T(e, t, a, c) {
                  var d,
                    f,
                    b,
                    x,
                    w,
                    S = t;
                  u ||
                    ((u = !0),
                    s && i.clearTimeout(s),
                    (n = void 0),
                    (o = c || ""),
                    (E.readyState = e > 0 ? 4 : 0),
                    (d = (e >= 200 && e < 300) || 304 === e),
                    a &&
                      (x = (function (e, t, n) {
                        for (
                          var i, r, o, a, s = e.contents, c = e.dataTypes;
                          "*" === c[0];

                        )
                          c.shift(),
                            void 0 === i &&
                              (i =
                                e.mimeType ||
                                t.getResponseHeader("Content-Type"));
                        if (i)
                          for (r in s)
                            if (s[r] && s[r].test(i)) {
                              c.unshift(r);
                              break;
                            }
                        if (c[0] in n) o = c[0];
                        else {
                          for (r in n) {
                            if (!c[0] || e.converters[r + " " + c[0]]) {
                              o = r;
                              break;
                            }
                            a || (a = r);
                          }
                          o = o || a;
                        }
                        if (o) return o !== c[0] && c.unshift(o), n[o];
                      })(p, E, a)),
                    !d &&
                      C.inArray("script", p.dataTypes) > -1 &&
                      C.inArray("json", p.dataTypes) < 0 &&
                      (p.converters["text script"] = function () {}),
                    (x = (function (e, t, n, i) {
                      var r,
                        o,
                        a,
                        s,
                        c,
                        u = {},
                        l = e.dataTypes.slice();
                      if (l[1])
                        for (a in e.converters)
                          u[a.toLowerCase()] = e.converters[a];
                      for (o = l.shift(); o; )
                        if (
                          (e.responseFields[o] && (n[e.responseFields[o]] = t),
                          !c &&
                            i &&
                            e.dataFilter &&
                            (t = e.dataFilter(t, e.dataType)),
                          (c = o),
                          (o = l.shift()))
                        )
                          if ("*" === o) o = c;
                          else if ("*" !== c && c !== o) {
                            if (!(a = u[c + " " + o] || u["* " + o]))
                              for (r in u)
                                if (
                                  (s = r.split(" "))[1] === o &&
                                  (a = u[c + " " + s[0]] || u["* " + s[0]])
                                ) {
                                  !0 === a
                                    ? (a = u[r])
                                    : !0 !== u[r] &&
                                      ((o = s[0]), l.unshift(s[1]));
                                  break;
                                }
                            if (!0 !== a)
                              if (a && e.throws) t = a(t);
                              else
                                try {
                                  t = a(t);
                                } catch (e) {
                                  return {
                                    state: "parsererror",
                                    error: a
                                      ? e
                                      : "No conversion from " + c + " to " + o,
                                  };
                                }
                          }
                      return { state: "success", data: t };
                    })(p, x, E, d)),
                    d
                      ? (p.ifModified &&
                          ((w = E.getResponseHeader("Last-Modified")) &&
                            (C.lastModified[r] = w),
                          (w = E.getResponseHeader("etag")) && (C.etag[r] = w)),
                        204 === e || "HEAD" === p.type
                          ? (S = "nocontent")
                          : 304 === e
                          ? (S = "notmodified")
                          : ((S = x.state), (f = x.data), (d = !(b = x.error))))
                      : ((b = S),
                        (!e && S) || ((S = "error"), e < 0 && (e = 0))),
                    (E.status = e),
                    (E.statusText = (t || S) + ""),
                    d
                      ? g.resolveWith(h, [f, S, E])
                      : g.rejectWith(h, [E, S, b]),
                    E.statusCode(v),
                    (v = void 0),
                    l &&
                      m.trigger(d ? "ajaxSuccess" : "ajaxError", [
                        E,
                        p,
                        d ? f : b,
                      ]),
                    y.fireWith(h, [E, S]),
                    l &&
                      (m.trigger("ajaxComplete", [E, p]),
                      --C.active || C.event.trigger("ajaxStop")));
                }
                return E;
              },
              getJSON: function (e, t, n) {
                return C.get(e, t, n, "json");
              },
              getScript: function (e, t) {
                return C.get(e, void 0, t, "script");
              },
            }),
            C.each(["get", "post"], function (e, t) {
              C[t] = function (e, n, i, r) {
                return (
                  y(n) && ((r = r || i), (i = n), (n = void 0)),
                  C.ajax(
                    C.extend(
                      { url: e, type: t, dataType: r, data: n, success: i },
                      C.isPlainObject(e) && e
                    )
                  )
                );
              };
            }),
            C.ajaxPrefilter(function (e) {
              var t;
              for (t in e.headers)
                "content-type" === t.toLowerCase() &&
                  (e.contentType = e.headers[t] || "");
            }),
            (C._evalUrl = function (e, t, n) {
              return C.ajax({
                url: e,
                type: "GET",
                dataType: "script",
                cache: !0,
                async: !1,
                global: !1,
                converters: { "text script": function () {} },
                dataFilter: function (e) {
                  C.globalEval(e, t, n);
                },
              });
            }),
            C.fn.extend({
              wrapAll: function (e) {
                var t;
                return (
                  this[0] &&
                    (y(e) && (e = e.call(this[0])),
                    (t = C(e, this[0].ownerDocument).eq(0).clone(!0)),
                    this[0].parentNode && t.insertBefore(this[0]),
                    t
                      .map(function () {
                        for (var e = this; e.firstElementChild; )
                          e = e.firstElementChild;
                        return e;
                      })
                      .append(this)),
                  this
                );
              },
              wrapInner: function (e) {
                return y(e)
                  ? this.each(function (t) {
                      C(this).wrapInner(e.call(this, t));
                    })
                  : this.each(function () {
                      var t = C(this),
                        n = t.contents();
                      n.length ? n.wrapAll(e) : t.append(e);
                    });
              },
              wrap: function (e) {
                var t = y(e);
                return this.each(function (n) {
                  C(this).wrapAll(t ? e.call(this, n) : e);
                });
              },
              unwrap: function (e) {
                return (
                  this.parent(e)
                    .not("body")
                    .each(function () {
                      C(this).replaceWith(this.childNodes);
                    }),
                  this
                );
              },
            }),
            (C.expr.pseudos.hidden = function (e) {
              return !C.expr.pseudos.visible(e);
            }),
            (C.expr.pseudos.visible = function (e) {
              return !!(
                e.offsetWidth ||
                e.offsetHeight ||
                e.getClientRects().length
              );
            }),
            (C.ajaxSettings.xhr = function () {
              try {
                return new i.XMLHttpRequest();
              } catch (e) {}
            });
          var Jt = { 0: 200, 1223: 204 },
            Zt = C.ajaxSettings.xhr();
          (g.cors = !!Zt && "withCredentials" in Zt),
            (g.ajax = Zt = !!Zt),
            C.ajaxTransport(function (e) {
              var t, n;
              if (g.cors || (Zt && !e.crossDomain))
                return {
                  send: function (r, o) {
                    var a,
                      s = e.xhr();
                    if (
                      (s.open(e.type, e.url, e.async, e.username, e.password),
                      e.xhrFields)
                    )
                      for (a in e.xhrFields) s[a] = e.xhrFields[a];
                    for (a in (e.mimeType &&
                      s.overrideMimeType &&
                      s.overrideMimeType(e.mimeType),
                    e.crossDomain ||
                      r["X-Requested-With"] ||
                      (r["X-Requested-With"] = "XMLHttpRequest"),
                    r))
                      s.setRequestHeader(a, r[a]);
                    (t = function (e) {
                      return function () {
                        t &&
                          ((t =
                            n =
                            s.onload =
                            s.onerror =
                            s.onabort =
                            s.ontimeout =
                            s.onreadystatechange =
                              null),
                          "abort" === e
                            ? s.abort()
                            : "error" === e
                            ? "number" != typeof s.status
                              ? o(0, "error")
                              : o(s.status, s.statusText)
                            : o(
                                Jt[s.status] || s.status,
                                s.statusText,
                                "text" !== (s.responseType || "text") ||
                                  "string" != typeof s.responseText
                                  ? { binary: s.response }
                                  : { text: s.responseText },
                                s.getAllResponseHeaders()
                              ));
                      };
                    }),
                      (s.onload = t()),
                      (n = s.onerror = s.ontimeout = t("error")),
                      void 0 !== s.onabort
                        ? (s.onabort = n)
                        : (s.onreadystatechange = function () {
                            4 === s.readyState &&
                              i.setTimeout(function () {
                                t && n();
                              });
                          }),
                      (t = t("abort"));
                    try {
                      s.send((e.hasContent && e.data) || null);
                    } catch (e) {
                      if (t) throw e;
                    }
                  },
                  abort: function () {
                    t && t();
                  },
                };
            }),
            C.ajaxPrefilter(function (e) {
              e.crossDomain && (e.contents.script = !1);
            }),
            C.ajaxSetup({
              accepts: {
                script:
                  "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript",
              },
              contents: { script: /\b(?:java|ecma)script\b/ },
              converters: {
                "text script": function (e) {
                  return C.globalEval(e), e;
                },
              },
            }),
            C.ajaxPrefilter("script", function (e) {
              void 0 === e.cache && (e.cache = !1),
                e.crossDomain && (e.type = "GET");
            }),
            C.ajaxTransport("script", function (e) {
              var t, n;
              if (e.crossDomain || e.scriptAttrs)
                return {
                  send: function (i, r) {
                    (t = C("<script>")
                      .attr(e.scriptAttrs || {})
                      .prop({ charset: e.scriptCharset, src: e.url })
                      .on(
                        "load error",
                        (n = function (e) {
                          t.remove(),
                            (n = null),
                            e && r("error" === e.type ? 404 : 200, e.type);
                        })
                      )),
                      b.head.appendChild(t[0]);
                  },
                  abort: function () {
                    n && n();
                  },
                };
            });
          var en,
            tn = [],
            nn = /(=)\?(?=&|$)|\?\?/;
          C.ajaxSetup({
            jsonp: "callback",
            jsonpCallback: function () {
              var e = tn.pop() || C.expando + "_" + At.guid++;
              return (this[e] = !0), e;
            },
          }),
            C.ajaxPrefilter("json jsonp", function (e, t, n) {
              var r,
                o,
                a,
                s =
                  !1 !== e.jsonp &&
                  (nn.test(e.url)
                    ? "url"
                    : "string" == typeof e.data &&
                      0 ===
                        (e.contentType || "").indexOf(
                          "application/x-www-form-urlencoded"
                        ) &&
                      nn.test(e.data) &&
                      "data");
              if (s || "jsonp" === e.dataTypes[0])
                return (
                  (r = e.jsonpCallback =
                    y(e.jsonpCallback) ? e.jsonpCallback() : e.jsonpCallback),
                  s
                    ? (e[s] = e[s].replace(nn, "$1" + r))
                    : !1 !== e.jsonp &&
                      (e.url +=
                        (Dt.test(e.url) ? "&" : "?") + e.jsonp + "=" + r),
                  (e.converters["script json"] = function () {
                    return a || C.error(r + " was not called"), a[0];
                  }),
                  (e.dataTypes[0] = "json"),
                  (o = i[r]),
                  (i[r] = function () {
                    a = arguments;
                  }),
                  n.always(function () {
                    void 0 === o ? C(i).removeProp(r) : (i[r] = o),
                      e[r] && ((e.jsonpCallback = t.jsonpCallback), tn.push(r)),
                      a && y(o) && o(a[0]),
                      (a = o = void 0);
                  }),
                  "script"
                );
            }),
            (g.createHTMLDocument =
              (((en = b.implementation.createHTMLDocument("").body).innerHTML =
                "<form></form><form></form>"),
              2 === en.childNodes.length)),
            (C.parseHTML = function (e, t, n) {
              return "string" != typeof e
                ? []
                : ("boolean" == typeof t && ((n = t), (t = !1)),
                  t ||
                    (g.createHTMLDocument
                      ? (((i = (t =
                          b.implementation.createHTMLDocument(
                            ""
                          )).createElement("base")).href = b.location.href),
                        t.head.appendChild(i))
                      : (t = b)),
                  (o = !n && []),
                  (r = W.exec(e))
                    ? [t.createElement(r[1])]
                    : ((r = je([e], t, o)),
                      o && o.length && C(o).remove(),
                      C.merge([], r.childNodes)));
              var i, r, o;
            }),
            (C.fn.load = function (e, t, n) {
              var i,
                r,
                o,
                a = this,
                s = e.indexOf(" ");
              return (
                s > -1 && ((i = Ct(e.slice(s))), (e = e.slice(0, s))),
                y(t)
                  ? ((n = t), (t = void 0))
                  : t && "object" == typeof t && (r = "POST"),
                a.length > 0 &&
                  C.ajax({
                    url: e,
                    type: r || "GET",
                    dataType: "html",
                    data: t,
                  })
                    .done(function (e) {
                      (o = arguments),
                        a.html(
                          i ? C("<div>").append(C.parseHTML(e)).find(i) : e
                        );
                    })
                    .always(
                      n &&
                        function (e, t) {
                          a.each(function () {
                            n.apply(this, o || [e.responseText, t, e]);
                          });
                        }
                    ),
                this
              );
            }),
            (C.expr.pseudos.animated = function (e) {
              return C.grep(C.timers, function (t) {
                return e === t.elem;
              }).length;
            }),
            (C.offset = {
              setOffset: function (e, t, n) {
                var i,
                  r,
                  o,
                  a,
                  s,
                  c,
                  u = C.css(e, "position"),
                  l = C(e),
                  d = {};
                "static" === u && (e.style.position = "relative"),
                  (s = l.offset()),
                  (o = C.css(e, "top")),
                  (c = C.css(e, "left")),
                  ("absolute" === u || "fixed" === u) &&
                  (o + c).indexOf("auto") > -1
                    ? ((a = (i = l.position()).top), (r = i.left))
                    : ((a = parseFloat(o) || 0), (r = parseFloat(c) || 0)),
                  y(t) && (t = t.call(e, n, C.extend({}, s))),
                  null != t.top && (d.top = t.top - s.top + a),
                  null != t.left && (d.left = t.left - s.left + r),
                  "using" in t ? t.using.call(e, d) : l.css(d);
              },
            }),
            C.fn.extend({
              offset: function (e) {
                if (arguments.length)
                  return void 0 === e
                    ? this
                    : this.each(function (t) {
                        C.offset.setOffset(this, e, t);
                      });
                var t,
                  n,
                  i = this[0];
                return i
                  ? i.getClientRects().length
                    ? ((t = i.getBoundingClientRect()),
                      (n = i.ownerDocument.defaultView),
                      {
                        top: t.top + n.pageYOffset,
                        left: t.left + n.pageXOffset,
                      })
                    : { top: 0, left: 0 }
                  : void 0;
              },
              position: function () {
                if (this[0]) {
                  var e,
                    t,
                    n,
                    i = this[0],
                    r = { top: 0, left: 0 };
                  if ("fixed" === C.css(i, "position"))
                    t = i.getBoundingClientRect();
                  else {
                    for (
                      t = this.offset(),
                        n = i.ownerDocument,
                        e = i.offsetParent || n.documentElement;
                      e &&
                      (e === n.body || e === n.documentElement) &&
                      "static" === C.css(e, "position");

                    )
                      e = e.parentNode;
                    e &&
                      e !== i &&
                      1 === e.nodeType &&
                      (((r = C(e).offset()).top += C.css(
                        e,
                        "borderTopWidth",
                        !0
                      )),
                      (r.left += C.css(e, "borderLeftWidth", !0)));
                  }
                  return {
                    top: t.top - r.top - C.css(i, "marginTop", !0),
                    left: t.left - r.left - C.css(i, "marginLeft", !0),
                  };
                }
              },
              offsetParent: function () {
                return this.map(function () {
                  for (
                    var e = this.offsetParent;
                    e && "static" === C.css(e, "position");

                  )
                    e = e.offsetParent;
                  return e || me;
                });
              },
            }),
            C.each(
              { scrollLeft: "pageXOffset", scrollTop: "pageYOffset" },
              function (e, t) {
                var n = "pageYOffset" === t;
                C.fn[e] = function (i) {
                  return ee(
                    this,
                    function (e, i, r) {
                      var o;
                      if (
                        (v(e)
                          ? (o = e)
                          : 9 === e.nodeType && (o = e.defaultView),
                        void 0 === r)
                      )
                        return o ? o[t] : e[i];
                      o
                        ? o.scrollTo(
                            n ? o.pageXOffset : r,
                            n ? r : o.pageYOffset
                          )
                        : (e[i] = r);
                    },
                    e,
                    i,
                    arguments.length
                  );
                };
              }
            ),
            C.each(["top", "left"], function (e, t) {
              C.cssHooks[t] = et(g.pixelPosition, function (e, n) {
                if (n)
                  return (
                    (n = Ze(e, t)), Xe.test(n) ? C(e).position()[t] + "px" : n
                  );
              });
            }),
            C.each({ Height: "height", Width: "width" }, function (e, t) {
              C.each(
                { padding: "inner" + e, content: t, "": "outer" + e },
                function (n, i) {
                  C.fn[i] = function (r, o) {
                    var a = arguments.length && (n || "boolean" != typeof r),
                      s = n || (!0 === r || !0 === o ? "margin" : "border");
                    return ee(
                      this,
                      function (t, n, r) {
                        var o;
                        return v(t)
                          ? 0 === i.indexOf("outer")
                            ? t["inner" + e]
                            : t.document.documentElement["client" + e]
                          : 9 === t.nodeType
                          ? ((o = t.documentElement),
                            Math.max(
                              t.body["scroll" + e],
                              o["scroll" + e],
                              t.body["offset" + e],
                              o["offset" + e],
                              o["client" + e]
                            ))
                          : void 0 === r
                          ? C.css(t, n, s)
                          : C.style(t, n, r, s);
                      },
                      t,
                      a ? r : void 0,
                      a
                    );
                  };
                }
              );
            }),
            C.each(
              [
                "ajaxStart",
                "ajaxStop",
                "ajaxComplete",
                "ajaxError",
                "ajaxSuccess",
                "ajaxSend",
              ],
              function (e, t) {
                C.fn[t] = function (e) {
                  return this.on(t, e);
                };
              }
            ),
            C.fn.extend({
              bind: function (e, t, n) {
                return this.on(e, null, t, n);
              },
              unbind: function (e, t) {
                return this.off(e, null, t);
              },
              delegate: function (e, t, n, i) {
                return this.on(t, e, n, i);
              },
              undelegate: function (e, t, n) {
                return 1 === arguments.length
                  ? this.off(e, "**")
                  : this.off(t, e || "**", n);
              },
              hover: function (e, t) {
                return this.on("mouseenter", e).on("mouseleave", t || e);
              },
            }),
            C.each(
              "blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(
                " "
              ),
              function (e, t) {
                C.fn[t] = function (e, n) {
                  return arguments.length > 0
                    ? this.on(t, null, e, n)
                    : this.trigger(t);
                };
              }
            );
          var rn = /^[\s\uFEFF\xA0]+|([^\s\uFEFF\xA0])[\s\uFEFF\xA0]+$/g;
          (C.proxy = function (e, t) {
            var n, i, r;
            if (("string" == typeof t && ((n = e[t]), (t = e), (e = n)), y(e)))
              return (
                (i = s.call(arguments, 2)),
                (r = function () {
                  return e.apply(t || this, i.concat(s.call(arguments)));
                }),
                (r.guid = e.guid = e.guid || C.guid++),
                r
              );
          }),
            (C.holdReady = function (e) {
              e ? C.readyWait++ : C.ready(!0);
            }),
            (C.isArray = Array.isArray),
            (C.parseJSON = JSON.parse),
            (C.nodeName = k),
            (C.isFunction = y),
            (C.isWindow = v),
            (C.camelCase = re),
            (C.type = S),
            (C.now = Date.now),
            (C.isNumeric = function (e) {
              var t = C.type(e);
              return (
                ("number" === t || "string" === t) && !isNaN(e - parseFloat(e))
              );
            }),
            (C.trim = function (e) {
              return null == e ? "" : (e + "").replace(rn, "$1");
            }),
            void 0 ===
              (n = function () {
                return C;
              }.apply(t, [])) || (e.exports = n);
          var on = i.jQuery,
            an = i.$;
          return (
            (C.noConflict = function (e) {
              return (
                i.$ === C && (i.$ = an),
                e && i.jQuery === C && (i.jQuery = on),
                C
              );
            }),
            void 0 === r && (i.jQuery = i.$ = C),
            C
          );
        });
      },
      751: function (e, t, n) {
        var i, r, o;
        window,
          (r = [n(794), n(131)]),
          void 0 ===
            (o =
              "function" ==
              typeof (i = function (e, t) {
                "use strict";
                var n = e.create("masonry");
                n.compatOptions.fitWidth = "isFitWidth";
                var i = n.prototype;
                return (
                  (i._resetLayout = function () {
                    this.getSize(),
                      this._getMeasurement("columnWidth", "outerWidth"),
                      this._getMeasurement("gutter", "outerWidth"),
                      this.measureColumns(),
                      (this.colYs = []);
                    for (var e = 0; e < this.cols; e++) this.colYs.push(0);
                    (this.maxY = 0), (this.horizontalColIndex = 0);
                  }),
                  (i.measureColumns = function () {
                    if ((this.getContainerWidth(), !this.columnWidth)) {
                      var e = this.items[0],
                        n = e && e.element;
                      this.columnWidth =
                        (n && t(n).outerWidth) || this.containerWidth;
                    }
                    var i = (this.columnWidth += this.gutter),
                      r = this.containerWidth + this.gutter,
                      o = r / i,
                      a = i - (r % i);
                    (o = Math[a && a < 1 ? "round" : "floor"](o)),
                      (this.cols = Math.max(o, 1));
                  }),
                  (i.getContainerWidth = function () {
                    var e = this._getOption("fitWidth")
                        ? this.element.parentNode
                        : this.element,
                      n = t(e);
                    this.containerWidth = n && n.innerWidth;
                  }),
                  (i._getItemLayoutPosition = function (e) {
                    e.getSize();
                    var t = e.size.outerWidth % this.columnWidth,
                      n = Math[t && t < 1 ? "round" : "ceil"](
                        e.size.outerWidth / this.columnWidth
                      );
                    n = Math.min(n, this.cols);
                    for (
                      var i = this[
                          this.options.horizontalOrder
                            ? "_getHorizontalColPosition"
                            : "_getTopColPosition"
                        ](n, e),
                        r = { x: this.columnWidth * i.col, y: i.y },
                        o = i.y + e.size.outerHeight,
                        a = n + i.col,
                        s = i.col;
                      s < a;
                      s++
                    )
                      this.colYs[s] = o;
                    return r;
                  }),
                  (i._getTopColPosition = function (e) {
                    var t = this._getTopColGroup(e),
                      n = Math.min.apply(Math, t);
                    return { col: t.indexOf(n), y: n };
                  }),
                  (i._getTopColGroup = function (e) {
                    if (e < 2) return this.colYs;
                    for (var t = [], n = this.cols + 1 - e, i = 0; i < n; i++)
                      t[i] = this._getColGroupY(i, e);
                    return t;
                  }),
                  (i._getColGroupY = function (e, t) {
                    if (t < 2) return this.colYs[e];
                    var n = this.colYs.slice(e, e + t);
                    return Math.max.apply(Math, n);
                  }),
                  (i._getHorizontalColPosition = function (e, t) {
                    var n = this.horizontalColIndex % this.cols;
                    n = e > 1 && n + e > this.cols ? 0 : n;
                    var i = t.size.outerWidth && t.size.outerHeight;
                    return (
                      (this.horizontalColIndex = i
                        ? n + e
                        : this.horizontalColIndex),
                      { col: n, y: this._getColGroupY(n, e) }
                    );
                  }),
                  (i._manageStamp = function (e) {
                    var n = t(e),
                      i = this._getElementOffset(e),
                      r = this._getOption("originLeft") ? i.left : i.right,
                      o = r + n.outerWidth,
                      a = Math.floor(r / this.columnWidth);
                    a = Math.max(0, a);
                    var s = Math.floor(o / this.columnWidth);
                    (s -= o % this.columnWidth ? 0 : 1),
                      (s = Math.min(this.cols - 1, s));
                    for (
                      var c =
                          (this._getOption("originTop") ? i.top : i.bottom) +
                          n.outerHeight,
                        u = a;
                      u <= s;
                      u++
                    )
                      this.colYs[u] = Math.max(c, this.colYs[u]);
                  }),
                  (i._getContainerSize = function () {
                    this.maxY = Math.max.apply(Math, this.colYs);
                    var e = { height: this.maxY };
                    return (
                      this._getOption("fitWidth") &&
                        (e.width = this._getContainerFitWidth()),
                      e
                    );
                  }),
                  (i._getContainerFitWidth = function () {
                    for (var e = 0, t = this.cols; --t && 0 === this.colYs[t]; )
                      e++;
                    return (this.cols - e) * this.columnWidth - this.gutter;
                  }),
                  (i.needsResizeLayout = function () {
                    var e = this.containerWidth;
                    return this.getContainerWidth(), e != this.containerWidth;
                  }),
                  n
                );
              })
                ? i.apply(t, r)
                : i) || (e.exports = o);
      },
      652: function (e, t, n) {
        var i, r, o;
        window,
          (r = [n(158), n(131)]),
          void 0 ===
            (o =
              "function" ==
              typeof (i = function (e, t) {
                "use strict";
                var n = document.documentElement.style,
                  i =
                    "string" == typeof n.transition
                      ? "transition"
                      : "WebkitTransition",
                  r =
                    "string" == typeof n.transform
                      ? "transform"
                      : "WebkitTransform",
                  o = {
                    WebkitTransition: "webkitTransitionEnd",
                    transition: "transitionend",
                  }[i],
                  a = {
                    transform: r,
                    transition: i,
                    transitionDuration: i + "Duration",
                    transitionProperty: i + "Property",
                    transitionDelay: i + "Delay",
                  };
                function s(e, t) {
                  e &&
                    ((this.element = e),
                    (this.layout = t),
                    (this.position = { x: 0, y: 0 }),
                    this._create());
                }
                var c = (s.prototype = Object.create(e.prototype));
                (c.constructor = s),
                  (c._create = function () {
                    (this._transn = {
                      ingProperties: {},
                      clean: {},
                      onEnd: {},
                    }),
                      this.css({ position: "absolute" });
                  }),
                  (c.handleEvent = function (e) {
                    var t = "on" + e.type;
                    this[t] && this[t](e);
                  }),
                  (c.getSize = function () {
                    this.size = t(this.element);
                  }),
                  (c.css = function (e) {
                    var t = this.element.style;
                    for (var n in e) t[a[n] || n] = e[n];
                  }),
                  (c.getPosition = function () {
                    var e = getComputedStyle(this.element),
                      t = this.layout._getOption("originLeft"),
                      n = this.layout._getOption("originTop"),
                      i = e[t ? "left" : "right"],
                      r = e[n ? "top" : "bottom"],
                      o = parseFloat(i),
                      a = parseFloat(r),
                      s = this.layout.size;
                    -1 != i.indexOf("%") && (o = (o / 100) * s.width),
                      -1 != r.indexOf("%") && (a = (a / 100) * s.height),
                      (o = isNaN(o) ? 0 : o),
                      (a = isNaN(a) ? 0 : a),
                      (o -= t ? s.paddingLeft : s.paddingRight),
                      (a -= n ? s.paddingTop : s.paddingBottom),
                      (this.position.x = o),
                      (this.position.y = a);
                  }),
                  (c.layoutPosition = function () {
                    var e = this.layout.size,
                      t = {},
                      n = this.layout._getOption("originLeft"),
                      i = this.layout._getOption("originTop"),
                      r = n ? "paddingLeft" : "paddingRight",
                      o = n ? "left" : "right",
                      a = n ? "right" : "left",
                      s = this.position.x + e[r];
                    (t[o] = this.getXValue(s)), (t[a] = "");
                    var c = i ? "paddingTop" : "paddingBottom",
                      u = i ? "top" : "bottom",
                      l = i ? "bottom" : "top",
                      d = this.position.y + e[c];
                    (t[u] = this.getYValue(d)),
                      (t[l] = ""),
                      this.css(t),
                      this.emitEvent("layout", [this]);
                  }),
                  (c.getXValue = function (e) {
                    var t = this.layout._getOption("horizontal");
                    return this.layout.options.percentPosition && !t
                      ? (e / this.layout.size.width) * 100 + "%"
                      : e + "px";
                  }),
                  (c.getYValue = function (e) {
                    var t = this.layout._getOption("horizontal");
                    return this.layout.options.percentPosition && t
                      ? (e / this.layout.size.height) * 100 + "%"
                      : e + "px";
                  }),
                  (c._transitionTo = function (e, t) {
                    this.getPosition();
                    var n = this.position.x,
                      i = this.position.y,
                      r = e == this.position.x && t == this.position.y;
                    if ((this.setPosition(e, t), !r || this.isTransitioning)) {
                      var o = e - n,
                        a = t - i,
                        s = {};
                      (s.transform = this.getTranslate(o, a)),
                        this.transition({
                          to: s,
                          onTransitionEnd: { transform: this.layoutPosition },
                          isCleaning: !0,
                        });
                    } else this.layoutPosition();
                  }),
                  (c.getTranslate = function (e, t) {
                    return (
                      "translate3d(" +
                      (e = this.layout._getOption("originLeft") ? e : -e) +
                      "px, " +
                      (t = this.layout._getOption("originTop") ? t : -t) +
                      "px, 0)"
                    );
                  }),
                  (c.goTo = function (e, t) {
                    this.setPosition(e, t), this.layoutPosition();
                  }),
                  (c.moveTo = c._transitionTo),
                  (c.setPosition = function (e, t) {
                    (this.position.x = parseFloat(e)),
                      (this.position.y = parseFloat(t));
                  }),
                  (c._nonTransition = function (e) {
                    for (var t in (this.css(e.to),
                    e.isCleaning && this._removeStyles(e.to),
                    e.onTransitionEnd))
                      e.onTransitionEnd[t].call(this);
                  }),
                  (c.transition = function (e) {
                    if (parseFloat(this.layout.options.transitionDuration)) {
                      var t = this._transn;
                      for (var n in e.onTransitionEnd)
                        t.onEnd[n] = e.onTransitionEnd[n];
                      for (n in e.to)
                        (t.ingProperties[n] = !0),
                          e.isCleaning && (t.clean[n] = !0);
                      e.from && (this.css(e.from), this.element.offsetHeight),
                        this.enableTransition(e.to),
                        this.css(e.to),
                        (this.isTransitioning = !0);
                    } else this._nonTransition(e);
                  });
                var u =
                  "opacity," +
                  r.replace(/([A-Z])/g, function (e) {
                    return "-" + e.toLowerCase();
                  });
                (c.enableTransition = function () {
                  if (!this.isTransitioning) {
                    var e = this.layout.options.transitionDuration;
                    (e = "number" == typeof e ? e + "ms" : e),
                      this.css({
                        transitionProperty: u,
                        transitionDuration: e,
                        transitionDelay: this.staggerDelay || 0,
                      }),
                      this.element.addEventListener(o, this, !1);
                  }
                }),
                  (c.onwebkitTransitionEnd = function (e) {
                    this.ontransitionend(e);
                  }),
                  (c.onotransitionend = function (e) {
                    this.ontransitionend(e);
                  });
                var l = { "-webkit-transform": "transform" };
                (c.ontransitionend = function (e) {
                  if (e.target === this.element) {
                    var t = this._transn,
                      n = l[e.propertyName] || e.propertyName;
                    delete t.ingProperties[n],
                      (function (e) {
                        for (var t in e) return !1;
                        return !0;
                      })(t.ingProperties) && this.disableTransition(),
                      n in t.clean &&
                        ((this.element.style[e.propertyName] = ""),
                        delete t.clean[n]),
                      n in t.onEnd &&
                        (t.onEnd[n].call(this), delete t.onEnd[n]),
                      this.emitEvent("transitionEnd", [this]);
                  }
                }),
                  (c.disableTransition = function () {
                    this.removeTransitionStyles(),
                      this.element.removeEventListener(o, this, !1),
                      (this.isTransitioning = !1);
                  }),
                  (c._removeStyles = function (e) {
                    var t = {};
                    for (var n in e) t[n] = "";
                    this.css(t);
                  });
                var d = {
                  transitionProperty: "",
                  transitionDuration: "",
                  transitionDelay: "",
                };
                return (
                  (c.removeTransitionStyles = function () {
                    this.css(d);
                  }),
                  (c.stagger = function (e) {
                    (e = isNaN(e) ? 0 : e), (this.staggerDelay = e + "ms");
                  }),
                  (c.removeElem = function () {
                    this.element.parentNode.removeChild(this.element),
                      this.css({ display: "" }),
                      this.emitEvent("remove", [this]);
                  }),
                  (c.remove = function () {
                    i && parseFloat(this.layout.options.transitionDuration)
                      ? (this.once("transitionEnd", function () {
                          this.removeElem();
                        }),
                        this.hide())
                      : this.removeElem();
                  }),
                  (c.reveal = function () {
                    delete this.isHidden, this.css({ display: "" });
                    var e = this.layout.options,
                      t = {};
                    (t[
                      this.getHideRevealTransitionEndProperty("visibleStyle")
                    ] = this.onRevealTransitionEnd),
                      this.transition({
                        from: e.hiddenStyle,
                        to: e.visibleStyle,
                        isCleaning: !0,
                        onTransitionEnd: t,
                      });
                  }),
                  (c.onRevealTransitionEnd = function () {
                    this.isHidden || this.emitEvent("reveal");
                  }),
                  (c.getHideRevealTransitionEndProperty = function (e) {
                    var t = this.layout.options[e];
                    if (t.opacity) return "opacity";
                    for (var n in t) return n;
                  }),
                  (c.hide = function () {
                    (this.isHidden = !0), this.css({ display: "" });
                    var e = this.layout.options,
                      t = {};
                    (t[this.getHideRevealTransitionEndProperty("hiddenStyle")] =
                      this.onHideTransitionEnd),
                      this.transition({
                        from: e.visibleStyle,
                        to: e.hiddenStyle,
                        isCleaning: !0,
                        onTransitionEnd: t,
                      });
                  }),
                  (c.onHideTransitionEnd = function () {
                    this.isHidden &&
                      (this.css({ display: "none" }), this.emitEvent("hide"));
                  }),
                  (c.destroy = function () {
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
                  s
                );
              })
                ? i.apply(t, r)
                : i) || (e.exports = o);
      },
      794: function (e, t, n) {
        var i, r;
        !(function (o, a) {
          "use strict";
          (i = [n(158), n(131), n(47), n(652)]),
            (r = function (e, t, n, i) {
              return (function (e, t, n, i, r) {
                var o = e.console,
                  a = e.jQuery,
                  s = function () {},
                  c = 0,
                  u = {};
                function l(e, t) {
                  var n = i.getQueryElement(e);
                  if (n) {
                    (this.element = n),
                      a && (this.$element = a(this.element)),
                      (this.options = i.extend({}, this.constructor.defaults)),
                      this.option(t);
                    var r = ++c;
                    (this.element.outlayerGUID = r),
                      (u[r] = this),
                      this._create(),
                      this._getOption("initLayout") && this.layout();
                  } else
                    o &&
                      o.error(
                        "Bad element for " +
                          this.constructor.namespace +
                          ": " +
                          (n || e)
                      );
                }
                (l.namespace = "outlayer"),
                  (l.Item = r),
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
                function f(e) {
                  function t() {
                    e.apply(this, arguments);
                  }
                  return (
                    (t.prototype = Object.create(e.prototype)),
                    (t.prototype.constructor = t),
                    t
                  );
                }
                i.extend(d, t.prototype),
                  (d.option = function (e) {
                    i.extend(this.options, e);
                  }),
                  (d._getOption = function (e) {
                    var t = this.constructor.compatOptions[e];
                    return t && void 0 !== this.options[t]
                      ? this.options[t]
                      : this.options[e];
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
                      i.extend(this.element.style, this.options.containerStyle),
                      this._getOption("resize") && this.bindResize();
                  }),
                  (d.reloadItems = function () {
                    this.items = this._itemize(this.element.children);
                  }),
                  (d._itemize = function (e) {
                    for (
                      var t = this._filterFindItemElements(e),
                        n = this.constructor.Item,
                        i = [],
                        r = 0;
                      r < t.length;
                      r++
                    ) {
                      var o = new n(t[r], this);
                      i.push(o);
                    }
                    return i;
                  }),
                  (d._filterFindItemElements = function (e) {
                    return i.filterFindElements(e, this.options.itemSelector);
                  }),
                  (d.getItemElements = function () {
                    return this.items.map(function (e) {
                      return e.element;
                    });
                  }),
                  (d.layout = function () {
                    this._resetLayout(), this._manageStamps();
                    var e = this._getOption("layoutInstant"),
                      t = void 0 !== e ? e : !this._isLayoutInited;
                    this.layoutItems(this.items, t),
                      (this._isLayoutInited = !0);
                  }),
                  (d._init = d.layout),
                  (d._resetLayout = function () {
                    this.getSize();
                  }),
                  (d.getSize = function () {
                    this.size = n(this.element);
                  }),
                  (d._getMeasurement = function (e, t) {
                    var i,
                      r = this.options[e];
                    r
                      ? ("string" == typeof r
                          ? (i = this.element.querySelector(r))
                          : r instanceof HTMLElement && (i = r),
                        (this[e] = i ? n(i)[t] : r))
                      : (this[e] = 0);
                  }),
                  (d.layoutItems = function (e, t) {
                    (e = this._getItemsForLayout(e)),
                      this._layoutItems(e, t),
                      this._postLayout();
                  }),
                  (d._getItemsForLayout = function (e) {
                    return e.filter(function (e) {
                      return !e.isIgnored;
                    });
                  }),
                  (d._layoutItems = function (e, t) {
                    if (
                      (this._emitCompleteOnItems("layout", e), e && e.length)
                    ) {
                      var n = [];
                      e.forEach(function (e) {
                        var i = this._getItemLayoutPosition(e);
                        (i.item = e),
                          (i.isInstant = t || e.isLayoutInstant),
                          n.push(i);
                      }, this),
                        this._processLayoutQueue(n);
                    }
                  }),
                  (d._getItemLayoutPosition = function () {
                    return { x: 0, y: 0 };
                  }),
                  (d._processLayoutQueue = function (e) {
                    this.updateStagger(),
                      e.forEach(function (e, t) {
                        this._positionItem(e.item, e.x, e.y, e.isInstant, t);
                      }, this);
                  }),
                  (d.updateStagger = function () {
                    var e = this.options.stagger;
                    if (null != e)
                      return (
                        (this.stagger = (function (e) {
                          if ("number" == typeof e) return e;
                          var t = e.match(/(^\d*\.?\d*)(\w*)/),
                            n = t && t[1],
                            i = t && t[2];
                          return n.length
                            ? (n = parseFloat(n)) * (p[i] || 1)
                            : 0;
                        })(e)),
                        this.stagger
                      );
                    this.stagger = 0;
                  }),
                  (d._positionItem = function (e, t, n, i, r) {
                    i
                      ? e.goTo(t, n)
                      : (e.stagger(r * this.stagger), e.moveTo(t, n));
                  }),
                  (d._postLayout = function () {
                    this.resizeContainer();
                  }),
                  (d.resizeContainer = function () {
                    if (this._getOption("resizeContainer")) {
                      var e = this._getContainerSize();
                      e &&
                        (this._setContainerMeasure(e.width, !0),
                        this._setContainerMeasure(e.height, !1));
                    }
                  }),
                  (d._getContainerSize = s),
                  (d._setContainerMeasure = function (e, t) {
                    if (void 0 !== e) {
                      var n = this.size;
                      n.isBorderBox &&
                        (e += t
                          ? n.paddingLeft +
                            n.paddingRight +
                            n.borderLeftWidth +
                            n.borderRightWidth
                          : n.paddingBottom +
                            n.paddingTop +
                            n.borderTopWidth +
                            n.borderBottomWidth),
                        (e = Math.max(e, 0)),
                        (this.element.style[t ? "width" : "height"] = e + "px");
                    }
                  }),
                  (d._emitCompleteOnItems = function (e, t) {
                    var n = this;
                    function i() {
                      n.dispatchEvent(e + "Complete", null, [t]);
                    }
                    var r = t.length;
                    if (t && r) {
                      var o = 0;
                      t.forEach(function (t) {
                        t.once(e, a);
                      });
                    } else i();
                    function a() {
                      ++o == r && i();
                    }
                  }),
                  (d.dispatchEvent = function (e, t, n) {
                    var i = t ? [t].concat(n) : n;
                    if ((this.emitEvent(e, i), a))
                      if (
                        ((this.$element = this.$element || a(this.element)), t)
                      ) {
                        var r = a.Event(t);
                        (r.type = e), this.$element.trigger(r, n);
                      } else this.$element.trigger(e, n);
                  }),
                  (d.ignore = function (e) {
                    var t = this.getItem(e);
                    t && (t.isIgnored = !0);
                  }),
                  (d.unignore = function (e) {
                    var t = this.getItem(e);
                    t && delete t.isIgnored;
                  }),
                  (d.stamp = function (e) {
                    (e = this._find(e)) &&
                      ((this.stamps = this.stamps.concat(e)),
                      e.forEach(this.ignore, this));
                  }),
                  (d.unstamp = function (e) {
                    (e = this._find(e)) &&
                      e.forEach(function (e) {
                        i.removeFrom(this.stamps, e), this.unignore(e);
                      }, this);
                  }),
                  (d._find = function (e) {
                    if (e)
                      return (
                        "string" == typeof e &&
                          (e = this.element.querySelectorAll(e)),
                        i.makeArray(e)
                      );
                  }),
                  (d._manageStamps = function () {
                    this.stamps &&
                      this.stamps.length &&
                      (this._getBoundingRect(),
                      this.stamps.forEach(this._manageStamp, this));
                  }),
                  (d._getBoundingRect = function () {
                    var e = this.element.getBoundingClientRect(),
                      t = this.size;
                    this._boundingRect = {
                      left: e.left + t.paddingLeft + t.borderLeftWidth,
                      top: e.top + t.paddingTop + t.borderTopWidth,
                      right: e.right - (t.paddingRight + t.borderRightWidth),
                      bottom:
                        e.bottom - (t.paddingBottom + t.borderBottomWidth),
                    };
                  }),
                  (d._manageStamp = s),
                  (d._getElementOffset = function (e) {
                    var t = e.getBoundingClientRect(),
                      i = this._boundingRect,
                      r = n(e);
                    return {
                      left: t.left - i.left - r.marginLeft,
                      top: t.top - i.top - r.marginTop,
                      right: i.right - t.right - r.marginRight,
                      bottom: i.bottom - t.bottom - r.marginBottom,
                    };
                  }),
                  (d.handleEvent = i.handleEvent),
                  (d.bindResize = function () {
                    e.addEventListener("resize", this),
                      (this.isResizeBound = !0);
                  }),
                  (d.unbindResize = function () {
                    e.removeEventListener("resize", this),
                      (this.isResizeBound = !1);
                  }),
                  (d.onresize = function () {
                    this.resize();
                  }),
                  i.debounceMethod(l, "onresize", 100),
                  (d.resize = function () {
                    this.isResizeBound &&
                      this.needsResizeLayout() &&
                      this.layout();
                  }),
                  (d.needsResizeLayout = function () {
                    var e = n(this.element);
                    return (
                      this.size && e && e.innerWidth !== this.size.innerWidth
                    );
                  }),
                  (d.addItems = function (e) {
                    var t = this._itemize(e);
                    return t.length && (this.items = this.items.concat(t)), t;
                  }),
                  (d.appended = function (e) {
                    var t = this.addItems(e);
                    t.length && (this.layoutItems(t, !0), this.reveal(t));
                  }),
                  (d.prepended = function (e) {
                    var t = this._itemize(e);
                    if (t.length) {
                      var n = this.items.slice(0);
                      (this.items = t.concat(n)),
                        this._resetLayout(),
                        this._manageStamps(),
                        this.layoutItems(t, !0),
                        this.reveal(t),
                        this.layoutItems(n);
                    }
                  }),
                  (d.reveal = function (e) {
                    if (
                      (this._emitCompleteOnItems("reveal", e), e && e.length)
                    ) {
                      var t = this.updateStagger();
                      e.forEach(function (e, n) {
                        e.stagger(n * t), e.reveal();
                      });
                    }
                  }),
                  (d.hide = function (e) {
                    if ((this._emitCompleteOnItems("hide", e), e && e.length)) {
                      var t = this.updateStagger();
                      e.forEach(function (e, n) {
                        e.stagger(n * t), e.hide();
                      });
                    }
                  }),
                  (d.revealItemElements = function (e) {
                    var t = this.getItems(e);
                    this.reveal(t);
                  }),
                  (d.hideItemElements = function (e) {
                    var t = this.getItems(e);
                    this.hide(t);
                  }),
                  (d.getItem = function (e) {
                    for (var t = 0; t < this.items.length; t++) {
                      var n = this.items[t];
                      if (n.element == e) return n;
                    }
                  }),
                  (d.getItems = function (e) {
                    e = i.makeArray(e);
                    var t = [];
                    return (
                      e.forEach(function (e) {
                        var n = this.getItem(e);
                        n && t.push(n);
                      }, this),
                      t
                    );
                  }),
                  (d.remove = function (e) {
                    var t = this.getItems(e);
                    this._emitCompleteOnItems("remove", t),
                      t &&
                        t.length &&
                        t.forEach(function (e) {
                          e.remove(), i.removeFrom(this.items, e);
                        }, this);
                  }),
                  (d.destroy = function () {
                    var e = this.element.style;
                    (e.height = ""),
                      (e.position = ""),
                      (e.width = ""),
                      this.items.forEach(function (e) {
                        e.destroy();
                      }),
                      this.unbindResize();
                    var t = this.element.outlayerGUID;
                    delete u[t],
                      delete this.element.outlayerGUID,
                      a &&
                        a.removeData(this.element, this.constructor.namespace);
                  }),
                  (l.data = function (e) {
                    var t = (e = i.getQueryElement(e)) && e.outlayerGUID;
                    return t && u[t];
                  }),
                  (l.create = function (e, t) {
                    var n = f(l);
                    return (
                      (n.defaults = i.extend({}, l.defaults)),
                      i.extend(n.defaults, t),
                      (n.compatOptions = i.extend({}, l.compatOptions)),
                      (n.namespace = e),
                      (n.data = l.data),
                      (n.Item = f(r)),
                      i.htmlInit(n, e),
                      a && a.bridget && a.bridget(e, n),
                      n
                    );
                  });
                var p = { ms: 1, s: 1e3 };
                return (l.Item = r), l;
              })(o, e, t, n, i);
            }.apply(t, i)),
            void 0 === r || (e.exports = r);
        })(window);
      },
      963: function () {
        const e = document.querySelector(".backdrop--subscr"),
          t = document.querySelectorAll(".form__input--location");
        function n(t) {
          const n = t.target;
          e &&
            ("" !== n.value.trim() && document.activeElement === n
              ? (e.style.overflow = "hidden")
              : (e.style.overflow = "auto"));
        }
        window.initMap ||
          (window.initMap = function () {
            t.forEach(function (e) {
              const t = new google.maps.places.Autocomplete(e);
              t.addListener("place_changed", () => {
                t.getPlace(), e.setAttribute("data-id", e.value);
              });
            });
          }),
          t.forEach(function (e) {
            e.addEventListener("input", n),
              e.addEventListener("focus", n),
              e.addEventListener("blur", n),
              n({ target: e });
          });
      },
      699: function () {
        const e = document.querySelector(".scroll-to-top-btn");
        window.addEventListener(
          "scroll",
          function () {
            window.scrollY >= 50
              ? (e.style.display = "flex")
              : (e.style.display = "none");
          },
          { passive: !0 }
        ),
          e.addEventListener("click", function () {
            window.scrollTo({ top: 0, behavior: "smooth" });
          });
      },
    },
    t = {};
  function n(i) {
    var r = t[i];
    if (void 0 !== r) return r.exports;
    var o = (t[i] = { exports: {} });
    return e[i].call(o.exports, o, o.exports, n), o.exports;
  }
  (n.n = function (e) {
    var t =
      e && e.__esModule
        ? function () {
            return e.default;
          }
        : function () {
            return e;
          };
    return n.d(t, { a: t }), t;
  }),
    (n.d = function (e, t) {
      for (var i in t)
        n.o(t, i) &&
          !n.o(e, i) &&
          Object.defineProperty(e, i, { enumerable: !0, get: t[i] });
    }),
    (n.o = function (e, t) {
      return Object.prototype.hasOwnProperty.call(e, t);
    }),
    (function () {
      "use strict";
      function e(e, t) {
        const n = JSON.stringify(t);
        localStorage.setItem(e, n);
      }
      function t(e) {
        const t = localStorage.getItem(e);
        return JSON.parse(t);
      }
      function i(e) {
        localStorage.removeItem(e);
      }
      function r() {
        return {
          themeToggler: document.querySelector(".theme-toggler-wrap"),
          themeCircle: document.querySelector(".theme__circle"),
          sunRays: document.querySelectorAll(".circle__ray"),
          sunIcon: document.querySelector(".circle__sun"),
          moonIcon: document.querySelector(".circle__moon"),
        };
      }
      const o = { LIGHT: "light", DARK: "dark" };
      let a = t("theme") || o.LIGHT;
      function s() {
        const {
            themeToggler: e,
            themeCircle: t,
            sunRays: n,
            sunIcon: i,
            moonIcon: s,
          } = r(),
          c = document.querySelector("body");
        a === o.DARK
          ? (c.classList.add("active-dark-theme"),
            e.classList.add("theme-toggler-wrap--dark"),
            e.classList.remove("theme-toggler-wrap--light"),
            t.classList.add("theme__circle--dark"),
            t.classList.remove("theme__circle--light"),
            i.classList.add("circle__sun--hidden"),
            s.classList.remove("circle__moon--hidden"),
            n.forEach((e) => e.classList.add("circle__ray--hidden")))
          : (c.classList.remove("active-dark-theme"),
            e.classList.remove("theme-toggler-wrap--dark"),
            e.classList.add("theme-toggler-wrap--light"),
            t.classList.remove("theme__circle--dark"),
            t.classList.add("theme__circle--light"),
            i.classList.remove("circle__sun--hidden"),
            s.classList.add("circle__moon--hidden"),
            n.forEach((e) => e.classList.remove("circle__ray--hidden")));
      }
      const c = {
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
        u = {
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
              h("calc(100% / 3)"),
              document
                .querySelectorAll(".element--office-page")
                .forEach((e) => e.classList.remove("isHidden")),
              document
                .querySelector(".element--calculator-page")
                .classList.add("isHidden");
          },
          afterRepair: () => {
            !(function () {
              const e = document.querySelector(
                ".data-order .data-order__title"
              );
              (document.querySelector(".buildings").style.display = "none"),
                (e.style.display = "none");
            })(),
              document
                .querySelectorAll(".add-services-list__item:nth-child(n+3)")
                .forEach((e) => e.classList.add("isHidden")),
              l("after-repair.html#office-calc-block");
          },
          calcOrder: () => {
            document
              .querySelector(".footer")
              .classList.add("footer--calc-order"),
              h("calc(100% / 2)"),
              document
                .querySelectorAll(".block")
                .forEach((e) => e.classList.add("block--white")),
              document
                .querySelectorAll(".element--office-page")
                .forEach((e) => e.classList.add("isHidden")),
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
                i("userOrderDataObj");
              });
          },
        };
      function l(e) {
        [...document.querySelectorAll(".dynamic-link")].forEach(
          (t) => (t.href = e)
        );
      }
      function d(e) {
        e.forEach((e) => {
          const t = document.querySelector(e);
          t && t.classList.add("nav__link--current");
        });
      }
      function f() {
        document
          .querySelector("main")
          .classList.add("section--dark-background");
      }
      function p(e) {
        e.classList.toggle("isActive");
      }
      function h(e) {
        document
          .querySelectorAll(".buildings__element")
          .forEach((t) => (t.style.flexBasis = e));
      }
      function m(e, t) {
        e.appendChild(t);
      }
      function g(e, t) {
        return e.parentElement.previousElementSibling.querySelector(`.${t}`);
      }
      function y(e) {
        e.classList.toggle("isHidden");
      }
      function v(e, t) {
        e.addEventListener("blur", (n) => {
          const i = t(n.target.value);
          e.value = i;
        });
      }
      function b(e, t, n) {
        y(e), y(t), p(n);
      }
      function x(e, t, n) {
        const i = e.querySelector(".work-shedule"),
          r = e.querySelector(`.${t}`);
        i.classList.contains("isHidden") || (y(i), y(r), p(g(r, n)));
      }
      document.addEventListener("DOMContentLoaded", function () {
        const t = window.location.pathname,
          n = document.querySelector("body"),
          { themeToggler: i } = r();
        i.addEventListener("click", () => {
          var t;
          (t = n.classList.contains("active-dark-theme") ? o.LIGHT : o.DARK),
            (a = t),
            e("theme", t),
            s();
        }),
          s();
        const l = Object.keys(u).find((e) => c[e].includes(t));
        l && u[l]();
      });
      var w = !1;
      if ("undefined" != typeof window) {
        var S = {
          get passive() {
            w = !0;
          },
        };
        window.addEventListener("testPassive", null, S),
          window.removeEventListener("testPassive", null, S);
      }
      var E =
          "undefined" != typeof window &&
          window.navigator &&
          window.navigator.platform &&
          (/iP(ad|hone|od)/.test(window.navigator.platform) ||
            ("MacIntel" === window.navigator.platform &&
              window.navigator.maxTouchPoints > 1)),
        T = [],
        C = !1,
        _ = -1,
        k = void 0,
        L = void 0,
        q = void 0,
        A = function (e) {
          return T.some(function (t) {
            return !(!t.options.allowTouchMove || !t.options.allowTouchMove(e));
          });
        },
        D = function (e) {
          var t = e || window.event;
          return (
            !!A(t.target) ||
            t.touches.length > 1 ||
            (t.preventDefault && t.preventDefault(), !1)
          );
        },
        j = function (e, t) {
          if (e) {
            if (
              !T.some(function (t) {
                return t.targetElement === e;
              })
            ) {
              var n = { targetElement: e, options: t || {} };
              (T = [].concat(
                (function (e) {
                  if (Array.isArray(e)) {
                    for (var t = 0, n = Array(e.length); t < e.length; t++)
                      n[t] = e[t];
                    return n;
                  }
                  return Array.from(e);
                })(T),
                [n]
              )),
                E
                  ? window.requestAnimationFrame(function () {
                      if (void 0 === L) {
                        L = {
                          position: document.body.style.position,
                          top: document.body.style.top,
                          left: document.body.style.left,
                        };
                        var e = window,
                          t = e.scrollY,
                          n = e.scrollX,
                          i = e.innerHeight;
                        (document.body.style.position = "fixed"),
                          (document.body.style.top = -t),
                          (document.body.style.left = -n),
                          setTimeout(function () {
                            return window.requestAnimationFrame(function () {
                              var e = i - window.innerHeight;
                              e &&
                                t >= i &&
                                (document.body.style.top = -(t + e));
                            });
                          }, 300);
                      }
                    })
                  : (function (e) {
                      if (void 0 === q) {
                        var t = !!e && !0 === e.reserveScrollBarGap,
                          n =
                            window.innerWidth -
                            document.documentElement.clientWidth;
                        if (t && n > 0) {
                          var i = parseInt(
                            window
                              .getComputedStyle(document.body)
                              .getPropertyValue("padding-right"),
                            10
                          );
                          (q = document.body.style.paddingRight),
                            (document.body.style.paddingRight = i + n + "px");
                        }
                      }
                      void 0 === k &&
                        ((k = document.body.style.overflow),
                        (document.body.style.overflow = "hidden"));
                    })(t),
                E &&
                  ((e.ontouchstart = function (e) {
                    1 === e.targetTouches.length &&
                      (_ = e.targetTouches[0].clientY);
                  }),
                  (e.ontouchmove = function (t) {
                    1 === t.targetTouches.length &&
                      (function (e, t) {
                        var n = e.targetTouches[0].clientY - _;
                        !A(e.target) &&
                          ((t && 0 === t.scrollTop && n > 0) ||
                          ((function (e) {
                            return (
                              !!e &&
                              e.scrollHeight - e.scrollTop <= e.clientHeight
                            );
                          })(t) &&
                            n < 0)
                            ? D(e)
                            : e.stopPropagation());
                      })(t, e);
                  }),
                  C ||
                    (document.addEventListener(
                      "touchmove",
                      D,
                      w ? { passive: !1 } : void 0
                    ),
                    (C = !0)));
            }
          } else
            console.error(
              "disableBodyScroll unsuccessful - targetElement must be provided when calling disableBodyScroll on IOS devices."
            );
        },
        O = function (e) {
          e
            ? ((T = T.filter(function (t) {
                return t.targetElement !== e;
              })),
              E &&
                ((e.ontouchstart = null),
                (e.ontouchmove = null),
                C &&
                  0 === T.length &&
                  (document.removeEventListener(
                    "touchmove",
                    D,
                    w ? { passive: !1 } : void 0
                  ),
                  (C = !1))),
              E
                ? (function () {
                    if (void 0 !== L) {
                      var e = -parseInt(document.body.style.top, 10),
                        t = -parseInt(document.body.style.left, 10);
                      (document.body.style.position = L.position),
                        (document.body.style.top = L.top),
                        (document.body.style.left = L.left),
                        window.scrollTo(t, e),
                        (L = void 0);
                    }
                  })()
                : (void 0 !== q &&
                    ((document.body.style.paddingRight = q), (q = void 0)),
                  void 0 !== k &&
                    ((document.body.style.overflow = k), (k = void 0))))
            : console.error(
                "enableBodyScroll unsuccessful - targetElement must be provided when calling enableBodyScroll on IOS devices."
              );
        };
      (() => {
        const e = document.querySelector(".aside-menu"),
          t = document.querySelector(".open-menu-btn"),
          n = document.querySelector(".close-menu-btn"),
          i = () => {
            const n = "true" === t.getAttribute("aria-expanded") || !1;
            t.setAttribute("aria-expanded", !n),
              e.classList.toggle("is-open"),
              (n ? O : j)(document.body);
          };
        t.addEventListener("click", i),
          n.addEventListener("click", i),
          window
            .matchMedia("(min-width: 768px)")
            .addEventListener("change", (n) => {
              n.matches &&
                (e.classList.remove("is-open"),
                t.setAttribute("aria-expanded", !1),
                O(document.body));
            });
      })(),
        n(699);
      var N = n(755),
        H = n.n(N);
      H()(function () {
        const e = H()(".toggle-question-btn"),
          t = H()(".accordion");
        function n(e) {
          const t = e.find(".icon--plus"),
            n = e.find(".icon--minus");
          t.removeClass("isHidden"), n.addClass("isHidden");
        }
        function i(e) {
          const t = e.find(".icon--plus"),
            n = e.find(".icon--minus");
          t.toggleClass("isHidden"), n.toggleClass("isHidden");
        }
        function r(e) {
          const t = e.find(".accordion__content");
          e.removeClass("accordion__active"), t.css("max-height", "");
        }
        e.on("click", function () {
          const t = H()(this);
          H()(event.target).is(t) && i(t),
            e.each(function () {
              n(H()(this));
            });
        }),
          t.each(function () {
            H()(this)
              .find(".accordion__intro")
              .on("click", function () {
                !(function (o) {
                  const a = o.find(".toggle-question-btn");
                  e.each(function () {
                    n(H()(this));
                  }),
                    (function (e) {
                      "0px" !== e.find(".accordion__content").css("max-height")
                        ? r(e)
                        : (t.each(function () {
                            r(H()(this));
                          }),
                          (function (e) {
                            const t = e.find(".accordion__content");
                            e.addClass("accordion__active"),
                              t.css("max-height", t[0].scrollHeight + "px");
                          })(e));
                    })(o),
                    i(a);
                })(H()(this).closest(".accordion"));
              });
          });
      });
      const I = [
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
      var M = n(751),
        P = n.n(M);
      let R = 1;
      function W(e, t, n) {
        const i = document.createElement("li");
        i.className = e;
        const r = document.createElement("ul");
        return (
          (r.className = t),
          n.forEach((e, t) => {
            r.appendChild(
              (function (e, t) {
                const n = document.createElement("li");
                n.className = `reviews__item item-${e}`;
                const i = (function (e) {
                    const t = document.createElement("h3");
                    return (
                      (t.className = "review__title"), (t.textContent = e), t
                    );
                  })(t.name),
                  r = (function (e) {
                    const t = document.createElement("ul");
                    t.className = "review__rating";
                    for (let n = 0; n < e; n++) t.appendChild(z());
                    return t;
                  })(t.rating),
                  o = (function (e) {
                    const t = document.createElement("p");
                    return (t.className = "review__text"), (t.innerHTML = e), t;
                  })(t.text);
                return n.appendChild(i), n.appendChild(r), n.appendChild(o), n;
              })(t + 1, e)
            );
          }),
          i.appendChild(r),
          i
        );
      }
      function z() {
        const e = document.createElement("li");
        e.className = "rating__item";
        const t = (function ({
          width: e,
          srcPrefix: t,
          media: n,
          alt: i,
          className: r,
        }) {
          const o = document.createElement("picture");
          (o.className = r),
            o.appendChild(
              (function (e, t, n) {
                const i = document.createElement("source");
                return (
                  (i.width = e),
                  (i.height = e),
                  (i.srcset = `${t}@1x.png 1x, ${t}@2x.png 2x`),
                  (i.media = n),
                  i
                );
              })(e, t, n)
            );
          const a = {
            width: 26,
            height: 26,
            src: `${t}@1x.png`,
            alt: i,
            className: r,
          };
          return (
            o.appendChild(
              (function ({
                width: e,
                height: t,
                src: n,
                alt: i,
                className: r,
              }) {
                const o = document.createElement("img");
                return (
                  (o.className = r),
                  (o.width = e),
                  (o.height = t),
                  (o.src = n),
                  (o.alt = i),
                  o
                );
              })(a)
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
        return e.appendChild(t), e;
      }
      function B(e) {
        const t = e.trim().match(/\d{2}\/\d{2}\/\d{4}/);
        return t ? t[0] : null;
      }
      function $(e) {
        const t = e.getFullYear();
        return { month: e.getMonth(), year: t };
      }
      function F(e, t, n) {
        return {
          formattedDay: e < 10 ? `0${e}` : e,
          formattedMonth: 0 === t ? 12 : t,
          formattedYear: 0 === t ? n - 1 : n,
        };
      }
      document.addEventListener("DOMContentLoaded", function () {
        const e = document.querySelector(".reviews__swiper"),
          t = document.querySelector(".mobile__reviews-list"),
          n = document.querySelector(".mobile__show-more-btn"),
          i = (function (e, t) {
            const n = [];
            for (let t = 0; t < e.length; t += 6) n.push(e.slice(t, t + 6));
            return n;
          })(I);
        (function (e, t, n) {
          n.forEach((n) => {
            e.appendChild(W("swiper-slide", "reviews__list", n)),
              t.appendChild(W("mobile__swiper-slide", "mobile__reviews", n));
          });
        })(e, t, i),
          document.querySelectorAll(".reviews__list").forEach((e) => {
            new (P())(e, { itemSelector: ".reviews__item", gutter: 30 });
          }),
          (function (e) {
            const t = document.querySelector(".gallery");
            t.addEventListener("mouseleave", () => {
              (e.params.autoplay.disableOnInteraction = !1),
                (e.params.autoplay.delay = 2e3),
                e.autoplay.start();
            }),
              t.addEventListener("mouseenter", () => {
                e.autoplay.stop();
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
            (function (e, t) {
              const n = e.querySelectorAll(".mobile__swiper-slide");
              (n[R].style.display = "list-item"),
                R++,
                R >= n.length && (t.style.display = "none");
            })(t, n)
          ),
          [...document.querySelectorAll(".swiper-slide")].forEach((e) =>
            e.setAttribute("role", "Слайд")
          );
      }),
        document.querySelectorAll(".calendar").forEach(function (e) {
          const {
            calendarIcon: t,
            dateInput: n,
            sheduleEl: r,
            calendarBody: o,
            calendarHeadMonthAndYear: a,
            prevMonthBtn: s,
            nextMonthBtn: c,
          } = (function (e) {
            const t = g(e, "icon--calendar"),
              n =
                e.parentElement.previousElementSibling.querySelector(
                  '[name="userDate"]'
                );
            return (
              e.parentElement.previousElementSibling.querySelector(
                ".icon--calendar"
              ),
              {
                calendarIcon: t,
                dateInput: n,
                sheduleEl: e.parentElement.querySelector(".work-shedule"),
                calendarBody: e.querySelector(".calendar__body"),
                calendarHeadMonthAndYear: e.querySelector(
                  ".calendar__monthYear"
                ),
                prevMonthBtn: e.querySelector(".calendar__prevMonth-btn"),
                nextMonthBtn: e.querySelector(".calendar__nextMonth-btn"),
              }
            );
          })(e);
          let u = new Date(),
            l = new Date(),
            d = (function () {
              const e = new Date();
              return `${e.getDate().toString().padStart(2, "0")}/${(
                e.getMonth() + 1
              )
                .toString()
                .padStart(2, "0")}/${e.getFullYear()}`;
            })();
          function f() {
            b(e, r, t),
              (function (e) {
                const t = (function (e) {
                  return e
                    .closest("li")
                    .nextElementSibling.querySelector(".shedule-wrap");
                })(e);
                x(t, "time-picker-wrap", "icon--clock");
              })(n),
              (l = new Date(u)),
              h(u),
              w(e, n);
          }
          function p(o) {
            const a = (function (e) {
                const t = e.split("/"),
                  [n, i, r] = t;
                return `${i}/${n}/${r}`;
              })(o.target.dataset.date),
              s = new Date().toLocaleDateString("en-US", {
                year: "numeric",
                month: "2-digit",
                day: "2-digit",
              }),
              c = new Date(a);
            if (((u = c), c - new Date(s) >= 0)) {
              const o = (function (e) {
                const t = e.split("/"),
                  [n, i, r] = t;
                return `${i}/${n}/${r}`;
              })(a);
              d = o;
              const s = (function (e) {
                return e
                  .closest("li")
                  .nextElementSibling.querySelector('[name="userTime"]');
              })(n);
              (s.value = ""), i("selectedTimeObj"), w(e, n), b(e, r, t);
            }
          }
          function h(e) {
            o.innerHTML = "";
            const { year: t, month: n } = $(e);
            !(function (e) {
              const t = l.toLocaleDateString("uk-UA", { month: "long" }),
                n = t.charAt(0).toUpperCase() + t.slice(1);
              a.textContent = `${n} ${e}`;
            })(t);
            const { firstDayOfMonth: i, lastDayOfMonthObj: r } = (function (
                e,
                t
              ) {
                return {
                  firstDayOfMonth: new Date(e, t, 1),
                  lastDayOfMonthObj: new Date(e, t + 1, 0),
                };
              })(t, n),
              s = (function (e) {
                let t = e.getDay();
                return 0 === t && (t = 7), t;
              })(i),
              c = (function (e, t) {
                return new Date(e, t, 0).getDate();
              })(t, n);
            let u = 1,
              d = E();
            for (let e = s - 1; e >= 1; e--)
              m(d, y(c - e + 1, "previous-month"));
            for (; u <= r.getDate(); )
              m(d, y(u, "current-month")),
                7 === d.children.length && (m(o, d), (d = E())),
                u++;
            if (d.children.length > 0) {
              for (let e = 1; d.children.length < 7; e++)
                m(d, y(e, "next-month"));
              m(o, d);
            }
          }
          function y(e, t) {
            const { year: n, month: i } = $(l),
              r = new Date();
            let o;
            if ("previous-month" === t) {
              const {
                formattedDay: t,
                formattedMonth: r,
                formattedYear: a,
              } = F(e, i, n);
              o = new Date(a, r - 1, t);
            } else if ("current-month" === t) {
              const { formattedDay: t } = F(e);
              o = new Date(n, i, t);
            } else if ("next-month" === t) {
              const { formattedDay: t } = F(e, i, n);
              o = new Date(11 === i ? n + 1 : n, 11 === i ? 0 : i + 1, t);
            }
            const a = (function (e, t) {
                return e < t;
              })(o, r),
              s = (function (e, t, n) {
                const i = e.getFullYear() === t.getFullYear(),
                  r = e.getMonth() === t.getMonth(),
                  o = n === t.getDate();
                return i && r && o;
              })(o, u, e);
            return (function (e) {
              const {
                  day: t,
                  month: n,
                  year: i,
                  isDisabledDate: r,
                  monthType: o,
                  isCellSelectedDay: a,
                } = e,
                s = document.createElement("td"),
                c = { monthType: o, isCellSelectedDay: a, isDisabledDate: r };
              return (
                (function (e, t) {
                  e.textContent = t;
                })(s, t),
                (function (e, { day: t, month: n, year: i }) {
                  e.dataset.date = `${t}/${n < 9 ? "0" : ""}${n + 1}/${i}`;
                })(s, { day: t, month: n, year: i }),
                (function (e, t) {
                  t || e.addEventListener("click", p);
                })(s, r),
                (function (e, t) {
                  const {
                    monthType: n,
                    isCellSelectedDay: i,
                    isDisabledDate: r,
                  } = t;
                  r && e.classList.add("disabled-day"),
                    "current-month" === n && i && e.classList.add("order-day"),
                    e.classList.add(n);
                })(s, c),
                s
              );
            })({
              day: String(o.getDate()).padStart(2, "0"),
              month: o.getMonth(),
              year: o.getFullYear(),
              isDisabledDate: a,
              monthType: t,
              isCellSelectedDay: s,
            });
          }
          function w(e, t) {
            !e.classList.contains("isHidden") && (t.value = `${d}`);
          }
          function S(e) {
            l.setMonth(l.getMonth() + e), h(l);
          }
          function E() {
            return document.createElement("tr");
          }
          n.addEventListener("click", f),
            t.addEventListener("click", f),
            n.addEventListener("blur", () => {
              v(n, B);
            }),
            s?.addEventListener("click", () => {
              S(-1);
            }),
            c?.addEventListener("click", () => {
              S(1);
            }),
            h(u);
        });
      const G = [
        { day: "пн", min: "07", max: "21" },
        { day: "вт", min: "07", max: "21" },
        { day: "ср", min: "07", max: "21" },
        { day: "чт", min: "07", max: "21" },
        { day: "пт", min: "07", max: "21" },
        { day: "сб", min: "10", max: "19" },
        { day: "нд", min: "10", max: "19" },
      ];
      function Y(e) {
        e.openModalBtn?.addEventListener("click", () => U(e)),
          e.closeModalBtn?.addEventListener("click", (t) => {
            t.stopPropagation(), U(e);
          }),
          e.backdrop?.addEventListener("click", (t) => {
            t.target === e.backdrop && U(e);
          });
      }
      function U(e) {
        document.body.classList.toggle(`${e.name}-modal-open`),
          e.modal?.classList.toggle("backdrop--hidden"),
          "subscription" === e.name && (oe(V?.elements), ce(), ue());
      }
      document.querySelectorAll(".time-picker-wrap").forEach(function (n) {
        const {
          clockIcon: i,
          sheduleEl: r,
          hourTablo: o,
          minuteTablo: a,
          hourPicker: s,
          minutePicker: c,
          confirmTimeBtn: u,
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
        let f = t("selectedTimeObj") || { hours: "15", minutes: "00" };
        function p() {
          f = t("selectedTimeObj") || { hours: "15", minutes: "00" };
          const e = (function (e) {
              return e
                .closest("li")
                .previousElementSibling.querySelector('[name="userDate"]');
            })(l),
            o = e.value;
          if (o) {
            m(n);
            const { minHour: e, maxHour: t } = (function (e, t) {
              const n = (function (e) {
                  const t = e.split("/");
                  var n = parseInt(t[0], 10),
                    i = parseInt(t[1], 10) - 1,
                    r = parseInt(t[2], 10);
                  return new Date(r, i, n);
                })(e),
                i = n.toLocaleDateString("uk-UA", { weekday: "short" }),
                r = t.find((e) => e.day === i);
              return { minHour: parseInt(r.min), maxHour: parseInt(r.max) };
            })(o, G);
            !(function (e, t, n) {
              [...e.querySelectorAll(".hours")]
                .filter((e) => {
                  const i = parseInt(e.getAttribute("data-id"));
                  return i < t || i > n;
                })
                .forEach((e) => {
                  e.classList.contains("disabled") ||
                    (e.classList.remove("active"), e.classList.add("disabled"));
                });
            })(n, e, t),
              (function (e) {
                const t = e.hours,
                  i = e.minutes,
                  r = n.querySelector(".time-picker__hours"),
                  o = n.querySelector(".time-picker__minutes");
                S(r, t), S(o, i);
              })(f),
              (function (e) {
                const t = e.hours,
                  i = e.minutes,
                  r = n.querySelectorAll(".hours"),
                  o = n.querySelectorAll(".minutes"),
                  a = [...r].find((e) => e.getAttribute("data-id") == t),
                  s = [...o].find((e) => e.getAttribute("data-id") == i);
                w(a, r), w(s, o);
              })(f),
              b(n, r, i),
              (function (e) {
                const t = (function (e) {
                  return e
                    .closest("li")
                    .previousElementSibling.querySelector(".shedule-wrap");
                })(e);
                x(t, "calendar", "icon--calendar");
              })(l),
              y(n, l);
          } else
            !(function (e) {
              e.value = "Оберіть спочатку дату для прибирання";
            })(l);
        }
        function h(t, i) {
          const r = t.target;
          if (r.classList.contains("disabled")) return;
          if (
            !(function (e) {
              return (
                e.classList.contains("number") &&
                !e.classList.contains("active")
              );
            })(r)
          )
            return;
          const o = E(i);
          w(r, n.querySelectorAll(`.${o}`));
          const a = n.querySelector(i),
            s = r.dataset.id;
          S(a, s),
            (function (t, i) {
              const r = E(t);
              (f[r] = i), e("selectedTimeObj", f), y(n, l);
            })(i, s);
        }
        function m(e) {
          [...e.querySelectorAll(".hours")].forEach((e) => {
            e.classList.remove("disabled");
          });
        }
        function y(e, t) {
          !e.classList.contains("isHidden") &&
            (t.value = `${f.hours} : ${f.minutes}`);
        }
        function w(e, t) {
          [...t].map((t) =>
            t === e
              ? (function (e) {
                  e.classList.add("active");
                })(t)
              : (function (e) {
                  e.classList.remove("active");
                })(t)
          );
        }
        function S(e, t) {
          e.innerHTML = t;
        }
        function E(e) {
          return e.split("__")[1];
        }
        function T(e) {
          const t = e.trim().match(/\d{2}\s*:\s*\d{2}/);
          return t ? t[0] : null;
        }
        function C(e, t) {
          !e.classList.contains("isHidden") ||
            (e.classList.remove("isHidden"), t.classList.add("isHidden"));
        }
        e("selectedTimeObj", f),
          l.addEventListener("click", p),
          i.addEventListener("click", p),
          l.addEventListener("blur", () => {
            v(l, T);
          }),
          o.addEventListener("click", (e) => h(e, ".time-picker__hours")),
          a.addEventListener("click", (e) => h(e, ".time-picker__minutes")),
          c.addEventListener("click", () => C(a, o)),
          s.addEventListener("click", () => C(o, a)),
          u.addEventListener("click", () => {
            m(n), b(n, r, i);
          });
      }),
        n(963);
      const X = {
        name: "subscription",
        openModalBtn: document.querySelector("[data-subscription-modal-open]"),
        closeModalBtn: document.querySelector(
          "[data-subscription-modal-close]"
        ),
        modal: document.querySelector("[data-subscription-modal]"),
        backdrop: document.querySelector(".backdrop--subscr"),
      };
      Y(X);
      const V = document.querySelector(".subscr__form"),
        Q = document.querySelectorAll(".payment__btn"),
        K = document.querySelector(".form__payment-error-text"),
        J = document.querySelectorAll(".form__input"),
        Z = document.querySelector(".calc-btn"),
        ee = document.querySelector('[name="studio-policy-check"]');
      let te;
      ee &&
        ((te = new MutationObserver((e, t) => {
          e.forEach((e) => {
            "attributes" === e.type &&
              "data-checked" === e.attributeName &&
              (ee.getAttribute("data-checked"), ue());
          });
        })),
        te.observe(ee, { attributes: !0, attributeFilter: ["data-checked"] }),
        ee.addEventListener("change", () => {
          ee.setAttribute("data-checked", ee.checked);
        })),
        V?.addEventListener("submit", le),
        Z?.addEventListener("click", (e) => {
          e.preventDefault(), le(e);
        }),
        Q.forEach((e) => {
          e.addEventListener("click", (e) => {
            !(function (e) {
              const t = e.target.closest("button");
              re(t),
                t.classList.contains("active") ||
                  [...Q].forEach((e) => {
                    e === t
                      ? e.classList.add("active")
                      : e.classList.remove("active");
                  });
            })(e),
              ce();
          });
        }),
        J.forEach((e) => {
          e.addEventListener("focus", () => {
            e.classList.remove("error");
          });
        });
      const ne = [
          "userName",
          "userSurname",
          "userTel",
          "userEmail",
          "userLocation",
          "userDate",
          "userTime",
        ],
        ie = {
          userPaymentType: "",
          userBuildingType: "",
          userTakeKeyAddress: "",
          userGiveKeyAddress: "",
          userSquare: { quantity: "", cost: "" },
          userServices: {},
        };
      function re(e) {
        const t = e.getAttribute("data-type"),
          n = e.getAttribute("data-id") ?? "";
        ie[t] = n;
      }
      function oe(e) {
        [...e].forEach((e) => {
          e.classList.remove("error");
        });
      }
      function ae() {
        return document.querySelector('[name="studio-policy-check"]').checked;
      }
      function se() {
        document
          .querySelector(".form__payment-error-text")
          .classList.toggle("isHidden");
      }
      function ce() {
        !K.classList.contains("isHidden") && se();
      }
      function ue() {
        document
          .querySelector(".form__policy-error-text")
          .classList.add("isHidden");
      }
      function le(t) {
        t.preventDefault();
        const n = "BUTTON" === t.currentTarget.tagName,
          i = n ? V.elements : t.currentTarget.elements,
          r = (function (e, t) {
            return t.filter((t) => "" === e[t].value.trim()).map((t) => e[t]);
          })(i, ne);
        oe(i),
          (function (e) {
            e.forEach((e) => {
              e.classList.add("error");
            });
          })(r);
        const o = [...Q].some((e) => e.classList.contains("active")),
          a = r.length > 0;
        o || se(),
          (function () {
            const e = document.querySelector(".form__policy-error-text");
            e.classList.add("isHidden"), ae() || e.classList.remove("isHidden");
          })();
        const s = ae();
        if (!o || a || !s) return;
        const c = n ? V : t.target;
        var u, l, d;
        n &&
          ((function () {
            const e = document.querySelector(
                '[data-type="userTakeKeyAddress"]'
              ),
              t = document.querySelector('[data-type="userGiveKeyAddress"]');
            re(e), re(t);
          })(),
          (u = ie),
          (l = Se.square.quantity),
          (d = Se.square.price),
          (u.userSquare = { quantity: `${l}`, cost: ke(l, d) }),
          (function (e) {
            const t =
              ((n = Se),
              Object.keys(n)
                .filter((e) => n[e].quantity > 0)
                .reduce(
                  (e, t) => ((e[t] = { ...n[t] }), delete e[t].square, e),
                  {}
                ));
            var n;
            e.userServices = Object.keys(t)
              .filter((e) => "square" !== e)
              .map((e) => {
                const { name: n, quantity: i, price: r } = t[e];
                return { name: n, quantity: i, cost: ke(i, r) };
              });
          })(ie)),
          (function (e) {
            new FormData(e).forEach((e, t) => {
              t.startsWith("user") && (ie[t] = e);
            });
          })(c),
          e("userOrderDataObj", ie),
          (function (e) {
            [...e].forEach((e) => {
              "text" === e.type ||
              "email" === e.type ||
              "tel" === e.type ||
              "TEXTAREA" === e.tagName
                ? (e.value = "")
                : "checkbox" === e.type && (e.checked = !0);
            });
          })(i),
          [...Q].forEach((e) => {
            e.classList.remove("active");
          }),
          te.disconnect(),
          n || U(X),
          (window.location.href = window.location.href =
            "https://marynashavlak.github.io/comfort-group-cleaning/success-order.html");
      }
      const de = document.querySelectorAll(".buildings__element"),
        fe = document.querySelector(".control-quantity-btn--plus"),
        pe = document.querySelector(".control-quantity-btn--minus"),
        he = document.querySelectorAll(".service-element .checkbox"),
        me = document.querySelector(".table__data"),
        ge = document.querySelector("#take-keys-btn"),
        ye = document.querySelector("#give-keys-btn"),
        ve = document.querySelector(".keys-address-block"),
        be = document.querySelector(".keys-address-block__take-item"),
        xe = document.querySelector(".keys-address-block__give-item");
      fe?.addEventListener("click", Ce),
        pe?.addEventListener("click", Ce),
        ge?.addEventListener("click", Oe),
        ye?.addEventListener("click", Oe),
        de.forEach((e) => {
          e.addEventListener("click", (e) => {
            re(e.target),
              (function (e) {
                const t = e.target;
                t.classList.contains("buildings__element--current") ||
                  [...de].forEach((e) => {
                    e === t
                      ? (e.id, e.classList.add("buildings__element--current"))
                      : e.classList.remove("buildings__element--current");
                  });
              })(e);
          });
        }),
        he.forEach((e) => {
          e.addEventListener("change", (e) => {
            !(function (e) {
              const t = e.currentTarget,
                n = t.closest("label"),
                i = n.nextElementSibling,
                r = t.checked;
              (function (e, t) {
                e.classList.toggle("isHidden", !t);
              })(i, r),
                (function (e) {
                  const t = e.querySelector(".control-quantity-btn--plus"),
                    n = e.querySelector(".control-quantity-btn--minus");
                  t.addEventListener("click", Te),
                    n.addEventListener("click", Te);
                })(i);
              const o = (function (e) {
                  const t = e.querySelector(
                      ".service-element__text"
                    ).textContent,
                    n = e
                      .querySelector(".service-element__accent")
                      .getAttribute("data-value"),
                    i = e.getAttribute("data-id"),
                    r = document.createElement("li");
                  (r.id = i), (r.className = "table__item table__block");
                  const o = Ae("item__name", `${t}`),
                    a = Ae("", "x"),
                    s = Ae("name-wrapper"),
                    c = Ae("quantity-wrapper");
                  De(c, [
                    a,
                    Ae("item__quantity service-quantity", we[i].quantity),
                  ]),
                    De(s, [o, c]);
                  const u = Ae("service-value", `${n}zł`);
                  return u.setAttribute("data-service", i), De(r, [s, u]), r;
                })(n),
                a = n.getAttribute("data-id");
              (function (e, t) {
                const n = t.id,
                  i = (function (e) {
                    return [...me.querySelectorAll("li")].find(
                      (t) => t.id === e
                    );
                  })(n);
                e && !i
                  ? ((function (e) {
                      me.insertAdjacentElement("beforeend", e);
                    })(t),
                    Le(n))
                  : !e &&
                    i &&
                    (Le(n, 0),
                    (function (e) {
                      me.removeChild(e);
                    })(i));
              })(r, o),
                _e(a),
                qe(Se);
            })(e);
          });
        });
      const we = {
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
        Se = {
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
      function Ee(e) {
        const t = je(e),
          n = (function (e) {
            return e.currentTarget.getAttribute("data-type");
          })(e);
        !(function (e, t) {
          if ("plus" === t) we[e].quantity += 1;
          else if ("minus" === t) {
            if (1 === we[e].quantity) return;
            we[e].quantity -= 1;
          }
        })(t, n),
          (function (e) {
            const t = [...document.querySelectorAll(".service-element")].find(
                (t) => t.getAttribute("data-id") === e
              ),
              n = t?.nextElementSibling.querySelector(`[data-name="${e}"]`),
              i = document
                .querySelector(".wrap--square")
                .querySelector(`[data-name="${e}"]`);
            n && (n.textContent = we[e].quantity),
              i &&
                ((i.textContent = we[e].quantity),
                (document.querySelector(".square-value-total").textContent =
                  we[e].quantity));
          })(t),
          (function (e) {
            const t = document
              .querySelector(`[data-name="${e}"]`)
              .parentNode?.parentNode?.querySelector(
                ".control-quantity-btn--minus .icon--minus"
              );
            1 === we[e].quantity
              ? (t.style.fill = "rgba(\t77, 18, 153, 0.3)")
              : (t.style.fill = "#4D1299");
          })(t);
      }
      function Te(e) {
        const t = je(e);
        Ee(e), _e(t), qe(Se);
      }
      function Ce(e) {
        Ee(e),
          (function () {
            const e = document.querySelector('[data-service="square"]');
            (Se.square.quantity = we.square.quantity),
              (e.textContent = Se.square.quantity * Se.square.price + "zł");
          })(),
          qe(Se);
      }
      function _e(e) {
        const t = document.querySelector(`[data-service="${e}"]`),
          n = document.querySelector(`#${e} .service-quantity`),
          i = we[e].price;
        if (t && n) {
          const r = Le(e),
            o = ke(r, i);
          (t.textContent = o), (n.textContent = r);
        } else Le(e, 0);
      }
      function ke(e, t) {
        return `${(e * t).toFixed(2)}zł`;
      }
      function Le(e, t) {
        const n = void 0 !== t ? t : we[e].quantity;
        return (Se[e].quantity = n), n;
      }
      function qe(e) {
        const t =
          ((n = e),
          Object.keys(n)
            .reduce((e, t) => {
              const i = n[t];
              return e + i.quantity * i.price;
            }, 0)
            .toFixed(2));
        var n;
        document.querySelector(".total-order-value").textContent = `${t}zł`;
      }
      function Ae(e, t) {
        const n = document.createElement("span");
        return e && (n.className = e), t && (n.textContent = t), n;
      }
      function De(e, t) {
        t.forEach((t) => {
          e.appendChild(t);
        });
      }
      function je(e) {
        const t = e.currentTarget
            ?.closest(".wrap--service")
            ?.parentNode.querySelector("label")
            ?.getAttribute("data-id"),
          n = e.currentTarget
            ?.closest(".wrap--square")
            ?.getAttribute("data-id");
        return t || n;
      }
      function Oe(e) {
        const t = e.currentTarget;
        t.classList.toggle("active"),
          "take-keys-btn" === t.id
            ? be.classList.toggle("isHidden")
            : xe.classList.toggle("isHidden"),
          (function () {
            const e = be.classList.contains("isHidden"),
              t = xe.classList.contains("isHidden");
            e && t
              ? ve.classList.add("isHidden")
              : ve.classList.remove("isHidden");
          })();
      }
      Y({
        name: "support",
        openModalBtn: document.querySelector("[data-support-modal-open]"),
        closeModalBtn: document.querySelector("[data-support-modal-close]"),
        modal: document.querySelector("[data-support-modal]"),
        backdrop: document.querySelector(".backdrop--support"),
      }),
        Y({
          name: "location",
          openModalBtn: document.querySelector("[data-location-modal-open]"),
          closeModalBtn: document.querySelector("[data-location-modal-close]"),
          modal: document.querySelector("[data-location-modal]"),
          backdrop: document.querySelector(".backdrop--location"),
        });
    })();
})();
