import { Link } from "@tanstack/react-router";
import {
  ArrowRight,
  FileCheck2,
  Languages,
  PlaneTakeoff,
  Stamp,
  type LucideIcon,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Reveal } from "@/components/ui/reveal";
import windowImage from "@/assets/travel/plane-window.webp";

const STEPS: { icon: LucideIcon; title: string; text: string; tag: string }[] =
  [
    {
      icon: Languages,
      title: "Tu maîtrises la langue",
      text: "Allemand du A1 au C1, anglais tous niveaux avec préparation IELTS, TOEFL, TOEIC, TCF ou TEF. En présentiel à Yaoundé ou en ligne.",
      tag: "Dès 20 000 FCFA / mois",
    },
    {
      icon: FileCheck2,
      title: "On monte ton dossier",
      text: "On fait le point sur ton projet et le pays visé, puis on prépare chaque pièce avec toi, sans rien laisser au hasard.",
      tag: "Frais de dossier : 10 000 FCFA",
    },
    {
      icon: Stamp,
      title: "Tu obtiens ton visa",
      text: "Démarches, rendez-vous, conseils d'immigration : un suivi individuel jusqu'à la finalisation de ton dossier.",
      tag: "Accompagnement 1 : 1",
    },
    {
      icon: PlaneTakeoff,
      title: "Tu décolles",
      text: "Valise bouclée, niveau validé, papiers en règle. Ta nouvelle vie d'étudiant à l'étranger commence.",
      tag: "Bon vol !",
    },
  ];

export function Journey() {
  return (
    <section
      id="parcours"
      className="relative overflow-hidden bg-night py-20 text-night-foreground sm:py-28"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(circle at 85% 10%, color-mix(in oklch, var(--color-sunset) 18%, transparent), transparent 40%), radial-gradient(circle at 5% 90%, color-mix(in oklch, var(--color-primary) 25%, transparent), transparent 45%)",
        }}
      />

      <div className="container-page relative grid gap-14 lg:grid-cols-[0.85fr_1.15fr] lg:gap-20">
        <div className="lg:sticky lg:top-28 lg:self-start">
          <Reveal>
            <p className="text-sm font-semibold tracking-widest text-sunset uppercase">
              Ton parcours
            </p>
            <h2 className="mt-3 text-4xl leading-[1.02] font-extrabold sm:text-5xl">
              De Yaoundé au{" "}
              <span className="font-serif font-normal text-sunset italic">
                campus
              </span>
              , en quatre escales.
            </h2>
            <p className="text-balance-p mt-5 max-w-md text-night-foreground/70">
              Un seul interlocuteur pour tout ton projet : on te forme, on
              t'oriente et on t'accompagne jusqu'au départ.
            </p>
          </Reveal>

          <Reveal
            delay={150}
            className="relative mt-10 hidden max-w-sm sm:block"
          >
            <img
              src={windowImage}
              alt="Coucher de soleil au-dessus des nuages, vu depuis le hublot d'un avion"
              loading="lazy"
              width={900}
              height={1200}
              className="aspect-[4/5] w-full rounded-[2.5rem] object-cover shadow-2xl ring-1 ring-white/10"
            />
            <div className="animate-float absolute -right-6 bottom-8 rounded-2xl bg-white px-4 py-3 text-foreground shadow-xl">
              <p className="text-xs text-muted-foreground">Altitude</p>
              <p className="font-display text-lg font-bold">Ton ambition ✈</p>
            </div>
          </Reveal>
        </div>

        <ol className="relative">
          <span
            aria-hidden="true"
            className="absolute top-4 bottom-4 left-6 w-px border-l-2 border-dashed border-white/20"
          />
          {STEPS.map((step, index) => {
            const Icon = step.icon;
            return (
              <Reveal
                key={step.title}
                as="li"
                delay={index * 80}
                direction="left"
                className="relative pb-12 pl-20 last:pb-0"
              >
                <span className="absolute top-0 left-0 flex size-12 items-center justify-center rounded-2xl bg-sunset text-night shadow-[0_0_0_8px_var(--color-night)]">
                  <Icon aria-hidden="true" className="size-5" />
                </span>
                <p className="font-display text-sm font-bold text-night-foreground/40">
                  Escale 0{index + 1}
                </p>
                <h3 className="mt-1 text-2xl font-bold sm:text-3xl">
                  {step.title}
                </h3>
                <p className="text-balance-p mt-3 max-w-lg text-night-foreground/70">
                  {step.text}
                </p>
                <span className="mt-4 inline-flex rounded-full border border-white/15 bg-white/5 px-3 py-1 text-xs font-semibold text-night-foreground/85">
                  {step.tag}
                </span>
              </Reveal>
            );
          })}

          <Reveal as="li" className="mt-12 pl-20">
            <Button
              asChild
              size="lg"
              className="bg-white text-night hover:bg-sunset"
            >
              <Link to="/comment-ca-marche">
                Voir le parcours en détail
                <ArrowRight aria-hidden="true" />
              </Link>
            </Button>
          </Reveal>
        </ol>
      </div>
    </section>
  );
}
