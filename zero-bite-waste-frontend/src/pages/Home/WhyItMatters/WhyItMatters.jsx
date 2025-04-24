import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const WhyItMatters = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  const points = [
    {
      title: "Reducing Food Waste",
      desc: "We rescue surplus food and prevent it from ending up in landfills.",
      icon: "🍽️",
    },
    {
      title: "Fighting Hunger",
      desc: "We connect rescued food with communities facing food insecurity.",
      icon: "🤝",
    },
    {
      title: "Empowering Volunteers",
      desc: "Our heroes on the ground make every delivery with care and love.",
      icon: "🚲",
    },
  ];

  return (
    <section className="bg-white py-20 px-4 md:px-10 text-green-900">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl md:text-5xl font-bold mb-4" data-aos="fade-down">
          Why It Matters
        </h2>
        <p className="text-lg mb-12" data-aos="fade-up">
          Food is precious. Every rescued bite creates a ripple of hope.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {points.map((point, idx) => (
            <div
              key={idx}
              className="bg-yellow-100 p-6 rounded-xl shadow-lg hover:shadow-xl transition"
              data-aos="zoom-in"
              data-aos-delay={idx * 100}
            >
              <div className="text-5xl mb-4">{point.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{point.title}</h3>
              <p>{point.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyItMatters;
