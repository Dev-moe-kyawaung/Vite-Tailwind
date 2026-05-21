import React from 'react';
import projects from '../data/projects';
import ProjectCard from '../components/ProjectCard';

export default function Portfolio() {
  return (
    <section>
      <div className="mb-8 max-w-2xl">
        <h1 className="text-3xl font-bold text-white">Portfolio</h1>
        <p className="mt-3 text-slate-300 leading-7">
          Selected Android applications built for performance, usability, and a polished mobile experience.
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </section>
  );
}
