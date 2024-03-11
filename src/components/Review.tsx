import { Review as ReviewType } from "@/types/Review";
import React from "react";

interface Props {
  review: ReviewType;
}

const Review = ({ review }: Props) => {
  return (
    <div className="relative flex flex-col-reverse md:grid grid-cols-3 gap-4 bg-secondary-color p-5 rounded-xl hover:cursor-grab active:cursor-grabbing">
      <div className="review-img hidden md:block">
        <img src="/vector.png" className="w-28" />
      </div>
      <div className="col-span-2 md:py-10 md:px-10">
        <p className="font-black text-4xl ">{review.name}</p>
        <p className="mt-5 ">{review.content}</p>
      </div>
      <div className="">
        <img className="rounded-xl" src={review.image} />
      </div>
    </div>
  );
};

export default Review;
