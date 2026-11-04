import React from 'react';
import { Briefcase, Calendar, CheckCircle2, Building, Award } from 'lucide-react';
import { PROFILE_DATA } from '../data/profile';
import { SectionHeader } from '../components/SectionHeader';
import { Badge } from '../components/Badge';

export const ExperienceSection: React.FC = () => {
  return (
    <section id="experience" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          badge="Work History"
          badgeVariant="amber"
          title="Professional Experience"
          subtitle="Hands-on internship experience applying artificial intelligence workflows, data modeling, and practical problem-solving to real-world scenarios."
        />

        <div className="max-w-3xl mx-auto">
          {PROFILE_DATA.experience.map((exp, idx) => (
            <div
              key={idx}
              className="relative pl-8 sm:pl-10 pb-12 border-l-2 border-blue-500/30 last:border-transparent last:pb-0"
            >
              {/* Timeline marker */}
              <div className="absolute -left-[17px] top-0 w-8 h-8 rounded-full bg-[#0b101d] border-2 border-blue-500 flex items-center justify-center text-blue-400 shadow-md shadow-blue-500/20">
                <Briefcase className="w-4 h-4" />
              </div>

              {/* Experience Card */}
              <div className="p-6 sm:p-8 rounded-2xl bg-[#0c1222] border border-slate-800/80 shadow-xl glow-card">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-3">
                  <div>
                    <h3 className="text-xl font-bold text-white">
                      {exp.role}
                    </h3>
                    <div className="flex items-center space-x-2 text-sm text-blue-400 font-medium mt-1">
                      <Building className="w-4 h-4" />
                      <span>{exp.company}</span>
                    </div>
                  </div>

                  <div className="flex items-center space-x-2">
                    <Badge variant="blue" size="sm">
                      <Calendar className="w-3 h-3 mr-1 inline" />
                      {exp.period}
                    </Badge>
                  </div>
                </div>

                <div className="mb-4">
                  <span className="text-xs font-semibold uppercase tracking-wider text-slate-400 font-mono">
                    {exp.type}
                  </span>
                </div>

                {/* Highlights */}
                <div className="space-y-2.5">
                  {exp.highlights.map((item, hIdx) => (
                    <div key={hIdx} className="flex items-start space-x-2.5 text-sm text-slate-300">
                      <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                      <span className="leading-relaxed">{item}</span>
                    </div>
                  ))}
                </div>

                {/* Associated certification badge */}
                <div className="mt-6 pt-4 border-t border-slate-800/80 flex items-center space-x-2 text-xs text-slate-400">
                  <Award className="w-4 h-4 text-amber-400" />
                  <span>Credential: Artificial Intelligence Internship Certificate (Pinnacle Labs, Aug 2025)</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
