import InfoIcon from "@/components/svgs/info-icon";
import SandClock from "@/components/svgs/sand-clock";
import { Chartbar, ChartValue } from "./chart-bar";
import { AverageBar } from "./average-bar";

export const TimeTrackerCard = () => {
  return (
    <div className="mx-auto bg-white border border-[#DBDCDF] rounded-3xl">
      <div className="flex items-center gap-2 p-4">
        <SandClock className="size-5" />
        <p>Time Tracker</p>
        <InfoIcon className="size-3.5" />
      </div>
      <div className="flex gap-4 p-4 items-end relative">
        {chartValue.map((item, idx) => (
          <Chartbar
            key={idx}
            fullValue={item.fullValue}
            className={item.className}
          >
            <ChartValue value={item.value} />
          </Chartbar>
        ))}
        {/* <AverageBar className="absolute top-0 left-0" /> */}
        
      </div>
      <div></div>
    </div>
  );
};

interface ChartValue {
  fullValue: string;
  value: string;
  className?: string;
}

const chartValue: ChartValue[] = [
  {
    fullValue: "3.5rem",
    value: "2.5rem",
  },
  {
    fullValue: "5rem",
    value: "3rem",
  },
  {
    fullValue: "6rem",
    value: "5rem",
  },
  {
    fullValue: "3rem",
    value: "2rem",
  },
  {
    fullValue: "5.5rem",
    value: "4.5rem",
  },
  {
    fullValue: "6rem",
    value: "4rem",
  },
  {
    fullValue: "0.7rem",
    value: "",
    className: "bg-[#EFEFEF]",
  },
];
