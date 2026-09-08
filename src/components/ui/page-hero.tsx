import type { ElementType, ReactNode } from "react";
import { Eyebrow } from "@/components/ui/section";
import heroImage from "@/assets/hero-tutoring.jpg";

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
    <section className="relative flex min-h-[42vh] items-center justify-center overflow-hidden bg-primary-dark py-16 text-primary-foreground sm:min-h-[46vh] sm:py-20">
      <video
        className="absolute inset-0 h-full w-full object-cover"
        poster={heroImage}
        autoPlay
        muted
        loop
        playsInline
        preload="none"
        aria-hidden="true"
      >
        <source src="/hero-video.mp4" type="video/mp4" />
      </video>

      <div
        aria-hidden="true"
        className="absolute inset-0 bg-gradient-to-b from-primary-dark/85 via-primary-dark/55 to-primary-dark/90"
      />

      <div className="container-page relative animate-rise text-center">
        <Eyebrow className="bg-primary-foreground/10 text-primary-foreground ring-1 ring-primary-foreground/20 backdrop-blur">
          {eyebrow}
        </Eyebrow>
        <As className="mx-auto mt-6 max-w-2xl text-3xl leading-[1.1] font-bold sm:text-4xl lg:text-5xl">
          {title}
        </As>
        {description ? (
          <p className="text-balance-p mx-auto mt-5 max-w-xl text-base text-primary-foreground/85 sm:text-lg">
            {description}
          </p>
        ) : null}
        {children}
      </div>
    </section>
  );
}
