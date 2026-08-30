import React from 'react';
import SectionHeader from '../components/SectionHeader';
import SiftCaseStudy from './SiftCaseStudy';
import RagCaseStudy from './RagCaseStudy';

export default function Projects() {
  return (
    <section id="projects" className="py-20 border-b border-gray-800/60">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          tag="PORTFOLIO"
          title="Selected Projects"
          subtitle="Deep dive into stateful agent workflows, vector retrieval pipelines, closed-world evidence boundaries, and automated testing implementations."
        />
        <SiftCaseStudy />
        <RagCaseStudy />
      </div>
    </section>
  );
}
