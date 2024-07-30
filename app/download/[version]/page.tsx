"use client";

import { useState, useEffect } from "react";
import { Card, Button } from "flowbite-react";
import Image from "next/image";
import Head from "next/head";

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

export default function VersionDetail({
  params,
}: {
  params: { version: string };
}) {
  const [data, setData] = useState<AppData | null>(null);
  const [versionData, setVersionData] = useState<Version | null>(null);
  const [countdown, setCountdown] = useState<number | null>(null);

  useEffect(() => {
    async function fetchData() {
      const res = await fetch("/bolohi2.json");
      const data: AppData = await res.json();
      const versionData = data.versions.find(
        (v) => v.version === params.version,
      );

      if (!versionData) {
        throw new Error("Version not found");
      }

      setData(data);
      setVersionData(versionData);
    }

    fetchData();
  }, [params.version]);

  useEffect(() => {
    if (countdown === 0) {
      window.location.href = versionData!.download_link;
    }
    if (countdown !== null && countdown > 0) {
      const timer = setTimeout(() => setCountdown(countdown - 1), 1000);
      return () => clearTimeout(timer);
    }
  }, [countdown, versionData]);

  const handleDownloadClick = () => {
    setCountdown(20);
  };

  if (!data || !versionData) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <Head>
        <title>{`Download BoloHi Version ${versionData.version}`}</title>
        <meta
          name="description"
          content={`Download BoloHi Version ${versionData.version}, updated on ${versionData.release_date}.`}
        />
        <meta name="keywords" content="BoloHi, download, version, update" />
        <meta name="author" content="BoloHi Team" />
      </Head>

      <div className="container mx-auto space-y-6 p-4 sm:p-6">
        <Card className="rounded-lg p-4 shadow-lg sm:p-8">
          <div className="mb-4 flex flex-col items-center sm:flex-row sm:items-start sm:space-x-6">
            <Image
              src={data.common_details.icon_url}
              alt="App Icon"
              width={100}
              height={100}
              className="mb-4 sm:mb-0"
            />
            <div className="text-center sm:text-left">
              <h3 className="text-lg font-bold sm:text-2xl">
                BoloHi Version {versionData.version}
              </h3>
              <p className="text-xs text-gray-600 sm:text-sm">
                <strong>Last Update:</strong> {versionData.release_date}
              </p>
              <p className="text-xs text-gray-600 sm:text-sm">
                <strong>Size:</strong> {versionData.size}
              </p>
              <p className="text-xs text-gray-600 sm:text-sm">
                <strong>Architecture:</strong>{" "}
                {versionData.architecture.join(", ")}
              </p>
              <p className="text-xs text-gray-600 sm:text-sm">
                <strong>Screen DPI:</strong> {versionData.screen_dpi}
              </p>
              <p className="break-words text-xs text-gray-600 sm:text-sm">
                <strong>SHA1:</strong> {versionData.sha1}
              </p>
            </div>
          </div>
          <Button
            onClick={handleDownloadClick}
            className="mt-4 rounded bg-blue-600 px-4 py-2 text-sm font-bold text-white hover:bg-blue-700"
          >
            {countdown === null ? "Download" : `Redirecting in ${countdown}s`}
          </Button>
        </Card>

        <Card className="rounded-lg p-4 shadow-lg sm:p-8">
          <div className="my-4">
            <h4 className="mb-2 font-semibold">What's New:</h4>
            <ul className="ml-4 list-inside list-disc text-gray-700">
              {versionData.whats_new.map((update, index) => (
                <li key={index}>{update}</li>
              ))}
            </ul>
          </div>
        </Card>

        <Card className="rounded-lg p-4 shadow-lg sm:p-8">
          <div className="my-4">
            <h4 className="mb-2 font-semibold">Description:</h4>
            <p className="text-gray-700">{data.common_details.description}</p>
          </div>
        </Card>

        <Card className="rounded-lg p-4 shadow-lg sm:p-8">
          <div className="my-4">
            <h4 className="mb-2 font-semibold">Features:</h4>
            <ul className="ml-4 list-inside list-disc text-gray-700">
              {data.common_details.features.map((feature, index) => (
                <li key={index}>{feature}</li>
              ))}
            </ul>
          </div>
        </Card>

        <Card className="rounded-lg p-4 shadow-lg sm:p-8">
          <div className="my-4">
            <h4 className="mb-2 font-semibold">Pros:</h4>
            <ul className="ml-4 list-inside list-disc text-gray-700">
              {data.common_details.pros.map((pro, index) => (
                <li key={index}>{pro}</li>
              ))}
            </ul>
          </div>
        </Card>

        <Card className="rounded-lg p-4 shadow-lg sm:p-8">
          <div className="my-4">
            <h4 className="mb-2 font-semibold">Cons:</h4>
            <ul className="ml-4 list-inside list-disc text-gray-700">
              {data.common_details.cons.map((con, index) => (
                <li key={index}>{con}</li>
              ))}
            </ul>
          </div>
        </Card>

        <Card className="rounded-lg p-4 shadow-lg sm:p-8">
          <div className="my-6 flex flex-wrap gap-4">
            {data.common_details.screenshots.map((screenshot, index) => (
              <Image
                key={index}
                src={screenshot}
                alt={`Screenshot ${index + 1}`}
                width={150}
                height={100}
                className="rounded-lg shadow-sm"
              />
            ))}
          </div>
        </Card>
      </div>
    </>
  );
}
