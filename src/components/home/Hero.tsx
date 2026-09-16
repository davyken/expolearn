import { useEffect, useState } from "react";
import { CheckCircle2, Sparkles } from "lucide-react";
import { CtaButtons } from "@/components/ui/cta-buttons";
import { Eyebrow } from "@/components/ui/section";
import { cn } from "@/lib/utils";
import berlinSkyline from "@/assets/berlin-skyline.jpg";

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
      className="animate-float mt-6 inline-flex max-w-xs flex-col gap-1 rounded-2xl border border-border bg-secondary/95 p-4 shadow-soft backdrop-blur-sm sm:absolute sm:-right-4 sm:-bottom-6 sm:mt-0 lg:-right-8"
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
    <section className="relative overflow-hidden bg-background pt-10 pb-20 text-foreground sm:pt-14 sm:pb-28">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(circle at 12% 8%, color-mix(in oklch, var(--color-primary) 14%, transparent), transparent 45%), radial-gradient(circle at 92% 28%, color-mix(in oklch, var(--color-highlight) 16%, transparent), transparent 50%)",
        }}
      />

      <div className="container-page relative grid gap-14 lg:grid-cols-[1.05fr_0.95fr] lg:items-center lg:gap-10 xl:gap-16">
        <div className="max-w-xl animate-rise">
          <Eyebrow>ExpoLearn Language Academy · Yaoundé, Cameroun</Eyebrow>
          <h1 className="mt-5 text-4xl leading-[1.08] font-bold text-balance sm:text-5xl lg:text-[3.25rem]">
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

          <ul className="mt-9 grid gap-3 border-t border-border pt-6 sm:grid-cols-2">
            {POINTS.map((point) => (
              <li
                key={point}
                className="flex items-start gap-2.5 text-sm text-muted-foreground"
              >
                <CheckCircle2
                  aria-hidden="true"
                  className="mt-0.5 size-4 shrink-0 text-primary-dark"
                />
                {point}
              </li>
            ))}
          </ul>
        </div>

        <div className="relative animate-rise" style={{ animationDelay: "90ms" }}>
          <div
            aria-hidden="true"
            className="absolute -inset-6 -z-10 rounded-[3rem] bg-primary/10 blur-2xl"
          />
          <div className="relative overflow-hidden rounded-[2rem] border border-border shadow-card sm:rounded-[2.5rem]">
            <img
              src={berlinSkyline}
              alt="Skyline de Berlin au coucher du soleil, avec la tour de télévision"
              width={1600}
              height={1066}
              className="aspect-3/2 w-full object-cover"
            />
            <div
              aria-hidden="true"
              className="absolute inset-0 bg-gradient-to-t from-primary-dark/35 via-transparent to-transparent"
            />
          </div>

          <div className="animate-float absolute -top-5 left-4 inline-flex items-center gap-2 rounded-2xl border border-border bg-card px-4 py-2.5 shadow-soft sm:-left-6">
            <Sparkles aria-hidden="true" className="size-4 text-highlight-foreground" />
            <span className="text-sm font-semibold">5 ans d'expérience</span>
          </div>

          <CityCarousel />
        </div>
      </div>
    </section>
  );
}
