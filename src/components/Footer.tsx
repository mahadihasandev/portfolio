import React from 'react';
import { Link } from './Link';
import { SocialLinks } from './hero/SocialLinks';
import { FaReact } from 'react-icons/fa';
import { SiVite } from 'react-icons/si';

interface FooterLinkProps {
  href: string;
  children: React.ReactNode;
}

function FooterLink({ href, children }: FooterLinkProps) {
  return (
    <Link
      href={href}
      className="text-gray-500 hover:text-blue-500 dark:text-gray-400 dark:hover:text-blue-400 transition-colors"
    >
      {children}
    </Link>
  );
}

export function Footer() {
  const currentYear = new Date().getFullYear();

  const links = [
    { href: '#home', label: 'Home' },
    { href: '#about', label: 'About' },
    { href: '#skills', label: 'Skills' },
    { href: '#projects', label: 'Projects' },
    { href: '#github', label: 'GitHub' },
    { href: '#experience', label: 'Experience' },
    { href: '#education', label: 'Education' },
    { href: '#contact', label: 'Contact' },
  ];

  return (
    <footer className="relative border-t border-blue-100/60 dark:border-slate-800">
      <div className="absolute inset-0 bg-gradient-to-r from-sky-500/5 via-blue-500/5 to-orange-400/5" />

      <div className="section-container py-10 relative">
        <div className="flex flex-col items-center gap-6">
          <nav className="flex flex-wrap gap-4 justify-center">
            {links.map(({ href, label }) => (
              <FooterLink key={href} href={href}>{label}</FooterLink>
            ))}
          </nav>

          <div className="scale-90">
            <SocialLinks />
          </div>

          <div className="text-sm text-slate-500 dark:text-slate-400 text-center">
            <p>© {currentYear} Mahadi Hasan . All rights reserved.</p>
            <p className="flex items-center justify-center gap-2">
              Built with <FaReact className="w-5 h-5 text-blue-500" /> using
              <SiVite className="w-5 h-5 text-yellow-500" />
            </p>

          </div>
        </div>
      </div>
    </footer>
  );
}
