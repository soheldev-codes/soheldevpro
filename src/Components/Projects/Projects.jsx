import React from "react";
import { FaGithub } from "react-icons/fa";
import { VscLiveShare } from "react-icons/vsc";

const projects = [
  {
    id: 1,
    title: "Appzone",
    desc: "AppZone is a modern app marketplace web application where users can explore trending apps, view detailed information, and install/uninstall apps easily. It also includes a dashboard to track app statistics like downloads, active users, and reviews.",
    image: "https://i.ibb.co.com/0RDK0vF7/Appzone.png",
    tech: ["React JS", "React-Router", "Tailwind CSS"],
    live: "https://appzonepro.netlify.app/",
    github: "https://github.com/soheldev-codes/AppZone",
  },
  {
    id: 2,
    title: "GitHub Issue Tracker",
    desc: "A modern and responsive Issue Tracker web application inspired by GitHub, where users can log in, browse issues, filter them based on status, and search efficiently.",
    image:
      "https://i.ibb.co.com/YFG9Fk7b/screencapture-soheldev-codes-github-io-Github-Issues-main-html-2026-03-20-16-30-36.png",
    tech: ["Html", "Tailwind CSS", "Javascript"],
    live: "https://soheldev-codes.github.io/Github_Issues/",
    github: "https://github.com/soheldev-codes/Github_Issues",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-20 px-6 max-w-7xl mx-auto">
      {/* Heading */}
      <div className="mb-12">
        <p className="text-sm tracking-widest text-gray-500 uppercase">
          Projects
        </p>
        <h2 className="text-4xl font-bold">
          Selected <span className="text-gray-400">work.</span>
        </h2>
      </div>

      {/* Grid */}
      <div className="grid md:grid-cols-2 gap-8">
        {projects.map((project) => (
          <div
            key={project.id}
            className="group border border-gray-300 rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition"
          >
            {/* Image Section */}
            <div className="h-56 overflow-hidden relative">
              <img
                src={project.image}
                alt={project.title}
                className="w-full object-cover transition-transform duration-[2000ms] ease-linear group-hover:-translate-y-[50%]"
              />
            </div>

            {/* Content */}
            <div className="p-6 border-t border-gray-300 space-y-4 flex flex-col">
              <h3 className="text-xl font-semibold">{project.title}</h3>
              <p className="text-gray-500 text-sm">{project.desc}</p>

              {/* Tech */}
              <div className="flex flex-wrap gap-2">
                {project.tech.map((t, i) => (
                  <span
                    key={i}
                    className="text-xs font-semibold px-3 py-1 bg-gray-100 rounded-full"
                  >
                    {t}
                  </span>
                ))}
              </div>

              {/* Buttons */}
              <div className="flex gap-4 pt-4 ">
                <button className="flex-1 border rounded-lg py-2 text-sm hover:bg-gray-100 transition">
                  <a
                    className="flex items-center justify-center font-semibold gap-2"
                    target="_blank"
                    href={project.github}
                  >
                    <FaGithub className="text-xl" />
                    Source Code
                  </a>
                </button>

                <button className="flex-1 bg-black text-white rounded-lg py-2 text-sm hover:bg-gray-800 transition ">
                  <a
                    className=" flex items-center justify-center font-semibold gap-2"
                    target="_blank"
                    href={project.live}
                  >
                    <VscLiveShare className="text-xl" />
                    Live Demo
                  </a>
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
