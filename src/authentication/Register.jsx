import React, { useContext, useRef, useState } from "react";
import { FaGoogle } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import { RiEyeLine } from "react-icons/ri";
import { HiOutlineEyeOff } from "react-icons/hi";
import Swal from "sweetalert2";

import { AuthContext } from "../context api/AuthProvider";

const Register = () => {
  const { logInByGoogle, signInByEmailPassword, manageProfile } = useContext(AuthContext);

  const [errorMessage, setErrorMessage] = useState("");
  const [eye, setEye] = useState(false);
  const nameRef = useRef();
  const photoUrlRef = useRef();
  const emailRef = useRef();
  const passwordRef = useRef();
  const navigate = useNavigate();

  const passwordRegex = /^(?=.*[A-Z])(?=.*[a-z]).{6,}$/;

  const notify = () => {
    Swal.fire({
      title: "Invalid Password",
      html: `<ul class="list-disc space-y-2 text-gray-800 ml-8">
                <li class="text-left text-red-600">Must include an uppercase letter</li>
                <li class="text-left text-red-600">Must include a lowercase letter</li>
                <li class="text-left text-red-600">Must be at least 6 characters long</li>
              </ul>`,
      icon: "error",
      confirmButtonColor: "#dc2626", // red-600
    });
  };

  const notifySuccess = () => {
    Swal.fire({
      title: "Registration Successful",
      icon: "success",
      confirmButtonColor: "#16a34a", // green-600
    });
  };

  const handleGoogleLogIn = async () => {
    setErrorMessage("");
    try {
      await logInByGoogle();
      navigate("/")
      notifySuccess();
    } catch (err) {
      setErrorMessage(err.message);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrorMessage("");

    const name = nameRef.current.value;
    const photo = photoUrlRef.current.value;
    const email = emailRef.current.value;
    const password = passwordRef.current.value;

    if (!passwordRegex.test(password)) return notify();

    try {
      await signInByEmailPassword(email, password);
      await manageProfile(name, photo);
      navigate("/")
      notifySuccess();
      e.target.reset();
    } catch (error) {
      setErrorMessage(error.message);
    }
  };

  return (
    <div className="flex justify-center items-center py-14 min-h-screen px-3 bg-white">
      <div className="flex flex-col-reverse md:flex-row w-full md:w-[80%] lg:w-[60%] shadow-2xl rounded-lg overflow-hidden">
        {/* Form Section */}
        <div className="bg-white w-full md:w-[50%] p-6">
          <h1 className="text-4xl text-center font-bold mb-6 text-green-600 flex justify-between items-center px-2">
            Register
            <button onClick={handleGoogleLogIn} className="text-2xl text-blue-600">
              <FaGoogle />
            </button>
          </h1>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="form-control">
              <label className="label-text block text-green-600">Name</label>
              <input ref={nameRef}  type="text" placeholder="Enter your name" className="input w-full input-bordered border-green-600" required />
            </div>

            <div className="form-control">
              <label className="label-text block text-green-600">Photo URL</label>
              <input ref={photoUrlRef} type="text" placeholder="Enter photo URL" className="input w-full input-bordered border-green-600" required />
            </div>

            <div className="form-control">
              <label className="label-text block text-green-600">Email</label>
              <input ref={emailRef} type="email" placeholder="Enter your email" className="input w-full input-bordered border-green-600" required />
            </div>

            <div className="form-control relative">
              <label className="label-text block text-green-600">Password</label>
              <input
                ref={passwordRef}
                type={eye ? "text" : "password"}
                placeholder="Enter your password"
                className="input w-full input-bordered border-green-600"
                required
              />
              <span onClick={() => setEye(!eye)} className="absolute top-[35px] right-[8px] cursor-pointer text-blue-600">
                {eye ? <HiOutlineEyeOff /> : <RiEyeLine />}
              </span>
            </div>

            {errorMessage && <p className="text-red-600">{errorMessage}</p>}

            <button className="btn bg-green-600 hover:bg-green-700 text-white w-full mt-4">
              Register
            </button>
          </form>
        </div>

        {/* Info Section */}
        <div className="flex items-center justify-center bg-gradient-to-b from-blue-600 to-green-600 text-white w-full md:w-[50%] py-10 px-6">
          <div className="text-center">
            <h2 className="text-3xl font-bold mb-2">Welcome!</h2>
            <p className="mb-4">Already have an account?</p>
            <Link
              to="/login"
              className="bg-white text-blue-600 font-semibold px-6 py-2 rounded hover:bg-blue-100 transition-all"
            >
              Log In
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
