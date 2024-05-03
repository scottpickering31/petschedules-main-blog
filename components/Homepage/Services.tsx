"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Arrow from "@/public/svg/ServicesImages/arrow.svg";

interface Props {
  name: string;
  image: string;
}

const Services = ({ name, image }: Props) => {
  const [hover, setHover] = useState("");

  const handleHover = () => {
    setHover("translate-x-4 ease-in-out duration-300");
  };
  return (
    <div
      className="hover:scale-105 transition-transform ease-in-out duration-300 z-50"
      onMouseEnter={handleHover}
      onMouseLeave={() => setHover("ease-in-out duration-300")}
    >
      <Link href="/?modal=true" scroll={false}>
        <div className="border-4 border-gray-400 rounded-2xl bg-slate-100 shadow-lg h-full flex items-center flex-row">
          <div className="p-10 w-1/3 justify-end flex">
            <Image src={image} alt={name} width={50} height={50} />
          </div>
          <div className="flex flex-row gap-2 items-center justify-center w-1/2">
            <p>{name}</p>
            <div className={hover}>
              <Image src={Arrow} alt="ArrowRight" width={25} height={25} />
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default Services;
