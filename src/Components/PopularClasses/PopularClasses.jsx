import React, { useEffect, useState } from "react";
import ClassesCard from "../ClassesCard/ClassesCard";
import axios from "axios";

const PopularClasses = () => {
  const [classes, setClasses] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:3000/classes-popular").then((res) => {
      setClasses(res.data);
    });
  }, []);

  return (
    <section className="container px-5 mx-auto">
      <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
        {classes.map((item) => (
          <ClassesCard key={item._id} item={item} />
        ))}
      </div>
    </section>
  );
};

export default PopularClasses;
