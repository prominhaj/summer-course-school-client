import React from "react";
import Header from "../../Components/Shared/Header/Header";
import { Outlet } from "react-router-dom";
import Footer from "../../Components/Shared/Footer/Footer";
import useAuth from "../../Hooks/useAuth/useAuth";
import { LinearProgress } from "@mui/material";

const Main = () => {
  const { loading } = useAuth();
  return (
    <>
      {loading && <LinearProgress />}
      <Header />
      <Outlet />
      <Footer />
    </>
  );
};

export default Main;
