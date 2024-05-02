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
    <div className="border-4 border-gray-400 text-center bg-white rounded-2xl p-5 flex items-center flex-col w-1/3">
      <div className="flex flex-col items-center gap-5">
        <h1 className="text-2xl underline underline-offset-2 text-yellow-500 font-bold tracking-wider">
          {title}
        </h1>
        <Image
          src={authorImage}
          alt="Author Image"
          className="rounded-full w-40 h-60"
        />
        <p>{author}</p>
        <p>{description}</p>
      </div>
    </div>
  );
};

export default Reviews;
