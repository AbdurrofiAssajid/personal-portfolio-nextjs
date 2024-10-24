"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { projectsData } from "@/lib/data";
import { Tabs } from "../components/ui/tabs"; 
import Project from "./project"; 
import { useSectionInView } from "@/lib/hooks";

export default function Projects() {
  const { ref } = useSectionInView("Projects", 0.3);
  
  const tabs = projectsData.map((project) => ({
    title: project.title,
    value: project.title.toLowerCase().replace(/ /g, "-"), 
    content: <Project {...project} />, 
  }));

  return (
    <div className="flex justify-center items-center mb-80">
      <section id="projects" ref={ref} className="scroll-mt-28 mb-80">
      <SectionHeading>My Projects</SectionHeading>
      <Tabs tabs={tabs} />
    </section>
    </div>
    
  );
}