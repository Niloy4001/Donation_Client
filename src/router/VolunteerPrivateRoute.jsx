import { Navigate } from "react-router-dom"
import useRole from "../hooks/useRole"
import { useContext } from "react"
import { AuthContext } from "../context api/AuthProvider"
import Spinner from "../components/Spinner"


const VolunteerPrivateRoute = ({children}) => {
  const {role} = useRole()
  const {user,loading} = useContext(AuthContext) 
  console.log(role);
  
  if (loading) {
    return <Spinner></Spinner>
  }
  console.log("loading check pass");
  console.log(role);

  if (role !== "Volunteer") {
    return <Navigate to={"/"}></Navigate>
  }
console.log("volunteer check pass");

    return (
    <div>{children}</div>
  )
}

export default VolunteerPrivateRoute