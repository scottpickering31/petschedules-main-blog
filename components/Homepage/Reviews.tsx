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
    <div className="border border-black text-center rounded-2xl p-2 flex items-center flex-col w-1/3">
      <h1>{title}</h1>
      <Image
        src={authorImage}
        alt="Author Image"
        className="rounded-full w-24 h-24"
      />
      <p>{author}</p>
      <p>{description}</p>
    </div>
  );
};

export default Reviews;
