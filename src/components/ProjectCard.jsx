import React from 'react';
import { motion } from 'framer-motion';

export default function ProjectCard({ project }) {
  return (
    <motion.a
      href={project.storeUrl}
      target="_blank"
      rel="noreferrer"
      whileHover={{ y: -8 }}
      whileTap={{ scale: 0.98 }}
      className="group overflow-hidden rounded-3xl border border-white/10 bg-white/5 shadow-soft transition hover:border-teal-400/30"
    >
      <div className="relative aspect-[4/3] overflow-hidden bg-slate-900">
        <img
          src={project.screenshot}
          alt={project.title}
          className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
        />
        <div className="absolute left-4 top-4 rounded-full border border-white/10 bg-black/45 px-3 py-1 text-xs text-white backdrop-blur">
          {project.platform}
        </div>
      </div>

      <div className="space-y-4 p-5 sm:p-6">
        <div>
          <h3 className="text-xl font-semibold text-white">{project.title}</h3>
          <p className="mt-1 text-sm text-teal-200">{project.subtitle}</p>
          <p className="mt-3 text-sm leading-6 text-slate-300">{project.description}</p>
        </div>

        <div className="flex flex-wrap gap-2">
          {project.tech.map((tech) => (
            <span
              key={tech}
              className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-slate-200"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </motion.a>
  );
}
