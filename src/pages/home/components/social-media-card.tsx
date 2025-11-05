import { cn } from "@/lib/utils";
import SocialMediaSvg from "../../../components/svgs/social-media";
import Image from "next/image";

export const SocialCard = ({ className }: { className?: string }) => {
  return (
    <div
      className={cn(
        "-bottom-50 -left-18 absolute rotate-24 shrink-0 scale-90 overflow-hidden",
        className
      )}
    >
      <div className="relative">
        <div className="absolute flex flex-col top-18 left-20">
          <p>Social Media Integration</p>
          <div className="flex justify-center items-center mt-28 z-[-1px] w-80">
            {socials.map((item, idx) => (
              <Image
                width={200}
                height={200}
                loading="lazy"
                src={item.icon}
                key={idx}
                alt={item.name}
                className={cn("-m-18 size-50", item.className)}
              />
            ))}
          </div>
        </div>
        <SocialMediaSvg />
      </div>
    </div>
  );
};

const socials = [
  {
    name: "Discord",
    icon: "/assets/socials/discord.svg",
    className: "-rotate-16",
  },
  {
    name: "Facebook",
    icon: "/assets/socials/insta.svg",
    className: "z-2 -rotate-8",
  },
  {
    name: "Linkedin",
    icon: "/assets/socials/in.svg",
    className: "-rotate-13 z-3",
  },
  {
    name: "Facebook",
    icon: "/assets/socials/fb.svg",
    className: "rotate-16 z-4 -mr-10",
  },
];
