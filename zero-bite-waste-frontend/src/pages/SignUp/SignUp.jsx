import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { FaUser, FaEnvelope, FaLock, FaEye, FaEyeSlash, FaGoogle } from "react-icons/fa";
import signupImg from "../../assets/sign-up.gif";
import { BaseUrl } from "../../api/BaseUrl";
import { toast } from "react-toastify";

const SignUp = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const onSubmit = async (data) => {
    setIsLoading(true);

    try {
      const response = await fetch(`${BaseUrl}/auth/register`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      const result = await response.json();
       console.log(result)
      if (result.success) {
        toast.success("Sign Up Successful! 🎉");
        reset();
        navigate("/signin");
      } else {
        toast.error(result.message || "Sign up failed. Please try again.");
      }
    } catch (error) {
      console.error("Signup error:", error);
      toast.error("Something went wrong. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex flex-col md:flex-row items-center justify-center bg-[#a2c7ad] px-4">
      {/* Left Image */}
      <div className="w-full md:w-1/2 mb-8 md:mb-0">
        <img src={signupImg} alt="Sign Up Visual" className="w-full max-w-lg mx-auto" />
      </div>

      {/* Sign Up Form */}
      <div className="w-full md:w-1/2 bg-white shadow-xl rounded-lg p-8 max-w-md">
        <h2 className="text-3xl font-bold text-center text-green-800 mb-6">Create an Account</h2>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          {/* Name */}
          <div className="form-control">
            <label className="label text-sm font-semibold text-black">Name</label>
            <div className="relative">
              <input
                type="text"
                {...register("name", 
                  { required: "Name is required" })}

                className="input input-bordered w-full pl-10"
                placeholder="Your Name"
              />
              <FaUser className="absolute left-3 top-3.5 text-gray-500" />
            </div>
            {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name.message}</p>}
          </div>

          {/* Email */}
          <div className="form-control">
            <label className="label text-sm font-semibold text-black">Email</label>
            <div className="relative">
              <input
                type="email"
                {...register("email", { required: "Email is required" })}
                className="input input-bordered w-full pl-10"
                placeholder="your@email.com"
              />
              <FaEnvelope className="absolute left-3 top-3.5 text-gray-500" />
            </div>
            {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>}
          </div>

          {/* Password */}
          <div className="form-control">
            <label className="label text-sm font-semibold text-black">Password</label>
            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                {...register("password", {
                  required: "Password is required",
                  minLength: { value: 6, message: "Minimum 6 characters" },
                  pattern: {
                    value: /(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])/,
                    message: "Password must include uppercase, number, and symbol",
                  },
                })}
                className="input input-bordered w-full pl-10 pr-10"
                placeholder="••••••••"
              />
              <FaLock className="absolute left-3 top-3.5 text-gray-500" />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-3.5 text-gray-500"
              >
                {showPassword ? <FaEyeSlash /> : <FaEye />}
              </button>
            </div>
            {errors.password && <p className="text-red-500 text-sm mt-1">{errors.password.message}</p>}
          </div>

          <button type="submit" className="btn btn-accent w-full" disabled={isLoading}>
            {isLoading ? "Signing Up..." : "Sign Up"}
          </button>
        </form>

        <div className="divider my-4 text-black">OR</div>

        <button className="btn btn-outline bg-red-500 w-full flex gap-2 justify-center items-center">
          <FaGoogle /> Continue with Google
        </button>

        <p className="mt-4 text-sm text-center text-black">
          Already have an account?{" "}
          <Link to="/signin" className="text-green-800 font-semibold hover:underline">
            Sign In
          </Link>
        </p>
      </div>
    </div>
  );
};

export default SignUp;
