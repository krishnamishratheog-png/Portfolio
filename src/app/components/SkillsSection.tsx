import { 
  Code2, 
  Database, 
  Brain, 
  GitBranch, 
  Layers,
  Zap,
  FileJson
} from 'lucide-react';

const skills = [
  {
    name: 'Python',
    icon: Code2,
    color: 'from-blue-400 to-blue-600',
    description: 'Core language for AI/ML'
  },
  {
    name: 'React',
    icon: Layers,
    color: 'from-cyan-400 to-cyan-600',
    description: 'Modern web development'
  },
  {
    name: 'TypeScript',
    icon: FileJson,
    color: 'from-blue-500 to-blue-700',
    description: 'Type-safe development'
  },
  {
    name: 'FastAPI',
    icon: Zap,
    color: 'from-green-400 to-green-600',
    description: 'High-performance APIs'
  },
  {
    name: 'Machine Learning',
    icon: Brain,
    color: 'from-purple-400 to-purple-600',
    description: 'AI model development'
  },
  {
    name: 'REST APIs',
    icon: Database,
    color: 'from-orange-400 to-orange-600',
    description: 'Backend integration'
  },
  {
    name: 'Git & GitHub',
    icon: GitBranch,
    color: 'from-gray-400 to-gray-600',
    description: 'Version control'
  },
];

export function SkillsSection() {
  return (
    <section id="skills" className="py-20 px-4">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
          Technical Skills
        </h2>
        <p className="text-center text-gray-400 mb-12">
          Technologies I work with to build modern solutions
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {skills.map((skill, index) => {
            const Icon = skill.icon;
            return (
              <div
                key={index}
                className="group p-6 rounded-xl bg-white/5 backdrop-blur-sm border border-white/10 hover:border-white/20 transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-blue-500/10"
              >
                <div className={`w-12 h-12 rounded-lg bg-gradient-to-br ${skill.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  <Icon size={24} className="text-white" />
                </div>
                <h3 className="text-lg font-semibold mb-2">{skill.name}</h3>
                <p className="text-sm text-gray-400">{skill.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
