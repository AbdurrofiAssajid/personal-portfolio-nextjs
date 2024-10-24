import React from "react";
import { FaLaptopCode } from "react-icons/fa";
import { FaUserTie } from "react-icons/fa";
import { FaChartLine } from "react-icons/fa";
import contact from "@/public/images/contact.png";
import filmFinder from "@/public/images/filmfinder.png";
import counter from "@/public/images/counter.png";
import wordAnalytics from '@/public/images/wordanalytics.png'
import corpComment from '@/public/images/corpcomment.png'
import remoteDev from '@/public/images/rmtdev.png'
import masdevan from '@/public/images/masdevan.jpg'
import profile3 from '@/public/images/profile3.jpg'
import NextJS from '@/public/icons/nextjs.svg'
import ReactJS from '@/public/icons/react.svg'
import Tailwind from '@/public/icons/tail.svg'
import Node from '@/public/icons/nodejs.svg'
import Javascript from '@/public/icons/js.svg'
import Typescript from '@/public/icons/ts.svg'
import FramerMotion from '@/public/icons/motion.svg'
import ShadcnUI from '@/public/icons/shadcnui.svg'
import SDLC from '@/public/images/sdlc.jpg'


export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "Achievement",
    hash: "#achievement",
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
    icon: React.createElement(FaChartLine),
    date: "2023",
  },
  {
    title: "Enrolled in the Frontend Bootcamp(GENICS).",
    month: "September-October",
    description:
      "Studied frontend development and developed a variety of websites as a way to learn.",
    icon: React.createElement(FaLaptopCode),
    date: "2024",
  },
  {
    title: "PIC Frontend Division",
    month: "October-Now",
    description:
      "As the PIC(Person In Charge) for the front-end team in an e-learning project, I manage and lead my team in developing user-friendly interfaces. I work closely with my team to enhance the overall learning experience, creating a platform that is both visually appealing and easy to navigate.",
    icon: React.createElement(FaUserTie),
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

export const outlooksData = [
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
    pictureUrl: profile3.src,
  },
  {
    quote:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla eget dolor a turpis vehicula bibendum. Suspendisse potenti.",
    name: "lorem",
    title: "lorem",
    pictureUrl: profile3.src,
  },
  {
    quote:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla eget dolor a turpis vehicula bibendum. Suspendisse potenti. ",
    name: "lorem",
    title: "lorem",
    pictureUrl: profile3.src,
  },
]

export interface AchievementCard {
  category: string;
  title: string;
  src: string;
  content: string;
}

export const achievementData: AchievementCard[] = [
  {
    category: "SDLC (Software Engineering Development and Logical Competition) - 2023",
    title: "Silver Medalist",
    src: "/images/sdlc.jpg",
    content: "In my opinion, the SDLC was the most innovative and prestigious competition. Although it was an individual event, I took on the role of a project manager, similar to a founder building a startup. I developed a business proposal, created an application prototype, crafted a business plan, designed the business flow, and pitched my project. Before reaching the final round, I had to pass the proposal creation stage. After that, I was given four days to develop the prototype, which culminated in a presentation of my work."
  },
  {
    category: "National Informatics Competition - 2023",
    title: "Gold Medalist",
    src: "/images/Informatics-gold.png",
    content: "I participated in a national-level online informatics competition, structured like an Olympiad, where I answered questions on computer science, mathematics, and programming logic. I am proud to have received a gold medal for my performance in this competition."
  },
  {
    category: "National Informatics Competition - 2022",
    title: "Silver Medalist",
    src: "/images/informatika-silver.png",
    content: "I participated in a national-level informatics competition conducted online, resembling an Olympiad format. In this competition, I engaged in answering questions related to computer knowledge, mathematics, and programming logic."
  },
  {
    category: "National Informatics Competition - 2022",
    title: "Bronze Medalist",
    src: "/images/informatika-bronze.png",
    content: "I participated in a national-level informatics competition conducted online, resembling an Olympiad format. In this competition, I engaged in answering questions related to computer knowledge, and programming logic."
  },
  {
    category: "National English Competition - 2022",
    title: "Silver Medalist",
    src: "/images/english.jpeg",
    content: "I took part in a national-level English competition held online, similar to an Olympiad format. This competition included sections on listening, reading, and grammar, much like the TOEFL ITP, where I answered various questions related to the English language"
  },
  
];