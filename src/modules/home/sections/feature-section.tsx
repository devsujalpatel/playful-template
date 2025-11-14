"use client";
import { LogoCard } from "@/components/logo-card";
import Image from "next/image";
import { HeaderButton } from "@/modules/components/header-button";
import { SectionHeading } from "@/modules/components/section-heading";
import { SectionPara } from "@/modules/components/section-paragraph";
import { FeatureCard } from "@/modules/components/feature-card";
import { motion } from "motion/react";

export const FeatureSection = () => {
  return (
    <div className="flex flex-col justify-between items-center my-2 mt-24">
      <div className="flex flex-col items-center space-y-4">
        <HeaderButton>Features</HeaderButton>
        <SectionHeading>Go from question to hired</SectionHeading>
        <SectionPara>
          All the features you need to evaluate technical candidates
          effectively, track hiring pipelines, and find your next star engineer
          - all in one place.
        </SectionPara>
      </div>
      <FeatureCard />
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        transition={{
          duration: 0.5,
        }}
        whileInView={{ opacity: 1, y: 0 }}
        className="flex justify-center relative items-center mt-28 w-[93%] bg-linear-to-b from-brand p-24 rounded-4xl"
      >
        <Image
          src="/assets/images/landing.webp"
          alt="landing"
          width={1500}
          height={1000}
        />
        <LogoCard className="md:-left-10 top-0 md:top-24 rotate-[-15.11deg]" />
        <LogoCard className="md:-right-5 bottom-20 md:top-120 rotate-[15.11deg]" />
      </motion.div>
    </div>
  );
};
