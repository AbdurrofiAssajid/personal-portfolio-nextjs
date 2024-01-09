import React from "react";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="mb-10 px-4 text-center text-gray-500">
      <small className="mb-2 block text-xs">
        &copy; 2024 Justice Defence Force  | All rights reserved.
      </small>

     <p className="font-medium italic text-blue-800 mb-2">
        <Link href="https://remote-dev.vercel.app/"
          target="_blank">
         If you wanna see our other project click here </Link><span className="font-medium italic text-red-700 mb-2">
         <Link href="https://word-analytics-site.vercel.app/"
          target="_blank">
          or here</Link>
         </span>
       
     </p>
     <p className="font-bold italic">
        <Link href="https://islamic-law-consultation.vercel.app/"
          target="_blank">
         Islamic Law consultation - Click here to see the demo of this website</Link>
     </p>
    </footer>
  );
}