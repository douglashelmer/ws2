import { useReveal } from '../hooks/useReveal'

const MEDOS = [
  {
    n: '01',
    titulo: '"Não sei nada de 3D."',
    crenca: '"Nunca abri o Blender. Vou me perder nas primeiras horas do workshop."',
    realidade: 'O workshop começa do zero absoluto. Em 2 horas você já tem um produto 3D na tela. O fluxo com IA cobre a parte técnica — você foca no resultado.',
  },
  {
    n: '02',
    titulo: '"Meu computador não aguenta."',
    crenca: '"Preciso de um PC top de linha para rodar Blender e IA. Sem isso nem começo."',
    realidade: 'Blender roda em qualquer notebook intermediário. A renderização é feita via IA na nuvem. Sem instalação pesada, sem travar.',
  },
  {
    n: '03',
    titulo: '"1 dia é muito pouco."',
    crenca: '"Aprender 3D + IA em 1 dia é impossível. Vou sair sem saber nada."',
    realidade: 'O workshop é focado no fluxo que funciona hoje. Em 1 dia você sai com produto 3D criado, packshot gerado e portfólio para mostrar ao cliente.',
  },
  {
    n: '04',
    titulo: '"A IA vai me substituir."',
    crenca: '"Se a IA já faz imagem sozinha, não precisam mais de mim."',
    realidade: 'IA pura não entrega consistência de marca. 3D+IA é o único fluxo com 99% de fidelidade. Quem domina isso cobra mais, não menos.',
  },
  {
    n: '05',
    titulo: '"R$19 parece barato demais."',
    crenca: '"Se é barato assim, deve ser conteúdo raso sem valor real."',
    realidade: 'É uma estratégia de acesso. O conteúdo é o mesmo fluxo profissional que geramos resultados de R$15k de projeto. Você vai entender o porquê ao vivo.',
  },
]

export default function Medos() {
  const eyebrowRef = useReveal()
  const titleRef = useReveal()
  const gridRef = useReveal()

  return (
    <section className="sec">
      <div className="sec-eyebrow reveal" ref={eyebrowRef}>O que trava quem ainda não decidiu</div>
      <h2 className="sec-title reveal" ref={titleRef}>Os 5 medos de quem<br />ainda não clicou.</h2>
      <div className="medos-grid reveal" ref={gridRef}>
        {MEDOS.map(m => (
          <div className="medo-card" key={m.n}>
            <div className="medo-num">MEDO {m.n}</div>
            <div className="medo-title">{m.titulo}</div>
            <div className="medo-divider" aria-hidden="true" />
            <div className="medo-label">A crença</div>
            <div className="medo-crenca">{m.crenca}</div>
            <div className="medo-label">A realidade</div>
            <p className="medo-realidade">{m.realidade}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
