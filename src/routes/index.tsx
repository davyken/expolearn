import { createFileRoute } from "@tanstack/react-router";
import { Hero } from "@/components/home/Hero";
import { Destinations } from "@/components/home/Destinations";
import { Journey } from "@/components/home/Journey";
import { ServicesOverview } from "@/components/home/ServicesOverview";
import { FinalCta } from "@/components/home/FinalCta";

const TITLE =
  "ExpoLearn — Langues, visa étudiant et formations pour étudier à l'étranger";
const DESCRIPTION =
  "Depuis Yaoundé, ExpoLearn te prépare à partir étudier à l'étranger : cours d'allemand et d'anglais, accompagnement au visa étudiant, soutien scolaire et préparation aux concours.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESCRIPTION },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESCRIPTION },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <>
      <Hero />
      <Destinations />
      <Journey />
      <ServicesOverview />
      <FinalCta withTestimonials />
    </>
  );
}
