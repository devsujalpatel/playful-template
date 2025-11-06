import Image from "next/image";
import { HeaderButton } from "../components/header-button";
import { SectionHeading } from "../components/section-heading";
import { SectionPara } from "../components/section-paragraph";
import { EllipsisIcon } from "lucide-react";

export const ProductSection = () => {
  return (
    <div className="flex flex-col justify-between items-center my-25">
      <div className="flex flex-col items-center space-y-4">
        <HeaderButton>Products</HeaderButton>
        <SectionHeading>
          Features that will make your life easier
        </SectionHeading>
        <SectionPara>
          Streamline your hiring process with powerful tools for sourcing,
          evaluating, and onboarding top talent - all in one platform.
        </SectionPara>
      </div>
      <div className="lg:w-10/12 space-y-5 mx-auto mt-24">
        <div className="flex lg:flex-row flex-col gap-5">
          <div className="relative rounded-3xl shadow-ace w-5/8 h-[483px] p-14 bg-white">
            <div className="absolute z-0 w-[70%] top-24.5 left-20 h-40 border border-[#DBDCDF] bg-[#ffffff] mt-4 shadow-[0px_3px_8px_-1px_#3232470D,0px_0px_1px_0px_#0C1A4B3D] rounded-3xl" />
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
              <p className="font-semibold text-[17px] text-neutral-800">
                Sujal Patel
              </p>
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
            <div className="my-24 flex flex-col item-center justify-center text-center z-0">
              <h3 className="font-semibold text-4xl text-neutral-800">
                Easy resume upload
              </h3>
              <p className="text-neutral-800 text-sm my-4 mx-auto w-[65%]">
                Simple way to track user's resume and relevant scores
              </p>
            </div>
          </div>
          <div className="rounded-3xl shadow-ace w-full h-[483px]"></div>
        </div>
        <div className="flex lg:flex-row flex-col gap-5 ">
          <div className="rounded-3xl border border-neutral-200 w-full h-[483px]"></div>
          <div className="rounded-3xl w-5/8 h-[483px] bg-neutral-200 border-dashed border-neutral-300 border-4"></div>
        </div>
      </div>
    </div>
  );
};
