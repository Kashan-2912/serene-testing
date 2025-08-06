"use client";
import { motion } from "framer-motion";
import Image from "next/image";

import React from "react";

const Section1 = () => {
  return (
    <div className="flex flex-col md:flex-row gap-4 justify-center sm:justify-around items-center px-4 xs:px-8">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
      >
        <p className="text-4xl sm:text-5xl  font-bold tracking-wide  gravesendSans">
          DISCOVER
          <br /> REFINED LUXURY
        </p>
        <p className="my-2 text-2xl sm:text-4xl text-[#37584F]/80  tracking-wide font-helvetica font-medium">
          AT OUR EXCLUSIVE RESORT <br /> AND HOTEL
        </p>
      </motion.div>

      <div className="grid grid-cols-2 gap-3">
        <div>
          <motion.div
            initial={{ opacity: 0, scale: 0.6, y: 50 }}
            whileInView={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="mb-3"
          >
            <Image
              src="/assets/home/image1.png"
              alt="img"
              width={170}
              height={220}
              className="rounded-[10px]"
              priority
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.6, y: 50 }}
            whileInView={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
          >
            <Image
              src="/assets/home/image2.png"
              alt="img"
              width={170}
              height={140}
              className="rounded-[10px]"
              priority
            />
          </motion.div>
        </div>

        <div>
          <motion.div
            initial={{ opacity: 0, scale: 0.6, y: 50 }}
            whileInView={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.4 }}
          >
            <Image
              src="/assets/home/image3.png"
              alt="img"
              width={170}
              height={140}
              className="rounded-[10px]"
              priority
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.6, y: 50 }}
            whileInView={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.6 }}
            className="mt-3"
          >
            <Image
              src="/assets/home/image4.png"
              alt="img"
              width={170}
              height={220}
              className="rounded-[10px]"
              priority
            />
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Section1;
