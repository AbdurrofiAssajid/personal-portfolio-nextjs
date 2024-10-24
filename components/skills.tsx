"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { skillsData } from "@/lib/data";
import { useSectionInView } from "@/lib/hooks";
import { motion } from "framer-motion";
import Image from "next/image"; // Import Image from next/image

const fadeInAnimationVariants = {
  initial: {
    opacity: 0,
    y: 100,
  },
  animate: (index: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.05 * index,
    },
  }),
};

export default function Skills() {
  const { ref } = useSectionInView("Skills");

  return (
    <div className="flex justify-center items-center">
      <section
        id="skills"
        ref={ref}
        className="max-w-[53rem] scroll-mt-40 text-center mt-80"
      >
        <SectionHeading>My skills</SectionHeading>
        <ul className="flex flex-wrap justify-center gap-2 text-lg text-gray-800 dark:font-bold">
          {skillsData.map((skill, index) => (
            <motion.li
              className="bg-white borderBlack rounded-xl px-5 py-3 dark:bg-white/10 dark:text-white/80 dark:border-purple-300 flex items-center gap-2"
              key={index}
              variants={fadeInAnimationVariants}
              initial="initial"
              whileInView="animate"
              custom={index}
            >
              {/* Render the icon using next/image */}
              {skill.icon && (
                <Image
                  src={skill.icon}
                  alt={`${skill.name} icon`}
                  width={24}
                  height={24}  // Adjust size as needed
                />
              )}
              {/* Render the skill name */}
              <span>{skill.name}</span>
            </motion.li>
          ))}
        </ul>
      </section>
    </div>
  );
}