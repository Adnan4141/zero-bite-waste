import React, { useEffect } from "react";
import CountUp from "react-countup";
import AOS from "aos";
import "aos/dist/aos.css";

const StatsSection = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <section className="relative bg-green-900 text-white py-16 px-4">
      {/* Optional Overlay */}
      <div className="absolute inset-0 bg-black opacity-30 z-0"></div>

      <div className="relative z-10">
          <h2
            className="text-3xl md:text-4xl font-bold text-center mb-12"
            data-aos="fade-down"
          >
            Food Waste & Hunger in Bangladesh
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            <StatCard
              end={14.1}
              suffix="M"
              text="Tons of food discarded annually by households in Bangladesh"
              animation="fade-up"
            />
            <StatCard
              end={82}
              suffix=" KG"
              text="Food wasted per household per year"
              animation="fade-up"
            />
            <StatCard
              end={56}
              suffix="%"
              text="Restaurant food waste comes from post-meal leftovers"
              animation="fade-up"
            />
            <StatCard
              end={34.9}
              prefix="20.0 – "
              text="Global Hunger Index (GHI) score: Serious category"
              animation="fade-up"
            />
          </div>
      </div>
    </section>
  );
};

const StatCard = ({ end, prefix = "", suffix = "", text, animation }) => (
  <div
    className="bg-white text-gray-800 p-6 rounded-lg shadow-md hover:shadow-lg transition-all duration-300"
    data-aos={animation}
  >
    <h3 className="text-3xl font-bold text-green-700 mb-3 text-center">
      {prefix}
      <CountUp end={end} duration={2.5} separator="," />
      {suffix}
    </h3>
    <p className="text-sm text-center">{text}</p>
  </div>
);

export default StatsSection;
