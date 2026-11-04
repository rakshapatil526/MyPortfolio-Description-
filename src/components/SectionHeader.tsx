import React from 'react';
import { Badge } from './Badge';

interface SectionHeaderProps {
  badge?: string;
  badgeVariant?: 'blue' | 'purple' | 'emerald' | 'amber' | 'slate' | 'cyan';
  title: string;
  subtitle?: string;
  align?: 'left' | 'center';
  className?: string;
}

export const SectionHeader: React.FC<SectionHeaderProps> = ({
  badge,
  badgeVariant = 'blue',
  title,
  subtitle,
  align = 'center',
  className = '',
}) => {
  return (
    <div
      className={`mb-12 ${
        align === 'center' ? 'text-center mx-auto max-w-3xl' : 'text-left max-w-3xl'
      } ${className}`}
    >
      {badge && (
        <div className="mb-3">
          <Badge variant={badgeVariant} size="sm">
            {badge}
          </Badge>
        </div>
      )}
      <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight text-white mb-4">
        {title}
      </h2>
      {subtitle && (
        <p className="text-slate-400 text-base md:text-lg leading-relaxed">
          {subtitle}
        </p>
      )}
    </div>
  );
};
