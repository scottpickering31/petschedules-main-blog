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
        placeholder="Search Groomers, Trainers, Vets and More!"
        className="p-3 border border-black rounded-2xl w-1/2"
      />
      <p>Labelling probably</p>
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
