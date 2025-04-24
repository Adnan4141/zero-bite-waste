import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import forgetPassword from "../../assets/email-verification.gif";
import ScrollBar from "../Shared/ScrollBar/ScrollBar";
import ScrollToTopButton from "../Shared/scrollToTopButton/scrollToTopButton";

const ForgetPass = () => {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();
  
  const [userEmail, setUserEmail] = useState("");
  const [showSuccess, setShowSuccess] = useState(false); // State to control success modal visibility

  const handleLogin = (data, e) => {
    e.preventDefault();
    // Simulate a success response
    setShowSuccess(true); // Show success modal
  };

  const handleEmailBlur = (event) => {
    const email = event.target.value;
    setUserEmail(email);
  };

  return (
    <>
      {/* Scroll Progress Bar with green-yellow gradient */}
      <ScrollBar />
      
      <div className="flex h-screen items-center justify-evenly text-center font-mono bg-[#a2c7ad]">
        <div>
          <img src={forgetPassword} alt="Forgot Password" />
        </div>
        
        <div className="flex w-3/12 items-center justify-center rounded-lg bg-white">
          <div className="w-96 p-7">
            <form onSubmit={handleSubmit(handleLogin)}>
            <h2 className="text-3xl font-bold text-center text-green-800 mb-6">Reset Password</h2>

              <div className="form-control my-8 w-full">
                <label className="label">
                  <span className="label-text text-black">Enter Your Email Address</span>
                </label>
                <input
                  {...register("email", { required: "Email Address is required" })}
                  aria-invalid={errors.email ? "true" : "false"}
                  type="email"
                  onBlur={handleEmailBlur}
                  className="input-bordered input w-full max-w-xs border-[#facc15]"
                  placeholder="youremail@example.com"
                />
                {errors.email && <p className="text-red-600">{errors.email?.message}</p>}
              </div>

              <input
                type="submit"
                value="Send Email"
                className="btn-accent btn w-full bg-[#facc15] text-[#006400] hover:bg-[#9eab61]"
              />
            </form>
            <p className="my-2 text-black">
              New to Zero Bite Waste?{" "}
              <Link className="text-green-700" to="/signup">
                Create new Account
              </Link>
            </p>
          </div>
        </div>
      </div>

      {/* ✅ Success Modal */}
      {showSuccess && (
        <div className="modal modal-open">
          <div className="modal-box text-center bg-[#006400] text-white">
            <h3 className="font-bold text-lg">Email Sent Successfully 🎉</h3>
            <p className="py-4">A password reset link has been sent to {userEmail}. Please check your inbox.</p>
            <div className="modal-action justify-center">
              <button onClick={() => setShowSuccess(false)} className="btn bg-[#facc15] text-[#006400]">
                Close
              </button>
              <Link to="/signin" className="btn bg-[#facc15] text-[#006400]">
                Go to Sign In
              </Link>
            </div>
          </div>
        </div>
      )}

      {/* Back to Top */}
      <ScrollToTopButton />
    </>
  );
};

export default ForgetPass;
