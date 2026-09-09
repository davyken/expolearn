import { CheckCircle2 } from "lucide-react";
import { CtaButtons } from "@/components/ui/cta-buttons";
import { Eyebrow } from "@/components/ui/section";
import heroImage from "@/assets/berlin-skyline.jpg";

const LANGUAGES = [
  { flag: "🇩🇪", label: "Allemand · A1 à C1" },
  { flag: "🇬🇧", label: "Anglais · tous niveaux" },
];

const POINTS = [
  "Cours d'allemand et d'anglais, en présentiel ou en ligne",
  "Accompagnement visa étudiant pour votre projet en Allemagne",
  "Soutien scolaire et préparation aux concours",
];

export function Hero() {
  return (
    <section className="relative -mt-16 flex min-h-[85vh] items-center overflow-hidden bg-primary-dark py-20 text-primary-foreground sm:min-h-[90vh] lg:-mt-18">
      <img
        src={heroImage}
        alt="Le panorama de Berlin au coucher du soleil, avec la tour de télévision, symbole d'un projet d'études en Allemagne"
        className="absolute inset-0 h-full w-full object-cover"
      />
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/60 to-black/10"
      />
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent"
      />

      <div className="container-page relative">
        <div className="max-w-xl animate-rise">
          <Eyebrow className="bg-primary-foreground/10 text-primary-foreground ring-1 ring-primary-foreground/20 backdrop-blur">
            ExpoLearn Language Academy · Yaoundé, Cameroun
          </Eyebrow>
          <h1 className="mt-5 text-3xl leading-[1.1] font-bold sm:text-4xl lg:text-5xl">
            Apprenez l'allemand, et donnez-vous un avenir en Allemagne
          </h1>
          <p className="text-balance-p mt-5 max-w-lg text-base text-primary-foreground/85 sm:text-lg">
            ExpoLearn est un centre de formation en langues à Yaoundé : cours
            d'allemand et d'anglais du niveau débutant à avancé, et un
            accompagnement complet jusqu'à votre visa étudiant pour partir
            étudier en Allemagne.
          </p>

          <ul className="mt-5 flex flex-wrap gap-2.5">
            {LANGUAGES.map((language) => (
              <li
                key={language.label}
                className="inline-flex items-center gap-1.5 rounded-full border border-primary-foreground/20 bg-primary-foreground/10 px-3 py-1.5 text-sm font-medium backdrop-blur"
              >
                <span aria-hidden="true">{language.flag}</span>
                {language.label}
              </li>
            ))}
          </ul>

          <CtaButtons className="mt-8" tone="dark" />

          <ul className="mt-8 grid gap-2.5">
            {POINTS.map((point) => (
              <li
                key={point}
                className="flex items-center gap-2.5 text-sm text-primary-foreground/90"
              >
                <CheckCircle2
                  aria-hidden="true"
                  className="size-4 shrink-0 text-highlight"
                />
                {point}
              </li>
            ))}
          </ul>
        </div>

        <div
          className="animate-float mt-10 inline-flex max-w-xs flex-col gap-1 rounded-2xl border border-primary-foreground/20 bg-primary-foreground/10 p-4 backdrop-blur sm:absolute sm:right-0 sm:bottom-0 sm:mt-0 sm:mb-10"
          style={{ animationDelay: "120ms" }}
        >
          <p className="text-sm font-semibold">
            🇩🇪 Berlin, Munich, Hambourg...
          </p>
          <p className="text-xs text-primary-foreground/80">
            Votre projet d'études en Allemagne commence par l'allemand.
            Soutien scolaire, concours et visa étudiant complètent
            l'accompagnement.
          </p>
        </div>
      </div>
    </section>
  );
}
