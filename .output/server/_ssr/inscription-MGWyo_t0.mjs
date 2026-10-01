import { n as SERVICES } from "./services-B28n1Riz.mjs";
import { m as createFileRoute, p as lazyRouteComponent } from "../_libs/@tanstack/react-router+[...].mjs";
import { a as ZodIssueCode, i as stringType, n as enumType, r as objectType, t as arrayType } from "../_libs/zod.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/inscription-MGWyo_t0.js
var SLUGS = SERVICES.map((service) => service.slug);
var $$splitComponentImporter = () => import("./inscription-BnMKgenB.mjs");
var TITLE = "S'inscrire — ExpoLearn";
var DESCRIPTION = "Inscrivez-vous à un service ExpoLearn : soutien scolaire, préparation aux concours, cours d'anglais, cours d'allemand ou accompagnement au visa étudiant.";
var searchSchema = objectType({ service: enumType(SLUGS).optional() });
var Route = createFileRoute("/inscription")({
	validateSearch: searchSchema,
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
objectType({
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
//#endregion
export { SLUGS as n, Route as t };
