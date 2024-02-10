import { Avatar } from "@mui/material";

const FeedBack = () => {
  return (
    <div className="dark:bg-[#0E1528] p-3 sm:p-5 bg-[#FFFFFF] border dark:border-gray-700 rounded-lg flex flex-col md:flex-row items-center md:items-start gap-3">
      <div>
        <Avatar
          alt="Profile Logo"
          src="https://learnwithsumit.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FRafe-Uddaraj-Official.7899d465.jpg&w=48&q=75"
        />
      </div>
      <div>
        <div className="text-center md:text-start">
          <h2 className="sm:text-[15px] text-[12px] text-inherit block dark:text-gray-200 font-serif">
            Rafe uddaraj Official
          </h2>
          <span className="text-gray-800 text-[15px] sm:text-base dark:text-gray-300">
            <small>1.02.2024</small>
          </span>
        </div>
        <div className="mt-2">
          <p className="text-inherit dark:text-gray-200">
            <small>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iure, at
              non! A molestias ab, veniam excepturi quis ex cupiditate natus
              deserunt voluptatibus, fugiat voluptate quos cum at distinctio
              facilis obcaecati. Consequuntur mollitia maiores delectus, autem
              nemo doloribus eveniet molestiae quos, praesentium adipisci
              eligendi eos ullam quas. Autem deleniti consectetur aliquid?
            </small>
          </p>
        </div>
      </div>
    </div>
  );
};

export default FeedBack;
