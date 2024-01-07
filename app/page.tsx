import About from "@/components/about";
import Consult from "@/components/consult";
import Reviews from "@/components/reviews";
import Intro from "@/components/intro";
import SectionDivider from "@/components/section-divider";
import Benefits from "@/components/benefits";
import Consultants from '@/components/consultants'

export default function Home() {
  return (
    <main className="flex flex-col items-center px-4">
      <Intro />
      <SectionDivider />
      <About />     
      <Consultants/>
      <Benefits />
      <Reviews />
      <Consult />
    </main>
  );
}