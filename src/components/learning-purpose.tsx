import { ArrowUpRight } from "lucide-react";
import Link from "next/link";

export const LearningPurpose = () => {
  return (
    <div className="bg-brand text-white flex justify-center items-center w-full py-3 cursor-pointer">
      <Link
        target="blank"
        href="https://pro.aceternity.com/products/playful-marketing-aceternity"
      >
        <h1 className="text-white text-lg flex items-center gap-2">
          This Website is copy of{" "}
          <span className="text-blue-100 text-bold flex items-center">
            Aceternity Template. <ArrowUpRight className="size-4" />
          </span>
          i created this for learning purposes
        </h1>
      </Link>
    </div>
  );
};
