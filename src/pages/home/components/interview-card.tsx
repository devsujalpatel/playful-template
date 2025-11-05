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

        <div className="absolute flex flex-col top-25 left-13 gap-4">
          {interviews.map((item, idx) => (
            <div
              key={idx}
              className="flex bg-white px-4 py-3 rounded-xl justify-between items-center w-75 shadow"
            >
              <div className="relative">
                <Image
                  src="/assets/images/avatar.png"
                  width={50}
                  height={50}
                  alt="avatar"
                  loading="lazy"
                />
                <Image
                  className="absolute bottom-0 right-0"
                  src="/assets/images/avatar-badge.png"
                  width={20}
                  loading="lazy"
                  height={20}
                  alt="avatar badge"
                />
              </div>
              <div className="flex flex-col gap-2 justify-center mt-3">
                <p className="text-md text-neutral-950 tracking-wide leading-1">
                  {item.title}
                </p>
                <label className="text-[13px] text-neutral-900">
                  {item.label}
                </label>
              </div>
              <EllipsisVerticalIcon className="size-5 ml-6" />
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
