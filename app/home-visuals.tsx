type ResearchVisualProps = {
  slug: string;
};

export function InformationField() {
  const columns = Array.from({ length: 10 }, (_, index) => 42 + index * 58);
  const rows = Array.from({ length: 8 }, (_, index) => 46 + index * 58);
  const bits = ["1", "0", "1", "1", "0", "0", "1", "0", "1", "1", "1", "0"];

  return (
    <div className="information-field" aria-hidden="true">
      <div className="field-toolbar">
        <span>CHANNEL / 01</span>
        <span className="field-live"><i /> LIVE MODEL</span>
      </div>
      <svg viewBox="0 0 620 510" role="presentation">
        <defs>
          <linearGradient id="signal-gradient" x1="0" x2="1">
            <stop offset="0" stopColor="#8c1515" />
            <stop offset="1" stopColor="#334155" />
          </linearGradient>
          <filter id="soft-glow" x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur stdDeviation="10" />
          </filter>
        </defs>

        <g className="field-grid">
          {columns.map((x) => <line x1={x} x2={x} y1="24" y2="486" key={`x-${x}`} />)}
          {rows.map((y) => <line x1="22" x2="598" y1={y} y2={y} key={`y-${y}`} />)}
        </g>

        <circle className="field-orbit field-orbit-one" cx="310" cy="255" r="168" />
        <circle className="field-orbit field-orbit-two" cx="310" cy="255" r="112" />
        <circle className="field-glow" cx="310" cy="255" r="76" filter="url(#soft-glow)" />

        <g className="field-bits">
          {bits.map((bit, index) => {
            const angle = (index / bits.length) * Math.PI * 2 - Math.PI / 2;
            const x = 310 + Math.cos(angle) * 168;
            const y = 255 + Math.sin(angle) * 168;
            return <text x={x} y={y} key={`${bit}-${index}`}>{bit}</text>;
          })}
        </g>

        <path
          className="field-signal"
          d="M52 348 C112 348 124 176 184 176 S256 358 310 310 S378 126 430 188 S506 348 572 244"
        />
        <circle className="signal-packet packet-one" cx="52" cy="348" r="6" />
        <circle className="signal-packet packet-two" cx="52" cy="348" r="6" />

        <g className="field-core">
          <rect x="234" y="205" width="152" height="100" rx="8" />
          <text className="field-core-kicker" x="310" y="237">ENCODE</text>
          <text className="field-core-equation" x="310" y="274">X → Z → X̂</text>
          <path d="M260 288 H360" />
        </g>

        <g className="field-coordinate">
          <text x="42" y="32">RAW SIGNAL</text>
          <text x="491" y="484">SUFFICIENT / Z</text>
        </g>
      </svg>
      <div className="field-caption">
        <span>H(X) = −Σ p(x) log p(x)</span>
        <span>bits → meaning</span>
      </div>
    </div>
  );
}

export function ResearchVisual({ slug }: ResearchVisualProps) {
  if (slug === "universal-information") {
    return (
      <svg className="research-visual research-visual-lz" viewBox="0 0 560 260" aria-hidden="true">
        <g className="visual-rule-grid">
          {Array.from({ length: 8 }, (_, i) => <line key={i} x1={54 + i * 64} x2={54 + i * 64} y1="30" y2="230" />)}
        </g>
        <text className="visual-label" x="34" y="34">INFINITE SEQUENCE</text>
        <g className="lz-bits">
          {"010011010110".split("").map((bit, index) => (
            <g key={index} style={{ "--i": index } as React.CSSProperties}>
              <rect x={34 + index * 41} y="82" width="32" height="42" rx="5" />
              <text x={50 + index * 41} y="109">{bit}</text>
            </g>
          ))}
        </g>
        <path className="lz-brace" d="M34 146 V162 H107 V146 M116 146 V178 H230 V146 M239 146 V194 H394 V146 M403 146 V210 H526 V146" />
        <g className="visual-small-labels">
          <text x="56" y="181">0</text><text x="164" y="197">10</text>
          <text x="306" y="213">011</text><text x="453" y="229">010</text>
        </g>
      </svg>
    );
  }

  if (slug === "information-computation") {
    return (
      <svg className="research-visual research-visual-curve" viewBox="0 0 560 260" aria-hidden="true">
        <text className="visual-label" x="34" y="34">ACHIEVABLE REGION</text>
        <path className="curve-axis" d="M54 54 V216 H522" />
        <path className="curve-main" d="M68 74 C145 76 174 95 220 130 C275 172 348 194 510 202" />
        <path className="curve-ghost" d="M68 112 C162 116 208 145 254 169 C320 205 402 215 510 216" />
        <circle className="curve-point" cx="220" cy="130" r="8" />
        <path className="curve-guide" d="M220 130 V216 M54 130 H220" />
        <text className="curve-symbol" x="17" y="63">D</text>
        <text className="curve-symbol" x="506" y="244">R</text>
        <text className="visual-small-labels" x="238" y="116">best operating point</text>
      </svg>
    );
  }

  if (slug === "learning-generation") {
    const nodes = [
      [82, 80], [82, 182], [194, 128], [306, 70], [306, 188], [470, 88], [470, 176],
    ];
    const edges = [[0, 2], [1, 2], [2, 3], [2, 4], [3, 5], [3, 6], [4, 5], [4, 6]];
    return (
      <svg className="research-visual research-visual-network" viewBox="0 0 560 260" aria-hidden="true">
        <text className="visual-label" x="34" y="34">DISCRETE GENERATION</text>
        <g className="network-edges">
          {edges.map(([a, b], index) => (
            <line key={index} x1={nodes[a][0]} y1={nodes[a][1]} x2={nodes[b][0]} y2={nodes[b][1]} />
          ))}
        </g>
        <g className="network-nodes">
          {nodes.map(([x, y], index) => (
            <g key={index} style={{ "--i": index } as React.CSSProperties}>
              <circle cx={x} cy={y} r={index === 2 ? 22 : 14} />
              <text x={x} y={y + 4}>{index % 2}</text>
            </g>
          ))}
        </g>
        <path className="network-flow" d="M82 80 L194 128 L306 188 L470 88" />
      </svg>
    );
  }

  return (
    <svg className="research-visual research-visual-science" viewBox="0 0 560 260" aria-hidden="true">
      <text className="visual-label" x="34" y="34">SIGNAL / BANDWIDTH</text>
      <g className="science-baselines">
        <line x1="34" x2="526" y1="104" y2="104" />
        <line x1="34" x2="526" y1="184" y2="184" />
      </g>
      <path className="science-wave science-wave-one" d="M34 104 H104 L116 101 L124 80 L134 151 L146 54 L158 129 L168 96 L180 104 H526" />
      <path className="science-wave science-wave-two" d="M34 184 H136 L148 179 L158 158 L168 219 L180 134 L192 204 L204 176 L218 184 H526" />
      <g className="science-samples">
        {Array.from({ length: 8 }, (_, i) => <circle key={i} cx={62 + i * 63} cy={104} r="3" />)}
        {Array.from({ length: 8 }, (_, i) => <circle key={i} cx={62 + i * 63} cy={184} r="3" />)}
      </g>
      <text className="visual-small-labels" x="418" y="90">observed</text>
      <text className="visual-small-labels" x="430" y="170">encoded</text>
    </svg>
  );
}

export function PublicationVisual({ index }: { index: number }) {
  const kind = index % 4;
  return (
    <svg className={`publication-visual publication-visual-${kind}`} viewBox="0 0 420 250" aria-hidden="true">
      <rect className="publication-visual-frame" x="18" y="18" width="384" height="214" rx="8" />
      {kind === 0 ? (
        <>
          {Array.from({ length: 18 }, (_, i) => (
            <ellipse
              className="gaussian-dot"
              cx={68 + (i % 6) * 57}
              cy={62 + Math.floor(i / 6) * 62}
              rx={10 + (i % 3) * 5}
              ry={7 + ((i + 1) % 3) * 5}
              key={i}
              style={{ "--i": i } as React.CSSProperties}
            />
          ))}
          <path className="publication-accent" d="M52 203 C128 132 204 196 360 46" />
        </>
      ) : null}
      {kind === 1 ? (
        <>
          <path className="publication-wave" d="M38 130 H83 L94 122 L105 84 L116 184 L128 53 L142 160 L154 114 L168 130 H382" />
          {Array.from({ length: 12 }, (_, i) => <line className="sample-line" x1={47 + i * 30} x2={47 + i * 30} y1="62" y2="198" key={i} />)}
        </>
      ) : null}
      {kind === 2 ? (
        <>
          {Array.from({ length: 7 }, (_, i) => (
            <g className="filter-cell" key={i} style={{ "--i": i } as React.CSSProperties}>
              <rect x={39 + i * 49} y="92" width="38" height="54" rx="5" />
              <text x={58 + i * 49} y="125">{i % 3 === 0 ? "?" : i % 2}</text>
            </g>
          ))}
          <path className="publication-accent" d="M42 177 C100 162 128 205 189 176 S294 151 377 176" />
        </>
      ) : null}
      {kind === 3 ? (
        <>
          <g className="tree-lines">
            <path d="M210 54 L130 112 M210 54 L290 112 M130 112 L82 174 M130 112 L166 174 M290 112 L250 174 M290 112 L338 174" />
          </g>
          {[[210,54],[130,112],[290,112],[82,174],[166,174],[250,174],[338,174]].map(([x,y], i) => (
            <g className="tree-node" key={i}><circle cx={x} cy={y} r="17" /><text x={x} y={y + 4}>{i % 2}</text></g>
          ))}
        </>
      ) : null}
    </svg>
  );
}
