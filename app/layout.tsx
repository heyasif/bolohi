// Import necessary modules
import Head from "next/head";
import "./globals.css";
import { fetchAppData } from "./config/fetchAppData";
import { FooterCmp } from "./component/footer";
import { Nav } from "./component/nav";
// Server Component in the App Router (app/layout.tsx)
export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  // Fetch data
  const appData = await fetchAppData();

  // Prepare metadata
  const metadata = {
    title: `${appData.app_name} – Download the Latest and Old Versions of ${appData.app_name} APK`,
    description: appData.common_details.description,
    keywords: `Bolohi, APK, download, latest version, old version, social app, games, community`,
    ogImage: appData.common_details.icon_url,
    ogUrl: "https://your-site-url.com",
    twitterHandle: "@yourTwitterHandle",
    latestVersion: appData.versions[0], // Assuming the latest version is the first in the array
  };

  // JSON-LD data
  const jsonLdData = {
    "@context": "https://schema.org",
    "@type": "MobileApplication",
    name: metadata.title,
    operatingSystem: "Android",
    applicationCategory: "SocialNetworkingApplication",
    developer: {
      "@type": "Organization",
      name: "BoloHi Team",
    },
    offers: {
      "@type": "Offer",
      price: "0", // Assuming it's free
      priceCurrency: "USD",
    },
    downloadUrl: metadata.latestVersion.download_link,
    featureList: appData.common_details.features,
    screenshot: appData.common_details.screenshots,
    softwareVersion: metadata.latestVersion.version,
    datePublished: metadata.latestVersion.release_date,
    releaseNotes: metadata.latestVersion.whats_new,
    description: appData.common_details.description,
  };

  return (
    <html lang="en">
      <head>
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
        <meta name="keywords" content={metadata.keywords} />

        <meta property="og:title" content={metadata.title} />
        <meta property="og:description" content={metadata.description} />
        <meta property="og:image" content={metadata.ogImage} />
        <meta property="og:url" content={metadata.ogUrl} />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content={metadata.twitterHandle} />
        <meta name="twitter:title" content={metadata.title} />
        <meta name="twitter:description" content={metadata.description} />
        <meta name="twitter:image" content={metadata.ogImage} />

        <link rel="canonical" href={metadata.ogUrl} />

        {/* JSON-LD Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdData) }}
        />
      </head>
      <body className="your-class-name">
        <Nav />
        {children}
      </body>
      <FooterCmp /> {/* Include the footer */}
    </html>
  );
}
