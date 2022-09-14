import React, { useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import MainSliderImage from "../../public/assets/images/single-slider/main-image.png";
import thumb1 from "../../public/assets/images/single-slider/thumb1.png";
import thumb2 from "../../public/assets/images/single-slider/thumb2.png";
import thumb3 from "../../public/assets/images/single-slider/thumb3.png";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";

// import required modules
import { FreeMode, Navigation, Thumbs } from "swiper";
import Image from "next/image";

const ProductSLider = () => {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);

  return (
    <>
      <Swiper
        spaceBetween={10}
        navigation={false}
        thumbs={{
          swiper: thumbsSwiper && !thumbsSwiper.destroyed ? thumbsSwiper : null,
        }}
        modules={[FreeMode, Navigation, Thumbs]}
        className="mySwiper2"
      >
        <SwiperSlide>
          <Image src={MainSliderImage} width={721} height={232} />
        </SwiperSlide>
        <SwiperSlide>
          <Image src={thumb1} width={721} height={232} />
        </SwiperSlide>
        <SwiperSlide>
          <Image src={thumb2} width={721} height={232} />
        </SwiperSlide>
        <SwiperSlide>
          <Image src={thumb3} width={721} height={232} />
        </SwiperSlide>
      </Swiper>
      <Swiper
        onSwiper={setThumbsSwiper}
        spaceBetween={20}
        slidesPerView={3}
        freeMode={true}
        watchSlidesProgress={true}
        modules={[FreeMode, Navigation, Thumbs]}
        className="mySwiper"
      >
        <SwiperSlide>
          <Image src={MainSliderImage} width={106} height={50} />
        </SwiperSlide>
        <SwiperSlide>
          <Image src={thumb1} width={106} height={50} />
        </SwiperSlide>
        <SwiperSlide>
          <Image src={thumb2} width={106} height={50} />
        </SwiperSlide>
        <SwiperSlide>
          <Image src={thumb3} width={106} height={50} />
        </SwiperSlide>
      </Swiper>
    </>
  );
};
export default ProductSLider;
