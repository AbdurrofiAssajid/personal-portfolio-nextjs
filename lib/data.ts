import React from "react";
import { PiQrCodeFill } from "react-icons/pi";
import { TbBrandReactNative } from "react-icons/tb";
import { GiWhiteBook } from "react-icons/gi";
import contact from "@/public/images/contact.png";
import filmFinder from "@/public/images/filmfinder.png";
import counter from "@/public/images/counter.png";
import wordAnalytics from '@/public/images/wordanalytics.png'
import corpComment from '@/public/images/corpcomment.png'
import remoteDev from '@/public/images/rmtdev.png'
import masdevan from '@/public/images/masdevan.jpg'
import about from '@/public/images/about.jpeg'
import NextJS from '@/public/icons/nextjs.svg'
import ReactJS from '@/public/icons/react.svg'
import Tailwind from '@/public/icons/tail.svg'
import Node from '@/public/icons/nodejs.svg'
import Javascript from '@/public/icons/js.svg'
import Typescript from '@/public/icons/ts.svg'
import FramerMotion from '@/public/icons/motion.svg'
import ShadcnUI from '@/public/icons/shadcnui.svg'

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
    name: "Outlooks",
    hash: "#outlooks",
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
    month: "January-October",
    description:
      "I started learning web development by taking online and offline course, learned about Programming & hypertext languages, UI/UX design and Project Management",
    icon: React.createElement(GiWhiteBook),
    date: "2023",
  },
  {
    title: "Enrolled in the Frontend Bootcamp(GENICS).",
    month: "September-October",
    description:
      "Studied frontend development and developed a variety of websites as a way to learn.",
    icon: React.createElement(PiQrCodeFill),
    date: "2024",
  },
  {
    title: "PIC Frontend Division",
    month: "October-Now",
    description:
      "As the PIC(Person In Charge) for the front-end team in this e-learning project, I manage and lead our efforts in developing user-friendly interfaces. I work closely with my team to enhance the overall learning experience, creating a platform that is both visually appealing and easy to navigate.",
    icon: React.createElement(TbBrandReactNative),
    date: "2024 - now",
  },
] as const;

export const projectsData = [
  {
    title: "Contact Organizer",
    description:
      "An open-source project that allows users to adhere their contact, and also implementing api-auth with bearer token.",
    iconLists: [NextJS, Tailwind, Javascript],
    imageUrl: contact,
    projectUrl: "https://contact-organizer-nextjs.vercel.app/",
  },
  {
    title: "Film Finder",
    description:
      "Film Finder: Easily find movies, just enter a title, and instantly access detailed information like posters, release years, and genres, all powered by a robust API.",
    iconLists: [NextJS, Tailwind, Typescript],
    imageUrl: filmFinder,
    projectUrl: "https://film-finder-site.vercel.app/",
  },
  {
    title: "Counter Web App",
    description:
      "A web-based counter tool lets users easily increment, decrement, and reset counts, offering seamless, interactive functionality.",
    iconLists: [NextJS, Tailwind, Typescript],
    imageUrl: counter,
    projectUrl: "https://counter-web-app-nextjs.vercel.app/",
  },
  {
    title: "Word Analytics",
    description:
      "A public web app for quick analytics on text. It shows word count, character count and social media post limits.",
    iconLists: [NextJS, Tailwind, Typescript],
    imageUrl: wordAnalytics,
    projectUrl: "https://word-analytics-site.vercel.app/",
  },
  {
    title: "Corp Comment",
    description:
      "An open-source project that allows users to provide feedback to companies.",
    iconLists: [NextJS, Tailwind, Typescript],
    imageUrl: corpComment,
    projectUrl: "https://corp-comment-site.vercel.app/",
  },
  {
    title: "Remote Developer",
    description:
      "Job board for remote developer jobs. It has features like filtering, sorting and pagination.",
    iconLists: [NextJS, Tailwind, Typescript],
    imageUrl: remoteDev,
    projectUrl: "https://remote-dev.vercel.app/",
  },
] as const;

export const skillsData = [
  {
    name: 'React JS',
    icon: ReactJS,
  },
  {
    name: 'Framer Motion',
    icon: FramerMotion,
  },
  {
    name: 'Next JS',
    icon: NextJS,
  },
  {
    name: 'Tailwind',
    icon: Tailwind,
  },
  {
    name: 'Typescript',
    icon: Typescript,
  },
  {
    name: 'Javascirpt',
    icon: Javascript,
  },
  {
    name: 'Node JS',
    icon: Node,
  },
  {
    name: 'Shadcn UI',
    icon: ShadcnUI,
  },

] as const;

export const outlooks = [
  
  {
    quote:
      "It's rare to come across someone as motivated and enthusiastic as Abdurrofi. He is passionate about improving his developing skills. He also has positive attitude and strong work ethic were contagious, and he always brought fresh ideas to share.",
    name: "Devanza Priansyah",
    title: "Software QA at DSI",
    pictureUrl: masdevan.src,
  },
  {
    quote:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla eget dolor a turpis vehicula bibendum. Suspendisse potenti.",
    name: "lorem",
    title: "lorem",
    pictureUrl: about.src,
  },
  {
    quote:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla eget dolor a turpis vehicula bibendum. Suspendisse potenti.",
    name: "lorem",
    title: "lorem",
    pictureUrl: about.src,
  },
  {
    quote:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla eget dolor a turpis vehicula bibendum. Suspendisse potenti. ",
    name: "lorem",
    title: "lorem",
    pictureUrl: about.src,
  },
];

