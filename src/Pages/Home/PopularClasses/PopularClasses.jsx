import React, { useEffect, useState } from "react";
import ClassesCard from "../../../Components/ClassesCard/ClassesCard";
import axios from "axios";
import SectionTitle from "../../../Components/SectionTitle/SectionTitle";
import { Link } from "react-router-dom";
import CardLoading from "../../../Components/CardLoading/CardLoading";

const PopularClasses = () => {
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
    <section className="container px-5 py-3 mx-auto md:py-8">
      <SectionTitle hading="Popular Classes" />
      <div>
        {loading ? (
          <div className="py-5 md:py-8">
            <CardLoading />
          </div>
        ) : (
          <div className="grid gap-5 py-5 md:py-8 md:grid-cols-2 lg:grid-cols-3">
            {classes.map((item) => (
              <ClassesCard key={item._id} item={item} />
            ))}
          </div>
        )}
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
