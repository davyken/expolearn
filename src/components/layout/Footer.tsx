import { Link } from "@tanstack/react-router";
import {
  Facebook,
  GraduationCap,
  Instagram,
  Linkedin,
  Mail,
  MessageCircle,
  Phone,
  type LucideIcon,
} from "lucide-react";
import { NAV_LINKS, SITE } from "@/constants/site";
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
      <div className="border-b border-border bg-primary-dark">
        <div className="container-page flex flex-col items-start justify-between gap-6 py-12 sm:flex-row sm:items-center">
          <div className="max-w-lg">
            <h2 className="text-xl font-bold text-primary-foreground sm:text-2xl">
              Prêt à commencer avec ExpoLearn ?
            </h2>
            <p className="mt-2 text-sm text-primary-foreground/80">
              Trouvez un répétiteur vérifié ou proposez vos services près de chez vous.
            </p>
          </div>
          <CtaButtons variantSecondary="outline" />
        </div>
      </div>

      <div className="container-page grid gap-10 py-14 sm:grid-cols-2 lg:grid-cols-4">
        <div className="sm:col-span-2 lg:col-span-1">
          <div className="flex items-center gap-2">
            <span className="flex size-9 items-center justify-center rounded-xl bg-gradient-to-br from-primary to-primary-dark text-primary-foreground">
              <GraduationCap aria-hidden="true" className="size-5" />
            </span>
            <span className="font-display text-lg font-bold">ExpoLearn</span>
          </div>
          <p className="text-balance-p mt-4 text-sm text-muted-foreground">
            Répétitions scolaires à domicile au Cameroun. Nous sélectionnons les répétiteurs, nous
            organisons la mise en relation et nous accompagnons les familles dans la durée.
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
            <li>
              <Link
                to="/contact"
                className="text-sm text-muted-foreground transition-colors hover:text-primary-dark"
              >
                Contact
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <h2 className="text-sm font-bold">Commencer</h2>
          <ul className="mt-4 space-y-2.5">
            <li>
              <Link
                to="/trouver-un-repetiteur"
                className="text-sm font-semibold text-primary-dark hover:underline"
              >
                Trouver un répétiteur
              </Link>
            </li>
            <li>
              <Link
                to="/devenir-repetiteur"
                className="text-sm font-semibold text-primary-dark hover:underline"
              >
                Devenir répétiteur
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <h2 className="text-sm font-bold">Nous joindre</h2>
          <ul className="mt-4 space-y-3 text-sm text-muted-foreground">
            <li className="flex items-center gap-2">
              <Phone aria-hidden="true" className="size-4 text-primary-dark" />
              <a href={SITE.phoneHref} className="hover:text-primary-dark">
                {SITE.phone}
              </a>
            </li>
            <li className="flex items-center gap-2">
              <MessageCircle aria-hidden="true" className="size-4 text-primary-dark" />
              <a href={SITE.whatsappHref} className="hover:text-primary-dark">
                WhatsApp {SITE.whatsapp}
              </a>
            </li>
            <li className="flex items-center gap-2">
              <Mail aria-hidden="true" className="size-4 text-primary-dark" />
              <a href={SITE.emailHref} className="hover:text-primary-dark">
                {SITE.email}
              </a>
            </li>
          </ul>
          <p className="mt-4 text-xs text-muted-foreground">
            Coordonnées provisoires, à confirmer avant publication.
          </p>
        </div>
      </div>

      <div className="border-t border-border">
        <div className="container-page py-6 text-xs text-muted-foreground">
          <p>© {new Date().getFullYear()} ExpoLearn. Tous droits réservés.</p>
        </div>
      </div>
    </footer>
  );
}
