import React from "react";
import Image from "next/image";
import PetSchedulesTeam from "@/public/Homepage/PetSchedulesDashboard.png";
import ReviewsContainer from "@/containers/Homepage/ReviewsContainer";
import FeaturesContainer from "@/containers/Homepage/FeaturesContainer";
import ServicesContainer from "@/containers/Homepage/ServicesContainer";
import AboutContainer from "@/containers/Homepage/BusinessesContainer";
import HomeNavContainer from "@/components/Homepage/HomepageNavigation/HomeNavContainer";

export default function Home() {
  return (
    <div className="bg-sandy">
      <header>
        <HomeNavContainer />
      </header>
      <div className="pt-40">
        <div className="flex align-center justify-center">
          <Image src={PetSchedulesTeam} alt="PetSchedules Team" />
        </div>
        <FeaturesContainer />
        <ReviewsContainer />
        <ServicesContainer />
        <div id="modal-root"></div>
        <div className="bg-white">
          <AboutContainer />
        </div>
      </div>
    </div>
  );
}
