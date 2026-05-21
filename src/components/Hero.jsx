import React from 'react';
import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <section className="grid items-center gap-10 lg:grid-cols-2">
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: 'easeOut' }}
      >
        <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-teal-400/20 bg-teal-400/10 px-4 py-2 text-sm text-teal-200">
          Senior Android Developer
        </div>

        <h1 className="max-w-3xl text-5xl font-black tracking-tight text-white sm:text-6xl lg:text-7xl">
          Building premium Android experiences for <span className="text-gradient">modern products</span>.
        </h1>

        <p className="mt-6 max-w-2xl text-base leading-7 text-slate-300 sm:text-lg">
          I’m Moe Kyaw Aung, a Senior Android Developer focused on Jetpack Compose, scalable architecture,
          performance, accessibility, and polished UI systems.
        </p>

        <div className="mt-8 flex flex-col gap-3 sm:flex-row">
          <a href="/portfolio" className="btn-primary">
            View Portfolio
          </a>
          <a href="/contact" className="btn-secondary">
            Contact Me
          </a>
        </div>

        <div className="mt-8 flex flex-wrap gap-3 text-sm text-slate-300">
          <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1">Jetpack Compose</span>
          <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1">Kotlin</span>
          <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1">Clean Architecture</span>
          <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1">CI/CD</span>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, scale: 0.96, rotate: -2 }}
        animate={{ opacity: 1, scale: 1, rotate: 0 }}
        transition={{ type: 'spring', stiffness: 110, damping: 16, delay: 0.1 }}
        whileHover={{ y: -4, rotate: 0.5 }}
        className="mx-auto w-full max-w-xl"
      >
        <div className="glass-card p-5 sm:p-6">
          <div className="rounded-3xl bg-gradient-to-br from-slate-900 to-slate-800 p-5 shadow-2xl">
            <div className="flex items-center gap-4">
              <div className="grid h-16 w-16 place-items-center rounded-2xl bg-teal-500/20 text-2xl font-bold text-teal-200">
                MK
              </div>
              <div>
                <div className="text-lg font-semibold text-white">Moe Kyaw Aung</div>
                <div className="text-sm text-slate-300">Senior Android Developer</div>
              </div>
            </div>

            <div className="mt-6 grid gap-4 sm:grid-cols-2">
              <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                <div className="text-sm text-slate-400">Focus</div>
                <div className="mt-1 font-medium text-white">Compose + Architecture</div>
              </div>
              <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                <div className="text-sm text-slate-400">Experience</div>
                <div className="mt-1 font-medium text-white">8+ years</div>
              </div>
              <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                <div className="text-sm text-slate-400">Delivery</div>
                <div className="mt-1 font-medium text-white">Production apps</div>
              </div>
              <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                <div className="text-sm text-slate-400">Style</div>
                <div className="mt-1 font-medium text-white">Premium UX</div>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
