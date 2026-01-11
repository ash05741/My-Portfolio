import About from "./Components/About.jsx";
import HeroSection from "./Components/HeroSection.jsx";
import Navbar from "./Components/Navbar.jsx";
import { motion } from "framer-motion";
import Skills from "./Components/Skills.jsx";
import Projects from "./Components/Projects.jsx";
import Footer from "./Components/Footer.jsx";

function App() {
  return (
    <div className="relative min-h-screen bg-black">
      
      {/* background */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        {/* gradient */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#0a192f] via-[#112240] to-[#1a365d]" />

        {/* lightrays */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-0 left-1/4 w-32 h-full bg-gradient-to-b from-cyan-400/30 to-transparent -skew-x-12 animate-pulse" />
          <div
            className="absolute top-0 left-2/4 w-24 h-full bg-gradient-to-b from-cyan-400/20 to-transparent skew-x-12 animate-pulse"
            style={{ animationDelay: "1s" }}
          />
          <div
            className="absolute top-0 left-3/4 w-28 h-full bg-gradient-to-b from-cyan-400/25 to-transparent -skew-x-12 animate-pulse"
            style={{ animationDelay: "2s" }}
          />
        </div>
      </div>

      <div className="relative z-10">
        <Navbar />
        <motion.div
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      <HeroSection />
    </motion.div>
    <About />
    <Skills />
    <Projects/>
    <Footer/>
      </div>

    </div>
  );
}

export default App;
