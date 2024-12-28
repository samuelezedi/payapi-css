
const FooterSection = () => {
  return (
    <footer className="mt-24 lg:mt-32 bg-mirageBlue ">
        <div className="lg:max-w-6xl lg:mx-auto py-12 md:px-8 md:flex md:items-center md:justify-between">
          <div className="flex justify-center ">
            <img src="assets/logo-white.svg" alt="" />
          </div>
      
          <div className="mt-5 md:mt-0 md:flex md:items-center md:justify-between lg:flex-auto lg:justify-start ">
            {["Pricing", "About", "Contact"].map((item) => (
              <a
                href="#"
                className="py-5 md:px-10 block md:flex text-lightSanHuanBlue hover:text-white text-center font-publicSans font-bold "
              >
                {item}
              </a>
            ))}
          </div>
          <div className="mt-6 md:mt-0 flex items-center justify-center space-x-6">
            <img
              className="cursor-pointer"
              src="assets/shared/desktop/facebook.svg"
              alt=""
            />
            <img
              className="cursor-pointer"
              src="assets/shared/desktop/twitter.svg"
              alt=""
            />
            <img
              className="cursor-pointer"
              src="assets/shared/desktop/linkedin.svg"
              alt=""
            />
          </div>
        </div>
      </footer>
  )
}

export default FooterSection