import React from 'react';
import { X, Download, ExternalLink, FileText, CheckCircle2 } from 'lucide-react';
import { PROFILE_DATA } from '../data/profile';

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ResumeModal: React.FC<ResumeModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-8 bg-black/80 backdrop-blur-sm animate-fadeIn">
      <div 
        className="relative w-full max-w-4xl h-[90vh] bg-[#0c1222] border border-slate-700/80 rounded-2xl shadow-2xl flex flex-col overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-slate-800 bg-[#0f172a]">
          <div className="flex items-center space-x-3">
            <div className="w-9 h-9 rounded-lg bg-blue-500/10 border border-blue-500/30 flex items-center justify-center text-blue-400">
              <FileText className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-base sm:text-lg font-bold text-white flex items-center gap-2">
                Rakshitha S — Official Resume
                <span className="text-xs px-2 py-0.5 rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/30 font-normal">
                  Verified PDF
                </span>
              </h3>
              <p className="text-xs text-slate-400">
                B.E. Computer Science & Engineering | Jnana Vikas Institute of Technology
              </p>
            </div>
          </div>

          <div className="flex items-center space-x-2">
            <a
              href={PROFILE_DATA.resumePdfUrl}
              download="Rakshitha_S_Resume.pdf"
              className="inline-flex items-center space-x-1.5 px-3.5 py-1.5 rounded-lg bg-blue-600 hover:bg-blue-500 text-white text-xs sm:text-sm font-semibold transition-colors shadow-sm"
            >
              <Download className="w-4 h-4" />
              <span className="hidden sm:inline">Download PDF</span>
            </a>
            <a
              href={PROFILE_DATA.resumePdfUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="p-1.5 sm:px-3 sm:py-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 text-xs sm:text-sm font-medium transition-colors border border-slate-700 flex items-center gap-1.5"
              title="Open PDF in new browser tab"
            >
              <ExternalLink className="w-4 h-4" />
              <span className="hidden sm:inline">Open Tab</span>
            </a>
            <button
              onClick={onClose}
              className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Content Body */}
        <div className="flex-1 bg-slate-950 p-2 sm:p-4 overflow-hidden relative">
          <iframe
            src={`${PROFILE_DATA.resumePdfUrl}#toolbar=1&navpanes=0&scrollbar=1`}
            title="Rakshitha S Resume Preview"
            className="w-full h-full rounded-lg border border-slate-800 bg-white"
          />

          {/* Mobile Fallback Overlay if iframe cannot render on some mobile browsers */}
          <noscript>
            <div className="absolute inset-0 flex flex-col items-center justify-center p-6 text-center bg-slate-900 text-slate-300">
              <p className="mb-4">PDF preview requires JavaScript. You can download the resume directly below:</p>
              <a
                href={PROFILE_DATA.resumePdfUrl}
                download
                className="px-4 py-2 bg-blue-600 text-white rounded-lg font-semibold"
              >
                Download Rakshitha_S_Resume.pdf
              </a>
            </div>
          </noscript>
        </div>

        {/* Footer info banner */}
        <div className="px-6 py-2.5 bg-[#090e1a] border-t border-slate-800 flex items-center justify-between text-xs text-slate-400">
          <div className="flex items-center space-x-2">
            <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
            <span>Source Document: <code className="text-slate-300">public/documents/Rakshitha_S_Resume.pdf</code></span>
          </div>
          <span className="hidden md:inline">Contact: {PROFILE_DATA.phoneFormatted} | {PROFILE_DATA.email}</span>
        </div>
      </div>
    </div>
  );
};
