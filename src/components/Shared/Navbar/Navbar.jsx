import Container from "../Container";
import { AiOutlineMenu } from "react-icons/ai";
import { FiLogIn } from "react-icons/fi";
import { useState } from "react";
import { Link } from "react-router";
import useAuth from "../../../hooks/useAuth";
import avatarImg from "../../../assets/images/placeholder.jpg";
import logo from "../../../assets/images/logo-square.png";

const Navbar = () => {
  const { user, logOut } = useAuth();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="fixed w-full z-50 shadow-lg bg-gradient-to-r from-blue-700 via-blue-600 to-purple-700 text-white">
      <div className="py-4">
        <Container>
          <div className="flex flex-row items-center justify-between gap-3 md:gap-0">
            {/* Left: Logo */}
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

            {/* Middle: Nav Links */}
            <div className="flex items-center gap-8">
              <Link
                to="/"
                className="text-lg font-semibold hidden md:block hover:text-yellow-300 transition duration-300"
              >
                Home
              </Link>
              <Link
                to="/apartment"
                className="text-lg font-semibold hidden md:block hover:text-yellow-300 transition duration-300"
              >
                Apartment
              </Link>
            </div>

            {/* User/Login Dropdown */}
            <div className="relative">
              <div
                onClick={() => setIsOpen(!isOpen)}
                className="p-2 bg-white/20 border border-white/30 flex items-center gap-2 rounded-full cursor-pointer hover:bg-white/30 hover:shadow-md transition"
              >
                <AiOutlineMenu className="text-white text-lg" />
                <div className="hidden md:block">
                  <img
                    className="rounded-full border border-white"
                    referrerPolicy="no-referrer"
                    src={user && user.photoURL ? user.photoURL : avatarImg}
                    alt="profile"
                    height="32"
                    width="32"
                  />
                </div>
              </div>

              {/* Dropdown */}
              {isOpen && (
                <div className="absolute rounded-xl shadow-xl w-[42vw] md:w-[14vw] bg-white overflow-hidden right-0 top-12 text-gray-700 text-sm">
                  <div className="flex flex-col cursor-pointer">
                    {/* Show username if user is logged in */}
                    {user && (
                      <div className="px-4 py-3 font-semibold bg-blue-50 text-blue-600 border-b border-neutral-200 text-center">
                        {user.displayName || "User"}
                      </div>
                    )}
                    <Link
                      to="/"
                      className="block md:hidden px-4 py-3 hover:bg-blue-100 transition font-semibold"
                    >
                      Home
                    </Link>
                    <Link
                      to="/apartment"
                      className="block md:hidden px-4 py-3 hover:bg-blue-100 transition font-semibold"
                    >
                      Apartment
                    </Link>
                    {user ? (
                      <>
                        <Link
                          to="/dashboard"
                          className="px-4 py-3 hover:bg-blue-100 transition font-semibold"
                        >
                          Dashboard
                        </Link>
                        <div
                          onClick={logOut}
                          className="px-4 py-3 hover:bg-blue-100 transition font-semibold cursor-pointer"
                        >
                          Logout
                        </div>
                      </>
                    ) : (
                      <>
                        <Link
                          to="/login"
                          className="px-4 py-3 hover:bg-blue-100 transition font-semibold flex items-center gap-2"
                        >
                          <FiLogIn className="text-blue-600" /> Login
                        </Link>
                        <Link
                          to="/signup"
                          className="px-4 py-3 hover:bg-blue-100 transition font-semibold"
                        >
                          Sign Up
                        </Link>
                      </>
                    )}
                  </div>
                </div>
              )}
            </div>
          </div>
        </Container>
      </div>
    </div>
  );
};

export default Navbar;
