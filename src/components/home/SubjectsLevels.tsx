import { Section, SectionHeading } from "@/components/ui/section";
import { Reveal } from "@/components/ui/reveal";
import { LEVELS, SUBJECTS } from "@/constants/site";

export function SubjectsLevels() {
  return (
    <Section tone="muted">
      <div className="grid gap-10 lg:grid-cols-2 lg:gap-16">
        <div>
          <SectionHeading
            eyebrow="Soutien scolaire"
            title="Les matières couvertes"
            description="Si la matière recherchée n'apparaît pas, indiquez-la dans votre inscription : nous adaptons l'accompagnement."
          />
          <ul className="mt-8 flex flex-wrap gap-2.5">
            {SUBJECTS.map((subject, index) => (
              <Reveal
                key={subject}
                as="li"
                delay={index * 45}
                direction="scale"
                className="rounded-full border border-border bg-card px-4 py-2 text-sm font-medium transition-colors hover:border-primary"
              >
                {subject}
              </Reveal>
            ))}
          </ul>
        </div>

        <div>
          <SectionHeading
            eyebrow="Niveaux"
            title="Les niveaux scolaires accompagnés"
            description="Du primaire à la terminale, avec une attention particulière aux classes d'examen."
          />
          <ul className="mt-8 grid gap-2.5 sm:grid-cols-2">
            {LEVELS.map((level, index) => (
              <Reveal
                key={level}
                as="li"
                delay={index * 45}
                direction="scale"
                className="rounded-2xl border border-border bg-card px-4 py-3 text-sm font-medium transition-colors hover:border-primary"
              >
                {level}
              </Reveal>
            ))}
          </ul>
        </div>
      </div>
    </Section>
  );
}
