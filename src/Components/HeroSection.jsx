import hook from "../assets/hook.png"
import {motion} from "framer-motion"

const HeroSection = () => {
  return (
    <section
      id="home"
      className="relative z-10 flex flex-col items-center justify-center text-center text-white px-6 py-24 md:pt-0 min-h-screen"
    >
     <motion.img className="w-63 h-42" src={hook} 
     animate={{ y: [0, -15, 0] }}
  transition={{
    duration: 4,
    repeat: Infinity,
    ease: "easeInOut"}}/>
    
      <h1 className="mt-[-2.5rem] text-4xl sm:text-5xl lg:text-7xl font-bold text-white tracking-tight">
            Asmit Shukla
      </h1>

      
      <h2 className=" py-4 pt-6 text-2xl sm:text-3xl lg:text-4xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-teal-400">
              Full Stack Developer
      </h2>

      
      <p className="py-3 text-xl sm:text-2xl text-cyan-100/80 max-w-3xl mx-auto font-light">
        Building Scalable Solutions from The Surface to The Deep<br />
      </p>
      <p className="text-lg text-cyan-200/60 italic pb-7 pt-4">
          Diving deep into code, surfacing with solutions
          </p>

      
      <div className="flex flex-col md:flex-row gap-4">
        <button
              className="bg-gradient-to-r from-cyan-500 to-teal-500 px-10 hover:from-cyan-600 hover:to-teal-600 text-white px-8 py-3 text-lg rounded-lg shadow-lg shadow-cyan-500/50 transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-cyan-500/70"
            >
              Explore Projects
            </button>
          <button className="border-2 border-cyan-400/50 text-cyan-300 hover:bg-cyan-400/10 hover:border-cyan-400 px-8 py-3 text-lg rounded-lg backdrop-blur-sm transition-all duration-300 hover:scale-105">
              Download Resume
          </button>
      </div>
    </section>
  );
};

export default HeroSection;