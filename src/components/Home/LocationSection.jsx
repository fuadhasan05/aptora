import React from 'react';
import { FaMapMarkerAlt, FaBus, FaSubway, FaParking, FaWalking } from 'react-icons/fa';

const LocationSection = () => {
  return (
    <section className="relative py-16 bg-base-100 overflow-hidden">
      {/* Section Title */}
      <div className="text-center mb-12 md:mb-20 px-4">
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-base-content mb-4">
          Prime <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">Location</span>
        </h2>
        <p className="text-lg md:text-xl text-base-content/80 max-w-2xl mx-auto">
          Strategically situated in the heart of the city with excellent connectivity
        </p>
      </div>

      {/* Content Wrapper */}
      <div className="relative container mx-auto">
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 xl:gap-16 items-center">
          {/* Left side: Details */}
          <div className="lg:w-1/2 space-y-8">
            {/* Address Card */}
            <div className="bg-base-200/50 backdrop-blur-sm p-6 rounded-xl border border-base-300 shadow-sm hover:shadow-md transition-shadow">
              <div className="flex items-center gap-3 mb-4">
                <div className="bg-primary/10 p-3 rounded-full">
                  <FaMapMarkerAlt className="text-primary text-xl" />
                </div>
                <h3 className="text-2xl font-bold text-base-content">Our Address</h3>
              </div>
              <p className="text-lg leading-relaxed text-base-content/90 pl-2">
                House #12, Road #55,<br />
                Gulshan-2, Dhaka 1212,<br />
                Bangladesh
              </p>
            </div>

            {/* Transportation Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {/* Public Transport */}
              <div className="bg-base-200/50 backdrop-blur-sm p-6 rounded-xl border border-base-300 shadow-sm hover:shadow-md transition-shadow">
                <h3 className="text-xl font-semibold mb-4 text-base-content">Public Transport</h3>
                <ul className="space-y-4">
                  <li className="flex items-start gap-3">
                    <div className="bg-green-500/10 p-2 rounded-full">
                      <FaBus className="text-green-500 text-lg" />
                    </div>
                    <span className="text-base-content/90">Bus routes from Mohakhali & Banani</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="bg-purple-600/10 p-2 rounded-full">
                      <FaSubway className="text-purple-600 text-lg" />
                    </div>
                    <span className="text-base-content/90">MRT Line-6 Banani station (10 min walk)</span>
                  </li>
                </ul>
              </div>

              {/* Parking & Accessibility */}
              <div className="bg-base-200/50 backdrop-blur-sm p-6 rounded-xl border border-base-300 shadow-sm hover:shadow-md transition-shadow">
                <h3 className="text-xl font-semibold mb-4 text-base-content">Accessibility</h3>
                <ul className="space-y-4">
                  <li className="flex items-start gap-3">
                    <div className="bg-orange-500/10 p-2 rounded-full">
                      <FaParking className="text-orange-500 text-lg" />
                    </div>
                    <span className="text-base-content/90">On-site & nearby parking available</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="bg-blue-500/10 p-2 rounded-full">
                      <FaWalking className="text-blue-500 text-lg" />
                    </div>
                    <span className="text-base-content/90">5 min walk to Gulshan Circle 2</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Right side: Google Map Embed */}
          <div className="lg:w-1/2 h-80 sm:h-96 lg:h-[500px] rounded-xl overflow-hidden shadow-xl border border-base-300">
            <iframe
              title="Apartment Location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3651.9037251240264!2d90.27582867534445!3d23.780887488614195!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755c76f3d09c0ff%3A0x6a0e4e9ec3a1e95d!2sGulshan%202%20Dhaka!5e0!3m2!1sen!2sbd!4v1692522354879!5m2!1sen!2sbd"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="bg-base-200"
            ></iframe>
          </div>
        </div>

        {/* Nearby Amenities Section */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-4">
          {[
            { icon: '🛒', name: 'Supermarkets', distance: '3 min walk' },
            { icon: '🍽️', name: 'Restaurants', distance: '2 min walk' },
            { icon: '🏥', name: 'Hospitals', distance: '5 min drive' },
            { icon: '🏫', name: 'Schools', distance: '8 min drive' },
          ].map((item, index) => (
            <div key={index} className="bg-base-200/50 backdrop-blur-sm p-4 rounded-lg border border-base-300 text-center hover:shadow-md transition-shadow">
              <div className="text-3xl mb-2">{item.icon}</div>
              <h4 className="font-medium text-base-content">{item.name}</h4>
              <p className="text-sm text-base-content/70">{item.distance}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LocationSection;