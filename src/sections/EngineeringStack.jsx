import React from 'react';
import SectionHeader from '../components/SectionHeader';
import { ENGINEERING_STACK } from '../data/portfolioData';

export default function EngineeringStack() {
  return (
    <section id="engineering" className="py-20 border-b border-gray-800/60 bg-[#0a0a0c]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          tag="CAPABILITIES"
          title="Engineering Stack"
          subtitle="Categorized view of core programming languages, frameworks, vector stores, and backend infrastructure."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {ENGINEERING_STACK.map((group) => (
            <div
              key={group.category}
              className="bg-[#121216] border border-gray-800/80 rounded-lg p-5 hover:border-gray-700 transition-colors"
            >
              <h3 className="text-xs font-mono uppercase tracking-wider text-blue-400 border-b border-gray-800 pb-2 mb-3">
                {group.category}
              </h3>
              <div className="flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <span
                    key={item}
                    className="text-xs font-mono text-gray-300 bg-gray-900 border border-gray-800 px-2.5 py-1 rounded"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
