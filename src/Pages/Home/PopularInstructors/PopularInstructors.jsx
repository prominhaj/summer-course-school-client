import React, { useEffect, useState } from "react";
import SectionTitle from "../../../Components/SectionTitle/SectionTitle";
import axios from "axios";
import InstructorsCard from "../../../Components/InstructorsCard/InstructorsCard";
import CardLoading from "../../../Components/CardLoading/CardLoading";
import Button from "../../../Components/Button/Button";

const PopularInstructors = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    axios("http://localhost:3000/instructors-popular?limit=4").then((res) => {
      setData(res.data);
      setLoading(false);
    });
  }, []);

  const { totalPopularInstructors, popularInstructors } = data;

  const handleAllInstructors = () => {
    setLoading(true);
    axios("http://localhost:3000/instructors-popular").then((res) => {
      setData(res.data);
      setLoading(false);
    });
  };

  return (
    <section className="py-8 mt-8 bg-gray-200 dark:bg-gray-800 md:py-10">
      <div className="container px-5 mx-auto">
        <SectionTitle hading="Popular Instructors" />
        {loading ? (
          <div className="py-5 md:py-8">
            <CardLoading />
          </div>
        ) : (
          <div className="grid grid-cols-1 gap-5 py-8 md:gap-8 md:py-8 lg:grid-cols-2">
            {popularInstructors?.map((item) => (
              <InstructorsCard key={item._id} item={item} />
            ))}
          </div>
        )}
        {totalPopularInstructors > 4 && (
          <div
            className={`pt-4 text-center ${
              popularInstructors.length > 4 && "hidden"
            }`}
          >
            <Button
              onClick={handleAllInstructors}
              variant={"primary"}
              className="px-8 py-3 text-base sm:px-20 md:text-xl"
            >
              See All Instructors
            </Button>
          </div>
        )}
      </div>
    </section>
  );
};

export default PopularInstructors;
