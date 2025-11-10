import { GreenBtn } from "@/components/green-btn";
import GreenCheckIcon from "@/components/svgs/green-check";
import { PlusIcon } from "lucide-react";

export const StarterPricing = () => {
  return (
    <div className="flex flex-col p-6 lg:p-8 xl:p-16 border w-full h-[1050px] my-16 md:my-0 bg-brand text-white rounded-3xl shadow-[0px_10px_23px_0px_#0000001a,0px_41px_41px_0px_#00000017,0px_92px_55px_0px_#0000000d,0px_164px_66px_0px_#00000003,0px_257px_72px_0px_#00000000]">
      <div className="flex items-center justify-between">
        <p>Starter</p>
        <button>Featured</button>
      </div>
      <div>
        <p>
          $ <span className="text-7xl font-bold text-shadow-2xs">1490</span>{" "}
          /month
        </p>
        <GreenBtn>Get Pro</GreenBtn>
        <div>
          {planDetails.map((item, idx) => (
            <div key={idx} className="flex gap-1 items-center">
              <GreenCheckIcon
                fill={"#fff"}
                color="#25A18E"
                stroke={"#31A89A"}
              />
              <p>{item}</p>
            </div>
          ))}
          <div className="relative flex flex-col items-center justify-center my-16">
            <div className="w-full h-0.5 bg-[#E5E5E5]"></div>
            <div className="absolute left-1/2 flex items-center justify-center size-6 rounded-full bg-white text-[#515151] -ml-2 text-2xl shadow-[0px_0px_0px_0px_#00000000,0px_0px_0px_0px_#00000000,0px_-1px_0px_0px_#E5E5E5]">
              <span className="-mt-1">+</span>
            </div>
          </div>
          {extraPlanDetails.map((item, idx) => (
            <div key={idx} className="flex gap-1 items-center">
              <GreenCheckIcon
                fill={"#fff"}
                color="#25A18E"
                stroke={"#31A89A"}
              />
              <p>{item}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

const planDetails: string[] = [
  "Advanced analytics dashboard",
  "Customizable reports and charts",
  "Real-time data tracking",
  "Integration with third-party tools",
];

const extraPlanDetails: string[] = [
  "Access to basic analytics reports",
  "Community forum access",
  "Unlimited Tokens",
  "24x7 Support",
  "Everything in Hobby Plan",
  "Cancel anytime",
];
