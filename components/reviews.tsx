"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { reviewsData } from "@/lib/data";
import { useSectionInView } from "@/lib/hooks";
import { useTheme } from "@/context/theme-context";



export default function Reviews() {
  const { ref, inView } = useSectionInView("Reviews", 0.2);
  const { theme } = useTheme();

  return (
    <section id="reviews" ref={ref} className="scroll-mt-28 mb-28 sm:mb-40">
      <SectionHeading>User's <span className="text-blue-800 dark:text-yellow-300">Opinion</span></SectionHeading>
      <VerticalTimeline lineColor="" >
        {reviewsData.map((item, index) => (
          <React.Fragment key={index}>
            <VerticalTimelineElement
              visible={inView}

              contentStyle={{
                background:
                  theme === "light" ? "#f3f4f6" : "rgba(255, 255, 255, 0.05)",
                boxShadow: "none",
                border: "1px solid rgba(0, 0, 0, 0.05)",
                textAlign: "left",
                padding: "1.3rem 2rem",
              }}
              contentArrowStyle={{
                borderRight:
                  theme === "light"
                    ? "0.4rem solid #9ca3af"
                    : "0.4rem solid rgba(255, 255, 255, 0.5)",
              }}
              date={item.date}
              icon ={item.icon}
              iconStyle={{
                background:
                  theme === "light" ? "white" : "rgba(255, 255, 255, 0.15)",
                fontSize: "1.5rem",
              }}
            >
              <h3 className="font-semibold capitalize text-blue-700 dark:text-yellow-300">{item.title}</h3>
              <p className="font-normal !mt-0 text-gray-500 dark:text-white/40 italic">{item.month}</p>
              <p className="!mt-1 !font-normal text-gray-900 dark:text-white">
                {item.description}
              </p>
            </VerticalTimelineElement>
          </React.Fragment>
        ))}
      </VerticalTimeline>
    </section>
  );
}