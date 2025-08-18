import MemberDataRow from "../../../components/Dashboard/TableRows/MemberDataRow";
import LoadingSpinner from "../../../components/Shared/LoadingSpinner";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import { useQuery } from "@tanstack/react-query";

const ManageMembers = () => {
  const axiosSecure = useAxiosSecure();
  const { data: users, isLoading } = useQuery({
    queryKey: ["users"],
    queryFn: async () => {
      const { data } = await axiosSecure("/all-users");
      return data;
    },
  });

  // console.log(users);

  if (isLoading) return <LoadingSpinner></LoadingSpinner>;
  return (
    <>
      <div className="container mx-auto px-4 sm:px-8 bg-base-100">
        <div className="py-8">
          <div className="-mx-4 sm:-mx-8 px-4 sm:px-8 py-4 overflow-x-auto">
            <div className="inline-block min-w-full shadow rounded-lg overflow-hidden">
              <table className="min-w-full leading-normal">
                <thead>
                  <tr>
                    <th
                      scope="col"
                      className="px-5 py-3 bg-white dark:bg-base-300 dark:text-base-content border-b border-gray-200 text-gray-800 text-left text-sm uppercase font-bold"
                    >
                      Name
                    </th>
                    <th
                      scope="col"
                      className="px-5 py-3 bg-white dark:bg-base-300 dark:text-base-content  border-b border-gray-200 text-gray-800  text-left text-sm uppercase font-bold"
                    >
                      Email
                    </th>
                    <th
                      scope="col"
                      className="px-5 py-3 bg-white dark:bg-base-300 dark:text-base-content  border-b border-gray-200 text-gray-800  text-left text-sm uppercase font-bold"
                    >
                      Role
                    </th>
                    <th
                      scope="col"
                      className="px-5 py-3 bg-white dark:bg-base-300 dark:text-base-content  border-b border-gray-200 text-gray-800  text-left text-sm uppercase font-bold"
                    >
                      Status
                    </th>
                    <th
                      scope="col"
                      className="px-5 py-3 bg-white dark:bg-base-300 dark:text-base-content  border-b border-gray-200 text-gray-800  text-left text-sm uppercase font-bold"
                    >
                      Action
                    </th>
                    <th
                      scope="col"
                      className="px-5 py-3 bg-white dark:bg-base-300 dark:text-base-content  border-b border-gray-200 text-gray-800  text-left text-sm uppercase font-bold"
                    >
                      Remove
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {users.map((user) => (
                    <MemberDataRow key={user?._id} user={user} />
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ManageMembers;
