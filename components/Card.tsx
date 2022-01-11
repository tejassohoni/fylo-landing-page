import Image from "next/image";
import quotes from "../images/icon-quotes.svg";
import avatar from "../images/avatar-testimonial.jpg";

export default function Card() {
  return (
    <div className="w-96 shadow-2xl rounded-lg bg-white">
      <div className="flex flex-col py-5 px-5">
        <div className="relative h-4 w-4">
          <Image src={quotes} layout="fill" objectFit="contain" />
        </div>
        <div>
          <p className="font-raleway py-4">
            Fylo has improved our team productivity by an order of magnitude.
            Since making the switch our team has become a well-oiled
            collaboration machine.
          </p>
          <div className="flex flex-row items-center">
            <div className="relative h-10 w-10">
              <Image
                src={avatar}
                layout="fill"
                objectFit="contain"
                className="rounded-full"
              />
            </div>
            <div className="ml-4 flex flex-col">
              <h2 className="font-raleway text-lg font-semibold">
                Kyle Burton
              </h2>
              <h4 className="font-raleway text-sm">Founder & CEO, Huddle</h4>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
