import React from "react";
import Image, { StaticImageData } from "next/image";

interface Props {
  image: StaticImageData;
  information: string;
  isInverted: boolean;
}

const HomepageContainers = ({ image, information, isInverted }: Props) => {
  return (
    <div>
      <div className="flex flex-row w-full border-b-black items-center justify-center">
        {isInverted ? (
          <>
            <h1>{information}</h1>
            <Image src={image} alt="PetSchedules Team" />
          </>
        ) : (
          <>
            <Image src={image} alt="PetSchedules Team" />
            <h1>{information}</h1>
          </>
        )}
      </div>
    </div>
  );
};

export default HomepageContainers;
