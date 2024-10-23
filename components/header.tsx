'use client'
import React from "react";
import { FloatingDock } from "@/components/ui/floating-dock";
import { useActiveSectionContext } from "@/context/active-section-context";
import { Home, User, Folder, Code, LineChart, Briefcase, Mail } from "lucide-react";

const links = [
  { name: "Home", hash: "#home", icon: Home },
  { name: "About", hash: "#about", icon: User },
  { name: "Projects", hash: "#projects", icon: Folder },
  { name: "Skills", hash: "#skills", icon: Code },
  { name: "Outlooks", hash: "#outlooks", icon: LineChart },
  { name: "Experience", hash: "#experience", icon: Briefcase },
  { name: "Contact", hash: "#contact", icon: Mail },
] as const;

export default function Header() {
  const { activeSection, setActiveSection, setTimeOfLastClick } = useActiveSectionContext();

  const dockItems = links.map(link => ({
    title: link.name,
    icon: <link.icon className="h-4 w-4" />,
    href: link.hash,
  }));

  return (
    <>
      <FloatingDock
        items={dockItems}
        desktopClassName="fixed top-12 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white dark:bg-gray-950 px-4 py-2 rounded-full border border-white/40 dark:border-black/40 shadow-lg backdrop-blur-md bg-opacity-80 dark:bg-opacity-75 z-[2147483647]"
        mobileClassName="fixed bottom-20 right-5 bg-white w-[3rem] h-[3rem] bg-opacity-80 backdrop-blur-[0.5rem] border border-white border-opacity-40 shadow-2xl rounded-full flex items-center justify-center hover:scale-[1.15] active:scale-105 transition-all dark:bg-gray-950 z-[2147483647]"
      />
    </>
  );
}