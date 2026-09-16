import { useEffect, useState } from "react";
import { Link, useRouterState } from "@tanstack/react-router";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { NAV_LINKS } from "@/constants/site";
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
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "sticky top-0 z-50 border-b border-transparent bg-transparent transition-colors duration-300",
        scrolled && "border-border/70 shadow-soft",
      )}
    >
      <div className="container-page flex h-18 items-center justify-between gap-4 lg:h-20">
        <Link
          to="/"
          className="group flex items-center"
          aria-label="ExpoLearn, retour à l'accueil"
        >
          <img
            src={logo}
            alt="ExpoLearn"
            className="h-12 w-auto object-contain transition-transform duration-300 group-hover:scale-105 lg:h-14"
          />
        </Link>

        <nav
          aria-label="Navigation principale"
          className="hidden items-center gap-1 lg:flex"
        >
          {LINKS.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              activeOptions={{ exact: true }}
              className="rounded-full px-3 py-2 text-sm font-medium text-muted-foreground transition-colors hover:bg-secondary hover:text-secondary-foreground"
              activeProps={{
                className: "font-semibold bg-secondary text-secondary-foreground",
              }}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-2 lg:flex">
          <Button asChild variant="outline" size="sm">
            <Link to="/contact">Nous contacter</Link>
          </Button>
          <Button asChild size="sm">
            <Link to="/inscription">S'inscrire</Link>
          </Button>
        </div>

        <button
          type="button"
          onClick={() => setOpen((value) => !value)}
          aria-expanded={open}
          aria-controls="menu-mobile"
          aria-label={open ? "Fermer le menu" : "Ouvrir le menu"}
          className="flex size-10 items-center justify-center rounded-xl border border-border text-foreground transition-colors hover:bg-secondary lg:hidden"
        >
          {open ? (
            <X aria-hidden="true" className="size-5" />
          ) : (
            <Menu aria-hidden="true" className="size-5" />
          )}
        </button>
      </div>

      <div
        id="menu-mobile"
        className={cn(
          "grid overflow-hidden border-border bg-background transition-[grid-template-rows,border-color] duration-300 ease-out lg:hidden",
          open
            ? "grid-rows-[1fr] border-t"
            : "grid-rows-[0fr] border-transparent",
        )}
      >
        <div className="min-h-0">
          <nav
            aria-label="Navigation mobile"
            className="container-page flex flex-col py-3"
          >
            {LINKS.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                activeOptions={{ exact: true }}
                className="rounded-xl px-3 py-3 text-sm font-medium text-foreground transition-colors hover:bg-secondary"
                activeProps={{
                  className:
                    "bg-secondary text-secondary-foreground font-semibold",
                }}
              >
                {link.label}
              </Link>
            ))}
            <div className="mt-3 flex flex-col gap-2 pb-4">
              <Button asChild>
                <Link to="/inscription">S'inscrire</Link>
              </Button>
              <Button asChild variant="outline">
                <Link to="/contact">Nous contacter</Link>
              </Button>
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
}
