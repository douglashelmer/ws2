import { useReveal } from '../hooks/useReveal'

const CTA = 'https://pay.onprofit.com.br/vM8DxayZ?off=PDtgMr&utm_source=organic'

export default function Guarantee() {
  const wrapRef = useReveal()

  return (
    <section className="sec sec-dark">
      <div className="garantia-wrap reveal" ref={wrapRef}>
        <div className="garantia-badge" aria-hidden="true">7</div>
        <div className="garantia-eyebrow">Garantia incondicional</div>
        <h2 className="garantia-title">7 dias.<br />Risco zero.</h2>
        <p className="garantia-desc">
          Assista o workshop ao vivo. Se em 7 dias você não estiver 100% satisfeito — por qualquer motivo — devolvemos R$19 sem perguntas. Você literalmente não tem nada a perder.
        </p>
        <a href={CTA} className="btn-solid">Garantir meu acesso agora</a>
      </div>
    </section>
  )
}
