import React from "react";
import { Toaster, toast } from "react-hot-toast";
import bgFAQ from "./../../assets/info-bg.png";
import ScrollBar from "../Shared/ScrollBar/ScrollBar";
import ScrollToTopButton from "../Shared/scrollToTopButton/scrollToTopButton";

const FAQPage = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    toast.success("Your question has been submitted successfully!");
    e.target.reset(); // Optional: clear the form
  };

  const faqSections = [
    {
      title: "How It Works",
      items: [
        {
          question: "What is Zero Bite Waste?",
          answer:
            "Zero Bite Waste is a food rescue platform that connects restaurants, individuals, and other food suppliers with surplus food to those in need.",
        },
        {
          question: "How can I donate food?",
          answer:
            "You can donate food through our website by signing up and selecting a donation option.",
        },
        {
          question: "How does the food pickup process work?",
          answer:
            "Once you submit a donation request, we arrange a food pickup at a time that works for you.",
        },
        {
          question: "Can I track my donation?",
          answer:
            "Yes! You will receive notifications regarding the status of your donation.",
        },
      ],
    },
    {
      title: "Food Safety & Liability",
      items: [
        {
          question: "How do you ensure food safety?",
          answer:
            "We follow strict food safety guidelines and work with certified food handlers.",
        },
        {
          question: "Is there any cost for donating food?",
          answer: "No, there are no costs for donating food. It's completely free.",
        },
        {
          question: "What happens if the food donation is not safe?",
          answer:
            "We safely dispose of any unsafe food and follow best practices with food experts.",
        },
        {
          question: "Can I donate expired food?",
          answer:
            "No, only food within its expiration date or still safe to eat is accepted.",
        },
      ],
    },
    {
      title: "Getting Started",
      items: [
        {
          question: "How do I become a partner?",
          answer:
            "Businesses can sign up as partners by filling out the partner registration form.",
        },
        {
          question: "How do I sign up to donate food?",
          answer:
            "Just sign up on our website, create a profile, and choose your donation option.",
        },
        {
          question: "How do I sign up as a volunteer?",
          answer:
            "Fill out the volunteer form on our site and select your preferred roles.",
        },
        {
          question: "Can I donate non-perishable items?",
          answer:
            "Yes, we accept canned goods, dried food, and items with long shelf life.",
        },
      ],
    },
    {
      title: "About Us",
      items: [
        {
          question: "What is the mission of Zero Bite Waste?",
          answer:
            "To reduce food waste and nourish communities while building a sustainable system.",
        },
        {
          question: "Can I volunteer for Zero Bite Waste?",
          answer:
            "Absolutely! Sign up to volunteer and choose from many opportunities.",
        },
        {
          question: "How do you select food recipients?",
          answer:
            "We collaborate with vetted community organizations to distribute food effectively.",
        },
        {
          question: "Where is Zero Bite Waste operating?",
          answer: "We’re active in several cities. Check our site for your location.",
        },
      ],
    },
  ];

  return (
    <div
      className="w-full min-h-screen bg-no-repeat bg-cover"
      style={{ backgroundImage: `url(${bgFAQ})` }}
    >
      {/* Scroll Progress Bar with green-yellow gradient */}
      <ScrollBar />
      <Toaster position="top-center" reverseOrder={false} />

      <div className="px-6 py-10 max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-10">
          <h2 className="text-4xl font-bold text-green-700 mb-2">
            Frequently Asked Questions
          </h2>
          <p className="text-gray-600">
            If you can’t find answers to your questions or have feedback, email us at{" "}
            <a href="mailto:hello@foodrecovery.org" className="underline">
              hello@foodrecovery.org
            </a>
          </p>
        </div>

        {/* FAQ Sections */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {faqSections.map((section, index) => (
            <div key={index}>
              <h3 className="text-2xl font-semibold text-green-700 mb-4">
                {section.title}
              </h3>
              <div className="flex flex-col gap-3">
                {section.items.map((faq, idx) => (
                  <div
                    key={idx}
                    className="collapse collapse-plus bg-white border border-base-300"
                  >
                    <input type="checkbox" />
                    <div className="collapse-title text-md font-medium text-gray-900">
                      {faq.question}
                    </div>
                    <div className="collapse-content text-gray-700">
                      <p>{faq.answer}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Ask a Question Section */}
        <section className="mt-16 max-w-xl mx-auto bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold text-green-700 text-center mb-6">
            Have a Question? Ask Us!
          </h2>
          <form onSubmit={handleSubmit} className="flex flex-col gap-4">
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              className="input input-bordered w-full"
              required
            />
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              className="input input-bordered w-full"
              required
            />
            <textarea
              name="question"
              placeholder="Your Question"
              className="textarea textarea-bordered w-full"
              rows="4"
              required
            ></textarea>
            <button type="submit" className="btn btn-success w-full">
              Submit Question
            </button>
          </form>
        </section>
      </div>
      {/* Back to Top */}
      <ScrollToTopButton />
    </div>
  );
};

export default FAQPage;
