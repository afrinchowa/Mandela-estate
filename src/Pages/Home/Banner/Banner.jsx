import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

const Banner = () => {
  return (
    <Swiper
      className="rounded-2xl w-[78rem] h-[34rem] mt-4"
      // install Swiper modules
      modules={[Navigation, Pagination, Scrollbar, A11y]}
      spaceBetween={50}
      slidesPerView={1}
      navigation
      onSwiper={(swiper) => console.log(swiper)}
      onSlideChange={() => console.log("slide change")}
    >
      <SwiperSlide>
        <div>
        <h2 className=" text-2xl">This is Banner</h2>
        <img src="https://i.ibb.co/cxcb2yq/2151037593.jpg" alt="" />
        
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <img src="https://i.ibb.co/0nN1qj6/Private-Island.jpg" alt="" />
      </SwiperSlide>
      <SwiperSlide>
        <img src="https://i.ibb.co/2Wcvmh2/Villa.jpg" alt="" />
      </SwiperSlide>
      <SwiperSlide>
        <img src="https://i.ibb.co/ZxYG6VK/Mansion.jpg" alt="" />
      </SwiperSlide>
      ...
    </Swiper>
  );
};

export default Banner;