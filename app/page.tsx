import { FooterComponent } from "flowbite-react";
import { CardSee } from "./component/Card";
import HeroSection from "./component/head";
import { Nav } from "./component/nav";
import { PlayStore } from "./component/PlayStore";
import { Slider } from "./component/slider";
import BoloHiDetails from "./component/BoloHiDetails";
import AllVersions from "./bolohi/all/page";

export default function Home() {
  return (
    <>
      {/* <Slider /> */}
      <HeroSection />
      <BoloHiDetails />

      {/* <div className="container mx-auto flex flex-wrap items-center justify-evenly">
        <div className="w-full p-2 sm:w-1/2 md:w-1/3 lg:w-1/4">
          <CardSee />
        </div>
        <div className="w-full p-2 sm:w-1/2 md:w-1/3 lg:w-1/4">
          <CardSee />
        </div>
        <div className="w-full p-2 sm:w-1/2 md:w-1/3 lg:w-1/4">
          <CardSee />
        </div>
      </div> */}
      <PlayStore />
      {/* <AllVersions /> */}
    </>
  );
}
