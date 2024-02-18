import React from "react";
import Header from "../../Components/Shared/Header/Header";
import { Outlet } from "react-router-dom";
import Footer from "../../Components/Shared/Footer/Footer";
import useAuth from "../../Hooks/useAuth/useAuth";
import { ScaleLoader } from "react-spinners";

const Main = () => {
  const { loading } = useAuth();
  return (
    <>
      {loading ? (
        <h3 className="h-[100vh] w-full flex items-center justify-center text-4xl font-bold">
          <ScaleLoader color="#36d7b7" />
        </h3>
      ) : (
        <>
          <Header />
          <Outlet />
          <Footer />
        </>
      )}
    </>
  );
};

export default Main;
