import React, { useEffect, useState } from "react";
import {
  Area,
  AreaChart,
  CartesianGrid,
  Legend,
  Line,
  LineChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import useAxiosPublic from "../../hooks/useAxiosPublic";

const Analytics = () => {
    const axiosPublic = useAxiosPublic();
  const [payments, setPayments] = useState([]);
  const [volunteerActivities, setVolunteerActivities] = useState([]);

  useEffect(() => {
    try {
      const res = axiosPublic
        .get("/analytics")
        .then((res) => {
            setPayments(res.data.payments)
            setVolunteerActivities(res.data.volunteerActivities)
        });
    } catch (error) {
      toast.error(error);
    }
  }, []);
  

  return (
    <div className="w-[90%] mx-auto">
      <section>
        <h2 className="text-3xl font-bold text-blue-700 mb-4">
          Total Donations
        </h2>
        <p className="text-gray-700 text-lg mb-8">
          See donation vs months graph
        </p>
        <div>
          <ResponsiveContainer width="100%" height={300}>
            <AreaChart
              data={payments}
              margin={{
                top: 10,
                right: 30,
                left: 0,
                bottom: 0,
              }}
            >
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="month" />
              <YAxis />
              <Tooltip />
              <Area
                type="monotone"
                dataKey="amount"
                stroke="#8884d8"
                fill="#8884d8"
              />
            </AreaChart>
          </ResponsiveContainer>
        </div>
      </section>
      <section className="my-20">
        <h2 className="text-3xl font-bold text-blue-700 mb-4">
          Volunteer Activity
        </h2>
        <p className="text-gray-700 text-lg mb-8">
          See volunteer vs activity number
        </p>
        <div>
        <ResponsiveContainer width="100%" height={300}>
        <LineChart
          
          data={volunteerActivities}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="_id" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Line type="monotone" dataKey="count" stroke="#8884d8"  />
          {/* <Line type="monotone" dataKey="uv" stroke="#82ca9d" /> */}
        </LineChart>
      </ResponsiveContainer>
        </div>
      </section>
    </div>
  );
};

export default Analytics;
