export default function GetStartedCard() {
  return (
    <div className="bg-desatDarkBlue ">
      <div>
        <div className="mx-10 flex flex-col md:flex-row justify-between pt-24 pb-20 items-center">
          <div className="flex flex-col my-4 lg:w-md text-white text-center md:text-left">
            <h1 className="font-inter font-black text-2xl lg:text-4xl items-center mt-4 mb-6">
              Get early access today
            </h1>
            <p className="font-inter text-lg mb-4">
              It only takes a minute to sign up and our free starter tier is
              extremely generous. If you have any questions, our support team
              would be happy to help you.
            </p>
          </div>
          <div className="flex flex-col lg:w-md my-4">
            <input
              className="w-96 min-w-full sm:min-w-fit lg:min-w-full font-inter py-4 pl-4 text items-center mb-6 rounded-lg"
              type="email"
              placeholder="Enter your email"
            />
            <button className="md:w-60 bg-brightBlue py-4 min-w-full md:min-w-fit lg:min-w-fit sm:px-10 min-h-full rounded-lg font-inter text-white outline-none sm:text-sm hover:bg-blue-600 hover:shadow-lg active:scale-90 transition duration-300 ease-out">
              Get Started
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
