import { HeaderButton } from "@/modules/components/header-button";
import { SectionHeading } from "@/modules/components/section-heading";
import { SectionPara } from "@/modules/components/section-paragraph";
import { WorldMapAvailable } from "@/modules/components/worl-map-availablity";
import GreenCheckIcon from "@/components/svgs/green-check";

export const AvailablitySection = () => {
  return (
    <div className="flex flex-col justify-between items-center my-2 mt-24">
      <div className="flex flex-col items-center space-y-4">
        <HeaderButton>Availability</HeaderButton>
        <SectionHeading>We are available everywhere</SectionHeading>
        <SectionPara className="w-[40%]">
          Our platform is available in all countries, will support from over
          20,000+ representatives
        </SectionPara>
      </div>
      <WorldMapAvailable />
      <div className="flex flex-col items-center gap-4 my-10 space-y-10">
        <div className="flex flex-col items-center gap-2">
          <h2 className="text-4xl font-semibold text-brand">23000+</h2>
          <p className="text-normal font-normal text-neutral-500">
            Happy customers worldwide
          </p>
        </div>
        <div className="flex items-center gap-20 justify-between">
          {points.map((item, idx) => (
            <div key={idx} className="flex items-center gap-1">
              <GreenCheckIcon />
              <p className="font-normal text-black">{item}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

const points: string[] = [
  "Interview candidates",
  "Find proven leads",
  "Filter, select, enjoy",
];
