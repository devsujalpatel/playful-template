import { EllipsisIcon } from "lucide-react";
import Image from "next/image";

export const DriveCard = () => {
  return (
    <div className="relative z-10 flex flex-col gap-2 bg-white border border-[#DBDCDF] rounded-3xl px-6 py-5 shadow-[0px_3px_8px_-1px_#3232470D,0px_0px_1px_0px_#0C1A4B3D]">
      <div className="flex justify-between items-start">
        <div className="flex items-center justify-center bg-slate-200 p-3 rounded-lg">
          <Image
            src="/assets/images/gdrive-logo.png"
            width={30}
            height={30}
            alt="google drive logo"
          />
        </div>
        <EllipsisIcon className="text-neutral-500" />
      </div>
      <p className="font-semibold text-[17px] text-neutral-800">Sujal Patel</p>
      <div className="flex flex-col gap-2 mb-3">
        <div className="flex items-center justify-between text-[#84859E]">
          <span>69 GB</span>
          <span>80 GB</span>
        </div>
        <div className="h-2 bg-gray-200 rounded-full">
          <div className="h-2 bg-[#4C6FFF] rounded-full w-[70%]" />
        </div>
      </div>
    </div>
  );
};
