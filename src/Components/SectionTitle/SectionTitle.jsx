import React from "react";

const SectionTitle = ({ hading }) => {
  return (
    <div>
      <h2 className="text-black md:text-4xl text-xl sm:text-2xl font-semibold font-['Inter'] leading-[44px] dark:text-gray-100">
        {hading}
      </h2>
    </div>
  );
};

export default SectionTitle;
