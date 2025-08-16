import Container from "../Container";
import { AiOutlineMenu } from "react-icons/ai";
import { FiLogIn } from "react-icons/fi";
import { FaSun, FaMoon } from "react-icons/fa"; // New icons
import { useState } from "react";
import { Link, useLocation } from "react-router";
import useAuth from "../../../hooks/useAuth";
import avatarImg from "../../../assets/images/placeholder.jpg";
import logo from "../../../assets/images/logo-square.png";
import { useTheme } from "../../../context/ThemeContext"; // New import

const Navbar = () => {
  const { user, logOut } = useAuth();
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const { theme, toggleTheme } = useTheme(); // Get theme context

  return (
    <div className="fixed w-full z-50 bg-base-100 text-base-content">
      <div className="py-3">
        <Container>
          <div className="container mx-auto flex flex-row items-center justify-between gap-3 md:gap-0">
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

              {/* User/Login Dropdown */}
              <div className="relative">
                <div
                  onClick={() => setIsOpen(!isOpen)}
                  className="p-2 bg-base-200 flex items-center gap-2 rounded-full cursor-pointer hover:bg-base-300 hover:shadow-md transition"
                >
                  <AiOutlineMenu className="text-lg" />
                  <div className="hidden md:block">
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
                  <div className="absolute rounded-xl shadow-xl w-[42vw] md:w-[14vw] bg-base-100 overflow-hidden right-0 top-12 text-sm border border-base-200">
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
                          >
                            Dashboard
                          </Link>
                          <div
                            onClick={logOut}
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
                          >
                            <FiLogIn /> Login
                          </Link>
                          <Link
                            to="/signup"
                            className="px-4 py-3 hover:bg-base-200 transition font-semibold"
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
        </Container>
      </div>
    </div>
  );
};

export default Navbar;
