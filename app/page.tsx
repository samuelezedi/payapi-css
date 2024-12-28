import HeroSection from "./components/hero_section";
import BrandSection from "./components/brand_section";
import HeaderSection from "./components/header_section";
import PurposeSection from "./components/purpose_section";
import GoalSection from "./components/goal_section";
import ReadyToStartSection from "./components/ready_to_start_section";
import FooterSection from "./components/footer_section";

export default function Home() {
  return (
    <>
      <div id="desktop-background">
        <HeaderSection />
        <HeroSection />
      </div>
      <BrandSection />
      <div id="purpose-background">
        <PurposeSection />
      </div>
      <GoalSection />
      <ReadyToStartSection />
      <FooterSection />
    </>
  );
}
