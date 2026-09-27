import ProductCard from './ProductCard'

function Section({ section, onProductSelect }) {
  return (
    <section className="catalog-section" id={section.id}>
      <div className="section-header">
        <div>
          <p className="section-badge">Colección</p>
          <h2>{section.title}</h2>
        </div>

      {section.image && (
        <div className="section-visual">
          <img className="section-image" src={section.image} alt={`${section.title} preview`} />
        </div>
      )}


        <div className='section-description'>
        <p>{section.description}</p>
        </div>
      </div>

      

      <div className="product-grid">
        {section.items.map((item) => (
          <ProductCard key={item.id} item={item} onSelect={onProductSelect} />
        ))}
      </div>
    </section>
  )
}

export default Section
