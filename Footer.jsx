import React from 'react';
import { CONTACT_LINKS } from '../data/portfolioData';

export default function Footer() {
  return (
    <footer className="py-8 bg-[#070709] border-t border-gray-900">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row justify-between items-center gap-4">
        <div className="text-xs font-mono text-gray-500">
          © {new Date().getFullYear()} Rahman Darji. Built for high technical clarity.
        </div>
        <div className="flex space-x-6 text-xs font-mono">
          <a href={CONTACT_LINKS.github} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">GitHub</a>
          <a href={CONTACT_LINKS.linkedin} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">LinkedIn</a>
          <a href={`mailto:${CONTACT_LINKS.email}`} className="text-gray-400 hover:text-white transition-colors">Email</a>
        </div>
      </div>
    </footer>
  );
}
