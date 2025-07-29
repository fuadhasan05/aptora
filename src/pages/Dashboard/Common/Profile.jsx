import LoadingSpinner from "../../../components/Shared/LoadingSpinner";
import useAuth from "../../../hooks/useAuth";
import useRole from "../../../hooks/useRole";

const Profile = () => {
  const { user } = useAuth();
  const [role, isRoleLoading] = useRole();
  if (isRoleLoading) return <LoadingSpinner></LoadingSpinner>;

  return (
    <div className="flex justify-center items-center min-h-screen">
      <div className="bg-white shadow-lg rounded-2xl md:w-4/5 lg:w-3/5">
        {/* Gradient Cover */}
        <div className="w-full h-56 rounded-t-lg bg-gradient-to-r from-blue-700 via-blue-600 to-purple-700 mb-4 relative">
          <h1 className="absolute bottom-3 left-5 text-white text-2xl font-bold">
            Welcome {user?.displayName?.split(" ")[0]}!
          </h1>
        </div>

        <div className="flex flex-col items-center justify-center p-4 -mt-16">
          {/* Profile Image */}
          <a href="#" className="relative block">
            <img
              alt="profile"
              src={user.photoURL}
              className="mx-auto object-cover rounded-full h-24 w-24 border-2 border-orange-600"
            />
          </a>

          {/* Role Tag */}
          <p className="p-2 px-4 text-xs text-white bg-blue-500 rounded-full mt-4">
            {role?.toUpperCase()}
          </p>

          {/* Basic Info */}
          <div className="w-full p-2 mt-4 rounded-lg">
            <div className="grid grid-cols-2 gap-4 text-sm text-gray-600">
              <p className="flex flex-col">
                Name
                <span className="font-bold text-black">{user.displayName}</span>
              </p>
              <p className="flex flex-col">
                Email
                <span className="font-bold text-black">{user.email}</span>
              </p>

              {/* Agreement & Apartment Info */}
              <p className="flex flex-col">
                Agreement Accept Date
                <span className="font-bold text-black">None</span>
              </p>
              <p className="flex flex-col">
                Floor
                <span className="font-bold text-black">None</span>
              </p>
              <p className="flex flex-col">
                Block
                <span className="font-bold text-black">None</span>
              </p>
              <p className="flex flex-col">
                Room No
                <span className="font-bold text-black">None</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
