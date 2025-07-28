import React from "react";
import {
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaLinkedinIn,
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaEnvelope,
} from "react-icons/fa";
import logo from "../../../assets/images/logo-square.png";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-blue-700 via-blue-600 to-purple-700 text-white pt-16 pb-10  relative">
      <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-10">
        {/* Logo & Tagline */}
        <div>
          <div className="flex items-center gap-3 mb-4">
            <img src={logo} alt="logo" className="w-12 h-12" />
            <h2 className="text-2xl font-extrabold">APTORA</h2>
          </div>
          <p className="text-sm leading-relaxed opacity-90">
            Premium living apartments in Dhaka with modern facilities,
            community-driven environment, and secure management.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
          <ul className="space-y-3 text-sm">
            <li>
              <a
                href="#about"
                className="hover:text-yellow-300 transition duration-300"
              >
                About the Building
              </a>
            </li>
            <li>
              <a
                href="#location"
                className="hover:text-yellow-300 transition duration-300"
              >
                Location
              </a>
            </li>
            <li>
              <a
                href="#coupons"
                className="hover:text-yellow-300 transition duration-300"
              >
                Coupons
              </a>
            </li>
            <li>
              <a
                href="#contact"
                className="hover:text-yellow-300 transition duration-300"
              >
                Contact Us
              </a>
            </li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Contact Info</h3>
          <ul className="space-y-3 text-sm">
            <li className="flex items-center gap-2">
              <FaMapMarkerAlt className="text-yellow-300" /> House #12, Road
              #55, Gulshan-2, Dhaka 1212
            </li>
            <li className="flex items-center gap-2">
              <FaPhoneAlt className="text-yellow-300" /> +880 1234-567890
            </li>
            <li className="flex items-center gap-2">
              <FaEnvelope className="text-yellow-300" /> info@aptora.com
            </li>
          </ul>
        </div>

        {/* Social Links */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Follow Us</h3>
          <div className="flex space-x-4">
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noreferrer"
              className="bg-white text-blue-700 p-2 rounded-full hover:scale-110 transition shadow-md"
            >
              <FaFacebookF />
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noreferrer"
              className="bg-white text-pink-600 p-2 rounded-full hover:scale-110 transition shadow-md"
            >
              <FaInstagram />
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noreferrer"
              className="bg-white text-blue-400 p-2 rounded-full hover:scale-110 transition shadow-md"
            >
              <FaTwitter />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noreferrer"
              className="bg-white text-blue-500 p-2 rounded-full hover:scale-110 transition shadow-md"
            >
              <FaLinkedinIn />
            </a>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="text-center text-sm mt-12 border-t border-white/30 pt-6">
        © {new Date().getFullYear()}{" "}
        <span className="font-semibold">APTORA</span>. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
