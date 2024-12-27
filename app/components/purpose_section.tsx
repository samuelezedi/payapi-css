
const PurposeSection = () => {
  return (
    <section className="mt-20">
        <div className="px-7">
          <div className="bg-mirageBlue shadow-2xl shadow-mirageBlue rounded-md md:w-1/2 md:mx-auto overflow-hidden">
            <img className="" src="assets/home/desktop/illustration-easy-to-implement.svg" alt="" />
          </div>
          <div className="mt-10">
            <h1 className="text-4xl text-sanHuanBlue text-center md:text-5xl">Easy to implement</h1>
            <p className="mt-8 text-sanHuanBlue font-publicSans text-lg md:text-md text-center leading-8">Our API comes with just a few lines of code. You’ll be up and running in no time. 
              We built our documentation page to integrate payments functionality with ease.</p>
          </div>
        </div>
        <div className="mt-10 px-7">
          <div className=" rounded-md md:w-1/2 md:mx-auto overflow-hidden">
            <img className="" src="assets/home/desktop/illustration-simple-ui.svg" alt="" />
          </div>
          <div className="mt-10">
            <h1 className="text-4xl text-sanHuanBlue text-center md:text-5xl">Simple UI & UX</h1>
            <p className="mt-8 text-sanHuanBlue font-publicSans text-lg md:text-md text-center leading-8">
            Our pre-built form is easy to integrate in your app or website’s 
            checkout flow and designed to optimize conversion. 
            </p>
          </div>
        </div>
      </section>
  )
}

export default PurposeSection