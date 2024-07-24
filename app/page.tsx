import HeroSection from "./component/head";
import { Nav } from "./component/nav";
import { PlayStore } from "./component/PlayStore";
import { Slider } from "./component/slider";
import BoloHiDetails from "./component/BoloHiDetails";
import AllVersions from "./bolohi/all/page";
import TableData from "./component/table";
import TextContainer from "./component/TextContainer";
import FeaturesList from "./component/FeaturesList";
import FAQComponent from "./component/FAQComponent";
import { homePageContent } from "./data/contentData";
import DownloadInstructions from "./component/DownloadInstructions";

export default function Home() {
  console.log(homePageContent);
  return (
    <>
      <div>
        {/* <Slider /> */}
        <HeroSection />
        <BoloHiDetails />

        <div>
          <hr className="mx-auto my-4 h-1 w-48 rounded border-0 bg-gray-100 dark:bg-gray-700 md:my-10" />
        </div>

        <DownloadInstructions
          steps={homePageContent.downloadInstructions.steps}
        />
        <div className="mt-10">
          {homePageContent.appDetails.map((detail, index) => (
            <div key={index}>
              <TextContainer
                title={detail.title}
                content={detail.description}
              />
              <hr className="mx-auto my-4 h-1 w-48 rounded border-0 bg-gray-100 dark:bg-gray-700 md:my-10" />
            </div>
          ))}
        </div>

        <FeaturesList features={homePageContent.features} />
        <FAQComponent faqs={homePageContent.faqs} />
      </div>
    </>
  );
}
