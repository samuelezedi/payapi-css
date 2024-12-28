const PurposeSection = () => {
  return (
    <section className="mt-20 lg:mt-32 lg:max-w-6xl lg:mx-auto">
      <div className="px-7 lg:flex lg:items-center lg:justify-between lg:space-x-24 lg:w-full">
        <div className="bg-mirageBlue shadow-2xl shadow-mirageBlue rounded-md md:w-1/2 md:mx-auto overflow-hidden">
          <img
            className=""
            src="assets/home/desktop/illustration-easy-to-implement.svg"
            alt=""
          />
        </div>
        <div className="mt-10 lg:mt-0 lg:w-1/2">
          <h1 className="text-4xl text-sanHuanBlue text-center md:text-5xl lg:text-start">
            Easy to implement
          </h1>
          <p className="mt-8 lg:mt-5 lg:w-full text-sanHuanBlue font-publicSans text-lg md:text-md text-center leading-8 lg:text-start">
            Our API comes with just a few lines of code. 
            You’ll be up and running in no time. We built our 
            documentation page to integrate payments functionality with ease.
          </p>
        </div>
      </div>

      <div className="mt-10 lg:mt-32 px-7 lg:flex lg:items-center lg:justify-between lg:w-full ">
        <div className="lg:hidden rounded-md md:w-1/2 md:mx-auto overflow-hidden">
          <img
            className=""
            src="assets/home/desktop/illustration-simple-ui.svg"
            alt=""
          />
        </div>
        <div className="mt-10 lg:mt-0 lg:w-1/2 lg:mr-20">
          <h1 className="text-4xl text-sanHuanBlue text-center md:text-5xl lg:text-start lg:mr-auto">
            Simple UI & UX
          </h1>
          <p className="mt-8 text-sanHuanBlue font-publicSans text-lg md:text-md text-center lg:text-start leading-8">
            Our pre-built form is easy to integrate in your app or website’s
            checkout flow and designed to optimize conversion.
          </p>
        </div>
        <div className="hidden lg:block rounded-md md:w-1/2 md:mx-auto overflow-hidden">
          <img
            className=""
            src="assets/home/desktop/illustration-simple-ui.svg"
            alt=""
          />
        </div>
      </div>
    </section>
  );
};

export default PurposeSection;
