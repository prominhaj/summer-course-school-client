import React, { useEffect, useState } from "react";
import SectionTitle from "../../../Components/SectionTitle/SectionTitle";
import axios from "axios";
import InstructorsCard from "../../../Components/InstructorsCard/InstructorsCard";
import CardLoading from "../../../Components/CardLoading/CardLoading";

const PopularInstructors = () => {
  const [instructors, setInstructors] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    axios("http://localhost:3000/instructors-popular").then((res) => {
      setInstructors(res.data);
      setLoading(false);
    });
  }, []);

  return (
    <section className="container px-5 py-10 mx-auto md:py-12">
      <SectionTitle hading="Popular Instructors" />
      {loading ? (
        <div className="py-5 md:py-8">
          <CardLoading />
        </div>
      ) : (
        <div className="grid grid-cols-1 gap-5 py-8 md:gap-8 md:py-8 lg:grid-cols-2">
          {instructors.map((item) => (
            <InstructorsCard key={item._id} item={item} />
          ))}
        </div>
      )}
    </section>
  );
};

export default PopularInstructors;
