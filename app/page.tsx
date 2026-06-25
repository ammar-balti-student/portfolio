import { Mail, Code2, BookOpen } from "lucide-react";

export default function Portfolio() {
  return (
    <main className="min-h-screen bg-slate-950 text-slate-100 p-8 md:p-20">
      {/* Header/Hero Section */}
      <section className="max-w-4xl mx-auto mb-20">
        <h1 className="text-5xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-emerald-400 bg-clip-text text-transparent">
          Ammar Balti
        </h1>
        <p className="text-xl text-slate-400 mb-6">
          CS Student at Virtual University | Aspiring Software Developer
        </p>
        <div className="flex gap-4">
          {/* GitHub SVG Icon */}
          <a href="#" className="flex items-center gap-2 hover:text-blue-400 transition-colors">
            <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
              <path d="M9 18c-4.51 2-5-2-7-2" />
            </svg>
            GitHub
          </a>

          {/* LinkedIn SVG Icon */}
          <a href="#" className="flex items-center gap-2 hover:text-blue-400 transition-colors">
            <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
              <rect width="4" height="12" x="2" y="9" />
              <circle cx="4" cy="4" r="2" />
            </svg>
            LinkedIn
          </a>

          <a href="mailto:your-email@example.com" className="flex items-center gap-2 hover:text-blue-400 transition-colors">
            <Mail size={20} /> Contact
          </a>
        </div>
      </section>

      {/* About Section */}
      <section className="max-w-4xl mx-auto mb-20">
        <h2 className="text-2xl font-semibold mb-6 flex items-center gap-2">
          <BookOpen className="text-emerald-400" /> About Me
        </h2>
        <p className="text-slate-300 leading-relaxed">
          I am a Computer Science student at Virtual University with a passion for 
          building scalable software and creative digital experiences. My journey 
          involves exploring browser extension architecture, AI integration, 
          and UI/UX design. I love turning complex problems into clean, efficient code.
        </p>
      </section>

      {/* Projects Grid */}
      <section className="max-w-4xl mx-auto">
        <h2 className="text-2xl font-semibold mb-6 flex items-center gap-2">
          <Code2 className="text-blue-400" /> Projects
        </h2>
        <div className="grid md:grid-cols-2 gap-6">
          <ProjectCard 
            title="VU Ilmofy Extension" 
            desc="Browser extension for VU students to enhance the LMS experience." 
          />
          <ProjectCard 
            title="AI Terminal Tools" 
            desc="A CLI project built with Node.js to streamline development workflows." 
          />
        </div>
      </section>
    </main>
  );
}

function ProjectCard({ title, desc }: { title: string; desc: string }) {
  return (
    <div className="p-6 rounded-xl bg-slate-900 border border-slate-800 hover:border-blue-500 transition-all">
      <h3 className="text-lg font-bold mb-2 text-blue-300">{title}</h3>
      <p className="text-slate-400 text-sm">{desc}</p>
    </div>
  );
}