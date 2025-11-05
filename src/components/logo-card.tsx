import React from "react";
import { Logo } from "./svgs/logo";
import { cn } from "@/lib/utils";

export const LogoCard = ({ className }: { className?: string }) => {
  return (
    <div className={cn("absolute", className)}>
      <div className="size-16 md:size-20 lg:size-28 z-10 border flex justify-center items-center bg-linear-to-br from-white via-neutral-100 to-neutral-200 rounded-xl lg:rounded-3xl  border-[#f3f3f3] shadow-[0px_5px_11px_0px_rgba(0,0,0,0.1),0px_20px_20px_0px_rgba(0,0,0,0.09),0px_44px_27px_0px_rgba(0,0,0,0.05),0px_79px_32px_0px_rgba(0,0,0,0.01),0px_123px_35px_0px_rgba(0,0,0,0)]">
        <Logo className="w-19 h-19" />
      </div>
    </div>
  );
};
