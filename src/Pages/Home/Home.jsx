import React from "react";
import BannerSection from "../../Components/BannerSection/BannerSection";
import TopClassesSection from "../../Components/TopClassesSection/TopClassesSection";

const Home = () => {
  return (
    <div className="bg-gray-100 dark:bg-gray-800">
      <BannerSection />
      <TopClassesSection />
    </div>
  );
};

export default Home;
