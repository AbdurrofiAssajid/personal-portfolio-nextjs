import React from "react";
import { PiQrCodeFill } from "react-icons/pi";
import { TbBrandReactNative } from "react-icons/tb";
import { GiWhiteBook } from "react-icons/gi";
import contact from "@/public/contact.png";
import filmfinder from "@/public/filmfinder.png";
import counter from "@/public/counter.png";

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
    tags: ["Next JS", "Authorization", "CSS"],
    imageUrl: contact,
    projectUrl: "https://contact-organizer-nextjs.vercel.app/",
  },
  {
    title: "Counter Web App",
    description:
      "A web-based counter tool lets users easily increment, decrement, and reset counts, offering seamless, interactive functionality.",
    tags: ["Next JS", "Dark Mode", "Local Storage"],
    imageUrl: counter,
    projectUrl: "https://counter-web-app-nextjs.vercel.app/",
  },
  {
    title: "Film Finder",
    description:
      "Film Finder: Easily find movies, just enter a title, and instantly access detailed information like posters, release years, and genres, all powered by a robust API.",
    tags: ["Next JS", "OMDB Api"],
    imageUrl: filmfinder,
    projectUrl: "https://film-finder-site.vercel.app/",
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

export const outlooks = [
  {
    quote:
      "Collaborating with Adrian was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Adrian's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Adrian is the ideal partner.",
    name: "Michael Johnson",
    title: "Director of AlphaStream Technologies",
  },
  {
    quote:
      "Collaborating with Adrian was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Adrian's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Adrian is the ideal partner.",
    name: "Michael Johnson",
    title: "Director of AlphaStream Technologies",
  },
  {
    quote:
      "Collaborating with Adrian was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Adrian's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Adrian is the ideal partner.",
    name: "Michael Johnson",
    title: "Director of AlphaStream Technologies",
  },
  {
    quote:
      "Collaborating with Adrian was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Adrian's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Adrian is the ideal partner.",
    name: "Michael Johnson",
    title: "Director of AlphaStream Technologies",
  },
  {
    quote:
      "Collaborating with Adrian was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Adrian's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Adrian is the ideal partner.",
    name: "Michael Johnson",
    title: "Director of AlphaStream Technologies",
  },
];
