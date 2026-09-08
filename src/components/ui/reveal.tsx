import type { CSSProperties, ElementType, ReactNode } from "react";
import { useInView } from "@/hooks/use-in-view";
import { cn } from "@/lib/utils";

const OFFSETS = {
  up: "translate-y-7",
  down: "-translate-y-7",
  left: "translate-x-7",
  right: "-translate-x-7",
  scale: "scale-95",
  none: "",
} as const;

export type RevealDirection = keyof typeof OFFSETS;

export function Reveal({
  children,
  className,
  delay = 0,
  direction = "up",
  as: As = "div",
}: {
  children: ReactNode;
  className?: string | undefined;
  delay?: number | undefined;
  direction?: RevealDirection | undefined;
  as?: ElementType | undefined;
}) {
  const { ref, inView } = useInView<HTMLDivElement>();

  return (
    <As
      ref={ref}
      className={cn(
        "transition-all duration-700 ease-out",
        inView
          ? "opacity-100 translate-x-0 translate-y-0 scale-100"
          : cn("opacity-0", OFFSETS[direction]),
        className,
      )}
      style={{ transitionDelay: inView ? `${delay}ms` : "0ms" } as CSSProperties}
    >
      {children}
    </As>
  );
}
