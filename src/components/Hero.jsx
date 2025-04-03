import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../context api/AuthProvider";
import toast from "react-hot-toast";
import useAxiosPublic from "../hooks/useAxiosPublic";

const Hero = () => {
  const { user } = useContext(AuthContext);
  const axiosPublic = useAxiosPublic()
  const handleVolunteerRequest = async() => {
    if (!user) {
        toast.error("Log In first")
        return;
    }

    try {
        await axiosPublic.post(`/volunteer-request?email=${user?.email}`)
        toast.success("Your Volunteer Request successfully sent to Admin")
    } catch (error) {
        toast.error(error.message)
    }

    console.log("chlasdd");
  };
  return (
    <section className="bg-green-100 text-center py-16 px-6 md:px-12 lg:px-24">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-bold text-green-800 mb-4">
          🌍 Working Towards a Greener & Sustainable Future!
        </h1>
        <p className="text-lg md:text-xl text-gray-700 mb-6">
          Join us in environmental conservation, awareness building, and
          fighting against climate change.
        </p>
        <div className="flex flex-col md:flex-row justify-center gap-4">
          <button 
          onClick={()=>handleVolunteerRequest()}
          className="bg-green-600 cursor-pointer hover:bg-green-700 text-white font-semibold px-6 py-3 rounded-lg shadow-md transition">
            ✩ Join as a Volunteer
          </button>
          <Link
            to={"/donate"}
            className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-3 rounded-lg shadow-md transition"
          >
            ✩ Donate Now
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Hero;
