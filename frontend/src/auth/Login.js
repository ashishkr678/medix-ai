import React, { useState, useEffect } from "react";
import toast from "react-hot-toast";
import { AiOutlineClose, AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import { Link, useNavigate } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";

const Login = ({ setIsLoggedIn, setIsAuthModalOpen, setAuthModalType }) => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({ email: "", password: "" });
  const [showPassword, setShowPassword] = useState(false);
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    setShowModal(true);
  }, []);

  const changeHandler = (event) => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  };

  const submitHandler = async (event) => {
    event.preventDefault();

    try {
      const response = await fetch("http://localhost:4646/auth/signin", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        const result = await response.json();
        setIsLoggedIn(true);
        toast.success("Logged In");
        navigate("/");
        setIsAuthModalOpen(false);
      } else {
        const errorData = await response.json();
        toast.error(errorData.message || "Login failed");
      }
    } catch (error) {
      toast.error("Something went wrong. Please try again.");
    }
  };

  return (
    <div>
      <div
        className="fixed inset-0 z-50 flex items-end sm:items-center justify-center bg-black bg-opacity-50 transition-opacity"
        onClick={() => setIsAuthModalOpen(false)}
      >
        <div
          className={`bg-white w-full sm:max-w-md p-6 rounded-t-lg sm:rounded-lg shadow-lg transform transition-transform duration-300 ${
            showModal ? "translate-y-0" : "translate-y-full"
          } sm:translate-y-0`}
          onClick={(e) => e.stopPropagation()}
        >
          <div className="flex justify-between items-center">
            <h2 className="text-2xl font-bold text-black">Welcome back!</h2>
            <button
              onClick={() => setIsAuthModalOpen(false)}
              className="text-gray-600 hover:text-gray-900"
            >
              <AiOutlineClose size={24} />
            </button>
          </div>
          <form onSubmit={submitHandler} className="flex flex-col w-full gap-y-4 mt-4">
            <label className="w-full">
              <p className="text-[0.875rem] text-gray-700 mb-1 leading-[1.375rem]">
                Email Address<sup className="text-red-500">*</sup>
              </p>
              <input
                required
                type="email"
                value={formData.email}
                onChange={changeHandler}
                placeholder="Enter Email Address"
                name="email"
                className="bg-gray-100 rounded-[0.75rem] w-full p-[12px] text-gray-900"
              />
            </label>
            <label className="w-full relative">
              <p className="text-[0.875rem] text-gray-700 mb-1 leading-[1.375rem]">
                Password<sup className="text-red-500">*</sup>
              </p>
              <input
                required
                type={showPassword ? "text" : "password"}
                value={formData.password}
                onChange={changeHandler}
                placeholder="Enter Password"
                name="password"
                className="bg-gray-100 rounded-[0.75rem] w-full p-[12px] text-gray-900"
              />
              <span
                onClick={() => setShowPassword((prev) => !prev)}
                className="absolute right-2 top-[38px] cursor-pointer"
              >
                {showPassword ? (
                  <AiOutlineEyeInvisible fontSize={24} fill="#333" />
                ) : (
                  <AiOutlineEye fontSize={24} fill="#333" />
                )}
              </span>
              <Link to="/">
                <p className="text-xs mt-1 text-blue-500 max-w-max ml-auto">
                  Forgot Password
                </p>
              </Link>
            </label>
            <button className="bg-blue-600 text-white py-[8px] px-[12px] rounded-[8px] mt-2 font-medium hover:bg-blue-700">
              Sign In
            </button>
            <div className="flex w-full items-center gap-x-2 -mt-2 -mb-2">
              <div className="h-[1px] w-full bg-gray-300"></div>
              <p className="text-gray-500 font-medium leading-[1.375rem]">OR</p>
              <div className="h-[1px] w-full bg-gray-300"></div>
            </div>
            <button className="w-full flex items-center justify-center rounded-[8px] font-medium text-gray-900 border-gray-300 bg-yellow-500 hover:bg-yellow-600 border px-[12px] py-[8px] gap-x-2">
              <FcGoogle />
              <p>Sign in with Google</p>
            </button>
          </form>
          <p className="text-sm mt-2 text-black text-center">
            Don't have an account yet?{" "}
            <button className="text-blue-600 hover:text-blue-700" onClick={() => setAuthModalType("register")}>
              Sign Up
            </button>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
