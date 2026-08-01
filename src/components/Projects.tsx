import { useRef } from 'react'
import useScrollReveal from '../hooks/useScrollReveal'

interface Project {
  num: string
  title: string
  desc: string
  tags: string[]
  live: string | null
  source: string | null
}

const PROJECTS: Project[] = [
  {
    num: '01',
    title: 'Quiz Game',
    desc: 'An interactive quiz application with multiple categories, scoring system, and a clean responsive UI. Built with vanilla JavaScript and deployed on Vercel.',
    tags: ['JavaScript', 'HTML5', 'CSS3', 'Vercel'],
    live: 'https://quiz-game-ruddy-nine.vercel.app/',
    source: null,
  },
  {
    num: '02',
    title: 'MapWorkout',
    desc: 'A web app for tracking daily running and cycling workouts on an interactive map. Drop a pin where you exercise, log the activity, and see your workout history with calories burned automatically calculated from your weight and duration.',
    tags: ['HTML5', 'CSS3', 'JavaScript', 'Leaflet'],
    live: null,
    source: 'https://github.com/DestinyEnder16/web-workout-tracker',
  },
  {
    num: '03',
    title: 'CryptoApp (tMinus1)',
    desc: 'A React Native mobile app for crypto enthusiasts to track and manage their crypto assets in real time. Built with Expo SDK 54, Expo Router for navigation, and Redux Toolkit / RTK Query for state and data fetching.',
    tags: ['React Native', 'Expo SDK 54', 'Expo Router', 'Redux Toolkit', 'RTK Query'],
    live: null,
    source: 'https://github.com/DestinyEnder16/cryptoApp',
  },
  {
    num: '04',
    title: 'Crime Data Analysis — Los Angeles',
    desc: 'Exploratory data analysis of crime incidents in Los Angeles using pandas, seaborn, and matplotlib. Answers questions like which demographics and areas are most affected, when crimes occur, what percentage are unresolved, and how weapon usage breaks down.',
    tags: ['Python', 'Pandas', 'Seaborn', 'Matplotlib'],
    live: null,
    source: 'https://github.com/DestinyEnder16/Crime-data-analysis',
  },
]

const ExternalIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
    <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
    <polyline points="15 3 21 3 21 9" />
    <line x1="10" y1="14" x2="21" y2="3" />
  </svg>
)

const GithubIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="M12 2C6.477 2 2 6.477 2 12c0 4.418 2.865 8.166 6.839 9.49.5.092.682-.217.682-.482 0-.237-.009-.866-.013-1.7-2.782.604-3.369-1.34-3.369-1.34-.454-1.156-1.11-1.463-1.11-1.463-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.026A9.578 9.578 0 0 1 12 6.836a9.58 9.58 0 0 1 2.504.337c1.909-1.295 2.747-1.026 2.747-1.026.546 1.377.202 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.578.688.48C19.138 20.163 22 16.418 22 12c0-5.523-4.477-10-10-10z" />
  </svg>
)

function ProjectCard({ project, delay }: { project: Project; delay: string }) {
  const ref = useRef<HTMLDivElement>(null)
  const visible = useScrollReveal(ref)

  return (
    <article
      ref={ref}
      className={`project-card reveal ${delay}${visible ? ' visible' : ''}`}
    >
      <div className="pc-header">
        <div className="cw-dot cw-dot-r" />
        <div className="cw-dot cw-dot-y" />
        <div className="cw-dot cw-dot-g" />
        <span className="pc-number">{project.num}</span>
      </div>

      <div className="pc-body">
        <h3 className="pc-title">{project.title}</h3>
        <p className="pc-desc">{project.desc}</p>

        <div className="pc-tags">
          {project.tags.map(tag => (
            <span className="pc-tag" key={tag}>{tag}</span>
          ))}
        </div>

        <div className="pc-links">
          {project.live && (
            <a
              href={project.live}
              target="_blank"
              rel="noopener noreferrer"
              className="pc-link"
            >
              <ExternalIcon />
              Live Demo
            </a>
          )}
          <a
            href={project.source ?? 'https://github.com'}
            target="_blank"
            rel="noopener noreferrer"
            className="pc-link"
            aria-label={project.source ? 'View source on GitHub' : 'GitHub (placeholder)'}
          >
            <GithubIcon />
            {project.source ? 'Source Code' : 'GitHub'}
          </a>
        </div>
      </div>
    </article>
  )
}

export default function Projects() {
  const delays = ['reveal-d1', 'reveal-d2', 'reveal-d3', 'reveal-d4']

  return (
    <section className="section section-alt" id="projects">
      <div className="container">
        <div className="section-header">
          <p className="section-label">Projects</p>
          <h2 className="section-title">Things I&apos;ve Built</h2>
          <p className="section-sub">
            A selection of projects I&apos;ve shipped. Each one was a chance to
            learn something new and ship something real.
          </p>
        </div>

        <div className="projects-grid">
          {PROJECTS.map((project, i) => (
            <ProjectCard key={project.num} project={project} delay={delays[i] ?? ''} />
          ))}
        </div>
      </div>
    </section>
  )
}
