export default function Footer() {
  return (
    <footer>
      <div className="logo" style={{ fontSize: 18 }}>
        WORKSHOP <span className="orange">3D + IA</span>
      </div>
      <div className="footer-copy">© 2025 Douglas Helmer — Todos os direitos reservados</div>
      <div className="footer-copy" style={{ fontSize: '0.7rem', opacity: 0.5, marginTop: 8, maxWidth: 480, margin: '8px auto 0' }}>
        Este workshop não garante resultados específicos. Resultados variam conforme dedicação e esforço individual.
      </div>
    </footer>
  )
}
