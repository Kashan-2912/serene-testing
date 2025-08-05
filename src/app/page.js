"use client";

import ImgCarousel from "@/components/ImgCarousel";
import Section1 from "@/components/Sections/Section1";
import Section2 from "@/components/Sections/Section2";
import Section3 from "@/components/Sections/Section3";
import Section4 from "@/components/Sections/Section4";
import Section5 from "@/components/Sections/Section5";
import Section6 from "@/components/Sections/Section6";
import Section7 from "@/components/Sections/Section7";

export default function Home() {
  return (
    <div className="relative w-full overflow-x-hidden  ">

      {/* Compressed Videos are fetched from imagekit */}
      <div className="relative">
        <ImgCarousel />
      </div>

      <div className="relative text-[#37584F] bg-white mt-[100vh] w-full z-10  py-20">
        <Section1 />
        <Section2 />
        <Section3 />
        <Section4 />
        <Section5 />
        <Section6 />
        <Section7 />
      </div>
    </div>
  );
}
