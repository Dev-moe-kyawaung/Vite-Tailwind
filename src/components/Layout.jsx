import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from './Navbar';

export default function Layout() {
  return (
    <div className="min-h-screen bg-[radial-gradient(circle_at_top,rgba(20,184,166,0.16),transparent_35%),linear-gradient(to_bottom,#020617,#0f172a)]">
      <Navbar />
      <main className="section-shell py-10 sm:py-14 lg:py-16">
        <Outlet />
      </main>
    </div>
  );
}
