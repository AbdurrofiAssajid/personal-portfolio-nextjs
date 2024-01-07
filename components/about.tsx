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
      <SectionHeading><span className="dark:text-yellow-300 text-blue-700">About</span> Us</SectionHeading>
      <p className="mb-3">
      We are a private company which operating in the {" "}
        <span className="font-medium dark:text-yellow-300 text-blue-700">Law sector</span>, which has been established since 2010. 
        {" "} And our employees have
        <span className="font-medium"> more than 5 years </span>{" "}
        <span className="italic">of experience in the Islamic law's sector</span> <span className="dark:text-yellow-300 text-blue-700">Our mission</span> is to educate the public about Islamic law,
         <span className="underline"> because</span> in this era there is a lot of information circulating that is not proven to be true or 
        {" "}
        <span className="font-medium dark:text-yellow-300 text-blue-700">
        hoax. {' '}
        </span>
         We offer online and offline consultations,{" "}
        <span className="font-medium">and for students</span> we will facilitate free consultations
         every weekend both online and offline
      </p>

    
    </motion.section>
  );
}