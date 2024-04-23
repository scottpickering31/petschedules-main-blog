import React from "react";
import Features from "../../components/Homepage/Features";
import MobileDashboard from "@/public/Homepage/MobileDashboard.png";
import Calendar from "@/public/Homepage/Calendar.png";
import GoogleAI from "@/public/Homepage/GoogleAI.png";

const FeaturesContainer = () => {
  return (
    <div>
      <Features
        image={MobileDashboard}
        information="Whatever"
        isInverted={false}
      />
      <Features image={Calendar} information="Our Team" isInverted={true} />
      <Features image={GoogleAI} information="Our Team" isInverted={false} />
    </div>
  );
};

export default FeaturesContainer;
