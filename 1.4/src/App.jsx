import React, { useState } from 'react'

export default function App() {
  const [form, setForm] = useState({ name: '', email: '', message: '' })
  const [submissions, setSubmissions] = useState([])

  function handleChange(e) {
    const { name, value } = e.target
    setForm(prev => ({ ...prev, [name]: value }))
  }

  function handleSubmit(e) {
    e.preventDefault()
    setSubmissions(prev => [form, ...prev])
    setForm({ name: '', email: '', message: '' })
  }

  return (
    <div className="container">
      <h1>Experiment-4: Simple Form SPA</h1>

      <section className="card">
        <h2>Aim</h2>
        <p>To build a basic form SPA using React.</p>
      </section>

      <section className="card">
        <h2>Procedure</h2>
        <ol>
          <li>Create form fields.</li>
          <li>Store input using state.</li>
          <li>Display submitted data.</li>
        </ol>
      </section>

      <form className="card form" onSubmit={handleSubmit}>
        <label>
          Name
          <input name="name" value={form.name} onChange={handleChange} required />
        </label>

        <label>
          Email
          <input name="email" type="email" value={form.email} onChange={handleChange} required />
        </label>

        <label>
          Message
          <textarea name="message" value={form.message} onChange={handleChange} />
        </label>

        <div className="actions">
          <button type="submit">Submit</button>
        </div>
      </form>

      <section className="card">
        <h2>Submitted Data</h2>
        {submissions.length === 0 ? (
          <p>No submissions yet.</p>
        ) : (
          <ul className="submissions">
            {submissions.map((s, i) => (
              <li key={i} className="submission">
                <strong>{s.name}</strong> — {s.email}
                {s.message && <p className="msg">{s.message}</p>}
              </li>
            ))}
          </ul>
        )}
      </section>
    </div>
  )
}
