export type ServiceSlug =
  | "soutien-scolaire"
  | "preparation-concours"
  | "cours-anglais"
  | "cours-allemand"
  | "visa-etudiant";

export type Service = {
  slug: ServiceSlug;
  pole: string;
  icon: "home" | "target" | "languages" | "landmark" | "plane";
  title: string;
  shortTitle: string;
  audience: string;
  shortDescription: string;
  heroDescription: string;
  formats: readonly string[];
  highlights: readonly string[];
  levels?: readonly string[];
  nextIntake?: string;
  price?: string;
  quote?: string;
};

export const SERVICES: readonly Service[] = [
  {
    slug: "soutien-scolaire",
    pole: "ExpoLearn Education",
    icon: "home",
    title: "Soutien scolaire",
    shortTitle: "Soutien scolaire",
    audience: "Élèves du primaire à la terminale",
    shortDescription:
      "Cours en groupe à notre siège ou séances individuelles à domicile, dans toutes les matières.",
    heroDescription:
      "Un accompagnement personnalisé pour reprendre les bases, consolider un niveau ou préparer un examen, avec un suivi régulier de la progression de l'élève.",
    formats: ["En groupe, au siège d'ExpoLearn", "À domicile, chez l'élève"],
    highlights: [
      "Accompagnement personnalisé selon le niveau et les objectifs de chaque élève",
      "Enseignants expérimentés, pédagogues et à l'écoute",
      "Évaluations régulières pour suivre l'évolution et renforcer les acquis",
      "Toutes les matières couvertes, du primaire à la terminale",
    ],
    nextIntake: "Admissions en continu",
    quote: "Réussir aujourd'hui, construire demain !",
  },
  {
    slug: "preparation-concours",
    pole: "ExpoLearn Education",
    icon: "target",
    title: "Préparation aux concours",
    shortTitle: "Concours & examens",
    audience: "Élèves et candidats à un concours d'entrée",
    shortDescription:
      "Préparation ciblée aux concours d'entrée aux grandes écoles et aux examens officiels.",
    heroDescription:
      "Une préparation structurée autour des épreuves visées, pour aborder le concours ou l'examen avec méthode et confiance.",
    formats: [
      "Sessions en groupe",
      "Accompagnement individuel",
      "Présentiel, à Yaoundé",
    ],
    highlights: [
      "Préparation aux concours d'entrée aux grandes écoles et établissements supérieurs",
      "Préparation aux examens officiels (BEPC, Probatoire, Baccalauréat...)",
      "Méthodologie, entraînement aux épreuves types et gestion du temps",
      "Suivi individualisé selon le concours ou l'examen visé",
    ],
    nextIntake: "Sessions organisées selon le calendrier des concours",
  },
  {
    slug: "cours-anglais",
    pole: "ExpoLearn Language Academy",
    icon: "languages",
    title: "Cours d'anglais",
    shortTitle: "Anglais",
    audience: "Adolescents, étudiants et professionnels",
    shortDescription:
      "Cours d'anglais en présentiel et en ligne, du niveau débutant à avancé, avec préparation aux certifications.",
    heroDescription:
      "Un parcours pensé pour progresser vers l'aisance à l'oral et à l'écrit, avec la possibilité de préparer une certification internationale.",
    formats: ["Présentiel", "En ligne"],
    levels: ["Débutant", "Intermédiaire", "Avancé"],
    highlights: [
      "Cours en présentiel et en ligne, selon votre disponibilité",
      "Parcours pensé pour progresser vers l'aisance en 6 mois",
      "Préparation possible aux certifications IELTS, TOEFL, TOEIC, TCF, TEF",
      "Formateurs expérimentés, à l'écoute des apprenants",
    ],
    nextIntake: "Prochaine rentrée : 02 novembre 2026",
    price: "20 000 FCFA / mois",
    quote: "Ici, l'anglais devient une seconde nature !",
  },
  {
    slug: "cours-allemand",
    pole: "ExpoLearn Language Academy",
    icon: "landmark",
    title: "Cours d'allemand",
    shortTitle: "Allemand",
    audience: "Étudiants et candidats à un projet en Allemagne",
    shortDescription:
      "Cours d'allemand du niveau A1 à C1, en présentiel et en ligne, pour vos études ou votre projet à l'étranger.",
    heroDescription:
      "Des cours structurés selon le Cadre européen commun de référence pour les langues, pour progresser du niveau A1 jusqu'au C1.",
    formats: ["Présentiel", "En ligne"],
    levels: ["A1", "A2", "B1", "B2", "C1"],
    highlights: [
      "Cours en présentiel et en ligne",
      "Progression structurée du niveau A1 au niveau C1",
      "Utile pour un projet d'études ou d'immigration en Allemagne",
      "Formateurs expérimentés en langue allemande",
    ],
    nextIntake: "Prochaine rentrée : 05 octobre 2026",
    quote: "L'allemand à portée de main, chez ExpoLearn !",
  },
  {
    slug: "visa-etudiant",
    pole: "ExpoLearn",
    icon: "plane",
    title: "Visa étudiant & accompagnement à l'immigration",
    shortTitle: "Visa étudiant",
    audience: "Étudiants avec un projet d'études à l'étranger",
    shortDescription:
      "Accompagnement dans les démarches de visa étudiant et d'immigration pour concrétiser votre projet d'études à l'étranger.",
    heroDescription:
      "Un accompagnement personnalisé pour préparer votre dossier, comprendre les démarches et avancer sereinement dans votre projet d'études à l'étranger.",
    formats: ["Accompagnement individuel", "Présentiel, à Yaoundé"],
    highlights: [
      "Point sur votre projet d'études et le pays visé",
      "Aide à la constitution du dossier de visa étudiant",
      "Conseils sur les démarches d'immigration liées aux études",
      "Suivi personnalisé jusqu'à la finalisation des démarches",
    ],
    nextIntake: "Prochaine session : 05 octobre 2026",
    price: "Frais de dossier : 10 000 FCFA",
    quote: "Il te manque du courage pour te lancer ? Ose concrétiser ton projet !",
  },
] as const;

export function getServiceBySlug(slug: string): Service | undefined {
  return SERVICES.find((service) => service.slug === slug);
}

export const DEFAULT_SERVICE: Service = SERVICES[0]!;
