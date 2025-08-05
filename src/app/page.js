"use client";

import ImgCarousel from "@/components/ImgCarousel";
import Section1 from "@/components/Section1";
import { motion } from "framer-motion";
import Image from "next/image";

export default function Home() {
  return (
    <div className="relative w-full overflow-x-hidden  ">

      {/* Compressed Videos are fetched from imagekit */}
      <div className="relative">
        <ImgCarousel />
      </div>

      <div className="relative text-[#37584F] bg-white mt-[100vh] w-full z-10  py-20">
        {/* Home Page Section 1 (Right below Hero)  */}
        <Section1 />
      </div>
    </div>
  );
}
