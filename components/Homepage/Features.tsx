import React from "react";
import Image, { StaticImageData } from "next/image";

interface Props {
  image: StaticImageData;
  information: string;
  isInverted: boolean;
  title: string;
}

const sharedClasses =
  "border-2 border-gray-500 w-2/3 p-5 rounded-2xl text-2xl h-1/3 mb-10";

const HomepageContainers = ({
  image,
  information,
  isInverted,
  title,
}: Props) => {
  return (
    <div className="w-full px-40 my-20">
      <div className="flex flex-row w-full border-b-black items-center justify-center p-10 shadow-md m-5 rounded-2xl">
        {isInverted ? (
          <div className="flex flex-row items-center gap-5">
            <div className="flex flex-col w-1/2 items-center text-center p-5">
              <h1 className={sharedClasses}>{title}</h1>
              <p>{information}</p>
            </div>
            <Image src={image} alt="PetSchedules Team" className="w-1/2" />
          </div>
        ) : (
          <div className="flex flex-row items-center gap-5">
            <Image src={image} alt="PetSchedules Team" className="w-1/2" />
            <div className="flex flex-col w-1/2 items-center text-center p-5">
              <h1 className={sharedClasses}>{title}</h1>
              <p>{information}</p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default HomepageContainers;
