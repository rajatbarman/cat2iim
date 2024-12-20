/**
 * This code was generated by Builder.io.
 */
import React from "react";
import { RxCheckCircled } from "react-icons/rx";

type FeatureCardProps = {
  icon: string;
  title: string;
  description: string;
};

const FeatureCard: React.FC<FeatureCardProps> = ({
  icon,
  title,
  description,
}) => {
  return (
    <div className="flex gap-2 items-start text-xl text-black mt-4">
      <RxCheckCircled className="flex-shrink-0 text-logo-blue mt-1" />
      <div>
        <h3 className="font-medium">{title}</h3>
        <p className="mt-2 text-base tracking-wide">{description}</p>
      </div>
    </div>
  );
};

export default FeatureCard;
