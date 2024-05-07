import React from "react";
import Image from "next/image";
import PetSchedulesTeam from "@/public/PetSchedulesTeam/PetSchedulesTeam.png";
import ReviewsContainer from "@/containers/Homepage/ReviewsContainer";
import FeaturesContainer from "@/containers/Homepage/FeaturesContainer";
import ServicesContainer from "@/containers/Homepage/ServicesContainer";
import SubFeaturesContainer from "@/containers/Homepage/SubFeaturesContainer";
import HomeNavContainer from "@/components/Homepage/HomepageNavigation/HomeNavContainer";
import { supabase } from "../../lib/supabase";
import { Inter } from "next/font/google";
import Introduction from "@/containers/Homepage/Introduction";
import KeepTrackContainer from "@/containers/Homepage/KeepTrackContainer";

const inter = Inter({ subsets: ['latin'] })

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
    <div className={inter.className}>
      <header>
        <HomeNavContainer />
      </header>
      <div>
        <Introduction />
        <FeaturesContainer />
        <ServicesContainer />
        <KeepTrackContainer />
        <SubFeaturesContainer />
        <ReviewsContainer />
      </div>
    </div>
  );
}
