import { useRef } from 'react'
import useScrollReveal from '../hooks/useScrollReveal'

export default function About() {
  const leftRef = useRef<HTMLDivElement>(null)
  const rightRef = useRef<HTMLDivElement>(null)
  const leftVisible = useScrollReveal(leftRef)
  const rightVisible = useScrollReveal(rightRef)

  return (
    <section className="section section-alt" id="about">
      <div className="container">
        <div className="about-grid">

          {/* Text column */}
          <div
            ref={leftRef}
            className={`about-text reveal-left${leftVisible ? ' visible' : ''}`}
          >
            <p className="section-label">About Me</p>
            <h2 className="section-title">The Developer Behind the Code</h2>

            <p>
              Hi, I&apos;m <span className="text-accent">Israel Destiny</span> — a Mobile
              and Front-end Developer from Lagos, Nigeria, specializing in React Native,
              cross-platform apps, and modern web interfaces. I also bring strong data
              science skills to the table.
            </p>
            <p>
              I&apos;m currently in the <span className="text-accent">Mobile Track at Rise
              Academy</span> (by Risevest) and studying{' '}
              <span className="text-accent">Statistics at the University of Lagos</span> —
              building the mathematical depth that makes me a sharper developer and problem
              solver.
            </p>
            <p>
              When I&apos;m not shipping React Native screens, I&apos;m exploring Python,
              data science pipelines, and supervised learning — always looking for
              real-world problems worth solving with code.
            </p>

            <div className="about-meta">
              {([
                ['📍', 'Badagry, Lagos, Nigeria'],
                ['🎓', 'B.Sc. Statistics — UNILAG'],
                ['📧', 'destinyprogrammer06@gmail.com'],
                ['🔭', 'Open to opportunities'],
              ] as [string, string][]).map(([icon, text]) => (
                <div className="meta-item" key={text}>
                  <div className="meta-icon">{icon}</div>
                  <span>{text}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Code window column */}
          <div
            ref={rightRef}
            className={`code-window reveal-right${rightVisible ? ' visible' : ''}`}
          >
            <div className="cw-header">
              <div className="cw-dot cw-dot-r" />
              <div className="cw-dot cw-dot-y" />
              <div className="cw-dot cw-dot-g" />
              <span className="cw-title">about_me.json</span>
            </div>
            <div className="cw-body">
              <div className="code-line"><span className="ln">1</span><span className="t-punc">{'{'}</span></div>
              <div className="code-line"><span className="ln">2</span><span>&nbsp;&nbsp;<span className="t-key">&quot;name&quot;</span><span className="t-punc">: </span><span className="t-str">&quot;Israel Destiny&quot;</span><span className="t-punc">,</span></span></div>
              <div className="code-line"><span className="ln">3</span><span>&nbsp;&nbsp;<span className="t-key">&quot;title&quot;</span><span className="t-punc">: </span><span className="t-str">&quot;Mobile Developer&quot;</span><span className="t-punc">,</span></span></div>
              <div className="code-line"><span className="ln">4</span><span>&nbsp;&nbsp;<span className="t-key">&quot;location&quot;</span><span className="t-punc">: </span><span className="t-str">&quot;Lagos, Nigeria&quot;</span><span className="t-punc">,</span></span></div>
              <div className="code-line"><span className="ln">5</span><span>&nbsp;&nbsp;<span className="t-key">&quot;education&quot;</span><span className="t-punc">: </span><span className="t-str">&quot;B.Sc. Statistics&quot;</span><span className="t-punc">,</span></span></div>
              <div className="code-line"><span className="ln">6</span><span>&nbsp;&nbsp;<span className="t-key">&quot;focus&quot;</span><span className="t-punc">: [</span></span></div>
              <div className="code-line"><span className="ln">7</span><span>&nbsp;&nbsp;&nbsp;&nbsp;<span className="t-str">&quot;React Native &amp; Mobile&quot;</span><span className="t-punc">,</span></span></div>
              <div className="code-line"><span className="ln">8</span><span>&nbsp;&nbsp;&nbsp;&nbsp;<span className="t-str">&quot;React &amp; Frontend&quot;</span><span className="t-punc">,</span></span></div>
              <div className="code-line"><span className="ln">9</span><span>&nbsp;&nbsp;&nbsp;&nbsp;<span className="t-str">&quot;Data Science&quot;</span></span></div>
              <div className="code-line"><span className="ln">10</span><span>&nbsp;&nbsp;<span className="t-punc">],</span></span></div>
              <div className="code-line"><span className="ln">11</span><span>&nbsp;&nbsp;<span className="t-key">&quot;openTo&quot;</span><span className="t-punc">: </span><span className="t-str">&quot;Mobile roles&quot;</span><span className="t-punc">,</span></span></div>
              <div className="code-line"><span className="ln">12</span><span>&nbsp;&nbsp;<span className="t-key">&quot;available&quot;</span><span className="t-punc">: </span><span className="t-bool">true</span></span></div>
              <div className="code-line"><span className="ln">13</span><span className="t-punc">{'}'}</span></div>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
