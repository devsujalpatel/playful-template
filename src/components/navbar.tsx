"use client";
import Link from "next/link";
import React from "react";
import { Button } from "./ui/button";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { ArrowRightIcon } from "lucide-react";

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
    <header className="flex justify-between py-7 mx-auto max-w-375">
      <Link href="/" className="flex justify-between gap-3.5">
        <Image src="/logo.svg" alt="logo" width={38} height={38} />
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
      <button className="border border-green-700 justify-center gap-2 h-10 text-white rounded-lg py-2 px-4.5 cursor-pointer shadow-md text-base flex items-center font-semibold bg-linear-to-b from-emerald-500 to-[#25a18e]">Get started <ArrowRightIcon className="size-4" /></button>
    </header>
  );
};
