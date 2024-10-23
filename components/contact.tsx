"use client";

import React, { useRef, useState } from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";
import { sendEmail } from "@/actions/sendEmail";
import SubmitBtn from "./submit-btn";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function Contact() {
  const { ref } = useSectionInView("Contact");
  const formRef = useRef<HTMLFormElement>(null);
  const [emailValue, setEmailValue] = useState("");
  const [messageValue, setMessageValue] = useState("");

  const handleSubmit = async (formData: FormData) => {
    const { error } = await sendEmail(formData);
    if (error) {
      toast.error(error);
      return;
    } else {
      toast.success("Email Successfully sent!", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
      setEmailValue("");
      setMessageValue("");
      formRef.current?.reset();
    }
  };

  return (
    <div className="flex justify-center items-center">
      <motion.section
        id="contact"
        ref={ref}
        className="mb-20 sm:mb-28 w-[min(100%,38rem)] justify-end items-end"
        initial={{
          opacity: 0,
        }}
        whileInView={{
          opacity: 1,
        }}
        transition={{
          duration: 1,
        }}
      >
        <SectionHeading>Contact me</SectionHeading>

        <p className="text-gray-700 -mt-6 dark:text-white/80">
          You could contact me by email:{" "}
          <a className="underline" href="mailto:abdurrofii.aas@gmail.com">
            abdurrofii.aas@gmail.com
          </a>{" "}
          or through this form.
        </p>

        <form
          ref={formRef}
          className="mt-10 flex flex-col dark:text-black"
          action={handleSubmit}
        >
          <input
            className="h-14 px-4 rounded-lg borderBlack dark:bg-white dark:bg-opacity-80 dark:focus:bg-opacity-100 transition-all dark:outline-none"
            name="senderEmail"
            type="email"
            required
            maxLength={500}
            placeholder="Your email"
            value={emailValue}
            onChange={(e) => setEmailValue(e.target.value)}
          />
          <textarea
            className="h-52 my-3 rounded-lg borderBlack p-4 dark:bg-white dark:bg-opacity-80 dark:focus:bg-opacity-100 transition-all dark:outline-none"
            name="message"
            placeholder="Your message"
            required
            maxLength={5000}
            value={messageValue}
            onChange={(e) => setMessageValue(e.target.value)}
          />
          <SubmitBtn />
        </form>
      </motion.section>
    </div>
  );
}
