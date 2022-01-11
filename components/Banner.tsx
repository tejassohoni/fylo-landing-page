import Image from "next/image";
import illustration1 from "../images/illustration-1.svg";

export default function Banner() {
  return (
    <div className="flex flex-col lg:flex-row justify-between items-center lg:-mt-32">
      <div className="flex flex-col my-4 lg:w-md">
        <h1 className="font-inter font-black text-2xl lg:text-4xl items-start my-4 leading-snug">
          All your files in one secure location, accessible anywhere.
        </h1>
        <p className="font-inter font-light lg:text-lg items-start mb-4 leading-normal">
          Fylo stores your most important files in one secure location. Access
          them wherever you need, share and collaborate with friends, family,
          and co-workers.
        </p>
        <div className=" flex flex-col md:flex-row items-center sm:w-48 md:w-44 xl:w-96">
          <input
            type="email"
            placeholder="Enter Your Email"
            className=" lg:flex-grow border min-w-full sm:min-w-fit lg:min-w-full border-1 border-lightGray mb-4 md:mb-0 py-2 pl-2 rounded-lg font-inter outline-none"
          />
          <button className="md:ml-5 bg-brightBlue py-2 md:py-3 lg:py-3 min-w-full md:min-w-fit lg:min-w-fit sm:px-10 min-h-full rounded-lg font-inter text-white outline-none sm:text-sm hover:bg-blue-600 hover:shadow-lg active:scale-90 transition duration-300 ease-out">
            Get Started
          </button>
        </div>
      </div>
      <div className="relative h-96 w-96 md:h-sm md:w-sm lg:h-md lg:w-md">
        <Image src={illustration1} layout="fill" objectFit="contain" />
      </div>
    </div>
  );
}
