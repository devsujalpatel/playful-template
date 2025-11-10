import React from "react";
import { HobbyPricing } from "./hobby-pricing";
import { StarterPricing } from "./starter-pricing";
import { ProPricing } from "./pro-pricing";

export const PricingCom = () => {
  return (
    <div className="flex gap-10 items-center w-7xl h-full">
      <HobbyPricing />
      <StarterPricing />
      <ProPricing />
    </div>
  );
};
