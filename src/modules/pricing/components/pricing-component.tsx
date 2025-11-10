import React from "react";
import { HobbyPricing } from "./hobby-pricing";
import { StarterPricing } from "./starter-pricing";
import { ProPricing } from "./pro-pricing";
import { cn } from "@/lib/utils";

export const PricingCom = ({ className }: { className?: string }) => {
  return (
    <div className={cn("flex gap-10 items-center h-full my-18", className)}>
      <HobbyPricing />
      <StarterPricing />
      <ProPricing />
    </div>
  );
};
