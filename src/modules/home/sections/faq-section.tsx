import { AccordionCard } from "@/modules/components/accordion-card";

export const FaqSection = () => {
  return (
    <div className="flex flex-col justify-between items-center md:w-248 mx-auto h-full my-30 md:mt-48">
      <h2 className="text-7xl text-center text-neutral-900 font-bold my-20 w-full">
        Frequently asked questions
      </h2>
      <div className="flex flex-col gap-4 p-8">
        <AccordionCard />
      </div>
    </div>
  );
};
