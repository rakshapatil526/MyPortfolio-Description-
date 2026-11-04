import React, { useState } from 'react';
import { 
  Code, 
  Layout, 
  Server, 
  Database, 
  Cpu, 
  Wrench, 
  Terminal,
  CheckCircle2
} from 'lucide-react';
import { PROFILE_DATA } from '../data/profile';
import { SectionHeader } from '../components/SectionHeader';
import { Badge } from '../components/Badge';

const CATEGORY_ICONS: Record<string, React.ElementType> = {
  'Programming Languages': Code,
  'Frontend Development': Layout,
  'Backend & REST APIs': Server,
  'Databases & Storage': Database,
  'AI / ML & Computer Vision': Cpu,
  'Developer Tools & Practices': Wrench,
  'Core Computer Science': Terminal,
};

export const SkillsSection: React.FC = () => {
  const [activeTab, setActiveTab] = useState<string>('All');

  const categories = ['All', ...PROFILE_DATA.skillCategories.map((c) => c.name)];

  const displayedCategories =
    activeTab === 'All'
      ? PROFILE_DATA.skillCategories
      : PROFILE_DATA.skillCategories.filter((c) => c.name === activeTab);

  return (
    <section id="skills" className="py-20 relative bg-[#090d18]/60 border-y border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          badge="Technical Expertise"
          badgeVariant="emerald"
          title="Skills & Technologies"
          subtitle="A comprehensive overview of programming languages, frontend and backend frameworks, databases, and AI/ML workflows applied across production projects."
        />

        {/* Category Filter Tabs */}
        <div className="flex items-center justify-center flex-wrap gap-2 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveTab(cat)}
              className={`px-3.5 py-1.5 rounded-lg text-xs font-semibold transition-all ${
                activeTab === cat
                  ? 'bg-blue-600 text-white shadow-md shadow-blue-600/30'
                  : 'bg-slate-800/60 hover:bg-slate-800 text-slate-300 hover:text-white border border-slate-700/60'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Skill Category Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {displayedCategories.map((cat) => {
            const IconComponent = CATEGORY_ICONS[cat.name] || Terminal;
            return (
              <div
                key={cat.name}
                className="p-6 rounded-2xl bg-[#0c1222] border border-slate-800/80 hover:border-slate-700/80 transition-all glow-card"
              >
                <div className="flex items-center space-x-3 mb-4">
                  <div className="w-10 h-10 rounded-xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center text-blue-400">
                    <IconComponent className="w-5 h-5" />
                  </div>
                  <h3 className="text-base font-bold text-white">
                    {cat.name}
                  </h3>
                </div>

                <div className="flex flex-wrap gap-2">
                  {cat.skills.map((skill) => (
                    <span
                      key={skill.name}
                      className="inline-flex items-center space-x-1.5 px-3 py-1 rounded-lg text-xs font-medium bg-slate-900/90 text-slate-200 border border-slate-800 hover:border-slate-700 hover:text-white transition-colors"
                    >
                      <CheckCircle2 className="w-3 h-3 text-emerald-400 shrink-0" />
                      <span>{skill.name}</span>
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
