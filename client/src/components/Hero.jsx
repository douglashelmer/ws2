import { useRef, useEffect, lazy, Suspense } from 'react'

const Carousel = lazy(() => import('./Carousel'))
const Ticker   = lazy(() => import('./Ticker'))

export default function Hero() {
  const videoRef = useRef(null)

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
            <span className="orange">USANDO FERRAMENTAS</span>{' '}
            100% GRATUITAS
          </h1>

          <p className="hero-sub" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 8, flexWrap: 'wrap' }}>
            <span>16 de Maio</span>
            <span style={{ opacity: 0.4 }}>·</span>
            <span>Online e ao Vivo no Zoom</span>
          </p>

          <div className="hero-btns">
            <a href="#preco" className="hero-cta-btn">GARANTIR MINHA VAGA AGORA <span className="hero-cta-icon">✦</span></a>
          </div>

          <div style={{ marginTop: 12, fontSize: '0.85rem', opacity: 0.6 }}>
            De R$497 por <strong className="orange">R$19</strong>
          </div>

          <div style={{ marginTop: 8, display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 6, fontSize: '0.8rem', color: '#00c851', fontWeight: 600 }}>
            <span style={{ width: 7, height: 7, borderRadius: '50%', background: '#00c851', display: 'inline-block' }} />
            Apenas 7 vagas restantes — 97% DAS VAGAS PREENCHIDAS
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
