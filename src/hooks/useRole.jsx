import { useContext, useEffect } from "react";
import { AuthContext } from "../context api/AuthProvider";
import useAxiosPublic from "./useAxiosPublic";
import { useQuery } from "@tanstack/react-query";
import Spinner from "../components/Spinner";

const useRole = () => {
  const { user } = useContext(AuthContext);
  const axiosPublic = useAxiosPublic();

  const {
    isPending,
    data: role,
    error,
    refetch,
  } = useQuery({
    queryKey: ["role", user?.email],
    enabled: !!user?.email, //  যেন email না থাকলে fetch না হয়
    queryFn: async () => {
      const { data } = await axiosPublic.get(`/checkRole/${user?.email}`);
      return data.role;
    },
  });

  useEffect(() => {
    if (user?.email) {
      refetch();
    }
  }, [user]);

  if (isPending) {
    return <Spinner />;
  }

  return { role };
};

export default useRole;
