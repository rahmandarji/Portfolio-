import React, { useState } from 'react';
import { RAG_PROJECT } from '../data/portfolioData';
import TechBadge from '../components/TechBadge';
import Button from '../components/Button';

export default function RagCaseStudy() {
  const [activeComponent, setActiveComponent] = useState(null);

  const pipeline = [
    { id: 'ingest', name: 'Document Ingestion', desc: 'Parses and validates raw user-supplied documents.' },
    { id: 'chunk', name: 'Chunking', desc: 'Splits text into contextual semantic chunks.' },
    { id: 'bge', name: 'BGE Embeddings', desc: 'Generates dense vector representations using BGE model.' },
    { id: 'qdrant', name: 'Qdrant Retrieval', desc: 'Retrieves relevant document chunks from the vector database.' },
    { id: 'rerank', name: 'Cross-Encoder Reranking', desc: 'Reranks retrieved candidates before generation.' },
    { id: 'qwen', name: 'Qwen Generation', desc: 'Generates responses bounded exclusively by retrieved contexts.' },
    { id: 'nli', name: 'NLI Grounding Verification', desc: 'Evaluates whether generated content is supported by retrieved evidence.' },
    { id: 'answer', name: 'Answer Output', desc: 'Delivers verified answer along with claim-level evidence links.' }
  ];

  return (
    <div className="bg-[#121216] border border-gray-800 rounded-xl p-6 sm:p-8 mb-12">
      <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 mb-6 pb-6 border-b border-gray-800">
        <div>
          <span className="text-xs font-mono text-blue-400 uppercase tracking-widest">// CASE STUDY 02</span>
          <h3 className="text-2xl font-bold text-white mt-1">{RAG_PROJECT.name}</h3>
          <p className="text-sm text-gray-400 font-mono mt-0.5">{RAG_PROJECT.title}</p>
        </div>
        <div>
          <Button href={RAG_PROJECT.repo} external variant="outline">
            View Source on GitHub
          </Button>
        </div>
      </div>

      <p className="text-sm text-gray-300 leading-relaxed mb-6">{RAG_PROJECT.description}</p>

      <div className="mb-8 bg-[#0a0a0c] border border-gray-800/80 rounded-lg p-5">
        <div className="flex justify-between items-center mb-3">
          <span className="text-[11px] font-mono text-gray-400">CLOSED-WORLD ARCHITECTURE & EVIDENCE BOUNDARY</span>
          <span className="text-[10px] font-mono text-gray-500">Click stage for component inspection</span>
        </div>

        <div className="border border-dashed border-blue-500/50 bg-blue-950/10 p-4 rounded-lg relative mb-4">
          <span className="absolute -top-2.5 left-3 bg-[#0a0a0c] px-2 text-[10px] font-mono text-blue-400 border border-blue-800/60 rounded">
            EVIDENCE BOUNDARY
          </span>

          <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-2 pt-2">
            {pipeline.map((item, idx) => (
              <div
                key={item.id}
                onClick={() => setActiveComponent(item)}
                onMouseEnter={() => setActiveComponent(item)}
                className={`p-2 rounded border text-center cursor-pointer transition-all ${
                  activeComponent?.id === item.id
                    ? 'bg-blue-900/60 border-blue-400 text-white'
                    : 'bg-gray-900 border-gray-800 text-gray-300 hover:border-gray-700'
                }`}
              >
                <div className="text-[9px] font-mono text-gray-500 mb-0.5">Stage {idx + 1}</div>
                <div className="text-[11px] font-mono leading-tight">{item.name}</div>
              </div>
            ))}
          </div>
        </div>

        <div className="p-3 bg-gray-900/60 border border-gray-800 rounded text-xs text-gray-300 leading-relaxed mb-3">
          <span className="font-semibold text-white">Closed-World Concept:</span> Answers are generated strictly from retrieved user-provided evidence rather than relying on ungrounded external model weights.
        </div>

        <div className="min-h-[38px] p-2.5 bg-blue-950/20 border border-blue-900/40 rounded text-xs font-mono text-blue-200">
          {activeComponent ? (
            <span><strong>{activeComponent.name}:</strong> {activeComponent.desc}</span>
          ) : (
            <span className="text-gray-500">Hover or click any pipeline stage inside the boundary to inspect its function.</span>
          )}
        </div>
      </div>

      <div className="mb-6">
        <h4 className="text-xs font-mono text-gray-400 uppercase tracking-wider mb-3">Engineering Highlights</h4>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
          {RAG_PROJECT.capabilities.map((cap, i) => (
            <div key={i} className="flex items-start space-x-2 text-xs text-gray-300 bg-gray-900/40 p-2.5 rounded border border-gray-800/50">
              <span className="text-blue-500 font-mono mt-0.5">›</span>
              <span>{cap}</span>
            </div>
          ))}
        </div>
      </div>

      <div className="flex flex-wrap items-center justify-between pt-4 border-t border-gray-800 gap-4">
        <div className="flex flex-wrap gap-1.5">
          {RAG_PROJECT.tech.map((t) => (
            <TechBadge key={t} text={t} />
          ))}
        </div>
        <div className="text-xs font-mono text-emerald-400 bg-emerald-950/30 border border-emerald-800/60 px-2.5 py-1 rounded">
          ✓ {RAG_PROJECT.tests}
        </div>
      </div>
    </div>
  );
}
