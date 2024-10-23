"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";
import { Vortex } from "../components/ui/vortex";

export default function About() {
  const { ref } = useSectionInView("About");

  return (
    <Vortex
      backgroundColor="transparent" 
      className="relative z-0" 
      containerClassName="relative max-w-[45rem] mx-auto"
      particleCount={300}
      rangeY={50} 
      baseHue={250} 
      baseSpeed={0.5} 
      rangeSpeed={0.8}
      baseRadius={1.2} 
      rangeRadius={0.8}
    >
      <div className="flex justify-center items-center">
        <motion.section
          ref={ref}
          className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-40"
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.175 }}
          id="about"
        >
          <SectionHeading>About Me</SectionHeading>
          <p className="mb-3">
            I’m a developer driven by purpose –{" "}
            <span className="underline underline-offset-2">
              I don’t just build apps; I build solutions.
            </span>{" "}
            My philosophy is simple:{" "}
            <span className="italic font-bold dark:text-purple-300">
              if something can be made better, faster, or more efficient, I want
              to be the one to make it happen.
            </span>{" "}
            I thrive on creating tech that makes life easier and solves
            real-world problems.
          </p>
          <p className="mb-3">
            <span className="italic font-bold dark:text-purple-300">
              Whether it’s finding better ways to streamline daily tasks or
              tackling complex challenges, I’m all about making meaningful,
              impactful software.
            </span>{" "}
            I believe technology should be{" "}
            <span className="underline underline-offset-2">intuitive</span>,{" "}
            <span className="underline underline-offset-2">useful</span>, and{" "}
            <span className="underline underline-offset-2">purposeful.</span>
          </p>
        </motion.section>
      </div>
    </Vortex>
  );
}
