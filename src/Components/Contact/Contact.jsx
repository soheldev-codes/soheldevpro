import {
  FaEnvelope,
  FaWhatsapp,
  FaPaperPlane,
  FaGithub,
  FaLinkedin,
} from "react-icons/fa";

export default function Contact() {
  return (
    <section id="contact" className="max-w-7xl mx-auto px-6 py-20">
      <p className="text-sm tracking-widest text-gray-500 mb-2">CONTACT</p>

      <h2 className="text-4xl font-bold mb-6">
        Let's work <span className="text-gray-400">together.</span>
      </h2>

      <div className="grid md:grid-cols-2 gap-10 items-start">
        {/* Left */}
        <div>
          <p className="text-gray-500 mb-6 leading-relaxed">
            Have a project in mind or want to discuss an opportunity? I'd love
            to hear from you. Let's create something amazing together.
          </p>

          {/* Email */}
          <div className="flex items-center justify-between border border-gray-300 rounded-xl p-4 mb-4 hover:shadow-md transition">
            <div className="flex items-center gap-3">
              <FaEnvelope className="text-xl text-gray-600" />
              <div>
                <p className="text-xs text-gray-400">EMAIL</p>
                <p className="font-medium">soheldev.codes@gmail.com</p>
              </div>
            </div>
          </div>

          {/* WhatsApp */}
          <div className="flex items-center justify-between border border-gray-300 rounded-xl p-4 mb-6 hover:shadow-md transition">
            <div className="flex items-center gap-3">
              <FaWhatsapp className="text-xl text-green-500" />
              <div>
                <p className="text-xs text-gray-400">WHATSAPP</p>
                <p className="font-medium">+8801619-851880</p>
              </div>
            </div>
          </div>

          {/* Social */}
          <p className="text-sm text-gray-400 mb-2">FIND ME ON</p>
          <div className="flex gap-3">
            <a className="p-3 border border-gray-300 cursor-pointer rounded-lg hover:bg-gray-100 ">
              <FaGithub />
            </a>
            <a className="p-3 border border-gray-300 cursor-pointer rounded-lg hover:bg-gray-100 ">
              <FaLinkedin />
            </a>
          </div>
        </div>

        {/* Right Form */}
        <div className="border border-gray-300 rounded-2xl p-6 shadow-sm">
          <div className="grid grid-cols-2 gap-4 mb-4">
            <input
              type="text"
              placeholder="Your name"
              className="border border-gray-300 rounded-lg p-3 outline-none  w-full"
            />
            <input
              type="email"
              placeholder="you@example.com"
              className="border border-gray-300 rounded-lg p-3 outline-none  w-full"
            />
          </div>

          <textarea
            rows="5"
            placeholder="Tell me about your project or opportunity..."
            className="border border-gray-300 rounded-lg p-3 w-full mb-4 outline-none "
          />

          <button className="w-full cursor-pointer bg-black text-white py-3 rounded-xl flex items-center justify-center gap-2 hover:opacity-90 transition">
            <FaPaperPlane /> Send Message
          </button>
        </div>
      </div>
    </section>
  );
}
