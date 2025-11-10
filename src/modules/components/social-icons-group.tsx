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
    className: "-rotate-14",
  },
  {
    name: "Facebook",
    icon: "/assets/socials/insta.svg",
    className: "z-2 rotate-3",
  },
  {
    name: "Linkedin",
    icon: "/assets/socials/in.svg",
    className: "-rotate-4 z-3",
  },
  {
    name: "Facebook",
    icon: "/assets/socials/fb.svg",
    className: "rotate-16 z-4 -mr-10",
  },
];

export const SocialIconGroup = ({ className }: { className?: string }) => {
  return (
    <div
      className={cn(
        "flex justify-center items-center mt-28 z-[-1px] w-80",
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
          className={cn("-m-17 size-50", item.className)}
        />
      ))}
    </div>
  );
};
