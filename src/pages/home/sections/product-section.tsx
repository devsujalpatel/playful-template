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
      <div className="lg:w-10/12  space-y-5 mx-auto mt-24">
        <div className="flex lg:flex-row flex-col gap-5">
          <div className="rounded-3xl shadow-ace w-4/6 h-[483px] p-15 bg-white">
            <div className="flex flex-col gap-2 shadow-ace rounded-3xl px-6 py-5">
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
              <div className="flex flex-col gap-2">
                <div className="flex items-center justify-between text-neutral-400">
                  <span>69 GB</span>
                  <span>80 GB</span>
                </div>
                <div className="h-2 bg-[#4C6FFF] rounded-full w-[70%]" />
              </div>
            </div>
            <div>
              <h3>Easy resume upload</h3>
              <p>Simple way to track user's resume and relevant scores</p>
            </div>
          </div>
          <div className="rounded-3xl shadow-ace w-full h-[483px]"></div>
        </div>
        <div className="flex lg:flex-row flex-col gap-5 ">
          <div className="rounded-3xl border border-neutral-200 w-full h-[483px]"></div>
          <div className="rounded-3xl w-4/6 h-[483px] bg-neutral-200 border-dashed border-neutral-300 border-4"></div>
        </div>
      </div>
    </div>
  );
};
