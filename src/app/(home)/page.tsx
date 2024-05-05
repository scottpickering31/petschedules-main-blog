import React from "react";
import Image from "next/image";
import PetSchedulesTeam from "@/public/Homepage/PetSchedulesDashboard.png";
import ReviewsContainer from "@/containers/Homepage/ReviewsContainer";
import FeaturesContainer from "@/containers/Homepage/FeaturesContainer";
import ServicesContainer from "@/containers/Homepage/ServicesContainer";
import SubFeaturesContainer from "@/containers/Homepage/SubFeaturesContainer";
import HomeNavContainer from "@/components/Homepage/HomepageNavigation/HomeNavContainer";
import { supabase } from "../../lib/supabase";

export default function Home() {
  const setNewView = async () => {
    console.log("set new view");
    const { data, error } = await supabase
      .from("views")
      .insert({ name: "random names" });
    if (data) console.log(data);
    if (error) console.log(error);
  };

  setNewView();

  return (
    <div>
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
          <SubFeaturesContainer />
        </div>
      </div>
    </div>
  );
}
