import { c as require_jsx_runtime } from "../_libs/@radix-ui/react-accordion+[...].mjs";
import { n as SERVICES } from "./services-B28n1Riz.mjs";
import { t as Reveal } from "./reveal-BuUuG7ND.mjs";
import { n as Section } from "./section-BXjgiglf.mjs";
import { t as PageHero } from "./page-hero-BHANOi3r.mjs";
import { t as CtaButtons } from "./cta-buttons-CerNq2yP.mjs";
import { t as ServiceCard } from "./ServiceCard-4QpeXXaj.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/services-Da388n-q.js
var import_jsx_runtime = require_jsx_runtime();
function ServicesPage() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageHero, {
		eyebrow: "Nos services",
		title: "Cinq services pour apprendre, progresser et réussir",
		description: "Chaque service a son propre format, ses propres niveaux et son propre programme. Choisissez celui qui correspond à votre objectif.",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CtaButtons, {
			className: "mt-8 justify-center",
			tone: "dark"
		})
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Section, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "grid gap-5 sm:grid-cols-2 lg:grid-cols-3",
		children: SERVICES.map((service, index) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
			delay: index * 80,
			direction: index % 2 === 0 ? "left" : "right",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ServiceCard, { service })
		}, service.slug))
	}) })] });
}
//#endregion
export { ServicesPage as component };
