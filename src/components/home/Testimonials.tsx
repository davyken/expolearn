import { Quote } from "lucide-react";
import { Section, SectionHeading } from "@/components/ui/section";
import { Reveal } from "@/components/ui/reveal";
import { SAMPLE_TESTIMONIALS, TESTIMONIALS_NOTE } from "@/constants/content";

export function Testimonials() {
  return (
    <Section tone="muted">
      <SectionHeading
        eyebrow="Témoignages"
        title="Ce que disent les familles et les apprenants"
        description="Des retours de personnes accompagnées par ExpoLearn, selon le service suivi."
      />
      <p className="mt-2 text-xs text-muted-foreground">{TESTIMONIALS_NOTE}</p>

      <ul className="mt-10 grid gap-5 lg:grid-cols-3">
        {SAMPLE_TESTIMONIALS.map((item, index) => (
          <Reveal
            key={item.quote}
            as="li"
            delay={index * 100}
            direction={index % 2 === 0 ? "left" : "right"}
            className="flex h-full flex-col rounded-3xl border border-border bg-card p-6 transition-shadow duration-300 hover:shadow-card"
          >
            <Quote aria-hidden="true" className="size-5 text-primary" />
            <blockquote className="text-balance-p mt-4 flex-1 text-sm text-foreground">
              {item.quote}
            </blockquote>
            <p className="mt-5 text-sm font-semibold">{item.author}</p>
          </Reveal>
        ))}
      </ul>
    </Section>
  );
}
