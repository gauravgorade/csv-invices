import { Link } from "react-router-dom";
import { SlMenu } from "react-icons/sl";

const Header = ({ sidebarOpen, setSidebarOpen }) => {
  const toggleSidebar = () => {
    setSidebarOpen((prevState) => !prevState);
  };

  return (
    <header className="sticky top-0 z-999 flex w-full bg-white drop-shadow-1 dark:bg-boxdark dark:drop-shadow-none">
      <div className="flex flex-grow items-center justify-between px-4 py-2 shadow-2 md:px-6 2xl:px-11">
        <div className="flex items-center gap-2 sm:gap-4 lg:hidden">
          {/* <!-- Hamburger Toggle BTN --> */}
          <button
            onClick={toggleSidebar}
            aria-controls="sidebar"
            className="z-99999 block rounded-sm border border-stroke bg-white p-1.5 shadow-sm dark:border-strokedark dark:bg-boxdark lg:hidden"
          >
            <SlMenu />
          </button>
          {/* <!-- Hamburger Toggle BTN --> */}
          Copany name
        </div>

        <div className="hidden sm:block">Welcome, Agent jack</div>

        <div className="flex items-end gap-3 2xsm:gap-7">
        <span className="h-10 w-10 rounded-full  overflow-hidden cursor-pointer">
          <Link to="/profile">
           
              <img
                src="https://gauravgorade.vercel.app/static/media/coding_avatar2.554b34a17790a746b425.png "
                alt="User"
              />
            
          </Link>
          </span>
        </div>
      </div>
    </header>
  );
};

export default Header;
