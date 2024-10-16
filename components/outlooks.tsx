"use client";

import React from "react";
import { outlooks } from "@/lib/data";
import { InfiniteMovingCards } from "./ui/infinite-moving-cards";
import { useSectionInView } from "@/lib/hooks";
import SectionHeading from "./section-heading";


const Outlooks = () => {
  const { ref } = useSectionInView("Outlooks");

  return (
    <section ref={ref} id="outlooks" className="py-20 pt-10">
        <SectionHeading>Outlooks of me</SectionHeading>
      <div className="flex flex-col items-center max-lg:mt-10">
        <div
          className="h-[60vh] md:h-[30rem] w-full rounded-lg flex flex-col antialiased items-center justify-center relative overflow-hidden bg-transparent transition-colors duration-300"
        >
          <InfiniteMovingCards
            items={outlooks}
            direction="right"
            speed="slow"           
          />
        </div>
      </div>
    </section>
  );
};

export default Outlooks;