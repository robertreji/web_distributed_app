import { Navigate, Outlet } from "react-router-dom";
import { useAuthenticate } from "../store/authentication.store";
const ProtectedRoute = () => {

  const isAuthenticated = useAuthenticate((state)=>state.isAuthenticated) 
    
  return isAuthenticated ? <Outlet /> : <Navigate to="/auth/login" replace />;
};

export default ProtectedRoute;