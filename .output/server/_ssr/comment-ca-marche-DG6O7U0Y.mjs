import { c as require_jsx_runtime } from "../_libs/@radix-ui/react-accordion+[...].mjs";
import { n as SERVICES } from "./services-B28n1Riz.mjs";
import { t as Reveal } from "./reveal-BuUuG7ND.mjs";
import { n as Section, r as SectionHeading } from "./section-BXjgiglf.mjs";
import { n as HOW_IT_WORKS_STEPS } from "./content-BjaSUbXz.mjs";
import { t as PageHero } from "./page-hero-BHANOi3r.mjs";
import { t as CtaButtons } from "./cta-buttons-CerNq2yP.mjs";
import { t as ServiceCard } from "./ServiceCard-4QpeXXaj.mjs";
import { t as FinalCta } from "./FinalCta-DjEwmBFi.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/comment-ca-marche-DG6O7U0Y.js
var import_jsx_runtime = require_jsx_runtime();
function HowPage() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageHero, {
			eyebrow: "Comment ça marche",
			title: "De votre première demande au début des cours",
			description: "Le même principe pour tous les services : un besoin clarifié, un programme adapté, un suivi dans la durée.",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CtaButtons, {
				className: "mt-8 justify-center",
				tone: "dark"
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Section, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHeading, {
			eyebrow: "Votre parcours",
			title: "Quatre étapes"
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ol", {
			className: "mt-10 space-y-4",
			children: HOW_IT_WORKS_STEPS.map((item, index) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Reveal, {
				as: "li",
				delay: index * 80,
				direction: index % 2 === 0 ? "left" : "right",
				className: "flex gap-4 rounded-3xl border border-border bg-card p-6",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "font-display text-lg font-bold text-primary-dark",
					children: item.step
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
					className: "text-base font-bold",
					children: item.title
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-balance-p mt-2 text-sm text-muted-foreground",
					children: item.text
				})] })]
			}, item.step))
		})] }),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Section, {
			tone: "muted",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHeading, {
				eyebrow: "Quel service pour vous ?",
				title: "Choisissez votre point de départ"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3",
				children: SERVICES.map((service, index) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
					delay: index * 80,
					direction: index % 2 === 0 ? "left" : "right",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ServiceCard, { service })
				}, service.slug))
			})]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FinalCta, {})
	] });
}
//#endregion
export { HowPage as component };
