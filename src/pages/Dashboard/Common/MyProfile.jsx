import React, { useEffect, useState } from "react";
import axios from "axios";
import LoadingSpinner from "../../../components/Shared/LoadingSpinner";
import useAuth from "../../../hooks/useAuth";
import useRole from "../../../hooks/useRole";

const MyProfile = () => {
  const { user } = useAuth();
  const [role, isRoleLoading] = useRole();
  const [profile, setProfile] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (user?.email) {
      axios
        .get(`${import.meta.env.VITE_API_URL}/my-profile?email=${user.email}`, {
          withCredentials: true,
        })
        .then((res) => {
          setProfile(res.data);
          setLoading(false);
        })
        .catch((err) => {
          console.log(err);
          setLoading(false);
        });
    }
  }, [user?.email]);

  if (loading || isRoleLoading) return <LoadingSpinner />;

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-50 dark:bg-base-100 p-4">
      <div className="w-full max-w-4xl bg-white dark:bg-base-300 rounded-xl shadow-xl overflow-hidden">
        {/* Profile Header */}
        <div className="relative h-48 bg-gradient-to-r from-indigo-600 to-purple-600">
          <div className="absolute bottom-6 left-6">
            <h1 className="text-3xl font-bold text-white">
              Welcome {user?.displayName?.split(" ")[0]}!
            </h1>
            <p className="text-indigo-100 mt-1">Your Personal Dashboard</p>
          </div>
        </div>

        {/* Profile Content */}
        <div className="px-6 pb-8">
          {/* Profile Picture and Role */}
          <div className="flex flex-col items-center -mt-16 relative">
            <div className="relative">
              <img
                alt="profile"
                src={user?.photoURL}
                className="w-32 h-32 rounded-full border-4 border-white dark:border-base-content/20 shadow-lg object-cover"
              />
              <span className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 bg-indigo-600 text-white text-xs font-semibold px-3 py-1 rounded-full shadow">
                {role?.toUpperCase()}
              </span>
            </div>
          </div>

          {/* Profile Information */}
          <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Personal Info */}
            <div className="bg-gray-50 dark:bg-base-100 p-5 rounded-lg border border-gray-100 dark:border-base-content/20">
              <h3 className="text-lg font-semibold text-gray-800 dark:text-base-content mb-4 pb-2 border-b border-gray-200 dark:border-base-content/20">
                Personal Information
              </h3>
              <div className="space-y-4">
                <div>
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    Full Name
                  </p>
                  <p className="font-medium text-gray-900 dark:text-base-content">
                    {user?.displayName}
                  </p>
                </div>
                <div>
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    Email
                  </p>
                  <p className="font-medium text-gray-900 dark:text-base-content">
                    {user?.email}
                  </p>
                </div>
              </div>
            </div>

            {/* Agreement Info */}
            <div className="bg-gray-50 dark:bg-base-100 p-5 rounded-lg border border-gray-100 dark:border-base-content/20">
              <h3 className="text-lg font-semibold text-gray-800 dark:text-base-content mb-4 pb-2 border-b border-gray-200 dark:border-base-content/20">
                Agreement Details
              </h3>
              <div className="space-y-4">
                <div>
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    Agreement Date
                  </p>
                  <p className="font-medium text-gray-900 dark:text-base-content">
                    {profile?.requestDate
                      ? new Date(profile.requestDate).toLocaleDateString()
                      : "Not available"}
                  </p>
                </div>
                <div>
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    Rent Amount
                  </p>
                  <p className="font-medium text-gray-900 dark:text-base-content">
                    {profile?.rent ? `${profile.rent} BDT` : "Not specified"}
                  </p>
                </div>
              </div>
            </div>

            {/* Residence Info */}
            <div className="bg-gray-50 dark:bg-base-100 p-5 rounded-lg border border-gray-100 dark:border-base-content/20 md:col-span-2">
              <h3 className="text-lg font-semibold text-gray-800 dark:text-base-content mb-4 pb-2 border-b border-gray-200 dark:border-base-content/20">
                Residence Information
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div>
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    Block
                  </p>
                  <p className="font-medium text-gray-900 dark:text-base-content">
                    {profile?.blockName || "Not assigned"}
                  </p>
                </div>
                <div>
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    Floor
                  </p>
                  <p className="font-medium text-gray-900 dark:text-base-content">
                    {profile?.floorNo || "Not assigned"}
                  </p>
                </div>
                <div>
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    Apartment
                  </p>
                  <p className="font-medium text-gray-900 dark:text-base-content">
                    {profile?.apartmentNo || "Not assigned"}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyProfile;
