import { c as require_jsx_runtime } from "../_libs/@radix-ui/react-accordion+[...].mjs";
import { r as cn, t as Button } from "./button-BsdMR-Om.mjs";
import { g as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { N as ArrowRight } from "../_libs/lucide-react.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/cta-buttons-CerNq2yP.js
var import_jsx_runtime = require_jsx_runtime();
function CtaButtons({ className, size = "lg", variantSecondary = "outline", tone = "light" }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: cn("flex flex-col gap-3 sm:flex-row", className),
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
			asChild: true,
			size,
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
				to: "/inscription",
				children: ["S'inscrire", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { "aria-hidden": "true" })]
			})
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
			asChild: true,
			size,
			variant: variantSecondary,
			className: tone === "dark" ? "border-primary-foreground/40 bg-transparent text-primary-foreground hover:border-primary-foreground hover:bg-primary-foreground/10" : void 0,
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
				to: "/contact",
				children: "Nous contacter"
			})
		})]
	});
}
//#endregion
export { CtaButtons as t };
