import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/ui/page-hero";
import { Section } from "@/components/ui/section";
import { Reveal } from "@/components/ui/reveal";
import { ServiceCard } from "@/components/services/ServiceCard";
import { CtaButtons } from "@/components/ui/cta-buttons";
import { SERVICES } from "@/constants/services";

const TITLE = "Nos services — ExpoLearn";
const DESCRIPTION =
  "Soutien scolaire, préparation aux concours, cours d'anglais, cours d'allemand et accompagnement au visa étudiant : découvrez les services ExpoLearn.";

export const Route = createFileRoute("/services/")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESCRIPTION },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESCRIPTION },
    ],
  }),
  component: ServicesPage,
});

function ServicesPage() {
  return (
    <>
      <PageHero
        eyebrow="Nos services"
        title="Cinq services pour apprendre, progresser et réussir"
        description="Chaque service a son propre format, ses propres niveaux et son propre programme. Choisissez celui qui correspond à votre objectif."
      >
        <CtaButtons className="mt-8 justify-center" tone="dark" />
      </PageHero>

      <Section>
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {SERVICES.map((service, index) => (
            <Reveal
              key={service.slug}
              delay={index * 80}
              direction={index % 2 === 0 ? "left" : "right"}
            >
              <ServiceCard service={service} />
            </Reveal>
          ))}
        </div>
      </Section>
    </>
  );
}
