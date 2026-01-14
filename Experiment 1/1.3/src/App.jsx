import React, { useEffect, useState } from 'react'

export default function App() {
  const [theme, setTheme] = useState(() => {
    try {
      return localStorage.getItem('theme') || 'light'
    } catch (e) {
      return 'light'
    }
  })

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme)
    try {
      localStorage.setItem('theme', theme)
    } catch (e) {}
  }, [theme])

  return (
    <div className="app">
      <header className="app-header">
        <h1>Experiment-3: Theme Toggle SPA</h1>
        <p className="aim"><strong>Aim</strong><br />To create a SPA that switches between light and dark mode.</p>
        <p className="procedure"><strong>Procedure</strong><br />1. Use state to track theme.<br />2. Change styles dynamically.</p>
        <div className="controls">
          <button
            onClick={() => setTheme(prev => (prev === 'light' ? 'dark' : 'light'))}
            className="toggle"
            aria-pressed={theme === 'dark'}
          >
            Switch to {theme === 'light' ? 'Dark' : 'Light'} Mode
          </button>
        </div>
      </header>

      <main className="content">
        <section>
          <h2>Live preview</h2>
          <p>This page uses React state to toggle themes. The current theme is <strong>{theme}</strong>.</p>
        </section>
      </main>
    </div>
  )
}
