import { createFileRoute } from "@tanstack/react-router";
import { Section, SectionHeading } from "@/components/ui/section";
import { PageHero } from "@/components/ui/page-hero";
import { CtaButtons } from "@/components/ui/cta-buttons";
import { Reveal } from "@/components/ui/reveal";
import { VALUES } from "@/constants/content";
import { SITE } from "@/constants/site";

const TITLE = "À propos d'ExpoLearn — Notre mission";
const DESCRIPTION =
  "ExpoLearn est une solution camerounaise de répétitions à domicile : sélection des répétiteurs, mise en relation avec les familles et suivi de la progression des élèves.";

export const Route = createFileRoute("/a-propos")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESCRIPTION },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESCRIPTION },
    ],
  }),
  component: AboutPage,
});

function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="À propos"
        title="Rendre le soutien scolaire fiable et accessible"
        description={SITE.tagline}
      >
        <p className="text-balance-p mx-auto mt-4 max-w-xl text-sm text-primary-foreground/80">
          Nous démarrons sur {SITE.cityPlaceholder} et nous étendons notre réseau quartier par
          quartier, avec des répétiteurs qui connaissent le système scolaire camerounais.
        </p>
        <CtaButtons className="mt-8 justify-center" tone="dark" />
      </PageHero>

      <Section>
        <SectionHeading eyebrow="Nos valeurs" title="Ce qui guide nos décisions" />
        <ul className="mt-10 grid gap-5 sm:grid-cols-2">
          {VALUES.map((value, index) => (
            <Reveal
              key={value.title}
              as="li"
              delay={index * 90}
              direction={index % 2 === 0 ? "left" : "right"}
              className="h-full rounded-3xl border border-border bg-card p-6"
            >
              <h3 className="text-base font-bold">{value.title}</h3>
              <p className="text-balance-p mt-2 text-sm text-muted-foreground">{value.text}</p>
            </Reveal>
          ))}
        </ul>
      </Section>

      <Section tone="muted">
        <SectionHeading
          eyebrow="Modèle"
          title="Comment ExpoLearn est rémunéré"
          description="ExpoLearn perçoit une commission sur les séances réalisées. Déposer une demande ou une candidature est gratuit, et aucun paiement n'est demandé avant la mise en relation."
        />
        <p className="mt-6 text-xs text-muted-foreground">
          Informations légales et adresse de l'entreprise : à confirmer avant publication.
        </p>
      </Section>
    </>
  );
}
