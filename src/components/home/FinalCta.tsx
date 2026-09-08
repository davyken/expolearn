import { Link } from "@tanstack/react-router";
import { ArrowRight, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Reveal } from "@/components/ui/reveal";
import { SITE } from "@/constants/site";

export function FinalCta() {
  return (
    <section className="relative overflow-hidden bg-secondary py-16 sm:py-20">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(circle at 15% 15%, color-mix(in oklch, var(--color-primary) 22%, transparent), transparent 55%), radial-gradient(circle at 85% 85%, color-mix(in oklch, var(--color-highlight) 20%, transparent), transparent 50%)",
        }}
      />
      <Reveal
        direction="scale"
        className="container-page relative max-w-3xl text-center"
      >
        <h2 className="text-2xl font-bold text-secondary-foreground sm:text-3xl lg:text-4xl">
          Prêt à concrétiser votre projet avec ExpoLearn ?
        </h2>
        <p className="text-balance-p mx-auto mt-4 max-w-xl text-sm text-secondary-foreground/80 sm:text-base">
          Inscrivez-vous en quelques minutes au service qui correspond à votre
          objectif, ou contactez-nous si vous avez besoin de précisions au
          préalable.
        </p>
        <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <Button asChild size="lg">
            <Link to="/inscription">
              S'inscrire
              <ArrowRight aria-hidden="true" />
            </Link>
          </Button>
          <Button asChild size="lg" variant="outline">
            <Link to="/contact">Nous contacter</Link>
          </Button>
        </div>
        <p className="mt-6 inline-flex items-center gap-2 text-sm font-medium text-primary-dark">
          <Phone aria-hidden="true" className="size-4" />
          <a href={SITE.phoneHref} className="hover:underline">
            {SITE.phone}
          </a>
        </p>
      </Reveal>
    </section>
  );
}
