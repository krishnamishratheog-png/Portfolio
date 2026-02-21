import { Download, Sparkles, FolderOpen } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

export function HeroSection() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center px-4 pt-20">
      <div className="container mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-6">
            <div className="inline-block px-4 py-2 rounded-full bg-gradient-to-r from-blue-500/10 to-purple-500/10 border border-blue-500/20">
              <span className="text-sm text-blue-300">Available for Internship</span>
            </div>
            
            <div className="space-y-2">
              <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-blue-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent">
                Ekansh Mishra
              </h1>
              <p className="text-2xl md:text-3xl text-gray-300">
                AI & Software Developer
              </p>
              <p className="text-lg text-gray-400 max-w-xl">
                Building intelligent solutions with code
              </p>
            </div>

            <div className="flex flex-wrap gap-4">
              <button
                onClick={() => scrollToSection('projects')}
                className="px-6 py-3 rounded-lg bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 transition-all duration-300 flex items-center gap-2 shadow-lg shadow-blue-500/30"
              >
                <FolderOpen size={20} />
                View Projects
              </button>
              
              <button
                onClick={() => scrollToSection('resume')}
                className="px-6 py-3 rounded-lg bg-white/5 hover:bg-white/10 border border-white/10 backdrop-blur-sm transition-all duration-300 flex items-center gap-2"
              >
                <Download size={20} />
                Download Resume
              </button>
              
              <button
                onClick={() => scrollToSection('ai-chat')}
                className="px-6 py-3 rounded-lg bg-gradient-to-r from-cyan-500/20 to-blue-500/20 hover:from-cyan-500/30 hover:to-blue-500/30 border border-cyan-500/30 backdrop-blur-sm transition-all duration-300 flex items-center gap-2"
              >
                <Sparkles size={20} />
                Ask AI About Me
              </button>
            </div>
          </div>

          {/* Right Content - Profile Image */}
          <div className="flex justify-center">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full blur-2xl opacity-30 animate-pulse" />
              <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-white/10 bg-gradient-to-br from-blue-500/20 to-purple-500/20 backdrop-blur-sm">
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1752859951149-7d3fc700a7ec?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjB0ZWNoJTIwZGV2ZWxvcGVyJTIwcG9ydHJhaXR8ZW58MXx8fHwxNzcxNjU5NTkyfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                  alt="Ekansh Mishra"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
