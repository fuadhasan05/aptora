import { useEffect, useState } from "react";
import { FaGift } from "react-icons/fa";
import { BsFillSunFill, BsPeopleFill } from "react-icons/bs";
import axios from "axios";
import toast from "react-hot-toast";
import LoadingSpinner from "../Shared/LoadingSpinner";

const Coupons = () => {
  const [coupons, setCoupons] = useState([]);
  const [loading, setLoading] = useState(true);

  // Fetch coupons from DB
  useEffect(() => {
    axios
      .get(`${import.meta.env.VITE_API_URL}/coupons`)
      .then((res) => {
        setCoupons(res.data);
        setLoading(false);
      })
      .catch((err) => {
        console.error(err);
        setLoading(false);
      });
  }, []);

  // Copy coupon code
  const handleCopy = (code) => {
    navigator.clipboard.writeText(code);
    toast.success(`Coupon code "${code}" copied!`);
  };

  return (
    <section className="py-20 bg-gradient-to-r from-blue-50 to-white">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-5xl md:text-6xl font-semibold text-center mb-20 text-gray-800">
          Exclusive <span className="text-blue-600">Coupons</span>
        </h2>

        {loading ? (
          <LoadingSpinner/>
        ) : coupons.length === 0 ? (
          <p className="text-center text-gray-500 text-lg">
            No coupons available at the moment.
          </p>
        ) : (
          <div className="flex flex-col md:flex-row flex-wrap gap-12 justify-center overflow-hidden px-2">
            {coupons.map(({ _id, code, discount, description }, idx) => {
              // Dynamic background colors
              const bgColors = [
                "from-purple-500 to-indigo-600",
                "from-green-400 to-teal-500",
                "from-pink-500 to-red-500",
              ];
              const icons = [
                <FaGift size={40} />,
                <BsFillSunFill size={40} />,
                <BsPeopleFill size={40} />,
              ];

              return (
                <div
                  key={_id}
                  className={`flex-shrink-0 w-72 rounded-xl bg-gradient-to-r ${
                    bgColors[idx % bgColors.length]
                  } p-6 text-white shadow-lg transform transition-transform hover:scale-105 cursor-pointer`}
                >
                  <div className="flex justify-center mb-3 drop-shadow-lg">
                    {icons[idx % icons.length]}
                  </div>
                  <h3 className="text-4xl font-bold tracking-wide mb-2 drop-shadow-lg text-center">
                    {discount}% OFF
                  </h3>
                  <p className="text-lg font-semibold mb-4 drop-shadow-md text-center">
                    {code}
                  </p>
                  <p className="text-sm opacity-90 text-center">
                    {description}
                  </p>
                  <button
                    onClick={() => handleCopy(code)}
                    className="mt-6 bg-white text-gray-800 rounded-full px-5 py-2 font-semibold hover:bg-gray-200 transition mx-auto block cursor-pointer"
                  >
                    Copy Code
                  </button>
                </div>
              );
            })}
          </div>
        )}
      </div>
    </section>
  );
};

export default Coupons;
