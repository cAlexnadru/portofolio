import { useState, useEffect } from 'react';
import { concepts, useCases, type Project } from './data/projects';

const SunIcon = () => (
  <svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5"><circle cx="12" cy="12" r="5"></circle><line x1="12" y1="1" x2="12" y2="3"></line><line x1="12" y1="21" x2="12" y2="23"></line><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line><line x1="1" y1="12" x2="3" y2="12"></line><line x1="21" y1="12" x2="23" y2="12"></line><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line></svg>
);

const MoonIcon = () => (
  <svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path></svg>
);

const ChevronIcon = ({ expanded }: { expanded: boolean }) => (
  <svg className={`w-4 h-4 transition-transform duration-300 text-neutral-500 dark:text-neutral-400 flex-shrink-0 ${expanded ? '' : '-rotate-90'}`} aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M6 9l6 6 6-6"></path></svg>
);

function CollapsibleSection({ title, children }: { title: string, children: React.ReactNode }) {
  const [expanded, setExpanded] = useState(true);
  return (
    <section className="mt-14 md:mt-16">
      <button 
        onClick={() => setExpanded(!expanded)}
        className="flex items-center gap-3 mb-6 w-full py-2 group border-b border-neutral-200 dark:border-neutral-800"
      >
        <h2 className="text-base font-semibold text-neutral-900 dark:text-neutral-100 group-hover:text-neutral-500 dark:group-hover:text-neutral-400 transition-colors whitespace-nowrap">
          {title}
        </h2>
        <ChevronIcon expanded={expanded} />
      </button>
      <div className={`overflow-hidden transition-all duration-500 ease-in-out ${expanded ? 'max-h-[2000px] opacity-100 visible' : 'max-h-0 opacity-0 invisible'}`}>
        {children}
      </div>
    </section>
  );
}

function ProjectList({ title, projects, onSelect }: { title: string, projects: Project[], onSelect: (p: Project) => void }) {
  if (projects.length === 0) return null;
  return (
    <>
      <h3 className="text-sm uppercase tracking-wider text-neutral-500 dark:text-neutral-400 my-6 flex items-center justify-between">
        {title}
      </h3>
      <div className="flex flex-col gap-2">
        {projects.map(p => (
          <button 
            key={p.id} 
            onClick={() => onSelect(p)}
            className="flex flex-col sm:flex-row sm:justify-between sm:items-baseline p-2 -mx-2 rounded-lg w-[calc(100%+1rem)] transition-colors hover:bg-neutral-100 dark:hover:bg-neutral-900 my-1 text-left group"
          >
            <div className="flex flex-col gap-2 max-w-full sm:max-w-[75%]">
              <span className="font-medium text-base leading-snug group-hover:text-purple-700 dark:group-hover:text-cyan-400 transition-colors">{p.title}</span>
              <span className="text-sm text-neutral-500 dark:text-neutral-400 leading-snug">{p.description}</span>
            </div>
            <span className="text-sm text-neutral-500 dark:text-neutral-400 whitespace-nowrap flex-shrink-0 mt-2 sm:mt-0 opacity-80 sm:opacity-100">
              {p.meta}
            </span>
          </button>
        ))}
      </div>
    </>
  );
}

function HomeView({ theme, toggleTheme, onSelectProject }: { theme: string, toggleTheme: () => void, onSelectProject: (p: Project) => void }) {
  return (
    <div className="animate-in fade-in duration-500">
      <nav className="flex justify-end mb-6 md:mb-10">
        <button 
          onClick={toggleTheme} 
          aria-label="Toggle dark and light mode"
          className="bg-white dark:bg-neutral-950 border border-neutral-200 dark:border-neutral-800 text-neutral-500 dark:text-neutral-400 rounded-lg p-2.5 flex items-center justify-center transition-colors hover:bg-neutral-100 dark:hover:bg-neutral-900 hover:text-neutral-900 dark:hover:text-neutral-100 focus-visible:ring-2 focus-visible:ring-purple-700 dark:focus-visible:ring-cyan-400 outline-none"
        >
          {theme === 'dark' ? <SunIcon /> : <MoonIcon />}
        </button>
      </nav>

      <header className="mb-12">
        <div className="w-20 h-20 md:w-24 md:h-24 rounded-full overflow-hidden mb-6 bg-neutral-200 dark:bg-neutral-800 relative">
          <img src="assets/images/1awt-(2-of-61).jpg" alt="Alexandru-Tudor Chiujdea" className="w-full h-full object-cover" onError={(e) => { e.currentTarget.src = 'https://i.postimg.cc/5yd4jVDQ/1awt-(2-of-61).jpg'; }} />
        </div>
        <h1 className="text-2xl md:text-3xl font-semibold tracking-tight mb-2 leading-tight">Alexandru-Tudor Chiujdea</h1>
        <p className="text-base md:text-lg text-neutral-500 dark:text-neutral-400 mb-6">UX/UI & Visual Designer building scalable enterprise systems and interfaces.</p>
        <div className="flex flex-wrap gap-3">
          <a href="mailto:alextudorchiujdea@gmail.com" className="inline-flex items-center gap-2 px-3 py-2 md:px-3.5 md:py-2 rounded-lg text-sm md:text-sm font-medium transition-colors bg-purple-700 dark:bg-cyan-400 text-white dark:text-neutral-950 hover:opacity-85 focus-visible:ring-2 focus-visible:ring-purple-700 dark:focus-visible:ring-cyan-400 outline-none">Email Me</a>
          <a href="assets/docs/Alexandru_Chiujdea_Resume.pdf" target="_blank" rel="noopener noreferrer" className="btn-secondary">My Resume</a>
          <a href="https://www.linkedin.com/in/alexandru-tudor-chiujdea/" target="_blank" rel="noopener noreferrer" className="btn-secondary">LinkedIn</a>
          <a href="https://www.behance.net/dudthyawesome" target="_blank" rel="noopener noreferrer" className="btn-secondary">Behance</a>
        </div>
      </header>

      <CollapsibleSection title="Projects">
        <ProjectList title="Concepts (Personal Work)" projects={concepts} onSelect={onSelectProject} />
        <ProjectList title="Use Cases (NDA Sanitized)" projects={useCases} onSelect={onSelectProject} />
      </CollapsibleSection>

      <CollapsibleSection title="About">
        <p className="text-base md:text-[1.05rem] text-neutral-500 dark:text-neutral-400 leading-relaxed">
          I am an innovative UX/UI Designer with over 6 years of experience leading user-centered design across smart infrastructure, healthcare, fintech, and logistics.
          Specializing in <strong className="text-neutral-900 dark:text-neutral-100 font-medium">Object-Oriented UX (OOUX)</strong> and <strong className="text-neutral-900 dark:text-neutral-100 font-medium">Lean UX</strong>, I bridge the gap between design and development by building scalable design systems that align precisely with user mental models and backend architecture.
          <br /><br />
          Certified in AI design and accessibility, my goal is to craft ethical, inclusive, and highly efficient interfaces that drive business profitability and automate complex workflows.
        </p>
      </CollapsibleSection>

      <CollapsibleSection title="Experience">
        <div className="flex flex-col gap-2">
          {[
            { title: 'Nagarro', desc: 'User Experience & Interface Designer — Lead complex enterprise suites and AI workflows.', meta: '2022 — Current' },
            { title: 'Telios Care S.A.', desc: 'UI & Visual Designer — Scaled a multi-portal telemedicine design system.', meta: '2020 — 2022' },
            { title: 'Simbound', desc: 'Visual Designer — Shaped brand identity and e-learning graphics.', meta: '2019 — 2019' },
            { title: 'Freelance Visual Designer & 3D Artist', desc: 'Developed UI and 3D assets for emerging brands.', meta: '2017 — 2019' },
          ].map((exp, i) => (
            <div key={i} className="flex flex-col sm:flex-row sm:justify-between sm:items-baseline p-2 -mx-2 rounded-lg w-[calc(100%+1rem)] transition-colors hover:bg-neutral-100 dark:hover:bg-neutral-900 my-1">
              <div className="flex flex-col gap-2 max-w-full sm:max-w-[75%]">
                <span className="font-medium text-base leading-snug">{exp.title}</span>
                <span className="text-sm text-neutral-500 dark:text-neutral-400 leading-snug">{exp.desc}</span>
              </div>
              <span className="text-sm text-neutral-500 dark:text-neutral-400 whitespace-nowrap flex-shrink-0 mt-2 sm:mt-0 opacity-80 sm:opacity-100">{exp.meta}</span>
            </div>
          ))}
        </div>
      </CollapsibleSection>

      <footer className="mt-20 pt-8 border-t border-neutral-200 dark:border-neutral-800 flex flex-col gap-6">
        <div className="flex flex-wrap gap-3 w-full [&>a]:w-full sm:[&>a]:w-auto [&>a]:justify-center">
          <a href="mailto:alextudorchiujdea@gmail.com" className="inline-flex items-center gap-2 px-3 py-2 md:px-3.5 md:py-2 rounded-lg text-sm md:text-sm font-medium transition-colors bg-purple-700 dark:bg-cyan-400 text-white dark:text-neutral-950 hover:opacity-85">Email</a>
          <a href="assets/docs/Alexandru_Chiujdea_Resume.pdf" target="_blank" rel="noopener noreferrer" className="btn-secondary">My Resume</a>
          <a href="https://www.linkedin.com/in/alexandru-tudor-chiujdea/" target="_blank" rel="noopener noreferrer" className="btn-secondary">LinkedIn</a>
          <a href="https://www.behance.net/dudthyawesome" target="_blank" rel="noopener noreferrer" className="btn-secondary">Behance</a>
        </div>
        <div className="flex flex-col gap-2 text-xs md:text-sm text-neutral-500 dark:text-neutral-400 leading-relaxed">
          <p>Cluj-Napoca, Romania · Open to Remote (EU) & Relocation (Rome)</p>
          <p>Alexandru Chiujdea — <a href="mailto:alextudorchiujdea@gmail.com" className="text-neutral-900 dark:text-neutral-100 underline underline-offset-4 hover:text-purple-700 dark:hover:text-cyan-400 transition-colors">alextudorchiujdea@gmail.com</a></p>
          <p>Open to Staff/Lead Roles</p>
          <p>Designed with systematic restraint · Built with React & Tailwind · 2026</p>
        </div>
      </footer>
    </div>
  );
}

function ImageModal({ image, onClose }: { image: { src: string, alt: string } | null, onClose: () => void }) {
  if (!image) return null;
  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center opacity-100 transition-opacity duration-300"
      onClick={onClose}
    >
      <div className="absolute inset-0 bg-black/90 backdrop-blur-sm" />
      <div className="relative z-10 w-full h-full flex flex-col items-center justify-center p-4">
        <button 
          onClick={onClose}
          className="absolute top-4 right-4 bg-white/10 hover:bg-white/20 border border-white/20 text-white w-11 h-11 rounded-full flex items-center justify-center transition-all hover:scale-105"
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
        </button>
        <img 
          src={image.src} 
          alt={image.alt} 
          className="max-w-[90vw] max-h-[85vh] object-contain rounded-lg shadow-2xl"
          onClick={(e) => e.stopPropagation()}
        />
        {image.alt && <div className="absolute bottom-4 text-white/75 text-sm text-center max-w-[80vw] truncate pointer-events-none">{image.alt}</div>}
      </div>
    </div>
  );
}

function ProjectView({ project, onBack, onSelect }: { project: Project, onBack: () => void, onSelect: (p: Project) => void }) {
  const allProjects = [...concepts, ...useCases];
  const currentIndex = allProjects.findIndex(p => p.id === project.id);
  const [modalImage, setModalImage] = useState<{ src: string, alt: string } | null>(null);

  const handleClick = (e: React.MouseEvent) => {
    const target = e.target as HTMLElement;
    if (target.tagName === 'IMG') {
      const img = target as HTMLImageElement;
      setModalImage({ src: img.src, alt: img.alt });
    }
  };

  useEffect(() => {
    if (modalImage) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => { document.body.style.overflow = ''; };
  }, [modalImage]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [project]);

  return (
    <div className="animate-in fade-in duration-500">
      <nav className="sticky top-0 bg-white/85 dark:bg-neutral-950/85 backdrop-blur-md py-4 md:py-6 mb-6 md:mb-10 border-b border-neutral-200 dark:border-neutral-800 z-40 flex items-center gap-2 text-sm md:text-base whitespace-nowrap overflow-hidden text-ellipsis">
        <button 
          onClick={onBack} 
          aria-label="Go back to home page"
          className="text-neutral-500 dark:text-neutral-400 flex items-center gap-1 transition-colors font-medium flex-shrink-0 hover:text-neutral-900 dark:hover:text-neutral-100"
        >
          <svg width="18" height="18" aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="19" y1="12" x2="5" y2="12"></line><polyline points="12 19 5 12 12 5"></polyline></svg>
          <span className="hidden sm:inline">Projects /</span>
        </button>
        <span className="text-neutral-900 dark:text-neutral-100 font-semibold overflow-hidden text-ellipsis outline-none" tabIndex={-1}>{project.title}</span>
      </nav>

      <div 
        className="project-body relative z-0"
        dangerouslySetInnerHTML={{ __html: project.html }}
        onClick={handleClick}
      />
      
      <div className="mt-20 pt-8 border-t border-neutral-200 dark:border-neutral-800 flex justify-between gap-4">
        {currentIndex > 0 ? (
          <button onClick={() => onSelect(allProjects[currentIndex - 1])} className="flex flex-col text-neutral-900 dark:text-neutral-100 max-w-[48%] group text-left">
            <span className="text-xs md:text-sm uppercase tracking-wider text-neutral-500 dark:text-neutral-400 mb-2 group-hover:text-neutral-900 dark:group-hover:text-neutral-100 transition-colors">&larr; Prev</span>
            <span className="font-medium text-sm md:text-base leading-snug group-hover:text-purple-700 dark:group-hover:text-cyan-400 transition-colors">{allProjects[currentIndex - 1].title}</span>
          </button>
        ) : <div />}
        {currentIndex < allProjects.length - 1 ? (
          <button onClick={() => onSelect(allProjects[currentIndex + 1])} className="flex flex-col text-neutral-900 dark:text-neutral-100 text-right items-end max-w-[48%] group">
            <span className="text-xs md:text-sm uppercase tracking-wider text-neutral-500 dark:text-neutral-400 mb-2 group-hover:text-neutral-900 dark:group-hover:text-neutral-100 transition-colors">Next &rarr;</span>
            <span className="font-medium text-sm md:text-base leading-snug group-hover:text-purple-700 dark:group-hover:text-cyan-400 transition-colors">{allProjects[currentIndex + 1].title}</span>
          </button>
        ) : <div />}
      </div>

      <ImageModal image={modalImage} onClose={() => setModalImage(null)} />
    </div>
  );
}

function App() {
  const [theme, setTheme] = useState(() => localStorage.getItem('theme') || (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'));
  const [activeProject, setActiveProject] = useState<Project | null>(null);

  useEffect(() => {
    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
    localStorage.setItem('theme', theme);
  }, [theme]);

  return (
    <div className="max-w-[760px] mx-auto px-4 md:px-8 py-6 md:py-24">
      <style>{`
        .btn-secondary {
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          padding: 0.5rem 0.75rem;
          border-radius: 0.5rem;
          background: transparent;
          border: 1px solid var(--color-neutral-200);
          color: var(--color-neutral-900);
          font-size: 0.875rem;
          font-weight: 500;
          text-decoration: none;
          transition: all 0.2s ease;
          outline: none;
        }
        .btn-secondary:focus-visible {
          box-shadow: 0 0 0 2px var(--color-purple-700);
        }
        :is(.dark .btn-secondary) {
          border-color: var(--color-neutral-800);
          color: var(--color-neutral-100);
        }
        :is(.dark .btn-secondary:focus-visible) {
          box-shadow: 0 0 0 2px var(--color-cyan-400);
        }
        .btn-secondary:hover {
          background: var(--color-neutral-100);
          border-color: var(--color-neutral-500);
        }
        :is(.dark .btn-secondary:hover) {
          background: var(--color-neutral-900);
          border-color: var(--color-neutral-400);
        }
        
        @keyframes fadeIn { from { opacity: 0; transform: translateY(10px); } to { opacity: 1; transform: translateY(0); } }
        .fade-in { animation: fadeIn 0.4s ease-out; }
      `}</style>
      
      {activeProject ? (
        <ProjectView 
          project={activeProject} 
          onBack={() => setActiveProject(null)} 
          onSelect={setActiveProject} 
        />
      ) : (
        <HomeView 
          theme={theme} 
          toggleTheme={() => setTheme(theme === 'dark' ? 'light' : 'dark')} 
          onSelectProject={setActiveProject} 
        />
      )}
    </div>
  );
}

export default App;
