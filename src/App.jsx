import React from 'react'

import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Footer from './components/Footer';
import Projects from './components/Projects';
import { useState } from 'react';

export default function App() {
  const [page, setPage] = useState('home');
  return (
    <div className="min-h-screen flex flex-col">
      <header className="py-6">
        <div className="container flex items-center justify-between">
          <div className="pl-8">
            <button onClick={() => setPage('home')} className="text-lg font-bold bg-transparent border-none cursor-pointer">Alessandro Kevin Aprilio</button>
            <div className="text-sm text-slate-400">Software Engineer</div>
          </div>
          <nav className="hidden md:flex space-x-4 text-slate-300">
            <button onClick={() => setPage('home')} className="bg-transparent border-none cursor-pointer">About</button>
            <button onClick={() => setPage('projects')} className="bg-transparent border-none cursor-pointer">Projects</button>
          </nav>
        </div>
      </header>

      <main className="flex-grow">
        {page === 'home' && (
          <section id="home" className="container py-12 flex flex-col items-center">
            <Hero />
            <div className="w-full max-w-2xl mt-10 flex flex-col items-center">
              <About />
            </div>
            <div className="w-full max-w-2xl mt-10 flex flex-col items-center">
              <Skills />
            </div>
          </section>
        )}
        {page === 'projects' && (
          <Projects />
        )}
      </main>
      <Footer />
    </div>
  );
}
