import VerticalDots from "@/components/svgs/vertical-dots";
import { cn } from "@/lib/utils";

export const AverageBar = ({ className }: { className?: string }) => {
  return (
    <div className={cn("flex items-center", className)}>
      <VerticalDots />
      <div className="text-xs rounded-sm text-center bg-black text-neutral-100 px-1 py-0.5 [clip-path:polygon(33%_1%,100%_0,100%_100%,32%_100%,0_52%)]">
        <div className="pl-2">Avg</div>
      </div>
    </div>
  );
};
