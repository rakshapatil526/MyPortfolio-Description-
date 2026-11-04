import React from 'react';

interface BadgeProps {
  children: React.ReactNode;
  variant?: 'blue' | 'purple' | 'emerald' | 'amber' | 'slate' | 'rose' | 'cyan';
  size?: 'sm' | 'md';
  className?: string;
}

export const Badge: React.FC<BadgeProps> = ({
  children,
  variant = 'slate',
  size = 'sm',
  className = '',
}) => {
  const variantStyles = {
    blue: 'bg-blue-500/10 text-blue-400 border-blue-500/20 hover:border-blue-500/40',
    purple: 'bg-purple-500/10 text-purple-400 border-purple-500/20 hover:border-purple-500/40',
    emerald: 'bg-emerald-500/10 text-emerald-400 border-emerald-500/20 hover:border-emerald-500/40',
    amber: 'bg-amber-500/10 text-amber-400 border-amber-500/20 hover:border-amber-500/40',
    slate: 'bg-slate-800/60 text-slate-300 border-slate-700/60 hover:border-slate-600',
    rose: 'bg-rose-500/10 text-rose-400 border-rose-500/20 hover:border-rose-500/40',
    cyan: 'bg-cyan-500/10 text-cyan-400 border-cyan-500/20 hover:border-cyan-500/40',
  };

  const sizeStyles = {
    sm: 'text-xs px-2.5 py-0.5',
    md: 'text-sm px-3 py-1',
  };

  return (
    <span
      className={`inline-flex items-center font-medium rounded-full border transition-colors ${variantStyles[variant]} ${sizeStyles[size]} ${className}`}
    >
      {children}
    </span>
  );
};
