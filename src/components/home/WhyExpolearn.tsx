import {
  BarChart3,
  Globe2,
  ShieldCheck,
  Target,
  type LucideIcon,
} from "lucide-react";
import { Section, SectionHeading } from "@/components/ui/section";
import { Reveal } from "@/components/ui/reveal";
import { WHY_ITEMS } from "@/constants/content";

const ICONS: Record<string, LucideIcon> = {
  shield: ShieldCheck,
  target: Target,
  chart: BarChart3,
  globe: Globe2,
};

export function WhyExpolearn() {
  return (
    <Section tone="muted" id="pourquoi">
      <SectionHeading
        eyebrow="Pourquoi ExpoLearn"
        title="Pourquoi les familles et les apprenants nous font confiance"
        description="Un accompagnement personnalisé, des formateurs expérimentés et un suivi régulier de la progression, quel que soit le service choisi."
      />

      <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {WHY_ITEMS.map((item, index) => {
          const Icon = ICONS[item.icon] ?? ShieldCheck;
          return (
            <Reveal
              key={item.title}
              delay={index * 90}
              direction={index % 2 === 0 ? "left" : "right"}
            >
              <article className="group h-full rounded-3xl border border-border bg-card p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-card">
                <span className="flex size-11 items-center justify-center rounded-2xl bg-secondary text-primary-dark transition-colors duration-300 group-hover:bg-primary group-hover:text-primary-foreground">
                  <Icon aria-hidden="true" className="size-5" />
                </span>
                <h3 className="mt-5 text-base font-bold">{item.title}</h3>
                <p className="text-balance-p mt-2.5 text-sm text-muted-foreground">
                  {item.text}
                </p>
              </article>
            </Reveal>
          );
        })}
      </div>
    </Section>
  );
}
