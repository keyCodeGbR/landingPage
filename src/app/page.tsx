'use client';

import { useState } from 'react';

export default function Home() {
  const [open, setOpen] = useState(false);

  return (
    <div className="min-h-dvh grid grid-rows-[auto_1fr_auto] font-sans">
      {/* Header / Menü */}
      <header className="border-b">
        <nav className="mx-auto max-w-5xl px-4 sm:px-6">
          <div className="flex h-14 items-center justify-between">
            <a href="#" className="text-lg font-semibold tracking-tight">
              KeyCode
            </a>

            {/* Desktop-Links */}
            <ul className="hidden gap-6 sm:flex">
              <li><a className="hover:underline" href="#home">Home</a></li>
              <li><a className="hover:underline" href="#features">Features</a></li>
              <li><a className="hover:underline" href="#kontakt">Kontakt</a></li>
            </ul>

            {/* Mobile-Toggler */}
            <button
              aria-label="Menü öffnen"
              className="sm:hidden inline-flex items-center justify-center rounded-md border px-3 py-2"
              onClick={() => setOpen(v => !v)}
            >
              ☰
            </button>
          </div>

          {/* Mobile-Menü */}
          {open && (
            <ul className="sm:hidden pb-3 space-y-2">
              <li><a className="block rounded px-3 py-2 hover:bg-gray-100" href="#home">Home</a></li>
              <li><a className="block rounded px-3 py-2 hover:bg-gray-100" href="#features">Features</a></li>
              <li><a className="block rounded px-3 py-2 hover:bg-gray-100" href="#kontakt">Kontakt</a></li>
            </ul>
          )}
        </nav>
      </header>

      {/* Eine Section (Main) */}
      <main id="home" className="mx-auto w-full max-w-5xl px-4 sm:px-6 py-10">
        <section className="rounded-lg border p-6 sm:p-8">
          <h1 className="text-2xl sm:text-3xl font-bold mb-3">Willkommen 👋</h1>
          <p className="text-gray-700 mb-6">
            Das ist deine schlanke React/Next.js-Seite mit Menü, einer Sektion und Footer.
          </p>

          <div id="features" className="grid gap-4 sm:grid-cols-3">
            <div className="rounded border p-4">
              <h3 className="font-semibold mb-1">Schnell</h3>
              <p className="text-sm text-gray-600">Minimaler Code, direkt einsatzbereit.</p>
            </div>
            <div className="rounded border p-4">
              <h3 className="font-semibold mb-1">Responsiv</h3>
              <p className="text-sm text-gray-600">Desktop-Menü & mobiles Burger-Menü.</p>
            </div>
            <div className="rounded border p-4">
              <h3 className="font-semibold mb-1">Sauber</h3>
              <p className="text-sm text-gray-600">Klare Struktur mit Tailwind-Klassen.</p>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 h-14 flex items-center justify-between text-sm text-gray-600">
          <span>© {new Date().getFullYear()} MeineApp</span>
          <div className="flex gap-4">
            <a href="#impressum" className="hover:underline">Impressum</a>
            <a href="#datenschutz" className="hover:underline">Datenschutz</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
