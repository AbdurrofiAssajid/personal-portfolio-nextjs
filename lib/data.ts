import { FcBusinessman } from "react-icons/fc";
import { FcManager } from "react-icons/fc";
import { FcBusinesswoman } from "react-icons/fc";
import consultant2Img from '@/public/consultant2.jpeg'
import consultant3Img from '@/public/consultant3.jpeg'
import consultant1Img from '@/public/consultant1.jpeg'
import React from "react";

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
    name: "Consultant",
    hash: "#consultant",
  },
  {
    name: "Benefits",
    hash: "#benefits",
  },
  {
    name: "Reviews",
    hash: "#reviews",
  },
  {
    name: "Consult",
    hash: "#consult",
  },
] as const;

export const reviewsData = [
  {
    name: "John Doe",
    job:"CEO of Google", 
    description:
      "IL consultation are the best corp I've ever seen, If you had problem in islamic law I highly recommend you to consult in IL consultation.",
    icon: React.createElement(FcBusinessman ),
    date: "2022",
  },
  {
    name: "Peter Parker",
    job:"Actor", 
    description:
      "This is the first time I have consulted regarding Islamic law, and I can't believe they really explained it in detail and clearly so that I really understood, thanks IL",
    icon: React.createElement(FcManager), 
    date: "2023",
  },
  {
    name: "Silvia de bora",
    job:"Entrepreneur", 
    description:
      "At that time I was very confused about trading laws, but since consulting with IL consultation I am no longer confused, thank you IL consultation 💖.",
    icon: React.createElement(FcBusinesswoman),
    date: "2024",
  },
] as const;

export const benefitsData = [
  'Trusted',
  "Friendly services",
  'Free consult for students',
  'Paylater',
  '100% refund guarantee',
  'Online & Offline service',
  'Guided by Professional consultant',
  'Intensive Counsultation'
] as const;

export const consultantData = [
  {
    name: 'Andrés De Fonollosa',
    description: "There is no happiness if a day doesn't help people, I'd be very happy if I can help people.",
    tags:['expert', '6 years of experience'],
    imageUrl: consultant1Img
  },
  {
    name: 'Silene Oliveira',
    description: 'Customer satisfaction is our priority, we will serve you wholeheartedly.',
    tags:['expert', '7 years of experience'],
    imageUrl: consultant2Img
  },
  {
    name: 'Sergio Marquina',
    description: 'Explain in detail then I will solve your problem in 5 minutes.',
    tags:['expert', '10 years of experience'],
    imageUrl: consultant3Img
  },
] as const