import "./globals.css";
import { fetchAppData } from "./config/fetchAppData";
import { FooterCmp } from "./component/footer";
import { Nav } from "./component/nav";

// Server Component in the App Router (app/layout.tsx)
export async function generateMetadata() {
  // Fetch data
  const appData = await fetchAppData();

  // Determine the latest version
  const latestVersion = appData.versions[0];

  // Return the metadata object
  return {
    title: `${appData.app_name} Latest Version ${latestVersion.version} Download | Bolohi`,
    description: `Download all versions of the Bolohi Android app, from the latest updates to older versions. Access a complete archive of Bolohi APK files for secure and fast downloading. Stay updated with the newest features or roll back to previous versions easily.`,
  };
}

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  // Fetch data for use in JSON-LD
  const appData = await fetchAppData();
  const latestVersion = appData.versions[0];

  // JSON-LD data
  const jsonLdData = {
    "@context": "https://schema.org",
    "@type": "MobileApplication",
    name: `${appData.app_name} ${latestVersion.version} APK – Download Latest Version`,
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
    downloadUrl: latestVersion.download_link,
    featureList: appData.common_details.features,
    screenshot: appData.common_details.screenshots,
    softwareVersion: latestVersion.version,
    datePublished: latestVersion.release_date,
    releaseNotes: latestVersion.whats_new,
    description: appData.common_details.description,
  };

  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/fav.jpg" />
        <meta
          name="keywords"
          content="Bolohi app, Bolohi Android app, Bolohi old versions, Bolohi latest version, download Bolohi APK, Bolohi all versions, Android app downloads, Bolohi APK download"
        />

        <meta
          property="og:image"
          content="https://your-site-url.com/og-image.jpg"
        />
        <meta property="og:url" content="https://your-site-url.com" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@yourTwitterHandle" />
        <meta
          name="twitter:image"
          content="https://your-site-url.com/twitter-image.jpg"
        />

        <link rel="canonical" href="https://your-site-url.com" />

        {/* JSON-LD Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdData) }}
        />
      </head>
      <body className="your-class-name">
        <Nav />
        {children}
        <FooterCmp />
      </body>
    </html>
  );
}
