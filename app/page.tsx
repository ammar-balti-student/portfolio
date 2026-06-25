import { Github, Linkedin, Mail, Code2, BookOpen } from "lucide-react";

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
          <a href="#" className="flex items-center gap-2 hover:text-blue-400 transition-colors">
            <Github size={20} /> GitHub
          </a>
          <a href="#" className="flex items-center gap-2 hover:text-blue-400 transition-colors">
            <Linkedin size={20} /> LinkedIn
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