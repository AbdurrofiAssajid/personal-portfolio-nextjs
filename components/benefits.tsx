"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { benefitsData } from "@/lib/data";
import { useSectionInView } from "@/lib/hooks";
import { motion } from "framer-motion";

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

export default function Benefits() {
  const { ref } = useSectionInView("Benefits");

  return (
    <section
      id="benefits"
      ref={ref}
      className="mb-28 max-w-[53rem] scroll-mt-28 text-center sm:mb-40"
    >
      <SectionHeading>Benefits</SectionHeading>
      <ul className="flex flex-wrap justify-center gap-2 text-lg text-gray-800">
        {benefitsData.map((benefit, index) => (
          <motion.li
            className="bg-white text-black rounded-xl px-5 py-3 dark:bg-slate-900 dark:text-white border border-blue-800 dark:border-yellow-300"
            key={index}
            variants={fadeInAnimationVariants}
            initial="initial"
            whileInView="animate"
            custom={index}
          >
            {benefit}
          </motion.li>
        ))}
      </ul>
    </section>
  );
}