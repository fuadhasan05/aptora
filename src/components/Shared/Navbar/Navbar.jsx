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
    <div className="fixed w-full bg-white z-10 shadow-sm">
      <div className="py-4 border-b-blue-100">
        <Container>
          <div className="flex flex-row items-center justify-between gap-3 md:gap-0">
            {/* Left: Logo */}
            <Link to="/" className="flex items-center gap-2">
              <img src={logo} alt="logo" width="48" height="48" />
              <h1 className="text-2xl md:text-3xl font-bold text-blue-700">
                APTORA
              </h1>
            </Link>
            {/* Middle: Nav Links */}
            <div className="flex items-center gap-10">
              <Link
                to="/"
                className="text-lg font-semibold hover:text-blue-700 transition hidden md:block"
              >
                Home
              </Link>
              <Link
                to="/apartment"
                className="text-lg font-semibold hover:text-blue-700 transition hidden md:block"
              >
                Apartment
              </Link>
            </div>
            {/* User/Login */}
            <div className="relative">
              <div
                onClick={() => setIsOpen(!isOpen)}
                className="p-2 border border-neutral-200 flex items-center gap-2 rounded-full cursor-pointer hover:shadow-md transition"
              >
                <AiOutlineMenu />
                <div className="hidden md:block">
                  {/* Avatar */}
                  <img
                    className="rounded-full"
                    referrerPolicy="no-referrer"
                    src={user && user.photoURL ? user.photoURL : avatarImg}
                    alt="profile"
                    height="30"
                    width="30"
                  />
                </div>
              </div>
              {/* Dropdown */}
              {isOpen && (
                <div className="absolute rounded-xl shadow-md w-[40vw] md:w-[12vw] bg-white overflow-hidden right-0 top-12 text-sm">
                  <div className="flex flex-col cursor-pointer">
                    {/* Show username if user is logged in */}
                    {user && (
                      <div className="px-4 py-3 font-semibold border-b text-blue-600 border-neutral-200 text-center">
                        {user.displayName || "User"}
                      </div>
                    )}
                    <Link
                      to="/"
                      className="block md:hidden px-4 py-3 hover:bg-neutral-100 transition font-semibold"
                    >
                      Home
                    </Link>
                    <Link
                      to="/apartment"
                      className="block md:hidden px-4 py-3 hover:bg-neutral-100 transition font-semibold"
                    >
                      Apartment
                    </Link>
                    {user ? (
                      <>
                        <Link
                          to="/dashboard"
                          className="px-4 py-3 hover:bg-neutral-100 transition font-semibold"
                        >
                          Dashboard
                        </Link>
                        <div
                          onClick={logOut}
                          className="px-4 py-3 hover:bg-neutral-100 transition font-semibold cursor-pointer"
                        >
                          Logout
                        </div>
                      </>
                    ) : (
                      <>
                        <Link
                          to="/login"
                          className="px-4 py-3 hover:bg-neutral-100 transition font-semibold"
                        >
                          Login
                        </Link>
                        <Link
                          to="/signup"
                          className="px-4 py-3 hover:bg-neutral-100 transition font-semibold"
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
