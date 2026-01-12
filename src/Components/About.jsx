import { Code2, Rocket, Users } from "lucide-react";
import me from "../assets/me.jpg"

const About = () => {

  const highlights = [
    {
      icon: Code2,
      title: "5+ Years",
      description: "Professional Experience",
    },
    {
      icon: Rocket,
      title: "50+ Projects",
      description: "Successfully Delivered",
    },
    {
      icon: Users,
      title: "30+ Clients",
      description: "Worldwide",
    },
  ];

  return (
    <section id="about" className="relative py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        {/* Section title */}
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4">
            About{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-teal-400">
              Me
            </span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-teal-400 mx-auto rounded-full" />
        </div>

        {/* Content */}
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Image */}
          <div className="relative group">
            <div className="absolute -inset-1 bg-gradient-to-r from-cyan-400 to-teal-400 rounded-lg blur opacity-25 group-hover:opacity-50 transition duration-300" />
            <div className="relative">
              <img
                src={me}
                alt="Profile"
                className="w-full h-140 rounded-lg shadow-2xl"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0a192f]/60 to-transparent rounded-lg" />
            </div>
          </div>

          {/* Bio */}
          <div className="space-y-6">
            <div className="p-8 bg-white/5 backdrop-blur-lg border border-cyan-400/20 hover:border-cyan-400/40 transition-all duration-300 rounded-xl">
              <p className="text-cyan-100/90 text-lg leading-relaxed">
            Greetings, fellow ocean dweller! I’m a developer exploring the full stack of modern web development, from crafting clean, responsive frontends to understanding the depths of backend logic. 
            I enjoy diving into complex problems and surfacing with thoughtful, scalable solutions. This portfolio reflects my ongoing journey of learning, experimenting, and growing as a full-stack developer.
              </p>
            </div>

            {/* Highlights */}
            <div className="grid grid-cols-3 gap-4">
              {highlights.map((item, index) => {
                const Icon = item.icon;
                return (
                  <div
                    key={index}
                    className="p-4 bg-white/5 backdrop-blur-lg border border-cyan-400/20 hover:border-cyan-400/40 hover:bg-white/10 transition-all duration-300 text-center group cursor-pointer rounded-xl"
                  >
                    <Icon
                      className="w-8 h-8 text-cyan-400 mx-auto mb-2 group-hover:scale-110 transition-all duration-300"
                      strokeWidth={1.5}
                    />
                    <div className="text-2xl font-bold text-white mb-1">
                      {item.title}
                    </div>
                    <div className="text-xs text-cyan-200/60">
                      {item.description}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>

      {/* Decorative blob */}
      <div className="absolute bottom-0 left-0 w-32 h-32 opacity-20">
        <div className="w-full h-full bg-gradient-to-tr from-pink-400 to-orange-400 rounded-full blur-2xl" />
      </div>
    </section>
  );
};

export default About;
