import { useMutation, useQueryClient } from "@tanstack/react-query";
import { toast } from "react-hot-toast";
import useAxiosSecure from "../../../hooks/useAxiosSecure";

const AgreementDataRow = ({ request }) => {
  const axiosSecure = useAxiosSecure();
  const queryClient = useQueryClient();

  // Accept handler
  const { mutate: acceptAgreement, isLoading: isAccepting } = useMutation({
    mutationFn: async () => {
      // 1. Update agreement status to "checked"
      await axiosSecure.patch(`/agreements/${request._id}`, {
        status: "checked",
      });
      // 2. Update user role to "member"
      await axiosSecure.patch(`/user/role/update/${request.userEmail}`, {
        role: "member",
      });
      // 3. Update apartment status to "rented"
      await axiosSecure.patch(`/apartments/${request.apartmentNo}`,{
        status: "rented",
      });
    },
    onSuccess: () => {
      toast.success("Accepted! User is now a member.");
      queryClient.invalidateQueries(["agreements"]);
      queryClient.invalidateQueries(["users"]);
    },
    onError: () => {
      toast.error("Failed to accept agreement!");
    },
  });

  // Reject handler
  const { mutate: rejectAgreement, isLoading: isRejecting } = useMutation({
    mutationFn: async () => {
      // 1. Update agreement status to "checked"
      await axiosSecure.patch(`/agreements/${request._id}`, {
        status: "checked",
      });
      // 2. Do NOT change user role
    },
    onSuccess: () => {
      toast.success("Rejected! Status set to checked.");
      queryClient.invalidateQueries(["agreements"]);
    },
    onError: () => {
      toast.error("Failed to reject agreement!");
    },
  });

  return (
    <tr>
      <td className="px-5 py-5 border-b border-gray-200 dark:border-base-300 bg-white dark:bg-base-200 text-sm">
        {request.userName}
      </td>
      <td className="px-5 py-5 border-b border-gray-200 dark:border-base-300 bg-white dark:bg-base-200 text-sm">
        {request.userEmail}
      </td>
      <td className="px-5 py-5 border-b border-gray-200 dark:border-base-300 bg-white dark:bg-base-200 text-sm text-center">
        {request.floorNo}
      </td>
      <td className="px-5 py-5 border-b border-gray-200 dark:border-base-300 bg-white dark:bg-base-200 text-sm text-center">
        {request.blockName}
      </td>
      <td className="px-5 py-5 border-b border-gray-200 dark:border-base-300 bg-white dark:bg-base-200 text-sm text-center">
        {request.apartmentNo}
      </td>
      <td className="px-5 py-5 border-b border-gray-200 dark:border-base-300 bg-white dark:bg-base-200 text-sm text-center">
        ৳{request.rent}
      </td>
      <td className="px-5 py-5 border-b border-gray-200 dark:border-base-300 bg-white dark:bg-base-200 text-sm text-center">
        {request.requestDate.split("T")[0]}
      </td>
      <td className="px-5 py-5 border-b border-gray-200 dark:border-base-300 bg-white dark:bg-base-200 text-sm text-center">
        <span
          className={`px-2 py-1 rounded text-xs ${
            request.status === "pending"
              ? "bg-yellow-100 text-yellow-800"
              : request.status === "checked"
              ? "bg-green-100 text-green-800"
              : "bg-red-100 text-red-800"
          }`}
        >
          {request.status}
        </span>
      </td>
      <td className="px-5 py-5 border-b border-gray-200 dark:border-base-300 bg-white dark:bg-base-200 text-sm text-center flex flex-col gap-2">
        {request.status === "pending" && (
          <>
            <button
              onClick={() => acceptAgreement()}
              className="bg-green-500 hover:bg-green-600 text-white px-3 py-1 rounded-lg text-xs cursor-pointer"
              disabled={isAccepting}
            >
              Accept
            </button>
            <button
              onClick={() => rejectAgreement()}
              className="bg-red-500 hover:bg-red-600 text-white px-3 py-1 rounded-lg text-xs cursor-pointer"
              disabled={isRejecting}
            >
              Reject
            </button>
          </>
        )}
      </td>
    </tr>
  );
};

export default AgreementDataRow;
