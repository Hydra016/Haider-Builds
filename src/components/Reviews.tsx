import React from "react";
import Review from "./Review";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { reviews } from "../libs/Reviews";

const Reviews = () => {
  return (
    <div id="testimonials" className="w-full md:px-20 px-5 pb-5 ">
      <div className="w-full flex justify-center">
          <p className="mb-5 text-5xl font-black text-secondary-text-color">
            REVIEWS
          </p>
        </div>
      <div className="md:grid grid-cols-8 gap-4">
      <div className="md:col-span-7">
        
        <Swiper
          spaceBetween={20}
          slidesPerView={1.5}
          loop={true}
          autoplay={{
            delay: 2000,
            disableOnInteraction: false,
          }}
        >
          {reviews.map((review, i) => (
            <SwiperSlide key={i}>
              {review && <Review review={review} />}
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      <div className="md:block hidden py-20 text-5xl font-black text-zinc-800">
        <p className="md:rotate-90">Testimonials</p>
      </div>
      </div>
    </div>
  );
};

export default Reviews;
