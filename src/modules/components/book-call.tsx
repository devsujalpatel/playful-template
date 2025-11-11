import Image from "next/image";
import React from "react";

export const BookCall = () => {
  return (
    <div className="flex flex-col items-center gap-3">
      <div className="flex focus-visible:outline-2 rounded-full border items-center justify-center p-1 relative">
        <input
          type="text"
          placeholder="Enter your work email"
          className="flex h-10 bg-white w-72 md:w-96 rounded-full py-3 px-3 text-sm placeholder:text-muted-foreground/70 focus-visible:outline-none focus-visible:ring-[3px] focus-visible:ring-[#4d4d4d] focus-visible:ring-offset-2 outline-none border-none shadow-ace"
        />
        <button className="absolute inset-y-0 end-0 flex h-10 mt-1 mr-1 w-28 text-white bg-linear-to-l from-[#4d4d4d] to-[#000000] rounded-full items-center justify-center">
          Book a call
        </button>
      </div>
      <div className="flex items-center gap-2 text-neutral-800">
        Created by <Image src="/assets/images/avatar0.png" width={25} height={25} alt="sujal avatar" className="rounded-full" /> Sujal Patel
      </div>
    </div>
  );
};
