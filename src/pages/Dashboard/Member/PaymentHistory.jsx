import React from "react";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import useAuth from "../../../hooks/useAuth";
import LoadingSpinner from "../../../components/Shared/LoadingSpinner";

const fetchPayments = async (email) => {
  const res = await axios.get(`${import.meta.env.VITE_API_URL}/api/payments`, {
    params: { email },
  });
  return res.data;
};

const PaymentHistory = () => {
  const { user } = useAuth();

  const {
    data: payments = [],
    isLoading,
    isError,
  } = useQuery({
    queryKey: ["payments", user?.email],
    queryFn: () => fetchPayments(user?.email),
    enabled: !!user?.email,
  });

  if (isLoading) return <LoadingSpinner />;

  return (
    <div className="container mx-auto px-4 sm:px-8">
      <div className="py-8">
        <h2 className="text-2xl font-bold mb-6 text-purple-700 text-center">
          My Payment History
        </h2>

        {isError && (
          <p className="text-center text-red-500 mb-4">
            Failed to load payment data. Please try again.
          </p>
        )}

        {payments.length > 0 ? (
          <div className="-mx-4 sm:-mx-8 px-4 sm:px-8 py-4 overflow-x-auto">
            <div className="inline-block min-w-full shadow rounded-lg overflow-hidden">
              <table className="min-w-full leading-normal">
                <thead>
                  <tr>
                    <th className="px-5 py-3 bg-white border-b border-gray-200 text-gray-800 text-left text-sm uppercase font-bold">
                      Floor
                    </th>
                    <th className="px-5 py-3 bg-white border-b border-gray-200 text-gray-800 text-left text-sm uppercase font-bold">
                      Block
                    </th>
                    <th className="px-5 py-3 bg-white border-b border-gray-200 text-gray-800 text-left text-sm uppercase font-bold">
                      Room
                    </th>
                    <th className="px-5 py-3 bg-white border-b border-gray-200 text-gray-800 text-left text-sm uppercase font-bold">
                      Rent
                    </th>
                    <th className="px-5 py-3 bg-white border-b border-gray-200 text-gray-800 text-left text-sm uppercase font-bold">
                      Month
                    </th>
                    <th className="px-5 py-3 bg-white border-b border-gray-200 text-gray-800 text-left text-sm uppercase font-bold">
                      Coupon
                    </th>
                    <th className="px-5 py-3 bg-white border-b border-gray-200 text-gray-800 text-left text-sm uppercase font-bold">
                      Transaction ID
                    </th>
                    <th className="px-5 py-3 bg-white border-b border-gray-200 text-gray-800 text-left text-sm uppercase font-bold">
                      Date
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {payments.map((p) => (
                    <tr key={p._id} className="hover:bg-gray-50 transition">
                      <td className="px-5 py-4 border-b border-gray-200 text-sm text-gray-700">
                        {p.floor}
                      </td>
                      <td className="px-5 py-4 border-b border-gray-200 text-sm text-gray-700">
                        {p.block}
                      </td>
                      <td className="px-5 py-4 border-b border-gray-200 text-sm text-gray-700">
                        {p.room}
                      </td>
                      <td className="px-5 py-4 border-b border-gray-200 text-sm font-semibold text-green-600">
                        ৳{p.rent}
                      </td>
                      <td className="px-5 py-4 border-b border-gray-200 text-sm text-gray-700">
                        {p.month}
                      </td>
                      <td className="px-5 py-4 border-b border-gray-200 text-sm text-gray-700">
                        {p.coupon || "N/A"}
                      </td>
                      <td className="px-5 py-4 border-b border-gray-200 text-xs text-gray-700">
                        {p.transactionId}
                      </td>
                      <td className="px-5 py-4 border-b border-gray-200 text-sm text-gray-700">
                        {new Date(p.date).toLocaleDateString()}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        ) : (
          <p className="text-gray-500 text-center">
            No payment records found for your account.
          </p>
        )}
      </div>
    </div>
  );
};

export default PaymentHistory;
