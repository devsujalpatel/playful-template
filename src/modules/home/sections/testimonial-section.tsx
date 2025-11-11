import { HeaderButton } from "@/modules/components/header-button";
import { SectionHeading } from "@/modules/components/section-heading";
import { SectionPara } from "@/modules/components/section-paragraph";
import Image from "next/image";

export const TestimonialSection = () => {
  return (
    <div className="flex flex-col justify-between items-center my-2 mb-20">
      <div className="flex flex-col items-center space-y-4 my-8">
        <HeaderButton>testimonials</HeaderButton>
        <SectionHeading>Recruiters love us</SectionHeading>
        <SectionPara className="w-[65%]">
          People have chosen us from all over the world to help them with their
          hiring process. Take a look at some of their feedbacks.
        </SectionPara>
      </div>
      <div className="flex gap-6 lg:flex-row flex-col h-full lg:h-[1000px] w-7xl my-30">
        <div className="space-y-6 w-full">
          <div className="border shadow-[0px_14px_30px_0px_#0000000D,0px_54px_54px_0px_#0000000A,0px_122px_73px_0px_#00000008,0px_217px_87px_0px_#00000003,0px_340px_95px_0px_#00000000] bg-white rounded-[35px] p-10 flex flex-col justify-between 2xl:h-2/3 h-[600px]">
            <p className="md:text-lg text-sm text-[#3C3C3C] md:leading-8 font-normal mb-8 max-h-36">
              This platform is revolutionary. I hired my first candidate from
              Playful recruiting and they turned out to be great. Now since I'm
              asked to write a bigger review so that it fills the first card,
              I'll just go on and start writing gibberish. This page is cool,
              IDK about playful, just go ahead and buy Aceternity Pro.
            </p>
            <div className="flex gap-4">
              <Image
                src="/assets/images/avatar.webp"
                width={50}
                height={50}
                alt="avatar"
                className="rounded-lg"
              />
              <div className="flex flex-col items-start justify-center">
                <p className="text-neutral-700">Manu Arora</p>
                <p className="text-sm">Founder of Aceternity</p>
              </div>
            </div>
          </div>
          <div className="border bg-[#F5F5F5] rounded-[35px] h-[400px] p-10 flex flex-col justify-between">
            <p className="md:text-lg text-sm text-[#3C3C3C] md:leading-8 font-normal mb-8 max-h-36">
              The team at Playful has been incredible to work with. Their
              attention to detail and commitment to quality is unmatched.
            </p>
            <div className="flex gap-4 items-center">
              <Image
                src="/assets/images/avatar-9.jpg"
                width={50}
                height={50}
                alt="avatar"
                className="rounded-lg object-cover aspect-square"
              />
              <div className="flex flex-col items-start justify-center">
                <p className="text-neutral-700">Dua Lipa</p>
                <p className="text-sm">Founder of my heart</p>
              </div>
            </div>
          </div>
        </div>
        <div className="space-y-6 w-full">
          <div className="border bg-[#F5F5F5] rounded-[35px] h-[400px] p-10 flex flex-col justify-between">
            <p className="md:text-lg text-sm text-[#3C3C3C] md:leading-8 font-normal mb-8 max-h-36">
              Working with this platform has transformed our recruitment
              process. The AI-powered matching system saved us countless hours
              in finding the perfect candidates.
            </p>
            <div className="flex items-center gap-4">
              <Image
                src="/assets/images/avatar7.jpg"
                width={50}
                height={50}
                alt="avatar"
                className="rounded-lg object-cover aspect-square"
              />
              <div className="flex flex-col items-start justify-center">
                <p className="text-neutral-700">Sarah Chen</p>
                <p className="text-sm">Head of Talent, TechVision Inc.</p>
              </div>
            </div>
          </div>
          <div className="border bg-[#F5F5F5] rounded-[35px] 2xl:h-2/3 h-[600px] p-10 flex flex-col justify-between">
            <p className="md:text-lg text-sm text-[#3C3C3C] md:leading-8 font-normal mb-8 max-h-36">
              The level of customization and flexibility in the platform is
              outstanding. We've been able to adapt it perfectly to our unique
              hiring workflows, and the results have been phenomenal. The
              customer support team is always there when we need them.
            </p>
            <div className="flex items-center gap-4">
              <Image
                src="/assets/images/avatar10.jpg"
                width={50}
                height={50}
                alt="avatar"
                className="rounded-lg object-cover aspect-square"
              />
              <div className="flex flex-col items-start justify-center">
                <p className="text-neutral-700">Emily Nakamura</p>
                <p className="text-sm">
                  Talent Acquisition Director, Future Dynamics
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="space-y-6 w-full">
          <div className="border bg-[#F5F5F5] rounded-[35px] h-[400px] p-10 flex flex-col justify-between">
            <p className="md:text-lg text-sm text-[#3C3C3C] md:leading-8 font-normal mb-8 max-h-36">
              The platform's intuitive interface and powerful analytics have
              completely revolutionized how we approach talent acquisition.
            </p>
            <div className="flex gap-4 items-center">
              <Image
                src="/assets/images/avatar8.jpg"
                width={50}
                height={50}
                alt="avatar"
                className="rounded-lg object-cover aspect-square"
              />
              <div className="flex flex-col items-start justify-center">
                <p className="text-neutral-700">James Rodriguez</p>
                <p className="text-sm">VP of HR, Global Solutions Ltd.</p>
              </div>
            </div>
          </div>
          <div className="flex 2xl:h-2/3 h-[600px] gap-4 justify-center items-end w-full rounded-[35px] bg-[url('/assets/images/video_banner.png')] bg-cover p-10 bg-[#F5F5F5]">
            <button className="cursor-pointer py-3 px-8 bg-white/50 border-2 border-white text-white rounded-xl text-lg font-semibold">Watch Review</button>
          </div>
        </div>
      </div>
    </div>
  );
};
