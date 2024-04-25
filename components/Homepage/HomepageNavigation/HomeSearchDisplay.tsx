import "./HomeSearchStyles.css";
import Image from "next/image";
import MagnifyingGlassDark from "../../../public/svg/NavIcons/MagnifyingGlassDark.svg";

function HomeSearchDisplay({ search }: { search: boolean }) {
  const className = search
    ? "transitionDiv mounted"
    : "transitionDiv unmounted";

  return (
    <div className={className}>
      <input
        type="text"
        placeholder="...Search Groomers, Trainers, Vets and More!"
        className="p-3 border border-black rounded-2xl w-1/2 text-sm"
      />
      <select
        id="services"
        name="services"
        className="bg-gray-50 border p-3.5 rounded-2xl w-1/4 border-gray-300 text-gray-900 text-sm focus:ring-blue-500 focus:border-blue-500 block dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
      >
        <option value="General Information">General Information</option>
        <option value="Documentation">Documentation</option>
        <option value="FAQs">FAQs</option>
        <option value="Blog">Blog</option>
      </select>
      <Image
        src={MagnifyingGlassDark}
        alt="PetSchedules Logo"
        width={30}
        height={30}
        className="hover:text-fawn"
      />
    </div>
  );
}

export default HomeSearchDisplay;
