import { Link } from "@tanstack/react-router";
import {
  ArrowUpRight,
  Facebook,
  Instagram,
  Linkedin,
  Mail,
  MapPin,
  MessageCircle,
  Phone,
  type LucideIcon,
} from "lucide-react";
import { NAV_LINKS, SITE } from "@/constants/site";
import { SERVICES } from "@/constants/services";
import logo from "@/assets/brand/expolearn-logo.png";

const SOCIALS: { name: string; icon: LucideIcon; href?: string }[] = [
  { name: "WhatsApp", icon: MessageCircle, href: SITE.whatsappHref },
  { name: "Facebook", icon: Facebook },
  { name: "Instagram", icon: Instagram },
  { name: "LinkedIn", icon: Linkedin },
];

const CREDITS =
  "Photos : abbilder (CC BY 2.0), GoetheSP (CC BY-SA 4.0), Asaalah1 (CC BY 4.0), Teolemon (CC BY-SA 4.0), PierreSelim (CC BY-SA 3.0), Bill Abbott (CC BY-SA 2.0), Salwa Farwaneh Dameh (CC0), Quintin Soloviev (CC BY 4.0), Jchmrt (CC BY-SA 4.0), Wilfredor (CC0), Tobias Alt (CC BY-SA 4.0), via Wikimedia Commons.";

export function Footer() {
  return (
    <footer className="relative overflow-hidden bg-night text-night-foreground">
      <div className="container-page grid gap-12 border-b border-white/10 pt-20 pb-14 lg:grid-cols-[1.2fr_0.6fr_0.7fr_1fr] lg:gap-10">
        <div>
          <Link
            to="/"
            aria-label="ExpoLearn, retour à l'accueil"
            className="inline-flex rounded-2xl bg-white px-4 py-3"
          >
            <img
              src={logo}
              alt="ExpoLearn — Exponential Learning"
              className="h-12 w-auto object-contain"
            />
          </Link>
          <p className="text-balance-p mt-6 max-w-sm text-sm text-night-foreground/65">
            Langues, visa étudiant, soutien scolaire et concours : on te prépare
            à réussir, à Yaoundé comme à l'étranger.
          </p>
          <ul className="mt-6 flex gap-2">
            {SOCIALS.map(({ name, icon: Icon, href }) => (
              <li key={name}>
                {href ? (
                  <a
                    href={href}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={name}
                    className="flex size-11 items-center justify-center rounded-full border border-white/15 transition-colors hover:border-sunset hover:bg-sunset hover:text-night"
                  >
                    <Icon aria-hidden="true" className="size-4" />
                  </a>
                ) : (
                  <span
                    title={`${name} — lien à venir`}
                    aria-label={`${name}, lien à venir`}
                    className="flex size-11 items-center justify-center rounded-full border border-white/15 text-night-foreground/50"
                  >
                    <Icon aria-hidden="true" className="size-4" />
                  </span>
                )}
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h2 className="text-xs font-semibold tracking-widest text-night-foreground/45 uppercase">
            Explorer
          </h2>
          <ul className="mt-5 space-y-3">
            {NAV_LINKS.map((link) => (
              <li key={link.to}>
                <Link
                  to={link.to}
                  className="text-sm text-night-foreground/80 transition-colors hover:text-sunset"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h2 className="text-xs font-semibold tracking-widest text-night-foreground/45 uppercase">
            Formations
          </h2>
          <ul className="mt-5 space-y-3">
            {SERVICES.map((service) => (
              <li key={service.slug}>
                <Link
                  to="/services/$slug"
                  params={{ slug: service.slug }}
                  className="text-sm text-night-foreground/80 transition-colors hover:text-sunset"
                >
                  {service.shortTitle}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h2 className="text-xs font-semibold tracking-widest text-night-foreground/45 uppercase">
            Nous trouver
          </h2>
          <ul className="mt-5 space-y-4 text-sm text-night-foreground/80">
            <li className="flex items-start gap-3">
              <MapPin
                aria-hidden="true"
                className="mt-0.5 size-4 shrink-0 text-sunset"
              />
              <span>{SITE.address}</span>
            </li>
            <li className="flex items-center gap-3">
              <Phone
                aria-hidden="true"
                className="size-4 shrink-0 text-sunset"
              />
              <span>
                <a href={SITE.phoneHref} className="hover:text-sunset">
                  {SITE.phone}
                </a>
                {" · "}
                <a href={SITE.phoneSecondaryHref} className="hover:text-sunset">
                  {SITE.phoneSecondary}
                </a>
              </span>
            </li>
            <li className="flex items-center gap-3">
              <Mail
                aria-hidden="true"
                className="size-4 shrink-0 text-sunset"
              />
              <a href={SITE.emailHref} className="hover:text-sunset">
                {SITE.email}
              </a>
            </li>
          </ul>
          <Link
            to="/contact"
            className="group mt-6 inline-flex items-center gap-2 text-sm font-semibold text-sunset"
          >
            Prendre rendez-vous
            <ArrowUpRight
              aria-hidden="true"
              className="size-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
            />
          </Link>
        </div>
      </div>

      <div className="container-page space-y-2 py-8 text-xs text-night-foreground/45">
        <p>
          {SITE.legalMention} © {new Date().getFullYear()} {SITE.name}. Tous
          droits réservés.
        </p>
        <p>{CREDITS}</p>
      </div>

      <p
        aria-hidden="true"
        className="pointer-events-none -mb-[0.22em] text-center font-display text-[22vw] leading-none font-extrabold tracking-tighter text-white/[0.04] select-none"
      >
        ExpoLearn
      </p>
    </footer>
  );
}
