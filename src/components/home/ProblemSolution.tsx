import { Section, SectionHeading } from "@/components/ui/section";
import { Reveal } from "@/components/ui/reveal";

const PROBLEMS = [
  "Des classes chargées où l'élève n'ose plus poser de questions.",
  "Un retard qui s'installe dans une matière et gagne les autres.",
  "Des parents disponibles mais sans le temps ni la méthode pour reprendre le programme.",
  "Des répétiteurs trouvés par bouche-à-oreille, sans aucune vérification.",
];

const ANSWERS = [
  "Nous examinons le niveau réel de l'élève et l'objectif fixé par la famille.",
  "Nous proposons un répétiteur dont les matières et la zone correspondent à la demande.",
  "Nous cadrons les horaires, la fréquence et les conditions avant la première séance.",
  "Nous restons l'interlocuteur de la famille pendant toute la période d'accompagnement.",
];

export function ProblemSolution() {
  return (
    <Section>
      <SectionHeading
        eyebrow="Le point de départ"
        title="Un élève ne décroche presque jamais du jour au lendemain"
        description="Le retard scolaire s'installe progressivement. L'objectif d'ExpoLearn est d'intervenir tôt, avec la bonne personne, au bon rythme et au domicile de la famille."
      />

      <div className="mt-10 grid gap-5 lg:grid-cols-2">
        <Reveal direction="left">
          <div className="h-full rounded-3xl border border-border bg-card p-6 sm:p-8">
            <h3 className="text-lg font-bold">Ce que vivent les familles</h3>
            <ul className="mt-5 space-y-4">
              {PROBLEMS.map((item) => (
                <li key={item} className="flex gap-3 text-sm text-muted-foreground">
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
            <h3 className="text-lg font-bold text-secondary-foreground">La réponse d'ExpoLearn</h3>
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
