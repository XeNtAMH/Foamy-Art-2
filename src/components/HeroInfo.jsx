function HeroInfo({ businessInfo }) {
  // Se espera `public/portada.png` como imagen de portada.
  // El hero ocupa la parte superior (full viewport) y el contenido se superpone al desplazarse.
  return (
    <section className="hero-section hero-full" aria-label="Portada">
      <img src='public/portada.png'></img>
    </section>
  )
}

export default HeroInfo
