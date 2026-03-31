import { useState, useEffect } from 'react';
import { Menu, X, ArrowRight } from 'lucide-react';
import { Link } from './Link';
import { useTheme } from '../hooks/useTheme';
import { ThemeToggle } from './ui/ThemeToggle';
import { useAnimatedLogo } from '../hooks/useAnimatedLogo';
import { AnimatePresence, motion } from 'framer-motion';
import { Logo } from './Logo';



export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('');
  const { isDark, setIsDark } = useTheme();
  const { handleLogoClick } = useAnimatedLogo();

  useEffect(() => {
    let ticking = false;

    const handleScroll = () => {
      if (ticking) return;
      ticking = true;

      requestAnimationFrame(() => {
        const nextIsScrolled = window.scrollY > 20;
        setIsScrolled((prev) => (prev === nextIsScrolled ? prev : nextIsScrolled));
        ticking = false;
      });
    };

    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const sections = document.querySelectorAll('section');
    const observer = new IntersectionObserver(
      (entries) => {
        const visibleSection = entries.find((entry) => entry.isIntersecting);
        if (visibleSection) {
          setActiveSection(visibleSection.target.id);
        }
      },
      { threshold: 0.5 }
    );

    sections.forEach((section) => observer.observe(section));
    return () => sections.forEach((section) => observer.unobserve(section));
  }, []);

  const toggleTheme = () => {
    setIsDark(!isDark);
  };

  const navLinks = [
    { href: '#home', label: 'Home' },
    { href: '#about', label: 'About' },
    { href: '#skills', label: 'Skills' },
    { href: '#projects', label: 'Projects' },
    { href: '#github', label: 'GitHub' },
    { href: '#experience', label: 'Experience' },
    { href: '#education', label: 'Education' },
  ];

  return (
    <>
      <nav
        className={`fixed top-3 left-1/2 z-50 w-[94%] max-w-6xl -translate-x-1/2 rounded-2xl border transition-all duration-300 ${
          isScrolled
            ? 'glass-panel border-blue-300/40 dark:border-blue-500/30'
            : 'border-transparent bg-transparent'
        }`}
      >
        <div className="flex items-center justify-between h-14 px-4 sm:px-5">
          <div className="cursor-pointer rounded-full group" onClick={handleLogoClick}>
           <Link href="#home" className="flex items-center">
            <Logo size="md" variant="full" />

          </Link>

          </div>

          <div className="hidden lg:flex space-x-2 items-center justify-center relative">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="relative px-3 py-2 text-sm font-semibold text-slate-600 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-300"
              >
                {link.label}
                {activeSection === link.href.substring(1) && (
                  <motion.div
                    layoutId="underline"
                    className="absolute inset-x-2 -bottom-0.5 h-[2px] rounded-full bg-gradient-to-r from-sky-400 via-blue-500 to-orange-400"
                    transition={{ type: 'spring', stiffness: 500, damping: 28 }}
                  />
                )}
              </Link>
            ))}
          </div>

          <div className="hidden md:flex gap-3 items-center">
            <ThemeToggle isDark={isDark} onToggle={toggleTheme} />
            <Link
              href="#contact"
              className="flex items-center gap-2 px-4 py-2 rounded-xl bg-gradient-to-r from-sky-500 to-blue-600 text-white text-sm hover:text-white shadow-lg shadow-blue-500/20"
            >
              Contact
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="flex lg:hidden items-center space-x-2">
            <ThemeToggle isDark={isDark} onToggle={toggleTheme} />
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-xl bg-slate-200/80 dark:bg-slate-800/80 hover:bg-slate-300 dark:hover:bg-slate-700"
              aria-label="Toggle menu"
            >
              {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.2 }}
              className="lg:hidden mx-3 mb-3 rounded-xl border border-blue-200/60 dark:border-blue-900/40 bg-white/95 dark:bg-slate-950/95 shadow-xl"
            >
              <div className="px-3 pt-2 pb-3 space-y-1">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="block px-3 py-2 rounded-lg text-sm text-center text-slate-700 dark:text-slate-200 hover:bg-blue-50 dark:hover:bg-slate-800"
                  onClick={() => {
                    setIsOpen(false);
                  }}
                >
                  {link.label}
                </Link>
              ))}
              <Link
                href="#contact"
                className="mt-2 flex items-center justify-center gap-2 px-3 py-2 rounded-lg bg-gradient-to-r from-sky-500 to-blue-600 text-white text-sm hover:text-white"
                onClick={() => setIsOpen(false)}
              >
                Contact
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </>
  );
}
