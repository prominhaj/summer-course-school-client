import React, { useEffect, useState } from "react";
import ClassesCard from "../../../Components/ClassesCard/ClassesCard";
import axios from "axios";
import SectionTitle from "../../../Components/SectionTitle/SectionTitle";
import { Link } from "react-router-dom";

const PopularClasses = () => {
  const [classes, setClasses] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:3000/classes-popular").then((res) => {
      setClasses(res.data);
    });
  }, []);

  return (
    <section className="container px-5 py-3 mx-auto md:py-8">
      <SectionTitle hading="Popular Classes" />
      <div className="grid gap-5 py-5 md:py-8 md:grid-cols-2 lg:grid-cols-3">
        {classes.map((item) => (
          <ClassesCard key={item._id} item={item} />
        ))}
      </div>
      <div className="pt-4 text-center">
        <Link
          to="/classes"
          className="px-10 py-3 text-base font-semibold text-white rounded-md shadow bg-gradient-to-r from-sky-500 to-indigo-800 focus:outline-none "
        >
          See All Course
        </Link>
      </div>
    </section>
  );
};

export default PopularClasses;
