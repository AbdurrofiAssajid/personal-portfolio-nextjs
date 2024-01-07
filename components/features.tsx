"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { featuresData } from "@/lib/data";
import Feature from './feature'
import { useSectionInView } from "@/lib/hooks";

export default function Features() {
  const { ref } = useSectionInView("Features", 0.3);

  return (
    <section ref={ref} id="features" className="scroll-mt-28 mb-28">
      <SectionHeading>Our<span className="dark:text-yellow-300 text-blue-700"> Features</span></SectionHeading>
      <div>
        {featuresData.map((feature, index) => (
          <React.Fragment key={index}>
            <Feature {...feature} />
            
          </React.Fragment>
        ))}
      </div>
    </section>
  );
}