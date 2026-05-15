import { useRef, useEffect, useState, lazy, Suspense } from 'react'

const Carousel = lazy(() => import('./Carousel'))
const Ticker   = lazy(() => import('./Ticker'))

const PHRASES = [
  'USANDO NANO BANANA + CLAUDE CODE',
  'SEM GASTAR R$1 COM FERRAMENTAS',
  'COM O NOVO FLUXO 3D + IA',
  'USANDO BLENDER 3D DO ZERO',
  'DO BRIEFING AO PACKSHOT EM MINUTOS',
  'COM FERRAMENTAS 100% GRATUITAS',
]

function useTypewriter(phrases) {
  const [text, setText] = useState(phrases[0])
  const state = useRef({ phrase: 0, char: phrases[0].length, deleting: false })
  const timer = useRef(null)

  useEffect(() => {
    const tick = () => {
      const s = state.current
      const current = phrases[s.phrase]
      if (!s.deleting) {
        if (s.char < current.length) {
          s.char++
          setText(current.slice(0, s.char))
          timer.current = setTimeout(tick, 45 + Math.random() * 30)
        } else {
          s.deleting = true
          timer.current = setTimeout(tick, 2200)
        }
      } else {
        if (s.char > 0) {
          s.char--
          setText(current.slice(0, s.char))
          timer.current = setTimeout(tick, 22 + Math.random() * 15)
        } else {
          s.deleting = false
          s.phrase = (s.phrase + 1) % phrases.length
          timer.current = setTimeout(tick, 300)
        }
      }
    }
    timer.current = setTimeout(tick, 1800)
    return () => clearTimeout(timer.current)
  }, [phrases])

  return text
}

export default function Hero() {
  const videoRef = useRef(null)
  const barText = useTypewriter(PHRASES)

  useEffect(() => {
    if (window.innerWidth > 768 && videoRef.current) {
      videoRef.current.src = '/images/video-hero.mp4'
      videoRef.current.load()
    }
  }, [])

  return (
    <section className="hero">
      <div className="hero-canvas-wrap">

        <video
          ref={videoRef}
          id="hero-canvas"
          className="hero-video-desk"
          autoPlay
          muted
          loop
          playsInline
          preload="none"
          aria-hidden="true"
        />

        <img
          id="hero-canvas-mob"
          className="hero-video-mob"
          src="/images/imagem-mobi-2.webp"
          aria-hidden="true"
          fetchPriority="high"
          alt=""
        />

        <div className="hero-overlay">

          <div className="hero-badge">
            <span className="hero-badge-icon" aria-hidden="true">🪐</span>
            3D + NANO BANANA + CLAUDE CODE: O NOVO FLUXO PARA CRIAR PROJETOS 3D EM MINUTOS SEM GASTAR 1 REAL
          </div>

          <h1 className="hero-title">
            DO ZERO AO PROFISSIONAL —{' '}
            <br />
            <span className="orange">{barText}</span>
            <span style={{ display: 'inline-block', width: 3, height: '0.75em', background: 'var(--orange)', marginLeft: 3, verticalAlign: 'middle', animation: 'cursor-blink .75s step-end infinite' }} />
          </h1>

          <p className="hero-sub" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 8, flexWrap: 'wrap' }}>
            <span>16 de Maio</span>
            <span style={{ opacity: 0.4 }}>·</span>
            <span>Online e ao Vivo no Zoom</span>
          </p>

          <div className="hero-btns">
            <a href="#preco" className="hero-cta-btn">GARANTIR MINHA VAGA AGORA <span className="hero-cta-icon">✦</span></a>
          </div>

          {/* Progress bar */}
          <div style={{ marginTop: 16, width: '100%', maxWidth: 400, marginLeft: 'auto', marginRight: 'auto' }}>
            <div style={{ display: 'flex', alignItems: 'baseline', justifyContent: 'center', gap: 6, marginBottom: 10, fontSize: '0.9rem' }}>
              <span style={{ opacity: 0.5, textDecoration: 'line-through' }}>de R$497</span>
              <span style={{ opacity: 0.7 }}>por apenas</span>
              <strong className="orange" style={{ fontSize: '1.1rem' }}>R$19</strong>
            </div>
            <div style={{ height: 14, borderRadius: 999, overflow: 'hidden', background: 'rgba(255,255,255,.1)' }}>
              <div style={{
                height: '100%',
                width: '97%',
                borderRadius: 999,
                background: 'linear-gradient(to right, #c8d400, #f97316, #ef4444)',
              }} />
            </div>
            <div style={{ marginTop: 8, fontSize: '0.7rem', fontFamily: 'Chakra Petch, sans-serif', fontWeight: 700, letterSpacing: '.1em', color: 'rgba(255,255,255,.55)', textAlign: 'center' }}>
              97% DAS VAGAS PREENCHIDAS
            </div>
          </div>

        </div>

        <div className="hero-stats" role="list" aria-label="Métricas do workshop">
          {[
            { num: '1',    label: 'Dia ao Vivo' },
            { num: '90%',  label: 'Menos Tempo' },
            { num: 'R$19', label: 'Investimento' },
          ].map(s => (
            <div className="hero-stat" key={s.label} role="listitem">
              <div className="hero-stat-num">{s.num}</div>
              <div className="hero-stat-label">{s.label}</div>
            </div>
          ))}
        </div>
      </div>
      <Suspense fallback={null}>
        <Carousel />
        <Ticker />
      </Suspense>
    </section>
  )
}
