import React, { useState } from "react";
import "@fortawesome/fontawesome-free/css/all.min.css";
import bgFAQ from "./../../assets/bgContact.jpg";
import ScrollBar from "../Shared/ScrollBar/ScrollBar";
import ScrollToTopButton from "../Shared/scrollToTopButton/scrollToTopButton";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";
import { BaseUrl } from "../../api/BaseUrl";
import { replace, useNavigate } from "react-router-dom";
import { useUser } from "../../api/contextApi/ContextAPi";

const Contact = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const navigate = useNavigate();
  const{user,setUser} = useUser();  
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if(!user){
      toast.error("Please login in first")
      setTimeout(() => {
        navigate('/signin',replace)
      }, 3000);
      return
    }
    try {
      const res = await axios.post(`${BaseUrl}/contact`, formData, {
        headers: {
          "Content-Type": "application/json",
        },
      });
   
      console.log(res.data)
      if (res.data.success) {
        toast.success("✅ Message sent successfully!");
        // setIsSubmitted(true);
        setFormData({ name: "", email: "", message: "" });
      } else {
        toast.error("❌ Failed to send message.");
      }
    } catch (error) {
      toast.error("⚠️ Something went wrong. Please try again.");
    }
  };

  return (
    <div
      className="w-full h-full bg-no-repeat bg-cover overflow-x-hidden"
      style={{
        background: `url(${bgFAQ})`,
        backgroundSize: "cover",
      }}
    >
      <ToastContainer position="top-right" autoClose={3000} />
      <ScrollBar />

      <div className="max-w-4xl mx-auto px-4 py-12 text-black">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold text-yellow-500">
            Have questions or want to contribute? Reach out to us!
          </h2>
          <p className="text-lg text-gray-500 mt-2">
            We're here to help. Whether you're donating food or have questions about our mission, reach out!
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <div className="space-y-4 content-center">
            <div className="flex items-center gap-4">
              <span className="text-primary">
                <i className="fa-solid fa-location-dot text-2xl"></i>
              </span>
              <p>123 Community Street, Green City, Earth</p>
            </div>
            <div className="flex items-center gap-4">
              <span className="text-primary">
                <i className="fa-solid fa-phone text-2xl"></i>
              </span>
              <p>+1 (555) 123-4567</p>
            </div>
            <div className="flex items-center gap-4">
              <span className="text-primary">
                <i className="fa-solid fa-envelope text-2xl"></i>
              </span>
              <p>support@foodrescue.org</p>
            </div>
          </div>

          <form
            onSubmit={handleSubmit}
            className="card bg-base-100 shadow-md p-6 space-y-4"
          >
            <div className="form-control">
              <label className="label">
                <span className="label-text font-medium">Your Name</span>
              </label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Full Name"
                className="input input-bordered bg-slate-300 w-11/12"
                required
              />
            </div>

            <div className="form-control">
              <label className="label">
                <span className="label-text font-medium">Email</span>
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="you@example.com"
                className="input input-bordered bg-slate-300  w-11/12"
                required
              />
            </div>

            <div className="form-control">
              <label className="label">
                <span className="label-text font-medium">Message</span>
              </label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                className="textarea textarea-bordered bg-slate-300  w-11/12"
                placeholder="Your message..."
                rows={4}
                required
              ></textarea>
            </div>

            <button type="submit" className="btn btn-primary  w-11/12 mx-auto">
              Send Message
            </button>
          </form>
        </div>

        {isSubmitted && (
          <dialog id="success_modal" className="modal modal-open">
            <div className="modal-box text-center">
              <h3 className="font-bold text-lg text-success">Thank you!</h3>
              <p className="py-4 text-white">
                Your message has been sent successfully. We'll get back to you soon.
              </p>
              <div className="modal-action">
                <button
                  className="btn btn-success"
                  onClick={() => setIsSubmitted(false)}
                >
                  Close
                </button>
              </div>
            </div>
          </dialog>
        )}
      </div>

      <ScrollToTopButton />
    </div>
  );
};

export default Contact;
