"use client";
import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Card, Badge, Button, Spinner } from "flowbite-react";

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

  if (!data)
    return (
      <div className="flex items-center justify-center p-4">
        <Spinner aria-label="Extra large spinner example" size="xl" />
      </div>
    );

  return (
    <div className="  container mx-auto mt-12">
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {data.versions.slice(0, 3).map((version, index) => (
          <Card
            key={index}
            className="mx-auto flex max-w-sm flex-col items-center p-5"
          >
            <Image
              src={data.common_details.icon_url}
              alt={data.app_name}
              width={96}
              height={96}
              className="rounded-full"
            />

            <h5 className=" text-lg font-bold text-gray-900 dark:text-white sm:text-xl">
              Version {version.version}
            </h5>
            <Badge color="info">Last Update: {version.release_date}</Badge>
            <p className="text-sm text-gray-600">Size: {version.size}</p>
            <p className=" text-sm text-gray-600">
              Architecture: {version.architecture.join(", ")}
            </p>
            <p className=" text-sm text-gray-600">
              Screen DPI: {version.screen_dpi}
            </p>
            <p className=" break-all text-sm text-gray-600">
              SHA1: {version.sha1}
            </p>

            <Link href={`/download/${version.version}`} passHref>
              <Button color="blue" pill className="w-full">
                Download
              </Button>
            </Link>
          </Card>
        ))}
      </div>
      <div className="mt-8 flex justify-center">
        <Link href="/bolohi/all" passHref>
          <Button color="primary">View All</Button>
        </Link>
      </div>
    </div>
  );
};

export default BoloHiDetails;
