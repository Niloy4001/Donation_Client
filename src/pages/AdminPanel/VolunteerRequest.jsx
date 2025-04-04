import React, { useEffect, useState } from "react";
import useAxiosPublic from "../../hooks/useAxiosPublic";
import toast from "react-hot-toast";

const VolunteerRequest = () => {
  const axiosPublic = useAxiosPublic();
  const [users, setUsers] = useState([]);

  useEffect(() => {
    try {
      const res = axiosPublic
        .get("/volunteer-request")
        .then((res) => setUsers(res.data));
    } catch (error) {
      toast.error(error);
    }
  }, [users]);
  //   // handle delete
  const handleDetlete = async (email) => {
    try {
      await axiosPublic.delete(`/volunteer-request?email=${email}`);
      setUsers([]);
      toast.success("Deleted Successfull");
    } catch (error) {
      toast.error(error.message);
    }
  };

  // handle accept
  const handleAccept = async (email) => {
    try {
      await axiosPublic.patch(`/volunteer-request?email=${email}`);
      toast.success("Now He/She is a volunteer");
    } catch (error) {
      toast.error(error.message);
    }
  };
  return (
    <div className="w-[90%] mx-auto">
      {users.length > 0 && (
        <>
          <div className=" mb-8 max-w-2xl">
            <h2 className="text-3xl font-bold text-blue-700 mb-4">
              Donor Request
            </h2>
            <p className="text-gray-700 text-lg mb-8">
              Donor Request to be Volunteer
            </p>
          </div>
          <div className="overflow-x-auto rounded-box  w-full bg-white text-black">
            <table className="table">
              {/* head */}
              <thead>
                <tr className="bg-green-600 text-white font-bold">
                  <th>Name</th>
                  <th>Email</th>
                  <th>Status</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {/* row 1 */}
                {users?.map((user) => (
                  <tr key={user?._id}>
                    <td>{user?.name}</td>
                    <td>{user?.email}</td>
                    <td className="text-green-600">{user?.role}</td>
                    <td className="text-green-600 flex items-center gap-0.5">
                      <button
                        className="btn btn-sm text-white bg-blue-700"
                        onClick={() => handleAccept(user?.email)}
                      >
                        Accept
                      </button>
                      <button
                        className="btn btn-sm text-white bg-red-500"
                        onClick={() => handleDetlete(user?.email)}
                      >
                        Reject
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </>
      )}
    </div>
  );
};

export default VolunteerRequest;
