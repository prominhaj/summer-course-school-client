import React from "react";
import SectionTitle from "../../../Components/SectionTitle/SectionTitle";
import FeedBack from "../../../Components/FeedBack/FeedBack";
import Button from "../../../Components/Button/Button";
import { useQuery } from "react-query";
import axios from "axios";

const StudentsFeedBack = () => {
  const {
    data: feedbacks,
    refetch,
    isLoading,
  } = useQuery({
    queryKey: ["FeedBack"],
    queryFn: async () => {
      const res = await axios.get("http://localhost:3000/students-feedback");
      return res.data;
    },
  });

  return (
    <section className="py-8 md:py-10 dark:bg-[#303c5b3b] bg-[#FDF8FE]">
      <div className="container px-5 mx-auto">
        <SectionTitle hading="Students FeedBack" />
        <div className="grid gap-5 pt-5 md:pt-8 md:grid-cols-2 lg:grid-cols-3">
          {feedbacks?.map((item) => (
            <FeedBack key={item._id} item={item} />
          ))}
        </div>
        <form className="py-8 mx-auto lg:w-1/2">
          <textarea
            className="block px-3 w-full resize-none rounded-md border-0 py-1.5 text-gray-900 dark:bg-gray-800 shadow-sm ring-1 ring-inset dark:ring-gray-600 ring-gray-300 dark:text-gray-100 placeholder:text-gray-400 sm:text-sm sm:leading-6"
            name=""
            rows="3"
            placeholder="Please Your FeedBack"
          ></textarea>
          <div className="text-end">
            <Button className={"mt-4 !px-10 "} variant={"primary"}>
              Send
            </Button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default StudentsFeedBack;
