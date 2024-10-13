"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";

export default function About() {
  const { ref } = useSectionInView("About");

  return (
    <motion.section
      ref={ref}
      className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about"
    >
      <SectionHeading>About me</SectionHeading>
      <p className="mb-3">
      Since childhood,{" "}
        <span className="font-medium">I've been fascinated by technology and often called tech-savvy.</span> {" "}
        I've always been curious about how computers work,{" "}
        <span className="font-medium">such as the process of data transfer between computers, which led me to study computer science in depth.</span>{" "}
        <span className="italic">I also deeply enjoy problem-solving.</span>  I didn't pursue IT just because of trends or fear of missing out {" "}
        <span className="font-medium">
        (FOMO);
        </span>
        {" "} it's genuinely my hobby and passion.
      </p>

      <p>
        <span className="italic">Outside of coding</span>, I enjoy playing
        video games, exploring new topics. {" "}    
         I am currently{" "}
        learning about{" "}
        <span className="font-medium">UX design</span>, and also
        learning how to make a great SaaS <span className="italic"> (Software as a Service) </span>.
      </p>
    </motion.section>
  );
}