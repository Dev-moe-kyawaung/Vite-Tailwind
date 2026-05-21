import React from 'react';
import Hero from '../components/Hero';

export default function Home() {
  return (
    <div className="space-y-16">
      <Hero />
      <section className="grid gap-6 md:grid-cols-3">
        <div className="glass-card p-6">
          <h2 className="text-lg font-semibold text-white">Performance-first</h2>
          <p className="mt-2 text-sm leading-6 text-slate-300">
            Optimized startup, smooth interactions, and clean state handling across large Android codebases.
          </p>
        </div>
        <div className="glass-card p-6">
          <h2 className="text-lg font-semibold text-white">Compose-focused</h2>
          <p className="mt-2 text-sm leading-6 text-slate-300">
            Building modular UIs with reusable components, modern theming, and responsive layouts.
          </p>
        </div>
        <div className="glass-card p-6">
          <h2 className="text-lg font-semibold text-white">Team-ready</h2>
          <p className="mt-2 text-sm leading-6 text-slate-300">
            Structured for collaboration, mentoring, release workflows, and maintainable growth.
          </p>
        </div>
      </section>
    </div>
  );
}
