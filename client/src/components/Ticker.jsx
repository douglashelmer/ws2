const ITEMS = ['BLENDER 3D','NANO BANANA','CLAUDE IA','PRODUCT RENDERING','WORKSHOP AO VIVO','PACKSHOTS PROFISSIONAIS','3D + INTELIGÊNCIA ARTIFICIAL','1 DIA INTENSIVO']

export default function Ticker() {
  const doubled = [...ITEMS, ...ITEMS]
  return (
    <div className="ticker">
      <div className="t-track">
        {doubled.map((item, i) => (
          <span className="t-item" key={i}>
            <span className="t-dot" />{item}
          </span>
        ))}
      </div>
    </div>
  )
}
