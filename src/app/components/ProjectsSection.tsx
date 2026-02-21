import { Github, ExternalLink } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

const projects = [
  {
    title: 'AI-Powered Chatbot',
    description: 'Built an intelligent chatbot using machine learning and natural language processing to provide contextual responses.',
    image: 'https://images.unsplash.com/photo-1675557009483-e6cf3867976b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtYWNoaW5lJTIwbGVhcm5pbmclMjBBSSUyMHRlY2hub2xvZ3l8ZW58MXx8fHwxNzcxNjU5NTkyfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    tags: ['Python', 'Machine Learning', 'NLP', 'FastAPI'],
    github: '#'
  },
  {
    title: 'Full-Stack Web Application',
    description: 'Developed a responsive web application with modern UI/UX, implementing RESTful APIs and real-time features.',
    image: 'https://images.unsplash.com/photo-1637937459053-c788742455be?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3ZWIlMjBkZXZlbG9wbWVudCUyMGNvZGUlMjBzY3JlZW58ZW58MXx8fHwxNzcxNTc3MTQ5fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    tags: ['React', 'TypeScript', 'Node.js', 'MongoDB'],
    github: '#'
  },
  {
    title: 'Mobile-First Dashboard',
    description: 'Created an analytics dashboard with data visualization and responsive design for seamless mobile experience.',
    image: 'https://images.unsplash.com/photo-1661246627162-feb0269e0c07?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2JpbGUlMjBhcHAlMjBpbnRlcmZhY2UlMjBkZXNpZ258ZW58MXx8fHwxNzcxNTk2NjY0fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    tags: ['React', 'Tailwind CSS', 'Charts', 'REST APIs'],
    github: '#'
  },
];

export function ProjectsSection() {
  return (
    <section id="projects" className="py-20 px-4">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
          Featured Projects
        </h2>
        <p className="text-center text-gray-400 mb-12">
          Showcasing my recent work and technical capabilities
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group rounded-xl bg-white/5 backdrop-blur-sm border border-white/10 overflow-hidden hover:border-white/20 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-blue-500/20"
            >
              {/* Project Image */}
              <div className="relative h-48 overflow-hidden bg-gradient-to-br from-blue-500/20 to-purple-500/20">
                <ImageWithFallback
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
              </div>

              {/* Project Content */}
              <div className="p-6 space-y-4">
                <h3 className="text-xl font-semibold">{project.title}</h3>
                <p className="text-sm text-gray-400 line-clamp-3">
                  {project.description}
                </p>

                {/* Tech Tags */}
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className="px-3 py-1 text-xs rounded-full bg-blue-500/10 text-blue-300 border border-blue-500/20"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* GitHub Button */}
                <div className="pt-4 border-t border-white/10">
                  <a
                    href={project.github}
                    className="flex items-center gap-2 text-sm text-gray-300 hover:text-white transition-colors group/link"
                  >
                    <Github size={18} />
                    <span>View on GitHub</span>
                    <ExternalLink size={14} className="opacity-0 group-hover/link:opacity-100 transition-opacity" />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
