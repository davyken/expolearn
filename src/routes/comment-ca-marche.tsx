import { createFileRoute } from "@tanstack/react-router";
import { Section, SectionHeading } from "@/components/ui/section";
import { PageHero } from "@/components/ui/page-hero";
import { CtaButtons } from "@/components/ui/cta-buttons";
import { Reveal } from "@/components/ui/reveal";
import { HOW_IT_WORKS_PARENT, HOW_IT_WORKS_TUTOR } from "@/constants/content";
import { FinalCta } from "@/components/home/FinalCta";

const TITLE = "Comment ça marche — ExpoLearn";
const DESCRIPTION =
  "Le parcours ExpoLearn étape par étape, pour les parents comme pour les répétiteurs : demande, sélection du profil, mise en relation et suivi des séances.";

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

function Steps({ items }: { items: readonly { step: string; title: string; text: string }[] }) {
  return (
    <ol className="mt-10 space-y-4">
      {items.map((item, index) => (
        <Reveal
          key={item.step}
          as="li"
          delay={index * 80}
          direction={index % 2 === 0 ? "left" : "right"}
          className="flex gap-4 rounded-3xl border border-border bg-card p-6"
        >
          <span className="font-display text-lg font-bold text-primary-dark">{item.step}</span>
          <div>
            <h3 className="text-base font-bold">{item.title}</h3>
            <p className="text-balance-p mt-2 text-sm text-muted-foreground">{item.text}</p>
          </div>
        </Reveal>
      ))}
    </ol>
  );
}

function HowPage() {
  return (
    <>
      <PageHero
        eyebrow="Comment ça marche"
        title="De votre première demande à la progression de l'élève"
        description="Le même principe pour tout le monde : un besoin clarifié, un profil vérifié, un cadre défini avant la première séance."
      >
        <CtaButtons className="mt-8 justify-center" tone="dark" />
      </PageHero>

      <Section>
        <SectionHeading eyebrow="Parents" title="Le parcours côté famille" />
        <Steps items={HOW_IT_WORKS_PARENT} />
      </Section>

      <Section tone="muted">
        <SectionHeading eyebrow="Répétiteurs" title="Le parcours côté répétiteur" />
        <Steps items={HOW_IT_WORKS_TUTOR} />
      </Section>

      <FinalCta />
    </>
  );
}
