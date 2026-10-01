import { c as require_jsx_runtime } from "./_libs/@radix-ui/react-accordion+[...].mjs";
import { t as Button } from "./_ssr/button-BsdMR-Om.mjs";
import { o as SITE } from "./_ssr/site-B4pil6fg.mjs";
import { g as Link } from "./_libs/@tanstack/react-router+[...].mjs";
import { t as Route } from "./_slug-Bj3Wt6zg.mjs";
import { t as Reveal } from "./_ssr/reveal-BuUuG7ND.mjs";
import { n as Section, r as SectionHeading, t as Eyebrow } from "./_ssr/section-BXjgiglf.mjs";
import { A as Calendar, N as ArrowRight, T as CircleCheck, _ as Layers, i as Tag, l as Plane, m as MapPin, r as Target, v as Languages, x as House, y as Landmark } from "./_libs/lucide-react.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/_slug-C-SPsv7u.js
var import_jsx_runtime = require_jsx_runtime();
var flyer_soutien_scolaire_default = "/assets/flyer-soutien-scolaire-CI8lD0xe.jpg";
var flyer_cours_anglais_default = "/assets/flyer-cours-anglais-CR96Icmj.jpg";
var flyer_cours_allemand_default = "/assets/flyer-cours-allemand-LpBqv5-9.jpg";
var flyer_visa_etudiant_default = "/assets/flyer-visa-etudiant-BXM_CwEJ.jpg";
var ICONS = {
	home: House,
	target: Target,
	languages: Languages,
	landmark: Landmark,
	plane: Plane
};
var FLYERS = {
	"soutien-scolaire": flyer_soutien_scolaire_default,
	"cours-anglais": flyer_cours_anglais_default,
	"cours-allemand": flyer_cours_allemand_default,
	"visa-etudiant": flyer_visa_etudiant_default
};
function ServiceDetail({ service }) {
	const Icon = ICONS[service.icon];
	const flyer = FLYERS[service.slug];
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
			className: "under-header relative overflow-hidden bg-night text-primary-foreground",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				"aria-hidden": "true",
				className: "pointer-events-none absolute inset-0",
				style: { background: "radial-gradient(circle at 15% 20%, color-mix(in oklch, var(--color-primary) 35%, transparent), transparent 55%)" }
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "container-page relative animate-rise py-16 sm:py-20",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/services",
						className: "inline-flex items-center gap-1.5 text-sm text-primary-foreground/75 hover:text-primary-foreground",
						children: "← Tous les services"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-5 flex items-center gap-3",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "flex size-12 items-center justify-center rounded-2xl bg-primary-foreground/10 ring-1 ring-primary-foreground/20",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, {
								"aria-hidden": "true",
								className: "size-6"
							})
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Eyebrow, {
							className: "bg-primary-foreground/10 text-primary-foreground ring-1 ring-primary-foreground/20",
							children: service.pole
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
						className: "mt-5 max-w-2xl text-3xl leading-[1.1] font-bold sm:text-4xl lg:text-5xl",
						children: service.title
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-balance-p mt-5 max-w-2xl text-base text-primary-foreground/85 sm:text-lg",
						children: service.heroDescription
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-8 flex flex-col gap-3 sm:flex-row",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
							asChild: true,
							size: "lg",
							variant: "highlight",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
								to: "/inscription",
								search: { service: service.slug },
								children: ["S'inscrire à ce service", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { "aria-hidden": "true" })]
							})
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
							asChild: true,
							size: "lg",
							variant: "outline",
							className: "border-primary-foreground/40 bg-transparent text-primary-foreground hover:border-primary-foreground hover:bg-primary-foreground/10",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
								to: "/contact",
								children: "Poser une question"
							})
						})]
					})
				]
			})]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Section, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "grid gap-5 sm:grid-cols-2 lg:grid-cols-4",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(InfoCard, {
					icon: Layers,
					label: "Public",
					value: service.audience
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(InfoCard, {
					icon: MapPin,
					label: "Formats",
					value: service.formats.join(" · ")
				}),
				service.levels ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(InfoCard, {
					icon: Target,
					label: "Niveaux",
					value: service.levels.join(", ")
				}) : null,
				service.nextIntake ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(InfoCard, {
					icon: Calendar,
					label: "Rentrée",
					value: service.nextIntake
				}) : null,
				service.price ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(InfoCard, {
					icon: Tag,
					label: "Tarif indicatif",
					value: service.price
				}) : null
			]
		}) }),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Section, {
			tone: "muted",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHeading, {
				eyebrow: "Ce que comprend le programme",
				title: "Ce que vous en retirez"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
				className: "mt-8 grid gap-4 sm:grid-cols-2",
				children: service.highlights.map((item, index) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Reveal, {
					as: "li",
					delay: index * 80,
					direction: index % 2 === 0 ? "left" : "right",
					className: "flex gap-3 rounded-2xl border border-border bg-card p-5 text-sm",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CircleCheck, {
						"aria-hidden": "true",
						className: "mt-0.5 size-4 shrink-0 text-primary-dark"
					}), item]
				}, item))
			})]
		}),
		flyer ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Section, {
			tone: "muted",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "grid items-center gap-8 lg:grid-cols-2 lg:gap-14",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Reveal, {
					direction: "left",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Eyebrow, { children: "Notre flyer officiel" }),
						service.quote ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
							className: "text-balance-p mt-4 text-2xl leading-tight font-bold text-primary-dark sm:text-3xl",
							children: [
								"« ",
								service.quote,
								" »"
							]
						}) : null,
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-4 text-sm text-muted-foreground",
							children: "Retrouvez toutes les informations pratiques de ce programme — niveaux, rentrée, tarif et contacts — sur notre support de communication officiel."
						})
					]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
					direction: "right",
					delay: 120,
					className: "mx-auto w-full max-w-xs",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
						src: flyer,
						alt: `Flyer officiel ExpoLearn — ${service.title}`,
						loading: "lazy",
						className: "w-full rounded-2xl border border-border shadow-card"
					})
				})]
			})
		}) : null,
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Section, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Reveal, {
			direction: "scale",
			className: "flex flex-col items-start gap-6 rounded-3xl border border-border bg-card p-8 sm:flex-row sm:items-center sm:justify-between",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
				className: "text-lg font-bold",
				children: "Prêt à démarrer ?"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
				className: "mt-1.5 text-sm text-muted-foreground",
				children: [
					"Inscrivez-vous en ligne ou appelez-nous au",
					" ",
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
						href: SITE.phoneHref,
						className: "font-semibold text-primary-dark hover:underline",
						children: SITE.phone
					}),
					"."
				]
			})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
				asChild: true,
				size: "lg",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
					to: "/inscription",
					search: { service: service.slug },
					children: ["S'inscrire à ce service", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { "aria-hidden": "true" })]
				})
			})]
		}) })
	] });
}
function InfoCard({ icon: Icon, label, value }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "rounded-2xl border border-border bg-card p-5",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "flex size-9 items-center justify-center rounded-xl bg-secondary text-primary-dark",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, {
					"aria-hidden": "true",
					className: "size-4"
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-3 text-xs font-semibold tracking-wide text-muted-foreground uppercase",
				children: label
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "text-balance-p mt-1 text-sm font-semibold",
				children: value
			})
		]
	});
}
function ServicePage() {
	const service = Route.useLoaderData();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ServiceDetail, { service });
}
//#endregion
export { ServicePage as component };
