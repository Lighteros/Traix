(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [436],
  {
    25223: function (e, t, a) {
      (window.__NEXT_P = window.__NEXT_P || []).push([
        "/console",
        function () {
          return a(80603);
        },
      ]);
    },
    80603: function (e, t, a) {
      "use strict";
      a.r(t),
        a.d(t, {
          default: function () {
            return _;
          },
        });
      var s = a(52676),
        i = a(75271),
        l = a(53185),
        n = a(48640),
        r = a(66672),
        c = a(95986),
        o = a(40507),
        d = a.n(o),
        x = a(75347),
        m = a.n(x);
      function h(e) {
        let {
            children: t,
            className: a,
            title: i,
            size: l = "m",
            variant: n = "primary",
            smallIcon: r,
            topIcon: c,
            content: o,
            value: d,
            wrapperClass: x,
            chartData: h,
            comingSoon: g,
            ...p
          } = e,
          u = () =>
            "primary" === n
              ? "card-primary"
              : "primary" === n && "l" === l
              ? "card-primary-xs"
              : "primary" === n && "m" === l
              ? "card-primary-m"
              : "primary" === n && "s" === l
              ? "card-primary-s"
              : "secondary" === n
              ? "card-secondary"
              : "secondary" === n && "l" === l
              ? "card-secondary-l"
              : "secondary" === n && "m" === l
              ? "card-secondary-m"
              : "secondary" === n && "s" === l
              ? "card-secondary-s"
              : "chart" === n
              ? "card-chart"
              : "chart" === n && "l" === l
              ? "card-chart-l"
              : "chart" === n && "m" === l
              ? "card-chart-m"
              : "chart" === n && "s" === l
              ? "card-chart-s"
              : "";
        return h
          ? (0, s.jsx)("div", {
              className: x,
              children: (0, s.jsxs)("div", {
                className: "".concat(u(), " ").concat(a).trim(),
                ...p,
                children: [
                  (0, s.jsxs)("div", {
                    className: "flex items-center gap-1",
                    children: [
                      (0, s.jsx)(m(), {
                        src: r,
                        alt: i,
                        width: 24,
                        height: 24,
                      }),
                      (0, s.jsx)("h3", {
                        className:
                          "text-[15px] font-[400] leading-[140%] text-black",
                        children: i,
                      }),
                    ],
                  }),
                  (0, s.jsxs)("div", {
                    className: "flex items-end justify-between gap-1",
                    children: [
                      (0, s.jsxs)("div", {
                        className: "flex flex-col",
                        children: [
                          (0, s.jsx)("h2", {
                            className: "text-black ".concat(
                              g
                                ? "text-md font-[600] leading-[140%]"
                                : "text-[28px] font-[600] leading-[130%]"
                            ),
                            children: g ? "Coming Soon" : h.number,
                          }),
                          (0, s.jsxs)("div", {
                            className: "flex items-center gap-1",
                            children: [
                              (0, s.jsx)("span", {
                                className:
                                  "text-sm font-[400] leading-[140%] text-green-400",
                                children: h.value,
                              }),
                              (0, s.jsx)("span", {
                                className:
                                  "text-sm font-[400] leading-[140%] text-[#878787]",
                                children: h.date,
                              }),
                            ],
                          }),
                        ],
                      }),
                      (0, s.jsxs)("svg", {
                        xmlns: "http://www.w3.org/2000/svg",
                        width: "90",
                        height: "46",
                        viewBox: "0 0 90 46",
                        fill: "none",
                        children: [
                          (0, s.jsx)("path", {
                            d: "M1 24.75L13.6176 28L25.0706 16L37.8824 21.75L49.5294 10.5L59.8824 13.5L66.3529 1L74.7647 21.75L79.9412 8L89 3.5",
                            stroke: "black",
                            strokeWidth: "1.6",
                            strokeLinejoin: "bevel",
                          }),
                          (0, s.jsx)("path", {
                            d: "M13.6176 28L1 24.75V46H89V3.5L79.9412 8L74.7647 21.75L66.3529 1L59.8824 13.5L49.5294 10.5L37.8824 21.75L25.0706 16L13.6176 28Z",
                            fill: "url(#paint0_linear_9879_6071)",
                          }),
                          (0, s.jsx)("defs", {
                            children: (0, s.jsxs)("linearGradient", {
                              id: "paint0_linear_9879_6071",
                              x1: "45",
                              y1: "1",
                              x2: "45",
                              y2: "46",
                              gradientUnits: "userSpaceOnUse",
                              children: [
                                (0, s.jsx)("stop", { stopOpacity: "0.12" }),
                                (0, s.jsx)("stop", {
                                  offset: "1",
                                  stopOpacity: "0",
                                }),
                              ],
                            }),
                          }),
                        ],
                      }),
                    ],
                  }),
                ],
              }),
            })
          : "s" === l
          ? (0, s.jsx)("div", {
              className: x,
              children: (0, s.jsx)("div", {
                className: "".concat(u(), " ").concat(a).trim(),
                ...p,
                children: (0, s.jsxs)("div", {
                  className: "flex flex-col",
                  children: [
                    (0, s.jsx)("span", {
                      className:
                        "text-sm font-[400] leading-[140%] text-[#878787]",
                      children: i,
                    }),
                    (0, s.jsx)("span", {
                      className: "text-black ".concat(
                        d
                          ? "text-2xl font-[600] leading-[120%] tracking-[-0.24px]"
                          : "text-sm font-[600] leading-[140%]"
                      ),
                      children: d || "Coming Soon",
                    }),
                  ],
                }),
              }),
            })
          : (0, s.jsx)("div", {
              className: x,
              children: (0, s.jsx)("div", {
                className: "".concat(u(), " ").concat(a).trim(),
                ...p,
                children: (0, s.jsxs)("div", {
                  className: "relative flex flex-col items-end gap-1",
                  children: [
                    (0, s.jsx)(m(), {
                      src: c,
                      alt: i,
                      width: 140,
                      height: 103,
                      className: "relative right-0 -mr-4",
                    }),
                    (0, s.jsxs)("div", {
                      className: "mr-auto flex flex-col  gap-1 lg:mr-0",
                      children: [
                        (0, s.jsxs)("div", {
                          className: "flex items-center gap-1.5",
                          children: [
                            (0, s.jsx)(m(), {
                              src: r,
                              alt: i,
                              width: 14,
                              height: 14,
                            }),
                            (0, s.jsx)("h3", {
                              className:
                                "text-md font-[600] leading-[140%] text-black",
                              children: g ? "Coming Soon" : i,
                            }),
                          ],
                        }),
                        (0, s.jsx)("p", {
                          className:
                            "text-sm font-[400] leading-[140%] text-black",
                          children: o,
                        }),
                      ],
                    }),
                  ],
                }),
              }),
            });
      }
      h.propTypes = {
        children: d().node,
        className: d().string,
        title: d().string,
        size: d().oneOf(["m", "l", "s"]),
        variant: d().oneOf(["primary", "secondary", "chart"]),
      };
      var g = a(38428),
        p = (e) => {
          let { delay: t } = e;
          return (0, s.jsx)(r.E.div, {
            initial: { opacity: 0 },
            animate: { opacity: 1 },
            exit: { opacity: 0 },
            transition: { duration: 0.3, delay: t },
            className:
              "relative h-[120px] overflow-hidden rounded-[12px] bg-gray-100",
            children: (0, s.jsx)(r.E.div, {
              className:
                "absolute inset-0 bg-gradient-to-r from-gray-100 via-gray-200 to-gray-100",
              initial: { x: "-100%" },
              animate: { x: "100%" },
              transition: { repeat: 1 / 0, duration: 1.5, ease: "linear" },
            }),
          });
        };
      let u = "dashboardMetrics";
      function f() {
        var e, t, a;
        let [l, o] = (0, i.useState)(null),
          [d, x] = (0, i.useState)(!0);
        (0, i.useEffect)(() => {
          let e = async () => {
            let e;
            try {
              e = JSON.parse(localStorage.getItem(u) || "{}");
            } catch (t) {
              console.error("Error parsing stored metrics:", t), (e = {});
            }
            Object.keys(e).length > 0 && (o(e), x(!1));
            try {
              let t = await fetch("/api/metrics", { cache: "no-store" });
              if (!t.ok) throw Error("Failed to fetch metrics");
              let a = await t.json(),
                s = { ...e, taiBuybacks: a.buyBacks, taiBurnt: a.burnt };
              o(s), localStorage.setItem(u, JSON.stringify(s));
            } catch (e) {
              console.error("Error fetching metrics:", e);
            } finally {
              x(!1);
            }
          };
          e();
          let t = setInterval(e, 6e4);
          return () => clearInterval(t);
        }, []);
        let m = [
          {
            title: "Total Holders",
            value:
              null !== (e = null == l ? void 0 : l.totalHolders) && void 0 !== e
                ? e
                : 0,
            icon: "/_next/static/media/lightning-fill.61a3d842.svg",
            formatter: g.uf,
          },
          {
            title: "TAI Buybacks",
            value:
              null !== (t = null == l ? void 0 : l.taiBuybacks) && void 0 !== t
                ? t
                : 0,
            icon: "/_next/static/media/lightning-fill-2.7f09f39f.svg",
            formatter: g.xG,
          },
          {
            title: "TAI Burnt",
            value:
              null !== (a = null == l ? void 0 : l.taiBurnt) && void 0 !== a
                ? a
                : 0,
            icon: "/_next/static/media/lightning-fill-3.545ab082.svg",
            formatter: g.uf,
          },
        ];
        return (0, s.jsxs)(c.Z, {
          className: "pt-4",
          children: [
            (0, s.jsx)("div", {
              className: "grid grid-cols-1 gap-2 lg:grid-cols-3",
              children: (0, s.jsx)(n.M, {
                mode: "wait",
                children: d
                  ? (0, s.jsxs)(
                      r.E.div,
                      {
                        className: "contents",
                        initial: { opacity: 1 },
                        exit: { opacity: 0 },
                        transition: { duration: 0.3 },
                        children: [
                          (0, s.jsx)(p, { delay: 0 }),
                          (0, s.jsx)(p, { delay: 0.1 }),
                          (0, s.jsx)(p, { delay: 0.2 }),
                        ],
                      },
                      "loading"
                    )
                  : (0, s.jsx)(
                      r.E.div,
                      {
                        className: "contents",
                        initial: { opacity: 0 },
                        animate: { opacity: 1 },
                        transition: { duration: 0.3 },
                        children: m.map((e, t) =>
                          (0, s.jsx)(
                            r.E.div,
                            {
                              initial: { opacity: 0, y: 20 },
                              animate: { opacity: 1, y: 0 },
                              transition: { duration: 0.5, delay: 0.1 * t },
                              children: (0, s.jsx)(h, {
                                chartData: { number: e.formatter(e.value) },
                                variant: "primary",
                                title: e.title,
                                size: "m",
                                smallIcon: e.icon,
                                comingSoon: 0 === e.value,
                              }),
                            },
                            e.title
                          )
                        ),
                      },
                      "loaded"
                    ),
              }),
            }),
            (0, s.jsxs)("div", {
              className: "mt-2 grid grid-cols-1 gap-2 lg:grid-cols-4",
              children: [
                (0, s.jsx)(h, { size: "s", title: "DAU", value: "" }),
                (0, s.jsx)(h, {
                  size: "s",
                  title: "Total Searches",
                  value: "",
                }),
                (0, s.jsx)(h, { size: "s", title: "Total Users", value: "" }),
                (0, s.jsx)(h, { size: "s", title: "Total Prompts", value: "" }),
              ],
            }),
            (0, s.jsxs)("div", {
              className:
                "mt-2 flex flex-col gap-4 rounded-[12px] border-[0.5px] border-[#E9E9E9] bg-white p-4",
              children: [
                (0, s.jsx)("h2", {
                  className:
                    "text-xl font-[700] leading-[140%] tracking-[-0.4px]",
                  children: "Products",
                }),
                (0, s.jsxs)("div", {
                  className:
                    "grid grid-cols-1 gap-2 lg:grid-cols-[1fr_1fr_1fr_1fr_0.2fr]",
                  children: [
                    (0, s.jsx)(h, {
                      size: "l",
                      title: "Staking",
                      smallIcon: "/_next/static/media/staking.dfee9c51.svg",
                      className: "h-full",
                      topIcon: "/_next/static/media/stake.d393976e.svg",
                      content:
                        "While gaining access to exclusive airdrops and mint VGPU's that mine $TRX daily",
                    }),
                    (0, s.jsx)(h, {
                      size: "l",
                      title: "AI Hub ",
                      className: "h-full",
                      smallIcon: "/_next/static/media/shape.513ac86a.svg",
                      topIcon: "/_next/static/media/shape.be1742fb.svg",
                      content:
                        "All your favorite consumer AI tools, consolidated in one terminal for cohesive use",
                    }),
                    (0, s.jsx)(h, {
                      size: "l",
                      className: "h-full",
                      title: "Tena",
                      smallIcon: "/_next/static/media/ai.b539c1af.svg",
                      topIcon: "/_next/static/media/ai.a32248e1.svg",
                      content:
                        "The first digital assistant for the Ethereum Ecosystem.",
                    }),
                    (0, s.jsx)(h, {
                      size: "l",
                      title: "T-GPT",
                      className: "h-full",
                      smallIcon: "/_next/static/media/gpt.01c677de.svg",
                      topIcon: "/_next/static/media/gpt.dd92bd34.svg",
                      content:
                        "Get an answer to any question in less than 10 seconds",
                    }),
                  ],
                }),
              ],
            }),
          ],
        });
      }
      var j = a(84010),
        v = () =>
          (0, s.jsxs)("tr", {
            className: "animate-pulse border-b-[0.5px] border-[#E9E9E9]",
            children: [
              (0, s.jsx)("td", {
                className: "w-[160px] py-4",
                children: (0, s.jsx)("div", {
                  className: "h-4 w-20 rounded bg-gray-200",
                }),
              }),
              (0, s.jsx)("td", {
                className: "py-4",
                children: (0, s.jsx)("div", {
                  className: "h-4 w-32 rounded bg-gray-200",
                }),
              }),
              (0, s.jsx)("td", {
                className: "py-4 pr-10 text-right",
                children: (0, s.jsx)("div", {
                  className: "ml-auto h-4 w-24 rounded bg-gray-200",
                }),
              }),
            ],
          }),
        y = a(19996);
      let N = "burnerData";
      function b() {
        let [e, t] = (0, i.useState)([]),
          [a, l] = (0, i.useState)(!1),
          [n, r] = (0, i.useState)(!0);
        (0, i.useEffect)(() => {
          (async () => {
            r(!0);
            let e = localStorage.getItem(N);
            e && (t(JSON.parse(e)), r(!1));
            try {
              let e = await fetch("/api/burner");
              if (!e.ok) throw Error("Failed to fetch burner data");
              let a = await e.json();
              t(a), localStorage.setItem(N, JSON.stringify(a.slice(0, 4)));
            } catch (e) {
              console.error("Error fetching burner data:", e);
            } finally {
              r(!1);
            }
          })();
        }, []);
        let o = a ? e : e.slice(0, 7);
        return (0, s.jsx)(c.Z, {
          className: "p-2",
          children: (0, s.jsxs)("div", {
            className:
              "flex flex-col gap-4 rounded-12 border-[0.5px] border-[#E9E9E9] bg-white p-4",
            children: [
              (0, s.jsx)("h2", {
                className:
                  "text-xl font-[750] leading-[140%] tracking-[-0.4px]",
                children: "Burner",
              }),
              (0, s.jsxs)("table", {
                className: "w-full",
                children: [
                  (0, s.jsx)("thead", {
                    className: "ove rounded-6 bg-[#F9F9F9]",
                    children: (0, s.jsxs)("tr", {
                      className:
                        "overflow-hidden rounded-6 text-sm font-[400] text-[#6E6E6E]",
                      children: [
                        (0, s.jsx)("th", {
                          className:
                            " w-160px py-2 pl-3 text-left font-[400] lg:min-w-[260px]",
                          children: "Date",
                        }),
                        (0, s.jsx)("th", {
                          className: "text-left font-[400]",
                          children: "Amount",
                        }),
                        (0, s.jsx)("th", {
                          className: "text-right font-[400] lg:pr-[57px]",
                          children: "Transaction ID",
                        }),
                      ],
                    }),
                  }),
                  (0, s.jsx)("tbody", {
                    className: "text-sm",
                    children: n
                      ? (0, s.jsxs)(s.Fragment, {
                          children: [
                            (0, s.jsx)(v, {}),
                            (0, s.jsx)(v, {}),
                            (0, s.jsx)(v, {}),
                            (0, s.jsx)(v, {}),
                          ],
                        })
                      : o.map((e, t) =>
                          (0, s.jsxs)(
                            "tr",
                            {
                              className: "".concat(
                                t !== o.length - 1
                                  ? "border-b-[0.5px] border-[#E9E9E9]"
                                  : "",
                                " cursor-pointer hover:bg-[#F9F9F9]"
                              ),
                              children: [
                                (0, s.jsx)("td", {
                                  className:
                                    "w-full py-4  text-xs lg:w-[160px] lg:text-base",
                                  children: (0, y.p6)(e.date),
                                }),
                                (0, s.jsxs)("td", {
                                  className:
                                    "flex items-center gap-1  py-4 text-xs lg:text-base",
                                  children: [
                                    (0, s.jsx)("strong", {
                                      children: e.amount.toLocaleString(),
                                    }),
                                    (0, s.jsx)("span", {
                                      className: "text-[#939393]",
                                      children: "TAI",
                                    }),
                                  ],
                                }),
                                (0, s.jsx)("td", {
                                  className:
                                    "w-full py-4  text-right text-xs lg:pr-10 lg:text-base",
                                  children: (0, s.jsxs)("div", {
                                    className:
                                      "inline-flex cursor-pointer gap-1",
                                    onClick: () =>
                                      window.open(e.transactionId, "_blank"),
                                    children: [
                                      (0, s.jsx)("strong", {
                                        children: (0, y.y1)(e.transactionId),
                                      }),
                                      (0, s.jsx)("svg", {
                                        xmlns: "http://www.w3.org/2000/svg",
                                        width: "19",
                                        height: "18",
                                        viewBox: "0 0 19 18",
                                        fill: "none",
                                        children: (0, s.jsx)("path", {
                                          d: "M5.57947 12.8891L13.3576 5.11093M13.3576 5.11093H6.46852M13.3576 5.11093L13.3576 12.0001",
                                          stroke: "#939393",
                                          strokeWidth: "1.4",
                                        }),
                                      }),
                                    ],
                                  }),
                                }),
                              ],
                            },
                            e._id
                          )
                        ),
                  }),
                ],
              }),
              (0, s.jsx)(j.zx, {
                variant: "ghost",
                size: "m",
                className: "w-full ".concat(e.length <= 7 ? "hidden" : ""),
                onClick: () => l(!a),
                children: a ? "View Less" : "View All",
              }),
            ],
          }),
        });
      }
      var w = function () {
          return (0, s.jsxs)(s.Fragment, {
            children: [(0, s.jsx)(f, {}), (0, s.jsx)(b, {})],
          });
        },
        k = a(73374);
      function _(e) {
        return (0, s.jsx)(w, { ...e });
      }
      _.getLayout = (e) =>
        (0, s.jsxs)(s.Fragment, {
          children: [
            (0, s.jsx)(k.Fb, {
              title: "Our Dashboard: Trade, Stake, and Manage Your Data",
              description:
                "Discover and trade the best AI tokens on Solana. Stake and manage your data using our powerful dashboard. Start now to explore the top Solana tokens available for purchase!",
            }),
            (0, s.jsx)(l.Z, { children: e }),
          ],
        });
    },
  },
  function (e) {
    e.O(0, [201, 403, 914, 148, 973, 888, 774, 179], function () {
      return e((e.s = 25223));
    }),
      (_N_E = e.O());
  },
]);
