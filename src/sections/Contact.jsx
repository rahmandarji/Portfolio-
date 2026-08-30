import React from 'react';
import Button from '../components/Button';
import { CONTACT_LINKS } from '../data/portfolioData';

export default function Contact() {
  return (
    <section id="contact" className="py-20 border-b border-gray-800/60 bg-[#0a0a0c]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <span className="text-xs font-mono text-blue-400 uppercase tracking-widest block mb-2">
          // INITIATE CONTACT
        </span>
        <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight mb-4">
          Have an AI system to build?
        </h2>
        <p className="text-sm sm:text-base text-gray-400 max-w-xl mx-auto mb-8 leading-relaxed">
          I'm interested in AI/ML engineering opportunities and practical AI application work involving RAG, agentic workflows, Python services, and retrieval systems.
        </p>

        <div className="flex flex-wrap items-center justify-center gap-4">
          <Button href={`mailto:${CONTACT_LINKS.email}`} variant="primary">
            Email Me ({CONTACT_LINKS.email})
          </Button>
          <Button href={CONTACT_LINKS.github} external variant="secondary">GitHub</Button>
          <Button href={CONTACT_LINKS.linkedin} external variant="secondary">LinkedIn</Button>
        </div>
      </div>
    </section>
  );
}
