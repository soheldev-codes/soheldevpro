import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { scrollTo } from "../Utlis/scrollSmoth";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const navLinks = ["Home", "About", "Skills", "Projects", "Contact"];

  return (
    <nav className="fixed w-full top-0 left-0 z-50 backdrop-blur-md bg-white/70 border-b border-gray-300">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <h1 className="text-xl font-bold tracking-wider">SR.</h1>

        {/* Desktop Menu */}
        <ul className="hidden md:flex items-center gap-8">
          {navLinks.map((link, i) => (
            <li key={i} className="relative group cursor-pointer">
              <a
                onClick={() => scrollTo(`#${link.toLowerCase()}`)}
                // href={`#${link.toLowerCase()}`}
                className="text-gray-700 hover:text-black transition"
              >
                {link}
              </a>

              {/* Underline */}
              <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-black transition-all duration-300 group-hover:w-full"></span>
            </li>
          ))}
        </ul>

        {/* Mobile Button */}
        <div className="md:hidden">
          <button onClick={() => setOpen(!open)}>
            {open ? <FaTimes size={20} /> : <FaBars size={20} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden transition-all duration-300 overflow-hidden ${
          open ? "max-h-96" : "max-h-0"
        }`}
      >
        <ul className="flex flex-col items-center gap-6 py-6 bg-white border-t">
          {navLinks.map((link, i) => (
            <li key={i}>
              <a
                href={`#${link.toLowerCase()}`}
                onClick={() => setOpen(false)}
                className="text-gray-700 hover:text-black text-lg"
              >
                {link}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}
