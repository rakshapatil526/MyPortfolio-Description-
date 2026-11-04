import React from 'react';
import { Link } from 'react-router-dom';
import { Layers, Sparkles, ArrowRight, CheckCircle2, ShieldCheck, Database, Cpu } from 'lucide-react';
import { Badge } from '../components/Badge';
import { FULL_STACK_PROJECTS, AI_ML_PROJECTS } from '../data/projects';

export const PortfolioExploreCards: React.FC = () => {
  return (
    <section className="py-12 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          
          {/* Card 1: Explore Full Stack Portfolio */}
          <div className="relative group p-8 rounded-3xl bg-gradient-to-br from-[#0e1628] to-[#0a0f1d] border border-blue-900/40 hover:border-blue-500/50 shadow-xl transition-all duration-300 overflow-hidden glow-card">
            {/* Top ambient highlight */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500/10 blur-[80px] rounded-full pointer-events-none group-hover:bg-blue-500/15 transition-colors" />

            <div className="relative z-10 flex flex-col h-full justify-between space-y-6">
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="w-12 h-12 rounded-2xl bg-blue-500/10 border border-blue-500/30 flex items-center justify-center text-blue-400">
                    <Layers className="w-6 h-6" />
                  </div>
                  <Badge variant="blue" size="md">
                    {FULL_STACK_PROJECTS.length} Projects Included
                  </Badge>
                </div>

                <h3 className="text-2xl sm:text-3xl font-extrabold text-white mb-3 group-hover:text-blue-300 transition-colors">
                  Explore Full Stack Projects
                </h3>
                
                <p className="text-slate-400 text-sm sm:text-base leading-relaxed mb-6">
                  Enterprise-grade web systems engineered with React.js, Python Django REST Framework, and PostgreSQL. 
                  Featuring multi-role workflows, JWT authentication, and transactional database integrity.
                </p>

                {/* Highlights list */}
                <div className="grid grid-cols-2 gap-2 text-xs text-slate-300 pt-2 border-t border-slate-800/80">
                  <div className="flex items-center space-x-1.5">
                    <CheckCircle2 className="w-3.5 h-3.5 text-blue-400 shrink-0" />
                    <span>JobConnect AI Portal</span>
                  </div>
                  <div className="flex items-center space-x-1.5">
                    <CheckCircle2 className="w-3.5 h-3.5 text-blue-400 shrink-0" />
                    <span>SmartCare 16-Role HMS</span>
                  </div>
                  <div className="flex items-center space-x-1.5">
                    <CheckCircle2 className="w-3.5 h-3.5 text-blue-400 shrink-0" />
                    <span>SwiftBite Restaurant App</span>
                  </div>
                  <div className="flex items-center space-x-1.5">
                    <CheckCircle2 className="w-3.5 h-3.5 text-blue-400 shrink-0" />
                    <span>LiberSys Library System</span>
                  </div>
                </div>
              </div>

              {/* Action Link Button */}
              <div className="pt-4">
                <Link
                  to="/full-stack"
                  className="inline-flex items-center justify-between w-full px-5 py-3.5 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-semibold text-sm shadow-md transition-all group-hover:shadow-blue-600/30"
                >
                  <span>Open Full Stack Portfolio</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>
          </div>

          {/* Card 2: Explore AI/ML Portfolio */}
          <div className="relative group p-8 rounded-3xl bg-gradient-to-br from-[#150f28] to-[#0d091a] border border-purple-900/40 hover:border-purple-500/50 shadow-xl transition-all duration-300 overflow-hidden glow-card-purple">
            {/* Top ambient highlight */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-purple-500/10 blur-[80px] rounded-full pointer-events-none group-hover:bg-purple-500/15 transition-colors" />

            <div className="relative z-10 flex flex-col h-full justify-between space-y-6">
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="w-12 h-12 rounded-2xl bg-purple-500/10 border border-purple-500/30 flex items-center justify-center text-purple-400">
                    <Sparkles className="w-6 h-6" />
                  </div>
                  <Badge variant="purple" size="md">
                    {AI_ML_PROJECTS.length} Projects Included
                  </Badge>
                </div>

                <h3 className="text-2xl sm:text-3xl font-extrabold text-white mb-3 group-hover:text-purple-300 transition-colors">
                  Explore AI/ML Projects
                </h3>
                
                <p className="text-slate-400 text-sm sm:text-base leading-relaxed mb-6">
                  Intelligent machine learning and deep learning pipelines. Spanning Natural Language Processing, 
                  Computer Vision (CNN ~99.1% on MNIST), clinical risk modeling, and predictive regression.
                </p>

                {/* Highlights list */}
                <div className="grid grid-cols-2 gap-2 text-xs text-slate-300 pt-2 border-t border-slate-800/80">
                  <div className="flex items-center space-x-1.5">
                    <CheckCircle2 className="w-3.5 h-3.5 text-purple-400 shrink-0" />
                    <span>AI Quiz &amp; EdTech RAG</span>
                  </div>
                  <div className="flex items-center space-x-1.5">
                    <CheckCircle2 className="w-3.5 h-3.5 text-purple-400 shrink-0" />
                    <span>Fake News Dual-Consensus</span>
                  </div>
                  <div className="flex items-center space-x-1.5">
                    <CheckCircle2 className="w-3.5 h-3.5 text-purple-400 shrink-0" />
                    <span>CareAI Diabetes Screening</span>
                  </div>
                  <div className="flex items-center space-x-1.5">
                    <CheckCircle2 className="w-3.5 h-3.5 text-purple-400 shrink-0" />
                    <span>CNN Digit Canvas (~99.1%)</span>
                  </div>
                </div>
              </div>

              {/* Action Link Button */}
              <div className="pt-4">
                <Link
                  to="/ai-ml"
                  className="inline-flex items-center justify-between w-full px-5 py-3.5 rounded-xl bg-purple-600 hover:bg-purple-500 text-white font-semibold text-sm shadow-md transition-all group-hover:shadow-purple-600/30"
                >
                  <span>Open AI/ML Portfolio</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
