import Link from "next/link";
import React from "react";

const HeroSection: React.FC = () => {
  return (
    <div className="hero-section mt-0 flex flex-col items-center justify-center bg-gray-50 px-4 pb-10 pt-36 dark:bg-gray-900 sm:px-6 lg:px-8">
      <h1 className="mb-10 text-center text-3xl font-extrabold leading-relaxed tracking-tight text-gray-900 dark:text-white md:text-5xl lg:text-5xl">
        Bolohi – Download Bolohi Apk Latest Version V5.13.0
      </h1>

      <p className=" mb-6 p-6 text-justify text-lg font-normal text-gray-500 dark:text-gray-400 sm:justify-between sm:px-16  md:text-center lg:justify-start lg:text-xl xl:px-48">
        BoloHi APK can be classified as a predominantly social application that
        enables users to engage in a wide variety of games provided by the app
        itself. Moreover, this versatile platform facilitates users in expanding
        their social circle by connecting and making new friends. With BoloHi
        APK, users can not only enjoy games but also foster meaningful
        relationships.
      </p>
      <div className="flex flex-col items-center gap-4">
        <Link href="/bolohi/all">
          <button
            type="button"
            className="mb- me-2 rounded-lg border border-blue-700 px-8 py-4 text-center text-lg font-medium text-blue-700 hover:bg-blue-800 hover:text-white focus:outline-none focus:ring-4 focus:ring-blue-300 dark:border-blue-500 dark:text-blue-500 dark:hover:bg-blue-500 dark:hover:text-white dark:focus:ring-blue-800"
          >
            Download Latest Version
          </button>
        </Link>
        <Link href="/bolohi/all">
          <button
            type="button"
            className="mb-2 me-2 rounded-lg border border-red-700 p-5 text-center text-sm font-medium text-red-700 hover:bg-red-800 hover:text-white focus:outline-none focus:ring-4 focus:ring-red-300 dark:border-red-500 dark:text-red-500 dark:hover:bg-red-600 dark:hover:text-white dark:focus:ring-red-900"
          >
            Download Old Version
          </button>
        </Link>
      </div>
    </div>
  );
};

export default HeroSection;
