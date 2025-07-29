import { useEffect, useState } from "react";
import { FaUserAlt, FaEnvelope } from "react-icons/fa";
import { BsFillHouseDoorFill } from "react-icons/bs";
import { MdGroup } from "react-icons/md";
import axios from "axios";
import LoadingSpinner from "../../../components/Shared/LoadingSpinner";

const AdminProfile = () => {
  const [stats, setStats] = useState(null);

  useEffect(() => {
    axios.get(`${import.meta.env.VITE_API_URL}/admin-stats`).then((res) => {
      setStats(res.data);
    });
  }, []);

  if (!stats) {
    return <LoadingSpinner />;
  }

  const {
    admin,
    totalRooms,
    availableRooms,
    unavailableRooms,
    totalUsers,
    totalMembers,
  } = stats;

  const availablePercentage = ((availableRooms / totalRooms) * 100).toFixed(1);
  const unavailablePercentage = ((unavailableRooms / totalRooms) * 100).toFixed(
    1
  );

  return (
    <div className="p-6 min-h-screen">
      <div className="max-w-5xl mx-auto border border-gray-100 rounded-2xl">
        {/* Admin Profile */}
        <div className="bg-gradient-to-r from-blue-600 to-indigo-700 shadow-xl rounded-2xl p-8 flex flex-col md:flex-row items-center gap-6 mb-12 text-white">
          <img
            src={admin.image}
            alt="Admin"
            className="w-28 h-28 rounded-full border-4 border-white object-cover shadow-lg"
          />
          <div>
            <h2 className="text-3xl font-bold flex items-center gap-2">
              <FaUserAlt /> {admin.name}
            </h2>
            <p className="text-lg flex items-center gap-2 mt-2 opacity-90">
              <FaEnvelope /> {admin.email}
            </p>
          </div>
        </div>

        {/* Stats Grid */}
        <div className="grid gap-y-10 gap-x-6 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          <StatCard
            icon={<BsFillHouseDoorFill className="w-6 h-6" />}
            color="from-blue-500 to-blue-400"
            title="Total Rooms"
            value={totalRooms}
          />
          <StatCard
            icon={<BsFillHouseDoorFill className="w-6 h-6" />}
            color="from-green-500 to-green-400"
            title="Available Rooms"
            value={`${availablePercentage}%`}
          />
          <StatCard
            icon={<BsFillHouseDoorFill className="w-6 h-6" />}
            color="from-red-500 to-red-400"
            title="Unavailable Rooms"
            value={`${unavailablePercentage}%`}
          />
          <StatCard
            icon={<MdGroup className="w-6 h-6" />}
            color="from-orange-500 to-orange-400"
            title="Total Users"
            value={totalUsers}
          />
          <StatCard
            icon={<MdGroup className="w-6 h-6" />}
            color="from-pink-500 to-pink-400"
            title="Total Members"
            value={totalMembers}
          />
        </div>
      </div>
    </div>
  );
};

const StatCard = ({ icon, color, title, value }) => (
  <div className="relative flex flex-col rounded-xl bg-white text-gray-700 shadow-md transform hover:-translate-y-2 transition duration-300">
    <div
      className={`bg-gradient-to-tr ${color} mx-4 rounded-xl absolute -mt-4 grid h-16 w-16 place-items-center text-white shadow-lg`}
    >
      {icon}
    </div>
    <div className="p-6 text-right">
      <p className="text-sm text-gray-500">{title}</p>
      <h4 className="text-3xl font-extrabold text-gray-900">{value}</h4>
    </div>
  </div>
);

export default AdminProfile;
