import ScheduleForm from "./schedule_form"
const ReadyToStartSection = () => {
  return (
    <section className="mt-14 lg:mt-32 md:max-w-lg md:mx-auto lg:max-w-6xl ">
        <div className="px-8 lg:flex lg:items-center lg:justify-between">
          <div className="lg:flex-auto lg:mx-0 ">
          <h1 className="text-sanHuanBlue text-4xl lg:text-5xl text-center lg:text-start">
            Ready to start?
          </h1>
          </div>
          
          <div className="mt-10 lg:mt-0 lg:flex-auto md:mx-auto ">
            <ScheduleForm />
          </div>
        </div>
      </section>
  )
}

export default ReadyToStartSection