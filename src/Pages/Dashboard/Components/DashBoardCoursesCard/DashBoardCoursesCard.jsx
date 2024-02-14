import { Avatar } from "@mui/material";
import "primereact/resources/themes/lara-light-cyan/theme.css";
import { ProgressBar } from "primereact/progressbar";
import Button from "../../../../Components/Button/Button";

const DashBoardCoursesCard = () => {
  return (
    <div
      className="relative z-10 bg-no-repeat shadow-lg shadow-gray-600 bg-cover rounded-lg h-full max-h-[400px]"
      style={{
        backgroundImage: `url(https://i.ibb.co/C8gGzhv/ui-ux-design.jpg)`,
      }}
    >
      <div className="before:bg-gray-800 before:opacity-70 before:w-full before:h-full before:absolute before:-z-10">
        <div className="p-5 space-y-3 font-bold text-gray-200 lg:space-y-4">
          <div className="flex flex-wrap items-center gap-2">
            <Avatar />
            <h4>Falid Farhan</h4>
          </div>
          <h2 className="text-xl lg:text-2xl">Digital Marketing</h2>
          <ProgressBar value={40}></ProgressBar>
          <h4 className="text-lg lg:text-xl">Enroll Data: 1.2.2024</h4>
          <Button
            className={"block text-center"}
            variant={"secondary"}
            link={"/"}
          >
            Continue Course
          </Button>
        </div>
      </div>
    </div>
  );
};

export default DashBoardCoursesCard;
