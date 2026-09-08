import { useState } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import {
  CheckCircle2,
  Mail,
  MapPin,
  MessageCircle,
  Phone,
  Send,
} from "lucide-react";
import { Button, buttonVariants } from "@/components/ui/button";
import { Section } from "@/components/ui/section";
import { PageHero } from "@/components/ui/page-hero";
import { Reveal } from "@/components/ui/reveal";
import { Field, fieldClass, fieldErrorClass } from "@/components/ui/form-field";
import { cn } from "@/lib/utils";
import { buildWhatsAppLink } from "@/lib/whatsapp";
import { SITE } from "@/constants/site";
import { SERVICES } from "@/constants/services";

const TITLE = "Contact — ExpoLearn";
const DESCRIPTION =
  "Contactez ExpoLearn par téléphone, WhatsApp ou e-mail, ou envoyez votre message : nous répondons sous 24 heures ouvrées.";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESCRIPTION },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESCRIPTION },
    ],
  }),
  component: ContactPage,
});

const schema = z.object({
  name: z.string().min(2, "Indiquez votre nom complet."),
  email: z.string().email("Adresse e-mail invalide."),
  phone: z.string().min(8, "Numéro de téléphone invalide."),
  service: z.string().optional(),
  message: z
    .string()
    .min(20, "Décrivez votre demande en 20 caractères au minimum."),
});

type FormValues = z.infer<typeof schema>;

function buildMessage(data: FormValues) {
  const lines = [
    "Nouveau message — Contact ExpoLearn",
    "",
    `Nom : ${data.name}`,
    `Téléphone : ${data.phone}`,
    `Email : ${data.email}`,
  ];
  if (data.service) lines.push(`Service concerné : ${data.service}`);
  lines.push("", "Message :", data.message);
  return lines.join("\n");
}

function ContactPage() {
  const [status, setStatus] = useState<"idle" | "success">("idle");
  const [whatsappUrl, setWhatsappUrl] = useState("");
  const form = useForm<FormValues>({
    resolver: zodResolver(schema),
    defaultValues: { name: "", email: "", phone: "", service: "", message: "" },
  });
  const { errors } = form.formState;

  const onSubmit = (data: FormValues) => {
    setWhatsappUrl(buildWhatsAppLink(buildMessage(data)));
    setStatus("success");
    form.reset();
  };

  return (
    <>
      <PageHero
        eyebrow="Contact"
        title="Parlons de votre projet"
        description="Une question sur nos services, nos tarifs ou une inscription ? Écrivez-nous ou appelez-nous directement."
      />
      <Section>
        <div className="grid gap-12 lg:grid-cols-[1fr_1.2fr]">
          <Reveal direction="left">
            <h2 className="text-sm font-bold">Nos coordonnées</h2>
            <ul className="mt-4 space-y-3 text-sm">
              <li className="flex items-center gap-2.5">
                <Phone
                  aria-hidden="true"
                  className="size-4 shrink-0 text-primary-dark"
                />
                <a href={SITE.phoneHref} className="hover:underline">
                  {SITE.phone}
                </a>
              </li>
              <li className="flex items-center gap-2.5">
                <Phone
                  aria-hidden="true"
                  className="size-4 shrink-0 text-primary-dark"
                />
                <a href={SITE.phoneSecondaryHref} className="hover:underline">
                  {SITE.phoneSecondary}
                </a>
              </li>
              <li className="flex items-center gap-2.5">
                <MessageCircle
                  aria-hidden="true"
                  className="size-4 shrink-0 text-primary-dark"
                />
                <a href={SITE.whatsappHref} className="hover:underline">
                  WhatsApp {SITE.whatsapp}
                </a>
              </li>
              <li className="flex items-center gap-2.5">
                <Mail
                  aria-hidden="true"
                  className="size-4 shrink-0 text-primary-dark"
                />
                <a href={SITE.emailHref} className="hover:underline">
                  {SITE.email}
                </a>
              </li>
              <li className="flex items-start gap-2.5">
                <MapPin
                  aria-hidden="true"
                  className="mt-0.5 size-4 shrink-0 text-primary-dark"
                />
                <span>{SITE.address}</span>
              </li>
            </ul>
          </Reveal>

          <Reveal
            direction="right"
            delay={120}
            className="rounded-3xl border border-border bg-card p-6 shadow-soft sm:p-8"
          >
            {status === "success" ? (
              <div className="animate-pop flex flex-col items-start gap-4">
                <span className="flex size-14 items-center justify-center rounded-full bg-secondary text-primary-dark">
                  <CheckCircle2 aria-hidden="true" className="size-7" />
                </span>
                <div>
                  <h2 className="text-lg font-bold">
                    Message prêt à être envoyé
                  </h2>
                  <p className="mt-1 text-sm text-muted-foreground">
                    Il ne reste qu'une étape : envoyez votre message à ExpoLearn
                    sur WhatsApp.
                  </p>
                </div>
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={cn(
                    buttonVariants({ size: "lg" }),
                    "w-full bg-[#25D366] text-white hover:bg-[#1ebe5b]",
                  )}
                >
                  <Send aria-hidden="true" />
                  Envoyer sur WhatsApp
                </a>
                <Button variant="outline" onClick={() => setStatus("idle")}>
                  Envoyer un autre message
                </Button>
              </div>
            ) : (
              <form
                noValidate
                onSubmit={form.handleSubmit(onSubmit)}
                className="space-y-5"
              >
                <Field
                  label="Nom complet"
                  htmlFor="name"
                  required
                  error={errors.name?.message}
                >
                  <input
                    id="name"
                    className={cn(fieldClass, errors.name && fieldErrorClass)}
                    placeholder="Ex. Marie Nguema"
                    {...form.register("name")}
                  />
                </Field>
                <Field
                  label="E-mail"
                  htmlFor="email"
                  required
                  error={errors.email?.message}
                >
                  <input
                    id="email"
                    type="email"
                    className={cn(fieldClass, errors.email && fieldErrorClass)}
                    placeholder="vous@exemple.com"
                    {...form.register("email")}
                  />
                </Field>
                <Field
                  label="Téléphone"
                  htmlFor="phone"
                  required
                  error={errors.phone?.message}
                >
                  <input
                    id="phone"
                    type="tel"
                    className={cn(fieldClass, errors.phone && fieldErrorClass)}
                    placeholder="+237 6 XX XX XX XX"
                    {...form.register("phone")}
                  />
                </Field>
                <Field
                  label="Service concerné"
                  htmlFor="service"
                  hint="Facultatif"
                >
                  <select
                    id="service"
                    className={fieldClass}
                    {...form.register("service")}
                  >
                    <option value="">Sélectionner (facultatif)</option>
                    {SERVICES.map((service) => (
                      <option key={service.slug} value={service.title}>
                        {service.title}
                      </option>
                    ))}
                  </select>
                </Field>
                <Field
                  label="Message"
                  htmlFor="message"
                  required
                  error={errors.message?.message}
                >
                  <textarea
                    id="message"
                    rows={5}
                    className={cn(
                      fieldClass,
                      errors.message && fieldErrorClass,
                    )}
                    placeholder="Décrivez votre demande"
                    {...form.register("message")}
                  />
                </Field>

                <Button type="submit" size="lg" className="w-full">
                  Envoyer le message
                </Button>
                <p className="text-xs text-muted-foreground">
                  En envoyant, WhatsApp s'ouvre avec votre message pré-rempli :
                  il ne vous reste qu'à appuyer sur Envoyer.
                </p>
              </form>
            )}
          </Reveal>
        </div>
      </Section>
    </>
  );
}
