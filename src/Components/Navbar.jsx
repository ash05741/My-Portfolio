// Navbar.jsx
import { useState } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed w-full z-50 px-6 py-4 text-white
                bg-slate-900/40 backdrop-blur-md
                shadow-lg shadow-white/10
                border-b border-white/10">
      <div className="flex justify-between items-center">
        
        <div className="text-left md:pl-35 text-2xl font-bold tracking-wide ">
          MyPortfolio
        </div>

        
        <div className="hidden md:flex space-x-13 pr-35 pt-2">
          <a href="#home" className="text-cyan-100/80 hover:text-cyan-500 transition-all duration-300 ease-out">Home</a>
          <a href="#about" className="text-cyan-100/80 hover:text-cyan-500 transition-all duration-300 ease-out">About</a>
          <a href="#skills" className="text-cyan-100/80 hover:text-cyan-500 transition-all duration-300 ease-out">Skills</a>
          <a href="#projects" className="text-cyan-100/80 hover:text-cyan-500 transition-all duration-300 ease-out">Projects</a>
          <a href="#contact" className="text-cyan-100/80 hover:text-cyan-500 transition-all duration-300 ease-out">Contact</a>
        </div>
        

        
        <button
          className="md:hidden focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? (
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          )}
        </button>
      </div>

      
      {isOpen && (
        <div className="md:hidden mt-4 space-y-2">
          <a href="#home" className="block hover:text-cyan-500 transition-all duration-300 ease-out">Home</a>
          <a href="#about" className="block hover:text-cyan-500 transition-all duration-300 ease-out">About</a>
          <a href="#projects" className="block hover:text-cyan-500 transition-all duration-300 ease-out">Projects</a>
          <a href="#contact" className="block hover:text-cyan-500 transition-all duration-300 ease-out">Contact</a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;