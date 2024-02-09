import React from "react";
import LoadingItem from "./LoadingItem";

const CardLoading = () => {
  return (
    <div className="grid gap-5 py-5 md:py-8 md:grid-cols-2 lg:grid-cols-3">
      <LoadingItem />
      <LoadingItem />
      <LoadingItem />
      <LoadingItem />
      <LoadingItem />
      <LoadingItem />
    </div>
  );
};

export default CardLoading;
