import React, { useState } from "react";
import SectionTitle from "../../../Components/SectionTitle/SectionTitle";
import FeedBack from "../../../Components/FeedBack/FeedBack";
import Button from "../../../Components/Button/Button";
import { useQuery } from "react-query";
import "./StudentsFeedBack.css";
import axios from "axios";
import CardLoading from "../../../Components/CardLoading/CardLoading";
import useAuth from "../../../Hooks/useAuth/useAuth";
import useAxiosSecure from "../../../Hooks/useAxiosSecure/useAxiosSecure";
import moment from "moment";
import { toast } from "react-toastify";

const StudentsFeedBack = () => {
  const [isHidden, setIsHidden] = useState(true);
  const { user } = useAuth();
  const [axiosSecure] = useAxiosSecure();

  const {
    data: feedbacks,
    refetch,
    isLoading,
  } = useQuery({
    queryKey: ["FeedBack"],
    queryFn: async () => {
      const res = await axios.get("http://localhost:3000/students-feedback");
      return res.data;
    },
  });

  const handleFeedBack = (e) => {
    e.preventDefault();
    const feedBack = e.target.feedBack.value;
    const feedBackData = {
      Name: user?.displayName,
      Date: moment().format("YYYY MM D"),
      Details: feedBack,
      Photo: user?.photoURL,
      Email: user?.email,
    };
    if (feedBack) {
      axiosSecure
        .post("/students-feedback", { feedBack: feedBackData })
        .then((res) => {
          if (res.data.insertedId) {
            e.target.feedBack.value = "";
            refetch();
            toast.success("SuccessFul Your FeedBack");
          }
        });
    }
  };

  return (
    <section className="py-8 md:py-10 dark:bg-[#303c5b3b] bg-[#FDF8FE]">
      <div className="container px-5 mx-auto">
        <SectionTitle hading="Students FeedBack" />
        <div className="relative">
          {isLoading ? (
            <div className="pt-5 md:pt-8">
              <CardLoading feedBack={true} />
            </div>
          ) : (
            <>
              <div
                className={`pt-5 md:pt-8 grid sm:grid-cols-2 lg:grid-cols-3 gap-5 ${
                  isHidden && "h-[500px] overflow-y-hidden"
                }`}
              >
                {feedbacks?.map((item) => (
                  <FeedBack key={item._id} item={item} />
                ))}
              </div>
            </>
          )}
          <div
            className={`absolute inset-x-0 bottom-0 flex justify-center pt-32 pb-8 bg-gradient-to-t from-gray-100 dark:from-slate-900 ${
              isHidden || "hidden"
            }`}
          >
            <Button
              onClick={() => setIsHidden(false)}
              variant={"primary"}
              className="py-3"
            >
              See All FeedBack
            </Button>
          </div>
        </div>
        {user && (
          <form onSubmit={handleFeedBack} className="py-8 mx-auto lg:w-1/2">
            <textarea
              required
              disabled={user ? false : true}
              className="block px-3 w-full resize-none rounded-md border-0 py-1.5 text-gray-900 dark:bg-gray-800 shadow-sm ring-1 ring-inset dark:ring-gray-600 ring-gray-300 dark:text-gray-100 placeholder:text-gray-400 sm:text-sm sm:leading-6"
              name="feedBack"
              rows="3"
              placeholder="Please Your FeedBack"
            ></textarea>
            <div className="text-end">
              <Button
                type={"submit"}
                disabled={user ? false : true}
                className={"mt-4 !px-10 "}
                variant={"primary"}
              >
                Send
              </Button>
            </div>
          </form>
        )}
      </div>
    </section>
  );
};

export default StudentsFeedBack;
