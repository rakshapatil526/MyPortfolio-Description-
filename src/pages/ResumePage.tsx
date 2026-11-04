import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Download, 
  ExternalLink, 
  ArrowLeft, 
  CheckCircle2, 
  MapPin, 
  Phone, 
  Mail, 
  Award, 
  Briefcase, 
  GraduationCap 
} from 'lucide-react';
import { PROFILE_DATA } from '../data/profile';
import { Badge } from '../components/Badge';

export const ResumePage: React.FC = () => {
  return (
    <div className="pt-28 pb-20 min-h-screen">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Navigation Breadcrumb */}
        <div className="mb-6">
          <Link
            to="/"
            className="inline-flex items-center space-x-1.5 text-xs font-semibold text-slate-400 hover:text-white transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Back to Home</span>
          </Link>
        </div>

        {/* Header Hero */}
        <div className="p-6 sm:p-8 rounded-3xl bg-[#0c1222] border border-slate-800 shadow-2xl mb-8 flex flex-col md:flex-row md:items-center justify-between gap-6">
          <div className="space-y-2">
            <div className="flex items-center space-x-2">
              <Badge variant="blue" size="sm">
                Official Document
              </Badge>
              <span className="text-xs text-emerald-400 font-mono flex items-center gap-1">
                <CheckCircle2 className="w-3.5 h-3.5" />
                Verified Source File
              </span>
            </div>

            <h1 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
              {PROFILE_DATA.name} — Curriculum Vitae
            </h1>

            <p className="text-sm text-slate-300 font-mono">
              {PROFILE_DATA.title} | Jnana Vikas Institute of Technology (8.7 CGPA)
            </p>

            <div className="flex flex-wrap items-center gap-3 text-xs text-slate-400 pt-1">
              <span className="flex items-center gap-1">
                <Mail className="w-3.5 h-3.5 text-blue-400" />
                {PROFILE_DATA.email}
              </span>
              <span>•</span>
              <span className="flex items-center gap-1">
                <Phone className="w-3.5 h-3.5 text-emerald-400" />
                {PROFILE_DATA.phoneFormatted}
              </span>
              <span>•</span>
              <span className="flex items-center gap-1">
                <MapPin className="w-3.5 h-3.5 text-rose-400" />
                {PROFILE_DATA.location}
              </span>
            </div>
          </div>

          <div className="flex flex-wrap items-center gap-3 shrink-0">
            <a
              href={PROFILE_DATA.resumePdfUrl}
              download="Rakshitha_S_Resume.pdf"
              className="inline-flex items-center space-x-2 px-5 py-3 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-semibold text-xs shadow-lg shadow-blue-600/30 transition-all hover:scale-[1.02]"
            >
              <Download className="w-4 h-4" />
              <span>Download Official PDF</span>
            </a>

            <a
              href={PROFILE_DATA.resumePdfUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center space-x-2 px-4 py-3 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 hover:text-white font-semibold text-xs border border-slate-700 transition-colors"
            >
              <ExternalLink className="w-4 h-4" />
              <span>Open in New Tab</span>
            </a>
          </div>
        </div>

        {/* Resume Download Action Hub (Preview Removed - Direct Download) */}
        <div className="rounded-3xl bg-[#0c1222] border border-slate-800 p-8 sm:p-12 shadow-2xl mb-12 text-center max-w-3xl mx-auto">
          <div className="w-16 h-16 rounded-2xl bg-blue-600/10 border border-blue-500/20 text-blue-400 flex items-center justify-center mx-auto mb-6 shadow-inner">
            <Download className="w-8 h-8" />
          </div>

          <h2 className="text-2xl sm:text-3xl font-bold text-white mb-3">
            Download Official Resume
          </h2>
          <p className="text-slate-400 text-sm max-w-lg mx-auto mb-8 leading-relaxed">
            Access the complete curriculum vitae for <strong className="text-slate-200">Rakshitha S</strong> covering full-stack web engineering, AI/ML research projects, internship experience at Pinnacle Labs, and verified technical skills.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href={PROFILE_DATA.resumePdfUrl}
              download="Rakshitha_S_Resume.pdf"
              className="w-full sm:w-auto inline-flex items-center justify-center space-x-2.5 px-8 py-4 rounded-xl bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-500 hover:to-cyan-500 text-white font-bold text-sm shadow-xl shadow-blue-900/30 transition-all hover:scale-[1.02] active:scale-[0.98]"
            >
              <Download className="w-5 h-5" />
              <span>Download Official Resume (PDF)</span>
            </a>

            <a
              href={PROFILE_DATA.resumePdfUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center space-x-2 px-6 py-4 rounded-xl bg-slate-800/90 hover:bg-slate-700 text-slate-200 hover:text-white font-semibold text-sm border border-slate-700 transition-colors"
            >
              <ExternalLink className="w-4 h-4" />
              <span>Open in New Tab</span>
            </a>
          </div>

          <div className="mt-8 pt-6 border-t border-slate-800/80 flex flex-wrap items-center justify-center gap-6 text-xs text-slate-400 font-mono">
            <span>File: Rakshitha_S_Resume.pdf</span>
            <span>•</span>
            <span>Format: Standard PDF</span>
            <span>•</span>
            <span>Length: 1 Page Executive Format</span>
          </div>
        </div>

        {/* Transcript & Source Verification Notice */}
        <div className="p-6 rounded-2xl bg-slate-900/50 border border-slate-800 text-xs text-slate-400 space-y-2">
          <p className="flex items-center gap-1.5 text-slate-300 font-semibold">
            <CheckCircle2 className="w-4 h-4 text-emerald-400" />
            <span>Document Integrity Verified</span>
          </p>
          <p>
            The PDF document is served directly from the public asset directory (<code className="text-slate-300">public/documents/Rakshitha_S_Resume.pdf</code>). All profile details, academic records, internship dates, and contact information across this portfolio match this official resume.
          </p>
        </div>

      </div>
    </div>
  );
};
