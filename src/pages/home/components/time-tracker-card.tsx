import InfoIcon from "@/components/svgs/info-icon";
import SandClock from "@/components/svgs/sand-clock";
import { Chartbar, ChartValue } from "./chart-bar";

export const TimeTrackerCard = () => {
  return (
    <div className="mx-auto bg-white border border-[#DBDCDF] rounded-3xl">
      <div className="flex items-center gap-2 p-4">
        <SandClock className="size-5" />
        <p>Time Tracker</p>
        <InfoIcon className="size-3.5" />
      </div>
      <div className="flex gap-4 p-4 items-end">
        {chartValue.map((item, idx) => (
          <Chartbar key={idx} fullValue={item.fullValue}>
            <ChartValue value={item.value} />
          </Chartbar>
        ))}
      </div>
      <div></div>
    </div>
  );
};

interface ChartValue {
  fullValue: string;
  value: string;
}

const chartValue: ChartValue[] = [
  {
    fullValue: "5rem",
    value: "3.5rem",
  },
  {
    fullValue: "7rem",
    value: "2.5rem",
  },
  {
    fullValue: "6rem",
    value: "3rem",
  },
  {
    fullValue: "4.5rem",
    value: "2rem",
  },
  {
    fullValue: "5.5rem",
    value: "3rem",
  },
  {
    fullValue: "6.5rem",
    value: "2.5rem",
  },
];
