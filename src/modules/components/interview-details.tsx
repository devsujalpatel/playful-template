import { cn } from "@/lib/utils";
import { EllipsisVerticalIcon } from "lucide-react";
import Image from "next/image";

interface Interview {
  title: string;
  label: string;
  avatar?: string;
  className?: string;
}

export const InterviewDetails = ({
  title,
  label,
  avatar = "/assets/images/avatar.png",
  className,
}: Interview) => {
  return (
    <div
      className={cn(
        "flex bg-white px-4 py-4 rounded-xl justify-between items-center w-75",
        className
      )}
    >
      <div className="flex items-center">
        <div className="relative">
          <Image
            src={avatar}
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
        <div className="grid ml-4">
          <h1 className="font-semibold">{title}</h1>
          <label className="text-sm font-normal">{label}</label>
        </div>
      </div>
      <EllipsisVerticalIcon className="size-5 ml-6" />
    </div>
  );
};
