import React from 'react';

export default function SectionHeader({ title, subtitle, tag }) {
  return (
    <div className="mb-10">
      {tag && (
        <span className="text-[11px] font-mono tracking-widest text-blue-400 uppercase mb-2 block">
          // {tag}
        </span>
      )}
      <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
        {title}
      </h2>
      {subtitle && (
        <p className="mt-2 text-sm sm:text-base text-gray-400 max-w-2xl leading-relaxed">
          {subtitle}
        </p>
      )}
    </div>
  );
}
