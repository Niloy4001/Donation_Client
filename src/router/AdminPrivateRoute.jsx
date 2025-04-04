import { Navigate } from "react-router-dom"
import useRole from "../hooks/useRole"


const AdminPrivateRoute = ({children}) => {
    const {role} = useRole()

    if (role !== "Admin") {
      return <Navigate to={"/dashboard"}></Navigate>
    }
  
      return (
      <div>{children}</div>
    )
  }
  
export default AdminPrivateRoute