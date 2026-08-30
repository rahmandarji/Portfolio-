import React from 'react';
import SectionHeader from '../components/SectionHeader';
import { BUILDING_PROCESS } from '../data/portfolioData';

export default function HowIBuild() {
  return (
    <section className="py-20 border-b border-gray-800/60 bg-[#0c0c10]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          tag="METHODOLOGY"
          title="How I Build"
          subtitle="A systematic, production-oriented approach to designing, testing, and delivering AI software."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {BUILDING_PROCESS.map((proc) => (
            <div
              key={proc.step}
              className="bg-[#121216] border border-gray-800 p-6 rounded-lg relative overflow-hidden"
            >
              <span className="text-3xl font-mono font-bold text-gray-800 absolute top-4 right-4 pointer-events-none">
                {proc.step}
              </span>
              <h3 className="text-base font-bold text-white mb-2 font-mono">
                {proc.title}
              </h3>
              <p className="text-xs text-gray-400 leading-relaxed">
                {proc.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
