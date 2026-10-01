globalThis.__nitro_main__ = import.meta.url;
import { i as HTTPError, n as defineLazyEventHandler, t as H3Core } from "./_libs/h3+rou3+srvx.mjs";
import { t as HookableCore } from "./_libs/hookable.mjs";
import { r as FastResponse } from "./_libs/h3-v2+rou3+srvx.mjs";
//#region #nitro-vite-setup
function lazyService(loader) {
	let promise, mod;
	return { fetch(req) {
		if (mod) return mod.fetch(req);
		if (!promise) promise = loader().then((_mod) => mod = _mod.default || _mod);
		return promise.then((mod) => mod.fetch(req));
	} };
}
var services = { ["ssr"]: lazyService(() => import("./_ssr/ssr.mjs")) };
globalThis.__nitro_vite_envs__ = services;
//#endregion
//#region #nitro/virtual/public-assets-data
var public_assets_data_default = {
	"/favicon.svg": {
		"type": "image/svg+xml",
		"etag": "\"ba48-n0ubOLHbxeECkufssCEKL4ntkY4\"",
		"mtime": "2026-10-01T20:53:36.540Z",
		"size": 47688,
		"path": "../public/favicon.svg"
	},
	"/robots.txt": {
		"type": "text/plain; charset=utf-8",
		"etag": "\"a0-CKGXSIe7TSsqDTmGm/nY1t/o5d0\"",
		"mtime": "2026-10-01T20:53:36.539Z",
		"size": 160,
		"path": "../public/robots.txt"
	},
	"/assets/FinalCta-BBIF6IuU.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"bee-iX6rH4CtewxH7TUKdWtU9Kz8AXY\"",
		"mtime": "2026-10-01T20:53:33.432Z",
		"size": 3054,
		"path": "../public/assets/FinalCta-BBIF6IuU.js"
	},
	"/assets/ServiceCard-CAJWqDa4.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"4f1-f0gw2JaNgV3QcTYAiZs6UX2eV/w\"",
		"mtime": "2026-10-01T20:53:33.432Z",
		"size": 1265,
		"path": "../public/assets/ServiceCard-CAJWqDa4.js"
	},
	"/assets/_slug-SWPbDU7L.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"19f5-GboUcI/haJVlmj40jc0IvR8u+OU\"",
		"mtime": "2026-10-01T20:53:33.432Z",
		"size": 6645,
		"path": "../public/assets/_slug-SWPbDU7L.js"
	},
	"/assets/_slug-xBR4qvUw.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"475-2DcpJDjZelJ85yQPciIZODGISuU\"",
		"mtime": "2026-10-01T20:53:33.432Z",
		"size": 1141,
		"path": "../public/assets/_slug-xBR4qvUw.js"
	},
	"/assets/a-propos-C1050Cuy.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"d3c-OmHFqUT33xJyzStnMC3NrhZUhQM\"",
		"mtime": "2026-10-01T20:53:33.433Z",
		"size": 3388,
		"path": "../public/assets/a-propos-C1050Cuy.js"
	},
	"/assets/arrow-right-EBAjmpF7.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"9b-2chggya66/hcMXxoekmkmDJQiF0\"",
		"mtime": "2026-10-01T20:53:33.433Z",
		"size": 155,
		"path": "../public/assets/arrow-right-EBAjmpF7.js"
	},
	"/assets/button-B90FGYjA.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"a320-klcBe0TXF0IPZtd1RCoYK58Ry1Q\"",
		"mtime": "2026-10-01T20:53:33.433Z",
		"size": 41760,
		"path": "../public/assets/button-B90FGYjA.js"
	},
	"/assets/berlin-skyline-oQboN8si.jpg": {
		"type": "image/jpeg",
		"etag": "\"410c3-dNx6VH9X/wzp30SwLl4HVrKOgKo\"",
		"mtime": "2026-10-01T20:53:33.436Z",
		"size": 266435,
		"path": "../public/assets/berlin-skyline-oQboN8si.jpg"
	},
	"/assets/canada-quebec-Wl5KH3--.webp": {
		"type": "image/webp",
		"etag": "\"1d66a-kA3WGcZNcFOn7zASZvcwLtqfuhg\"",
		"mtime": "2026-10-01T20:53:33.437Z",
		"size": 120426,
		"path": "../public/assets/canada-quebec-Wl5KH3--.webp"
	},
	"/assets/canada-moraine-e2HOlRf7.webp": {
		"type": "image/webp",
		"etag": "\"34e62-wZWZOT798o6gQrXy6iC3tspiKuc\"",
		"mtime": "2026-10-01T20:53:33.437Z",
		"size": 216674,
		"path": "../public/assets/canada-moraine-e2HOlRf7.webp"
	},
	"/assets/canada-toronto-CI7KtZjJ.webp": {
		"type": "image/webp",
		"etag": "\"122ec-ceISbGg5gBvzkVhRAY3MVfZ1MoY\"",
		"mtime": "2026-10-01T20:53:33.437Z",
		"size": 74476,
		"path": "../public/assets/canada-toronto-CI7KtZjJ.webp"
	},
	"/assets/circle-check-D6W3j0tT.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"a8-XCpavDMysqduHxK3xi274qYyUEU\"",
		"mtime": "2026-10-01T20:53:33.433Z",
		"size": 168,
		"path": "../public/assets/circle-check-D6W3j0tT.js"
	},
	"/assets/comment-ca-marche-B3GOF4DI.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"6b1-YVBGd/p23/2anTN05yswBT7jzJA\"",
		"mtime": "2026-10-01T20:53:33.433Z",
		"size": 1713,
		"path": "../public/assets/comment-ca-marche-B3GOF4DI.js"
	},
	"/assets/contact-I9789ZCn.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"1667-/ht0pW66RO/9EErE2N8W4RuNvt4\"",
		"mtime": "2026-10-01T20:53:33.433Z",
		"size": 5735,
		"path": "../public/assets/contact-I9789ZCn.js"
	},
	"/assets/canada-vancouver-BzwufZkX.webp": {
		"type": "image/webp",
		"etag": "\"3182e-n7Mccf2Kk5XBT+Bx56vGRzOr9rI\"",
		"mtime": "2026-10-01T20:53:33.437Z",
		"size": 202798,
		"path": "../public/assets/canada-vancouver-BzwufZkX.webp"
	},
	"/assets/cta-buttons-wbsl2Ww1.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"2e1-lhqHYJ/bt2J2fPPNirsLlFkucRw\"",
		"mtime": "2026-10-01T20:53:33.433Z",
		"size": 737,
		"path": "../public/assets/cta-buttons-wbsl2Ww1.js"
	},
	"/assets/faq-bVAIkXTB.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"58ef-6W3rv88OY/WAndMUpHblJuorFoU\"",
		"mtime": "2026-10-01T20:53:33.433Z",
		"size": 22767,
		"path": "../public/assets/faq-bVAIkXTB.js"
	},
	"/assets/cours-allemand-BmS0fs3m.jpg": {
		"type": "image/jpeg",
		"etag": "\"2791b-khhr6wF8u1COU8ysawKTlnT5L4A\"",
		"mtime": "2026-10-01T20:53:33.438Z",
		"size": 162075,
		"path": "../public/assets/cours-allemand-BmS0fs3m.jpg"
	},
	"/assets/cta-takeoff-DvGg_1fK.webp": {
		"type": "image/webp",
		"etag": "\"16e46-OP3ZwF1eZhmUuF4aK7H54ozlVG0\"",
		"mtime": "2026-10-01T20:53:33.438Z",
		"size": 93766,
		"path": "../public/assets/cta-takeoff-DvGg_1fK.webp"
	},
	"/assets/flyer-cours-allemand-LpBqv5-9.jpg": {
		"type": "image/jpeg",
		"etag": "\"2fc5b-e0i+LjP41yULlcEG2+x+422bHzA\"",
		"mtime": "2026-10-01T20:53:33.439Z",
		"size": 195675,
		"path": "../public/assets/flyer-cours-allemand-LpBqv5-9.jpg"
	},
	"/assets/expolearn-logo-BgBy4vcF.png": {
		"type": "image/png",
		"etag": "\"6b1f5-1OP4RJxoUtoKT4YExyUp4JUcQXg\"",
		"mtime": "2026-10-01T20:53:33.439Z",
		"size": 438773,
		"path": "../public/assets/expolearn-logo-BgBy4vcF.png"
	},
	"/favicon.ico": {
		"type": "image/vnd.microsoft.icon",
		"etag": "\"2183-1f4G1pt6vwx1KgTmrRVSt3nUVos\"",
		"mtime": "2026-10-01T20:53:36.539Z",
		"size": 8579,
		"path": "../public/favicon.ico"
	},
	"/hero-video.mp4": {
		"type": "video/mp4",
		"etag": "\"103d68-Ic0ONn0Z46vmULpdOyxaS8rdfNY\"",
		"mtime": "2026-10-01T20:53:36.543Z",
		"size": 1064296,
		"path": "../public/hero-video.mp4"
	},
	"/assets/flyer-cours-anglais-CR96Icmj.jpg": {
		"type": "image/jpeg",
		"etag": "\"2c581-Y6jfFjKDX7X1YOhuzuuH0c2osyc\"",
		"mtime": "2026-10-01T20:53:33.440Z",
		"size": 181633,
		"path": "../public/assets/flyer-cours-anglais-CR96Icmj.jpg"
	},
	"/assets/form-field-B3thy03P.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"810b-FhtZnK7/CyFAn8sSXhcZvl1GPHk\"",
		"mtime": "2026-10-01T20:53:33.434Z",
		"size": 33035,
		"path": "../public/assets/form-field-B3thy03P.js"
	},
	"/assets/hero-wing-FeZqUtnD.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"37-LVyS+HKg3QPMSV3d/8t7OWfgjew\"",
		"mtime": "2026-10-01T20:53:33.434Z",
		"size": 55,
		"path": "../public/assets/hero-wing-FeZqUtnD.js"
	},
	"/assets/hero-wing-ToLrftfd.webp": {
		"type": "image/webp",
		"etag": "\"104c0-TK+1zx61wmAU0iktI5JcdI95db0\"",
		"mtime": "2026-10-01T20:53:33.441Z",
		"size": 66752,
		"path": "../public/assets/hero-wing-ToLrftfd.webp"
	},
	"/assets/flyer-soutien-scolaire-CI8lD0xe.jpg": {
		"type": "image/jpeg",
		"etag": "\"212fa-fUAvUF8hp3bSEWhZEyQ7rkcDthE\"",
		"mtime": "2026-10-01T20:53:33.440Z",
		"size": 135930,
		"path": "../public/assets/flyer-soutien-scolaire-CI8lD0xe.jpg"
	},
	"/assets/flyer-visa-etudiant-BXM_CwEJ.jpg": {
		"type": "image/jpeg",
		"etag": "\"201c3-Ji25/qo9Jq3waVczq/fdyw7Am34\"",
		"mtime": "2026-10-01T20:53:33.441Z",
		"size": 131523,
		"path": "../public/assets/flyer-visa-etudiant-BXM_CwEJ.jpg"
	},
	"/assets/inscription-C8ZTNQUg.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"32ea-bEUE7BMvQZbPDaKQfeRr6+lN/rY\"",
		"mtime": "2026-10-01T20:53:33.434Z",
		"size": 13034,
		"path": "../public/assets/inscription-C8ZTNQUg.js"
	},
	"/assets/landmark-W9kWjRtc.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"26a-HUaZb8kCuhwX3Nv030RhL+WEM5g\"",
		"mtime": "2026-10-01T20:53:33.434Z",
		"size": 618,
		"path": "../public/assets/landmark-W9kWjRtc.js"
	},
	"/assets/link-DNijvEcg.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"68ae-u6bsr/RH2NL8XEcCCs9USU+xLVQ\"",
		"mtime": "2026-10-01T20:53:33.434Z",
		"size": 26798,
		"path": "../public/assets/link-DNijvEcg.js"
	},
	"/assets/page-hero-CReQu7ha.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"460-bbA6lhIAi3dAnMvvwBcTtcewSu8\"",
		"mtime": "2026-10-01T20:53:33.435Z",
		"size": 1120,
		"path": "../public/assets/page-hero-CReQu7ha.js"
	},
	"/assets/plane-window-BzN1B0Gz.webp": {
		"type": "image/webp",
		"etag": "\"820c-molI05mOCa+n7AFs3jtYoxmvfo0\"",
		"mtime": "2026-10-01T20:53:33.442Z",
		"size": 33292,
		"path": "../public/assets/plane-window-BzN1B0Gz.webp"
	},
	"/assets/preload-helper-CdkdjnoX.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"1860-cnnb1Iuvh5Skh1gAjbsHUUTVcnU\"",
		"mtime": "2026-10-01T20:53:33.435Z",
		"size": 6240,
		"path": "../public/assets/preload-helper-CdkdjnoX.js"
	},
	"/assets/reveal-BGF_U1pO.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"385-Hjm2zCXt8MI85t1HoPsqqdgsdAg\"",
		"mtime": "2026-10-01T20:53:33.435Z",
		"size": 901,
		"path": "../public/assets/reveal-BGF_U1pO.js"
	},
	"/assets/index-B_V3s7Ak.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"50d9a-MKDk+NT1vj4m9JTRm76oN9mLt78\"",
		"mtime": "2026-10-01T20:53:33.430Z",
		"size": 331162,
		"path": "../public/assets/index-B_V3s7Ak.js"
	},
	"/assets/parents-BwwjPBFN.jpg": {
		"type": "image/jpeg",
		"etag": "\"2b82a-/TmW5jmfiF0NXVEHIULA1LpCB0M\"",
		"mtime": "2026-10-01T20:53:33.441Z",
		"size": 178218,
		"path": "../public/assets/parents-BwwjPBFN.jpg"
	},
	"/assets/routes-jobZQjrz.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"56ae-lC6FaOHi/6zSKtVVAtYhQqigRwA\"",
		"mtime": "2026-10-01T20:53:33.435Z",
		"size": 22190,
		"path": "../public/assets/routes-jobZQjrz.js"
	},
	"/assets/section-B_aIkOjX.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"4c5-moPiVw/NDT75nwUmiPE73eF8Yg8\"",
		"mtime": "2026-10-01T20:53:33.435Z",
		"size": 1221,
		"path": "../public/assets/section-B_aIkOjX.js"
	},
	"/assets/services-4v2HvW2s.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"125b-NixBX//GVj0hclwucP+fJn3z69g\"",
		"mtime": "2026-10-01T20:53:33.435Z",
		"size": 4699,
		"path": "../public/assets/services-4v2HvW2s.js"
	},
	"/assets/services-DfWdtwvI.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"39a-vL7UiKuLtT0+nzKLKw6LYPJGanI\"",
		"mtime": "2026-10-01T20:53:33.436Z",
		"size": 922,
		"path": "../public/assets/services-DfWdtwvI.js"
	},
	"/assets/site-BD7UE8Kt.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"7b3-fKkkfRVu/Jy/+vhhc2fV+L5j0cY\"",
		"mtime": "2026-10-01T20:53:33.436Z",
		"size": 1971,
		"path": "../public/assets/site-BD7UE8Kt.js"
	},
	"/assets/preparation-concours-U1ILbRr7.jpg": {
		"type": "image/jpeg",
		"etag": "\"3d185-IsvUzCbYGlrgZG8bjBKE+tA3rHw\"",
		"mtime": "2026-10-01T20:53:33.442Z",
		"size": 250245,
		"path": "../public/assets/preparation-concours-U1ILbRr7.jpg"
	},
	"/assets/students-BDCs09V1.jpg": {
		"type": "image/jpeg",
		"etag": "\"1fb12-yysQtrtgHE+vkDz/W3bWxqQ5ZCI\"",
		"mtime": "2026-10-01T20:53:33.442Z",
		"size": 129810,
		"path": "../public/assets/students-BDCs09V1.jpg"
	},
	"/assets/styles-DbYw1nrx.css": {
		"type": "text/css; charset=utf-8",
		"etag": "\"1b37e-lx2nNs4MVxGiY9tUb+Vyqo1x7A0\"",
		"mtime": "2026-10-01T20:53:33.443Z",
		"size": 111486,
		"path": "../public/assets/styles-DbYw1nrx.css"
	},
	"/assets/target-DjWG0gsG.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"2d2-zucLIadwqTnM34jeu4LQMUC5jyY\"",
		"mtime": "2026-10-01T20:53:33.436Z",
		"size": 722,
		"path": "../public/assets/target-DjWG0gsG.js"
	},
	"/assets/types-BLvZEIXI.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"dd15-qszyFto7EvnYTtqCiVyeYsd/B2U\"",
		"mtime": "2026-10-01T20:53:33.436Z",
		"size": 56597,
		"path": "../public/assets/types-BLvZEIXI.js"
	},
	"/assets/visa-etudiant-DMGbnmTb.jpg": {
		"type": "image/jpeg",
		"etag": "\"330a7-nRqbsizggHf1bezY5sfKSCCVCL4\"",
		"mtime": "2026-10-01T20:53:33.443Z",
		"size": 209063,
		"path": "../public/assets/visa-etudiant-DMGbnmTb.jpg"
	}
};
//#endregion
//#region #nitro/virtual/public-assets
var publicAssetBases = {};
function isPublicAssetURL(id = "") {
	if (public_assets_data_default[id]) return true;
	for (const base in publicAssetBases) if (id.startsWith(base)) return true;
	return false;
}
//#endregion
//#region node_modules/nitro/dist/runtime/internal/route-rules.mjs
var headers = ((m) => function headersRouteRule(event) {
	for (const [key, value] of Object.entries(m.options || {})) event.res.headers.set(key, value);
});
//#endregion
//#region #nitro/virtual/routing
var findRouteRules = /* @__PURE__ */ (() => {
	const $0 = [{
		name: "headers",
		route: "/assets/**",
		handler: headers,
		options: { "cache-control": "public, max-age=31536000, immutable" }
	}];
	return (m, p) => {
		let r = [];
		if (p.charCodeAt(p.length - 1) === 47) p = p.slice(0, -1) || "/";
		let s = p.split("/");
		if (s.length > 1) {
			if (s[1] === "assets") r.unshift({
				data: $0,
				params: { "_": s.slice(2).join("/") }
			});
		}
		return r;
	};
})();
var _lazy_CKZcvJ = defineLazyEventHandler(() => import("./_chunks/ssr-renderer.mjs"));
var findRoute = /* @__PURE__ */ (() => {
	const data = {
		route: "/**",
		handler: _lazy_CKZcvJ
	};
	return ((_m, p) => {
		return {
			data,
			params: { "_": p.slice(1) }
		};
	});
})();
[].filter(Boolean);
//#endregion
//#region node_modules/nitro/dist/runtime/internal/error/prod.mjs
var errorHandler = (error, event) => {
	const res = defaultHandler(error, event);
	return new FastResponse(typeof res.body === "string" ? res.body : JSON.stringify(res.body, null, 2), res);
};
function defaultHandler(error, event) {
	const unhandled = error.unhandled ?? !HTTPError.isError(error);
	const { status = 500, statusText = "" } = unhandled ? {} : error;
	if (status === 404) {
		const url = event.url || new URL(event.req.url);
		const baseURL = "/";
		if (/^\/[^/]/.test(baseURL) && !url.pathname.startsWith(baseURL)) return {
			status: 302,
			headers: new Headers({ location: `${baseURL}${url.pathname.slice(1)}${url.search}` })
		};
	}
	const headers = new Headers(unhandled ? {} : error.headers);
	headers.set("content-type", "application/json; charset=utf-8");
	return {
		status,
		statusText,
		headers,
		body: {
			error: true,
			...unhandled ? {
				status,
				unhandled: true
			} : typeof error.toJSON === "function" ? error.toJSON() : {
				status,
				statusText,
				message: error.message
			}
		}
	};
}
//#endregion
//#region #nitro/virtual/error-handler
var errorHandlers = [errorHandler];
async function error_handler_default(error, event) {
	for (const handler of errorHandlers) try {
		const response = await handler(error, event, { defaultHandler });
		if (response) return response;
	} catch (error) {
		console.error(error);
	}
}
//#endregion
//#region #nitro/virtual/app
function createNitroApp() {
	const captureError = (error, errorCtx) => {
		if (errorCtx?.event) {
			const errors = errorCtx.event.req.context?.nitro?.errors;
			if (errors) errors.push({
				error,
				context: errorCtx
			});
		}
	};
	const h3App = createH3App({ onError(error, event) {
		return error_handler_default(error, event);
	} });
	let appHandler = (req) => {
		req.context ||= {};
		req.context.nitro = req.context.nitro || { errors: [] };
		return h3App.fetch(req);
	};
	return {
		fetch: appHandler,
		h3: h3App,
		hooks: void 0,
		captureError
	};
}
function createH3App(config) {
	const h3App = new H3Core(config);
	h3App["~findRoute"] = (event) => findRoute(event.req.method, event.url.pathname);
	h3App["~getMiddleware"] = (event, route) => {
		const pathname = event.url.pathname;
		const method = event.req.method;
		const middleware = [];
		const routeRules = getRouteRules(method, pathname);
		event.context.routeRules = routeRules?.routeRules;
		if (routeRules?.routeRuleMiddleware.length) middleware.push(...routeRules.routeRuleMiddleware);
		if (route?.data?.middleware?.length) middleware.push(...route.data.middleware);
		return middleware;
	};
	return h3App;
}
//#endregion
//#region node_modules/nitro/dist/runtime/internal/app.mjs
var APP_ID = "default";
function useNitroApp() {
	let instance = useNitroApp._instance;
	if (instance) return instance;
	instance = useNitroApp._instance = createNitroApp();
	globalThis.__nitro__ = globalThis.__nitro__ || {};
	globalThis.__nitro__[APP_ID] = instance;
	return instance;
}
function useNitroHooks() {
	const nitroApp = useNitroApp();
	const hooks = nitroApp.hooks;
	if (hooks) return hooks;
	return nitroApp.hooks = new HookableCore();
}
function getRouteRules(method, pathname) {
	const m = findRouteRules(method, pathname);
	if (!m?.length) return { routeRuleMiddleware: [] };
	const routeRules = {};
	for (const layer of m) for (const rule of layer.data) {
		const currentRule = routeRules[rule.name];
		if (currentRule) {
			if (rule.options === false) {
				delete routeRules[rule.name];
				continue;
			}
			if (typeof currentRule.options === "object" && typeof rule.options === "object") currentRule.options = {
				...currentRule.options,
				...rule.options
			};
			else currentRule.options = rule.options;
			currentRule.route = rule.route;
			currentRule.params = {
				...currentRule.params,
				...layer.params
			};
		} else if (rule.options !== false) routeRules[rule.name] = {
			...rule,
			params: layer.params
		};
	}
	const middleware = [];
	const orderedRules = Object.values(routeRules).sort((a, b) => (a.handler?.order || 0) - (b.handler?.order || 0));
	for (const rule of orderedRules) {
		if (rule.options === false || !rule.handler) continue;
		middleware.push(rule.handler(rule));
	}
	return {
		routeRules,
		routeRuleMiddleware: middleware
	};
}
//#endregion
//#region node_modules/nitro/dist/presets/cloudflare/runtime/_module-handler.mjs
function createHandler(hooks) {
	const nitroApp = useNitroApp();
	const nitroHooks = useNitroHooks();
	return {
		async fetch(request, env, context) {
			globalThis.__env__ = env;
			augmentReq(request, {
				env,
				context
			});
			const ctxExt = {};
			const url = new URL(request.url);
			if (hooks.fetch) {
				const res = await hooks.fetch(request, env, context, url, ctxExt);
				if (res) return res;
			}
			return await nitroApp.fetch(request);
		},
		scheduled(controller, env, context) {
			globalThis.__env__ = env;
			context.waitUntil(nitroHooks.callHook("cloudflare:scheduled", {
				controller,
				env,
				context
			}) || Promise.resolve());
		},
		email(message, env, context) {
			globalThis.__env__ = env;
			context.waitUntil(nitroHooks.callHook("cloudflare:email", {
				message,
				event: message,
				env,
				context
			}) || Promise.resolve());
		},
		queue(batch, env, context) {
			globalThis.__env__ = env;
			context.waitUntil(nitroHooks.callHook("cloudflare:queue", {
				batch,
				event: batch,
				env,
				context
			}) || Promise.resolve());
		},
		tail(traces, env, context) {
			globalThis.__env__ = env;
			context.waitUntil(nitroHooks.callHook("cloudflare:tail", {
				traces,
				env,
				context
			}) || Promise.resolve());
		},
		trace(traces, env, context) {
			globalThis.__env__ = env;
			context.waitUntil(nitroHooks.callHook("cloudflare:trace", {
				traces,
				env,
				context
			}) || Promise.resolve());
		}
	};
}
function augmentReq(cfReq, ctx) {
	const req = cfReq;
	req.ip = cfReq.headers.get("cf-connecting-ip") || void 0;
	req.runtime ??= { name: "cloudflare" };
	req.runtime.cloudflare = {
		...req.runtime.cloudflare,
		...ctx
	};
	req.waitUntil = ctx.context?.waitUntil.bind(ctx.context);
}
//#endregion
//#region node_modules/nitro/dist/presets/cloudflare/runtime/cloudflare-module.mjs
var cloudflare_module_default = createHandler({ fetch(cfRequest, env, context, url) {
	if (env.ASSETS && isPublicAssetURL(url.pathname)) return env.ASSETS.fetch(cfRequest);
} });
//#endregion
export { cloudflare_module_default as default };
