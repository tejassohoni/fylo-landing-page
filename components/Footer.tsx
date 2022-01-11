import Image from "next/image";
import logoWhite from "../images/logo white.svg";
import phoneIcon from "../images/icon-phone.svg";
import mailIcon from "../images/icon-email.svg";

export default function Footer() {
  return (
    <div className="bg-vDarkBlue ">
      <div>
        <div className="mx-10 pt-16 pb-20">
          <div className="relative h-20 w-40 mb-10">
            <Image src={logoWhite} layout="fill" objectFit="contain" />
          </div>
          <div className="flex flex-col md:grid grid-cols-4">
            <div>
              <div className="flex flex-row items-center">
                <div className="relative h-6 w-6">
                  <Image src={phoneIcon} layout="fill" objectFit="contain" />
                </div>
                <h1 className="ml-4 font-inter text-lg text-white">
                  Phone : +91 12345 67890
                </h1>
              </div>
              <div className="flex flex-row items-center my-6">
                <div className="relative h-6 w-6 ">
                  <Image src={mailIcon} layout="fill" objectFit="contain" />
                </div>
                <h1 className="ml-4 font-inter text-lg text-white">
                  Email : example@fylo.in
                </h1>
              </div>
            </div>
            <div className="mb-6 md:mb-0">
              <h3 className="footerSubText">About Us</h3>
              <h3 className="footerSubText">Jobs</h3>
              <h3 className="footerSubText">Press</h3>
              <h3 className="footerSubText">Blog</h3>
            </div>
            <div>
              <h3 className="footerSubText">Contact us</h3>
              <h3 className="footerSubText">Terms</h3>
              <h3 className="footerSubText">Privacy</h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
