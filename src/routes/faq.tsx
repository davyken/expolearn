import { createFileRoute } from "@tanstack/react-router";
import { Section } from "@/components/ui/section";
import { PageHero } from "@/components/ui/page-hero";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Reveal } from "@/components/ui/reveal";
import { FAQ_ITEMS } from "@/constants/content";
import { FinalCta } from "@/components/home/FinalCta";

const TITLE = "FAQ — Questions fréquentes sur ExpoLearn";
const DESCRIPTION =
  "Sélection des répétiteurs, tarifs, zones couvertes, paiement, changement de répétiteur : les réponses aux questions les plus fréquentes des familles et des répétiteurs.";

export const Route = createFileRoute("/faq")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESCRIPTION },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESCRIPTION },
    ],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: FAQ_ITEMS.map((item) => ({
            "@type": "Question",
            name: item.q,
            acceptedAnswer: { "@type": "Answer", text: item.a },
          })),
        }),
      },
    ],
  }),
  component: FaqPage,
});

function FaqPage() {
  return (
    <>
      <PageHero
        eyebrow="FAQ"
        title="Questions fréquentes"
        description="Si votre question ne figure pas ici, écrivez-nous : nous répondons sous 24 heures ouvrées."
      />
      <Section>
        <Accordion type="single" collapsible className="max-w-3xl">
          {FAQ_ITEMS.map((item, index) => (
            <Reveal key={item.q} delay={index * 60} direction={index % 2 === 0 ? "left" : "right"}>
              <AccordionItem value={`item-${index}`}>
                <AccordionTrigger className="text-left text-base font-semibold">
                  {item.q}
                </AccordionTrigger>
                <AccordionContent className="text-balance-p text-sm text-muted-foreground">
                  {item.a}
                </AccordionContent>
              </AccordionItem>
            </Reveal>
          ))}
        </Accordion>
      </Section>
      <FinalCta />
    </>
  );
}
