import React from 'react';
import { ArrowUpRight } from 'lucide-react';

export default function Button({ 
  children, 
  href, 
  variant = 'primary', 
  external = false, 
  onClick, 
  className = '' 
}) {
  const baseStyle = "inline-flex items-center justify-center font-mono text-xs font-medium transition-all duration-200 px-4 py-2.5 rounded border focus:outline-none";
  
  const variants = {
    primary: "bg-blue-600 hover:bg-blue-500 text-white border-blue-500 shadow-sm",
    secondary: "bg-gray-900 hover:bg-gray-800 text-gray-200 border-gray-700 hover:border-gray-600",
    outline: "bg-transparent hover:bg-blue-950/30 text-blue-400 border-blue-800 hover:border-blue-500"
  };

  const combinedClass = `${baseStyle} ${variants[variant]} ${className}`;

  if (href) {
    return (
      <a 
        href={href} 
        target={external ? "_blank" : undefined} 
        rel={external ? "noopener noreferrer" : undefined}
        className={combinedClass}
      >
        <span>{children}</span>
        {external && <ArrowUpRight size={14} className="ml-1.5 opacity-80" />}
      </a>
    );
  }

  return (
    <button onClick={onClick} className={combinedClass}>
      <span>{children}</span>
    </button>
  );
}
