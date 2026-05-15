import { useReveal } from '../hooks/useReveal'

const CTA = 'https://pay.onprofit.com.br/vM8DxayZ?off=PDtgMr&utm_source=organic'

const HORARIOS = [
  { time: '9h',    label: 'Abertura' },
  { time: '12h',   label: 'Almoço' },
  { time: '13h',   label: 'Retorno' },
  { time: '17h30', label: 'Encerramento' },
]

export default function Programacao() {
  const eyebrowRef = useReveal()
  const titleRef   = useReveal()
  const gridRef    = useReveal()
  const ctaRef     = useReveal()

  return (
    <section className="sec">
      <div className="sec-eyebrow reveal" ref={eyebrowRef} style={{ justifyContent: 'center' }}>Programação do Evento</div>
      <h2 className="sec-title reveal" ref={titleRef} style={{ textAlign: 'center' }}>
        9h às 17h30 —<br /><span style={{ color: 'var(--orange)' }}>16 de Maio</span>
      </h2>
      <div className="reveal" ref={gridRef} style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(4, 1fr)',
        gap: 16,
        maxWidth: 640,
        margin: '0 auto 40px',
      }}>
        {HORARIOS.map(h => (
          <div key={h.time} style={{
            background: 'var(--card)',
            border: '1px solid rgba(255,255,255,.08)',
            borderRadius: 12,
            padding: '20px 12px',
            textAlign: 'center',
          }}>
            <div style={{ fontFamily: 'Bebas Neue, sans-serif', fontSize: '1.8rem', color: 'var(--orange)', letterSpacing: '.04em' }}>{h.time}</div>
            <div style={{ fontFamily: 'Chakra Petch, sans-serif', fontSize: '.6rem', color: 'rgba(255,255,255,.4)', letterSpacing: '.1em', marginTop: 2, textTransform: 'uppercase' }}>{h.label}</div>
          </div>
        ))}
      </div>
      <div className="reveal" ref={ctaRef} style={{ textAlign: 'center' }}>
        <a href={CTA} className="btn-solid">QUERO PARTICIPAR — R$19</a>
      </div>
    </section>
  )
}
