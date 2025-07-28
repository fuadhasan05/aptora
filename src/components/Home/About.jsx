import React from "react";
import { FaHome, FaBuilding, FaUsers, FaStore } from "react-icons/fa";
import { MdApartment } from "react-icons/md";

const About = () => {
  const types = [
    { icon: <FaHome size={50} />, title: "Single Family" },
    { icon: <MdApartment size={50} />, title: "Small Multifamily" },
    { icon: <FaUsers size={50} />, title: "Community Association" },
    { icon: <FaBuilding size={50} />, title: "Student Housing" },
    { icon: <FaStore size={50} />, title: "Commercial" },
  ];

  return (
    <section className="relative py-24 px-6 md:px-20 bg-gradient-to-r from-blue-50 via-white to-blue-50 overflow-hidden rounded-lg">
      {/* Decorative Blobs */}
      <div className="absolute top-10 left-10 w-72 h-72 bg-blue-300 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob"></div>
      <div className="absolute top-20 right-20 w-72 h-72 bg-pink-300 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob animation-delay-2000"></div>
      <div className="absolute bottom-10 left-1/2 w-72 h-72 bg-yellow-300 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob animation-delay-4000"></div>

      <div className="relative max-w-5xl mx-auto">
        {/* About the Building */}
        <div className="text-center mb-16 px-4 md:px-0">
          <h2 className="text-5xl md:text-6xl font-semibold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 drop-shadow-lg">
            About the Building
          </h2>
          <p className="text-lg md:text-xl leading-relaxed max-w-3xl mx-auto text-gray-700 mb-6 tracking-wide font-serif">
            Our state-of-the-art building seamlessly blends{" "}
            <span className="font-semibold text-blue-700">
              modern architecture
            </span>{" "}
            with{" "}
            <span className="font-semibold text-purple-700">
              sustainable design
            </span>
            . Equipped with smart technology and premium amenities, it offers an
            unparalleled living experience for all.
          </p>
        </div>

        {/* Property Types */}
        <div className="text-center">
          <h3 className="text-3xl md:text-4xl font-semibold mb-12 text-gray-800">
            Made for <span className="text-blue-600">mixed portfolios</span>
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-10 justify-items-center">
            {types.map((item, index) => (
              <div
                key={index}
                className="flex flex-col items-center space-y-3 transition transform hover:scale-110 hover:text-blue-600 duration-300"
              >
                <div className="relative">
                  <div className="absolute -inset-4 bg-blue-100 rounded-full -z-10 shadow-lg"></div>
                  <div className="text-blue-600">{item.icon}</div>
                </div>
                <p className="text-lg font-semibold text-gray-800">
                  {item.title}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Tailwind animation styles for blobs */}
      <style jsx>{`
        @keyframes blob {
          0%,
          100% {
            transform: translate(0, 0) scale(1);
          }
          33% {
            transform: translate(30px, -50px) scale(1.1);
          }
          66% {
            transform: translate(-20px, 20px) scale(0.9);
          }
        }
        .animate-blob {
          animation: blob 7s infinite;
        }
        .animation-delay-2000 {
          animation-delay: 2s;
        }
        .animation-delay-4000 {
          animation-delay: 4s;
        }
      `}</style>
    </section>
  );
};

export default About;
