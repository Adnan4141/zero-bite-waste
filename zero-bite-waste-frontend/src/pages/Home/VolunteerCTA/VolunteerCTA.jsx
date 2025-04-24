import React from "react";
import { FaHandsHelping } from "react-icons/fa";

const VolunteerCTA = () => {
  return (
    <section className="bg-green-100 py-16 px-4">
      <div
        className="max-w-5xl mx-auto text-center"
        data-aos="fade-up"
        data-aos-duration="1000"
      >
        <FaHandsHelping className="text-5xl text-yellow-500 mx-auto mb-4" />
        <h2 className="text-3xl md:text-4xl font-bold text-green-900 mb-4">
          Become a Food Rescue Hero
        </h2>
        <p className="text-lg md:text-xl text-green-800 mb-8">
          Join our volunteer team and help deliver surplus food to those who need it most.
          Every small effort makes a huge impact.
        </p>
        <a
          href="/volunteer"
          className="btn btn-warning btn-lg text-white hover:scale-105 transition-transform"
        >
          Join as Volunteer
        </a>
      </div>
    </section>
  );
};

export default VolunteerCTA;
