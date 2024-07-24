// components/DownloadInstructions.tsx
import React from "react";

interface DownloadInstructionsProps {
  steps: string[];
}

const DownloadInstructions: React.FC<DownloadInstructionsProps> = ({
  steps,
}) => {
  return (
    <div className="mb-4 rounded-lg bg-white p-6 shadow">
      <h2 className="mb-3 text-xl font-bold">
        How to Download and Install the BoloHi Apk
      </h2>
      <ol className="list-inside list-decimal">
        {steps.map((step, index) => (
          <li key={index} className="my-2 text-gray-700">
            {step}
          </li>
        ))}
      </ol>
    </div>
  );
};

export default DownloadInstructions;
