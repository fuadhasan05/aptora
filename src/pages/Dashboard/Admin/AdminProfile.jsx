import { FaUserAlt, FaEnvelope } from "react-icons/fa";
import { BsFillHouseDoorFill } from "react-icons/bs";
import { MdGroup } from "react-icons/md";

const AdminProfile = () => {
  // Sample data (replace with DB or API)
  const admin = {
    name: "Super Admin",
    email: "admin@aptora.com",
    image: "https://i.ibb.co/7bQQYkX/default-avatar.png",
  };

  const stats = {
    totalRooms: 50,
    availableRooms: 20,
    unavailableRooms: 30,
    totalUsers: 120,
    totalMembers: 80,
  };

  // Calculate percentages
  const availablePercentage = ((stats.availableRooms / stats.totalRooms) * 100).toFixed(1);
  const unavailablePercentage = ((stats.unavailableRooms / stats.totalRooms) * 100).toFixed(1);

  return (
    <div className="p-6 min-h-screen bg-gray-50">
      <div className="max-w-6xl mx-auto">
        {/* Admin Profile Section */}
        <div className="bg-white shadow-lg rounded-xl p-6 flex flex-col md:flex-row items-center gap-6 mb-12">
          <img
            src={admin.image}
            alt="Admin"
            className="w-28 h-28 rounded-full border-4 border-blue-600 object-cover"
          />
          <div>
            <h2 className="text-2xl font-bold text-gray-800 flex items-center gap-2">
              <FaUserAlt className="text-blue-600" /> {admin.name}
            </h2>
            <p className="text-gray-600 flex items-center gap-2">
              <FaEnvelope className="text-gray-500" /> {admin.email}
            </p>
          </div>
        </div>

        {/* Stats Grid */}
        <div className="grid gap-y-10 gap-x-6 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {/* Total Rooms */}
          <div className="relative flex flex-col rounded-xl bg-white text-gray-700 shadow-md">
            <div className="bg-gradient-to-tr from-blue-600 to-blue-400 mx-4 rounded-xl absolute -mt-4 grid h-16 w-16 place-items-center text-white shadow-blue-500/40">
              <BsFillHouseDoorFill className="w-6 h-6" />
            </div>
            <div className="p-4 text-right">
              <p className="text-sm text-gray-600">Total Rooms</p>
              <h4 className="text-2xl font-semibold text-gray-900">
                {stats.totalRooms}
              </h4>
            </div>
          </div>

          {/* Available Rooms */}
          <div className="relative flex flex-col rounded-xl bg-white text-gray-700 shadow-md">
            <div className="bg-gradient-to-tr from-green-600 to-green-400 mx-4 rounded-xl absolute -mt-4 grid h-16 w-16 place-items-center text-white shadow-green-500/40">
              <BsFillHouseDoorFill className="w-6 h-6" />
            </div>
            <div className="p-4 text-right">
              <p className="text-sm text-gray-600">Available Rooms</p>
              <h4 className="text-2xl font-semibold text-gray-900">
                {availablePercentage}%
              </h4>
            </div>
          </div>

          {/* Unavailable Rooms */}
          <div className="relative flex flex-col rounded-xl bg-white text-gray-700 shadow-md">
            <div className="bg-gradient-to-tr from-red-600 to-red-400 mx-4 rounded-xl absolute -mt-4 grid h-16 w-16 place-items-center text-white shadow-red-500/40">
              <BsFillHouseDoorFill className="w-6 h-6" />
            </div>
            <div className="p-4 text-right">
              <p className="text-sm text-gray-600">Unavailable Rooms</p>
              <h4 className="text-2xl font-semibold text-gray-900">
                {unavailablePercentage}%
              </h4>
            </div>
          </div>

          {/* Users */}
          <div className="relative flex flex-col rounded-xl bg-white text-gray-700 shadow-md">
            <div className="bg-gradient-to-tr from-orange-600 to-orange-400 mx-4 rounded-xl absolute -mt-4 grid h-16 w-16 place-items-center text-white shadow-orange-500/40">
              <MdGroup className="w-6 h-6" />
            </div>
            <div className="p-4 text-right">
              <p className="text-sm text-gray-600">Total Users</p>
              <h4 className="text-2xl font-semibold text-gray-900">
                {stats.totalUsers}
              </h4>
            </div>
          </div>

          {/* Members */}
          <div className="relative flex flex-col rounded-xl bg-white text-gray-700 shadow-md">
            <div className="bg-gradient-to-tr from-pink-600 to-pink-400 mx-4 rounded-xl absolute -mt-4 grid h-16 w-16 place-items-center text-white shadow-pink-500/40">
              <MdGroup className="w-6 h-6" />
            </div>
            <div className="p-4 text-right">
              <p className="text-sm text-gray-600">Total Members</p>
              <h4 className="text-2xl font-semibold text-gray-900">
                {stats.totalMembers}
              </h4>
            </div>
          </div>
        </div>

        {/* Future charts or extra details section */}
        <div className="mt-10 grid grid-cols-1 gap-6 lg:grid-cols-2 xl:grid-cols-3">
          <div className="relative flex flex-col rounded-xl bg-white shadow-md overflow-hidden xl:col-span-2 p-6">
            <p className="text-gray-500 text-sm">📊 Room Status Chart (Coming Soon)</p>
          </div>
          <div className="relative flex flex-col rounded-xl bg-white shadow-md overflow-hidden p-6">
            <p className="text-gray-500 text-sm">📅 Calendar / Notifications (Coming Soon)</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminProfile;
