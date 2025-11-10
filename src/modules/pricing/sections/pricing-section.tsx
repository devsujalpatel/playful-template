import { HeaderButton } from "@/modules/components/header-button";
import { SectionHeading } from "@/modules/components/section-heading";
import { SectionPara } from "@/modules/components/section-paragraph";

export const PricingSection = () => {
  return (
    <div className="flex flex-col justify-between items-center my-2 mt-24">
      <div className="flex flex-col items-center space-y-4">
        <HeaderButton>pricing</HeaderButton>
        <SectionHeading>Pricing so simple, you'd buy instantly</SectionHeading>
        <SectionPara className="w-[90%]  text-neutral-900">
          Pick from our plans and get started in minutes, simple for everyone.
        </SectionPara>
      </div>
      <div></div>
    </div>
  );
};
