import { useState } from "react";

const ManageCoupons = () => {
  // Sample data (replace with DB data later)
  const [coupons, setCoupons] = useState([
    {
      id: 1,
      code: "SUMMER20",
      discount: 20,
      description: "Get 20% off on all bookings this summer.",
    },
    {
      id: 2,
      code: "FREERENT50",
      discount: 50,
      description: "Flat 50% off on first month rent.",
    },
  ]);

  // Modal state
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [couponCode, setCouponCode] = useState("");
  const [discount, setDiscount] = useState("");
  const [description, setDescription] = useState("");

  // Add coupon handler
  const handleAddCoupon = (e) => {
    e.preventDefault();

    const newCoupon = {
      id: Date.now(),
      code: couponCode,
      discount: discount,
      description: description,
    };

    setCoupons([...coupons, newCoupon]);
    setIsModalOpen(false);
    setCouponCode("");
    setDiscount("");
    setDescription("");
  };

  return (
    <div className="container mx-auto px-4 sm:px-8">
      <div className="py-8">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold text-gray-800">Manage Coupons</h2>
          <button
            onClick={() => setIsModalOpen(true)}
            className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg"
          >
            + Add Coupon
          </button>
        </div>

        {/* Table */}
        <div className="-mx-4 sm:-mx-8 px-4 sm:px-8 py-4 overflow-x-auto">
          <div className="inline-block min-w-full shadow rounded-lg overflow-hidden">
            <table className="min-w-full leading-normal">
              <thead>
                <tr>
                  <th className="px-5 py-3 bg-white border-b border-gray-200 text-gray-800 text-left text-sm uppercase font-normal">
                    Coupon Code
                  </th>
                  <th className="px-5 py-3 bg-white border-b border-gray-200 text-gray-800 text-left text-sm uppercase font-normal">
                    Discount (%)
                  </th>
                  <th className="px-5 py-3 bg-white border-b border-gray-200 text-gray-800 text-left text-sm uppercase font-normal">
                    Description
                  </th>
                </tr>
              </thead>
              <tbody>
                {coupons.length > 0 ? (
                  coupons.map((coupon) => (
                    <tr key={coupon.id}>
                      <td className="px-5 py-5 bg-white text-sm border-b border-gray-200 font-semibold">
                        {coupon.code}
                      </td>
                      <td className="px-5 py-5 bg-white text-sm border-b border-gray-200">
                        {coupon.discount}%
                      </td>
                      <td className="px-5 py-5 bg-white text-sm border-b border-gray-200">
                        {coupon.description}
                      </td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td
                      colSpan="3"
                      className="text-center p-5 bg-white text-gray-600 font-semibold"
                    >
                      No coupons found!
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </div>
      </div>

      {/* Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
          <div className="bg-white p-6 rounded-lg w-full max-w-md shadow-xl">
            <h3 className="text-xl font-bold mb-4 text-gray-800">
              Add New Coupon
            </h3>
            <form onSubmit={handleAddCoupon} className="space-y-4">
              {/* Coupon Code */}
              <div>
                <label className="block text-sm font-semibold text-gray-700">
                  Coupon Code
                </label>
                <input
                  type="text"
                  value={couponCode}
                  onChange={(e) => setCouponCode(e.target.value)}
                  placeholder="e.g. SUMMER20"
                  className="w-full border border-gray-300 rounded-lg p-2 focus:ring-2 focus:ring-blue-500 outline-none"
                  required
                />
              </div>

              {/* Discount Percentage */}
              <div>
                <label className="block text-sm font-semibold text-gray-700">
                  Discount Percentage
                </label>
                <input
                  type="number"
                  value={discount}
                  onChange={(e) => setDiscount(e.target.value)}
                  placeholder="e.g. 20"
                  min="1"
                  max="100"
                  className="w-full border border-gray-300 rounded-lg p-2 focus:ring-2 focus:ring-blue-500 outline-none"
                  required
                />
              </div>

              {/* Description */}
              <div>
                <label className="block text-sm font-semibold text-gray-700">
                  Description
                </label>
                <textarea
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                  placeholder="Enter coupon description"
                  rows="3"
                  className="w-full border border-gray-300 rounded-lg p-2 focus:ring-2 focus:ring-blue-500 outline-none"
                  required
                ></textarea>
              </div>

              {/* Buttons */}
              <div className="flex justify-end gap-3">
                <button
                  type="button"
                  onClick={() => setIsModalOpen(false)}
                  className="bg-gray-300 hover:bg-gray-400 text-gray-700 px-4 py-2 rounded-lg"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg"
                >
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default ManageCoupons;
