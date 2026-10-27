import { useCallback, useEffect, useRef, useState } from 'react'
import { ArrowUpRight, Github, X } from 'lucide-react'
import { categories, projects } from '../data/projects'
import { ProjectVisual } from './Visuals'
import Reveal from './Reveal'

function Modal({ project, onClose }) {
  const closeRef = useRef(null)
  const panelRef = useRef(null)

  useEffect(() => {
    const prev = document.activeElement
    const scrollY = window.scrollY
    document.body.classList.add('modal-open')
    closeRef.current?.focus()
    const onKey = (e) => {
      if (e.key === 'Escape') return onClose()
      if (e.key !== 'Tab') return
      const f = panelRef.current.querySelectorAll('a[href],button')
      const first = f[0], last = f[f.length - 1]
      if (e.shiftKey && document.activeElement === first) { e.preventDefault(); last.focus() }
      else if (!e.shiftKey && document.activeElement === last) { e.preventDefault(); first.focus() }
    }
    document.addEventListener('keydown', onKey)
    return () => {
      document.removeEventListener('keydown', onKey)
      document.body.classList.remove('modal-open')
      window.scrollTo(0, scrollY)
      prev?.focus?.()
    }
  }, [onClose])

  const s = project.study
  const List = ({ items }) => <ul>{items.map((t) => <li key={t}>{t}</li>)}</ul>
  const sections = [
    ['Problem statement', <p>{s.problem}</p>],
    ['Dataset and scope', <p>{s.dataset}</p>],
    ['Approach and architecture', <List items={s.approach} />],
    ['Technical implementation', <List items={s.implementation} />],
    ['Evaluation and documented results', <List items={s.results} />],
    ['Limitations and lessons learned', <List items={s.limitations} />],
    ['Technologies used', <ul className="tags">{project.tags.map((t) => <li key={t}>{t}</li>)}</ul>],
    ['GitHub repository link', <p><a href={project.repo} target="_blank" rel="noreferrer">{project.repo.replace('https://', '')} <ArrowUpRight size={14} aria-hidden="true" /></a></p>],
  ]

  return (
    <div className="modal-backdrop" onMouseDown={(e) => e.target === e.currentTarget && onClose()}>
      <div className="modal" role="dialog" aria-modal="true" aria-labelledby="cs-title" ref={panelRef}>
        <button ref={closeRef} className="modal-close" onClick={onClose} aria-label="Close case study"><X size={20} /></button>
        <p className="eyebrow">Case study {project.index} · {project.category}</p>
        <h3 id="cs-title">{project.title}</h3>
        <p className="muted">{project.subtitle}</p>
        <div className="modal-metrics">
          {project.metrics.map(([v, l]) => <div key={l}><strong>{v}</strong><span>{l}</span></div>)}
        </div>
        {sections.map(([h, body], i) => (
          <section key={h} className="cs-sec">
            <h4><span>{i + 1}</span>{h}</h4>
            {body}
          </section>
        ))}
        <p className="fineprint">Written from the author's project summaries. Repository contents were not independently reviewed for this page.</p>
      </div>
    </div>
  )
}

function Card({ p, feature, onOpen }) {
  return (
    <Reveal as="article" className={'project' + (feature ? ' feature' : '')} aria-labelledby={`t-${p.id}`}>
      <div className="project-art"><ProjectVisual kind={p.visual} /></div>
      <div className="project-body">
        <p className="eyebrow">{p.index} · {p.category}{feature && p.featured ? ' · Featured' : ''}</p>
        <h3 id={`t-${p.id}`}>{p.title}</h3>
        <p className="muted sub">{p.subtitle}</p>
        <p className="summary">{p.summary}</p>
        <dl className="metrics">
          {p.metrics.slice(0, feature ? 5 : 3).map(([v, l]) => <div key={l}><dt>{l}</dt><dd>{v}</dd></div>)}
        </dl>
        <ul className="tags" aria-label="Technologies">{p.tags.map((t) => <li key={t}>{t}</li>)}</ul>
        <div className="btn-row">
          <button className="btn btn-primary btn-sm" onClick={() => onOpen(p.id)} aria-haspopup="dialog">Explore case study <ArrowUpRight size={15} aria-hidden="true" /></button>
          <a className="btn btn-ghost btn-sm" href={p.repo} target="_blank" rel="noreferrer"><Github size={15} aria-hidden="true" /> Repository</a>
          {feature && p.id === 'agentic' && <a className="btn btn-ghost btn-sm" href="#playground">Try the scripted demo</a>}
        </div>
      </div>
    </Reveal>
  )
}

export default function Projects() {
  const [cat, setCat] = useState('All')
  const [openId, setOpenId] = useState(null)
  const filtered = projects.filter((p) => cat === 'All' || p.category === cat)
  const shown = [...filtered].sort((a, b) => Number(!!b.featured) - Number(!!a.featured))
  const open = projects.find((p) => p.id === openId)
  const close = useCallback(() => setOpenId(null), [])

  return (
    <section id="projects" className="section band tone-2" aria-labelledby="projects-title">
      <div className="section-head split">
        <div>
          <p className="eyebrow">Selected work · 05</p>
          <h2 id="projects-title">Projects</h2>
        </div>
        <p className="statement">Each one states its evaluation protocol, the baseline it had to beat, and where it falls short.</p>
      </div>
      <div className="filters" role="group" aria-label="Filter projects by category">
        {categories.map((c) => (
          <button key={c} className={'chip' + (cat === c ? ' on' : '')} aria-pressed={cat === c} onClick={() => setCat(c)}>{c}</button>
        ))}
      </div>
      <p className="sr-only" aria-live="polite">{shown.length} project{shown.length === 1 ? '' : 's'} shown</p>
      <div className="project-stage" key={cat}>
        {shown[0] && <Card p={shown[0]} feature onOpen={setOpenId} />}
        {shown.length > 1 && (
          <div className="project-grid">
            {shown.slice(1).map((p) => <Card key={p.id} p={p} onOpen={setOpenId} />)}
          </div>
        )}
      </div>
      {open && <Modal project={open} onClose={close} />}
    </section>
  )
}
