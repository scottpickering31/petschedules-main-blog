import Services from "../../components/Homepage/Services";
import { petServices } from "../../data/Services/ServiceData";

const ServicesContainer = () => {
  return (
    <div className="flex justify-center items-center p-10">
    <div className="flex flex-col gap-5 text-center h-screen w-5/6 rounded-2xl">
      <div className="p-10 w-1/2">
        <h1 className="text-5xl font-bold text-start">
          We offer Pet scheduling services to suit your needs
        </h1>
      </div>
      <div className="text-center w-full gap-5 grid grid-rows-3 grid-cols-3">
        {Object.entries(petServices).map(([key, value]) => (
          <Services key={key} name={value.name} image={value.image} />
        ))}
      </div>
    </div>
    </div>
  );
};

export default ServicesContainer;
