import { createFileRoute } from "@tanstack/react-router";
import { Hero } from "@/components/home/Hero";
import { WhyExpolearn } from "@/components/home/WhyExpolearn";
import { ProblemSolution } from "@/components/home/ProblemSolution";
import { HowItWorks } from "@/components/home/HowItWorks";
import { AudienceSplit } from "@/components/home/AudienceSplit";
import { SubjectsLevels } from "@/components/home/SubjectsLevels";
import { Testimonials } from "@/components/home/Testimonials";
import { FinalCta } from "@/components/home/FinalCta";

const TITLE = "ExpoLearn — Répétitions scolaires à domicile au Cameroun";
const DESCRIPTION =
  "ExpoLearn sélectionne des répétiteurs qualifiés, organise la mise en relation avec les familles et accompagne les séances à domicile, du primaire à la terminale.";

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
      <WhyExpolearn />
      <ProblemSolution />
      <HowItWorks />
      <AudienceSplit />
      <SubjectsLevels />
      <Testimonials />
      <FinalCta />
    </>
  );
}
