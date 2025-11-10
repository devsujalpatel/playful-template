import { GreenBtn } from "@/components/green-btn";
import GreenCheckIcon from "@/components/svgs/green-check";

export const ProPricing = () => {
  return (
    <div className="flex flex-col p-6 lg:p-8 xl:p-16 border w-full h-[600px] md:h-[850px] bg-[#F5F5F5] rounded-3xl">
      <p>Pro</p>
      <div>
        <p>
          $ <span>1490</span> /month
        </p>
        <GreenBtn>Get Pro</GreenBtn>
        <div>
          {planDetails.map((item, idx) => (
            <div key={idx} className="flex gap-1 items-center">
              <GreenCheckIcon fill={"#000"} />
              <p>{item}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

const planDetails: string[] = [
  "Access to basic analytics reports",
  "Up to 10,000 data points per month",
  "Email support",
  "Community forum access",
  "Cancel anytime",
];
