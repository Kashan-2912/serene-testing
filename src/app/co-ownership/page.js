import React from 'react';
import FeaturesGrid from '@/components/coownership/FeaturesGrid';
import SmartProperty from '@/components/coownership/SmartProperty';
import CoOwnerShipModel from '@/components/coownership/CoOwnerShipModel';
import HowItWorks from '@/components/coownership/HowItWorks';

function Page() {
  return (
    <div id='why-us' className="py-10 md:py-32 px-7 md:px-12">
      <div className="max-w-7xl mx-auto flex flex-col gap-28">

        <div>
          <div className="text-left mb-10">
            <p className="inter font-semibold text-xs md:text-xl text-[#37584F] mb-2 tracking-wide uppercase">
              WHY CHOOSE US
            </p>
            <p className="text-xl md:text-5xl text-[#37584F] font-bold gravesendSans">
              WHY SERENE HEIGHTS?
            </p>
          </div>

          <FeaturesGrid />
        </div>

        <SmartProperty />

        <CoOwnerShipModel />

        <HowItWorks />
      </div>
    </div>
  );
}

export default Page;