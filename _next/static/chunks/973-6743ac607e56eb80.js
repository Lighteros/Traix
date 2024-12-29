(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [973],
  {
    79691: function (e, t) {
      "use strict";
      t.Z = {
        src: "/_next/static/media/tars-icon.c1049b9a.svg",
        height: 18,
        width: 18,
        blurWidth: 0,
        blurHeight: 0,
      };
    },
    27326: function (e, t, a) {
      "use strict";
      a.d(t, {
        Z: function () {
          return g;
        },
      });
      var n = a(52676),
        i = a(75271),
        r = a(45562),
        s = a(37833),
        l = a(98014),
        o = a(14370),
        c = a(4462),
        d = a(61005),
        u = a(77279),
        x = a(21630),
        p = a(19996),
        h = a(48640),
        m = a(66672);
      let f = [
        { label: "1D", value: "1" },
        { label: "1W", value: "7" },
        { label: "1M", value: "30" },
        { label: "3M", value: "90" },
        { label: "YTD", value: "YTD" },
        { label: "1Y", value: "365" },
      ];
      function g(e) {
        let {
            data: t,
            valueFormatter: a,
            range: g,
            setRange: b,
            isTradeScreen: v = !1,
          } = e,
          [j, w] = (0, i.useState)(0),
          [y, k] = (0, i.useState)(t),
          [_, N] = (0, i.useState)(!1);
        (0, i.useEffect)(() => {
          N(!0);
          let e = setTimeout(() => {
            k(t), N(!1);
          }, 300);
          return () => clearTimeout(e);
        }, [t]);
        let E = (0, i.useMemo)(() => {
            var e;
            return ((e = [0, 1]),
            (null == y ? void 0 : y.length) && !(y.length <= e.length)
              ? e.map((e) => Math.floor(e * (y.length - 1))).map((e) => y[e])
              : y).map((e) => (null == e ? void 0 : e.timestamp));
          }, [y]),
          S = (0, i.useMemo)(
            () =>
              (null == y ? void 0 : y.length)
                ? [0, 0.2, 0.4, 0.6, 0.8, 1].map((e) => {
                    var t;
                    return null === (t = y[Math.floor(e * (y.length - 1))]) ||
                      void 0 === t
                      ? void 0
                      : t.timestamp;
                  })
                : [],
            [y]
          ),
          M = (0, i.useMemo)(() => !t || 0 === t.length || _, [t, _]),
          F = (0, i.useMemo)(() => {
            if (!(null == y ? void 0 : y.length) || M) return [0, 1];
            let e = y.map((e) => (null == e ? void 0 : e.value)),
              t = Math.min(...e),
              a = Math.max(...e),
              n = (a - t) / 4;
            return [Math.floor(t / n) * n, Math.ceil(a / n) * n];
          }, [y]);
        return (0, n.jsxs)("div", {
          className: "bg-red flex flex-col",
          children: [
            (0, n.jsxs)("div", {
              className: "relative ".concat(v ? "h-[300px]" : "h-[200px]"),
              children: [
                (0, n.jsx)(h.M, {
                  mode: "wait",
                  initial: !1,
                  children: (0, n.jsx)(
                    m.E.div,
                    {
                      initial: { opacity: 0 },
                      animate: { opacity: 1 },
                      exit: { opacity: 0 },
                      transition: { duration: 0.2 },
                      className: "h-full w-full",
                      children: (0, n.jsx)(r.h, {
                        width: "100%",
                        height: "100%",
                        children: (0, n.jsxs)(s.T, {
                          data: y,
                          margin: { top: 10, right: 10, bottom: 10, left: 10 },
                          children: [
                            (0, n.jsx)("defs", {
                              children: (0, n.jsxs)("linearGradient", {
                                id: "backgroundGradient",
                                x1: "0",
                                y1: "0",
                                x2: "0",
                                y2: "1",
                                children: [
                                  (0, n.jsx)("stop", {
                                    offset: "0%",
                                    stopColor: "#9280FC",
                                    stopOpacity: 0.4,
                                  }),
                                  (0, n.jsx)("stop", {
                                    offset: "100%",
                                    stopColor: "#9280FC",
                                    stopOpacity: 0,
                                  }),
                                ],
                              }),
                            }),
                            (0, n.jsx)(l.q, {
                              strokeLinecap: "square",
                              horizontal: !0,
                              vertical: !1,
                              stroke: "#E5E5E5",
                            }),
                            (0, n.jsx)(
                              o.K,
                              {
                                dataKey: "timestamp",
                                type: "number",
                                domain: E,
                                axisLine: { stroke: "#E5E5E5" },
                                ticks: S,
                                tickFormatter: (e) =>
                                  (0, p.mn)(new Date(e)).toUpperCase(),
                                tickLine: !1,
                                tick: {
                                  fontFamily: "Roobert, sans-serif",
                                  fontWeight: 500,
                                  fontSize: 12,
                                  letterSpacing: "-0.01em",
                                  fill: "#878787",
                                },
                                dy: 18,
                              },
                              g
                            ),
                            (0, n.jsx)(
                              c.B,
                              {
                                dataKey: "value",
                                type: "number",
                                domain: F,
                                orientation: "right",
                                axisLine: !1,
                                tickLine: !1,
                                tick: {
                                  fontFamily: "Roobert, sans-serif",
                                  fontSize: 12,
                                  fill: "#878787",
                                },
                                tickFormatter: (e) => e.toFixed(3),
                                ticks: [
                                  void 0,
                                  void 0,
                                  void 0,
                                  void 0,
                                  void 0,
                                ].map((e, t) => F[0] + ((F[1] - F[0]) * t) / 4),
                              },
                              g
                            ),
                            (0, n.jsx)(d.u, {
                              cursor: !1,
                              position: { y: -40 },
                              contentStyle: {
                                background: "white",
                                border: "1px solid #E5E5E5",
                                borderRadius: "8px",
                                padding: "8px 12px",
                                boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)",
                              },
                              labelFormatter: (e) => (0, p.lB)(new Date(e)),
                              formatter: (e) => [
                                "$".concat(Number(e).toFixed(6)),
                                "",
                              ],
                              labelStyle: {
                                color: "#878787",
                                fontFamily: "Roobert, sans-serif",
                                fontSize: "14px",
                                fontWeight: 500,
                              },
                              itemStyle: {
                                color: "#212121",
                                fontFamily: "Roobert, sans-serif",
                                fontSize: "16px",
                                fontWeight: 600,
                              },
                            }),
                            (0, n.jsx)(u.u, {
                              dataKey: "value",
                              type: "linear",
                              isAnimationActive: !1,
                              stroke: "#9280FC",
                              strokeWidth: 2,
                              fill: "url(#backgroundGradient)",
                              fillOpacity: 1,
                              activeDot: (e) => (
                                e.cy !== j && w(e.cy),
                                (0, n.jsx)(x.o, { ...e, r: 4, fill: "#9280FC" })
                              ),
                            }),
                          ],
                        }),
                      }),
                    },
                    g
                  ),
                }),
                _ &&
                  (0, n.jsx)(m.E.div, {
                    className: "absolute inset-0 bg-white bg-opacity-50",
                    initial: { opacity: 0 },
                    animate: { opacity: 1 },
                    exit: { opacity: 0 },
                  }),
              ],
            }),
            !v &&
              (0, n.jsx)("div", {
                className:
                  "ml-[10px] mr-6 mt-4 inline-flex h-[36px] rounded-lg bg-[#F0F0F0] p-1",
                children: f.map((e) =>
                  (0, n.jsx)(
                    m.E.button,
                    {
                      onClick: () => {
                        N(!0), b(e.value);
                      },
                      className:
                        "rounded-md px-4 py-1 text-sm transition-all ".concat(
                          g === e.value
                            ? "bg-[#f8f8f8] text-[#000000] shadow-sm"
                            : "text-[#6E6E6E] hover:text-[#212121]"
                        ),
                      whileTap: { scale: 0.95 },
                      children: e.label,
                    },
                    e.value
                  )
                ),
              }),
          ],
        });
      }
    },
    53185: function (e, t, a) {
      "use strict";
      a.d(t, {
        Z: function () {
          return er;
        },
      });
      var n = a(52676),
        i = a(75271),
        r = a(40507),
        s = a.n(r),
        l = a(86365),
        o = a(32353),
        c = a(51800),
        d = a(22459),
        u = a(56237),
        x = a(45503),
        p = a(99816),
        h = a(23948),
        m = a(93092),
        f = a(35641);
      let g = "84d127217ae0018c63f45e9c1c8a9e90";
      if (!g) throw Error("Project ID is not defined");
      let b = [d.RJ0, d.yXc],
        v = new f.K({
          storage: (0, h.o6)({ storage: m.Dr }),
          ssr: !0,
          projectId: g,
          networks: b,
        });
      v.wagmiConfig;
      var j = a(15002),
        w = a(63833);
      let y = new l.S();
      if (!g) throw Error("Project ID is not defined");
      let k = new u.Qp({ wallets: [new j.O(), new w.e()] });
      (0, c.cz)({
        adapters: [v, k],
        projectId: g,
        networks: [d.RJ0, d.Zjg, d.ol5, d.Q6N],
        defaultNetwork: d.RJ0,
        metadata: {
          name: "appkit-example",
          description: "AppKit Example",
          url: "https://appkitexampleapp.com",
          icons: ["https://avatars.githubusercontent.com/u/179229932"],
        },
      });
      var _ = function (e) {
          let { children: t, cookies: a } = e,
            i = (0, x.jx)(v.wagmiConfig, a);
          return (0, n.jsx)(p.F, {
            config: v.wagmiConfig,
            initialState: i,
            children: (0, n.jsx)(o.aH, { client: y, children: t }),
          });
        },
        N = a(58263),
        E = a(38209),
        S = a.n(E),
        M = a(48640),
        F = a(66672),
        C = a(20204),
        z = a(19996);
      a(15331);
      var T = a(23324),
        I = a(63077),
        Z = a(60452),
        D = a(27441),
        A = a(29199);
      a(72714);
      var L = a(19330);
      let R = [
        {
          title: "Products",
          isDetailed: !0,
          containerWidth: 632,
          containerHeight: 420,
          submenu: [
            {
              title: "Search Engine [TGPT]",
              text: "Get an answer to any question in less than 10 seconds.",
              icon: A.Z,
            },
            {
              title: "AI Console",
              text: "Access modular AI app and ecosystem products at a glance in one super-app.",
              icon: T.Z,
            },
            {
              title: "Tena",
              text: "The first digital assistant for the Ethereum Ecosystem..",
              icon: Z.Z,
              isSoon: !0,
            },
            {
              title: "Staking",
              text: "Stake tokens, earn more TAI.",
              link: "https://app.traix.dev",
              icon: D.Z,
            },
            {
              title: "AI Agent Market",
              text: "Join Solana's first AI Market.",
              icon: L.Z,
              isSoon: !0,
            },
            {
              title: "AI Hub ",
              text: "AI tools, consolidated in one terminal for cohesive use.",
              link: "https://ai.tars.pro/",
              icon: I.Z,
            },
          ],
        },
      ];
      var W = a(37565),
        U = a(84010);
      function O(e) {
        let { content: t, className: a = "", isDetailed: i, ...r } = e,
          s = (0, N.useRouter)(),
          l = {
            hidden: { opacity: 0, y: 0 },
            visible: { opacity: 1, y: 0 },
            exit: { opacity: 0, y: 0 },
          };
        return (0, n.jsxs)(F.E.div, {
          variants: {
            hidden: { opacity: 1 },
            visible: {
              opacity: 1,
              transition: {
                type: "spring",
                bounce: 0.02,
                duration: 0.2,
                staggerChildren: 0.05,
              },
            },
            exit: {
              opacity: 0,
              transition: {
                type: "spring",
                bounce: 0.02,
                duration: 0.1,
                staggerChildren: 0.02,
              },
            },
          },
          initial: "hidden",
          animate: "visible",
          exit: "exit",
          className:
            "header__submenu-items absolute left-1/2 top-[68px] grid -translate-x-1/2 grid-cols-2 gap-x-md gap-y-[4px] "
              .concat(!0 === i ? "w-[583px]" : "w-[434px]", " ")
              .concat(a, " "),
          ...r,
          children: [
            i &&
              (0, n.jsx)(
                F.E.div,
                {
                  variants: l,
                  className:
                    "header__submenu-item relative w-full max-w-[276px]",
                  children: (0, n.jsx)("div", {
                    className:
                      "header__submenu-decor flex h-80px items-center overflow-hidden rounded-[10px] border-[0.5px] border-gray-600 bg-gray-300 bg-[url(../images/decor/submenu-banner.svg)] px-md py-xs",
                    children: (0, n.jsx)("span", {
                      className: "header__submenu-decor-title body-heading-s",
                      children: "AI Products",
                    }),
                  }),
                },
                i
              ),
            t.map((e) =>
              !0 === i
                ? (0, n.jsx)(
                    F.E.div,
                    {
                      variants: l,
                      className:
                        "header__submenu-item relative w-full max-w-[276px]",
                      children: (0, n.jsx)(U.rU, {
                        href: e.link,
                        className:
                          "header__submenu-link group flex h-full w-full flex-col gap-xs rounded-10 border-[0.5px] border-transparent px-[14px] py-xs transition-all hover:border-gray-600 "
                            .concat(
                              s.pathname === "".concat(e.link) ? "active" : "",
                              " "
                            )
                            .concat(e.isSoon ? "cursor-not-allowed" : ""),
                        children: (0, n.jsxs)("span", {
                          className:
                            "header__submenu-link-info flex flex-1 flex-col gap-[2px]",
                          children: [
                            (0, n.jsxs)("div", {
                              className:
                                "header__submenu-link-heading flex w-max items-center gap-[6px]",
                              children: [
                                (0, n.jsx)("span", {
                                  className: "header__submenu-link-icon",
                                  children: (0, n.jsx)("span", {
                                    className:
                                      "block h-[14px] w-[14px] bg-black bg-contain transition-all",
                                    style: {
                                      mask: "url(".concat(
                                        e.icon.src,
                                        ") no-repeat 50% 50%"
                                      ),
                                      WebkitMask: "url(".concat(
                                        e.icon.src,
                                        ") no-repeat 50% 50%"
                                      ),
                                      WebkitMaskSize: "cover",
                                      maskSize: "cover",
                                    },
                                  }),
                                }),
                                (0, n.jsxs)("span", {
                                  className: "",
                                  children: [
                                    (0, n.jsx)("span", {
                                      className:
                                        "header__submenu-link-title body-heading-s",
                                      children: e.title,
                                    }),
                                    " ",
                                    e.isSoon &&
                                      (0, n.jsx)("span", {
                                        className:
                                          "body-text-xxs gradient-text-soon font-bold",
                                        children: "soon",
                                      }),
                                  ],
                                }),
                              ],
                            }),
                            (0, n.jsx)("p", {
                              className:
                                "header__submenu-link-text body-text-xxs text-gray-1000",
                              children: e.text,
                            }),
                          ],
                        }),
                      }),
                    },
                    e.title
                  )
                : (0, n.jsx)(
                    F.E.div,
                    {
                      variants: l,
                      className: "header__submenu-item relative w-full",
                      children: (0, n.jsx)(U.rU, {
                        href: e.link,
                        className:
                          "header__submenu-link group flex h-full w-full flex-col gap-xs rounded-10 border-[0.5px] border-transparent px-[14px] py-[12px] transition-all hover:border-gray-600 ".concat(
                            s.pathname === "".concat(e.link) ? "active" : ""
                          ),
                        children: (0, n.jsxs)("span", {
                          className:
                            "header__submenu-link-info flex flex-1 flex-col gap-[2px]",
                          children: [
                            (0, n.jsxs)("div", {
                              className:
                                "header__submenu-link-heading flex w-max items-center gap-[6px]",
                              children: [
                                (0, n.jsx)("span", {
                                  className: "header__submenu-link-icon",
                                  children: (0, n.jsx)("span", {
                                    className:
                                      "block h-[18px] w-[18px] bg-black bg-contain transition-all",
                                    style: {
                                      mask: "url(".concat(
                                        e.icon.src,
                                        ") no-repeat 50% 50%"
                                      ),
                                      WebkitMask: "url(".concat(
                                        e.icon.src,
                                        ") no-repeat 50% 50%"
                                      ),
                                      WebkitMaskSize: "cover",
                                      maskSize: "cover",
                                    },
                                  }),
                                }),
                                (0, n.jsx)("span", {
                                  className:
                                    "header__submenu-link-title body-text-s",
                                  children: e.title,
                                }),
                              ],
                            }),
                            (0, n.jsx)("p", {
                              className:
                                "header__submenu-link-text body-text-xxs text-gray-1000",
                              children: e.text,
                            }),
                          ],
                        }),
                      }),
                    },
                    e.title
                  )
            ),
          ],
        });
      }
      O.propTypes = { className: s().string, content: s().instanceOf(Array) };
      var K = a(99039),
        P = a(22745),
        H = a(80323),
        J = a(26419),
        Y = a(27326),
        B = a(574),
        G = a(41071),
        q = a(79691),
        X = {
          src: "/_next/static/media/telegram.56db06c0.svg",
          height: 24,
          width: 24,
          blurWidth: 0,
          blurHeight: 0,
        },
        $ = {
          src: "/_next/static/media/discord.ce1eaf90.svg",
          height: 24,
          width: 24,
          blurWidth: 0,
          blurHeight: 0,
        },
        Q = {
          src: "/_next/static/media/twitter.aed3c568.svg",
          height: 24,
          width: 24,
          blurWidth: 0,
          blurHeight: 0,
        },
        V = {
          src: "/_next/static/media/lightning-fill.e095b365.svg",
          height: 24,
          width: 24,
          blurWidth: 0,
          blurHeight: 0,
        };
      function ee(e) {
        let { className: t } = e,
          a = (0, N.useRouter)(),
          [r, s] = (0, i.useState)(!1),
          [l, o] = (0, i.useState)(!1),
          [d, u] = (0, i.useState)(null),
          [x, p] = (0, i.useState)(!1),
          [h, m] = (0, i.useState)(!1),
          [f, g] = (0, i.useState)([]),
          [b, v] = i.useState(!1),
          [j, w] = (0, i.useState)({ priceUsd: "", changePercent: "" }),
          [y, k] = (0, i.useState)("7"),
          { open: _ } = (0, c.Ig)(),
          { address: E, isConnected: T } = (0, c.Tj)(),
          { disconnect: I } = (0, c.qL)(),
          Z = async () => {
            try {
              await _();
            } catch (e) {
              console.error("Failed to connect wallet:", e);
            }
          },
          D = async () => {
            try {
              let e = await fetch("/api/graph?days=".concat(y));
              if (!e.ok)
                throw Error(
                  "Failed to fetch graph data: ".concat(e.statusText)
                );
              let t = await e.json();
              g(t || []);
            } catch (e) {
              console.error("Error fetching market graph:", e);
            }
          },
          A = async () => {
            try {
              let e = await fetch("/api/metrics");
              if (!e.ok)
                throw Error(
                  "Failed to fetch summary data: ".concat(e.statusText)
                );
              let t = await e.json(),
                a = {
                  priceUsd: (null == t ? void 0 : t.price) || "",
                  changePercent: (null == t ? void 0 : t.changePercent) || "",
                };
              w(a), localStorage.setItem("tokenSummary", JSON.stringify(a));
            } catch (e) {
              console.error("Error fetching market summary:", e);
            }
          };
        (0, i.useEffect)(() => {
          let e = localStorage.getItem("tokenSummary");
          e && w(JSON.parse(e)), D(), A();
          let t = setInterval(() => {
            A();
          }, 6e4);
          return () => clearInterval(t);
        }, [y]);
        let L = (e) => {
            u(e),
              setTimeout(() => {
                p(e);
              }, 300);
          },
          ee = () => {
            u(null),
              v(!0),
              setTimeout(() => {
                v(!1);
              }, 500);
          },
          et = "brand-context-menu",
          { show: ea, tarsPrice: en } = (0, C.av)({ id: et });
        (0, i.useEffect)(() => {
          let e = () => {
            o(window.scrollY > 5);
          };
          e(), document.addEventListener("scroll", S()(e, 5), { passive: !0 });
        }, []);
        let ei = () => {
          s(!1), (document.documentElement.style.overflow = "");
        };
        return (
          (0, i.useEffect)(() => {
            ei();
          }, [a.asPath]),
          (0, n.jsxs)("header", {
            className:
              "header fixed inset-x-0 top-0 z-50 flex items-center bg-white py-[12px] transition-all duration-500 before:absolute before:bottom-0 before:left-1/2 before:h-[0.5px] before:w-[calc(100%-32px)] before:-translate-x-1/2 before:bg-[#CCCCCC] lg:py-sm "
                .concat(l ? "header__fixed" : "", " ")
                .concat(t),
            children: [
              (0, n.jsx)(J.Z, {
                children: (0, n.jsxs)("div", {
                  className:
                    "header__navbar flex w-full items-center justify-between",
                  children: [
                    (0, n.jsx)("div", {
                      className: "header__logo z-110 inline-flex items-center",
                      onContextMenu: function (e) {
                        ea({ event: e });
                      },
                      children: (0, n.jsx)(U.rU, {
                        className:
                          "header__logo-link relative inline-flex select-none items-center",
                        href: "/",
                        children: (0, n.jsx)(U.Ee, {
                          className: "header__logo-image w-[104px]",
                          src: B.Z,
                          alt: "Logo",
                          priority: !0,
                          loading: "eager",
                        }),
                      }),
                    }),
                    (0, n.jsx)("nav", {
                      className:
                        "header__menu z-[12] hidden w-full lg:absolute lg:left-1/2 lg:right-auto lg:block lg:w-auto lg:-translate-x-1/2",
                      children: (0, n.jsxs)("div", {
                        className:
                          "relative flex w-full items-center justify-between gap-[4px] lg:w-auto lg:justify-start",
                        children: [
                          (0, n.jsx)("div", {
                            className:
                              "header__menu-list relative z-1 flex w-full justify-start gap-[2px] rounded-[9px] bg-[#F7F7F7] p-[4px] transition-all duration-300",
                            children: W.w$.map((e) =>
                              (0, n.jsx)(
                                "div",
                                {
                                  className:
                                    "header__menu-list-item h-[34px] cursor-pointer",
                                  children: (0, n.jsx)(U.OK, {
                                    link: e.link,
                                    isReversed: !0,
                                    className:
                                      "header__menu-list-link whitespace-nowrap "
                                        .concat(
                                          a.pathname === "".concat(e.link)
                                            ? "active"
                                            : ""
                                        )
                                        .trim(),
                                    children: e.title,
                                  }),
                                },
                                e.title
                              )
                            ),
                          }),
                          (0, n.jsxs)("div", {
                            className:
                              "header__menu-soon relative z-1 flex w-full justify-start gap-[2px] rounded-[9px] bg-[#F7F7F7] p-[4px] transition-all duration-300",
                            children: [
                              W.oI.map((e) =>
                                (0, n.jsx)(
                                  "div",
                                  {
                                    className:
                                      "header__menu-list-item h-[34px] cursor-pointer",
                                    children: (0, n.jsxs)(U.OK, {
                                      link: e.link,
                                      isReversed: !0,
                                      className:
                                        "header__menu-list-link whitespace-nowrap [&.active_svg]:rotate-180 "
                                          .concat(d === e ? "active" : "")
                                          .trim(),
                                      onMouseEnter: () => L(e),
                                      onMouseLeave: () => u(null),
                                      children: [
                                        e.title,
                                        (0, n.jsx)("svg", {
                                          width: "14",
                                          height: "14",
                                          viewBox: "0 0 14 14",
                                          fill: "none",
                                          xmlns: "http://www.w3.org/2000/svg",
                                          className:
                                            "transition-all duration-300 group-hover:rotate-180",
                                          children: (0, n.jsx)("path", {
                                            d: "M11 5.00001L7 9.00002L3 5",
                                            stroke: "#6E6E6E",
                                            strokeWidth: "1.4",
                                          }),
                                        }),
                                      ],
                                    }),
                                  },
                                  e.title
                                )
                              ),
                              (0, n.jsx)(M.M, {
                                children:
                                  d &&
                                  (0, n.jsx)(F.E.div, {
                                    className:
                                      "header__submenu-wrapper absolute left-0 top-0 z-[10] w-[270px] origin-top pt-[12px] ".concat(
                                        b ? "pointer-events-none" : ""
                                      ),
                                    initial: { opacity: 0, top: 40 },
                                    animate: { opacity: 1, top: 36 },
                                    exit: { opacity: 0, top: 40 },
                                    transition: {
                                      type: "spring",
                                      duration: 0.7,
                                    },
                                    onMouseEnter: () => u(d),
                                    onMouseLeave: () => ee(),
                                    children: (0, n.jsx)("div", {
                                      className:
                                        "header__submenu relative overflow-hidden rounded-12 border-[0.5px] border-gray-600 bg-white p-[6px] transition-all duration-700 ease-[cubic-bezier(0.34,1.56,0.64,1)]",
                                      style: {
                                        boxShadow:
                                          "0px 44px 36px -35px rgba(0, 0, 0, 0.08)",
                                      },
                                      children: (0, n.jsx)(
                                        M.M,
                                        {
                                          children: (0, n.jsx)(K.Z, {
                                            content: d.submenu,
                                          }),
                                        },
                                        d
                                      ),
                                    }),
                                  }),
                              }),
                            ],
                          }),
                        ],
                      }),
                    }),
                    (0, n.jsx)("div", {
                      className:
                        "header__burger-bg z-100 flex h-[30px] w-[30px] items-center justify-center rounded-full border-[0.5px] border-black bg-black transition-all duration-300 lg:hidden",
                      children: (0, n.jsx)("button", {
                        type: "button",
                        "aria-label": "Menu",
                        onClick: () => {
                          s(!r),
                            (document.documentElement.style.overflow = r
                              ? ""
                              : "hidden");
                        },
                        className:
                          "header__burger relative z-100 block h-[18px] w-[24px] cursor-pointer transition-all before:absolute before:left-1/2 before:top-[2px] before:h-[1.5px] before:w-[11px] before:-translate-x-1/2 before:rounded-24 before:bg-white before:duration-300 after:absolute after:bottom-[2px] after:left-1/2 after:h-[1.5px] after:w-[11px] after:-translate-x-1/2 after:rounded-24 after:bg-white after:duration-300 lg:hidden ".concat(
                            r ? "active-burger" : ""
                          ),
                        children: (0, n.jsx)("span", {
                          className:
                            "absolute left-1/2 top-1/2 h-[1.5px] w-[17px] -translate-x-1/2 -translate-y-1/2 scale-100 rounded-24 bg-white transition-all duration-300",
                        }),
                      }),
                    }),
                    (0, n.jsx)(P.Z, { activeMenu: r, items: R }),
                  ],
                }),
              }),
              (0, n.jsx)(M.M, {
                children:
                  d &&
                  (0, n.jsx)(F.E.div, {
                    className:
                      "header__submenu-wrapper fixed left-1/2 z-[10] origin-top",
                    initial: {
                      opacity: 1,
                      scale: 0.1,
                      translateX: "-50%",
                      top: "12px",
                    },
                    animate: {
                      opacity: 1,
                      scale: 1,
                      translateX: "-50%",
                      top: "8px",
                    },
                    exit: {
                      opacity: 1,
                      scale: 0.1,
                      translateX: "-50%",
                      top: "12px",
                    },
                    transition: { type: "spring", bounce: 0.2, duration: 0.8 },
                    onMouseEnter: () => u(d),
                    onMouseLeave: () => ee(),
                    children: (0, n.jsx)("div", {
                      className:
                        "header__submenu relative overflow-hidden rounded-16 border-[0.5px] border-gray-600 bg-white px-md pb-md pt-[68px] transition-all duration-700 ease-[cubic-bezier(0.34,1.56,0.64,1)]",
                      style: {
                        boxShadow: "0px 44px 36px -35px rgba(0, 0, 0, 0.08)",
                        width: "".concat(d.containerWidth, "px"),
                        height: "".concat(d.containerHeight, "px"),
                      },
                      children:
                        x === d &&
                        (0, n.jsx)(
                          M.M,
                          {
                            children: (0, n.jsx)(O, {
                              content: d.submenu,
                              isDetailed: d.isDetailed,
                            }),
                          },
                          d
                        ),
                    }),
                  }),
              }),
              (0, n.jsx)(H.Z, { menuID: et }),
            ],
          })
        );
      }
      function et() {
        return (0, n.jsxs)("div", {
          className: "py-4 text-center text-[13px] text-[#6E6E6E]",
          children: [
            "\xa9 ",
            new Date().getFullYear(),
            " Traix AI. All Rights Reserved.",
          ],
        });
      }
      ee.propTypes = { className: s().string };
      var ea = a(95986);
      function en() {
        let e = (0, N.useRouter)(),
          [t, a] = (0, i.useState)(null),
          [r, s] = (0, i.useState)(!1),
          l = (e) => {
            a(e),
              setTimeout(() => {
                s(e);
              }, 300);
          },
          o = () => {
            a(null);
          };
        return (0, n.jsx)(ea.Z, {
          className: "pt-120px lg:pt-[142px]",
          children: (0, n.jsxs)("div", {
            className:
              "header__menu-soon flex flex-col items-start justify-between gap-2 lg:flex-row lg:items-center",
            children: [
              (0, n.jsx)("h2", {
                className:
                  "font-primary text-2xl font-[650] leading-[140%] lg:text-[38px]",
                children: "AI Console",
              }),
              (0, n.jsx)("nav", {
                className: "header__menu links_list z-[12] ",
                children: (0, n.jsx)("div", {
                  className:
                    "relative ml-[7px] flex w-full items-center justify-between gap-[12px] lg:ml-0 lg:w-auto lg:justify-start",
                  children: (0, n.jsx)("div", {
                    className:
                      "header__menu-list relative z-1 flex h-full w-full justify-start rounded-[9px]  transition-all duration-300 ",
                    children: W.Ok.map((a) =>
                      (0, n.jsx)(
                        i.Fragment,
                        {
                          children: a.submenu
                            ? (0, n.jsx)("div", {
                                className:
                                  "header__menu-list-item cursor-pointer py-[4px] pr-[4px] first:pl-[4px]",
                                onMouseEnter: () => l(a),
                                onMouseLeave: () => o(),
                                children: (0, n.jsx)(U.OK, {
                                  className:
                                    "header__submenu-title relative block w-full min-w-[111px] cursor-pointer select-none whitespace-nowrap "
                                      .concat(t === a ? "active" : "", " ")
                                      .concat(
                                        a.submenu.some((t) =>
                                          e.pathname.includes(t.link)
                                        )
                                          ? "active-link-inside"
                                          : ""
                                      ),
                                  children: a.title,
                                }),
                              })
                            : (0, n.jsx)("div", {
                                className:
                                  "header__menu-list-item cursor-pointer py-[4px] pr-[4px] first:pl-[4px]",
                                children: (0, n.jsx)(U.OK, {
                                  link: a.link,
                                  className:
                                    "header__menu-list-link min-w-[111px] whitespace-nowrap "
                                      .concat(
                                        e.pathname === "".concat(a.link)
                                          ? "active"
                                          : ""
                                      )
                                      .trim(),
                                  children: a.title,
                                }),
                              }),
                        },
                        a.title
                      )
                    ),
                  }),
                }),
              }),
            ],
          }),
        });
      }
      function ei(e) {
        let { children: t } = e,
          [a, r] = (0, i.useState)("");
        return (
          (0, i.useEffect)(() => {
            console.log(document.cookie), r(document.cookie || "");
          }, []),
          (0, n.jsx)(_, {
            cookies: a,
            children: (0, n.jsxs)("div", {
              className:
                "global-wrapper relative flex min-h-screen flex-col justify-between overflow-hidden",
              children: [
                (0, n.jsx)(ee, {}),
                (0, n.jsx)(en, {}),
                (0, n.jsx)("main", { className: "relative z-5", children: t }),
                (0, n.jsx)(et, {}),
              ],
            }),
          })
        );
      }
      ei.propTypes = { children: s().node };
      var er = ei;
    },
    95986: function (e, t, a) {
      "use strict";
      var n = a(52676);
      a(75271);
      var i = a(40507),
        r = a.n(i),
        s = a(25930),
        l = a(26419);
      function o(e) {
        let {
          children: t,
          className: a = "",
          wideContainer: i = !1,
          overContainer: r,
          overContainerBottom: o,
          disabledContainer: c = !1,
          ...d
        } = e;
        return (0, n.jsxs)("section", {
          className: "".concat(a, " overflow-hidden"),
          ...d,
          children: [
            r &&
              (0, n.jsx)("div", { className: "over-container", children: r }),
            i && (0, n.jsx)(l.Z, { children: t }),
            !i && !c && (0, n.jsx)(s.Z, { children: t }),
            c &&
              (0, n.jsx)("div", {
                className: "disabled-container",
                children: t,
              }),
            o &&
              (0, n.jsx)("div", {
                className: "over-container-bottom",
                children: o,
              }),
          ],
        });
      }
      (o.propTypes = {
        children: r().node,
        overContainer: r().node,
        overContainerBottom: r().node,
        className: r().string,
        wideContainer: r().bool,
        disabledContainer: r().bool,
      }),
        (t.Z = o);
    },
    19996: function (e, t, a) {
      "use strict";
      a.d(t, {
        CM: function () {
          return o;
        },
        R9: function () {
          return u;
        },
        lB: function () {
          return i;
        },
        mn: function () {
          return s;
        },
        p6: function () {
          return c;
        },
        y1: function () {
          return d;
        },
      });
      let n = new Intl.DateTimeFormat("en-US", {
        day: "numeric",
        month: "short",
        year: "numeric",
      });
      function i(e) {
        return n.format(e);
      }
      let r = new Intl.DateTimeFormat("en-US", {
        day: "numeric",
        month: "short",
      });
      function s(e) {
        return r.format(e);
      }
      let l = new Intl.NumberFormat("en-US", {
        style: "currency",
        currency: "USD",
        minimumFractionDigits: 6,
        maximumFractionDigits: 6,
      });
      function o(e, t) {
        let a =
          ((null == t ? void 0 : t.profit) && e > 0 ? "+" : "") + l.format(e);
        return (null == t ? void 0 : t.trimEnd) ? a.replace(/\.?0+$/, "") : a;
      }
      let c = (e) =>
          new Date(e).toLocaleDateString("en-US", {
            month: "short",
            day: "numeric",
            year: "numeric",
          }),
        d = (e) => {
          let t = e.split("/").pop().trim();
          return "".concat(t.slice(0, 6), "...").concat(t.slice(-4));
        };
      function u(e) {
        if ("number" != typeof e) return "0.0000";
        let [t, a = ""] = e.toString().split(".");
        return a.length <= 3
          ? e.toString()
          : "".concat(t, ".").concat(a.padEnd(4, "0").slice(0, 4));
      }
    },
    10985: function () {},
    22647: function () {},
    81388: function () {},
  },
]);
