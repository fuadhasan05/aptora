import React from "react";
import {
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaLinkedinIn,
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaEnvelope,
  FaBuilding,
  FaUserTie,
  FaFileAlt,
  FaGithub,
} from "react-icons/fa";
import logo from "../../../assets/images/logo-square.png";
import { Link } from "react-router";

const Footer = () => {
  return (
    <footer className="bg-base-100 text-base-content pt-16 pb-10 relative">

      <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 relative z-10">
        {/* Brand Column */}
        <div>
          <div className="flex items-center gap-3 mb-4">
            <img
              src={logo}
              alt="Aptora logo"
              className="w-12 h-12 rounded-lg"
            />
            <h2 className="text-2xl font-bold  text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">
              APTORA
            </h2>
          </div>
          <p className="text-sm leading-relaxed text-light/80 mb-4">
            Premium property management solutions with modern facilities,
            community-driven environment, and secure operations.
          </p>

          <div className="flex space-x-4">
            {[
              {
                icon: <FaGithub />,
                color: "text-blue-500",
                href: "https://github.com/fuadhasan05",
              },
              {
                icon: <FaTwitter />,
                color: "text-sky-400",
                href: "https://x.com/fuad_hasan05",
              },
              {
                icon: <FaLinkedinIn />,
                color: "text-blue-600",
                href: "https://www.linkedin.com/in/fuad05/",
              },
            ].map((social, index) => (
              <a
                key={index}
                href={social.href}
                target="_blank"
                rel="noreferrer"
                className={`${social.color} hover:scale-110 transition-transform duration-200 text-xl`}
              >
                {social.icon}
              </a>
            ))}
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
            <FaBuilding className="text-primary" /> Quick Links
          </h3>
          <div>
            <ul className="space-y-3">
              {[
                { name: "Home", href: "/" },
                { name: "About Us", href: "/about" },
                { name: "Find Apertments", href: "/apertments" },
                { name: "Contact", href: "/contact" },
              ].map((link, index) => (
                <li key={index}>
                  <Link
                    to={link.href}
                    onClick={() => window.scrollTo(0, 0)}
                    className="hover:text-blue-700 transition flex items-center gap-2"
                  >
                    <span className="w-1 h-1 bg-blue-700 rounded-full"></span>
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Resources */}
        <div>
          <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
            <FaFileAlt className="text-primary" /> Resources
          </h3>
          <div>
            <ul className="space-y-3">
              {[
                { name: "FAQ", href: "/faq" },
                { name: "Privacy Policy", href: "/privacy" },
                { name: "Terms of Service", href: "/terms" },
              ].map((link, index) => (
                <li key={index}>
                  <Link
                    to={link.href}
                    onClick={() => window.scrollTo(0, 0)}
                    className="hover:text-blue-700 transition flex items-center gap-2"
                  >
                    <span className="w-1 h-1 bg-blue-700 rounded-full"></span>
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Contact */}
        <div>
          <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
            <FaUserTie className="text-primary" /> Contact Us
          </h3>
          <ul className="space-y-3 text-sm">
            <li className="flex items-start gap-3 text-light/80">
              <FaMapMarkerAlt className="text-primary mt-1 flex-shrink-0" />
              <span>
                House #12, Road #55, Gulshan-2, Dhaka 1212, Bangladesh
              </span>
            </li>
            <li className="flex items-center gap-3 text-light/80">
              <FaPhoneAlt className="text-primary" />
              <a
                href="tel:+8801234567890"
                className="hover:text-primary transition-colors"
              >
                +880 1616 662095
              </a>
            </li>
            <li className="flex items-center gap-3 text-light/80">
              <FaEnvelope className="text-primary" />
              <a
                href="mailto:fuadhasan.web.com"
                className="hover:text-primary transition-colors"
              >
                fuadhasan.web.com
              </a>
            </li>
          </ul>
        </div>
      </div>

      {/* Divider */}
      <div className="w-full px-2 md:px-4 my-8 border-t border-light/20"></div>

      {/* Bottom Bar */}
      <div className="container mx-auto px-2 md:px-4 flex flex-col sm:flex-row justify-between items-center text-sm text-light/60">
        <div>
          © {new Date().getFullYear()}{" "}
          <span className="font-semibold text-light">Aptora</span>. All rights
          reserved.
        </div>
        <p className="mt-2 sm:mt-0">
          Built with ❤️ by{" "}
          <a
            href="https://fuad-5.web.app"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-primary transition-colors underline underline-offset-2"
          >
            Fuad Hasan
          </a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
