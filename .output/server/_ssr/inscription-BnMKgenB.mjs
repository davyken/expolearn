import { n as __toESM } from "../_runtime.mjs";
import { n as useForm, r as require_react, t as u } from "../_libs/@hookform/resolvers+[...].mjs";
import { c as require_jsx_runtime } from "../_libs/@radix-ui/react-accordion+[...].mjs";
import { n as buttonVariants, r as cn, t as Button } from "./button-BsdMR-Om.mjs";
import { i as LEVELS, n as EXAM_TYPES, r as FREQUENCIES, s as SUBJECTS, t as DESTINATION_COUNTRIES } from "./site-B4pil6fg.mjs";
import { n as SERVICES, r as getServiceBySlug, t as DEFAULT_SERVICE } from "./services-B28n1Riz.mjs";
import { t as Reveal } from "./reveal-BuUuG7ND.mjs";
import { n as Section } from "./section-BXjgiglf.mjs";
import { N as ArrowRight, O as Check, P as ArrowLeft, T as CircleCheck, s as Send } from "../_libs/lucide-react.mjs";
import { t as PageHero } from "./page-hero-BHANOi3r.mjs";
import { t as buildWhatsAppLink } from "./whatsapp-BDPBKj1W.mjs";
import { n as fieldClass, t as Field } from "./form-field-BJE0JYsI.mjs";
import { a as ZodIssueCode, i as stringType, n as enumType, r as objectType, t as arrayType } from "../_libs/zod.mjs";
import { n as SLUGS, t as Route } from "./inscription-MGWyo_t0.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/inscription-BnMKgenB.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function FormStepper({ steps, current }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ol", {
		className: "mb-8 flex items-center",
		children: steps.map((label, index) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
			className: "flex flex-1 items-center last:flex-none",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex items-center gap-2.5",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: cn("flex size-8 shrink-0 items-center justify-center rounded-full text-sm font-bold transition-colors duration-300", index < current ? "bg-primary text-primary-foreground" : index === current ? "bg-gradient-to-br from-primary to-primary-dark text-primary-foreground shadow-soft" : "bg-secondary text-secondary-foreground"),
					children: index < current ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Check, {
						"aria-hidden": "true",
						className: "size-4"
					}) : index + 1
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: cn("hidden text-sm font-semibold sm:block", index <= current ? "text-foreground" : "text-muted-foreground"),
					children: label
				})]
			}), index < steps.length - 1 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				"aria-hidden": "true",
				className: cn("mx-3 h-px flex-1 transition-colors duration-300", index < current ? "bg-primary" : "bg-border")
			}) : null]
		}, label))
	});
}
var schema = objectType({
	service: enumType(SLUGS, { message: "Sélectionnez un service." }),
	fullName: stringType().min(2, "Indiquez votre nom complet."),
	phone: stringType().min(8, "Numéro de téléphone invalide."),
	email: stringType().email("Adresse e-mail invalide."),
	city: stringType().min(2, "Indiquez votre ville."),
	studentLevel: stringType().optional(),
	subjects: arrayType(stringType()).optional(),
	examType: stringType().optional(),
	currentLevel: stringType().optional(),
	destination: stringType().optional(),
	format: stringType().optional(),
	frequency: stringType().optional(),
	message: stringType().min(20, "Décrivez votre besoin en 20 caractères au minimum.")
}).superRefine((data, ctx) => {
	if (data.service === "soutien-scolaire") {
		if (!data.studentLevel) ctx.addIssue({
			path: ["studentLevel"],
			code: ZodIssueCode.custom,
			message: "Sélectionnez le niveau de l'élève."
		});
		if (!data.subjects || data.subjects.length === 0) ctx.addIssue({
			path: ["subjects"],
			code: ZodIssueCode.custom,
			message: "Sélectionnez au moins une matière."
		});
	}
	if (data.service === "preparation-concours" && !data.examType) ctx.addIssue({
		path: ["examType"],
		code: ZodIssueCode.custom,
		message: "Sélectionnez le concours ou l'examen visé."
	});
	if ((data.service === "cours-anglais" || data.service === "cours-allemand") && !data.currentLevel) ctx.addIssue({
		path: ["currentLevel"],
		code: ZodIssueCode.custom,
		message: "Sélectionnez votre niveau actuel."
	});
	if (data.service === "visa-etudiant" && !data.destination) ctx.addIssue({
		path: ["destination"],
		code: ZodIssueCode.custom,
		message: "Sélectionnez le pays visé."
	});
});
var STEPS = [
	"Le service",
	"Vos coordonnées",
	"Votre besoin"
];
var STEP_FIELDS = [
	["service"],
	[
		"fullName",
		"phone",
		"email",
		"city"
	],
	[
		"studentLevel",
		"subjects",
		"examType",
		"currentLevel",
		"destination",
		"format",
		"frequency",
		"message"
	]
];
function buildMessage(data) {
	const lines = [
		`Nouvelle inscription — ${getServiceBySlug(data.service)?.title ?? data.service}`,
		"",
		`Nom : ${data.fullName}`,
		`Téléphone : ${data.phone}`,
		`Email : ${data.email}`,
		`Ville : ${data.city}`,
		""
	];
	if (data.service === "soutien-scolaire") {
		lines.push(`Niveau de l'élève : ${data.studentLevel}`);
		lines.push(`Matières : ${(data.subjects ?? []).join(", ")}`);
		if (data.format) lines.push(`Format souhaité : ${data.format}`);
		if (data.frequency) lines.push(`Fréquence souhaitée : ${data.frequency}`);
	}
	if (data.service === "preparation-concours") lines.push(`Concours / examen visé : ${data.examType}`);
	if (data.service === "cours-anglais" || data.service === "cours-allemand") {
		lines.push(`Niveau actuel : ${data.currentLevel}`);
		if (data.format) lines.push(`Format souhaité : ${data.format}`);
	}
	if (data.service === "visa-etudiant") lines.push(`Pays visé : ${data.destination}`);
	lines.push("", "Précisions :", data.message);
	return lines.join("\n");
}
function InscriptionPage() {
	const search = Route.useSearch();
	const initialService = SERVICES.some((service) => service.slug === search.service) ? search.service : DEFAULT_SERVICE.slug;
	const [status, setStatus] = (0, import_react.useState)("idle");
	const [step, setStep] = (0, import_react.useState)(0);
	const [whatsappUrl, setWhatsappUrl] = (0, import_react.useState)("");
	const form = useForm({
		resolver: u(schema),
		defaultValues: {
			service: initialService,
			fullName: "",
			phone: "",
			email: "",
			city: "",
			studentLevel: "",
			subjects: [],
			examType: "",
			currentLevel: "",
			destination: "",
			format: "",
			frequency: "",
			message: ""
		}
	});
	const { errors } = form.formState;
	const selectedSlug = form.watch("service");
	const selectedService = getServiceBySlug(selectedSlug) ?? DEFAULT_SERVICE;
	const goNext = async () => {
		if (await form.trigger(STEP_FIELDS[step])) setStep((current) => Math.min(current + 1, STEPS.length - 1));
	};
	const goBack = () => setStep((current) => Math.max(current - 1, 0));
	const onInvalid = () => {
		const firstErrorField = Object.keys(form.formState.errors)[0];
		const stepIndex = STEP_FIELDS.findIndex((fields) => fields.includes(firstErrorField));
		if (stepIndex !== -1) setStep(stepIndex);
	};
	const onSubmit = (data) => {
		setWhatsappUrl(buildWhatsAppLink(buildMessage(data)));
		setStatus("success");
		form.reset();
		setStep(0);
	};
	const pillClass = "flex cursor-pointer items-center gap-2 rounded-full border border-input bg-background px-4 py-2 text-sm text-muted-foreground transition-all duration-200 hover:border-primary has-checked:scale-[1.03] has-checked:border-primary has-checked:bg-secondary has-checked:font-semibold has-checked:text-secondary-foreground";
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageHero, {
		eyebrow: "S'inscrire",
		title: "Inscrivez-vous à un service ExpoLearn",
		description: "Choisissez le service qui correspond à votre objectif, indiquez vos coordonnées, et nous revenons vers vous pour confirmer votre inscription."
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Section, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
		direction: "scale",
		className: "mx-auto max-w-3xl rounded-3xl border border-border bg-card p-6 shadow-soft sm:p-8",
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
					children: "Inscription prête à être envoyée"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-1 text-sm text-muted-foreground",
					children: "Il ne reste qu'une étape : envoyez votre inscription à ExpoLearn sur WhatsApp."
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
					onClick: () => {
						setStatus("idle");
						setStep(0);
					},
					children: "Envoyer une autre inscription"
				})
			]
		}) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
			noValidate: true,
			onSubmit: form.handleSubmit(onSubmit, onInvalid),
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FormStepper, {
					steps: STEPS,
					current: step
				}),
				step === 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "animate-pop space-y-3",
					children: [
						SERVICES.map((service) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
							className: cn("flex cursor-pointer items-start gap-3 rounded-2xl border border-input bg-background px-4 py-3.5 transition-all duration-200 hover:border-primary has-checked:border-primary has-checked:bg-secondary"),
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
								type: "radio",
								value: service.slug,
								className: "mt-1 size-4 accent-[var(--primary-dark)]",
								...form.register("service")
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "block text-sm font-semibold",
								children: service.title
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "mt-0.5 block text-xs text-muted-foreground",
								children: service.shortDescription
							})] })]
						}, service.slug)),
						errors.service ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							role: "alert",
							className: "text-xs font-medium text-destructive",
							children: errors.service.message
						}) : null,
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
							type: "button",
							size: "lg",
							className: "w-full",
							onClick: goNext,
							children: ["Continuer", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { "aria-hidden": "true" })]
						})
					]
				}) : null,
				step === 1 ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "animate-pop space-y-5",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "grid gap-5 sm:grid-cols-2",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
								label: "Nom complet",
								htmlFor: "fullName",
								required: true,
								error: errors.fullName?.message,
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
									id: "fullName",
									className: cn(fieldClass, errors.fullName && "border-destructive focus:border-destructive focus:ring-destructive/15"),
									placeholder: "Ex. Marie Nguema",
									...form.register("fullName")
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
								label: "Ville",
								htmlFor: "city",
								required: true,
								error: errors.city?.message,
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
									id: "city",
									className: cn(fieldClass, errors.city && "border-destructive focus:border-destructive focus:ring-destructive/15"),
									placeholder: "Yaoundé",
									...form.register("city")
								})
							})
						]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex gap-3",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
							type: "button",
							variant: "outline",
							size: "lg",
							onClick: goBack,
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowLeft, { "aria-hidden": "true" }), "Retour"]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
							type: "button",
							size: "lg",
							className: "flex-1",
							onClick: goNext,
							children: ["Continuer", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { "aria-hidden": "true" })]
						})]
					})]
				}) : null,
				step === 2 ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "animate-pop space-y-5",
					children: [
						selectedSlug === "soutien-scolaire" ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
								label: "Niveau de l'élève",
								htmlFor: "studentLevel",
								required: true,
								error: errors.studentLevel?.message,
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("select", {
									id: "studentLevel",
									className: cn(fieldClass, errors.studentLevel && "border-destructive focus:border-destructive focus:ring-destructive/15"),
									...form.register("studentLevel"),
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
										value: "",
										children: "Sélectionner un niveau"
									}), LEVELS.map((level) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
										value: level,
										children: level
									}, level))]
								})
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
								label: "Matières concernées",
								htmlFor: "subjects",
								required: true,
								error: errors.subjects?.message,
								hint: "Plusieurs choix possibles.",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									id: "subjects",
									className: "flex flex-wrap gap-2.5",
									children: SUBJECTS.map((subject) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
										className: pillClass,
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
											type: "checkbox",
											value: subject,
											className: "size-4 accent-[var(--primary-dark)]",
											...form.register("subjects")
										}), subject]
									}, subject))
								})
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "grid gap-5 sm:grid-cols-2",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
									label: "Format souhaité",
									htmlFor: "format",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("select", {
										id: "format",
										className: fieldClass,
										...form.register("format"),
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
											value: "",
											children: "Sélectionner (facultatif)"
										}), selectedService.formats.map((format) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
											value: format,
											children: format
										}, format))]
									})
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
									label: "Fréquence souhaitée",
									htmlFor: "frequency",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("select", {
										id: "frequency",
										className: fieldClass,
										...form.register("frequency"),
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
											value: "",
											children: "Sélectionner (facultatif)"
										}), FREQUENCIES.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
											value: item,
											children: item
										}, item))]
									})
								})]
							})
						] }) : null,
						selectedSlug === "preparation-concours" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
							label: "Concours ou examen visé",
							htmlFor: "examType",
							required: true,
							error: errors.examType?.message,
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("select", {
								id: "examType",
								className: cn(fieldClass, errors.examType && "border-destructive focus:border-destructive focus:ring-destructive/15"),
								...form.register("examType"),
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
									value: "",
									children: "Sélectionner"
								}), EXAM_TYPES.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
									value: item,
									children: item
								}, item))]
							})
						}) : null,
						selectedSlug === "cours-anglais" || selectedSlug === "cours-allemand" ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "grid gap-5 sm:grid-cols-2",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
								label: "Niveau actuel",
								htmlFor: "currentLevel",
								required: true,
								error: errors.currentLevel?.message,
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("select", {
									id: "currentLevel",
									className: cn(fieldClass, errors.currentLevel && "border-destructive focus:border-destructive focus:ring-destructive/15"),
									...form.register("currentLevel"),
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
										value: "",
										children: "Sélectionner"
									}), (selectedService.levels ?? []).map((level) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
										value: level,
										children: level
									}, level))]
								})
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
								label: "Format souhaité",
								htmlFor: "format",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("select", {
									id: "format",
									className: fieldClass,
									...form.register("format"),
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
										value: "",
										children: "Sélectionner (facultatif)"
									}), selectedService.formats.map((format) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
										value: format,
										children: format
									}, format))]
								})
							})]
						}) : null,
						selectedSlug === "visa-etudiant" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
							label: "Pays visé",
							htmlFor: "destination",
							required: true,
							error: errors.destination?.message,
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("select", {
								id: "destination",
								className: cn(fieldClass, errors.destination && "border-destructive focus:border-destructive focus:ring-destructive/15"),
								...form.register("destination"),
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
									value: "",
									children: "Sélectionner"
								}), DESTINATION_COUNTRIES.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
									value: item,
									children: item
								}, item))]
							})
						}) : null,
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
							label: "Précisions",
							htmlFor: "message",
							required: true,
							error: errors.message?.message,
							hint: "Objectif, disponibilités, dates envisagées...",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("textarea", {
								id: "message",
								rows: 4,
								className: cn(fieldClass, errors.message && "border-destructive focus:border-destructive focus:ring-destructive/15"),
								placeholder: "Ex. Rattraper le retard en mathématiques en classe de 3e, séances en fin d'après-midi.",
								...form.register("message")
							})
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex gap-3",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
								type: "button",
								variant: "outline",
								size: "lg",
								onClick: goBack,
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowLeft, { "aria-hidden": "true" }), "Retour"]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
								type: "submit",
								size: "lg",
								className: "flex-1",
								children: "Envoyer mon inscription"
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-xs text-muted-foreground",
							children: "En envoyant, WhatsApp s'ouvre avec votre inscription pré-remplie : il ne vous reste qu'à appuyer sur Envoyer."
						})
					]
				}) : null
			]
		})
	}) })] });
}
//#endregion
export { InscriptionPage as component };
