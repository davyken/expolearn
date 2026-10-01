import { c as require_jsx_runtime } from "../_libs/@radix-ui/react-accordion+[...].mjs";
import { g as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { N as ArrowRight, l as Plane, r as Target, v as Languages, x as House, y as Landmark } from "../_libs/lucide-react.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/ServiceCard-4QpeXXaj.js
var import_jsx_runtime = require_jsx_runtime();
var ICONS = {
	home: House,
	target: Target,
	languages: Languages,
	landmark: Landmark,
	plane: Plane
};
function ServiceCard({ service }) {
	const Icon = ICONS[service.icon];
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
		to: "/services/$slug",
		params: { slug: service.slug },
		className: "group flex h-full flex-col rounded-3xl border border-border bg-card p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-card",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "flex size-11 items-center justify-center rounded-2xl bg-secondary text-primary-dark transition-colors duration-300 group-hover:bg-primary group-hover:text-primary-foreground",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, {
					"aria-hidden": "true",
					className: "size-5"
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
				className: "mt-5 text-base font-bold",
				children: service.title
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "text-balance-p mt-2.5 flex-1 text-sm text-muted-foreground",
				children: service.shortDescription
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
				className: "mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-primary-dark",
				children: ["Découvrir", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, {
					"aria-hidden": "true",
					className: "size-4 transition-transform group-hover:translate-x-0.5"
				})]
			})
		]
	});
}
//#endregion
export { ServiceCard as t };
