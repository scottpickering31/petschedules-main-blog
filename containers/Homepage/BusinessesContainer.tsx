import Businesses from "@/components/Homepage/Businesses";

/* rounded-r-radXL is a custon Tailwind class 
      borderRadius: {
        radXL: "10rem",
      }
*/

const BusinessesContainer = () => {
  return (
    <div className="m-0 h-full w-1/2 bg-sandy rounded-r-radXL">
      <div>
        <Businesses />
      </div>
      <div>
        <Businesses />
      </div>
    </div>
  );
};

export default BusinessesContainer;
