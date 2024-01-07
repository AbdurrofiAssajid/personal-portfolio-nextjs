"use client";

import React from "react";
import SectionHeading from "./section-heading";
import  {consultantData}  from "@/lib/data";
import Consultant from './consultant'
import { useSectionInView } from "@/lib/hooks";

export default function Features() {
  const { ref } = useSectionInView("Consultant", 0.3);

  return (
    <section ref={ref} id="consultant" className="scroll-mt-28 mb-28">
      <SectionHeading>Our<span className="dark:text-yellow-300 text-blue-700"> Consultant</span></SectionHeading>
      <div>
        {consultantData.map((consultant, index) => (
          <React.Fragment key={index}>
            <Consultant {...consultant} />
            
          </React.Fragment>
        ))}
      </div>
    </section>
  );
}