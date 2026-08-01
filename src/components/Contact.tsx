import { useState, useRef } from 'react'
import useScrollReveal from '../hooks/useScrollReveal'

const EmailIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
    <polyline points="22,6 12,12 2,6" />
  </svg>
)

const LinkedInIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect x="2" y="9" width="4" height="12" />
    <circle cx="4" cy="4" r="2" />
  </svg>
)

const GithubIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="M12 2C6.477 2 2 6.477 2 12c0 4.418 2.865 8.166 6.839 9.49.5.092.682-.217.682-.482 0-.237-.009-.866-.013-1.7-2.782.604-3.369-1.34-3.369-1.34-.454-1.156-1.11-1.463-1.11-1.463-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.026A9.578 9.578 0 0 1 12 6.836a9.58 9.58 0 0 1 2.504.337c1.909-1.295 2.747-1.026 2.747-1.026.546 1.377.202 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.578.688.48C19.138 20.163 22 16.418 22 12c0-5.523-4.477-10-10-10z" />
  </svg>
)

const LocationIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
    <circle cx="12" cy="10" r="3" />
  </svg>
)

const ExternalIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="15" height="15" aria-hidden="true">
    <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
    <polyline points="15 3 21 3 21 9" />
    <line x1="10" y1="14" x2="21" y2="3" />
  </svg>
)

const CopyIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="15" height="15" aria-hidden="true">
    <rect x="9" y="9" width="13" height="13" rx="2" ry="2" />
    <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1" />
  </svg>
)

const CheckIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" width="15" height="15" aria-hidden="true">
    <polyline points="20 6 9 17 4 12" />
  </svg>
)

const SendIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="17" height="17" aria-hidden="true">
    <line x1="22" y1="2" x2="11" y2="13" />
    <polygon points="22 2 15 22 11 13 2 9 22 2" />
  </svg>
)

export default function Contact() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')
  const [copied, setCopied] = useState(false)
  const [ghError, setGhError] = useState(false)

  const sectionRef = useRef<HTMLElement>(null)
  const visible = useScrollReveal(sectionRef as React.RefObject<Element | null>)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    const subject = encodeURIComponent(`Portfolio message from ${name}`)
    const body = encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`)
    window.open(`mailto:destinyprogrammer06@gmail.com?subject=${subject}&body=${body}`)
  }

  const copyEmail = async () => {
    await navigator.clipboard.writeText('destinyprogrammer06@gmail.com')
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <section className="section" id="contact" ref={sectionRef}>
      <div className="container">
        <div className={`section-header reveal${visible ? ' visible' : ''}`}>
          <p className="section-label">Contact</p>
          <h2 className="section-title">Let&apos;s Work Together</h2>
          <p className="section-sub">
            Open to mobile development roles and interesting collaborations.
            Send a message and I&apos;ll get back to you.
          </p>
        </div>

        <div className="contact-grid">

          {/* Info column */}
          <div className={`contact-info reveal-left${visible ? ' visible' : ''}`}>

            <div className="contact-card">
              <div className="contact-card-icon"><EmailIcon /></div>
              <div className="contact-card-body">
                <p className="contact-card-label">Email</p>
                <p className="contact-card-value">destinyprogrammer06@gmail.com</p>
              </div>
              <button className="copy-btn" onClick={copyEmail} aria-label={copied ? 'Copied!' : 'Copy email'}>
                {copied ? <CheckIcon /> : <CopyIcon />}
                <span className="copy-btn-label">{copied ? 'Copied!' : 'Copy'}</span>
              </button>
            </div>

            <a
              href="https://www.linkedin.com/in/destiny-israel/"
              target="_blank"
              rel="noopener noreferrer"
              className="contact-card contact-card-link"
            >
              <div className="contact-card-icon"><LinkedInIcon /></div>
              <div className="contact-card-body">
                <p className="contact-card-label">LinkedIn</p>
                <p className="contact-card-value">destiny-israel</p>
              </div>
              <ExternalIcon />
            </a>

            <a
              href="https://github.com/DestinyEnder16"
              target="_blank"
              rel="noopener noreferrer"
              className="contact-card contact-card-link"
            >
              <div className="contact-card-icon"><GithubIcon /></div>
              <div className="contact-card-body">
                <p className="contact-card-label">GitHub</p>
                <p className="contact-card-value">DestinyEnder16</p>
              </div>
              <ExternalIcon />
            </a>

            <div className="contact-card">
              <div className="contact-card-icon"><LocationIcon /></div>
              <div className="contact-card-body">
                <p className="contact-card-label">Location</p>
                <p className="contact-card-value">Lagos, Nigeria</p>
              </div>
            </div>

          </div>

          {/* Form column */}
          <div className={`contact-form-wrap reveal-right${visible ? ' visible' : ''}`}>
            <form className="contact-form" onSubmit={handleSubmit} noValidate>

              <div className="form-row">
                <div className="form-group">
                  <label className="form-label" htmlFor="cf-name">Name</label>
                  <input
                    id="cf-name"
                    type="text"
                    className="form-input"
                    placeholder="Your name"
                    value={name}
                    onChange={e => setName(e.target.value)}
                    required
                  />
                </div>
                <div className="form-group">
                  <label className="form-label" htmlFor="cf-email">Email</label>
                  <input
                    id="cf-email"
                    type="email"
                    className="form-input"
                    placeholder="your@email.com"
                    value={email}
                    onChange={e => setEmail(e.target.value)}
                    required
                  />
                </div>
              </div>

              <div className="form-group">
                <label className="form-label" htmlFor="cf-message">Message</label>
                <textarea
                  id="cf-message"
                  className="form-input form-textarea"
                  placeholder="Tell me about your project or opportunity..."
                  value={message}
                  onChange={e => setMessage(e.target.value)}
                  rows={6}
                  required
                />
              </div>

              <div className="form-footer">
                <button type="submit" className="btn-primary">
                  <SendIcon />
                  Send Message
                </button>
                <p className="form-note">
                  // Opens your email client with the message pre-filled
                </p>
              </div>

            </form>
          </div>

          {/* Contribution graph — full width */}
          {!ghError ? (
            <div className={`contact-gh-stats reveal reveal-d2${visible ? ' visible' : ''}`}>
              <p className="gh-stats-label">// github contributions</p>
              <img
                src="https://ghchart.rshah.org/7c3aed/DestinyEnder16"
                alt="GitHub contribution graph for DestinyEnder16"
                className="gh-stats-img"
                loading="lazy"
                onError={() => setGhError(true)}
              />
            </div>
          ) : (
            <a
              href="https://github.com/DestinyEnder16"
              target="_blank"
              rel="noopener noreferrer"
              className={`contact-gh-fallback contact-card contact-card-link reveal reveal-d2${visible ? ' visible' : ''}`}
            >
              <div className="contact-card-icon"><GithubIcon /></div>
              <div className="contact-card-body">
                <p className="contact-card-label">Contributions</p>
                <p className="contact-card-value">View my activity on GitHub</p>
              </div>
              <ExternalIcon />
            </a>
          )}

        </div>
      </div>
    </section>
  )
}
