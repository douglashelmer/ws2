const CTA = 'https://pay.onprofit.com.br/vM8DxayZ?off=PDtgMr&utm_source=organic'

export default function FinalCTA() {
  return (
    <section className="final-cta">
      <div className="sec-eyebrow">Vagas limitadas</div>
      <h2 className="final-title">Sua carreira criativa<br /><span className="hl">começa em 1 dia</span></h2>
      <p className="final-sub">Junte-se a designers que já criam produtos premium em tempo recorde com 3D + IA. Workshop ao vivo — 16 de Maio.</p>
      <a href={CTA} className="btn-final">GARANTIR MINHA VAGA — R$19</a>
      <p style={{ marginTop: 12, fontSize: '0.8rem', opacity: 0.4 }}>🔒 Pagamento seguro · Garantia de 7 dias · Vagas esgotando</p>
    </section>
  )
}
