import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Github, 
  FileText, 
  ArrowRight, 
  Briefcase, 
  Activity, 
  Utensils, 
  BookOpen, 
  GraduationCap, 
  Calendar, 
  CheckSquare, 
  DollarSign, 
  Compass, 
  Layers, 
  Truck, 
  Sparkles, 
  ShieldAlert, 
  HeartPulse, 
  Mail, 
  Edit3, 
  Home, 
  TrendingUp, 
  Film, 
  AlertTriangle, 
  Leaf,
  CheckCircle2,
  Clock
} from 'lucide-react';
import { ProjectItem } from '../data/projects';
import { Badge } from './Badge';

interface ProjectCardProps {
  project: ProjectItem;
  featuredMode?: boolean;
}

const ICON_MAP: Record<string, React.ElementType> = {
  Briefcase,
  Activity,
  Utensils,
  BookOpen,
  GraduationCap,
  Calendar,
  CheckSquare,
  DollarSign,
  Compass,
  Layers,
  Truck,
  Sparkles,
  ShieldAlert,
  HeartPulse,
  Mail,
  Edit3,
  Home,
  TrendingUp,
  Film,
  AlertTriangle,
  Leaf
};

export const ProjectCard: React.FC<ProjectCardProps> = ({ project, featuredMode = false }) => {
  const IconComponent = ICON_MAP[project.iconName] || Layers;

  return (
    <div className="group relative flex flex-col h-full bg-[#0d1322] border border-slate-800 hover:border-slate-700/80 rounded-2xl overflow-hidden transition-all duration-300 hover:shadow-xl hover:shadow-blue-950/20 glow-card">
      {/* Top Banner / Representative Architectural Visual */}
      <div className={`relative h-44 w-full bg-gradient-to-br ${project.accentColor} p-6 flex flex-col justify-between overflow-hidden`}>
        {/* Subtle patterned overlay */}
        <div className="absolute inset-0 bg-slate-950/40 backdrop-blur-[1px]" />
        
        {/* Subtle decorative circles */}
        <div className="absolute -right-8 -bottom-8 w-36 h-36 rounded-full bg-white/10 blur-xl" />
        <div className="absolute -left-8 -top-8 w-32 h-32 rounded-full bg-black/20 blur-lg" />

        {/* Top bar with category & verification badges */}
        <div className="relative z-10 flex items-center justify-between">
          <Badge 
            variant={project.category === 'Full Stack' ? 'blue' : 'purple'} 
            size="sm"
            className="backdrop-blur-md bg-slate-900/80 shadow-sm"
          >
            {project.category}
          </Badge>

          {project.isRepoVerified ? (
            <span className="inline-flex items-center space-x-1 px-2 py-0.5 rounded-full text-xs font-medium bg-emerald-950/80 text-emerald-300 border border-emerald-500/30 backdrop-blur-md">
              <CheckCircle2 className="w-3 h-3 text-emerald-400" />
              <span>Verified Repo</span>
            </span>
          ) : (
            <span className="inline-flex items-center space-x-1 px-2 py-0.5 rounded-full text-xs font-medium bg-amber-950/80 text-amber-300 border border-amber-500/30 backdrop-blur-md">
              <Clock className="w-3 h-3 text-amber-400" />
              <span>Repo Pending</span>
            </span>
          )}
        </div>

        {/* Center / Bottom visual icon and sub-category */}
        <div className="relative z-10 flex items-end justify-between">
          <div className="flex items-center space-x-3">
            <div className="w-12 h-12 rounded-xl bg-slate-900/90 border border-white/15 flex items-center justify-center text-white shadow-lg group-hover:scale-105 transition-transform duration-300">
              <IconComponent className="w-6 h-6 text-slate-100" />
            </div>
            {project.subCategory && (
              <span className="text-xs font-medium text-slate-200 drop-shadow-sm">
                {project.subCategory}
              </span>
            )}
          </div>

          {project.featured && (
            <span className="text-[11px] font-semibold uppercase tracking-wider px-2 py-0.5 rounded bg-blue-500 text-white shadow-md">
              Featured
            </span>
          )}
        </div>
      </div>

      {/* Card Content Body */}
      <div className="flex-1 p-6 flex flex-col justify-between space-y-4">
        <div>
          <h3 className="text-xl font-bold text-white group-hover:text-blue-400 transition-colors mb-2">
            <Link to={`/projects/${project.slug}`}>
              {project.name}
            </Link>
          </h3>
          <p className="text-slate-400 text-sm leading-relaxed line-clamp-3">
            {project.shortDescription}
          </p>
        </div>

        {/* Technology Stack Badges */}
        <div className="space-y-3 pt-2">
          <div className="flex flex-wrap gap-1.5">
            {project.technologies.slice(0, 5).map((tech, i) => (
              <Badge key={i} variant="slate" size="sm">
                {tech}
              </Badge>
            ))}
            {project.technologies.length > 5 && (
              <span className="text-xs text-slate-400 self-center px-1 font-mono">
                +{project.technologies.length - 5}
              </span>
            )}
          </div>
        </div>

        {/* Action Toolbar */}
        <div className="pt-4 mt-auto border-t border-slate-800/80 flex items-center justify-between">
          {/* Left Actions: GitHub & Architecture PDF */}
          <div className="flex items-center space-x-2">
            {/* GitHub Button */}
            {project.githubUrl ? (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg bg-slate-800/90 hover:bg-slate-700 text-slate-300 hover:text-white border border-slate-700/80 transition-all hover:scale-105"
                title={`Open ${project.name} GitHub Repository`}
                aria-label={`Open ${project.name} GitHub Repository`}
              >
                <Github className="w-4 h-4" />
              </a>
            ) : (
              <button
                disabled
                className="p-2 rounded-lg bg-slate-900/60 text-slate-600 border border-slate-800 cursor-not-allowed"
                title="Repository link pending verification"
                aria-label="Repository pending verification"
              >
                <Github className="w-4 h-4 opacity-40" />
              </button>
            )}

            {/* Architecture PDF Button */}
            <a
              href={project.architecturePdfUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center space-x-1.5 px-2.5 py-1.5 rounded-lg bg-slate-800/90 hover:bg-slate-700 text-slate-300 hover:text-blue-300 border border-slate-700/80 text-xs font-medium transition-all hover:scale-105"
              title={`View ${project.name} Architecture PDF`}
              aria-label={`View ${project.name} Architecture PDF`}
            >
              <FileText className="w-3.5 h-3.5 text-blue-400" />
              <span>Arch PDF</span>
            </a>
          </div>

          {/* Right Action: View Details link */}
          <Link
            to={`/projects/${project.slug}`}
            className="inline-flex items-center space-x-1 text-sm font-semibold text-blue-400 hover:text-blue-300 group-hover:translate-x-0.5 transition-all"
          >
            <span>Details</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </div>
  );
};
