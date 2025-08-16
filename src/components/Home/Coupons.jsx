import { useEffect, useState } from "react";
import { FaGift, FaSun, FaUsers } from "react-icons/fa";
import axios from "axios";
import toast from "react-hot-toast";
import LoadingSpinner from "../Shared/LoadingSpinner";

const Coupons = () => {
  const [coupons, setCoupons] = useState([]);
  const [loading, setLoading] = useState(true);

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

  const handleCopy = (code) => {
    navigator.clipboard.writeText(code);
    toast.success(`Coupon code "${code}" copied!`);
  };

  // Modern gradient combinations that work in both themes
  const cardGradients = [
    "from-indigo-500 to-pink-500", // Brand highlight
    "from-emerald-400 to-cyan-500", // Fresh teal
    "from-violet-500 to-purple-600", // Luxury purple
    "from-rose-500 to-red-500", // Bold red
    "from-sky-400 to-indigo-600", // Trust blue
  ];

  const icons = [
    <FaGift className="text-white/90" size={36} />,
    <FaSun className="text-white/90" size={36} />,
    <FaUsers className="text-white/90" size={36} />,
  ];

  return (
    <section className="py-16 bg-base-100">
      <div className="container mx-auto px-2 md:px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-base-content mb-4">
            Exclusive{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">
              Deals
            </span>
          </h2>
          <p className="text-lg text-base-content/80 max-w-2xl mx-auto">
            Unlock special discounts with these limited-time offers
          </p>
        </div>

        {loading ? (
          <LoadingSpinner />
        ) : coupons.length === 0 ? (
          <div className="text-center py-12">
            <p className="text-base-content/70 text-lg">
              No active coupons currently
            </p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {coupons.map(
              ({ _id, code, discount, description, expiryDate }, idx) => (
                <div
                  key={_id}
                  className={`relative rounded-xl overflow-hidden bg-gradient-to-br ${
                    cardGradients[idx % cardGradients.length]
                  } p-0.5 shadow-xl hover:shadow-2xl transition-all duration-300`}
                >
                  <div className="bg-base-100/5 backdrop-blur-sm rounded-[15px] h-full p-6 flex flex-col">
                    <div className="flex justify-between items-start mb-6">
                      <div className="bg-white/10 rounded-full p-3">
                        {icons[idx % icons.length]}
                      </div>
                      <span className="bg-white/20 text-white/90 text-sm px-3 py-1 rounded-full">
                        {discount}% OFF
                      </span>
                    </div>

                    <div className="mb-6">
                      <h3 className="text-2xl font-bold text-white mb-2">
                        {code}
                      </h3>
                      <p className="text-white/80">{description}</p>
                    </div>

                    <div className="mt-auto">
                      <button
                        onClick={() => handleCopy(code)}
                        className="w-full bg-white text-gray-900 font-semibold py-3 px-4 rounded-lg hover:bg-gray-100 transition-colors duration-200 flex items-center justify-center gap-2"
                      >
                        Copy Code
                      </button>
                      {expiryDate && (
                        <p className="text-white/60 text-sm mt-3 text-center">
                          Expires: {new Date(expiryDate).toLocaleDateString()}
                        </p>
                      )}
                    </div>
                  </div>
                </div>
              )
            )}
          </div>
        )}
      </div>
    </section>
  );
};

export default Coupons;
