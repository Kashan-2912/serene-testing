import React from "react";
import LocationCards from "../LocationCards";
import { locationElements } from "@/utils/constants/locationElements";

const Section6 = () => {
  return (
    <div className="text-center bg-[url('/assets/home/location/bgMap.png')] bg-cover bg-no-repeat w-full lg:px-36 md:px-20 xs:px-6 mb-20 pt-20">
      <p className="sm:text-5xl text-4xl font-bold py-10 gravesendSans">
        Location
      </p>
      <div className="grid h-full px-3 sm:px-0 lg:h-[80vh] grid-cols-1 md:grid-cols-2 gap-6 py-10">
        {/* Image section */}
        <div className="relative w-full h-full overflow-hidden">
          <img
            src="/assets/home/location/location.png"
            alt="location"
            className="object-contai w-full h-full"
          />
        </div>

        {/* Cards section */}
        <div className="h-full flex flex-col gap-4 py-2">
          {locationElements.map((loc, index) => (
            <div
              key={index}
              className="h-full flex-1 bg-white cursor-pointer transition-transform duration-300 ease-in-out transform hover:scale-105"
            >
              <LocationCards title={loc.title} distance={loc.distance} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Section6;
