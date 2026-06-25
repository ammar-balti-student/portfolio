import { Mail, Code2, BookOpen, GraduationCap, MapPin, Phone, User, ExternalLink } from "lucide-react";

export default function Portfolio() {
  return (
    <main className="min-h-screen bg-slate-950 text-slate-100 selection:bg-blue-500 selection:text-white antialiased">
      
      {/* Hero / Introduction Section */}
      <section className="relative overflow-hidden border-b border-slate-900 bg-gradient-to-b from-slate-900/50 to-slate-950 px-6 py-16 md:py-28">
        {/* Subtle background glow animations */}
        <div className="absolute top-0 left-1/4 -z-10 h-72 w-72 animate-pulse rounded-full bg-blue-500/10 blur-[100px]" />
        <div className="absolute bottom-0 right-1/4 -z-10 h-72 w-72 animate-pulse rounded-full bg-emerald-500/10 blur-[100px]" />

        <div className="mx-auto flex max-w-5xl flex-col items-center gap-8 md:flex-row md:gap-12">
          {/* Profile Image with Animated Gradient Border */}
          <div className="relative group h-44 w-44 shrink-0 animate-fade-in">
            <div className="absolute -inset-1 rounded-full bg-gradient-to-r from-blue-500 to-emerald-400 opacity-75 blur transition duration-500 group-hover:opacity-100 group-hover:duration-200" />
            <div className="relative h-44 w-44 overflow-hidden rounded-full border-2 border-slate-950 bg-slate-900">
              <img 
                src="/face.jpg" 
                alt="Ammar Balti" 
                className="h-full w-full object-cover transition duration-500 group-hover:scale-110"
              />
            </div>
          </div>

          {/* Bio text */}
          <div className="text-center md:text-left">
            <div className="inline-flex items-center gap-2 rounded-full bg-blue-500/10 px-3 py-1 text-xs font-medium text-blue-400 ring-1 ring-inset ring-blue-500/20 mb-4">
              <User size={12} /> @RinChan
            </div>
            <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl md:text-6xl bg-gradient-to-r from-white via-slate-200 to-slate-400 bg-clip-text text-transparent">
              Ammar Balti
            </h1>
            <p className="mt-3 text-xl font-medium bg-gradient-to-r from-blue-400 to-emerald-400 bg-clip-text text-transparent">
              BSCS Student at Virtual University (2nd Semester)
            </p>
            <p className="mt-4 flex items-center justify-center gap-2 text-sm text-slate-400 md:justify-start">
              <MapPin size={16} className="text-emerald-400" />
              Barah Paeen Khaplu District Ganche Gilgit Baltistan Pakistan
            </p>
            
            {/* Quick Contact Badges */}
            <div className="mt-6 flex flex-wrap justify-center gap-4 md:justify-start">
              <a href="https://github.com/ammar-balti-student/portfolio" target="_blank" rel="noreferrer" className="flex items-center gap-2 rounded-lg bg-slate-900 px-4 py-2 text-sm font-medium border border-slate-800 hover:border-slate-700 hover:bg-slate-800/50 transition-all duration-300">
                <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" /><path d="M9 18c-4.51 2-5-2-7-2" /></svg>
                GitHub
              </a>
              <a href="https://www.linkedin.com/in/ammar-balti-6608913b4/" target="_blank" rel="noreferrer" className="flex items-center gap-2 rounded-lg bg-slate-900 px-4 py-2 text-sm font-medium border border-slate-800 hover:border-slate-700 hover:bg-slate-800/50 transition-all duration-300">
                <svg className="h-4 w-4 text-blue-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" /><rect width="4" height="12" x="2" y="9" /><circle cx="4" cy="4" r="2" /></svg>
                LinkedIn
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Education Timeline Section */}
      <section className="mx-auto max-w-5xl px-6 py-20">
        <h2 className="text-3xl font-bold tracking-tight mb-12 flex items-center gap-3">
          <GraduationCap className="text-blue-400 h-8 w-8" /> Academic & Islamic Journey
        </h2>

        <div className="grid gap-12 md:grid-cols-2">
          
          {/* Column 1: Contemporary Education */}
          <div className="space-y-6">
            <h3 className="text-xl font-bold text-slate-200 border-l-2 border-blue-500 pl-3 mb-6">
              Contemporary Education
            </h3>
            
            <EducationCard 
              imgSrc="/vu.jpg" 
              school="Virtual University Pakistan" 
              level="BSCS (Bachelor of Computer Science)" 
              details="Currently in 2nd Semester - Building foundational computing systems and modern development architectures."
              badge="Present"
            />
            <EducationCard 
              imgSrc="/jbs.jpg" 
              school="Jamia Baitussalam Talagang" 
              level="A-Levels" 
              details="Advanced academic training focused on scientific and logical problem solving."
            />
            <EducationCard 
              imgSrc="/kps.jpg" 
              school="Khaplu Public School & College (KPS&C)" 
              level="Matriculation" 
              details="Core science fundamentals and computational basics."
            />
            <EducationCard 
              imgSrc="/mid.jpg" 
              school="Khaplu Model School Training" 
              level="Middle School" 
              details="Early academic development and mathematical foundations."
            />
            <EducationCard 
              imgSrc="/iqra.jpg" 
              school="Iqra Huffaz Secondary School" 
              level="Primary School" 
              details="Initial foundations of basic sciences and literacy."
            />
          </div>

          {/* Column 2: Islamic Education */}
          <div className="space-y-6">
            <h3 className="text-xl font-bold text-slate-200 border-l-2 border-emerald-400 pl-3 mb-6">
              Islamic Education
            </h3>

            <EducationCard 
              imgSrc="/jbs.jpg" 
              school="Jamia Baitussalam Talagang" 
              level="Darse Nizaami" 
              details="Comprehensive higher study of traditional Islamic sciences, linguistics, philosophy, and jurisprudence."
            />
            <EducationCard 
              imgSrc="/iqra.jpg" 
              school="Iqra Rauza tul Atfaal" 
              level="Hifz e Quran" 
              details="Complete memorization of the Holy Quran along with accurate Tajweed articulation principles."
            />

            {/* Extra Engineering/Project Highlight Box */}
            <div className="rounded-2xl border border-slate-900 bg-slate-900/40 p-6 backdrop-blur-sm mt-8">
              <h4 className="text-md font-bold text-blue-400 flex items-center gap-2 mb-2">
                <Code2 size={18} /> Engineering Philosophy
              </h4>
              <p className="text-sm text-slate-400 leading-relaxed">
                Combining rigorous logic from computer science with the structured discipline of linguistic and traditional studies to code elegant, functional systems.
              </p>
            </div>
          </div>
          
        </div>
      </section>

      {/* Modern Contact / Footer Section */}
      <section className="border-t border-slate-900 bg-slate-950 px-6 py-16">
        <div className="mx-auto max-w-5xl text-center">
          <h2 className="text-2xl font-bold text-slate-100 mb-2">Let's Connect & Collaborate</h2>
          <p className="text-slate-400 text-sm mb-8 max-w-md mx-auto">
            Available for software projects, tool customization, and academic collaborations.
          </p>

          <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3 max-w-3xl mx-auto text-left">
            <a href="mailto:ahbarahvi786@gmail.com" className="flex items-center gap-4 rounded-xl border border-slate-900 bg-slate-900/30 p-4 hover:bg-slate-900/70 hover:border-blue-500/50 transition-all duration-300">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-blue-500/10 text-blue-400"><Mail size={20} /></div>
              <div><p className="text-xs text-slate-500">Email Address</p><p className="text-sm font-semibold text-slate-200 truncate">ahbarahvi786@gmail.com</p></div>
            </a>
            
            <a href="https://wa.me/923231505080" target="_blank" rel="noreferrer" className="flex items-center gap-4 rounded-xl border border-slate-900 bg-slate-900/30 p-4 hover:bg-slate-900/70 hover:border-emerald-500/50 transition-all duration-300">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-emerald-500/10 text-emerald-400">
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24"><path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397.01 12.008.01c3.202.001 6.212 1.246 8.477 3.514 2.266 2.268 3.507 5.28 3.505 8.484-.004 6.657-5.34 11.997-11.953 11.997-2.005-.001-3.973-.502-5.713-1.453L0 24zm6.59-4.846c1.666.988 3.311 1.485 5.351 1.486 5.579 0 10.121-4.511 10.124-10.059.002-2.686-1.037-5.207-2.93-7.104C17.25 1.558 14.735.516 12.01.516c-5.586 0-10.13 4.513-10.133 10.06-.001 2.01.504 3.737 1.465 5.396L2.344 21.6l5.7-1.498z"/></svg>
              </div>
              <div><p className="text-xs text-slate-500">Call / WhatsApp</p><p className="text-sm font-semibold text-slate-200">03231505080</p></div>
            </a>

            <a href="https://www.facebook.com/ahbbalti" target="_blank" rel="noreferrer" className="flex items-center gap-4 rounded-xl border border-slate-900 bg-slate-900/30 p-4 hover:bg-slate-900/70 hover:border-blue-600/50 transition-all duration-300 sm:col-span-2 md:col-span-1">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-blue-600/10 text-blue-500">
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24"><path d="M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 4.84 3.44 8.87 8 9.8V15H8v-3h2V9.5C10 7.57 11.57 6 13.5 6H16v3h-2c-.55 0-1 .45-1 1v2h3v3h-3v6.95c4.56-.93 8-4.96 8-9.75z"/></svg>
              </div>
              <div><p className="text-xs text-slate-500">Facebook Profile</p><p className="text-sm font-semibold text-slate-200">@ahbbalti</p></div>
            </a>
          </div>

          <p className="mt-16 text-xs text-slate-600 tracking-wider font-mono">
            &copy; 2026 AMMAR BALTI. DESIGNED WITH NEXT.JS & TAILWIND.
          </p>
        </div>
      </section>

    </main>
  );
}

interface CardProps {
  imgSrc: string;
  school: string;
  level: string;
  details: string;
  badge?: string;
}

function EducationCard({ imgSrc, school, level, details, badge }: CardProps) {
  return (
    <div className="group relative flex gap-4 rounded-2xl border border-slate-900 bg-slate-900/20 p-5 transition-all duration-300 hover:bg-slate-900/50 hover:border-slate-800 hover:translate-x-1">
      {/* Institution Image Container with Hover Scale */}
      <div className="h-14 w-14 shrink-0 overflow-hidden rounded-xl border border-slate-800 bg-slate-950">
        <img 
          src={imgSrc} 
          alt={school} 
          className="h-full w-full object-cover transition duration-300 group-hover:scale-110" 
        />
      </div>
      
      {/* Content */}
      <div className="flex-1">
        <div className="flex items-start justify-between gap-2">
          <h4 className="text-base font-bold text-slate-200 transition duration-300 group-hover:text-blue-400">{school}</h4>
          {badge && (
            <span className="inline-flex items-center rounded-md bg-blue-500/10 px-2 py-0.5 text-xs font-medium text-blue-400 ring-1 ring-inset ring-blue-500/30 shrink-0">
              {badge}
            </span>
          )}
        </div>
        <p className="text-sm font-medium text-slate-400 mt-0.5">{level}</p>
        <p className="text-xs text-slate-500 mt-2 leading-relaxed">{details}</p>
      </div>
    </div>
  );
}