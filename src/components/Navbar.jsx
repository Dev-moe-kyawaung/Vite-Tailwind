import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';

const links = [
  { to: '/', label: 'Home' },
  { to: '/about', label: 'About' },
  { to: '/portfolio', label: 'Portfolio' },
  { to: '/experience', label: 'Experience' },
  { to: '/contact', label: 'Contact' }
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-slate-950/70 backdrop-blur-xl">
      <div className="section-shell flex items-center justify-between py-4">
        <NavLink to="/" className="flex items-center gap-3">
          <div className="grid h-11 w-11 place-items-center rounded-2xl bg-gradient-to-br from-teal-400 to-emerald-500 font-bold text-slate-950 shadow-lg shadow-teal-500/20">
            MK
          </div>
          <div>
            <div className="font-semibold text-white">Moe Kyaw Aung</div>
            <div className="text-xs text-slate-400">Senior Android Developer</div>
          </div>
        </NavLink>

        <nav className="hidden items-center gap-6 md:flex">
          {links.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              className={({ isActive }) => `${isActive ? 'text-teal-300' : 'nav-link'}`}
            >
              {link.label}
            </NavLink>
          ))}
        </nav>

        <button
          type="button"
          className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-white md:hidden"
          onClick={() => setOpen((v) => !v)}
        >
          Menu
        </button>
      </div>

      {open ? (
        <nav className="section-shell flex flex-col gap-3 pb-4 md:hidden">
          {links.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              onClick={() => setOpen(false)}
              className={({ isActive }) =>
                `rounded-2xl px-4 py-3 ${isActive ? 'bg-teal-500 text-slate-950' : 'bg-white/5 text-slate-200'}`
              }
            >
              {link.label}
            </NavLink>
          ))}
        </nav>
      ) : null}
    </header>
  );
}
