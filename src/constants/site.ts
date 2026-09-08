export const SITE = {
  name: "ExpoLearn",
  tagline:
    "Une solution de soutien scolaire à domicile qui sélectionne, met en relation et accompagne les familles et les répétiteurs.",
  // Données de contact fournies comme placeholders : à confirmer avant publication.
  phone: "+237 6 94 75 83 09",
  phoneHref: "tel:+237694758309",
  whatsapp: "+237 6 94 75 83 09",
  whatsappHref: "https://wa.me/237694758309",
  email: "contact@expolearn.cm",
  emailHref: "mailto:contact@expolearn.cm",
  cityPlaceholder: "Yaoundé et Douala (zones à confirmer)",
} as const;

export const NAV_LINKS = [
  { label: "Accueil", to: "/" },
  { label: "Comment ça marche", to: "/comment-ca-marche" },
  { label: "Pour les parents", to: "/trouver-un-repetiteur" },
  { label: "Pour les répétiteurs", to: "/devenir-repetiteur" },
  { label: "À propos", to: "/a-propos" },
  { label: "FAQ", to: "/faq" },
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

export const BUDGETS = [
  "Moins de 20 000 FCFA / mois",
  "20 000 – 40 000 FCFA / mois",
  "40 000 – 70 000 FCFA / mois",
  "Plus de 70 000 FCFA / mois",
  "À définir avec ExpoLearn",
] as const;

export const STUDY_LEVELS = [
  "Baccalauréat",
  "Licence en cours",
  "Licence obtenue",
  "Master en cours",
  "Master obtenu",
  "Enseignant en poste",
  "Autre",
] as const;

export const AVAILABILITY_SLOTS = [
  "Lundi – vendredi, après-midi",
  "Lundi – vendredi, soirée",
  "Samedi, matin",
  "Samedi, après-midi",
  "Dimanche",
  "Vacances scolaires",
] as const;
