import Achievements from '@/components/achievements'
import Contact from "@/components/contact";
import Experience from "@/components/experience";
import Intro from "@/components/intro";
import Projects from "@/components/projects";
import Skills from "@/components/skills";
import Outlooks from "@/components/outlooks";
import SectionDivider from '@/components/section-divider';

export default function Home() {
  return (
    <main className="relative flex justify-center items-center flex-col overflow-hidden mx-auto sm:px-10 px-5">
      <div className="max-w-7xl w-full">
        <Intro />
        <SectionDivider/>
        <Achievements/>
        <Projects />
        <Skills/>
        <Outlooks />
        <Experience />
        <Contact />
      </div>
    </main>
  );
}
