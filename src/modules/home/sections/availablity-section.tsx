import { HeaderButton } from "../components/header-button";
import { SectionHeading } from "../components/section-heading";
import { SectionPara } from "../components/section-paragraph";

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
      <div></div>
    </div>
  );
};
