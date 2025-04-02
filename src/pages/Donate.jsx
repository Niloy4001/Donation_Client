import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import { useContext, useEffect, useState } from "react";
import useAxiosPublic from "../hooks/useAxiosPublic";
import { AuthContext } from "../context api/AuthProvider";
import Spinner from "../components/Spinner";
import toast, { Toaster } from "react-hot-toast";

const Donate = () => {
  const [selectedAmount, setSelectedAmount] = useState(null);
  const [customAmount, setCustomAmount] = useState("");


  // from here checkout from start 
  const stripe = useStripe();
  const elements = useElements();
  const [loading1, setLoading1] = useState(false);
  const [message, setMessage] = useState("");
  const axiosPublic = useAxiosPublic();
  const {user,loading} = useContext(AuthContext)


  const handleSubmit =async () =>{
    if (!stripe || !elements) {
      return
    }
    if (!selectedAmount && !customAmount) {
     toast.error("Insert Amount")
      return
    }
    setLoading1(true);

    console.log(selectedAmount || customAmount);
    const { data } = await axiosPublic.post("/create-payment-intent", {
      amount: selectedAmount || customAmount,
    });

    const clientSecret = data.clientSecret;
    const cardElement = elements.getElement(CardElement);

    const result = await stripe.confirmCardPayment(clientSecret,{
      payment_method:{
        card: cardElement,
        billing_details: {name:"Donor"},
      },
    })

    console.log(result);
    

    if (result.error) {
      setMessage(result.error.message);
    } else {
      if (result.paymentIntent.status === "succeeded") {
        setMessage("🎉 Payment Successful! Thank you for your donation.");
        const {data} = await axiosPublic.post("/payments",{
          donorEmail: user?.email || "Unregisterd User",
          donorName: user?.displayName || "Anonymous",
          paymentTime: Date.now(),
          transactionId: result.paymentIntent.id,
          amount: (result.paymentIntent.amount / 100),
        })
        setCustomAmount("")
        setSelectedAmount(null)
        toast.success("🎉 Payment Successful! Thank you for your donation.")
        console.log(data);
        
      }
    }

    setLoading1(false);


    
  }



  return (
    <div className="bg-gray-100 min-h-screen flex flex-col items-center p-6">
      {/* Hero Section */}
      <div className="text-center mb-8 max-w-2xl">
        <h1 className="text-4xl font-bold text-green-700">Make a Difference Today!</h1>
        <p className="text-gray-600 mt-2">
          Your donation helps us plant more trees, spread awareness, and build a greener future.
        </p>
      </div>

      {/* Donation Options */}
      <div className="w-full max-w-lg bg-white shadow-lg rounded-lg p-8">
        <h2 className="text-2xl font-semibold text-green-700 mb-4 text-center">Choose Donation Amount</h2>
        
        {/* Predefined Amounts */}
        <div className="grid grid-cols-3 gap-4">
          {[10, 25, 50, 100, 250, 500].map((amount) => (
            <button
              key={amount}
              className={`py-3 rounded-md font-semibold border ${
                selectedAmount === amount ? "bg-green-600 text-white" : "bg-gray-200 text-gray-700"
              }`}
              onClick={() => {
                setSelectedAmount(amount);
                setCustomAmount("");
              }}
            >
              ${amount}
            </button>
          ))}
        </div>

        {/* Custom Donation */}
        <div className="mt-4">
          <p className="text-gray-600 text-center">Or enter a custom amount:</p>
          <input
            type="number"
            placeholder="Enter amount ($)"
            value={customAmount}
            onChange={(e) => {
              setCustomAmount(e.target.value);
              setSelectedAmount(null);
            }}
            className="w-full mt-2 p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
          />
        </div>
            {/* Card Input */}
        <div className="border p-3 rounded-md mt-5">
          <CardElement />
        </div>

        {/* Donate Button */}
        <button 
         disabled={!stripe || loading}
        onClick={()=>handleSubmit()}
          className="mt-6 w-full bg-green-600 text-white py-3 rounded-md hover:bg-green-700 transition"
        >
         {loading1 ? "Processing..." : "Donate Now"}
        </button>
        {message && <p className="text-center text-green-700 mt-4">{message}</p>}

        {/* Secure Payment Info */}
        <p className="text-center text-gray-500 text-sm mt-2">🔒 100% Secure Payment</p>
      </div>
      <Toaster></Toaster>
    </div>
  );
};

export default Donate;
