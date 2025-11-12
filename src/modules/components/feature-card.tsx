import { Cloud } from "@/components/svgs/cloud";
import { SpeedMeter } from "@/components/svgs/speed-meter";
import { UserSearch } from "@/components/svgs/user-search";

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

export const FeatureCard = () => {
  return (
    <div className="flex mt-24 justify-between items-center text-center w-[62%]">
      {features.map((item, idx) => (
        <div key={idx} className="flex items-center flex-col gap-6">
          {item.icon}
          <p className="text-md w-[85%] text-neutral-800">{item.description}</p>
        </div>
      ))}
    </div>
  );
};
