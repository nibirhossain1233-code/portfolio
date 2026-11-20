"use client";

import { useEffect, useState } from "react";
import { FaArrowUp } from "react-icons/fa";

const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > 300);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <button
      onClick={() =>
        window.scrollTo({
          top: 0,
          behavior: "smooth",
        })
      }
      aria-label="Scroll to top"
      className={`fixed bottom-14 md:bottom-6 right-6 z-50 size-12 rounded-full border border-white/20 bg-white/10 flex items-center justify-center text-white hover:text-accent transition-all duration-500 ease-in-out cursor-pointer ${
        isVisible
          ? "opacity-100 translate-y-0 scale-100 pointer-events-auto"
          : "opacity-0 translate-y-5 scale-75 pointer-events-none"
      }`}
    >
      <FaArrowUp size={18} />
    </button>
  );
};

export default ScrollToTop;
