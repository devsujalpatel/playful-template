import SocialMediaSvg from "@/components/svgs/social-media";
import { cn } from "@/lib/utils";
import { EllipsisVerticalIcon } from "lucide-react";
import Image from "next/image";

export const InterviewCard = ({ className }: { className?: string }) => {
  return (
    <div className={cn("absolute -bottom-38 -right-10 -rotate-12", className)}>
      <div className="relative">
        <Image
          className="absolute left-5 -top-10 rotate-10 size-20"
          src="/assets/images/paper-clip.png"
          width={70}
          height={70}
          alt="paper clip"
        />

        <div className="absolute flex flex-col top-18 left-20 gap-2">
          {interviews.map((item, idx) => (
            <div key={idx} className="flex bg-white p-4">
              <div className="relative">
                <Image
                  src="/assets/images/avatar.png"
                  width={40}
                  height={40}
                  alt="avatar"
                />
                <Image
                  src="/assets/images/avatar-badge.png"
                  width={20}
                  height={20}
                  alt="avatar badge"
                />
              </div>
              <div>
                <p className="text-[15px] text-neutral-700 leading-5">
                  {item.title}
                </p>
                <label className="text-[11px] text-neutral-600">
                  {item.label}
                </label>
              </div>
              <EllipsisVerticalIcon />
            </div>
          ))}
        </div>
      </div>
      <SocialMediaSvg />
    </div>
  );
};

const interviews = [
  {
    title: "Sujal's Interview",
    label: "Candidate is mid",
  },
  {
    title: "Aditya's Interview",
    label: "Candidate is good",
  },
];
