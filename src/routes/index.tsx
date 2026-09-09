import { createFileRoute } from "@tanstack/react-router";
import { Hero } from "@/components/home/Hero";
import { ServicesOverview } from "@/components/home/ServicesOverview";
import { WhyExpolearn } from "@/components/home/WhyExpolearn";
import { ProblemSolution } from "@/components/home/ProblemSolution";
import { HowItWorks } from "@/components/home/HowItWorks";
import { Audiences } from "@/components/home/Audiences";
import { SubjectsLevels } from "@/components/home/SubjectsLevels";
import { Testimonials } from "@/components/home/Testimonials";

const TITLE =
  "ExpoLearn — Soutien scolaire, langues, concours et visa étudiant au Cameroun";
const DESCRIPTION =
  "ExpoLearn accompagne élèves, étudiants et jeunes professionnels : soutien scolaire, préparation aux concours, cours d'anglais et d'allemand, et accompagnement au visa étudiant, à Yaoundé et en ligne.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESCRIPTION },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESCRIPTION },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <>
      <Hero />
      <ServicesOverview />
      <WhyExpolearn />
      <ProblemSolution />
      <HowItWorks />
      <Audiences />
      <SubjectsLevels />
      <Testimonials />
    </>
  );
}
