import React from "react";
import { motion, useScroll } from "framer-motion";
import ScrollToTopButton from "../Shared/scrollToTopButton/scrollToTopButton";
import ScrollBar from "../Shared/ScrollBar/ScrollBar";

const sections = [
  {
    title: "Overview",
    content:
      "This Privacy Policy explains how we collect, use, and protect your personal information. By using our site, you agree to these practices. We’re committed to keeping your data safe and secure.",
  },
  {
    title: "What is Personal Information?",
    content:
      "Personal information includes data like your name, email, phone number, or anything else that can identify you. It also includes your interactions with our website.",
  },
  {
    title: "When Do We Collect It?",
    content:
      "We collect personal info when you donate, sign up, subscribe, contact us, or interact with our site. Analytics tools may also collect technical info automatically.",
  },
  {
    title: "How We Use It",
    content:
      "Your data helps us process donations, communicate with you, improve our services, and personalize your experience. We never sell your information.",
  },
  {
    title: "How We Protect It",
    content:
      "We use encryption, secure storage, and access control measures to protect your personal data from unauthorized access.",
  },
  {
    title: "Data Retention",
    content:
      "We retain your data only as long as needed for operational purposes or as required by law.",
  },
  {
    title: "Do We Use Cookies?",
    content:
      "Yes, we use cookies to analyze traffic, remember preferences, and enhance your browsing experience. You can adjust cookie settings in your browser.",
  },
  {
    title: "Sharing with Third Parties",
    content:
      "We do not sell your data. We may share it only with trusted partners who help operate our website and services.",
  },
  {
    title: "Contact Us",
    content: (
      <>
        <p>Questions? Reach out to us directly:</p>
        <ul className="mt-2 space-y-1">
          <li className="font-semibold text-gray-800">
            📧 support@zerobitewaste.com
          </li>
          <li className="font-semibold text-gray-800">📞 01841147494</li>
        </ul>
      </>
    ),
  },
];

const Policy = () => {
  const { scrollYProgress } = useScroll(); // Scroll progress value

  return (
    <div className="relative min-h-screen bg-gradient-to-b from-white via-[#f4fce9] to-white py-12 px-4 md:px-10">
      
      {/* Scroll Progress Bar with green-yellow gradient */}
      <ScrollBar />

      <div className="max-w-5xl mx-auto">
        {/* Breadcrumb Navigation */}
        <div className="text-sm breadcrumbs text-gray-500 mb-4">
          <ul>
            <li>
              <a href="/">Home</a>
            </li>
            <li>Privacy Policy</li>
          </ul>
        </div>

        {/* Heading */}
        <div className="text-center mb-12">
          <h1 className="text-5xl font-extrabold text-[#326414]">
            Privacy Policy
          </h1>
          <p className="mt-2 text-sm text-gray-500">Last Updated: March 2025</p>
        </div>

        {/* Sections with Framer Motion Scroll Animations */}
        <div className="space-y-10">
          {sections.map((section, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="bg-white border-l-4 border-[#326414] shadow-md p-6 rounded-xl"
            >
              <h2 className="text-2xl font-semibold text-[#326414] mb-3">
                {section.title}
              </h2>
              <div className="text-gray-700 leading-relaxed">
                {section.content}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Back to Top */}
        <ScrollToTopButton />
      </div>
    </div>
  );
};

export default Policy;
