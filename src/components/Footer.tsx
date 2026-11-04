import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Github, 
  Linkedin, 
  Mail, 
  Phone, 
  MapPin, 
  Download, 
  FileText, 
  ArrowUp, 
  Layers, 
  Sparkles,
  ExternalLink 
} from 'lucide-react';
import { PROFILE_DATA } from '../data/profile';
import { FULL_STACK_PROJECTS, AI_ML_PROJECTS } from '../data/projects';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#05070d] border-t border-slate-800/80 text-slate-400 text-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Col 1: Brand & Profile */}
          <div className="space-y-4">
            <Link to="/" className="flex items-center space-x-2.5">
              <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-blue-600 to-cyan-500 p-[1.5px]">
                <div className="w-full h-full bg-[#090d16] rounded-[10px] flex items-center justify-center font-mono font-bold text-white text-sm">
                  RS
                </div>
              </div>
              <span className="font-extrabold text-lg text-white tracking-tight">
                {PROFILE_DATA.name}
              </span>
            </Link>
            <p className="text-xs text-slate-400 leading-relaxed">
              Full-Stack Developer and AI/ML Enthusiast. Building enterprise web platforms with React, Django, PostgreSQL, and intelligent machine learning workflows.
            </p>
            <div className="flex items-center space-x-2.5 pt-1">
              <a
                href={PROFILE_DATA.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-lg bg-slate-800/80 hover:bg-slate-700 text-slate-300 hover:text-white flex items-center justify-center transition-colors border border-slate-700/60"
                title="GitHub Profile"
                aria-label="GitHub Profile"
              >
                <Github className="w-4 h-4" />
              </a>
              <a
                href={PROFILE_DATA.linkedinUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-lg bg-slate-800/80 hover:bg-slate-700 text-slate-300 hover:text-white flex items-center justify-center transition-colors border border-slate-700/60"
                title="LinkedIn Profile"
                aria-label="LinkedIn Profile"
              >
                <Linkedin className="w-4 h-4" />
              </a>
              <a
                href={`mailto:${PROFILE_DATA.email}`}
                className="w-8 h-8 rounded-lg bg-slate-800/80 hover:bg-slate-700 text-slate-300 hover:text-white flex items-center justify-center transition-colors border border-slate-700/60"
                title="Send Email"
                aria-label="Email"
              >
                <Mail className="w-4 h-4" />
              </a>
              <a
                href={`tel:${PROFILE_DATA.phone}`}
                className="w-8 h-8 rounded-lg bg-slate-800/80 hover:bg-slate-700 text-slate-300 hover:text-white flex items-center justify-center transition-colors border border-slate-700/60"
                title="Call Phone"
                aria-label="Phone"
              >
                <Phone className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Col 2: Navigation & Portfolios */}
          <div className="space-y-3">
            <h4 className="text-xs font-semibold text-white uppercase tracking-wider">
              Connected Portfolios
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <Link to="/" className="hover:text-blue-400 transition-colors flex items-center gap-1.5">
                  <span>Main Developer Portfolio</span>
                </Link>
              </li>
              <li>
                <Link to="/full-stack" className="hover:text-blue-400 transition-colors flex items-center gap-1.5">
                  <Layers className="w-3.5 h-3.5 text-blue-400" />
                  <span>Full Stack Portfolio ({FULL_STACK_PROJECTS.length} Projects)</span>
                </Link>
              </li>
              <li>
                <Link to="/ai-ml" className="hover:text-blue-400 transition-colors flex items-center gap-1.5">
                  <Sparkles className="w-3.5 h-3.5 text-purple-400" />
                  <span>AI/ML Portfolio ({AI_ML_PROJECTS.length} Projects)</span>
                </Link>
              </li>
              <li>
                <a 
                  href={PROFILE_DATA.resumePdfUrl} 
                  download="Rakshitha_S_Resume.pdf"
                  className="hover:text-blue-400 transition-colors flex items-center gap-1.5"
                  title="Download Rakshitha S Resume PDF"
                >
                  <Download className="w-3.5 h-3.5 text-emerald-400" />
                  <span>Download Resume (PDF)</span>
                </a>
              </li>
            </ul>
          </div>

          {/* Col 3: Verified Credentials */}
          <div className="space-y-3">
            <h4 className="text-xs font-semibold text-white uppercase tracking-wider">
              Academic & Experience
            </h4>
            <div className="space-y-2 text-xs">
              <div>
                <p className="text-white font-medium">B.E. Computer Science</p>
                <p className="text-slate-400">Jnana Vikas Inst of Tech (8.7 CGPA)</p>
              </div>
              <div>
                <p className="text-white font-medium">AI Intern — Pinnacle Labs</p>
                <p className="text-slate-400">Core AI Workflows & Prototyping</p>
              </div>
              <div>
                <p className="text-white font-medium">24-Hour Hackathon</p>
                <p className="text-slate-400">Intercollegiate Rapid Sprint</p>
              </div>
            </div>
          </div>

          {/* Col 4: Contact & Resume Action */}
          <div className="space-y-3">
            <h4 className="text-xs font-semibold text-white uppercase tracking-wider">
              Direct Contact
            </h4>
            <div className="space-y-2 text-xs">
              <a 
                href={`mailto:${PROFILE_DATA.email}`}
                className="flex items-center space-x-2 text-slate-300 hover:text-white transition-colors"
              >
                <Mail className="w-3.5 h-3.5 text-blue-400 shrink-0" />
                <span className="truncate">{PROFILE_DATA.email}</span>
              </a>
              <a 
                href={`tel:${PROFILE_DATA.phone}`}
                className="flex items-center space-x-2 text-slate-300 hover:text-white transition-colors"
              >
                <Phone className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                <span>{PROFILE_DATA.phoneFormatted}</span>
              </a>
              <div className="flex items-center space-x-2 text-slate-400">
                <MapPin className="w-3.5 h-3.5 text-rose-400 shrink-0" />
                <span>{PROFILE_DATA.location}</span>
              </div>
            </div>

            <div className="pt-2">
              <a
                href={PROFILE_DATA.resumePdfUrl}
                download="Rakshitha_S_Resume.pdf"
                className="inline-flex items-center space-x-2 px-3.5 py-2 rounded-lg bg-blue-600 hover:bg-blue-500 text-white font-semibold text-xs transition-colors shadow-sm w-full justify-center"
              >
                <Download className="w-3.5 h-3.5" />
                <span>Download Resume PDF</span>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 pt-6 border-t border-slate-800/80 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-400 space-y-4 sm:space-y-0">
          <p>
            © {new Date().getFullYear()} Rakshitha S. Engineered with React, TypeScript &amp; Tailwind CSS.
          </p>

          <div className="flex items-center space-x-6">
            <button
              onClick={scrollToTop}
              className="inline-flex items-center space-x-1.5 text-slate-400 hover:text-white transition-colors"
            >
              <span>Back to Top</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
