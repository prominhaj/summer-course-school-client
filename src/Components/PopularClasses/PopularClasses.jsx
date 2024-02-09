import React from "react";
import ClassesCard from "../ClassesCard/ClassesCard";

const PopularClasses = () => {
  return (
    <section className="container px-5 mx-auto">
      <div className="grid md:grid-cols-3">
        <ClassesCard />
      </div>
    </section>
  );
};

export default PopularClasses;
