// import Swiper core and required modules
import { Navigation, Pagination, A11y, Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/autoplay";

import { Slide } from "../Slide/Slide";

export const MainSlider: React.FC = () => {
  return (
    <div className="px-10">
      <Swiper
        className="w-full"
        // install Swiper modules
        modules={[Navigation, Pagination, A11y, Autoplay]}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
      >
        <SwiperSlide className="min-h-[calc(100vh-20rem)] rounded-4xl bg-white">
          <Slide />
        </SwiperSlide>
        <SwiperSlide className="min-h-[calc(100vh-20rem)] rounded-4xl bg-white">
          <Slide />
        </SwiperSlide>
        <SwiperSlide className="min-h-[calc(100vh-20rem)] rounded-4xl bg-white">
          <Slide />
        </SwiperSlide>
        <SwiperSlide className="min-h-[calc(100vh-20rem)] rounded-4xl bg-white">
          <Slide />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};
