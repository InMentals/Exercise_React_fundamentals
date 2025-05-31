import { useAuth } from "./context";
import { Navigate, Outlet, useLocation } from "react-router";

function RequireAuth() {
  const { isLogged } = useAuth();
  const location = useLocation();
  if (!isLogged) {
    return <Navigate to="/login" state={{ from: location.pathname }} replace />;
  }
  return <Outlet />;
}

export default RequireAuth;
