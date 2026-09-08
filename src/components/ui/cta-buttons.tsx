import { Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export function CtaButtons({
  className,
  size = "lg",
  variantSecondary = "outline",
  tone = "light",
}: {
  className?: string;
  size?: "default" | "lg";
  variantSecondary?: "outline" | "secondary";
  tone?: "light" | "dark";
}) {
  return (
    <div className={cn("flex flex-col gap-3 sm:flex-row", className)}>
      <Button asChild size={size}>
        <Link to="/inscription">
          S'inscrire
          <ArrowRight aria-hidden="true" />
        </Link>
      </Button>
      <Button
        asChild
        size={size}
        variant={variantSecondary}
        className={
          tone === "dark"
            ? "border-primary-foreground/40 bg-transparent text-primary-foreground hover:border-primary-foreground hover:bg-primary-foreground/10"
            : undefined
        }
      >
        <Link to="/contact">Nous contacter</Link>
      </Button>
    </div>
  );
}
