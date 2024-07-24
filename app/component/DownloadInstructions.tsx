// components/DownloadInstructions.tsx
import React from "react";
import Image from "next/image";
import { ArrowDownIcon } from "@heroicons/react/24/outline";

interface DownloadInstructionsProps {
  steps: string[];
  imagePath?: string; // Make imagePath optional
}

const DownloadInstructions: React.FC<DownloadInstructionsProps> = ({
  steps,
  imagePath,
}) => {
  return (
    <div className="container mx-auto border p-4">
      <h1 className="mb-6 mt-4 text-center text-2xl font-bold text-orange-500">
        How to Download and Install the BoloHi Apk into Your Smartphone?
      </h1>
      <ol className="list-decimal space-y-4 pl-5 text-gray-600">
        {steps.map((step, index) => (
          <li key={index}>{step}</li>
        ))}
      </ol>
      <div className="mt-6 flex justify-center">
        {imagePath && (
          <Image
            src={imagePath}
            alt="Enable Unknown Sources"
            width={600}
            height={300}
            className="rounded-lg shadow-lg"
          />
        )}
      </div>
    </div>
  );
};

export default DownloadInstructions;
