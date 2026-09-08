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
import { AVAILABILITY_SLOTS, LEVELS, STUDY_LEVELS, SUBJECTS } from "@/constants/site";
import { TUTOR_BENEFITS } from "@/constants/content";

const TITLE = "Devenir répétiteur — ExpoLearn";
const DESCRIPTION =
  "Enseignants, étudiants et diplômés : déposez votre candidature ExpoLearn et recevez des missions de répétitions à domicile près de chez vous.";

export const Route = createFileRoute("/devenir-repetiteur")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESCRIPTION },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESCRIPTION },
    ],
  }),
  component: TutorPage,
});

const schema = z.object({
  fullName: z.string().min(2, "Indiquez votre nom complet."),
  phone: z.string().min(8, "Numéro de téléphone invalide."),
  email: z.string().email("Adresse e-mail invalide."),
  city: z.string().min(2, "Indiquez votre ville."),
  district: z.string().min(2, "Indiquez votre quartier d'intervention."),
  studyLevel: z.string().min(1, "Sélectionnez votre niveau d'études."),
  subjects: z.array(z.string()).min(1, "Sélectionnez au moins une matière."),
  levels: z.array(z.string()).min(1, "Sélectionnez au moins un niveau enseigné."),
  availability: z.array(z.string()).min(1, "Sélectionnez au moins un créneau."),
  experience: z.string().min(20, "Décrivez votre expérience en 20 caractères au minimum."),
});

type FormValues = z.infer<typeof schema>;

const STEPS = ["Votre identité", "Ce que vous enseignez", "Disponibilités"] as const;

const STEP_FIELDS: (keyof FormValues)[][] = [
  ["fullName", "phone", "email", "city", "district", "studyLevel"],
  ["subjects", "levels"],
  ["availability", "experience"],
];

function buildMessage(data: FormValues) {
  return [
    "Nouvelle candidature — Devenir répétiteur",
    "",
    `Nom : ${data.fullName}`,
    `Téléphone : ${data.phone}`,
    `Email : ${data.email}`,
    `Ville : ${data.city}`,
    `Quartier(s) d'intervention : ${data.district}`,
    `Niveau d'études : ${data.studyLevel}`,
    "",
    `Matières enseignées : ${data.subjects.join(", ")}`,
    `Niveaux encadrés : ${data.levels.join(", ")}`,
    `Disponibilités : ${data.availability.join(", ")}`,
    "",
    "Expérience :",
    data.experience,
  ].join("\n");
}

function TutorPage() {
  const [status, setStatus] = useState<"idle" | "success">("idle");
  const [step, setStep] = useState(0);
  const [whatsappUrl, setWhatsappUrl] = useState("");

  const form = useForm<FormValues>({
    resolver: zodResolver(schema),
    defaultValues: {
      fullName: "",
      phone: "",
      email: "",
      city: "",
      district: "",
      studyLevel: "",
      subjects: [],
      levels: [],
      availability: [],
      experience: "",
    },
  });
  const { errors } = form.formState;

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
        eyebrow="Pour les répétiteurs"
        title="Candidatez et recevez des missions près de chez vous"
        description="Nous étudions chaque dossier individuellement, puis nous vous proposons des familles correspondant à vos matières, vos niveaux et vos créneaux."
      >
        <ul className="mt-6 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-sm text-primary-foreground/85">
          {TUTOR_BENEFITS.map((item) => (
            <li key={item} className="flex items-center gap-2">
              <CheckCircle2 aria-hidden="true" className="size-4 shrink-0" />
              {item}
            </li>
          ))}
        </ul>
      </PageHero>

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
                <h2 className="text-lg font-bold">Candidature prête à être envoyée</h2>
                <p className="mt-1 text-sm text-muted-foreground">
                  Il ne reste qu'une étape : envoyez votre candidature à ExpoLearn sur WhatsApp.
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
                Envoyer une autre candidature
              </Button>
            </div>
          ) : (
            <form noValidate onSubmit={form.handleSubmit(onSubmit, onInvalid)}>
              <FormStepper steps={STEPS} current={step} />

              {step === 0 ? (
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
                        className={cn(fieldClass, errors.fullName && fieldErrorClass)}
                        placeholder="Ex. Paul Ateba"
                        {...form.register("fullName")}
                      />
                    </Field>
                    <Field label="Téléphone" htmlFor="phone" required error={errors.phone?.message}>
                      <input
                        id="phone"
                        type="tel"
                        className={cn(fieldClass, errors.phone && fieldErrorClass)}
                        placeholder="+237 6 XX XX XX XX"
                        {...form.register("phone")}
                      />
                    </Field>
                    <Field label="E-mail" htmlFor="email" required error={errors.email?.message}>
                      <input
                        id="email"
                        type="email"
                        className={cn(fieldClass, errors.email && fieldErrorClass)}
                        placeholder="vous@exemple.com"
                        {...form.register("email")}
                      />
                    </Field>
                    <Field label="Ville" htmlFor="city" required error={errors.city?.message}>
                      <input
                        id="city"
                        className={cn(fieldClass, errors.city && fieldErrorClass)}
                        placeholder="Douala"
                        {...form.register("city")}
                      />
                    </Field>
                    <Field
                      label="Quartiers d'intervention"
                      htmlFor="district"
                      required
                      error={errors.district?.message}
                    >
                      <input
                        id="district"
                        className={cn(fieldClass, errors.district && fieldErrorClass)}
                        placeholder="Akwa, Bonapriso"
                        {...form.register("district")}
                      />
                    </Field>
                    <Field
                      label="Niveau d'études"
                      htmlFor="studyLevel"
                      required
                      error={errors.studyLevel?.message}
                    >
                      <select
                        id="studyLevel"
                        className={cn(fieldClass, errors.studyLevel && fieldErrorClass)}
                        {...form.register("studyLevel")}
                      >
                        <option value="">Sélectionner</option>
                        {STUDY_LEVELS.map((item) => (
                          <option key={item} value={item}>
                            {item}
                          </option>
                        ))}
                      </select>
                    </Field>
                  </div>

                  <Button type="button" size="lg" className="w-full" onClick={goNext}>
                    Continuer
                    <ArrowRight aria-hidden="true" />
                  </Button>
                </div>
              ) : null}

              {step === 1 ? (
                <div className="animate-pop space-y-5">
                  <Field
                    label="Matières enseignées"
                    htmlFor="subjects"
                    required
                    error={errors.subjects?.message}
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

                  <Field
                    label="Niveaux encadrés"
                    htmlFor="levels"
                    required
                    error={errors.levels?.message}
                  >
                    <div id="levels" className="flex flex-wrap gap-2.5">
                      {LEVELS.map((level) => (
                        <label key={level} className={pillClass}>
                          <input
                            type="checkbox"
                            value={level}
                            className="size-4 accent-[var(--primary-dark)]"
                            {...form.register("levels")}
                          />
                          {level}
                        </label>
                      ))}
                    </div>
                  </Field>

                  <div className="flex gap-3">
                    <Button type="button" variant="outline" size="lg" onClick={goBack}>
                      <ArrowLeft aria-hidden="true" />
                      Retour
                    </Button>
                    <Button type="button" size="lg" className="flex-1" onClick={goNext}>
                      Continuer
                      <ArrowRight aria-hidden="true" />
                    </Button>
                  </div>
                </div>
              ) : null}

              {step === 2 ? (
                <div className="animate-pop space-y-5">
                  <Field
                    label="Disponibilités"
                    htmlFor="availability"
                    required
                    error={errors.availability?.message}
                  >
                    <div id="availability" className="flex flex-wrap gap-2.5">
                      {AVAILABILITY_SLOTS.map((slot) => (
                        <label key={slot} className={pillClass}>
                          <input
                            type="checkbox"
                            value={slot}
                            className="size-4 accent-[var(--primary-dark)]"
                            {...form.register("availability")}
                          />
                          {slot}
                        </label>
                      ))}
                    </div>
                  </Field>

                  <Field
                    label="Expérience d'encadrement"
                    htmlFor="experience"
                    required
                    error={errors.experience?.message}
                    hint="Le CV est optionnel : il pourra être demandé lors de l'entretien."
                  >
                    <textarea
                      id="experience"
                      rows={4}
                      className={cn(fieldClass, errors.experience && fieldErrorClass)}
                      placeholder="Ex. Deux années de répétitions en mathématiques auprès d'élèves de 4e et 3e."
                      {...form.register("experience")}
                    />
                  </Field>

                  <div className="flex gap-3">
                    <Button type="button" variant="outline" size="lg" onClick={goBack}>
                      <ArrowLeft aria-hidden="true" />
                      Retour
                    </Button>
                    <Button type="submit" size="lg" className="flex-1">
                      Envoyer ma candidature
                    </Button>
                  </div>
                  <p className="text-xs text-muted-foreground">
                    En envoyant, WhatsApp s'ouvre avec votre candidature pré-remplie : il ne vous
                    reste qu'à appuyer sur Envoyer.
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
