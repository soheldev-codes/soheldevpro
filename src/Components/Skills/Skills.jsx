import { FaCode, FaServer, FaTools } from "react-icons/fa";

export default function Skills() {
  return (
    <section id="skills" className="max-w-7xl mx-auto px-6 py-20">
      <p className="text-sm tracking-widest text-gray-500 mb-2">SKILLS</p>

      <h2 className="text-4xl font-bold mb-10">
        Technologies I <span className="text-gray-400">work with.</span>
      </h2>

      <div className="grid md:grid-cols-3 gap-6">
        {/* Frontend */}
        <div className="bg-blue-100/40 border border-blue-200 rounded-2xl p-6">
          <div className="flex items-center gap-3 mb-4">
            <FaCode />
            <h3 className="font-semibold">Frontend</h3>
          </div>

          <div className="flex flex-wrap gap-2">
            {[
              "HTML",
              "CSS",
              "JavaScript",
              "React",
              "Next.js",
              "Tailwind CSS",
              "TypeScript",
            ].map((skill, i) => (
              <span
                key={i}
                className="px-3 py-1 text-sm rounded-lg bg-white font-semibold"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>

        {/* Backend */}
        <div className="bg-green-100/40 border border-green-200 rounded-2xl p-6">
          <div className="flex items-center gap-3 mb-4">
            <FaServer />
            <h3 className="font-semibold">Backend</h3>
          </div>

          <div className="flex flex-wrap gap-2">
            {["Node.js", "Express.js", "MongoDB"].map((skill, i) => (
              <span
                key={i}
                className="px-3 py-1 text-sm rounded-lg bg-white font-semibold "
              >
                {skill}
              </span>
            ))}
          </div>
        </div>

        {/* DevOps */}
        <div className="bg-purple-100/40 border border-purple-200 rounded-2xl p-6">
          <div className="flex items-center gap-3 mb-4">
            <FaTools />
            <h3 className="font-semibold">DevOps & Tools</h3>
          </div>

          <div className="flex flex-wrap gap-2">
            {[
              "AWS (Basic)",
              "Firebase",
              "Git & GitHub",
              "AI Prompt Engineering",
            ].map((skill, i) => (
              <span
                key={i}
                className="px-3 py-1 text-sm rounded-lg bg-white font-semibold "
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
