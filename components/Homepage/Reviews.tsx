import Image, { StaticImageData } from "next/image";
import React from "react";

interface Props {
  title: string;
  description: string;
  author: string;
  authorImage: StaticImageData;
}

const Reviews = ({ title, description, author, authorImage }: Props) => {
  return (
    <div className="border-4 border-gray-400 text-center bg-white rounded-2xl p-10 flex items-center flex-col w-1/3">
      <div className="flex flex-col items-center gap-5">
        <h1 className="text-2xl underline underline-offset-2 text-yellow-500 font-bold tracking-wider">
          {title}
        </h1>
        <Image
          src={authorImage}
          alt="Author Image"
          className="rounded-full w-20 h-20"
        />
        <p>{author}</p>
        <div className="border-4 border-gray-300 rounded-2xl p-5">
          <p className="overflow-auto h-40">{description}</p>
        </div>
      </div>
    </div>
  );
};

export default Reviews;
