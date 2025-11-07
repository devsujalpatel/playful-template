import { LogoCard } from "@/components/logo-card";
import { Cloud } from "@/components/svgs/cloud";
import { SpeedMeter } from "@/components/svgs/speed-meter";
import { UserSearch } from "@/components/svgs/user-search";
import Image from "next/image";
import { HeaderButton } from "../components/header-button";
import { SectionHeading } from "../components/section-heading";
import { SectionPara } from "../components/section-paragraph";

export const FeatureSection = () => {
  return (
    <div className="flex flex-col justify-between items-center my-2 mt-24">
      <div className="flex flex-col items-center space-y-4">
        <HeaderButton>Features</HeaderButton>
        <SectionHeading>Go from question to hired</SectionHeading>
        <SectionPara>
          All the features you need to evaluate technical candidates
          effectively, track hiring pipelines, and find your next star engineer
          - all in one place.
        </SectionPara>
      </div>
      <div className="flex mt-24 justify-between items-center text-center w-[62%]">
        {features.map((item, idx) => (
          <div key={idx} className="flex items-center flex-col gap-6">
            {item.icon}
            <p className="text-md w-[85%] text-neutral-800">
              {item.description}
            </p>
          </div>
        ))}
      </div>
      <div className="flex justify-center relative items-center mt-28 w-[93%] bg-linear-to-b from-brand p-24 rounded-4xl">
        <Image
          src="/assets/images/landing.webp"
          alt="landing"
          width={1500}
          height={1000}
        />
        <LogoCard className="md:-left-10 top-0 md:top-24 rotate-[-15.11deg]" />
        <LogoCard className="md:-right-5 bottom-20 md:top-120 rotate-[15.11deg]" />
      </div>
    </div>
  );
};

interface Feature {
  icon: React.ReactNode;
  description: string;
}

const features: Feature[] = [
  {
    icon: <UserSearch />,
    description:
      "Centralise system to search for candidates, easy access to the entire database.",
  },
  {
    icon: <SpeedMeter />,
    description:
      "Accelerated speed to shortlist candidates, make notes as you scan and decide later.",
  },
  {
    icon: <Cloud />,
    description:
      "Data is backed up every 2 seconds so that you never lose a single candidate ever again.",
  },
];
