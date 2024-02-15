import React from "react";
import { Link } from "react-router-dom";

const Button = ({
  variant,
  type,
  className,
  children,
  disabled,
  onClick,
  link,
}) => {
  return (
    <>
      {link ? (
        <Link
          to={link && link}
          onClick={onClick && onClick}
          disabled={disabled && disabled}
          type={type && type}
          className={`px-3 py-2 text-base font-semibold text-white rounded-md shadow focus:outline-none ${
            variant === "primary" &&
            "text-base font-semibold text-white rounded-md shadow bg-gradient-to-r from-sky-500 to-indigo-800 focus:outline-none"
          } ${
            variant === "secondary" &&
            "bg-gradient-to-r from-violet-500 to-fuchsia-500 py-2 sm:text-lg"
          } ${
            variant === "soldOut" &&
            "bg-gradient-to-r from-cyan-500 to-blue-500 py-2 sm:text-lg"
          } ${
            variant === "exit" &&
            "bg-gradient-to-r from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90%"
          } ${className && className}`}
        >
          {children}
        </Link>
      ) : (
        <button
          onClick={onClick && onClick}
          disabled={disabled && disabled}
          type={type && type}
          className={`px-3 py-2 text-base font-semibold text-white rounded-md shadow focus:outline-none ${
            variant === "primary" &&
            "text-base font-semibold text-white rounded-md shadow bg-gradient-to-r from-sky-500 to-indigo-800 focus:outline-none"
          } ${
            variant === "secondary" &&
            "bg-gradient-to-r from-violet-500 to-fuchsia-500 py-2 sm:text-lg"
          } ${
            variant === "soldOut" &&
            "bg-gradient-to-r from-cyan-500 to-blue-500 py-2 sm:text-lg"
          } ${
            variant === "exit" &&
            "bg-gradient-to-r from-indigo-500 from-40% via-sky-500 via-70% to-green-500 to-100%"
          } ${className && className}`}
        >
          {children}
        </button>
      )}
    </>
  );
};

export default Button;
