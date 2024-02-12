import React from "react";
import ClassesCard from "../../../Components/ClassesCard/ClassesCard";
import { useLoaderData } from "react-router-dom";

const CategoryClasses = () => {
  const data = useLoaderData();
  const { allClasses } = data;
  return (
    <section className="flex-1 w-full">
      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3">
        {allClasses?.map((item) => (
          <ClassesCard key={item._id} item={item} />
        ))}
      </div>
    </section>
  );
};

export default CategoryClasses;
