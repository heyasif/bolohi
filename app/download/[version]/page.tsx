import VersionDetailClient from "@/app/component/VersionDetailClient";
import { fetchAppData } from "@/app/config/fetchAppData";
import { Metadata } from "next";

export async function generateMetadata({
  params,
}: {
  params: { version: string };
}): Promise<Metadata> {
  const appData = await fetchAppData();

  const versionData = appData.versions.find(
    (v) => v.version === params.version,
  );

  if (!versionData) {
    throw new Error("Version not found");
  }

  return {
    title: `Download BoloHi Version ${versionData.version}`,
    description: `Download BoloHi Version ${versionData.version}, updated on ${versionData.release_date}.`,
    openGraph: {
      title: `Download BoloHi Version ${versionData.version}`,
      description: `Download BoloHi Version ${versionData.version}, updated on ${versionData.release_date}.`,
      url: `https://bolohi.com/version/${versionData.version}`,
      images: [
        {
          url: appData.common_details.icon_url,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      site: "@yourTwitterHandle",
      title: `Download BoloHi Version ${versionData.version}`,
      description: `Download BoloHi Version ${versionData.version}, updated on ${versionData.release_date}.`,
      image: appData.common_details.icon_url,
    },
  };
}

export default async function Page({
  params,
}: {
  params: { version: string };
}) {
  const appData = await fetchAppData();
  const versionData = appData.versions.find(
    (v) => v.version === params.version,
  );

  if (!versionData) {
    throw new Error("Version not found");
  }

  return <VersionDetailClient data={appData} version={versionData} />;
}
