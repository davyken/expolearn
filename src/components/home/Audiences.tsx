import { Link } from "@tanstack/react-router";
import { ArrowRight, Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Eyebrow, Section } from "@/components/ui/section";
import { Reveal } from "@/components/ui/reveal";
import parentsImage from "@/assets/parents.jpg";
import studentsImage from "@/assets/students.jpg";
import tutorImage from "@/assets/tutor-portrait.jpg";

const BLOCKS = [
  {
    eyebrow: "Pour les élèves",
    title: "Un accompagnement scolaire cadré, en groupe ou à domicile",
    text: "Du primaire à la terminale, dans toutes les matières : nous partons du niveau réel de l'élève pour construire un accompagnement qui lui correspond.",
    items: [
      "Cours en groupe au siège d'ExpoLearn, ou séances individuelles à domicile",
      "Formateurs expérimentés et à l'écoute",
      "Évaluations régulières pour suivre la progression",
    ],
    image: parentsImage,
    alt: "Une mère accompagne son fils pendant ses devoirs à la maison",
    to: "/services/$slug" as const,
    params: { slug: "soutien-scolaire" as const },
    cta: "Découvrir le soutien scolaire",
  },
  {
    eyebrow: "Pour les candidats aux concours et examens",
    title: "Une préparation méthodique pour aborder l'épreuve avec confiance",
    text: "Concours d'entrée aux grandes écoles, examens officiels : une préparation structurée autour des épreuves visées.",
    items: [
      "Méthodologie et entraînement aux épreuves types",
      "Sessions en groupe ou accompagnement individuel",
      "Suivi selon le concours ou l'examen visé",
    ],
    image: studentsImage,
    alt: "Deux élèves en uniforme révisent ensemble avec leurs cahiers",
    to: "/services/$slug" as const,
    params: { slug: "preparation-concours" as const },
    cta: "Découvrir la préparation aux concours",
  },
  {
    eyebrow: "Pour les étudiants et jeunes professionnels",
    title:
      "Des langues et un accompagnement pour vos projets à l'international",
    text: "Cours d'anglais et d'allemand en présentiel ou en ligne, et accompagnement personnalisé pour votre dossier de visa étudiant.",
    items: [
      "Anglais et allemand, du niveau débutant à avancé",
      "Préparation possible aux certifications internationales",
      "Accompagnement pour les démarches de visa étudiant et d'immigration",
    ],
    image: tutorImage,
    alt: "Portrait d'une jeune étudiante avec ses cahiers dans son quartier",
    to: "/services" as const,
    params: {},
    cta: "Voir les cours de langues et le visa étudiant",
  },
];

export function Audiences() {
  return (
    <Section>
      <div className="space-y-14 lg:space-y-20">
        {BLOCKS.map((block, index) => (
          <div
            key={block.title}
            className="grid items-center gap-8 lg:grid-cols-2 lg:gap-14"
          >
            <Reveal
              direction={index % 2 === 1 ? "right" : "left"}
              className={index % 2 === 1 ? "lg:order-2" : undefined}
            >
              <Eyebrow>{block.eyebrow}</Eyebrow>
              <h2 className="mt-4 text-2xl font-bold sm:text-3xl">
                {block.title}
              </h2>
              <p className="text-balance-p mt-4 text-base text-muted-foreground">
                {block.text}
              </p>
              <ul className="mt-6 space-y-3">
                {block.items.map((item) => (
                  <li key={item} className="flex gap-3 text-sm">
                    <Check
                      aria-hidden="true"
                      className="mt-0.5 size-4 shrink-0 text-primary"
                    />
                    {item}
                  </li>
                ))}
              </ul>
              <Button asChild className="mt-7">
                <Link to={block.to} params={block.params}>
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
