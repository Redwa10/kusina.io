import { Navigate } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";
import UnAuthorized from "./UnAuthorized";

function RoleBasedRoute({ children }) {
  const { user, authLoading } = useAuth();
  return (
    <div>
      {!authLoading && user.role === "admin" ? children : <UnAuthorized />}
    </div>
  );
}

export default RoleBasedRoute;
