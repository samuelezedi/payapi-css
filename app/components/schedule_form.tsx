const ScheduleForm = () => {
  return (
    <div className="w-full md:w-3/5 md:m-auto md:flex md:items-center md:justify-center">
      <input
        type="text"
        name="email"
        className="px-5 py-4 md:py-4x2 block w-full shadow-xl font-publicSans text-sm font-bold rounded-full md:rounded-r-none focus:outline-none"
        placeholder="Enter email address"
      />
      <button
        type="submit"
        className="mt-5 md:mt-0 py-4 md:px-2 md:border-none w-full md:w-3/5 bg-darkPink hover:bg-charmPink text-white rounded-full md:-ml-6 font-publicSans font-bold"
      >
        Schedule a Demo
      </button>
    </div>
  );
};

export default ScheduleForm;
