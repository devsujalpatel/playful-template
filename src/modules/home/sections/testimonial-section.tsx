import { HeaderButton } from "@/modules/components/header-button";
import { SectionHeading } from "@/modules/components/section-heading";
import { SectionPara } from "@/modules/components/section-paragraph";
import Image from "next/image";

export const TestimonialSection = () => {
  return (
    <div className="flex flex-col justify-between items-center my-2">
      <div className="flex flex-col items-center space-y-4 my-8">
        <HeaderButton>testimonials</HeaderButton>
        <SectionHeading>Recruiters love us</SectionHeading>
        <SectionPara className="w-[65%]">
          People have chosen us from all over the world to help them with their
          hiring process. Take a look at some of their feedbacks.
        </SectionPara>
      </div>
      <div className="flex gap-6 lg:flex-row  flex-col h-full lg:h-[1000px] w-7xl">
        <div className="space-y-6 w-full">
          <div className="md:min-h-[600px] xl:min-h-[400px] border shadow-[0px_14px_30px_0px_#0000000D,0px_54px_54px_0px_#0000000A,0px_122px_73px_0px_#00000008,0px_217px_87px_0px_#00000003,0px_340px_95px_0px_#00000000] bg-white rounded-[2.1rem] h-full p-10">
            <p>
              This platform is revolutionary. I hired my first candidate from
              Playful recruiting and they turned out to be great. Now since I'm
              asked to write a bigger review so that it fills the first card,
              I'll just go on and start writing gibberish. This page is cool,
              IDK about playful, just go ahead and buy Aceternity Pro.
            </p>
            <div>
              <Image
                src="/assets/images/avatar1.png"
                width={50}
                height={50}
                alt="avatar"
                className="rounded-lg"
              />
              <div>
                <p>Manu Arora</p>
                <p>Founder of Aceternity</p>
              </div>
            </div>
          </div>
          <div className="md:min-h-[600px] xl:min-h-[400px] border bg-[#F5F5F5] rounded-[2.1rem] h-full"></div>
        </div>
        <div className="space-y-6 w-full">
          <div className="md:min-h-[600px] xl:min-h-[400px] border bg-[#F5F5F5] rounded-[2.1rem] h-full"></div>
          <div className="md:min-h-[600px] xl:min-h-[400px] border bg-[#F5F5F5] rounded-[2.1rem] h-full"></div>
        </div>
        <div className="space-y-6 w-full">
          <div className="md:min-h-[600px] xl:min-h-[400px] border bg-[#F5F5F5] rounded-[2.1rem] h-full"></div>
          <div className="md:min-h-[600px] xl:min-h-[400px] border bg-[#F5F5F5] rounded-[2.1rem] h-full"></div>
        </div>
      </div>
    </div>
  );
};
