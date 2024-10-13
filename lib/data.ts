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
    title: "Learned Web Development",
    month:"January-October", 
    description:
      "I started learning web development by taking online and offline course, learned about Programming & hypertext languages, UI/UX design and SDLC (software development life cycle)",
    icon: React.createElement(GiWhiteBook),
    date: "2023",
  },
  {
    title: "built web app project",
    month:"November-January", 
    description:
      "My first apps were portfolio website, to-do checklist, book management.",
    icon: React.createElement(PiQrCodeFill), 
    date: "2023",
  },
  {
    title: "a Full-Stack Developer",
    month:"January-now", 
    description:
      "I'm currently a full-stack developer with expertise in React, Next.js, TypeScript, Tailwind, Prisma, and MongoDB. I am open to freelance opportunities where I can leverage my skills and contribute to exciting projects.",
    icon: React.createElement(TbBrandReactNative),
    date: "2024 - now",
  },
] as const;

export const projectsData = [
  {
    title: "CorpComment",
    description:
      "An open-source project that allows users to provide feedback to companies.",
    tags: ["JavaScript", "HTML", "CSS"],
    imageUrl: corpcommentImg,
  },
  {
    title: "remoteDev",
    description:
      "Job board for remote developer jobs. It has features like filtering, sorting and pagination.",
    tags: ["JavaScript", "HTML", "CSS"],
    imageUrl: rmtdevImg,
  },
  {
    title: "Word Analytics",
    description:
      "A public web app for quick analytics on text. It shows word count, character count and social media post limits.",
    tags: ["JavaScript", "HTML", "CSS"],
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
  "PostgreSQL",
  "Python",
  "Framer Motion",
  "C",
  "UI/UX",
] as const;