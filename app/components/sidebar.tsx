"use client"

interface SidebarProps {
  closeIcon: string;
}

const toggle = () => {
  document.getElementById('sidebar')?.classList.toggle("hidden");
}

const  Sidebar: React.FC<SidebarProps> = ({ closeIcon }) => {
  return (
    <div id="sidebar" className="hidden absolute right-0 top-0 h-full w-3/4 bg-mirageBlue opacity-100 overflow-y-auto font-publicSans">
      <div onClick={() => toggle()} className="flex items-center justify-end pt-10 pr-5 pb-5 cursor-pointer">
        <img src={closeIcon} alt="" />
      </div>
      <div className="border-b border-1 border-white mx-5"></div>
      <div className="mt-5">
        {["Pricing", "About", "Contact"].map((item, index) => (
          <a
            href="#"
            className="py-4 block text-[#FBFCFE] text-center font-bold"
            key={index}
          >
            {item}
          </a>
        ))}
      </div>
      <div className="mt-5 mx-5">
        <button className="py-3 block w-full bg-darkPink text-white text-sm font-bold rounded-full">
          Schedule a demo
        </button>
      </div>
    </div>
  );
};

export default Sidebar;
