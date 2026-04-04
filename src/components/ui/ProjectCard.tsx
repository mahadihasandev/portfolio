
import { ExternalLink, Github } from 'lucide-react';

interface ProjectCardProps {
  title: string;
  description: string;
  image: string;
  link: string;
  gitlink:string;
  tags: string[];
}

export function ProjectCard({ title, description, image, link, gitlink, tags }: ProjectCardProps) {
  return (
    <div className="relative group">
      <div className="absolute inset-0 bg-gradient-to-br from-sky-400/20 via-blue-500/20 to-orange-300/20 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 pointer-events-none transition-opacity" />

      <div className="relative border border-slate-300 bg-white dark:bg-slate-900 dark:border-slate-600 shadow-xl rounded-2xl overflow-hidden group hover:shadow-xl transition-transform duration-300 hover:-translate-y-1">
        <div className="relative overflow-hidden">
          <img
            src={image}
            alt={title}
            className="w-full h-56 object-cover transform transition-transform duration-500 group-hover:scale-110"
            loading="lazy"
            decoding="async"
          />
          <div className="absolute inset-0 bg-slate-950/45 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4">
            <a
              href={link}
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-white/20 rounded-full hover:bg-blue-600 hover:scale-110 transition-transform duration-300 ease-in-out shadow-lg"
            >
              <ExternalLink className="w-6 h-6 text-white" />
            </a>
            <a
              href={gitlink}
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-white/20 rounded-full hover:bg-gray-900 hover:scale-110 transition-transform duration-300 ease-in-out shadow-lg"
            >
              <Github className="w-6 h-6 text-white" />
            </a>
          </div>
        </div>

        <div className="p-5">
          <h3 className="text-lg font-bold mb-2 text-slate-800 dark:text-white leading-snug">{title}</h3>
          <p className="text-slate-600 dark:text-slate-300 mb-4 text-sm leading-relaxed">{description}</p>
          <div className="flex flex-wrap gap-2">
            {tags.slice(0, 6).map((tag) => (
              <span
                key={tag}
                className="px-3 py-1 text-xs font-semibold bg-blue-100/90 dark:bg-blue-900/40 text-blue-700 dark:text-blue-300 rounded-full"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
