import Link from "next/link";
import { Container } from "./container";
import { Logo } from "./svgs/logo";
import {
  IconBrandFacebook,
  IconBrandGithub,
  IconBrandInstagram,
  IconBrandLinkedin,
  IconBrandX,
} from "@tabler/icons-react";
import { SocialCard } from "@/modules/components/social-media-card";
import { InterviewCard } from "@/modules/components/interview-card";

interface Links {
  name: string;
  icon?: React.ReactNode;
  href: string;
}

const socialLinks: Links[] = [
  {
    name: "Twitter",
    icon: <IconBrandX className="size-5" />,
    href: "https://x.com/sujalpatelcoder",
  },
  {
    name: "Linkedin",
    icon: <IconBrandLinkedin className="size-5" />,
    href: "https://linkedin.com/in/devsujal",
  },
  {
    name: "Github",
    icon: <IconBrandGithub className="size-5" />,
    href: "https://github.com/devsujalpatel",
  },
  {
    name: "Facebook",
    icon: <IconBrandFacebook className="size-5" />,
    href: "#",
  },
  {
    name: "Instagram",
    icon: <IconBrandInstagram className="size-5" />,
    href: "#",
  },
];

const pagesLinks: Links[] = [
  { name: "All Products", href: "#" },
  { name: "Studio", href: "#" },
  { name: "Clients", href: "#" },
  { name: "Pricing", href: "#" },
  { name: "Blog", href: "#" },
];
const legalLinks: Links[] = [
  { name: "Privacy Policy", href: "#" },
  { name: "Terms of Service", href: "#" },
  { name: "Cookie Policy", href: "#" },
];

export const Footer = () => {
  return (
    <Container>
      <div className="md:h-[683px] h-[200%] p-4 pb-0 relative rounded-[35px] border border-[#E6E6E6] mt-5 mb-11 overflow-hidden flex flex-col justify-between bg-[radial-gradient(circle,#e6e6e6_1px,transparent_1px)] bg-size-[10px_10px]">
        <div className="flex flex-col justify-between h-full">
          <div className="p-10">
            <Link href="/" className="flex justify-start gap-3.5">
              <Logo />
              <h2 className="text-3xl font-semibold text-neutral-800 tracking-tight font-inter">
                Playful
              </h2>
            </Link>
            <div className="flex justify-between gap-10 mt-10">
              <h2 className="text-5xl font-bold text-neutral-800 w-[60%]">
                Record interviews. Centralise feedback automatically.
              </h2>
              <div className="flex gap-10 content-end mr-22">
                <div className="flex flex-col gap-4">
                  <h4 className=" font-bold">Pages</h4>
                  <div className="flex flex-col gap-4 w-full">
                    {pagesLinks.map((item, idx) => (
                      <Link
                        className="text-[#535353]"
                        href={item.href}
                        key={idx}
                      >
                        {item.name}
                      </Link>
                    ))}
                  </div>
                </div>
                <div className="flex flex-col gap-4">
                  <h4 className=" font-bold">Legal</h4>
                  <div className="flex flex-col gap-4 w-full">
                    {legalLinks.map((item, idx) => (
                      <Link
                        className="text-[#535353]"
                        href={item.href}
                        key={idx}
                      >
                        {item.name}
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex items-center justify-center border-t border-dashed py-7 gap-14 border-neutral-300 text-neutral-500">
            <a href="https://ui.aceternity.com/" target="blank">
              <p className="text-lg">© Playful Aceternity LLC</p>
            </a>
            <div>
              <div className="flex items-center gap-3">
                {socialLinks.map((item, idx) => (
                  <Link href={item.href} key={idx}>
                    {item.icon}
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
        <SocialCard className="scale-100 -bottom-40" />
        <InterviewCard />
      </div>
    </Container>
  );
};
