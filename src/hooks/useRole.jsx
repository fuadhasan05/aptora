import useAuth from "./useAuth";
import useAxiosSecure from "./useAxiosSecure";
import { useQuery } from "@tanstack/react-query";

const useRole = () => {
  const { user, loading } = useAuth();
  const axiosSecure = useAxiosSecure();

  // tanstack query
  const { data: role, isLoading: isRoleLoading } = useQuery({
    queryKey: ["userRole", user?.email],
    enabled: !loading && !!user?.email,
    queryFn: async () => {
      const { data } = await axiosSecure(
        `${import.meta.env.VITE_API_URL}/user/role/${user?.email}`
      );
      return data;
    },
  });
  console.log(role, isRoleLoading);

  return [role?.role, isRoleLoading];
};

export default useRole;
