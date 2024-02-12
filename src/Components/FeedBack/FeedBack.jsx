import { Avatar } from "@mui/material";

const FeedBack = ({ item }) => {
  const { Name, Date, Photo, Details } = item;

  return (
    <div className="dark:bg-[#0E1528] p-3 sm:p-5 bg-[#FFFFFF] border dark:border-gray-700 rounded-lg ">
      <div className="flex flex-col items-center gap-3 md:items-start md:flex-row">
        <Avatar alt="Profile Logo" src={Photo} />
        <div className="text-center md:text-start">
          <h2 className="sm:text-[15px] text-[12px] text-inherit block dark:text-gray-200 font-serif">
            {Name}
          </h2>
          <span className="text-gray-800 text-[15px] sm:text-base dark:text-gray-300">
            <small>{Date}</small>
          </span>
        </div>
      </div>
      <div>
        <div className="mt-2">
          <p className="text-center text-inherit dark:text-gray-200 sm:text-start">
            <small>{Details}</small>
          </p>
        </div>
      </div>
    </div>
  );
};

export default FeedBack;
