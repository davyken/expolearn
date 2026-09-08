import { Link } from "@tanstack/react-router";
import { ArrowRight, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Reveal } from "@/components/ui/reveal";
import { SITE } from "@/constants/site";

export function FinalCta() {
  return (
    <section className="relative overflow-hidden bg-primary-dark py-16 text-primary-foreground sm:py-20">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(circle at 20% 20%, color-mix(in oklch, var(--color-primary) 35%, transparent), transparent 55%), radial-gradient(circle at 80% 80%, color-mix(in oklch, var(--color-highlight) 20%, transparent), transparent 50%)",
        }}
      />
      <Reveal direction="scale" className="container-page relative max-w-3xl text-center">
        <h2 className="text-2xl font-bold sm:text-3xl lg:text-4xl">
          Prêt à mettre votre enfant sur la bonne trajectoire ?
        </h2>
        <p className="text-balance-p mx-auto mt-4 max-w-xl text-sm text-primary-foreground/85 sm:text-base">
          Décrivez votre besoin en quelques minutes. Nous revenons vers vous avec un répétiteur dont
          le profil correspond à votre demande, ou avec des questions si nous avons besoin de
          précisions.
        </p>
        <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <Button asChild size="lg" variant="highlight">
            <Link to="/trouver-un-repetiteur">
              Trouver un répétiteur
              <ArrowRight aria-hidden="true" />
            </Link>
          </Button>
          <Button
            asChild
            size="lg"
            variant="outline"
            className="border-primary-foreground/40 bg-transparent text-primary-foreground hover:bg-primary-foreground/10 hover:border-primary-foreground"
          >
            <Link to="/devenir-repetiteur">Devenir répétiteur</Link>
          </Button>
        </div>
        <p className="mt-6 inline-flex items-center gap-2 text-sm text-primary-foreground/85">
          <Phone aria-hidden="true" className="size-4" />
          <a href={SITE.phoneHref} className="hover:underline">
            {SITE.phone}
          </a>
        </p>
      </Reveal>
    </section>
  );
}
