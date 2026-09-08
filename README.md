# ExpoLearn: Votre Soutien Scolaire

PROMPT — CRÉATION DU SITE WEB EXPOLEARN
Tu es un Senior Product Designer, UX/UI Designer et Frontend Engineer, spécialisé dans les plateformes EdTech modernes adaptées aux marchés africains. Conçois et développe le site web complet d'ExpoLearn, une plateforme camerounaise de répétitions scolaires à domicile.
1. Contexte et positionnement
ExpoLearn met en relation des parents ayant besoin de répétitions pour leurs enfants avec des répétiteurs qualifiés, et perçoit une commission sur les paiements des répétitions. Le parcours : demande → sélection d'un répétiteur → mise en relation → répétitions à domicile → suivi.
ExpoLearn n'est pas une marketplace froide mais un service de soutien scolaire qui sélectionne, met en relation et accompagne. Le positionnement tient en une phrase :
Une solution de soutien scolaire à domicile qui sélectionne, met en relation et accompagne les familles et les répétiteurs.
Toute l'expérience (contenu, ton, visuel) doit transmettre : confiance, éducation, proximité, professionnalisme — sans jamais tomber dans le registre "startup tech froide".
Cibles : parents/familles cherchant un accompagnement scolaire personnalisé ; répétiteurs (enseignants, étudiants, diplômés) cherchant des missions.
CTA principaux, partout sur le site : Trouver un répétiteur / Devenir répétiteur
2. Identité visuelle
Couleur de marque dominante : vert éducatif clair, avec blanc et tons très clairs pour un rendu premium.
Primary Green:      #65C466
Dark Green:          #247A45
Light Green:         #EAF8EC
Very Light Green:    #F5FCF6
White:                #FFFFFF
Dark Text:            #17251C
Secondary Text:       #66736A

Petites touches jaune/orange uniquement pour attirer l'attention ponctuellement, jamais en concurrence avec le vert.
Style : moderne, minimaliste, chaleureux, africain de manière subtile. Grands espaces blancs, coins légèrement arrondis, typographie lisible, photos authentiques (familles, élèves, répétiteurs africains — jamais de banque d'images "stock corporate" artificielle).
À éviter : design corporate froid, gradients excessifs, couleurs criardes, ombres lourdes, animations inutiles, illustrations génériques.
3. Expérience, responsive et performance
Mobile-first sur l'ensemble du site (le mobile n'est pas une version réduite du desktop). Tester à 320, 375, 390, 414, 768, 1024, 1440 px. Prévoir explicitement pour chaque interaction : état de chargement, succès, erreur, validation de champ.
Le site doit rester rapide pour des utilisateurs en connexion mobile limitée : images optimisées, lazy loading, JavaScript minimal, animations légères uniquement (apparition progressive, hover, micro-interactions).
4. Pages à produire
Accueil — Titre : Des répétitions à domicile pour aider chaque élève à progresser. Structure narrative obligatoire : problème → solution ExpoLearn → pourquoi faire confiance → comment ça marche → bénéfices → témoignages (clairement présentés comme exemples à remplacer, jamais comme réels) → CTA final. Sections : hero, "Pourquoi ExpoLearn" (répétiteurs sélectionnés, à domicile, accompagnement personnalisé, suivi), "Comment ça marche" (4 étapes), matières enseignées, niveaux scolaires, section parents, section répétiteurs, témoignages, CTA final.
Trouver un répétiteur — Formulaire : identité parent (nom, téléphone, email), élève (nom, niveau, établissement), besoin (matières, objectif, fréquence, heures, disponibilités), localisation (ville, quartier), budget (ou "à définir avec ExpoLearn"). Message de confirmation après envoi.
Devenir répétiteur — Landing dédiée. Formulaire : identité, ville/quartier, niveau d'études, matières et niveaux enseignés, expérience, disponibilités, zone d'intervention, document CV optionnel.
À propos — Histoire, mission, vision, valeurs (excellence, confiance, proximité, réussite).
Comment ça marche — Détail des deux parcours (parent et répétiteur) sous forme de timeline visuelle.
FAQ — Sélection, tarifs (sans inventer de montant définitif), zones couvertes, paiement, changement de répétiteur, devenir répétiteur.
Contact — Téléphone, WhatsApp, email, formulaire. Utiliser des placeholders explicites (+237 6 94 75 83 09) pour toute donnée non confirmée — ne jamais inventer de coordonnées, ville, certification ou partenaire.
Navigation : Accueil, Comment ça marche, Pour les parents, Pour les répétiteurs, À propos, FAQ + les deux CTA. Menu hamburger sur mobile.
Footer : présentation courte, navigation, liens Trouver un répétiteur / Devenir répétiteur, coordonnées, emplacements réseaux sociaux (sans inventer de liens).
5. Règles de contenu
Français naturel et professionnel. Interdits : emojis dans les titres, superlatifs inutiles, statistiques inventées, témoignages présentés comme réels, certifications ou partenaires fictifs, formulations génériques typiques d'un texte produit par IA.
6. SEO
Title : ExpoLearn | Répétitions scolaires à domicile au Cameroun
Meta description : Trouvez un répétiteur adapté aux besoins de votre enfant avec ExpoLearn, votre solution de répétitions scolaires à domicile au Cameroun.
Hiérarchie H1/H2/H3 propre, URLs lisibles, Open Graph, favicon, sitemap, robots.txt.
7. Stack technique
Frontend : React, TypeScript, Next.js Style : Tailwind CSS Formulaires : React Hook Form + validation Zod
Architecture prête à être connectée à une API backend ultérieure — pas de backend fictif complexe si non demandé.
8. Structure du code
src/
├── app/
├── components/
│   ├── ui/
│   ├── layout/
│   ├── home/
│   ├── parents/
│   └── tutors/
├── sections/
├── lib/
├── hooks/
├── types/
└── constants/

Composants réutilisables, jamais une page entière dans un seul fichier.
9. Livrable attendu
Site complet et fonctionnel (pas une maquette) : toutes les pages, responsive, navigation, formulaires validés, états de chargement/succès/erreur, SEO de base, contenu réaliste avec placeholders explicites où l'information manque.
Priorité, dans cet ordre : clarté → confiance → conversion → performance → esthétique.
Le résultat doit donner l'impression d'une véritable entreprise EdTech camerounaise, crédible, prête à évoluer vers une plateforme complète. Commence directement par concevoir et implémenter l'interface.

This project was built with [Lovable](https://lovable.dev).

**Live app**: https://expolearn.lovable.app

## Build with Lovable

Continue developing this project in the [Lovable editor](https://lovable.dev/projects/ef9f5be4-c6ef-47c7-97a2-5d12fd26bd57).

- **Ship faster**: describe what you want to build and Lovable handles the code.
- **Stay in sync**: every change made in Lovable is committed straight to this repository.
- **Full ownership**: this code is yours. Push to `main` on GitHub and your changes sync back into Lovable, ready for your next prompt.

## Development

Prefer working locally? You need Node.js and npm — [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating).

```sh
git clone <this-repository-url>
cd <repository-name>
npm i
npm run dev
```
