import React from "react";

const Footer = () => {
  return (
    <footer className="border-t border-gray-200 bg-white/70 backdrop-blur">
      <div className="max-w-6xl mx-auto px-6 py-6 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-gray-500">
        <p className="text-center md:text-left">
          © {new Date().getFullYear()}
          <span className="font-semibold text-gray-800"> Sohel Rana</span>. All
          rights reserved.
        </p>

        <div className="flex items-center gap-2">
          <span>Built with</span>
          <span className="text-red-500 text-base">❤</span>
          <span className="font-medium text-gray-700">React.js</span>
          <span>&</span>
          <span className="font-medium text-gray-700">Tailwind CSS</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
