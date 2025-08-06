import React from "react";
import LoopImages from "../LoopImages";

const Section5 = () => {
  return (
    <div className="relativ ">
      <div className="md:absolut flex flex-col justify-center items-center backdrop-blur pb-10  px-10 md:px-28 text-center  w-full  ">
        <p className="text-4xl lg:text-5xl font-semibold py-4 gravesendSans">
          EVERY DESIRE ON YOUR DOORSTEP
        </p>
        <p className="font-medium inter">
          Indulge in unparalleled luxury at our esteemed hotel & resort.
          <br />
          Experience opulent comfort, exquisite dining, and refined
          accommodations.{" "}
        </p>
      </div>
      <LoopImages />
    </div>
  );
};

export default Section5;
