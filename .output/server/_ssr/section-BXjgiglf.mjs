import { c as require_jsx_runtime } from "../_libs/@radix-ui/react-accordion+[...].mjs";
import { r as cn } from "./button-BsdMR-Om.mjs";
import { n as useInView } from "./reveal-BuUuG7ND.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/section-BXjgiglf.js
var import_jsx_runtime = require_jsx_runtime();
function Section({ children, className, tone = "default", id }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		id,
		className: cn("py-14 sm:py-20 lg:py-24", {
			default: "bg-background",
			muted: "bg-muted",
			tint: "bg-secondary",
			dark: "bg-primary-dark text-primary-foreground"
		}[tone], className),
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "container-page",
			children
		})
	});
}
function Eyebrow({ children, className }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
		className: cn("inline-flex items-center rounded-full bg-secondary px-3 py-1 text-xs font-semibold tracking-wide text-secondary-foreground uppercase", className),
		children
	});
}
function SectionHeading({ eyebrow, title, description, align = "left", as: As = "h2", className }) {
	const { ref, inView } = useInView();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		ref,
		className: cn("max-w-2xl transition-all duration-700 ease-out", inView ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0", align === "center" && "mx-auto text-center", className),
		children: [
			eyebrow ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Eyebrow, {
				className: "mb-4",
				children: eyebrow
			}) : null,
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(As, {
				className: "text-2xl leading-tight font-bold sm:text-3xl lg:text-4xl",
				children: title
			}),
			description ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "text-balance-p mt-4 text-base text-muted-foreground sm:text-lg",
				children: description
			}) : null
		]
	});
}
//#endregion
export { Section as n, SectionHeading as r, Eyebrow as t };
