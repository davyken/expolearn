import { n as __toESM } from "../_runtime.mjs";
import { n as useForm, r as require_react, t as u } from "../_libs/@hookform/resolvers+[...].mjs";
import { c as require_jsx_runtime } from "../_libs/@radix-ui/react-accordion+[...].mjs";
import { n as buttonVariants, r as cn, t as Button } from "./button-BsdMR-Om.mjs";
import { o as SITE } from "./site-B4pil6fg.mjs";
import { n as SERVICES } from "./services-B28n1Riz.mjs";
import { t as Reveal } from "./reveal-BuUuG7ND.mjs";
import { n as Section } from "./section-BXjgiglf.mjs";
import { T as CircleCheck, d as Phone, f as MessageCircle, h as Mail, m as MapPin, s as Send } from "../_libs/lucide-react.mjs";
import { t as PageHero } from "./page-hero-BHANOi3r.mjs";
import { t as buildWhatsAppLink } from "./whatsapp-BDPBKj1W.mjs";
import { n as fieldClass, t as Field } from "./form-field-BJE0JYsI.mjs";
import { i as stringType, r as objectType } from "../_libs/zod.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/contact-29mL8Um5.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var schema = objectType({
	name: stringType().min(2, "Indiquez votre nom complet."),
	email: stringType().email("Adresse e-mail invalide."),
	phone: stringType().min(8, "Numéro de téléphone invalide."),
	service: stringType().optional(),
	message: stringType().min(20, "Décrivez votre demande en 20 caractères au minimum.")
});
function buildMessage(data) {
	const lines = [
		"Nouveau message — Contact ExpoLearn",
		"",
		`Nom : ${data.name}`,
		`Téléphone : ${data.phone}`,
		`Email : ${data.email}`
	];
	if (data.service) lines.push(`Service concerné : ${data.service}`);
	lines.push("", "Message :", data.message);
	return lines.join("\n");
}
function ContactPage() {
	const [status, setStatus] = (0, import_react.useState)("idle");
	const [whatsappUrl, setWhatsappUrl] = (0, import_react.useState)("");
	const form = useForm({
		resolver: u(schema),
		defaultValues: {
			name: "",
			email: "",
			phone: "",
			service: "",
			message: ""
		}
	});
	const { errors } = form.formState;
	const onSubmit = (data) => {
		setWhatsappUrl(buildWhatsAppLink(buildMessage(data)));
		setStatus("success");
		form.reset();
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageHero, {
		eyebrow: "Contact",
		title: "Parlons de votre projet",
		description: "Une question sur nos services, nos tarifs ou une inscription ? Écrivez-nous ou appelez-nous directement."
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Section, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "grid gap-12 lg:grid-cols-[1fr_1.2fr]",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Reveal, {
			direction: "left",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
				className: "text-sm font-bold",
				children: "Nos coordonnées"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("ul", {
				className: "mt-4 space-y-3 text-sm",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
						className: "flex items-center gap-2.5",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Phone, {
							"aria-hidden": "true",
							className: "size-4 shrink-0 text-primary-dark"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
							href: SITE.phoneHref,
							className: "hover:underline",
							children: SITE.phone
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
						className: "flex items-center gap-2.5",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Phone, {
							"aria-hidden": "true",
							className: "size-4 shrink-0 text-primary-dark"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
							href: SITE.phoneSecondaryHref,
							className: "hover:underline",
							children: SITE.phoneSecondary
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
						className: "flex items-center gap-2.5",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MessageCircle, {
							"aria-hidden": "true",
							className: "size-4 shrink-0 text-primary-dark"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
							href: SITE.whatsappHref,
							className: "hover:underline",
							children: ["WhatsApp ", SITE.whatsapp]
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
						className: "flex items-center gap-2.5",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Mail, {
							"aria-hidden": "true",
							className: "size-4 shrink-0 text-primary-dark"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
							href: SITE.emailHref,
							className: "hover:underline",
							children: SITE.email
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
						className: "flex items-start gap-2.5",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MapPin, {
							"aria-hidden": "true",
							className: "mt-0.5 size-4 shrink-0 text-primary-dark"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: SITE.address })]
					})
				]
			})]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
			direction: "right",
			delay: 120,
			className: "rounded-3xl border border-border bg-card p-6 shadow-soft sm:p-8",
			children: status === "success" ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "animate-pop flex flex-col items-start gap-4",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "flex size-14 items-center justify-center rounded-full bg-secondary text-primary-dark",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CircleCheck, {
							"aria-hidden": "true",
							className: "size-7"
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "text-lg font-bold",
						children: "Message prêt à être envoyé"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-1 text-sm text-muted-foreground",
						children: "Il ne reste qu'une étape : envoyez votre message à ExpoLearn sur WhatsApp."
					})] }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
						href: whatsappUrl,
						target: "_blank",
						rel: "noopener noreferrer",
						className: cn(buttonVariants({ size: "lg" }), "w-full bg-[#25D366] text-white hover:bg-[#1ebe5b]"),
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Send, { "aria-hidden": "true" }), "Envoyer sur WhatsApp"]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
						variant: "outline",
						onClick: () => setStatus("idle"),
						children: "Envoyer un autre message"
					})
				]
			}) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
				noValidate: true,
				onSubmit: form.handleSubmit(onSubmit),
				className: "space-y-5",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
						label: "Nom complet",
						htmlFor: "name",
						required: true,
						error: errors.name?.message,
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
							id: "name",
							className: cn(fieldClass, errors.name && "border-destructive focus:border-destructive focus:ring-destructive/15"),
							placeholder: "Ex. Marie Nguema",
							...form.register("name")
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
						label: "E-mail",
						htmlFor: "email",
						required: true,
						error: errors.email?.message,
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
							id: "email",
							type: "email",
							className: cn(fieldClass, errors.email && "border-destructive focus:border-destructive focus:ring-destructive/15"),
							placeholder: "vous@exemple.com",
							...form.register("email")
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
						label: "Téléphone",
						htmlFor: "phone",
						required: true,
						error: errors.phone?.message,
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
							id: "phone",
							type: "tel",
							className: cn(fieldClass, errors.phone && "border-destructive focus:border-destructive focus:ring-destructive/15"),
							placeholder: "+237 6 XX XX XX XX",
							...form.register("phone")
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
						label: "Service concerné",
						htmlFor: "service",
						hint: "Facultatif",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("select", {
							id: "service",
							className: fieldClass,
							...form.register("service"),
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
								value: "",
								children: "Sélectionner (facultatif)"
							}), SERVICES.map((service) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
								value: service.title,
								children: service.title
							}, service.slug))]
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
						label: "Message",
						htmlFor: "message",
						required: true,
						error: errors.message?.message,
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("textarea", {
							id: "message",
							rows: 5,
							className: cn(fieldClass, errors.message && "border-destructive focus:border-destructive focus:ring-destructive/15"),
							placeholder: "Décrivez votre demande",
							...form.register("message")
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
						type: "submit",
						size: "lg",
						className: "w-full",
						children: "Envoyer le message"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-xs text-muted-foreground",
						children: "En envoyant, WhatsApp s'ouvre avec votre message pré-rempli : il ne vous reste qu'à appuyer sur Envoyer."
					})
				]
			})
		})]
	}) })] });
}
//#endregion
export { ContactPage as component };
