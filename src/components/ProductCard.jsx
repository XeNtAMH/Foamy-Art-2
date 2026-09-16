function ProductCard({ item }) {
  return (
    <article className="product-card">
      <img src={item.image} alt={item.name} />
      <div className="product-body">
        <div className="product-meta">
          <h3>{item.name}</h3>
          <span className="price-tag">{item.price}</span>
        </div>
        <p>{item.description}</p>
      </div>
    </article>
  )
}

export default ProductCard
