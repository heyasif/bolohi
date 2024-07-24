"use client";
import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Card, Badge, Button } from "flowbite-react";

interface Version {
  version: string;
  release_date: string;
  size: string;
  architecture: string[];
  screen_dpi: string;
  sha1: string;
  download_link: string;
  whats_new: string[];
}

interface CommonDetails {
  icon_url: string;
  description: string;
  features: string[];
  pros: string[];
  cons: string[];
  screenshots: string[];
}

interface AppData {
  app_name: string;
  platform: string;
  developer: string;
  common_details: CommonDetails;
  versions: Version[];
}

const BoloHiDetails = () => {
  const [data, setData] = useState<AppData | null>(null);

  useEffect(() => {
    fetch("/bolohi2.json")
      .then((response) => response.json())
      .then((data) => setData(data));
  }, []);

  if (!data) return <p>Loading...</p>;

  return (
    <div className="container mx-auto p-4">
      {/* <div className="mb-8 flex items-center space-x-4">
        <Image
          src={data.common_details.icon_url}
          alt={data.app_name}
          width={96}
          height={96}
          className="rounded-full"
        />
        <div>
          <h2 className="text-2xl font-bold">
            {data.app_name} for {data.platform}
          </h2>
          <p className="text-gray-600">Developed by {data.developer}</p>
          <p className="text-gray-800">{data.common_details.description} s</p>
        </div>
      </div> */}

      <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
        {data.versions.slice(0, 3).map((version, index) => (
          <div
            key={index}
            className="max-w-sm rounded-lg border border-gray-200 bg-white shadow dark:border-gray-700 dark:bg-gray-800"
          >
            <a href={version.download_link} target="_blank">
              <Image
                src={data.common_details.icon_url}
                alt={data.app_name}
                width={96}
                height={96}
                className="mx-auto mt-4 rounded-t-lg"
              />
            </a>
            <div className="p-5">
              <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                Version {version.version}
              </h5>
              <Badge color="info" className="mb-2">
                Last Update: {version.release_date}
              </Badge>
              <p className="mb-1 text-sm">
                <strong>Size:</strong> {version.size}
              </p>
              <p className="mb-1 text-sm">
                <strong>Architecture:</strong> {version.architecture.join(", ")}
              </p>
              <p className="mb-1 text-sm">
                <strong>Screen DPI:</strong> {version.screen_dpi}
              </p>
              <p className="mb-1 text-sm">
                <strong>SHA1:</strong> {version.sha1}
              </p>
              <a
                href={version.download_link}
                target="_blank"
                className="mt-4 inline-flex items-center rounded-lg bg-blue-700 px-3 py-2 text-center text-sm font-medium text-white hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              >
                Download
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
          </div>
        ))}
      </div>

      <div className="mt-8 text-center">
        <Link href="/bolohi/all" passHref>
          <Button color="primary">View All</Button>
        </Link>
      </div>
    </div>
  );
};

export default BoloHiDetails;
