import { createFileRoute, notFound } from "@tanstack/react-router";
import { ServiceDetail } from "@/components/services/ServiceDetail";
import { getServiceBySlug } from "@/constants/services";

export const Route = createFileRoute("/services/$slug")({
  loader: ({ params }) => {
    const service = getServiceBySlug(params.slug);
    if (!service) throw notFound();
    return service;
  },
  head: ({ loaderData }) => {
    if (!loaderData) return {};
    const title = `${loaderData.title} — ExpoLearn`;
    const description = loaderData.heroDescription;
    return {
      meta: [
        { title },
        { name: "description", content: description },
        { property: "og:title", content: title },
        { property: "og:description", content: description },
      ],
    };
  },
  component: ServicePage,
});

function ServicePage() {
  const service = Route.useLoaderData();
  return <ServiceDetail service={service} />;
}
