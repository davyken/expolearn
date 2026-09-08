import { createFileRoute } from "@tanstack/react-router";
import { MapPin, User } from "lucide-react";
import { Section, SectionHeading } from "@/components/ui/section";
import { PageHero } from "@/components/ui/page-hero";
import { CtaButtons } from "@/components/ui/cta-buttons";
import { Reveal } from "@/components/ui/reveal";
import { VALUES } from "@/constants/content";
import { SERVICES } from "@/constants/services";
import { SITE } from "@/constants/site";

const TITLE = "À propos d'ExpoLearn — Notre mission";
const DESCRIPTION =
  "ExpoLearn (Exponential Learning) est une entreprise camerounaise d'éducation et de formation basée à Yaoundé : soutien scolaire, langues, préparation aux concours et accompagnement au visa étudiant.";

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
        title="Exponential Learning : accélérer la progression de chaque apprenant"
        description={SITE.positioning}
      >
        <CtaButtons className="mt-8 justify-center" tone="dark" />
      </PageHero>

      <Section>
        <SectionHeading
          eyebrow="Notre mission"
          title="Rendre l'accompagnement éducatif fiable et accessible"
          description="ExpoLearn est née d'un constat simple : la réussite scolaire, académique et professionnelle repose sur un accompagnement personnalisé, assuré par des formateurs réellement compétents. C'est ce que nous organisons, service par service, autour de nos quatre pôles d'activité."
        />

        <div className="mt-10 grid gap-5 sm:grid-cols-2">
          {SERVICES.map((service, index) => (
            <Reveal
              key={service.slug}
              delay={index * 70}
              direction={index % 2 === 0 ? "left" : "right"}
              className="rounded-2xl border border-border bg-card p-5"
            >
              <p className="text-xs font-semibold tracking-wide text-primary-dark uppercase">
                {service.pole}
              </p>
              <h3 className="mt-1.5 text-sm font-bold">{service.title}</h3>
            </Reveal>
          ))}
        </div>
      </Section>

      <Section tone="muted">
        <SectionHeading
          eyebrow="Nos valeurs"
          title="Ce qui guide nos décisions"
        />
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
              <p className="text-balance-p mt-2 text-sm text-muted-foreground">
                {value.text}
              </p>
            </Reveal>
          ))}
        </ul>
      </Section>

      <Section>
        <SectionHeading
          eyebrow="L'entreprise"
          title="Identité de l'entreprise"
        />
        <div className="mt-8 grid gap-5 sm:grid-cols-2">
          <Reveal
            direction="left"
            className="flex items-start gap-4 rounded-3xl border border-border bg-card p-6"
          >
            <span className="flex size-10 shrink-0 items-center justify-center rounded-2xl bg-secondary text-primary-dark">
              <User aria-hidden="true" className="size-5" />
            </span>
            <div>
              <p className="text-sm font-bold">{SITE.founder}</p>
              <p className="mt-1 text-sm text-muted-foreground">
                {SITE.founderRole}
              </p>
            </div>
          </Reveal>
          <Reveal
            direction="right"
            delay={100}
            className="flex items-start gap-4 rounded-3xl border border-border bg-card p-6"
          >
            <span className="flex size-10 shrink-0 items-center justify-center rounded-2xl bg-secondary text-primary-dark">
              <MapPin aria-hidden="true" className="size-5" />
            </span>
            <div>
              <p className="text-sm font-bold">Siège social</p>
              <p className="mt-1 text-sm text-muted-foreground">
                {SITE.address}
              </p>
            </div>
          </Reveal>
        </div>
        <p className="mt-6 text-xs text-muted-foreground">
          {SITE.legalMention}
        </p>
      </Section>
    </>
  );
}
