import { Navigate } from "react-router";
import LoadingSpinner from "../components/Shared/LoadingSpinner";
import useRole from "../hooks/useRole";

const MemberRoute = ({ children }) => {
  const [role, isRoleLoading] = useRole();

  if (isRoleLoading) return <LoadingSpinner />;
  if (role === "member") return children;
  return <Navigate to="/"></Navigate>;
};

export default MemberRoute;
