import { Disc } from "@/components/svgs/disc";
import { GreenBtn } from "@/components/green-btn";
import { Logo } from "@/components/svgs/logo";
import { LogoCard } from "@/components/logo-card";
import { ArrowRightIcon } from "lucide-react";
import AnalyticCard from "../components/analytic-card";
import { SocialCard } from "../components/social-media-card";
import { InterviewCard } from "../components/interview-card";

export const HeroSection = () => {
  return (
    <section className="flex flex-col items-center shadow-ace md:h-[900px] h-[720px] overflow-hidden rounded-4xl bg-[radial-gradient(circle,#e6e6e6_1px,transparent_1px)] bg-size-[10px_10px] space-y-8 relative">
      <LogoCard className="md:left-36 top-4 md:top-24 rotate-[-15.11deg]" />
      <LogoCard className="md:right-95 top-4 md:top-120 rotate-[15.11deg]" />
      <button className="flex items-center gap-3 mt-50 bg-emerald-500/50 px-3 py-2 text-md font-semibold rounded-lg2 cursor-pointer text-neutral-800">
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

      <AnalyticCard className="bottom-45 -left-2 rotate-16" />
      <AnalyticCard className="-bottom-23 right-69 scale-115 -rotate-18" />
      <SocialCard />

      <InterviewCard />
    </section>
  );
};
