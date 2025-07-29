import { useEffect, useState } from "react";
import axios from "axios";
import useAuth from "../../../hooks/useAuth";
import toast from "react-hot-toast";
import { useNavigate } from "react-router";
import {
  FaEnvelope,
  FaHome,
  FaCalendarAlt,
  FaMoneyBillWave,
} from "react-icons/fa";
import LoadingSpinner from "../../../components/Shared/LoadingSpinner";

const MakePayment = () => {
  const { user } = useAuth();
  const navigate = useNavigate();

  const [memberData, setMemberData] = useState(null);
  const [month, setMonth] = useState("");
  const [couponCode, setCouponCode] = useState("");
  const [discount, setDiscount] = useState(0);
  const [finalRent, setFinalRent] = useState(0);
  const [isCouponApplied, setIsCouponApplied] = useState(false);

  // Fetch member data
  useEffect(() => {
    axios
      .get(`${import.meta.env.VITE_API_URL}/my-profile?email=${user?.email}`)
      .then((res) => {
        setMemberData(res.data);
        setFinalRent(res.data.rent);
      })
      .catch((err) => console.log(err));
  }, [user]);

  // Coupon handler
  const handleApplyCoupon = async () => {
    if (!couponCode) {
      toast.error("Please enter a coupon code!");
      return;
    }
    try {
      const res = await axios.get(
        `${import.meta.env.VITE_API_URL}/coupons/${couponCode}`
      );
      if (res.data) {
        const discountPercentage = res.data.discount;
        const discountedRent =
          memberData.rent - (memberData.rent * discountPercentage) / 100;
        setDiscount(discountPercentage);
        setFinalRent(discountedRent);
        setIsCouponApplied(true);
        toast.success(`Coupon applied! ${discountPercentage}% discount`);
      } else {
        toast.error("Invalid coupon code!");
      }
    } catch (error) {
      console.error(error);
      toast.error("Invalid coupon code!");
    }
  };

  // Submit handler - redirect to Payment Page
  const handleSubmit = (e) => {
    e.preventDefault();

    if (!month) {
      toast.error("Please select a month!");
      return;
    }

    // Navigate and pass data to Payment Page
    navigate("/dashboard/payment-checkout", {
      state: {
        email: memberData.userEmail,
        floor: memberData.floorNo,
        block: memberData.blockName,
        room: memberData.apartmentNo,
        rent: finalRent,
        month,
        coupon: couponCode || null,
      },
    });
  };

  if (!memberData) {
    return <LoadingSpinner />;
  }

  return (
    <div className="min-h-screen flex justify-center items-center px-6 py-12">
      <div className="bg-white shadow-lg rounded-xl border border-gray-200 p-10 max-w-md w-full">
        <h2 className="text-3xl font-extrabold text-blue-800 mb-8 text-center tracking-wide drop-shadow-md">
          💳 Make a Payment
        </h2>
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Email */}
          <div>
            <label className="flex items-center text-gray-700 font-semibold mb-2 space-x-2">
              <FaEnvelope className="text-blue-600" />
              <span>Member Email</span>
            </label>
            <input
              type="text"
              value={memberData.userEmail}
              readOnly
              className="w-full border border-gray-300 rounded-xl p-3 bg-gray-100"
            />
          </div>

          {/* Floor */}
          <div>
            <label className="flex items-center text-gray-700 font-semibold mb-2 space-x-2">
              <FaHome className="text-blue-600" />
              <span>Floor</span>
            </label>
            <input
              type="text"
              value={memberData.floorNo}
              readOnly
              className="w-full border border-gray-300 rounded-xl p-3 bg-gray-100"
            />
          </div>

          {/* Block */}
          <div>
            <label className="flex items-center text-gray-700 font-semibold mb-2 space-x-2">
              <FaHome className="text-blue-600" />
              <span>Block Name</span>
            </label>
            <input
              type="text"
              value={memberData.blockName}
              readOnly
              className="w-full border border-gray-300 rounded-xl p-3 bg-gray-100"
            />
          </div>

          {/* Apartment / Room */}
          <div>
            <label className="flex items-center text-gray-700 font-semibold mb-2 space-x-2">
              <FaHome className="text-blue-600" />
              <span>Apartment / Room No</span>
            </label>
            <input
              type="text"
              value={memberData.apartmentNo}
              readOnly
              className="w-full border border-gray-300 rounded-xl p-3 bg-gray-100"
            />
          </div>

          {/* Rent */}
          <div>
            <label className="flex items-center text-gray-700 font-semibold mb-2 space-x-2">
              <FaMoneyBillWave className="text-green-600" />
              <span>Rent Amount (BDT)</span>
            </label>
            <input
              type="text"
              value={finalRent}
              readOnly
              className="w-full border border-gray-300 rounded-xl p-3 bg-green-50 text-green-900 font-semibold"
            />
            {isCouponApplied && (
              <p className="text-green-700 text-sm mt-1 italic">
                {discount}% discount applied!
              </p>
            )}
          </div>

          {/* Coupon */}
          <div className="flex gap-3">
            <input
              type="text"
              placeholder="Enter Coupon Code"
              value={couponCode}
              onChange={(e) => setCouponCode(e.target.value)}
              className="flex-grow border border-gray-300 rounded-xl p-3"
            />
            <button
              type="button"
              onClick={handleApplyCoupon}
              className="bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-xl font-semibold shadow-md"
            >
              Apply
            </button>
          </div>

          {/* Month */}
          <div>
            <label className="flex items-center text-gray-700 font-semibold mb-2 space-x-2">
              <FaCalendarAlt className="text-blue-600" />
              <span>Select Month</span>
            </label>
            <input
              type="month"
              value={month}
              onChange={(e) => setMonth(e.target.value)}
              required
              className="w-full border border-gray-300 rounded-xl p-3"
            />
          </div>

          {/* Submit */}
          <button
            type="submit"
            className="w-full bg-gradient-to-r from-blue-600 to-blue-800 text-white font-bold py-4 rounded-2xl shadow-lg hover:scale-105 transition"
          >
            Pay Rent
          </button>
        </form>
      </div>
    </div>
  );
};

export default MakePayment;
