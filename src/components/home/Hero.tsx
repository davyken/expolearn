import { CheckCircle2 } from "lucide-react";
import { CtaButtons } from "@/components/ui/cta-buttons";
import { Eyebrow } from "@/components/ui/section";
import heroImage from "@/assets/hero-tutoring.jpg";

const POINTS = [
  "Soutien scolaire, langues, concours et visa étudiant",
  "Formateurs expérimentés et accompagnement personnalisé",
  "Présentiel à Yaoundé et cours en ligne",
];

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-muted">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-24 -right-24 size-72 rounded-full bg-primary/20 blur-3xl"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-32 -left-16 size-72 rounded-full bg-highlight/15 blur-3xl"
      />
      <div className="container-page relative grid items-center gap-10 py-12 sm:py-16 lg:grid-cols-2 lg:gap-14 lg:py-24">
        <div className="animate-rise">
          <Eyebrow>Exponential Learning · Yaoundé, Cameroun</Eyebrow>
          <h1 className="mt-5 text-3xl leading-[1.1] font-bold sm:text-4xl lg:text-5xl">
            Apprendre, progresser et réussir avec ExpoLearn
          </h1>
          <p className="text-balance-p mt-5 max-w-xl text-base text-muted-foreground sm:text-lg">
            ExpoLearn accompagne élèves, étudiants et jeunes professionnels :
            soutien scolaire, préparation aux concours, cours d'anglais et
            d'allemand, et accompagnement au visa étudiant.
          </p>

          <CtaButtons className="mt-8" />

          <ul className="mt-8 grid gap-2.5">
            {POINTS.map((point) => (
              <li
                key={point}
                className="flex items-center gap-2.5 text-sm text-foreground"
              >
                <CheckCircle2
                  aria-hidden="true"
                  className="size-4 shrink-0 text-primary"
                />
                {point}
              </li>
            ))}
          </ul>
        </div>

        <div
          className="relative animate-rise"
          style={{ animationDelay: "120ms" }}
        >
          <div className="overflow-hidden rounded-3xl border border-border bg-card shadow-card">
            <img
              src={heroImage}
              alt="Un formateur ExpoLearn accompagne une élève sur son cahier d'exercices"
              width={1408}
              height={1056}
              className="h-full w-full object-cover"
            />
          </div>
          <div className="animate-float mt-4 rounded-2xl border border-border bg-card p-4 shadow-soft sm:absolute sm:-bottom-8 sm:-left-6 sm:mt-0 sm:max-w-64">
            <p className="text-sm font-semibold">
              Du primaire aux projets d'études à l'étranger
            </p>
            <p className="mt-1 text-xs text-muted-foreground">
              Cinq services complémentaires, selon le niveau et l'objectif de
              chaque apprenant.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
