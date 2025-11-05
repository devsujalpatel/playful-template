import { cn } from "@/lib/utils";
import SocialMediaSvg from "./social-media";

export const SocialCard = ({ className }: { className?: string }) => {
  return (
    <div
      className={cn(
        "-bottom-41 -left-18 absolute rotate-24 shrink-0 scale-90",
        className
      )}
    >
      <div className="relative">
        
        <SocialMediaSvg />
      </div>
    </div>
  );
};
