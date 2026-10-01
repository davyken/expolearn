import { useEffect, useState } from "react";
import { Link, useRouterState } from "@tanstack/react-router";
import { ArrowUpRight, Menu, Phone, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { NAV_LINKS, SITE } from "@/constants/site";
import { cn } from "@/lib/utils";
import logo from "@/assets/brand/expolearn-logo.png";

const LINKS = NAV_LINKS.filter((link) => link.to !== "/");

export function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = useRouterState({ select: (s) => s.location.pathname });

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className="sticky top-0 z-50 h-22 px-3 pt-3 sm:px-4">
      <div
        className={cn(
          "mx-auto flex h-16 max-w-6xl items-center justify-between gap-4 rounded-full border border-white/60 bg-white/80 pr-2 pl-4 backdrop-blur-xl transition-all duration-500 sm:pl-5",
          scrolled
            ? "shadow-[0_10px_40px_-12px_oklch(0.2_0.03_158/0.35)]"
            : "shadow-[0_4px_24px_-8px_oklch(0.2_0.03_158/0.18)]",
        )}
      >
        <Link
          to="/"
          className="group flex shrink-0 items-center"
          aria-label="ExpoLearn, retour à l'accueil"
        >
          <img
            src={logo}
            alt="ExpoLearn — Exponential Learning"
            className="h-10 w-auto object-contain transition-transform duration-300 group-hover:scale-105 sm:h-11"
          />
        </Link>

        <nav
          aria-label="Navigation principale"
          className="hidden items-center gap-0.5 lg:flex"
        >
          {LINKS.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              activeOptions={{ exact: link.to !== "/services" }}
              className="relative rounded-full px-3.5 py-2 text-sm font-medium text-foreground/70 transition-colors hover:text-foreground"
              activeProps={{
                className: "!text-primary-dark font-semibold",
              }}
            >
              {({ isActive }) => (
                <>
                  {link.label}
                  <span
                    aria-hidden="true"
                    className={cn(
                      "absolute inset-x-3.5 -bottom-0.5 h-0.5 origin-left rounded-full bg-primary transition-transform duration-300",
                      isActive ? "scale-x-100" : "scale-x-0",
                    )}
                  />
                </>
              )}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <a
            href={SITE.phoneHref}
            className="hidden items-center gap-2 rounded-full px-3 py-2 text-sm font-semibold text-foreground/80 transition-colors hover:text-primary-dark xl:inline-flex"
          >
            <Phone aria-hidden="true" className="size-4" />
            {SITE.phone}
          </a>
          <Button
            asChild
            className="hidden h-12 bg-night px-5 text-night-foreground hover:bg-primary-dark sm:inline-flex"
          >
            <Link to="/inscription">
              Je m'inscris
              <ArrowUpRight aria-hidden="true" />
            </Link>
          </Button>

          <button
            type="button"
            onClick={() => setOpen((value) => !value)}
            aria-expanded={open}
            aria-controls="menu-mobile"
            aria-label={open ? "Fermer le menu" : "Ouvrir le menu"}
            className="flex size-12 items-center justify-center rounded-full bg-secondary text-secondary-foreground transition-colors hover:bg-primary hover:text-primary-foreground lg:hidden"
          >
            {open ? (
              <X aria-hidden="true" className="size-5" />
            ) : (
              <Menu aria-hidden="true" className="size-5" />
            )}
          </button>
        </div>
      </div>

      <div
        id="menu-mobile"
        className={cn(
          "mx-auto mt-2 grid max-w-6xl overflow-hidden rounded-[2rem] bg-white/95 shadow-[0_20px_50px_-20px_oklch(0.2_0.03_158/0.45)] backdrop-blur-xl transition-[grid-template-rows,opacity] duration-300 ease-out lg:hidden",
          open
            ? "grid-rows-[1fr] opacity-100"
            : "pointer-events-none grid-rows-[0fr] opacity-0",
        )}
      >
        <div className="min-h-0">
          <nav aria-label="Navigation mobile" className="flex flex-col p-3">
            {LINKS.map((link, index) => (
              <Link
                key={link.to}
                to={link.to}
                activeOptions={{ exact: link.to !== "/services" }}
                className="flex items-center justify-between rounded-2xl px-4 py-3.5 font-display text-lg font-semibold text-foreground transition-colors hover:bg-secondary"
                activeProps={{
                  className: "bg-secondary text-secondary-foreground",
                }}
              >
                {link.label}
                <span className="text-xs font-medium text-muted-foreground">
                  0{index + 1}
                </span>
              </Link>
            ))}
            <div className="mt-2 grid gap-2 p-1 sm:grid-cols-2">
              <Button
                asChild
                size="lg"
                className="bg-night hover:bg-primary-dark"
              >
                <Link to="/inscription">Je m'inscris</Link>
              </Button>
              <Button asChild size="lg" variant="outline">
                <a href={SITE.phoneHref}>
                  <Phone aria-hidden="true" />
                  {SITE.phone}
                </a>
              </Button>
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
}
