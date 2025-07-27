import { useState } from "react";

const AgreementRequests = () => {
  const [requests, setRequests] = useState([
    {
      id: 1,
      userName: "John Doe",
      userEmail: "john@example.com",
      floorNo: "2",
      blockName: "B",
      roomNo: "205",
      rent: "12000",
      requestDate: "2025-07-25",
    },
    {
      id: 2,
      userName: "Jane Smith",
      userEmail: "jane@example.com",
      floorNo: "1",
      blockName: "A",
      roomNo: "105",
      rent: "15000",
      requestDate: "2025-07-24",
    },
  ]);

  const handleAccept = (id) => {
    alert(`Accepted request ID: ${id}`);
    setRequests(requests.filter((req) => req.id !== id));
  };

  const handleReject = (id) => {
    alert(`Rejected request ID: ${id}`);
    setRequests(requests.filter((req) => req.id !== id));
  };

  return (
    <div className="container mx-auto px-4 sm:px-8">
      <div className="py-8">
        <h2 className="text-2xl font-bold text-gray-800 mb-6">
          Agreement Requests
        </h2>
        <div className="-mx-4 sm:-mx-8 px-4 sm:px-8 py-4 overflow-x-auto">
          <div className="inline-block min-w-full shadow rounded-lg overflow-hidden">
            <table className="min-w-full leading-normal">
              {/* Table Header */}
              <thead>
                <tr>
                  <th className="px-5 py-3 bg-white border-b border-gray-200 text-gray-800 text-left text-sm uppercase font-normal">
                    User Name
                  </th>
                  <th className="px-5 py-3 bg-white border-b border-gray-200 text-gray-800 text-left text-sm uppercase font-normal">
                    Email
                  </th>
                  <th className="px-5 py-3 bg-white border-b border-gray-200 text-gray-800 text-left text-sm uppercase font-normal">
                    Floor
                  </th>
                  <th className="px-5 py-3 bg-white border-b border-gray-200 text-gray-800 text-left text-sm uppercase font-normal">
                    Block
                  </th>
                  <th className="px-5 py-3 bg-white border-b border-gray-200 text-gray-800 text-left text-sm uppercase font-normal">
                    Room
                  </th>
                  <th className="px-5 py-3 bg-white border-b border-gray-200 text-gray-800 text-left text-sm uppercase font-normal">
                    Rent (৳)
                  </th>
                  <th className="px-5 py-3 bg-white border-b border-gray-200 text-gray-800 text-left text-sm uppercase font-normal">
                    Request Date
                  </th>
                  <th className="px-5 py-3 bg-white border-b border-gray-200 text-gray-800 text-center text-sm uppercase font-normal">
                    Actions
                  </th>
                </tr>
              </thead>

              {/* Table Body */}
              <tbody>
                {requests.length > 0 ? (
                  requests.map((req) => (
                    <tr key={req.id}>
                      <td className="px-5 py-5 bg-white text-sm border-b border-gray-200">
                        <p className="text-gray-900 whitespace-no-wrap">
                          {req.userName}
                        </p>
                      </td>
                      <td className="px-5 py-5 bg-white text-sm border-b border-gray-200">
                        <p className="text-gray-600 whitespace-no-wrap">
                          {req.userEmail}
                        </p>
                      </td>
                      <td className="px-5 py-5 bg-white text-sm border-b border-gray-200">
                        {req.floorNo}
                      </td>
                      <td className="px-5 py-5 bg-white text-sm border-b border-gray-200">
                        {req.blockName}
                      </td>
                      <td className="px-5 py-5 bg-white text-sm border-b border-gray-200">
                        {req.roomNo}
                      </td>
                      <td className="px-5 py-5 bg-white text-sm border-b border-gray-200 font-semibold">
                        ৳{req.rent}
                      </td>
                      <td className="px-5 py-5 bg-white text-sm border-b border-gray-200">
                        {req.requestDate}
                      </td>
                      <td className="px-5 py-5 bg-white text-sm border-b border-gray-200 text-center">
                        <button
                          onClick={() => handleAccept(req.id)}
                          className="bg-green-500 hover:bg-green-600 text-white px-3 py-1 rounded-lg text-xs mr-2"
                        >
                          Accept
                        </button>
                        <button
                          onClick={() => handleReject(req.id)}
                          className="bg-red-500 hover:bg-red-600 text-white px-3 py-1 rounded-lg text-xs"
                        >
                          Reject
                        </button>
                      </td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td
                      colSpan="8"
                      className="text-center p-5 bg-white text-gray-600 font-semibold"
                    >
                      No agreement requests found!
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AgreementRequests;
