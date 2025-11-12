import { BookCall } from "@/modules/components/book-call";
import { FeatureCard } from "@/modules/components/feature-card";
import { GreenTickPoints } from "@/modules/components/green-tick-points";
import { HeaderButton } from "@/modules/components/header-button";
import { SectionHeading } from "@/modules/components/section-heading";
import { SectionPara } from "@/modules/components/section-paragraph";

export const FeatureSection = () => {
  return (
    <div className="flex flex-col justify-between items-center my-2 mt-24">
      <FeatureCard />
      <div className="flex flex-col items-center space-y-4 my-10 mt-52">
        <HeaderButton>Features</HeaderButton>
        <SectionHeading>Go from question to hired</SectionHeading>
        <SectionPara className="w-[55%]">
          All the features you need to evaluate technical candidates
          effectively, track hiring pipelines, and find your next star engineer
          - all in one place.
        </SectionPara>
      </div>
      <div className="flex flex-col items-center gap-4 my-15 space-y-20 mb-20">
        <GreenTickPoints />
        <BookCall />
      </div>
    </div>
  );
};
