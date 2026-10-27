import { ArrowDown, Download, Mail, Github, Linkedin } from 'lucide-react'
import { profile } from '../data/profile'
import { HeroVisual } from './Visuals'

export default function Hero() {
  return (
    <section id="home" className="hero" aria-labelledby="hero-title">
      <div className="hero-copy">
        <p className="eyebrow">Data science · Machine learning · Retail &amp; customer analytics</p>
        <h1 id="hero-title">Turning messy data into <em>better decisions.</em></h1>
        <p className="lead">
          I'm Shreedatha — a data science and analytics postgraduate building practical machine-learning systems for customer intelligence, retail decisions, and safer AI-powered analytics.
        </p>
        <div className="btn-row">
          <a className="btn btn-primary" href="#projects"><ArrowDown size={16} aria-hidden="true" /> Explore Projects</a>
          {profile.cv && <a className="btn btn-ghost" href={profile.cv} download><Download size={16} aria-hidden="true" /> Download CV</a>}
          <a className="btn btn-ghost" href="#contact"><Mail size={16} aria-hidden="true" /> Contact Me</a>
        </div>
        <ul className="social" aria-label="Profiles">
          <li><a href={profile.github} target="_blank" rel="noreferrer" aria-label="GitHub (opens in new tab)"><Github size={18} /></a></li>
          <li><a href={profile.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn (opens in new tab)"><Linkedin size={18} /></a></li>
          <li><a href={`mailto:${profile.email}`} aria-label="Email"><Mail size={18} /></a></li>
          <li className="loc">{profile.location}</li>
        </ul>
      </div>
      <div className="hero-art">
        <div className="hero-art-shell">
          <div className="hero-art-topline">
            <span><i className="specimen-dot" aria-hidden="true" /> SPECIMEN / 001</span>
            <span>DATA IN MOTION</span>
          </div>
          <div className="hero-art-stage">
            <span className="art-coordinate art-coordinate-a" aria-hidden="true">AM–01</span>
            <HeroVisual />
            <span className="art-coordinate art-coordinate-b" aria-hidden="true">FORM / SIGNAL / INSIGHT</span>
          </div>
          <div className="gemstone-key" role="group" aria-label="Portfolio signature palette: amethyst, blue sapphire and moonstone">
            <span className="gem-key-item amethyst"><i aria-hidden="true" /><span>Amethyst</span><small>IDENTITY</small></span>
            <span className="gem-key-item sapphire"><i aria-hidden="true" /><span>Blue sapphire</span><small>DEPTH</small></span>
            <span className="gem-key-item moonstone"><i aria-hidden="true" /><span>Moonstone</span><small>CLARITY</small></span>
          </div>
        </div>
      </div>
      <dl className="hero-index" aria-label="Portfolio at a glance">
        <div><dt>Case studies</dt><dd>05</dd></div>
        <div><dt>Interactive demos</dt><dd>02</dd></div>
        <div><dt>Focus</dt><dd>Retail · Customers · Agentic AI</dd></div>
      </dl>
    </section>
  )
}
