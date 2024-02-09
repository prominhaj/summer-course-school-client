import React, { useEffect, useState } from "react";
import ClassesCard from "../../../Components/ClassesCard/ClassesCard";
import axios from "axios";
import SectionTitle from "../../../Components/SectionTitle/SectionTitle";

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
    </section>
  );
};

export default PopularClasses;
