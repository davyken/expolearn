import { Link } from "@tanstack/react-router";
import {
  ArrowUpRight,
  BarChart3,
  CalendarDays,
  Globe2,
  ShieldCheck,
  Target,
} from "lucide-react";
import { Reveal } from "@/components/ui/reveal";
import { SERVICES, type ServiceSlug } from "@/constants/services";
import { cn } from "@/lib/utils";
import germanClass from "@/assets/cours-allemand.jpg";
import visaImage from "@/assets/visa-etudiant.jpg";
import studentsImage from "@/assets/students.jpg";
import parentsImage from "@/assets/parents.jpg";
import examImage from "@/assets/preparation-concours.jpg";

const LAYOUT: Record<
  ServiceSlug,
  { image: string; alt: string; className: string; big?: boolean }
> = {
  "cours-allemand": {
    image: germanClass,
    alt: "Une formatrice anime un cours d'allemand devant des apprenants",
    className: "lg:col-span-4 lg:row-span-2",
    big: true,
  },
  "visa-etudiant": {
    image: visaImage,
    alt: "Un passeport est présenté au contrôle automatique d'un aéroport",
    className: "lg:col-span-2 lg:row-span-2",
    big: true,
  },
  "cours-anglais": {
    image: studentsImage,
    alt: "Deux étudiants révisent ensemble leurs manuels",
    className: "lg:col-span-2",
  },
  "soutien-scolaire": {
    image: parentsImage,
    alt: "Une mère accompagne son fils pendant ses devoirs",
    className: "lg:col-span-2",
  },
  "preparation-concours": {
    image: examImage,
    alt: "Des candidats composent dans une salle d'examen",
    className: "lg:col-span-2",
  },
};

const ORDER: ServiceSlug[] = [
  "cours-allemand",
  "visa-etudiant",
  "cours-anglais",
  "soutien-scolaire",
  "preparation-concours",
];

const PROMISES = [
  { icon: Target, text: "Accompagnement personnalisé" },
  { icon: ShieldCheck, text: "Formateurs expérimentés" },
  { icon: BarChart3, text: "Progrès évalués régulièrement" },
  { icon: Globe2, text: "Présentiel à Yaoundé ou en ligne" },
];

export function ServicesOverview() {
  const services = ORDER.map((slug) =>
    SERVICES.find((service) => service.slug === slug)!,
  );

  return (
    <section id="services" className="bg-surface py-20 sm:py-28">
      <div className="container-page">
        <Reveal className="flex flex-col justify-between gap-6 lg:flex-row lg:items-end">
          <div className="max-w-2xl">
            <p className="text-sm font-semibold tracking-widest text-primary uppercase">
              Nos formations
            </p>
            <h2 className="mt-3 text-4xl leading-[1.02] font-extrabold sm:text-5xl lg:text-6xl">
              Tout pour réussir,{" "}
              <span className="font-serif font-normal text-primary italic">
                ici et là-bas.
              </span>
            </h2>
          </div>
          <Link
            to="/services"
            className="group inline-flex items-center gap-2 font-semibold text-primary-dark"
          >
            Tous les services
            <span className="flex size-9 items-center justify-center rounded-full bg-primary text-primary-foreground transition-transform group-hover:rotate-45">
              <ArrowUpRight aria-hidden="true" className="size-4" />
            </span>
          </Link>
        </Reveal>

        <div className="mt-12 grid auto-rows-[20rem] gap-4 sm:grid-cols-2 lg:grid-cols-6 lg:auto-rows-[17rem]">
          {services.map((service, index) => {
            const layout = LAYOUT[service.slug];
            const intake = service.nextIntake?.replace(
              /^Prochaine (rentrée|session) : /,
              "",
            );
            const showIntake = intake && (layout.big || intake.length < 32);
            return (
              <Reveal
                key={service.slug}
                delay={index * 70}
                direction="up"
                className={cn(index === 0 && "sm:col-span-2", layout.className)}
              >
                <Link
                  to="/services/$slug"
                  params={{ slug: service.slug }}
                  className="group relative flex h-full flex-col justify-end overflow-hidden rounded-[2rem] bg-night p-6 text-night-foreground"
                >
                  <img
                    src={layout.image}
                    alt={layout.alt}
                    loading="lazy"
                    className="absolute inset-0 h-full w-full object-cover transition-transform duration-[1.2s] ease-out group-hover:scale-110"
                  />
                  <div
                    aria-hidden="true"
                    className="absolute inset-0 bg-gradient-to-t from-night via-night/55 to-night/5 transition-opacity duration-500 group-hover:opacity-90"
                  />

                  <div className="absolute top-5 right-5 left-5 flex items-start justify-between gap-3">
                    <span className="rounded-full bg-white/15 px-3 py-1 text-[0.7rem] font-semibold backdrop-blur-md">
                      {service.pole}
                    </span>
                    <span className="flex size-10 shrink-0 items-center justify-center rounded-full bg-white text-night transition-all duration-300 group-hover:rotate-45 group-hover:bg-sunset">
                      <ArrowUpRight aria-hidden="true" className="size-5" />
                    </span>
                  </div>

                  <div className="relative">
                    <h3
                      className={cn(
                        "font-extrabold",
                        layout.big ? "text-3xl sm:text-4xl" : "text-2xl",
                      )}
                    >
                      {service.shortTitle}
                    </h3>
                    <p
                      className={cn(
                        "text-balance-p mt-2 text-sm text-night-foreground/80",
                        !layout.big && "line-clamp-2",
                      )}
                    >
                      {service.shortDescription}
                    </p>
                    {showIntake || (service.price && layout.big) ? (
                      <div className="mt-4 flex flex-wrap gap-2 text-xs font-semibold">
                        {showIntake ? (
                          <span className="inline-flex items-center gap-1.5 rounded-full bg-sunset px-3 py-1 text-night">
                            <CalendarDays
                              aria-hidden="true"
                              className="size-3.5"
                            />
                            {intake}
                          </span>
                        ) : null}
                        {service.price && layout.big ? (
                          <span className="rounded-full border border-white/25 px-3 py-1">
                            {service.price}
                          </span>
                        ) : null}
                      </div>
                    ) : null}
                  </div>
                </Link>
              </Reveal>
            );
          })}
        </div>

        <ul className="mt-10 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {PROMISES.map(({ icon: Icon, text }, index) => (
            <Reveal
              as="li"
              key={text}
              delay={index * 60}
              className="flex items-center gap-3 rounded-2xl border border-border bg-background px-4 py-3.5 text-sm font-semibold"
            >
              <span className="flex size-9 shrink-0 items-center justify-center rounded-xl bg-secondary text-primary-dark">
                <Icon aria-hidden="true" className="size-4" />
              </span>
              {text}
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}
