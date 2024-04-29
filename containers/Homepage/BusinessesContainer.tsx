import Businesses from "@/components/Homepage/Businesses";

const BusinessesContainer = () => {
  return (
    <div className="m-0 h-full w-1/2 bg-sandy rounded-r-radXL">
      <div className="h-96">
        <Businesses />
      </div>
      <div className="h-96 rotate-180 transform scale-x-[-1]">
        <Businesses />
      </div>
    </div>
  );
};

export default BusinessesContainer;
