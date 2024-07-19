import { Card, Badge, Button } from "flowbite-react";
import Image from "next/image";

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

const VersionDetailClient = ({
  data,
  version,
}: {
  data: AppData;
  version: Version;
}) => {
  if (!version) return <p>Loading...</p>;

  return (
    <div className="container mx-auto p-4">
      <Card>
        <div className="mb-4 flex items-center">
          <Image
            src={data.common_details.icon_url}
            alt="App Icon"
            width={50}
            height={50}
            className="mr-4"
          />
          <div>
            <h3 className="text-xl font-bold">Version {version.version}</h3>
            <Badge color="info">Last Update: {version.release_date}</Badge>
            <p>Size: {version.size}</p>
            <p>Architecture: {version.architecture.join(", ")}</p>
            <p>Screen DPI: {version.screen_dpi}</p>
            <p>SHA1: {version.sha1}</p>
          </div>
        </div>
        <div className="my-2">
          <p className="font-semibold">What&apos;s New:</p>
          <ul>
            {version.whats_new.map((update, index) => (
              <li key={index}>
                <Badge color="info">{update}</Badge>
              </li>
            ))}
          </ul>
        </div>
        <div className="my-2">
          <p className="font-semibold">Description:</p>
          <p>{data.common_details.description}</p>
        </div>
        <div className="my-2">
          <p className="font-semibold">Features:</p>
          <ul>
            {data.common_details.features.map((feature, index) => (
              <li key={index}>
                <Badge color="info">{feature}</Badge>
              </li>
            ))}
          </ul>
        </div>
        <div className="my-2">
          <p className="font-semibold">Pros:</p>
          <ul>
            {data.common_details.pros.map((pro, index) => (
              <li key={index}>
                <Badge color="success">{pro}</Badge>
              </li>
            ))}
          </ul>
        </div>
        <div className="my-2">
          <p className="font-semibold">Cons:</p>
          <ul>
            {data.common_details.cons.map((con, index) => (
              <li key={index}>
                <Badge color="danger">{con}</Badge>
              </li>
            ))}
          </ul>
        </div>
        <div className="my-2 flex flex-wrap gap-2">
          {data.common_details.screenshots.map((screenshot, index) => (
            <Image
              key={index}
              src={screenshot}
              alt={`Screenshot ${index + 1}`}
              width={150}
              height={100}
              className="rounded"
            />
          ))}
        </div>
        <Button href={version.download_link} target="_blank" color="primary">
          Download
        </Button>
      </Card>
    </div>
  );
};

export default VersionDetailClient;
