import ProductCard from './ProductCard'

function Section({ section }) {
  return (
    <section className="catalog-section" id={section.id}>
      <div className="section-header">
        <div>
          <p className="section-badge">Colección</p>
          <h2>{section.title}</h2>
        </div>
        <p>{section.description}</p>
      </div>

      {section.image && (
        <div className="section-visual">
          <img className="section-image" src={section.image} alt={`${section.title} preview`} />
        </div>
      )}

      <div className="product-grid">
        {section.items.map((item) => (
          <ProductCard key={item.id} item={item} />
        ))}
      </div>
    </section>
  )
}

export default Section
