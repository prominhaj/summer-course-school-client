import React from "react";
import LoadingItem from "./LoadingItem";

const CardLoading = ({ feedBack }) => {
  return (
    <div className="grid gap-5 py-5 md:py-8 md:grid-cols-2 lg:grid-cols-3">
      <LoadingItem feedBack={feedBack} />
      <LoadingItem feedBack={feedBack} />
      <LoadingItem feedBack={feedBack} />
      <LoadingItem feedBack={feedBack} />
      <LoadingItem feedBack={feedBack} />
      <LoadingItem feedBack={feedBack} />
    </div>
  );
};

export default CardLoading;
