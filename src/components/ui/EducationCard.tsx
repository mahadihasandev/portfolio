
import { GraduationCap } from 'lucide-react';

interface EducationCardProps {
  degree: string;
  institution: string;
  passingYear?: string; // optional since not every entry has it
}

export function EducationCard({ degree, institution, passingYear }: EducationCardProps) {
  return (
    <div className="group relative soft-card p-6 rounded-2xl hover:shadow-lg transition-transform duration-300 transform hover:-translate-y-1">
      <div className="absolute inset-0 bg-gradient-to-r from-purple-500/10 to-blue-500/10 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />

      <div className="relative z-10">
        <div className="flex items-start gap-4 mb-4">
          <div className="p-3 bg-purple-100 dark:bg-purple-900 rounded-lg group-hover:scale-110 transition-transform duration-300">
            <GraduationCap className="w-6 h-6 text-purple-600 dark:text-purple-400" />
          </div>

          <div>
            <h3 className="font-semibold mb-1 text-slate-800 dark:text-slate-100">{degree}</h3>
            <p className="text-slate-600 dark:text-slate-300 mb-2">{institution}</p>
            <div className="flex items-center gap-4 text-sm text-slate-500 dark:text-slate-400">
              {passingYear && <span>{passingYear}</span>}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
