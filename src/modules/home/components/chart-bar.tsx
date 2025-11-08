import { cn } from "@/lib/utils";

interface ChartProps {
  fullValue?: string;
  children: React.ReactNode;
  className?: string;
}

export const Chartbar = ({
  fullValue = "4rem",
  children,
  className = "bg-[#D2F2E3]",
}: ChartProps) => {
  return (
    <div>
      <div
        style={{ height: fullValue }}
        className={cn(
          `flex items-end rounded-md gap-2 ${fullValue} overflow-hidden w-[2.2rem]`,
          className
        )}
      >
        {children}
      </div>
    </div>
  );
};

interface ChartValueProps {
  value?: string;
  className?: string;
}

export const ChartValue = ({
  value = "2rem",
  className = "bg-[#1DBF73]",
}: ChartValueProps) => {
  return <div style={{ height: value }} className={cn(`w-full`, className)} />;
};
