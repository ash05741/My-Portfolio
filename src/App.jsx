import About from "./Components/About.jsx";
import HeroSection from "./Components/HeroSection.jsx";
import Navbar from "./Components/Navbar.jsx";
import { motion } from "framer-motion";
import Skills from "./Components/Skills.jsx";
import Projects from "./Components/Projects.jsx";
import Footer from "./Components/Footer.jsx";
import Background from "./Components/Background.jsx";

function App() {
  return (
    <div className="relative min-h-screen">
        <Background/>
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

  );
}

export default App;
