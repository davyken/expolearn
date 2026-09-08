import { Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Section, SectionHeading } from "@/components/ui/section";
import { Reveal } from "@/components/ui/reveal";
import { HOW_IT_WORKS_STEPS } from "@/constants/content";

export function HowItWorks() {
  return (
    <Section>
      <SectionHeading
        eyebrow="Comment ça marche"
        title="Quatre étapes, de votre demande au début des cours"
        description="Le même principe pour tous les services : un besoin clarifié, un programme adapté, un suivi dans la durée."
      />

      <ol className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {HOW_IT_WORKS_STEPS.map((item, index) => (
          <Reveal
            key={item.step}
            as="li"
            delay={index * 90}
            direction={index % 2 === 0 ? "left" : "right"}
            className="relative h-full rounded-3xl bg-muted p-6"
          >
            <span className="font-display text-sm font-bold text-primary-dark">
              {item.step}
            </span>
            <h3 className="mt-3 text-base font-bold">{item.title}</h3>
            <p className="text-balance-p mt-2.5 text-sm text-muted-foreground">
              {item.text}
            </p>
          </Reveal>
        ))}
      </ol>

      <div className="mt-8">
        <Button asChild variant="secondary">
          <Link to="/comment-ca-marche">
            Voir le parcours en détail
            <ArrowRight aria-hidden="true" />
          </Link>
        </Button>
      </div>
    </Section>
  );
}
