import { FaMapMarkerAlt, FaBolt } from "react-icons/fa";
import { MdWork } from "react-icons/md";

export default function About() {
  return (
    <section id="about" className="py-20 px-6 bg-gray-50">
      <div className="max-w-7xl mx-auto grid md:grid-cols-12  gap-12 items-center">
        {/* Left Content */}
        <div className="md:col-span-6">
          <p className="text-sm tracking-widest text-gray-500 uppercase mb-4">
            About Me
          </p>

          <h2 className="text-3xl md:text-4xl font-bold leading-snug mb-6">
            Building the future,{" "}
            <span className="text-gray-500">one line at a time.</span>
          </h2>

          <p className="text-gray-600 mb-4">
            I'm Sohel Rana — a self-motivated Full Stack Developer with an
            unconventional path. I studied my Degree up to 2nd year before
            making a deliberate transition into the world of technology, driven
            by a deep passion for building things that make a difference.
          </p>

          <p className="text-gray-600 mb-4">
            What started as curiosity quickly became a mission. I've committed
            myself to continuous learning, mastering modern technologies from
            React and Next.js to Node.js, and cloud infrastructure. Every
            project I take on is an opportunity to solve real-world problems
            with clean, scalable code.
          </p>

          <p className="text-gray-600">
            believe great software isn't just functional — it's thoughtfully
            crafted. Whether it's a complex dashboard, an e-commerce platform,
            or a productivity tool, I bring the same level of dedication and
            attention to detail to everything I build.
          </p>
        </div>

        {/* Right Cards */}
        <div className="space-y-4 md:col-span-4">
          {/* Card 1 */}
          <div className="flex items-center gap-4 p-5 bg-white rounded-xl shadow-sm border border-gray-300">
            <div className="p-3 bg-gray-100 rounded-lg">
              <FaMapMarkerAlt />
            </div>
            <div>
              <p className="text-sm text-gray-500">Based In</p>
              <h4 className="font-semibold">Bangladesh</h4>
            </div>
          </div>

          {/* Card 2 */}
          <div className="flex items-center gap-4 p-5 bg-white rounded-xl shadow-sm border border-gray-300">
            <div className="p-3 bg-gray-100 rounded-lg">
              <MdWork />
            </div>
            <div>
              <p className="text-sm text-gray-500">Journey</p>
              <h4 className="font-semibold">Self-Taught</h4>
            </div>
          </div>

          {/* Card 3 */}
          <div className="flex items-center gap-4 p-5 bg-white rounded-xl shadow-sm border border-gray-300">
            <div className="p-3 bg-gray-100 rounded-lg">
              <FaBolt />
            </div>
            <div>
              <p className="text-sm text-gray-500">Expertise</p>
              <h4 className="font-semibold">Full Stack</h4>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
