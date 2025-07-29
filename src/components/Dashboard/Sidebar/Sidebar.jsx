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

const Sidebar = () => {
  const { logOut } = useAuth();
  const [isActive, setActive] = useState(false);
  const [role, isRoleLoading] = useRole();

  // Sidebar Responsive Handler
  const handleToggle = () => {
    setActive(!isActive);
  };
  if (isRoleLoading) return <LoadingSpinner />;
  return (
    <>
      {/* Small Screen Navbar */}
      <div className="bg-gradient-to-r from-blue-700 via-blue-600 to-purple-700 text-white flex justify-between md:hidden">
        <div>
          <div className="block cursor-pointer p-2 font-bold ">
              <Link to="/" className="flex items-center gap-1">
              <img
                src={logo}
                alt="logo"
                width="48"
                height="48"
                className="rounded-lg"
              />
              <h1 className="text-2xl font-extrabold tracking-wide">
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
        className={`z-10 md:fixed flex flex-col justify-between overflow-x-hidden bg-gray-100 w-70 space-y-6 px-2 py-4 absolute inset-y-0 left-0 transform ${
          isActive && "-translate-x-full"
        }  md:translate-x-0  transition duration-200 ease-in-out`}
      >
        <div>
          <div>
            <div className="w-full hidden md:flex px-2 py-2 shadow-lg rounded-lg justify-center items-center bg-gradient-to-r from-blue-700 via-blue-600 to-purple-700 text-white mx-auto transition-all duration-300">
              <Link to="/" className="flex items-center gap-2">
              <img
                src={logo}
                alt="logo"
                width="48"
                height="48"
                className="rounded-lg"
              />
              <h1 className="text-2xl md:text-3xl font-extrabold tracking-wide">
                APTORA
              </h1>
            </Link>
            </div>
          </div>

          {/* Nav Items */}
          <div className="flex flex-col justify-between flex-1 mt-6">
            <nav>
              {/*  Menu Items */}
              {role === "user" && <UserMenu />}
              {role === "member" && <MemberMenu />}
              {role === "admin" && <AdminMenu />}
            </nav>
          </div>
        </div>

        <div>
          <hr />
          <button
            onClick={logOut}
            className="flex w-full items-center px-4 py-2 mt-5 text-gray-600 hover:bg-gray-300   hover:text-gray-700 transition-colors duration-300 transform"
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
