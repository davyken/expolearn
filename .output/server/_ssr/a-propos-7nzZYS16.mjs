import { c as require_jsx_runtime } from "../_libs/@radix-ui/react-accordion+[...].mjs";
import { o as SITE } from "./site-B4pil6fg.mjs";
import { n as SERVICES } from "./services-B28n1Riz.mjs";
import { t as Reveal } from "./reveal-BuUuG7ND.mjs";
import { n as Section, r as SectionHeading } from "./section-BXjgiglf.mjs";
import { m as MapPin, n as User } from "../_libs/lucide-react.mjs";
import { a as VALUES } from "./content-BjaSUbXz.mjs";
import { t as PageHero } from "./page-hero-BHANOi3r.mjs";
import { t as CtaButtons } from "./cta-buttons-CerNq2yP.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/a-propos-7nzZYS16.js
var import_jsx_runtime = require_jsx_runtime();
function AboutPage() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageHero, {
			eyebrow: "À propos",
			title: "Exponential Learning : accélérer la progression de chaque apprenant",
			description: SITE.positioning,
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CtaButtons, {
				className: "mt-8 justify-center",
				tone: "dark"
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Section, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHeading, {
			eyebrow: "Notre mission",
			title: "Rendre l'accompagnement éducatif fiable et accessible",
			description: "ExpoLearn est née d'un constat simple : la réussite scolaire, académique et professionnelle repose sur un accompagnement personnalisé, assuré par des formateurs réellement compétents. C'est ce que nous organisons, service par service, autour de nos quatre pôles d'activité."
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "mt-10 grid gap-5 sm:grid-cols-2",
			children: SERVICES.map((service, index) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Reveal, {
				delay: index * 70,
				direction: index % 2 === 0 ? "left" : "right",
				className: "rounded-2xl border border-border bg-card p-5",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-xs font-semibold tracking-wide text-primary-dark uppercase",
					children: service.pole
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
					className: "mt-1.5 text-sm font-bold",
					children: service.title
				})]
			}, service.slug))
		})] }),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Section, {
			tone: "muted",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHeading, {
				eyebrow: "Nos valeurs",
				title: "Ce qui guide nos décisions"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
				className: "mt-10 grid gap-5 sm:grid-cols-2",
				children: VALUES.map((value, index) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Reveal, {
					as: "li",
					delay: index * 90,
					direction: index % 2 === 0 ? "left" : "right",
					className: "h-full rounded-3xl border border-border bg-card p-6",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
						className: "text-base font-bold",
						children: value.title
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-balance-p mt-2 text-sm text-muted-foreground",
						children: value.text
					})]
				}, value.title))
			})]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Section, { children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHeading, {
				eyebrow: "L'entreprise",
				title: "Identité de l'entreprise"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-8 grid gap-5 sm:grid-cols-2",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Reveal, {
					direction: "left",
					className: "flex items-start gap-4 rounded-3xl border border-border bg-card p-6",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "flex size-10 shrink-0 items-center justify-center rounded-2xl bg-secondary text-primary-dark",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(User, {
							"aria-hidden": "true",
							className: "size-5"
						})
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-sm font-bold",
						children: SITE.founder
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-1 text-sm text-muted-foreground",
						children: SITE.founderRole
					})] })]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Reveal, {
					direction: "right",
					delay: 100,
					className: "flex items-start gap-4 rounded-3xl border border-border bg-card p-6",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "flex size-10 shrink-0 items-center justify-center rounded-2xl bg-secondary text-primary-dark",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(MapPin, {
							"aria-hidden": "true",
							className: "size-5"
						})
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-sm font-bold",
						children: "Siège social"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-1 text-sm text-muted-foreground",
						children: SITE.address
					})] })]
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-6 text-xs text-muted-foreground",
				children: SITE.legalMention
			})
		] })
	] });
}
//#endregion
export { AboutPage as component };
