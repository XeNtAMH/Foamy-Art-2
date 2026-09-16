function CategoryNav({ categories, selected, onSelect }) {
  return (
    <nav className="category-nav" aria-label="Categorías del catálogo">
      {categories.map((category) => (
        <button
          key={category.id}
          type="button"
          className={selected === category.id ? 'nav-button active' : 'nav-button'}
          onClick={() => onSelect(category.id)}
        >
          {category.title}
        </button>
      ))}
    </nav>
  )
}

export default CategoryNav
