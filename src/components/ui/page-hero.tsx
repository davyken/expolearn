import type { ElementType, ReactNode } from "react";
import { Eyebrow } from "@/components/ui/section";
import heroImage from "@/assets/travel/hero-wing.webp";

export function PageHero({
  eyebrow,
  title,
  description,
  children,
  as: As = "h1",
}: {
  eyebrow: string;
  title: string;
  description?: string | undefined;
  children?: ReactNode;
  as?: ElementType;
}) {
  return (
    <section className="under-header relative flex min-h-[52vh] items-center justify-center overflow-hidden bg-night text-night-foreground sm:min-h-[56vh]">
      <img
        src={heroImage}
        alt=""
        aria-hidden="true"
        className="animate-ken-burns absolute inset-0 h-full w-full object-cover"
      />

      <div
        aria-hidden="true"
        className="absolute inset-0 bg-gradient-to-b from-night/80 via-night/60 to-night/95"
      />

      <div className="container-page relative animate-rise py-16 text-center sm:py-20">
        <Eyebrow className="bg-white/10 text-night-foreground ring-1 ring-white/20 backdrop-blur">
          {eyebrow}
        </Eyebrow>
        <As className="mx-auto mt-6 max-w-3xl text-4xl leading-[1.02] font-extrabold sm:text-5xl lg:text-6xl">
          {title}
        </As>
        {description ? (
          <p className="text-balance-p mx-auto mt-5 max-w-xl text-base text-night-foreground/80 sm:text-lg">
            {description}
          </p>
        ) : null}
        {children}
      </div>
    </section>
  );
}
