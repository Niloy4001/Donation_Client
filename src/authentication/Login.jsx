import React, { useContext, useRef, useState } from "react";
import { FaGoogle } from "react-icons/fa";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { HiOutlineEyeOff } from "react-icons/hi";
import { RiEyeLine } from "react-icons/ri";

import toast from "react-hot-toast";
import { AuthContext } from "../context api/AuthProvider";

const Login = () => {
  const { logInByGoogle, logInByEmailPassword, user, setForgotEmail } = useContext(AuthContext);
  const { state } = useLocation();
  const [errorMessage, setErrorMessage] = useState("");
  const [eye, setEye] = useState(false);
  const [showDemo, setShowDemo] = useState(false);

  const navigate = useNavigate();
  const emailRef = useRef();
  const passwordRef = useRef();

  const handleGoogleLogIn = () => {
    setErrorMessage("");
    logInByGoogle()
      .then(() => {
        toast.success("Log In successful");
        navigate(state ? `${state}` : "/");
      })
      .catch((err) => setErrorMessage(err.message));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setErrorMessage("");
    const email = emailRef.current.value;
    const password = passwordRef.current.value;
    logInByEmailPassword(email, password)
      .then(() => {
        e.target.reset();
        navigate(state ? `${state}` : "/");
      })
      .catch((err) => setErrorMessage(err.message));
  };

  return (
    <div className="flex justify-center items-center py-14 min-h-screen px-3 bg-white">
      <div className="flex flex-col-reverse md:flex-row w-full md:w-[80%] lg:w-[60%]">
        {/* Login Form */}
        <div className="bg-white w-full md:w-[50%] p-6 shadow-2xl border-t-4 border-green-600">
          <h1 className="text-4xl text-center font-bold mb-5 flex justify-between items-center px-6">
            <span className="text-green-600">Log In</span>
            <button onClick={handleGoogleLogIn} className="text-2xl text-blue-600">
              <FaGoogle />
            </button>
          </h1>

          <form className="card-body" onSubmit={handleSubmit}>
            <div className="form-control">
              <label className="label block">
                <span className="label-text block text-green-600">Email</span>
              </label>
              <input ref={emailRef} type="email" placeholder="email" className="input w-full input-bordered border-green-600 focus:border-blue-600" required />
            </div>

            <div className="form-control relative">
              <label className="label block">
                <span className="label-text block text-green-600">Password</span>
              </label>
              <input ref={passwordRef} type={eye ? "text" : "password"} placeholder="password" className="input w-full input-bordered border-green-600 focus:border-blue-600" required />
              <span onClick={() => setEye(!eye)} className="absolute top-[35px] right-[8px] cursor-pointer text-blue-600">
                {eye ? <HiOutlineEyeOff /> : <RiEyeLine />}
              </span>
            </div>

            <div className="form-control mt-6">
              <button className="btn shadow-2xl text-white bg-gradient-to-b from-green-600 to-blue-600 hover:from-blue-600 hover:to-green-600">
                Login
              </button>
            </div>

            <div>
              <p className="text-left text-red-600 text-sm mt-2">{errorMessage && errorMessage}</p>
            </div>
          </form>

          <button
            onClick={() => setShowDemo(true)}
            className="btn w-full mt-4 bg-blue-600 text-white hover:bg-green-600"
          >
            Demo Credentials
          </button>
        </div>

        {/* Right Side */}
        <div className="flex items-center justify-center text-white bg-gradient-to-b from-green-600 to-blue-600 w-full md:w-[50%] py-7 shadow-2xl">
          <div className="text-center">
            <h1 className="text-3xl font-bold mb-2">Welcome to Login</h1>
            <p className="mb-4">Don't have an account?</p>
            <Link to={"/register"} className="px-6 py-2 text-green-600 bg-white rounded-md font-semibold hover:bg-blue-100">
              Sign Up
            </Link>
          </div>
        </div>
      </div>

      {/* Modal for Demo Credentials */}
      {showDemo && (
        <div className="fixed inset-0 flex justify-center items-center bg-black bg-opacity-50">
          <div className="bg-white p-6 rounded-lg shadow-lg w-[90%] md:w-[50%]">
            <h2 className="text-xl font-bold mb-4 text-center text-green-600">Demo Credentials</h2>

            <div className="mt-4">
              <h3 className="font-semibold">👤 Donor Credential:</h3>
              <p>Email: <span className="font-mono">donor4@gmail.com</span></p>
              <p>Password: <span className="font-mono">Donor123</span></p>
            </div>

            <div className="mt-4">
              <h3 className="font-semibold">👤Volunteer Credential:</h3>
              <p>Email: <span className="font-mono">donor2@gmail.com</span></p>
              <p>Password: <span className="font-mono">Donor123</span></p>
            </div>

            <div className="mt-4">
              <h3 className="font-semibold">👤 Admin Credential:</h3>
              <p>Email: <span className="font-mono">admin300@gmail.com</span></p>
              <p>Password: <span className="font-mono">Admin12345</span></p>
            </div>

            <button
              onClick={() => setShowDemo(false)}
              className="btn w-full mt-4 bg-red-500 text-white"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Login;
