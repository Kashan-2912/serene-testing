import React from 'react';
import FeaturesGrid from '@/components/coownership/FeaturesGrid';

function Page() {
  return (
    <div className="py-32 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
    
        <div className="text-left mb-10">
          <p className="inter font-semibold text-[#37584F] mb-2 tracking-wide uppercase">
            WHY CHOOSE US
          </p>
          <p className="text-3xl sm:text-5xl text-[#37584F] font-bold gravesendSans">
            WHY SERENE HEIGHTS?
          </p>
        </div>

        {/* Features Grid Component */}
        <FeaturesGrid />
      </div>
    </div>
  );
}

export default Page;