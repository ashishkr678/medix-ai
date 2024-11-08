import FeatureSection from "../components/homepage/FeatureSection";
import HeroSection from "../components/homepage/HeroSection";
import MissionSection from "../components/homepage/MissionSection";
import NewsLetter from "../components/homepage/NewsLetter";
import UpdateSection from "../components/homepage/UpdateSection";

export default function Home() {
  return (
    <div className="bg-white">
      <HeroSection/>

      <MissionSection/>

      <FeatureSection/>

      <UpdateSection/>

      <NewsLetter/>
    </div>
  );
}
