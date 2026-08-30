import React from 'react';

export default function TechBadge({ text }) {
  return (
    <span className="inline-block font-mono text-[11px] bg-gray-900/80 text-gray-300 border border-gray-800 px-2.5 py-1 rounded">
      {text}
    </span>
  );
}
