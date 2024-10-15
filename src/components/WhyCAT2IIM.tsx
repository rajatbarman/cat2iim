/**
 * This code was generated by Builder.io.
 */
import React from "react";
import FeatureCard from "./FeatureCard";
import StatCard from "./StatCard";

type WhyCAT2IIMProps = {
  statIcon: string;
  videoCount: string;
  viewCount: string;
  features: { icon: string; title: string; description: string }[];
};

const WhyCAT2IIM: React.FC<WhyCAT2IIMProps> = ({
  statIcon,
  features,
  videoCount,
  viewCount,
}) => {
  return (
    <section className="flex justify-between pt-16 max-md:pt-10 max-md:flex-col max-md:w-full max-md:items-center max-md:gap-12">
      <StatCard
        icon={statIcon}
        stats={[
          { value: `${viewCount}k+`, label: "views on youtube" },
          { value: `${videoCount}+`, label: "videos" },
        ]}
      />
      <div className="max-w-[45%] max-md:max-w-[90%]">
        <h2 className="self-center ml-5 text-xl text-indigo-700">
          Why CAT2IIM?
        </h2>
        <div className="flex flex-col items-start text-xl text-black max-md:max-w-full">
          {features.map((feature, index) => (
            <FeatureCard key={index} {...feature} />
          ))}
          <a
            href="#more"
            className="flex gap-2.5 mt-5 text-xs leading-none text-center"
          ></a>
        </div>
      </div>
    </section>
  );
};

export default WhyCAT2IIM;
