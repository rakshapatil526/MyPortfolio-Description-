import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  Download, 
  ArrowRight, 
  Github, 
  Linkedin, 
  MapPin, 
  FileText, 
  Sparkles, 
  Code2, 
  Cpu, 
  GraduationCap,
  CheckCircle2
} from 'lucide-react';
import { PROFILE_DATA } from '../data/profile';
import { FULL_STACK_PROJECTS, AI_ML_PROJECTS } from '../data/projects';
import { ResumeModal } from '../components/ResumeModal';

export const HeroSection: React.FC = () => {
  const [resumeModalOpen, setResumeModalOpen] = useState(false);

  const scrollToProjects = () => {
    const el = document.getElementById('featured-projects');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden">
        {/* Background Gradients & Ambient Glow */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-gradient-to-tr from-blue-600/15 via-cyan-500/10 to-purple-600/15 blur-[120px] rounded-full pointer-events-none" />
        <div className="absolute top-10 right-10 w-72 h-72 bg-blue-600/5 blur-[90px] rounded-full pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="flex flex-col items-center text-center max-w-4xl mx-auto">
            
            {/* Status / Role Tag */}
            <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-slate-900/90 border border-slate-700/80 shadow-inner mb-6 backdrop-blur-md">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <span className="text-xs font-medium text-slate-300">
                Available for Engineering Opportunities
              </span>
              <span className="text-slate-600">•</span>
              <span className="text-xs text-slate-400 flex items-center gap-1">
                <MapPin className="w-3 h-3 text-rose-400" />
                {PROFILE_DATA.location}
              </span>
            </div>

            {/* Candidate Name */}
            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-white mb-4">
              Hi, I'm{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-cyan-300 to-indigo-400">
                {PROFILE_DATA.name}
              </span>
            </h1>

            {/* Professional Title */}
            <p className="text-lg sm:text-2xl font-semibold text-slate-300 mb-6 font-mono">
              {PROFILE_DATA.title}
            </p>

            {/* Professional Summary Introduction */}
            <p className="text-slate-400 text-base sm:text-lg leading-relaxed max-w-2xl mb-10">
              Computer Science and Engineering student at Jnana Vikas Institute of Technology (CGPA 8.4/10). 
              Specializing in full-stack architecture with React, Django, and PostgreSQL, alongside intelligent machine learning workflows, NLP, and computer vision.
            </p>

            {/* Primary Action Buttons */}
            <div className="flex flex-wrap items-center justify-center gap-3.5 w-full sm:w-auto mb-10">
              {/* Explore Projects */}
              <button
                onClick={scrollToProjects}
                className="w-full sm:w-auto inline-flex items-center justify-center space-x-2 px-6 py-3.5 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-semibold text-sm shadow-lg shadow-blue-600/25 transition-all hover:scale-[1.02] active:scale-[0.98]"
              >
                <span>Explore Featured Projects</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              {/* Download Resume Button */}
              <a
                href={PROFILE_DATA.resumePdfUrl}
                download="Rakshitha_S_Resume.pdf"
                className="w-full sm:w-auto inline-flex items-center justify-center space-x-2 px-6 py-3.5 rounded-xl bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-500 hover:to-teal-500 text-white font-semibold text-sm shadow-lg shadow-emerald-900/25 transition-all hover:scale-[1.02] active:scale-[0.98]"
              >
                <Download className="w-4 h-4" />
                <span>Download Resume (PDF)</span>
              </a>

              {/* Preview Resume Modal */}
              <button
                onClick={() => setResumeModalOpen(true)}
                className="w-full sm:w-auto inline-flex items-center justify-center space-x-2 px-5 py-3.5 rounded-xl bg-slate-900/90 hover:bg-slate-800 text-slate-200 border border-slate-700/80 font-medium text-sm transition-all"
              >
                <FileText className="w-4 h-4 text-blue-400" />
                <span>Preview Resume</span>
              </button>
            </div>

            {/* Social Links & Verified Profiles */}
            <div className="flex items-center space-x-5 text-sm text-slate-400 mb-14">
              <span className="text-xs uppercase tracking-wider font-semibold text-slate-400">
                Verified Links:
              </span>
              <a
                href={PROFILE_DATA.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-1.5 text-slate-300 hover:text-white transition-colors"
                title="Rakshitha S GitHub Profile"
              >
                <Github className="w-4 h-4" />
                <span className="font-mono text-xs">github/rakshapatil526</span>
              </a>
              <span className="text-slate-700">•</span>
              <a
                href={PROFILE_DATA.linkedinUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-1.5 text-slate-300 hover:text-blue-400 transition-colors"
                title="Rakshitha S LinkedIn Profile"
              >
                <Linkedin className="w-4 h-4 text-blue-400" />
                <span className="font-mono text-xs">linkedin/rakshitha-raksha</span>
              </a>
            </div>

            {/* Quick Metrics Bar */}
            <div className="w-full grid grid-cols-2 md:grid-cols-4 gap-4 p-4 rounded-2xl bg-[#0b101c]/80 border border-slate-800/80 backdrop-blur-md">
              <div className="p-3 text-left">
                <div className="flex items-center space-x-2 text-blue-400 text-xs font-mono mb-1">
                  <Code2 className="w-3.5 h-3.5" />
                  <span>Full-Stack Projects</span>
                </div>
                <div className="text-2xl font-bold text-white">{FULL_STACK_PROJECTS.length} Systems</div>
                <div className="text-[11px] text-slate-400">React, Django &amp; PostgreSQL</div>
              </div>

              <div className="p-3 text-left">
                <div className="flex items-center space-x-2 text-purple-400 text-xs font-mono mb-1">
                  <Cpu className="w-3.5 h-3.5" />
                  <span>AI/ML Projects</span>
                </div>
                <div className="text-2xl font-bold text-white">{AI_ML_PROJECTS.length} Systems</div>
                <div className="text-[11px] text-slate-400">NLP, CV &amp; Predictive ML</div>
              </div>

              <div className="p-3 text-left">
                <div className="flex items-center space-x-2 text-emerald-400 text-xs font-mono mb-1">
                  <GraduationCap className="w-3.5 h-3.5" />
                  <span>Academic Standing</span>
                </div>
                <div className="text-2xl font-bold text-white">8.4 / 10 CGPA</div>
                <div className="text-[11px] text-slate-400">B.E. CSE, 7th Semester</div>
              </div>

              <div className="p-3 text-left">
                <div className="flex items-center space-x-2 text-amber-400 text-xs font-mono mb-1">
                  <Sparkles className="w-3.5 h-3.5" />
                  <span>Experience</span>
                </div>
                <div className="text-2xl font-bold text-white">AI Intern</div>
                <div className="text-[11px] text-slate-400">Pinnacle Labs (Aug 2025)</div>
              </div>
            </div>

          </div>
        </div>
      </section>

      <ResumeModal
        isOpen={resumeModalOpen}
        onClose={() => setResumeModalOpen(false)}
      />
    </>
  );
};
