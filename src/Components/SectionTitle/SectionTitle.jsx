import React from "react";

const SectionTitle = ({ hading }) => {
  return (
    <div>
      <h2 className="text-2xl font-bold leading-tight text-transparent sm:text-3xl md:text-4xl bg-clip-text bg-gradient-to-r from-gray-500 to-green-500 dark:bg-gradient-to-r dark:from-blue-200 dark:to-orange-500 dark:text-transparent">
        {hading}
      </h2>
    </div>
  );
};

export default SectionTitle;
