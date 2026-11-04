import React from 'react';
import { Award, Trophy, Users, CheckCircle2, Star, CalendarCheck } from 'lucide-react';
import { PROFILE_DATA } from '../data/profile';
import { SectionHeader } from '../components/SectionHeader';
import { Badge } from '../components/Badge';

export const AchievementsSection: React.FC = () => {
  return (
    <section id="achievements" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          badge="Credentials & Leadership"
          badgeVariant="emerald"
          title="Certifications, Hackathons & Leadership"
          subtitle="Proven track record in intensive technical sprints, industry AI credentials, cross-functional collaboration, and campus event leadership."
        />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          
          {/* Left Column: Certifications & Competitions */}
          <div className="space-y-6">
            <h3 className="text-xl font-bold text-white flex items-center space-x-2">
              <Award className="w-5 h-5 text-amber-400" />
              <span>Certifications &amp; Hackathons</span>
            </h3>

            {/* Pinnacle Labs AI Certification */}
            <div className="p-6 rounded-2xl bg-[#0c1222] border border-slate-800/80 shadow-md glow-card">
              <div className="flex items-start justify-between gap-3 mb-2">
                <div>
                  <h4 className="text-base font-bold text-white">
                    Artificial Intelligence Internship
                  </h4>
                  <p className="text-xs text-blue-400 font-medium">Pinnacle Labs</p>
                </div>
                <Badge variant="amber" size="sm">
                  August 2025
                </Badge>
              </div>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-3">
                Completed a rigorous 4-week virtual internship in Artificial Intelligence, gaining practical exposure to core AI concepts, exploratory data analysis, and software development workflows.
              </p>
              <div className="flex items-center space-x-2 text-xs text-emerald-400">
                <CheckCircle2 className="w-3.5 h-3.5" />
                <span>Verified 4-Week Technical Program</span>
              </div>
            </div>

            {/* 24-Hour Intercollegiate Hackathon */}
            <div className="p-6 rounded-2xl bg-[#0c1222] border border-slate-800/80 shadow-md glow-card">
              <div className="flex items-start justify-between gap-3 mb-2">
                <div>
                  <h4 className="text-base font-bold text-white">
                    24-Hour Intercollegiate Hackathon
                  </h4>
                  <p className="text-xs text-purple-400 font-medium">Technical Prototyping Sprint</p>
                </div>
                <Badge variant="purple" size="sm">
                  Hackathon
                </Badge>
              </div>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-3">
                Participated in an intense 24-hour intercollegiate hackathon sprint; strengthened rapid software prototyping, algorithmic problem-solving, cross-functional teamwork, and technical implementation under strict deadlines.
              </p>
              <div className="flex items-center space-x-2 text-xs text-emerald-400">
                <CheckCircle2 className="w-3.5 h-3.5" />
                <span>Functional MVP Delivered Within 24 Hours</span>
              </div>
            </div>
          </div>

          {/* Right Column: Leadership & Soft Skills */}
          <div className="space-y-6">
            <h3 className="text-xl font-bold text-white flex items-center space-x-2">
              <Users className="w-5 h-5 text-blue-400" />
              <span>Leadership &amp; Coordination</span>
            </h3>

            <div className="p-6 rounded-2xl bg-[#0c1222] border border-slate-800/80 shadow-md glow-card space-y-5">
              {PROFILE_DATA.leadership.map((item, idx) => (
                <div key={idx} className="space-y-1.5 last:border-0 border-b border-slate-800/80 pb-4 last:pb-0">
                  <div className="flex items-center space-x-2">
                    <Star className="w-4 h-4 text-amber-400 shrink-0" />
                    <h4 className="text-sm font-bold text-white">
                      {item.category}
                    </h4>
                  </div>
                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed pl-6">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};
