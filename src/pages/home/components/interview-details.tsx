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
        "flex bg-white px-4 py-3 rounded-xl justify-between items-center w-75 shadow",
        className
      )}
    >
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
      <div className="flex flex-col gap-2 justify-center mt-3">
        <p className="text-md text-neutral-950 tracking-wide leading-1">
          {title}
        </p>
        <label className="text-[13px] text-neutral-900">{label}</label>
      </div>
      <EllipsisVerticalIcon className="size-5 ml-6" />
    </div>
  );
};
