import React from "react";
import { motion } from "framer-motion";

const Section4 = () => {
  return (
    <div className="text-center sm:pb-24  pb-0  sm:px-20 px-6">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeOut", delay: 0.3 }}
        className="my-28"
      >
        <p className="text-3xl sm:text-5xl font-bold gravesendSans">
          DISCOVER SERENE HEIGHTS <br /> IN NATHIA GALI
        </p>
        <p className="py-8 px inter text-[#222222]">
          Serene Heights Nathia Gali, nestled near PAF’s Kalabagh Airbase,
          offers secure, scenic living amidst alpine forests, with unobstructed
          valley views. Minutes from Nathia Gali Main Bazar, this resort-style
          retreat provides peace, modern amenities, and breathtaking sunsets,
          making it your dream summer home.
        </p>

        {/* Main Image Container */}
        <div className="relative w-full max-w-[1400px] mx-auto mt-4">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, ease: "easeInOut", delay: 0.3 }}
            className="relative w-full"
          >
            <iframe
              width="1200"
              height="600"
              src="https://www.youtube.com/embed/hgdClMWb6rE"
              title="YouTube Video"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="w-full rounded-2xl"
            ></iframe>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
};

export default Section4;
