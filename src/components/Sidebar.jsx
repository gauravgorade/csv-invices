import React from "react";
import { Link } from "react-router-dom";
import { RxDashboard } from "react-icons/rx";
import {
  IoNewspaperOutline,
  IoCloudUploadOutline,
  IoLogOutOutline,
} from "react-icons/io5";
import { FaArrowLeft } from "react-icons/fa6";
import { FiUser } from "react-icons/fi";
import Logo from "../images/logo.svg";

const navData = [
  { label: "Dashboard", url: "/", icon: <RxDashboard /> },
  { label: "Invoices", url: "/invoices", icon: <IoNewspaperOutline /> },
  { label: "Upload Data", url: "/upload-data", icon: <IoCloudUploadOutline /> },
  { label: "Profile", url: "/profile", icon: <FiUser /> }
];

const Sidebar = ({ sidebarOpen, setSidebarOpen }) => {
  const toggleSidebar = () => {
    setSidebarOpen((prevState) => !prevState);
  };

  return (
    <aside
      className={`absolute left-0 top-0 z-9999 flex h-screen w-72.5 flex-col overflow-y-hidden bg-black duration-300 ease-linear dark:bg-boxdark lg:static lg:translate-x-0 ${
        sidebarOpen ? "translate-x-0" : "-translate-x-full"
      }`}
    >
      <div className="flex items-center justify-between gap-2 px-6 py-5.5 lg:py-6.5 ">
        <Link to="/"><img src={Logo} className="invert" alt="" /></Link>
        <button className="block lg:hidden" onClick={toggleSidebar}>
          <FaArrowLeft />
        </button>
      </div>

      <div className="no-scrollbar flex flex-col overflow-y-auto duration-300 ease-linear">
        <nav className="mt-5 py-4 px-4 lg:mt-2 lg:px-6">
          <div>
            <h3 className="mb-4 ml-4 text-sm font-semibold text-bodydark2">
              MENU
            </h3>
            <ul className="mb-6 flex flex-col gap-1.5">
              {navData.map((nav, index) => (
                <li key={index}>
                  <Link
                    onClick={toggleSidebar}
                    to={nav.url}
                    className="group relative flex items-center gap-2.5 rounded-sm px-4 py-2 font-medium text-bodydark1 duration-300 ease-in-out hover:bg-graydark dark:hover:bg-meta-4"
                  >
                    {nav.icon} {nav.label}
                  </Link>
                </li>
              ))}
              <li>
                <Link to="/login"
                  onClick={toggleSidebar}
                  className="group relative flex items-center gap-2.5 rounded-sm px-4 py-2 font-medium text-bodydark1 duration-300 ease-in-out hover:bg-graydark dark:hover:bg-meta-4"
                >
                  <IoLogOutOutline /> Logout
                </Link>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    </aside>
  );
};

export default Sidebar;
