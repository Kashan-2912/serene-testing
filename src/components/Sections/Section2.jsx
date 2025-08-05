import React from "react";
import { motion } from "framer-motion";

const Section2 = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, ease: "easeOut", delay: 0.3 }}
      className="my-32 lg:px-36 md:px-20 px-4 py-0 xs:py-16 text-center"
    >
      <p className="text-4xl sm:text-5xl font-bold gravesendSans">
        PAKISTAN’S FIRST AND LARGEST <br /> WINTER RESORT.
      </p>

      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, ease: "easeInOut", delay: 0.3 }}
      >
        <video
          src="/assets/home/videoL/laerialnew.mp4"
          width="1300"
          height="600"
          controls
          autoPlay
          loop
          muted
          className="mt-6 w-full rounded-2xl "
        />
      </motion.div>
    </motion.div>
  );
};

export default Section2;
