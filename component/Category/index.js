import React from "react";
import BodyTitle from "../common/Body_Title";
import CategoryCard from "../common/Category_card";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper";
import "swiper/css";
import "swiper/css/scrollbar";
import "swiper/css/pagination";

const Category = () => {
  const pagination = {
    clickable: true,
    // renderBullet: function (index, className) {
    //   return '<span class="' + className + '">' + (index + 1) + "</span>";
    // },
  };
  return (
    <section className="category-section">
      <div className="container">
        <BodyTitle />
        <Swiper
          modules={[Pagination]}
          spaceBetween={20}
          slidesPerView={5}
          onSlideChange={() => console.log("slide change")}
          onSwiper={(swiper) => console.log(swiper)}
          pagination={pagination}
        >
          <SwiperSlide>
            <CategoryCard />
          </SwiperSlide>
          <SwiperSlide>
            <CategoryCard />
          </SwiperSlide>
          <SwiperSlide>
            <CategoryCard />
          </SwiperSlide>
          <SwiperSlide>
            <CategoryCard />
          </SwiperSlide>
          <SwiperSlide>
            <CategoryCard />
          </SwiperSlide>
          <SwiperSlide>
            <CategoryCard />
          </SwiperSlide>
        </Swiper>
      </div>
    </section>
  );
};

export default Category;
