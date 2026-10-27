import { useEffect, useRef } from 'react'

// Adds `.in` when the element scrolls into view. Each instance observes itself,
// so elements mounted later (e.g. after a project filter change) still appear.
export default function Reveal({ as: Tag = 'div', className = '', delay = 0, children, ...rest }) {
  const ref = useRef(null)
  useEffect(() => {
    const el = ref.current
    if (!el) return
    if (!('IntersectionObserver' in window)) { el.classList.add('in'); return }
    const obs = new IntersectionObserver(([e]) => {
      if (e.isIntersecting) { el.classList.add('in'); obs.disconnect() }
    }, { threshold: 0.12 })
    obs.observe(el)
    return () => obs.disconnect()
  }, [])
  return <Tag ref={ref} className={`reveal ${className}`} style={{ '--d': `${delay}s` }} {...rest}>{children}</Tag>
}
