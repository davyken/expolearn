import { Section, SectionHeading } from "@/components/ui/section";
import { Reveal } from "@/components/ui/reveal";

const PROBLEMS = [
  "Un retard qui s'installe dans une matière et gagne les autres.",
  "Un concours ou un examen à préparer, sans méthode ni entraînement structuré.",
  "Une langue à maîtriser rapidement pour un objectif académique ou professionnel.",
  "Un projet d'études à l'étranger freiné par des démarches de visa mal comprises.",
];

const ANSWERS = [
  "Un accompagnement scolaire en groupe ou à domicile, dans toutes les matières.",
  "Une préparation ciblée aux concours d'entrée et aux examens officiels.",
  "Des cours d'anglais et d'allemand en présentiel ou en ligne, à votre rythme.",
  "Un accompagnement personnalisé pour préparer votre dossier de visa étudiant.",
];

export function ProblemSolution() {
  return (
    <Section>
      <SectionHeading
        eyebrow="Le point de départ"
        title="Un objectif clair mérite un accompagnement structuré"
        description="Que ce soit un retard scolaire, un concours à préparer, une langue à apprendre ou un projet d'études à l'étranger, ExpoLearn propose une réponse adaptée à chaque situation."
      />

      <div className="mt-10 grid gap-5 lg:grid-cols-2">
        <Reveal direction="left">
          <div className="h-full rounded-3xl border border-border bg-card p-6 sm:p-8">
            <h3 className="text-lg font-bold">
              Ce que vivent les familles et les apprenants
            </h3>
            <ul className="mt-5 space-y-4">
              {PROBLEMS.map((item) => (
                <li
                  key={item}
                  className="flex gap-3 text-sm text-muted-foreground"
                >
                  <span
                    aria-hidden="true"
                    className="mt-1.5 size-1.5 shrink-0 rounded-full bg-highlight"
                  />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </Reveal>

        <Reveal direction="right" delay={120}>
          <div className="h-full rounded-3xl border border-transparent bg-secondary p-6 sm:p-8">
            <h3 className="text-lg font-bold text-secondary-foreground">
              La réponse d'ExpoLearn
            </h3>
            <ul className="mt-5 space-y-4">
              {ANSWERS.map((item) => (
                <li key={item} className="flex gap-3 text-sm text-foreground">
                  <span
                    aria-hidden="true"
                    className="mt-1.5 size-1.5 shrink-0 rounded-full bg-primary-dark"
                  />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </Reveal>
      </div>
    </Section>
  );
}
