(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [54],
  {
    7124: function (e, t, s) {
      (window.__NEXT_P = window.__NEXT_P || []).push([
        "/trade",
        function () {
          return s(53087);
        },
      ]);
    },
    32222: function (e, t, s) {
      "use strict";
      var n = s(14224);
      s(2075);
      var a = s(75271),
        i = a && "object" == typeof a && "default" in a ? a : { default: a },
        r = void 0 !== n && n.env && !0,
        l = function (e) {
          return "[object String]" === Object.prototype.toString.call(e);
        },
        o = (function () {
          function e(e) {
            var t = void 0 === e ? {} : e,
              s = t.name,
              n = void 0 === s ? "stylesheet" : s,
              a = t.optimizeForSpeed,
              i = void 0 === a ? r : a;
            c(l(n), "`name` must be a string"),
              (this._name = n),
              (this._deletedRulePlaceholder = "#" + n + "-deleted-rule____{}"),
              c("boolean" == typeof i, "`optimizeForSpeed` must be a boolean"),
              (this._optimizeForSpeed = i),
              (this._serverSheet = void 0),
              (this._tags = []),
              (this._injected = !1),
              (this._rulesCount = 0);
            var o = document.querySelector('meta[property="csp-nonce"]');
            this._nonce = o ? o.getAttribute("content") : null;
          }
          var t = e.prototype;
          return (
            (t.setOptimizeForSpeed = function (e) {
              c(
                "boolean" == typeof e,
                "`setOptimizeForSpeed` accepts a boolean"
              ),
                c(
                  0 === this._rulesCount,
                  "optimizeForSpeed cannot be when rules have already been inserted"
                ),
                this.flush(),
                (this._optimizeForSpeed = e),
                this.inject();
            }),
            (t.isOptimizeForSpeed = function () {
              return this._optimizeForSpeed;
            }),
            (t.inject = function () {
              var e = this;
              if (
                (c(!this._injected, "sheet already injected"),
                (this._injected = !0),
                this._optimizeForSpeed)
              ) {
                (this._tags[0] = this.makeStyleTag(this._name)),
                  (this._optimizeForSpeed = "insertRule" in this.getSheet()),
                  this._optimizeForSpeed ||
                    (r ||
                      console.warn(
                        "StyleSheet: optimizeForSpeed mode not supported falling back to standard mode."
                      ),
                    this.flush(),
                    (this._injected = !0));
                return;
              }
              this._serverSheet = {
                cssRules: [],
                insertRule: function (t, s) {
                  return (
                    "number" == typeof s
                      ? (e._serverSheet.cssRules[s] = { cssText: t })
                      : e._serverSheet.cssRules.push({ cssText: t }),
                    s
                  );
                },
                deleteRule: function (t) {
                  e._serverSheet.cssRules[t] = null;
                },
              };
            }),
            (t.getSheetForTag = function (e) {
              if (e.sheet) return e.sheet;
              for (var t = 0; t < document.styleSheets.length; t++)
                if (document.styleSheets[t].ownerNode === e)
                  return document.styleSheets[t];
            }),
            (t.getSheet = function () {
              return this.getSheetForTag(this._tags[this._tags.length - 1]);
            }),
            (t.insertRule = function (e, t) {
              if (
                (c(l(e), "`insertRule` accepts only strings"),
                this._optimizeForSpeed)
              ) {
                var s = this.getSheet();
                "number" != typeof t && (t = s.cssRules.length);
                try {
                  s.insertRule(e, t);
                } catch (t) {
                  return (
                    r ||
                      console.warn(
                        "StyleSheet: illegal rule: \n\n" +
                          e +
                          "\n\nSee https://stackoverflow.com/q/20007992 for more info"
                      ),
                    -1
                  );
                }
              } else {
                var n = this._tags[t];
                this._tags.push(this.makeStyleTag(this._name, e, n));
              }
              return this._rulesCount++;
            }),
            (t.replaceRule = function (e, t) {
              if (this._optimizeForSpeed) {
                var s = this.getSheet();
                if (
                  (t.trim() || (t = this._deletedRulePlaceholder),
                  !s.cssRules[e])
                )
                  return e;
                s.deleteRule(e);
                try {
                  s.insertRule(t, e);
                } catch (n) {
                  r ||
                    console.warn(
                      "StyleSheet: illegal rule: \n\n" +
                        t +
                        "\n\nSee https://stackoverflow.com/q/20007992 for more info"
                    ),
                    s.insertRule(this._deletedRulePlaceholder, e);
                }
              } else {
                var n = this._tags[e];
                c(n, "old rule at index `" + e + "` not found"),
                  (n.textContent = t);
              }
              return e;
            }),
            (t.deleteRule = function (e) {
              if (this._optimizeForSpeed) this.replaceRule(e, "");
              else {
                var t = this._tags[e];
                c(t, "rule at index `" + e + "` not found"),
                  t.parentNode.removeChild(t),
                  (this._tags[e] = null);
              }
            }),
            (t.flush = function () {
              (this._injected = !1),
                (this._rulesCount = 0),
                this._tags.forEach(function (e) {
                  return e && e.parentNode.removeChild(e);
                }),
                (this._tags = []);
            }),
            (t.cssRules = function () {
              var e = this;
              return this._tags.reduce(function (t, s) {
                return (
                  s
                    ? (t = t.concat(
                        Array.prototype.map.call(
                          e.getSheetForTag(s).cssRules,
                          function (t) {
                            return t.cssText === e._deletedRulePlaceholder
                              ? null
                              : t;
                          }
                        )
                      ))
                    : t.push(null),
                  t
                );
              }, []);
            }),
            (t.makeStyleTag = function (e, t, s) {
              t &&
                c(
                  l(t),
                  "makeStyleTag accepts only strings as second parameter"
                );
              var n = document.createElement("style");
              this._nonce && n.setAttribute("nonce", this._nonce),
                (n.type = "text/css"),
                n.setAttribute("data-" + e, ""),
                t && n.appendChild(document.createTextNode(t));
              var a = document.head || document.getElementsByTagName("head")[0];
              return s ? a.insertBefore(n, s) : a.appendChild(n), n;
            }),
            (function (e, t) {
              for (var s = 0; s < t.length; s++) {
                var n = t[s];
                (n.enumerable = n.enumerable || !1),
                  (n.configurable = !0),
                  "value" in n && (n.writable = !0),
                  Object.defineProperty(e, n.key, n);
              }
            })(e.prototype, [
              {
                key: "length",
                get: function () {
                  return this._rulesCount;
                },
              },
            ]),
            e
          );
        })();
      function c(e, t) {
        if (!e) throw Error("StyleSheet: " + t + ".");
      }
      var d = function (e) {
          for (var t = 5381, s = e.length; s; )
            t = (33 * t) ^ e.charCodeAt(--s);
          return t >>> 0;
        },
        u = {};
      function h(e, t) {
        if (!t) return "jsx-" + e;
        var s = String(t),
          n = e + s;
        return u[n] || (u[n] = "jsx-" + d(e + "-" + s)), u[n];
      }
      function m(e, t) {
        var s = e + t;
        return (
          u[s] || (u[s] = t.replace(/__jsx-style-dynamic-selector/g, e)), u[s]
        );
      }
      var p = (function () {
          function e(e) {
            var t = void 0 === e ? {} : e,
              s = t.styleSheet,
              n = void 0 === s ? null : s,
              a = t.optimizeForSpeed,
              i = void 0 !== a && a;
            (this._sheet =
              n || new o({ name: "styled-jsx", optimizeForSpeed: i })),
              this._sheet.inject(),
              n &&
                "boolean" == typeof i &&
                (this._sheet.setOptimizeForSpeed(i),
                (this._optimizeForSpeed = this._sheet.isOptimizeForSpeed())),
              (this._fromServer = void 0),
              (this._indices = {}),
              (this._instancesCounts = {});
          }
          var t = e.prototype;
          return (
            (t.add = function (e) {
              var t = this;
              void 0 === this._optimizeForSpeed &&
                ((this._optimizeForSpeed = Array.isArray(e.children)),
                this._sheet.setOptimizeForSpeed(this._optimizeForSpeed),
                (this._optimizeForSpeed = this._sheet.isOptimizeForSpeed())),
                this._fromServer ||
                  ((this._fromServer = this.selectFromServer()),
                  (this._instancesCounts = Object.keys(this._fromServer).reduce(
                    function (e, t) {
                      return (e[t] = 0), e;
                    },
                    {}
                  )));
              var s = this.getIdAndRules(e),
                n = s.styleId,
                a = s.rules;
              if (n in this._instancesCounts) {
                this._instancesCounts[n] += 1;
                return;
              }
              var i = a
                .map(function (e) {
                  return t._sheet.insertRule(e);
                })
                .filter(function (e) {
                  return -1 !== e;
                });
              (this._indices[n] = i), (this._instancesCounts[n] = 1);
            }),
            (t.remove = function (e) {
              var t = this,
                s = this.getIdAndRules(e).styleId;
              if (
                ((function (e, t) {
                  if (!e) throw Error("StyleSheetRegistry: " + t + ".");
                })(
                  s in this._instancesCounts,
                  "styleId: `" + s + "` not found"
                ),
                (this._instancesCounts[s] -= 1),
                this._instancesCounts[s] < 1)
              ) {
                var n = this._fromServer && this._fromServer[s];
                n
                  ? (n.parentNode.removeChild(n), delete this._fromServer[s])
                  : (this._indices[s].forEach(function (e) {
                      return t._sheet.deleteRule(e);
                    }),
                    delete this._indices[s]),
                  delete this._instancesCounts[s];
              }
            }),
            (t.update = function (e, t) {
              this.add(t), this.remove(e);
            }),
            (t.flush = function () {
              this._sheet.flush(),
                this._sheet.inject(),
                (this._fromServer = void 0),
                (this._indices = {}),
                (this._instancesCounts = {});
            }),
            (t.cssRules = function () {
              var e = this,
                t = this._fromServer
                  ? Object.keys(this._fromServer).map(function (t) {
                      return [t, e._fromServer[t]];
                    })
                  : [],
                s = this._sheet.cssRules();
              return t.concat(
                Object.keys(this._indices)
                  .map(function (t) {
                    return [
                      t,
                      e._indices[t]
                        .map(function (e) {
                          return s[e].cssText;
                        })
                        .join(e._optimizeForSpeed ? "" : "\n"),
                    ];
                  })
                  .filter(function (e) {
                    return !!e[1];
                  })
              );
            }),
            (t.styles = function (e) {
              var t, s;
              return (
                (t = this.cssRules()),
                void 0 === (s = e) && (s = {}),
                t.map(function (e) {
                  var t = e[0],
                    n = e[1];
                  return i.default.createElement("style", {
                    id: "__" + t,
                    key: "__" + t,
                    nonce: s.nonce ? s.nonce : void 0,
                    dangerouslySetInnerHTML: { __html: n },
                  });
                })
              );
            }),
            (t.getIdAndRules = function (e) {
              var t = e.children,
                s = e.dynamic,
                n = e.id;
              if (s) {
                var a = h(n, s);
                return {
                  styleId: a,
                  rules: Array.isArray(t)
                    ? t.map(function (e) {
                        return m(a, e);
                      })
                    : [m(a, t)],
                };
              }
              return { styleId: h(n), rules: Array.isArray(t) ? t : [t] };
            }),
            (t.selectFromServer = function () {
              return Array.prototype.slice
                .call(document.querySelectorAll('[id^="__jsx-"]'))
                .reduce(function (e, t) {
                  return (e[t.id.slice(2)] = t), e;
                }, {});
            }),
            e
          );
        })(),
        g = a.createContext(null);
      g.displayName = "StyleSheetContext";
      var x = i.default.useInsertionEffect || i.default.useLayoutEffect,
        f = new p();
      function b(e) {
        var t = f || a.useContext(g);
        return (
          t &&
            x(
              function () {
                return (
                  t.add(e),
                  function () {
                    t.remove(e);
                  }
                );
              },
              [e.id, String(e.dynamic)]
            ),
          null
        );
      }
      (b.dynamic = function (e) {
        return e
          .map(function (e) {
            return h(e[0], e[1]);
          })
          .join(" ");
      }),
        (t.style = b);
    },
    68340: function (e, t, s) {
      "use strict";
      e.exports = s(32222).style;
    },
    53087: function (e, t, s) {
      "use strict";
      s.r(t),
        s.d(t, {
          default: function () {
            return E;
          },
        });
      var n = s(52676),
        a = s(75271),
        i = s(53185),
        r = s(75347),
        l = s.n(r),
        o = s(95986),
        c = {
          src: "/_next/static/media/bybit.105bb7a4.svg",
          height: 24,
          width: 24,
          blurWidth: 0,
          blurHeight: 0,
        },
        d = {
          src: "/_next/static/media/gate.996bcb4e.svg",
          height: 24,
          width: 24,
          blurWidth: 0,
          blurHeight: 0,
        },
        u = {
          src: "/_next/static/media/bybit2.3c12a530.svg",
          height: 24,
          width: 24,
          blurWidth: 0,
          blurHeight: 0,
        },
        h = {
          src: "/_next/static/media/bybit3.de5764ca.svg",
          height: 24,
          width: 24,
          blurWidth: 0,
          blurHeight: 0,
        };
      function m() {
        return (0, n.jsx)(o.Z, {
          className: "mt-4",
          children: (0, n.jsxs)("div", {
            className: "grid grid-cols-1 gap-2 lg:grid-cols-4",
            children: [
              (0, n.jsxs)("div", {
                className:
                  "flex flex-col gap-4 rounded-[10px] border-[0.5px] border-[#e9e9e9] bg-white p-4",
                children: [
                  (0, n.jsxs)("div", {
                    className: "flex items-center gap-2",
                    children: [
                      (0, n.jsx)(l(), {
                        src: c,
                        alt: "Broker",
                        width: 24,
                        height: 24,
                      }),
                      (0, n.jsx)("span", {
                        className:
                          "brokerIcon font-primary text-sm font-[400] leading-[140%] text-black",
                        children: "Broker 1",
                      }),
                      (0, n.jsx)("svg", {
                        xmlns: "http://www.w3.org/2000/svg",
                        width: "18",
                        className: "ml-auto",
                        height: "18",
                        viewBox: "0 0 18 18",
                        fill: "none",
                        children: (0, n.jsx)("path", {
                          d: "M4.61097 12.889L12.3891 5.11087M12.3891 5.11087H5.50002M12.3891 5.11087L12.3891 12",
                          stroke: "#939393",
                          "stroke-width": "1.4",
                        }),
                      }),
                    ],
                  }),
                  (0, n.jsx)("span", {
                    className:
                      "text-[24px] font-[650] leading-[120%] tracking-[-0.24px]",
                    children: "Coming Soon",
                  }),
                ],
              }),
              (0, n.jsxs)("div", {
                className:
                  "flex flex-col gap-4 rounded-[10px] border-[0.5px] border-[#e9e9e9] bg-white p-4",
                children: [
                  (0, n.jsxs)("div", {
                    className: "flex items-center gap-2",
                    children: [
                      (0, n.jsx)(l(), {
                        src: d,
                        alt: "Broker",
                        width: 24,
                        height: 24,
                      }),
                      (0, n.jsx)("span", {
                        className:
                          "brokerIcon font-primary text-sm font-[400] leading-[140%] text-black",
                        children: "Gate",
                      }),
                      (0, n.jsx)("svg", {
                        xmlns: "http://www.w3.org/2000/svg",
                        width: "18",
                        className: "ml-auto",
                        height: "18",
                        viewBox: "0 0 18 18",
                        fill: "none",
                        children: (0, n.jsx)("path", {
                          d: "M4.61097 12.889L12.3891 5.11087M12.3891 5.11087H5.50002M12.3891 5.11087L12.3891 12",
                          stroke: "#939393",
                          "stroke-width": "1.4",
                        }),
                      }),
                    ],
                  }),
                  (0, n.jsx)("span", {
                    className:
                      "text-[24px] font-[650] leading-[120%] tracking-[-0.24px]",
                    children: "Coming Soon",
                  }),
                ],
              }),
              (0, n.jsxs)("div", {
                className:
                  "flex flex-col gap-4 rounded-[10px] border-[0.5px] border-[#e9e9e9] bg-white p-4",
                children: [
                  (0, n.jsxs)("div", {
                    className: "flex items-center gap-2",
                    children: [
                      (0, n.jsx)(l(), {
                        src: u,
                        alt: "Broker",
                        width: 24,
                        height: 24,
                      }),
                      (0, n.jsx)("span", {
                        className:
                          "brokerIcon font-primary text-sm font-[400] leading-[140%] text-black",
                        children: "Bybit",
                      }),
                      (0, n.jsx)("svg", {
                        xmlns: "http://www.w3.org/2000/svg",
                        width: "18",
                        className: "ml-auto",
                        height: "18",
                        viewBox: "0 0 18 18",
                        fill: "none",
                        children: (0, n.jsx)("path", {
                          d: "M4.61097 12.889L12.3891 5.11087M12.3891 5.11087H5.50002M12.3891 5.11087L12.3891 12",
                          stroke: "#939393",
                          "stroke-width": "1.4",
                        }),
                      }),
                    ],
                  }),
                  (0, n.jsx)("span", {
                    className:
                      "text-[24px] font-[650] leading-[120%] tracking-[-0.24px]",
                    children: "Coming Soon",
                  }),
                ],
              }),
              (0, n.jsxs)("div", {
                className:
                  "flex flex-col gap-4 rounded-[10px] border-[0.5px] border-[#e9e9e9] bg-white p-4",
                children: [
                  (0, n.jsxs)("div", {
                    className: "flex items-center gap-2",
                    children: [
                      (0, n.jsx)(l(), {
                        src: h,
                        alt: "Broker",
                        width: 24,
                        height: 24,
                      }),
                      (0, n.jsx)("span", {
                        className:
                          "brokerIcon font-primary text-sm font-[400] leading-[140%] text-black",
                        children: "Bybit",
                      }),
                      (0, n.jsx)("svg", {
                        xmlns: "http://www.w3.org/2000/svg",
                        width: "18",
                        className: "ml-auto",
                        height: "18",
                        viewBox: "0 0 18 18",
                        fill: "none",
                        children: (0, n.jsx)("path", {
                          d: "M4.61097 12.889L12.3891 5.11087M12.3891 5.11087H5.50002M12.3891 5.11087L12.3891 12",
                          stroke: "#939393",
                          "stroke-width": "1.4",
                        }),
                      }),
                    ],
                  }),
                  (0, n.jsx)("span", {
                    className:
                      "text-[24px] font-[650] leading-[120%] tracking-[-0.24px]",
                    children: "Coming Soon",
                  }),
                ],
              }),
            ],
          }),
        });
      }
      var p = s(84010),
        g = s(79691),
        x = s(27326),
        f = s(19996),
        b = s(51800),
        v = s(53219),
        y = {
          src: "/_next/static/media/wallet.3895d5bc.svg",
          height: 15,
          width: 16,
          blurWidth: 0,
          blurHeight: 0,
        },
        _ = {
          src: "/_next/static/media/swap-2.012c0ede.svg",
          height: 7,
          width: 12,
          blurWidth: 0,
          blurHeight: 0,
        },
        w = s(68340),
        j = s.n(w),
        S = {
          src: "/_next/static/media/arrow.b572d68d.svg",
          height: 18,
          width: 18,
          blurWidth: 0,
          blurHeight: 0,
        };
      function k(e) {
        let { tokens: t, selectedToken: s, onSelect: i, isConnected: r } = e,
          [o, c] = (0, a.useState)(!1),
          d = (0, a.useRef)(null);
        return (
          (0, a.useEffect)(() => {
            function e(e) {
              d.current && !d.current.contains(e.target) && c(!1);
            }
            return (
              document.addEventListener("mousedown", e),
              () => {
                document.removeEventListener("mousedown", e);
              }
            );
          }, []),
          (0, n.jsxs)("div", {
            ref: d,
            className: "jsx-8b60ee4c60a82378 relative",
            children: [
              (0, n.jsxs)("button", {
                type: "button",
                onClick: () => {
                  r && c(!o);
                },
                className:
                  "jsx-8b60ee4c60a82378 flex w-[120px] items-center justify-between rounded-[8px] border border-[#e9e9e9] bg-white p-2",
                children: [
                  (0, n.jsxs)("div", {
                    className: "jsx-8b60ee4c60a82378 flex items-center gap-1",
                    children: [
                      (0, n.jsx)(l(), {
                        src: s.logoURI,
                        alt: s.name,
                        width: 18,
                        height: 18,
                      }),
                      (0, n.jsx)("span", {
                        className:
                          "jsx-8b60ee4c60a82378 text-sm font-[400] leading-[140%] text-black",
                        children: s.symbol,
                      }),
                    ],
                  }),
                  (0, n.jsx)(l(), {
                    src: S,
                    alt: "Dropdown",
                    width: 12,
                    height: 12,
                  }),
                ],
              }),
              o &&
                (0, n.jsx)("ul", {
                  className:
                    "jsx-8b60ee4c60a82378 custom-scrollbar absolute z-10 mt-1 max-h-60 w-full overflow-auto rounded-[8px] border border-[#e9e9e9] bg-white shadow-md",
                  children: t.map((e) =>
                    (0, n.jsxs)(
                      "button",
                      {
                        type: "button",
                        onClick: () => {
                          i(e), c(!1);
                        },
                        className:
                          "jsx-8b60ee4c60a82378 flex w-full cursor-pointer items-center gap-2 p-2 hover:bg-[#f5f5f5]",
                        children: [
                          (0, n.jsx)(l(), {
                            src: e.logoURI,
                            alt: e.name,
                            width: 18,
                            height: 18,
                          }),
                          (0, n.jsx)("span", {
                            className:
                              "jsx-8b60ee4c60a82378 text-sm font-[400] text-black",
                            children: e.symbol,
                          }),
                        ],
                      },
                      e.address
                    )
                  ),
                }),
              (0, n.jsx)(j(), {
                id: "8b60ee4c60a82378",
                children:
                  ".custom-scrollbar.jsx-8b60ee4c60a82378{scrollbar-width:thin;scrollbar-color:#888#f1f1f1}.custom-scrollbar.jsx-8b60ee4c60a82378::-webkit-scrollbar{width:6px}.custom-scrollbar.jsx-8b60ee4c60a82378::-webkit-scrollbar-track{background:#f1f1f1;-webkit-border-radius:10px;-moz-border-radius:10px;border-radius:10px}.custom-scrollbar.jsx-8b60ee4c60a82378::-webkit-scrollbar-thumb{background:#888;-webkit-border-radius:10px;-moz-border-radius:10px;border-radius:10px}.custom-scrollbar.jsx-8b60ee4c60a82378::-webkit-scrollbar-thumb:hover{background:#555}@media(max-width:640px){.custom-scrollbar.jsx-8b60ee4c60a82378{max-height:50vh}}",
              }),
            ],
          })
        );
      }
      let N = [
        {
          address: "So11111111111111111111111111111111111111112",
          name: "Wrapped SOL",
          symbol: "SOL",
          decimals: 9,
          logoURI:
            "https://raw.githubusercontent.com/solana-labs/token-list/main/assets/mainnet/So11111111111111111111111111111111111111112/logo.png",
          tags: ["verified", "community", "strict"],
          daily_volume: 2896590976.42579,
          created_at: "2024-04-26T10:56:58.893768Z",
          freeze_authority: null,
          mint_authority: null,
          permanent_delegate: null,
          minted_at: null,
          extensions: { coingeckoId: "wrapped-solana" },
        },
        {
          address: "EPjFWdd5AufqSSqeM2qN1xzybapC8G4wEGGkZwyTDt1v",
          name: "USD Coin",
          symbol: "USDC",
          decimals: 6,
          logoURI:
            "https://raw.githubusercontent.com/solana-labs/token-list/main/assets/mainnet/EPjFWdd5AufqSSqeM2qN1xzybapC8G4wEGGkZwyTDt1v/logo.png",
          tags: ["strict", "verified", "community"],
          daily_volume: 1724658522.45124,
          created_at: "2024-04-26T10:56:58.893768Z",
          freeze_authority: "7dGbd2QZcCKcTndnHcTL8q7SMVXAkp688NTQYwrRCrar",
          mint_authority: "BJE5MMbqXjVwjAF7oxwPYXnTXDyspzZyt4vwenNw5ruG",
          permanent_delegate: null,
          minted_at: null,
          extensions: { coingeckoId: "usd-coin" },
        },
        {
          address: "Es9vMFrzaCERmJfrF4H2FYD4KCoNkY11McCe8BenwNYB",
          name: "USDT",
          symbol: "USDT",
          decimals: 6,
          logoURI:
            "https://raw.githubusercontent.com/solana-labs/token-list/main/assets/mainnet/Es9vMFrzaCERmJfrF4H2FYD4KCoNkY11McCe8BenwNYB/logo.svg",
          tags: ["verified", "strict", "community"],
          daily_volume: 571637968.405903,
          created_at: "2024-04-26T10:56:58.893768Z",
          freeze_authority: "Q6XprfkF8RQQKoQVG33xT88H7wi8Uk1B1CC7YAs69Gi",
          mint_authority: "Q6XprfkF8RQQKoQVG33xT88H7wi8Uk1B1CC7YAs69Gi",
          permanent_delegate: null,
          minted_at: null,
          extensions: { coingeckoId: "tether" },
        },
        {
          address: "hntyVP6YFm1Hg25TN9WGLqM12b8TQmcknKrdu1oxWux",
          name: "Helium Network Token",
          symbol: "HNT",
          decimals: 8,
          logoURI:
            "https://shdw-drive.genesysgo.net/6tcnBSybPG7piEDShBcrVtYJDPSvGrDbVvXmXKpzBvWP/hnt.png",
          tags: ["strict", "verified", "community"],
          daily_volume: 4546434.48136379,
          created_at: "2024-04-26T10:56:58.893768Z",
          freeze_authority: "BQ3MCuTT5zVBhNfQ4SjMh3NPVhFy73MPV8rjfq5d1zie",
          mint_authority: "3QqEkX1juz4bW8mCQBMJLWjEpHqYawvbEUvpc6iwYom3",
          permanent_delegate: null,
          minted_at: null,
          extensions: { coingeckoId: "helium" },
        },
        {
          address: "JUPyiwrYJFskUPiHa7hkeR8VUtAeFoSYbKedZNsDvCN",
          name: "Jupiter",
          symbol: "JUP",
          decimals: 6,
          logoURI: "https://static.jup.ag/jup/icon.png",
          tags: ["strict", "community", "verified"],
          daily_volume: 22573437.8342262,
          created_at: "2024-04-26T10:56:58.893768Z",
          freeze_authority: null,
          mint_authority: null,
          permanent_delegate: null,
          minted_at: "2024-01-25T08:54:23Z",
          extensions: { coingeckoId: "jupiter-exchange-solana" },
        },
        {
          address: "DezXAZ8z7PnrnRJjz3wXBoRgixCa6xjnB7YaB1pPB263",
          name: "Bonk",
          symbol: "Bonk",
          decimals: 5,
          logoURI:
            "https://arweave.net/hQiPZOsRZXGXBJd_82PhVdlM_hACsT_q6wqwf5cSY7I",
          tags: ["community", "strict", "verified"],
          daily_volume: 33598304.6142805,
          created_at: "2024-04-26T10:56:58.893768Z",
          freeze_authority: null,
          mint_authority: null,
          permanent_delegate: null,
          minted_at: null,
          extensions: { coingeckoId: "bonk" },
        },
        {
          address: "4k3Dyjzvzp8eMZWUXbBCjEvwSkkk59S5iCNLY3QrkX6R",
          name: "Raydium",
          symbol: "RAY",
          decimals: 6,
          logoURI:
            "https://raw.githubusercontent.com/solana-labs/token-list/main/assets/mainnet/4k3Dyjzvzp8eMZWUXbBCjEvwSkkk59S5iCNLY3QrkX6R/logo.png",
          tags: ["strict", "verified", "community"],
          daily_volume: 11900713.3153399,
          created_at: "2024-04-26T10:56:58.893768Z",
          freeze_authority: null,
          mint_authority: null,
          permanent_delegate: null,
          minted_at: null,
          extensions: { coingeckoId: "raydium" },
        },
        {
          address: "EsPKhGTMf3bGoy4Qm7pCv3UCcWqAmbC1UGHBTDxRjjD4",
          name: "FTM (Allbridge from Fantom)",
          symbol: "FTM",
          decimals: 9,
          logoURI:
            "https://raw.githubusercontent.com/solana-labs/token-list/main/assets/mainnet/EsPKhGTMf3bGoy4Qm7pCv3UCcWqAmbC1UGHBTDxRjjD4/logo.png",
          tags: ["community", "verified", "strict"],
          daily_volume: 571024.254479607,
          created_at: "2024-04-26T10:56:58.893768Z",
          freeze_authority: null,
          mint_authority: null,
          permanent_delegate: null,
          minted_at: null,
          extensions: {},
        },
        {
          address: "J1toso1uCk3RLmjorhTtrVwY9HJ7X8V9yYac6Y7kGCPn",
          name: "Jito Staked SOL",
          symbol: "JitoSOL",
          decimals: 9,
          logoURI:
            "https://storage.googleapis.com/token-metadata/JitoSOL-256.png",
          tags: ["strict", "lst", "verified", "community"],
          daily_volume: 116685826.100265,
          created_at: "2024-04-26T10:56:58.893768Z",
          freeze_authority: null,
          mint_authority: "6iQKfEyhr3bZMotVkW6beNZz5CPAkiwvgV2CTje9pVSS",
          permanent_delegate: null,
          minted_at: null,
          extensions: { coingeckoId: "jito-staked-sol" },
        },
        {
          address: "BNso1VUJnh4zcfpZa6986Ea66P6TCp59hvtNJ8b1X85",
          name: "Binance Staked SOL",
          symbol: "BNSOL",
          decimals: 9,
          logoURI:
            "https://arweave.net/LepI-hea-JrbLMb4L_HpMzaq9k0aHY2-lVSGiBtwvFM?ext=png",
          tags: ["lst", "verified"],
          daily_volume: 19701.9159955332,
          created_at: "2024-09-10T03:47:30.706774Z",
          freeze_authority: null,
          mint_authority: "75NPzpxoh8sXGuSENFMREidq6FMzEx4g2AfcBEB6qjCV",
          permanent_delegate: null,
          minted_at: "2024-08-26T06:04:34Z",
          extensions: { coingeckoId: "binance-staked-sol" },
        },
      ];
      var C = s(38428);
      function T(e) {
        let { message: t, isSuccess: s, link: a, onClose: i } = e;
        return (0, n.jsx)("div", {
          className:
            "fixed inset-0 z-120 flex items-center justify-center bg-black/50 backdrop-blur",
          children: (0, n.jsxs)("div", {
            className:
              "w-full max-w-[87.5%] rounded-lg border-[0.5px] border-[#e9e9e9] bg-white p-10 text-center shadow-md lg:max-w-[400px]",
            children: [
              (0, n.jsx)("p", {
                className: "text-lg ".concat(
                  s ? "text-green-600" : "text-red-600"
                ),
                children: t,
              }),
              s &&
                a &&
                (0, n.jsx)("a", {
                  href: a,
                  target: "_blank",
                  rel: "noopener noreferrer",
                  className: "mt-2 inline-block text-blue-500 underline",
                  children: "View Transaction",
                }),
              (0, n.jsx)(p.zx, {
                onClick: i,
                size: "xs",
                variant: "primary",
                children: "Close",
              }),
            ],
          }),
        });
      }
      function z() {
        var e, t, s;
        let [i, r] = (0, a.useState)({
            isVisible: !1,
            message: "",
            isSuccess: !1,
          }),
          { walletProvider: o } = (0, b.cB)("solana"),
          { address: c, isConnected: d } = (0, b.Tj)(),
          { open: u } = (0, b.Ig)(),
          [h, m] = (0, a.useState)(N[0]),
          [x, f] = (0, a.useState)(null),
          [w, j] = (0, a.useState)(!1),
          [S, z] = (0, a.useState)(null),
          [F, R] = (0, a.useState)(0),
          [B, E] = (0, a.useState)(0),
          [I, A] = (0, a.useState)({ priceUsd: 0, changePercent: "" }),
          M = async () => {
            j(!0), z(null);
            try {
              var e;
              let t = await fetch("/api/tokenPrice?tokens=".concat(h.address));
              if (!t.ok) throw Error("Failed to fetch token price");
              let s = await t.json();
              f(
                (null === (e = s[h.address]) || void 0 === e
                  ? void 0
                  : e.usd) || "0.00"
              );
            } catch (e) {
              z(e.message), f(null);
            } finally {
              j(!1);
            }
          };
        (0, a.useEffect)(() => {
          M();
          let e = setInterval(() => {
            M();
          }, 3e4);
          return () => clearInterval(e);
        }, [h]),
          (0, a.useEffect)(() => {
            let e = localStorage.getItem("tokenSummary");
            e && A(JSON.parse(e));
          }, []);
        let P = { preflightCommitment: "processed" },
          L = (0, a.useMemo)(
            () =>
              new v.ew(
                "https://mainnet.helius-rpc.com/?api-key=95136bd3-efa3-4c75-926f-837dc8bdfd74",
                "processed"
              ),
            []
          ),
          H = async (e, t) => {
            let s = await fetch(
              "/api/quote?inputMint=".concat(e, "&amount=").concat(t)
            );
            if (!s.ok) throw Error("Failed to fetch quote");
            return s.json();
          },
          U = async (e, t) => {
            let s = await fetch("/api/swap", {
              method: "POST",
              headers: { "Content-Type": "application/json" },
              body: JSON.stringify({ quoteData: e, userPublicKey: t }),
            });
            if (!s.ok) throw Error("Failed to fetch swap data");
            return s.json();
          },
          Z = async () => {
            console.clear();
            try {
              if ((console.log("Swapping..."), !d)) {
                u();
                return;
              }
              let e = F * 10 ** h.decimals,
                t = await H(h.address, e),
                { swapTransaction: s } = await U(t, c),
                n = (0, C.y)(s),
                a = await o.signTransaction(n),
                i = await L.sendRawTransaction(a.serialize(), P);
              console.log("txid", i);
              let l = await L.getLatestBlockhash();
              console.log("latestBlockHash", l);
              let m = await L.confirmTransaction({
                blockhash: l.blockhash,
                lastValidBlockHeight: l.lastValidBlockHeight,
                signature: i,
              });
              R(0),
                E(0),
                m.value.err
                  ? (console.log("Error:", m.value.err),
                    r({
                      isVisible: !0,
                      message: "Transaction Failed",
                      isSuccess: !1,
                    }))
                  : (console.log("Tx success:", m.value),
                    r({
                      isVisible: !0,
                      message: "Transaction Successful!",
                      isSuccess: !0,
                      link: "https://explorer.solana.com/tx/".concat(
                        i,
                        "?cluster=mainnet-beta"
                      ),
                    }));
            } catch (e) {
              R(0),
                E(0),
                console.log("error in catch", e),
                r({
                  isVisible: !0,
                  message: "Transaction Failed",
                  isSuccess: !1,
                });
            }
          },
          [O, Y] = (0, a.useState)({});
        (0, a.useEffect)(() => {
          (async () => {
            try {
              if (c) {
                let e = new v.nh(c),
                  t = {};
                await Promise.all(
                  N.map(async (s) => {
                    if ("SOL" === s.symbol) {
                      let n = await L.getBalance(e);
                      t[s.symbol] = {
                        name: s.name,
                        balance: n / 1e9,
                        decimals: 9,
                        symbol: s.symbol,
                      };
                    } else {
                      let n = new v.nh(s.address),
                        a = await L.getTokenAccountsByOwner(e, { mint: n });
                      if (a.value.length > 0) {
                        let e = a.value[0].pubkey,
                          n = await L.getTokenAccountBalance(e);
                        t[s.symbol] = {
                          name: s.name,
                          balance: n.value.uiAmount || 0,
                          decimals: s.decimals,
                          symbol: s.symbol,
                        };
                      } else
                        t[s.symbol] = {
                          name: s.name,
                          balance: 0,
                          decimals: s.decimals,
                          symbol: s.symbol,
                        };
                    }
                  })
                );
                let s = new v.nh(
                    "Hax9LTgsQkze1YFychnBLtFH8gYbQKtKfWKKg2SP6gdD"
                  ),
                  n = await L.getTokenAccountsByOwner(e, { mint: s });
                console.log("tokenAccounts", n);
                let a = n.value[0].pubkey,
                  i = await L.getTokenAccountBalance(a);
                console.log("Balance: ".concat(i.value.uiAmount)),
                  (t.TAI = {
                    name: "TARS AI",
                    balance: i.value.uiAmount,
                    decimals: 9,
                    symbol: "TAI",
                  }),
                  console.log("tokenBalances", t),
                  Y(t);
              }
            } catch (e) {
              console.error("Error:", e);
            }
          })();
        }, [c]);
        let V = async (e) => {
          console.log("token", e),
            m(e),
            R(0),
            E(0),
            console.log("done [][][][]");
        };
        return (0, n.jsxs)("div", {
          className:
            "flex h-full flex-col gap-2 rounded-[12px] border-[0.5px] border-[#e9e9e9] bg-white p-4",
          children: [
            (0, n.jsx)("h2", {
              className:
                "text-[20px] font-[650] leading-[140%] tracking-[-0.2px] text-black",
              children: "Swap",
            }),
            (0, n.jsx)("p", {
              className: "text-[14px] font-[400] leading-[140%] text-black",
              children: "Swap and get $TRX now.",
            }),
            (0, n.jsxs)("div", {
              className: "relative mt-2 flex flex-col gap-1",
              children: [
                (0, n.jsxs)("div", {
                  className:
                    "relative w-full space-y-3 rounded-[10px] border-[0.5px] border-[#e9e9e9] p-4",
                  children: [
                    (0, n.jsxs)("div", {
                      className: "flex w-full items-center justify-between",
                      children: [
                        (0, n.jsx)("input", {
                          type: "text",
                          className:
                            "w-52 font-primary text-2xl font-[400] leading-[150%] text-[#000] outline-none placeholder:text-[#C9C9C9]",
                          placeholder: "0.00",
                          value: F,
                          onChange: (e) => {
                            var t, s;
                            console.log("on change running", e.target.value);
                            let n =
                              e.target.value >
                              (null === (t = O[h.symbol]) || void 0 === t
                                ? void 0
                                : t.balance)
                                ? null === (s = O[h.symbol]) || void 0 === s
                                  ? void 0
                                  : s.balance
                                : e.target.value;
                            R(n);
                            let { priceUsd: a } = I;
                            E((x * n) / a);
                          },
                        }),
                        (0, n.jsx)(k, {
                          tokens: N,
                          selectedToken: h,
                          onSelect: V,
                          isConnected: d,
                        }),
                      ],
                    }),
                    (0, n.jsxs)("div", {
                      className: "flex items-center justify-between",
                      children: [
                        (0, n.jsx)("span", {
                          className:
                            "font-primary text-sm font-[400] leading-[140%] text-black",
                          children: w
                            ? (0, n.jsx)("span", {
                                className:
                                  "inline-block h-[14px] w-16 animate-pulse rounded-sm bg-gray-200",
                              })
                            : S
                            ? "Error fetching price"
                            : "$".concat(
                                x *
                                  (null === (e = O[h.symbol]) || void 0 === e
                                    ? void 0
                                    : e.balance) || "0.00"
                              ),
                        }),
                        (0, n.jsxs)("div", {
                          className: "flex items-center gap-1",
                          children: [
                            (0, n.jsx)(l(), {
                              src: y,
                              alt: "",
                              width: 18,
                              height: 18,
                            }),
                            (0, n.jsx)("span", {
                              className:
                                "font-primary text-sm font-[600] leading-[140%] text-black",
                              children:
                                null === (t = O[h.symbol]) || void 0 === t
                                  ? void 0
                                  : t.balance,
                            }),
                            (0, n.jsx)("span", {
                              className:
                                "font-primary text-sm leading-[140%] text-[400] text-black",
                              children: h.symbol,
                            }),
                          ],
                        }),
                      ],
                    }),
                  ],
                }),
                (0, n.jsx)("div", {
                  className:
                    "absolute left-1/2 top-1/2 z-2 mt-4 -translate-x-1/2 -translate-y-1/2 rounded-xl border border-[#e9e9e9] bg-white p-1",
                  children: (0, n.jsx)("div", {
                    className:
                      "flex h-10 w-10 items-center justify-center rounded border border-[#6C6C6C] bg-[#232323]",
                    children: (0, n.jsx)(l(), {
                      src: _,
                      width: 10,
                      height: 5,
                      alt: "Swap",
                    }),
                  }),
                }),
                (0, n.jsxs)("div", {
                  className:
                    "relative flex w-full items-center justify-between rounded-[10px] border-[0.5px] border-[#e9e9e9] px-4 py-[18px]",
                  children: [
                    (0, n.jsx)("input", {
                      type: "text",
                      className:
                        "font-primary text-2xl font-[400] leading-[150%] text-black/60 outline-none placeholder:text-[#C9C9C9]",
                      placeholder: "0.00",
                      value: isNaN(B) ? 0 : B.toFixed(3),
                    }),
                    (0, n.jsxs)("div", {
                      className: "flex items-center gap-2",
                      children: [
                        (0, n.jsx)(l(), {
                          src: g.Z,
                          width: 18,
                          height: 18,
                          alt: "Tars",
                        }),
                        (0, n.jsx)("span", {
                          className:
                            "font-primary text-sm font-[400] leading-[140%] text-[#878787]",
                          children: "TAI",
                        }),
                      ],
                    }),
                    (0, n.jsx)("span", {
                      className:
                        "font-primary text-sm font-[600] leading-[140%] text-black",
                      children:
                        null === (s = O.TAI) || void 0 === s
                          ? void 0
                          : s.balance.toFixed(3),
                    }),
                  ],
                }),
              ],
            }),
            (0, n.jsxs)("div", {
              className: "mt-auto",
              children: [
                (0, n.jsx)(p.zx, {
                  onClick: Z,
                  className: " w-full",
                  size: "s",
                  variant: "connect",
                  children: d ? "Swap" : "Connect Wallet",
                }),
                i.isVisible &&
                  (0, n.jsx)(T, {
                    message: i.message,
                    isSuccess: i.isSuccess,
                    link: i.link,
                    onClose: () => r({ ...i, isVisible: !1 }),
                  }),
              ],
            }),
          ],
        });
      }
      function F() {
        let [e, t] = (0, a.useState)("30"),
          [s, i] = (0, a.useState)([]),
          [r, c] = (0, a.useState)({});
        (0, a.useEffect)(() => {
          let e = localStorage.getItem("tokenSummary");
          e && c(JSON.parse(e));
          let t = setInterval(() => {
            let e = localStorage.getItem("tokenSummary");
            e && c(JSON.parse(e));
          }, 6e4);
          return () => clearInterval(t);
        }, []);
        let d = async () => {
          try {
            let t = await fetch("/api/graph?days=".concat(e));
            if (!t.ok)
              throw Error("Failed to fetch graph data: ".concat(t.statusText));
            let s = await t.json();
            i(s || []);
          } catch (e) {
            console.error("Error fetching market graph:", e);
          }
        };
        (0, a.useEffect)(() => {
          d();
          let e = setInterval(() => {
            d();
          }, 36e5);
          return () => clearInterval(e);
        }, [e]);
        let u = (e) => {
          t(e);
        };
        return (0, n.jsx)(o.Z, {
          className: "mb-auto pt-4",
          children: (0, n.jsxs)("div", {
            className: "grid grid-cols-1 gap-2 lg:grid-cols-[2fr_1fr]",
            children: [
              (0, n.jsxs)("div", {
                className:
                  "flex w-full flex-col gap-4 rounded-12 border-[0.5px] border-[#E9E9E9] bg-white p-4",
                children: [
                  (0, n.jsxs)("div", {
                    className:
                      "flex flex-col items-start justify-between gap-4 md:flex-row md:items-center",
                    children: [
                      (0, n.jsxs)("div", {
                        className: "flex items-center",
                        children: [
                          (0, n.jsx)(l(), {
                            src: g.Z,
                            alt: "tars",
                            width: 24,
                            height: 24,
                          }),
                          (0, n.jsx)("strong", {
                            className:
                              "ml-2 text-xl font-[750] leading-[140%] tracking-[-0.4px]",
                            children: "Tars AI",
                          }),
                          (0, n.jsx)("span", {
                            className:
                              "ml-1 text-[15px] font-[400] leading-[140%] text-[#878787]",
                            children: "TAI",
                          }),
                        ],
                      }),
                      (0, n.jsx)("div", {
                        className:
                          "flex items-center gap-1 rounded-[7px] bg-[#F0F0F0] p-1",
                        children: [
                          { label: "1D", value: "1" },
                          { label: "1W", value: "7" },
                          { label: "1M", value: "30" },
                          { label: "3M", value: "90" },
                          { label: "YTD", value: "YTD" },
                          { label: "1Y", value: "365" },
                        ].map((t) =>
                          (0, n.jsx)(
                            p.rs,
                            {
                              text: t.label,
                              size: "m",
                              isActive: e === t.value,
                              onClick: () => u(t.value),
                            },
                            t.value
                          )
                        ),
                      }),
                    ],
                  }),
                  (0, n.jsx)("div", {
                    className: "flex flex-col",
                    children: (0, n.jsxs)("h3", {
                      className: "text-[28px] font-[650] leading-[130%]",
                      children: ["$", (0, f.R9)(r.priceUsd)],
                    }),
                  }),
                  (0, n.jsx)("div", {
                    className: "relative h-[300px] w-full",
                    children: (0, n.jsx)(x.Z, {
                      data: s,
                      valueFormatter: (e) => (0, f.CM)(e),
                      isTradeScreen: !0,
                      height: 300,
                      range: e,
                    }),
                  }),
                ],
              }),
              (0, n.jsx)(z, {}),
            ],
          }),
        });
      }
      function R() {
        return (0, n.jsxs)(n.Fragment, {
          children: [(0, n.jsx)(F, {}), (0, n.jsx)(m, {})],
        });
      }
      var B = s(73374);
      function E(e) {
        return (0, n.jsx)(R, { ...e });
      }
      E.getLayout = (e) =>
        (0, n.jsxs)(n.Fragment, {
          children: [
            (0, n.jsx)(B.Fb, { title: "Trade" }),
            (0, n.jsx)(i.Z, { children: e }),
            ";",
          ],
        });
    },
    2075: function () {},
  },
  function (e) {
    e.O(0, [201, 403, 914, 148, 973, 888, 774, 179], function () {
      return e((e.s = 7124));
    }),
      (_N_E = e.O());
  },
]);
