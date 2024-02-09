import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination, Autoplay } from "swiper/modules";

// Banner Image
import bannerImg1 from "../../../assets/Home-Banner/Banner-1.png";
import bannerImg2 from "../../../assets/Home-Banner/Banner-2.png";
import bannerImg3 from "../../../assets/Home-Banner/Banner-3.png";
import bannerImg4 from "../../../assets/Home-Banner/Banner-4.png";
import bannerImg5 from "../../../assets/Home-Banner/Banner-5.png";
import bannerImg6 from "../../../assets/Home-Banner/Banner-6.png";

// Banner Items
const bannerItems = [
  {
    name: "Banner 1",
    image: bannerImg1,
  },
  {
    name: "Banner 2",
    image: bannerImg2,
  },
  {
    name: "Banner 3",
    image: bannerImg3,
  },
  {
    name: "Banner 4",
    image: bannerImg4,
  },
  {
    name: "Banner 5",
    image: bannerImg5,
  },
  {
    name: "Banner 6",
    image: bannerImg6,
  },
];

const BannerSection = () => {
  return (
    <div className="container px-5 mx-auto">
      <Swiper
        slidesPerView={1}
        spaceBetween={30}
        loop={true}
        centeredSlides={true}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        pagination={{
          dynamicBullets: true,
        }}
        modules={[Pagination, Autoplay]}
      >
        {bannerItems.map((item) => (
          <SwiperSlide key={item.name}>
            <div>
              <img
                className="w-full h-full xl:h-[650px] py-3 sm:py-5 rounded-xl"
                src={item.image}
                alt={item.name}
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default BannerSection;
