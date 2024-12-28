import ScheduleForm from "./schedule_form";

const HeroSection = () => {
  return (
    <section  className="px-8 lg:px-0 mt-11 lg:max-w-7xl mx-auto">
      <div className="lg:hidden flex justify-center ">
        <div className=" w-1/3 md:w-1/6">
          <img
            src="assets/home/desktop/illustration-phone-mockup.svg"
            className="w-full object-cover"
            alt=""
          />
        </div>
      </div>

      <div className="mt-10 text-center lg:grid lg:grid-cols-2 place-items-center ">
        <div className="lg:m-0 lg:p-10">
          <div className="mt-8">
            <h1 className="text-4xl lg:text-6xl font-dmSerifDisplay text-sanHuanBlue text-center lg:text-start lg:ml-auto lg:leading-13">
              Start building<br className="hidden lg:block"/> with our <br className="hidden md:block lg:hidden"/> APIs
              for<br className="hidden lg:block"/> absolutely free.
            </h1>
          </div>
          <div className="mt-10">
            <ScheduleForm />
          </div>
          <div className="text-center lg:text-start font-publicSans text-lightSanHuanBlue mt-7 md:mt-5">
            <h3>
              Have any question? &nbsp;
              <a href="#" className="font-bold">
                Contact Us
              </a>
            </h3>
          </div>
        </div>
        <div className="hidden lg:flex lg:justify-center ">
          <div className="w-1/3 md:w-1/6 lg:w-auto">
            <img
              src="assets/home/desktop/illustration-phone-mockup.svg"
              className="w-full object-cover"
              alt=""
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
