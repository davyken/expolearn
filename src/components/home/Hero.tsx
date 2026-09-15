import { useEffect, useState } from "react";
import { CheckCircle2 } from "lucide-react";
import { CtaButtons } from "@/components/ui/cta-buttons";
import { Eyebrow } from "@/components/ui/section";
import { cn } from "@/lib/utils";

const LANGUAGES = [
  { flag: "🇩🇪", label: "Allemand · A1 à C1" },
  { flag: "🇬🇧", label: "Anglais · tous niveaux" },
];

const POINTS = [
  "Cours d'allemand et d'anglais, en présentiel ou en ligne",
  "Accompagnement visa étudiant pour votre projet en Allemagne",
  "Soutien scolaire et préparation aux concours",
];

const GERMAN_CITIES = [
  {
    city: "Berlin",
    text: "La capitale : universités reconnues, vie étudiante dynamique et un vaste choix de filières.",
  },
  {
    city: "Munich",
    text: "Pôle technologique et industriel, avec certaines des meilleures universités d'Allemagne.",
  },
  {
    city: "Hambourg",
    text: "Grand port international tourné vers le commerce, la logistique et les affaires.",
  },
  {
    city: "Francfort",
    text: "Centre financier européen, idéal pour un projet d'études tourné vers l'économie.",
  },
  {
    city: "Cologne",
    text: "Ville étudiante à taille humaine, riche vie culturelle et coût de la vie modéré.",
  },
  {
    city: "Stuttgart",
    text: "Capitale de l'automobile et de l'ingénierie, proche de grandes écoles techniques.",
  },
  {
    city: "Leipzig",
    text: "Ville universitaire en plein essor, réputée pour son accueil des étudiants étrangers.",
  },
  {
    city: "Dresde",
    text: "Entre histoire et innovation, avec des universités techniques de premier plan.",
  },
] as const;

function CityCarousel() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      return;
    }
    const id = window.setInterval(() => {
      setIndex((value) => (value + 1) % GERMAN_CITIES.length);
    }, 3500);
    return () => window.clearInterval(id);
  }, []);

  const current = GERMAN_CITIES[index % GERMAN_CITIES.length]!;

  return (
    <div
      className="animate-float mt-10 inline-flex max-w-xs flex-col gap-1 rounded-2xl border border-border bg-secondary p-4 shadow-soft sm:absolute sm:right-0 sm:bottom-0 sm:mt-0 sm:mb-10"
      style={{ animationDelay: "120ms" }}
    >
      <div key={index} className="animate-fade-swap flex min-h-[62px] flex-col gap-1">
        <p className="text-sm font-semibold text-secondary-foreground">
          🇩🇪 {current.city}
        </p>
        <p className="text-xs text-muted-foreground">{current.text}</p>
      </div>

      <div
        role="tablist"
        aria-label="Villes d'Allemagne"
        className="mt-2 flex items-center gap-1.5"
      >
        {GERMAN_CITIES.map((item, i) => (
          <button
            key={item.city}
            type="button"
            role="tab"
            aria-selected={i === index}
            aria-label={item.city}
            onClick={() => setIndex(i)}
            className={cn(
              "h-1.5 rounded-full transition-all duration-300",
              i === index
                ? "w-4 bg-primary-dark"
                : "w-1.5 bg-primary-dark/25 hover:bg-primary-dark/50",
            )}
          />
        ))}
      </div>
    </div>
  );
}

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-background pt-8 pb-16 text-foreground sm:pt-10 sm:pb-24">
      <div className="container-page relative">
        <div className="max-w-xl animate-rise">
          <Eyebrow>ExpoLearn Language Academy · Yaoundé, Cameroun</Eyebrow>
          <h1 className="mt-5 text-3xl leading-[1.1] font-bold sm:text-4xl lg:text-5xl">
            Apprenez l'allemand, et donnez-vous un avenir en Allemagne
          </h1>
          <p className="text-balance-p mt-5 max-w-lg text-base text-muted-foreground sm:text-lg">
            ExpoLearn est un centre de formation en langues à Yaoundé : cours
            d'allemand et d'anglais du niveau débutant à avancé, et un
            accompagnement complet jusqu'à votre visa étudiant pour partir
            étudier en Allemagne.
          </p>

          <ul className="mt-5 flex flex-wrap gap-2.5">
            {LANGUAGES.map((language) => (
              <li
                key={language.label}
                className="inline-flex items-center gap-1.5 rounded-full border border-border bg-secondary px-3 py-1.5 text-sm font-medium text-secondary-foreground"
              >
                <span aria-hidden="true">{language.flag}</span>
                {language.label}
              </li>
            ))}
          </ul>

          <CtaButtons className="mt-8" />

          <ul className="mt-8 grid gap-2.5">
            {POINTS.map((point) => (
              <li
                key={point}
                className="flex items-center gap-2.5 text-sm text-muted-foreground"
              >
                <CheckCircle2
                  aria-hidden="true"
                  className="size-4 shrink-0 text-primary-dark"
                />
                {point}
              </li>
            ))}
          </ul>
        </div>

        <CityCarousel />
      </div>
    </section>
  );
}
