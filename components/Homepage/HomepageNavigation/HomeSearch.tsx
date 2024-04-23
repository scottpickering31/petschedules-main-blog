import Image from "next/image";
import React from "react";
import MagnifyingGlass from "../../../public/svg/NavIcons/MagnifyingGlass.svg";
import Cross from "../../../public/svg/NavIcons/Cross.svg";

function HomeSearch({
  setSearch,
  search,
}: {
  setSearch: React.Dispatch<React.SetStateAction<boolean>>;
  search: boolean;
}) {
  const handleClick = () => {
    setSearch((prevState) => !prevState);
  };

  return (
    <button onClick={handleClick}>
      {!search ? (
        <Image
          src={MagnifyingGlass}
          alt="PetSchedules Logo"
          width={30}
          height={30}
        />
      ) : (
        <Image src={Cross} alt="" width={30} height={30} />
      )}
    </button>
  );
}

export default HomeSearch;
