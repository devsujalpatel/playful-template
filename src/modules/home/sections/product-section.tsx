import { HeaderButton } from "../components/header-button";
import { SectionHeading } from "../components/section-heading";
import { SectionPara } from "../components/section-paragraph";
import { BentoPara } from "../components/bento-para";
import { BentoHeading } from "../components/bento-heading";
import { DriveCard } from "../components/drive-card";
import { InterviewDetails } from "../components/interview-details";
import { AnalyticCard } from "../components/analytic-card";
import { TimeTrackerCard } from "../components/time-tracker-card";
import { SocialIconGroup } from "../components/social-icons-group";
import { SocialCard } from "../components/social-media-card";
import { LogoCard } from "@/components/logo-card";

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

interface Social {
  name: string;
  icon: string;
  className: string;
}

const socials: Social[] = [
  {
    name: "Discord",
    icon: "/assets/socials/discord.svg",
    className: "-rotate-16",
  },
  {
    name: "Facebook",
    icon: "/assets/socials/insta.svg",
    className: "z-2 -rotate-8",
  },
  {
    name: "Linkedin",
    icon: "/assets/socials/in.svg",
    className: "-rotate-13 z-3",
  },
  {
    name: "Facebook",
    icon: "/assets/socials/fb.svg",
    className: "rotate-16 z-4 -mr-10",
  },
];

export const ProductSection = () => {
  return (
    <div className="flex flex-col justify-between items-center my-25 relative">
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
      <LogoCard className="top-50 left-30 z-30 -rotate-16" />
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
          <div className="rounded-3xl relative overflow-hidden border w-3/5 h-[483px] flex items-center justify-center flex-col">
            <div className="flex flex-col gap-2  z-10">
              {interviews.map((item, idx) => (
                <InterviewDetails
                  key={idx}
                  {...item}
                  className="w-100 border border-[#DBDCDF]"
                />
              ))}
            </div>
            <div className="text-center my-4 mt-10">
              <BentoHeading>Track interview feedback</BentoHeading>
              <BentoPara>
                All the features of product feedback tool you need to easily
                centralize product
              </BentoPara>
            </div>
            <AnalyticCard className="absolute scale-140 rotate-12 -left-13 top-20 z-2" />
            <AnalyticCard className="absolute scale-140 -rotate-18 -right-14 top-20 z-2" />
          </div>
        </div>
        <div className="flex lg:flex-row flex-col gap-5">
          <div className="relative rounded-2xl border border-neutral-200 w-3/5 h-[483px] flex flex-col justify-cente overflow-hidden">
            <TimeTrackerCard className="mt-22" />
            <div className="text-center my-3">
              <BentoHeading>Rank interviee, effortlessly</BentoHeading>
              <BentoPara className="w-[40%]">
                State of the art bar chart depiction of interviee's performance
              </BentoPara>
            </div>
            <div className="absolute w-80 gap-3 font-normal flex bg-white rounded-2xl border shadow-[0px_4px_8px_0px_#0000001a,0px_15px_15px_0px_#00000017,0px_34px_20px_0px_#0000000d,0px_60px_24px_0px_#00000003,0px_93px_26px_0px_#00000000] p-5 top-6 -right-19 z-5">
              <span>✅</span>
              <h2>Do not hire Sujal, please.</h2>
            </div>
            <div className="absolute w-80 gap-3 font-normal flex bg-white rounded-2xl border shadow-[0px_4px_8px_0px_#0000001a,0px_15px_15px_0px_#00000017,0px_34px_20px_0px_#0000000d,0px_60px_24px_0px_#00000003,0px_93px_26px_0px_#00000000] h-15 top-12.5 -right-23 z-4"></div>
          </div>
          <div className="rounded-3xl w-2/5 h-[483px] flex items-center flex-col justify-around bg-[#EBEBEB] border-dashed border-neutral-300 border-4">
            <SocialIconGroup className="ml-12" />
            <div className="text-center my-2 mt-10">
              <BentoHeading>Easy social media integration</BentoHeading>
              <BentoPara>
                Go from nothing to social media success stories.
              </BentoPara>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
