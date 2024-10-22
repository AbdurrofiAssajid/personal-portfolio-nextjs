"use client";

import { useRef } from "react";
import { projectsData } from "@/lib/data";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { CardBody, CardContainer, CardItem } from "../components/ui/3d-card";
import { FaPaperPlane } from "react-icons/fa";

type ProjectProps = (typeof projectsData)[number];

export default function Project({
  title,
  description,
  iconLists,
  imageUrl,
  projectUrl,
}: ProjectProps) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["0 1", "1.33 1"],
  });
  const scaleProgess = useTransform(scrollYProgress, [0, 0.15], [0.8, 1]);
  const opacityProgess = useTransform(scrollYProgress, [0, 0.15], [0.6, 1]);

  return (
    <motion.div
      ref={ref}
      style={{
        scale: scaleProgess,
        opacity: opacityProgess,
      }}
      className="mb-3 sm:mb-8 last:mb-0"
    >
      <CardContainer className="inter-var">
        <CardBody className="bg-gray-50 relative group/card dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-slate-800 dark:border-white/[0.2] border-black/[0.1] w-[20rem] sm:w-[42rem] h-auto rounded-xl p-6 border">
          <CardItem
            translateZ="50"
            className="text-2xl font-bold text-gray-700 dark:text-white"
          >
            {title}
          </CardItem>

          <CardItem
            as="p"
            translateZ="60"
            className="mt-2 leading-relaxed italic text-gray-700 dark:text-white/70"
          >
            {description}
          </CardItem>

          <CardItem
            translateZ="100"
            rotateX={20}
            rotateZ={-10}
            className="w-full mt-4"
          >
            <div className="relative w-full h-80 sm:h-96 overflow-hidden rounded-xl">
              <Image
                src={imageUrl}
                alt="Project I worked on"
                quality={95}
                fill
                sizes="(max-width: 640px) 100vw, 80vw" 
                style={{ objectFit: "cover" }}
                className="group-hover/card:shadow-xl transition"
              />
            </div>
          </CardItem>

          <div className="flex justify-between items-center mt-8">
            <div className="flex gap-2 flex-wrap max-w-[70%]">
              {iconLists.map((icon, index) => (
                <CardItem
                  translateZ={80}
                  key={index}
                  className="bg-[#13162D] w-10 h-10 rounded-md flex items-center justify-center dark:text-white/70"
                >
                  <div className="flex items-center justify-center">
                    <Image
                      src={icon}
                      alt={`icon-${index}`}
                      width={24}
                      height={24}
                      style={{ width: "auto", height: "auto" }}
                      className="rounded-sm object-contain"
                    />
                  </div>
                </CardItem>
              ))}
            </div>

            <CardItem
              translateZ={20}
              as="button"
              className="px-4 py-2 rounded-xl bg-gray-100 dark:bg-white/10 text-xs font-semibold dark:text-white"
            >
              <a
                href={projectUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2"
              >
                View Project
                 <FaPaperPlane className="text-xs opacity-70 transition-all group-hover:translate-x-1 group-hover:-translate-y-1 " />{" "}           
              </a>
            </CardItem>
          </div>
        </CardBody>
      </CardContainer>
    </motion.div>
  );
}
