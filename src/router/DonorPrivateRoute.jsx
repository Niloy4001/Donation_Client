import { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { AuthContext } from "../context api/AuthProvider";
import Spinner from "../components/Spinner";


const DonorPrivateRoute = ({ children }) => {
  const { loading, user } = useContext(AuthContext);
  const { pathname } = useLocation();


  if (loading) {
    return <Spinner></Spinner>
  }


  if (!user) {
    return <Navigate to={"/login"} state={pathname}></Navigate>;
  }

  

  

  return <div>{children}</div>;
};

export default DonorPrivateRoute;
