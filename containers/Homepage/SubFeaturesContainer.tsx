import SubFeatures from "@/components/Homepage/SubFeatures";

/* rounded-r-radXL is a custon Tailwind class 
      borderRadius: {
        radXL: "10rem",
      }
*/

const SubFeaturesContainer = () => {
  return (
    <div className="m-0 h-full w-full rounded-r-radXL relative">
      <div className="w-1/2 bg-sandy rounded-r-2xl absolute bottom-5">
        <SubFeatures />
      </div>
    </div>
  );
};

export default SubFeaturesContainer;
