import Image from "next/image";
import { Card, Badge, Button } from "flowbite-react";

interface VersionCardProps {
  version: string;
  release_date: string;
  size: string;
  architecture: string[];
  screen_dpi: string;
  sha1: string;
  download_link: string;
  whats_new: string[];
  icon_url: string;
}

const VersionCard: React.FC<VersionCardProps> = ({
  version,
  release_date,
  size,
  architecture,
  screen_dpi,
  sha1,
  download_link,
  whats_new,
  icon_url,
}) => {
  return (
    <Card className="my-4 flex flex-col justify-between md:flex-row">
      <Image
        src={icon_url}
        alt={`Icon for version ${version}`}
        width={100}
        height={100}
        className="rounded-t-lg md:rounded-none md:rounded-l-lg"
      />
      <div className="flex w-full flex-col justify-between p-4">
        <h3 className="text-xl font-bold">Bolohi {version}</h3>
        <Badge color="info" className="my-2">
          Last Update: {release_date}
        </Badge>
        <p className="text-sm text-gray-700">Size: {size}</p>
        <p className="text-sm text-gray-700">
          Architecture: {architecture.join(", ")}
        </p>
        <p className="text-sm text-gray-700">Screen DPI: {screen_dpi}</p>
        <p className="truncate text-sm text-gray-700">SHA1: {sha1}</p>
        {/* <div className="my-2 flex flex-wrap gap-2">
          <p className="font-semibold">What's New:</p>
          {whats_new.map((update, index) => (
            <Badge key={index} color="info">
              {update}
            </Badge>
          ))}
        </div> */}
        <Button
          href={download_link}
          target="_blank"
          color="primary"
          className="mt-4"
        >
          Download
        </Button>
      </div>
    </Card>
  );
};

export default VersionCard;
