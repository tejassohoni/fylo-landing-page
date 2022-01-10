import Banner from "./Banner";
import Navbar from "./Navbar";

export default function Header() {
  return (
    <div className="mt-6 mx-10 mr-20">
      <Navbar />
      <Banner />
    </div>
  );
}
