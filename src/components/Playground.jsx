import { useEffect, useRef, useState } from 'react'
import { RotateCcw, Play, Check, Minus, CircleDot } from 'lucide-react'

/* ---------- Demo 1: discount what-if (illustrative) ---------- */

const W = 480, H = 250, PAD = { l: 44, r: 16, t: 16, b: 34 }
const MAX_D = 50

function Simulator() {
  const [d, setD] = useState(15)
  const [e, setE] = useState(-1.5)
  const units = (disc) => Math.pow(1 - disc / 100, e) * 100
  const revenue = (disc) => Math.pow(1 - disc / 100, e + 1) * 100

  const pts = Array.from({ length: MAX_D + 1 }, (_, i) => i)
  const all = pts.flatMap((i) => [units(i), revenue(i)]).concat(100)
  const lo = Math.min(...all, 90), hi = Math.max(...all)
  const x = (v) => PAD.l + (v / MAX_D) * (W - PAD.l - PAD.r)
  const y = (v) => PAD.t + (1 - (v - lo) / (hi - lo)) * (H - PAD.t - PAD.b)
  const path = (fn) => pts.map((i, k) => `${k ? 'L' : 'M'}${x(i).toFixed(1)} ${y(fn(i)).toFixed(1)}`).join(' ')
  const ticks = [lo, (lo + hi) / 2, hi].map((v) => Math.round(v))
  const u = units(d), r = revenue(d)

  return (
    <div className="demo" aria-labelledby="demo1-title" role="group">
      <div className="demo-head">
        <h3 id="demo1-title">Retail discount what-if simulator</h3>
        <span className="badge">Illustrative · not a model result</span>
      </div>
      <p className="muted">
        A textbook constant-elasticity curve, <code>units ∝ (1 − discount)^ε</code>, where <strong>you</strong> choose ε. It does not use any estimate from my price-elasticity project or any dataset.
      </p>
      <div className="demo-grid">
        <div className="controls">
          <label htmlFor="disc">Discount <output className="big" htmlFor="disc">{d}%</output></label>
          <input id="disc" type="range" min="0" max={MAX_D} step="1" value={d} onChange={(ev) => setD(+ev.target.value)} aria-valuetext={`${d} percent discount`} />
          <label htmlFor="elas">Assumed price elasticity (ε) <output className="big" htmlFor="elas">{e.toFixed(1)}</output></label>
          <input id="elas" type="range" min="-3" max="-0.5" step="0.1" value={e} onChange={(ev) => setE(+ev.target.value)} />
          <button className="btn btn-ghost btn-sm" onClick={() => { setD(15); setE(-1.5) }}><RotateCcw size={14} aria-hidden="true" /> Reset</button>
          <dl className="readout" aria-live="polite">
            <div><dt>Units index (no discount = 100)</dt><dd>{u.toFixed(0)}</dd></div>
            <div><dt>Revenue index (no discount = 100)</dt><dd className={r < 100 ? 'neg' : 'pos'}>{r.toFixed(0)}</dd></div>
          </dl>
        </div>
        <figure className="chart">
          <svg viewBox={`0 0 ${W} ${H}`} role="img" aria-label={`Illustrative chart. At a ${d}% discount and assumed elasticity ${e.toFixed(1)}, units index is ${u.toFixed(0)} and revenue index is ${r.toFixed(0)}.`}>
            {ticks.map((t) => (
              <g key={t}><line x1={PAD.l} x2={W - PAD.r} y1={y(t)} y2={y(t)} className="v-grid-l" /><text x={PAD.l - 8} y={y(t) + 4} textAnchor="end" className="v-tick">{t}</text></g>
            ))}
            <line x1={PAD.l} x2={W - PAD.r} y1={y(100)} y2={y(100)} className="v-base" />
            {[0, 10, 20, 30, 40, 50].map((t) => <text key={t} x={x(t)} y={H - 12} textAnchor="middle" className="v-tick">{t}%</text>)}
            <path d={path(units)} className="c-units" fill="none" />
            <path d={path(revenue)} className="c-rev" fill="none" />
            <line x1={x(d)} x2={x(d)} y1={PAD.t} y2={H - PAD.b} className="v-split" />
            <circle cx={x(d)} cy={y(u)} r="5" className="dot-units" />
            <circle cx={x(d)} cy={y(r)} r="5" className="dot-rev" />
          </svg>
          <figcaption>
            <span className="key k-units" /> Units index <span className="key k-rev" /> Revenue index · x-axis: discount depth
          </figcaption>
        </figure>
      </div>
      <p className="fineprint">
        Assumptions: constant elasticity, no cannibalisation, no stock-outs, no cost or margin, no seasonality. Revenue is not profit. Real elasticity in my project was estimated with fixed-effects models on a weekly panel and showed instability over time and sensitivity to missing promotion data.
      </p>
    </div>
  )
}

/* ---------- Demo 2: agentic analytics workflow (scripted demonstration) ---------- */

const STEPS = ['Classify', 'Generate SQL', 'Validate', 'Execute', 'Answer']

// Hand-written demonstration content. The schema below is illustrative and is NOT copied from the repository.
const EXAMPLES = [
  {
    q: 'Which products have the highest repeat-purchase rate?',
    kind: 'answerable',
    classify: 'Answerable: aggregate over sales lines.',
    sql: `SELECT stock_code,\n       COUNT(DISTINCT customer_id) AS buyers,\n       COUNT(DISTINCT CASE WHEN n_orders > 1 THEN customer_id END) * 1.0\n         / COUNT(DISTINCT customer_id) AS repeat_rate\nFROM (\n  SELECT stock_code, customer_id, COUNT(DISTINCT invoice_no) AS n_orders\n  FROM sales\n  GROUP BY stock_code, customer_id\n)\nGROUP BY stock_code\nHAVING buyers >= 20\nORDER BY repeat_rate DESC\nLIMIT 10;`,
    answer: 'A ranked list of products by share of buyers who purchased them on more than one order, with the minimum-buyers threshold stated.',
  },
  {
    q: 'What are the highest-revenue categories?',
    kind: 'clarify',
    classify: 'Needs clarification: the demonstration schema has no category column.',
    answer: 'I can’t rank categories because this dataset has no category field. I can rank by product description or by country instead — which would you like?',
  },
  {
    q: 'How do discounts affect sales?',
    kind: 'refuse',
    classify: 'Unsupported: no discount or promotion data in the demonstration schema.',
    answer: 'I can’t answer that from this database: it holds sales and returns, but no discount or promotion records. Estimating a discount effect needs that data.',
  },
  {
    q: 'Which customers are at risk of not returning?',
    kind: 'answerable',
    classify: 'Answerable if “at risk” is defined; demo uses a stated rule.',
    sql: `SELECT customer_id,\n       COUNT(DISTINCT invoice_no) AS orders,\n       MAX(invoice_date) AS last_purchase\nFROM sales\nGROUP BY customer_id\nHAVING orders >= 5\n   AND last_purchase < DATE('2011-12-09', '-90 days')\nORDER BY orders DESC\nLIMIT 50;`,
    answer: 'A list of frequent customers with no purchase in the last 90 days of the data, with the “at risk” rule stated in the answer.',
  },
]

const CHECKS = ['Single SELECT statement', 'Tables/columns/functions on the allowlist', 'No write or schema-changing operations', 'Row cap applied (LIMIT)']

function Assistant() {
  const [text, setText] = useState('')
  const [run, setRun] = useState(null) // { ex | null, step }
  const timer = useRef(null)
  const reduce = useRef(false)

  useEffect(() => {
    reduce.current = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    return () => clearTimeout(timer.current)
  }, [])

  const start = (question) => {
    const q = question.trim()
    if (!q) return
    clearTimeout(timer.current)
    const ex = EXAMPLES.find((x) => x.q.toLowerCase() === q.toLowerCase()) || null
    const total = ex ? (ex.kind === 'answerable' ? 5 : 2) : 1
    const advance = (step) => {
      setRun({ ex, q, step })
      if (step < total && !reduce.current) timer.current = setTimeout(() => advance(step + 1), 550)
    }
    if (reduce.current) setRun({ ex, q, step: total })
    else advance(1)
  }

  const ex = run?.ex
  const kind = ex?.kind
  const status = (i) => {
    if (!run) return 'idle'
    const n = i + 1
    if (!ex) return n === 1 ? (run.step >= 1 ? 'done' : 'idle') : 'skip'
    if (kind !== 'answerable' && n > 1 && n < 5) return run.step >= 2 ? 'skip' : 'idle'
    if (kind !== 'answerable' && n === 5) return run.step >= 2 ? 'done' : 'idle'
    return run.step >= n ? 'done' : 'idle'
  }
  const finished = run && (!ex ? run.step >= 1 : kind === 'answerable' ? run.step >= 5 : run.step >= 2)

  return (
    <div className="demo console" role="group" aria-labelledby="demo2-title">
      <div className="console-bar" aria-hidden="true"><i /><i /><i /><span>retail-analytics · scripted demonstration</span></div>
      <div className="demo-head">
        <h3 id="demo2-title">Agentic retail analytics interface</h3>
        <span className="badge">Scripted demonstration · nothing is executed</span>
      </div>
      <p className="muted">
        Mirrors the workflow of my <em>Agentic AI Retail Analytics Assistant</em>. This page has no database and calls no LLM: SQL and answers below are hand-written examples against an illustrative schema, not output from the real system.
      </p>
      <form className="ask" onSubmit={(ev) => { ev.preventDefault(); start(text) }}>
        <label htmlFor="q">Ask a retail question</label>
        <div className="ask-row">
          <input id="q" value={text} onChange={(ev) => setText(ev.target.value)} placeholder="Pick an example below or type a question" autoComplete="off" />
          <button className="btn btn-primary" type="submit"><Play size={15} aria-hidden="true" /> Run demo</button>
        </div>
      </form>
      <ul className="examples" aria-label="Example questions">
        {EXAMPLES.map((x) => (
          <li key={x.q}><button type="button" className="chip" onClick={() => { setText(x.q); start(x.q) }}>{x.q}</button></li>
        ))}
      </ul>

      <ol className="steps" aria-label="Workflow steps">
        {STEPS.map((s, i) => {
          const st = status(i)
          return (
            <li key={s} className={'step ' + st}>
              <span className="step-ico" aria-hidden="true">{st === 'done' ? <Check size={14} /> : st === 'skip' ? <Minus size={14} /> : <CircleDot size={14} />}</span>
              <span>{s}</span>
              <span className="sr-only">{st === 'done' ? ' (done)' : st === 'skip' ? ' (skipped)' : ''}</span>
            </li>
          )
        })}
      </ol>

      <div className="out" aria-live="polite">
        {!run && <p className="muted">Choose an example to step through the workflow.</p>}
        {run && !ex && run.step >= 1 && (
          <div className="panel"><h4>Classify</h4><p>This demo only knows the four example questions, so it stops here. The real assistant classifies any question and generates SQL or refuses; this page does not.</p></div>
        )}
        {run && ex && (
          <>
            <div className="panel"><h4>Classify</h4><p>{ex.classify}</p></div>
            {kind === 'answerable' && run.step >= 2 && <div className="panel"><h4>Generate SQL <span className="badge sm">example</span></h4><pre><code>{ex.sql}</code></pre></div>}
            {kind === 'answerable' && run.step >= 3 && (
              <div className="panel"><h4>Validate <span className="badge sm">checks the real system layers, shown as a list</span></h4>
                <ul className="checks">{CHECKS.map((c) => <li key={c}><Check size={14} aria-hidden="true" /> {c}</li>)}</ul></div>
            )}
            {kind === 'answerable' && run.step >= 4 && <div className="panel"><h4>Execute</h4><p className="muted">Not run. No database is attached to this page.</p></div>}
            {finished && <div className="panel answer"><h4>Answer preview <span className="badge sm">demonstration</span></h4><p>{ex.answer}</p>{kind === 'answerable' && <p className="muted">Revenue definition (net/gross) would be stated here. No result rows are shown because nothing was executed.</p>}</div>}
          </>
        )}
      </div>
      <p className="fineprint">Documented results of the real project (from its own test sets): 108/108 unsafe queries blocked, 98/98 legitimate queries accepted, 37/37 answerable and 22/23 refusal/clarification cases correct on a 60-question evaluation.</p>
    </div>
  )
}

export default function Playground() {
  return (
    <section id="playground" className="section band" aria-labelledby="pg-title">
      <div className="section-head split">
        <div>
          <p className="eyebrow">Try it · frontend demos</p>
          <h2 id="pg-title">Interactive Playground</h2>
        </div>
        <p className="statement">Two small demonstrations that run entirely in your browser. Both are labelled as illustrative, and neither calls a model or a database.</p>
      </div>
      <Simulator />
      <Assistant />
    </section>
  )
}
