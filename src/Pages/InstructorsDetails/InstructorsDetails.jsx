import { Link, useLoaderData } from "react-router-dom";
import useLoadData from "../../Hooks/useLoadData/useLoadData";

const InstructorsDetails = () => {
  const loadData = useLoaderData();
  const { category, email, image, name, popularity, totalCourse } = loadData;
  const [data] = useLoadData(`/instructor-all-classes?email=${email}`);

  console.log(data);
  return (
    <div className="bg-gray-100 dark:bg-[#0E1528] dark:text-gray-300">
      <div className="container px-5 py-5 mx-auto md:py-10">
        <div className="grid gap-5 lg:grid-cols-3">
          <div className="flex flex-col border border-gray-300 lg:col-span-2 dark:border-gray-600 rounded-xl">
            <div className="self-center p-5 md:p-8">
              <img
                className="border-4 rounded-2xl max-h-[100px] sm:max-h-[150px] md:max-h-[200px]"
                src={image}
                alt="image"
              />
            </div>
            <div className="grid items-start gap-3 p-5 bg-gray-300 lg:grid-cols-2 dark:bg-gray-600 rounded-xl">
              <div className="flex flex-col gap-2">
                <h2 className="text-xl font-medium md:text-2xl ">
                  Name: {name}
                </h2>
                <h2 className="text-lg font-medium md:text-xl ">
                  Email: {email}
                </h2>
                {popularity && (
                  <h2 className="text-lg font-medium md:text-xl ">
                    Popularity: {popularity}
                  </h2>
                )}
              </div>
              <div className="flex flex-col space-y-2">
                <h2 className="text-lg font-medium md:text-xl ">
                  Total Course: {totalCourse}
                </h2>
                <h2 className="text-lg font-medium md:text-xl ">
                  Category: {category}
                </h2>
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-3">
            {data.map((item) => (
              <Link
                to={`/classes/details/${item._id}`}
                className="flex items-start gap-3 p-2 bg-white border border-gray-300 rounded-md shadow-xl dark:bg-transparent dark:border-gray-600"
                key={item._id}
              >
                <div>
                  <img
                    className="w-20 h-20 rounded-md md:w-36"
                    src={item.image}
                    alt="Image"
                  />
                </div>
                <div>
                  <h4>{item.name}</h4>
                  <h4 className="font-semibold">
                    {item.price === "Free" ? item.price : <>${item.price}</>}
                  </h4>
                  <p>
                    <small>Available Seats: {item.availableSeats}</small>
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default InstructorsDetails;
