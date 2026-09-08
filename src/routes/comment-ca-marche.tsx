import { createFileRoute } from "@tanstack/react-router";
import { Section, SectionHeading } from "@/components/ui/section";
import { PageHero } from "@/components/ui/page-hero";
import { CtaButtons } from "@/components/ui/cta-buttons";
import { Reveal } from "@/components/ui/reveal";
import { ServiceCard } from "@/components/services/ServiceCard";
import { HOW_IT_WORKS_STEPS } from "@/constants/content";
import { SERVICES } from "@/constants/services";
import { FinalCta } from "@/components/home/FinalCta";

const TITLE = "Comment ça marche — ExpoLearn";
const DESCRIPTION =
  "Le parcours ExpoLearn étape par étape : premier contact, évaluation du besoin, orientation vers le bon programme et suivi des cours.";

export const Route = createFileRoute("/comment-ca-marche")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESCRIPTION },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESCRIPTION },
    ],
  }),
  component: HowPage,
});

function HowPage() {
  return (
    <>
      <PageHero
        eyebrow="Comment ça marche"
        title="De votre première demande au début des cours"
        description="Le même principe pour tous les services : un besoin clarifié, un programme adapté, un suivi dans la durée."
      >
        <CtaButtons className="mt-8 justify-center" tone="dark" />
      </PageHero>

      <Section>
        <SectionHeading eyebrow="Votre parcours" title="Quatre étapes" />
        <ol className="mt-10 space-y-4">
          {HOW_IT_WORKS_STEPS.map((item, index) => (
            <Reveal
              key={item.step}
              as="li"
              delay={index * 80}
              direction={index % 2 === 0 ? "left" : "right"}
              className="flex gap-4 rounded-3xl border border-border bg-card p-6"
            >
              <span className="font-display text-lg font-bold text-primary-dark">
                {item.step}
              </span>
              <div>
                <h3 className="text-base font-bold">{item.title}</h3>
                <p className="text-balance-p mt-2 text-sm text-muted-foreground">
                  {item.text}
                </p>
              </div>
            </Reveal>
          ))}
        </ol>
      </Section>

      <Section tone="muted">
        <SectionHeading
          eyebrow="Quel service pour vous ?"
          title="Choisissez votre point de départ"
        />
        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
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

      <FinalCta />
    </>
  );
}
