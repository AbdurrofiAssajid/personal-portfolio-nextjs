import About from "@/components/about";
import Contact from "@/components/contact";
import Experience from "@/components/experience";
import Intro from "@/components/intro";
import Projects from "@/components/projects";
import SectionDivider from "@/components/section-divider";
import Skills from "@/components/skills";
import Outlooks from "@/components/outlooks";

export default function Home() {
  return (
    <main className="relative flex justify-center items-center flex-col overflow-hidden mx-auto sm:px-10 px-5">
      <div className="max-w-7xl w-full">
        <Intro />
        <SectionDivider />
        <About />
        <Projects />
        <Skills />
        <Outlooks />
        <Experience />
        <Contact />
      </div>
    </main>
  );
}
