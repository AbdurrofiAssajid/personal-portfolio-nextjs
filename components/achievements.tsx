"use client";
import React, { useState } from "react";
import { Carousel, Card } from "@/components/ui/apple-cards-carousel";
import { achievementData } from "@/lib/data";
import { useSectionInView } from "@/lib/hooks";
import SectionHeading from "./section-heading";

export default function Achievement() {
  const { ref } = useSectionInView("Achievement");

  const cards = achievementData.map((card, index) => (
    <Card key={card.src} card={card} index={index} />
  ));

  return (
    <div
      className="w-full h-full py-20 scroll-mt-20 mb-20"
      id="achievement"
      ref={ref}
    >
      <SectionHeading>My Achievement</SectionHeading>
      <Carousel items={cards} />
    </div>
  );
}
