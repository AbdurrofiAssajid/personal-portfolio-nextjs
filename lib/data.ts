import { FcBusinessman } from "react-icons/fc";
import { FcManager } from "react-icons/fc";
import { FcBusinesswoman } from "react-icons/fc";
import features1Img from '@/public/features1.jpg'
import features2Img from "@/public/features2.jpg";
import features3Img from "@/public/features3.jpg";
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
    name: "Features",
    hash: "#features",
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
    title: "John Doe",
    month:"CEO of Google", 
    description:
      "IL consultation are the best corp I've ever seen, If you had problem in islamic law I highly recommend you to consult in IL consultation.",
    icon: React.createElement(FcBusinessman ),
    date: "2022",
  },
  {
    title: "Peter Parker",
    month:"Actor", 
    description:
      "This is the first time I have consulted regarding Islamic law, and I can't believe they really explained it in detail and clearly so that I really understood, thanks IL",
    icon: React.createElement(FcManager), 
    date: "2023",
  },
  {
    title: "Silvia de bora",
    month:"Entrepreneur", 
    description:
      "At that time I was very confused about trading laws, but since consulting with IL consultation I am no longer confused, thank you IL consultation 💖.",
    icon: React.createElement(FcBusinesswoman),
    date: "2024",
  },
] as const;

export const featuresData = [
  {
    title: "Bonuses Book and E-Book",
    description:
      "equipped with books and e-books from trusted sources and have been proven to be true",
    tags: ["Book", 'E-Book'],
    imageUrl: features1Img,
  },
  {
    title: "Consult now, Pay later",
    description:
      "Customers could consult now without worrying about costs.",
    tags: ["paylater", 'secure payment', 'monthly installments'],
    imageUrl: features2Img,
  },
  {
    title: "Supported language translator",
    description:
      "User just have to type their language and it will translate itself",
    tags: ["English", 'Mandarin', 'Arabic', 'Spain'],
    imageUrl: features3Img,
  },
  
] as const;


export const benefitsData = [
  "Friendly CS",
  'Free consult for students',
  'Paylater',
  '100% refund guarantee',
  'Online & Offline service',
  'Guided by Professional employee',
  'Intensive Counsultation'
  
  
] as const;