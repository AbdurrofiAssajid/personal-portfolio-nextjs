"use client";

import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { BsArrowRight } from "react-icons/bs";
import { HiDownload } from "react-icons/hi";
import { AiFillInstagram } from "react-icons/ai";
import { FaFacebook } from "react-icons/fa";
import { useSectionInView } from "@/lib/hooks";
import { useActiveSectionContext } from "@/context/active-section-context";

export default function Intro() {
  const { ref } = useSectionInView("Home", 0.5);
  const { setActiveSection, setTimeOfLastClick } = useActiveSectionContext();

  return (
    <section
      ref={ref}
      id="home"
      className="mb-28 max-w-[50rem] text-center sm:mb-0 scroll-mt-[100rem]"
    >
      <div className="flex items-center justify-center">
        <div className="relative">
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              type: "tween",
              duration: 0.2,
            }}
          > 
            <Image
              src="/intro.jpg"
              alt="Islamic Law Consultation corp logo"
              width="300"
              height="300"
              quality="95"
              priority={true}
              className="h-24 w-24 rounded-full object-cover border-[0.35rem] border-blue-800 dark:border-yellow-400 shadow-xl"
            />
          </motion.div>

          <motion.span
            className="absolute bottom-0 right-0 text-3xl"
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              type: "spring",
              stiffness: 125,
              delay: 0.1,
              duration: 0.7,
            }}
          >
        🤔
          </motion.span>
        </div>
      </div>

      <motion.h1
        className="mb-10 mt-4 px-4 text-2xl font-medium !leading-[1.5] sm:text-4xl"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
      >
       <span className="font-bold">Confused About</span>
        <span className=" text-blue-700 font-bold dark:text-yellow-300"> Islamic law? </span> {' '}
        <span className="font-bold"> {' '} We're Ready to Help You</span>
      </motion.h1>

      <motion.div
        className="flex flex-col sm:flex-row items-center justify-center gap-2 px-4 text-lg font-medium"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.1,
        }}
      >
        <Link
          href="#consult"
          className="group bg-blue-700 text-white px-7 py-3 flex items-center gap-2 rounded-full outline-none focus:scale-110 hover:scale-110 hover:bg-blue-900 active:scale-105 transition dark:bg-yellow-300 dark:text-gray-900 font-bold dark:hover:bg-yellow-400"
          onClick={() => {
            setActiveSection("Consult");
            setTimeOfLastClick(Date.now());
          }}
        >
          Consult Now{" "}
          <BsArrowRight className=" group-hover:translate-x-1 transition text-white dark:text-black" />
        </Link>

        <a
          className="group bg-gray-900 text-white px-7 py-3 flex items-center gap-2 rounded-full outline-none focus:scale-110 hover:scale-110 active:scale-105 transition cursor-pointer borderBlack dark:bg-black dark:text-yellow-300 dark:hover:bg-black dark:hover:text-yellow-400"
          href="/tech.pdf"
          download
        >
          Download Source{" "}
          <HiDownload className=" group-hover:translate-y-1 transition dark:text-yellow-300" />
        </a>

        <a
          className="bg-gray-950 p-4 text-white hover:text-white flex items-center gap-2 rounded-full focus:scale-[1.15] hover:scale-[1.15] active:scale-105 transition cursor-pointer borderBlack dark:bg-black dark:text-yellow-300 dark:hover:text-yellow-400"
          href="https://www.facebook.com/"
          target="_blank"
        >
          <FaFacebook />
        </a>

        <a
          className="text-white p-4 bg-gray-900 flex items-center gap-2 text-[1.35rem] rounded-full focus:scale-[1.15] hover:scale-[1.15] hover:text-white active:scale-105 transition cursor-pointer borderBlack dark:bg-black dark:text-yellow-300 dark:hover:text-yellow-400"
          href="https://www.instagram.com/"   
          target="_blank"     
        >
          <AiFillInstagram />
        </a>
      </motion.div>
    </section>
  );
}