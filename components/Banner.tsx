import Image from "next/image";
import files from "../images/illustration-1.svg";

export default function Banner() {
  return (
    <div className="flex flex-row justify-between items-center">
      <div className="flex flex-col my-4 w-md">
        <h1 className="font-raleway font-black text-4xl items-start my-4 leading-snug">
          All your files in one secure location, accessible anywhere.
        </h1>
        <p className="font-raleway font-light text-lg items-start mb-4 leading-normal">
          Fylo stores your most important files in one secure location. Access
          them wherever you need, share and collaborate with friends, family,
          and co-workers.
        </p>
        <div className="flex flex-row justify-between items-center">
          <input
            type="email"
            placeholder="Enter Your Email"
            className="flex-grow border border-black py-2 pl-2 rounded-md font-raleway outline-none"
          />
          <button className="ml-5 bg-brightblue py-2.5 px-20 rounded-md font-raleway text-white outline-none">
            Get Started
          </button>
        </div>
      </div>
      <div className="relative lg:h-md lg:w-md -mt-32">
        <Image src={files} layout="fill" objectFit="contain" />
      </div>
    </div>
  );
}
