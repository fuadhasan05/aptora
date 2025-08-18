import { useState } from "react";
import UpdateUserRoleModel from "../../Modal/UpdateUserRoleModel";
import { CiSquareRemove } from "react-icons/ci";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { toast } from "react-hot-toast";
import useAxiosSecure from "../../../hooks/useAxiosSecure";

const MemberDataRow = ({ user }) => {
  const { name, email, role, status } = user;
  let [isOpen, setIsOpen] = useState(false);
  const axiosSecure = useAxiosSecure();
  const queryClient = useQueryClient();

  const removeMutation = useMutation({
    mutationFn: async () => {
      const { data } = await axiosSecure.patch(
        `/user/role/update/${email}`,
        { role: "user", status: "removed" }
      );
      return data;
    },
    onSuccess: () => {
      toast.success("User removed from member role");
      queryClient.invalidateQueries(["users"]);
    },
    onError: (error) => {
      toast.error(`Failed to remove user: ${error.message}`);
    },
  });

  return (
    <tr>
      <td className="px-5 py-5 border-b border-gray-200 dark:border-base-300 bg-white dark:bg-base-200 text-sm">
        <p className="text-gray-900 dark:text-base-content whitespace-no-wrap">{name}</p>
      </td>
      <td className="px-5 py-5 border-b border-gray-200 dark:border-base-300 bg-white dark:bg-base-200 text-sm">
        <p className="text-gray-900 dark:text-base-content whitespace-no-wrap">{email}</p>
      </td>
      <td className="px-5 py-5 border-b border-gray-200 dark:border-base-300 bg-white dark:bg-base-200 text-sm">
        <p className="text-gray-900 dark:text-base-content whitespace-no-wrap">{role}</p>
      </td>
      <td className="px-5 py-5 border-b border-gray-200 dark:border-base-300 bg-white dark:bg-base-200 text-sm">
        <p
          className={`${
            status === "requested"
              ? "text-yellow-500 "
              : status === "varified"
              ? "text-green-500 "
              : "text-red-500"
          } whitespace-no-wrap`}
        >
          {status ? status : "unavailable"}
        </p>
      </td>
      <td className="px-5 py-5 border-b border-gray-200 dark:border-base-300 bg-white dark:bg-base-200 text-sm">
        <span
          onClick={() => setIsOpen(true)}
          className="relative cursor-pointer inline-block px-3 py-1 font-semibold text-green-900 leading-tight"
        >
          <span
            aria-hidden="true"
            className="absolute inset-0 bg-green-200 opacity-50 rounded-full"
          ></span>
          <span className="relative ">Update Role</span>
        </span>
        {/* Modal */}
        <UpdateUserRoleModel
          isOpen={isOpen}
          setIsOpen={setIsOpen}
          role={role}
          userEmail={email}
        ></UpdateUserRoleModel>
      </td>
      <td className="px-5 py-5 border-b border-gray-200 dark:border-base-300 bg-white dark:bg-base-200 text-sm text-center">
        <button
          className="text-red-600 hover:text-red-800 transition-all duration-300 cursor-pointer"
          title="Remove"
          onClick={() => removeMutation.mutate()}
        >
          <CiSquareRemove size={22} />
        </button>
      </td>
    </tr>
  );
};

export default MemberDataRow;
