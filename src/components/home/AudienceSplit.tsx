import { Link } from "@tanstack/react-router";
import { ArrowRight, Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Eyebrow, Section } from "@/components/ui/section";
import { Reveal } from "@/components/ui/reveal";
import { PARENT_BENEFITS, TUTOR_BENEFITS } from "@/constants/content";
import parentsImage from "@/assets/parents.jpg";
import tutorImage from "@/assets/tutor-portrait.jpg";

const BLOCKS = [
  {
    eyebrow: "Pour les parents",
    title: "Un accompagnement scolaire cadré, chez vous",
    text: "Vous décrivez le besoin de votre enfant une seule fois. Nous nous occupons de la recherche, de la vérification du profil et de l'organisation des séances.",
    items: PARENT_BENEFITS,
    image: parentsImage,
    alt: "Une mère accompagne son fils pendant ses devoirs à la maison",
    to: "/trouver-un-repetiteur" as const,
    cta: "Trouver un répétiteur",
    variant: "default" as const,
  },
  {
    eyebrow: "Pour les répétiteurs",
    title: "Des missions près de chez vous, sans prospection",
    text: "Enseignants, étudiants et diplômés : déposez votre candidature et recevez des propositions de missions correspondant à vos matières et à vos créneaux.",
    items: TUTOR_BENEFITS,
    image: tutorImage,
    alt: "Portrait d'une étudiante répétitrice avec ses cahiers dans son quartier",
    to: "/devenir-repetiteur" as const,
    cta: "Devenir répétiteur",
    variant: "outline" as const,
  },
];

export function AudienceSplit() {
  return (
    <Section>
      <div className="space-y-14 lg:space-y-20">
        {BLOCKS.map((block, index) => (
          <div key={block.title} className="grid items-center gap-8 lg:grid-cols-2 lg:gap-14">
            <Reveal
              direction={index % 2 === 1 ? "right" : "left"}
              className={index % 2 === 1 ? "lg:order-2" : undefined}
            >
              <Eyebrow>{block.eyebrow}</Eyebrow>
              <h2 className="mt-4 text-2xl font-bold sm:text-3xl">{block.title}</h2>
              <p className="text-balance-p mt-4 text-base text-muted-foreground">{block.text}</p>
              <ul className="mt-6 space-y-3">
                {block.items.map((item) => (
                  <li key={item} className="flex gap-3 text-sm">
                    <Check aria-hidden="true" className="mt-0.5 size-4 shrink-0 text-primary" />
                    {item}
                  </li>
                ))}
              </ul>
              <Button asChild className="mt-7" variant={block.variant}>
                <Link to={block.to}>
                  {block.cta}
                  <ArrowRight aria-hidden="true" />
                </Link>
              </Button>
            </Reveal>
            <Reveal
              direction={index % 2 === 1 ? "left" : "right"}
              delay={120}
              className={index % 2 === 1 ? "lg:order-1" : undefined}
            >
              <img
                src={block.image}
                alt={block.alt}
                loading="lazy"
                width={1200}
                height={912}
                className="aspect-4/3 w-full rounded-3xl border border-border object-cover shadow-soft"
              />
            </Reveal>
          </div>
        ))}
      </div>
    </Section>
  );
}
