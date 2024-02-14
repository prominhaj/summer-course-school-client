import React from "react";

const DashBoardLeaderCard = ({ bgColor, label, value }) => {
  return (
    <div
      className={`flex flex-col items-center w-full border border-gray-200 gap-2 px-3 py-5 rounded-lg ${
        bgColor && bgColor
      }`}
    >
      <h2 className="text-slate-800 tracking-wider text-lg md:text-xl font-bold font-['Open Sans'] leading-none">
        {label}
      </h2>
      <h4 className="text-xl md:text-2xl tracking-widest font-extrabold font-['Open Sans'] leading-normal text-gray-700">
        {value}
      </h4>
    </div>
  );
};

export default DashBoardLeaderCard;
