import AgreementDataRow from "../../../components/Dashboard/TableRows/AgreementDataRow";
import { useQuery } from "@tanstack/react-query";
import LoadingSpinner from "../../../components/Shared/LoadingSpinner";
import useAxiosSecure from "../../../hooks/useAxiosSecure";

const AgreementRequests = () => {
  const axiosSecure = useAxiosSecure();

  const { data: agreements = [], isLoading } = useQuery({
    queryKey: ["agreements"],
    queryFn: async () => {
      const { data } = await axiosSecure("/agreements");
      return data;
    },
  });

  if (isLoading) return <LoadingSpinner />;

  return (
    <div className="container mx-auto px-4 sm:px-8">
      <div className="py-8">
        <div className="-mx-4 sm:-mx-8 px-4 sm:px-8 py-4 overflow-x-auto">
          <div className="inline-block min-w-full shadow rounded-lg overflow-hidden">
            <table className="min-w-full leading-normal">
              {/* Table Header */}
              <thead>
                <tr>
                  <th className="px-5 py-2 bg-white border-b border-gray-200 text-left text-sm uppercase font-bold">
                    User Name
                  </th>
                  <th className="px-5 py-2 bg-white border-b border-gray-200 text-left text-sm uppercase font-bold">
                    Email
                  </th>
                  <th className="px-5 py-2 bg-white border-b border-gray-200 text-left text-sm uppercase font-bold">
                    Floor
                  </th>
                  <th className="px-5 py-2 bg-white border-b border-gray-200 text-left text-sm uppercase font-bold">
                    Block
                  </th>
                  <th className="px-5 py-2 bg-white border-b border-gray-200 text-left text-sm uppercase font-bold">
                    Apartment
                  </th>
                  <th className="px-5 py-2 bg-white border-b border-gray-200 text-left text-sm uppercase font-bold">
                    Rent
                  </th>
                  <th className="px-5 py-2 bg-white border-b border-gray-200 text-left text-sm uppercase font-bold">
                    Date
                  </th>
                  <th className="px-5 py-2 bg-white border-b border-gray-200 text-left text-sm uppercase font-bold">
                    Status
                  </th>
                  <th className="px-5 py-2 bg-white border-b border-gray-200 text-center text-sm uppercase font-bold">
                    Actions
                  </th>
                </tr>
              </thead>

              {/* Table Body */}
              <tbody>
                {agreements
                  .filter((request) => request.status === "pending")
                  .map((request) => (
                    <AgreementDataRow key={request._id} request={request} />
                  ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AgreementRequests;
