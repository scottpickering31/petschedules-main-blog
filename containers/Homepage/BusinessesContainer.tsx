import React from "react";
import Image from "next/image";
import Eclipse from "../../public/svg/Separators/Eclipse.svg";

const BusinessesContainer = () => {
  return (
    <div className="m-0 h-full w-1/2">
      <Image src={Eclipse} alt="PetSchedules Team" className="bg-white" />
    </div>
  );
};

export default BusinessesContainer;
