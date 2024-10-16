"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";
import Image from "next/image";
import { CardBody, CardContainer, CardItem } from "../components/ui/3d-card";
import { cardData } from "@/lib/data";
import { FaHeart } from "react-icons/fa";


export default function About() {
  const { ref } = useSectionInView("About");

  return (
      <motion.section
      ref={ref}
      className="mb-28 scroll-mt-28 mt-40 sm:mt-52" 
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about"
    >
      <SectionHeading> About me</SectionHeading>
      <div className="flex flex-col items-center gap-4 sm:gap-4 mt-4 sm:flex-row sm:justify-center sm:flex-wrap">
        {cardData.map((card, index) => (
          <CardContainer key={index} className="inter-var">
            <CardBody className="bg-gray-50 relative group/card dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-slate-800 dark:border-white/[0.2] border-black/[0.1] w-[20rem] sm:w-[22rem] h-[30rem] rounded-xl p-6 border">
              <CardItem
                translateZ="50"
                className="text-xl font-bold text-neutral-600 dark:text-white"
              >
                {card.title}
              </CardItem>
              <CardItem
                as="p"
                translateZ="60"
                className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300"
              >
                {card.description}
              </CardItem>
              <CardItem
                translateZ="100"
                rotateX={20}
                rotateZ={-10}
                className="w-full mt-4"
              >
                <div className="relative w-full h-60 overflow-hidden rounded-xl">
                  <Image
                    src={card.imageSrc}
                    fill
                    style={{ objectFit: "cover" }}
                    className="group-hover/card:shadow-xl"
                    alt="thumbnail"
                  />
                </div>
              </CardItem>
              <div className="flex justify-between items-center mb-8">
                <CardItem
                  translateZ={20}
                  translateX={-40}
                  as="button"
                  className="px-4 py-2 mt-16 rounded-xl text-xs font-normal dark:text-white"
                > <a href={card.aboutUrl} key={index} target="_blank" rel="noopener noreferrer">
                    {card.buttonText}
                </a>
                </CardItem>

                <CardItem
                  translateZ={20}
                  translateX={40}
                  as="button"
                  className="px-4 py-2 mt-16 rounded-xl bg-gray-100 shadow-md dark:bg-white text-white text-xs font-bold"
                >
                  <FaHeart className="text-red-500"/>

                </CardItem>
              </div>
            </CardBody>
          </CardContainer>
        ))}
      </div>
    </motion.section>
   
  );
}
