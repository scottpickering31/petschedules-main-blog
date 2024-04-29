import React from "react";
import Features from "../../components/Homepage/Features";
import MobileDashboard from "@/public/Homepage/MobileDashboard.png";
import Calendar from "@/public/Homepage/Calendar.png";
import GoogleAI from "@/public/Homepage/GoogleAI.png";

const FeaturesContainer = () => {
  return (
    <div>
      <Features
        image={Calendar}
        information="lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
        isInverted={false}
        title="Scheduling for Pet & Business Owners"
      />
      <Features
        image={MobileDashboard}
        information="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
        isInverted={true}
        title="Reminders and Notifications"
      />
      <Features
        image={GoogleAI}
        information="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
        isInverted={false}
        title="Health & Expenses Trackers"
      />
    </div>
  );
};

export default FeaturesContainer;
