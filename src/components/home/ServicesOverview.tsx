import { Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Section, SectionHeading } from "@/components/ui/section";
import { Reveal } from "@/components/ui/reveal";
import { ServiceCard } from "@/components/services/ServiceCard";
import { SERVICES } from "@/constants/services";

export function ServicesOverview() {
  return (
    <Section id="services">
      <SectionHeading
        eyebrow="Nos services"
        title="Cinq façons d'avancer avec ExpoLearn"
        description="Du soutien scolaire à l'accompagnement au visa étudiant, chaque service a son propre format et son propre programme."
      />

      <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {SERVICES.map((service, index) => (
          <Reveal
            key={service.slug}
            delay={index * 80}
            direction={index % 2 === 0 ? "left" : "right"}
          >
            <ServiceCard service={service} />
          </Reveal>
        ))}
      </div>

      <div className="mt-8">
        <Button asChild variant="secondary">
          <Link to="/services">
            Voir tous les services
            <ArrowRight aria-hidden="true" />
          </Link>
        </Button>
      </div>
    </Section>
  );
}
