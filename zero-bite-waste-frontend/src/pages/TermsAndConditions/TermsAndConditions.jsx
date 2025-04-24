import React from 'react';
import ScrollBar from '../Shared/ScrollBar/ScrollBar'; // Assuming you have a ScrollBar component
import ScrollToTopButton from '../Shared/scrollToTopButton/scrollToTopButton';

const TermsAndConditions = () => {
  return (
    <div className="p-6 bg-white font-sans leading-relaxed">

      {/* Scroll Progress Bar with green-yellow gradient */}
      <ScrollBar />

      <h1 className="text-4xl font-bold text-gray-800 text-center mb-8">Terms and Conditions</h1>

      <section className="mb-10">
        <h2 className="text-2xl font-semibold text-teal-700 mb-4">Introduction</h2>
        <p className="text-gray-600 text-base mb-4">
          Welcome to our website! These terms and conditions govern your use of our website and services.
          By accessing this website, you agree to comply with and be bound by these terms. If you disagree
          with any part of these terms, please do not use our website.
        </p>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-semibold text-teal-700 mb-4">Usage Rights</h2>
        <p className="text-gray-600 text-base mb-4">
          You are granted a non-exclusive, non-transferable, limited license to access and use this website
          for personal, non-commercial purposes only.
        </p>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-semibold text-teal-700 mb-4">Content Ownership</h2>
        <p className="text-gray-600 text-base mb-4">
          All content on this website, including text, images, and logos, are the property of the website owner
          and are protected by intellectual property laws.
        </p>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-semibold text-teal-700 mb-4">Limitation of Liability</h2>
        <p className="text-gray-600 text-base mb-4">
          The website owner will not be liable for any damages resulting from your use of the website or the
          inability to use the website.
        </p>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-semibold text-teal-700 mb-4">Changes to Terms</h2>
        <p className="text-gray-600 text-base mb-4">
          The website owner reserves the right to modify these terms at any time without prior notice. Changes
          will be posted on this page, and by continuing to use the website, you accept those changes.
        </p>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-semibold text-teal-700 mb-4">Governing Law</h2>
        <p className="text-gray-600 text-base mb-4">
          These terms are governed by the laws of the jurisdiction in which the website owner resides.
        </p>
      </section>

      <footer className="text-center text-sm text-gray-500 mt-12">
        <p>
          By using this website, you agree to the <a href="#" className="text-teal-700 hover:underline">Terms and Conditions</a> and <a href="#" className="text-teal-700 hover:underline">Privacy Policy</a>.
        </p>
      </footer>
      {/* Back to Top */}
      <ScrollToTopButton />
    </div>
  );
};

export default TermsAndConditions;
