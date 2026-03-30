import { SectionTitle } from './ui/SectionTitle';
import { SiHtml5, SiCss3, SiJavascript, SiTailwindcss, SiExpress, SiMongodb, SiNextdotjs, SiTypescript,  SiGit, SiGithub, SiVite, SiMongoose, SiMaterialdesign, SiAntdesign, SiDaisyui, SiBootstrap, SiRedux, SiFigma, SiSocketdotio } from 'react-icons/si';
import { VscVscode } from "react-icons/vsc";
import { IoLogoFirebase } from "react-icons/io5";
import { FaNodeJs, FaReact } from 'react-icons/fa';

const skills = [
  { name: 'HTML', icon: SiHtml5, color: '#e34f26' },
  { name: 'CSS', icon: SiCss3, color: '#1572b6' },
  { name: 'Tailwind CSS', icon: SiTailwindcss, color: '#38bdf8' },
  { name: 'Bootstrap', icon: SiBootstrap, color: '#7952b3' },
  { name: 'JavaScript', icon: SiJavascript, color: '#f7df1e' },
  { name: 'TypeScript', icon: SiTypescript, color: '#3178c6' },
  { name: 'React', icon: FaReact, color: '#61dafb' },
  { name: 'React Native', icon: FaReact, color: '#61dafb' },
  { name: 'Redux', icon: SiRedux, color: '#764abc' },
  { name: 'Next.js', icon: SiNextdotjs, color: '#000000' },
  { name: 'Vite', icon: SiVite, color: '#646cff' },
  { name: 'Material UI', icon: SiMaterialdesign, color: '#007fff' },
  { name: 'Daisy UI', icon: SiDaisyui, color: '#c084fc' },
  { name: 'Ant Design', icon: SiAntdesign, color: '#0170fe' },
  { name: 'Node.js', icon: FaNodeJs, color: '#68a063' },
  { name: 'Express.js', icon: SiExpress, color: '#000000' },
  { name: 'MongoDB', icon: SiMongodb, color: '#47a248' },
  { name: 'Mongoose', icon: SiMongoose, color: '#880000' },
  { name: 'Firebase', icon: IoLogoFirebase, color: '#ffca28' },
  { name: 'Git', icon: SiGit, color: '#f34f29' },
  { name: 'GitHub', icon: SiGithub, color: '#808080' },
  { name: 'VS Code', icon: VscVscode, color: '#007acc' },
  { name: 'Figma', icon: SiFigma, color: '#f24e1e' },
  { name: 'Socket.IO', icon: SiSocketdotio, color: '#808080' },
  // { name: ' Zustand', icon:'', color: '#808080' },
  // { name: 'WebRTC', icon: SiWebrtc, color: '#3333cc' },
];

export function Skills() {
  return (
    <section id="skills" className="section-shell">
      <div className="section-container">
        <SectionTitle>Skills</SectionTitle>

        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4 sm:gap-5">
            {skills.map((tech) => (
              <div
                key={tech.name}
                className="soft-card flex flex-col items-center justify-center p-4 min-h-28 cursor-pointer transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
              >
                <tech.icon size={34} color={tech.color} />
                <span className="text-xs sm:text-sm font-semibold text-slate-800 dark:text-slate-200 mt-2 text-center">
                  {tech.name}
                </span>
              </div>
            ))}
          </div>

          <div className="mt-10 grid md:grid-cols-3 gap-4">
            <div className="soft-card p-5">
              <h3 className="font-bold text-lg text-slate-800 dark:text-slate-100">Frontend</h3>
              <p className="mt-2 text-slate-600 dark:text-slate-300 text-sm">
                Responsive UI engineering with React, Next.js, TypeScript, and modern utility-first design systems.
              </p>
            </div>
            <div className="soft-card p-5">
              <h3 className="font-bold text-lg text-slate-800 dark:text-slate-100">Backend</h3>
              <p className="mt-2 text-slate-600 dark:text-slate-300 text-sm">
                API development, authentication flows, and reliable data architecture using Node.js, Express, and MongoDB.
              </p>
            </div>
            <div className="soft-card p-5">
              <h3 className="font-bold text-lg text-slate-800 dark:text-slate-100">Product Mindset</h3>
              <p className="mt-2 text-slate-600 dark:text-slate-300 text-sm">
                Focused on performance, maintainability, and business impact from idea to deployment.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
