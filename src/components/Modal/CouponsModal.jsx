import { useState } from "react";

const CouponsModal = ({ isModalOpen, setIsModalOpen, handleAddCoupon }) => {
  const [couponCode, setCouponCode] = useState("");
  const [discount, setDiscount] = useState("");
  const [description, setDescription] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    handleAddCoupon({
      code: couponCode,
      discount: parseInt(discount),
      description,
    });
    setCouponCode("");
    setDiscount("");
    setDescription("");
  };

  if (!isModalOpen) return null;

  return (
    <div className="fixed inset-0 bg-opacity-50 flex justify-center items-center z-50">
      <div className="bg-white p-6 rounded-lg w-full max-w-md shadow-xl">
        <h3 className="text-xl font-bold mb-4 text-gray-800">Add New Coupon</h3>
        <form onSubmit={handleSubmit} className="space-y-4">
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
  );
};

export default CouponsModal;
