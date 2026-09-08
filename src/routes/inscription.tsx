import { useState } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { ArrowLeft, ArrowRight, CheckCircle2, Send } from "lucide-react";
import { Button, buttonVariants } from "@/components/ui/button";
import { Section } from "@/components/ui/section";
import { PageHero } from "@/components/ui/page-hero";
import { Reveal } from "@/components/ui/reveal";
import { FormStepper } from "@/components/ui/form-stepper";
import { Field, fieldClass, fieldErrorClass } from "@/components/ui/form-field";
import { cn } from "@/lib/utils";
import { buildWhatsAppLink } from "@/lib/whatsapp";
import {
  DESTINATION_COUNTRIES,
  EXAM_TYPES,
  FREQUENCIES,
  LEVELS,
  SUBJECTS,
} from "@/constants/site";
import {
  DEFAULT_SERVICE,
  SERVICES,
  getServiceBySlug,
  type ServiceSlug,
} from "@/constants/services";

const TITLE = "S'inscrire — ExpoLearn";
const DESCRIPTION =
  "Inscrivez-vous à un service ExpoLearn : soutien scolaire, préparation aux concours, cours d'anglais, cours d'allemand ou accompagnement au visa étudiant.";

const SLUGS = SERVICES.map((service) => service.slug) as [
  ServiceSlug,
  ...ServiceSlug[],
];

const searchSchema = z.object({
  service: z.enum(SLUGS).optional(),
});

export const Route = createFileRoute("/inscription")({
  validateSearch: searchSchema,
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESCRIPTION },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESCRIPTION },
    ],
  }),
  component: InscriptionPage,
});

const schema = z
  .object({
    service: z.enum(SLUGS, { message: "Sélectionnez un service." }),
    fullName: z.string().min(2, "Indiquez votre nom complet."),
    phone: z.string().min(8, "Numéro de téléphone invalide."),
    email: z.string().email("Adresse e-mail invalide."),
    city: z.string().min(2, "Indiquez votre ville."),
    studentLevel: z.string().optional(),
    subjects: z.array(z.string()).optional(),
    examType: z.string().optional(),
    currentLevel: z.string().optional(),
    destination: z.string().optional(),
    format: z.string().optional(),
    frequency: z.string().optional(),
    message: z
      .string()
      .min(20, "Décrivez votre besoin en 20 caractères au minimum."),
  })
  .superRefine((data, ctx) => {
    if (data.service === "soutien-scolaire") {
      if (!data.studentLevel) {
        ctx.addIssue({
          path: ["studentLevel"],
          code: z.ZodIssueCode.custom,
          message: "Sélectionnez le niveau de l'élève.",
        });
      }
      if (!data.subjects || data.subjects.length === 0) {
        ctx.addIssue({
          path: ["subjects"],
          code: z.ZodIssueCode.custom,
          message: "Sélectionnez au moins une matière.",
        });
      }
    }
    if (data.service === "preparation-concours" && !data.examType) {
      ctx.addIssue({
        path: ["examType"],
        code: z.ZodIssueCode.custom,
        message: "Sélectionnez le concours ou l'examen visé.",
      });
    }
    if (
      (data.service === "cours-anglais" || data.service === "cours-allemand") &&
      !data.currentLevel
    ) {
      ctx.addIssue({
        path: ["currentLevel"],
        code: z.ZodIssueCode.custom,
        message: "Sélectionnez votre niveau actuel.",
      });
    }
    if (data.service === "visa-etudiant" && !data.destination) {
      ctx.addIssue({
        path: ["destination"],
        code: z.ZodIssueCode.custom,
        message: "Sélectionnez le pays visé.",
      });
    }
  });

type FormValues = z.infer<typeof schema>;

const STEPS = ["Le service", "Vos coordonnées", "Votre besoin"] as const;

const STEP_FIELDS: (keyof FormValues)[][] = [
  ["service"],
  ["fullName", "phone", "email", "city"],
  [
    "studentLevel",
    "subjects",
    "examType",
    "currentLevel",
    "destination",
    "format",
    "frequency",
    "message",
  ],
];

function buildMessage(data: FormValues) {
  const service = getServiceBySlug(data.service);
  const lines = [
    `Nouvelle inscription — ${service?.title ?? data.service}`,
    "",
    `Nom : ${data.fullName}`,
    `Téléphone : ${data.phone}`,
    `Email : ${data.email}`,
    `Ville : ${data.city}`,
    "",
  ];

  if (data.service === "soutien-scolaire") {
    lines.push(`Niveau de l'élève : ${data.studentLevel}`);
    lines.push(`Matières : ${(data.subjects ?? []).join(", ")}`);
    if (data.format) lines.push(`Format souhaité : ${data.format}`);
    if (data.frequency) lines.push(`Fréquence souhaitée : ${data.frequency}`);
  }
  if (data.service === "preparation-concours") {
    lines.push(`Concours / examen visé : ${data.examType}`);
  }
  if (data.service === "cours-anglais" || data.service === "cours-allemand") {
    lines.push(`Niveau actuel : ${data.currentLevel}`);
    if (data.format) lines.push(`Format souhaité : ${data.format}`);
  }
  if (data.service === "visa-etudiant") {
    lines.push(`Pays visé : ${data.destination}`);
  }

  lines.push("", "Précisions :", data.message);
  return lines.join("\n");
}

function InscriptionPage() {
  const search = Route.useSearch();
  const initialService = SERVICES.some(
    (service) => service.slug === search.service,
  )
    ? (search.service as ServiceSlug)
    : DEFAULT_SERVICE.slug;

  const [status, setStatus] = useState<"idle" | "success">("idle");
  const [step, setStep] = useState(0);
  const [whatsappUrl, setWhatsappUrl] = useState("");

  const form = useForm<FormValues>({
    resolver: zodResolver(schema),
    defaultValues: {
      service: initialService,
      fullName: "",
      phone: "",
      email: "",
      city: "",
      studentLevel: "",
      subjects: [],
      examType: "",
      currentLevel: "",
      destination: "",
      format: "",
      frequency: "",
      message: "",
    },
  });
  const { errors } = form.formState;
  const selectedSlug = form.watch("service");
  const selectedService = getServiceBySlug(selectedSlug) ?? DEFAULT_SERVICE;

  const goNext = async () => {
    const valid = await form.trigger(STEP_FIELDS[step]);
    if (valid) setStep((current) => Math.min(current + 1, STEPS.length - 1));
  };

  const goBack = () => setStep((current) => Math.max(current - 1, 0));

  const onInvalid = () => {
    const firstErrorField = Object.keys(form.formState.errors)[0];
    const stepIndex = STEP_FIELDS.findIndex((fields) =>
      fields.includes(firstErrorField as keyof FormValues),
    );
    if (stepIndex !== -1) setStep(stepIndex);
  };

  const onSubmit = (data: FormValues) => {
    setWhatsappUrl(buildWhatsAppLink(buildMessage(data)));
    setStatus("success");
    form.reset();
    setStep(0);
  };

  const pillClass =
    "flex cursor-pointer items-center gap-2 rounded-full border border-input bg-background px-4 py-2 text-sm text-muted-foreground transition-all duration-200 hover:border-primary has-checked:scale-[1.03] has-checked:border-primary has-checked:bg-secondary has-checked:font-semibold has-checked:text-secondary-foreground";

  return (
    <>
      <PageHero
        eyebrow="S'inscrire"
        title="Inscrivez-vous à un service ExpoLearn"
        description="Choisissez le service qui correspond à votre objectif, indiquez vos coordonnées, et nous revenons vers vous pour confirmer votre inscription."
      />

      <Section>
        <Reveal
          direction="scale"
          className="mx-auto max-w-3xl rounded-3xl border border-border bg-card p-6 shadow-soft sm:p-8"
        >
          {status === "success" ? (
            <div className="animate-pop flex flex-col items-start gap-4">
              <span className="flex size-14 items-center justify-center rounded-full bg-secondary text-primary-dark">
                <CheckCircle2 aria-hidden="true" className="size-7" />
              </span>
              <div>
                <h2 className="text-lg font-bold">
                  Inscription prête à être envoyée
                </h2>
                <p className="mt-1 text-sm text-muted-foreground">
                  Il ne reste qu'une étape : envoyez votre inscription à
                  ExpoLearn sur WhatsApp.
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
              <Button
                variant="outline"
                onClick={() => {
                  setStatus("idle");
                  setStep(0);
                }}
              >
                Envoyer une autre inscription
              </Button>
            </div>
          ) : (
            <form noValidate onSubmit={form.handleSubmit(onSubmit, onInvalid)}>
              <FormStepper steps={STEPS} current={step} />

              {step === 0 ? (
                <div className="animate-pop space-y-3">
                  {SERVICES.map((service) => (
                    <label
                      key={service.slug}
                      className={cn(
                        "flex cursor-pointer items-start gap-3 rounded-2xl border border-input bg-background px-4 py-3.5 transition-all duration-200 hover:border-primary has-checked:border-primary has-checked:bg-secondary",
                      )}
                    >
                      <input
                        type="radio"
                        value={service.slug}
                        className="mt-1 size-4 accent-[var(--primary-dark)]"
                        {...form.register("service")}
                      />
                      <span>
                        <span className="block text-sm font-semibold">
                          {service.title}
                        </span>
                        <span className="mt-0.5 block text-xs text-muted-foreground">
                          {service.shortDescription}
                        </span>
                      </span>
                    </label>
                  ))}
                  {errors.service ? (
                    <p
                      role="alert"
                      className="text-xs font-medium text-destructive"
                    >
                      {errors.service.message}
                    </p>
                  ) : null}

                  <Button
                    type="button"
                    size="lg"
                    className="w-full"
                    onClick={goNext}
                  >
                    Continuer
                    <ArrowRight aria-hidden="true" />
                  </Button>
                </div>
              ) : null}

              {step === 1 ? (
                <div className="animate-pop space-y-5">
                  <div className="grid gap-5 sm:grid-cols-2">
                    <Field
                      label="Nom complet"
                      htmlFor="fullName"
                      required
                      error={errors.fullName?.message}
                    >
                      <input
                        id="fullName"
                        className={cn(
                          fieldClass,
                          errors.fullName && fieldErrorClass,
                        )}
                        placeholder="Ex. Marie Nguema"
                        {...form.register("fullName")}
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
                        className={cn(
                          fieldClass,
                          errors.phone && fieldErrorClass,
                        )}
                        placeholder="+237 6 XX XX XX XX"
                        {...form.register("phone")}
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
                        className={cn(
                          fieldClass,
                          errors.email && fieldErrorClass,
                        )}
                        placeholder="vous@exemple.com"
                        {...form.register("email")}
                      />
                    </Field>
                    <Field
                      label="Ville"
                      htmlFor="city"
                      required
                      error={errors.city?.message}
                    >
                      <input
                        id="city"
                        className={cn(
                          fieldClass,
                          errors.city && fieldErrorClass,
                        )}
                        placeholder="Yaoundé"
                        {...form.register("city")}
                      />
                    </Field>
                  </div>

                  <div className="flex gap-3">
                    <Button
                      type="button"
                      variant="outline"
                      size="lg"
                      onClick={goBack}
                    >
                      <ArrowLeft aria-hidden="true" />
                      Retour
                    </Button>
                    <Button
                      type="button"
                      size="lg"
                      className="flex-1"
                      onClick={goNext}
                    >
                      Continuer
                      <ArrowRight aria-hidden="true" />
                    </Button>
                  </div>
                </div>
              ) : null}

              {step === 2 ? (
                <div className="animate-pop space-y-5">
                  {selectedSlug === "soutien-scolaire" ? (
                    <>
                      <Field
                        label="Niveau de l'élève"
                        htmlFor="studentLevel"
                        required
                        error={errors.studentLevel?.message}
                      >
                        <select
                          id="studentLevel"
                          className={cn(
                            fieldClass,
                            errors.studentLevel && fieldErrorClass,
                          )}
                          {...form.register("studentLevel")}
                        >
                          <option value="">Sélectionner un niveau</option>
                          {LEVELS.map((level) => (
                            <option key={level} value={level}>
                              {level}
                            </option>
                          ))}
                        </select>
                      </Field>

                      <Field
                        label="Matières concernées"
                        htmlFor="subjects"
                        required
                        error={errors.subjects?.message}
                        hint="Plusieurs choix possibles."
                      >
                        <div id="subjects" className="flex flex-wrap gap-2.5">
                          {SUBJECTS.map((subject) => (
                            <label key={subject} className={pillClass}>
                              <input
                                type="checkbox"
                                value={subject}
                                className="size-4 accent-[var(--primary-dark)]"
                                {...form.register("subjects")}
                              />
                              {subject}
                            </label>
                          ))}
                        </div>
                      </Field>

                      <div className="grid gap-5 sm:grid-cols-2">
                        <Field label="Format souhaité" htmlFor="format">
                          <select
                            id="format"
                            className={fieldClass}
                            {...form.register("format")}
                          >
                            <option value="">Sélectionner (facultatif)</option>
                            {selectedService.formats.map((format) => (
                              <option key={format} value={format}>
                                {format}
                              </option>
                            ))}
                          </select>
                        </Field>
                        <Field label="Fréquence souhaitée" htmlFor="frequency">
                          <select
                            id="frequency"
                            className={fieldClass}
                            {...form.register("frequency")}
                          >
                            <option value="">Sélectionner (facultatif)</option>
                            {FREQUENCIES.map((item) => (
                              <option key={item} value={item}>
                                {item}
                              </option>
                            ))}
                          </select>
                        </Field>
                      </div>
                    </>
                  ) : null}

                  {selectedSlug === "preparation-concours" ? (
                    <Field
                      label="Concours ou examen visé"
                      htmlFor="examType"
                      required
                      error={errors.examType?.message}
                    >
                      <select
                        id="examType"
                        className={cn(
                          fieldClass,
                          errors.examType && fieldErrorClass,
                        )}
                        {...form.register("examType")}
                      >
                        <option value="">Sélectionner</option>
                        {EXAM_TYPES.map((item) => (
                          <option key={item} value={item}>
                            {item}
                          </option>
                        ))}
                      </select>
                    </Field>
                  ) : null}

                  {selectedSlug === "cours-anglais" ||
                  selectedSlug === "cours-allemand" ? (
                    <div className="grid gap-5 sm:grid-cols-2">
                      <Field
                        label="Niveau actuel"
                        htmlFor="currentLevel"
                        required
                        error={errors.currentLevel?.message}
                      >
                        <select
                          id="currentLevel"
                          className={cn(
                            fieldClass,
                            errors.currentLevel && fieldErrorClass,
                          )}
                          {...form.register("currentLevel")}
                        >
                          <option value="">Sélectionner</option>
                          {(selectedService.levels ?? []).map((level) => (
                            <option key={level} value={level}>
                              {level}
                            </option>
                          ))}
                        </select>
                      </Field>
                      <Field label="Format souhaité" htmlFor="format">
                        <select
                          id="format"
                          className={fieldClass}
                          {...form.register("format")}
                        >
                          <option value="">Sélectionner (facultatif)</option>
                          {selectedService.formats.map((format) => (
                            <option key={format} value={format}>
                              {format}
                            </option>
                          ))}
                        </select>
                      </Field>
                    </div>
                  ) : null}

                  {selectedSlug === "visa-etudiant" ? (
                    <Field
                      label="Pays visé"
                      htmlFor="destination"
                      required
                      error={errors.destination?.message}
                    >
                      <select
                        id="destination"
                        className={cn(
                          fieldClass,
                          errors.destination && fieldErrorClass,
                        )}
                        {...form.register("destination")}
                      >
                        <option value="">Sélectionner</option>
                        {DESTINATION_COUNTRIES.map((item) => (
                          <option key={item} value={item}>
                            {item}
                          </option>
                        ))}
                      </select>
                    </Field>
                  ) : null}

                  <Field
                    label="Précisions"
                    htmlFor="message"
                    required
                    error={errors.message?.message}
                    hint="Objectif, disponibilités, dates envisagées..."
                  >
                    <textarea
                      id="message"
                      rows={4}
                      className={cn(
                        fieldClass,
                        errors.message && fieldErrorClass,
                      )}
                      placeholder="Ex. Rattraper le retard en mathématiques en classe de 3e, séances en fin d'après-midi."
                      {...form.register("message")}
                    />
                  </Field>

                  <div className="flex gap-3">
                    <Button
                      type="button"
                      variant="outline"
                      size="lg"
                      onClick={goBack}
                    >
                      <ArrowLeft aria-hidden="true" />
                      Retour
                    </Button>
                    <Button type="submit" size="lg" className="flex-1">
                      Envoyer mon inscription
                    </Button>
                  </div>
                  <p className="text-xs text-muted-foreground">
                    En envoyant, WhatsApp s'ouvre avec votre inscription
                    pré-remplie : il ne vous reste qu'à appuyer sur Envoyer.
                  </p>
                </div>
              ) : null}
            </form>
          )}
        </Reveal>
      </Section>
    </>
  );
}
