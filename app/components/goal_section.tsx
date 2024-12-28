

const GoalSection = () => {
  return (
    <section className="mt-10 lg:mt-32 md:flex md:items-start md:justify-between lg:max-w-6xl lg:mx-auto">
        <div className="pt-14 px-7">
          <div className="flex justify-center">
            <img
              src="assets/home/desktop/icon-personal-finances.svg"
              alt=""
            />
          </div>
          <h1 className="mt-6 text-2xl md:text-sm lg:text-xl text-sanHuanBlue font-publicSans text-center font-bold">
            Personal Finances
          </h1>
          <p className="mt-6 text-sanHuanBlue font-publicSans text-lg text-center md:text-sm leading-8 lg:text-xl">
            Consolidate financial data from multiple sources and categorize
            transactions up to 2 years of history. Analyze reports to reconcile
            activities in your account.
          </p>
        </div>
      
        <div className="pt-14 px-7">
          <div className="flex justify-center">
            <img
              src="assets/home/desktop/icon-banking-and-coverage.svg"
              alt=""
            />
          </div>
          <h1 className="mt-6 text-2xl md:text-sm lg:text-xl text-sanHuanBlue font-publicSans text-center font-bold">
            Banking & Coverage
          </h1>
          <p className="mt-6 text-sanHuanBlue font-publicSans text-lg text-center md:text-sm leading-8 lg:text-xl">
            With our platform you can speed up account onboarding and support 
            ongoing payments for checking, savings, credit card, and brokerage account.
          </p>
        </div>
        <div className="pt-14 px-7">
          <div className="flex justify-center">
            <img
              src="assets/home/desktop/icon-consumer-payments.svg"
              alt=""
            />
          </div>
          <h1 className="mt-6 text-2xl md:text-sm lg:text-xl text-sanHuanBlue font-publicSans text-center font-bold">
            Consumer Payments
          </h1>
          <p className="mt-6 text-sanHuanBlue font-publicSans text-lg md:text-sm text-center leading-8 lg:text-xl">
          It’s easier to set up secure bank payments with us through a flow designed with 
          the user experience in mind. Customers could 
          instantly authenticate their account.
          </p>
        </div>
      </section>
  )
}

export default GoalSection