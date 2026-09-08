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
import { BUDGETS, FREQUENCIES, LEVELS, SUBJECTS } from "@/constants/site";
import { PARENT_BENEFITS } from "@/constants/content";

const TITLE = "Trouver un répétiteur — ExpoLearn";
const DESCRIPTION =
  "Décrivez le besoin de votre enfant : niveau, matières, fréquence et quartier. ExpoLearn sélectionne un répétiteur vérifié et organise la première séance à domicile.";

export const Route = createFileRoute("/trouver-un-repetiteur")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESCRIPTION },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESCRIPTION },
    ],
  }),
  component: ParentPage,
});

const schema = z.object({
  parentName: z.string().min(2, "Indiquez votre nom complet."),
  phone: z.string().min(8, "Numéro de téléphone invalide."),
  email: z.string().email("Adresse e-mail invalide."),
  city: z.string().min(2, "Indiquez votre ville."),
  district: z.string().min(2, "Indiquez votre quartier."),
  studentLevel: z.string().min(1, "Sélectionnez le niveau de l'élève."),
  subjects: z.array(z.string()).min(1, "Sélectionnez au moins une matière."),
  frequency: z.string().min(1, "Sélectionnez une fréquence."),
  budget: z.string().min(1, "Sélectionnez un budget indicatif."),
  goal: z.string().min(20, "Décrivez l'objectif en 20 caractères au minimum."),
});

type FormValues = z.infer<typeof schema>;

const STEPS = ["Vos coordonnées", "Le besoin de l'élève"] as const;

const STEP_FIELDS: (keyof FormValues)[][] = [
  ["parentName", "phone", "email", "city", "district"],
  ["studentLevel", "subjects", "frequency", "budget", "goal"],
];

function buildMessage(data: FormValues) {
  return [
    "Nouvelle demande — Trouver un répétiteur",
    "",
    `Parent : ${data.parentName}`,
    `Téléphone : ${data.phone}`,
    `Email : ${data.email}`,
    `Ville : ${data.city}`,
    `Quartier : ${data.district}`,
    "",
    `Niveau de l'élève : ${data.studentLevel}`,
    `Matières : ${data.subjects.join(", ")}`,
    `Fréquence souhaitée : ${data.frequency}`,
    `Budget indicatif : ${data.budget}`,
    "",
    "Objectif et disponibilités :",
    data.goal,
  ].join("\n");
}

function ParentPage() {
  const [status, setStatus] = useState<"idle" | "success">("idle");
  const [step, setStep] = useState(0);
  const [whatsappUrl, setWhatsappUrl] = useState("");

  const form = useForm<FormValues>({
    resolver: zodResolver(schema),
    defaultValues: {
      parentName: "",
      phone: "",
      email: "",
      city: "",
      district: "",
      studentLevel: "",
      subjects: [],
      frequency: "",
      budget: "",
      goal: "",
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

  return (
    <>
      <PageHero
        eyebrow="Pour les parents"
        title="Décrivez le besoin de votre enfant"
        description="Un seul formulaire, quelques minutes. Nous cherchons le répétiteur, vérifions son profil et revenons vers vous sous 24 heures ouvrées."
      >
        <ul className="mt-6 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-sm text-primary-foreground/85">
          {PARENT_BENEFITS.map((item) => (
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
                <h2 className="text-lg font-bold">Demande prête à être envoyée</h2>
                <p className="mt-1 text-sm text-muted-foreground">
                  Il ne reste qu'une étape : envoyez votre demande à ExpoLearn sur WhatsApp.
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
                Envoyer une autre demande
              </Button>
            </div>
          ) : (
            <form noValidate onSubmit={form.handleSubmit(onSubmit, onInvalid)}>
              <FormStepper steps={STEPS} current={step} />

              {step === 0 ? (
                <div className="animate-pop space-y-5">
                  <div className="grid gap-5 sm:grid-cols-2">
                    <Field
                      label="Nom du parent"
                      htmlFor="parentName"
                      required
                      error={errors.parentName?.message}
                    >
                      <input
                        id="parentName"
                        className={cn(fieldClass, errors.parentName && fieldErrorClass)}
                        placeholder="Ex. Marie Nguema"
                        {...form.register("parentName")}
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
                        placeholder="Yaoundé"
                        {...form.register("city")}
                      />
                    </Field>
                    <Field
                      label="Quartier"
                      htmlFor="district"
                      required
                      error={errors.district?.message}
                      hint="Le quartier nous aide à trouver un répétiteur proche."
                    >
                      <input
                        id="district"
                        className={cn(fieldClass, errors.district && fieldErrorClass)}
                        placeholder="Bastos"
                        {...form.register("district")}
                      />
                    </Field>
                  </div>

                  <Button type="button" size="lg" className="w-full" onClick={goNext}>
                    Continuer
                    <ArrowRight aria-hidden="true" />
                  </Button>
                </div>
              ) : (
                <div className="animate-pop space-y-5">
                  <Field
                    label="Niveau de l'élève"
                    htmlFor="studentLevel"
                    required
                    error={errors.studentLevel?.message}
                  >
                    <select
                      id="studentLevel"
                      className={cn(fieldClass, errors.studentLevel && fieldErrorClass)}
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
                        <label
                          key={subject}
                          className="flex cursor-pointer items-center gap-2 rounded-full border border-input bg-background px-4 py-2 text-sm text-muted-foreground transition-all duration-200 hover:border-primary has-checked:scale-[1.03] has-checked:border-primary has-checked:bg-secondary has-checked:font-semibold has-checked:text-secondary-foreground"
                        >
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
                    <Field
                      label="Fréquence souhaitée"
                      htmlFor="frequency"
                      required
                      error={errors.frequency?.message}
                    >
                      <select
                        id="frequency"
                        className={cn(fieldClass, errors.frequency && fieldErrorClass)}
                        {...form.register("frequency")}
                      >
                        <option value="">Sélectionner</option>
                        {FREQUENCIES.map((item) => (
                          <option key={item} value={item}>
                            {item}
                          </option>
                        ))}
                      </select>
                    </Field>
                    <Field
                      label="Budget indicatif"
                      htmlFor="budget"
                      required
                      error={errors.budget?.message}
                    >
                      <select
                        id="budget"
                        className={cn(fieldClass, errors.budget && fieldErrorClass)}
                        {...form.register("budget")}
                      >
                        <option value="">Sélectionner</option>
                        {BUDGETS.map((item) => (
                          <option key={item} value={item}>
                            {item}
                          </option>
                        ))}
                      </select>
                    </Field>
                  </div>

                  <Field
                    label="Objectif et disponibilités"
                    htmlFor="goal"
                    required
                    error={errors.goal?.message}
                  >
                    <textarea
                      id="goal"
                      rows={4}
                      className={cn(fieldClass, errors.goal && fieldErrorClass)}
                      placeholder="Ex. Rattraper le retard en mathématiques en classe de 3e, séances en fin d'après-midi."
                      {...form.register("goal")}
                    />
                  </Field>

                  <div className="flex gap-3">
                    <Button type="button" variant="outline" size="lg" onClick={goBack}>
                      <ArrowLeft aria-hidden="true" />
                      Retour
                    </Button>
                    <Button type="submit" size="lg" className="flex-1">
                      Envoyer ma demande
                    </Button>
                  </div>
                  <p className="text-xs text-muted-foreground">
                    En envoyant, WhatsApp s'ouvre avec votre demande pré-remplie : il ne vous reste
                    qu'à appuyer sur Envoyer.
                  </p>
                </div>
              )}
            </form>
          )}
        </Reveal>
      </Section>
    </>
  );
}
