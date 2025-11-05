import { cn } from "@/lib/utils";

export const AnalyticCard = ({ className }: { className?: string }) => {
  return (
    <div
      className={cn("flex flex-col gap-4 absolute bottom-0 left-0", className)}
    >
      <h3>Analytics</h3>

      <div className="flex flex-col gap-2">
        <h4>Google meet</h4>
        {meetings.map((item, idx) => (
          <div key={idx}>
            <p>{item.title}</p>
            <p>{item.label}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

const meetings = [
  {
    title: "Meeting with Elon",
    label: "12:15 | Bihar",
  },
  {
    title: "Girlfriend Call",
    label: "15:00 | Russia",
  },
  {
    title: "Meeting with Manu",
    label: "22:15 | Theka",
  },
];
