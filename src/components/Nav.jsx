import { useEffect, useState } from 'react'
import { Menu, X, Mail } from 'lucide-react'

export const links = [
  ['home', 'Home'],
  ['projects', 'Projects'],
  ['playground', 'Interactive Playground'],
  ['about', 'About'],
  ['experience', 'Experience'],
  ['skills', 'Skills'],
  ['contact', 'Contact'],
]

export default function Nav() {
  const [open, setOpen] = useState(false)
  const [active, setActive] = useState('home')

  useEffect(() => {
    const obs = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && setActive(e.target.id)),
      { rootMargin: '-45% 0px -50% 0px' },
    )
    links.forEach(([id]) => {
      const el = document.getElementById(id)
      if (el) obs.observe(el)
    })
    return () => obs.disconnect()
  }, [])

  useEffect(() => {
    const onKey = (e) => e.key === 'Escape' && setOpen(false)
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [])

  return (
    <header className="nav">
      <div className="nav-inner">
        <a href="#home" className="brand" aria-label="Shreedatha DS, home">
          <span className="brand-mark">SD</span>
          <span className="brand-name">Shreedatha DS</span>
        </a>
        <nav id="site-nav" aria-label="Primary" className={open ? 'open' : ''}>
          <ul>
            {links.filter(([id]) => id !== 'contact').map(([id, label]) => (
              <li key={id}>
                <a href={`#${id}`} aria-current={active === id ? 'true' : undefined} onClick={() => setOpen(false)}>{label}</a>
              </li>
            ))}
            <li className="nav-cta-li">
              <a href="#contact" className="btn btn-primary btn-sm" onClick={() => setOpen(false)}><Mail size={15} aria-hidden="true" /> Contact</a>
            </li>
          </ul>
        </nav>
        <button className="nav-toggle" aria-expanded={open} aria-controls="site-nav" aria-label={open ? 'Close menu' : 'Open menu'} onClick={() => setOpen(!open)}>
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>
    </header>
  )
}
