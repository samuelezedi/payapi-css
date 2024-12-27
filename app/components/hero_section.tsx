import ScheduleForm from "./schedule_form";

const HeroSection = () => {
  return (
    <section className="px-8 mt-11">
      <div className="flex justify-center ">
        <div className=" w-1/3 md:w-1/6">
          <img
            src="assets/home/desktop/illustration-phone-mockup.svg"
            className="w-full object-cover"
            alt=""
          />
        </div>
      </div>
      <div className="mt-8">
        <h1 className="text-4xl font-dmSerifDisplay text-sanHuanBlue text-center">
          Start building with our <br className="hidden md:block"></br> APIs for
          absolutely free.
        </h1>
      </div>

      <div className="mt-8 text-center ">
        <ScheduleForm />
        <div className="text-center font-publicSans text-lightSanHuanBlue mt-7 md:mt-5">
          <h3>
            Have any question?
            <a href="#" className="font-bold">
              Contact Us
            </a>
          </h3>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
