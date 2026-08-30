import React, { useState } from 'react';
import { Menu, X, Github, Linkedin } from 'lucide-react';
import { CONTACT_LINKS } from '../data/portfolioData';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'Projects', href: '#projects' },
    { name: 'Engineering', href: '#engineering' },
    { name: 'About', href: '#about' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-[#0a0a0c]/80 backdrop-blur-md border-b border-gray-800/60">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <a href="#home" className="font-mono text-sm font-semibold tracking-wider text-white hover:text-blue-400 transition-colors">
            RAHMAN<span className="text-blue-500">.DARJI</span>
          </a>

          <div className="hidden md:flex items-center space-x-8">
            <div className="flex space-x-6">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-xs font-mono text-gray-400 hover:text-white transition-colors"
                >
                  {link.name}
                </a>
              ))}
            </div>
            <div className="h-4 w-px bg-gray-800" />
            <div className="flex items-center space-x-4">
              <a
                href={CONTACT_LINKS.github}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors p-1"
                aria-label="GitHub Profile"
              >
                <Github size={18} />
              </a>
              <a
                href={CONTACT_LINKS.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors p-1"
                aria-label="LinkedIn Profile"
              >
                <Linkedin size={18} />
              </a>
            </div>
          </div>

          <div className="flex md:hidden items-center space-x-3">
            <a
              href={CONTACT_LINKS.github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 p-1"
              aria-label="GitHub"
            >
              <Github size={18} />
            </a>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-400 hover:text-white p-2 rounded-md focus:outline-none"
              aria-label="Toggle navigation menu"
            >
              {isOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden bg-[#121216] border-b border-gray-800 px-4 pt-2 pb-4 space-y-3">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className="block text-sm font-mono text-gray-300 hover:text-white py-1"
            >
              {link.name}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
}
