import Image from "next/image";
import desktopCurve from "../images/bg-curve-desktop.svg";
import mobileCurve from "../images/bg-curve-mobile.svg";
import illustration2 from "../images/illustration-2.svg";
import arrow from "../images/icon-arrow.svg";
import { ArrowCircleRightIcon } from "@heroicons/react/solid";
import Card from "./Card";

export default function CardContainer() {
  return (
    <div>
      <div className="invisible md:visible relative h-40 min-w-full">
        <Image src={desktopCurve} layout="fill" objectFit="cover" />
      </div>
      <div className="relative h-40 min-w-full md:hidden">
        <Image src={mobileCurve} layout="fill" objectFit="cover" />
      </div>
      <div className="bg-lightGrayBlue">
        <div className="mx-10 flex flex-col md:flex-row justify-between">
          <div className="flex flex-col my-4 lg:w-md">
            <h1 className="font-raleway font-black text-2xl lg:text-4xl items-start mt-4 mb-8">
              Stay Productive, wherever you are
            </h1>
            <p className="font-raleway text-lg mb-4">
              Never let location be an issue when accessing your files. Fylo has
              you covered for all of your file storage needs.
            </p>
            <p className="font-raleway text-md mb-4">
              Securely share files and folders with friends, family and
              colleagues for live collaboration. No email attachments required!
            </p>
            <div className="flex flex-row cursor-pointer items-center text-teal border-b w-44 mb-14 border-teal hover:text-lightTeal hover:border-lightTeal transition duration-300 ease-out">
              <h4 className="font-raleway">See how fylo works</h4>
              <div className="ml-1 relative h-5 w-5">
                <ArrowCircleRightIcon />
              </div>
            </div>
            <Card />
          </div>
          <div className="relative h-96 w-96 md:h-md md:w-md mr-20 md:-mt-52">
            <Image src={illustration2} layout="fill" objectFit="contain" />
          </div>
        </div>
      </div>
    </div>
  );
}
