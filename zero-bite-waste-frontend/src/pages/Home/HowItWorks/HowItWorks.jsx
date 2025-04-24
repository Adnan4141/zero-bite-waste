import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { FaMousePointer, FaRegPaperPlane, FaTruck } from "react-icons/fa";

const HowItWorks = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  const steps = [
    {
      icon: <FaMousePointer className="text-5xl text-yellow-400 mb-4" />,
      title: "Access Our Website",
      desc: "Get started with our free web platform anytime.",
      img: "/how it works 1.png",
    },
    {
      icon: <FaRegPaperPlane className="text-5xl text-yellow-400 mb-4" />,
      title: "Submit Your Donation",
      desc: "Share details about your extra food. It only takes a moment!",
      img: "/how it works 2.png",
    },
    {
      icon: <FaTruck className="text-5xl text-yellow-400 mb-4" />,
      title: "Volunteer Picks It Up",
      desc: "A nearby volunteer will collect and deliver it responsibly.",
      img: "/how it works 3.png",
    },
  ];

  return (
    <section className="bg-green-900 py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <h2
          className="text-4xl md:text-5xl font-extrabold text-center text-white mb-16"
          data-aos="fade-down"
        >
          How It Works
        </h2>

        <div className="grid md:grid-cols-3 gap-12">
          {steps.map((step, index) => (
            <div
              key={index}
              className="bg-green-800 p-8 rounded-xl text-center hover:shadow-xl transition duration-300"
              data-aos="zoom-in"
              data-aos-delay={index * 200}
            >
              <img
                src={step.img}
                alt={`Step ${index + 1}`}
                className="w-32 h-32 mx-auto mb-4 rounded-full shadow-lg object-contain bg-white p-2"
              />
              {step.icon}
              <h3 className="text-xl font-bold text-yellow-400 mb-2">
                Step {index + 1}: {step.title}
              </h3>
              <p className="text-white">{step.desc}</p>
            </div>
          ))}
        </div>

        {/* <div className="mt-16 flex justify-center">
          <a
            href="/learn-more"
            className="btn btn-warning text-lg font-semibold shadow-md hover:scale-105 transition-transform duration-300"
          >
            Learn More
          </a>
        </div> */}
      </div>
    </section>
  );
};

export default HowItWorks;
