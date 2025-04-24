import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "./../../../assets/logo.png";

const Footer = () => {
  const [showToast, setShowToast] = useState(false);

  const handleSubmitEmail = (e) => {
    e.preventDefault();
    setShowToast(true);
    setTimeout(() => setShowToast(false), 4000);
    e.target.reset();
  };

  return (
    <footer className="bg-[#264E01] text-white">
      {/* CTA Section */}
      <div className="text-center py-16 px-4">
        <h1 className="text-4xl font-bold">Stay Connected With Us!</h1>
      </div>

      {/* Newsletter */}
      <div className="bg-[#3B6C1D] py-10 px-4 w-10/12 mx-auto">
  <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-10">
    <p className="text-center md:text-left max-w-md">
      Subscribe to get the latest news, volunteering opportunities, updates, and insights from us.
    </p>
    <form onSubmit={handleSubmitEmail} className="w-full md:w-auto flex flex-col items-center md:items-start">
      <div className="join flex flex-col sm:flex-row w-full sm:w-3/4 lg:w-2/3">
        <input
          type="email"
          required
          placeholder="username@gmail.com"
          className="input input-bordered join-item w-full sm:w-64"
        />
        <button
          type="submit"
          className="btn btn-warning join-item mt-4 sm:mt-0"
        >
          Subscribe
        </button>
      </div>
    </form>
  </div>
</div>


      {/* Toast */}
      {showToast && (
        <div className="toast toast-top toast-end">
          <div className="alert alert-success">
            <span>Subscribed successfully!</span>
          </div>
        </div>
      )}

      {/* Divider */}
      <div className="h-1 bg-yellow-500 my-4"></div>

      {/* Main Footer Content */}
      <div className="max-w-6xl mx-auto px-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 py-10">
        {/* Branding and Socials */}
        <div>
          <img src={logo} alt="Zero Bite Waste" className="w-32 mb-4" />
          <p className="mb-4">Together, we rescue food and fight hunger.</p>
          <div className="flex gap-4 text-xl">
            {[
              { icon: "facebook-f", link: "https://facebook.com/azrinhossain.adiba.5" },
              { icon: "instagram", link: "https://instagram.com/tahsin_onty" },
              { icon: "x-twitter", link: "https://x.com/AzrinAdiba" },
              { icon: "whatsapp", link: "https://wa.me/88001841147494" },
            ].map(({ icon, link }, idx) => (
              <a
                key={idx}
                href={link}
                target="_blank"
                rel="noreferrer"
                className="hover:text-yellow-400 transition"
              >
                <i className={`fab fa-${icon}`}></i>
              </a>
            ))}
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="footer-title mb-2">Quick Links</h3>
          <ul className="space-y-2">
            <li><Link to="/about" className="link link-hover">About Us</Link></li>
            <li><Link to="/faq" className="link link-hover">FAQ</Link></li>
            <li><Link to="/policy" className="link link-hover">Privacy Policy</Link></li>
            <li><Link to="/terms-and-conditions" className="link link-hover">Terms & Conditions</Link></li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h3 className="footer-title mb-2">Contact</h3>
          <p className="text-sm">📞 01841147494</p>
          <p className="text-sm">✉️ zerobitewaste@gmail.com</p>
        </div>

        {/* Google Map */}
        <div>
          <h3 className="footer-title mb-2">Our Location</h3>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3689.9779207166953!2d91.82167867982425!3d22.35446252717061!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30acd9053cc46727%3A0x188eb592999644b0!2sMount%20Valley%20R%2FA!5e0!3m2!1sen!2sbd!4v1741369346319!5m2!1sen!2sbd"
            width="100%"
            height="160"
            className="rounded-md shadow"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="text-center text-sm py-4 bg-white text-black">
        © 2025 Zero Bite Waste. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
