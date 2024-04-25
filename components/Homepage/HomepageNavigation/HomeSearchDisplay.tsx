import "./HomeSearchStyles.css";
import Image from "next/image";
import Link from "next/link";
import MagnifyingGlassDark from "../../../public/svg/NavIcons/MagnifyingGlassDark.svg";
import { useState, useEffect, useRef } from "react";

function HomeSearchDisplay({ search }: { search: boolean }) {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [searchResults, setSearchResults] = useState("General Information");
  const transitionDiv = search
    ? "transitionDiv mounted"
    : "transitionDiv unmounted";

  const dropdownRef = useRef<HTMLDivElement>(null);

  const dropDownStyles = "px-4 py-2 text-gray-800 hover:bg-fawn w-full";

  const handleClick = () => {
    setIsDropdownOpen((prevState) => !prevState);
  };

  const handleClickOutside = (event: MouseEvent) => {
    if (
      dropdownRef.current &&
      !dropdownRef.current.contains(event.target as Node)
    ) {
      setIsDropdownOpen(false);
    }
  };

  const handleOptionClick = (option: string) => {
    setSearchResults(option);
    setIsDropdownOpen(false); // Close the dropdown after selecting an option
  };

  useEffect(() => {
    if (isDropdownOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isDropdownOpen]);

  return (
    <div className={transitionDiv}>
      <input
        type="text"
        placeholder="...Search Groomers, Trainers, Vets and More!"
        className="p-2 border-4 border-gray-500 rounded-2xl w-1/2 placeholder:text-black focus:placeholder-transparent focus:border-fawn focus:outline-none focus:ring-0"
      />

      <div className="relative w-1/4" ref={dropdownRef}>
        <button
          className="rounded-2xl w-full p-2 overflow-hidden border-gray-500 border-4 bg-white focus:border-fawn"
          onClick={handleClick}
        >
          {searchResults}
        </button>
        <div
          className={`${
            isDropdownOpen ? "block" : "hidden"
          } absolute mt-2 py-2 w-full bg-white rounded-lg shadow-xl text-center`}
        >
          <button
            className={`block ${dropDownStyles}`}
            onClick={() => handleOptionClick("General Information")}
          >
            General Information
          </button>
          <button
            className={`block ${dropDownStyles}`}
            onClick={() => handleOptionClick("Documentation")}
          >
            Documentation
          </button>
          <button
            className={`block ${dropDownStyles}`}
            onClick={() => handleOptionClick("FAQs")}
          >
            FAQs
          </button>
          <button
            className={`block ${dropDownStyles}`}
            onClick={() => handleOptionClick("Blog")}
          >
            Blog
          </button>
        </div>
      </div>
      <Link href="/searchresults" className="hover:text-fawn">
        <Image
          src={MagnifyingGlassDark}
          alt="PetSchedules Logo"
          width={30}
          height={30}
          className="hover:text-fawn"
        />
      </Link>
    </div>
  );
}

export default HomeSearchDisplay;
