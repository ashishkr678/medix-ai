import React, { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { AiOutlineEyeInvisible, AiOutlineEye, AiOutlineClose } from "react-icons/ai";
import { FcGoogle } from "react-icons/fc";

const Register = ({ setIsLoggedIn, setIsAuthModalOpen, setAuthModalType }) => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [showCreatePassword, setShowCreatePassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    setShowModal(true);
  }, []);

  const changeHandler = (event) => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  };

  const submitHandler = async (event) => {
    event.preventDefault();
    if (formData.password !== formData.confirmPassword) {
      toast.error("Passwords do not match");
      return;
    }

    try {
      const response = await fetch("http://localhost:4646/auth/signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          firstName: formData.firstName,
          lastName: formData.lastName,
          email: formData.email,
          password: formData.password,
        }),
      });

      if (response.ok) {
        toast.success("Account Created! Please log in.");
        setAuthModalType("login"); // Show login modal
        setIsAuthModalOpen(true);  // Ensure modal stays open for login
      } else {
        const errorData = await response.json();
        toast.error(errorData.message || "Registration failed");
      }
    } catch (error) {
      toast.error("An error occurred. Please try again later.");
      console.error("Error:", error);
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
            <h2 className="text-2xl font-bold text-black">Create Account</h2>
            <button
              onClick={() => setIsAuthModalOpen(false)}
              className="text-gray-600 hover:text-gray-900"
            >
              <AiOutlineClose size={24} />
            </button>
          </div>
          <form onSubmit={submitHandler} className="flex flex-col w-full gap-y-4 mt-4 max-w-md">
            <div className="flex gap-x-4">
              <label className="w-full">
                <p className="text-[0.875rem] text-gray-700 mb-1 leading-[1.375rem]">
                  First Name<sup className="text-red-500">*</sup>
                </p>
                <input
                  required
                  type="text"
                  name="firstName"
                  onChange={changeHandler}
                  placeholder="First Name"
                  value={formData.firstName}
                  className="bg-gray-100 rounded-[0.75rem] w-full p-[12px] text-gray-900"
                />
              </label>
              <label className="w-full">
                <p className="text-[0.875rem] text-gray-700 mb-1 leading-[1.375rem]">
                  Last Name<sup className="text-red-500">*</sup>
                </p>
                <input
                  required
                  type="text"
                  name="lastName"
                  onChange={changeHandler}
                  placeholder="Last Name"
                  value={formData.lastName}
                  className="bg-gray-100 rounded-[0.75rem] w-full p-[12px] text-gray-900"
                />
              </label>
            </div>
            <label className="w-full">
              <p className="text-[0.875rem] text-gray-700 mb-1 leading-[1.375rem]">
                Email Address<sup className="text-red-500">*</sup>
              </p>
              <input
                required
                type="email"
                value={formData.email}
                onChange={changeHandler}
                placeholder="Email address"
                name="email"
                className="bg-gray-100 rounded-[0.75rem] w-full p-[12px] text-gray-900"
              />
            </label>
            <div className="flex gap-x-4">
              <label className="w-full relative">
                <p className="text-[0.875rem] text-gray-700 mb-1 leading-[1.375rem]">
                  Create Password<sup className="text-red-500">*</sup>
                </p>
                <input
                  required
                  type={showCreatePassword ? "text" : "password"}
                  name="password"
                  onChange={changeHandler}
                  placeholder="Password"
                  value={formData.password}
                  className="bg-gray-100 rounded-[0.75rem] w-full p-[12px] text-gray-900"
                />
                <span
                  onClick={() => setShowCreatePassword((prev) => !prev)}
                  className="absolute right-2 top-[38px] cursor-pointer"
                >
                  {showCreatePassword ? (
                    <AiOutlineEyeInvisible fontSize={24} fill="#333" />
                  ) : (
                    <AiOutlineEye fontSize={24} fill="#333" />
                  )}
                </span>
              </label>
              <label className="w-full relative">
                <p className="text-[0.875rem] text-gray-700 mb-1 leading-[1.375rem]">
                  Confirm Password<sup className="text-red-500">*</sup>
                </p>
                <input
                  required
                  type={showConfirmPassword ? "text" : "password"}
                  name="confirmPassword"
                  onChange={changeHandler}
                  placeholder="Password"
                  value={formData.confirmPassword}
                  className="bg-gray-100 rounded-[0.75rem] w-full p-[12px] text-gray-900"
                />
                <span
                  onClick={() => setShowConfirmPassword((prev) => !prev)}
                  className="absolute right-2 top-[38px] cursor-pointer"
                >
                  {showConfirmPassword ? (
                    <AiOutlineEyeInvisible fontSize={24} fill="#333" />
                  ) : (
                    <AiOutlineEye fontSize={24} fill="#333" />
                  )}
                </span>
              </label>
            </div>
            <button className="bg-blue-600 hover:bg-blue-700 text-white py-[8px] px-[12px] rounded-[8px] font-medium w-full mt-2">
              Create Account
            </button>
            <div className="flex w-full items-center gap-x-2 -mt-2 -mb-2">
              <div className="h-[1px] w-full bg-gray-300"></div>
              <p className="text-gray-500 font-medium leading-[1.375rem]">OR</p>
              <div className="h-[1px] w-full bg-gray-300"></div>
            </div>
            <button className="w-full flex items-center justify-center rounded-[8px] font-medium text-gray-900 border-gray-300 bg-yellow-500 hover:bg-yellow-600 border px-[12px] py-[8px] gap-x-2">
              <FcGoogle />
              <p>Sign Up with Google</p>
            </button>
          </form>
          <p className="text-sm mt-2 text-black text-center">
            Already have an account?{" "}
            <button className="text-blue-500 hover:text-blue-600" onClick={() => setAuthModalType("login")}>
              Sign In
            </button>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Register;
