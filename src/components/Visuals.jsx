// Original SVG gemstone artwork and decorative project illustrations.
// Shapes are abstract and decorative; they are not plotted data.

const poly = (pts) => pts.map((p) => p.join(',')).join(' ')

/* ---------- Hero: faceted amethyst with embedded sapphire facets, moonstones and a data network ---------- */

const P = { P1: [215, 130], P2: [385, 130], P3: [470, 225], P4: [300, 470], P5: [130, 225], T1: [240, 165], T2: [360, 165], G1: [250, 225], G2: [350, 225], Q: [270, 323], Q2: [330, 323] }
const facets = [
  ['P5 P1 T1', 'aMid'], ['P1 P2 T2 T1', 'aPale'], ['P2 P3 T2', 'aLight'], ['P5 T1 G1', 'aDark'],
  ['T1 T2 G2 G1', 'aMid2'], ['T2 P3 G2', 'aDark'], ['P5 G1 Q', 'aMid'], ['P5 Q P4', 'sDeep'],
  ['G1 G2 Q2 Q', 'aLight'], ['Q Q2 P4', 'aDark'], ['P3 G2 Q2', 'sLight'], ['P3 Q2 P4', 'aMid'],
].map(([k, g]) => [k.split(' ').map((n) => P[n]), g])

function MiniSapphire({ x, y, s = 1, id }) {
  const pts = (arr) => poly(arr.map(([a, b]) => [x + a * s, y + b * s]))
  return (
    <g className="gem-float" style={{ animationDelay: id === 'a' ? '-3s' : '-6s' }}>
      <polygon points={pts([[0, -34], [-26, 0], [0, 0]])} fill="url(#hs-light)" />
      <polygon points={pts([[0, -34], [26, 0], [0, 0]])} fill="url(#hs-mid)" />
      <polygon points={pts([[-26, 0], [0, 0], [0, 46]])} fill="url(#hs-deep)" />
      <polygon points={pts([[26, 0], [0, 0], [0, 46]])} fill="url(#hs-edge)" />
      <polygon points={pts([[0, -34], [26, 0], [0, 46], [-26, 0]])} fill="none" stroke="#B8D8FF" strokeOpacity=".6" strokeWidth=".8" />
    </g>
  )
}

function Moon({ cx, cy, r }) {
  return (
    <g className="moon">
      <circle cx={cx} cy={cy} r={r * 2.1} fill="url(#hm-halo)" />
      <circle cx={cx} cy={cy} r={r} fill="url(#hm-body)" stroke="#F6F5FF" strokeOpacity=".5" strokeWidth=".8" />
      <ellipse cx={cx - r * 0.25} cy={cy + r * 0.2} rx={r * 0.75} ry={r * 0.45} fill="url(#hm-sheen)" className="moon-sheen" />
      <ellipse cx={cx - r * 0.38} cy={cy - r * 0.4} rx={r * 0.28} ry={r * 0.14} fill="#fff" opacity=".7" transform={`rotate(-30 ${cx - r * 0.38} ${cy - r * 0.4})`} />
    </g>
  )
}

export function HeroVisual() {
  const edges = [
    [P.P5, [96, 170]], [P.P2, [480, 150]], [P.P3, [510, 195]], [P.P4, [520, 430]], [P.P4, [90, 420]], [P.P5, [90, 420]], [P.P1, [96, 170]],
  ]
  return (
    <svg className="hero-visual" viewBox="0 0 600 580" role="img" aria-label="Original illustration of a faceted amethyst gemstone with embedded sapphire facets, two moonstones and a fine network of data points">
      <defs>
        <radialGradient id="h-glow-a" cx=".5" cy=".5" r=".5"><stop offset="0" stopColor="#8B5CF6" stopOpacity=".5" /><stop offset=".55" stopColor="#552583" stopOpacity=".18" /><stop offset="1" stopColor="#552583" stopOpacity="0" /></radialGradient>
        <radialGradient id="h-glow-s" cx=".5" cy=".5" r=".5"><stop offset="0" stopColor="#285BC5" stopOpacity=".45" /><stop offset="1" stopColor="#285BC5" stopOpacity="0" /></radialGradient>
        <linearGradient id="aDark" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stopColor="#2A1050" /><stop offset="1" stopColor="#552583" /></linearGradient>
        <linearGradient id="aMid" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stopColor="#552583" /><stop offset="1" stopColor="#8B5CF6" /></linearGradient>
        <linearGradient id="aMid2" x1="1" y1="0" x2="0" y2="1"><stop offset="0" stopColor="#7347C8" /><stop offset="1" stopColor="#3C1B66" /></linearGradient>
        <linearGradient id="aLight" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stopColor="#8B5CF6" /><stop offset="1" stopColor="#B99AFF" /></linearGradient>
        <linearGradient id="aPale" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stopColor="#B99AFF" /><stop offset="1" stopColor="#E4D8FF" /></linearGradient>
        <linearGradient id="sDeep" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stopColor="#07152E" /><stop offset="1" stopColor="#285BC5" /></linearGradient>
        <linearGradient id="sLight" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stopColor="#153E8A" /><stop offset="1" stopColor="#6495FF" /></linearGradient>
        <linearGradient id="hs-light" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stopColor="#B8D8FF" /><stop offset="1" stopColor="#6495FF" /></linearGradient>
        <linearGradient id="hs-mid" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stopColor="#6495FF" /><stop offset="1" stopColor="#285BC5" /></linearGradient>
        <linearGradient id="hs-deep" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stopColor="#285BC5" /><stop offset="1" stopColor="#07152E" /></linearGradient>
        <linearGradient id="hs-edge" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stopColor="#153E8A" /><stop offset="1" stopColor="#07152E" /></linearGradient>
        <radialGradient id="hm-body" cx=".35" cy=".3" r=".8"><stop offset="0" stopColor="#F6F5FF" /><stop offset=".4" stopColor="#E7DCFF" /><stop offset=".75" stopColor="#C6BEDC" /><stop offset="1" stopColor="#8F84AD" /></radialGradient>
        <radialGradient id="hm-sheen" cx=".5" cy=".5" r=".5"><stop offset="0" stopColor="#C8E5FF" stopOpacity=".95" /><stop offset=".6" stopColor="#6495FF" stopOpacity=".25" /><stop offset="1" stopColor="#EBD5F5" stopOpacity="0" /></radialGradient>
        <radialGradient id="hm-halo" cx=".5" cy=".5" r=".5"><stop offset="0" stopColor="#C8E5FF" stopOpacity=".28" /><stop offset="1" stopColor="#C8E5FF" stopOpacity="0" /></radialGradient>
        <linearGradient id="h-sheen" x1="0" y1="0" x2="1" y2="0"><stop offset="0" stopColor="#fff" stopOpacity="0" /><stop offset=".5" stopColor="#fff" stopOpacity=".55" /><stop offset="1" stopColor="#fff" stopOpacity="0" /></linearGradient>
        <clipPath id="gem-clip"><polygon points={poly([P.P1, P.P2, P.P3, P.P4, P.P5])} /></clipPath>
      </defs>

      <circle className="breathe" cx="300" cy="300" r="290" fill="url(#h-glow-a)" />
      <circle className="breathe slow" cx="500" cy="420" r="150" fill="url(#h-glow-s)" />

      {/* data fragments */}
      <g className="frag">
        <text x="28" y="508">FORECAST</text>
        <polyline className="draw" pathLength="1" points="28,556 62,540 92,548 126,524 160,530 196,508" />
        <text x="420" y="64">RANK</text>
        {[0, 1, 2, 3].map((i) => <rect key={i} x={420 + i * 18} y={74 + (3 - i) * 6} width="10" height={30 - (3 - i) * 6} rx="2" />)}
        <text x="400" y="548">VALIDATE</text>
        <line x1="400" x2="540" y1="558" y2="558" />
      </g>

      {/* network */}
      <g className="net">
        {edges.map(([a, b], i) => <line key={i} x1={a[0]} y1={a[1]} x2={b[0]} y2={b[1]} />)}
        {edges.map(([a, b], i) => <line key={'f' + i} className="flow" style={{ animationDelay: `${-i * 1.3}s` }} x1={a[0]} y1={a[1]} x2={b[0]} y2={b[1]} />)}
        {[[168, 170], [420, 130], [400, 300], [200, 430], [440, 340]].map(([x, y], i) => <circle key={i} className="pt" cx={x} cy={y} r="2.6" style={{ animationDelay: `${-i * 1.1}s` }} />)}
      </g>

      <ellipse cx="300" cy="522" rx="150" ry="12" fill="url(#h-glow-a)" opacity=".9" className="gem-shadow" />

      <g className="gem-float">
        {facets.map(([pts, g], i) => <polygon key={i} points={poly(pts)} fill={`url(#${g})`} stroke="#E4D8FF" strokeOpacity=".38" strokeWidth=".8" strokeLinejoin="round" />)}
        <polygon points={poly([P.P1, P.P2, P.P3, P.P4, P.P5])} fill="none" stroke="#E4D8FF" strokeOpacity=".7" strokeWidth="1.2" strokeLinejoin="round" />
        <line x1="130" y1="225" x2="470" y2="225" stroke="#fff" strokeOpacity=".35" />
        <g clipPath="url(#gem-clip)"><rect className="sweep" x="-160" y="110" width="150" height="380" fill="url(#h-sheen)" transform="skewX(-18)" /></g>
        <circle cx="262" cy="148" r="2.2" fill="#fff" />
      </g>

      <MiniSapphire x={510} y={150} s={1} id="a" />
      <MiniSapphire x={90} y={418} s={.7} id="b" />
      <Moon cx={96} cy={170} r={34} />
      <Moon cx={520} cy={436} r={22} />
    </svg>
  )
}

/* ---------- Project illustrations ---------- */

const frame = (kind, children, label) => (
  <svg className="p-visual vis" viewBox="0 0 320 190" role="img" aria-label={label}>
    <defs>
      <linearGradient id={`${kind}-band`} x1="0" y1="0" x2="0" y2="1"><stop offset="0" stopColor="#C8E5FF" stopOpacity=".3" /><stop offset="1" stopColor="#8B5CF6" stopOpacity=".05" /></linearGradient>
      <linearGradient id={`${kind}-line`} x1="0" y1="0" x2="1" y2="0"><stop offset="0" stopColor="#8B5CF6" /><stop offset="1" stopColor="#6495FF" /></linearGradient>
      <radialGradient id={`${kind}-moon`} cx=".35" cy=".3" r=".8"><stop offset="0" stopColor="#F6F5FF" /><stop offset=".5" stopColor="#E7DCFF" /><stop offset="1" stopColor="#C6BEDC" /></radialGradient>
      <radialGradient id={`${kind}-bg`} cx=".8" cy="0" r="1"><stop offset="0" stopColor="#285BC5" stopOpacity=".22" /><stop offset="1" stopColor="#285BC5" stopOpacity="0" /></radialGradient>
    </defs>
    <rect x=".5" y=".5" width="319" height="189" rx="14" className="v-frame" />
    <rect x=".5" y=".5" width="319" height="189" rx="14" fill={`url(#${kind}-bg)`} />
    {children}
    <text x="14" y="180" className="v-label">ILLUSTRATION · NOT PLOTTED DATA</text>
  </svg>
)

const visuals = {
  forecast: () => frame('fc',
    <>
      <g className="v-grid">{[40, 80, 120].map((y) => <line key={y} x1="14" x2="306" y1={y} y2={y} />)}</g>
      <path d="M16 118 C46 104 66 126 96 110 S140 92 172 96 L172 120 C140 124 120 134 96 132 S44 144 16 138Z" className="v-hist-band" />
      <path className="v-line-soft draw" pathLength="1" d="M16 128 C46 112 66 132 96 118 S140 102 172 106" />
      <path d="M172 106 C196 98 214 78 244 74 S290 58 306 50 L306 120 C290 112 268 126 244 122 S196 130 172 126Z" fill="url(#fc-band)" />
      <path className="v-line-blue draw d2" pathLength="1" d="M172 106 C196 96 214 84 244 80 S290 66 306 58" />
      <line x1="172" x2="172" y1="24" y2="150" className="v-split" />
      <text x="178" y="36" className="v-label">42-DAY FORECAST</text>
    </>, 'Decorative illustration: a forecast line with a translucent uncertainty band'),

  recsys: () => frame('rs',
    <>
      {[34, 64, 94, 124, 154].map((y, i) => <circle key={'c' + y} cx="40" cy={y} r="5" className="v-node" opacity={0.5 + i * 0.1} />)}
      {[44, 84, 124].map((y) => <rect key={y} x="130" y={y - 9} width="22" height="18" rx="5" className="v-chip" />)}
      {[[34,44],[64,44],[94,84],[124,84],[154,124],[64,124],[34,84]].map(([a, b], i) => <line key={i} x1="45" y1={a} x2="130" y2={b} className="v-edge" />)}
      {[[44, 40],[84, 84],[124, 128]].map(([y, y2], i) => <path key={i} className="v-line-blue draw" pathLength="1" style={{ animationDelay: `${.4 + i * .25}s` }} d={`M152 ${y} C200 ${y} 210 ${y2} 258 ${y2}`} />)}
      {[40, 84, 128].map((y, i) => <circle key={y} cx="268" cy={y} r={i === 1 ? 11 : 8} fill={i === 1 ? 'url(#rs-moon)' : 'none'} className={i === 1 ? 'v-moon' : 'v-node on'} />)}
      <text x="258" y="28" className="v-label">RANKED</text>
      <text x="26" y="22" className="v-label">CANDIDATES</text>
    </>, 'Decorative illustration: candidate items flowing through a ranking stage'),

  elasticity: () => frame('el',
    <>
      <g className="v-grid">{[40, 80, 120].map((y) => <line key={y} x1="30" x2="306" y1={y} y2={y} />)}</g>
      <path d="M30 40 C80 52 120 92 180 118 S270 138 306 144 L306 112 C270 112 230 108 180 92 S80 52 30 40Z" fill="url(#el-band)" />
      <path className="v-line draw" pathLength="1" d="M30 44 C80 62 120 102 180 122 S270 134 306 140" />
      <path className="v-line-dash" d="M30 44 C80 54 130 80 190 98 S270 120 306 126" />
      <circle cx="180" cy="116" r="5" className="v-node on" />
      <line x1="30" x2="30" y1="24" y2="152" className="v-axis" /><line x1="30" x2="306" y1="152" y2="152" className="v-axis" />
      <text x="212" y="34" className="v-label">SCENARIO · DASHED</text>
    </>, 'Decorative illustration: a downward price-response curve with an uncertainty region'),

  segments: () => frame('sg',
    <>
      {[[[70,70],[110,54],[96,100],[58,108],[128,92]], [[210,120],[240,98],[262,132],[226,148]], [[250,42],[282,60],[268,30]]].map((c, ci) => (
        <g key={ci}>
          {c.map((p, i) => c.slice(i + 1).map((q, j) => <line key={i + '-' + j} x1={p[0]} y1={p[1]} x2={q[0]} y2={q[1]} className="v-edge" />))}
          {c.map(([x, y], i) => ci === 0 && i === 0
            ? <circle key={i} cx={x} cy={y} r="13" fill="url(#sg-moon)" className="v-moon" />
            : <circle key={i} cx={x} cy={y} r={ci === 1 ? 6 : 4.5} className={ci === 0 ? 'v-node on' : 'v-node'} />)}
        </g>
      ))}
      <ellipse cx="94" cy="84" rx="56" ry="46" className="v-ring" /><ellipse cx="236" cy="124" rx="46" ry="36" className="v-ring" />
      <line x1="128" y1="92" x2="210" y2="120" className="v-line-blue draw" pathLength="1" />
    </>, 'Decorative illustration: interconnected customer segments'),

  agent: () => frame('ag',
    <>
      <rect x="20" y="28" width="280" height="102" rx="10" className="v-console" />
      {['classify', 'generate', 'validate', 'execute', 'answer'].map((t, i) => (
        <g key={t}>
          <circle cx={46 + i * 57} cy="62" r="7" className={i === 2 ? 'v-node moon-on' : i === 4 ? 'v-node on' : 'v-node'} />
          {i < 4 && <line x1={55 + i * 57} x2={94 + i * 57} y1="62" y2="62" className="v-line-blue draw" pathLength="1" style={{ animationDelay: `${.3 + i * .25}s` }} />}
          <text x={46 + i * 57} y="86" textAnchor="middle" className="v-label">{t}</text>
        </g>
      ))}
      <rect x="36" y="100" width="150" height="6" rx="3" className="v-bar" /><rect x="36" y="112" width="96" height="6" rx="3" className="v-bar" />
    </>, 'Decorative illustration: a five-stage workflow console'),
}

export function ProjectVisual({ kind }) {
  return (visuals[kind] || visuals.forecast)()
}
