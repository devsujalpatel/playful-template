import { HeaderButton } from "@/modules/components/header-button";
import { SectionHeading } from "@/modules/components/section-heading";
import { SectionPara } from "@/modules/components/section-paragraph";

export const BlogSection = () => {
  return (
    <div className="flex flex-col justify-between items-center my-28">
      <div className="flex flex-col items-center space-y-4">
        <HeaderButton>blogs</HeaderButton>
        <SectionHeading>Knowledge bank to hire better</SectionHeading>
        <SectionPara className="w-[90%]">
          Read from our endless resources on how to hire the perfect candidate
          for your ideal job.
        </SectionPara>
      </div>
    </div>
  );
};
