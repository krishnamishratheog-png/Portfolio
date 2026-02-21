import { useState } from 'react';
import { Download, Eye, X, FileText } from 'lucide-react';

// ─── Resume Document (for in-page preview thumbnail only) ─────────────────────
function ResumeDocument() {
  return (
    <div
      style={{
        fontFamily: "'Arial','Helvetica',sans-serif",
        background: '#fff',
        color: '#1a1a1a',
        width: '794px',
        minHeight: '1123px',
        fontSize: '12px',
        lineHeight: '1.5',
        display: 'flex',
        flexDirection: 'column',
      }}
    >
      {/* Header */}
      <div style={{ background: 'linear-gradient(135deg,#0f2044,#1a3a6e)', color: '#fff', padding: '34px 48px 26px', textAlign: 'center' }}>
        <h1 style={{ fontSize: '30px', fontWeight: 800, letterSpacing: '3px', margin: '0 0 6px', textTransform: 'uppercase' }}>Ekansh Mishra</h1>
        <p style={{ fontSize: '12.5px', letterSpacing: '1px', margin: '0 0 12px', color: '#b0c4de' }}>
          Aspiring Software Developer &nbsp;•&nbsp; ML Enthusiast &nbsp;•&nbsp; Student Leader
        </p>
        <div style={{ fontSize: '11px', color: '#b0c4de', display: 'flex', justifyContent: 'center', gap: '18px', flexWrap: 'wrap' }}>
          <span>📍 Ujjain, MP</span>
          <span>✉ mishrakrishna893@gmail.com</span>
          <span>📱 +91 7527996150</span>
        </div>
      </div>

      {/* Body */}
      <div style={{ display: 'flex', flex: 1 }}>
        {/* LEFT */}
        <div style={{ width: '37%', background: '#f7f9fc', padding: '24px 20px', borderRight: '1px solid #dde2ee' }}>
          <Sec>Education</Sec>
          <LE title="Class X — PSEB" sub="Mata Mohan Dai Oswal Public School" tags={['PERFECT SCORE: 100%']} />
          <LE title="Class XII — PSEB (Sci.)" sub="Mata Mohan Dai Oswal Public School" tags={['May 2023 • Score: 80%', "Principal's List • Workshop Participant"]} />
          <LE title="BTech — Computer Science" sub="Currently Pursuing" tags={['AI & Software Development Focus']} />

          <Sec>Languages</Sec>
          <div style={{ marginBottom: 8 }}>
            <p style={{ fontWeight: 700, fontSize: 12, margin: '0 0 1px' }}>English, Hindi, Punjabi</p>
            <p style={{ color: '#555', fontSize: 11, margin: 0 }}>Proficiency: C2 (Mastery)</p>
          </div>
          <div style={{ marginBottom: 16 }}>
            <p style={{ fontWeight: 700, fontSize: 12, margin: '0 0 1px' }}>German</p>
            <p style={{ color: '#555', fontSize: 11, margin: 0 }}>Proficiency: B1 (Intermediate)</p>
          </div>

          <Sec>Certifications</Sec>
          {['C++ Programming — PW Skills', 'Java — PW Skills', 'Event Organizing & Hosting', 'International Event Organization'].map((c, i) => (
            <p key={i} style={{ margin: '0 0 5px', fontSize: 11, paddingLeft: 12, position: 'relative' }}>
              <span style={{ position: 'absolute', left: 0, color: '#1a3a6e' }}>›</span>{c}
            </p>
          ))}

          <div style={{ marginTop: 16 }}>
            <Sec>Career Goal</Sec>
            <p style={{ fontSize: 11, color: '#333', lineHeight: 1.6 }}>
              Seeking internship in <strong>Software Development</strong>, <strong>AI</strong>, or <strong>Machine Learning</strong>.
            </p>
          </div>
        </div>

        {/* RIGHT */}
        <div style={{ flex: 1, padding: '24px 28px' }}>
          <RSec>Technical Skills</RSec>
          <SkillCat label="Web Development">
            <SGrid items={['HTML', 'CSS', 'TypeScript', 'JavaScript', 'React', 'Node.js', 'MERN Stack', 'Google Cloud (GCP)']} />
          </SkillCat>
          <SkillCat label="Programming & AI / ML">
            <SGrid items={['Python', 'C++', 'Java', 'Machine Learning', 'Deep Learning', 'Neural Networks', 'LLM', 'NLP']} />
          </SkillCat>

          <RSec>Projects</RSec>
          <Proj title="AI Portfolio Website with AI Chat" tech="React • TypeScript • FastAPI • OpenRouter (Mistral 7B)"
            desc="Dynamic portfolio with AI assistant answering questions based on resume data. Real-time chat UI and PDF resume download." />
          <Proj title="Full-Stack Web Applications (MERN)" tech="MongoDB • Express • React • Node.js"
            desc="Production-ready full-stack apps with REST APIs and responsive UI demonstrating end-to-end development." />
          <Proj title="Machine Learning Projects" tech="Python • TensorFlow • scikit-learn • NLP"
            desc="Classification, neural networks, and NLP models showcasing depth in AI/ML concepts and practical implementation." />

          <RSec>Achievements & Leadership</RSec>
          <ACat label="Academic Excellence">
            {['School Rank #1 — 10 Times', 'Best Student Award', 'Science Competition Award', '15+ Academic & Sports Awards'].map((a, i) => <AI key={i}>{a}</AI>)}
          </ACat>
          <ACat label="Leadership">
            {['President, Student Council — 2 Terms', 'International Event Organizer', 'Captain, School Band Team'].map((a, i) => <AI key={i}>{a}</AI>)}
          </ACat>
          <ACat label="Sports">
            {['Best Athlete Award', 'State Level Basketball Player', 'State Level Athlete — Sprint & Jump'].map((a, i) => <AI key={i}>{a}</AI>)}
          </ACat>
        </div>
      </div>

      {/* Footer */}
      <div style={{ borderTop: '2px solid #1a3a6e', padding: '8px 48px', textAlign: 'center' }}>
        <p style={{ fontSize: '10px', color: '#888', margin: 0, fontStyle: 'italic' }}>Driven by curiosity. Defined by results.</p>
      </div>
    </div>
  );
}

const Sec = ({ children }: { children: React.ReactNode }) => (
  <h3 style={{ fontSize: 10.5, fontWeight: 800, letterSpacing: '1.5px', textTransform: 'uppercase', color: '#1a3a6e', borderBottom: '1.5px solid #1a3a6e', paddingBottom: 3, marginBottom: 10, marginTop: 0 }}>{children}</h3>
);
const RSec = ({ children }: { children: React.ReactNode }) => (
  <h3 style={{ fontSize: 11, fontWeight: 800, letterSpacing: '1.5px', textTransform: 'uppercase', color: '#1a3a6e', borderBottom: '1.5px solid #1a3a6e', paddingBottom: 3, marginBottom: 12, marginTop: 0 }}>{children}</h3>
);
const LE = ({ title, sub, tags }: { title: string; sub: string; tags: string[] }) => (
  <div style={{ marginBottom: 12 }}>
    <p style={{ fontWeight: 700, fontSize: 11.5, color: '#1a3a6e', margin: '0 0 1px' }}>{title}</p>
    <p style={{ fontSize: 10.5, color: '#444', margin: '0 0 2px', fontStyle: 'italic' }}>{sub}</p>
    {tags.map((t, i) => <p key={i} style={{ fontSize: 10, color: '#555', margin: 0 }}>{t}</p>)}
  </div>
);
const SkillCat = ({ label, children }: { label: string; children: React.ReactNode }) => (
  <div style={{ marginBottom: 12 }}>
    <p style={{ fontSize: 11, fontWeight: 700, color: '#1a3a6e', margin: '0 0 5px' }}>{label}</p>
    {children}
  </div>
);
const SGrid = ({ items }: { items: string[] }) => (
  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 3 }}>
    {items.map((item, i) => (
      <div key={i} style={{ background: '#eef1f8', borderRadius: 3, padding: '3px 6px', fontSize: 11, textAlign: 'center', color: '#1a2a4a', fontWeight: 500 }}>{item}</div>
    ))}
  </div>
);
const Proj = ({ title, tech, desc }: { title: string; tech: string; desc: string }) => (
  <div style={{ marginBottom: 11, paddingLeft: 10, borderLeft: '2px solid #1a3a6e' }}>
    <p style={{ fontWeight: 700, fontSize: 11.5, color: '#1a1a1a', margin: '0 0 2px' }}>{title}</p>
    <p style={{ fontSize: 10.5, color: '#1a3a6e', margin: '0 0 2px', fontWeight: 600 }}>{tech}</p>
    <p style={{ fontSize: 11, color: '#444', margin: 0 }}>{desc}</p>
  </div>
);
const ACat = ({ label, children }: { label: string; children: React.ReactNode }) => (
  <div style={{ marginBottom: 9 }}>
    <p style={{ fontSize: 11, fontWeight: 700, color: '#1a3a6e', margin: '0 0 4px' }}>{label}</p>
    {children}
  </div>
);
const AI = ({ children }: { children: React.ReactNode }) => (
  <p style={{ margin: '0 0 3px', fontSize: 11, paddingLeft: 12, position: 'relative', color: '#222' }}>
    <span style={{ position: 'absolute', left: 0, color: '#1a3a6e', fontWeight: 700 }}>›</span>
    {children}
  </p>
);

// ─── Main Export ─────────────────────────────────────────────────────────────
export function ResumeSection() {
  const [showPreview, setShowPreview] = useState(false);

  const SCALE = 0.453;
  const THUMB_W = Math.round(794 * SCALE); // ≈ 360
  const THUMB_H = Math.round(1123 * SCALE); // ≈ 509

  return (
    <section id="resume" className="py-20 px-4">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
          Resume
        </h2>
        <p className="text-center text-gray-400 mb-12">Preview and download my professional resume</p>

        <div className="rounded-2xl bg-white/5 backdrop-blur-lg border border-white/10 p-8 shadow-xl">
          <div className="flex flex-col lg:flex-row items-center gap-10">

            {/* ── Thumbnail ── */}
            <div className="flex-shrink-0">
              <div
                style={{ width: THUMB_W, height: THUMB_H }}
                className="relative rounded-xl overflow-hidden border border-white/20 shadow-2xl cursor-pointer group"
                onClick={() => setShowPreview(true)}
              >
                <div style={{ transform: `scale(${SCALE})`, transformOrigin: 'top left', width: 794, pointerEvents: 'none' }}>
                  <ResumeDocument />
                </div>
                <div className="absolute inset-0 bg-blue-950/70 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center gap-2">
                  <Eye size={32} className="text-white" />
                  <span className="text-white font-semibold text-sm">Click to Preview</span>
                </div>
              </div>
            </div>

            {/* ── Info + Buttons ── */}
            <div className="flex-1 w-full space-y-6">
              <div>
                <h3 className="text-2xl font-bold mb-3">Ekansh Mishra</h3>
                <p className="text-blue-400 font-medium mb-4">BTech CS Student · Software Developer · ML Enthusiast</p>
                <p className="text-gray-400 text-sm leading-relaxed">
                  A comprehensive overview of my education, technical skills, projects, and achievements — ready for Software Development and AI/ML internship applications.
                </p>
              </div>

              {/* Highlights */}
              <div className="grid grid-cols-2 gap-3">
                {[
                  { label: 'Python, React, TypeScript', icon: '💻' },
                  { label: 'Machine Learning & NLP', icon: '🤖' },
                  { label: 'School Rank #1 — 10 Times', icon: '🏆' },
                  { label: 'Student Council President', icon: '🎓' },
                ].map((h, i) => (
                  <div key={i} className="flex items-center gap-2 text-sm text-gray-300 bg-white/5 rounded-lg px-3 py-2 border border-white/10">
                    <span>{h.icon}</span>
                    <span>{h.label}</span>
                  </div>
                ))}
              </div>

              {/* Buttons — plain <a> tags, no JS needed */}
              <div className="space-y-3 pt-2">
                <a
                  href="/resume.pdf"
                  download="Ekansh_Mishra_Resume.pdf"
                  className="w-full px-6 py-4 rounded-xl bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center gap-3 shadow-lg shadow-blue-500/30 font-semibold text-white no-underline"
                >
                  <Download size={20} />
                  <span>Download Resume (PDF)</span>
                </a>

                <a
                  href="/resume.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full px-6 py-4 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 hover:border-blue-500/40 transition-all duration-300 flex items-center justify-center gap-3 font-semibold text-white no-underline"
                >
                  <Eye size={20} />
                  <span>Full Preview</span>
                </a>
              </div>

              <div className="flex items-center gap-2 pt-2 border-t border-white/10">
                <FileText size={14} className="text-gray-500" />
                <p className="text-xs text-gray-500">Last updated: February 2026 &nbsp;·&nbsp; PDF format</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ── In-page Preview Modal ──────────────────────────────────────────── */}
      {showPreview && (
        <div
          className="fixed inset-0 z-50 bg-black/85 backdrop-blur-md flex items-start justify-center py-8 px-4 overflow-y-auto"
          onClick={(e) => e.target === e.currentTarget && setShowPreview(false)}
        >
          <div className="w-full max-w-[820px]">
            {/* Toolbar */}
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-white font-semibold text-lg">Resume Preview</h3>
              <div className="flex items-center gap-3">
                <a
                  href="/resume.pdf"
                  download="Ekansh_Mishra_Resume.pdf"
                  className="flex items-center gap-2 px-4 py-2 rounded-lg bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white text-sm font-semibold transition-all no-underline"
                >
                  <Download size={15} />
                  <span>Download PDF</span>
                </a>
                <button
                  onClick={() => setShowPreview(false)}
                  className="p-2 rounded-lg bg-white/10 hover:bg-white/20 text-white transition-all"
                >
                  <X size={20} />
                </button>
              </div>
            </div>
            {/* Render the resume page inside the modal */}
            <div className="rounded-xl overflow-hidden shadow-2xl overflow-x-auto">
              <ResumeDocument />
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
