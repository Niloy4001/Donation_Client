import React, { useEffect, useState } from "react";
import useAxiosPublic from "../../hooks/useAxiosPublic";
import toast from "react-hot-toast";
import moment from "moment";

const EventCompleteReq = () => {
  const axiosPublic = useAxiosPublic();
  const [events, setEvents] = useState([]);

  useEffect(() => {
    try {
      const res = axiosPublic
        .get("/event-complete-request")
        .then((res) => setEvents(res.data));
    } catch (error) {
      toast.error(error);
    }
  }, [events]);

  const handleApproved = async (email, eventId) => {
    console.log(email, eventId);
    try {
      await axiosPublic.patch(
        `/event-complete-request?email=${email}&eventId=${eventId}`
      );
      toast.success("Approved his claim");
      setEvents([]);
    } catch (error) {
      toast.error(error.message);
    }
  };
  const handleReject = async(email, eventId) => {
    console.log(email, eventId);
    try {
        await axiosPublic.patch(`/event-reject-request?email=${email}&eventId=${eventId}`);
        setEvents([]);
        toast.success("Rejected Successfull");
      } catch (error) {
        toast.error(error.message);
      }
  };

  return (
    <div>
      <section className="bg-blue-100 py-16 px-6">
        {events?.length > 0 && (
          <>
            <div className="max-w-5xl mx-auto ">
              <h2 className="text-3xl font-bold text-blue-700 mb-4">
                Complete Events Request
              </h2>
              <p className="text-gray-700 text-lg mb-8">
                Approped actually completed event
              </p>

              {/* Event List Table */}
              <div className="overflow-x-auto w-full">
                <table className="w-full bg-gray-100 rounded-lg overflow-hidden">
                  <thead>
                    <tr className="bg-green-500 text-white text-left">
                      <th className="py-3 px-4 ">Event Name</th>
                      <th className="py-3 px-4 ">Date</th>
                      <th className="py-3 px-4 ">Location</th>
                      <th className="py-3 px-4 ">Volunteer Email</th>
                      <th className="py-3 px-4 ">Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    {events?.map((event) => (
                      <tr
                        key={event._id}
                        className="border-b border-gray-300 text-left"
                      >
                        <td className="py-3 px-4  text-green-600 font-semibold">
                          {event.title}
                        </td>
                        <td className="py-3 px-4 ">
                          {moment(event.paymentTime).format("l")}
                        </td>
                        <td className="py-3 px-4  font-semibold text-green-600">
                          {event.location}
                        </td>
                        <td className="py-3 px-4  font-semibold text-green-600">
                          {event.participantEmail}
                        </td>
                        {
                            event?.status == "Approved" &&  <td className="text-green-600 py-3">Already Approved</td>
                        }
                        {
                            event?.status == "Rejected" &&  <td className="text-red-600 py-3">Rejected</td>
                        }
                        {
                            event?.status == "Pending" &&  <td className="text-green-600 py-3 gap-0.5">
                            <button
                              className="btn btn-sm text-white bg-blue-700"
                              onClick={() =>
                                handleApproved(
                                  event?.participantEmail,
                                  event?.eventId
                                )
                              }
                            >
                              Approved
                            </button>
                            <button
                              className="btn btn-sm text-white bg-red-500"
                              onClick={() =>
                                handleReject(
                                  event?.participantEmail,
                                  event?.eventId
                                )
                              }
                            >
                              Reject
                            </button>
                          </td>
                        }
                        {/* {event?.status == "Approved" ? (
                          <td className="text-green-600 py-3">Already Approved</td>
                        ) : (
                          <td className="text-green-600 py-3 gap-0.5">
                            <button
                              className="btn btn-sm text-white bg-blue-700"
                              onClick={() =>
                                handleApproved(
                                  event?.participantEmail,
                                  event?.eventId
                                )
                              }
                            >
                              Approved
                            </button>
                            <button
                              className="btn btn-sm text-white bg-red-500"
                              onClick={() =>
                                handleReject(
                                  event?.participantEmail,
                                  event?.eventId
                                )
                              }
                            >
                              Reject
                            </button>
                          </td>
                        )} */}
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </>
        )}
      </section>
    </div>
  );
};

export default EventCompleteReq;
