import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router';
import Banner1 from '../../assets/images/banner-1.jpg';
import Banner2 from '../../assets/images/banner-2.jpg';
import Banner3 from '../../assets/images/banner-3.jpg';

const Banner = () => {
  const images = [Banner1, Banner2, Banner3];
  const [currentIndex, setCurrentIndex] = useState(0);
  const navigate = useNavigate();

  // Auto slide every 4 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }, 4000);

    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <div className="relative w-full h-[400px] md:h-[650px] overflow-hidden rounded-none shadow-lg -mt-[50px]">
      {/* Images */}
      {images.map((img, index) => (
        <img
          key={index}
          src={img}
          alt={`Banner ${index + 1}`}
          className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ${
            index === currentIndex ? 'opacity-100' : 'opacity-0'
          }`}
        />
      ))}

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/30"></div>

      {/* Banner Text */}
      <div className="absolute inset-0 flex flex-col justify-center items-center text-center text-white px-6">
        <h2 className="text-3xl md:text-6xl font-extrabold mb-4 drop-shadow-md">
          Find Your Dream Apartment
        </h2>
        <p className="text-lg md:text-xl mb-6 max-w-2xl drop-shadow">
          Explore our beautiful apartments with world-class amenities and
          comfortable living spaces.
        </p>
        <button
          onClick={() => navigate('/apertments')}
          className="bg-blue-500 hover:bg-blue-700 text-white px-6 py-2 rounded-lg shadow-lg cursor-pointer"
        >
          Explore Now
        </button>
      </div>

      {/* Dots Indicator */}
      <div className="absolute bottom-5 flex space-x-2 w-full justify-center">
        {images.map((_, index) => (
          <div
            key={index}
            className={`w-3 h-3 rounded-full ${
              index === currentIndex ? 'bg-white' : 'bg-gray-400'
            }`}
          ></div>
        ))}
      </div>
    </div>
  );
};

export default Banner;
