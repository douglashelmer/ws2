import { useReveal } from '../hooks/useReveal'

const MODS = [
  {
    img: '/images/module-iapro.webp',
    eyebrow: 'BLOCO 1 — DIA 1',
    title: 'Conceito com IA',
    desc: 'Do briefing ao visual completo em minutos. Claude gera nome, paleta de cores, direção de arte e rótulo sem você abrir o Illustrator.',
    badge: '→ CLAUDE IA',
  },
  {
    img: '/images/HikBCU6skVoY2KNgjojuKIXeH4.webp',
    eyebrow: 'BLOCO 2 — DIA 1',
    title: 'Blender 3D do Zero',
    desc: 'Modelagem do produto, aplicação de rótulos e criação do produto 3D mestre — a base consistente para toda campanha.',
    badge: '→ BLENDER',
  },
  {
    img: '/images/DroToGdSZcZsGneYv9FaDkk9E2I.webp',
    eyebrow: 'BLOCO 3 — DIA 2',
    title: 'A Ponte 3D → IA',
    desc: 'O módulo exclusivo: como usar o render do Blender como base controlada para a IA gerar fotorrealismo absoluto.',
    badge: '→ EXCLUSIVO',
  },
  {
    img: '/images/UQTVDjpNTmOONz0YxNzEMDAPDH8.webp',
    eyebrow: 'BLOCO 4 — DIA 2',
    title: 'Packshots e Portfólio',
    desc: 'Variações ilimitadas de cenário, luz e ambientação. Entrega profissional e precificação do seu trabalho.',
    badge: '→ RESULTADO',
  },
]

export default function Modules() {
  const eyebrowRef = useReveal()
  const titleRef = useReveal()
  const listRef = useReveal()

  return (
    <section className="sec sec-alt" id="fluxo">
      <div className="sec-eyebrow reveal" ref={eyebrowRef}>O que você aprende no workshop</div>
      <h2 className="sec-title reveal" ref={titleRef}>Conteúdo direto ao ponto<br />em 4 blocos práticos.</h2>
      <div className="modules-list reveal" ref={listRef}>
        {MODS.map(m => (
          <div className="mod-row" key={m.title}>
            <img className="mod-img" src={m.img} alt="" loading="lazy" />
            <div className="mod-body">
              <div className="mod-eyebrow">{m.eyebrow}</div>
              <div className="mod-title">{m.title}</div>
              <div className="mod-desc">{m.desc}</div>
              <span className="mod-badge">{m.badge}</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
