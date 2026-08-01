import { useState, useEffect, useRef } from 'react'
import useScrollReveal from '../hooks/useScrollReveal'

interface Skill {
  name: string
  level: number
}

interface Category {
  id: string
  label: string
  glyph: string
  desc: string
  skills: Skill[]
}

const CATEGORIES: Category[] = [
  {
    id: 'frontend',
    label: 'Frontend',
    glyph: '</>',
    desc: 'Building responsive, interactive UIs with modern web technologies.',
    skills: [
      { name: 'HTML5', level: 90 },
      { name: 'CSS3', level: 88 },
      { name: 'JavaScript', level: 85 },
      { name: 'React.js', level: 82 },
      { name: 'TypeScript', level: 80 },
      { name: 'Vite', level: 75 },
    ],
  },
  {
    id: 'ml',
    label: 'ML & Data',
    glyph: 'λ',
    desc: 'Applying statistical learning and data analysis to real-world problems.',
    skills: [
      { name: 'Python', level: 75 },
      { name: 'Pandas', level: 72 },
      { name: 'NumPy', level: 70 },
      { name: 'Scikit-Learn', level: 68 },
      { name: 'Matplotlib', level: 66 },
      { name: 'Seaborn', level: 65 },
    ],
  },
  {
    id: 'tools',
    label: 'Tools',
    glyph: '$_',
    desc: 'Version control, developer tooling, and productive workflows.',
    skills: [
      { name: 'VS Code', level: 90 },
      { name: 'GitHub', level: 85 },
      { name: 'Responsive Design', level: 84 },
      { name: 'Git', level: 82 },
      { name: 'REST APIs', level: 78 },
    ],
  },
  {
    id: 'appdev',
    label: 'App Dev',
    glyph: '◈',
    desc: 'Building cross-platform mobile apps with React Native and native Android with Kotlin.',
    skills: [
      { name: 'React Native', level: 80 },
      { name: 'Expo', level: 75 },
      { name: 'Redux Toolkit', level: 68 },
      { name: 'Kotlin', level: 20 },
    ],
  },
  {
    id: 'math',
    label: 'Mathematics',
    glyph: '∑',
    desc: 'Mathematical foundations underlying machine learning and statistics.',
    skills: [
      { name: 'Statistics', level: 80 },
      { name: 'Probability', level: 76 },
      { name: 'Linear Algebra', level: 30 },
      { name: 'Non-parametric Analysis', level: 85 },
    ],
  },
]

function levelLabel(n: number) {
  if (n >= 85) return 'Advanced'
  if (n >= 70) return 'Proficient'
  return 'Familiar'
}

export default function Skills() {
  const [activeIdx, setActiveIdx] = useState(0)
  const [animate, setAnimate] = useState(false)
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null)
  const sectionRef = useRef<HTMLElement>(null)
  const visible = useScrollReveal(sectionRef as React.RefObject<Element | null>)

  useEffect(() => {
    if (visible) setAnimate(true)
  }, [visible])

  const handleTab = (idx: number) => {
    if (timerRef.current) clearTimeout(timerRef.current)
    setAnimate(false)
    setActiveIdx(idx)
    timerRef.current = setTimeout(() => setAnimate(true), 80)
  }

  useEffect(() => () => { if (timerRef.current) clearTimeout(timerRef.current) }, [])

  const cat = CATEGORIES[activeIdx]

  return (
    <section className="section" id="skills" ref={sectionRef}>
      <div className="container">
        <div className={`section-header reveal${visible ? ' visible' : ''}`}>
          <p className="section-label">Skills</p>
          <h2 className="section-title">My Tech Stack</h2>
          <p className="section-sub">
            Tools and technologies I work with across frontend development,
            machine learning, and data science.
          </p>
        </div>

        <div className={`skills-tabs reveal reveal-d1${visible ? ' visible' : ''}`}>
          {CATEGORIES.map((c, i) => (
            <button
              key={c.id}
              className={`sk-tab${activeIdx === i ? ' active' : ''}`}
              onClick={() => handleTab(i)}
            >
              <span className="sk-tab-num">
                {String(i + 1).padStart(2, '0')}
              </span>
              {c.label}
            </button>
          ))}
        </div>

        <div className={`skills-panel reveal reveal-d2${visible ? ' visible' : ''}`}>
          <div className="sk-info">
            <span className="sk-glyph">{cat.glyph}</span>
            <p className="sk-info-num">// {String(activeIdx + 1).padStart(2, '0')}</p>
            <h3 className="sk-info-label">{cat.label}</h3>
            <p className="sk-info-desc">{cat.desc}</p>
            <span className="sk-info-count">
              {cat.skills.length}&nbsp;technologies
            </span>
          </div>

          <div className="sk-rows">
            {cat.skills.map((skill, i) => (
              <div key={skill.name} className="sk-row">
                <div className="sk-row-header">
                  <span className="sk-name">{skill.name}</span>
                  <div className="sk-meta">
                    <span className="sk-badge">{levelLabel(skill.level)}</span>
                    <span className="sk-pct">{skill.level}%</span>
                  </div>
                </div>
                <div className="sk-track">
                  <div
                    className="sk-fill"
                    style={{
                      width: animate ? `${skill.level}%` : '0%',
                      transitionDelay: `${i * 0.07}s`,
                    }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
