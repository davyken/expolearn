import { c as require_jsx_runtime } from "../_libs/@radix-ui/react-accordion+[...].mjs";
import { t as Button } from "./button-BsdMR-Om.mjs";
import { g as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { t as Reveal } from "./reveal-BuUuG7ND.mjs";
import { N as ArrowRight, c as Quote, f as MessageCircle } from "../_libs/lucide-react.mjs";
import { i as TESTIMONIALS_NOTE, r as SAMPLE_TESTIMONIALS } from "./content-BjaSUbXz.mjs";
import { t as buildWhatsAppLink } from "./whatsapp-BDPBKj1W.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/FinalCta-DjEwmBFi.js
var import_jsx_runtime = require_jsx_runtime();
var cta_takeoff_default = "/assets/cta-takeoff-DvGg_1fK.webp";
function FinalCta({ withTestimonials = false }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		className: "relative isolate overflow-hidden bg-night py-20 text-night-foreground sm:py-28",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
				src: cta_takeoff_default,
				alt: "",
				"aria-hidden": "true",
				loading: "lazy",
				className: "absolute inset-0 -z-20 h-full w-full object-cover object-[70%_30%]"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				"aria-hidden": "true",
				className: "absolute inset-0 -z-10 bg-gradient-to-b from-night/70 via-night/60 to-night"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "container-page",
				children: [withTestimonials ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mb-20 sm:mb-28",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
						className: "grid gap-4 lg:grid-cols-3",
						children: SAMPLE_TESTIMONIALS.map((item, index) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Reveal, {
							as: "li",
							delay: index * 90,
							className: "flex h-full flex-col rounded-[1.75rem] border border-white/10 bg-white/[0.07] p-6 backdrop-blur-md",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Quote, {
									"aria-hidden": "true",
									className: "size-6 text-sunset"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("blockquote", {
									className: "text-balance-p mt-4 flex-1 text-night-foreground/90",
									children: item.quote
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-5 text-sm font-semibold text-night-foreground/60",
									children: item.author
								})
							]
						}, item.quote))
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-3 text-xs text-night-foreground/45",
						children: TESTIMONIALS_NOTE
					})]
				}) : null, /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Reveal, {
					direction: "scale",
					className: "mx-auto max-w-4xl text-center",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
							className: "text-5xl leading-[0.98] font-extrabold sm:text-6xl lg:text-7xl",
							children: [
								"Ta place est réservée.",
								" ",
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "font-serif font-normal text-sunset italic",
									children: "Il ne manque que toi."
								})
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-balance-p mx-auto mt-6 max-w-xl text-night-foreground/75 sm:text-lg",
							children: "Inscris-toi en quelques minutes, ou écris-nous : un conseiller ExpoLearn te répond et construit ton plan de départ avec toi."
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
								asChild: true,
								size: "lg",
								className: "bg-sunset text-night shadow-[0_10px_30px_-8px_var(--color-sunset)] hover:bg-white",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
									to: "/inscription",
									children: ["Je m'inscris maintenant", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { "aria-hidden": "true" })]
								})
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
								asChild: true,
								size: "lg",
								variant: "outline",
								className: "border-white/30 bg-white/5 text-night-foreground backdrop-blur hover:border-white hover:bg-white/15",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
									href: buildWhatsAppLink("Bonjour ExpoLearn, je souhaite des informations."),
									target: "_blank",
									rel: "noreferrer",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MessageCircle, { "aria-hidden": "true" }), "WhatsApp"]
								})
							})]
						})
					]
				})]
			})
		]
	});
}
//#endregion
export { FinalCta as t };
