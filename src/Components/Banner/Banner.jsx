import { FaArrowDown } from "react-icons/fa";
import { scrollTo } from "../Utlis/scrollSmoth";

export default function Banner() {
  //   const scrollTo = (id) => {
  //     const el = document.querySelector(id);
  //     if (el) {
  //       const yOffset = -80; // navbar height adjust
  //       const y = el.getBoundingClientRect().top + window.pageYOffset + yOffset;

  //       window.scrollTo({ top: y, behavior: "smooth" });
  //     }
  //   };

  return (
    <section
      id="home"
      className="min-h-screen flex flex-col items-center justify-center text-center px-6 bg-white pt-24 scroll-mt-20"
    >
      {/* Badge */}
      <div className="mb-6 px-4 py-1 text-sm border rounded-full text-gray-600 flex items-center gap-2">
        <span className="w-2 h-2 bg-green-500 rounded-full"></span>
        Open for Remote Job & Freelance Projects
      </div>

      {/* Name */}
      <h1 className="text-5xl md:text-7xl font-bold leading-tight">
        Sohel
        <span className="text-gray-400"> Rana</span>
      </h1>

      {/* Title */}
      <p className="mt-4 text-gray-600 text-lg">
        Full Stack Developer from Bangladesh
      </p>

      {/* Description */}
      <p className="mt-4 max-w-xl text-gray-500">
        I build scalable, modern web applications with clean architecture and
        pixel-perfect interfaces. Turning complex problems into elegant digital
        solutions.
      </p>

      {/* Buttons */}
      <div className="mt-8 flex gap-4">
        <button
          onClick={() => scrollTo("#project")}
          className="cursor-pointer px-6 py-3 bg-black text-white rounded-lg shadow hover:opacity-80 transition"
        >
          View Projects
        </button>
        <button
          onClick={() => scrollTo("#contact")}
          className="cursor-pointer px-6 py-3 border rounded-lg hover:bg-gray-100 transition"
        >
          Contact Me
        </button>
      </div>

      {/* Scroll */}
      <div className="absolute bottom-10 flex flex-col items-center text-gray-400 text-sm cursor-pointer">
        <span>Scroll</span>
        <FaArrowDown className="mt-1 animate-bounce" />
      </div>
    </section>
  );
}
