import React from 'react';

interface SectionTitleProps {
  children: React.ReactNode;
}

export function SectionTitle({ children }: SectionTitleProps) {
  return (
    <div className="mb-12 text-center">
      <span className="inline-flex items-center rounded-full border border-blue-300/60 dark:border-blue-700/60 bg-white/70 dark:bg-slate-900/60 px-3 py-1 text-xs font-bold uppercase tracking-[0.2em] text-blue-600 dark:text-blue-300">
        Portfolio
      </span>
      <h2 className="mt-3 text-3xl md:text-4xl font-extrabold gradient-text">{children}</h2>
      <div className="mx-auto mt-3 h-1.5 w-24 rounded-full bg-gradient-to-r from-sky-400 via-blue-500 to-orange-400" />
    </div>
  );
}