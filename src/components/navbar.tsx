"use client";
import Link from "next/link";
import React from "react";
import { Button } from "./ui/button";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { ArrowRightIcon } from "lucide-react";
import { GreenBtn } from "./green-btn";
import { Logo } from "./svgs/logo";

const navlinks = [
    {
        name: "Home",
        href: "/",
    },
    {
        name: "Pricing",
        href: "/pricing",
    },
    {
        name: "Blog",
        href: "/blog",
    },
];

export const Navbar = () => {
    const path = usePathname();
  return (
    <header className="flex justify-between py-4 mt-4 mx-auto max-w-375">
      <Link href="/" className="flex justify-between gap-3.5">
       <Logo />
        <h2 className="text-3xl font-semibold text-neutral-800 tracking-tight font-inter">
          Playful
        </h2>
      </Link>
      <nav className="flex text-neutral-700 items-start gap-9 text-md font-semibold">
        {navlinks.map((link) => (
          <Link key={link.name} href={link.href} className={`${path === link.href ?  "text-emerald-500" : "text-neutral-700"  }`}>
            {link.name}
          </Link>
        ))}
      </nav>
      <GreenBtn className="gap-2 h-10 rounded-lg2">Get started <ArrowRightIcon className="size-4" /></GreenBtn>
    </header>
  );
};
