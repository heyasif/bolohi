"use client";
import { useEffect, useState } from "react";
import { Pagination, Select, TextInput } from "flowbite-react";
import VersionCard from "@/app/component/BolohiCard";
import Link from "next/link";

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

const AllVersions = () => {
  const [data, setData] = useState<AppData | null>(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [sortOrder, setSortOrder] = useState<"asc" | "desc">("asc");
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 12;

  useEffect(() => {
    fetch("/bolohi2.json")
      .then((response) => response.json())
      .then((data) => setData(data));
  }, []);

  if (!data) return <p>Loading...</p>;

  const filteredVersions = data.versions
    .filter((version) =>
      version.version.toLowerCase().includes(searchTerm.toLowerCase()),
    )
    .sort((a, b) => {
      if (sortOrder === "asc") {
        return a.version.localeCompare(b.version);
      } else {
        return b.version.localeCompare(a.version);
      }
    });

  const totalItems = filteredVersions.length;
  const totalPages = Math.ceil(totalItems / itemsPerPage);

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  const startIndex = (currentPage - 1) * itemsPerPage;
  const selectedVersions = filteredVersions.slice(
    startIndex,
    startIndex + itemsPerPage,
  );

  return (
    <div className="container mx-auto p-4">
      <div className="mb-4 flex items-center justify-between">
        <TextInput
          type="text"
          placeholder="Search version..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="w-1/3"
        />
        <Select
          value={sortOrder}
          onChange={(e) => setSortOrder(e.target.value as "asc" | "desc")}
          className="w-1/3"
        >
          <option value="asc">Sort by Version (Asc)</option>
          <option value="desc">Sort by Version (Desc)</option>
        </Select>
      </div>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
        {selectedVersions.map((version, index) => (
          <Link
            key={index}
            href={`/download/${version.version}`}
            legacyBehavior
          >
            <a>
              <VersionCard
                version={version.version}
                release_date={version.release_date}
                size={version.size}
                architecture={version.architecture}
                screen_dpi={version.screen_dpi}
                sha1={version.sha1}
                download_link={version.download_link}
                whats_new={version.whats_new}
                icon_url={data.common_details.icon_url}
              />
            </a>
          </Link>
        ))}
      </div>
      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={handlePageChange}
        className="mt-4"
      />
    </div>
  );
};

export default AllVersions;
