import { LogoCard } from "@/components/logo-card";
import { AccordionCard } from "@/modules/components/accordion-card";
import { BookCall } from "@/modules/components/book-call";
import Image from "next/image";

export const FaqSection = () => {
  return (
    <div className="flex relative flex-col justify-between items-center md:w-248 mx-auto h-full my-30 md:mt-48">
      <LogoCard className="-top-25 -rotate-16 absolute" />
      <h2 className="text-7xl text-center text-neutral-900 font-bold my-20 w-full">
        Frequently asked questions
      </h2>
      <div className="flex flex-col gap-4 p-8">
        <AccordionCard />
      </div>
      <div className="flex gap-8 my-30 flex-col items-center">
        <div className="flex items-center justify-center -space-x-3">
          {Array.from({ length: 6 }).map((_, idx) => (
            <Image
              src={`/assets/images/avatar${idx + 1}.png`}
              key={idx}
              width={70}
              height={70}
              alt="avatar"
            />
          ))}
        </div>
        <div className="flex flex-col items-center gap-4 w-[60%]">
          <h3 className="text-2xl">People love us</h3>
          <p className="text-sm md:text-lg w-[80%] md:w-full text-center text-[#7B7B7B]">
            Playful is loved by thousands of people across the world, be part of
            the community and join us.
          </p>
        </div>
      </div>
      <BookCall />
    </div>
  );
};
