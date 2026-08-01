import { useRef } from 'react'
import useScrollReveal from '../hooks/useScrollReveal'

interface TimelineItem {
  date: string
  title: string
  org: string
  desc: string
}

const ITEMS: TimelineItem[] = [
  {
    date: 'Jan – Dec 2026',
    title: 'Mobile Track — Rise Academy',
    org: 'Risevest',
    desc: 'Selected for Rise Academy, a free intensive training program by Risevest. Currently completing the Mobile Development track, building production-quality cross-platform mobile apps with React Native.',
  },
  {
    date: 'Oct 2023 – Present',
    title: 'Bachelor of Science, Statistics',
    org: 'University of Lagos',
    desc: 'Relevant coursework: Probability Theory, Non-parametric Analysis, Statistical Methods, and Linear Algebra. Building the mathematical backbone for data-driven work.',
  },
  {
    date: 'Sept 2025 – Present',
    title: 'Scholarship Recipient',
    org: 'Cedars Productivity Center',
    desc: 'Awarded full access to DataCamp\'s data science and analytics curriculum. Currently completing tracks in Python, Data Science, and Machine Learning.',
  },
  {
    date: 'Completed',
    title: 'Supervised Machine Learning',
    org: 'Coursera — Dr. Andrew Ng',
    desc: 'Completed the renowned ML Specialization course covering linear regression, logistic regression, gradient descent, and neural network fundamentals.',
  },
  {
    date: 'Completed',
    title: 'Responsive Web Design',
    org: 'Udemy',
    desc: 'In-depth course covering semantic HTML5, modern CSS3, Flexbox, CSS Grid, and responsive design patterns for cross-device compatibility.',
  },
]

function TlItem({ item, delay }: { item: TimelineItem; delay: string }) {
  const ref = useRef<HTMLDivElement>(null)
  const visible = useScrollReveal(ref)

  return (
    <div
      ref={ref}
      className={`tl-item reveal ${delay}${visible ? ' visible' : ''}`}
    >
      <div className="tl-dot" aria-hidden="true" />
      <div className="tl-card">
        <p className="tl-date">{item.date}</p>
        <h3 className="tl-title">{item.title}</h3>
        <p className="tl-org">{item.org}</p>
        <p className="tl-desc">{item.desc}</p>
      </div>
    </div>
  )
}

export default function Experience() {
  const delays = ['reveal-d1', 'reveal-d2', 'reveal-d3', 'reveal-d4', 'reveal-d5']

  return (
    <section className="section" id="experience">
      <div className="container">
        <div className="section-header">
          <p className="section-label">Experience</p>
          <h2 className="section-title">Education &amp; Certifications</h2>
          <p className="section-sub">
            My academic journey and the courses that shaped my technical skill set.
          </p>
        </div>

        <div className="timeline">
          {ITEMS.map((item, i) => (
            <TlItem key={item.title} item={item} delay={delays[i] ?? ''} />
          ))}
        </div>
      </div>
    </section>
  )
}
