import { useState, useEffect } from 'react'
import ParticleCanvas from './ParticleCanvas'

const ROLES = [
  'Mobile Developer',
  'React Native Developer',
  'Frontend Developer',
  'Creative Coder',
]

function useTypewriter(words: string[]) {
  const [wordIdx, setWordIdx] = useState(0)
  const [charIdx, setCharIdx] = useState(0)
  const [deleting, setDeleting] = useState(false)
  const [text, setText] = useState('')

  useEffect(() => {
    const current = words[wordIdx]
    let delay: number

    if (!deleting && charIdx < current.length) {
      delay = 80
    } else if (!deleting && charIdx === current.length) {
      delay = 2200
    } else if (deleting && charIdx > 0) {
      delay = 40
    } else {
      delay = 300
    }

    const t = setTimeout(() => {
      if (!deleting && charIdx < current.length) {
        setText(current.slice(0, charIdx + 1))
        setCharIdx(c => c + 1)
      } else if (!deleting && charIdx === current.length) {
        setDeleting(true)
      } else if (deleting && charIdx > 0) {
        setText(current.slice(0, charIdx - 1))
        setCharIdx(c => c - 1)
      } else {
        setDeleting(false)
        setWordIdx(i => (i + 1) % words.length)
      }
    }, delay)

    return () => clearTimeout(t)
  }, [words, wordIdx, charIdx, deleting])

  return text
}

export default function Hero() {
  const typed = useTypewriter(ROLES)

  return (
    <section className="hero" id="hero">
      <ParticleCanvas />

      <div className="hero-content">
        <div className="hero-badge">
          <span className="hero-badge-dot" aria-hidden="true" />
          Open to opportunities
        </div>

        <span className="hero-eyebrow">// Hello, World!</span>

        <h1 className="hero-name">
          I&apos;m{' '}
          <span className="name-accent">Israel Destiny</span>
        </h1>

        <div className="hero-typing" aria-label={`Role: ${typed}`}>
          <span className="kw">const</span>{' '}
          <span style={{ color: 'var(--text)' }}>role</span>{' '}
          <span className="punc">={' "'}
          </span>
          <span className="str">{typed}</span>
          <span className="hero-cursor" aria-hidden="true" />
          <span className="punc">";</span>
        </div>

        <p className="hero-bio">
          Mobile Developer specializing in React Native, with a strong frontend
          foundation and a passion for data science. Studying Statistics at the
          University of Lagos.
        </p>

        <div className="hero-actions">
          <a href="#projects" className="btn-primary">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="19" height="19" aria-hidden="true">
              <rect x="3" y="3" width="7" height="7" />
              <rect x="14" y="3" width="7" height="7" />
              <rect x="3" y="14" width="7" height="7" />
              <rect x="14" y="14" width="7" height="7" />
            </svg>
            View Projects
          </a>
          <a href="mailto:destinyprogrammer06@gmail.com?subject=Mobile%20Developer%20Opportunity" className="btn-outline">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="19" height="19" aria-hidden="true">
              <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
              <polyline points="22,6 12,12 2,6" />
            </svg>
            Get In Touch
          </a>
          <a href="/resume.pdf" download="Israel_Destiny_Resume.pdf" className="btn-resume">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="17" height="17" aria-hidden="true">
              <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
              <polyline points="7 10 12 15 17 10" />
              <line x1="12" y1="15" x2="12" y2="3" />
            </svg>
            Resume
          </a>
        </div>
      </div>

    </section>
  )
}
