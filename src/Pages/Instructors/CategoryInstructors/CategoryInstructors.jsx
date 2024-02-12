import React from "react";
import { useLoaderData } from "react-router-dom";
import AllInstructorsCard from "../../../Components/AllInstructorsCard/AllInstructorsCard";

const CategoryInstructors = () => {
  const data = useLoaderData();

  const { allInstructors } = data;

  return (
    <section className="flex-1 w-full">
      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3">
        {allInstructors?.map((item) => (
          <AllInstructorsCard key={item._id} item={item} />
        ))}
      </div>
    </section>
  );
};

export default CategoryInstructors;
