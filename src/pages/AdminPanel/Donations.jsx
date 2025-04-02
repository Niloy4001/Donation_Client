import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../context api/AuthProvider";
import { useLocation } from "react-router-dom";
import useAxiosPublic from "../../hooks/useAxiosPublic";
import moment from "moment";

const Donations = () => {
  const {user, loading} = useContext(AuthContext)
  const axiosPublic = useAxiosPublic()
  const [payments, setPayments] = useState([])
  const {pathname} = useLocation()
  useEffect(()=>{
          const fetchData = async(email)=>{
              const {data} = await axiosPublic.get(`/payments?email=${email}`)
              setPayments(data)
          
              
          };
            if (!loading) {
              console.log(pathname);
              
              const email = pathname == "/dashboard/donations" ? "" : user?.email;
              console.log(email);
              fetchData(email)
              
            }
           
          
      },[user])
      console.log(payments);
  
  return (
    <div className="bg-gray-100 min-h-screen flex flex-col items-center p-6">
      {
        payments.length > 0 && <>
        <div className="text-center mb-8 max-w-2xl">
        <h1 className="text-4xl font-bold text-green-700">Donation List</h1>
        <p className="text-gray-600 mt-2">See who are made contribution</p>
      </div>
      <div className="overflow-x-auto rounded-box  w-full bg-white text-black">
        <table className="table">
          {/* head */}
          <thead>
            <tr className="bg-green-600 text-white font-bold">
              <th>Date</th>
              <th>Name</th>
              <th>Amount</th>
              <th>txId</th>
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}
            {
              payments.map((payment) => 
              <tr key={payment._id}>
                <td>{moment(payment.paymentTime).format('l')}</td>
                <td>{payment.donorName}</td>
                <td className="text-green-600">{payment.amount}$</td>
                <td>{payment.transactionId}</td>
              </tr>)
            }
           
          </tbody>
        </table>
      </div>
        </>
      }
      {
        payments.length < 1 && <div className="w-full h-lvh flex justify-center items-center font-bold text-3xl">No data found</div>
      }
    </div>
  );
};

export default Donations;
