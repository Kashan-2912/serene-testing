"use client";
import React, { useEffect, useRef, useState } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import ConIcon from "../conIcon/ConIcon";

function LazyVideo({ src, className, onMouseEnter, onMouseLeave }) {
  const videoRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.25 }
    );

    if (videoRef.current) {
      observer.observe(videoRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <div ref={videoRef} className="h-full w-full">
      {isVisible ? (
        <video
          className={className}
          src={src}
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          onMouseEnter={onMouseEnter}
          onMouseLeave={onMouseLeave}
        />
      ) : (
        <div className={`${className} bg-black`} /> // fallback while loading
      )}
    </div>
  );
}

function ImgCarousel() {
  const [autoPlay, setAutoPlay] = useState(true);
  const [swipeable, setSwipeable] = useState(false);
  const [showArrows, setShowArrows] = useState(true);

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
        className="h-[95vh] w-full"
        showThumbs={false}
        infiniteLoop
        centerMode
        centerSlidePercentage={100}
        interval={4000}
        showStatus={false}
        showArrows={showArrows}
        swipeable={swipeable}
      >
        <div className="relative h-[95vh]">
          <LazyVideo
            className="h-full w-full object-cover"
            src="/assets/carousel/optimized-landingVideo.mp4"
            onMouseEnter={() => setAutoPlay(false)}
            onMouseLeave={() => setAutoPlay(true)}
          />
        </div>

        <div className="relative h-[95vh] ">
          <img
            className="h-full w-full"
            src="/assets/carousel/carouselImg1.png"
            alt="image"
          />
          <div className="absolute text-white bg-gradient-to-tr from-[#000]/80 to-[#666]/10 text-left px-4 md:px-24 inset-0 w-full flex flex-col justify-center items-center md:items-start">
            <div className=" pt-20 px-0 lg:px-24 xl:px-32 w-full flex justify-center md:justify-between">
              <div>
                <p className="pt-6 xs:pt-4 text-2xl xs:text-4xl lg:text-5xl xl:text-6xl font-bold gravesendSans">
                  DISCOVER LUXURY <br /> EMBRACE NATURE
                </p>
                <p className="py-2 xs:py-4 text-xl xs:text-2xl lg:text-3xl xl:text-4xl pb-10 gravesendSans">
                  Serene Heights Nathia Gali <br /> Hotels & Resorts
                </p>
              </div>
              <div className=" hidden md:block">
                <ConIcon
                  bgColor={"bg-black/40 hover:bg-white/60"}
                  direction={"column"}
                  padding={"p-4"}
                />
              </div>
            </div>

            <div className="flex flex-col md:flex-row w-full justify-around items-center">
              <div>
                <img
                  className="h-28 md:h-40 w"
                  src="/assets/carousel/dm.png"
                  alt="dm-logo"
                />
              </div>

              <div className="bg-[#63636380]/50 p-4 border-s-2 backdrop-blur-sm border-[#E8FF61] rounded-md inter">
                <ul className="text-left">
                  <li>
                    • Monthly Rental Income After <br />
                    <span className="pl-3">Operations</span>
                  </li>
                  <li>• Free 28 Nights Stay Annually</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div className="relative h-[95vh]">
          <LazyVideo
            className="h-full w-full object-cover"
            src="/assets/carousel/optimized-landingVideo2.mp4"
            onMouseEnter={() => setAutoPlay(false)}
            onMouseLeave={() => setAutoPlay(true)}
          />
        </div>
      </Carousel>
    </div>
  );
}

export default ImgCarousel;
