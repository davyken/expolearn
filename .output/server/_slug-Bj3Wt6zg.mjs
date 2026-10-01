import { r as getServiceBySlug } from "./_ssr/services-B28n1Riz.mjs";
import { j as notFound, m as createFileRoute, p as lazyRouteComponent } from "./_libs/@tanstack/react-router+[...].mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/_slug-Bj3Wt6zg.js
var $$splitComponentImporter = () => import("./_slug-C-SPsv7u.mjs");
var Route = createFileRoute("/services/$slug")({
	loader: ({ params }) => {
		const service = getServiceBySlug(params.slug);
		if (!service) throw notFound();
		return service;
	},
	head: ({ loaderData }) => {
		if (!loaderData) return {};
		const title = `${loaderData.title} — ExpoLearn`;
		const description = loaderData.heroDescription;
		return { meta: [
			{ title },
			{
				name: "description",
				content: description
			},
			{
				property: "og:title",
				content: title
			},
			{
				property: "og:description",
				content: description
			}
		] };
	},
	component: lazyRouteComponent($$splitComponentImporter, "component")
});
//#endregion
export { Route as t };
