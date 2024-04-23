"use client";

import Image from "next/image";
import Link from "next/link";
import Arrow from "@/public/svg/ServicesImages/arrow.svg";
import { useState } from "react";

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
    <div>
      <Link
        href="/register"
        className="hover:scale-105 transition-transform ease-in-out duration-300"
        onMouseEnter={handleHover}
        onMouseLeave={() => setHover("ease-in-out duration-300")}
      >
        <div className="border-4 border-gray-300 rounded-2xl bg-slate-100 shadow-lg h-full flex items-center justify-evenly flex-row">
          <div className="p-10 w-1/3">
            <Image src={image} alt={name} width={50} height={50} />
          </div>
          <div className="flex flex-row gap-2 items-center justify-center">
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
