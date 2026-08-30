import React from 'react';
import SectionHeader from '../components/SectionHeader';

export default function About() {
  return (
    <section id="about" className="py-20 border-b border-gray-800/60">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader tag="BACKGROUND" title="About Rahman Darji" />
        <div className="bg-[#121216] border border-gray-800 rounded-xl p-6 sm:p-8 space-y-4 text-sm sm:text-base text-gray-300 leading-relaxed">
          <p>
            I’m Rahman Darji, a self-directed AI/ML engineer based in Nepal. I focus on learning by building complete systems rather than isolated model experiments.
          </p>
          <p>
            My current work centers on agentic workflows, retrieval-augmented generation, ML/deep learning, Python backend services, automated testing, and production-oriented engineering practices.
          </p>
          <p className="p-3 bg-gray-900 border border-gray-800 rounded font-mono text-xs text-gray-400">
            Education Status: Currently pursuing Grade 10 while independently studying AI/ML engineering.
          </p>
        </div>
      </div>
    </section>
  );
}
