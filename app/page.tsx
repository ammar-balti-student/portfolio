"use client";
import { useState, useEffect, useRef } from "react";
import { Mail, Phone, MapPin, ChevronDown, BookOpen, GraduationCap, Code2, Moon } from "lucide-react";

// Fixed: Added className support to the TypeScript type and the SVG element
function FacebookIcon({ size = 20, className }: { size?: number; className?: string }) {
  return (
    <svg 
      width={size} 
      height={size} 
      viewBox="0 0 24 24" 
      fill="none" 
      stroke="currentColor" 
      strokeWidth="2" 
      strokeLinecap="round" 
      strokeLinejoin="round"
      className={className}
    >
      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
    </svg>
  );
}

// ─── Stable star data (generated once, client-only) ──────────────
function useStars(count: number) {
  const [stars, setStars] = useState<Array<React.CSSProperties>>([]);
  useEffect(() => {
    setStars(
      Array.from({ length: count }, () => ({
        width: `${Math.random() * 2 + 1}px`,
        height: `${Math.random() * 2 + 1}px`,
        left: `${Math.random() * 100}%`,
        top: `${Math.random() * 100}%`,
        "--d": `${2 + Math.random() * 4}s`,
        animationDelay: `${Math.random() * 4}s`,
      } as React.CSSProperties))
    );
  }, [count]);
  return stars;
}

// ─── Animation hook ───────────────────────────────────────────────
function useInView(threshold = 0.15) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) setVisible(true); }, { threshold });
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, [threshold]);
  return { ref, visible };
}

// ─── School card ──────────────────────────────────────────────────
function SchoolCard({ img, name, level, type, link }: { img: string; name: string; level: string; type: "contemporary" | "islamic"; link?: string }) {
  const { ref, visible } = useInView();
  const inner = (
    <div ref={ref} className={`edu-card ${visible ? "edu-card--in" : ""} ${type === "islamic" ? "edu-card--islamic" : ""}`}>
      <div className="edu-card__img-wrap">
        <img src={img} alt={name} className="edu-card__img" />
        <div className="edu-card__overlay" />
        {link && (
          <span style={{ position:"absolute", top:8, right:10, fontSize:".65rem", background:"rgba(0,0,0,.55)", color:"#7dd3fc", padding:"2px 7px", borderRadius:999, letterSpacing:".05em" }}>
            ↗ visit
          </span>
        )}
      </div>
      <div className="edu-card__body">
        <span className="edu-card__level">{level}</span>
        <p className="edu-card__name">{name}</p>
      </div>
    </div>
  );
  return link
    ? <a href={link} target="_blank" rel="noreferrer" style={{ textDecoration:"none", display:"block" }}>{inner}</a>
    : inner;
}

// ─── Project card ─────────────────────────────────────────────────
function ProjectCard({ title, desc, tags }: { title: string; desc: string; tags: string[] }) {
  const { ref, visible } = useInView();
  return (
    <div ref={ref} className={`proj-card ${visible ? "proj-card--in" : ""}`}>
      <div className="proj-card__glow" />
      <h3 className="proj-card__title">{title}</h3>
      <p className="proj-card__desc">{desc}</p>
      <div className="proj-card__tags">
        {tags.map(t => <span key={t} className="proj-card__tag">{t}</span>)}
      </div>
    </div>
  );
}

// ─── Main ─────────────────────────────────────────────────────────
export default function Portfolio() {
  const stars = useStars(80);
  const [scrollY, setScrollY] = useState(0);
  const [avatarFailed, setAvatarFailed] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const heroOpacity = Math.max(0, 1 - scrollY / 400);

  return (
    <>
      <style>{`
        /* ── Reset & base ── */
        *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
        :root {
          --bg:       #080c14;
          --surface:  #0e1420;
          --rim:      #1a2236;
          --blue:     #3b82f6;
          --teal:     #2dd4bf;
          --gold:     #f59e0b;
          --emerald:  #10b981;
          --text:     #e2e8f0;
          --muted:    #64748b;
          --font-display: 'Georgia', serif;
          --font-body:    system-ui, sans-serif;
        }
        body { background: var(--bg); color: var(--text); font-family: var(--font-body); line-height: 1.7; overflow-x: hidden; }
        a { color: inherit; text-decoration: none; }

        /* ── Starfield ── */
        .stars { position: fixed; inset: 0; pointer-events: none; z-index: 0; }
        .star { position: absolute; border-radius: 50%; background: white; animation: twinkle var(--d, 3s) ease-in-out infinite; }
        @keyframes twinkle { 0%,100%{opacity:.15} 50%{opacity:.8} }

        /* ── Sections ── */
        .section { position: relative; z-index: 1; max-width: 900px; margin: 0 auto; padding: 5rem 1.5rem; }
        .section-label {
          display: inline-flex; align-items: center; gap:.5rem;
          font-size:.75rem; letter-spacing:.15em; text-transform:uppercase;
          color: var(--teal); margin-bottom:1.5rem;
          border-left: 2px solid var(--teal); padding-left:.75rem;
        }
        .section-title { font-family: var(--font-display); font-size: clamp(1.75rem,4vw,2.5rem); margin-bottom: 2.5rem; color: var(--text); }

        /* ── Hero ── */
        .hero {
          min-height: 100vh; display: flex; flex-direction: column; justify-content: center; align-items: center;
          text-align: center; padding: 2rem; position: relative; z-index: 1;
        }
        .hero__avatar-wrap {
          position: relative; width: 140px; height: 140px; margin-bottom: 2rem;
        }
        .hero__avatar-ring {
          position: absolute; inset: -6px; border-radius: 50%;
          background: conic-gradient(var(--blue), var(--teal), var(--emerald), var(--blue));
          animation: spin 6s linear infinite;
        }
        @keyframes spin { to { transform: rotate(360deg); } }
        .hero__avatar {
          position: relative; z-index: 1; width: 100%; height: 100%;
          border-radius: 50%; object-fit: cover; border: 4px solid var(--bg);
        }
        .hero__avatar-placeholder {
          position: relative; z-index: 1; width: 100%; height: 100%;
          border-radius: 50%; background: var(--surface); border: 4px solid var(--bg);
          display: flex; align-items: center; justify-content: center;
          font-size: 3rem; color: var(--muted);
        }
        .hero__name {
          font-family: var(--font-display); font-size: clamp(2.5rem, 8vw, 4.5rem); font-weight: 700;
          background: linear-gradient(135deg, var(--blue) 0%, var(--teal) 50%, var(--emerald) 100%);
          -webkit-background-clip: text; -webkit-text-fill-color: transparent; background-clip: text;
          line-height: 1.1; margin-bottom: .5rem;
          animation: fadeUp .8s ease both;
        }
        .hero__nick {
          font-size: 1rem; color: var(--teal); letter-spacing: .25em; text-transform: uppercase;
          margin-bottom: 1rem; animation: fadeUp .8s .15s ease both;
        }
        .hero__sub {
          font-size: 1.1rem; color: var(--muted); margin-bottom: 2rem;
          animation: fadeUp .8s .3s ease both;
        }
        .hero__location {
          display: flex; align-items: center; justify-content: center; gap: .4rem;
          font-size: .85rem; color: var(--muted); margin-bottom: 2.5rem;
          animation: fadeUp .8s .45s ease both;
        }
        .hero__links {
          display: flex; flex-wrap: wrap; gap: .75rem; justify-content: center;
          animation: fadeUp .8s .6s ease both;
        }
        .hero__link {
          display: flex; align-items: center; gap: .4rem;
          padding: .5rem 1.25rem; border-radius: 999px;
          border: 1px solid var(--rim); background: var(--surface);
          font-size: .85rem; transition: all .25s;
        }
        .hero__link:hover { border-color: var(--blue); color: var(--blue); transform: translateY(-2px); }
        .hero__scroll { position: absolute; bottom: 2rem; animation: bounce 2s infinite; color: var(--muted); }
        @keyframes bounce { 0%,100%{transform:translateY(0)} 50%{transform:translateY(6px)} }
        @keyframes fadeUp { from{opacity:0;transform:translateY(20px)} to{opacity:1;transform:translateY(0)} }

        /* ── About ── */
        .about__grid { display: grid; gap: 1.5rem; }
        .about__text {
          font-size: 1.05rem; line-height: 1.9; color: #94a3b8;
          border-left: 2px solid var(--rim); padding-left: 1.25rem;
        }
        .about__highlight { color: var(--teal); font-weight: 600; }

        /* ── Timeline / Edu ── */
        .edu-tabs { display: flex; gap: .5rem; margin-bottom: 2rem; }
        .edu-tab {
          padding: .45rem 1.1rem; border-radius: 999px; font-size: .85rem; cursor: pointer;
          border: 1px solid var(--rim); background: transparent; color: var(--muted);
          transition: all .2s;
        }
        .edu-tab--active { background: var(--blue); border-color: var(--blue); color: white; }
        .edu-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 1.25rem; }
        @media (max-width: 900px) { .edu-grid { grid-template-columns: repeat(2, 1fr); } }

        .edu-card {
          border-radius: 1rem; overflow: hidden; background: var(--surface); border: 1px solid var(--rim);
          opacity: 0; transform: translateY(24px) scale(.97);
          transition: opacity .55s ease, transform .55s ease;
        }
        .edu-card--in { opacity: 1; transform: translateY(0) scale(1); }
        .edu-card--islamic { border-color: rgba(245,158,11,.3); }
        .edu-card:hover { border-color: var(--blue); transform: translateY(-4px) scale(1.01); }
        .edu-card__img-wrap { position: relative; height: 120px; overflow: hidden; }
        .edu-card__img { width: 100%; height: 100%; object-fit: cover; transition: transform .4s; }
        .edu-card:hover .edu-card__img { transform: scale(1.07); }
        .edu-card__overlay { position: absolute; inset: 0; background: linear-gradient(to top, rgba(8,12,20,.8) 0%, transparent 60%); }
        .edu-card__body { padding: .85rem 1rem; }
        .edu-card__level { font-size: .7rem; text-transform: uppercase; letter-spacing: .1em; color: var(--teal); }
        .edu-card--islamic .edu-card__level { color: var(--gold); }
        .edu-card__name { font-size: .85rem; color: var(--text); margin-top: .25rem; line-height: 1.4; }

        /* ── Projects ── */
        .proj-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 1.25rem; }
        @media (max-width: 900px) { .proj-grid { grid-template-columns: repeat(2, 1fr); } }
        .proj-card {
          position: relative; padding: 1.5rem; border-radius: 1rem; overflow: hidden;
          background: var(--surface); border: 1px solid var(--rim);
          opacity: 0; transform: translateY(24px);
          transition: opacity .55s ease, transform .55s ease, border-color .25s;
        }
        .proj-card--in { opacity: 1; transform: translateY(0); }
        .proj-card:hover { border-color: var(--blue); }
        .proj-card__glow {
          position: absolute; top: -40px; right: -40px; width: 120px; height: 120px; border-radius: 50%;
          background: radial-gradient(circle, rgba(59,130,246,.15) 0%, transparent 70%);
          pointer-events: none;
        }
        .proj-card__title { font-size: 1.05rem; font-weight: 700; color: var(--blue); margin-bottom: .5rem; }
        .proj-card__desc { font-size: .875rem; color: var(--muted); margin-bottom: 1rem; line-height: 1.6; }
        .proj-card__tags { display: flex; flex-wrap: wrap; gap: .4rem; }
        .proj-card__tag {
          font-size: .7rem; padding: .2rem .55rem; border-radius: 999px;
          background: rgba(59,130,246,.12); color: var(--blue); border: 1px solid rgba(59,130,246,.25);
        }

        /* ── Contact ── */
        .contact-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 1rem; }
        @media (max-width: 900px) { .contact-grid { grid-template-columns: repeat(2, 1fr); } }
        .contact-item {
          display: flex; align-items: center; gap: .85rem; padding: 1rem 1.25rem;
          border-radius: .85rem; background: var(--surface); border: 1px solid var(--rim);
          transition: border-color .2s, transform .2s;
        }
        .contact-item:hover { border-color: var(--teal); transform: translateY(-2px); }
        .contact-item__icon { color: var(--teal); flex-shrink: 0; }
        .contact-item__label { font-size: .7rem; color: var(--muted); text-transform: uppercase; letter-spacing: .08em; }
        .contact-item__value { font-size: .9rem; color: var(--text); }

        /* ── Footer ── */
        .footer { text-align: center; padding: 2rem; font-size: .8rem; color: var(--muted); border-top: 1px solid var(--rim); position: relative; z-index: 1; }

        /* ── Divider ── */
        .divider { border: none; height: 1px; background: var(--rim); margin: 0 auto; }

        /* ── Responsive mobile ── */
        @media (max-width: 600px) {
          .edu-grid { grid-template-columns: repeat(2, 1fr) !important; }
          .proj-grid { grid-template-columns: 1fr !important; }
          .contact-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>

      {/* Starfield */}
      <div className="stars" aria-hidden>
        {stars.map((style, i) => (
          <span key={i} className="star" style={style} />
        ))}
      </div>

      {/* ── HERO ── */}
      <section className="hero" style={{ opacity: heroOpacity }}>
        <div className="hero__avatar-wrap">
          <div className="hero__avatar-ring" />
          {/* Fixed image handler to work elegantly with React virtual DOM */}
          {!avatarFailed ? (
            <img 
              src="/face.jpg" 
              alt="Ammar Balti" 
              className="hero__avatar"
              onError={() => setAvatarFailed(true)}
            />
          ) : (
            <div className="hero__avatar-placeholder">👤</div>
          )}
        </div>

        <div className="hero__nick">✦ RinChan ✦</div>
        <h1 className="hero__name">Ammar Balti</h1>
        <p className="hero__sub">CS Student @ Virtual University · Aspiring Software Developer</p>

        <div className="hero__location">
          <MapPin size={14} />
          Barah Paeen, Khaplu · District Ganche, Gilgit-Baltistan · Pakistan
        </div>

        <nav className="hero__links">
          <a href="https://github.com/ammar-balti-student/portfolio" className="hero__link" target="_blank" rel="noreferrer">
            <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{width:16,height:16}}>
              <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
              <path d="M9 18c-4.51 2-5-2-7-2" />
            </svg>
            GitHub
          </a>
          <a href="https://www.linkedin.com/in/ammar-balti-6608913b4/" className="hero__link" target="_blank" rel="noreferrer">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{width:16,height:16}}>
              <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
              <rect width="4" height="12" x="2" y="9" /><circle cx="4" cy="4" r="2" />
            </svg>
            LinkedIn
          </a>
          <a href="https://www.facebook.com/ahbbalti" className="hero__link" target="_blank" rel="noreferrer">
            <FacebookIcon size={16} /> Facebook
          </a>
          <a href="mailto:ahbarahvi786@gmail.com" className="hero__link">
            <Mail size={16} /> Email
          </a>
          <a href="tel:+923231505080" className="hero__link">
            <Phone size={16} /> Call / WhatsApp
          </a>
        </nav>

        <a href="#about" className="hero__scroll" onClick={e => { e.preventDefault(); document.getElementById("about")?.scrollIntoView({ behavior: "smooth" }); }}>
          <ChevronDown size={24} />
        </a>
      </section>

      <hr className="divider" style={{ maxWidth: 900, padding: "0 1.5rem" }} />

      {/* ── ABOUT ── */}
      <section className="section" id="about">
        <div className="section-label"><BookOpen size={14} /> About Me</div>
        <h2 className="section-title">Who is RinChan?</h2>
        <div className="about__grid">
          {/* Fixed raw apostrophes below into safe Next.js entities */}
          <p className="about__text">
            I&apos;m <span className="about__highlight">Ammar Balti</span>, a Computer Science student (2nd Semester) at{" "}
            <span className="about__highlight">Virtual University of Pakistan</span>, hailing from the mountains of{" "}
            <span className="about__highlight">Gilgit-Baltistan</span>. Alongside my contemporary education, I hold a{" "}
            <span className="about__highlight">Hifz e Quran</span> and completed <span className="about__highlight">Darse Nizaami</span> — a
            unique blend of classical Islamic scholarship and modern software engineering.
          </p>
          <p className="about__text" style={{ marginTop: "1rem" }}>
            I&apos;m passionate about <span className="about__highlight">browser extension architecture</span>,{" "}
            <span className="about__highlight">AI integration</span>, and crafting digital experiences that feel effortless.
            Whether it&apos;s writing clean code or exploring the boundaries of LMS tools, I turn complexity into clarity.
          </p>
        </div>
      </section>

      <hr className="divider" style={{ maxWidth: 900, padding: "0 1.5rem" }} />

      {/* ── EDUCATION ── */}
      <EducationSection />

      <hr className="divider" style={{ maxWidth: 900, padding: "0 1.5rem" }} />

      {/* ── PROJECTS ── */}
      <section className="section">
        <div className="section-label"><Code2 size={14} /> Projects</div>
        <h2 className="section-title">What I&apos;ve Built</h2>
        <div className="proj-grid">
          <ProjectCard
            title="VU Ilmofy Extension"
            desc="A browser extension for VU students that supercharges the LMS experience with smarter navigation and productivity tools."
            tags={["Browser Extension", "JavaScript", "UI/UX"]}
          />
          <ProjectCard
            title="AI Terminal Tools"
            desc="A CLI toolkit built with Node.js that streamlines development workflows using AI-powered automation and scripts."
            tags={["Node.js", "CLI", "AI"]}
          />
          <ProjectCard
            title="Portfolio Website"
            desc="This very portfolio — hand-crafted with Next.js, Tailwind, and smooth animations to showcase my journey."
            tags={["Next.js", "TypeScript", "Tailwind"]}
          />
        </div>
      </section>

      <hr className="divider" style={{ maxWidth: 900, padding: "0 1.5rem" }} />

      {/* ── CONTACT ── */}
      <section className="section">
        <div className="section-label"><Mail size={14} /> Contact</div>
        <h2 className="section-title">Let&apos;s Connect</h2>
        <div className="contact-grid">
          <a href="tel:+923231505080" className="contact-item">
            <Phone size={20} className="contact-item__icon" />
            <div>
              <div className="contact-item__label">Call / WhatsApp</div>
              <div className="contact-item__value">0323 1505080</div>
            </div>
          </a>
          <a href="mailto:ahbarahvi786@gmail.com" className="contact-item">
            <Mail size={20} className="contact-item__icon" />
            <div>
              <div className="contact-item__label">Email</div>
              <div className="contact-item__value">ahbarahvi786@gmail.com</div>
            </div>
          </a>
          <a href="https://github.com/ammar-balti-student/portfolio" target="_blank" rel="noreferrer" className="contact-item">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{width:20,height:20,color:"var(--teal)",flexShrink:0}}>
              <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
              <path d="M9 18c-4.51 2-5-2-7-2" />
            </svg>
            <div>
              <div className="contact-item__label">GitHub</div>
              <div className="contact-item__value">ammar-balti-student</div>
            </div>
          </a>
          <a href="https://www.linkedin.com/in/ammar-balti-6608913b4/" target="_blank" rel="noreferrer" className="contact-item">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{width:20,height:20,color:"var(--teal)",flexShrink:0}}>
              <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" /><rect width="4" height="12" x="2" y="9" /><circle cx="4" cy="4" r="2" />
            </svg>
            <div>
              <div className="contact-item__label">LinkedIn</div>
              <div className="contact-item__value">ammar-balti</div>
            </div>
          </a>
          <a href="https://www.facebook.com/ahbbalti" target="_blank" rel="noreferrer" className="contact-item">
            <FacebookIcon size={20} className="contact-item__icon" />
            <div>
              <div className="contact-item__label">Facebook</div>
              <div className="contact-item__value">ahbbalti</div>
            </div>
          </a>
          <div className="contact-item">
            <MapPin size={20} className="contact-item__icon" />
            <div>
              <div className="contact-item__label">Location</div>
              <div className="contact-item__value">Khaplu, Gilgit-Baltistan</div>
            </div>
          </div>
        </div>
      </section>

      <footer className="footer">
        <p>Crafted with ❤️ by <strong>Ammar Balti</strong> · RinChan · Gilgit-Baltistan, Pakistan</p>
      </footer>
    </>
  );
}

// ─── Education section with tabs ──────────────────────────────────
function EducationSection() {
  const [tab, setTab] = useState<"contemporary" | "islamic">("contemporary");

  const contemporary = [
    { img: "/iqra.jpg",  level: "Primary",   name: "Iqra Huffaz Secondary School", link: "https://www.facebook.com/ihsc.edu/" },
    { img: "/mid.jpg",   level: "Middle",    name: "Khaplu Model School Traming", link: "https://www.facebook.com/profile.php?id=61554127094458" },
    { img: "/kps.jpg",   level: "Matric",    name: "Khaplu Public School & College (KPS&C)", link: "https://www.facebook.com/KhapluPublicSchoolAndCollege/" },
    { img: "/jbs.jpg",   level: "A-Levels",  name: "Jamia Baitussalam Talagang", link: "https://www.facebook.com/BaitussalamTLG" },
    { img: "/vu.jpg",    level: "BSCS — 2nd Sem", name: "Virtual University of Pakistan", link: "https://www.vu.edu.pk/" },
  ];
  const islamic = [
    { img: "/iqra.jpg",  level: "Hifz e Quran",  name: "Iqra Rauza tul Atfaal", link: "https://www.facebook.com/ihsc.edu/" },
    { img: "/jbs.jpg",   level: "Darse Nizaami",  name: "Jamia Baitussalam Talagang", link: "https://www.facebook.com/BaitussalamTLG" },
  ];

  const list = tab === "contemporary" ? contemporary : islamic;

  return (
    <section className="section">
      <div className="section-label"><GraduationCap size={14} /> Education</div>
      <h2 className="section-title">Academic Journey</h2>

      <div className="edu-tabs">
        <button className={`edu-tab ${tab === "contemporary" ? "edu-tab--active" : ""}`} onClick={() => setTab("contemporary")}>
          Contemporary
        </button>
        <button className={`edu-tab ${tab === "islamic" ? "edu-tab--active" : ""}`} onClick={() => setTab("islamic")}>
          <Moon size={12} style={{ display: "inline", marginRight: 4, verticalAlign: "middle" }} />
          Islamic
        </button>
      </div>

      <div className="edu-grid">
        {list.map((s) => (
          <SchoolCard key={s.name + tab} {...s} type={tab} />
        ))}
      </div>
    </section>
  );
}
