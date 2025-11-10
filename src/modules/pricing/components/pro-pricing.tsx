import { GreenBtn } from "@/components/green-btn";
import GreenCheckIcon from "@/components/svgs/green-check";

export const ProPricing = () => {
  return (
    <div className="flex flex-col p-6 lg:p-8 xl:p-16 border w-full h-[600px] md:h-[850px] bg-[#F5F5F5] rounded-3xl">
      <p className="text-neutral-800">Pro</p>
      <div className="flex flex-col gap-10 my-10">
        <p>
          $ <span className="text-7xl font-bold text-shadow-2xs">1490</span>{" "}
          /month
        </p>
        <GreenBtn className="w-full text-lg py-2.5 rounded-xl">
          Get Pro
        </GreenBtn>
        <div className="flex flex-col gap-2">
          {planDetails.map((item, idx) => (
            <div key={idx} className="flex gap-1 items-start">
              <GreenCheckIcon fill={"#000"} />
              <p className="mt-1">{item}</p>
            </div>
          ))}
        </div>
        <div className="relative flex flex-col items-center justify-center my-4">
          <div className="w-full h-0.5 bg-[#E5E5E5]"></div>
          <div className="absolute left-1/2 flex items-center justify-center size-6 rounded-full bg-white text-[#515151] -ml-2 text-2xl shadow-[0px_0px_0px_0px_#00000000,0px_0px_0px_0px_#00000000,0px_-1px_0px_0px_#E5E5E5]">
            <span className="-mt-1">+</span>
          </div>
        </div>
        <div className="flex flex-col gap-2">
          {extraPlanDetails.map((item, idx) => (
            <div key={idx} className="flex gap-1 items-center">
              <GreenCheckIcon fill={"#0EA5E9"} />
              <p className="mt-1">{item}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

const planDetails: string[] = [
  "Unlimited data storage",
  "Customizable dashboards",
  "Advanced data segmentation",
  "Real-time data processing",
  "AI-powered insights",
];

const extraPlanDetails: string[] = [
  "Everything in Hobby Plan",
  "Cancel anytime",
];
