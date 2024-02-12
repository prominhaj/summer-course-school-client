import React, { useEffect } from "react";
import { Outlet, useLocation, useNavigate } from "react-router-dom";
import useLoadData from "../../../Hooks/useLoadData/useLoadData";
import AllCategoryLeftMenu from "../../../Components/AllCategoryLeftMenu/AllCategoryLeftMenu";
import CategoryLoading from "../../../Components/CategoryLoading/CategoryLoading";

const Classes = () => {
  const [data, dataLoading] = useLoadData("/all-classes");
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    if (location.pathname === "/classes") {
      navigate("/classes/all-classes");
    }
  }, [location.pathname, navigate]);

  const { allCategory } = data;

  return (
    <main className="bg-white dark:bg-[#0E1528] py-5">
      <div className="container px-5 mx-auto">
        <section className="flex flex-col items-start gap-5 lg:flex-row">
          {dataLoading ? (
            <CategoryLoading />
          ) : (
            <AllCategoryLeftMenu
              data={allCategory}
              allRoute={"/classes/all-classes"}
              firstText={"All Classes"}
              route={"classes"}
            />
          )}
          <Outlet />
        </section>
      </div>
    </main>
  );
};

export default Classes;
