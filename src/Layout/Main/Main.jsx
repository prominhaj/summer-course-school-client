import React from "react";
import Header from "../../Components/Shared/Header/Header";
import { Outlet } from "react-router-dom";
import Footer from "../../Components/Shared/Footer/Footer";

const Main = () => {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
};

export default Main;
