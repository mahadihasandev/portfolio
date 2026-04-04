import React from 'react';

interface SectionTitleProps {
  children: React.ReactNode;
}

export function SectionTitle({ children }: SectionTitleProps) {
  return (
    <div className="mb-12 mt-10 text-center">
    
      <h2 className="mt-3 text-3xl md:text-4xl font-extrabold gradient-text">{children}</h2>
      <div className="mx-auto mt-3 h-1.5 w-24 rounded-full bg-gradient-to-r from-sky-400 via-blue-500 to-orange-400" />
    </div>
  );
}