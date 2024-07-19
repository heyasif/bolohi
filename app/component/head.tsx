import React from "react";

const HeroSection: React.FC = () => {
  return (
    <div className="hero-section mt-0 flex flex-col items-center justify-center bg-gray-50 pb-10 pt-36  dark:bg-gray-900">
      <h1 className="mb-4 text-4xl font-extrabold leading-none tracking-tight text-gray-900 dark:text-white md:text-5xl lg:text-6xl">
        We invest in the world’s potential
      </h1>
      <p className="mb-6 text-lg font-normal text-gray-500 dark:text-gray-400 sm:justify-center  sm:px-16 lg:justify-start lg:text-xl xl:px-48">
        Here at Flowbite we focus on markets where technology, innovation, and
        capital can unlock long-term value and drive economic growth.
      </p>
      <a
        href="#"
        className="inline-flex items-center justify-center rounded-lg bg-blue-700 px-5 py-3 text-center text-base font-medium text-white hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-900"
      >
        Learn more
        <svg
          className="ms-2 size-3.5 rtl:rotate-180"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 14 10"
        >
          <path
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M1 5h12m0 0L9 1m4 4L9 9"
          />
        </svg>
      </a>
    </div>
  );
};

export default HeroSection;
