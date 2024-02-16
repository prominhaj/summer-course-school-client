import { Avatar, AvatarGroup } from "@mui/material";
import "primereact/resources/themes/lara-light-cyan/theme.css";
import Button from "../../../../Components/Button/Button";

const DashBoardCoursesCard = ({ item }) => {
  const { _id, image, instructorName, name, profilePhoto, enrollEmail } = item;

  return (
    <div
      className="relative z-10 border transition-all duration-500 hover:scale-[1.03] cursor-pointer border-gray-600 bg-no-repeat shadow-lg dark:border-gray-800 shadow-gray-600 bg-cover rounded-lg h-full max-h-[400px]"
      style={{
        backgroundImage: `url(${image})`,
      }}
    >
      <div className="before:bg-gray-800 before:opacity-70 before:w-full before:h-full before:absolute before:-z-10">
        <div className="p-5 space-y-3 font-bold text-gray-200 lg:space-y-4">
          <div className="flex flex-wrap items-center gap-2">
            <Avatar src={profilePhoto && profilePhoto} />
            <h4>{instructorName}</h4>
          </div>
          <h2 className="text-xl lg:text-2xl">{name}</h2>
          <div className="flex justify-start">
            <AvatarGroup max={4}>
              {enrollEmail?.map((item) => (
                <Avatar
                  key={item}
                  alt={item?.substr(0, 1)}
                  src={item?.substr(0, 1)}
                />
              ))}
            </AvatarGroup>
          </div>
          <Button
            className={"block text-center"}
            variant={"secondary"}
            link={`/course-dashboard/${_id}`}
          >
            Continue Course
          </Button>
        </div>
      </div>
    </div>
  );
};

export default DashBoardCoursesCard;
