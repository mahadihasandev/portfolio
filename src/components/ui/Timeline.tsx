import React from 'react';
import { Briefcase } from 'lucide-react';

interface TimelineItem {
  title: string;
  company: string;
  description: string;
}

interface TimelineProps {
  items: TimelineItem[];
}

export function Timeline({ items }: TimelineProps) {
  return (
    <div className="max-w-3xl mx-auto">
      {items.map((item, index) => (
        <div key={index} className="relative pl-8 pb-8 last:pb-0">
          <div className="absolute left-0 top-0 h-full w-px bg-blue-300/80 dark:bg-blue-800/80" />
          <div className="absolute left-[-8px] top-0 w-4 h-4 rounded-full bg-gradient-to-r from-sky-500 to-blue-600" />

          <div className="group relative soft-card p-6 rounded-2xl hover:shadow-lg transition-transform duration-300 transform hover:-translate-y-1">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />

            <div className="relative z-10">
              <div className="flex items-center gap-2 mb-2">
                <Briefcase className="w-5 h-5 text-blue-600 dark:text-blue-400 group-hover:scale-110 transition-transform duration-300" />
                <h3 className="font-semibold text-lg text-slate-800 dark:text-slate-100">{item.title}</h3>
              </div>
              <p className="text-sm font-medium text-blue-700 dark:text-blue-300 mb-2">{item.company}</p>
              <p className="text-slate-700 dark:text-slate-300">{item.description}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
