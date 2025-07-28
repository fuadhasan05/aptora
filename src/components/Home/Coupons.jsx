import React from 'react';
import { FaGift, FaSun, FaUserFriends } from 'react-icons/fa';

const coupons = [
  {
    code: 'WELCOME10',
    discount: '10% OFF',
    description: 'For new members on first booking',
    bgColor: 'from-purple-500 to-indigo-600',
    icon: <FaGift size={40} className="mb-3 drop-shadow-lg" />,
  },
  {
    code: 'SUMMER25',
    discount: '25% OFF',
    description: 'Summer special discount for all residents',
    bgColor: 'from-green-400 to-teal-500',
    icon: <FaSun size={40} className="mb-3 drop-shadow-lg" />,
  },
  {
    code: 'FRIEND5',
    discount: '$5 OFF',
    description: 'Refer a friend and save instantly',
    bgColor: 'from-pink-500 to-red-500',
    icon: <FaUserFriends size={40} className="mb-3 drop-shadow-lg" />,
  },
];

const Coupons = () => {
  return (
    <section className="py-20 bg-gradient-to-r from-blue-50 to-white ">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-5xl md:text-6xl font-extrabold text-center mb-20 text-gray-800">
          Exclusive <span className="text-blue-600">Coupons</span>
        </h2>
        <div className="flex justify-center space-x-12 overflow-x-auto px-2">
          {coupons.map(({ code, discount, description, bgColor, icon }, idx) => (
            <div
              key={idx}
              className={`flex-shrink-0 w-72 rounded-xl bg-gradient-to-r ${bgColor} p-6 text-white shadow-lg transform transition-transform hover:scale-105 cursor-pointer`}
            >
              <div className="flex justify-center">{icon}</div>
              <h3 className="text-4xl font-bold tracking-wide mb-2 drop-shadow-lg text-center">{discount}</h3>
              <p className="text-lg font-semibold mb-4 drop-shadow-md text-center">{code}</p>
              <p className="text-sm opacity-90 text-center">{description}</p>
              <button className="mt-6 bg-white text-gray-800 rounded-full px-5 py-2 font-semibold hover:bg-gray-200 transition mx-auto block">
                Redeem Now
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Coupons;
