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
              MeineApp
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
      <main id="home" className="mx-auto w-full max-w-5xl px-4 sm:px-6 flex flex-col items-center justify-center text-center">
        <section className="py-20">
          <h1 className="text-4xl sm:text-6xl font-bold mb-6">
            DIESE SEITE IST NOCH IN BEARBEITUNG
          </h1>
          <p className="text-lg sm:text-xl text-gray-700">
            Bald wird diese Seite das Licht der Welt erblicken. <br />
            Bitte gedulden Sie sich noch ein wenig. 😊
          </p>
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
