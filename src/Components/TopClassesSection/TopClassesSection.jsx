import React from "react";
import SectionTitle from "../SectionTitle/SectionTitle";

const TopClassesSection = () => {
  return (
    <div className="py-5 md:py-10 bg-slate-100 dark:bg-gray-800">
      <div className="container px-5 mx-auto">
        <SectionTitle hading="Popular Classes" />
        <div></div>
      </div>
    </div>
  );
};

export default TopClassesSection;
