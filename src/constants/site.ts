export const SITE = {
  name: "ExpoLearn",
  legalName: "EXPOLEARN SARL",
  meaning: "Exponential Learning",
  tagline: "Apprendre. Progresser. Réussir.",
  positioning:
    "ExpoLearn accompagne élèves, étudiants et jeunes professionnels avec des formations en soutien scolaire, préparation aux concours, langues (anglais, allemand) et accompagnement au visa étudiant.",
  founder: "Keyantio Jokeng Thierry Gaëtan",
  founderRole: "Fondateur & Directeur Général",
  phone: "+237 691 826 725",
  phoneHref: "tel:+237691826725",
  phoneSecondary: "+237 670 106 016",
  phoneSecondaryHref: "tel:+237670106016",
  whatsapp: "+237 691 826 725",
  whatsappHref: "https://wa.me/237691826725",
  email: "expolearn04@gmail.com",
  emailHref: "mailto:expolearn04@gmail.com",
  address: "En face du Lycée de Nkolmesseng, Yaoundé, Cameroun",
  city: "Yaoundé",
  legalMention:
    "EXPOLEARN SARL — société à responsabilité limitée de droit camerounais (Acte uniforme OHADA), capital de 1 000 000 FCFA, immatriculation au RCCM en cours.",
} as const;

export const NAV_LINKS = [
  { label: "Accueil", to: "/" },
  { label: "Nos services", to: "/services" },
  { label: "Comment ça marche", to: "/comment-ca-marche" },
  { label: "À propos", to: "/a-propos" },
  { label: "FAQ", to: "/faq" },
  { label: "Contact", to: "/contact" },
] as const;

export const SUBJECTS = [
  "Mathématiques",
  "Physique-Chimie",
  "Français",
  "Anglais",
  "SVT / Biologie",
  "Histoire-Géographie",
  "Informatique",
  "Philosophie",
  "Économie",
  "Lecture et écriture (primaire)",
] as const;

export const LEVELS = [
  "Maternelle",
  "Primaire (SIL – CM2)",
  "6e – 5e",
  "4e – 3e",
  "Seconde",
  "Première",
  "Terminale",
  "Enseignement supérieur (1re année)",
] as const;

export const FREQUENCIES = [
  "1 séance par semaine",
  "2 séances par semaine",
  "3 séances par semaine",
  "Tous les jours ouvrables",
  "À définir avec ExpoLearn",
] as const;

export const EXAM_TYPES = [
  "Concours d'entrée aux grandes écoles et établissements supérieurs",
  "Examens officiels (BEPC, Probatoire, Baccalauréat...)",
  "Certification linguistique (TCF, TOEFL, IELTS...)",
  "Autre concours ou examen",
] as const;

export const DESTINATION_COUNTRIES = [
  "Allemagne",
  "France",
  "Canada",
  "États-Unis",
  "Royaume-Uni",
  "Autre pays",
  "Je ne sais pas encore",
] as const;
