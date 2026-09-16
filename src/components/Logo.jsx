function Logo({ businessInfo}) {
    return(
    <div className="hero-copy">
    <p className="eyebrow">Manualidades en foamy</p>
    <h1>{businessInfo.name}</h1>
        <div className="hero-visual">
        <img src={businessInfo.logo} alt={businessInfo.name} />
        </div>
        <p className="hero-description">{businessInfo.description1}</p>
    <p className="hero-description">{businessInfo.description2}</p>
    <p className="hero-description">{businessInfo.description3}</p>
    <p className="hero-description">{businessInfo.description4}</p>
        <a href="https://wa.me/5354472028" target="_blank" rel="noopener noreferrer" aria-label="Enviar WhatsApp al +53 54472028" class="contact-whatsapp">📲 Contáctanos por Whatsapp: +53 54472028 (SANTA CLARA)</a>
        <h3>Desliza hacia abajo para ver TODOS los articulos disponibles</h3>
        <p>⏬⏬⏬⏬⏬</p>
    </div>
    
    )
}

export default Logo