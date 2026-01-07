import {Code, Globe, Palette, Server, Network, Database, SquareDashedBottomCode} from "lucide-react"

function Skills (){

    const skills = [
        {name: "HTML", level: 80, icon: Globe},
        {name: "CSS", level: 60, icon: Palette},
        {name: "JAVASCRIPT", level: 60, icon: Code},
        {name: "REACT", level: 70, icon: SquareDashedBottomCode},
        {name: "TAILWIND CSS", level: 70, icon: Globe},
        { name: "Node.js", level: 55, icon: Server },
        { name: "Express.js", level: 50, icon: Network },
        { name: "MongoDB", level: 50, icon: Database },

    ]

return(
    <section className="relative py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
                <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4">
                    Technical <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-teal-400">Skills</span>
                </h2>
                <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-teal-400 mx-auto rounded-full"/>
                <p className="mt-6 text-cyan-200/70 text-lg max-w-2xl mx-auto">
                A comprehensive toolkit for building modern web applications
                </p>
            </div>

            

            
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
  {skills.map((skill, index) => {
    const Icon = skill.icon;

    return (
      <div
        key={index}
        className="p-6 bg-white/5 backdrop-blur-lg border rounded-lg border-cyan-400/20 hover:border-cyan-400/50 hover:bg-white/10 transition-all duration-300 group cursor-pointer relative overflow-hidden"
      >
        {/* Hover gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-cyan-400/0 to-teal-400/0 group-hover:from-cyan-400/10 group-hover:to-teal-400/10 transition-all duration-300" />

        {/* Content */}
        <div className="relative z-10 text-center space-y-3">
          <div className="flex justify-center">
            <div className="p-3 rounded-lg bg-cyan-400/10 group-hover:bg-cyan-400/20 transition-colors">
              <Icon className="w-8 h-8 text-cyan-400 group-hover:scale-110 transition-transform" />
            </div>
          </div>

          <h3 className="text-white font-semibold text-lg">
            {skill.name}
          </h3>
        </div>
      </div>
    );
  })}
</div>
</div>

  </section>

 )

}
export default Skills;