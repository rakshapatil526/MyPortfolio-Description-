import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Sparkles, Layers } from 'lucide-react';
import { FEATURED_PROJECTS, FULL_STACK_PROJECTS, AI_ML_PROJECTS } from '../data/projects';
import { ProjectCard } from '../components/ProjectCard';
import { SectionHeader } from '../components/SectionHeader';

export const FeaturedProjectsSection: React.FC = () => {
  return (
    <section id="featured-projects" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          badge="Featured Engineering Work"
          badgeVariant="blue"
          title="Flagship Software & AI Systems"
          subtitle="A curated selection of 5 flagship projects highlighting full-stack application development, NLP text classification, clinical risk prediction, and deep convolutional neural networks."
        />

        {/* 5 Featured Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {FEATURED_PROJECTS.map((project, idx) => (
            <div 
              key={project.id} 
              className={idx === 0 || idx === 1 ? 'md:col-span-1 lg:col-span-1' : ''}
            >
              <ProjectCard project={project} featuredMode={true} />
            </div>
          ))}
        </div>

        {/* Bottom banner directing to full portfolios */}
        <div className="mt-14 p-6 rounded-2xl bg-slate-900/60 border border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center space-x-3 text-center sm:text-left">
            <div className="w-10 h-10 rounded-xl bg-blue-500/10 border border-blue-500/30 flex items-center justify-center text-blue-400 shrink-0 hidden sm:flex">
              <Layers className="w-5 h-5" />
            </div>
            <div>
              <h4 className="text-sm font-bold text-white">Looking for the complete project archives?</h4>
              <p className="text-xs text-slate-400">Explore all {FULL_STACK_PROJECTS.length} Full Stack projects and all {AI_ML_PROJECTS.length} AI/ML systems with verified GitHub repositories.</p>
            </div>
          </div>

          <div className="flex items-center space-x-3 shrink-0">
            <Link
              to="/full-stack"
              className="px-4 py-2 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-200 hover:text-white text-xs font-semibold border border-slate-700 transition-colors"
            >
              Full Stack ({FULL_STACK_PROJECTS.length})
            </Link>
            <Link
              to="/ai-ml"
              className="px-4 py-2 rounded-lg bg-blue-600 hover:bg-blue-500 text-white text-xs font-semibold transition-colors shadow-sm"
            >
              AI/ML ({AI_ML_PROJECTS.length})
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};
