import { useState, useEffect } from "react";
import axios from "axios";
import toast from "react-hot-toast";
import CouponsModal from "../../../components/Modal/CouponsModal";

const ManageCoupons = () => {
  const [coupons, setCoupons] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Fetch coupons from DB
  useEffect(() => {
    fetchCoupons();
  }, []);

  const fetchCoupons = async () => {
    try {
      const { data } = await axios.get(`${import.meta.env.VITE_API_URL}/coupons`);
      setCoupons(data);
    } catch (error) {
      console.error(error);
      toast.error("Failed to load coupons");
    }
  };

  // Add coupon handler
  const handleAddCoupon = async (couponData) => {
    try {
      await axios.post(`${import.meta.env.VITE_API_URL}/coupons`, couponData, {
        withCredentials: true,
      });
      toast.success("Coupon added successfully!");
      fetchCoupons();
      setIsModalOpen(false);
    } catch (error) {
      console.error(error);
      toast.error("Error adding coupon");
    }
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
                  <th className="px-5 py-3 bg-white border-b border-gray-200 text-gray-800 text-left text-sm uppercase font-bold">
                    Coupon Code
                  </th>
                  <th className="px-5 py-3 bg-white border-b border-gray-200 text-gray-800 text-left text-sm uppercase font-bold">
                    Discount (%)
                  </th>
                  <th className="px-5 py-3 bg-white border-b border-gray-200 text-gray-800 text-left text-sm uppercase font-bold">
                    Description
                  </th>
                </tr>
              </thead>
              {/* table data */}
              <tbody>
                {coupons.length > 0 ? (
                  coupons.map((coupon) => (
                    <tr key={coupon._id}>
                      <td className="px-5 py-5 bg-white text-sm text-purple-400 border-b border-gray-200 font-semibold">
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
      <CouponsModal
        isModalOpen={isModalOpen}
        setIsModalOpen={setIsModalOpen}
        handleAddCoupon={handleAddCoupon}
      />
    </div>
  );
};

export default ManageCoupons;
