import Image from "next/image";
import logo from "../images/logo.svg";

export default function Navbar() {
  return (
    <div className="flex flex-row items-center justify-between">
      <div className="relative h-20 w-32 md:h-20 md:w-40">
        <Image
          src={logo}
          layout="fill"
          objectFit="contain"
          className="cursor-pointer"
        />
      </div>
      <div className="flex flex-row space-x-10 font-inter md:text-lg">
        <p className="navbarOption">Features</p>
        <p className="navbarOption">Team</p>
        <p className="navbarOption">Sign In</p>
      </div>
    </div>
  );
}
