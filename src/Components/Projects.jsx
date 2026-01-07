import ss from "../assets/ss.png";

function Projects() {
  const ProjectList = [
    {
      Title: "E-commerce",
      Description: "A comprehensive point-of-sale system for restaurants with real-time order management, inventory tracking, and analytics dashboard. Built with React, Node.js, and PostgreSQL.",
      Skills: ["React", "Tailwind"],
      Link: "https://www.google.com",
      img: ss,
    },
    {
      Title: "E-commerce",
      Description: "A modern e-commerce platform with clean UI and core shopping features.",
      Skills: ["React", "Tailwind"],
      Link: "https://www.google.com",
      img: ss,
    },
    {
      Title: "E-commerce",
      Description: "A modern e-commerce platform with clean UI and core shopping features.",
      Skills: ["React", "Tailwind"],
      Link: "https://www.google.com",
      img: ss,
    }
  ];

  return (
    <section className="relative py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4">
            Featured{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-teal-400">
              Projects
            </span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-teal-400 mx-auto rounded-full" />
          <p className="mt-6 text-cyan-200/70 text-lg max-w-2xl mx-auto">
            A deep dive into innovative solutions
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {ProjectList.map((project, index) => {
            return (
              <div
                key={index}
                className=" h-420px bg-white/5 backdrop-blur-lg border rounded-lg border-cyan-400/20 hover:border-cyan-400/50 hover:bg-white/10 hover:shadow-xl hover:shadow-cyan-500/20 transition-all duration-300 group cursor-pointer relative overflow-hidden"
              >
                {/* Image */}
                <div className="h-60 mb-6 overflow-hidden rounded-md">
                  <img
                    src={project.img}
                    alt={project.Title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>

                {/* Content */}
                <div className=" p-6 pt-0">
                <h3 className="text-lg font-bold text-white mb-2 group-hover:text-cyan-400">
                  {project.Title}
                </h3>

                <p className="text-cyan-200/70 text-sm mb-4">
                  {project.Description}
                </p>

                <div className="flex flex-wrap gap-2 mt-4">
                {project.Skills.map((skill, index) => (
                <span
                key={index}
                className="px-3 py-1 text-xs font-medium rounded-md
                 border border-cyan-400/60
                 bg-cyan-400/10 text-cyan-100
                 hover:bg-cyan-400/40 hover:border-cyan-300
                 transition-all duration-200 cursor-default"
                        >
                        {skill}
                        </span>
                    ))}
                    </div>


                <button className=" pt-5 flex items-center text-cyan-400 hover:text-cyan-300 transition-colors group/btn">
                  <span className="text-sm font-medium">Learn more > </span>
                </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default Projects;
