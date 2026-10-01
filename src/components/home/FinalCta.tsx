import { Link } from "@tanstack/react-router";
import { ArrowRight, MessageCircle, Quote } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Reveal } from "@/components/ui/reveal";
import { SAMPLE_TESTIMONIALS, TESTIMONIALS_NOTE } from "@/constants/content";
import { buildWhatsAppLink } from "@/lib/whatsapp";
import takeoffImage from "@/assets/travel/cta-takeoff.webp";

export function FinalCta({
  withTestimonials = false,
}: {
  withTestimonials?: boolean;
}) {
  return (
    <section className="relative isolate overflow-hidden bg-night py-20 text-night-foreground sm:py-28">
      <img
        src={takeoffImage}
        alt=""
        aria-hidden="true"
        loading="lazy"
        className="absolute inset-0 -z-20 h-full w-full object-cover object-[70%_30%]"
      />
      <div
        aria-hidden="true"
        className="absolute inset-0 -z-10 bg-gradient-to-b from-night/70 via-night/60 to-night"
      />

      <div className="container-page">
        {withTestimonials ? (
          <div className="mb-20 sm:mb-28">
            <ul className="grid gap-4 lg:grid-cols-3">
              {SAMPLE_TESTIMONIALS.map((item, index) => (
                <Reveal
                  key={item.quote}
                  as="li"
                  delay={index * 90}
                  className="flex h-full flex-col rounded-[1.75rem] border border-white/10 bg-white/[0.07] p-6 backdrop-blur-md"
                >
                  <Quote aria-hidden="true" className="size-6 text-sunset" />
                  <blockquote className="text-balance-p mt-4 flex-1 text-night-foreground/90">
                    {item.quote}
                  </blockquote>
                  <p className="mt-5 text-sm font-semibold text-night-foreground/60">
                    {item.author}
                  </p>
                </Reveal>
              ))}
            </ul>
            <p className="mt-3 text-xs text-night-foreground/45">
              {TESTIMONIALS_NOTE}
            </p>
          </div>
        ) : null}

        <Reveal direction="scale" className="mx-auto max-w-4xl text-center">
          <h2 className="text-5xl leading-[0.98] font-extrabold sm:text-6xl lg:text-7xl">
            Ta place est réservée.{" "}
            <span className="font-serif font-normal text-sunset italic">
              Il ne manque que toi.
            </span>
          </h2>
          <p className="text-balance-p mx-auto mt-6 max-w-xl text-night-foreground/75 sm:text-lg">
            Inscris-toi en quelques minutes, ou écris-nous : un conseiller
            ExpoLearn te répond et construit ton plan de départ avec toi.
          </p>
          <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Button
              asChild
              size="lg"
              className="bg-sunset text-night shadow-[0_10px_30px_-8px_var(--color-sunset)] hover:bg-white"
            >
              <Link to="/inscription">
                Je m'inscris maintenant
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
                  "Bonjour ExpoLearn, je souhaite des informations.",
                )}
                target="_blank"
                rel="noreferrer"
              >
                <MessageCircle aria-hidden="true" />
                WhatsApp
              </a>
            </Button>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
