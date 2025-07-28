import React from 'react';
import { FaMapMarkerAlt, FaBus, FaSubway, FaParking } from 'react-icons/fa';

const LocationSection = () => {
  return (
    <section className="relative py-20 px-6 md:px-20 bg-gradient-to-r from-blue-50 via-white to-blue-50 overflow-hidden">
      {/* Decorative Blobs */}
      <div className="absolute top-10 left-10 w-72 h-72 bg-blue-300 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob"></div>
      <div className="absolute bottom-10 right-10 w-72 h-72 bg-pink-300 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-2000"></div>

      {/* Section Title */}
      <div className="relative text-center mb-16">
        <h2 className="text-5xl md:text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 drop-shadow-lg">
          Apartment Location 
        </h2>
      </div>

      {/* Content Wrapper */}
      <div className="relative flex flex-col md:flex-row gap-12 items-center max-w-6xl mx-auto">
        {/* Left side: Details */}
        <div className="md:w-1/2 space-y-8 text-gray-700">
          {/* Address */}
          <div>
            <div className="flex items-center gap-3 mb-3">
              <FaMapMarkerAlt className="text-blue-600 text-2xl" />
              <h3 className="text-2xl font-semibold">Our Address</h3>
            </div>
            <p className="text-lg leading-relaxed">
              House #12, Road #55,<br />
              Gulshan-2, Dhaka 1212,<br />
              Bangladesh
            </p>
          </div>

          {/* Directions */}
          <div>
            <h3 className="text-2xl font-semibold mb-4">Directions</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <FaBus className="text-green-500 text-xl mt-1" />
                <span className="text-lg">Bus routes from Mohakhali & Banani directly serve Gulshan-2.</span>
              </li>
              <li className="flex items-start gap-3">
                <FaSubway className="text-purple-600 text-xl mt-1" />
                <span className="text-lg">MRT Line-6 (Uttara - Motijheel) nearby station at Banani (10 min).</span>
              </li>
              <li className="flex items-start gap-3">
                <FaParking className="text-orange-500 text-xl mt-1" />
                <span className="text-lg">On-site parking available and nearby parking lots.</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Right side: Google Map Embed */}
        <div className="md:w-1/2 h-80 md:h-96 rounded-xl overflow-hidden shadow-xl">
          <iframe
            title="Apartment Location"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3651.9037251240264!2d90.27582867534445!3d23.780887488614195!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755c76f3d09c0ff%3A0x6a0e4e9ec3a1e95d!2sGulshan%202%20Dhaka!5e0!3m2!1sen!2sbd!4v1692522354879!5m2!1sen!2sbd"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>

      {/* Animation Styles */}
      <style jsx>{`
        @keyframes blob {
          0%, 100% {
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
      `}</style>
    </section>
  );
};

export default LocationSection;
