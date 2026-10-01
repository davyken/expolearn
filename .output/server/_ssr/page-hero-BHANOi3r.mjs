import { c as require_jsx_runtime } from "../_libs/@radix-ui/react-accordion+[...].mjs";
import { t as Eyebrow } from "./section-BXjgiglf.mjs";
import { t as hero_wing_default } from "./hero-wing-549yQK3d.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/page-hero-BHANOi3r.js
var import_jsx_runtime = require_jsx_runtime();
function PageHero({ eyebrow, title, description, children, as: As = "h1" }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		className: "under-header relative flex min-h-[52vh] items-center justify-center overflow-hidden bg-night text-night-foreground sm:min-h-[56vh]",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
				src: hero_wing_default,
				alt: "",
				"aria-hidden": "true",
				className: "animate-ken-burns absolute inset-0 h-full w-full object-cover"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				"aria-hidden": "true",
				className: "absolute inset-0 bg-gradient-to-b from-night/80 via-night/60 to-night/95"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "container-page relative animate-rise py-16 text-center sm:py-20",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Eyebrow, {
						className: "bg-white/10 text-night-foreground ring-1 ring-white/20 backdrop-blur",
						children: eyebrow
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(As, {
						className: "mx-auto mt-6 max-w-3xl text-4xl leading-[1.02] font-extrabold sm:text-5xl lg:text-6xl",
						children: title
					}),
					description ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-balance-p mx-auto mt-5 max-w-xl text-base text-night-foreground/80 sm:text-lg",
						children: description
					}) : null,
					children
				]
			})
		]
	});
}
//#endregion
export { PageHero as t };
