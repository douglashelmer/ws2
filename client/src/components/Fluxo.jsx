import { useReveal } from '../hooks/useReveal'

const STEPS = [
  { n: '1', icon: '🧠', title: 'Conceito com IA',      desc: 'Claude gera o conceito criativo completo — nome, paleta, direção de arte — automaticamente, sem linha de código.', tag: 'Claude IA' },
  { n: '2', icon: '🎨', title: 'Visual do Produto',    desc: 'Embalagens e rótulos criados com prompts especializados e IA generativa em minutos.', tag: 'Nano Banana' },
  { n: '3', icon: '⬡',  title: 'Modelagem 3D',         desc: 'Produto 100% manipulável no Blender com consistência garantida em qualquer ângulo ou campanha.', tag: 'Blender 3D' },
  { n: '4', icon: '▷',  title: 'Packshots com IA',     desc: 'Imagens fotorrealistas, variações de cenário e animações gerados em fração do tempo tradicional.', tag: 'Nano Banana + IA' },
]

export default function Fluxo() {
  const eyebrowRef = useReveal()
  const titleRef = useReveal()
  const metaRef = useReveal()
  const stepsRef = useReveal()

  return (
    <section className="sec">
      <div style={{ maxWidth: 1100, margin: '0 auto' }}>
        <div className="fluxo-grid reveal" ref={metaRef}>
          <div>
            <div className="fluxo-eyebrow">O que você vai dominar no dia 16 de Maio</div>
            <h2 className="fluxo-title">
              O <span>Fluxo 3D + IA</span><br />que reduz trabalho<br />de dias para minutos
            </h2>
            <p className="fluxo-body">
              No workshop você aprende na prática como o Claude controla o Blender, gera arquivos e toma decisões criativas enquanto você apenas dá as instruções. Sem código. Sem configuração complexa. Sem experiência prévia.
            </p>
            <ul className="fluxo-checks">
              <li>Automatiza etapas repetitivas do workflow 3D</li>
              <li>Gera variações de produto em segundos</li>
              <li>Aplica texturas e iluminação com precisão profissional</li>
              <li>Funciona com Blender — que é completamente gratuito</li>
              <li>Do zero ao portfólio em 1 dia intensivo ao vivo</li>
            </ul>
          </div>
          <div className="fluxo-metric-card">
            <div className="fluxo-metric-header">Antes vs Depois</div>
            <div className="fluxo-metric-row">
              <span className="fluxo-metric-label">Método Antigo</span>
              <span className="fluxo-metric-val">3–4 dias</span>
            </div>
            <div className="fluxo-metric-row">
              <span className="fluxo-metric-label">Com Fluxo 3D + IA</span>
              <span className="fluxo-metric-val">13 minutos</span>
            </div>
            <div className="fluxo-metric-row">
              <span className="fluxo-metric-label">Custo de Estúdio</span>
              <span className="fluxo-metric-val muted">R$ 2.500</span>
            </div>
            <div className="fluxo-metric-row">
              <span className="fluxo-metric-label">Custo com IA</span>
              <span className="fluxo-metric-val">R$ 0</span>
            </div>
            <div className="fluxo-metric-row">
              <span className="fluxo-metric-label">Ferramentas</span>
              <span className="fluxo-metric-val" style={{ fontSize: 12 }}>Blender + Nano Banana + Claude</span>
            </div>
          </div>
        </div>

        <div className="sec-eyebrow reveal" ref={eyebrowRef} style={{ marginTop: 72 }}>Nenhum outro curso ensina isso</div>
        <h2 className="sec-title reveal" ref={titleRef} style={{ marginBottom: 32 }}>O Fluxo em <span style={{ color: 'var(--orange)' }}>4 Etapas</span></h2>
        <div className="steps reveal" ref={stepsRef}>
          {STEPS.map(s => (
            <div className="step-card" key={s.n}>
              <div className="step-n">{s.n}</div>
              <div className="step-icon-wrap">{s.icon}</div>
              <h3>{s.title}</h3>
              <p>{s.desc}</p>
              <span className="step-tag">{s.tag}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
