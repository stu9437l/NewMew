import Link from "next/link";
import React from "react";
import InlineTab from "../common/InlineTab";
import ProductCard from "../common/productCard";
import SectionTitle from "../common/Section_Title";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper";
import "swiper/css";
import "swiper/css/scrollbar";
import "swiper/css/pagination";

const Treding = () => {
  const pagination = {
    clickable: true,
    // renderBullet: function (index, className) {
    //   return '<span class="' + className + '">' + (index + 1) + "</span>";
    // },
  };
  return (
    <>
      <SectionTitle subtitle="Top Products" mainTitle="Trending products" />
      <div className="container">
        <div className="d-flex align-itmes-center justify-content-between">
          <InlineTab />
          <Link href="/">
            <a className="btn view-more-btn">View More</a>
          </Link>
        </div>
        <Swiper
          modules={[Pagination]}
          spaceBetween={20}
          slidesPerView={4}
          onSlideChange={() => console.log("slide change")}
          onSwiper={(swiper) => console.log(swiper)}
          pagination={pagination}
          className="swiper-padding"
        >
          <SwiperSlide>
            <ProductCard />
          </SwiperSlide>
          <SwiperSlide>
            <ProductCard />
          </SwiperSlide>
          <SwiperSlide>
            <ProductCard />
          </SwiperSlide>
          <SwiperSlide>
            <ProductCard />
          </SwiperSlide>
          <SwiperSlide>
            <ProductCard />
          </SwiperSlide>
          <SwiperSlide>
            <ProductCard />
          </SwiperSlide>
        </Swiper>
      </div>
    </>
  );
};

export default Treding;
