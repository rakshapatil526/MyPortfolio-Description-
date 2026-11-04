import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { 
  FileText, 
  Download, 
  Menu, 
  X, 
  Github, 
  Linkedin, 
  Layers, 
  Sparkles,
  ExternalLink 
} from 'lucide-react';
import { PROFILE_DATA } from '../data/profile';
import { ResumeModal } from './ResumeModal';

export const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [resumeModalOpen, setResumeModalOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location.pathname]);

  const navLinks = [
    { label: 'Home', path: '/' },
    { label: 'Full Stack', path: '/full-stack' },
    { label: 'AI/ML', path: '/ai-ml' },
    { label: 'About', path: '/#about' },
    { label: 'Resume', path: '/resume', isResumeAction: true },
    { label: 'Contact', path: '/#contact' },
  ];

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, path: string) => {
    if (path.startsWith('/#')) {
      const targetId = path.replace('/#', '');
      if (location.pathname === '/') {
        e.preventDefault();
        const element = document.getElementById(targetId);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }
    }
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          isScrolled
            ? 'bg-[#070a12]/90 backdrop-blur-md border-b border-slate-800/80 shadow-lg shadow-black/30 py-3.5'
            : 'bg-transparent py-5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Logo / Brand Name */}
            <Link 
              to="/" 
              className="flex items-center space-x-2.5 group"
            >
              <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-blue-600 to-cyan-500 p-[1.5px] shadow-md group-hover:scale-105 transition-transform duration-200">
                <div className="w-full h-full bg-[#090d16] rounded-[10px] flex items-center justify-center font-mono font-bold text-base text-white">
                  RS
                </div>
              </div>
              <div className="flex flex-col">
                <span className="font-extrabold text-lg tracking-tight text-white group-hover:text-blue-400 transition-colors">
                  {PROFILE_DATA.name}
                </span>
                <span className="text-[11px] font-medium text-slate-400 font-mono hidden sm:inline">
                  Full-Stack &amp; AI/ML
                </span>
              </div>
            </Link>

            {/* Desktop Navigation Links */}
            <nav className="hidden md:flex items-center space-x-1 lg:space-x-2">
              {navLinks.map((link) => {
                const isActive = location.pathname === link.path;
                return (
                  <Link
                    key={link.label}
                    to={link.path}
                    onClick={(e) => handleNavClick(e, link.path)}
                    className={`px-3 py-1.5 rounded-lg text-sm font-medium transition-all ${
                      isActive
                        ? 'text-white bg-slate-800/80 font-semibold shadow-sm border border-slate-700/60'
                        : 'text-slate-300 hover:text-white hover:bg-slate-800/40'
                    }`}
                  >
                    {link.label}
                  </Link>
                );
              })}
            </nav>

            {/* Right Action Buttons */}
            <div className="hidden sm:flex items-center space-x-3">
              {/* Resume Preview Modal Trigger */}
              <button
                onClick={() => setResumeModalOpen(true)}
                className="inline-flex items-center space-x-1.5 px-3 py-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-200 hover:text-white text-xs font-semibold border border-slate-700 transition-colors"
                title="Preview Official Resume PDF"
              >
                <FileText className="w-3.5 h-3.5 text-blue-400" />
                <span>Preview</span>
              </button>

              {/* Download Resume Direct */}
              <a
                href={PROFILE_DATA.resumePdfUrl}
                download="Rakshitha_S_Resume.pdf"
                className="inline-flex items-center space-x-1.5 px-3.5 py-1.5 rounded-lg bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-500 hover:to-cyan-500 text-white text-xs font-semibold shadow-md shadow-blue-900/30 transition-all hover:scale-[1.02]"
                title="Download Official Resume PDF"
              >
                <Download className="w-3.5 h-3.5" />
                <span>Resume</span>
              </a>

              {/* GitHub Link */}
              <a
                href={PROFILE_DATA.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"
                title="Rakshitha's GitHub Profile"
                aria-label="GitHub Profile"
              >
                <Github className="w-4 h-4" />
              </a>

              {/* LinkedIn Link */}
              <a
                href={PROFILE_DATA.linkedinUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"
                title="Rakshitha's LinkedIn Profile"
                aria-label="LinkedIn Profile"
              >
                <Linkedin className="w-4 h-4" />
              </a>
            </div>

            {/* Mobile Hamburger Button */}
            <div className="flex md:hidden items-center space-x-2">
              <button
                onClick={() => setResumeModalOpen(true)}
                className="p-2 rounded-lg bg-slate-800 text-blue-400 border border-slate-700"
                title="Preview Resume"
              >
                <FileText className="w-4 h-4" />
              </button>

              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-2 rounded-lg bg-slate-800 text-slate-300 hover:text-white border border-slate-700"
                aria-label="Toggle navigation menu"
              >
                {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        {mobileMenuOpen && (
          <div className="md:hidden border-b border-slate-800 bg-[#090d16]/98 backdrop-blur-xl px-4 pt-4 pb-6 space-y-3 animate-fadeIn">
            <div className="space-y-1">
              {navLinks.map((link) => (
                <Link
                  key={link.label}
                  to={link.path}
                  onClick={(e) => {
                    handleNavClick(e, link.path);
                    setMobileMenuOpen(false);
                  }}
                  className={`block px-3 py-2 rounded-lg text-base font-medium ${
                    location.pathname === link.path
                      ? 'text-white bg-slate-800/80 font-semibold'
                      : 'text-slate-300 hover:text-white hover:bg-slate-800/40'
                  }`}
                >
                  {link.label}
                </Link>
              ))}
            </div>

            <div className="pt-4 border-t border-slate-800 flex flex-col space-y-2">
              <a
                href={PROFILE_DATA.resumePdfUrl}
                download="Rakshitha_S_Resume.pdf"
                className="w-full flex items-center justify-center space-x-2 py-2.5 rounded-lg bg-blue-600 text-white font-semibold text-sm shadow-md"
              >
                <Download className="w-4 h-4" />
                <span>Download Resume (PDF)</span>
              </a>

              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  setResumeModalOpen(true);
                }}
                className="w-full flex items-center justify-center space-x-2 py-2 rounded-lg bg-slate-800 text-slate-200 border border-slate-700 font-medium text-sm"
              >
                <FileText className="w-4 h-4 text-blue-400" />
                <span>Preview Resume In Modal</span>
              </button>

              <div className="pt-2 flex items-center justify-center space-x-4">
                <a
                  href={PROFILE_DATA.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-1.5 text-xs text-slate-400 hover:text-white"
                >
                  <Github className="w-4 h-4" />
                  <span>GitHub</span>
                </a>
                <span className="text-slate-700">•</span>
                <a
                  href={PROFILE_DATA.linkedinUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-1.5 text-xs text-slate-400 hover:text-white"
                >
                  <Linkedin className="w-4 h-4" />
                  <span>LinkedIn</span>
                </a>
              </div>
            </div>
          </div>
        )}
      </header>

      {/* Global Resume Preview Modal */}
      <ResumeModal
        isOpen={resumeModalOpen}
        onClose={() => setResumeModalOpen(false)}
      />
    </>
  );
};
