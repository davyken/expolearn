import { n as __toESM } from "../_runtime.mjs";
import { r as require_react } from "../_libs/@hookform/resolvers+[...].mjs";
import { c as require_jsx_runtime } from "../_libs/@radix-ui/react-accordion+[...].mjs";
import { r as cn } from "./button-BsdMR-Om.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/reveal-BuUuG7ND.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
/**
* Tracks whether an element is in the viewport, toggling both ways so the
* caller can replay an entrance animation on every scroll pass (down or up).
*/
function useInView(options) {
	const ref = (0, import_react.useRef)(null);
	const [inView, setInView] = (0, import_react.useState)(false);
	(0, import_react.useEffect)(() => {
		const node = ref.current;
		if (!node) return;
		if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
			setInView(true);
			return;
		}
		const observer = new IntersectionObserver((entries) => setInView(entries[0]?.isIntersecting ?? false), {
			threshold: .2,
			rootMargin: "-8% 0px -8% 0px",
			...options
		});
		observer.observe(node);
		return () => observer.disconnect();
	}, []);
	return {
		ref,
		inView
	};
}
var OFFSETS = {
	up: "translate-y-7",
	down: "-translate-y-7",
	left: "translate-x-7",
	right: "-translate-x-7",
	scale: "scale-95",
	none: ""
};
function Reveal({ children, className, delay = 0, direction = "up", as: As = "div" }) {
	const { ref, inView } = useInView();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(As, {
		ref,
		className: cn("transition-all duration-700 ease-out", inView ? "opacity-100 translate-x-0 translate-y-0 scale-100" : cn("opacity-0", OFFSETS[direction]), className),
		style: { transitionDelay: inView ? `${delay}ms` : "0ms" },
		children
	});
}
//#endregion
export { useInView as n, Reveal as t };
