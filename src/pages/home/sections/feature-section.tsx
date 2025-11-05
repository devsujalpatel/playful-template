import { Cloud } from "@/components/svgs/cloud";
import { SpeedMeter } from "@/components/svgs/speed-meter";
import { UserSearch } from "@/components/svgs/user-search";

export const FeatureSection = () => {
  return (
    <div className="flex flex-col justify-between items-center my-25">
      <div className="flex flex-col items-center space-y-4">
        <button className="border border-neutral-300 shadow-[0px_1px_2px_0px_#0000001A,0px_4px_4px_0px_#00000017,0px_9px_5px_0px_#0000000D,0px_16px_6px_0px_#00000003,0px_25px_7px_0px_#00000000] rounded-full px-3 py-1">
          Features
        </button>
        <h2 className="text-5xl font-semibold text-neutral-800">
          Go from question to hired
        </h2>
        <p className="text-lg text-neutral-700 text-center w-[55%]">
          All the features you need to evaluate technical candidates
          effectively, track hiring pipelines, and find your next star engineer
          - all in one place.
        </p>
      </div>
      <div className="flex mt-24 justify-between items-center text-center w-[62%]">
        {features.map((item, idx) => (
          <div key={idx} className="flex items-center flex-col gap-6">
            {item.icon}
            <p className="text-md w-[85%] text-neutral-800">
              {item.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

interface Feature {
  icon: React.ReactNode;
  description: string;
}

const features: Feature[] = [
  {
    icon: <UserSearch />,
    description:
      "Centralise system to search for candidates, easy access to the entire database.",
  },
  {
    icon: <SpeedMeter />,
    description:
      "Accelerated speed to shortlist candidates, make notes as you scan and decide later.",
  },
  {
    icon: <Cloud />,
    description:
      "Data is backed up every 2 seconds so that you never lose a single candidate ever again.",
  },
];
