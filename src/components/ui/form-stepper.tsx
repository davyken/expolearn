import { Check } from "lucide-react";
import { cn } from "@/lib/utils";

export function FormStepper({ steps, current }: { steps: readonly string[]; current: number }) {
  return (
    <ol className="mb-8 flex items-center">
      {steps.map((label, index) => (
        <li key={label} className="flex flex-1 items-center last:flex-none">
          <div className="flex items-center gap-2.5">
            <span
              className={cn(
                "flex size-8 shrink-0 items-center justify-center rounded-full text-sm font-bold transition-colors duration-300",
                index < current
                  ? "bg-primary text-primary-foreground"
                  : index === current
                    ? "bg-gradient-to-br from-primary to-primary-dark text-primary-foreground shadow-soft"
                    : "bg-secondary text-secondary-foreground",
              )}
            >
              {index < current ? <Check aria-hidden="true" className="size-4" /> : index + 1}
            </span>
            <span
              className={cn(
                "hidden text-sm font-semibold sm:block",
                index <= current ? "text-foreground" : "text-muted-foreground",
              )}
            >
              {label}
            </span>
          </div>
          {index < steps.length - 1 ? (
            <span
              aria-hidden="true"
              className={cn(
                "mx-3 h-px flex-1 transition-colors duration-300",
                index < current ? "bg-primary" : "bg-border",
              )}
            />
          ) : null}
        </li>
      ))}
    </ol>
  );
}
