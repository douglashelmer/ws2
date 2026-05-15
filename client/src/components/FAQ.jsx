import { useState } from 'react'
import { useReveal } from '../hooks/useReveal'

const ITEMS = [
  { q: 'Preciso saber 3D ou design para participar?', a: 'Não. O workshop começa do zero absoluto. Vamos do setup das ferramentas ao produto final em 1 dia, passo a passo ao vivo.' },
  { q: 'Vou ter acesso às gravações?', a: 'Sim. As gravações ficam disponíveis por 7 dias após o evento para você rever o conteúdo no seu ritmo.' },
  { q: 'Em qual plataforma acontece o workshop?', a: 'O workshop acontece ao vivo em plataforma de streaming. Você receberá o link de acesso por e-mail após a confirmação do pagamento.' },
  { q: 'Que tipo de computador preciso?', a: 'Qualquer notebook ou desktop com pelo menos 8GB de RAM. O Blender é gratuito e a renderização com IA é feita na nuvem.' },
  { q: 'E se eu não puder assistir ao vivo?', a: 'Recomendamos assistir ao vivo para aproveitar o suporte no chat em tempo real com Douglas.' },
  { q: 'Como funciona a garantia?', a: 'Garantia de 7 dias. Se por qualquer motivo você não ficar satisfeito, devolvemos R$19 sem perguntas.' },
]

export default function FAQ() {
  const [open, setOpen] = useState(null)
  const eyebrowRef = useReveal()
  const titleRef = useReveal()
  const listRef = useReveal()

  return (
    <section className="sec">
      <div className="sec-eyebrow reveal" ref={eyebrowRef} style={{ justifyContent: 'center' }}>Tire suas dúvidas</div>
      <h2 className="sec-title reveal" ref={titleRef} style={{ textAlign: 'center', margin: '0 auto 48px' }}>Perguntas<br />frequentes.</h2>
      <div className="faq-list reveal" ref={listRef}>
        {ITEMS.map((item, i) => (
          <div className={`faq-item${open === i ? ' open' : ''}`} key={i}>
            <button className="faq-q" onClick={() => setOpen(open === i ? null : i)}>
              {item.q}
              <span className="faq-icon">{open === i ? '−' : '+'}</span>
            </button>
            <div className="faq-a">{item.a}</div>
          </div>
        ))}
      </div>
    </section>
  )
}
