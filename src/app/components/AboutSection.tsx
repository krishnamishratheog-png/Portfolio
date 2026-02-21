import { GraduationCap, Target } from 'lucide-react';

export function AboutSection() {
  return (
    <section id="about" className="py-20 px-4">
      <div className="container mx-auto max-w-4xl">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
          About Me
        </h2>

        <div className="glass-card p-8 rounded-2xl bg-white/5 backdrop-blur-lg border border-white/10 shadow-xl">
          <p className="text-lg text-gray-300 mb-8 leading-relaxed">
            I'm a passionate BTech Computer Science student with a strong focus on Artificial Intelligence 
            and Software Development. I love transforming complex problems into elegant, efficient solutions 
            through code. My journey in tech is driven by curiosity and a commitment to continuous learning.
          </p>

          <div className="grid md:grid-cols-2 gap-6">
            {/* Education Card */}
            <div className="p-6 rounded-xl bg-gradient-to-br from-blue-500/10 to-purple-500/10 border border-blue-500/20">
              <div className="flex items-center gap-3 mb-3">
                <div className="p-2 rounded-lg bg-blue-500/20">
                  <GraduationCap className="text-blue-400" size={24} />
                </div>
                <h3 className="text-xl font-semibold">Education</h3>
              </div>
              <p className="text-gray-300">BTech in Computer Science</p>
              <p className="text-sm text-gray-400 mt-2">
                Building a strong foundation in computer science fundamentals, 
                algorithms, and cutting-edge AI technologies
              </p>
            </div>

            {/* Career Goal Card */}
            <div className="p-6 rounded-xl bg-gradient-to-br from-purple-500/10 to-cyan-500/10 border border-purple-500/20">
              <div className="flex items-center gap-3 mb-3">
                <div className="p-2 rounded-lg bg-purple-500/20">
                  <Target className="text-purple-400" size={24} />
                </div>
                <h3 className="text-xl font-semibold">Career Goal</h3>
              </div>
              <p className="text-gray-300">AI & Software Development</p>
              <p className="text-sm text-gray-400 mt-2">
                Seeking opportunities to work on innovative projects that leverage 
                AI and modern software engineering practices
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
