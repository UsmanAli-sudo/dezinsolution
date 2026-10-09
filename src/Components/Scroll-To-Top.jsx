import { useEffect, useState } from "react";

export default function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > 200);
    };

    window.addEventListener("scroll", handleScroll);

    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div
      id="scroll-to-top"
      onClick={scrollToTop}
      role="button"
      tabIndex={0}
      onKeyDown={(e) => {
        if (e.key === "Enter" || e.key === " ") {
          e.preventDefault();
          scrollToTop();
        }
      }}
      aria-label="Scroll to top"
      className={`z-40 fixed right-2.5 bottom-5 w-10 h-10 ${
        isVisible ? "flex" : "hidden"
      } items-center justify-center cursor-pointer`}
    >
      <i className="ri-arrow-up-s-line absolute text-primary"></i>

      <svg
        id="rounded-scroll"
        width="100%"
        height="100%"
        viewBox="-1 -1 102 102"
        stroke="#ff4f01"
        strokeWidth="4"
        fill="none"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M50,1 a49,49 0 0,1 0,98 a49,49 0 0,1 0,-98" />
      </svg>
    </div>
  );
}
