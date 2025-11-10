import { GreenBtn } from "@/components/green-btn";
import GreenCheckIcon from "@/components/svgs/green-check";

export const HobbyPricing = () => {
  return (
    <div className="flex flex-col h-[600px] md:h-[850px] p-6 lg:p-8 xl:p-16 border w-full bg-[#F5F5F5] rounded-3xl">
      <p className="text-neutral-800">Hobby</p>
      <div className="flex flex-col gap-10 my-10">
        <p>
          $ <span className="text-7xl font-bold text-shadow-2xs">99</span>{" "}
          /month
        </p>
        <GreenBtn className="w-full py-2.5 text-lg rounded-xl">Get Hobby</GreenBtn>
        <div className="flex flex-col gap-2">
          {planDetails.map((item, idx) => (
            <div key={idx} className="flex gap-1 items-start">
              <GreenCheckIcon fill={"#000"} />
              <p className="mt-1">{item}</p>
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
