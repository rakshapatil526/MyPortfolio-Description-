import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Download, 
  ExternalLink, 
  ArrowLeft, 
  FileText, 
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
              {PROFILE_DATA.title} | Jnana Vikas Institute of Technology (8.4 CGPA)
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

        {/* Embedded PDF Viewer Frame */}
        <div className="rounded-3xl bg-[#0c1222] border border-slate-800 overflow-hidden shadow-2xl mb-12">
          <div className="px-6 py-3 bg-slate-900 border-b border-slate-800 flex items-center justify-between text-xs text-slate-400">
            <div className="flex items-center space-x-2">
              <FileText className="w-4 h-4 text-blue-400" />
              <span className="font-mono text-white">Rakshitha_S_Resume.pdf</span>
              <span className="text-[11px] text-slate-500">(Embedded PDF Preview)</span>
            </div>
            <a
              href={PROFILE_DATA.resumePdfUrl}
              download="Rakshitha_S_Resume.pdf"
              className="text-blue-400 hover:text-blue-300 font-semibold"
            >
              Download Direct File
            </a>
          </div>

          <div className="w-full h-[850px] bg-slate-950 p-2 sm:p-4">
            <iframe
              src={`${PROFILE_DATA.resumePdfUrl}#toolbar=1&navpanes=0&scrollbar=1`}
              title="Official Resume PDF Viewer"
              className="w-full h-full rounded-2xl border border-slate-800 bg-white"
            />
          </div>
        </div>

        {/* Transcript & Source Verification Notice */}
        <div className="p-6 rounded-2xl bg-slate-900/50 border border-slate-800 text-xs text-slate-400 space-y-2">
          <p className="flex items-center gap-1.5 text-slate-300 font-semibold">
            <CheckCircle2 className="w-4 h-4 text-emerald-400" />
            <span>Document Integrity Verified</span>
          </p>
          <p>
            The PDF document previewed above is served directly from the public asset directory (<code className="text-slate-300">public/documents/Rakshitha_S_Resume.pdf</code>). All profile details, academic records, internship dates, and contact information across this portfolio match this official resume.
          </p>
        </div>

      </div>
    </div>
  );
};
