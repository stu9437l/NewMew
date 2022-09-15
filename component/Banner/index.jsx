import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Navigation } from "swiper";
import "swiper/css/navigation";

const Banner = () => {
  return (
    <Swiper navigation={true} modules={[Navigation]}>
      <SwiperSlide>
        <div className="hero-banner overflow-hidden">
          <div className="container">
            <div className="row">
              <div className="col-5 offset-7">
                <h4 className="mb-3">New Collection</h4>
                <h2 className="mb-4">Limitless Show Your Style</h2>
                <p className="mb-0">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum
                  ratione ut perferendis id, minus quisquam eos autem vitae
                  beatae voluptas.
                </p>
                <p className="current-date">02 / 04</p>
              </div>
            </div>
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="hero-banner overflow-hidden">
          <div className="container">
            <div className="row">
              <div className="col-5 offset-7">
                <h4 className="mb-3">New Collection</h4>
                <h2 className="mb-4">Limitless Show Your Style</h2>
                <p className="mb-0">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum
                  ratione ut perferendis id, minus quisquam eos autem vitae
                  beatae voluptas.
                </p>
                <p className="current-date">02 / 04</p>
              </div>
            </div>
          </div>
        </div>
      </SwiperSlide>
    </Swiper>
  );
};

export default Banner;
