import { Link } from "@tanstack/react-router";
import { ArrowRight, MessageCircle, Plane } from "lucide-react";
import { Button } from "@/components/ui/button";
import { buildWhatsAppLink } from "@/lib/whatsapp";
import heroImage from "@/assets/travel/hero-wing.webp";

const STATS = [
  { value: "5 ans", label: "d'expérience" },
  { value: "A1 → C1", label: "allemand certifiant" },
  { value: "IELTS · TCF", label: "TOEFL · TEF · TOEIC" },
  { value: "1 : 1", label: "suivi personnalisé du visa" },
];

function BoardingPass() {
  return (
    <div className="relative w-full max-w-sm rotate-2 rounded-[1.75rem] bg-white/95 text-foreground shadow-[0_30px_80px_-20px_oklch(0.1_0.03_158/0.7)] backdrop-blur transition-transform duration-500 hover:rotate-0">
      <div className="flex items-center justify-between rounded-t-[1.75rem] bg-night px-6 py-4 text-night-foreground">
        <span className="font-display text-sm font-bold tracking-wide">
          BOARDING PASS
        </span>
        <span className="text-xs text-night-foreground/70">ExpoLearn Air</span>
      </div>

      <div className="px-6 pt-5 pb-4">
        <div className="flex items-end justify-between">
          <div>
            <p className="text-[0.65rem] font-semibold tracking-widest text-muted-foreground uppercase">
              Départ
            </p>
            <p className="font-display text-4xl font-extrabold">NSI</p>
            <p className="text-xs text-muted-foreground">Yaoundé</p>
          </div>
          <div className="mb-5 flex flex-1 items-center gap-1 px-3 text-primary">
            <span className="h-px flex-1 border-t-2 border-dashed border-primary/40" />
            <Plane aria-hidden="true" className="size-5" />
            <span className="h-px flex-1 border-t-2 border-dashed border-primary/40" />
          </div>
          <div className="text-right">
            <p className="text-[0.65rem] font-semibold tracking-widest text-muted-foreground uppercase">
              Arrivée
            </p>
            <p className="font-display text-4xl font-extrabold">?</p>
            <p className="text-xs text-muted-foreground">Berlin · Toronto</p>
          </div>
        </div>

        <dl className="mt-5 grid grid-cols-3 gap-3 border-t border-dashed border-border pt-4 text-xs">
          <div>
            <dt className="text-muted-foreground">Passager</dt>
            <dd className="mt-0.5 font-bold">Toi</dd>
          </div>
          <div>
            <dt className="text-muted-foreground">Classe</dt>
            <dd className="mt-0.5 font-bold">A1 → C1</dd>
          </div>
          <div>
            <dt className="text-muted-foreground">Embarquement</dt>
            <dd className="mt-0.5 font-bold text-primary-dark">05 oct. 2026</dd>
          </div>
        </dl>
      </div>

      <div className="relative border-t-2 border-dashed border-border px-6 py-4">
        <span
          aria-hidden="true"
          className="absolute -top-3 -left-3 size-6 rounded-full bg-night/60"
        />
        <span
          aria-hidden="true"
          className="absolute -top-3 -right-3 size-6 rounded-full bg-night/60"
        />
        <div
          aria-hidden="true"
          className="h-9 w-full opacity-80"
          style={{
            backgroundImage:
              "repeating-linear-gradient(90deg, var(--color-foreground) 0 2px, transparent 2px 4px, var(--color-foreground) 4px 5px, transparent 5px 9px)",
          }}
        />
      </div>
    </div>
  );
}

export function Hero() {
  return (
    <section className="under-header relative isolate flex min-h-[100svh] flex-col overflow-hidden bg-night text-night-foreground">
      <img
        src={heroImage}
        alt=""
        aria-hidden="true"
        fetchPriority="high"
        className="animate-ken-burns absolute inset-0 -z-20 h-full w-full object-cover object-[60%_center]"
      />
      <div
        aria-hidden="true"
        className="absolute inset-0 -z-10 bg-gradient-to-r from-night via-night/75 to-night/10"
      />
      <div
        aria-hidden="true"
        className="absolute inset-x-0 bottom-0 -z-10 h-1/2 bg-gradient-to-t from-night via-night/40 to-transparent"
      />

      <div className="container-page grid flex-1 items-center gap-12 py-14 lg:grid-cols-[1.25fr_0.75fr] lg:py-20">
        <div className="max-w-2xl animate-rise">
          <p className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-1.5 text-xs font-semibold tracking-wide backdrop-blur-md sm:text-sm">
            <span className="relative flex size-2">
              <span className="animate-pulse-glow absolute inset-0 rounded-full bg-sunset" />
              <span className="relative size-2 rounded-full bg-sunset" />
            </span>
            Inscriptions ouvertes · Rentrée allemand le 05 octobre
          </p>

          <h1 className="mt-6 text-5xl leading-[0.98] font-extrabold sm:text-6xl lg:text-7xl xl:text-[5.5rem]">
            Ton avenir n'a pas de{" "}
            <span className="font-serif font-normal text-sunset italic">
              frontières.
            </span>
          </h1>

          <p className="text-balance-p mt-6 max-w-lg text-base text-night-foreground/80 sm:text-lg">
            Depuis Yaoundé, ExpoLearn te prépare à partir étudier à l'étranger :
            la langue, le dossier, le visa. Tu n'as plus qu'à boucler ta valise.
          </p>

          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <Button
              asChild
              size="lg"
              className="bg-sunset text-night shadow-[0_10px_30px_-8px_var(--color-sunset)] hover:bg-white"
            >
              <Link to="/inscription">
                Je prépare mon départ
                <ArrowRight aria-hidden="true" />
              </Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="border-white/30 bg-white/5 text-night-foreground backdrop-blur hover:border-white hover:bg-white/15"
            >
              <a
                href={buildWhatsAppLink(
                  "Bonjour ExpoLearn, j'ai un projet d'études à l'étranger.",
                )}
                target="_blank"
                rel="noreferrer"
              >
                <MessageCircle aria-hidden="true" />
                Parler à un conseiller
              </a>
            </Button>
          </div>
        </div>

        <div
          className="hidden animate-rise justify-center lg:flex"
          style={{ animationDelay: "200ms" }}
        >
          <div className="animate-float">
            <BoardingPass />
          </div>
        </div>
      </div>

      <div className="border-t border-white/10 bg-night/40 backdrop-blur-md">
        <dl className="container-page grid grid-cols-2 gap-y-5 py-6 sm:grid-cols-4">
          {STATS.map((stat) => (
            <div
              key={stat.value}
              className="border-white/10 px-1 sm:border-l sm:px-6 sm:first:border-l-0 sm:first:pl-0"
            >
              <dt className="sr-only">{stat.label}</dt>
              <dd>
                <span className="block font-display text-xl font-bold sm:text-2xl">
                  {stat.value}
                </span>
                <span className="text-xs text-night-foreground/65 sm:text-sm">
                  {stat.label}
                </span>
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
