import { useState } from "react";
import { GrLogout } from "react-icons/gr";
import { FaHome } from "react-icons/fa";
import { AiOutlineBars } from "react-icons/ai";
import MenuItem from "./Menu/MenuItem";
import useAuth from "../../../hooks/useAuth";
import AdminMenu from "./Menu/AdminMenu";
import { Link } from "react-router";
import MemberMenu from "./Menu/MemberMenu";
import useRole from "../../../hooks/useRole";
import LoadingSpinner from "../../Shared/LoadingSpinner";
import UserMenu from "./Menu/UserMenu";
import logo from "../../../assets/images/logo-square.png";
import { useTheme } from "../../../context/ThemeContext";
import { RiTimelineView } from "react-icons/ri";
import { MdAnnouncement } from "react-icons/md";

const Sidebar = () => {
  const { logOut } = useAuth();
  const [isActive, setActive] = useState(false);
  const [role, isRoleLoading] = useRole();
  const { theme } = useTheme();

  // Sidebar Responsive Handler
  const handleToggle = () => {
    setActive(!isActive);
  };
  if (isRoleLoading) return <LoadingSpinner />;
  return (
    <>
      {/* Small Screen Navbar */}
      <div
        className={`flex justify-between md:hidden ${
          theme === "dark" ? "bg-gray-900 text-white" : "bg-white text-gray-800"
        }`}
      >
        <div>
          <div className="block cursor-pointer p-2 font-bold">
            {/* Left: Logo */}
            <Link to="/" className="flex items-center gap-2">
              <img
                src={logo}
                alt="logo"
                width="48"
                height="48"
                className="rounded-lg"
              />
              <h1 className="text-2xl md:text-3xl text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">
                APTORA
              </h1>
            </Link>
          </div>
        </div>

        <button
          onClick={handleToggle}
          className="mobile-menu-button p-4 focus:outline-none"
        >
          <AiOutlineBars className="h-5 w-5" />
        </button>
      </div>

      {/* Sidebar */}
      <div
        className={`z-10 md:fixed flex flex-col justify-between overflow-x-hidden ${
          theme === "dark"
            ? "bg-gray-800 text-gray-100"
            : "bg-gray-100 text-gray-800"
        } w-70 space-y-6 px-2 py-4 absolute inset-y-0 left-0 transform ${
          isActive && "-translate-x-full"
        } md:translate-x-0 transition duration-200 ease-in-out`}
      >
        <div>
          <div>
            <div
              className={`w-full hidden md:flex px-2 py-2 shadow-lg rounded-lg justify-center items-center ${
                theme === "dark" ? "bg-gray-900" : "bg-white"
              } mx-auto transition-all duration-300`}
            >
              {/* Left: Logo */}
              <Link to="/" className="flex items-center gap-2">
                <img
                  src={logo}
                  alt="logo"
                  width="48"
                  height="48"
                  className="rounded-lg"
                />
                <h1 className="text-2xl md:text-3xl text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">
                  APTORA
                </h1>
              </Link>
            </div>
          </div>

          {/* Nav Items */}
          <div className="flex flex-col justify-between flex-1 mt-6">
            <nav>
              {/* Menu Items */}
              <MenuItem
                icon={RiTimelineView}
                label="Overview"
                address="/dashboard"
              />
              <MenuItem
                icon={MdAnnouncement}
                label="Announcements"
                address="/dashboard/announcements"
              />
              {role === "user" && <UserMenu />}
              {role === "member" && <MemberMenu />}
              {role === "admin" && <AdminMenu />}
            </nav>
          </div>
        </div>

        <div>
          <hr
            className={theme === "dark" ? "border-gray-700" : "border-gray-300"}
          />
          <button
            onClick={logOut}
            className={`flex w-full items-center px-4 py-2 mt-5 ${
              theme === "dark"
                ? "text-gray-300 hover:bg-gray-700 hover:text-white"
                : "text-gray-600 hover:bg-gray-300 hover:text-gray-700"
            } transition-colors duration-300 transform rounded-md`}
          >
            <GrLogout className="w-5 h-5" />
            <span className="mx-4 font-medium">Logout</span>
          </button>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
