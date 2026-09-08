import { Link } from "@tanstack/react-router";
import {
  ArrowRight,
  Home,
  Landmark,
  Languages,
  Plane,
  Target,
  type LucideIcon,
} from "lucide-react";
import type { Service } from "@/constants/services";

const ICONS: Record<Service["icon"], LucideIcon> = {
  home: Home,
  target: Target,
  languages: Languages,
  landmark: Landmark,
  plane: Plane,
};

export function ServiceCard({ service }: { service: Service }) {
  const Icon = ICONS[service.icon];

  return (
    <Link
      to="/services/$slug"
      params={{ slug: service.slug }}
      className="group flex h-full flex-col rounded-3xl border border-border bg-card p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-card"
    >
      <span className="flex size-11 items-center justify-center rounded-2xl bg-secondary text-primary-dark transition-colors duration-300 group-hover:bg-primary group-hover:text-primary-foreground">
        <Icon aria-hidden="true" className="size-5" />
      </span>
      <h3 className="mt-5 text-base font-bold">{service.title}</h3>
      <p className="text-balance-p mt-2.5 flex-1 text-sm text-muted-foreground">
        {service.shortDescription}
      </p>
      <span className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-primary-dark">
        Découvrir
        <ArrowRight
          aria-hidden="true"
          className="size-4 transition-transform group-hover:translate-x-0.5"
        />
      </span>
    </Link>
  );
}
