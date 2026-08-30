import React from 'react';
import Button from '../components/Button';
import HeroCanvas from './HeroCanvas';
import { CONTACT_LINKS } from '../data/portfolioData';

export default function Hero() {
  return (
    <section id="home" className="pt-28 pb-16 border-b border-gray-800/60">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="inline-flex items-center space-x-2 bg-gray-900/80 border border-gray-800 px-3 py-1 rounded-full mb-6">
          <span className="w-2 h-2 rounded-full bg-emerald-500"></span>
          <span className="text-xs font-mono text-gray-300">
            Python · LangGraph · RAG · FastAPI · PyTorch
          </span>
        </div>

        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight mb-4">
          AI / ML / GenAI Engineer
        </h1>

        <p className="text-lg sm:text-xl text-gray-300 font-medium mb-3 max-w-3xl leading-relaxed">
          Building agentic AI systems, RAG applications, and production-oriented Python services.
        </p>

        <p className="text-sm sm:text-base text-gray-400 max-w-2xl mb-8 leading-relaxed">
          I build systems around retrieval, orchestration, verification, APIs, automated testing, and reliable AI workflows.
        </p>

        <div className="flex flex-wrap gap-4 mb-8">
          <Button href="#projects" variant="primary">View Projects</Button>
          <Button href={CONTACT_LINKS.github} external variant="secondary">GitHub Profile</Button>
        </div>

        <HeroCanvas />
      </div>
    </section>
  );
}
