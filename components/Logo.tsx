import React from 'react';

export const Logo: React.FC<{ className?: string, mode?: 'light' | 'dark' }> = ({ className = "h-10", mode = 'light' }) => {
  return (
    <svg 
      viewBox="0 0 100 120" 
      className={className} 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg"
      aria-label="Iris Logo"
    >
      <defs>
        <linearGradient id="irisGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#FF7F32" />
          <stop offset="100%" stopColor="#4A1D96" />
        </linearGradient>
      </defs>
      
      {/* Eye / Pin Shape */}
      <path 
        d="M50 20C33.4315 20 20 33.4315 20 50C20 66.5685 33.4315 80 50 80C66.5685 80 80 66.5685 80 50C80 33.4315 66.5685 20 50 20ZM50 70C38.9543 70 30 61.0457 30 50C30 38.9543 38.9543 30 50 30C61.0457 30 70 38.9543 70 50C70 61.0457 61.0457 70 50 70Z" 
        fill="url(#irisGradient)" 
      />
      
      {/* Center 'I' or Pupil */}
      <rect x="45" y="40" width="10" height="20" rx="2" fill="#2e1065" />

      {/* Book Base */}
      <path 
        d="M20 90C35 90 45 95 50 100C55 95 65 90 80 90V105C65 105 55 110 50 115C45 110 35 105 20 105V90Z" 
        fill={mode === 'light' ? "#2e1065" : "#FFFFFF"} 
      />
    </svg>
  );
};

export default Logo;