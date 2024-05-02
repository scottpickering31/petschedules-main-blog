import Services from "../../components/Homepage/Services";
import { petServices } from "../../data/Services/ServiceData";

const ServicesContainer = () => {
  return (
    <div className="flex flex-col p-10 bg-white gap-5 text-center h-screen">
      <div className="text-center p-10">
        <h1 className="text-4xl font-bold underline-offset-4 underline tracking-wider">
          We offer these services
        </h1>
      </div>
      <div className="text-center w-full gap-5 grid grid-rows-3 grid-cols-3">
        {Object.entries(petServices).map(([key, value]) => (
          <Services key={key} name={value.name} image={value.image} />
        ))}
      </div>
    </div>
  );
};

export default ServicesContainer;
