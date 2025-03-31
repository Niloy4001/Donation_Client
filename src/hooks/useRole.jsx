import React, { useContext, useEffect, useState } from "react";
import useAxiosPublic from "./useAxiosPublic";
import { AuthContext } from "../context api/AuthProvider";
import Spinner from "../components/Spinner";


const useRole = () => {
  const axiosPublic = useAxiosPublic();
  const { user, loading } = useContext(AuthContext);
  const [role,setRole] = useState(null)
  const checkRole = async () => {
    const res = await axiosPublic.get(`/checkRole/${user?.email}`);
    setRole(res.data.role)
  };

  useEffect(() => {
    if (!loading) {
      checkRole();
    }
  }, [user]);

  if (loading) {
    return <Spinner></Spinner>
  }
  return { role };
};

export default useRole;
