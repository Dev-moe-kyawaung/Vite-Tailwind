import React from 'react';
import ContactForm from '../components/ContactForm';

export default function Contact() {
  return (
    <section className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr]">
      <div className="space-y-6">
        <div>
          <h1 className="text-3xl font-bold text-white">Contact</h1>
          <p className="mt-3 text-slate-300 leading-7">
            Need a Senior Android Developer for product delivery, architecture, or a Compose migration? Send a
            message and let’s talk.
          </p>
        </div>

        <div className="glass-card p-6">
          <h2 className="text-lg font-semibold text-white">What I can help with</h2>
          <ul className="mt-4 space-y-2 text-sm leading-6 text-slate-300">
            <li>Android app architecture and refactoring</li>
            <li>Jetpack Compose UI and animations</li>
            <li>Performance, stability, and release pipelines</li>
            <li>Team mentorship and codebase cleanup</li>
          </ul>
        </div>
      </div>

      <ContactForm />
    </section>
  );
}
