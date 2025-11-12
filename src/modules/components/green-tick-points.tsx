import GreenCheckIcon from "@/components/svgs/green-check";

const points: string[] = [
  "Interview candidates",
  "Find proven leads",
  "Filter, select, enjoy",
];

export const GreenTickPoints = () => {
  return (
    <div className="flex items-center gap-20 justify-between">
      {points.map((item, idx) => (
        <div key={idx} className="flex items-center gap-1">
          <GreenCheckIcon />
          <p className="font-normal text-black">{item}</p>
        </div>
      ))}
    </div>
  );
};
