import { Link } from "react-router-dom";

import { GiHamburgerMenu } from "react-icons/gi";
import { BsYoutube } from "react-icons/bs";

const NavBar = () => {
  return (
    <div
      className="flex gap-10 items-center px-14 h-14 bg-[#212121] 
    opacity-95 sticky top-0 z-50"
    >
      <div className="flex gap-8 item-center text-2xl">
        <GiHamburgerMenu />
      </div>
      <Link to="/">
        <div className="flex gap-1 items-center justify-center">
          <BsYoutube className="text-3xl text-red-600" />
          <span className="text-xl font-medium">My Video App</span>
        </div>
      </Link>
    </div>
  );
};

export default NavBar;
