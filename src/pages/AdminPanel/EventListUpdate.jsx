import React from "react";
import { useLoaderData, useNavigate } from "react-router-dom";
import useAxiosPublic from "../../hooks/useAxiosPublic";
import toast from "react-hot-toast";

const EventListUpdate = () => {
  const { data } = useLoaderData();
  const axiosPublic = useAxiosPublic()
  const navigate = useNavigate()
  

  // handle Update
  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(data._id);

    const title = e.target.title.value;
    const type = e.target.eventType.value;
    const date = e.target.date.value;
    const location = e.target.location.value;
    const volunteers_needed = e.target.volunteerNumber.value;
    const info = { title, type, date, location, volunteers_needed };

    console.log(info);
    
    try {
      await axiosPublic.put(`/event-update?id=${data._id}`, info);
      toast.success("Update Successfully");
      navigate("/dashboard/eventMangement")
    } catch (error) {
      toast.error(error.message);
    }
  };
  return (
    <div className="w-[90%] mx-auto">
      <div className=" mb-8 max-w-2xl">
        <h1 className="text-4xl font-bold text-gray-800">Update Event</h1>
        <p className="text-gray-600 mt-2">
          Update this event accouding to your preference{" "}
        </p>
      </div>
      <form
        className="grid grid-cols-1 md:grid-cols-2 gap-4 bg-white p-6 rounded-lg shadow-md border border-green-600"
        onSubmit={handleSubmit}
      >
        <div className="flex flex-col">
          <label className="font-semibold text-green-600">Title</label>
          <input
            required
            type="text"
            name="title"
            className="border rounded-lg p-2 text-gray-800"
            defaultValue={data?.title}
          />
        </div>
        <div className="flex flex-col">
          <label className="font-semibold text-green-600">Event Type</label>
          <input
            required
            type="text"
            name="eventType"
            className="border rounded-lg p-2 text-gray-800"
            defaultValue={data?.type}
          />
        </div>
        <div className="flex flex-col">
          <label className="font-semibold text-green-600">Date</label>
          <input
            required
            type="date"
            name="date"
            className="border rounded-lg p-2 text-gray-800"
            defaultValue={data?.data}
          />
        </div>
        <div className="flex flex-col">
          <label className="font-semibold text-green-600">Location</label>
          <input
            required
            type="text"
            name="location"
            className="border rounded-lg p-2 text-gray-800"
            defaultValue={data.location}
          />
        </div>
        <div className="flex flex-col">
          <label className="font-semibold text-green-600">
            Volunteer Number
          </label>
          <input
            required
            type="number"
            name="volunteerNumber"
            className="border rounded-lg p-2 text-gray-800"
            defaultValue={data?.volunteers_needed}
          />
        </div>
        <div className="md:col-span-2 flex justify-center">
          <button
            type="submit"
            className="bg-blue-700 text-white font-semibold px-6 py-2 rounded-lg hover:bg-green-600 transition"
          >
            Update
          </button>
        </div>
      </form>
    </div>
  );
};

export default EventListUpdate;
