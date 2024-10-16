import React from "react";
import { PiQrCodeFill } from "react-icons/pi";
import { TbBrandReactNative } from "react-icons/tb";
import { GiWhiteBook } from "react-icons/gi";
import contact from "@/public/contact.png";
import filmfinder from "@/public/filmfinder.png";
import counter from "@/public/counter.png";
import outlook1 from '@/public/outlook1.png'
import outlook2 from '@/public/outlook2.jpg'
import main from '@/public/main.png'
import about from '@/public/about.jpeg'

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
    iconLists: ["/next.svg", "/tail.svg", "/js.svg"],
    imageUrl: contact,
    projectUrl: "https://contact-organizer-nextjs.vercel.app/",
  },
  {
    title: "Film Finder",
    description:
      "Film Finder: Easily find movies, just enter a title, and instantly access detailed information like posters, release years, and genres, all powered by a robust API.",
    iconLists: ["/next.svg", "/tail.svg", "/ts.svg"],
    imageUrl: filmfinder,
    projectUrl: "https://film-finder-site.vercel.app/",
  },
  {
    title: "Counter Web App",
    description:
      "A web-based counter tool lets users easily increment, decrement, and reset counts, offering seamless, interactive functionality.",
    iconLists: ["/next.svg", "/tail.svg", "/ts.svg"],
    imageUrl: counter,
    projectUrl: "https://counter-web-app-nextjs.vercel.app/",
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
  "Xampp",
  "Python",
  "Framer Motion",
  "UI/UX",
] as const;

export const outlooks = [
  
  {
    quote:
      "It's rare to come across someone as motivated and enthusiastic as Abdurrofi. He is passionate about improving his developing skills. He also has positive attitude and strong work ethic were contagious, and he always brought fresh ideas to share.",
    name: "Devanza Priansyah",
    title: "Software QA at DSI",
    pictureUrl: outlook1.src,
  },
  {
    quote:
      "It's rare to come across someone as motivated and enthusiastic as Abdurrofi. He is passionate about improving his developing skills. He also has positive attitude and strong work ethic were contagious, and he always brought fresh ideas to share.",
    name: "Somebody",
    title: "Software QA at DSI",
    pictureUrl: outlook1.src,
  },
  {
    quote:
      "It's rare to come across someone as motivated and enthusiastic as Abdurrofi. He is passionate about improving his developing skills. He also has positive attitude and strong work ethic were contagious, and he always brought fresh ideas to share.",
    name: "Someone",
    title: "Software QA at DSI",
    pictureUrl: about.src,
  },
  {
    quote:
      "It's rare to come across someone as motivated and enthusiastic as Abdurrofi. He is passionate about improving his developing skills. He also has positive attitude and strong work ethic were contagious, and he always brought fresh ideas to share.",
    name: "Abdurrofi'i",
    title: "Software QA at DSI",
    pictureUrl: about.src,
  },
];


export const cardData = [
    {
      title: "Curiosity is the key",
      description: "Hover over this card to unleash the power of CSS perspective",
      imageSrc: contact,
      buttonText: "Try now →",
      aboutUrl:"https://contact-organizer-nextjs.vercel.app/",
    },
    {
      title: "Explore new things",
      description: "Discover the magic of 3D transformations in web design",
      imageSrc: filmfinder,
      buttonText: "Learn more →",
      aboutUrl: 'https://film-finder-site.vercel.app/',
    },
    {
      title: "Srong-headed",
      description: "Take your web development skills to the next level",
      imageSrc: counter,
      buttonText: "Get started →",
      aboutUrl: 'https://counter-web-app-nextjs.vercel.app/',
    },
  ];