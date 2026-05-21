import React from 'react';
import experience from '../data/experience';
import ExperienceItem from '../components/ExperienceItem';

export default function Experience() {
  return (
    <section>
      <div className="mb-8 max-w-2xl">
        <h1 className="text-3xl font-bold text-white">Experience</h1>
        <p className="mt-3 text-slate-300 leading-7">
          A career timeline showing the roles, outcomes, and engineering responsibility behind my Android work.
        </p>
      </div>

      <div className="space-y-5">
        {experience.map((item) => (
          <ExperienceItem key={item.id} item={item} />
        ))}
      </div>
    </section>
  );
}
