import React from "react";

const Button = ({ variant, type, className, children, disabled }) => {
  return (
    <button
      disabled={disabled && disabled}
      type={type && type}
      className={`px-3 py-2 text-sm font-semibold text-white rounded-md shadow focus:outline-none ${
        variant === "primary" && "bg-indigo-500"
      } ${variant === "secondary" && "bg-gray-500"} ${
        variant === "red" && "bg-red-600"
      } ${className && className}`}
    >
      {children}
    </button>
  );
};

export default Button;
