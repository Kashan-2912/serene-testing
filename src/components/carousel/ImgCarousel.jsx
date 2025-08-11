"use client";
import React, { useEffect, useState, useRef } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import { motion } from "framer-motion";

function ImgCarousel() {
  const [autoPlay, setAutoPlay] = useState(true);
  const [swipeable, setSwipeable] = useState(false);
  const [showArrows, setShowArrows] = useState(true);
  const [currentSlide, setCurrentSlide] = useState(0);

  // Refs for each animated block
  const leftRef = useRef(null);
  const imgRef = useRef(null);
  const rightRef = useRef(null);

  // Track md+ breakpoint on client so animations only run for md and up
  const [isMd, setIsMd] = useState(false);
  useEffect(() => {
    const check = () => setIsMd(window.innerWidth >= 768);
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);

  useEffect(() => {
    const handleResize = () => {
      setShowArrows(window.innerWidth > 768);
      setSwipeable(window.innerWidth > 768);
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="fixed top-0 left-0 w-[100%] h-screen">
      <Carousel
        autoPlay={autoPlay}
        className="h-[100vh] w-full"
        showThumbs={false}
        infiniteLoop
        centerMode
        centerSlidePercentage={100}
        interval={5000}
        showStatus={false}
        showArrows={showArrows}
        swipeable={swipeable}
        onChange={(index) => setCurrentSlide(index)}
      >
        {/* VIDEO #1 */}
        <div className="relative h-[100vh]" key={`video-${currentSlide}`}>
          <video
            className="h-full w-full object-cover"
            src="https://ik.imagekit.io/dueovwndo/landingVideo.mp4?updatedAt=1754382936223"
            autoPlay
            preload="auto"
            muted
            loop
            onMouseEnter={() => setAutoPlay(false)}
            onMouseLeave={() => setAutoPlay(true)}
          />

          <motion.div 
            className="absolute text-white bg-gradient-to-tr from-[#000]/80 to-[#666]/10 text-left px-4 md:px-24 inset-0 w-full flex flex-col justify-center items-center md:items-start"
            key={`gradient-${currentSlide}`}
            initial={{ opacity: 0 }}
            animate={currentSlide === 0 ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
          >
            <div className="pt-20 px-0 lg:px-24 xl:px-32 w-full flex justify-center md:justify-between">
              <motion.div
                key={`text-${currentSlide}`}
                ref={leftRef}
                initial={{ x: -500, opacity: 0 }}
                animate={currentSlide === 0 ? { x: 0, opacity: 1 } : { x: -500, opacity: 0 }}
                transition={{ duration: 0.3, ease: "linear", delay: 1.0 }}
              >
                <p className="pt-6 xs:pt-4 text-4xl lg:text-5xl xl:text-6xl font-bold gravesendSans">
                  DISCOVER LUXURY <br /> EMBRACE NATURE
                </p>
                <p className="py-2 xs:py-4 text-2xl lg:text-3xl xl:text-4xl pb-10 font-regular font-helvetica">
                  Serene Heights Nathia Gali <br /> Hotels & Resorts
                </p>
              </motion.div>
            </div>

            <div className="flex flex-col md:flex-row w-full justify-around items-center">
              <motion.div
                key={`img-${currentSlide}`}
                ref={imgRef}
                initial={{ x: -500, opacity: 0 }}
                animate={currentSlide === 0 ? { x: 0, opacity: 1 } : { x: -500, opacity: 0 }}
                transition={{ duration: 0.3, ease: "linear", delay: 1.0 }}
              >
                <img
                  className="h-28 md:h-40 w"
                  src="/assets/carousel/dm.png"
                  alt="dm-logo"
                />
              </motion.div>

              <motion.div
                key={`list-${currentSlide}`}
                ref={rightRef}
                initial={{ x: 500, opacity: 0 }}
                animate={currentSlide === 0 ? { x: 0, opacity: 1 } : { x: 500, opacity: 0 }}
                transition={{ duration: 0.3, ease: "linear", delay: 2.0 }}
                className="bg-[#63636380]/50 p-4 border-s-4 backdrop-blur-sm border-[#E8FF61] rounded-md font-helvetica font-medium"
              >
                <ul className="text-left">
                  <li>
                    • Monthly Rental Income After <br />
                    <span className="pl-3">Operations</span>
                  </li>
                  <li>• Free 28 Nights Stay Annually</li>
                </ul>
              </motion.div>
            </div>
          </motion.div>
        </div>

        {/* IMAGE in Carousel */}
        <div className="relative h-[100vh]" key={`slide-${currentSlide}`}>
          <img
            className="h-full w-full"
            src="/assets/carousel/carouselImg1.png"
            alt="image"
          />

          <motion.div 
            className="absolute text-white bg-gradient-to-tr from-[#000]/80 to-[#666]/10 text-left px-4 md:px-24 inset-0 w-full flex flex-col justify-center items-center md:items-start"
            key={`gradient-${currentSlide}`}
            initial={{ opacity: 0 }}
            animate={currentSlide === 1 ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 0.5, delay: 1.0 }}
          >
            <div className="pt-20 px-0 lg:px-24 xl:px-32 w-full flex justify-center md:justify-between">
              <motion.div
                key={`text-${currentSlide}`}
                ref={leftRef}
                initial={{ x: -500, opacity: 0 }}
                animate={currentSlide === 1 ? { x: 0, opacity: 1 } : { x: -500, opacity: 0 }}
                transition={{ duration: 0.3, ease: "linear", delay: 1.0 }}
              >
                <p className="pt-6 xs:pt-4 text-4xl lg:text-5xl xl:text-6xl font-bold gravesendSans">
                  DISCOVER LUXURY <br /> EMBRACE NATURE
                </p>
                <p className="py-2 xs:py-4 text-2xl lg:text-3xl xl:text-4xl pb-10 font-regular font-helvetica">
                  Serene Heights Nathia Gali <br /> Hotels & Resorts
                </p>
              </motion.div>
            </div>

            <div className="flex flex-col md:flex-row w-full justify-around items-center">
              <motion.div
                key={`img-${currentSlide}`}
                ref={imgRef}
                initial={{ x: -500, opacity: 0 }}
                animate={currentSlide === 1 ? { x: 0, opacity: 1 } : { x: -500, opacity: 0 }}
                transition={{ duration: 0.3, ease: "linear", delay: 1.0 }}
              >
                <img
                  className="h-28 md:h-40 w"
                  src="/assets/carousel/dm.png"
                  alt="dm-logo"
                />
              </motion.div>

              <motion.div
                key={`list-${currentSlide}`}
                ref={rightRef}
                initial={{ x: 500, opacity: 0 }}
                animate={currentSlide === 1 ? { x: 0, opacity: 1 } : { x: 500, opacity: 0 }}
                transition={{ duration: 0.3, ease: "linear", delay: 2.0 }}
                className="bg-[#63636380]/50 p-4 border-s-4 backdrop-blur-sm border-[#E8FF61] rounded-md font-helvetica font-medium"
              >
                <ul className="text-left">
                  <li>
                    • Monthly Rental Income After <br />
                    <span className="pl-3">Operations</span>
                  </li>
                  <li>• Free 28 Nights Stay Annually</li>
                </ul>
              </motion.div>
            </div>
          </motion.div>
        </div>

        {/* VIDEO #2 */}
        <div className="relative h-[100vh]" key={`video2-${currentSlide}`}>
          <video
            className="h-full w-full object-cover"
            src="https://ik.imagekit.io/dueovwndo/landingVideo2.mp4?updatedAt=1754382936153"
            autoPlay
            preload="auto"
            muted
            loop
            onMouseEnter={() => setAutoPlay(false)}
            onMouseLeave={() => setAutoPlay(true)}
          />

          <motion.div 
            className="absolute text-white bg-gradient-to-tr from-[#000]/80 to-[#666]/10 text-left px-4 md:px-24 inset-0 w-full flex flex-col justify-center items-center md:items-start"
            key={`gradient-${currentSlide}`}
            initial={{ opacity: 0 }}
            animate={currentSlide === 2 ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 0.5, delay: 1.0 }}
          >
            <div className="pt-20 px-0 lg:px-24 xl:px-32 w-full flex justify-center md:justify-between">
              <motion.div
                key={`text-${currentSlide}`}
                ref={leftRef}
                initial={{ x: -500, opacity: 0 }}
                animate={currentSlide === 2 ? { x: 0, opacity: 1 } : { x: -500, opacity: 0 }}
                transition={{ duration: 0.3, ease: "linear", delay: 1.0 }}
              >
                <p className="pt-6 xs:pt-4 text-4xl lg:text-5xl xl:text-6xl font-bold gravesendSans">
                  DISCOVER LUXURY <br /> EMBRACE NATURE
                </p>
                <p className="py-2 xs:py-4 text-2xl lg:text-3xl xl:text-4xl pb-10 font-regular font-helvetica">
                  Serene Heights Nathia Gali <br /> Hotels & Resorts
                </p>
              </motion.div>
            </div>

            <div className="flex flex-col md:flex-row w-full justify-around items-center">
              <motion.div
                key={`img-${currentSlide}`}
                ref={imgRef}
                initial={{ x: -500, opacity: 0 }}
                animate={currentSlide === 2 ? { x: 0, opacity: 1 } : { x: -500, opacity: 0 }}
                transition={{ duration: 0.3, ease: "linear", delay: 1.0 }}
              >
                <img
                  className="h-28 md:h-40 w"
                  src="/assets/carousel/dm.png"
                  alt="dm-logo"
                />
              </motion.div>

              <motion.div
                key={`list-${currentSlide}`}
                ref={rightRef}
                initial={{ x: 500, opacity: 0 }}
                animate={currentSlide === 2 ? { x: 0, opacity: 1 } : { x: 500, opacity: 0 }}
                transition={{ duration: 0.3, ease: "linear", delay: 2.0 }}
                className="bg-[#63636380]/50 p-4 border-s-4 backdrop-blur-sm border-[#E8FF61] rounded-md font-helvetica font-medium"
              >
                <ul className="text-left">
                  <li>
                    • Monthly Rental Income After <br />
                    <span className="pl-3">Operations</span>
                  </li>
                  <li>• Free 28 Nights Stay Annually</li>
                </ul>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </Carousel>
    </div>
  );
}

export default ImgCarousel;