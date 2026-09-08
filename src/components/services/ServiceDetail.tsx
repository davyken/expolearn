import { Link } from "@tanstack/react-router";
import {
  ArrowRight,
  Calendar,
  CheckCircle2,
  Home,
  Landmark,
  Languages,
  Layers,
  MapPin,
  Plane,
  Tag,
  Target,
  type LucideIcon,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Section, SectionHeading, Eyebrow } from "@/components/ui/section";
import { Reveal } from "@/components/ui/reveal";
import { SITE } from "@/constants/site";
import type { Service } from "@/constants/services";

const ICONS: Record<Service["icon"], LucideIcon> = {
  home: Home,
  target: Target,
  languages: Languages,
  landmark: Landmark,
  plane: Plane,
};

export function ServiceDetail({ service }: { service: Service }) {
  const Icon = ICONS[service.icon];

  return (
    <>
      <section className="relative overflow-hidden bg-primary-dark py-16 text-primary-foreground sm:py-20">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0"
          style={{
            background:
              "radial-gradient(circle at 15% 20%, color-mix(in oklch, var(--color-primary) 35%, transparent), transparent 55%)",
          }}
        />
        <div className="container-page relative animate-rise">
          <Link
            to="/services"
            className="inline-flex items-center gap-1.5 text-sm text-primary-foreground/75 hover:text-primary-foreground"
          >
            ← Tous les services
          </Link>
          <div className="mt-5 flex items-center gap-3">
            <span className="flex size-12 items-center justify-center rounded-2xl bg-primary-foreground/10 ring-1 ring-primary-foreground/20">
              <Icon aria-hidden="true" className="size-6" />
            </span>
            <Eyebrow className="bg-primary-foreground/10 text-primary-foreground ring-1 ring-primary-foreground/20">
              {service.pole}
            </Eyebrow>
          </div>
          <h1 className="mt-5 max-w-2xl text-3xl leading-[1.1] font-bold sm:text-4xl lg:text-5xl">
            {service.title}
          </h1>
          <p className="text-balance-p mt-5 max-w-2xl text-base text-primary-foreground/85 sm:text-lg">
            {service.heroDescription}
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Button asChild size="lg" variant="highlight">
              <Link to="/inscription" search={{ service: service.slug }}>
                S'inscrire à ce service
                <ArrowRight aria-hidden="true" />
              </Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="border-primary-foreground/40 bg-transparent text-primary-foreground hover:border-primary-foreground hover:bg-primary-foreground/10"
            >
              <Link to="/contact">Poser une question</Link>
            </Button>
          </div>
        </div>
      </section>

      <Section>
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          <InfoCard icon={Layers} label="Public" value={service.audience} />
          <InfoCard
            icon={MapPin}
            label="Formats"
            value={service.formats.join(" · ")}
          />
          {service.levels ? (
            <InfoCard
              icon={Target}
              label="Niveaux"
              value={service.levels.join(", ")}
            />
          ) : null}
          {service.nextIntake ? (
            <InfoCard
              icon={Calendar}
              label="Rentrée"
              value={service.nextIntake}
            />
          ) : null}
          {service.price ? (
            <InfoCard
              icon={Tag}
              label="Tarif indicatif"
              value={service.price}
            />
          ) : null}
        </div>
      </Section>

      <Section tone="muted">
        <SectionHeading
          eyebrow="Ce que comprend le programme"
          title="Ce que vous en retirez"
        />
        <ul className="mt-8 grid gap-4 sm:grid-cols-2">
          {service.highlights.map((item, index) => (
            <Reveal
              key={item}
              as="li"
              delay={index * 80}
              direction={index % 2 === 0 ? "left" : "right"}
              className="flex gap-3 rounded-2xl border border-border bg-card p-5 text-sm"
            >
              <CheckCircle2
                aria-hidden="true"
                className="mt-0.5 size-4 shrink-0 text-primary-dark"
              />
              {item}
            </Reveal>
          ))}
        </ul>
      </Section>

      <Section>
        <Reveal
          direction="scale"
          className="flex flex-col items-start gap-6 rounded-3xl border border-border bg-card p-8 sm:flex-row sm:items-center sm:justify-between"
        >
          <div>
            <h2 className="text-lg font-bold">Prêt à démarrer ?</h2>
            <p className="mt-1.5 text-sm text-muted-foreground">
              Inscrivez-vous en ligne ou appelez-nous au{" "}
              <a
                href={SITE.phoneHref}
                className="font-semibold text-primary-dark hover:underline"
              >
                {SITE.phone}
              </a>
              .
            </p>
          </div>
          <Button asChild size="lg">
            <Link to="/inscription" search={{ service: service.slug }}>
              S'inscrire à ce service
              <ArrowRight aria-hidden="true" />
            </Link>
          </Button>
        </Reveal>
      </Section>
    </>
  );
}

function InfoCard({
  icon: Icon,
  label,
  value,
}: {
  icon: LucideIcon;
  label: string;
  value: string;
}) {
  return (
    <div className="rounded-2xl border border-border bg-card p-5">
      <span className="flex size-9 items-center justify-center rounded-xl bg-secondary text-primary-dark">
        <Icon aria-hidden="true" className="size-4" />
      </span>
      <p className="mt-3 text-xs font-semibold tracking-wide text-muted-foreground uppercase">
        {label}
      </p>
      <p className="text-balance-p mt-1 text-sm font-semibold">{value}</p>
    </div>
  );
}
