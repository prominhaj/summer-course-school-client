import { Pagination } from "@mui/material";
import React from "react";

const CompPagination = ({ handleChange, currentPage, totalPages }) => {
  return (
    <div className="pt-8">
      <Pagination
        onChange={handleChange}
        className="flex justify-center py-2 bg-gray-300 rounded-md"
        size="large"
        page={currentPage}
        count={totalPages || 1}
        color="primary"
      />
    </div>
  );
};

export default CompPagination;
