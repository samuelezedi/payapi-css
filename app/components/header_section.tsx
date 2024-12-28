"use client"

import Image from "next/image"

const toggle = () => {
    document.getElementById("sidebar")?.classList.toggle("hidden");
  };

const HeaderSection = () => {
  return (
    <header className="px-8 lg:max-w-6xl mx-auto">
        <nav>
          <div className="flex items-center justify-between pt-10">
            <a href="#" className="">
              <Image
                src="assets/shared/desktop/logo.svg"
                alt="Pay Api Logo"
                width={120}
                height={120}
              />
            </a>

            <div className="hidden md:flex items-center justify-evenly lg:justify-start lg:w-4/6 ">
              {["Pricing", "About", "Contact"].map((item) => (
                <a href="#" className="text-lightSanHuanBlue hover:text-mirageBlue font-publicSans font-bold px-5">{item}</a>
              ))}
            </div>

            <div className="hidden md:block">
              <button className="px-5 py-3 bg-darkPink hover:bg-charmPink font-publicSans text-white text-sm font-bold rounded-full">Schedule a demo</button>
            </div>

            <div className="md:hidden" onClick={() => toggle()}>
              <Image
                className="cursor-pointer"
                src="assets/shared/mobile/menu.svg"
                alt="Vercel logomark"
                width={30}
                height={30}
              />
            </div>
          </div>
        </nav>
      </header>
  )
}

export default HeaderSection