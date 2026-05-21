import React from 'react';
import { useForm, ValidationError } from '@formspree/react';

export default function ContactForm() {
  const [state, handleSubmit] = useForm('YOUR_FORM_ID');

  if (state.succeeded) {
    return (
      <div className="glass-card p-6 text-center">
        <h3 className="text-xl font-semibold text-white">Message sent</h3>
        <p className="mt-2 text-slate-300">Thanks for reaching out. I’ll respond as soon as possible.</p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="glass-card space-y-5 p-6 sm:p-8">
      <div>
        <label htmlFor="name" className="mb-2 block text-sm font-medium text-slate-200">
          Name
        </label>
        <input
          id="name"
          name="name"
          type="text"
          required
          className="w-full rounded-2xl border border-white/10 bg-slate-900/60 px-4 py-3 text-white outline-none transition placeholder:text-slate-500 focus:border-teal-400/40"
          placeholder="Your name"
        />
      </div>

      <div>
        <label htmlFor="email" className="mb-2 block text-sm font-medium text-slate-200">
          Email
        </label>
        <input
          id="email"
          name="email"
          type="email"
          required
          className="w-full rounded-2xl border border-white/10 bg-slate-900/60 px-4 py-3 text-white outline-none transition placeholder:text-slate-500 focus:border-teal-400/40"
          placeholder="you@example.com"
        />
        <ValidationError prefix="Email" field="email" errors={state.errors} />
      </div>

      <div>
        <label htmlFor="message" className="mb-2 block text-sm font-medium text-slate-200">
          Message
        </label>
        <textarea
          id="message"
          name="message"
          rows="6"
          required
          className="w-full rounded-2xl border border-white/10 bg-slate-900/60 px-4 py-3 text-white outline-none transition placeholder:text-slate-500 focus:border-teal-400/40"
          placeholder="Tell me about your project..."
        />
        <ValidationError prefix="Message" field="message" errors={state.errors} />
      </div>

      <button
        type="submit"
        disabled={state.submitting}
        className="btn-primary disabled:cursor-not-allowed disabled:opacity-70"
      >
        {state.submitting ? 'Sending...' : 'Send Message'}
      </button>
    </form>
  );
}
