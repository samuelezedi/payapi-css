const BrandSection = () => {
  return (
    <section id="brand-background" className="mt-20  bg-mirageBlue">
      <div  className="py-24">
        <div className="lg:max-w-6xl lg:mx-auto lg:grid lg:grid-cols-2 lg:place-items-center">
          <div className="lg:hidden">
            <div className="grid grid-cols-2 md:grid-cols-3">
              <div className="flex justify-center py-6">
                <img src="assets/tesla-white.svg" className="max-w-28" alt="" />
              </div>
              <div className="flex justify-center py-6">
                <img
                  src="assets/microsoft-white.svg"
                  className="max-w-28"
                  alt=""
                />
              </div>
              <div className="flex justify-center py-6">
                <img src="assets/hp-white.svg" className="max-w-28" alt="" />
              </div>
              <div className="flex justify-center py-6 ">
                <img
                  src="assets/oracle-white.svg"
                  className="max-w-28"
                  alt=""
                />
              </div>
              <div className="flex justify-center py-6">
                <img
                  src="assets/google-white.svg"
                  className="max-w-28"
                  alt=""
                />
              </div>
              <div className="flex justify-center py-6">
                <img
                  src="assets/nvidia-white.svg"
                  className="max-w-28"
                  alt=""
                />
              </div>
            </div>
          </div>
          <div className="mt-8">
            <div className="px-8">
              <h1 className="text-white text-center text-4xl md:text-5xl lg:text-start">
                Who we work with
              </h1>
              <p className="mt-8 md:w-4/5 lg:w-full mx-auto lg:mx-0 text-lightSanHuanBlue text-lg text-center font-publicSans leading-loose lg:text-start">
                Today, millions of people around the world have successfully
                connected their accounts to apps they love using our API. We
                provide developers with the tools they need to create easy and
                accessible experiences for their users.
              </p>
            </div>
            <div className="mt-10 flex justify-center lg:px-8 lg:justify-start">
              <a
                href="#"
                className="px-8 py-3 bg-mirageBlue rounded-full text-white font-publicSans border border-white font-semibold hover:bg-white hover:text-mirageBlue"
              >
                About Us
              </a>
            </div>
          </div>
          <div className="hidden lg:block w-full ">
            <div className="grid grid-cols-2 md:grid-cols-3 w-full">
              <div className="flex justify-center py-6">
                <img src="assets/tesla-white.svg" className="max-w-32" alt="" />
              </div>
              <div className="flex justify-center py-6">
                <img
                  src="assets/microsoft-white.svg"
                  className="max-w-32"
                  alt=""
                />
              </div>
              <div className="flex justify-center py-6">
                <img src="assets/hp-white.svg" className="max-w-32" alt="" />
              </div>
              <div className="flex justify-center py-6 ">
                <img
                  src="assets/oracle-white.svg"
                  className="max-w-32"
                  alt=""
                />
              </div>
              <div className="flex justify-center py-6">
                <img
                  src="assets/google-white.svg"
                  className="max-w-32"
                  alt=""
                />
              </div>
              <div className="flex justify-center py-6">
                <img
                  src="assets/nvidia-white.svg"
                  className="max-w-32"
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BrandSection;
