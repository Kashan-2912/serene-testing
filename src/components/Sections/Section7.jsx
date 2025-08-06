import React from "react";
import ContactUs from "../ContactUs";
import { Icon } from "@iconify-icon/react";

const Section7 = () => {
  return (
    <div className="text-center lg:px-36 md:px-20 xs:px-6 ">
      <p className="sm:text-5xl text-4xl font-bold py-8 gravesendSans">
        ENQUIRE NOW
      </p>
      <div className="flex flex-col px-4 sm:px-0 md:flex-row gap-4">
        <div className="text-left :text-lg  w-full md:w-[40%] font-medium popping">
          <p className="sm:text-4xl text-3xl py-4">Contact Information</p>
          <div className="border-b-4 rounded-full border-b-[#37584F] w-[20%]"></div>
          <p className="py-6 sm:text-xl text-2xl text-[#222222] poppins opacity-80">
            Any question or remarks? Just <br /> write us a message!
          </p>
          <div className="flex flex-col gap-4 text-[#222222] font-medium">
            <div className="flex items-center gap-3">
              <Icon
                icon="mdi:phone-classic"
                width="24"
                height="24"
                color="#37584F"
              />
              <p className="text-[14px] md:text-[16px] lg:text-[18px]">
                042-111-111-744
              </p>
            </div>

            <div className="flex items-center gap-3">
              <Icon
                icon="ic:baseline-local-phone"
                width="24"
                height="24"
                color="#37584F"
              />
              <p className="text-[14px] md:text-[16px] lg:text-[18px]">
                +92 300 8497999
              </p>
            </div>

            <div className="flex items-center gap-3">
              <Icon
                icon="ic:baseline-mail"
                width="24"
                height="24"
                color="#37584F"
              />
              <p className="text-[14px] md:text-[16px] lg:text-[18px] break-all">
                info@sereneheightsnathiagali.com
              </p>
            </div>
          </div>
        </div>
        <div className="w-full md:w-[60%]">
          <ContactUs />
        </div>
      </div>
    </div>
  );
};

export default Section7;
