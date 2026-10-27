import { Download, Github, Linkedin, Mail, FileClock, ArrowUpRight } from 'lucide-react'
import { about, principles, experience, education, certifications, skills, profile } from '../data/profile'
import Reveal from './Reveal'

export function About() {
  const [lead, ...rest] = about
  return (
    <section id="about" className="section band" aria-labelledby="about-title">
      <div className="section-head">
        <p className="eyebrow">Profile</p>
        <h2 id="about-title">About</h2>
      </div>
      <div className="about-grid">
        <Reveal className="prose">
          <p className="pull">{lead}</p>
          {rest.map((t) => <p key={t}>{t}</p>)}
        </Reveal>
        <div className="about-side">
          <Reveal as="figure" className="portrait">
            <img src={`${import.meta.env.BASE_URL}shreedatha.jpg`} width="720" height="875" alt="Portrait of Shreedatha DS" loading="lazy" decoding="async" />
            <figcaption>Shreedatha DS · Bengaluru</figcaption>
          </Reveal>
          <Reveal as="ol" className="approach" delay={0.15} aria-label="How I approach a project">
            {principles.map(([h, t], i) => (
              <li key={h}>
                <span className="node" aria-hidden="true">{String(i + 1).padStart(2, '0')}</span>
                <div><strong>{h}</strong><span>{t}</span></div>
              </li>
            ))}
          </Reveal>
        </div>
      </div>
    </section>
  )
}

export function Experience() {
  return (
    <section id="experience" className="section band tone-2" aria-labelledby="exp-title">
      <div className="exp-grid">
        <div className="exp-intro">
          <p className="eyebrow">Experience, education &amp; research</p>
          <h2 id="exp-title">Experience</h2>
          <p className="muted">Roles at PES University, listed with the dates as documented in my CV.</p>
        </div>
        <ol className="timeline">
          {experience.map((x, i) => (
            <Reveal as="li" key={x.role} delay={i * 0.1}>
              <p className="dates">{x.dates}</p>
              <h3>{x.role}</h3>
              <p className="org">{x.org}</p>
              <ul>{x.points.map((p) => <li key={p}>{p}</li>)}</ul>
            </Reveal>
          ))}
        </ol>
      </div>

      <div className="split-rule" />
      <div className="cred-grid">
        <div>
          <h3 className="label-h">Education</h3>
          <ul className="edu">
            {education.map((e) => (
              <Reveal as="li" key={e.degree}>
                <span className="years">{e.years}</span>
                <strong>{e.degree}</strong>
                <span className="muted">{e.org}</span>
              </Reveal>
            ))}
          </ul>
        </div>
        <div>
          <h3 className="label-h">Certifications &amp; research</h3>
          <ul className="certs">
            {certifications.map((c) => (
              <li key={c.title} className={c.warn ? 'warn' : ''}>
                <div><strong>{c.title}</strong>{c.by && <span className="muted">{c.by}</span>}</div>
                <span className="badge sm">{c.warn && <FileClock size={12} aria-hidden="true" />} {c.kind}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}

export function Skills() {
  return (
    <section id="skills" className="section band" aria-labelledby="skills-title">
      <div className="section-head split">
        <div>
          <p className="eyebrow">Toolkit</p>
          <h2 id="skills-title">Technical Skills</h2>
        </div>
        <p className="statement">Grouped by what I use them for, with no self-assigned proficiency scores.</p>
      </div>
      <dl className="taxonomy">
        {skills.map(([group, items], i) => (
          <Reveal key={group} className="tax-row" delay={Math.min(i * 0.05, 0.3)}>
            <dt><span>{String(i + 1).padStart(2, '0')}</span>{group}</dt>
            <dd><ul>{items.map((it) => <li key={it}>{it}</li>)}</ul></dd>
          </Reveal>
        ))}
      </dl>
    </section>
  )
}

export function Contact() {
  return (
    <section id="contact" className="section band contact" aria-labelledby="contact-title">
      <div className="moon-glow" aria-hidden="true" />
      <Reveal>
        <p className="eyebrow">Contact</p>
        <h2 id="contact-title">Hiring for data science, ML or analytics? <em>Let's talk.</em></h2>
        <p className="lead">I'm open to Data Scientist, Machine Learning Engineer, Data Analyst and applied AI roles, in any industry. Email is the quickest way to reach me.</p>
        <a className="mail-link" href={`mailto:${profile.email}`}><Mail size={26} aria-hidden="true" /> {profile.email} <ArrowUpRight size={22} aria-hidden="true" /></a>
        <div className="btn-row">
          <a className="btn btn-ghost" href={profile.linkedin} target="_blank" rel="noreferrer"><Linkedin size={16} aria-hidden="true" /> LinkedIn</a>
          <a className="btn btn-ghost" href={profile.github} target="_blank" rel="noreferrer"><Github size={16} aria-hidden="true" /> GitHub</a>
          {profile.cv && <a className="btn btn-ghost" href={profile.cv} download><Download size={16} aria-hidden="true" /> Download CV</a>}
        </div>
      </Reveal>
    </section>
  )
}

export function Footer() {
  return (
    <footer className="footer">
      <p>© {new Date().getFullYear()} Shreedatha DS · {profile.location}</p>
      <p className="muted">Built with React and Vite. Gemstone artwork is original SVG; demos are labelled illustrative.</p>
    </footer>
  )
}
