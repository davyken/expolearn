import { Link } from "@tanstack/react-router";
import { ArrowRight, Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Eyebrow, Section } from "@/components/ui/section";
import { Reveal } from "@/components/ui/reveal";
import parentsImage from "@/assets/parents.jpg";
import examImage from "@/assets/preparation-concours.jpg";
import germanClassImage from "@/assets/cours-allemand.jpg";
import visaImage from "@/assets/visa-etudiant.jpg";

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
    image: examImage,
    alt: "Des candidats passent un examen écrit dans une salle de concours",
    to: "/services/$slug" as const,
    params: { slug: "preparation-concours" as const },
    cta: "Découvrir la préparation aux concours",
  },
  {
    eyebrow: "ExpoLearn Language Academy",
    title: "Allemand et anglais, du niveau débutant à avancé",
    text: "Des cours de langues structurés selon le Cadre européen commun de référence (A1 à C1), pour vos études, votre carrière ou votre projet en Allemagne.",
    items: [
      "Allemand A1 à C1, pour vos études ou votre immigration en Allemagne",
      "Anglais tous niveaux, avec préparation possible aux certifications",
      "Cours en présentiel à Yaoundé ou en ligne",
    ],
    image: germanClassImage,
    alt: "Une formatrice anime un cours d'allemand devant des apprenants avec leurs manuels",
    to: "/services/$slug" as const,
    params: { slug: "cours-allemand" as const },
    cta: "Découvrir les cours d'allemand et d'anglais",
  },
  {
    eyebrow: "Pour les étudiants avec un projet à l'étranger",
    title: "Un accompagnement pour votre visa étudiant en Allemagne",
    text: "De la constitution du dossier aux démarches d'immigration, un suivi personnalisé pour concrétiser votre projet d'études à l'étranger.",
    items: [
      "Point sur votre projet d'études et le pays visé",
      "Aide à la constitution du dossier de visa étudiant",
      "Suivi personnalisé jusqu'à la finalisation des démarches",
    ],
    image: visaImage,
    alt: "Vérification d'un passeport lors des démarches de visa étudiant",
    to: "/services/$slug" as const,
    params: { slug: "visa-etudiant" as const },
    cta: "Découvrir l'accompagnement visa étudiant",
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
