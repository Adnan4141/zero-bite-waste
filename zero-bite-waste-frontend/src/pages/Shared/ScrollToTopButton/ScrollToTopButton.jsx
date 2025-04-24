import React from "react";
import { ArrowUp } from "lucide-react";

const ScrollToTopButton = () => {
    const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });
  return (
    <>
      <button
        onClick={scrollToTop}
        className="fixed bottom-5 right-5 btn btn-circle btn-outline hover:btn-warning shadow-md"
        aria-label="Back to top"
      >
        <ArrowUp className="w-5 h-5" />
      </button>
    </>
  );
};

export default ScrollToTopButton;
