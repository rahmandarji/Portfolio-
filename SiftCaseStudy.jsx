import React, { useState } from 'react';
import { SIFT_PROJECT } from '../data/portfolioData';
import TechBadge from '../components/TechBadge';
import Button from '../components/Button';

export default function SiftCaseStudy() {
  const [activeStep, setActiveStep] = useState(null);

  const architectureSteps = [
    { id: 'q', name: 'Question', desc: 'Accepts raw research query input' },
    { id: 'dc', name: 'Decision Criteria', desc: 'Decomposes query into explicit evaluation parameters' },
    { id: 'rt', name: 'Research Tasks', desc: 'Generates prioritized task queue for execution' },
    { id: 's', name: 'Search', desc: 'Executes targeted web searches via Tavily' },
    { id: 'ee', name: 'Evidence Extraction', desc: 'Extracts structured claims and deduplicates sources' },
    { id: 'v', name: 'Verification', desc: 'Verifies claims against source document bounds' },
    { id: 'cd', name: 'Conflict Detection', desc: 'Identifies opposing claims or missing information' },
    { id: 'ec', name: 'Evidence Coverage', desc: 'Evaluates whether collected evidence covers decision criteria before synthesis.' }
  ];

  return (
    <div className="bg-[#121216] border border-gray-800 rounded-xl p-6 sm:p-8 mb-12">
      <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 mb-6 pb-6 border-b border-gray-800">
        <div>
          <span className="text-xs font-mono text-blue-400 uppercase tracking-widest">// CASE STUDY 01</span>
          <h3 className="text-2xl font-bold text-white mt-1">{SIFT_PROJECT.name}</h3>
          <p className="text-sm text-gray-400 font-mono mt-0.5">{SIFT_PROJECT.title}</p>
        </div>
        <div>
          <Button href={SIFT_PROJECT.repo} external variant="outline">
            View Source on GitHub
          </Button>
        </div>
      </div>

      <p className="text-sm text-gray-300 leading-relaxed mb-6">{SIFT_PROJECT.description}</p>

      <div className="mb-8 bg-[#0a0a0c] border border-gray-800/80 rounded-lg p-5">
        <div className="flex justify-between items-center mb-4">
          <span className="text-[11px] font-mono text-gray-400">LANGGRAPH WORKFLOW ARCHITECTURE</span>
          <span className="text-[10px] font-mono text-gray-500">Hover/click nodes for detail</span>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-2 mb-4">
          {architectureSteps.map((step, idx) => (
            <div
              key={step.id}
              onClick={() => setActiveStep(step)}
              onMouseEnter={() => setActiveStep(step)}
              className={`p-2.5 rounded border text-center cursor-pointer transition-all ${
                activeStep?.id === step.id
                  ? 'bg-blue-950/60 border-blue-500 text-white'
                  : 'bg-gray-900 border-gray-800 text-gray-300 hover:border-gray-700'
              }`}
            >
              <div className="text-[10px] font-mono text-gray-500 mb-1">0{idx + 1}</div>
              <div className="text-xs font-mono font-medium leading-tight">{step.name}</div>
            </div>
          ))}
        </div>

        <div className="bg-gray-900/60 border border-gray-800/80 p-3 rounded flex flex-col sm:flex-row items-center justify-between text-xs font-mono gap-3">
          <div className="flex items-center space-x-2">
            <span className="text-blue-400">└─</span>
            <span className="text-gray-300">Decision Gateway:</span>
            <span className="bg-gray-800 px-2 py-0.5 rounded text-gray-200">More Research Needed?</span>
          </div>
          <div className="flex items-center space-x-4">
            <span className="text-amber-400">[Yes] → Loop back to Additional Tasks</span>
            <span className="text-emerald-400">[No] → Final Synthesis</span>
          </div>
        </div>

        <div className="mt-3 text-[11px] font-mono text-gray-400 flex items-center space-x-2 bg-gray-950 p-2 rounded border border-gray-800/50">
          <span className="text-blue-500">ℹ</span>
          <span>Workflow state is persistently checkpointed via SQLite using thread-based execution IDs.</span>
        </div>

        <div className="mt-3 min-h-[40px] p-2.5 bg-blue-950/20 border border-blue-900/40 rounded text-xs font-mono text-blue-200">
          {activeStep ? (
            <span><strong>{activeStep.name}:</strong> {activeStep.desc}</span>
          ) : (
            <span className="text-gray-500">Select any workflow node above to view its detailed architectural responsibility.</span>
          )}
        </div>
      </div>

      <div className="mb-6">
        <h4 className="text-xs font-mono text-gray-400 uppercase tracking-wider mb-3">Key Technical Capabilities</h4>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
          {SIFT_PROJECT.capabilities.map((cap, i) => (
            <div key={i} className="flex items-start space-x-2 text-xs text-gray-300 bg-gray-900/40 p-2.5 rounded border border-gray-800/50">
              <span className="text-blue-500 font-mono mt-0.5">›</span>
              <span>{cap}</span>
            </div>
          ))}
        </div>
      </div>

      <div className="flex flex-wrap items-center justify-between pt-4 border-t border-gray-800 gap-4">
        <div className="flex flex-wrap gap-1.5">
          {SIFT_PROJECT.tech.map((t) => (
            <TechBadge key={t} text={t} />
          ))}
        </div>
        <div className="text-xs font-mono text-emerald-400 bg-emerald-950/30 border border-emerald-800/60 px-2.5 py-1 rounded">
          ✓ {SIFT_PROJECT.tests}
        </div>
      </div>
    </div>
  );
}
