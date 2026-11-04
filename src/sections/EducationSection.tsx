import React from 'react';
import { GraduationCap, Calendar, MapPin, Award, BookOpen, CheckCircle2 } from 'lucide-react';
import { PROFILE_DATA } from '../data/profile';
import { SectionHeader } from '../components/SectionHeader';
import { Badge } from '../components/Badge';

export const EducationSection: React.FC = () => {
  const edu = PROFILE_DATA.education;

  return (
    <section id="education" className="py-20 relative bg-[#090d18]/60 border-y border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          badge="Academic Background"
          badgeVariant="purple"
          title="Education & Academic Standing"
          subtitle="Rigorous foundations in Computer Science and Engineering, data structures, algorithms, relational databases, and systems architecture."
        />

        <div className="max-w-3xl mx-auto">
          <div className="p-6 sm:p-8 rounded-2xl bg-[#0c1222] border border-slate-800/80 shadow-xl glow-card">
            
            {/* Header info */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-6 pb-6 border-b border-slate-800/80">
              <div className="flex items-start space-x-3.5">
                <div className="w-12 h-12 rounded-xl bg-purple-500/10 border border-purple-500/20 flex items-center justify-center text-purple-400 shrink-0 mt-0.5">
                  <GraduationCap className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-xl sm:text-2xl font-bold text-white">
                    {edu.degree}
                  </h3>
                  <p className="text-base font-medium text-slate-300 mt-1">
                    {edu.institution}
                  </p>
                  <p className="text-xs text-slate-400 flex items-center gap-1 mt-1">
                    <MapPin className="w-3.5 h-3.5 text-rose-400" />
                    {edu.location}
                  </p>
                </div>
              </div>

              <div className="flex flex-col items-start sm:items-end space-y-2 shrink-0">
                <Badge variant="purple" size="sm">
                  <Calendar className="w-3 h-3 mr-1 inline" />
                  {edu.period}
                </Badge>
                <div className="inline-flex items-center space-x-1.5 px-3 py-1 rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/30 text-xs font-bold">
                  <Award className="w-3.5 h-3.5" />
                  <span>CGPA: {edu.cgpa}</span>
                </div>
                <span className="text-xs text-slate-400 font-mono">
                  Current Status: {edu.currentSemester}
                </span>
              </div>
            </div>

            {/* Relevant Coursework */}
            <div>
              <div className="flex items-center space-x-2 text-sm font-semibold text-slate-200 mb-3">
                <BookOpen className="w-4 h-4 text-blue-400" />
                <span>Relevant Academic Coursework</span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
                {edu.coursework.map((course, idx) => (
                  <div
                    key={idx}
                    className="flex items-center space-x-2 p-2.5 rounded-lg bg-slate-900/80 border border-slate-800 text-slate-300"
                  >
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                    <span>{course}</span>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};
