// components/FeaturesList.tsx
import React from "react";
import { Feature } from "../types/dataTypes";

interface FeaturesListProps {
  features: Feature[];
}

const FeaturesList: React.FC<FeaturesListProps> = ({ features }) => {
  return (
    <div className="container mx-auto rounded-lg bg-white p-6 shadow">
      <h2 className="mb-3 text-2xl font-bold">Features</h2>
      <hr />
      <div className="list-inside list-disc ">
        {features.map((feature, index) => (
          <div key={index} className="my-2 p-6 text-gray-700">
            <h2 className="text-xl font-semibold ">{feature.title}</h2>
            <p className="mt-1 text-base leading-loose text-gray-600">
              {feature.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FeaturesList;
