import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

export default function HeroCanvas() {
  const [activeNode, setActiveNode] = useState(null);
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    setPrefersReducedMotion(mediaQuery.matches);
    const handleChange = () => setPrefersReducedMotion(mediaQuery.matches);
    mediaQuery.addEventListener('change', handleChange);
    return () => mediaQuery.removeEventListener('change', handleChange);
  }, []);

  const nodes = [
    { id: 'q', label: 'Question', sub: 'Input Prompt' },
    { id: 'o', label: 'Orchestration', sub: 'LangGraph Engine' },
    { id: 'r', label: 'Retrieval', sub: 'Qdrant / ChromaDB' },
    { id: 'e', label: 'Evidence', sub: 'Chunk Extraction' },
    { id: 'v', label: 'Verification', sub: 'NLI Grounding' },
    { id: 'a', label: 'Answer', sub: 'Verified Output' },
  ];

  return (
    <div className="w-full bg-[#121216] border border-gray-800/80 rounded-lg p-6 my-6 relative overflow-hidden">
      <div className="flex items-center justify-between mb-4 pb-2 border-b border-gray-800">
        <span className="text-[11px] font-mono text-gray-400">
          SYSTEM VISUALIZATION // SYSTEM FLOW ARCHITECTURE
        </span>
        <span className="text-[10px] font-mono text-emerald-400 bg-emerald-950/40 border border-emerald-800/60 px-2 py-0.5 rounded">
          ● Interactive Model
        </span>
      </div>

      <div className="relative h-44 w-full flex items-center">
        <svg className="absolute inset-0 w-full h-full pointer-events-none z-0">
          <defs>
            <linearGradient id="lineGrad" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#3b82f6" stopOpacity="0.2" />
              <stop offset="50%" stopColor="#3b82f6" stopOpacity="0.8" />
              <stop offset="100%" stopColor="#3b82f6" stopOpacity="0.2" />
            </linearGradient>
          </defs>
          <line x1="5%" y1="50%" x2="95%" y2="50%" stroke="url(#lineGrad)" strokeWidth="2" strokeDasharray="4 4" />
        </svg>

        <div className="w-full flex justify-between items-center relative z-10 overflow-x-auto py-2">
          {nodes.map((node, index) => (
            <motion.div
              key={node.id}
              className={`flex-shrink-0 cursor-pointer p-2.5 rounded border transition-all ${
                activeNode === node.id
                  ? 'bg-blue-950/50 border-blue-500 shadow-md shadow-blue-500/10'
                  : 'bg-gray-900/90 border-gray-800 hover:border-gray-700'
              }`}
              onMouseEnter={() => setActiveNode(node.id)}
              onMouseLeave={() => setActiveNode(null)}
              animate={!prefersReducedMotion ? { y: [0, -3, 0] } : {}}
              transition={{ duration: 4, repeat: Infinity, delay: index * 0.5, ease: 'easeInOut' }}
            >
              <div className="flex items-center space-x-1.5 mb-1">
                <span className="w-1.5 h-1.5 rounded-full bg-blue-400"></span>
                <span className="text-xs font-mono font-medium text-gray-200">{node.label}</span>
              </div>
              <p className="text-[10px] font-mono text-gray-500">{node.sub}</p>
            </motion.div>
          ))}
        </div>
      </div>

      <div className="mt-2 pt-2 border-t border-gray-800/60 text-xs font-mono text-gray-400 h-6">
        {activeNode ? (
          <span className="text-blue-400">Node selected: {nodes.find((n) => n.id === activeNode)?.label} — Pipeline stage active.</span>
        ) : (
          <span className="text-gray-500">Hover over pipeline nodes to inspect data workflow.</span>
        )}
      </div>
    </div>
  );
}
