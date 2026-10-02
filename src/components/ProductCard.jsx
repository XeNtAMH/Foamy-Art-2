function ProductCard({ item, onSelect }) {
  return (
    <article
      className="product-card"
      role="button"
      tabIndex={0}
      aria-haspopup="dialog"
      aria-label={`Ver imagen ampliada de ${item.name}`}
      onClick={() => onSelect(item)}
      onKeyDown={(event) => {
        if (event.key === 'Enter' || event.key === ' ') {
          event.preventDefault()
          onSelect(item)
        }
      }}
    >
      <img src={item.image} alt={item.name} />
      <div className="product-body">
        <div className="product-meta">
          <h3>{item.name}</h3>
          <span className="price-tag">{item.price}</span>
        </div>
        <div className="tip">Toque la imagen para expandirla</div>
        <p>{item.description}</p>
      </div>
    </article>
  )
}

export default ProductCard
