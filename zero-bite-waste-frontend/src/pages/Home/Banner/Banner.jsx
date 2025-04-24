import React from 'react';
import LayoutWrapper from '../../../layout/LayoutWrapper';

const Banner = () => {
    return (
        <div
      className="relative w-full h-screen flex items-center justify-center text-white bg-cover bg-center"
      style={{
        backgroundImage: "url('/hero-image.jpg.webp')",
      }}
    >
      {/* Overlay Content */}
      <div className="w-full h-full bg-black bg-opacity-40 flex items-center justify-center">
        <LayoutWrapper>
          <div className="text-center px-6 md:px-12 py-24">
            <h1 className="text-4xl md:text-6xl font-extrabold tracking-wide">
              Welcome to{" "}
              <span className="text-yellow-400">Zero Bite Waste</span>
            </h1>
            <p className="mt-4 text-lg md:text-2xl max-w-xl mx-auto">
              Every bite counts! Join us in reducing food waste and feeding those in need.
            </p>
            <div className="mt-6 flex flex-col sm:flex-row justify-center gap-4">
              <a
                href="/donate"
                className="bg-yellow-400 text-green-900 px-6 py-3 rounded-full text-lg font-semibold shadow-md hover:bg-yellow-500 transition duration-300"
              >
                Donate Now
              </a>
              <a
                href="/volunteer"
                className="border-2 border-yellow-400 text-white px-6 py-3 rounded-full text-lg font-semibold hover:bg-yellow-400 hover:text-green-900 transition duration-300"
              >
                Become a Volunteer
              </a>
            </div>
          </div>
        </LayoutWrapper>
      </div>
    </div>
    );
};

export default Banner;