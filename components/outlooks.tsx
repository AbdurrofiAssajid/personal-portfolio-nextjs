"use client";

import React from "react";
import { outlooksData } from "@/lib/data";
import { InfiniteMovingCards } from "./ui/infinite-moving-cards";
import { useSectionInView } from "@/lib/hooks";
import SectionHeading from "./section-heading";
import { ContainerScroll } from "../components/ui/container-scroll-animation";

const Outlooks = () => {
  const { ref } = useSectionInView("Outlooks");

  return (
    <ContainerScroll
      titleComponent={
        <SectionHeading>Outlooks of me</SectionHeading>
      }
    >
      <section 
        ref={ref} 
        id="outlooks" 
        className="lg:py-10 py-20 pt-10 lg:leading-10 scroll-mt-64" 
      >
        <div className="flex flex-col items-center max-lg:mt-10">
          <div
            className="h-[60vh] md:h-[30rem] w-full rounded-lg flex flex-col antialiased items-center justify-center relative overflow-hidden bg-transparent transition-colors duration-300"
          >
            <InfiniteMovingCards
              items={outlooksData}
              direction="right"
              speed="slow"
            />
          </div>
        </div>
      </section>
    </ContainerScroll>
  );
};

export default Outlooks;