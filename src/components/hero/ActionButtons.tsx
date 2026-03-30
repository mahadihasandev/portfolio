
import { FileText, Mail } from 'lucide-react';
import { Link } from '../Link';

export function ActionButtons() {
  return (
    <div className="flex flex-wrap gap-4 justify-center">
      <a
        href="https://drive.google.com/file/d/1_iLHTkWCbSnsWklzhyacOUafRP8U88Te/view"
        target="_blank" rel="noopener noreferrer"
        className="flex items-center gap-2 px-4 py-2.5 rounded-xl text-sm sm:text-base bg-gradient-to-r from-sky-500 to-blue-600 text-white hover:scale-105 shadow-lg shadow-blue-500/20 transition-transform duration-300"
      >
        <FileText className="w-5 h-5" />
        <span>View Resume</span>
      </a>
      <Link
        href="#contact"
        className="flex items-center gap-2 px-4 py-2.5 rounded-xl text-sm sm:text-base text-blue-700 dark:text-blue-300 border border-blue-400/70 dark:border-blue-500/60 bg-white/70 dark:bg-slate-900/60 transition-transform duration-300 hover:scale-105"
      >
        <Mail className="w-5 h-5" />
        <span>Contact Me</span>
      </Link>
    </div>
  );
}
