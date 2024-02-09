import React from "react";
import LoadingItem from "./LoadingItem";

const CardLoading = () => {
  return (
    <div className="grid gap-5 md:grid-cols-3">
      <LoadingItem />
      <LoadingItem />
      <LoadingItem />
      <LoadingItem />
    </div>
  );
};

export default CardLoading;
