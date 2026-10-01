import { c as require_jsx_runtime } from "../_libs/@radix-ui/react-accordion+[...].mjs";
import { r as cn } from "./button-BsdMR-Om.mjs";
import { E as CircleAlert } from "../_libs/lucide-react.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/form-field-BJE0JYsI.js
var import_jsx_runtime = require_jsx_runtime();
function Field({ label, htmlFor, error, hint, required, children, className }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: cn("space-y-2", className),
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
				htmlFor,
				className: "block text-sm font-semibold text-foreground",
				children: [label, required ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "text-primary-dark",
					children: " *"
				}) : null]
			}),
			children,
			hint && !error ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "text-xs text-muted-foreground",
				children: hint
			}) : null,
			error ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
				id: `${htmlFor}-error`,
				role: "alert",
				className: "flex items-start gap-1.5 text-xs font-medium text-destructive",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CircleAlert, {
					"aria-hidden": "true",
					className: "mt-px size-3.5 shrink-0"
				}), error]
			}) : null
		]
	});
}
var fieldClass = "w-full rounded-xl border border-input bg-background px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground/70 transition-all duration-200 focus:border-primary focus:ring-4 focus:ring-ring/15 focus:outline-none";
//#endregion
export { fieldClass as n, Field as t };
