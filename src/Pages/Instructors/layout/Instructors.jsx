import React, { useEffect } from "react";
import { Outlet, useLocation, useNavigate } from "react-router-dom";
import useLoadData from "../../../Hooks/useLoadData/useLoadData";
import AllCategoryLeftMenu from "../../../Components/AllCategoryLeftMenu/AllCategoryLeftMenu";
const Instructors = () => {
  const [data] = useLoadData("/all-instructors");
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    if (location.pathname === "/instructors") {
      navigate("/instructors/all-instructors");
    }
  }, [location.pathname, navigate]);

  const { allCategory } = data;

  return (
    <main className="bg-white dark:bg-[#0E1528] py-5">
      <div className="container px-5 mx-auto">
        <section className="flex flex-col items-start gap-5 lg:flex-row">
          <AllCategoryLeftMenu
            data={allCategory}
            route={"instructors"}
            firstText={"All Instructors"}
            allRoute={"/instructors/all-instructors"}
          />
          <Outlet />
        </section>
      </div>
    </main>
  );
};

export default Instructors;
