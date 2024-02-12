import React, { useEffect, useState } from "react";
import BannerSection from "../BannerSection/BannerSection";
import PopularClasses from "../PopularClasses/PopularClasses";
import PopularInstructors from "../PopularInstructors/PopularInstructors";
import axios from "axios";
import StudentsFeedBack from "../StudentsFeedBack/StudentsFeedBack";

const Home = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);

  const handleSeeAllCourse = () => {
    axios.get("http://localhost:3000/classes-popular").then((res) => {
      setData(res.data);
    });
  };

  useEffect(() => {
    setLoading(true);
    axios.get("http://localhost:3000/classes-popular?limit=6").then((res) => {
      setData(res.data);
      setLoading(false);
    });
  }, []);

  const { popularClasses, totalPopularClasses } = data;

  return (
    <div className="bg-gray-100 dark:bg-[#0E1528]">
      <BannerSection classes={popularClasses} />
      <PopularClasses
        classes={popularClasses}
        totalPopularClasses={totalPopularClasses}
        loading={loading}
        onAllCourse={handleSeeAllCourse}
      />
      <PopularInstructors />
      <StudentsFeedBack />
    </div>
  );
};

export default Home;
