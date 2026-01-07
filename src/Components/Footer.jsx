import * as LucideIcons from 'lucide-react';
import { Waves } from 'lucide-react';


function Footer () {

    const social = [
  {
    name: "LinkedIn",
    url: "https://www.linkedin.com/in/yourusername",
    icon: "Linkedin",
  },
  {
    name: "GitHub",
    url: "https://github.com/yourusername",
    icon: "Github",
  },
  {
    name: "Twitter",
    url: "https://twitter.com/yourusername",
    icon: "Twitter",
  },
  {
    name: "Instagram",
    url: "https://instagram.com/yourusername",
    icon: "Instagram",
  },
  {
    name: "Email",
    url: "mailto: asmitshukla0505@gmail.com",
    icon: "Mail",
  },
];


return(
    <footer className="relative bg-[#0a192f]/80 backdrop-blur-lg border-t border-cyan-400/20 mt-24">
    <div className="absolute bottom-0 left-0 right-0 h-24 overflow-hidden opacity-20">
        <div className="absolute bottom-0 left-0 w-32 h-32 bg-gradient-to-tr from-pink-400 to-orange-400 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-0 w-40 h-40 bg-gradient-to-tl from-purple-400 to-pink-400 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-1/3 w-24 h-24 bg-gradient-to-t from-teal-400 to-cyan-400 rounded-full blur-2xl" />
    </div>

    <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-3 gap-8 mb-20">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <Waves className="w-8 h-8 text-cyan-400" />
              <span className="text-2xl font-bold text-white">Asmit Shukla</span>
            </div>
            <p className="text-cyan-200/70 text-sm">
              Full Stack Developer crafting exceptional digital experiences from the surface to the deep.
            </p>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-3">Quick Links</h3>
            <div className="space-y-2">
              {['Home', 'About', 'Skills', 'Projects', 'Contact'].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item.toLowerCase())}
                  className="block text-cyan-200/70 hover:text-cyan-400 transition-colors text-sm"
                >
                  {item}
                </button>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4">Connect With Me</h3>
            <div className="flex flex-wrap gap-3">
              {social.map((link) => {
                const Icon = LucideIcons[link.icon] || LucideIcons.Link;
                return (
                  <a
                    key={link.name}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 bg-white/5 backdrop-blur-lg border border-cyan-400/20 hover:border-cyan-400 hover:bg-cyan-400/10 rounded-lg transition-all duration-300 group"
                    aria-label={link.name}
                  >
                    <Icon className="w-5 h-5 text-cyan-400 group-hover:scale-110 transition-transform" />
                  </a>
                );
              })}
            </div>
          </div>
        </div>
    
          </div>


    </footer>
)}

export default Footer;