import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Home, Layers, Sparkles } from 'lucide-react';

export const NotFoundPage: React.FC = () => {
  return (
    <div className="pt-36 pb-24 min-h-screen flex items-center justify-center">
      <div className="max-w-md mx-auto px-4 text-center space-y-6">
        <div className="w-20 h-20 rounded-3xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center text-blue-400 mx-auto text-3xl font-mono font-bold">
          404
        </div>

        <div className="space-y-2">
          <h1 className="text-2xl sm:text-3xl font-extrabold text-white">Page Not Found</h1>
          <p className="text-sm text-slate-400">
            The requested page does not exist or has been moved. Explore the developer portfolios below:
          </p>
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-2">
          <Link
            to="/"
            className="w-full sm:w-auto px-5 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-semibold text-xs flex items-center justify-center gap-2"
          >
            <Home className="w-4 h-4" />
            <span>Home</span>
          </Link>
          <Link
            to="/full-stack"
            className="w-full sm:w-auto px-5 py-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-white font-semibold text-xs flex items-center justify-center gap-2 border border-slate-700"
          >
            <Layers className="w-4 h-4" />
            <span>Full Stack</span>
          </Link>
          <Link
            to="/ai-ml"
            className="w-full sm:w-auto px-5 py-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-white font-semibold text-xs flex items-center justify-center gap-2 border border-slate-700"
          >
            <Sparkles className="w-4 h-4" />
            <span>AI/ML</span>
          </Link>
        </div>
      </div>
    </div>
  );
};
