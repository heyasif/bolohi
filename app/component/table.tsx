// pages/index.tsx
import React from "react";
import { GetServerSideProps } from "next";
import { AppData, Version } from "../types/type";
import { fetchAppData } from "../config/fetchAppData";

interface HomePageProps {
  appData: AppData | null;
  latestVersion: Version | null;
}

const TableData: React.FC<HomePageProps> = ({ appData, latestVersion }) => {
  if (!appData || !latestVersion) {
    return <div>Failed to load data</div>;
  }

  return (
    <div>
      <h1 className="my-4 text-center text-2xl font-bold">
        {appData?.app_name}
      </h1>
      {latestVersion && (
        <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
          <table className="w-full text-left text-sm text-gray-500 dark:text-gray-400 rtl:text-right">
            <thead className="bg-gray-50 text-xs uppercase text-gray-700 dark:bg-gray-700 dark:text-gray-400">
              <tr>
                <th scope="col" className="px-6 py-3">
                  Version
                </th>
                <th scope="col" className="px-6 py-3">
                  Release Date
                </th>
                <th scope="col" className="px-6 py-3">
                  Size
                </th>
                <th scope="col" className="px-6 py-3">
                  Architecture
                </th>
                <th scope="col" className="px-6 py-3">
                  Screen DPI
                </th>
                <th scope="col" className="px-6 py-3">
                  SHA-1
                </th>
                <th scope="col" className="px-6 py-3">
                  Download Link
                </th>
                <th scope="col" className="px-6 py-3">
                  What's New
                </th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b odd:bg-white even:bg-gray-50 dark:border-gray-700 odd:dark:bg-gray-900 even:dark:bg-gray-800">
                <td className="px-6 py-4">{latestVersion.version}</td>
                <td className="px-6 py-4">{latestVersion.release_date}</td>
                <td className="px-6 py-4">{latestVersion.size}</td>
                <td className="px-6 py-4">
                  {latestVersion.architecture.join(", ")}
                </td>
                <td className="px-6 py-4">{latestVersion.screen_dpi}</td>
                <td className="px-6 py-4">{latestVersion.sha1}</td>
                <td className="px-6 py-4">
                  <a
                    href={latestVersion.download_link}
                    className="text-blue-600 hover:underline"
                  >
                    Download
                  </a>
                </td>
                <td className="px-6 py-4">
                  <ul>
                    {latestVersion.whats_new.map((item, index) => (
                      <li key={index}>{item}</li>
                    ))}
                  </ul>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default TableData;

export const getServerSideProps: GetServerSideProps = async () => {
  try {
    const data = await fetchAppData();
    const latestVersion = data.versions.length > 0 ? data.versions[0] : null;
    console.log("Data fetched:", data);
    console.log("Latest version:", latestVersion);

    return {
      props: {
        appData: data,
        latestVersion,
      },
    };
  } catch (error) {
    console.error("Error in getServerSideProps:", error);
    return {
      props: {
        appData: null,
        latestVersion: null,
      },
    };
  }
};
