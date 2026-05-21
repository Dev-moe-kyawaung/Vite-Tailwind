import React from 'react';
import { motion } from 'framer-motion';
import techStack from '../data/techStack';

export default function TechTimeline() {
  return (
    <div className="space-y-4">
      {techStack.map((item, index) => (
        <motion.div
          key={item.title}
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.35 }}
          transition={{ duration: 0.35, delay: index * 0.05 }}
          className="glass-card p-5"
        >
          <div className="flex items-start gap-4">
            <div className="mt-1 h-3 w-3 rounded-full bg-teal-400 shadow-[0_0_0_6px_rgba(20,184,166,0.15)]" />
            <div>
              <div className="text-base font-semibold text-white">{item.title}</div>
              <div className="mt-1 text-sm text-teal-200">{item.period}</div>
              <p className="mt-2 text-sm leading-6 text-slate-300">{item.description}</p>
            </div>
          </div>
        </motion.div>
      ))}
    </div>
  );
}
