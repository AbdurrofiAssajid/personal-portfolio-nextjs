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
      Apart from learning general subjects at school, I spend my time learning computers,
        <span className="font-medium"> especially in software development,</span> and since then my hobby has been making computer programs.
        Even though I have only been learning software development for less than 6 months,
        <span className="font-medium"> I have already won a prestigious competition held by BINUS,</span>
        <span className="font-bold"> namely SDLC </span> <span className="italic">(Software Development Life Cycle), </span> 
        <span className="font-medium"> apart from that I also won other</span>
        <span className="underline">{" "} informatics competitions </span>{" "} which are also on a national scale.
        <span className="font-medium"> And last but not least I am proficient in two international languages, there are Arabic and English</span>
      </p>

      <p>
        <span className="font-bold"> My dream is to establish a start-up in the technology sector </span>that will become big companies like Google and Meta.
        <span className="font-medium"> Although it may sound impossible, I will make it possible</span>. Because, for me there is nothing that is impossible to achieve,
        <span className="font-medium"> except with intention and great effort.</span> One of the sentences that really motivates me when Mark Zuckerberg said, 
        <span className="italic"> "Don't wait your idea to become perfect, start and make your idea become perfect. Because you just have to get start it"</span> 
          
      </p>
    </motion.section>
  );
}