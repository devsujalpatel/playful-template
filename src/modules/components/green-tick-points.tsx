"use client";
import { motion } from "motion/react";
import GreenCheckIcon from "@/components/svgs/green-check";

const points: string[] = [
  "Interview candidates",
  "Find proven leads",
  "Filter, select, enjoy",
];

export const GreenTickPoints = () => {
  return (
    <motion.div
      initial={{ opacity: 0.3, y: 20 }}
      transition={{
        duration: 0.5,
      }}
      whileInView={{ opacity: 1, y: 0 }}
      className="flex items-center gap-20 justify-between"
    >
      {points.map((item, idx) => (
        <div key={idx} className="flex items-center gap-1">
          <GreenCheckIcon />
          <p className="font-normal text-black">{item}</p>
        </div>
      ))}
    </motion.div>
  );
};
