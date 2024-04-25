"use client";

import React from "react";
import { useRouter } from "next/navigation";
import PricingField from "@/components/Pricing/PricingField";
import { PRICING_DATA } from "../../../data/Pricing/PricingData";

const pricingStyles =
  "h-5/6 w-1/4 m-4 border border-gray-50 rounded-2xl shadow-2xl bg-apricot flex items-center flex-col justify-between p-5";

export default function Pricing() {
  const router = useRouter();
  const handleClick = () => {
    router.push("/register");
  };

  return (
    <div className="text-center">
      <h1 className="text-4xl fond-bold underline underline-offset-2 p-5">
        PetSchedules Pricing
      </h1>
      <div></div>
      <div className="flex justify-end h-screen">
        {PRICING_DATA.map((pricingOption) => (
          <div key={pricingOption.id} className={pricingStyles}>
            <div className="text-center text-xl">
              <PricingField data={pricingOption} />
            </div>
            <div>
              <button
                className="border bg-white rounded-3xl shadow-2xl text-2xl p-2"
                onClick={handleClick}
              >
                {pricingOption.buttonText}
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
