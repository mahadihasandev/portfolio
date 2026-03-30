import React from 'react';
import { ArrowDown } from 'lucide-react';
import { Link } from './Link';
import { TypeWriter } from './ui/TypeWriter';
import { SocialLinks } from './hero/SocialLinks';
import { ContactInfo } from './hero/ContactInfo';
import { ActionButtons } from './hero/ActionButtons';
import { motion } from 'framer-motion';

export function Hero() {
  const roles = [
    "Full-Stack Developer",
    "Problem Solver",
    "Content Creator",
    "Lifelong Learner",
    "Security Enthusiast",
  ];

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20">
      <div className="absolute inset-0 bg-gradient-to-b from-white/70 via-blue-50/80 to-orange-50/50 dark:from-slate-950 dark:via-slate-900 dark:to-slate-950" />
      <div className="absolute inset-0 bg-grid-pattern opacity-[0.46] dark:opacity-[0.36] mix-blend-multiply dark:mix-blend-screen" />

      <div className="section-container py-12 relative z-10">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="flex flex-col items-center md:items-start text-center md:text-left space-y-5 order-2 md:order-1"
          >
            <div className="space-y-3">
              <div className="inline-block soft-card text-blue-700 dark:text-blue-300 text-sm font-semibold px-4 py-2 rounded-full">
                Hey! <span className="inline-block origin-[70%_70%] animate-wave">👋</span> I am
              </div>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-extrabold gradient-text">
                Mahadi Hasan
              </h1>
              <div className="text-lg md:text-2xl text-slate-600 dark:text-slate-300">
                I build as a <TypeWriter words={roles} delay={90} />
              </div>
            </div>

            <div className="flex flex-wrap justify-center md:justify-start gap-3">
              {['4+ Years Learning', '20+ Projects', 'Open To Work'].map((item) => (
                <span key={item} className="soft-card px-4 py-2 text-sm font-semibold text-slate-700 dark:text-slate-200">
                  {item}
                </span>
              ))}
            </div>

            <ContactInfo />
            <ActionButtons />
            <SocialLinks />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="relative order-1 md:order-2"
          >
            <div className="absolute -inset-4 rounded-[2rem] bg-gradient-to-tr from-sky-400/25 via-blue-500/20 to-orange-300/25 blur-2xl" />
            <div className="soft-card p-3 sm:p-4 rounded-[2rem] relative">
              <img
                src="/assets/favicon.jpg"
                alt="Mahadi Hasan"
                className="relative w-full max-w-[420px] h-auto mx-auto rounded-[1.6rem] object-cover shadow-2xl transition-transform duration-500 hover:scale-[1.02]"
                loading="lazy"
              />
            </div>
          </motion.div>
        </div>

        <div className="absolute bottom-2 left-1/2 -translate-x-1/2 animate-bounce">
          <Link
            href="#about"
            className="flex items-center gap-2 text-sm font-medium text-slate-600 dark:text-slate-200 hover:text-blue-600 dark:hover:text-blue-300 transition-colors"
          >
            <ArrowDown className="w-6 h-6 text-slate-600 dark:text-slate-200" />
          </Link>
        </div>
      </div>
    </section>
  );
}
