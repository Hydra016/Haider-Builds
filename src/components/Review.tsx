import { Review as ReviewType } from "@/types/Review";
import React from "react";

interface Props {
  review: ReviewType;
}

const Review = ({ review }: Props) => {
  return (
    <div className="relative flex flex-col-reverse md:grid grid-cols-7 gap-4 bg-secondary-color p-5 rounded-xl hover:cursor-grab active:cursor-grabbing h-80">
      <div className="review-img hidden md:block">
        <img src="/Vector.png" className="w-28" />
      </div>
      <div className="col-span-6 md:py-3 md:px-10 z-10 flex flex-col justify-between h-full">
        <div>
          <p className="font-black text-4xl ">{review.name}</p>
          <img src={review.flag} className="w-10" />
        </div>
        <p className="mt-5 md:text-base text-xs">{review.content}</p>
      </div>
    </div>
  );
};

export default Review;
