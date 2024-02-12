import { useEffect, useState } from "react";
import CardLoading from "../../../Components/CardLoading/CardLoading";
import ClassesCard from "../../../Components/ClassesCard/ClassesCard";
import useLoadData from "../../../Hooks/useLoadData/useLoadData";
import axios from "axios";
import CompPagination from "../../../Components/Pagination/CompPagination";

const AllClasses = () => {
  const [data, dataLoading] = useLoadData("/total-classes-count");
  const [loading, setLoading] = useState(true);
  const [{ allClasses }, setAllClasses] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [classesPerPage] = useState(6);
  const totalPages = Math.ceil(data?.totalDataCount / classesPerPage);

  const handleChange = (event, value) => {
    setCurrentPage(value);
  };

  useEffect(() => {
    setLoading(true);
    axios
      .get(
        `http://localhost:3000/all-classes?page=${currentPage}&limit=${classesPerPage}`
      )
      .then((res) => {
        setAllClasses(res.data);
        setLoading(false);
      });
  }, [currentPage, classesPerPage]);

  return (
    <section className="flex-1 w-full">
      <h2 className="mb-4 text-xl font-semibold sm:text-2xl dark:text-gray-200">
        Total Classes: {data.totalDataCount}
      </h2>
      {loading ? (
        <CardLoading />
      ) : (
        <>
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3">
            {allClasses?.map((item) => (
              <ClassesCard key={item._id} item={item} />
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

export default AllClasses;
