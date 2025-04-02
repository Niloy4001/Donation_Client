import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../context api/AuthProvider";
import useAxiosPublic from "../../hooks/useAxiosPublic";
import moment from "moment";

const MyDonations = () => {
    const {user, loading} = useContext(AuthContext)
  const axiosPublic = useAxiosPublic()
  const [payments, setPayments] = useState([])
  
  useEffect(()=>{
          const fetchData = async()=>{
              const {data} = await axiosPublic.get(`/payments?email=${user?.email}`)
              setPayments(data)
          
              
          };
            if (!loading) {
              fetchData()
              
            }
           
          
      },[user])

  // Sample donation data (you can replace it with API data)
  const donations = [
    { id: 1, date: "2025-04-01", amount: 100, status: "Succeeded" },
    { id: 2, date: "2025-03-15", amount: 50, status: "Succeeded" },
    { id: 3, date: "2025-02-28", amount: 200, status: "Succeeded" },
  ];

  // Calculate total donations and total amount donated
  const totalDonations = donations.length;
  const totalAmount = donations.reduce((sum, donation) => sum + donation.amount, 0);

  return (
    <div className="w-full mx-auto my-10 p-6 bg-white shadow-lg rounded-lg">
      {/* Header Section */}
      <h1 className="text-3xl font-bold text-center text-green-600 mb-4">
        🌱 My Donations
      </h1>

      {/* Summary Card */}
      <div className="bg-green-100 p-6 rounded-lg flex justify-between items-center mb-6">
        <div>
          <h2 className="text-xl font-semibold text-gray-700">Total Donations</h2>
          <p className="text-2xl font-bold text-green-600">{payments.length} Times</p>
        </div>
        <div>
          <h2 className="text-xl font-semibold text-gray-700">Total Amount Donated</h2>
          <p className="text-2xl font-bold text-green-600">${payments?.reduce((sum, payment) => sum + payment?.amount, 0)}.00</p>
        </div>
      </div>

      {/* Donation List Table */}
      <div className="overflow-x-auto w-full">
        <table className="w-full bg-gray-100 rounded-lg overflow-hidden">
          <thead>
            <tr className="bg-green-500 text-white">
              <th className="py-3 px-4 text-left">Date</th>
              <th className="py-3 px-4 text-center">Amount</th>
              <th className="py-3 px-4 text-center">Status</th>
            </tr>
          </thead>
          <tbody>
            {payments?.map((donation) => (
              <tr key={donation.id} className="border-b border-gray-300">
                <td className="py-3 px-4 text-left">{moment(donation.paymentTime).format('l')}</td>
                <td className="py-3 px-4 text-center text-green-600 font-semibold">
                  ${donation.amount}.00
                </td>
                <td
                  className="py-3 px-4 text-center font-semibold text-green-600"
                >
                  Succeeded
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyDonations;
