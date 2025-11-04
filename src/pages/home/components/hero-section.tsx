import { Disc } from "@/components/disc";
import { GreenBtn } from "@/components/green-btn";
import { ArrowRightIcon } from "lucide-react";
import React from "react";

export const HeroSection = () => {
  return (
    <section className="flex flex-col items-center shadow-ace md:h-[912px] h-[720px] rounded-4xl bg-[radial-gradient(circle,#e6e6e6_1px,transparent_1px)] bg-size-[10px_10px]">
      <button className="flex items-center gap-2 mt-40 bg-emerald-500/50 px-3 py-2 text-md font-semibold rounded-lg2">
        <Disc />
        New! Record user interviews without recording bots
      </button>
      <h1>Record interviews. Centralise feedback automatically.</h1>
      <p>
        Record and organize user interviews automatically. Focus on what matters
        - connecting with users.
      </p>
      <GreenBtn className="flex gap-2 rounded-lg2">
        Get started - it's free <ArrowRightIcon className="size-4" />
      </GreenBtn>
    </section>
  );
};
