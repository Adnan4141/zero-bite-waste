import React from "react";
import { Link } from "react-router-dom";
import banner from "./../../assets/banner-inside.svg";
import ScrollToTopButton from "../Shared/scrollToTopButton/scrollToTopButton";
import ScrollBar from "../Shared/ScrollBar/ScrollBar";

const About = () => {
  return (
    <div className="about-page">
      {/* Scroll Progress Bar with green-yellow gradient */}
      <ScrollBar />
      {/* Hero Section */}
      <section className="w-full bg-cover bg-no-repeat overflow-x-hidden" style={{ backgroundImage: "url('https://i.ibb.co.com/HThvRT2k/banner.jpg')" }}>
        <div className="hero min-h-screen px-6 md:px-12">
          <div className="hero-content flex-col lg:flex-row-reverse">
            <img src={banner} alt="Banner" className="max-w-sm rounded-lg shadow-2xl" />
            <div>
              <h1 className="text-5xl font-bold text-black">Zero Bite Waste</h1>
              <p className="py-6 text-black">
                Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi.
                In deleniti eaque aut repudiandae et a id nisi.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Mission Section */}
      <section className="bg-green-700 text-white text-center py-12">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-4xl font-bold mb-6">Our Mission</h2>
          <p className="text-lg">
            Zero Bite Waste is a food rescue platform that connects restaurants, individuals,
            and other food suppliers with surplus food to those in need. Our mission is to reduce
            food waste, provide nourishment to those less fortunate, and build a more sustainable food system for all.
          </p>
        </div>
      </section>

      <div className="h-1 bg-yellow-500"></div>

      {/* Why Choose Us */}
      <section className="bg-white py-12">
        <h2 className="text-4xl font-bold text-center text-green-800 mb-10">Why Choose Zero Bite Waste?</h2>
        <div className="flex flex-col lg:flex-row justify-center items-stretch gap-6 px-4 max-w-6xl mx-auto">
          <div className="card bg-base-100 shadow-md border border-green-200">
            <div className="card-body items-center text-center">
              <h3 className="card-title text-green-800 text-2xl">Reduce Waste</h3>
              <p>
                We help minimize food waste by connecting surplus food with those who need it the most.
              </p>
            </div>
          </div>
          <div className="card bg-base-100 shadow-md border border-green-200">
            <div className="card-body items-center text-center">
              <h3 className="card-title text-green-800 text-2xl">Support Communities</h3>
              <p>
                Our platform provides a way for individuals and businesses to directly support their local communities.
              </p>
            </div>
          </div>
          <div className="card bg-base-100 shadow-md border border-green-200">
            <div className="card-body items-center text-center">
              <h3 className="card-title text-green-800 text-2xl">Easy to Use</h3>
              <p>
                Our user-friendly platform makes food donation and pickup easy, efficient, and accessible.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-green-800 text-white text-center py-16">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-4xl font-bold mb-6">Join Us in Making a Difference</h2>
          <p className="text-lg mb-6">
            Ready to help fight hunger and reduce food waste? Join our movement and make a positive impact today.
          </p>
          <div className="flex flex-col md:flex-row justify-center items-center gap-4">
            <Link to="/donate">
              <button className="btn btn-outline btn-warning">Join as a Donator</button>
            </Link>
            <h3 className="text-lg font-semibold">OR</h3>
            <Link to="/volunteer">
              <button className="btn btn-outline btn-warning">Volunteer</button>
            </Link>
          </div>
        </div>
      </section>
      {/* Back to Top */}
      <ScrollToTopButton />
    </div>
  );
};

export default About;
