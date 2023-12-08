import React from "react";
import { PiQrCodeFill } from "react-icons/pi";
import { TbBrandReactNative } from "react-icons/tb";
import { GiWhiteBook } from "react-icons/gi";
import corpcommentImg from "@/public/corpcomment.png";
import rmtdevImg from "@/public/rmtdev.png";
import wordanalyticsImg from "@/public/wordanalytics.png";

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
  {
    title: "Learning Web Development",
    description:
      "I started learning web development by taking online and offline course ",
    icon: React.createElement(GiWhiteBook),
    date: "2022",
  },
  {
    title: "Started building apps",
    description:
      "My first apps is portfolio website, to-do checklist , and book management ",
    icon: React.createElement(PiQrCodeFill), 
    date: "2023",
  },
  {
    title: "Became Full-Stack Developer",
    description:
      "I'm now a full-stack developer working as a freelancer. My stack includes React, Next.js, TypeScript, Tailwind, Prisma and MongoDB. I'm open to full-time opportunities.",
    icon: React.createElement(TbBrandReactNative),
    date: "2024 - present",
  },
] as const;

export const projectsData = [
  {
    title: "CorpComment",
    description:
      "Users can give public feedback to companies.",
    tags: ["React", "Next.js", "MongoDB", "Tailwind", "Prisma"],
    imageUrl: corpcommentImg,
  },
  {
    title: "rmtDev",
    description:
      "Job board for remote developer jobs. I was the front-end developer. It has features like filtering, sorting and pagination.",
    tags: ["React", "TypeScript", "Next.js", "Tailwind", "Redux"],
    imageUrl: rmtdevImg,
  },
  {
    title: "Word Analytics",
    description:
      "A public web app for quick analytics on text. It shows word count, character count and social media post limits.",
    tags: ["React", "Next.js", "SQL", "Tailwind", "Framer"],
    imageUrl: wordanalyticsImg,
  },
  
] as const;


export const skillsData = [
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Node.js",
  "Git",
  "Tailwind",
  "Prisma",
  "MongoDB",
  "Redux",
  "GraphQL",
  "Reddis",
  "Express",
  "PostgreSQL",
  "Python",
  "Framer Motion",
  "C",
  "UI/UX",
] as const;