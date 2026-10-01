import { ArrowUpRight, MapPin } from "lucide-react";
import { Link } from "@tanstack/react-router";
import { Reveal } from "@/components/ui/reveal";
import { cn } from "@/lib/utils";
import vancouver from "@/assets/travel/canada-vancouver.webp";
import quebec from "@/assets/travel/canada-quebec.webp";
import toronto from "@/assets/travel/canada-toronto.webp";
import moraine from "@/assets/travel/canada-moraine.webp";
import berlin from "@/assets/berlin-skyline.jpg";

const DESTINATIONS = [
  {
    city: "Vancouver",
    country: "Canada",
    text: "Entre océan et montagnes, une ville étudiante tournée vers le monde.",
    image: vancouver,
    alt: "Le drapeau canadien flotte au-dessus du port et des tours de Vancouver",
    className: "lg:col-span-7 lg:row-span-2",
  },
  {
    city: "Berlin",
    country: "Allemagne",
    text: "Universités reconnues, vie étudiante intense : la langue en poche, tout s'ouvre.",
    image: berlin,
    alt: "Skyline de Berlin au coucher du soleil, avec la tour de télévision",
    className: "lg:col-span-5",
  },
  {
    city: "Québec",
    country: "Canada",
    text: "Étudier en français, au cœur d'une ville historique.",
    image: quebec,
    alt: "Le Château Frontenac illuminé à la tombée de la nuit à Québec",
    className: "lg:col-span-5",
  },
  {
    city: "Toronto",
    country: "Canada",
    text: "La métropole multiculturelle, ses campus et ses opportunités.",
    image: toronto,
    alt: "Skyline de Toronto et la tour CN au crépuscule, vue depuis le lac",
    className: "lg:col-span-7",
  },
  {
    city: "Banff",
    country: "Canada",
    text: "Et des week-ends grandeur nature au lac Moraine.",
    image: moraine,
    alt: "Le lac Moraine, eau turquoise au pied des Rocheuses canadiennes",
    className: "lg:col-span-5",
  },
] as const;

const TICKER = [
  "Berlin",
  "Toronto",
  "Munich",
  "Montréal",
  "Hambourg",
  "Vancouver",
  "Francfort",
  "Québec",
  "Leipzig",
  "Ottawa",
  "Cologne",
  "Calgary",
];

export function Destinations() {
  return (
    <section
      id="destinations"
      className="overflow-hidden bg-background py-20 sm:py-28"
    >
      <div className="container-page">
        <Reveal className="flex flex-col justify-between gap-6 lg:flex-row lg:items-end">
          <div className="max-w-2xl">
            <p className="text-sm font-semibold tracking-widest text-primary uppercase">
              Destinations
            </p>
            <h2 className="mt-3 text-4xl leading-[1.02] font-extrabold sm:text-5xl lg:text-6xl">
              Où veux-tu{" "}
              <span className="font-serif font-normal text-primary italic">
                atterrir
              </span>{" "}
              ?
            </h2>
          </div>
          <p className="text-balance-p max-w-sm text-muted-foreground">
            Canada, Allemagne, et bien d'autres : on construit ton projet autour
            du pays qui te fait rêver.
          </p>
        </Reveal>

        <div className="mt-12 grid auto-rows-[17rem] gap-4 sm:grid-cols-2 lg:grid-cols-12 lg:auto-rows-[15rem]">
          {DESTINATIONS.map((item, index) => (
            <Reveal
              key={item.city}
              delay={index * 80}
              direction="scale"
              className={cn(
                index === 0 && "sm:col-span-2 sm:row-span-2",
                item.className,
              )}
            >
              <Link
                to="/services/$slug"
                params={{ slug: "visa-etudiant" }}
                className="group relative block h-full overflow-hidden rounded-[2rem] bg-night"
              >
                <img
                  src={item.image}
                  alt={item.alt}
                  loading="lazy"
                  className="absolute inset-0 h-full w-full object-cover transition-transform duration-[1.2s] ease-out group-hover:scale-110"
                />
                <div
                  aria-hidden="true"
                  className="absolute inset-0 bg-gradient-to-t from-night/90 via-night/20 to-transparent"
                />
                <span className="absolute top-4 left-4 inline-flex items-center gap-1.5 rounded-full bg-white/90 px-3 py-1 text-xs font-semibold text-foreground backdrop-blur">
                  <MapPin
                    aria-hidden="true"
                    className="size-3.5 text-primary"
                  />
                  {item.country}
                </span>
                <span className="absolute top-4 right-4 flex size-10 translate-y-1 items-center justify-center rounded-full bg-sunset text-night opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
                  <ArrowUpRight aria-hidden="true" className="size-5" />
                </span>
                <div className="absolute inset-x-0 bottom-0 p-6 text-night-foreground">
                  <h3
                    className={cn(
                      "font-extrabold",
                      index === 0
                        ? "text-4xl sm:text-5xl"
                        : "text-2xl sm:text-3xl",
                    )}
                  >
                    {item.city}
                  </h3>
                  <p className="mt-1.5 max-w-sm text-sm text-night-foreground/80">
                    {item.text}
                  </p>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      </div>

      <div
        aria-hidden="true"
        className="mt-16 flex overflow-hidden border-y border-border py-5 [mask-image:linear-gradient(90deg,transparent,black_10%,black_90%,transparent)]"
      >
        <div className="animate-marquee flex shrink-0 gap-10 pr-10">
          {[...TICKER, ...TICKER].map((city, i) => (
            <span
              key={`${city}-${i}`}
              className="flex items-center gap-10 font-display text-3xl font-bold whitespace-nowrap text-foreground/15 sm:text-5xl"
            >
              {city}
              <span className="text-primary/40">✈</span>
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
