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

  // Fetch profile data
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
    <div className="flex justify-center items-center min-h-screen px-4">
      <div className="bg-white shadow-lg rounded-2xl md:w-4/5 lg:w-3/5 relative">
        {/* Gradient Cover */}
        <div className="w-full h-56 rounded-t-lg bg-gradient-to-r from-blue-700 via-blue-600 to-purple-700 mb-4 relative">
          <h1 className="absolute bottom-3 left-5 text-white text-2xl font-bold">
            Welcome {user?.displayName?.split(" ")[0]}!
          </h1>
        </div>

        <div className="flex flex-col items-center justify-center p-4 -mt-16 relative">
          {/* Profile Image */}
          <img
            alt="profile"
            src={user?.photoURL}
            className="mx-auto object-cover rounded-full h-24 w-24 border-3 border-orange-600 shadow-md"
          />

          {/* Role Tag */}
          <p className="p-2 px-4 text-xs text-white bg-blue-500 rounded-full mt-4 shadow">
            {role?.toUpperCase()}
          </p>

          {/* Info Grid */}
          <div className="w-full p-2 mt-4 rounded-lg">
            <div className="grid grid-cols-2 gap-4 text-sm text-gray-600">
              {/* Name */}
              <p className="flex flex-col">
                Name
                <span className="font-bold text-black">
                  {user?.displayName}
                </span>
              </p>
              {/* Email */}
              <p className="flex flex-col">
                Email
                <span className="font-bold text-black">{user?.email}</span>
              </p>

              {/* Agreement Date */}
              <p className="flex flex-col">
                Agreement Accept Date
                <span className="font-bold text-black">
                  {profile?.requestDate
                    ? new Date(profile.requestDate).toLocaleDateString()
                    : "None"}
                </span>
              </p>
              {/* Floor */}
              <p className="flex flex-col">
                Floor
                <span className="font-bold text-black">
                  {profile?.floorNo || "None"}
                </span>
              </p>
              {/* Block */}
              <p className="flex flex-col">
                Block
                <span className="font-bold text-black">
                  {profile?.blockName || "None"}
                </span>
              </p>
              {/* Room */}
              <p className="flex flex-col">
                Room No
                <span className="font-bold text-black">
                  {profile?.apartmentNo || "None"}
                </span>
              </p>
              {/* Rent */}
              <p className="flex flex-col">
                Rent
                <span className="font-bold text-black">
                  {profile?.rent ? `${profile.rent} BDT` : "None"}
                </span>
              </p>
              {/* Status */}
              <p className="flex flex-col">
                Status
                <span
                  className={`font-bold ${
                    profile?.status === "checked"
                      ? "text-green-600"
                      : "text-yellow-600"
                  }`}
                >
                  {profile?.status || "None"}
                </span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyProfile;