import { n as __toESM } from "../_runtime.mjs";
import { r as require_react } from "../_libs/@hookform/resolvers+[...].mjs";
import { c as require_jsx_runtime } from "../_libs/@radix-ui/react-accordion+[...].mjs";
import { r as cn, t as Button } from "./button-BsdMR-Om.mjs";
import { a as NAV_LINKS, o as SITE } from "./site-B4pil6fg.mjs";
import { n as SERVICES } from "./services-B28n1Riz.mjs";
import { _ as useRouter, c as HeadContent, d as createRouter, f as Outlet, g as Link, h as createRootRouteWithContext, l as useRouterState, m as createFileRoute, p as lazyRouteComponent, s as Scripts } from "../_libs/@tanstack/react-router+[...].mjs";
import { t as Route$7 } from "../_slug-Bj3Wt6zg.mjs";
import { C as Facebook, M as ArrowUpRight, b as Instagram, d as Phone, f as MessageCircle, g as Linkedin, h as Mail, m as MapPin, p as Menu, s as Send, t as X } from "../_libs/lucide-react.mjs";
import { t as FAQ_ITEMS } from "./content-BjaSUbXz.mjs";
import { t as buildWhatsAppLink } from "./whatsapp-BDPBKj1W.mjs";
import { i as stringType, r as objectType } from "../_libs/zod.mjs";
import { t as Route$8 } from "./inscription-MGWyo_t0.mjs";
import { t as QueryClientProvider } from "../_libs/tanstack__react-query.mjs";
import { t as QueryClient } from "../_libs/tanstack__query-core.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/router-DgzA9LNH.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var styles_default = "/assets/styles-DbYw1nrx.css";
function reportLovableError(error, context = {}) {
	if (typeof window === "undefined") return;
	window.__lovableEvents?.captureException?.(error, {
		source: "react_error_boundary",
		route: window.location.pathname,
		...context
	}, {
		mechanism: "react_error_boundary",
		handled: false,
		severity: "error"
	});
	const message = error instanceof Response ? `Response ${error.status}${error.url ? ` at ${error.url}` : ""}` : error instanceof Error ? error.message : String(error);
	const stack = error instanceof Error ? error.stack : void 0;
	window.__lovableReportRuntimeError?.({
		message,
		...stack !== void 0 && { stack },
		filename: window.location.pathname
	});
}
var expolearn_logo_default = "/assets/expolearn-logo-BgBy4vcF.png";
var LINKS = NAV_LINKS.filter((link) => link.to !== "/");
function Header() {
	const [open, setOpen] = (0, import_react.useState)(false);
	const [scrolled, setScrolled] = (0, import_react.useState)(false);
	const pathname = useRouterState({ select: (s) => s.location.pathname });
	(0, import_react.useEffect)(() => {
		setOpen(false);
	}, [pathname]);
	(0, import_react.useEffect)(() => {
		const onScroll = () => setScrolled(window.scrollY > 24);
		onScroll();
		window.addEventListener("scroll", onScroll, { passive: true });
		return () => window.removeEventListener("scroll", onScroll);
	}, []);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", {
		className: "sticky top-0 z-50 h-22 px-3 pt-3 sm:px-4",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: cn("mx-auto flex h-16 max-w-6xl items-center justify-between gap-4 rounded-full border border-white/60 bg-white/80 pr-2 pl-4 backdrop-blur-xl transition-all duration-500 sm:pl-5", scrolled ? "shadow-[0_10px_40px_-12px_oklch(0.2_0.03_158/0.35)]" : "shadow-[0_4px_24px_-8px_oklch(0.2_0.03_158/0.18)]"),
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
					to: "/",
					className: "group flex shrink-0 items-center",
					"aria-label": "ExpoLearn, retour à l'accueil",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
						src: expolearn_logo_default,
						alt: "ExpoLearn — Exponential Learning",
						className: "h-10 w-auto object-contain transition-transform duration-300 group-hover:scale-105 sm:h-11"
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("nav", {
					"aria-label": "Navigation principale",
					className: "hidden items-center gap-0.5 lg:flex",
					children: LINKS.map((link) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: link.to,
						activeOptions: { exact: link.to !== "/services" },
						className: "relative rounded-full px-3.5 py-2 text-sm font-medium text-foreground/70 transition-colors hover:text-foreground",
						activeProps: { className: "!text-primary-dark font-semibold" },
						children: ({ isActive }) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [link.label, /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							"aria-hidden": "true",
							className: cn("absolute inset-x-3.5 -bottom-0.5 h-0.5 origin-left rounded-full bg-primary transition-transform duration-300", isActive ? "scale-x-100" : "scale-x-0")
						})] })
					}, link.to))
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-center gap-2",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
							href: SITE.phoneHref,
							className: "hidden items-center gap-2 rounded-full px-3 py-2 text-sm font-semibold text-foreground/80 transition-colors hover:text-primary-dark xl:inline-flex",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Phone, {
								"aria-hidden": "true",
								className: "size-4"
							}), SITE.phone]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
							asChild: true,
							className: "hidden h-12 bg-night px-5 text-night-foreground hover:bg-primary-dark sm:inline-flex",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
								to: "/inscription",
								children: ["Je m'inscris", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowUpRight, { "aria-hidden": "true" })]
							})
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							type: "button",
							onClick: () => setOpen((value) => !value),
							"aria-expanded": open,
							"aria-controls": "menu-mobile",
							"aria-label": open ? "Fermer le menu" : "Ouvrir le menu",
							className: "flex size-12 items-center justify-center rounded-full bg-secondary text-secondary-foreground transition-colors hover:bg-primary hover:text-primary-foreground lg:hidden",
							children: open ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, {
								"aria-hidden": "true",
								className: "size-5"
							}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Menu, {
								"aria-hidden": "true",
								className: "size-5"
							})
						})
					]
				})
			]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			id: "menu-mobile",
			className: cn("mx-auto mt-2 grid max-w-6xl overflow-hidden rounded-[2rem] bg-white/95 shadow-[0_20px_50px_-20px_oklch(0.2_0.03_158/0.45)] backdrop-blur-xl transition-[grid-template-rows,opacity] duration-300 ease-out lg:hidden", open ? "grid-rows-[1fr] opacity-100" : "pointer-events-none grid-rows-[0fr] opacity-0"),
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "min-h-0",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("nav", {
					"aria-label": "Navigation mobile",
					className: "flex flex-col p-3",
					children: [LINKS.map((link, index) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
						to: link.to,
						activeOptions: { exact: link.to !== "/services" },
						className: "flex items-center justify-between rounded-2xl px-4 py-3.5 font-display text-lg font-semibold text-foreground transition-colors hover:bg-secondary",
						activeProps: { className: "bg-secondary text-secondary-foreground" },
						children: [link.label, /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
							className: "text-xs font-medium text-muted-foreground",
							children: ["0", index + 1]
						})]
					}, link.to)), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-2 grid gap-2 p-1 sm:grid-cols-2",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
							asChild: true,
							size: "lg",
							className: "bg-night hover:bg-primary-dark",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
								to: "/inscription",
								children: "Je m'inscris"
							})
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
							asChild: true,
							size: "lg",
							variant: "outline",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
								href: SITE.phoneHref,
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Phone, { "aria-hidden": "true" }), SITE.phone]
							})
						})]
					})]
				})
			})
		})]
	});
}
var SOCIALS = [
	{
		name: "WhatsApp",
		icon: MessageCircle,
		href: SITE.whatsappHref
	},
	{
		name: "Facebook",
		icon: Facebook
	},
	{
		name: "Instagram",
		icon: Instagram
	},
	{
		name: "LinkedIn",
		icon: Linkedin
	}
];
var CREDITS = "Photos : abbilder (CC BY 2.0), GoetheSP (CC BY-SA 4.0), Asaalah1 (CC BY 4.0), Teolemon (CC BY-SA 4.0), PierreSelim (CC BY-SA 3.0), Bill Abbott (CC BY-SA 2.0), Salwa Farwaneh Dameh (CC0), Quintin Soloviev (CC BY 4.0), Jchmrt (CC BY-SA 4.0), Wilfredor (CC0), Tobias Alt (CC BY-SA 4.0), via Wikimedia Commons.";
function Footer() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("footer", {
		className: "relative overflow-hidden bg-night text-night-foreground",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "container-page grid gap-12 border-b border-white/10 pt-20 pb-14 lg:grid-cols-[1.2fr_0.6fr_0.7fr_1fr] lg:gap-10",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: "/",
							"aria-label": "ExpoLearn, retour à l'accueil",
							className: "inline-flex rounded-2xl bg-white px-4 py-3",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
								src: expolearn_logo_default,
								alt: "ExpoLearn — Exponential Learning",
								className: "h-12 w-auto object-contain"
							})
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-balance-p mt-6 max-w-sm text-sm text-night-foreground/65",
							children: "Langues, visa étudiant, soutien scolaire et concours : on te prépare à réussir, à Yaoundé comme à l'étranger."
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
							className: "mt-6 flex gap-2",
							children: SOCIALS.map(({ name, icon: Icon, href }) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: href ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
								href,
								target: "_blank",
								rel: "noreferrer",
								"aria-label": name,
								className: "flex size-11 items-center justify-center rounded-full border border-white/15 transition-colors hover:border-sunset hover:bg-sunset hover:text-night",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, {
									"aria-hidden": "true",
									className: "size-4"
								})
							}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								title: `${name} — lien à venir`,
								"aria-label": `${name}, lien à venir`,
								className: "flex size-11 items-center justify-center rounded-full border border-white/15 text-night-foreground/50",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, {
									"aria-hidden": "true",
									className: "size-4"
								})
							}) }, name))
						})
					] }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "text-xs font-semibold tracking-widest text-night-foreground/45 uppercase",
						children: "Explorer"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
						className: "mt-5 space-y-3",
						children: NAV_LINKS.map((link) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: link.to,
							className: "text-sm text-night-foreground/80 transition-colors hover:text-sunset",
							children: link.label
						}) }, link.to))
					})] }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "text-xs font-semibold tracking-widest text-night-foreground/45 uppercase",
						children: "Formations"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
						className: "mt-5 space-y-3",
						children: SERVICES.map((service) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: "/services/$slug",
							params: { slug: service.slug },
							className: "text-sm text-night-foreground/80 transition-colors hover:text-sunset",
							children: service.shortTitle
						}) }, service.slug))
					})] }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							className: "text-xs font-semibold tracking-widest text-night-foreground/45 uppercase",
							children: "Nous trouver"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("ul", {
							className: "mt-5 space-y-4 text-sm text-night-foreground/80",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
									className: "flex items-start gap-3",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MapPin, {
										"aria-hidden": "true",
										className: "mt-0.5 size-4 shrink-0 text-sunset"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: SITE.address })]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
									className: "flex items-center gap-3",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Phone, {
										"aria-hidden": "true",
										className: "size-4 shrink-0 text-sunset"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
											href: SITE.phoneHref,
											className: "hover:text-sunset",
											children: SITE.phone
										}),
										" · ",
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
											href: SITE.phoneSecondaryHref,
											className: "hover:text-sunset",
											children: SITE.phoneSecondary
										})
									] })]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
									className: "flex items-center gap-3",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Mail, {
										"aria-hidden": "true",
										className: "size-4 shrink-0 text-sunset"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
										href: SITE.emailHref,
										className: "hover:text-sunset",
										children: SITE.email
									})]
								})
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
							to: "/contact",
							className: "group mt-6 inline-flex items-center gap-2 text-sm font-semibold text-sunset",
							children: ["Prendre rendez-vous", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowUpRight, {
								"aria-hidden": "true",
								className: "size-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
							})]
						})
					] })
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "container-page space-y-2 py-8 text-xs text-night-foreground/45",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", { children: [
					SITE.legalMention,
					" © ",
					(/* @__PURE__ */ new Date()).getFullYear(),
					" ",
					SITE.name,
					". Tous droits réservés."
				] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: CREDITS })]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				"aria-hidden": "true",
				className: "pointer-events-none -mb-[0.22em] text-center font-display text-[22vw] leading-none font-extrabold tracking-tighter text-white/[0.04] select-none",
				children: "ExpoLearn"
			})
		]
	});
}
function WhatsAppWidget() {
	const [open, setOpen] = (0, import_react.useState)(false);
	const [message, setMessage] = (0, import_react.useState)("");
	const handleSend = () => {
		const text = message.trim();
		if (!text) return;
		window.open(buildWhatsAppLink(text), "_blank", "noopener,noreferrer");
		setMessage("");
		setOpen(false);
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "fixed right-5 bottom-5 z-40 flex flex-col items-end gap-3",
		children: [open ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			role: "dialog",
			"aria-label": "Discuter sur WhatsApp",
			className: "animate-pop w-[calc(100vw-2.5rem)] max-w-sm overflow-hidden rounded-3xl border border-border bg-card shadow-card",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex items-center justify-between bg-[#25D366] px-4 py-3 text-white",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-center gap-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MessageCircle, {
						"aria-hidden": "true",
						className: "size-5"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-sm font-bold",
						children: "Discuter sur WhatsApp"
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					type: "button",
					onClick: () => setOpen(false),
					"aria-label": "Fermer le chat WhatsApp",
					className: "flex size-7 items-center justify-center rounded-full transition-colors hover:bg-white/20",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, {
						"aria-hidden": "true",
						className: "size-4"
					})
				})]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "space-y-3 p-4",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-sm text-muted-foreground",
						children: "Écrivez votre message : il s'ouvrira dans WhatsApp, prêt à être envoyé à ExpoLearn."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("textarea", {
						rows: 3,
						value: message,
						onChange: (event) => setMessage(event.target.value),
						placeholder: "Votre message…",
						className: "w-full rounded-xl border border-input bg-background px-3 py-2 text-sm text-foreground transition-all duration-200 focus:border-primary focus:ring-4 focus:ring-ring/15 focus:outline-none"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
						type: "button",
						onClick: handleSend,
						disabled: !message.trim(),
						className: "flex w-full items-center justify-center gap-2 rounded-full bg-[#25D366] px-4 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-[#1ebe5b] disabled:cursor-not-allowed disabled:opacity-50",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Send, {
							"aria-hidden": "true",
							className: "size-4"
						}), "Envoyer sur WhatsApp"]
					})
				]
			})]
		}) : null, /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
			type: "button",
			onClick: () => setOpen((value) => !value),
			"aria-expanded": open,
			"aria-label": open ? "Fermer le chat WhatsApp" : "Discuter sur WhatsApp",
			className: "relative flex size-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-card transition-transform duration-300 hover:scale-105",
			children: open ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, {
				"aria-hidden": "true",
				className: "size-6"
			}) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				"aria-hidden": "true",
				className: "animate-pulse-glow absolute inset-0 -z-10 rounded-full bg-[#25D366]"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(MessageCircle, {
				"aria-hidden": "true",
				className: "size-7"
			})] })
		})]
	});
}
function NotFoundComponent() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "flex min-h-screen items-center justify-center bg-background px-4",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "max-w-md text-center",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
					className: "text-7xl font-bold text-foreground",
					children: "404"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "mt-4 text-xl font-semibold text-foreground",
					children: "Page introuvable"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-2 text-sm text-muted-foreground",
					children: "La page que vous cherchez n'existe pas ou a été déplacée."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-6",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/",
						className: "inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90",
						children: "Retour à l'accueil"
					})
				})
			]
		})
	});
}
function ErrorComponent({ error, reset }) {
	console.error(error);
	const router = useRouter();
	(0, import_react.useEffect)(() => {
		reportLovableError(error, { boundary: "tanstack_root_error_component" });
	}, [error]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "flex min-h-screen items-center justify-center bg-background px-4",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "max-w-md text-center",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
					className: "text-xl font-semibold tracking-tight text-foreground",
					children: "Cette page n'a pas pu s'afficher"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-2 text-sm text-muted-foreground",
					children: "Une erreur est survenue de notre côté. Vous pouvez réessayer ou revenir à l'accueil."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-6 flex flex-wrap justify-center gap-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						onClick: () => {
							router.invalidate();
							reset();
						},
						className: "inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90",
						children: "Réessayer"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
						href: "/",
						className: "inline-flex items-center justify-center rounded-md border border-input bg-background px-4 py-2 text-sm font-medium text-foreground transition-colors hover:bg-accent",
						children: "Retour à l'accueil"
					})]
				})
			]
		})
	});
}
var Route$6 = createRootRouteWithContext()({
	head: () => ({
		meta: [
			{ charSet: "utf-8" },
			{
				name: "viewport",
				content: "width=device-width, initial-scale=1"
			},
			{ title: "ExpoLearn | Soutien scolaire, langues, concours et visa étudiant au Cameroun" },
			{
				name: "description",
				content: "ExpoLearn accompagne élèves, étudiants et jeunes professionnels : soutien scolaire, préparation aux concours, cours d'anglais et d'allemand, et accompagnement au visa étudiant, à Yaoundé et en ligne."
			},
			{
				name: "author",
				content: "ExpoLearn"
			},
			{
				property: "og:title",
				content: "ExpoLearn | Soutien scolaire, langues, concours et visa étudiant au Cameroun"
			},
			{
				property: "og:description",
				content: "ExpoLearn accompagne élèves, étudiants et jeunes professionnels : soutien scolaire, préparation aux concours, cours d'anglais et d'allemand, et accompagnement au visa étudiant, à Yaoundé et en ligne."
			},
			{
				property: "og:type",
				content: "website"
			},
			{
				property: "og:locale",
				content: "fr_CM"
			},
			{
				name: "twitter:card",
				content: "summary_large_image"
			}
		],
		links: [
			{
				rel: "stylesheet",
				href: styles_default
			},
			{
				rel: "stylesheet",
				href: "https://fonts.googleapis.com/css2?family=Manrope:wght@400;500;600;700;800&family=Bricolage+Grotesque:opsz,wght@12..96,500..800&family=Instrument+Serif:ital@1&display=swap"
			},
			{
				rel: "icon",
				href: "/favicon.svg",
				type: "image/svg+xml"
			},
			{
				rel: "icon",
				href: "/favicon.ico",
				type: "image/x-icon"
			}
		]
	}),
	shellComponent: RootShell,
	component: RootComponent,
	notFoundComponent: NotFoundComponent,
	errorComponent: ErrorComponent
});
function RootShell({ children }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("html", {
		lang: "fr",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("head", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(HeadContent, {}) }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("body", { children: [children, /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Scripts, {})] })]
	});
}
function RootComponent() {
	const { queryClient } = Route$6.useRouteContext();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(QueryClientProvider, {
		client: queryClient,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "flex min-h-screen flex-col",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Header, {}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("main", {
					className: "flex-1",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Outlet, {})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Footer, {}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(WhatsAppWidget, {})
			]
		})
	});
}
var $$splitComponentImporter$5 = () => import("./routes-BBwi2DQk.mjs");
var TITLE$5 = "ExpoLearn — Langues, visa étudiant et formations pour étudier à l'étranger";
var DESCRIPTION$5 = "Depuis Yaoundé, ExpoLearn te prépare à partir étudier à l'étranger : cours d'allemand et d'anglais, accompagnement au visa étudiant, soutien scolaire et préparation aux concours.";
var Route$5 = createFileRoute("/")({
	head: () => ({ meta: [
		{ title: TITLE$5 },
		{
			name: "description",
			content: DESCRIPTION$5
		},
		{
			property: "og:title",
			content: TITLE$5
		},
		{
			property: "og:description",
			content: DESCRIPTION$5
		}
	] }),
	component: lazyRouteComponent($$splitComponentImporter$5, "component")
});
var $$splitComponentImporter$4 = () => import("./a-propos-7nzZYS16.mjs");
var TITLE$4 = "À propos d'ExpoLearn — Notre mission";
var DESCRIPTION$4 = "ExpoLearn (Exponential Learning) est une entreprise camerounaise d'éducation et de formation basée à Yaoundé : soutien scolaire, langues, préparation aux concours et accompagnement au visa étudiant.";
var Route$4 = createFileRoute("/a-propos")({
	head: () => ({ meta: [
		{ title: TITLE$4 },
		{
			name: "description",
			content: DESCRIPTION$4
		},
		{
			property: "og:title",
			content: TITLE$4
		},
		{
			property: "og:description",
			content: DESCRIPTION$4
		}
	] }),
	component: lazyRouteComponent($$splitComponentImporter$4, "component")
});
var $$splitComponentImporter$3 = () => import("./comment-ca-marche-DG6O7U0Y.mjs");
var TITLE$3 = "Comment ça marche — ExpoLearn";
var DESCRIPTION$3 = "Le parcours ExpoLearn étape par étape : premier contact, évaluation du besoin, orientation vers le bon programme et suivi des cours.";
var Route$3 = createFileRoute("/comment-ca-marche")({
	head: () => ({ meta: [
		{ title: TITLE$3 },
		{
			name: "description",
			content: DESCRIPTION$3
		},
		{
			property: "og:title",
			content: TITLE$3
		},
		{
			property: "og:description",
			content: DESCRIPTION$3
		}
	] }),
	component: lazyRouteComponent($$splitComponentImporter$3, "component")
});
var $$splitComponentImporter$2 = () => import("./contact-29mL8Um5.mjs");
var TITLE$2 = "Contact — ExpoLearn";
var DESCRIPTION$2 = "Contactez ExpoLearn par téléphone, WhatsApp ou e-mail, ou envoyez votre message : nous répondons sous 24 heures ouvrées.";
var Route$2 = createFileRoute("/contact")({
	head: () => ({ meta: [
		{ title: TITLE$2 },
		{
			name: "description",
			content: DESCRIPTION$2
		},
		{
			property: "og:title",
			content: TITLE$2
		},
		{
			property: "og:description",
			content: DESCRIPTION$2
		}
	] }),
	component: lazyRouteComponent($$splitComponentImporter$2, "component")
});
objectType({
	name: stringType().min(2, "Indiquez votre nom complet."),
	email: stringType().email("Adresse e-mail invalide."),
	phone: stringType().min(8, "Numéro de téléphone invalide."),
	service: stringType().optional(),
	message: stringType().min(20, "Décrivez votre demande en 20 caractères au minimum.")
});
var $$splitComponentImporter$1 = () => import("./faq-pcPeUV7S.mjs");
var TITLE$1 = "FAQ — Questions fréquentes sur ExpoLearn";
var DESCRIPTION$1 = "Services, tarifs, formats de cours, rentrées, paiement : les réponses aux questions les plus fréquentes sur ExpoLearn.";
var Route$1 = createFileRoute("/faq")({
	head: () => ({
		meta: [
			{ title: TITLE$1 },
			{
				name: "description",
				content: DESCRIPTION$1
			},
			{
				property: "og:title",
				content: TITLE$1
			},
			{
				property: "og:description",
				content: DESCRIPTION$1
			}
		],
		scripts: [{
			type: "application/ld+json",
			children: JSON.stringify({
				"@context": "https://schema.org",
				"@type": "FAQPage",
				mainEntity: FAQ_ITEMS.map((item) => ({
					"@type": "Question",
					name: item.q,
					acceptedAnswer: {
						"@type": "Answer",
						text: item.a
					}
				}))
			})
		}]
	}),
	component: lazyRouteComponent($$splitComponentImporter$1, "component")
});
var $$splitComponentImporter = () => import("./services-Da388n-q.mjs");
var TITLE = "Nos services — ExpoLearn";
var DESCRIPTION = "Soutien scolaire, préparation aux concours, cours d'anglais, cours d'allemand et accompagnement au visa étudiant : découvrez les services ExpoLearn.";
var Route = createFileRoute("/services/")({
	head: () => ({ meta: [
		{ title: TITLE },
		{
			name: "description",
			content: DESCRIPTION
		},
		{
			property: "og:title",
			content: TITLE
		},
		{
			property: "og:description",
			content: DESCRIPTION
		}
	] }),
	component: lazyRouteComponent($$splitComponentImporter, "component")
});
var IndexRoute = Route$5.update({
	id: "/",
	path: "/",
	getParentRoute: () => Route$6
});
var AProposRoute = Route$4.update({
	id: "/a-propos",
	path: "/a-propos",
	getParentRoute: () => Route$6
});
var CommentCaMarcheRoute = Route$3.update({
	id: "/comment-ca-marche",
	path: "/comment-ca-marche",
	getParentRoute: () => Route$6
});
var ContactRoute = Route$2.update({
	id: "/contact",
	path: "/contact",
	getParentRoute: () => Route$6
});
var FaqRoute = Route$1.update({
	id: "/faq",
	path: "/faq",
	getParentRoute: () => Route$6
});
var InscriptionRoute = Route$8.update({
	id: "/inscription",
	path: "/inscription",
	getParentRoute: () => Route$6
});
var ServicesIndexRoute = Route.update({
	id: "/services/",
	path: "/services/",
	getParentRoute: () => Route$6
});
var rootRouteChildren = {
	IndexRoute,
	AProposRoute,
	CommentCaMarcheRoute,
	ContactRoute,
	FaqRoute,
	InscriptionRoute,
	ServicesSlugRoute: Route$7.update({
		id: "/services/$slug",
		path: "/services/$slug",
		getParentRoute: () => Route$6
	}),
	ServicesIndexRoute
};
var routeTree = Route$6._addFileChildren(rootRouteChildren)._addFileTypes();
var getRouter = () => {
	const queryClient = new QueryClient();
	return createRouter({
		routeTree,
		context: { queryClient },
		scrollRestoration: true,
		defaultPreloadStaleTime: 0
	});
};
//#endregion
export { getRouter };
