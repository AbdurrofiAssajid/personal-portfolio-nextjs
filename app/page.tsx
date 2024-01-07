import About from "@/components/about";
import Consult from "@/components/consult";
import Reviews from "@/components/reviews";
import Intro from "@/components/intro";
import Features from "@/components/features";
import SectionDivider from "@/components/section-divider";
import Benefits from "@/components/benefits";

export default function Home() {
  return (
    <main className="flex flex-col items-center px-4">
      <Intro />
      <SectionDivider />
      <About />
      <Features />
      <Benefits />
      <Reviews />
      <Consult />
    </main>
  );
}