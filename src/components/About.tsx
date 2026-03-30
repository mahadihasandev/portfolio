import { User2, Code2, Lightbulb } from "lucide-react";
import { GoGoal } from "react-icons/go";
import { SectionTitle } from "./ui/SectionTitle";

const aboutSections = [
  {
    icon: User2,
    title: "Who I Am",
    description: [
      "A Full-stack developer having interest in software engineering.",
      "Enjoy solving problems and building scalable applications.",
      "Always learning new technologies to improve my skills.",
    ],
    color: "bg-blue-600",
  },
  {
    icon: Code2,
    title: "What I Do",
    description: [
      "Develop high-performance web apps using modern tech stacks.",
      "Solve algorithmic problems and optimize code efficiency.",
      "Contribute to open-source and follow industry trends.",
    ],
    color: "bg-purple-600",
  },
  {
    icon: GoGoal,
    title: "My Goals",
    description: [
      "Build tech products that solve real-world challenges at scale.",
      "Advance as a Full-stack developer with modern frameworks.",
      "Grow the dev community through open-source contributions.",
    ],
    color: "bg-green-600",
  },
  {
    icon: Lightbulb,
    title: "My Philosophy",
    description: [
      "Technology should simplify lives, not complicate them.",
      "Great software solves problems, not just writes code.",
      "Continuous learning keeps you ahead in tech.",
    ],
    color: "bg-orange-600",
  },
];

export function About() {
  return (
    <section id="about" className="section-shell relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-white/70 via-blue-50/70 to-orange-50/60 dark:from-slate-950 dark:via-slate-900 dark:to-slate-950">
        <div className="absolute inset-0 bg-grid-pattern opacity-[0.08]" />
      </div>

      <div className="section-container relative">
        <SectionTitle>About Me</SectionTitle>

        <div className="max-w-5xl mx-auto mb-16 text-center">
          <p className="text-lg text-slate-700 dark:text-slate-300 leading-relaxed">
            I am <span className="text-blue-600 dark:text-blue-300 font-semibold">Mahadi Hasan</span>, a full-stack developer focused on building
            production-ready web products. I enjoy turning complex ideas into
            clean interfaces, scalable APIs, and reliable user experiences. My
            work combines practical engineering, strong problem-solving, and a
            constant drive to learn modern tools that ship faster.
          </p>

          <div className="mt-6 flex justify-center">
            <span className="text-sm sm:text-base inline-block soft-card text-blue-700 dark:text-blue-300 px-4 py-2 rounded-xl shadow">
              Building useful products with modern engineering standards
            </span>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-6 max-w-6xl mx-auto">
          {aboutSections.map(({ icon: Icon, title, description, color }) => (
            <div key={title} className="relative group">
              <div
                className={`absolute inset-0 ${color} rounded-xl blur-xl opacity-20 group-hover:opacity-60 transition-opacity duration-300 pointer-events-none`}
              />

              <div className="relative soft-card p-6 hover:shadow-lg transition-transform duration-300 transform hover:-translate-y-1">
                <div className="flex items-center mb-4 space-x-4">
                  <div className={`p-3 ${color} rounded-lg`}>
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-slate-800 dark:text-slate-100">
                    {title}
                  </h3>
                </div>
                <ul className="list-disc pl-6 text-slate-600 dark:text-slate-300 space-y-1">
                  {description.map((point, index) => (
                    <li key={index}>{point}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
