import React from "react";
import Image from "next/image";
import HomepageSeparator from "../../public/svg/Separators/HomepageSeparator.svg";
import Reviews from "../../components/Homepage/Reviews";
import Placeholder from "../../public/placeholder.png";

const ReviewsContainer = () => {
  return (
    <div className="relative">
      <Image
        src={HomepageSeparator}
        alt="HomepageSeperator"
        className="w-full"
      />
      <div className="absolute inset-0 flex items-center justify-center p-5 flex-col">
        <h1 className="text-center text-2xl font-bold">Reviews</h1>
        <div className="flex flex-row gap-4 w-full">
          <Reviews
            title="lorem"
            author="James Dean"
            description="Really good i liked it"
            authorImage={Placeholder}
          />
          <Reviews
            title="lorem"
            author="Jill Cooper"
            description="not great"
            authorImage={Placeholder}
          />
          <Reviews
            title="lorem"
            author="Bill Bryson"
            description="awesome"
            authorImage={Placeholder}
          />
        </div>
      </div>
    </div>
  );
};

export default ReviewsContainer;
