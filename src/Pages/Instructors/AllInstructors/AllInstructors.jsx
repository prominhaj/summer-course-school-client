import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import axios from "axios";
import { Pagination } from "@mui/material";
import useLoadData from "../../../Hooks/useLoadData/useLoadData";
import CardLoading from "../../../Components/CardLoading/CardLoading";
import AllInstructorsCard from "../../../Components/AllInstructorsCard/AllInstructorsCard";
import CompPagination from "../../../Components/Pagination/CompPagination";

const AllInstructors = () => {
  const [instructors, setInstructors] = useState([]);
  const [loading, setLoading] = useState(true);

  // Pagination
  const [data] = useLoadData("/total-instructors-count");
  const [currentPage, setCurrentPage] = useState(1);
  const [instructorsPerPage] = useState(6);
  const totalPages = Math.ceil(data?.totalDataCount / instructorsPerPage);

  const handleChange = (event, value) => {
    setCurrentPage(value);
  };

  useEffect(() => {
    setLoading(true);
    const fetchPosts = async () => {
      const res = await axios.get(
        `http://localhost:3000/all-instructors?page=${currentPage}&limit=${instructorsPerPage}`
      );
      setInstructors(res?.data);
      setLoading(false);
    };
    fetchPosts();
  }, [currentPage, instructorsPerPage]);

  const { allInstructors } = instructors;

  return (
    <section className="flex-1 w-full">
      <h2 className="mb-4 text-xl font-semibold sm:text-2xl dark:text-gray-200">
        Total Instructors: {data?.totalDataCount}
      </h2>
      {loading ? (
        <CardLoading />
      ) : (
        <>
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3">
            {allInstructors?.map((item) => (
              <AllInstructorsCard key={item._id} item={item} />
            ))}
          </div>
          {data?.totalDataCount > 6 && (
            <CompPagination
              handleChange={handleChange}
              currentPage={currentPage}
              totalPages={totalPages}
            />
          )}
        </>
      )}
    </section>
  );
};

export default AllInstructors;
