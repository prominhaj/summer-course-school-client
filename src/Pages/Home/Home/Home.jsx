import React, { useEffect, useState } from "react";
import BannerSection from "../BannerSection/BannerSection";
import PopularClasses from "../PopularClasses/PopularClasses";
import PopularInstructors from "../PopularInstructors/PopularInstructors";
import axios from "axios";
import StudentsFeedBack from "../StudentsFeedBack/StudentsFeedBack";

const Home = () => {
  const [classes, setClasses] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    axios.get("http://localhost:3000/classes-popular").then((res) => {
      setClasses(res.data);
      setLoading(false);
    });
  }, []);

  return (
    <div className="bg-gray-100 dark:bg-[#0E1528]">
      <BannerSection classes={classes} />
      <PopularClasses classes={classes} loading={loading} />
      <PopularInstructors />
      <StudentsFeedBack />
    </div>
  );
};

export default Home;
