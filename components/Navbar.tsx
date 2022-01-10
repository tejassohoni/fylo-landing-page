import Image from "next/image";
import logo from "../images/logo.svg";

export default function Navbar() {
  return (
    <div className="flex flex-row items-center justify-between">
      <div className="relative h-20 w-40">
        <Image src={logo} layout="fill" objectFit="contain" />
      </div>
      <div className="hidden sm:flex flex-row space-x-10 font-raleway-400 text-lg ">
        <p className="navbarHover">Features</p>
        <p className="navbarHover">Team</p>
        <p className="navbarHover mr-28">Sign In</p>
      </div>
    </div>
  );
}
