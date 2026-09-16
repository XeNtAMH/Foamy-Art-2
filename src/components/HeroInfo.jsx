function HeroInfo({ businessInfo }) {
  // Se espera `public/portada.png` como imagen de portada.
  // El hero ocupa la parte superior (full viewport) y el contenido se superpone al desplazarse.
  return (
    <section className="hero-section hero-full" aria-label="Portada">
      <div className="hero-overlay">
      </div>
      <div className="hero-copy">
        <p className="eyebrow">Manualidades en foamy</p>
        <h1>Diseños artesanales con personalidad</h1>
        <p className="hero-description">{businessInfo.description}</p>
      </div>
      <div className="hero-visual">
        <img src={businessInfo.logo} alt={businessInfo.name} />
      </div>
    </section>
  )
}

export default HeroInfo
