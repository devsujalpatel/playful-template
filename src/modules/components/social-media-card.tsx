import { cn } from "@/lib/utils";
import SocialMediaSvg from "@/components/svgs/social-media";
import Image from "next/image";
import { SocialIconGroup } from "./social-icons-group";

interface Social {
  name: string;
  icon: string;
  className: string;
}

export const SocialCard = ({ className }: { className?: string }) => {
  return (
    <div
      className={cn(
        "-bottom-50 -left-18 absolute rotate-24 shrink-0 scale-90 overflow-hidden",
        className
      )}
    >
      <div className="relative">
        <div className="absolute flex flex-col top-18 left-20 p-4">
          <p>Social Media Integration</p>
          <SocialIconGroup />
        </div>
        <SocialMediaSvg />
      </div>
    </div>
  );
};
