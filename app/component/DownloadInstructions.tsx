// components/DownloadInstructions.tsx
import React from "react";
import Image from "next/image";
import { ArrowDownIcon } from "@heroicons/react/24/outline"; // Importing a specific icon from Heroicons v2

const DownloadInstructions: React.FC = () => {
  return (
    <div className="container mx-auto border p-4  ">
      <h1 className="mb-6 mt-4  text-center text-2xl font-bold text-orange-500">
        How to Download and Install the BoloHi Apk into Your Smartphone?
      </h1>
      <ol className="list-decimal space-y-4 pl-5 text-gray-600">
        <li>
          Use the download button above to download the BoloHi app file to your
          Android device.
        </li>
        <li>
          Then you need to allow "Unknown Sources" on your Android smartphone to
          install apps that are not from Google Play Store.
        </li>

        <Image
          src="/source.webp" // Make sure to replace this with your actual image path
          alt="Enable Unknown Sources"
          width={600}
          height={300}
          className="rounded-lg shadow-lg"
        />
        <li>
          Go to the "Downloads" folder of your device and open the downloaded
          APK file.
        </li>
        <li>
          Follow the instructions on your smartphone screen to install the app
          correctly.
        </li>
        <li>
          After a few seconds, you can finish installing the BoloHi Apk
          successfully.
        </li>
      </ol>
      <div className="mt-6 flex justify-center"></div>
    </div>
  );
};

export default DownloadInstructions;
