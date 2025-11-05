import { Disc } from "@/components/disc";
import { GreenBtn } from "@/components/green-btn";
import { Logo } from "@/components/logo";
import { ArrowRightIcon } from "lucide-react";
import React from "react";

export const HeroSection = () => {
  return (
    <section className="flex flex-col items-center shadow-ace md:h-[912px] h-[720px] rounded-4xl bg-[radial-gradient(circle,#e6e6e6_1px,transparent_1px)] bg-size-[10px_10px] space-y-8 relative">
      <div className="absolute md:left-36 top-4 md:top-24 rotate-[-15.11deg]">
        <div className="size-16 md:size-20 lg:size-28 border flex justify-center items-center bg-linear-to-b from-white to-neutral-200 rounded-xl lg:rounded-3xl  border-[#f3f3f3] shadow-[0px_5px_11px_0px_rgba(0,0,0,0.1),0px_20px_20px_0px_rgba(0,0,0,0.09),0px_44px_27px_0px_rgba(0,0,0,0.05),0px_79px_32px_0px_rgba(0,0,0,0.01),0px_123px_35px_0px_rgba(0,0,0,0)]">
          <Logo className="w-19 h-19" />
        </div>
      </div>
      <div className="absolute md:right-100 top-4 md:top-120 rotate-[15.11deg]">
        <div className="size-16 md:size-20 lg:size-28 border flex justify-center items-center bg-linear-to-b from-white to-neutral-200 rounded-xl lg:rounded-3xl  border-[#f3f3f3] shadow-[0px_5px_11px_0px_rgba(0,0,0,0.1),0px_20px_20px_0px_rgba(0,0,0,0.09),0px_44px_27px_0px_rgba(0,0,0,0.05),0px_79px_32px_0px_rgba(0,0,0,0.01),0px_123px_35px_0px_rgba(0,0,0,0)]">
          <Logo className="w-19 h-19" />
        </div>
      </div>
      <button className="flex items-center gap-3 mt-50 bg-emerald-500/50 px-3 py-2 text-md font-semibold rounded-lg2">
        <Disc />
        New! Record user interviews without recording bots
      </button>
      <h1 className="text-6xl font-bold text-center text-neutral-900 font-inter">
        Record interviews. Centralise <br /> feedback automatically.
      </h1>
      <p className="text-lg text-center tracking-tight text-neutral-700">
        Record and organize user interviews automatically. Focus on what matters
        -
        <br /> connecting with users.
      </p>
      <GreenBtn className="flex gap-2 rounded-lg2 py-[11px]">
        Get started - it's free <ArrowRightIcon className="size-4" />
      </GreenBtn>
    </section>
  );
};
