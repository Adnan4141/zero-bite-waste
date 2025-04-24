import React, { useState } from "react";
import bgFAQ from "./../../assets/info-bg.svg";
import ScrollBar from "../Shared/ScrollBar/ScrollBar";
import ScrollToTopButton from "../Shared/scrollToTopButton/scrollToTopButton";
import { BaseUrl } from "../../api/BaseUrl";

const Donate = () => {
  const [formData, setFormData] = useState({
    name: "",
    foodType: "",
    quantity: "",
    pickupLocation: "",
    contact: "",
  });
  const [showModal, setShowModal] = useState(false); 

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    try {
      const response = await fetch(`${BaseUrl}/donate`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      });
       console.log( response)
      if (response.ok) {
        const result = await response.json();
        console.log('Donation submitted:', result);
        setShowModal(true);
        setFormData({
          name: "",
          foodType: "",
          quantity: "",
          pickupLocation: "",
          contact: "",
        });
      } else {
        const error = await response.json();
        console.error('Submission failed:', error);
        alert(`Error: ${error.message || 'Something went wrong'}`);
      }
    } catch (err) {
      console.error('Network error:', err);
      alert('Network error. Please try again later.');
    }
  };
  

  return (
    <div
      className="w-full h-full bg-no-repeat bg-cover overflow-x-hidden py-12"
      style={{
        backgroundImage:
          "url('https://i.ibb.co.com/3DFq0Dg/drew-beamer-k-UHf-MW8awp-E-unsplash-1.jpg')",
      }}
    >
      {/* Scroll Progress Bar with green-yellow gradient */}
      <ScrollBar />
      <div className="p-6 text-center">
        <h1 className="text-3xl font-bold text-green-700">Donate Food</h1>
        <p className="mt-4 text-gray-600">
          Join us in fighting food waste! Fill out the form below to donate food.
        </p>
        <form
          onSubmit={handleSubmit}
          className="mt-6 max-w-md mx-auto bg-white p-6 rounded-lg shadow-md"
        >
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Your Name"
            className="w-full p-2 border border-gray-300 rounded mb-3"
            required
          />
          <input
            type="text"
            name="foodType"
            value={formData.foodType}
            onChange={handleChange}
            placeholder="Type of Food"
            className="w-full p-2 border border-gray-300 rounded mb-3"
            required
          />
          <input
            type="number"
            name="quantity"
            value={formData.quantity}
            onChange={handleChange}
            placeholder="Quantity (kg/liters/pieces)"
            className="w-full p-2 border border-gray-300 rounded mb-3"
            required
          />
          <input
            type="text"
            name="pickupLocation"
            value={formData.pickupLocation}
            onChange={handleChange}
            placeholder="Pickup Location"
            className="w-full p-2 border border-gray-300 rounded mb-3"
            required
          />
          <input
            type="text"
            name="contact"
            value={formData.contact}
            onChange={handleChange}
            placeholder="Your Contact Number"
            className="w-full p-2 border border-gray-300 rounded mb-3"
            required
          />
          <button
            type="submit"
            className="w-full bg-green-700 text-white py-2 rounded hover:bg-green-800 transition"
          >
            Submit Donation
          </button>
        </form>
      </div>

      {/* Success Modal */}
      {showModal && (
        <div className="modal modal-open">
          <div className="modal-box text-center">
            <h3 className="font-bold text-lg text-green-600">Donation Submitted!</h3>
            <p className="py-4">Thank you for your donation! We will contact you soon.</p>
            <div className="modal-action justify-center">
              <button
                onClick={() => setShowModal(false)}
                className="btn btn-success"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Back to Top */}
      <ScrollToTopButton />
    </div>
  );
};

export default Donate;
