import React from "react";

const Button = ({ variant, children }) => {
  return (
    <button
      className={`px-3 py-2 text-sm font-semibold text-white rounded-md shadow focus:outline-none ${
        variant === "primary" && "bg-indigo-500"
      } ${variant === 'secondary' && 'bg-gray-500'} ${variant === 'red' && 'bg-red-600'}`}
    >
      {children}
    </button>
  );
};

export default Button;
