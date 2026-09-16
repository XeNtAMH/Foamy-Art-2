function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-brand">
        <p>Siguenos en nuestras redes sociales</p>
      </div>
      <div className="social-links" aria-label="Redes sociales">
        <a className="social-link" href="https://wa.me/5491112345678" target="_blank" rel="noreferrer">
          <img src="/social/whatsapp.svg" alt="WhatsApp" className="social-icon" />
          <span>WhatsApp</span>
        </a>
        <a className="social-link" href="https://instagram.com" target="_blank" rel="noreferrer">
          <img src="/social/instagram.svg" alt="Instagram" className="social-icon" />
          <span>Instagram</span>
        </a>
        <a className="social-link" href="https://facebook.com" target="_blank" rel="noreferrer">
          <img src="/social/facebook.svg" alt="Facebook" className="social-icon" />
          <span>Facebook</span>
        </a>
        <a className="social-link" href="mailto:hola@arteinfoamy.com">
          <img src="/social/mail.svg" alt="Email" className="social-icon" />
          <span>hola@arteinfoamy.com</span>
        </a>
      </div>
    </footer>
  )
}

export default Footer
