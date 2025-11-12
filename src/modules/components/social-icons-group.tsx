import { cn } from "@/lib/utils";
import Image from "next/image";

interface Social {
  name: string;
  icon: string;
  className: string;
}

const socials: Social[] = [
  {
    name: "Discord",
    icon: "/assets/socials/discord.svg",
    className: "-rotate-16",
  },
  {
    name: "Facebook",
    icon: "/assets/socials/insta.svg",
    className: "z-2 rotate-7",
  },
  {
    name: "Linkedin",
    icon: "/assets/socials/in.svg",
    className: "-rotate-10 z-3",
  },
  {
    name: "Facebook",
    icon: "/assets/socials/fb.svg",
    className: "rotate-12 z-4 -mr-10",
  },
];

export const SocialIconGroup = ({ className }: { className?: string }) => {
  return (
    <div
      className={cn(
        "flex justify-center items-center mt-16 z-[-1px] w-50  -space-x-32",
        className
      )}
    >
      {socials.map((item, idx) => (
        <Image
          key={idx}
          width={200}
          height={200}
          loading="lazy"
          src={item.icon}
          alt={item.name}
          className={cn("size-50", item.className)}
        />
      ))}
    </div>
  );
};
