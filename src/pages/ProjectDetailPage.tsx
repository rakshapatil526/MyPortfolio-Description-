import React, { useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { 
  ArrowLeft, 
  Github, 
  FileText, 
  CheckCircle2, 
  Clock, 
  Layers, 
  Server, 
  Database, 
  ShieldCheck, 
  Cpu, 
  AlertTriangle, 
  ExternalLink,
  Download,
  Terminal,
  Activity,
  GitBranch,
  BookOpen
} from 'lucide-react';
import { PROJECT_DETAILS_MAP } from '../data/projectDetails';
import { ALL_PROJECTS } from '../data/projects';
import { Badge } from '../components/Badge';

export const ProjectDetailPage: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const navigate = useNavigate();

  // Scroll to top on slug change
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);

  const detail = slug ? PROJECT_DETAILS_MAP[slug] : null;
  const projectItem = slug ? ALL_PROJECTS.find((p) => p.slug === slug) : null;

  if (!detail || !projectItem) {
    return (
      <div className="pt-32 pb-20 max-w-3xl mx-auto px-4 text-center">
        <h2 className="text-2xl font-bold text-white mb-4">Project Not Found</h2>
        <p className="text-slate-400 text-sm mb-6">
          The requested project specification ({slug}) does not exist in the active catalog.
        </p>
        <Link
          to="/"
          className="px-4 py-2 rounded-lg bg-blue-600 text-white font-semibold text-xs inline-flex items-center gap-1.5"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Return to Home</span>
        </Link>
      </div>
    );
  }

  const parentPortfolioUrl = detail.category === 'Full Stack' ? '/full-stack' : '/ai-ml';

  return (
    <div className="pt-28 pb-24 min-h-screen">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Navigation Breadcrumb */}
        <div className="mb-6 flex items-center justify-between">
          <Link
            to={parentPortfolioUrl}
            className="inline-flex items-center space-x-1.5 text-xs font-semibold text-slate-400 hover:text-white transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Back to {detail.category} Portfolio</span>
          </Link>

          <Badge variant={detail.category === 'Full Stack' ? 'blue' : 'purple'} size="sm">
            {detail.category} • {detail.subCategory}
          </Badge>
        </div>

        {/* Hero Title & Actions Header Card */}
        <div className="p-6 sm:p-10 rounded-3xl bg-[#0c1222] border border-slate-800 shadow-2xl mb-12 relative overflow-hidden">
          <div className="relative z-10 space-y-4">
            
            <div className="flex flex-wrap items-center gap-2">
              {projectItem.isRepoVerified ? (
                <span className="inline-flex items-center space-x-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-emerald-500/10 text-emerald-400 border border-emerald-500/30">
                  <CheckCircle2 className="w-3.5 h-3.5" />
                  <span>Verified GitHub Repository</span>
                </span>
              ) : (
                <span className="inline-flex items-center space-x-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-amber-500/10 text-amber-400 border border-amber-500/30">
                  <Clock className="w-3.5 h-3.5" />
                  <span>Repository Link Pending Verification</span>
                </span>
              )}

              <span className="text-xs font-mono text-slate-400">
                Document ID: SPEC-{detail.slug.toUpperCase()}
              </span>
            </div>

            <h1 className="text-2xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
              {detail.name}
            </h1>

            <p className="text-slate-300 text-sm sm:text-lg leading-relaxed max-w-3xl">
              {detail.tagline}
            </p>

            {/* Action Bar (GitHub, Architecture PDF) - NO Live Demo Buttons! */}
            <div className="pt-4 flex flex-wrap items-center gap-3">
              {/* GitHub Link */}
              {detail.githubUrl ? (
                <a
                  href={detail.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center space-x-2 px-4 py-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-white font-semibold text-xs border border-slate-700 transition-all hover:scale-[1.02]"
                >
                  <Github className="w-4 h-4" />
                  <span>View GitHub Repository</span>
                  <ExternalLink className="w-3.5 h-3.5 text-slate-400" />
                </a>
              ) : (
                <div className="inline-flex items-center space-x-2 px-4 py-2.5 rounded-xl bg-slate-900 text-slate-500 text-xs font-medium border border-slate-800 cursor-not-allowed">
                  <Github className="w-4 h-4 opacity-40" />
                  <span>Repository Pending Upload</span>
                </div>
              )}

              {/* Architecture PDF */}
              <a
                href={detail.architecturePdfUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center space-x-2 px-4 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-semibold text-xs shadow-md shadow-blue-600/30 transition-all hover:scale-[1.02]"
              >
                <FileText className="w-4 h-4" />
                <span>Open Project Architecture PDF</span>
                <Download className="w-3.5 h-3.5 text-blue-200" />
              </a>
            </div>

          </div>
        </div>

        {/* Content Layout Grid */}
        <div className="space-y-12">
          
          {/* Section 1: Overview & Problem Statement */}
          <section className="space-y-6">
            <h2 className="text-xl sm:text-2xl font-bold text-white border-b border-slate-800 pb-3 flex items-center gap-2">
              <BookOpen className="w-5 h-5 text-blue-400" />
              <span>Project Overview &amp; Problem Statement</span>
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="p-6 rounded-2xl bg-[#0c1222] border border-slate-800/80 space-y-3">
                <h3 className="text-sm font-bold text-white uppercase tracking-wider font-mono text-blue-400">
                  System Overview
                </h3>
                <p className="text-sm text-slate-300 leading-relaxed">
                  {detail.overview}
                </p>
              </div>

              <div className="p-6 rounded-2xl bg-[#0c1222] border border-slate-800/80 space-y-3">
                <h3 className="text-sm font-bold text-white uppercase tracking-wider font-mono text-rose-400">
                  Problem Statement
                </h3>
                <p className="text-sm text-slate-300 leading-relaxed">
                  {detail.problemStatement}
                </p>
              </div>
            </div>

            {/* Objectives & Proposed Solution */}
            <div className="p-6 rounded-2xl bg-[#0c1222] border border-slate-800/80 space-y-4">
              <h3 className="text-sm font-bold text-white uppercase tracking-wider font-mono text-emerald-400">
                Objectives &amp; Proposed Solution
              </h3>
              <p className="text-sm text-slate-300 leading-relaxed">
                {detail.proposedSolution}
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 pt-2">
                {detail.objectives.map((obj, i) => (
                  <div key={i} className="flex items-start space-x-2 text-xs text-slate-300">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                    <span>{obj}</span>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Section 2: Main Features (Implemented vs Planned) */}
          <section className="space-y-6">
            <h2 className="text-xl sm:text-2xl font-bold text-white border-b border-slate-800 pb-3 flex items-center gap-2">
              <Activity className="w-5 h-5 text-cyan-400" />
              <span>Core Features &amp; Implementation Status</span>
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {detail.mainFeatures.map((feat, idx) => (
                <div
                  key={idx}
                  className="p-5 rounded-2xl bg-[#0c1222] border border-slate-800/80 flex flex-col justify-between space-y-3"
                >
                  <div className="space-y-1.5">
                    <div className="flex items-center justify-between gap-2">
                      <h3 className="text-base font-bold text-white">
                        {feat.title}
                      </h3>
                      {feat.isImplemented ? (
                        <span className="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/30">
                          Implemented
                        </span>
                      ) : (
                        <span className="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full bg-amber-500/10 text-amber-400 border border-amber-500/30">
                          Planned
                        </span>
                      )}
                    </div>
                    <p className="text-xs text-slate-300 leading-relaxed">
                      {feat.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Section 3: Functional Modules */}
          {detail.functionalModules.length > 0 && (
            <section className="space-y-6">
              <h2 className="text-xl sm:text-2xl font-bold text-white border-b border-slate-800 pb-3 flex items-center gap-2">
                <Layers className="w-5 h-5 text-purple-400" />
                <span>Functional Modules Breakdown</span>
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {detail.functionalModules.map((mod, idx) => (
                  <div key={idx} className="p-6 rounded-2xl bg-[#0c1222] border border-slate-800/80 space-y-3">
                    <h3 className="text-base font-bold text-white">{mod.name}</h3>
                    <p className="text-xs text-slate-400 italic">{mod.role}</p>
                    <div className="space-y-1.5 pt-2">
                      {mod.capabilities.map((cap, cIdx) => (
                        <div key={cIdx} className="flex items-start space-x-2 text-xs text-slate-300">
                          <span className="text-blue-400 font-bold">•</span>
                          <span>{cap}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </section>
          )}

          {/* Section 4: Technology Stack Breakdown */}
          <section className="space-y-6">
            <h2 className="text-xl sm:text-2xl font-bold text-white border-b border-slate-800 pb-3 flex items-center gap-2">
              <Server className="w-5 h-5 text-blue-400" />
              <span>Technology Stack Breakdown</span>
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {detail.techStackBreakdown.map((item, idx) => (
                <div key={idx} className="p-5 rounded-2xl bg-[#0c1222] border border-slate-800/80 space-y-2.5">
                  <span className="text-xs font-mono font-bold text-blue-400 uppercase tracking-wider">
                    {item.category}
                  </span>
                  <div className="flex flex-wrap gap-1.5">
                    {item.technologies.map((t, tIdx) => (
                      <Badge key={tIdx} variant="slate" size="sm">
                        {t}
                      </Badge>
                    ))}
                  </div>
                  <p className="text-xs text-slate-400 leading-relaxed pt-1">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </section>

          {/* Section 5: System Architecture & Data Flow */}
          <section className="space-y-6">
            <h2 className="text-xl sm:text-2xl font-bold text-white border-b border-slate-800 pb-3 flex items-center gap-2">
              <GitBranch className="w-5 h-5 text-emerald-400" />
              <span>System Architecture &amp; Data Flow</span>
            </h2>

            <div className="p-6 rounded-2xl bg-[#0c1222] border border-slate-800/80 space-y-4">
              <p className="text-sm text-slate-300 leading-relaxed">
                {detail.systemArchitecture.overview}
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-2">
                <div className="p-4 rounded-xl bg-slate-900 border border-slate-800 space-y-1.5">
                  <h4 className="text-xs font-bold text-white">Frontend Architecture</h4>
                  <p className="text-xs text-slate-400 leading-relaxed">{detail.systemArchitecture.frontendArchitecture}</p>
                </div>
                <div className="p-4 rounded-xl bg-slate-900 border border-slate-800 space-y-1.5">
                  <h4 className="text-xs font-bold text-white">Backend Architecture</h4>
                  <p className="text-xs text-slate-400 leading-relaxed">{detail.systemArchitecture.backendArchitecture}</p>
                </div>
              </div>

              {/* ASCII Architecture / Flow Diagram */}
              {detail.systemArchitecture.architectureDiagram && (
                <div className="pt-3">
                  <span className="text-xs font-mono text-slate-400 block mb-2 font-semibold">
                    System Architecture &amp; Execution Pipeline:
                  </span>
                  <pre className="p-4 rounded-xl bg-slate-950 border border-slate-800 text-[11px] sm:text-xs text-cyan-300 font-mono overflow-x-auto leading-relaxed scrollbar-thin">
                    {detail.systemArchitecture.architectureDiagram}
                  </pre>
                </div>
              )}
            </div>
          </section>

          {/* Section 6: Database Relational Design */}
          {detail.databaseDesign.tables.length > 0 && (
            <section className="space-y-6">
              <h2 className="text-xl sm:text-2xl font-bold text-white border-b border-slate-800 pb-3 flex items-center gap-2">
                <Database className="w-5 h-5 text-cyan-400" />
                <span>Database Design &amp; Schema Models ({detail.databaseDesign.dbType})</span>
              </h2>

              <p className="text-sm text-slate-400">
                {detail.databaseDesign.summary}
              </p>

              <div className="space-y-6">
                {detail.databaseDesign.tables.map((tbl, tIdx) => (
                  <div key={tIdx} className="rounded-2xl bg-[#0c1222] border border-slate-800/80 overflow-hidden">
                    <div className="px-5 py-3 bg-slate-900/80 border-b border-slate-800 flex items-center justify-between">
                      <div className="flex items-center space-x-2">
                        <Terminal className="w-4 h-4 text-cyan-400" />
                        <span className="font-mono text-xs sm:text-sm font-bold text-white">
                          Table: {tbl.name}
                        </span>
                      </div>
                      <span className="text-xs text-slate-400 hidden sm:inline">{tbl.description}</span>
                    </div>

                    <div className="overflow-x-auto">
                      <table className="w-full text-left text-xs text-slate-300">
                        <thead className="bg-slate-950 text-slate-400 font-mono text-[11px] uppercase">
                          <tr>
                            <th className="px-5 py-2.5">Column Name</th>
                            <th className="px-5 py-2.5">Data Type</th>
                            <th className="px-5 py-2.5">Role / Key</th>
                            <th className="px-5 py-2.5">Description</th>
                          </tr>
                        </thead>
                        <tbody className="divide-y divide-slate-800/60 font-mono">
                          {tbl.columns.map((col, cIdx) => (
                            <tr key={cIdx} className="hover:bg-slate-800/30">
                              <td className="px-5 py-2.5 font-bold text-white">{col.name}</td>
                              <td className="px-5 py-2.5 text-blue-400">{col.type}</td>
                              <td className="px-5 py-2.5">
                                {col.isPrimary && (
                                  <span className="px-2 py-0.5 rounded bg-blue-500/10 text-blue-400 border border-blue-500/20 text-[10px]">
                                    PK
                                  </span>
                                )}
                                {col.isForeign && (
                                  <span className="px-2 py-0.5 rounded bg-purple-500/10 text-purple-400 border border-purple-500/20 text-[10px]">
                                    FK
                                  </span>
                                )}
                              </td>
                              <td className="px-5 py-2.5 font-sans text-slate-400">{col.description}</td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  </div>
                ))}
              </div>
            </section>
          )}

          {/* Section 7: API Endpoints Architecture */}
          {detail.apiEndpoints.length > 0 && (
            <section className="space-y-6">
              <h2 className="text-xl sm:text-2xl font-bold text-white border-b border-slate-800 pb-3 flex items-center gap-2">
                <Server className="w-5 h-5 text-amber-400" />
                <span>REST API Structure &amp; Endpoints</span>
              </h2>

              <div className="space-y-3">
                {detail.apiEndpoints.map((ep, idx) => (
                  <div
                    key={idx}
                    className="p-4 rounded-xl bg-[#0c1222] border border-slate-800/80 flex flex-col sm:flex-row sm:items-center justify-between gap-3 font-mono text-xs"
                  >
                    <div className="flex items-center space-x-3">
                      <span
                        className={`px-2.5 py-1 rounded-md font-bold text-[11px] ${
                          ep.method === 'GET'
                            ? 'bg-blue-500/10 text-blue-400 border border-blue-500/30'
                            : ep.method === 'POST'
                            ? 'bg-emerald-500/10 text-emerald-400 border border-emerald-500/30'
                            : 'bg-amber-500/10 text-amber-400 border border-amber-500/30'
                        }`}
                      >
                        {ep.method}
                      </span>
                      <span className="text-white font-semibold">{ep.path}</span>
                    </div>

                    <div className="flex items-center space-x-3 font-sans text-xs text-slate-300">
                      <span>{ep.description}</span>
                      {ep.authRequired ? (
                        <span className="text-[10px] px-2 py-0.5 rounded bg-rose-500/10 text-rose-400 border border-rose-500/30 font-mono">
                          Auth Required
                        </span>
                      ) : (
                        <span className="text-[10px] px-2 py-0.5 rounded bg-slate-800 text-slate-400 font-mono">
                          Public
                        </span>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </section>
          )}

          {/* Section 8: Authentication & Security */}
          <section className="space-y-6">
            <h2 className="text-xl sm:text-2xl font-bold text-white border-b border-slate-800 pb-3 flex items-center gap-2">
              <ShieldCheck className="w-5 h-5 text-emerald-400" />
              <span>Authentication &amp; Security</span>
            </h2>

            <div className="p-6 rounded-2xl bg-[#0c1222] border border-slate-800/80 space-y-4">
              <div className="flex items-center space-x-2 text-sm text-slate-200">
                <span className="font-semibold text-white">Authorization Paradigm:</span>
                <span className="text-blue-400 font-mono text-xs">{detail.authenticationAndSecurity.authModel}</span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                {detail.authenticationAndSecurity.securityMeasures.map((measure, idx) => (
                  <div key={idx} className="flex items-start space-x-2 text-xs text-slate-300">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5" />
                    <span>{measure}</span>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Section 9: Challenges, Limitations & Future Scope */}
          <section className="space-y-6">
            <h2 className="text-xl sm:text-2xl font-bold text-white border-b border-slate-800 pb-3 flex items-center gap-2">
              <AlertTriangle className="w-5 h-5 text-amber-400" />
              <span>Engineering Challenges, Limitations &amp; Future Scope</span>
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {/* Challenges */}
              <div className="p-6 rounded-2xl bg-[#0c1222] border border-slate-800/80 space-y-3">
                <h3 className="text-sm font-bold text-white uppercase tracking-wider font-mono text-blue-400">
                  Engineering Challenges Overcome
                </h3>
                {detail.challengesAndSolutions.map((c, idx) => (
                  <div key={idx} className="text-xs space-y-1 pb-3 last:pb-0 border-b border-slate-800 last:border-0">
                    <p className="text-slate-200 font-medium">Challenge: {c.challenge}</p>
                    <p className="text-slate-400">Solution: {c.solution}</p>
                  </div>
                ))}
              </div>

              {/* Limitations */}
              <div className="p-6 rounded-2xl bg-[#0c1222] border border-slate-800/80 space-y-3">
                <h3 className="text-sm font-bold text-white uppercase tracking-wider font-mono text-amber-400">
                  Documented Limitations
                </h3>
                <div className="space-y-2">
                  {detail.limitations.map((lim, idx) => (
                    <div key={idx} className="text-xs text-slate-400 flex items-start space-x-1.5">
                      <span className="text-amber-400">•</span>
                      <span>{lim}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Future Scope */}
              <div className="p-6 rounded-2xl bg-[#0c1222] border border-slate-800/80 space-y-3">
                <h3 className="text-sm font-bold text-white uppercase tracking-wider font-mono text-purple-400">
                  Planned Enhancements
                </h3>
                <div className="space-y-2">
                  {detail.futureEnhancements.map((enh, idx) => (
                    <div key={idx} className="text-xs text-slate-300 flex items-start space-x-1.5">
                      <CheckCircle2 className="w-3.5 h-3.5 text-purple-400 shrink-0 mt-0.5" />
                      <span>{enh}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>

          {/* Final Callout & PDF Download Bar */}
          <div className="p-8 rounded-3xl bg-gradient-to-r from-blue-950/40 via-slate-900 to-purple-950/30 border border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-6">
            <div className="space-y-1 text-center sm:text-left">
              <h3 className="text-lg font-bold text-white">
                Download Official Architecture Specification PDF
              </h3>
              <p className="text-xs text-slate-400">
                A clean, formatted multi-page technical document suitable for engineering interviews and architecture reviews.
              </p>
            </div>

            <div className="flex items-center space-x-3 shrink-0">
              <a
                href={detail.architecturePdfUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="px-5 py-3 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-semibold text-xs inline-flex items-center space-x-2 shadow-lg shadow-blue-600/30 transition-all hover:scale-[1.02]"
              >
                <Download className="w-4 h-4" />
                <span>Download Architecture PDF</span>
              </a>
            </div>
          </div>

        </div>

      </div>
    </div>
  );
};
