!(function (e) {
	function t(t) {
		for (var n, s, i = t[0], o = t[1], c = t[2], m = 0, d = []; m < i.length; m++)
			(s = i[m]), l[s] && d.push(l[s][0]), (l[s] = 0);
		for (n in o) Object.prototype.hasOwnProperty.call(o, n) && (e[n] = o[n]);
		for (u && u(t); d.length; ) d.shift()();
		return r.push.apply(r, c || []), a();
	}
	function a() {
		for (var e, t = 0; t < r.length; t++) {
			for (var a = r[t], n = !0, i = 1; i < a.length; i++) {
				var o = a[i];
				0 !== l[o] && (n = !1);
			}
			n && (r.splice(t--, 1), (e = s((s.s = a[0]))));
		}
		return e;
	}
	var n = {},
		l = { 0: 0 },
		r = [];
	function s(t) {
		if (n[t]) return n[t].exports;
		var a = (n[t] = { i: t, l: !1, exports: {} });
		return e[t].call(a.exports, a, a.exports, s), (a.l = !0), a.exports;
	}
	(s.m = e),
		(s.c = n),
		(s.d = function (e, t, a) {
			s.o(e, t) || Object.defineProperty(e, t, { enumerable: !0, get: a });
		}),
		(s.r = function (e) {
			"undefined" != typeof Symbol &&
				Symbol.toStringTag &&
				Object.defineProperty(e, Symbol.toStringTag, { value: "Module" }),
				Object.defineProperty(e, "__esModule", { value: !0 });
		}),
		(s.t = function (e, t) {
			if ((1 & t && (e = s(e)), 8 & t)) return e;
			if (4 & t && "object" == typeof e && e && e.__esModule) return e;
			var a = Object.create(null);
			if (
				(s.r(a),
				Object.defineProperty(a, "default", { enumerable: !0, value: e }),
				2 & t && "string" != typeof e)
			)
				for (var n in e)
					s.d(
						a,
						n,
						function (t) {
							return e[t];
						}.bind(null, n)
					);
			return a;
		}),
		(s.n = function (e) {
			var t =
				e && e.__esModule
					? function () {
							return e.default;
					  }
					: function () {
							return e;
					  };
			return s.d(t, "a", t), t;
		}),
		(s.o = function (e, t) {
			return Object.prototype.hasOwnProperty.call(e, t);
		}),
		(s.p = "./");
	var i = (window.webpackJsonp = window.webpackJsonp || []),
		o = i.push.bind(i);
	(i.push = t), (i = i.slice());
	for (var c = 0; c < i.length; c++) t(i[c]);
	var u = o;
	r.push([0, 1]), a();
})({
	"./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/App.css": function (
		e,
		t,
		a
	) {
		(e.exports = a("./node_modules/css-loader/dist/runtime/api.js")(!1)).push([
			e.i,
			".channels-hero>.hero-body{padding-top:0px;padding-left:0px}.nav-menu-margin{margin-bottom:30px}.menu-icon{margin-right:8px}mark{margin:0 -0.4em;padding:0.1em 0.4em;border-radius:0.8em 0.3em;background:transparent;background-image:linear-gradient(to right, rgba(255,225,0,0.1), rgba(255,225,0,0.7) 4%, rgba(255,225,0,0.3));-webkit-box-decoration-break:clone;box-decoration-break:clone}.detail-image{float:left;margin-right:20px;margin-bottom:20px}.channel-details h3{margin-top:25px}.icon-spacer{margin-right:5px}.subscribe-button{margin:45px 0}.pagination{margin-top:25px}.top-spacer{margin-top:30px !important}.top-spacer-2x{margin-top:60px !important}.bottom-spacer{margin-bottom:30px !important}.bottom-spacer-2x{margin-bottom:60px !important}footer a:hover{text-decoration:underline}.greyscale{-webkit-filter:grayscale(1);filter:grayscale(1);opacity:0.4;margin-top:30px}.list-columns{border-bottom:1px solid #ededed}.back-up{top:40px;left:40px;position:fixed !important;color:grey !important}ul.is-unstyled{list-style:none;margin:0;padding:0}ul.is-inline li{display:inline;margin-right:8px}.is-centered{display:block;text-align:center}.reverse{unicode-bidi:bidi-override;direction:rtl;text-align:left}.main-section{padding-top:10px !important}.signin-bar{margin-top:10px}.channel-list-item-subscribe{margin-top:10px}@media (max-width: 768px){.main-section{padding-top:0px !important}.navbar{background-color:#fafafa !important;box-shadow:0 1px 10px rgba(0,0,0,0.25)}.navbar-brand{padding-left:10px !important}.channel-list-item-title{font-size:1.5em}.channel-list-item-description{margin-top:10px}}.channel-detail-stats{margin-left:0px !important}\n",
			""
		]);
	},
	"./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/pages/SupportUs/styles.css":
		function (e, t, a) {
			(e.exports = a("./node_modules/css-loader/dist/runtime/api.js")(!1)).push([
				e.i,
				".support-row{margin-top:50px}\n",
				""
			]);
		},
	"./package.json": function (e) {
		e.exports = JSON.parse(
			'{"name":"guitar-channels-website","version":"2.4.6","description":"Guitar Channels Website","main":"index.js","scripts":{"start":"cross-env NODE_ENV=development webpack-dev-server --config webpack.dev.js --hot --inline","build":"cross-env NODE_ENV=production webpack --config webpack.prod.js"},"extbuild":{"defaultprofile":"","defaultenvironment":"development","defaultverbose":"no"},"author":"Guitar Channels","repository":{"type":"git","url":""},"license":"MIT","dependencies":{"@apollo/react-hooks":"3.1.3","@babel/polyfill":"7.4.4","@babel/runtime":"7.5.4","@rehooks/local-storage":"^2.1.1","@types/node":"12.6.2","@wufe/mapper":"0.5.0","animate.css":"^4.1.1","apollo-cache-inmemory":"1.6.3","apollo-cache-persist":"0.1.1","apollo-client":"2.6.4","apollo-link-batch-http":"1.2.13","apollo-link-http":"1.5.16","axios":"^0.19.0","axios-hooks":"^1.9.0","chart.js":"^2.9.4","classnames":"^2.3.1","d3-format":"^3.0.1","graphql":"14.5.8","graphql-tag":"2.12.5","html-entities":"^2.3.2","moment":"^2.24.0","prop-types":"15.7.2","react":"16.12.0","react-chartjs-2":"^2.8.0","react-dom":"16.12.0","react-ga":"^3.3.0","react-helmet":"^5.2.1","react-router-dom":"5.1.2","react-visibility-sensor":"^5.1.1","uuid":"^3.3.3"},"devDependencies":{"@types/d3-format":"^3.0.1","@types/react":"16.9.5","@types/react-chartjs-2":"^2.5.7","@types/react-dom":"16.8.4","@types/react-router":"^5.1.3","@types/webpack-env":"^1.14.1","awesome-typescript-loader":"5.2.1","babel-loader":"8.0.6","base-href-webpack-plugin":"~2.0.0","bloomer":"^0.6.5","bulma":"^0.7.5","copy-webpack-plugin":"^5.0.3","copyfiles":"^2.4.1","cross-env":"5.2.0","css-loader":"^2.1.0","exports-loader":"^0.7.0","file-loader":"^3.0.1","html-loader":"0.5.5","html-webpack-plugin":"3.2.0","image-webpack-loader":"^4.6.0","mini-css-extract-plugin":"^0.5.0","node-sass":"^4.14.0","optimize-css-assets-webpack-plugin":"^5.0.1","portfinder":"1.0.21","react-hot-loader":"4.13.0","rimraf":"2.6.3","sass-loader":"^8.0.0","style-loader":"^1.1.2","ts-loader":"^5.3.3","typescript":"3.7.2","webpack":"^4.28.3","webpack-bundle-size-analyzer":"^3.0.0","webpack-cli":"^3.1.2","webpack-dev-server":"^3.1.14"}}'
		);
	},
	"./src/App.css": function (e, t, a) {
		var n = a("./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),
			l = a(
				"./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/App.css"
			);
		"string" == typeof (l = l.__esModule ? l.default : l) && (l = [[e.i, l, ""]]);
		var r = { insert: "head", singleton: !1 },
			s = (n(e.i, l, r), l.locals ? l.locals : {});
		e.exports = s;
	},
	"./src/index.tsx": function (e, t, a) {
		"use strict";
		a.r(t);
		var n = a("./node_modules/react/index.js"),
			l = a.n(n),
			r = a("./node_modules/react-dom/index.js"),
			s = a.n(r),
			i = a("./node_modules/react-hot-loader/index.js"),
			o = a("./node_modules/react-router-dom/index.js"),
			c = a("./node_modules/axios-hooks/cjs/index.js"),
			u = a.n(c),
			m = a("./node_modules/axios/index.js"),
			d = a.n(m);
		function h() {
			return "localhost" === location.hostname || "127.0.0.1" === location.hostname
				? "http://localhost:3000"
				: "https://identity.guitar-channels.com";
		}
		var p,
			f = a("./package.json"),
			g = a("./node_modules/@apollo/react-hooks/lib/react-hooks.cjs.js"),
			b = a("./node_modules/graphql-tag/lib/index.js"),
			v = function (e, t) {
				return Object.defineProperty ? Object.defineProperty(e, "raw", { value: t }) : (e.raw = t), e;
			},
			E = Object(b.a)(
				p ||
					(p = v(
						[
							"\n\tquery Channels($sortBy: String!, $skip: Int!, $take: Int!, $language: String!) {\n\t\tchannels(sortBy: $sortBy, skip: $skip, take: $take, language: $language) {\n\t\t\tiD\n\t\t\ttitle\n\t\t\tthumbnail\n\t\t\tdescription\n\t\t\tlastUploadAt\n\t\t\tpublishedAt\n\t\t\tviews\n\t\t\tsubscribers\n\t\t\tvideoCount\n\t\t}\n\t}\n"
						],
						[
							"\n\tquery Channels($sortBy: String!, $skip: Int!, $take: Int!, $language: String!) {\n\t\tchannels(sortBy: $sortBy, skip: $skip, take: $take, language: $language) {\n\t\t\tiD\n\t\t\ttitle\n\t\t\tthumbnail\n\t\t\tdescription\n\t\t\tlastUploadAt\n\t\t\tpublishedAt\n\t\t\tviews\n\t\t\tsubscribers\n\t\t\tvideoCount\n\t\t}\n\t}\n"
						]
					))
			),
			y = a("./node_modules/moment/src/moment.js");
		var w,
			N = function () {
				return (N =
					Object.assign ||
					function (e) {
						for (var t, a = 1, n = arguments.length; a < n; a++)
							for (var l in (t = arguments[a]))
								Object.prototype.hasOwnProperty.call(t, l) && (e[l] = t[l]);
						return e;
					}).apply(this, arguments);
			};
		!(function (e) {
			(e[(e.SET_SUBSCRIPTIONS = 0)] = "SET_SUBSCRIPTIONS"),
				(e[(e.SET_LOGGED_IN = 1)] = "SET_LOGGED_IN"),
				(e[(e.SET_SIGNIN_MODAL_OPEN = 2)] = "SET_SIGNIN_MODAL_OPEN");
		})(w || (w = {}));
		var k,
			x,
			I,
			C =
				((k = { subscriptions: [], loggedIn: !1, signInModalOpen: !1 }),
				(x = function (e, t) {
					switch (t.type) {
						case w.SET_SUBSCRIPTIONS:
							return N(N({}, e), { subscriptions: t.subscriptions });
						case w.SET_LOGGED_IN:
							return N(N({}, e), { loggedIn: t.loggedIn });
						case w.SET_SIGNIN_MODAL_OPEN:
							return N(N({}, e), { signInModalOpen: t.signInModalOpen });
					}
				}),
				{
					Context: (I = Object(n.createContext)({ state: k })),
					ContextProvider: function (e) {
						var t = Object(n.useReducer)(x, k),
							a = t[0],
							r = t[1];
						return l.a.createElement(
							I.Provider,
							{ value: { state: a, dispatch: r } },
							e.children
						);
					},
					ContextConsumer: I.Consumer
				}),
			S = a("./node_modules/d3-format/src/defaultLocale.js"),
			j = function () {
				return (j =
					Object.assign ||
					function (e) {
						for (var t, a = 1, n = arguments.length; a < n; a++)
							for (var l in (t = arguments[a]))
								Object.prototype.hasOwnProperty.call(t, l) && (e[l] = t[l]);
						return e;
					}).apply(this, arguments);
			};
		function O() {
			(document.cookie = "token=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;"),
				(location.href = "/");
		}
		function D(e, t) {
			e.dispatch(j(j({}, e.state), { type: w.SET_SIGNIN_MODAL_OPEN, signInModalOpen: t }));
		}
		function P(e) {
			var t = e < 10 ? ".1s" : ".2s";
			return Object(S.a)(t)(e);
		}
		var T = function (e) {
				var t = e.channel,
					a = function (t, a, n) {
						var r = l.a.createElement(
							l.a.Fragment,
							null,
							l.a.createElement("b", null, a, ":"),
							" ",
							n
						);
						return t == e.highlightInfo ? l.a.createElement("mark", null, r) : r;
					};
				return l.a.createElement(
					"div",
					null,
					l.a.createElement("p", null, a("subscribers", "Subscribers", P(t.subscribers))),
					l.a.createElement("p", null, a("views", "Views", P(t.views))),
					l.a.createElement(
						"p",
						null,
						l.a.createElement("b", null, "Videos:"),
						" ",
						P(t.videoCount)
					),
					l.a.createElement(
						"p",
						null,
						a(
							"upload",
							"Last upload",
							t.lastUploadAt > 0 ? y.default.unix(t.lastUploadAt).fromNow() : "never"
						)
					),
					l.a.createElement(
						"p",
						null,
						a("founded", "Founded", y.default.unix(t.publishedAt).format("ll"))
					)
				);
			},
			A = a("./node_modules/classnames/index.js"),
			_ = a.n(A),
			U = a("./node_modules/react-ga/dist/react-ga.js"),
			$ = a.n(U),
			L = "en",
			G = "selectedLanguageCode",
			q = 5,
			z = "UA-15981085-17";
		var B = {
			init: function () {
				$.a.initialize(z, { debug: !1 });
			},
			sendEvent: function (e) {
				$.a.event(e);
			},
			sendPageview: function (e) {
				$.a.set({ page: e }), $.a.pageview(e);
			}
		};
		function F() {
			return (
				l.a.useEffect(function () {
					B.init();
				}, []),
				function (e, t, a) {
					B.sendEvent({ category: e, action: t, label: a });
				}
			);
		}
		var M = function () {
			return (M =
				Object.assign ||
				function (e) {
					for (var t, a = 1, n = arguments.length; a < n; a++)
						for (var l in (t = arguments[a]))
							Object.prototype.hasOwnProperty.call(t, l) && (e[l] = t[l]);
					return e;
				}).apply(this, arguments);
		};
		var R,
			H = function (e) {
				var t = Object(n.useContext)(C.Context),
					a = F(),
					r = u()(
						{
							url: h() + "/api/channel/subscribe",
							method: "POST",
							data: { channel: e.channelId }
						},
						{ manual: !0, useCache: !1 }
					),
					s = r[0],
					i = s.data,
					o = s.loading,
					c = r[1];
				Object(n.useEffect)(
					function () {
						if (i && !0 === i.success) {
							var a = t.state.subscriptions;
							a.push(e.channelId),
								t.dispatch(
									M(M({}, t.state), { type: w.SET_SUBSCRIPTIONS, subscriptions: a })
								);
						}
					},
					[i]
				);
				var m = u()(
						{
							url: h() + "/api/channel/unsubscribe",
							method: "POST",
							data: { channel: e.channelId }
						},
						{ manual: !0, useCache: !1 }
					),
					d = m[0],
					p = d.data,
					f = d.loading,
					g = m[1];
				if (
					(Object(n.useEffect)(
						function () {
							if (p && !0 === p.success) {
								var a = t.state.subscriptions.filter(function (t) {
									return t !== e.channelId;
								});
								t.dispatch(
									M(M({}, t.state), { type: w.SET_SUBSCRIPTIONS, subscriptions: a })
								);
							}
						},
						[p]
					),
					t.state.subscriptions.indexOf(e.channelId) >= 0)
				) {
					var b = _()({ button: !0, "is-light": !0, "is-loading": f });
					return l.a.createElement(
						"button",
						{
							className: b,
							disabled: f,
							onClick: function () {
								g();
							}
						},
						l.a.createElement("i", { className: "fab fa-youtube icon-spacer" }),
						" Unsubscribe"
					);
				}
				var v = _()({ button: !0, "is-danger": !0, "is-fullwidth": !0, "is-loading": o });
				return l.a.createElement(
					"button",
					{
						className: v,
						disabled: o,
						onClick: function () {
							t.state.loggedIn
								? (a("User", "Subscribe Channel", "LoggedIn"), c())
								: (a("User", "Subscribe Channel", "LoggedOut"), D(t, !0));
						}
					},
					l.a.createElement("i", { className: "fab fa-youtube icon-spacer" }),
					" Subscribe"
				);
			},
			V = function (e, t) {
				return Object.defineProperty ? Object.defineProperty(e, "raw", { value: t }) : (e.raw = t), e;
			},
			Q = Object(b.a)(
				R ||
					(R = V(
						[
							"\n\tquery Channel($id: ID!) {\n\t\tchannel(id: $id) {\n\t\t\tiD\n\t\t\ttitle\n\t\t\tthumbnail\n\t\t\tdescription\n\t\t\tlastUploadAt\n\t\t\tpublishedAt\n\t\t\tviews\n\t\t\tsubscribers\n\t\t\tvideoCount\n\t\t\tcustomLinks {\n\t\t\t\ttitle\n\t\t\t\tuRL\n\t\t\t\ticon\n\t\t\t}\n\t\t}\n\t}\n"
						],
						[
							"\n\tquery Channel($id: ID!) {\n\t\tchannel(id: $id) {\n\t\t\tiD\n\t\t\ttitle\n\t\t\tthumbnail\n\t\t\tdescription\n\t\t\tlastUploadAt\n\t\t\tpublishedAt\n\t\t\tviews\n\t\t\tsubscribers\n\t\t\tvideoCount\n\t\t\tcustomLinks {\n\t\t\t\ttitle\n\t\t\t\tuRL\n\t\t\t\ticon\n\t\t\t}\n\t\t}\n\t}\n"
						]
					))
			),
			Y = 300;
		function W(e) {
			var t = e.text;
			if (!t) return null;
			var a = t.length;
			return a > Y
				? l.a.createElement("span", null, t.substring(0, Math.min(Y, a)), " […]")
				: l.a.createElement("span", null, t);
		}
		function Z(e) {
			var t = e.channel,
				a = e.sortBy,
				n = function () {
					e.client && e.client.query({ query: Q, variables: { id: t.iD } });
				};
			return l.a.createElement(
				"div",
				{ className: "columns list-columns" },
				l.a.createElement(
					"div",
					{ className: "column is-three-quarters" },
					l.a.createElement(
						"div",
						{ className: "columns" },
						l.a.createElement(
							"div",
							{ className: "column is-narrow is-hidden-mobile" },
							l.a.createElement(
								o.Link,
								{ to: "/channel/" + t.iD, onMouseOver: n },
								l.a.createElement(
									"p",
									{ className: "image is-128x128" },
									l.a.createElement("img", { className: "is-rounded", src: t.thumbnail })
								)
							)
						),
						l.a.createElement(
							"div",
							{ className: "column" },
							l.a.createElement(
								o.Link,
								{
									className: "channel-list-item-title",
									to: "/channel/" + t.iD,
									onMouseOver: n
								},
								l.a.createElement("strong", null, t.title)
							),
							l.a.createElement(
								"div",
								{ className: "has-text-justified channel-list-item-description" },
								l.a.createElement(
									"div",
									{ className: "image is-64x64 detail-image is-hidden-tablet" },
									l.a.createElement(
										o.Link,
										{ to: "/channel/" + t.iD, onMouseOver: n },
										l.a.createElement("img", {
											src: t.thumbnail,
											className: "is-rounded"
										})
									)
								),
								l.a.createElement(W, { text: t.description })
							)
						)
					)
				),
				l.a.createElement(
					"div",
					{ className: "column is-one-quarter is-hidden-mobile" },
					l.a.createElement(T, { channel: t, highlightInfo: a }),
					l.a.createElement(
						"div",
						{ className: "channel-list-item-subscribe" },
						l.a.createElement(H, { channelId: t.iD })
					)
				)
			);
		}
		var J = function () {
				return l.a.createElement(
					"nav",
					{ className: "level" },
					l.a.createElement(
						"div",
						{ className: "level-item has-text-centered" },
						l.a.createElement(
							"div",
							{ style: { marginTop: "100px", width: "300px" } },
							l.a.createElement(
								"h4",
								{ className: "subtitle", style: { marginBottom: "10px" } },
								"Loading..."
							),
							l.a.createElement(
								"progress",
								{ className: "progress is-small is-info", max: "100" },
								"60%"
							)
						)
					)
				);
			},
			K = a("./node_modules/@rehooks/local-storage/lib/index.js"),
			X = a("./node_modules/react-helmet/lib/Helmet.js"),
			ee = a("./node_modules/uuid/index.js"),
			te = a("./node_modules/react-visibility-sensor/dist/visibility-sensor.js"),
			ae = a.n(te);
		function ne(e) {
			var t = e.isLoading,
				a = e.loadingAction,
				r = Object(n.useState)(!1),
				s = r[0],
				i = r[1];
			Object(n.useEffect)(
				function () {
					!1 === t && i(!1);
				},
				[t]
			);
			var o = _()({
				button: !0,
				"is-medium": !0,
				"is-rounded": !0,
				"is-loading": t,
				"animate__animated animate__rubberBand": s
			});
			return l.a.createElement(
				ae.a,
				{
					onChange: function (t) {
						t &&
							!e.isLoading &&
							(setTimeout(function () {
								e.loadingAction();
							}, 700),
							i(!0));
					}
				},
				l.a.createElement(
					"button",
					{ className: o, disabled: t, onClick: a },
					l.a.createElement("i", { className: "fas fa-arrow-circle-down icon-spacer" }),
					" Load more channels"
				)
			);
		}
		var le = function () {
				for (var e = 0, t = 0, a = arguments.length; t < a; t++) e += arguments[t].length;
				var n = Array(e),
					l = 0;
				for (t = 0; t < a; t++)
					for (var r = arguments[t], s = 0, i = r.length; s < i; s++, l++) n[l] = r[s];
				return n;
			},
			re = function (e) {
				return "string" != typeof e ? "" : e.charAt(0).toUpperCase() + e.slice(1);
			},
			se = 8;
		function ie(e) {
			var t = e.match.params.sortBy || "upload",
				a = re(t),
				r = Object(n.useState)(!1),
				s = r[0],
				i = r[1],
				o = Object(K.useLocalStorage)(G)[0],
				c = Object(g.useQuery)(E, {
					fetchPolicy: "network-only",
					variables: { sortBy: a, skip: 0, take: se, language: o || L }
				}),
				u = c.loading,
				m = (c.error, c.data),
				d = c.fetchMore,
				h = c.client;
			return u || !m
				? l.a.createElement(J, null)
				: l.a.createElement(
						l.a.Fragment,
						null,
						l.a.createElement(
							X.Helmet,
							null,
							l.a.createElement("title", null, "Guitar-Channels")
						),
						l.a.createElement(
							"section",
							{ className: "hero channels-hero" },
							l.a.createElement(
								"div",
								{ className: "hero-body" },
								l.a.createElement("h1", { className: "title" }, "Guitar Channels"),
								l.a.createElement(
									"h2",
									{ className: "subtitle" },
									"sorted by ",
									l.a.createElement("strong", null, t)
								)
							)
						),
						m.channels.map(function (e) {
							return l.a.createElement(Z, {
								key: Object(ee.v4)(),
								channel: e,
								client: h,
								sortBy: t
							});
						}),
						l.a.createElement(
							"nav",
							{ className: "level", style: { marginTop: "25px" } },
							l.a.createElement(
								"div",
								{ className: "level-item has-text-centered" },
								l.a.createElement(ne, {
									isLoading: s,
									loadingAction: function () {
										i(!0),
											d({
												variables: { skip: m.channels.length },
												updateQuery: function (e, t) {
													var a = t.fetchMoreResult;
													return a
														? (i(!1),
														  Object.assign({}, e, {
																channels: le(e.channels, a.channels)
														  }))
														: e;
												}
											});
									}
								})
							)
						)
				  );
		}
		var oe,
			ce,
			ue = function (e, t) {
				return Object.defineProperty ? Object.defineProperty(e, "raw", { value: t }) : (e.raw = t), e;
			},
			me = Object(b.a)(
				oe ||
					(oe = ue(
						[
							"\n\tquery Videos($channelId: ID!, $skip: Int!, $take: Int!) {\n\t\tvideos(channelId: $channelId, skip: $skip, take: $take) {\n\t\t\tiD\n\t\t\ttitle\n\t\t\tdescription\n\t\t\tviews\n\t\t\tpublishedAt\n\t\t}\n\t}\n"
						],
						[
							"\n\tquery Videos($channelId: ID!, $skip: Int!, $take: Int!) {\n\t\tvideos(channelId: $channelId, skip: $skip, take: $take) {\n\t\t\tiD\n\t\t\ttitle\n\t\t\tdescription\n\t\t\tviews\n\t\t\tpublishedAt\n\t\t}\n\t}\n"
						]
					))
			),
			de = function (e, t) {
				return Object.defineProperty ? Object.defineProperty(e, "raw", { value: t }) : (e.raw = t), e;
			},
			he = Object(b.a)(
				ce ||
					(ce = de(
						[
							"\n\tquery VideoCount($channelId: ID!) {\n\t\tvideoCount(channelId: $channelId)\n\t}\n"
						],
						[
							"\n\tquery VideoCount($channelId: ID!) {\n\t\tvideoCount(channelId: $channelId)\n\t}\n"
						]
					))
			);
		var pe = function (e) {
				var t = parseInt(e.currentPage),
					a = Object(g.useQuery)(he, {
						fetchPolicy: "network-only",
						variables: { channelId: e.channelId }
					}),
					n = a.loading,
					r = (a.error, a.data);
				if (n || !r) return null;
				var s = l.a.createElement(
					"button",
					{ className: "pagination-previous", disabled: !0 },
					"Previous"
				);
				if (t > 0) {
					var i = t - 1,
						c = "/channel/" + e.channelId + "/" + i;
					s = l.a.createElement(o.Link, { to: c, className: "pagination-previous" }, "Previous");
				}
				var u = l.a.createElement("button", { className: "pagination-next", disabled: !0 }, "Next");
				if (t < r.videoCount) {
					var m = t + 1,
						d = "/channel/" + e.channelId + "/" + m;
					u = l.a.createElement(o.Link, { to: d, className: "pagination-next" }, "Next");
				}
				return l.a.createElement(
					"nav",
					{ className: "pagination is-small", role: "navigation", "aria-label": "pagination" },
					s,
					u
				);
			},
			fe = a("./node_modules/html-entities/lib/index.js");
		var ge = function (e) {
			var t = parseInt(e.currentPage) || 0,
				a = Object(g.useQuery)(me, {
					fetchPolicy: "network-only",
					variables: { channelId: e.channelId, skip: t * q, take: q }
				}),
				n = a.loading,
				r = (a.error, a.data);
			return n || !r
				? l.a.createElement(J, null)
				: l.a.createElement(
						l.a.Fragment,
						null,
						r.videos.map(function (e) {
							return l.a.createElement(
								"div",
								{ key: e.iD, className: "media" },
								l.a.createElement(
									"figure",
									{ className: "media-left" },
									l.a.createElement(
										"div",
										{ className: "image is-128x128" },
										l.a.createElement("img", {
											src: "https://img.youtube.com/vi/" + e.iD + "/default.jpg"
										})
									)
								),
								l.a.createElement(
									"div",
									{ className: "media-content" },
									l.a.createElement(
										"div",
										{ className: "content" },
										l.a.createElement(
											"a",
											{
												href: "https://www.youtube.com/watch?v=" + e.iD,
												target: "_blank"
											},
											l.a.createElement("strong", null, Object(fe.decode)(e.title))
										),
										l.a.createElement("br", null),
										l.a.createElement(
											"small",
											null,
											l.a.createElement(
												"ul",
												{ className: "is-unstyled is-inline channel-detail-stats" },
												l.a.createElement(
													"li",
													null,
													l.a.createElement(
														"em",
														null,
														y.default.unix(e.publishedAt).format("ll")
													)
												),
												l.a.createElement("li", null, "·"),
												l.a.createElement("li", null, P(e.views), " views")
											)
										),
										l.a.createElement(
											"p",
											{ className: "has-text-justified is-hidden-mobile" },
											l.a.createElement(W, { text: e.description })
										)
									)
								)
							);
						}),
						l.a.createElement(pe, { channelId: e.channelId, currentPage: t.toString() })
				  );
		};
		var be = function (e) {
			return e.tags
				? l.a.createElement(
						l.a.Fragment,
						null,
						l.a.createElement(
							"h3",
							null,
							l.a.createElement("strong", null, "Popular video tags:")
						),
						l.a.createElement(
							"div",
							{ className: "tags" },
							e.tags.map(function (e) {
								return l.a.createElement("span", { className: "tag is-light" }, e);
							})
						)
				  )
				: null;
		};
		var ve,
			Ee,
			ye = function (e) {
				return l.a.createElement(
					"section",
					{ className: "hero channels-hero" },
					l.a.createElement(
						"div",
						{ className: "hero-body" },
						l.a.createElement("h1", { className: "title" }, e.title),
						l.a.createElement("h2", { className: "subtitle" }, e.subtitle)
					)
				);
			},
			we = function (e, t) {
				return Object.defineProperty ? Object.defineProperty(e, "raw", { value: t }) : (e.raw = t), e;
			},
			Ne = Object(b.a)(
				ve ||
					(ve = we(
						[
							"\n\tquery FlagExists($channelId: String!) {\n\t\tflagExists(channelId: $channelId)\n\t}\n"
						],
						[
							"\n\tquery FlagExists($channelId: String!) {\n\t\tflagExists(channelId: $channelId)\n\t}\n"
						]
					))
			),
			ke = Object(b.a)(
				Ee ||
					(Ee = we(
						[
							"\n\tmutation FlagChannel($channelId: String!) {\n\t\tflagChannel(channelId: $channelId)\n\t}\n"
						],
						[
							"\n\tmutation FlagChannel($channelId: String!) {\n\t\tflagChannel(channelId: $channelId)\n\t}\n"
						]
					))
			),
			xe = function (e, t, a, n) {
				return new (a || (a = Promise))(function (l, r) {
					function s(e) {
						try {
							o(n.next(e));
						} catch (e) {
							r(e);
						}
					}
					function i(e) {
						try {
							o(n.throw(e));
						} catch (e) {
							r(e);
						}
					}
					function o(e) {
						var t;
						e.done
							? l(e.value)
							: ((t = e.value),
							  t instanceof a
									? t
									: new a(function (e) {
											e(t);
									  })).then(s, i);
					}
					o((n = n.apply(e, t || [])).next());
				});
			},
			Ie = function (e, t) {
				var a,
					n,
					l,
					r,
					s = {
						label: 0,
						sent: function () {
							if (1 & l[0]) throw l[1];
							return l[1];
						},
						trys: [],
						ops: []
					};
				return (
					(r = { next: i(0), throw: i(1), return: i(2) }),
					"function" == typeof Symbol &&
						(r[Symbol.iterator] = function () {
							return this;
						}),
					r
				);
				function i(r) {
					return function (i) {
						return (function (r) {
							if (a) throw new TypeError("Generator is already executing.");
							for (; s; )
								try {
									if (
										((a = 1),
										n &&
											(l =
												2 & r[0]
													? n.return
													: r[0]
													? n.throw || ((l = n.return) && l.call(n), 0)
													: n.next) &&
											!(l = l.call(n, r[1])).done)
									)
										return l;
									switch (((n = 0), l && (r = [2 & r[0], l.value]), r[0])) {
										case 0:
										case 1:
											l = r;
											break;
										case 4:
											return s.label++, { value: r[1], done: !1 };
										case 5:
											s.label++, (n = r[1]), (r = [0]);
											continue;
										case 7:
											(r = s.ops.pop()), s.trys.pop();
											continue;
										default:
											if (
												!(l = (l = s.trys).length > 0 && l[l.length - 1]) &&
												(6 === r[0] || 2 === r[0])
											) {
												s = 0;
												continue;
											}
											if (3 === r[0] && (!l || (r[1] > l[0] && r[1] < l[3]))) {
												s.label = r[1];
												break;
											}
											if (6 === r[0] && s.label < l[1]) {
												(s.label = l[1]), (l = r);
												break;
											}
											if (l && s.label < l[2]) {
												(s.label = l[2]), s.ops.push(r);
												break;
											}
											l[2] && s.ops.pop(), s.trys.pop();
											continue;
									}
									r = t.call(e, s);
								} catch (e) {
									(r = [6, e]), (n = 0);
								} finally {
									a = l = 0;
								}
							if (5 & r[0]) throw r[1];
							return { value: r[0] ? r[1] : void 0, done: !0 };
						})([r, i]);
					};
				}
			};
		var Ce,
			Se = function (e) {
				var t = this,
					a = Object(n.useContext)(C.Context),
					r = F(),
					s = Object(g.useQuery)(Ne, {
						fetchPolicy: "cache-and-network",
						variables: { channelId: e.channelId },
						skip: !a.state.loggedIn
					}),
					i = s.data,
					o = s.refetch,
					c = Object(g.useMutation)(ke)[0];
				return i && i.flagExists
					? l.a.createElement(
							"div",
							null,
							l.a.createElement("i", { className: "fas fa-check has-text-success" }),
							" Flagged as not guitar-related"
					  )
					: l.a.createElement(
							"a",
							{
								onClick: function () {
									return xe(t, void 0, void 0, function () {
										return Ie(this, function (t) {
											switch (t.label) {
												case 0:
													return a.state.loggedIn
														? [4, c({ variables: { channelId: e.channelId } })]
														: [3, 3];
												case 1:
													return (
														t.sent(),
														r("User", "Flag channel", "LoggedIn"),
														[4, o()]
													);
												case 2:
													return t.sent(), [3, 4];
												case 3:
													D(a, !0),
														r("User", "Flag channel", "LoggedOut"),
														(t.label = 4);
												case 4:
													return [2];
											}
										});
									});
								}
							},
							l.a.createElement("i", { className: "fas fa-flag" }),
							" Flag as not guitar related"
					  );
			},
			je = function (e, t) {
				return Object.defineProperty ? Object.defineProperty(e, "raw", { value: t }) : (e.raw = t), e;
			},
			Oe = Object(b.a)(
				Ce ||
					(Ce = je(
						[
							"\n\tquery SubscriberHistory($channelId: String!, $days: Int) {\n\t\tsubscriberHistory(channelId: $channelId, days: $days) {\n\t\t\tdate\n\t\t\tsubscribers\n\t\t}\n\t}\n"
						],
						[
							"\n\tquery SubscriberHistory($channelId: String!, $days: Int) {\n\t\tsubscriberHistory(channelId: $channelId, days: $days) {\n\t\t\tdate\n\t\t\tsubscribers\n\t\t}\n\t}\n"
						]
					))
			),
			De = a("./node_modules/react-chartjs-2/es/index.js");
		var Pe = function (e) {
			var t = {
					labels: e.labels,
					datasets: [
						{
							backgroundColor: "rgba(151,187,205,0.2)",
							borderColor: "rgba(151,187,205,1)",
							borderWidth: 3,
							pointBackgroundColor: "rgba(151,187,205,1)",
							pointBorderColor: "rgba(151,187,205,1)",
							pointHighlightFill: "#fff",
							pointHighlightStroke: "rgba(151,187,205,1)",
							pointBorderWidth: 2,
							data: e.values
						}
					]
				},
				a = Math.min.apply(Math, e.values),
				n = Math.max.apply(Math, e.values),
				r = Math.ceil(Math.abs((n - a) / 4)),
				s = 100,
				i = (a + n) / 2;
			return (
				(s = i > 1e3 ? 100 : i > 1e5 ? 1e4 : 5),
				l.a.createElement(De.a, {
					data: t,
					options: {
						scales: {
							xAxes: [{ display: !1 }],
							yAxes: [{ ticks: { beginAtZero: !1, min: a - s, max: n + s, stepSize: r } }]
						}
					},
					legend: { display: !1 },
					height: 130
				})
			);
		};
		var Te,
			Ae = function (e) {
				var t,
					a,
					n = Object(g.useQuery)(Oe, {
						fetchPolicy: "cache-and-network",
						variables: { channelId: e.channelId, days: e.days }
					}),
					r = n.loading,
					s = (n.error, n.data);
				return r || !s
					? null
					: l.a.createElement(
							"div",
							{ className: "bottom-spacer" },
							l.a.createElement(
								"p",
								{ style: { marginBottom: "10px" } },
								l.a.createElement("strong", null, "Subscribers in last 7 days:")
							),
							l.a.createElement(Pe, {
								values:
									null === (t = s) || void 0 === t
										? void 0
										: t.subscriberHistory.map(function (e) {
												return e.subscribers;
										  }),
								labels:
									null === (a = s) || void 0 === a
										? void 0
										: a.subscriberHistory.map(function (e) {
												var t = e.date + "";
												return new Date(
													parseInt(t.substr(0, 4)),
													parseInt(t.substr(4, 2)) - 1,
													parseInt(t.substr(6, 2))
												).toLocaleDateString();
										  })
							})
					  );
			},
			_e = function (e, t) {
				return Object.defineProperty ? Object.defineProperty(e, "raw", { value: t }) : (e.raw = t), e;
			},
			Ue = Object(b.a)(
				Te ||
					(Te = _e(
						[
							"\n\tquery PublishSchedulePrediction($channelId: ID!, $filterBelowAverage: Boolean, $minGradient: Float) {\n\t\tchannelPublishPrediction(channelId: $channelId, filterBelowAverage: $filterBelowAverage, minGradient: $minGradient) {\n\t\t\thourOfTheDay, \n\t\t\tdayOfTheWeek, \n\t\t\tpublishedVideos, \n\t\t\tdeviationFromAverage\n\t\t}\n\t}\n"
						],
						[
							"\n\tquery PublishSchedulePrediction($channelId: ID!, $filterBelowAverage: Boolean, $minGradient: Float) {\n\t\tchannelPublishPrediction(channelId: $channelId, filterBelowAverage: $filterBelowAverage, minGradient: $minGradient) {\n\t\t\thourOfTheDay, \n\t\t\tdayOfTheWeek, \n\t\t\tpublishedVideos, \n\t\t\tdeviationFromAverage\n\t\t}\n\t}\n"
						]
					))
			),
			$e = 0.5;
		var Le = function (e) {
			var t = Object(g.useQuery)(Ue, {
					fetchPolicy: "cache-and-network",
					variables: { channelId: e.channelId, filterBelowAverage: !0, minGradient: $e }
				}),
				a = t.loading,
				n = t.error,
				r = t.data;
			if (a || n || !r.channelPublishPrediction || 0 === r.channelPublishPrediction.length) return null;
			var s = (function (e) {
				var t = Object(y.default)().utc();
				t.day(e.dayOfTheWeek), t.hour(e.hourOfTheDay), t.minute(0), t.second(0);
				var a,
					n,
					l,
					r = t.local();
				return {
					weekday:
						((n = r.weekday()),
						(l = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]),
						l[n % (l.length - 1)]),
					timeOfDay:
						((a = r.hour()),
						0 == a || a < 6
							? "Night"
							: a >= 6 && a < 12
							? "Morning"
							: a >= 12 && a < 13
							? "Noon"
							: a >= 13 && a < 18
							? "Afternoon"
							: "Evening"),
					hourOfTheDay: r.format("h a")
				};
			})(r.channelPublishPrediction[0]);
			return l.a.createElement(
				"div",
				{ className: "top-spacer" },
				l.a.createElement("i", { className: "far fa-calendar-alt icon-spacer text-success" }),
				" ",
				l.a.createElement("b", null, "Usually uploads:"),
				" ",
				l.a.createElement("br", null),
				s.weekday,
				" ",
				s.timeOfDay.toLowerCase(),
				", around ",
				s.hourOfTheDay
			);
		};
		var Ge,
			qe = function (e) {
				var t = Object(g.useQuery)(Q, {
						fetchPolicy: "cache-and-network",
						variables: { id: e.match.params.id }
					}),
					a = t.loading,
					n = t.error,
					r = t.data,
					s = F();
				if ((n && console.error(n), a && !r)) return l.a.createElement(J, null);
				var i = r.channel;
				return l.a.createElement(
					l.a.Fragment,
					null,
					l.a.createElement(
						X.Helmet,
						null,
						l.a.createElement("title", null, i.title, " | Guitar Channels")
					),
					l.a.createElement(ye, {
						title: i.title,
						subtitle: P(i.videoCount) + " videos · " + P(i.subscribers) + " subscribers"
					}),
					l.a.createElement(
						"div",
						{ className: "columns" },
						l.a.createElement(
							"div",
							{ className: "column is-three-quarters" },
							l.a.createElement(
								"div",
								{ style: { marginBottom: "25px" } },
								l.a.createElement(
									"p",
									{ className: "image is-128x128 detail-image" },
									l.a.createElement("img", { src: i.thumbnail, className: "is-rounded" })
								),
								l.a.createElement("p", { className: "has-text-justified" }, i.description)
							),
							l.a.createElement("hr", null),
							l.a.createElement(ge, {
								channelId: i.iD,
								currentPage: e.match.params.currentPage
							})
						),
						l.a.createElement(
							"div",
							{ className: "column is-one-quarter" },
							l.a.createElement(Ae, { channelId: i.iD }),
							l.a.createElement(T, { channel: i }),
							l.a.createElement(Le, { channelId: i.iD }),
							l.a.createElement(
								"div",
								{ className: "subscribe-button" },
								l.a.createElement(H, { channelId: i.iD })
							),
							l.a.createElement(
								"p",
								null,
								l.a.createElement(
									"a",
									{
										href: "https://youtube.com/channel/" + i.iD,
										target: "_blank",
										onClick: function () {
											s("User", "Open YouTube channel", "Channel Detail " + i.iD);
										}
									},
									l.a.createElement("i", { className: "fas fa-external-link-alt" }),
									" Open YouTube channel"
								)
							),
							l.a.createElement("p", null, l.a.createElement(Se, { channelId: i.iD })),
							l.a.createElement(be, { tags: i.keywords })
						)
					)
				);
			},
			ze = function (e, t) {
				return Object.defineProperty ? Object.defineProperty(e, "raw", { value: t }) : (e.raw = t), e;
			},
			Be = Object(b.a)(
				Ge ||
					(Ge = ze(
						[
							"\n\tquery SearchResults($query: String!) {\n\t\tsearchResults(query: $query) {\n\t\t\tchannels {\n\t\t\t\tiD\n\t\t\t\ttitle\n\t\t\t\tthumbnail\n\t\t\t\tdescription\n\t\t\t\tlastUploadAt\n\t\t\t\tpublishedAt\n\t\t\t\tviews\n\t\t\t\tsubscribers\n\t\t\t\tvideoCount\n\t\t\t}\n\t\t\tvideos {\n\t\t\t\tiD\n\t\t\t\ttitle\n\t\t\t\tdescription\n\t\t\t\tviews\n\t\t\t\tpublishedAt\n\t\t\t\tchannel {\n\t\t\t\t\tiD\n\t\t\t\t\ttitle\n\t\t\t\t}\n\t\t\t}\n\t\t}\n\t}\n"
						],
						[
							"\n\tquery SearchResults($query: String!) {\n\t\tsearchResults(query: $query) {\n\t\t\tchannels {\n\t\t\t\tiD\n\t\t\t\ttitle\n\t\t\t\tthumbnail\n\t\t\t\tdescription\n\t\t\t\tlastUploadAt\n\t\t\t\tpublishedAt\n\t\t\t\tviews\n\t\t\t\tsubscribers\n\t\t\t\tvideoCount\n\t\t\t}\n\t\t\tvideos {\n\t\t\t\tiD\n\t\t\t\ttitle\n\t\t\t\tdescription\n\t\t\t\tviews\n\t\t\t\tpublishedAt\n\t\t\t\tchannel {\n\t\t\t\t\tiD\n\t\t\t\t\ttitle\n\t\t\t\t}\n\t\t\t}\n\t\t}\n\t}\n"
						]
					))
			);
		var Fe,
			Me = function (e) {
				var t = e.video;
				return l.a.createElement(
					"div",
					{ className: "columns list-columns" },
					l.a.createElement(
						"div",
						{ className: "column is-narrow" },
						l.a.createElement(
							"p",
							{ className: "image is-128x128" },
							l.a.createElement("img", {
								src: "https://img.youtube.com/vi/" + t.iD + "/default.jpg"
							})
						)
					),
					l.a.createElement(
						"div",
						{ className: "column" },
						l.a.createElement(
							"p",
							null,
							l.a.createElement(
								"a",
								{ href: "https://www.youtube.com/watch?v=" + t.iD, target: "_blank" },
								l.a.createElement("strong", null, Object(fe.decode)(t.title))
							),
							l.a.createElement(
								"p",
								{ className: "has-text-justified" },
								l.a.createElement(W, { text: t.description })
							)
						)
					),
					l.a.createElement(
						"div",
						{ className: "column is-3" },
						l.a.createElement(
							"p",
							null,
							l.a.createElement("b", null, "Channel:"),
							" ",
							l.a.createElement(o.Link, { to: "/channel/" + t.channel.iD }, t.channel.title)
						),
						l.a.createElement("p", null, l.a.createElement("b", null, "Views:"), " ", P(t.views)),
						l.a.createElement(
							"p",
							null,
							l.a.createElement("b", null, "Uploaded:"),
							" ",
							y.default.unix(t.publishedAt).format("ll")
						),
						l.a.createElement(
							"div",
							{ style: { marginTop: "10px" } },
							l.a.createElement(
								"a",
								{
									href: "https://www.youtube.com/watch?v=" + t.iD,
									className: "button is-light",
									target: "_blank"
								},
								l.a.createElement("i", { className: "fab fa-youtube icon-spacer" }),
								" Watch video"
							)
						)
					)
				);
			};
		!(function (e) {
			(e[(e.Videos = 0)] = "Videos"), (e[(e.Channels = 1)] = "Channels");
		})(Fe || (Fe = {}));
		var Re = Fe;
		var He = function (e) {
			var t = e.visibleTab,
				a = e.setVisibleTab;
			return l.a.createElement(
				"div",
				{ className: "tabs is-centered is-boxed" },
				l.a.createElement(
					"ul",
					null,
					l.a.createElement(
						"li",
						{ className: t == Re.Videos ? "is-active" : "" },
						l.a.createElement(
							"a",
							{
								onClick: function () {
									a(Re.Videos);
								}
							},
							l.a.createElement(
								"span",
								{ className: "icon is-small" },
								l.a.createElement("i", { className: "fas fa-video" })
							),
							l.a.createElement("span", null, "Videos")
						)
					),
					l.a.createElement(
						"li",
						{ className: t == Re.Channels ? "is-active" : "" },
						l.a.createElement(
							"a",
							{
								onClick: function () {
									a(Re.Channels);
								}
							},
							l.a.createElement(
								"span",
								{ className: "icon is-small" },
								l.a.createElement("i", { className: "fas fa-user-friends" })
							),
							l.a.createElement("span", null, "Channels")
						)
					)
				)
			);
		};
		var Ve,
			Qe,
			Ye = function (e) {
				var t = Object(n.useState)(Re.Videos),
					a = t[0],
					r = t[1],
					s = Object(g.useQuery)(Be, {
						fetchPolicy: "network-only",
						variables: { query: encodeURIComponent(e.match.params.query) }
					}),
					i = s.loading,
					o = (s.error, s.data);
				if (i || !o) return l.a.createElement(J, null);
				var c = null;
				return (
					(c =
						a == Re.Videos
							? o.searchResults.videos.map(function (e) {
									return l.a.createElement(Me, { key: e.iD, video: e });
							  })
							: o.searchResults.channels.map(function (e) {
									return l.a.createElement(Z, { key: e.iD, channel: e });
							  })),
					l.a.createElement(
						l.a.Fragment,
						null,
						l.a.createElement(
							X.Helmet,
							null,
							l.a.createElement("title", null, "Contributions | Guitar Channels")
						),
						l.a.createElement(ye, {
							title: "Search results",
							subtitle: 'for "' + e.match.params.query + '"'
						}),
						l.a.createElement(He, { visibleTab: a, setVisibleTab: r }),
						c
					)
				);
			},
			We = function (e, t) {
				return Object.defineProperty ? Object.defineProperty(e, "raw", { value: t }) : (e.raw = t), e;
			},
			Ze = Object(b.a)(
				Ve ||
					(Ve = We(
						[
							"\n\tquery Topics($language: String!) {\n\t\ttopicsOverview(language: $language) {\n\t\t\ttopic {\n\t\t\t\tiD\n\t\t\t\ttitle\n\t\t\t\tdescription\n\t\t\t}\n\t\t\tlatestChannelTitle\n\t\t\tlatestVideoID\n\t\t}\n\t}\n"
						],
						[
							"\n\tquery Topics($language: String!) {\n\t\ttopicsOverview(language: $language) {\n\t\t\ttopic {\n\t\t\t\tiD\n\t\t\t\ttitle\n\t\t\t\tdescription\n\t\t\t}\n\t\t\tlatestChannelTitle\n\t\t\tlatestVideoID\n\t\t}\n\t}\n"
						]
					))
			),
			Je = function (e, t) {
				return Object.defineProperty ? Object.defineProperty(e, "raw", { value: t }) : (e.raw = t), e;
			},
			Ke = Object(b.a)(
				Qe ||
					(Qe = Je(
						[
							"\n\tquery TopicDetail($topicId: String!) {\n\t\ttopicDetail(topicId: $topicId) {\n\t\t\ttopic {\n\t\t\t\tiD\n\t\t\t\ttitle\n\t\t\t\tdescription\n\t\t\t}\n\t\t\tchannels {\n\t\t\t\tiD\n\t\t\t\ttitle\n\t\t\t\tthumbnail\n\t\t\t\tdescription\n\t\t\t\tlastUploadAt\n\t\t\t\tpublishedAt\n\t\t\t\tviews\n\t\t\t\tsubscribers\n\t\t\t\tvideoCount\n\t\t\t}\n\t\t\tvideos {\n\t\t\t\tiD\n\t\t\t\ttitle\n\t\t\t\tdescription\n\t\t\t\tviews\n\t\t\t\tpublishedAt\n\t\t\t\tchannel {\n\t\t\t\t\ttitle\n\t\t\t\t}\n\t\t\t}\n\t\t}\n\t}\n"
						],
						[
							"\n\tquery TopicDetail($topicId: String!) {\n\t\ttopicDetail(topicId: $topicId) {\n\t\t\ttopic {\n\t\t\t\tiD\n\t\t\t\ttitle\n\t\t\t\tdescription\n\t\t\t}\n\t\t\tchannels {\n\t\t\t\tiD\n\t\t\t\ttitle\n\t\t\t\tthumbnail\n\t\t\t\tdescription\n\t\t\t\tlastUploadAt\n\t\t\t\tpublishedAt\n\t\t\t\tviews\n\t\t\t\tsubscribers\n\t\t\t\tvideoCount\n\t\t\t}\n\t\t\tvideos {\n\t\t\t\tiD\n\t\t\t\ttitle\n\t\t\t\tdescription\n\t\t\t\tviews\n\t\t\t\tpublishedAt\n\t\t\t\tchannel {\n\t\t\t\t\ttitle\n\t\t\t\t}\n\t\t\t}\n\t\t}\n\t}\n"
						]
					))
			);
		var Xe = function (e) {
			var t = Object(K.useLocalStorage)(G)[0],
				a = Object(g.useQuery)(Ze, {
					fetchPolicy: "cache-and-network",
					variables: { language: t || L }
				}),
				n = a.loading,
				r = (a.error, a.data),
				s = a.client;
			return n || !r
				? l.a.createElement(J, null)
				: l.a.createElement(
						l.a.Fragment,
						null,
						l.a.createElement(
							X.Helmet,
							null,
							l.a.createElement("title", null, "Topics | Guitar Channels")
						),
						l.a.createElement(
							"section",
							{ className: "hero channels-hero" },
							l.a.createElement(
								"div",
								{ className: "hero-body" },
								l.a.createElement(
									"h1",
									{ className: "title" },
									"Topics ",
									l.a.createElement("span", { className: "tag is-success" }, "beta")
								),
								l.a.createElement(
									"h2",
									{ className: "subtitle" },
									"Explore guitar channels by their topics."
								)
							)
						),
						l.a.createElement(
							"p",
							null,
							"Channels are automatically grouped into topics by their most popular video tags. Those are the tags that the content creators tag their videos with upon uploading!"
						),
						l.a.createElement(
							"p",
							{ style: { marginBottom: "50px" } },
							"If you wish to suggest an additional topic to list here, please send an email."
						),
						(function e(t, a) {
							return t.length ? [t.slice(0, a)].concat(e(t.slice(a), a)) : [];
						})(r.topicsOverview, 2).map(function (e) {
							var t = e.map(function (e) {
								var t = e.topic;
								return l.a.createElement(
									"div",
									{ className: "column", key: t.iD },
									l.a.createElement(
										"div",
										{
											className: "card",
											onMouseOver: function () {
												s.query({ query: Ke, variables: { topicId: t.iD } });
											}
										},
										l.a.createElement(
											"div",
											{ className: "card-image" },
											l.a.createElement(
												o.Link,
												{ to: "/topics/" + t.iD, className: "image" },
												l.a.createElement("img", {
													src:
														"https://img.youtube.com/vi/" +
														e.latestVideoID +
														"/maxresdefault.jpg",
													alt: t.title
												})
											)
										),
										l.a.createElement(
											"div",
											{ className: "card-content" },
											l.a.createElement(
												"div",
												{ className: "content" },
												l.a.createElement("p", { className: "title is-4" }, t.title),
												l.a.createElement(
													"p",
													{ className: "subtitle is-6" },
													"(Photo by: ",
													e.latestChannelTitle,
													")"
												)
											),
											l.a.createElement(
												"div",
												{ className: "content has-text-justified\t" },
												t.description
											)
										),
										l.a.createElement(
											"footer",
											{ className: "card-footer" },
											l.a.createElement(
												o.Link,
												{ to: "/topics/" + t.iD, className: "card-footer-item" },
												l.a.createElement("i", {
													className: "far fa-list-alt",
													style: { marginRight: "5px" }
												}),
												" View Topic"
											)
										)
									)
								);
							});
							return l.a.createElement(
								"div",
								{ className: "columns", key: Object(ee.v4)() },
								t
							);
						})
				  );
		};
		var et = function (e) {
			var t = e.match.params.id,
				a = Object(n.useState)(Re.Channels),
				r = a[0],
				s =
					(a[1],
					Object(g.useQuery)(Ke, { fetchPolicy: "cache-and-network", variables: { topicId: t } })),
				i = s.loading,
				c = (s.error, s.data);
			if (i || !c) return l.a.createElement(J, null);
			var u = c.topicDetail,
				m = u.topic,
				d = u.videos,
				h = u.channels,
				p = null;
			return (
				(p =
					r == Re.Videos
						? d.map(function (e) {
								return l.a.createElement(Me, { key: e.iD, video: e });
						  })
						: h.map(function (e) {
								return l.a.createElement(Z, { key: e.iD, channel: e });
						  })),
				l.a.createElement(
					l.a.Fragment,
					null,
					l.a.createElement(
						X.Helmet,
						null,
						l.a.createElement("title", null, "Topic: ", m.title, " | Guitar Channels")
					),
					l.a.createElement(
						"nav",
						{ className: "breadcrumb", "aria-label": "breadcrumbs" },
						l.a.createElement(
							"ul",
							null,
							l.a.createElement(
								"li",
								null,
								l.a.createElement(o.Link, { to: "/topics" }, "Topics")
							),
							l.a.createElement(
								"li",
								{ className: "is-active" },
								l.a.createElement("a", { href: "#" }, m.title)
							)
						)
					),
					l.a.createElement(ye, { title: m.title, subtitle: m.description }),
					p
				)
			);
		};
		var tt = function (e) {
			return l.a.createElement(
				l.a.Fragment,
				null,
				l.a.createElement(
					X.Helmet,
					null,
					l.a.createElement("title", null, "Contributions | Guitar Channels")
				),
				l.a.createElement(ye, { title: "Contributions" }),
				l.a.createElement(
					"p",
					null,
					"This is the place where we want to thank all of you for your great feedback regarding this site. Some of you have submitted ideas and improvements that made it on the todo list and are already implemented or fixed:"
				),
				l.a.createElement(
					"table",
					{ className: "table is-striped is-fullwidth" },
					l.a.createElement(
						"thead",
						null,
						l.a.createElement(
							"tr",
							null,
							l.a.createElement("th", null, "Suggestion"),
							l.a.createElement("th", { className: "by-col" }, "By")
						)
					),
					l.a.createElement(
						"tbody",
						null,
						l.a.createElement(
							"tr",
							null,
							l.a.createElement(
								"td",
								null,
								"Feature: A way to filter by language of the channel"
							),
							l.a.createElement(
								"td",
								null,
								l.a.createElement(
									"a",
									{
										href: "https://www.youtube.com/channel/UCUMEKlaxhujH5r6sAVViTGw",
										target: "_blank",
										title: "Go to Norman Boyes YouTube channel",
										rel: "noopener"
									},
									"Norman Boyes"
								)
							)
						),
						l.a.createElement(
							"tr",
							null,
							l.a.createElement("td", null, "Feature: Sort channels by total views"),
							l.a.createElement(
								"td",
								null,
								l.a.createElement(
									o.Link,
									{ to: "/channel/UCvLc83k5o11EIF1lEo0VmuQ", title: "Go to Delos channel" },
									"Brian (SV Delos)"
								)
							)
						),
						l.a.createElement(
							"tr",
							null,
							l.a.createElement(
								"td",
								null,
								"Bug report: Website (scrolling) slows down drastically when loading lots of channels"
							),
							l.a.createElement(
								"td",
								null,
								l.a.createElement(
									"a",
									{
										href: "https://www.youtube.com/user/steedharold",
										target: "_blank",
										title: "Go to Harold Steed's YouTube channel",
										rel: "noopener"
									},
									"Harold Steed"
								)
							)
						),
						l.a.createElement(
							"tr",
							null,
							l.a.createElement(
								"td",
								null,
								"Feature: Show vessel position that belongs to a channel on a map"
							),
							l.a.createElement(
								"td",
								null,
								l.a.createElement(
									o.Link,
									{
										to: "/channel/UCpfax0gLoUZMqw-ROxX77Yw",
										title: "Go to Drake Paragon's channel"
									},
									"Drake Paragon"
								)
							)
						),
						l.a.createElement(
							"tr",
							null,
							l.a.createElement(
								"td",
								null,
								"Feature: Sort channels by currently popular channels, see what's trending."
							),
							l.a.createElement(
								"td",
								null,
								l.a.createElement(
									o.Link,
									{
										to: "/channel/UC6ZRBkwBQBrEOQQKwGi85gQ",
										title: "Go to Kismet Adventure's channel"
									},
									"Kismet Adventures"
								)
							)
						),
						l.a.createElement(
							"tr",
							null,
							l.a.createElement(
								"td",
								null,
								'Improvement: Implementing a subscriber threshold that channels have to reach in order to be listed on the "trending" page.',
								l.a.createElement("br", null),
								l.a.createElement(
									"i",
									null,
									"(Ed.: The threshold is now the median value of the subscriber distribution of all listed channels.)"
								)
							),
							l.a.createElement(
								"td",
								null,
								l.a.createElement(
									o.Link,
									{
										to: "/channel/UC8dsJQ_9CEwRmur_HFSXezA",
										title: "Go to The Corsair's channel"
									},
									"The Corsair"
								)
							)
						),
						l.a.createElement(
							"tr",
							null,
							l.a.createElement(
								"td",
								null,
								'Improvement: Set "Last upload" as default sorting option to facilitate attention to a broader variety of channels.'
							),
							l.a.createElement(
								"td",
								null,
								l.a.createElement(
									o.Link,
									{
										to: "/channel/UCu08YiFDAiIxl4xJDveTdJw",
										title: "Go to Mount Ocean's channel"
									},
									"Mount Ocean"
								)
							)
						),
						l.a.createElement(
							"tr",
							null,
							l.a.createElement(
								"td",
								null,
								'Feature: Group channel by their topic, e.g. "family", "couple", "diy"'
							),
							l.a.createElement(
								"td",
								null,
								l.a.createElement(
									o.Link,
									{
										to: "/channel/UCNYlvlreZiRRHo_v5Nmrfow",
										title: "Go to Guitar Zatara's channel"
									},
									"Guitar Zatara"
								),
								", David V."
							)
						)
					)
				)
			);
		};
		a("./src/pages/SupportUs/styles.css");
		var at = function (e) {
			return l.a.createElement(
				l.a.Fragment,
				null,
				l.a.createElement(
					X.Helmet,
					null,
					l.a.createElement("title", null, "Support us | Guitar Channels")
				),
				l.a.createElement(ye, { title: "Support us" }),
				l.a.createElement(
					"p",
					null,
					l.a.createElement("img", {
						id: "banner-img",
						alt: "Two aboard Tuuli Crew",
						src: a("./src/static/img/twoaboardtuuli@2x.jpg"),
						width: "100%"
					})
				),
				l.a.createElement(
					"p",
					{ className: "support-row" },
					"The",
					" ",
					l.a.createElement(
						"a",
						{
							href: "/channel/UCZbZeC2OfdVMwm9AR_zu0_g",
							title: "Go to Two aboard Tuuli's channel",
							target: "_blank"
						},
						l.a.createElement("b", null, "Two aboard Tuuli Crew")
					),
					" ",
					"created this website in their sparetime for you."
				),
				l.a.createElement(
					"p",
					null,
					"If you like it, and want to give something back, feel free to support us with a tip via the following platforms. It means a lot to us!"
				),
				l.a.createElement("p", null, "- Kristy & Thomas"),
				l.a.createElement(
					"div",
					{ className: "columns support-row" },
					l.a.createElement(
						"div",
						{ className: "column has-text-centered" },
						l.a.createElement(
							"a",
							{
								href: "https://www.patreon.com/guitarchannels",
								target: "_blank",
								title: "Go to guitar-channels Patreon page",
								rel: "noopener"
							},
							l.a.createElement("img", {
								src: a("./src/static/img/patreon.jpg"),
								height: "150",
								width: "150",
								alt: "Patreon"
							})
						)
					),
					l.a.createElement(
						"div",
						{ className: "column has-text-centered" },
						l.a.createElement(
							"a",
							{
								href: "https://www.paypal.me/guitarchannels",
								target: "_blank",
								rel: "noopener",
								title: "Go to guitar-channels PayPal page"
							},
							l.a.createElement("img", {
								src: a("./src/static/img/paypal.png"),
								height: "150",
								width: "150",
								alt: "Paypal"
							})
						)
					)
				)
			);
		};
		var nt = function (e) {
			return l.a.createElement(
				l.a.Fragment,
				null,
				l.a.createElement(
					X.Helmet,
					null,
					l.a.createElement("title", null, "Introduction | Guitar Channels")
				),
				l.a.createElement(ye, { title: "Introduction", subtitle: "How does this page work?" }),
				l.a.createElement(
					"p",
					null,
					"Well basically what this website does is list youtube channels that are related to guitar, circumnavigation or people living aboard their boats."
				),
				l.a.createElement(
					"p",
					{ style: { marginTop: "20px" } },
					"The channels are discovered by doing a network analysis. Basically finding out who subscribed to whom."
				),
				l.a.createElement(
					"p",
					{ style: { marginTop: "20px" } },
					"The algorithm uses a (super secret) starting channel and scans all subscriptions of this channel. The next step is recursively scanning all subscriptions of the subscriptions of the starting channel and so on."
				),
				l.a.createElement(
					"div",
					{ style: { marginTop: "20px" } },
					l.a.createElement("iframe", {
						className: "intro-video",
						width: "100%",
						height: "390",
						style: { height: "390px" },
						src: "https://www.youtube.com/embed/RWosJPnB900?start=53",
						frameBorder: "0",
						allowFullScreen: !0
					}),
					l.a.createElement("iframe", {
						className: "intro-video",
						width: "100%",
						height: "390",
						style: { height: "390px" },
						src: "https://www.youtube.com/embed/WFuSJj3v7PM",
						frameBorder: "0",
						allowFullScreen: !0
					}),
					l.a.createElement("iframe", {
						className: "intro-video",
						width: "100%",
						height: "390",
						style: { height: "390px" },
						src: "https://www.youtube.com/embed/5PXhfW7j2m8",
						frameBorder: "0",
						allowFullScreen: !0
					})
				)
			);
		};
		var lt = function (e) {
			return l.a.createElement(
				l.a.Fragment,
				null,
				l.a.createElement(
					X.Helmet,
					null,
					l.a.createElement("title", null, "Imprint | Guitar Channels")
				),
				l.a.createElement(ye, { title: "Imprint" }),
				l.a.createElement(
					"p",
					null,
					"The following information (Imprint) is required under German law."
				),
				l.a.createElement("p", null, "Responsible for this site:"),
				l.a.createElement(
					"p",
					{ className: "top-spacer" },
					l.a.createElement("span", { className: "reverse" }, "nnameggürB samohT"),
					l.a.createElement("br", null),
					l.a.createElement("span", { className: "reverse" }, "21 grubnenorC"),
					l.a.createElement("br", null),
					l.a.createElement("span", { className: "reverse" }, "nehcrikslegnE 66715"),
					l.a.createElement("br", null),
					l.a.createElement("span", { className: "reverse" }, "ynamreG"),
					l.a.createElement("br", null),
					l.a.createElement("span", { className: "reverse" }, "moc.slennahc-gnilias@yoha"),
					l.a.createElement("br", null)
				),
				l.a.createElement("h3", { className: "is-size-3 top-spacer" }, "Legal disclaimer"),
				l.a.createElement(
					"p",
					null,
					"The contents of these pages are generated automatically based on the YouTube channel title, description and videos of the individual channels listed. The creator of this website has no influence on the content of the channel descriptions or other channel related texts. Also, The creator of this website cannot assume liability for the timeless accuracy and completeness of the information. This website contains links to external websites. As the contents of these third-party websites are beyond my control, I cannot accept liability for them. ResponsibiIity for the contents of the linked pages is always held by the provider or operator of the pages."
				),
				l.a.createElement("h3", { className: "is-size-3 top-spacer" }, "Data protection"),
				l.a.createElement(
					"p",
					null,
					"In general, when visiting the website of “Guitar Channels”, no personal data are saved. No data will be passed on to third parties without your consent. We point out that in regard to unsecured data transmission in the internet (e.g. via email), security cannot be guaranteed. Such data could possibIy be accessed by third parties."
				),
				l.a.createElement("h3", { className: "is-size-3 top-spacer" }, "Google Analytics"),
				l.a.createElement(
					"p",
					null,
					"This website uses Google Analytics, a web analytics service provided by Google, Inc. (»Google«). Google Analytics uses cookies, which are text files placed on your computer, to help the website analyze how users use the site. The information generated by the cookie about your use of the website (including your IP address) will be transmitted to and stored by Google on servers in the United States. On this website the IP anonymization feature is activated. As a result Google will truncate/anonymize the last octet of the IP address for Member States of the European Union as well as for other parties to the Agreement on the European Economic Area. Only in exceptional cases, the full IP address is sent to and shortened by Google servers in the USA. On behalf of the website provider Google will use this information for the purpose of evaluating your use of the website, compiling reports on website activity for website operators and providing other services relating to website activity and internet usage to the website provider. Google will not associate your IP address with any other data held by Google. By using this website, you consent to the processing of data about you by Google in the manner and for the purposes set out above."
				),
				l.a.createElement(
					"h4",
					{ className: "is-size-4 top-spacer" },
					"How to prevent being tracked by Google Analytics on guitar-channels.com"
				),
				l.a.createElement(
					"ul",
					null,
					l.a.createElement(
						"li",
						null,
						"You may refuse the use of cookies by selecting the appropriate settings on your browser. However, please note that if you do this, you may not be able to use the full functionality of this website."
					),
					l.a.createElement(
						"li",
						null,
						"Furthermore you can prevent Google’s collection and use of data (cookies and IP address) by downloading and installing the browser plug-in available under",
						" ",
						l.a.createElement(
							"a",
							{
								href: "https://tools.google.com/dlpage/gaoptout?hl=en",
								target: "_blank",
								title: "Go to google.com",
								rel: "noopener"
							},
							"https://tools.google.com/dlpage/gaoptout?hl=en"
						)
					)
				)
			);
		};
		var rt = function (e) {
				return l.a.createElement(
					l.a.Fragment,
					null,
					l.a.createElement(
						X.Helmet,
						null,
						l.a.createElement("title", null, "Privacy Policy | Guitar Channels")
					),
					l.a.createElement(ye, { title: "Privacy Policy" }),
					l.a.createElement(
						"h3",
						{ className: "is-size-3 top-spacer" },
						"Data Controller and Owner"
					),
					l.a.createElement(
						"p",
						null,
						"Guitar Channels, ",
						l.a.createElement("span", { className: "reverse" }, "moc.slennahc-gnilias@yoha")
					),
					l.a.createElement("h3", { className: "is-size-3 top-spacer" }, "Types of Data collected"),
					l.a.createElement(
						"p",
						null,
						"Among the types of Personal Data that this Application collects, by itself or through third parties, there are: Cookie and Usage data. Other Personal Data collected may be described in other sections of this privacy policy or by dedicated explanation text contextually with the Data collection. The Personal Data may be freely provided by the User, or collected automatically when using this Application. Any use of Cookies - or of other tracking tools - by this Application or by the owners of third party services used by this Application, unless stated otherwise, serves to identify Users and remember their preferences, for the sole purpose of providing the service required by the User. Failure to provide certain Personal Data may make it impossible for this Application to provide its services. Users are responsible for any Personal Data of third parties obtained, published or shared through this Application and confirm that they have the third party's consent to provide the Data to the Owner."
					),
					l.a.createElement(
						"h3",
						{ className: "is-size-3 top-spacer" },
						"Mode and place of processing the Data"
					),
					l.a.createElement("h4", { className: "is-size-4 top-spacer" }, "Methods of processing"),
					l.a.createElement(
						"p",
						null,
						"The Data Controller processes the Data of Users in a proper manner and shall take appropriate security measures to prevent unauthorized access, disclosure, modification, or unauthorized destruction of the Data. The Data processing is carried out using computers and/or IT enabled tools, following organizational procedures and modes strictly related to the purposes indicated. In addition to the Data Controller, in some cases, the Data may be accessible to certain types of persons in charge, involved with the operation of the site (administration, sales, marketing, legal, system administration) or external parties (such as third party technical service providers, mail carriers, hosting providers, IT companies, communications agencies) appointed, if necessary, as Data Processors by the Owner. The updated list of these parties may be requested from the Data Controller at any time."
					),
					l.a.createElement("h4", { className: "is-size-4 top-spacer" }, "Place"),
					l.a.createElement(
						"p",
						null,
						"The Data is processed at the Data Controller's operating offices and in any other places where the parties involved with the processing are located. For further information, please contact the Data Controller."
					),
					l.a.createElement("h4", { className: "is-size-4 top-spacer" }, "Retention time"),
					l.a.createElement(
						"p",
						null,
						"The Data is kept for the time necessary to provide the service requested by the User, or stated by the purposes outlined in this document, and the User can always request that the Data Controller suspend or remove the data."
					),
					l.a.createElement(
						"h3",
						{ className: "is-size-3 top-spacer" },
						"The use of the collected Data"
					),
					l.a.createElement(
						"p",
						null,
						"The Data concerning the User is collected to allow the Owner to provide its services, as well as for the following purposes: Analytics and Displaying content from external platforms. The Personal Data used for each purpose is outlined in the specific sections of this document."
					),
					l.a.createElement(
						"h3",
						{ className: "is-size-3 top-spacer" },
						"Detailed information on the processing of Personal Data"
					),
					l.a.createElement(
						"p",
						null,
						"Personal Data is collected for the following purposes and using the following services:"
					),
					l.a.createElement("h4", { className: "is-size-4 top-spacer" }, "Analytics"),
					l.a.createElement(
						"p",
						null,
						"The services contained in this section enable the Owner to monitor and analyze web traffic and can be used to keep track of User behavior."
					),
					l.a.createElement(
						"h5",
						{ className: "is-size-5 top-spacer" },
						"Google Analytics (Google Inc.)"
					),
					l.a.createElement(
						"p",
						null,
						"Google Analytics is a web analysis service provided by Google Inc. (“Google”). Google utilizes the Data collected to track and examine the use of this Application, to prepare reports on its activities and share them with other Google services. Google may use the Data collected to contextualize and personalize the ads of its own advertising network. Personal Data collected: Cookie and Usage data. Place of processing: USA –",
						" ",
						l.a.createElement(
							"a",
							{
								href: "http://www.google.com/intl/en/policies/privacy/",
								target: "_blank",
								title: "Go to google.com and learn about privacy",
								rel: "noopener"
							},
							"Privacy Policy"
						),
						" ",
						"–",
						" ",
						l.a.createElement(
							"a",
							{
								href: "http://tools.google.com/dlpage/gaoptout?hl=en",
								title: "Go to google.com and learn about opting out of privacy related data collection",
								target: "_blank"
							},
							"Opt Out"
						)
					),
					l.a.createElement(
						"h4",
						{ className: "is-size-4 top-spacer" },
						"Displaying content from external platforms"
					),
					l.a.createElement(
						"p",
						null,
						"These services allow you to view content hosted on external platforms directly from the pages of this Application and interact with them. If a service of this kind is installed, it may still collect web traffic data for the pages where the service is installed, even when users do not use it."
					),
					l.a.createElement(
						"h5",
						{ className: "is-size-5 top-spacer" },
						"Youtube video widget (Google Inc.)"
					),
					l.a.createElement(
						"p",
						null,
						"Youtube is a video content visualization service provided by Google Inc. that allows this Application to incorporate content of this kind on its pages. Personal Data collected: Cookie and Usage data. Place of processing: USA –",
						" ",
						l.a.createElement(
							"a",
							{
								href: "http://www.google.it/intl/en/policies/privacy/",
								target: "_blank",
								rel: "noopener",
								title: "Go to google.com and learn about privacy"
							},
							"Privacy Policy"
						)
					),
					l.a.createElement(
						"h3",
						{ className: "is-size-3 top-spacer" },
						"Additional information about Data collection and processing"
					),
					l.a.createElement("h4", { className: "is-size-4 top-spacer" }, "Legal action"),
					l.a.createElement(
						"p",
						null,
						"The User's Personal Data may be used for legal purposes by the Data Controller, in Court or in the stages leading to possible legal action arising from improper use of this Application or the related services. The User declares to be aware that the Data Controller may be required to reveal personal data upon request of public authorities."
					),
					l.a.createElement(
						"h4",
						{ className: "is-size-4 top-spacer" },
						"Additional information about User's Personal Data"
					),
					l.a.createElement(
						"p",
						null,
						"In addition to the information contained in this privacy policy, this Application may provide the User with additional and contextual information concerning particular services or the collection and processing of Personal Data upon request."
					),
					l.a.createElement(
						"h4",
						{ className: "is-size-4 top-spacer" },
						"System Logs and Maintenance"
					),
					l.a.createElement(
						"p",
						null,
						"For operation and maintenance purposes, this Application and any third party services may collect files that record interaction with this Application (System Logs) or use for this purpose other Personal Data (such as IP Address)."
					),
					l.a.createElement(
						"h4",
						{ className: "is-size-4 top-spacer" },
						"Information not contained in this policy"
					),
					l.a.createElement(
						"p",
						null,
						"More details concerning the collection or processing of Personal Data may be requested from the Data Controller at any time. Please see the contact information at the beginning of this document."
					),
					l.a.createElement("h4", { className: "is-size-4 top-spacer" }, "The rights of Users"),
					l.a.createElement(
						"p",
						null,
						"Users have the right, at any time, to know whether their Personal Data has been stored and can consult the Data Controller to learn about their contents and origin, to verify their accuracy or to ask for them to be supplemented, cancelled, updated or corrected, or for their transformation into anonymous format or to block any data held in violation of the law, as well as to oppose their treatment for any and all legitimate reasons. Requests should be sent to the Data Controller at the contact information set out above. This Application does not support “Do Not Track” requests. To determine whether any of the third party services it uses honor the “Do Not Track” requests, please read their privacy policies."
					),
					l.a.createElement(
						"h4",
						{ className: "is-size-4 top-spacer" },
						"Changes to this privacy policy"
					),
					l.a.createElement(
						"p",
						null,
						"The Data Controller reserves the right to make changes to this privacy policy at any time by giving notice to its Users on this page. It is strongly recommended to check this page often, referring to the date of the last modification listed at the bottom. If a User objects to any of the changes to the Policy, the User must cease using this Application and can request that the Data Controller removes the Personal Data. Unless stated otherwise, the then-current privacy policy applies to all Personal Data the Data Controller has about Users."
					),
					l.a.createElement("hr", null),
					l.a.createElement(
						"h3",
						{ className: "is-size-3 top-spacer" },
						"Definitions and legal references"
					),
					l.a.createElement("h4", { className: "is-size-4 top-spacer" }, "Personal Data (or Data)"),
					l.a.createElement(
						"p",
						null,
						"Any information regarding a natural person, a legal person, an institution or an association, which is, or can be, identified, even indirectly, by reference to any other information, including a personal identification number."
					),
					l.a.createElement("h4", { className: "is-size-4 top-spacer" }, "Usage Data"),
					l.a.createElement(
						"p",
						null,
						"Information collected automatically from this Application (or third party services employed in this Application), which can include: the IP addresses or domain names of the computers utilized by the Users who use this Application, the URI addresses (Uniform Resource Identifier), the time of the request, the method utilized to submit the request to the server, the size of the file received in response, the numerical code indicating the status of the server's answer (successful outcome, error, etc.), the country of origin, the features of the browser and the operating system utilized by the User, the various time details per visit (e.g., the time spent on each page within the Application) and the details about the path followed within the Application with special reference to the sequence of pages visited, and other parameters about the device operating system and/or the User's IT environment."
					),
					l.a.createElement("h4", { className: "is-size-4 top-spacer" }, "User"),
					l.a.createElement(
						"p",
						null,
						"The individual using this Application, which must coincide with or be authorized by the Data Subject, to whom the Personal Data refers."
					),
					l.a.createElement("h4", { className: "is-size-4 top-spacer" }, "Data Subject"),
					l.a.createElement(
						"p",
						null,
						"The legal or natural person to whom the Personal Data refers."
					),
					l.a.createElement(
						"h4",
						{ className: "is-size-4 top-spacer" },
						"Data Processor (or Data Supervisor)"
					),
					l.a.createElement(
						"p",
						null,
						"The natural person, legal person, public administration or any other body, association or organization authorized by the Data Controller to process the Personal Data in compliance with this privacy policy."
					),
					l.a.createElement(
						"h4",
						{ className: "is-size-4 top-spacer" },
						"Data Controller (or Owner)"
					),
					l.a.createElement(
						"p",
						null,
						"The natural person, legal person, public administration or any other body, association or organization with the right, also jointly with another Data Controller, to make decisions regarding the purposes, and the methods of processing of Personal Data and the means used, including the security measures concerning the operation and use of this Application. The Data Controller, unless otherwise specified, is the Owner of this Application."
					),
					l.a.createElement("h4", { className: "is-size-4 top-spacer" }, "This Application"),
					l.a.createElement(
						"p",
						null,
						"The hardware or software tool by which the Personal Data of the User is collected."
					),
					l.a.createElement("h4", { className: "is-size-4 top-spacer" }, "Cookie"),
					l.a.createElement("p", null, "Small piece of data stored in the User's device."),
					l.a.createElement("hr", null),
					l.a.createElement("h3", { className: "is-size-3 top-spacer" }, "Legal information"),
					l.a.createElement(
						"p",
						null,
						"Notice to European Users: this privacy statement has been prepared in fulfillment of the obligations under Art. 10 of EC Directive n. 95/46/EC, and under the provisions of Directive 2002/58/EC, as revised by Directive 2009/136/EC, on the subject of Cookies. This privacy policy relates solely to this Application."
					)
				);
			},
			st = [
				{
					title: "Channels",
					items: [
						{ title: "Subscribers", href: "/by-subscribers", icon: "fas fa-users" },
						{ title: "Views", href: "/by-views", icon: "fas fa-eye" },
						{
							title: "Last Upload",
							href: "/by-upload",
							isDefault: !0,
							icon: "fas fa-cloud-upload-alt"
						},
						{ title: "Founded", href: "/by-founded", icon: "fas fa-plus-circle" },
						{ title: "Trending", href: "/by-trending", icon: "fas fa-chart-line" },
						{ title: "Topics", href: "/topics", icon: "fas fa-tags" }
					]
				},
				{
					title: "Menu",
					items: [
						{ title: "Introduction", href: "/how-it-works" },
						{ title: "Suggest a channel", href: "/suggest" },
						{ title: "Contributions", href: "/contributions" },
						{ title: "Support us", href: "/support-us" }
					]
				}
			];
		function it() {
			var e = Object(n.useState)(!1),
				t = e[0],
				r = e[1],
				s = Object(o.useLocation)(),
				i = Object(n.useContext)(C.Context),
				c = l.a.createElement(
					"div",
					{ className: "navbar-menu is-active" },
					l.a.createElement(
						"div",
						{ className: "navbar-start" },
						l.a.createElement(
							"div",
							{ className: "navbar-item has-dropdown is-hoverable" },
							st.map(function (e) {
								return l.a.createElement(
									n.Fragment,
									{ key: e.title },
									l.a.createElement("a", { className: "navbar-link" }, e.title),
									l.a.createElement(
										"div",
										{ className: "navbar-dropdown" },
										e.items.map(function (e) {
											return l.a.createElement(
												o.NavLink,
												{
													className: _()({
														"navbar-item": !0,
														"is-active": e.isDefault && "/" === s.pathname
													}),
													key: e.href,
													activeClassName: "is-active",
													to: e.href,
													onClick: function () {
														r(!1);
													}
												},
												e.title
											);
										})
									)
								);
							})
						)
					),
					l.a.createElement(
						"div",
						{ className: "navbar-end" },
						l.a.createElement(
							"div",
							{ className: "navbar-item" },
							l.a.createElement(
								"div",
								{ className: "buttons" },
								i.state.loggedIn
									? l.a.createElement(
											"a",
											{ className: "button is-info", onClick: O },
											l.a.createElement("i", {
												className: "fas fa-sign-out-alt icon-spacer"
											}),
											l.a.createElement("strong", null, "Log out")
									  )
									: l.a.createElement(
											"a",
											{
												className: "button is-info",
												onClick: function () {
													D(i, !0), r(!1);
												}
											},
											l.a.createElement("i", {
												className: "fas fa-sign-in-alt icon-spacer"
											}),
											l.a.createElement("strong", null, "Sign in")
									  )
							)
						)
					)
				);
			return l.a.createElement(
				"nav",
				{ className: "navbar is-hidden-tablet", role: "navigation", "aria-label": "main navigation" },
				l.a.createElement(
					"div",
					{ className: "navbar-brand" },
					l.a.createElement(
						"a",
						{ className: "navbar-item", href: "/" },
						l.a.createElement("img", { src: a("./src/static/img/logo.svg"), height: "28" })
					),
					l.a.createElement(
						"a",
						{
							role: "button",
							className: "navbar-burger burger",
							onClick: function () {
								return r(!t);
							}
						},
						l.a.createElement("span", { "aria-hidden": "true" }),
						l.a.createElement("span", { "aria-hidden": "true" }),
						l.a.createElement("span", { "aria-hidden": "true" })
					)
				),
				t ? c : null
			);
		}
		var ot,
			ct = function (e, t) {
				return Object.defineProperty ? Object.defineProperty(e, "raw", { value: t }) : (e.raw = t), e;
			},
			ut = Object(b.a)(
				ot ||
					(ot = ct(
						["\n\tquery Languages {\n\t\tlanguages {\n\t\t\tname\n\t\t\tcode\n\t\t}\n\t}\n"],
						["\n\tquery Languages {\n\t\tlanguages {\n\t\t\tname\n\t\t\tcode\n\t\t}\n\t}\n"]
					))
			);
		function mt() {
			var e = Object(g.useQuery)(ut, { fetchPolicy: "cache-first" }),
				t = e.loading,
				a = (e.error, e.data),
				n = Object(K.useLocalStorage)(G)[0],
				r = F();
			return t || !a
				? null
				: l.a.createElement(
						"div",
						{ className: "select" },
						l.a.createElement(
							"select",
							{
								onChange: function (e) {
									Object(K.writeStorage)(G, e.target.value),
										r("User", "Change Language", e.target.value);
								},
								value: n || L
							},
							a.languages.map(function (e) {
								return l.a.createElement("option", { key: e.code, value: e.code }, e.name);
							})
						)
				  );
		}
		function dt() {
			var e = Object(o.useHistory)(),
				t = Object(o.useLocation)(),
				r = F();
			return l.a.createElement(
				"aside",
				{ className: "menu is-hidden-mobile" },
				l.a.createElement(
					"a",
					{ href: "/", className: "is-centered" },
					l.a.createElement("img", {
						className: "nav-menu-margin",
						width: "200",
						src: a("./src/static/img/logo.svg")
					})
				),
				l.a.createElement(
					"div",
					{ className: "menu-label" },
					l.a.createElement(
						"div",
						{ className: "control has-icons-left has-icons-right" },
						l.a.createElement("input", {
							type: "search",
							className: "input is-rounded nav-menu-margin",
							placeholder: "Search...",
							onKeyUp: function (t) {
								if (13 === t.keyCode) {
									var a = t.target.value;
									e.push("/search/" + a);
								}
							}
						}),
						l.a.createElement(
							"span",
							{ className: "icon is-small is-left" },
							l.a.createElement("i", { className: "fas fa-search" })
						)
					)
				),
				st.map(function (e) {
					return l.a.createElement(
						n.Fragment,
						{ key: e.title },
						l.a.createElement("p", { className: "menu-label" }, e.title),
						l.a.createElement(
							"ul",
							{ className: "menu-list" },
							e.items.map(function (e) {
								return l.a.createElement(
									"li",
									{ key: e.href },
									l.a.createElement(
										o.NavLink,
										{
											className: e.isDefault && "/" === t.pathname ? "is-active" : "",
											to: e.href,
											activeClassName: "is-active"
										},
										e.icon
											? l.a.createElement(
													l.a.Fragment,
													null,
													l.a.createElement("i", {
														className: e.icon + " fa-fw menu-icon"
													})
											  )
											: null,
										e.title
									)
								);
							})
						)
					);
				}),
				l.a.createElement("p", { className: "menu-label" }, "Channel Language"),
				l.a.createElement(
					"ul",
					{ className: "menu-list" },
					l.a.createElement("li", null, l.a.createElement(mt, null))
				),
				l.a.createElement("p", { className: "menu-label" }, "Support guitar-channels.com"),
				l.a.createElement(
					"div",
					null,
					l.a.createElement(
						"a",
						{
							href: "https://www.patreon.com/bePatron?u=2839847",
							target: "_blank",
							className: "button is-danger is-rounded",
							onClick: function () {
								r("User", "Click Patreon", "NavBar");
							}
						},
						l.a.createElement("i", { className: "fab fa-patreon fa-fw" }),
						" Patreon"
					)
				),
				l.a.createElement(
					"div",
					{ style: { marginTop: "5px" } },
					l.a.createElement(
						"a",
						{
							href: "https://paypal.me/guitarchannels",
							target: "_blank",
							className: "button is-info is-rounded",
							onClick: function () {
								r("User", "Click PayPal", "NavBar");
							}
						},
						l.a.createElement("i", { className: "fab fa-paypal fa-fw" }),
						" PayPal"
					)
				)
			);
		}
		var ht,
			pt,
			ft = function (e, t) {
				return Object.defineProperty ? Object.defineProperty(e, "raw", { value: t }) : (e.raw = t), e;
			},
			gt = Object(b.a)(
				ht ||
					(ht = ft(
						[
							"\n\tquery ChannelSuggestions($channelIds: [String]!, $source: String) {\n\t\tchannelSuggestions(channelIds: $channelIds, source: $source) {\n\t\t\tchannelID\n\t\t\tchannel {\n\t\t\t\ttitle\n\t\t\t\tdescription\n\t\t\t\tthumbnail\n\t\t\t}\n\t\t\tisGuitarChannel\n\t\t\tsource\n\t\t}\n\t}\n"
						],
						[
							"\n\tquery ChannelSuggestions($channelIds: [String]!, $source: String) {\n\t\tchannelSuggestions(channelIds: $channelIds, source: $source) {\n\t\t\tchannelID\n\t\t\tchannel {\n\t\t\t\ttitle\n\t\t\t\tdescription\n\t\t\t\tthumbnail\n\t\t\t}\n\t\t\tisGuitarChannel\n\t\t\tsource\n\t\t}\n\t}\n"
						]
					))
			),
			bt = function (e, t) {
				return Object.defineProperty ? Object.defineProperty(e, "raw", { value: t }) : (e.raw = t), e;
			},
			vt = Object(b.a)(
				pt ||
					(pt = bt(
						[
							"\n\tmutation SuggestChannel($channelId: String!) {\n\t\tsuggestChannel(channelId: $channelId)\n\t}\n"
						],
						[
							"\n\tmutation SuggestChannel($channelId: String!) {\n\t\tsuggestChannel(channelId: $channelId)\n\t}\n"
						]
					))
			),
			Et = function (e, t, a, n) {
				return new (a || (a = Promise))(function (l, r) {
					function s(e) {
						try {
							o(n.next(e));
						} catch (e) {
							r(e);
						}
					}
					function i(e) {
						try {
							o(n.throw(e));
						} catch (e) {
							r(e);
						}
					}
					function o(e) {
						var t;
						e.done
							? l(e.value)
							: ((t = e.value),
							  t instanceof a
									? t
									: new a(function (e) {
											e(t);
									  })).then(s, i);
					}
					o((n = n.apply(e, t || [])).next());
				});
			},
			yt = function (e, t) {
				var a,
					n,
					l,
					r,
					s = {
						label: 0,
						sent: function () {
							if (1 & l[0]) throw l[1];
							return l[1];
						},
						trys: [],
						ops: []
					};
				return (
					(r = { next: i(0), throw: i(1), return: i(2) }),
					"function" == typeof Symbol &&
						(r[Symbol.iterator] = function () {
							return this;
						}),
					r
				);
				function i(r) {
					return function (i) {
						return (function (r) {
							if (a) throw new TypeError("Generator is already executing.");
							for (; s; )
								try {
									if (
										((a = 1),
										n &&
											(l =
												2 & r[0]
													? n.return
													: r[0]
													? n.throw || ((l = n.return) && l.call(n), 0)
													: n.next) &&
											!(l = l.call(n, r[1])).done)
									)
										return l;
									switch (((n = 0), l && (r = [2 & r[0], l.value]), r[0])) {
										case 0:
										case 1:
											l = r;
											break;
										case 4:
											return s.label++, { value: r[1], done: !1 };
										case 5:
											s.label++, (n = r[1]), (r = [0]);
											continue;
										case 7:
											(r = s.ops.pop()), s.trys.pop();
											continue;
										default:
											if (
												!(l = (l = s.trys).length > 0 && l[l.length - 1]) &&
												(6 === r[0] || 2 === r[0])
											) {
												s = 0;
												continue;
											}
											if (3 === r[0] && (!l || (r[1] > l[0] && r[1] < l[3]))) {
												s.label = r[1];
												break;
											}
											if (6 === r[0] && s.label < l[1]) {
												(s.label = l[1]), (l = r);
												break;
											}
											if (l && s.label < l[2]) {
												(s.label = l[2]), s.ops.push(r);
												break;
											}
											l[2] && s.ops.pop(), s.trys.pop();
											continue;
									}
									r = t.call(e, s);
								} catch (e) {
									(r = [6, e]), (n = 0);
								} finally {
									a = l = 0;
								}
							if (5 & r[0]) throw r[1];
							return { value: r[0] ? r[1] : void 0, done: !0 };
						})([r, i]);
					};
				}
			};
		var wt = function (e) {
			var t = this,
				a = Object(n.useState)(!1),
				r = a[0],
				s = a[1],
				i = Object(g.useMutation)(vt)[0];
			return l.a.createElement(
				"button",
				{
					className: "button is-link",
					disabled: r,
					onClick: function () {
						return Et(t, void 0, void 0, function () {
							return yt(this, function (t) {
								switch (t.label) {
									case 0:
										return [4, i({ variables: { channelId: e.channelId } })];
									case 1:
										return t.sent(), s(!0), [2];
								}
							});
						});
					}
				},
				l.a.createElement("i", {
					className: _()({ fas: !0, "icon-spacer": !0, "fa-check": r, "fa-plus": !r })
				}),
				" ",
				r ? "Thanks!" : "Suggest"
			);
		};
		var Nt = function (e) {
			return l.a.createElement(
				l.a.Fragment,
				null,
				e.channels.map(function (e) {
					return l.a.createElement(
						"div",
						{ key: Object(ee.v4)(), className: "columns" },
						l.a.createElement(
							"div",
							{ className: "column is-narrow" },
							l.a.createElement("img", { src: e.channel.thumbnail })
						),
						l.a.createElement(
							"div",
							{ className: "column has-text-justified" },
							l.a.createElement(
								"a",
								{ href: "https://youtube.com/channel/" + e.channelID, target: "_blank" },
								e.channel.title
							),
							l.a.createElement("p", null, e.channel.description)
						),
						l.a.createElement(
							"div",
							{ className: "column is-narrow" },
							l.a.createElement(wt, { channelId: e.channelID })
						)
					);
				})
			);
		};
		var kt,
			xt = function (e) {
				var t,
					a,
					n,
					r,
					s,
					i,
					o =
						null === (a = null === (t = e) || void 0 === t ? void 0 : t.channelSuggestions) ||
						void 0 === a
							? void 0
							: a.filter(function (e) {
									return !0 === e.isGuitarChannel;
							  }),
					c =
						null === (r = null === (n = e) || void 0 === n ? void 0 : n.channelSuggestions) ||
						void 0 === r
							? void 0
							: r.filter(function (e) {
									return !1 === e.isGuitarChannel;
							  });
				return l.a.createElement(
					"div",
					{ className: "box top-spacer-2x" },
					l.a.createElement(
						"h4",
						{ className: "is-size-4" },
						l.a.createElement("i", { className: "fab fa-youtube" }),
						" Channels you've subscribed to:"
					),
					(null === (s = o) || void 0 === s ? void 0 : s.length) > 0 &&
						l.a.createElement(
							l.a.Fragment,
							null,
							l.a.createElement(
								"p",
								{ className: "bottom-spacer" },
								"Some of your subscriptions are likely to be guitar channels and are",
								" ",
								l.a.createElement("strong", null, "not yet listed on guitar-channels.com"),
								". You can easliy suggest them to be listed:"
							),
							l.a.createElement(Nt, { channels: o })
						),
					(null === (i = c) || void 0 === i ? void 0 : i.length) > 0 &&
						l.a.createElement(
							l.a.Fragment,
							null,
							l.a.createElement(
								"div",
								{ className: "notification is-warning" },
								l.a.createElement(
									"p",
									null,
									"The following of your subscriptions are",
									" ",
									l.a.createElement("strong", null, "probably not guitar-related"),
									", but you can check and suggest them as well:"
								)
							),
							l.a.createElement(Nt, { channels: c })
						)
				);
			};
		!(function (e) {
			(e[(e.AlreadyListed = 0)] = "AlreadyListed"),
				(e[(e.AlreadySuggested = 1)] = "AlreadySuggested"),
				(e[(e.Novel = 2)] = "Novel"),
				(e[(e.NotValid = 3)] = "NotValid");
		})(kt || (kt = {}));
		var It,
			Ct = kt,
			St = function (e, t) {
				return Object.defineProperty ? Object.defineProperty(e, "raw", { value: t }) : (e.raw = t), e;
			},
			jt = Object(b.a)(
				It ||
					(It = St(
						[
							"\n\tquery IdentifyChannel($channelUrlHint: String!) {\n\t\tidentifyChannel(channelUrlHint: $channelUrlHint) {\n\t\t\tchannelID\n\t\t\tchannel {\n\t\t\t\ttitle\n\t\t\t\tdescription\n\t\t\t\tthumbnail\n\t\t\t}\n\t\t\tisGuitarChannel\n\t\t\tsource\n\t\t\tstatus\n\t\t}\n\t}\n"
						],
						[
							"\n\tquery IdentifyChannel($channelUrlHint: String!) {\n\t\tidentifyChannel(channelUrlHint: $channelUrlHint) {\n\t\t\tchannelID\n\t\t\tchannel {\n\t\t\t\ttitle\n\t\t\t\tdescription\n\t\t\t\tthumbnail\n\t\t\t}\n\t\t\tisGuitarChannel\n\t\t\tsource\n\t\t\tstatus\n\t\t}\n\t}\n"
						]
					))
			);
		var Ot = function (e) {
			var t = Object(g.useLazyQuery)(jt, { fetchPolicy: "cache-and-network" }),
				a = t[0],
				n = t[1],
				r = n.loading,
				s = (n.error, n.data),
				i = null;
			if (r) i = l.a.createElement(J, null);
			else if (s)
				switch (Ct[s.identifyChannel.status]) {
					case Ct.NotValid:
						i = l.a.createElement(
							"p",
							{ className: "has-text-danger is-centered top-spacer" },
							"This does not seem like a valid YouTube channel!"
						);
						break;
					case Ct.AlreadyListed:
						i = l.a.createElement(
							"p",
							{ className: "is-centered top-spacer" },
							"This channel is already listed,",
							" ",
							l.a.createElement(
								o.Link,
								{ to: "/channel/" + s.identifyChannel.channelID },
								"check it out here!"
							)
						);
						break;
					case Ct.AlreadySuggested:
						i = l.a.createElement(
							"p",
							{ className: "is-centered top-spacer" },
							"Thanks! Somebody already suggested this channel.",
							l.a.createElement("br", null),
							"It is currently under review and might be added to the list very soon!"
						);
						break;
					case Ct.Novel:
						i = l.a.createElement(
							"div",
							{ className: "top-spacer" },
							l.a.createElement(Nt, { channels: [s.identifyChannel] })
						);
				}
			return l.a.createElement(
				l.a.Fragment,
				null,
				l.a.createElement(
					"p",
					{ className: "top-spacer" },
					l.a.createElement("input", {
						className: "input",
						type: "text",
						placeholder: "https://youtube.com/channel/...",
						onKeyUp: function (e) {
							a({ variables: { channelUrlHint: e.target.value } });
						}
					})
				),
				i
			);
		};
		var Dt = function (e) {
			var t,
				a,
				r,
				s = Object(n.useContext)(C.Context),
				i = Object(g.useQuery)(gt, {
					fetchPolicy: "cache-and-network",
					variables: { channelIds: s.state.subscriptions, source: "yt" },
					skip: 0 === (null === (t = s.state.subscriptions) || void 0 === t ? void 0 : t.length)
				}),
				o = i.loading,
				c = (i.error, i.data);
			return l.a.createElement(
				l.a.Fragment,
				null,
				l.a.createElement(
					X.Helmet,
					null,
					l.a.createElement("title", null, "Suggest a channel | Guitar Channels")
				),
				l.a.createElement(ye, {
					title: "Suggest a channel",
					subtitle: "Contribute by suggesting not-yet listed channels"
				}),
				l.a.createElement(
					"p",
					null,
					"There are currently 1219 channels and 120881 videos listed in this site, but we probably missed one or another interesting guitar YouTube channel!"
				),
				l.a.createElement(
					"p",
					{ className: "top-spacer" },
					"Know of any guitar channels that are not listed here? Well, that's brilliant! You can use the form below to check and suggest a channel for the list:"
				),
				l.a.createElement(Ot, null),
				o && !c ? l.a.createElement(J, null) : null,
				(null === (r = null === (a = c) || void 0 === a ? void 0 : a.channelSuggestions) ||
				void 0 === r
					? void 0
					: r.length) > 0 && l.a.createElement(xt, { channelSuggestions: c.channelSuggestions })
			);
		};
		var Pt = function (e) {
			var t = Object(n.useContext)(C.Context);
			return l.a.createElement(
				"div",
				{ className: "container is-hidden-mobile" },
				l.a.createElement(
					"nav",
					{ className: "level signin-bar" },
					l.a.createElement("div", { className: "level-left" }),
					l.a.createElement(
						"div",
						{ className: "level-right" },
						t.state.loggedIn
							? l.a.createElement(
									l.a.Fragment,
									null,
									l.a.createElement(
										"p",
										{ className: "level-item" },
										l.a.createElement(
											"a",
											{ onClick: O },
											l.a.createElement("i", {
												className: "fas fa-sign-out-alt icon-spacer"
											}),
											"Log out"
										)
									)
							  )
							: l.a.createElement(
									"p",
									{ className: "level-item" },
									l.a.createElement(
										"a",
										{
											onClick: function () {
												D(t, !0);
											}
										},
										l.a.createElement("i", {
											className: "fas fa-sign-in-alt icon-spacer"
										}),
										"Sign in"
									)
							  )
					)
				)
			);
		};
		function Tt(e) {
			var t = Object(n.useContext)(C.Context);
			return l.a.createElement(
				"div",
				{ className: "modal " + (t.state.signInModalOpen ? "is-active" : "") },
				l.a.createElement("div", { className: "modal-background" }),
				l.a.createElement(
					"div",
					{ className: "modal-card" },
					l.a.createElement(
						"header",
						{ className: "modal-card-head" },
						l.a.createElement("p", { className: "modal-card-title" }, "Sign In"),
						l.a.createElement("button", {
							className: "delete",
							"aria-label": "close",
							onClick: function () {
								D(t, !1);
							}
						})
					),
					l.a.createElement(
						"section",
						{ className: "modal-card-body" },
						l.a.createElement(
							"div",
							{ className: "top-spacer is-centered" },
							l.a.createElement(
								"a",
								{ href: h() + "/oauth2", className: "button is-large is-danger" },
								"Sign In with ",
								l.a.createElement("i", {
									className: "fab fa-youtube",
									style: { margin: "0 10px" }
								}),
								" ",
								"YouTube"
							)
						),
						l.a.createElement(
							"p",
							{ className: "top-spacer-2x" },
							"To provide you with an awesome tailored user interface, you can sign in with your YouTube account."
						),
						l.a.createElement(
							"p",
							null,
							"guitar-channels.com does not publish anything on your behalf nor does it track, share or store any of your YouTube data!"
						),
						l.a.createElement(
							"div",
							{ className: "columns top-spacer-2x" },
							l.a.createElement(
								"div",
								{ className: "column has-text-centered" },
								l.a.createElement(
									"div",
									null,
									l.a.createElement(
										"p",
										{ className: "title" },
										l.a.createElement(
											"span",
											{ className: "fa-stack fa-1x" },
											l.a.createElement("i", {
												className: "fas fa-circle fa-stack-2x"
											}),
											l.a.createElement("i", {
												className: "fab fa-youtube fa-stack-1x fa-inverse"
											})
										)
									),
									l.a.createElement(
										"p",
										{ className: "heading" },
										"Manage subscribtions directly from list view"
									)
								)
							),
							l.a.createElement(
								"div",
								{ className: "column has-text-centered" },
								l.a.createElement(
									"div",
									null,
									l.a.createElement(
										"p",
										{ className: "title" },
										l.a.createElement(
											"span",
											{ className: "fa-stack fa-1x" },
											l.a.createElement("i", {
												className: "fas fa-circle fa-stack-2x"
											}),
											l.a.createElement("i", {
												className: "fas fa-flag fa-stack-1x fa-inverse"
											})
										)
									),
									l.a.createElement(
										"p",
										{ className: "heading" },
										"Flag channels as not guitar-related"
									)
								)
							)
						),
						l.a.createElement(
							"nav",
							{ className: "columns" },
							l.a.createElement(
								"div",
								{ className: "column has-text-centered" },
								l.a.createElement(
									"div",
									null,
									l.a.createElement(
										"p",
										{ className: "title" },
										l.a.createElement(
											"span",
											{ className: "fa-stack fa-1x" },
											l.a.createElement("i", {
												className: "fas fa-circle fa-stack-2x"
											}),
											l.a.createElement("i", {
												className: "fas fa-bullhorn fa-stack-1x fa-inverse"
											})
										)
									),
									l.a.createElement(
										"p",
										{ className: "heading" },
										"Suggest channels to the list"
									)
								)
							),
							l.a.createElement(
								"div",
								{ className: "column has-text-centered" },
								l.a.createElement(
									"div",
									null,
									l.a.createElement(
										"p",
										{ className: "title" },
										l.a.createElement(
											"span",
											{ className: "fa-stack fa-1x" },
											l.a.createElement("i", {
												className: "fas fa-circle fa-stack-2x"
											}),
											l.a.createElement("i", {
												className: "fas fa-id-card fa-stack-1x fa-inverse"
											})
										)
									),
									l.a.createElement(
										"p",
										{ className: "heading" },
										"View your detailed channel profile page"
									)
								)
							)
						)
					)
				)
			);
		}
		function At() {
			var e = Object(o.useLocation)().pathname;
			return (
				Object(n.useEffect)(
					function () {
						window.scrollTo(0, 0);
					},
					[e]
				),
				null
			);
		}
		var _t = function () {
				var e = Object(n.useState)(!1),
					t = e[0],
					a = e[1],
					r = Object(K.useLocalStorage)("sponsorModalActivationCounter")[0],
					s = F();
				Object(n.useEffect)(function () {
					var e = ((r || 0) % 15) + 1;
					Object(K.writeStorage)("sponsorModalActivationCounter", e),
						2 == e &&
							window.setTimeout(function () {
								a(!0);
							}, 2345);
				}, []);
				var i = _()({ modal: !0, "is-active": t });
				return l.a.createElement(
					"div",
					{ className: i },
					l.a.createElement("div", { className: "modal-background" }),
					l.a.createElement(
						"div",
						{ className: "modal-card" },
						l.a.createElement(
							"header",
							{ className: "modal-card-head" },
							l.a.createElement("p", { className: "modal-card-title" }, "Support us!"),
							l.a.createElement("button", {
								className: "delete",
								"aria-label": "close",
								onClick: function () {
									return a(!1);
								}
							})
						),
						l.a.createElement(
							"section",
							{ className: "modal-card-body has-text-centered" },
							l.a.createElement(
								"div",
								{ style: { marginBottom: "0.25rem" } },
								"This website was created by the",
								" ",
								l.a.createElement(
									"a",
									{ href: "/#/channel/UCZbZeC2OfdVMwm9AR_zu0_g", target: "_blank" },
									"Two aboard Tuuli"
								),
								" ",
								"crew for you to enjoy."
							),
							l.a.createElement(
								"div",
								{ style: { marginBottom: "0.25rem" } },
								"Maintaining this website costs time and money."
							),
							l.a.createElement(
								"div",
								{ style: { marginBottom: "2rem" } },
								"If you like this overview of guitar channels, please consider supporting the project:"
							),
							l.a.createElement(
								"nav",
								{ className: "level", style: { marginBottom: "1rem" } },
								l.a.createElement(
									"div",
									{ className: "level-item has-text-centered" },
									l.a.createElement(
										"a",
										{
											href: "https://www.patreon.com/bePatron?u=2839847",
											target: "_blank",
											className: "button is-danger is-rounded is-medium",
											onClick: function () {
												s("User", "Click Patreon", "SponsorModal");
											}
										},
										l.a.createElement("i", { className: "fab fa-patreon fa-fw" }),
										" Become a patron"
									)
								),
								l.a.createElement(
									"div",
									{ className: "level-item has-text-centered" },
									l.a.createElement(
										"a",
										{
											href: "https://paypal.me/guitarchannels",
											target: "_blank",
											className: "button is-info is-rounded is-medium",
											onClick: function () {
												s("User", "Click PayPal", "SponsorModal");
											}
										},
										l.a.createElement("i", { className: "fab fa-paypal fa-fw" }),
										"PayPal donation"
									)
								)
							)
						)
					)
				);
			},
			Ut = function () {
				var e = Object(n.useState)(!1),
					t = e[0],
					a = e[1],
					r = Object(n.useState)(0),
					s = r[0],
					i = r[1];
				return (
					Object(n.useEffect)(function () {
						var e = function (e) {
							i(e.target.documentElement.scrollTop);
						};
						return (
							window.addEventListener("scroll", e),
							function () {
								return window.removeEventListener("scroll", e);
							}
						);
					}, []),
					Object(n.useEffect)(
						function () {
							s > screen.availHeight && !t && a(!0), s <= screen.availHeight && t && a(!1);
						},
						[s, t]
					),
					t
						? l.a.createElement(
								"button",
								{
									className: "button is-large is-light is-rounded back-up is-hidden-mobile",
									title: "Scroll up",
									onClick: function () {
										window.scrollTo(0, 0), a(!1);
									}
								},
								l.a.createElement(
									"span",
									{ className: "icon is-medium" },
									l.a.createElement("i", { className: "fas fa-arrow-up" })
								)
						  )
						: null
				);
			};
		var $t = function () {
				return (
					(function () {
						var e = Object(o.useLocation)();
						l.a.useEffect(function () {
							B.init();
						}, []),
							l.a.useEffect(
								function () {
									var t = e.pathname + e.search;
									console.log(t), B.sendPageview(t);
								},
								[e]
							);
					})(),
					null
				);
			},
			Lt = function () {
				return (Lt =
					Object.assign ||
					function (e) {
						for (var t, a = 1, n = arguments.length; a < n; a++)
							for (var l in (t = arguments[a]))
								Object.prototype.hasOwnProperty.call(t, l) && (e[l] = t[l]);
						return e;
					}).apply(this, arguments);
			},
			Gt = d.a.create({ withCredentials: !0 });
		function qt() {
			var e = u()(h() + "/api/me/subscriptions", { useCache: !1 })[0],
				t = e.data,
				r = e.loading,
				s = e.error,
				i = Object(n.useContext)(C.Context);
			return (
				Object(n.useEffect)(
					function () {
						r ||
							!t ||
							s ||
							0 !== i.state.subscriptions.length ||
							i.dispatch(Lt(Lt({}, i.state), { type: w.SET_SUBSCRIPTIONS, subscriptions: t }));
					},
					[t]
				),
				Object(n.useEffect)(
					function () {
						var e, a;
						t && !s && i.dispatch(Lt(Lt({}, i.state), { type: w.SET_LOGGED_IN, loggedIn: !0 })),
							401 ===
								(null === (a = null === (e = s) || void 0 === e ? void 0 : e.response) ||
								void 0 === a
									? void 0
									: a.status) &&
								i.dispatch(Lt(Lt({}, i.state), { type: w.SET_LOGGED_IN, loggedIn: !1 }));
					},
					[s, t]
				),
				l.a.createElement(
					o.HashRouter,
					null,
					l.a.createElement($t, null),
					l.a.createElement(_t, null),
					l.a.createElement(At, null),
					l.a.createElement(it, null),
					l.a.createElement(Tt, null),
					l.a.createElement(Pt, null),
					l.a.createElement(
						"section",
						{ className: "section main-section" },
						l.a.createElement(
							"div",
							{ className: "container" },
							l.a.createElement(
								"div",
								{ className: "columns" },
								l.a.createElement(
									"div",
									{ className: "column is-one-quarter" },
									l.a.createElement(dt, null)
								),
								l.a.createElement(
									"div",
									{ className: "column" },
									l.a.createElement(
										o.Switch,
										null,
										l.a.createElement(o.Route, { exact: !0, path: "/", component: ie }),
										l.a.createElement(o.Route, {
											exact: !0,
											path: "/by-:sortBy",
											component: ie
										}),
										l.a.createElement(o.Route, {
											exact: !0,
											path: "/channel/:id",
											component: qe
										}),
										l.a.createElement(o.Route, {
											exact: !0,
											path: "/channel/:id/:currentPage",
											component: qe
										}),
										l.a.createElement(o.Route, {
											exact: !0,
											path: "/search/:query",
											component: Ye
										}),
										l.a.createElement(o.Route, {
											exact: !0,
											path: "/topics",
											component: Xe
										}),
										l.a.createElement(o.Route, {
											exact: !0,
											path: "/topics/:id",
											component: et
										}),
										l.a.createElement(o.Route, {
											exact: !0,
											path: "/contributions",
											component: tt
										}),
										l.a.createElement(o.Route, {
											exact: !0,
											path: "/support-us",
											component: at
										}),
										l.a.createElement(o.Route, {
											exact: !0,
											path: "/how-it-works",
											component: nt
										}),
										l.a.createElement(o.Route, {
											exact: !0,
											path: "/imprint",
											component: lt
										}),
										l.a.createElement(o.Route, {
											exact: !0,
											path: "/privacy",
											component: rt
										}),
										l.a.createElement(o.Route, {
											exact: !0,
											path: "/suggest",
											component: Dt
										})
									)
								)
							)
						)
					),
					l.a.createElement(
						"footer",
						{ className: "footer" },
						l.a.createElement(
							"div",
							{ className: "content has-text-centered" },
							l.a.createElement(
								"p",
								null,
								l.a.createElement(
									o.Link,
									{ className: "has-text-grey-light", to: "/imprint" },
									"Imprint"
								),
								" ",
								"·",
								" ",
								l.a.createElement(
									o.Link,
									{ className: "has-text-grey-light", to: "/privacy" },
									"Privacy Policy"
								),
								" ",
								"·",
								" ",
								l.a.createElement(
									"a",
									{
										className: "has-text-grey-light",
										target: "_blank",
										href: "https://github.com/guitarchannels"
									},
									l.a.createElement("i", { className: "fas fa-code" }),
									" on GitHub"
								)
							),
							l.a.createElement(
								"p",
								{ className: "has-text-grey-light" },
								l.a.createElement(
									"small",
									null,
									"v",
									f.version,
									" · made with ❤ in Germany & Sweden"
								)
							),
							l.a.createElement(
								"p",
								null,
								l.a.createElement("img", {
									width: "80",
									className: "greyscale",
									src: a("./src/static/img/logo.svg")
								})
							)
						)
					),
					l.a.createElement(Ut, null)
				)
			);
		}
		Object(c.configure)({ axios: Gt });
		a("./src/App.css");
		function zt() {
			return l.a.createElement(C.ContextProvider, null, l.a.createElement(qt, null));
		}
		var Bt = a("./node_modules/apollo-client/bundle.umd.js"),
			Ft = a.n(Bt),
			Mt = a("./node_modules/apollo-link-batch-http/lib/index.js"),
			Rt = a("./node_modules/apollo-cache-inmemory/lib/bundle.cjs.js"),
			Ht = a("./node_modules/apollo-cache-persist/bundle.umd.js"),
			Vt =
				(a("./node_modules/bulma/css/bulma.css"),
				a("./node_modules/animate.css/animate.css"),
				function (e, t) {
					var a,
						n,
						l,
						r,
						s = {
							label: 0,
							sent: function () {
								if (1 & l[0]) throw l[1];
								return l[1];
							},
							trys: [],
							ops: []
						};
					return (
						(r = { next: i(0), throw: i(1), return: i(2) }),
						"function" == typeof Symbol &&
							(r[Symbol.iterator] = function () {
								return this;
							}),
						r
					);
					function i(r) {
						return function (i) {
							return (function (r) {
								if (a) throw new TypeError("Generator is already executing.");
								for (; s; )
									try {
										if (
											((a = 1),
											n &&
												(l =
													2 & r[0]
														? n.return
														: r[0]
														? n.throw || ((l = n.return) && l.call(n), 0)
														: n.next) &&
												!(l = l.call(n, r[1])).done)
										)
											return l;
										switch (((n = 0), l && (r = [2 & r[0], l.value]), r[0])) {
											case 0:
											case 1:
												l = r;
												break;
											case 4:
												return s.label++, { value: r[1], done: !1 };
											case 5:
												s.label++, (n = r[1]), (r = [0]);
												continue;
											case 7:
												(r = s.ops.pop()), s.trys.pop();
												continue;
											default:
												if (
													!(l = (l = s.trys).length > 0 && l[l.length - 1]) &&
													(6 === r[0] || 2 === r[0])
												) {
													s = 0;
													continue;
												}
												if (3 === r[0] && (!l || (r[1] > l[0] && r[1] < l[3]))) {
													s.label = r[1];
													break;
												}
												if (6 === r[0] && s.label < l[1]) {
													(s.label = l[1]), (l = r);
													break;
												}
												if (l && s.label < l[2]) {
													(s.label = l[2]), s.ops.push(r);
													break;
												}
												l[2] && s.ops.pop(), s.trys.pop();
												continue;
										}
										r = t.call(e, s);
									} catch (e) {
										(r = [6, e]), (n = 0);
									} finally {
										a = l = 0;
									}
								if (5 & r[0]) throw r[1];
								return { value: r[0] ? r[1] : void 0, done: !0 };
							})([r, i]);
						};
					}
				});
		(function (e, t, a, n) {
			new (a || (a = Promise))(function (l, r) {
				function s(e) {
					try {
						o(n.next(e));
					} catch (e) {
						r(e);
					}
				}
				function i(e) {
					try {
						o(n.throw(e));
					} catch (e) {
						r(e);
					}
				}
				function o(e) {
					var t;
					e.done
						? l(e.value)
						: ((t = e.value),
						  t instanceof a
								? t
								: new a(function (e) {
										e(t);
								  })).then(s, i);
				}
				o((n = n.apply(e, t || [])).next());
			});
		})(void 0, void 0, void 0, function () {
			var e, t, a, l;
			return Vt(this, function (r) {
				switch (r.label) {
					case 0:
						return (
							(e = new Mt.BatchHttpLink({
								uri:
									("localhost" === location.hostname || "127.0.0.1" === location.hostname
										? "http://localhost:5000"
										: "https://data.guitar-channels.com") + "/api/graphql",
								batchInterval: 500,
								credentials: "include"
							})),
							(t = new Rt.InMemoryCache()),
							[
								4,
								Object(Ht.persistCache)({ cache: t, storage: window.localStorage, debug: !1 })
							]
						);
					case 1:
						return (
							r.sent(),
							(a = new Ft.a({ link: e, cache: t })),
							(l = document.getElementById("root")),
							(o = zt),
							s.a.render(
								n.createElement(
									i.AppContainer,
									null,
									n.createElement(g.ApolloProvider, { client: a }, n.createElement(o, null))
								),
								l
							),
							[2]
						);
				}
				var o;
			});
		});
	},
	"./src/pages/SupportUs/styles.css": function (e, t, a) {
		var n = a("./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),
			l = a(
				"./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/pages/SupportUs/styles.css"
			);
		"string" == typeof (l = l.__esModule ? l.default : l) && (l = [[e.i, l, ""]]);
		var r = { insert: "head", singleton: !1 },
			s = (n(e.i, l, r), l.locals ? l.locals : {});
		e.exports = s;
	},
	"./src/static/img/logo.svg": function (e, t, a) {
		e.exports = a.p + "d5dd482d600d71b9fe5535e60c8f87f5.svg";
	},
	"./src/static/img/patreon.jpg": function (e, t, a) {
		e.exports = a.p + "88b321e13800a8f0f5067d5d1f62ad15.jpg";
	},
	"./src/static/img/paypal.png": function (e, t, a) {
		e.exports = a.p + "f3eca2ee2deac2f23afbbeca65a1975d.png";
	},
	"./src/static/img/twoaboardtuuli@2x.jpg": function (e, t, a) {
		e.exports = a.p + "84b6c5dd58340bd7379a6330b488eaa1.jpg";
	},
	0: function (e, t, a) {
		e.exports = a("./src/index.tsx");
	}
});
