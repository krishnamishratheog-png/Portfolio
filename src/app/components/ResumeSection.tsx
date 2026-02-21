import { Download, FileText, Eye } from 'lucide-react';

export function ResumeSection() {
  return (
    <section id="resume" className="py-20 px-4">
      <div className="container mx-auto max-w-4xl">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
          Resume
        </h2>

        <div className="rounded-2xl bg-white/5 backdrop-blur-lg border border-white/10 p-8 shadow-xl">
          <div className="flex flex-col md:flex-row items-center gap-8">
            {/* Resume Preview */}
            <div className="flex-1 w-full">
              <div className="aspect-[8.5/11] rounded-lg bg-gradient-to-br from-blue-500/10 to-purple-500/10 border border-white/10 flex flex-col items-center justify-center p-8">
                <FileText size={80} className="text-blue-400 mb-4" />
                <h3 className="text-xl font-semibold mb-2">Ekansh Mishra</h3>
                <p className="text-sm text-gray-400 text-center mb-4">
                  AI & Software Developer Resume
                </p>
                <div className="space-y-2 text-sm text-gray-400 text-center">
                  <p>• BTech Computer Science</p>
                  <p>• Python, React, TypeScript</p>
                  <p>• Machine Learning & AI</p>
                  <p>• Full-Stack Development</p>
                </div>
              </div>
            </div>

            {/* Resume Info & Actions */}
            <div className="flex-1 w-full space-y-6">
              <div>
                <h3 className="text-2xl font-semibold mb-3">Download My Resume</h3>
                <p className="text-gray-400 mb-6">
                  Get a comprehensive overview of my education, technical skills, projects, 
                  and experience. Perfect for internship applications and opportunities.
                </p>
              </div>

              <div className="space-y-3">
                <button className="w-full px-6 py-4 rounded-lg bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 transition-all duration-300 flex items-center justify-center gap-3 shadow-lg shadow-blue-500/30">
                  <Download size={20} />
                  <span>Download Resume (PDF)</span>
                </button>

                <button className="w-full px-6 py-4 rounded-lg bg-white/5 hover:bg-white/10 border border-white/10 transition-all duration-300 flex items-center justify-center gap-3">
                  <Eye size={20} />
                  <span>Preview Resume</span>
                </button>
              </div>

              <div className="pt-6 border-t border-white/10">
                <p className="text-sm text-gray-400">
                  📄 Last updated: February 2026
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
