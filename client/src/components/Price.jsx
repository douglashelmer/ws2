import { useReveal } from '../hooks/useReveal'

const CTA = 'https://pay.onprofit.com.br/vM8DxayZ?off=PDtgMr&utm_source=organic'

const ITEMS = [
  'Acesso ao vivo no dia do workshop',
  'Suporte no chat durante o evento ao vivo',
  'Materiais, arquivos de projeto e recursos',
  'Garantia de 7 dias',
]

export default function Price() {
  const leftRef  = useReveal()
  const rightRef = useReveal()

  return (
    <section className="sec price-sec" id="preco">

      <h2 className="sec-title price-sec-title">Invista no seu<br />próximo nível</h2>
      <p className="sec-eyebrow price-sec-sub">
        1 dia ao vivo para dominar o fluxo que muda sua carreira
      </p>

      <div className="price-cols">

        <div className="price-compare reveal" ref={leftRef}>
          <div className="pc-head">
            <span className="pc-head-icon" aria-hidden="true">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/>
              </svg>
            </span>
            <div>
              <div className="pc-head-title">Economia de Tempo</div>
              <div className="pc-head-sub">Compare os resultados</div>
            </div>
          </div>

          <div className="pc-bars">
            <div className="pc-bar-row">
              <div className="pc-bar-meta">
                <span className="pc-bar-label">Fluxo Tradicional</span>
                <span className="pc-bar-hours pc-bar-hours--red">4 DIAS</span>
              </div>
              <div className="pc-bar-track">
                <div className="pc-bar pc-bar--red" style={{ width: '100%' }} />
              </div>
            </div>

            <div className="pc-lightning" aria-hidden="true">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/>
              </svg>
            </div>

            <div className="pc-bar-row">
              <div className="pc-bar-meta">
                <span className="pc-bar-label">Fluxo 3D + IA</span>
                <span className="pc-bar-hours pc-bar-hours--orange">13 MIN</span>
              </div>
              <div className="pc-bar-track">
                <div className="pc-bar pc-bar--orange" style={{ width: '1%' }} />
              </div>
            </div>
          </div>

          <div className="pc-footer">
            Entregue projetos <strong>99% mais rápido</strong>
          </div>
        </div>

        <div className="price-card reveal" ref={rightRef}>
          <div className="pcard-badge">93% OFF</div>

          <div className="pcard-formacao">Workshop ao Vivo</div>
          <div className="pcard-logo" style={{ fontSize: '1.4rem', letterSpacing: '.05em' }}>
            3D + IA EM 1 DIA
          </div>

          <p className="pcard-de">De R$ 297</p>
          <p className="pcard-por">Por apenas</p>
          <div className="pcard-price"><sup>R$</sup>19</div>

          <ul className="pcard-list">
            {ITEMS.map(i => (
              <li key={i}>
                <span className="pcard-check" aria-hidden="true">
                  <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                    <path d="M2 6l3 3 5-5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </span>
                {i}
              </li>
            ))}
          </ul>

          <a href={CTA} className="btn-cta-big">
            Garantir Minha Vaga Agora <span aria-hidden="true">✦</span>
          </a>
          <p className="pcard-secure">🔒 Pagamento 100% seguro • Garantia de 7 dias</p>
        </div>

      </div>
    </section>
  )
}
