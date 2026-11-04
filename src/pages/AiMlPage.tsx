import React, { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { 
  Sparkles, 
  Search, 
  Filter, 
  ArrowLeft, 
  CheckCircle2, 
  Clock, 
  Layers, 
  Cpu, 
  Brain, 
  Binary 
} from 'lucide-react';
import { AI_ML_PROJECTS, FULL_STACK_PROJECTS } from '../data/projects';
import { ProjectCard } from '../components/ProjectCard';
import { Badge } from '../components/Badge';

export const AiMlPage: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedSubCategory, setSelectedSubCategory] = useState('All');

  const subCategories = useMemo(() => {
    const set = new Set<string>();
    AI_ML_PROJECTS.forEach((p) => {
      if (p.subCategory) set.add(p.subCategory);
    });
    return ['All', ...Array.from(set)];
  }, []);

  const filteredProjects = useMemo(() => {
    return AI_ML_PROJECTS.filter((p) => {
      const matchesSearch =
        p.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        p.shortDescription.toLowerCase().includes(searchQuery.toLowerCase()) ||
        p.technologies.some((t) => t.toLowerCase().includes(searchQuery.toLowerCase()));

      const matchesCategory =
        selectedSubCategory === 'All' || p.subCategory === selectedSubCategory;

      return matchesSearch && matchesCategory;
    });
  }, [searchQuery, selectedSubCategory]);

  const verifiedCount = AI_ML_PROJECTS.filter((p) => p.isRepoVerified).length;
  const pendingCount = AI_ML_PROJECTS.length - verifiedCount;

  return (
    <div className="pt-28 pb-20 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Back navigation & Header */}
        <div className="mb-8">
          <Link
            to="/"
            className="inline-flex items-center space-x-1.5 text-xs font-semibold text-slate-400 hover:text-white transition-colors mb-4"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Back to Main Portfolio</span>
          </Link>

          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 pb-8 border-b border-slate-800">
            <div>
              <div className="flex items-center space-x-2.5 mb-3">
                <div className="w-10 h-10 rounded-xl bg-purple-500/10 border border-purple-500/30 flex items-center justify-center text-purple-400">
                  <Sparkles className="w-5 h-5" />
                </div>
                <Badge variant="purple" size="md">
                  Portfolio 3 of 3
                </Badge>
              </div>

              <h1 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight mb-3">
                Artificial Intelligence &amp; Machine Learning Portfolio
              </h1>

              <p className="text-slate-400 text-sm sm:text-base max-w-3xl leading-relaxed">
                Applied research and engineering projects across Natural Language Processing (NLP), Deep Learning (CNNs), Computer Vision, Clinical Risk Modeling, and Multi-Variable Predictive Regression.
              </p>
            </div>

            {/* Quick stats pills */}
            <div className="flex flex-wrap items-center gap-3 shrink-0">
              <div className="px-4 py-2 rounded-xl bg-slate-900 border border-slate-800 flex items-center space-x-2 text-xs">
                <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                <span className="text-slate-200 font-semibold">{verifiedCount} Repositories Verified</span>
              </div>
              <div className="px-4 py-2 rounded-xl bg-slate-900 border border-slate-800 flex items-center space-x-2 text-xs">
                <Clock className="w-4 h-4 text-amber-400" />
                <span className="text-slate-200 font-semibold">{pendingCount} Blueprints Pending</span>
              </div>
            </div>
          </div>
        </div>

        {/* AI Pillars Banner */}
        <div className="mb-10 grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="p-4 rounded-xl bg-[#0f0d22] border border-purple-900/40 flex items-start space-x-3">
            <Brain className="w-5 h-5 text-purple-400 shrink-0 mt-0.5" />
            <div>
              <h4 className="text-xs font-bold text-white mb-0.5">Natural Language Processing</h4>
              <p className="text-[11px] text-slate-400">TF-IDF vectorization, Porter stemming, stop-word elimination, and multi-model consensus for disinformation and spam detection.</p>
            </div>
          </div>

          <div className="p-4 rounded-xl bg-[#0f0d22] border border-purple-900/40 flex items-start space-x-3">
            <Cpu className="w-5 h-5 text-blue-400 shrink-0 mt-0.5" />
            <div>
              <h4 className="text-xs font-bold text-white mb-0.5">Deep Learning &amp; Computer Vision</h4>
              <p className="text-[11px] text-slate-400">Convolutional Neural Networks (CNNs) with center-of-mass alignment on MNIST (~99.1% test accuracy) and OpenCV preprocessing.</p>
            </div>
          </div>

          <div className="p-4 rounded-xl bg-[#0f0d22] border border-purple-900/40 flex items-start space-x-3">
            <Binary className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
            <div>
              <h4 className="text-xs font-bold text-white mb-0.5">Clinical &amp; Tabular Predictive ML</h4>
              <p className="text-[11px] text-slate-400">RandomForest ensembles, StandardScaler feature pipelines, and WHO/ADA clinical benchmarks with hold-out metric validation.</p>
            </div>
          </div>
        </div>

        {/* Search & Filter Toolbar */}
        <div className="mb-10 flex flex-col md:flex-row items-center justify-between gap-4 p-4 rounded-2xl bg-slate-900/60 border border-slate-800">
          {/* Search input */}
          <div className="relative w-full md:w-80">
            <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search by model, library, or feature..."
              className="w-full pl-10 pr-4 py-2 rounded-xl bg-slate-950 border border-slate-800 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-purple-500 transition-colors"
            />
          </div>

          {/* Subcategory Filter Chips */}
          <div className="flex items-center space-x-1.5 overflow-x-auto w-full md:w-auto pb-2 md:pb-0 scrollbar-none">
            <span className="text-xs font-mono text-slate-400 mr-1 shrink-0 flex items-center gap-1">
              <Filter className="w-3.5 h-3.5" />
              <span>Filter:</span>
            </span>
            {subCategories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedSubCategory(cat)}
                className={`px-3 py-1 rounded-lg text-xs font-semibold whitespace-nowrap transition-all ${
                  selectedSubCategory === cat
                    ? 'bg-purple-600 text-white shadow-sm'
                    : 'bg-slate-800/60 hover:bg-slate-800 text-slate-300 hover:text-white border border-slate-700/60'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Project Grid */}
        {filteredProjects.length === 0 ? (
          <div className="p-16 rounded-2xl bg-[#0c1222] border border-slate-800 text-center space-y-3">
            <p className="text-base text-slate-300 font-semibold">No AI/ML projects match your query.</p>
            <p className="text-xs text-slate-500">Try adjusting your search terms or clearing the active subcategory filter.</p>
            <button
              onClick={() => {
                setSearchQuery('');
                setSelectedSubCategory('All');
              }}
              className="px-4 py-2 rounded-lg bg-purple-600 text-white text-xs font-semibold"
            >
              Reset Filters
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        )}

        {/* Footer Navigation to Full Stack Portfolio */}
        <div className="mt-16 p-8 rounded-3xl bg-gradient-to-r from-blue-950/40 to-slate-900 border border-blue-900/40 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="space-y-1 text-center sm:text-left">
            <h3 className="text-lg font-bold text-white flex items-center gap-2 justify-center sm:justify-start">
              <Layers className="w-5 h-5 text-blue-400" />
              <span>Explore the Full Stack Development Portfolio</span>
            </h3>
            <p className="text-xs text-slate-400">
              Discover {FULL_STACK_PROJECTS.length} full-stack web platforms engineered with React, Django REST Framework, and PostgreSQL.
            </p>
          </div>

          <Link
            to="/full-stack"
            className="px-5 py-3 rounded-xl bg-blue-600 hover:bg-blue-500 text-white text-xs font-semibold shrink-0 shadow-md transition-colors"
          >
            Open Full Stack Portfolio →
          </Link>
        </div>

      </div>
    </div>
  );
};
