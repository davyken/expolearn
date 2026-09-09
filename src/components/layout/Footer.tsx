import { Link } from "@tanstack/react-router";
import {
  Facebook,
  GraduationCap,
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
import { CtaButtons } from "@/components/ui/cta-buttons";

const SOCIALS: { name: string; icon: LucideIcon }[] = [
  { name: "Facebook", icon: Facebook },
  { name: "WhatsApp", icon: MessageCircle },
  { name: "Instagram", icon: Instagram },
  { name: "LinkedIn", icon: Linkedin },
];

export function Footer() {
  return (
    <footer className="border-t border-border bg-muted">
      <div className="border-b border-border bg-secondary">
        <div className="container-page flex flex-col items-start justify-between gap-6 py-16 sm:flex-row sm:items-center sm:py-20">
          <div className="max-w-lg">
            <h2 className="text-xl font-medium text-secondary-foreground/90 sm:text-2xl">
              Prêt à commencer avec ExpoLearn ?
            </h2>
            <p className="mt-2 text-sm font-light text-secondary-foreground/70">
              Soutien scolaire, concours, langues ou visa étudiant :
              inscrivez-vous ou parlez-nous de votre projet.
            </p>
          </div>
          <CtaButtons variantSecondary="outline" />
        </div>
      </div>

      <div className="container-page grid gap-10 py-16 sm:grid-cols-2 sm:py-20 lg:grid-cols-4">
        <div className="sm:col-span-2 lg:col-span-1">
          <div className="flex items-center gap-2">
            <span className="flex size-9 items-center justify-center rounded-xl bg-gradient-to-br from-primary to-primary-dark text-primary-foreground">
              <GraduationCap aria-hidden="true" className="size-5" />
            </span>
            <span className="font-display text-lg font-bold">ExpoLearn</span>
          </div>
          <p className="text-balance-p mt-4 text-sm text-muted-foreground">
            {SITE.positioning}
          </p>
          <ul className="mt-5 flex gap-2">
            {SOCIALS.map(({ name, icon: Icon }) => (
              <li key={name}>
                <span
                  title={`${name} — lien à ajouter`}
                  aria-label={`${name}, lien à venir`}
                  className="flex size-9 items-center justify-center rounded-full border border-border bg-card text-muted-foreground transition-colors hover:border-primary hover:text-primary-dark"
                >
                  <Icon aria-hidden="true" className="size-4" />
                </span>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h2 className="text-sm font-bold">Navigation</h2>
          <ul className="mt-4 space-y-2.5">
            {NAV_LINKS.map((link) => (
              <li key={link.to}>
                <Link
                  to={link.to}
                  className="text-sm text-muted-foreground transition-colors hover:text-primary-dark"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h2 className="text-sm font-bold">Nos services</h2>
          <ul className="mt-4 space-y-2.5">
            {SERVICES.map((service) => (
              <li key={service.slug}>
                <Link
                  to="/services/$slug"
                  params={{ slug: service.slug }}
                  className="text-sm text-muted-foreground transition-colors hover:text-primary-dark"
                >
                  {service.shortTitle}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h2 className="text-sm font-bold">Nous joindre</h2>
          <ul className="mt-4 space-y-3 text-sm text-muted-foreground">
            <li className="flex items-center gap-2">
              <Phone
                aria-hidden="true"
                className="size-4 shrink-0 text-primary-dark"
              />
              <a href={SITE.phoneHref} className="hover:text-primary-dark">
                {SITE.phone}
              </a>
            </li>
            <li className="flex items-center gap-2">
              <Phone
                aria-hidden="true"
                className="size-4 shrink-0 text-primary-dark"
              />
              <a
                href={SITE.phoneSecondaryHref}
                className="hover:text-primary-dark"
              >
                {SITE.phoneSecondary}
              </a>
            </li>
            <li className="flex items-center gap-2">
              <Mail
                aria-hidden="true"
                className="size-4 shrink-0 text-primary-dark"
              />
              <a href={SITE.emailHref} className="hover:text-primary-dark">
                {SITE.email}
              </a>
            </li>
            <li className="flex items-start gap-2">
              <MapPin
                aria-hidden="true"
                className="mt-0.5 size-4 shrink-0 text-primary-dark"
              />
              <span>{SITE.address}</span>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-border">
        <div className="container-page py-8 text-xs text-muted-foreground">
          <p>
            {SITE.legalMention} © {new Date().getFullYear()} {SITE.name}.
            Tous droits réservés. Photos : abbilder (CC BY 2.0), GoetheSP (CC
            BY-SA 4.0), Asaalah1 (CC BY 4.0) et Teolemon (CC BY-SA 4.0), via
            Wikimedia Commons.
          </p>
        </div>
      </div>
    </footer>
  );
}
