export const WHY_ITEMS = [
  {
    icon: "shield",
    title: "Des répétiteurs sélectionnés",
    text: "Chaque candidature est examinée : parcours scolaire, expérience d'encadrement, matières réellement maîtrisées et entretien avant toute mise en relation.",
  },
  {
    icon: "home",
    title: "Des séances à domicile",
    text: "Le répétiteur se déplace chez vous, dans votre quartier, à des horaires qui s'adaptent à la vie de la famille et au rythme de l'élève.",
  },
  {
    icon: "target",
    title: "Un accompagnement personnalisé",
    text: "Nous partons du niveau réel de l'élève et de l'objectif que vous fixez : rattraper un retard, consolider les bases ou préparer un examen.",
  },
  {
    icon: "chart",
    title: "Un suivi dans le temps",
    text: "Nous restons joignables après la mise en relation pour faire un point régulier, ajuster le rythme ou changer de répétiteur si nécessaire.",
  },
] as const;

export const HOW_IT_WORKS_PARENT = [
  {
    step: "01",
    title: "Vous décrivez votre besoin",
    text: "Niveau de l'élève, matières concernées, objectif, fréquence souhaitée, quartier et disponibilités. Le formulaire prend quelques minutes.",
  },
  {
    step: "02",
    title: "Nous sélectionnons un répétiteur",
    text: "Nous cherchons dans notre réseau un répétiteur dont le profil, les matières et la zone d'intervention correspondent à votre demande.",
  },
  {
    step: "03",
    title: "Nous organisons la mise en relation",
    text: "Vous échangez avec le répétiteur proposé, vous validez les horaires et les conditions, puis la première séance est planifiée.",
  },
  {
    step: "04",
    title: "Les séances commencent, le suivi continue",
    text: "Les répétitions se déroulent à domicile. ExpoLearn reste votre point de contact pour le suivi, les ajustements et le paiement.",
  },
] as const;

export const HOW_IT_WORKS_TUTOR = [
  {
    step: "01",
    title: "Vous déposez votre candidature",
    text: "Formation, matières et niveaux enseignés, expérience, zone d'intervention et disponibilités. Le CV est optionnel.",
  },
  {
    step: "02",
    title: "Nous étudions votre profil",
    text: "Nous vérifions la cohérence de votre parcours et échangeons avec vous par téléphone ou en entretien.",
  },
  {
    step: "03",
    title: "Vous recevez des propositions de mission",
    text: "Nous vous proposons des familles proches de votre zone, correspondant à vos matières et à vos créneaux.",
  },
  {
    step: "04",
    title: "Vous encadrez et êtes accompagné",
    text: "Vous assurez les séances à domicile. ExpoLearn gère la relation administrative et reste disponible en cas de difficulté.",
  },
] as const;

export const PARENT_BENEFITS = [
  "Un interlocuteur unique du premier contact au suivi des séances",
  "Un répétiteur choisi selon le niveau et le caractère de votre enfant",
  "Des horaires fixés avec vous, sans déplacement pour l'élève",
  "La possibilité de demander un changement de répétiteur",
] as const;

export const TUTOR_BENEFITS = [
  "Des missions proches de votre quartier, sans prospection",
  "Des familles dont le besoin est déjà clarifié en amont",
  "Un cadre clair : horaires, matières, objectif et rémunération",
  "Un accompagnement d'ExpoLearn en cas de difficulté avec une famille",
] as const;

export const VALUES = [
  {
    title: "Excellence",
    text: "Nous exigeons de nos répétiteurs une maîtrise réelle des matières et une capacité à expliquer simplement.",
  },
  {
    title: "Confiance",
    text: "Nous ne mettons en relation qu'après avoir examiné un profil, parce que nous parlons ici de la scolarité d'un enfant.",
  },
  {
    title: "Proximité",
    text: "Nous travaillons quartier par quartier, avec des personnes qui connaissent le terrain et le système scolaire camerounais.",
  },
  {
    title: "Réussite",
    text: "Notre objectif n'est pas le nombre de séances, mais la progression visible de l'élève sur son année scolaire.",
  },
] as const;

export const SAMPLE_TESTIMONIALS = [
  {
    quote:
      "Ma fille avait décroché en mathématiques en classe de 3e. Le répétiteur a repris les bases avec elle, séance après séance, et elle a retrouvé confiance.",
    author: "Un parent d'élève",
  },
  {
    quote:
      "Ce que j'ai apprécié, c'est d'avoir eu quelqu'un à appeler quand nous avons voulu changer les horaires. La demande a été traitée sans discussion.",
    author: "Un parent d'élève",
  },
  {
    quote:
      "Je suis étudiant en licence et j'encadre deux élèves du quartier. Les missions me sont proposées avec le besoin déjà clair, cela change tout.",
    author: "Un répétiteur ExpoLearn",
  },
] as const;

export const FAQ_ITEMS = [
  {
    q: "Comment les répétiteurs sont-ils sélectionnés ?",
    a: "Chaque candidature est examinée individuellement : niveau d'études, matières réellement maîtrisées, expérience d'encadrement et zone d'intervention. Nous échangeons ensuite avec le candidat avant toute proposition de mission. Un profil qui ne correspond pas à la demande d'une famille ne lui est pas présenté.",
  },
  {
    q: "Combien coûtent les répétitions ?",
    a: "Le tarif dépend du niveau de l'élève, des matières, du nombre de séances par semaine et du quartier. Nous ne communiquons pas de montant fixe avant d'avoir étudié votre demande : vous recevez une proposition claire avant tout engagement, et ExpoLearn perçoit une commission sur les séances réalisées.",
  },
  {
    q: "Quelles zones sont couvertes ?",
    a: `Nous démarrons sur ${"les grandes villes du Cameroun"} et nous étendons progressivement quartier par quartier. Les zones exactes couvertes sont à confirmer : indiquez votre ville et votre quartier dans le formulaire, nous vous répondons sur la faisabilité.`,
  },
  {
    q: "Comment se passe le paiement ?",
    a: "Le paiement se fait par période convenue avec ExpoLearn, une fois les séances planifiées. Les moyens de paiement disponibles vous sont précisés lors de la mise en relation. Aucun paiement n'est demandé pour déposer une demande.",
  },
  {
    q: "Peut-on changer de répétiteur ?",
    a: "Oui. Si le courant ne passe pas ou si la méthode ne convient pas à l'élève, vous nous le signalez et nous cherchons un autre profil. Nous préférons un changement assumé à des séances qui n'avancent pas.",
  },
  {
    q: "Comment devenir répétiteur chez ExpoLearn ?",
    a: "Vous remplissez le formulaire de candidature en indiquant votre formation, vos matières, vos niveaux, votre expérience, vos disponibilités et votre zone d'intervention. Nous revenons vers vous après examen du dossier, puis nous vous proposons des missions correspondant à votre profil.",
  },
  {
    q: "Faut-il un engagement de durée ?",
    a: "Non. Vous définissez avec nous une fréquence et une période, et vous pouvez faire évoluer le rythme au fil de l'année scolaire, par exemple pour renforcer la préparation d'un examen.",
  },
] as const;
