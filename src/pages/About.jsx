import React from 'react';
import TechTimeline from '../components/TechTimeline';

export default function About() {
  return (
    <section className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr]">
      <div className="space-y-6">
        <div className="glass-card p-6 sm:p-8">
          <h1 className="text-3xl font-bold text-white">About Me</h1>
          <p className="mt-4 text-slate-300 leading-7">
            I build Android products with a focus on elegant interactions, maintainable code, and strong
            delivery discipline. My work centers on Jetpack Compose, Kotlin, architecture patterns, and
            polished UI systems that feel premium in production.
          </p>
          <p className="mt-4 text-slate-300 leading-7">
            I collaborate closely with design, product, and backend teams to shape experiences that are fast,
            accessible, and consistent across devices.
          </p>
        </div>

        <div className="glass-card p-6 sm:p-8">
          <h2 className="text-xl font-semibold text-white">Core strengths</h2>
          <ul className="mt-4 grid gap-3 text-sm text-slate-300 sm:grid-cols-2">
            <li>Jetpack Compose UI systems</li>
            <li>Kotlin and Coroutines</li>
            <li>MVVM / Clean Architecture</li>
            <li>Room, Hilt, Flow</li>
            <li>Testing and stability work</li>
            <li>Release and CI/CD pipelines</li>
          </ul>
        </div>
      </div>

      <div>
        <h2 className="mb-5 text-2xl font-bold text-white">Tech Stack Timeline</h2>
        <TechTimeline />
      </div>
    </section>
  );
}
