import SocialMediaSvg from "@/components/svgs/social-media";
import { cn } from "@/lib/utils";
import { EllipsisVerticalIcon } from "lucide-react";
import Image from "next/image";
import { InterviewDetails } from "./interview-details";

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
            <InterviewDetails key={idx} {...item} className="shadow" />
          ))}
        </div>
      </div>
      <SocialMediaSvg />
    </div>
  );
};

interface Interview {
  title: string;
  label: string;
  avatar?: string;
}

const interviews: Interview[] = [
  {
    title: "Sujal's Interview",
    label: "Candidate is mid",
  },
  {
    title: "Aditya's Interview",
    label: "Candidate is good",
  },
];
