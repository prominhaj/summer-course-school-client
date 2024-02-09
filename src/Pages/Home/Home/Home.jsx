import React from "react";
import BannerSection from "../BannerSection/BannerSection";
import PopularClasses from "../PopularClasses/PopularClasses";

const Home = () => {
  return (
    <div className="bg-gray-100 dark:bg-gray-800">
      <BannerSection />
      <PopularClasses />
    </div>
  );
};

export default Home;
