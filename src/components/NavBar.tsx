import { Link, useLocation, useNavigate } from "react-router-dom";
import { GiHamburgerMenu } from "react-icons/gi";
import { AiOutlineSearch, AiOutlineClose } from "react-icons/ai";
import { BsBell, BsCameraVideo, BsYoutube } from "react-icons/bs";
import { TiMicrophone } from "react-icons/ti";
import { IoAppsSharp } from "react-icons/io5";
import { useAppDispatch, useAppSelector } from "../store/hooks";
import { changeSearchTerm, clearVideos } from "../store";

const NavBar = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const searchTerm = useAppSelector((state) => state.youtubeApp.searchTerm);

  const handleSearch = () => {
    if (location.pathname !== "/search") {
      navigate("/search");
    } else {
      dispatch(clearVideos());
      dispatch(getSearchPageVideos(false));
    }
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    handleSearch();
  };

  return (
    <div
      className="flex justify-between items-center px-14 h-14 bg-[#212121]
     opacity-95 sticky top-0 z-50"
    >
      <div className="flex gap-8 item-center text-2xl">
        <div className="flex items-center justify-center">
          <GiHamburgerMenu />
        </div>
        <Link to="/">
          <div className="flex gap-1 items-center justify-center">
            <BsYoutube className="text-3xl text-red-600" />
            <span className="text-xl font-medium">My Video App</span>
          </div>
        </Link>
      </div>
      <div className="flex items-center justify-center gap-5">
        <form onSubmit={handleSubmit}>
          <div className="flex bg-zinc-900 items-center h-10 px-4 pr-0">
            <div className="flex gap-4 items-center pr-5">
              <div>
                <AiOutlineSearch className="text-xl" />
              </div>
              <input
                type="text"
                value={searchTerm}
                onChange={(e) => dispatch(changeSearchTerm(e.target.value))}
                className="w-96 bg-zinc-900 focus:outline-none border-none"
              />
              <AiOutlineClose className="cursor-pointer text-xl" />
            </div>
            <button
              className="h-10 w-16 flex items-center justify-center
               bg-zinc-800"
            >
              <AiOutlineSearch className="text-xl" />
            </button>
          </div>
        </form>
        <div className="text-xl p-3 bg-zinc-900 rounded-full">
          <TiMicrophone />
        </div>
      </div>
      <div className="flex gap-5 items-center text-xl">
        <BsCameraVideo />
        <IoAppsSharp />
        <div className="relative">
          <BsBell />
          <span
            className="absolute bottom-2 left-2 text-xs bg-red-600
           rounded-full px-1"
          >
            9+
          </span>
        </div>
        <img
          src="https://img.freepik.com/free-photo/fashion-boy-with-yellow-jacket-blue-pants_71767-96.jpg?w=740&t=st=1715780134~exp=1715780734~hmac=617534c70b366090102f47322bc819dd110e23acffe3b0de461392ee0b18272c"
          alt="logo"
          className="h-8 w-9 rounded-full"
        />
      </div>
    </div>
  );
};

export default NavBar;
