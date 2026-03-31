import React from 'react';

interface LogoProps {
  size?: 'sm' | 'md' | 'lg';
  interactive?: boolean;
  className?: string;
  variant?: 'icon' | 'full';
}

export const Logo: React.FC<LogoProps> = ({ 
  size = 'md', 
  interactive = true,
  className = '',
  variant = 'full'
}) => {
  const sizes = {
    sm: 32,
    md: 40,
    lg: 56,
  };

  const textSizes = {
    sm: '14px',
    md: '20px',
    lg: '28px',
  };

  const iconSize = sizes[size];

  return (
    <>
      <style>{`
        @keyframes springBounce {
          0% {
            transform: scale(1);
          }
          25% {
            transform: scale(1.15);
          }
          50% {
            transform: scale(0.95);
          }
          75% {
            transform: scale(1.08);
          }
          100% {
            transform: scale(1);
          }
        }
        
        .logo-spring:hover {
          animation: springBounce 0.6s cubic-bezier(0.34, 1.56, 0.64, 1);
        }
      `}</style>
      <div 
        className={`flex items-center gap-2 logo-spring ${interactive ? 'cursor-pointer' : ''} ${className}`}
      >
      {/* Icon */}
      <svg
        width={iconSize}
        height={iconSize}
        viewBox="0 0 40 40"
        xmlns="http://www.w3.org/2000/svg"
        className="flex-shrink-0"
      >
        <defs>
          <linearGradient id="mahadi-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#3b82f6" />
            <stop offset="50%" stopColor="#0ea5e9" />
            <stop offset="100%" stopColor="#0284c7" />
          </linearGradient>
          <filter id="shadow-filter">
            <feDropShadow dx="0" dy="2" stdDeviation="3" floodOpacity="0.3"/>
          </filter>
        </defs>

        {/* Background circle */}
        <circle cx="20" cy="20" r="18" fill="url(#mahadi-gradient)" filter="url(#shadow-filter)" />

        {/* Monogram M with dynamic design */}
        <g>
          {/* Left stroke of M */}
          <path
            d="M 12 28 L 12 12 L 16 20"
            fill="none"
            stroke="white"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          {/* Right stroke of M */}
          <path
            d="M 24 28 L 24 12 L 20 20"
            fill="none"
            stroke="white"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </g>

        {/* Decorative accent line */}
        <line x1="10" y1="30" x2="30" y2="30" stroke="white" strokeWidth="1.5" opacity="0.6" />
      </svg>

      {/* Text - Mahadi */}
      {variant === 'full' && (
        <span
          style={{ fontSize: textSizes[size] }}
          className="font-bold tracking-tight bg-gradient-to-r from-blue-500 via-cyan-500 to-blue-600 bg-clip-text text-transparent"
        >
          Mahadi
        </span>
      )}
      </div>
    </>
  );
};

export default Logo;
