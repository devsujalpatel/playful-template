import VerticalDots from "@/components/svgs/vertical-dots";
import { cn } from "@/lib/utils";

export const AverageBar = ({ className }: { className?: string }) => {
  return (
    <div className={cn("", className)}>
      <VerticalDots />
      <div>AVG</div>
    </div>
  );
};
