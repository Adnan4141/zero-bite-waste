import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import foodRescue from './../../../assets/middleSection.svg'

const MiddleSection = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <section className="bg-green-700 text-white py-16 px-4 md:px-10">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <div data-aos="fade-right">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
            Rescuing Food. Feeding Hope.
          </h2>
          <p className="text-lg mb-6">
            Every day, good food goes to waste while many go hungry. At Zero Bite Waste, we connect extra food from homes, restaurants, and events to people who need it most.
          </p>
          <a
            href="/donate"
            className="btn bg-yellow-400 hover:bg-yellow-500 text-green-900 font-semibold rounded-full px-6 py-3 transition"
          >
            Donate Food Now
          </a>
        </div>

        <div data-aos="fade-left" className="flex justify-center">
          <img
            src= {foodRescue}
            alt="Food Rescue"
            className="w-3/4 md:w-full rounded-xl shadow-lg"
          />
        </div>
      </div>
    </section>
  );
};

export default MiddleSection;
