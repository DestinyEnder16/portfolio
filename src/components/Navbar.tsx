import { useState, useEffect } from 'react'

const NAV_ITEMS = [
  ['About', '#about'],
  ['Skills', '#skills'],
  ['Projects', '#projects'],
  ['Experience', '#experience'],
  ['Contact', '#contact'],
] as const

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 48)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const close = () => setOpen(false)

  return (
    <nav className={`navbar${scrolled ? ' scrolled' : ''}`} role="navigation">
      <a href="#hero" className="nav-logo" onClick={close}>
        <span className="nav-bracket">&lt;</span>
        Destiny
        <span className="nav-bracket">/&gt;</span>
      </a>

      <button
        className={`nav-burger${open ? ' open' : ''}`}
        onClick={() => setOpen(o => !o)}
        aria-label="Toggle navigation"
        aria-expanded={open}
      >
        <span />
        <span />
        <span />
      </button>

      <ul className={`nav-list${open ? ' open' : ''}`} role="list">
        {NAV_ITEMS.map(([label, href]) => (
          <li key={href}>
            <a href={href} onClick={close}>
              {label}
            </a>
          </li>
        ))}
        <li>
          <a
            href="mailto:destinyprogrammer06@gmail.com?subject=Mobile%20Developer%20Opportunity"
            className="nav-hire"
            onClick={close}
          >
            Hire Me
          </a>
        </li>
      </ul>
    </nav>
  )
}
