import Image from "next/image";
import { HeaderButton } from "../components/header-button";
import { SectionHeading } from "../components/section-heading";
import { SectionPara } from "../components/section-paragraph";
import { EllipsisIcon } from "lucide-react";
import { BentoPara } from "../components/bento-para";
import { BentoHeading } from "../components/bento-heading";
import { DriveCard } from "../components/drive-card";
import { InterviewDetails } from "../components/interview-details";

export const ProductSection = () => {
  return (
    <div className="flex flex-col justify-between items-center my-25">
      <div className="flex flex-col items-center space-y-4">
        <HeaderButton>Products</HeaderButton>
        <SectionHeading>
          Features that will make your life easier
        </SectionHeading>
        <SectionPara>
          Streamline your hiring process with powerful tools for sourcing,
          evaluating, and onboarding top talent - all in one platform.
        </SectionPara>
      </div>
      <div className="lg:w-10/12 space-y-5 mx-auto mt-24">
        <div className="flex lg:flex-row flex-col gap-5">
          <div className="relative rounded-3xl shadow-ace w-2/5 h-[483px] p-14 bg-white">
            <div className="absolute z-0 w-[70%] top-24.5 left-20 h-40 border border-[#DBDCDF] bg-[#ffffff] mt-4 shadow-[0px_3px_8px_-1px_#3232470D,0px_0px_1px_0px_#0C1A4B3D] rounded-3xl" />
            <DriveCard />
            <div className="my-24 flex flex-col item-center justify-center text-center z-0">
              <BentoHeading>Easy resume upload</BentoHeading>
              <BentoPara>
                Simple way to track user's resume and relevant scores
              </BentoPara>
            </div>
          </div>
          <div className="rounded-3xl shadow-ace w-3/5 h-[483px] flex items-center justify-center flex-col">
            <div className="flex flex-col gap-4 ">
              {interviews.map((item, idx) => (
                <InterviewDetails
                  key={idx}
                  {...item}
                  className="w-120 border border-[#DBDCDF]"
                />
              ))}
            </div>
            <div className="text-center my-8">
              <BentoHeading>Track interview feedback</BentoHeading>
              <BentoPara>
                All the features of product feedback tool you need to easily
                centralize product
              </BentoPara>
            </div>
          </div>
        </div>
        <div className="flex lg:flex-row flex-col gap-5 ">
          <div className="rounded-3xl border border-neutral-200 w-3/5 h-[483px]"></div>
          <div className="rounded-3xl w-2/5 h-[483px] bg-[#EBEBEB] border-dashed border-neutral-300 border-4"></div>
        </div>
      </div>
    </div>
  );
};

interface Interview {
  title: string;
  label: string;
  avatar?: string;
}

const interviews: Interview[] = [
  {
    title: "Sujal's Girlfriend",
    label: "Doesn't exist, fake profile.",
    avatar: "/assets/images/avatar1.webp",
  },
  {
    title: "Gone Girl",
    label: "Not a good idea to hire",
    avatar: "/assets/images/avatar2.png",
  },
  {
    title: "Aditya Raj",
    label: "Instant hire.",
    avatar: "/assets/images/avatar3.png",
  },
];
