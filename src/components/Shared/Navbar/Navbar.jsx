import Container from "../Container";
import { AiOutlineMenu, AiOutlineDown } from "react-icons/ai";
import { FiLogIn } from "react-icons/fi";
import {
  FaSun,
  FaMoon,
  FaQuestionCircle,
  FaFileContract,
  FaLock,
} from "react-icons/fa";
import { FcAbout } from "react-icons/fc";
import { useState } from "react";
import { Link, useLocation } from "react-router";
import useAuth from "../../../hooks/useAuth";
import avatarImg from "../../../assets/images/placeholder.jpg";
import logo from "../../../assets/images/logo-square.png";
import { useTheme } from "../../../context/ThemeContext";

const Navbar = () => {
  const { user, logOut } = useAuth();
  const [isOpen, setIsOpen] = useState(false);
  const [isAboutOpen, setIsAboutOpen] = useState(false);
  const location = useLocation();
  const { theme, toggleTheme } = useTheme();

  return (
    <div className="sticky top-0 z-50 w-full bg-base-100 text-base-content -mb-25">
      <div className="py-3">
        <Container>
          <div className="container mx-auto px-2 md:px-4 flex flex-row items-center justify-between gap-3 md:gap-0">
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

            {/* Middle: Nav Links */}
            <div className="flex items-center gap-8">
              <Link
                to="/"
                className={`text-lg font-semibold hidden md:block transition duration-300 ${
                  location.pathname === "/"
                    ? "text-primary underline underline-offset-4 decoration-2"
                    : "hover:text-primary"
                }`}
              >
                Home
              </Link>
              <Link
                to="/apertments"
                className={`text-lg font-semibold hidden md:block transition duration-300 ${
                  location.pathname === "/apertments"
                    ? "text-primary underline underline-offset-4 decoration-2"
                    : "hover:text-primary"
                }`}
              >
                Apartment
              </Link>

              {/* About Dropdown */}
              <div className="relative hidden md:block">
                <button
                  onClick={() => setIsAboutOpen(!isAboutOpen)}
                  className={`text-lg font-semibold flex items-center gap-1 transition duration-300 ${
                    location.pathname.startsWith("/about") ||
                    location.pathname.startsWith("/faq") ||
                    location.pathname.startsWith("/terms") ||
                    location.pathname.startsWith("/privacy")
                      ? "text-primary underline underline-offset-4 decoration-2"
                      : "hover:text-primary"
                  }`}
                >
                  About
                  <AiOutlineDown
                    className={`text-xs transition-transform ${
                      isAboutOpen ? "rotate-180" : ""
                    }`}
                  />
                </button>

                {isAboutOpen && (
                  <div
                    className="absolute rounded-xl shadow-xl w-48 bg-base-100 overflow-hidden right-0 top-8 text-sm border border-base-200"
                    onMouseLeave={() => setIsAboutOpen(false)}
                  >
                    <div className="flex flex-col cursor-pointer">
                      <Link
                        to="/about"
                        className="px-4 py-3 hover:bg-base-200 transition font-semibold flex items-center gap-2"
                        onClick={() => setIsAboutOpen(false)}
                      >
                        <FcAbout className="text-primary" /> About Us
                      </Link>
                      <Link
                        to="/faq"
                        className="px-4 py-3 hover:bg-base-200 transition font-semibold flex items-center gap-2"
                        onClick={() => setIsAboutOpen(false)}
                      >
                        <FaQuestionCircle className="text-primary" /> FAQ
                      </Link>
                      <Link
                        to="/terms"
                        className="px-4 py-3 hover:bg-base-200 transition font-semibold flex items-center gap-2"
                        onClick={() => setIsAboutOpen(false)}
                      >
                        <FaFileContract className="text-primary" /> Terms &
                        Conditions
                      </Link>
                      <Link
                        to="/privacy"
                        className="px-4 py-3 hover:bg-base-200 transition font-semibold flex items-center gap-2"
                        onClick={() => setIsAboutOpen(false)}
                      >
                        <FaLock className="text-primary" /> Privacy Policy
                      </Link>
                    </div>
                  </div>
                )}
              </div>

              <Link
                to="/contact"
                className={`text-lg font-semibold hidden md:block transition duration-300 ${
                  location.pathname === "/contact"
                    ? "text-primary underline underline-offset-4 decoration-2"
                    : "hover:text-primary"
                }`}
              >
                Contact
              </Link>
            </div>

            {/* Right: Theme Toggle and User Dropdown */}
            <div className="flex items-center gap-4">
              {/* Theme Toggle Button */}
              <button
                onClick={toggleTheme}
                className="btn btn-ghost btn-circle"
                aria-label={`Switch to ${
                  theme === "light" ? "dark" : "light"
                } mode`}
              >
                {theme === "light" ? <FaMoon size={20} /> : <FaSun size={20} />}
              </button>

              {/* Mobile Menu Button */}
              <div className="md:hidden">
                <button
                  onClick={() => setIsOpen(!isOpen)}
                  className="btn btn-ghost btn-circle"
                >
                  <AiOutlineMenu size={20} />
                </button>
              </div>

              {/* User/Login Dropdown (Desktop) */}
              <div className="relative hidden md:block">
                <div
                  onClick={() => setIsOpen(!isOpen)}
                  className="p-2 bg-base-200 flex items-center gap-2 rounded-full cursor-pointer hover:bg-base-300 hover:shadow-md transition"
                >
                  <div className="">
                    <img
                      className="rounded-full border border-base-content/20"
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
                  <div className="absolute rounded-xl shadow-xl w-48 bg-base-100 overflow-hidden right-0 top-12 text-sm border border-base-200">
                    <div className="flex flex-col cursor-pointer">
                      {/* Show username if user is logged in */}
                      {user && (
                        <div className="px-4 py-3 font-semibold bg-base-200 border-b border-base-300 text-center">
                          {user.displayName || "User"}
                        </div>
                      )}
                      {user ? (
                        <>
                          <Link
                            to="/dashboard"
                            className="px-4 py-3 hover:bg-base-200 transition font-semibold"
                            onClick={() => setIsOpen(false)}
                          >
                            Dashboard
                          </Link>
                          <div
                            onClick={() => {
                              logOut();
                              setIsOpen(false);
                            }}
                            className="px-4 py-3 hover:bg-base-200 transition font-semibold cursor-pointer"
                          >
                            Logout
                          </div>
                        </>
                      ) : (
                        <>
                          <Link
                            to="/login"
                            className="px-4 py-3 hover:bg-base-200 transition font-semibold flex items-center gap-2"
                            onClick={() => setIsOpen(false)}
                          >
                            <FiLogIn /> Login
                          </Link>
                          <Link
                            to="/signup"
                            className="px-4 py-3 hover:bg-base-200 transition font-semibold"
                            onClick={() => setIsOpen(false)}
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
          </div>

          {/* Mobile Menu */}
          {isOpen && (
            <div className="md:hidden mt-4 pb-4">
              <div className="flex flex-col space-y-2 px-2">
                <Link
                  to="/"
                  className={`px-4 py-2 rounded-lg transition ${
                    location.pathname === "/"
                      ? "bg-primary text-primary-content"
                      : "hover:bg-base-200"
                  }`}
                  onClick={() => setIsOpen(false)}
                >
                  Home
                </Link>
                <Link
                  to="/apertments"
                  className={`px-4 py-2 rounded-lg transition ${
                    location.pathname === "/apertments"
                      ? "bg-primary text-primary-content"
                      : "hover:bg-base-200"
                  }`}
                  onClick={() => setIsOpen(false)}
                >
                  Apartment
                </Link>
                <div className="px-4 py-2 rounded-lg hover:bg-base-200 transition">
                  <div className="font-semibold mb-1">About</div>
                  <div className="flex flex-col pl-4 space-y-1">
                    <Link
                      to="/about"
                      className={`py-1 ${
                        location.pathname === "/about" ? "text-primary" : ""
                      }`}
                      onClick={() => setIsOpen(false)}
                    >
                      About Us
                    </Link>
                    <Link
                      to="/faq"
                      className={`py-1 flex items-center gap-2 ${
                        location.pathname === "/faq" ? "text-primary" : ""
                      }`}
                      onClick={() => setIsOpen(false)}
                    >
                      <FaQuestionCircle /> FAQ
                    </Link>
                    <Link
                      to="/terms"
                      className={`py-1 flex items-center gap-2 ${
                        location.pathname === "/terms" ? "text-primary" : ""
                      }`}
                      onClick={() => setIsOpen(false)}
                    >
                      <FaFileContract /> Terms
                    </Link>
                    <Link
                      to="/privacy"
                      className={`py-1 flex items-center gap-2 ${
                        location.pathname === "/privacy" ? "text-primary" : ""
                      }`}
                      onClick={() => setIsOpen(false)}
                    >
                      <FaLock /> Privacy
                    </Link>
                  </div>
                </div>
                <Link
                  to="/contact"
                  className={`px-4 py-2 rounded-lg transition ${
                    location.pathname === "/contact"
                      ? "bg-primary text-primary-content"
                      : "hover:bg-base-200"
                  }`}
                  onClick={() => setIsOpen(false)}
                >
                  Contact
                </Link>
                {user ? (
                  <>
                    <Link
                      to="/dashboard"
                      className="px-4 py-2 rounded-lg hover:bg-base-200 transition"
                      onClick={() => setIsOpen(false)}
                    >
                      Dashboard
                    </Link>
                    <button
                      onClick={() => {
                        logOut();
                        setIsOpen(false);
                      }}
                      className="px-4 py-2 text-left rounded-lg hover:bg-base-200 transition"
                    >
                      Logout
                    </button>
                  </>
                ) : (
                  <>
                    <Link
                      to="/login"
                      className="px-4 py-2 rounded-lg hover:bg-base-200 transition flex items-center gap-2"
                      onClick={() => setIsOpen(false)}
                    >
                      <FiLogIn /> Login
                    </Link>
                    <Link
                      to="/signup"
                      className="px-4 py-2 rounded-lg hover:bg-base-200 transition"
                      onClick={() => setIsOpen(false)}
                    >
                      Sign Up
                    </Link>
                  </>
                )}
              </div>
            </div>
          )}
        </Container>
      </div>
    </div>
  );
};

export default Navbar;
