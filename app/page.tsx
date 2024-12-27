import HeroSection from "./components/hero_section";
import BrandSection from "./components/brand_section";
import HeaderSection from "./components/header_section";
import PurposeSection from "./components/purpose_section";
import GoalSection from "./components/goal_section";
import ScheduleForm from "./components/schedule_form";

export default function Home() {
  return (
    <>
      <HeaderSection />
      <HeroSection />
      <BrandSection />
      <PurposeSection />
      <GoalSection />

      <section className="mt-14">
        <div className="px-8">
          <h1 className="text-sanHuanBlue text-4xl text-center">Ready to start?</h1>
          <div className="mt-10">
          <ScheduleForm />
          </div>
        </div>
      </section>

      <footer className="mt-24 py-12 md:px-8 bg-mirageBlue md:flex md:items-center md:justify-between">
        <div className="flex justify-center ">
          <img src="assets/logo-white.svg" alt="" />
        </div>
        <div className="mt-5 md:mt-0 md:flex md:items-center md:justify-between">
          {["Pricing", "About", "Contact"].map((item) => (
            <a href="#" className="py-5 md:px-10 block md:flex text-lightSanHuanBlue hover:text-white text-center font-publicSans font-bold ">{item}</a>
          ))}
        </div>
        <div className="mt-6 md:mt-0 flex items-center justify-center space-x-6">
          <img className="cursor-pointer" src="assets/shared/desktop/facebook.svg" alt="" />
          <img className="cursor-pointer" src="assets/shared/desktop/twitter.svg" alt="" />
          <img className="cursor-pointer"  src="assets/shared/desktop/linkedin.svg" alt="" />
        </div>
      </footer>
    </>
  );
}
