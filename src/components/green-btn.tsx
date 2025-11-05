import { cn } from "@/lib/utils";
import React from "react";

export const GreenBtn = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <button
      className={cn(
        `border border-green-700 justify-center text-white py-2 rounded-lg px-4 cursor-pointer shadow-md text-base flex items-center font-semibold bg-linear-to-b from-emerald-500 to-brand`,
        className
      )}
    >
      {children}
    </button>
  );
};
