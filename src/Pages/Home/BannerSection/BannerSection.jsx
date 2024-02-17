import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-coverflow";
import { EffectCoverflow, Autoplay } from "swiper/modules";
import Button from "../../../Components/Button/Button";
import { Link } from "react-router-dom";

const BannerSection = ({ classes }) => {
  return (
    <section className="container px-5 py-5 mx-auto md:py-10">
      <div className="grid items-center grid-cols-1 gap-8 p-5 bg-gradient-to-r from-gray-300 to-blue-400 rounded-3xl md:p-12 lg:p-16 dark:from-gray-700 dark:to-blue-900 md:grid-cols-2">
        <div className="flex flex-col items-center gap-4 md:items-start">
          <h2 className="text-2xl font-bold leading-tight text-gray-800 sm:text-3xl md:text-4xl dark:text-gray-300">
            SCS
          </h2>
          <h4 className="text-xl font-semibold leading-tight text-transparent md:text-2xl lg:text-3xl bg-clip-text bg-gradient-to-r from-gray-800 to-orange-500 dark:bg-gradient-to-r dark:from-blue-600 dark:to-orange-500 dark:text-transparent">
            Most Popular Course
          </h4>
          <Button className="w-[200px]" variant={"primary"}>
            Get Started
          </Button>
        </div>
        <div>
          <Swiper
            spaceBetween={30}
            slidesPerView={"auto"}
            effect={"coverflow"}
            grabCursor={true}
            autoplay={{
              delay: 3000,
            }}
            centeredSlides={true}
            coverflowEffect={{
              rotate: 50,
              stretch: 0,
              depth: 100,
              modifier: 1,
              slideShadows: true,
            }}
            modules={[EffectCoverflow, Autoplay]}
            breakpoints={{
              100: {
                slidesPerView: 1,
                spaceBetween: 10,
              },
              540: {
                slidesPerView: 2,
                spaceBetween: 20,
              },
              768: {
                slidesPerView: 2,
                spaceBetween: 20,
              },
              1024: {
                slidesPerView: 3,
                spaceBetween: 20,
              },
            }}
          >
            {classes?.map((item) => (
              <SwiperSlide key={item._id}>
                <div className="h-[200px] w-full">
                  <Link to={`/classes/details/${item._id}`}>
                    <img
                      className="w-full h-full rounded-md"
                      src={item?.image}
                    />
                  </Link>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default BannerSection;
