import InfoIcon from "@/components/svgs/info-icon";
import SandClock from "@/components/svgs/sand-clock";
import { Chartbar, ChartValue } from "./chart-bar";
import { AverageBar } from "./average-bar";

interface ChartValue {
  fullValue: string;
  value: string;
  className?: string;
}

const chartValue: ChartValue[] = [
  {
    fullValue: "3.1rem",
    value: "2.1rem",
  },
  {
    fullValue: "4rem",
    value: "2rem",
  },
  {
    fullValue: "6rem",
    value: "4rem",
  },
  {
    fullValue: "2.4rem",
    value: "1.2rem",
  },
  {
    fullValue: "5rem",
    value: "3.5rem",
  },
  {
    fullValue: "4rem",
    value: "2rem",
  },
  {
    fullValue: "0.7rem",
    value: "",
    className: "bg-[#EFEFEF]",
  },
];

const time: string[] = ["0", "2h", "4h", "8h"];
const days: string[] = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];

export const TimeTrackerCard = () => {
  return (
    <div className="mx-auto bg-white border border-[#e7e8ec] rounded-3xl">
      <div className="flex items-center gap-2 p-6 mx-12">
        <SandClock className="size-5" />
        <p>Time Tracker</p>
        <InfoIcon className="size-3.5" />
      </div>
      <div className="flex items-end relative mx-15 mt-6">
        <div className="flex gap-3 items-end border-b border-[#ecebeb] py-2 mx-4">
          {chartValue.map((item, idx) => (
            <Chartbar
              key={idx}
              fullValue={item.fullValue}
              className={item.className}
            >
              <ChartValue value={item.value} />
            </Chartbar>
          ))}
        </div>

        <div className="flex gap-4 flex-col-reverse">
          {time.map((item, idx) => (
            <p key={idx} className="text-[13px] text-neutral-500">
              {item}
            </p>
          ))}
        </div>
        <AverageBar className="absolute top-12 left-0" />
      </div>
      <div>
        <div className="flex gap-6 p-4 items-end mt-1 mx-20 w-[80%]">
          {days.map((item, idx) => (
            <p key={idx} className="text-[13px] text-neutral-500">
              {item}
            </p>
          ))}
        </div>
      </div>
    </div>
  );
};
