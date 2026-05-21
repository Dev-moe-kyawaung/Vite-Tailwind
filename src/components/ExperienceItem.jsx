import React from 'react';
import { motion } from 'framer-motion';

export default function ExperienceItem({ item }) {
  return (
    <motion.article
      initial={{ opacity: 0, x: -14 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      className="relative pl-8"
    >
      <div className="absolute left-0 top-2 h-full w-px bg-gradient-to-b from-teal-400/70 to-transparent" />
      <div className="absolute left-[-4px] top-2 h-2.5 w-2.5 rounded-full bg-teal-400 shadow-[0_0_0_6px_rgba(20,184,166,0.15)]" />

      <div className="glass-card p-5 sm:p-6">
        <div className="flex flex-col gap-1 sm:flex-row sm:items-center sm:justify-between">
          <h3 className="text-lg font-semibold text-white">
            {item.role} <span className="text-slate-400">@ {item.company}</span>
          </h3>
          <span className="text-sm text-teal-200">{item.period}</span>
        </div>

        <ul className="mt-4 space-y-2 text-sm leading-6 text-slate-300">
          {item.bullets.map((bullet) => (
            <li key={bullet} className="flex gap-3">
              <span className="mt-2 h-1.5 w-1.5 rounded-full bg-teal-400" />
              <span>{bullet}</span>
            </li>
          ))}
        </ul>
      </div>
    </motion.article>
  );
}
