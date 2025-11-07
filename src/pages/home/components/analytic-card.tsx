import { cn } from "@/lib/utils";

export const AnalyticCard = ({ className }: { className?: string }) => {
  return (
    <div
      className={cn(
        "flex flex-col absolute  border border-neutral-200 bg-white w-50 h-56 rounded-xl shadow-2xl overflow-hidden",
        className
      )}
    >
      <h3 className="bg-[#DFEBF3] text-xs px-3 py-2 text-slate-800 tracking-wide ">
        Analytics
      </h3>

      <h4 className="text-[13px] text-neutral-800 px-3 py-2">Google meet</h4>
      <div className="flex flex-col px-3 py-2 gap-2">
        {meetings.map((item, idx) => (
          <div key={idx} className="flex flex-col">
            <p className="text-sm text-neutral-900 leading-5">{item.title}</p>
            <label className="text-[11px] text-neutral-600">{item.label}</label>
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
    title: "Important Girlfriend Call",
    label: "15:00 | Russia",
  },
  {
    title: "Meeting with Manu",
    label: "22:15 | Theka",
  },
];
