import { cn } from "@/lib/utils";

interface ChartProps {
  fullValue?: string;
  children: React.ReactNode;
  className?: string;
}

export const Chartbar = ({
  fullValue = "4rem",
  children,
  className,
}: ChartProps) => {
  return (
    <div>
      <div
        style={{ height: fullValue }}
        className={cn(
          `flex items-end rounded-lg gap-2 ${fullValue} overflow-hidden w-10 bg-[#D2F2E3]`,
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

export const ChartValue = ({ value = "2rem", className }: ChartValueProps) => {
  return (
    <div
      style={{ height: value }}
      className={cn(`w-full bg-[#1DBF73]`, className)}
    />
  );
};
