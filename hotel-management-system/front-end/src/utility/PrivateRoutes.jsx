import { Outlet, Navigate } from "react-router-dom";

const PrivateRoutes = () => {

  // const isAuthenticated = checkUserAuthentication();
  const auth = { token: false };
  return auth.token ? <Outlet /> : <Navigate to="/admin-login" />;
};

export default PrivateRoutes;
